// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var caiwushouruchaxun = angular.module('caiwushouruchaxun', []);

// use the myAppModule variable to
// configure the module with a controller
caiwushouruchaxun.controller('MyFilterDemoCtrl', function ($scope) {
      // controller code would go here
      var Queryoptions = {
            Incomestate:'未完成',
            Startdate:'2015-1-1',
            Terminationdate:'2015-2-13'
        };
        $scope.data =  Queryoptions;
    }
);

// use the myAppModule variable to
// configure the module with a filter
caiwushouruchaxun.filter('stripDashes', function() {
    return function(txt) {
        // filter code would go here
}; }); 
