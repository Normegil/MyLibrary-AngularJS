
/*================================================================
=>                  Controller = Mainmenu
==================================================================*/
/*global app*/

app.controller('MainMenuCtrl', ['$scope', function ($scope) {

	'use strict';

    $scope.selectedTag = null;
    $scope.tags = [
        'Tag',
        'Test',
        'Jack',
        'Jack in',
        'Jack in the ',
        'Jack in the Box'
    ];

	console.log('Controller ===  MainMenuCtrl');
}]);


/*-----  End of Controller = Mainmenu  ------*/



