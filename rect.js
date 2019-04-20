var margin = {top: 50, right: 30, bottom: 50, left: 100},
  width = 700 - margin.left - margin.right,
  height = 700 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
.append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
.append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

// Labels of row and columns
// var myGroups = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]
// var myVars = ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9", "v10"]

var myGroups = [' 1 ',' 2 ',' 3 ','  Low  ','  Mid  ','  High  ','   Low   ','   Mid   ','   High   ','    1    ','    2    ','    3    ','      1      ','      2      ','      3      ']
// var myVars = ["Low","Mid","High"]
// var myVars = ["1","2","3"]
var myVars = [' 1 ',' 2 ',' 3 ','  Low  ','  Mid  ','  High  ','   Low   ','   Mid   ','   High   ','    1    ','    2    ','    3    ','      1      ','      2      ','      3      ']

// Build X scales and axis:
var x = d3.scaleBand()
  .range([ 0, width ])
  .domain(myGroups)
  .padding(0.01);
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))


// Build X scales and axis:
var y = d3.scaleBand()
  .range([ height, 0 ])
  .domain(myVars)
  .padding(0.01);
svg.append("g")
  .call(d3.axisLeft(y));



////add solid lines
svg.selectAll()
    .data(data, function(d) {return d.group+':'+d.variable;})
    .enter()
    .append("rect")
      .attr("x", 0) // position
      .attr("y", height/5) // position
      .attr("y", height/2) // position
      .attr("width", 3*x.bandwidth() )
      .attr("height", 3*y.bandwidth() )
      .style("fill", 'white')
      .style("stroke", 'Black')
      .style("stroke-width", 4)
      .style("opacity", 0.8)
