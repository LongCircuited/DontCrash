"use strict";

var Game = window.Game || {};

Game.Functions = {};


//(function(){
     var checkCars = function (context, mod) {
        
         
         for(var i = 0; i < cars.length; i++) {
             cars[i].update(context, mod);  
         
                if(!cars[i].bounding.within(GameScene.roadBounding)){
                    cars.remove(i);
                    if (Math.floor(Math.random()*2)) {
                      addCar("lorry");
                  } else {
                      addCar("car");
                  }
                        carcount++;
                }
            
           
            
            }
        }
     var addCar = function (type) {
             cars.push(new Game.Car.car(RandRange(canvas.width/4,canvas.width-(canvas.width/4)),0,20,60,RandRange(0.1,1),RandRange(level*5,level*10),"blue",type)); 
    }
    var initCars = function () {
     for(var i = 0; i < (level); i++) {
        if (Math.floor(Math.random()*2)) {
                      addCar("lorry");
                  } else {
                      addCar("car");
                  }
             
     }
    }
   
//})();
