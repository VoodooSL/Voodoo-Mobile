angular.module('voodooMobileResources', [])
.factory("memberResource", ['$http', function ($http) {
    return {
        login: function (email, password) {
            return $http.get('http://debugapi.voodoo-sl.com:666/MemberApi/Login?email=' + email +
                                                                                         '&password=' + password);
        }
    };
}])