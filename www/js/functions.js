"use strict";

var Game = window.Game || {};

Game.Functions = {};


//(function(){
     var checkCars = function (context) {
        
         
         for(var i = 0; i < cars.length; i++) {
             cars[i].update(context);  
         
                if(!cars[i].bounding.within(GameScene.roadBounding)){
                    cars.remove(i);
                    if (Math.floor(Math.random()*2)){
                      addCar("lorry");
                  } else {
                      addCar("car");
                  }

                }
             carcount++;
           
            
            }
        }
     var addCar = function (type) {
         var min = (GameScene.roadBounding.width-canvas.width/4);
         var max = (GameScene.roadBounding.width+canvas.width/4)-10;
         // and the formula is:
         var random = Math.floor(Math.random() * (max - min + 1)) + min;
        var lorrywidth = 40;
         var lorryheight = 60;
         if(type == "lorry"){
             lorryheight = 60;
             lorrywidth = 40;
         } else {
            lorryheight = 40;
             lorrywidth = 10;
         }
        
             if( random <= GameScene.roadBounding.width ){
             cars.push(new Game.Car.car(random,0,lorrywidth,lorryheight,RandRange(5,6),RandRange(5,6),"blue",type,0));
         } else {
             cars.push(new Game.Car.car(random,canvas.height-60,lorrywidth,lorryheight,RandRange(1,20),RandRange(1,20),"blue",type,1));
         }    
           
    }
    var initCars = function () {
     for(var i = 0; i < 10; i++) {
        
                addCar("car");
     }
    }
   
//})();
