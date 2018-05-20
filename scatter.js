// Declare the variable which selects the SVG tag.
let svg = d3.select("svg")

let xScale = d3.scaleLinear()
.domain([0, 100])
.range([0, 600]);

let yScale = d3.scaleLinear()
.domain([0, 100])
.range([500, 0]);

let chartGroup = svg.append('g')
        .attr("transform", "translate(50, 50)");

// Read in the CSV and 
d3.csv("/data/data.csv", function(csv) {

    csv.forEach(
        function(d) {
        d.percent_below_poverty_level = +d.percent_below_poverty_level;
        d.percent_told_depressed = +d.percent_told_depressed;
        });
    

    chartGroup.append('g')
        .attr("class", "points")
        .selectAll("circle")
        .data(csv)
        .enter()
        .append("circle")
        .attr("class", ".point")
        .attr("cx", d => xScale(d.percent_below_poverty_level))
        .attr("cy", d => yScale(d.percent_told_depressed))
        .attr("r", 10)
        .style("fill", "#F0F8FF")
        .style("stroke", "black")
        
    
    chartGroup.append('g')
        .attr("class", "labels")
        .selectAll("text")
        .data(csv)
        .enter()
        .append("text")
        .attr("x", d => xScale(d.percent_below_poverty_level)-7)
        .attr("y", d => yScale(d.percent_told_depressed)+4)
        .attr("font-family", "sans-serif")
        .attr("font-size", "10px")
        .attr("fill", "black")
        .text( d => d.state_abbr)

    let bottomAxis = d3.axisBottom(xScale);
    var leftAxis = d3.axisLeft(yScale);
    

    chartGroup.append('g')
        .classed("axis", true)
        .attr("transform", "translate(0, 500)")
        .call(bottomAxis)

    chartGroup.append('g')
        .classed('axis', true)
        .call(leftAxis)
    
    chartGroup.append("text")
        .attr("class", "label")
        .attr("x", -5)
        .attr("y", 535)
        .style("text-anchor", "end;")
        .style("font-weight", "bold")
        .text("Percent Below Poverty Level");

        chartGroup.append("text")
        .attr("class", "label")
        .attr("x", -150)
        .attr("y", -30)
        .attr("transform", "rotate(-90)")
        .style("text-anchor", "end;")
        .style("font-weight", "bold")
        .text("Percent Told Depressed")
        ;

});




/* 

// .style("width", 500)// function(d) { return xScale(d) + 'px'})
       // .style("height", 500) // function(d) { return yScale(d) + 'px'})
    
csv.percent_below_poverty_level
csv.percent_told_depressed

svg.append("circle")
.attr("class", ".point")
.attr("cx", 200)
.attr("cy", 100)
.attr("r", 10)
.style("fill", "blue") 

d3.csv("data/data.csv", function(csv) {

    csv.percent_below_poverty_level = +csv.percent_below_poverty_level
    csv.percent_told_depressed = +csv.percent_told_depressed

    var scatter = d3.select("svg")
    .selectAll("circle")
    .data(csv)
    .enter()
    .append("circle")
    .attr("class", ".point")
    .attr("cx", csv.percent_below_poverty_level)
    .attr("cy", csv.percent_told_depressed)
    .attr("r", 3)
    .style("fill", "blue")

console.log(scatter)
}
    
);

 

 
       row.percent_below_poverty_level = parseInt(row.percent_below_poverty_level);
       d.percent_told_depressed =  
console.log(data)
percent_below_poverty_level
percent_told_depressed
if (error) throw error; 
<circle cx="50" cy="500" r="10" fill="none" stroke="red" stroke-width="5"></circle> 
  
    svg.selectAll(".point")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", ".point")
        .attr("cx", 200)
        .attr("cy", 300)
        .attr("r", 3)
        .style("fill", "blue")
    


svg.selectAll(".dot")
      .data(data)
    .enter().append("circle")
      .attr("class", "dot")
      .attr("r", 3.5)
      .attr("cx", xMap)
      .attr("cy", yMap)
      .style("fill", function(d) { return color(cValue(d));})  */