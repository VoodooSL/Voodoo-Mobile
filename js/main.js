angular.module('voodooMobile', ['ngRoute', 'voodooMobileControllers'])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
         when('/start', {
             templateUrl: 'start.html',
             controller: 'loginController'
         }).
         when('/social', {
             templateUrl: 'social.html',
             controller: 'socialController'
         }).
         otherwise({
             redirectTo: '/start'
         });
}]);