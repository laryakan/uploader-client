'use strict';

/**
 * @ngdoc overview
 * @name uploaderClientApp
 * @description
 * # uploaderClientApp
 *
 * Main module of the application.
 */
angular
  .module('uploaderClientApp', [
    'ngAnimate',
    'ngRoute',
    'angularFileUpload'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/upload', {
        templateUrl: 'views/upload.html',
        controller: 'UploadCtrl',
        controllerAs: 'upload'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
