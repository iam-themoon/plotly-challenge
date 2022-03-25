# plotly-challenge
Repository for HW 14 - Interactive Web Visualizations! 

# Thank you to Dr. Arrington for the walkthrough on this project!

In this assignment we will build an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

## app.js

* In this file we will build the background code that will collect and functionally utilize the data in our `samples.json`.
* All the functions within will connect to our `index.html` file that will display the webpage

### demoInfo
* Use D3 to read in `samples.json`
* Grab the metadata and filter based off of id
* Grab the index 0 item of the array
* Clear the metadata so it does not stack every time a new id is selected
* Use Objecct.entries to grab the key/value pairs
    - For each pair, add the corresponding metadata to the demographics section

### buildBarChart
* Use D3 to read in `samples.json`
* Grab all of the samples and filter on id
* Grab the index 0 item of the array
* Grab the otu_ids, labels, and sample_values
* Then build the bar chart
    - Define Y values as the otu_ids
    - Define X values as the sample_values
    - Define the labels as the otu_labels
    - Set the title & then plot using `Plotly.newPlot("bar"...)`

### buildBubbleChart
* Use D3 to read in `samples.json`
* Grab all of the samples and filter on id
* Grab the index 0 item of the array
* Grab the otu_ids, labels, and sample_values
* Then build the bubble chart
    - Define Y values as the sample_values
    - Define X values as the otu_ids
    - Define the markers
        * Size relative to the sample_values
        * Colors relative to the otu_ids
    - Set the chart title, xaxis title, and set hovermode to "closest"
    - Then plot using `Plotly.newPlot("bubble"...)`

### initialize
* Use D3 to read in `samples.json`
* Grab the dropdown selector from the index.html file - `#selDataset`
* Grab the samples names and create an array of them
* Use forEach loop to create options for each sample name read in
* Pass the info for the first sample
* Call all of the other functions and build the dashboard

### optionChanged
* This updates the dashboard when a new id is selected
* It re-calls all the other functions

## call the initialize() function!

And that's it! I may take the time to figure out the bonus, but here's the finished base assignment.