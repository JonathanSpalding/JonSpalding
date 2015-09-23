var app = angular.module('jonSpalding', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider

.when('/', {
  templateUrl: 'index.html',
  controller: ''
})
    .when('/frolfzone', {
      templateUrl: 'Frolf-Zone/js/Home/homeTmpl.html',
      controller: 'homeCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })
});
