(function() {
  'use strict';

  angular.module('d3App').controller('PieChartController', PieChartController);
 PieChartController.$inject = ['$rootScope','$scope','$location','$state','$http'];

  function PieChartController($rootScope,$scope,$location,$state,$http) {
  var vm = this;

    var m = 10,
        r = 100,
        z = d3.scaleOrdinal(d3.schemeCategory20)


d3.json("json-piechart/pie.json", function(error, data) {

var svg = d3.select("body").append("svg")
        .data(data)
        .enter().append("svg")
        .attr("width", (r+m)*2)
        .attr("height",(r+m)*2)
        .append("g")
        .attr("transform","translate("+(r+m)+","+(r+m)+")");

    svg.selectAll("path")
    .data(d3.pie())
  .enter().append("path")
    .attr("d", d3.arc()
        .innerRadius(r / 2)
        .outerRadius(r))
    .style("fill", function(d, i) { return z(i); })
    .text(function(d,i){return d[i];})
})

  
};
})();

