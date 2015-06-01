angular.module('voodooMobile', [])
.controller('navController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.showNav = false;
}])
.controller('loginController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.showLogin = false;
    $scope.email = '';
    $scope.password = '';

    function init() {
        if (!localStorage.loginDetails)
            $scope.showLogin = true;
    };

    $scope.login = function (email, password) {
        alert(email);
    };

    init();
}]);