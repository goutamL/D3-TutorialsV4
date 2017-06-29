(function () {
    'use strict';

angular.module('d3App', ['ngResource', 'ngMessages', 'ui.router']).config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider','$locationProvider'];

function config($stateProvider, $urlRouterProvider,$locationProvider) {
$locationProvider.html5Mode(true);

$urlRouterProvider.otherwise('/barChart');


$stateProvider
.state('home',{
    url: '/barChart',
    templateUrl: 'json-barchart/barchart.html',
          controller: 'BarChartController',
          controllerAs: 'vm'
})
.state('cleanbarchart',{
    url: '/cleanbarchart',
    templateUrl: 'json-Clean-barChart/cleanbarchart.html',
          controller: 'CleanBarChartController',
          controllerAs: 'vm'
})
.state('pieChart',{
    url: '/pieChart',
    templateUrl: 'json-piechart/piechart.html',
          controller: 'PieChartController',
          controllerAs: 'vm'
})
.state('linechart',{
    url: '/lineChart',
    templateUrl: 'json-lineChart/lineChart.html',
          controller: 'LineChartController',
          controllerAs: 'vm'
})
.state('bubblechart',{
    url: '/bubbleChart',
    templateUrl: 'json-bubbleChart/bubbleChart.html',
          controller: 'BubbleChartController',
          controllerAs: 'vm'
})
.state('areachart',{
    url: '/areaChart',
    templateUrl: 'json-areaChart/areaChart.html',
          controller: 'AreaChartController',
          controllerAs: 'vm'
})
.state('treechart',{
    url: '/treeChart',
    templateUrl: 'json-treeChart/treeChart.html',
          controller: 'TreeChartController',
          controllerAs: 'vm'
});
}


})();



    