angular.module('voodooMobileControllers', ['voodooMobileResources', 'voodooMobileDirectives'])
.controller('navController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.showNav = false;
    $scope.$on('showNav', function (event, data) {
        if (typeof (data) == 'undefined')
            return;
        console.log(data);
        $scope.showNav = data;
    });
}])
.controller('socialController', ['$scope', '$rootScope', 'socialResource', function ($scope, $rootScope, socialResource) {
    $scope.token = $rootScope.token;
    $scope.all = {};
    $scope.windowHeight = window.innerHeight;

    function init() {
        $rootScope.$broadcast('showNav', true);

        socialResource.loadAll($rootScope.token, 0, 'en').then(function (d) {
            $scope.all = d.data;
        });
    };

    init();
}])
.controller('loginController', ['$scope', '$rootScope', 'memberResource', function ($scope, $rootScope, memberResource) {
    $scope.showLogin = false;
    $scope.inputEmail = '';
    $scope.inputPassword = '';
    $scope.loginOffset = 0;
    $scope.emailInvalid = false;
    $scope.passwordInvalid = false;
    $scope.loginResponse = ''
    $scope.isLoggingIn = false;

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

        if(isOk)
        {
            $scope.isLoggingIn = true;
            memberResource.login($scope.inputEmail, $scope.inputPassword).then(function (d) {
                $scope.loginResponse = d.data.result;
                if ($scope.loginResponse == 'ok') {
                    $rootScope.token = d.data.token;
                    window.location = '#/social';
                }
                else
                    $scope.isLoggingIn = false;
            });
        }
    };

    init();
}]);