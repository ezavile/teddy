// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider


    .state('inicio', {
    url: "/inicio",
    abstract: false,
    templateUrl: "templates/inicio.html",
    controller: "VibrationDemoCtrl"
  })
    .state('reggae', {
    url: "/reggae",
    abstract: false,
    templateUrl: "templates/reggae.html",
    controller: "VibrationDemoCtrl"
  })
    .state('pop', {
    url: "/pop",
    abstract: false,
    templateUrl: "templates/pop.html",
    controller: "VibrationDemoCtrl"
  })
    .state('dubstep', {
    url: "/dubstep",
    abstract: false,
    templateUrl: "templates/dubstep.html",
    controller: "VibrationDemoCtrl"
  })
    .state('rb', {
    url: "/rb",
    abstract: false,
    templateUrl: "templates/rb.html",
    controller: "VibrationDemoCtrl"
  })
    .state('reggeaton', {
    url: "/reggeaton",
    abstract: false,
    templateUrl: "templates/reggeaton.html",
    controller: "VibrationDemoCtrl"
  })
    .state('rock', {
    url: "/rock",
    abstract: false,
    templateUrl: "templates/rock.html",
    controller: "VibrationDemoCtrl"
  })

 $urlRouterProvider.otherwise('/inicio');


});

