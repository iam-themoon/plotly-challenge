




// function that populates the metadata
function demoInfo(sample)
{
    console.log(sample);

    // use d3.json in order to get the data
    d3.json("samples.json").then((data) => {
        // grab all of the metadata
        let metaData = data.metadata;
        // console.log(metaData);

        // filter based on the value of the sample (should return 1 result in an array based on the dataset)
        let result = metaData.filter(sampleResult => sampleResult.id == sample);
        // console.log(result);

        // access index 0 from the array
        let resultData = result[0];
        // console.log(resultData);

        // clear the metadata out
        d3.select("#sample-metadata").html("");

        // use Object.entries to get the value key pairs
        Object.entries(resultData).forEach(([key, value]) => {
            // add to the sample data / demographics section
            d3.select("#sample-metadata")
                .append("h5").text(`${key}: ${value}`);
        });
    });
}

// function that builds the bar chart
function buildBarChart(sample)
{
    // console.log(sample);
    // let data = d3.json("samples.json");
    // console.log(data);

    // use d3.json in order to get the data
    d3.json("samples.json").then((data) => {
        // grab all of the samples
        let sampleData = data.samples;
        console.log(sampleData);

        // filter based on the value of the sample (should return 1 result in an array based on the dataset)
        let result = sampleData.filter(sampleResult => sampleResult.id == sample);
        // console.log(result);

        /*
        // access index 0 from the array
        let resultData = result[0];
        // console.log(resultData);

        // clear the metadata out
        d3.select("#sample-metadata").html("");

        // use Object.entries to get the value key pairs
        Object.entries(resultData).forEach(([key, value]) => {
            // add to the sample data / demographics section
            d3.select("#sample-metadata")
                .append("h5").text(`${key}: ${value}`);
        });
        */
    });

}

// function that initializes the dashboard
function initialize()
{

    let data = d3.json("samples.json");
    // console.log(data);

    // access the dropdown selector from the index.html file
    var select = d3.select("#selDataset");

    // use d3.json in order to get the data
    d3.json("samples.json").then((data) => {
        // make an array of just the name
        let sampleNames = data.names;
        // console.log(sampleNames);

        // use a foreach in order to create options for each sample in the selector
        sampleNames.forEach((sample) => {
            select.append("option")
                .text(sample)
                .property("value", sample);
        });
        
        // when initialized, pass in the information for the first sample
        let sample1 = sampleNames[0];

        // call the function to build the metadata
        demoInfo(sample1);

        // call function to build the bar chart
        buildBarChart(sample1);
    });
}

// function that updates the dashboard
function optionChanged(item)
{
    // call the update to the metadata
    demoInfo(item);

    // call function to build the bar chart
    buildBarChart(item)
}

// call the initialize function
initialize();