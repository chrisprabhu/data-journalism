let svg = d3.select("svg")
d3.csv("/data/data.csv", function(data) {
    console.log(data[0]);
  });
/* 
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