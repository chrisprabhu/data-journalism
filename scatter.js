// Declare the variable which selects the SVG tag.
let svg = d3.select("svg")

let xScale = d3.scaleLinear()
.domain([0, 100])
.range([0, 600]);

let yScale = d3.scaleLinear()
.domain([0, 100])
.range([500, 0]);

// Read in the CSV and 
d3.csv("/data/data.csv", function(csv) {

    csv.forEach(
        function(d) {
        d.percent_below_poverty_level = +d.percent_below_poverty_level;
        d.percent_told_depressed = +d.percent_told_depressed;
        });
    

    svg.selectAll("circle")
        .data(csv)
        .enter()
        .append("circle")
        .attr("class", ".point")
        .attr("cx", d => d.percent_below_poverty_level * 20)
        .attr("cy", d => d.percent_told_depressed * 20)
        .attr("r", 1)
        .style("fill", "blue") 
       // .style("width", 500)// function(d) { return xScale(d) + 'px'})
       // .style("height", 500) // function(d) { return yScale(d) + 'px'})
    
    svg.selectAll("")

        });




/* 
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