"use strict";

var Game = window.Game || {};

Game.Functions = {};


//(function(){
     var checkCars = function (context) {
        
         
         for(var i = 0; i < cars.length; i++) {
             cars[i].update(context);  
             if(cars[i].y >= canvas.height){
                   cars.remove(i);
                   if (Math.floor(Math.random()*2)){
                       addCar("lorry");
                   } else {
                       addCar("car");
                   }
                   
                   carcount++;
               } 
            }
        }
     var addCar = function (type) {
         var min = (GameScene.roadBounding.width-canvas.width/4);
         var max = (GameScene.roadBounding.width+canvas.width/4)-10;
         // and the formula is:
         var random = Math.floor(Math.random() * (max - min + 1)) + min;
         if( random <= GameScene.roadBounding.width ){
             cars.push(new Game.Car.car(random,-40,10,40,RandRange(5,6),RandRange(5,6),"blue",type,0));
         } else {
             cars.push(new Game.Car.car(random,canvas.height-40,10,40,RandRange(5,6),RandRange(5,6),"blue",type,1));
         }
                
           
    }
    var initCars = function () {
     for(var i = 0; i < RandRange(15,20); i++) {
        
                addCar("car");
     }
    }
   
//})();
