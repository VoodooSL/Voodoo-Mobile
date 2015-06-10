angular.module('voodooMobileResources', [])
.factory("memberResource", ['$http', function ($http) {
    return {
        login: function (email, password) {
            return $http.get('http://debug.voodoo-sl.com:666/delirious/api/MembersApi/Login?email=' + email +
                                                                                         '&password=' + password);
        }
    };
}])
.factory("socialResource", ['$http', function ($http) {
    return {
        loadAll: function (t, listType, culture) {
            return $http.get('http://debug.voodoo-sl.com:666/delirious/api/SocialApi/LoadAll?t=' + t +
                                                                                         '&listType=' + listType +
                                                                                         '&culture=' + culture);
        }
    };
}]);