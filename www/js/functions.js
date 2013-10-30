"use strict";

var Game = window.Game || {};

Game.Functions = {};


(function(){
     var checkCars = function () {
         for(var i = 0; i < cars.length; i++) {
               if(cars[i].y >= canvas.height){
                   cars.remove(i);
                   carcount++;
               } 
            }
        }
})();
