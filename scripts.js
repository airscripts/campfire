fetch('https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json')
  .then(response => response.json())

  .then(json => {
    let data = json.data;
    let svg = null;
    let title = null;
    let height = 500;
    let width = 1000;

    let yScale = null;
    let yAxis = null;
    let gyAxis = null;

    let xScale = null;
    let xAxis = null;
    let gxAxis = null;

    svg = d3.select("body")
      .append("svg")
      .attr("height", height)
      .attr("width", width);

    title = svg.append("text")
      .text("Bar Chart")
      .attr("id", "title");

    yScale = d3.scaleLinear()
      .domain([
        d3.min(data, (d) => d[1]),
        d3.max(data, (d) => d[1])
      ])
      .range([height - 200, 0]);

    yAxis = d3.axisLeft()
      .scale(yScale);

    gyAxis = svg.append("g")
      .attr("id", "y-axis")
      .attr("transform", "translate(100, 100)")
      .call(yAxis);

    xScale = d3.scaleLinear()
      .domain([
        d3.min(data, (d) => Number(d[0].split("-")[0])),
        d3.max(data, (d) => Number(d[0].split("-")[0]))
      ])
      .range([0, width - 200]);

    xAxis = d3.axisBottom()
      .scale(xScale);

    gxAxis = svg.append("g")
      .attr("id", "x-axis")
      .attr("transform", "translate(100," + (height - 100) + ")")
      .call(xAxis);
  });
