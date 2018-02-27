var app = angular.module('myApp', ['ngMaterial', 'ngMessages','ngRoute'])

app.controller('Login', function($scope) {
    
  });

  app.controller('Register', function($scope) {
    
  });
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider.when('/register',
        {
            templateUrl: 'auth/register.html',
            controller : 'Register'
        });
    $routeProvider.when('/login',
        {
            templateUrl: 'auth/login.html',
            controller : 'Login'
        });

    $routeProvider.otherwise({ redirectTo: '/' });

    //console.log($window.history);
    $locationProvider.html5Mode({ enabled: true, requireBase: false });
}]);

app.directive('back', function() {
    return {
        restrict: 'E',
        replace: true,
        template: '<div></div>',
        link: function($scope, element, attrs) {
            $scope.clickMe= function() {
                
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
                history.back();

                //scope.$apply();
            }
        }
    }
});

// function Register($scope){

// }

// function Login($scope){
    
// }
