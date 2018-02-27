var app = angular.module('myApp', ['ngRoute'])

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

// app.directive('siteHeader', function () {
//     return {
//         restrict: 'E',
//         template: '<button class="btn">{{back}}</button>',
//         scope: {
//             back: '@back'
//             },
//         link: function(scope, element, attrs) {
//             $(element[0]).on('click', function() {
//                 $('body').removeClass('modal-open');
//                 $('.modal-backdrop').remove();
//                 history.back();
//                 scope.$apply();
//             });
           
//         }
//     };
// });

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

function Register($scope){

}

function Login($scope){
    
}
// function Ctrl($scope) {
// }