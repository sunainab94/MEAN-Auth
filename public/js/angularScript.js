var app = angular.module('myApp', ['ngRoute'])

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider.when('/register',
        {
            templateUrl: 'auth/register.html'
        });
    $routeProvider.when('/login',
        {
            templateUrl: 'auth/login.html'
        });

    $routeProvider.otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode({ enabled: true, requireBase: false });
}]);