


// function that updates the dashboard

// function that populates the metadata

// function that builds the graph

// function that initializes the dashboard
function initialize()
{
    // laod the data from the .json file
    let data = d3.json("samples.json");
    console.log(data);
}

// call the initialize function
initialize();