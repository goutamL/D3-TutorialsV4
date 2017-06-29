(function() {
  'use strict';

  angular.module('d3App').controller('CleanBarChartController', CleanBarChartController);
 CleanBarChartController.$inject = ['$rootScope','$scope','$location','$state','$http'];

  function CleanBarChartController($rootScope,$scope,$location,$state,$http) {
  var vm = this;

  // var dataArray = [23, 13, 21, 14, 37, 15, 18, 34, 30];

d3.json("json-Clean-barChart/cleanBarJson.json", function(error, dataArray) {
  var svg = d3.select("body").append("svg")
      .attr("height","100%")
      .attr("width","100%")
      .style("border","1px solid red")

  svg.selectAll("rect")
    .data(dataArray)
    .enter().append("rect")
          .attr("class","bar2")
          .attr("height", function(d,i){
            return (d*10);
          })
          .attr("width","40")
          .attr("x", function(d,i){
            return (i*60)+25;
          })
          .attr("y", function(d,i){
            return 400 - (d*10)
          });
  svg.selectAll("text")
    .data(dataArray)
    .enter().append("text")
    .text(function (d){return d;})
      .attr("class", "text")
      .attr("x",function(d,i){
        return (i*60)+36
      })
      .attr("y",function(d,i){
        return 415 - (d*10)
      });

})
};
})();

