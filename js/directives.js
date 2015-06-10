angular.module('voodooMobileDirectives', [])
.filter('unsafe', ['$sce', function ($sce) {
    return function (val) {

        var count = 0;
        var indexA = val.indexOf('\n');
        while (indexA > -1) {
            count++;
            if (count > 4)
                val = val.substring(0, indexA) + " " + val.substring(indexA + 1);
            else
                val = val.substring(0, indexA) + "<br/>" + val.substring(indexA + 1);

            indexA = val.indexOf('\n', indexA + 1);
        }

        return $sce.trustAsHtml(val);
    };
}]);