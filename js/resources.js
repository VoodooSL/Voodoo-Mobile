angular.module('voodooMobileResources', [])
.factory("memberResource", ['$http', function ($http) {
    return {
        login: function (email, password) {
            return $http.get('http://debug.voodoo-sl.com:666/delirious/api/MembersApi/Login?email=' + email +
                                                                                         '&password=' + password);
        }
    };
}])