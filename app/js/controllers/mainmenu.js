
/*================================================================
=>                  Controller = Mainmenu
==================================================================*/
/*global app*/

app.controller('MainMenuCtrl', ['$scope', function ($scope) {

	'use strict';

    $scope.selectedTag = null;
    $scope.tags = [
        {name:'Tag'},
        {name:'Test'},
        {name:'Jack'},
        {name:'Jack in'},
        {name:'Jack in the '},
        {name:'Jack in the Box'}
    ];

	console.log('Controller ===  MainMenuCtrl');
}]);


/*-----  End of Controller = Mainmenu  ------*/



