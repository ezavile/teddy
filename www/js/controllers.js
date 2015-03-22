angular.module('starter.controllers', ['cordovaVibrationModule'])
    

    // Application Controller

    .controller('AppCtrl', function ($scope) {
    })
    // Angular Cordova Plugin Vibration

    .controller('VibrationDemoCtrl', function ($scope, cordovaVibrationService) {
        $scope.data = {};
        // API demonstration
        $scope.apiVersion = cordovaVibrationService.apiVersion();
        $scope.cordovaVersion = cordovaVibrationService.cordovaVersion();

            cadena = [1000];
        function uso(n,vibracion,espera){      
                for(i = 0; i < n; i++){
                    cadena[i] = vibracion;
                    i++;
                    cadena[i] = espera;
                }
                return cadena;
            } 

        function ritmo_off(){
            cordovaVibrationService.vibrate(0);
        }
        $scope.vibOff = function(){
            cordovaVibrationService.vibrate(0);
        }

        function vibrate (){
            ritmo = "";


            cadena = [1000];

            vibracionA = 300;
            esperaA = 120;

            vibracionB = 150;
            esperaB = 80;

            vibracionC = 350;
            esperaC = 140;

            vibracionD = 150;
            esperaD = 200;

            function uso(n,vibracion,espera){      
                for(i = 0; i < n; i++){
                    cadena[i] = vibracion;
                    i++;
                    cadena[i] = espera;
                }
                return cadena;
            } 



               x = [];
                y=0;
                tiempo =267000;
                suma  = 0;
                for(i = 0 ; suma<tiempo;i++){
                    y = Math.floor((Math.random()*800)+50);
                    suma += y;
                    x = x.concat(y);
                }                
                ritmo = x;

            

            cordovaVibrationService.vibrate(ritmo);


        };


        $scope.manual = function(){
            console.log($scope.data.espacio);
            if($scope.data.espacio > 0 && $scope.data.espacio < 10){
                cordovaVibrationService.vibrate(uso(30,350,1030));
            }       
            if($scope.data.espacio > 10 && $scope.data.espacio < 20){
                cordovaVibrationService.vibrate(uso(30,450,930));
            }       
            if($scope.data.espacio > 20 && $scope.data.espacio < 30){
                cordovaVibrationService.vibrate(uso(30,550,810));
            }       
            if($scope.data.espacio > 30 && $scope.data.espacio < 40){
                cordovaVibrationService.vibrate(uso(30,650,700));
            }       
            if($scope.data.espacio > 40 && $scope.data.espacio < 50){
                cordovaVibrationService.vibrate(uso(30,750,600));
            }       
            if($scope.data.espacio > 50 && $scope.data.espacio < 60){
                cordovaVibrationService.vibrate(uso(30,850,520));
            }       
            if($scope.data.espacio > 60 && $scope.data.espacio < 70){
                cordovaVibrationService.vibrate(uso(30,950,390));
            }       
            if($scope.data.espacio > 70 && $scope.data.espacio < 80){
                cordovaVibrationService.vibrate(uso(30,1050,280));
            }       
            if($scope.data.espacio > 80 && $scope.data.espacio < 90){
                cordovaVibrationService.vibrate(uso(30,1150,200));
            }       
            if($scope.data.espacio > 90 && $scope.data.espacio < 100){
                cordovaVibrationService.vibrate(uso(30,1250,120));
            }       
            if($scope.data.espacio == 100){
                cordovaVibrationService.vibrate(120000);
            }       
        }

    $scope.check = function(){
     x = document.getElementById("myCheck").checked;
     if(x){
        vibrate();
     }else{
        ritmo_off();
     }
  }

    });

