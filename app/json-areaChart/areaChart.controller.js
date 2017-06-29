(function() {
  'use strict';

  angular.module('d3App').controller('AreaChartController', AreaChartController);
 AreaChartController.$inject = ['$rootScope','$scope','$location','$state','$http'];

  function AreaChartController($rootScope,$scope,$location,$state,$http) {

var marginTop = 10;
var marginBottom = 20;
var marginRight = 15;
var marginLeft = 30;
var height = 280 - marginTop - marginBottom;
var width = 480 - marginLeft - marginRight;

var svgSelection = d3.select('body')
    .append("svg")
    .attr("width", width + marginLeft + marginRight)
    .attr("height", height + marginTop + marginBottom);

var baseGroup = svgSelection
    .append("g")
    .attr("transform", "translate("+marginLeft+","+marginTop+")");


var yScale = d3.scale.linear()
    .range([height,0])
    .domain([0,100]);   


var xScale = d3.time.scale()
    .range([0, width]);

var colorScale = d3.scale.ordinal()
    .range(["#4C82C3", "#F37B6D", "#6CC071", "#FFD900"]);

var hoverLabel = d3.scale.ordinal()
    .range(["age1", "age2", "age3", "age4"]);


var yAxis = d3.svg.axis()
    .scale(yScale)
    .tickSize(-width, 0, 0)
    .ticks(5)
    .tickFormat(function(d){if(d==100){return d +"%";}else{return d}})
    .orient("left");


var xBar = d3.svg.axis()
    .scale(xScale)
    .orient("bottom");


// convert years to dates
var parseDate = d3.time.format("%Y").parse;
dataset.forEach(function(d) {
    d.year = parseDate(d.year);
}); 

// each key (age), uses a map to create all the objects for that age
// i in the anonymous function passed to map is the index of the dataset array, so can be used as the ID
var newDataset = ["age1", "age2", "age3", "age4"].map(function(n){
    return dataset.map(function(d, i){
           return { x: d.year, y: d[n], y0: 0 };
       });
});

d3.layout.stack()(newDataset);


xScale.domain(d3.extent(dataset, function(d) { return d.year }))

baseGroup.append("g")
      .attr("class", "xaxis")
      .attr("transform", "translate(0," + height + ")")
      .call(xBar);              

baseGroup.append("g")
      .attr("class", "yaxis")
      .call(yAxis);


var area = d3.svg.area()
    .x(function(d) { return xScale(d.x); })
    .y0(function(d) { return yScale(d.y0); })
    .y1(function(d) { return yScale(d.y + d.y0); });

var ageGroup = baseGroup.selectAll(".valgroup")
    .data(newDataset)
    .enter()
    .append("g")
    .attr("class", "valgroup")
    .style("fill", function(d, i) { return colorScale(i); })
    .attr("class", function(d, i) { return hoverLabel(i); });

ageGroup.append("path")
    .attr("d", function(d) { return area(d); });

  
};
})();

