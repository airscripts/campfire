fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
	.then(response => response.json())

	.then(data => {
    let height = 500;
    let width = 1000;
    let svg = null;

    svg = d3.select("body")
            .append("svg")
            .attr("height", height)
            .attr("width", width);

    svg.append("text")
       .text("Bar Chart")
       .attr("id", "title");

    svg.append("g")
       .attr("id", "x-axis");
    
    svg.append("g")
       .attr("id", "y-axis");
	});
