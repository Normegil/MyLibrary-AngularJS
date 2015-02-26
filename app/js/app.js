/*================================================================
 =>                  App = myLibraryAngularJs
 ==================================================================*/
/*global angular*/

var app = angular.module('myLibraryAngularJs', ["ngCookies", "ngResource", "ngSanitize", "ngAnimate", "ui.utils", "ui.router", "ngGrid", "ngMaterial", "angucomplete-alt"]);


app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {
    'use strict';

    $urlRouterProvider.otherwise('/news');

    $stateProvider
        .state('news', {
            url: '/news',
            templateUrl: 'templates/news.html'
        })
        .state('books', {
            url: '/books',
            templateUrl: 'templates/books.html'
        });

    // This is required for Browser Sync to work poperly
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
}]);


/*================================================================
 =>                  myLibraryAngularJs App Run()
 ==================================================================*/

app.run(['$rootScope', function ($rootScope) {

    'use strict';

    console.log('Angular.js run() function...');
}]);


/* ---> Do not delete this comment (Values) <--- */

/* ---> Do not delete this comment (Constants) <--- */
