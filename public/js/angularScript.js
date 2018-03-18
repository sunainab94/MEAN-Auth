var app = angular.module('myApp', ['ngMaterial', 'ngMessages', 'ngRoute'])

app.controller('Login', function ($http, $scope) {

    $scope.loginClick = function () {

        //alert($scope.user);
        var url = "/loginPost";
        $http.post(url, $scope.user)
            .then(
            function (response) {   //Success code (200)

                alert(response.data);

            }, function (response) {    //Error code (300)
                
                alert("Failed");
            }
            );
    }

});

app.controller('Register', function ($scope) {

    $scope.submitForm = function () {
        $scope.date = $scope.dob;
    }
});

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider.when('/register',
        {
            templateUrl: 'auth/register.html',
            controller: 'Register'
        });
    $routeProvider.when('/login',
        {
            templateUrl: 'auth/login.html',
            controller: 'Login'
        });

    $routeProvider.otherwise({ redirectTo: '/' });

    //console.log($window.history);
    $locationProvider.html5Mode({ enabled: true, requireBase: false });
}]);


app.directive('back', function () {             //Go back to original url when modal is cancelled
    return {
        restrict: 'E',
        replace: true,
        template: '<div></div>',
        link: function ($scope, element, attributes) {
            $scope.clickMe = function () {

                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
                history.back();

                //scope.$apply();
            }
        }
    }
});

app.directive('compareTo', function () {        //Password and confirm password
    return {
        require: "ngModel",
        scope: {
            compareTolValue: "=compareTo"
        },
        link: function (scope, element, attributes, ngModel) {

            ngModel.$validators.compareTo = function (modelValue) {

                return modelValue == scope.compareTolValue;
            };

            scope.$watch("compareTolValue", function () {
                ngModel.$validate();
            });
        }
    }
});