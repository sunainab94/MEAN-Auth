// create angular app
var validateApp = angular.module('validateApp', []);

	// create angular controller
	validateApp.controller('registerController', function($scope) {

		// function to submit the form after all validation has occurred			
		$scope.submitForm = function() {

			// check to make sure the form is completely valid
			if ($scope.userForm.$valid) {
				alert('our form is amazing');
			}

		};

	});