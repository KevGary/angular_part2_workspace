var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/partials/home.html',
      controller: 'HomeController'
    })
    .when('/about', {
      templateUrl: '/partials/about.html',
      controller: 'AboutController',
    })
    .when('/contact', {
      templateUrl: '/partials/contact.html',
      controller: 'ContactController'
    })
    .otherwise('/')
});
