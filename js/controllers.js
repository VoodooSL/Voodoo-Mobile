angular.module('voodooMobileControllers', [])
.controller('navController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.showNav = false;
}])
.controller('socialController', ['$scope', '$rootScope', function ($scope, $rootScope) {

}])
.controller('loginController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.showLogin = false;
    $scope.inputEmail = '';
    $scope.inputPassword = '';
    $scope.loginOffset = 0;
    $scope.emailInvalid = false;
    $scope.passwordInvalid = false;

    function init() {
        if (!localStorage.loginDetails) {
            $scope.showLogin = true;
            $scope.loginOffset = 'margin-top:' + (((window.innerHeight - $('#loginModal').prev().height()) / 2) - ($('#loginModal').height() / 2)) + 'px;';
        }
    };

    $scope.login = function () {
        var isOk = true;
        if ($scope.inputPassword == '')
        {
            $('#inputPassword').focus();
            $scope.passwordInvalid = true;
            isOk = false;
        }
        else
            $scope.passwordInvalid = false;

        if ($scope.inputEmail == '') {
            $('#inputEmail').focus();
            $scope.emailInvalid = true;
            isOk = false;
        }
        else
            $scope.emailInvalid = false;

    };

    init();
}]);