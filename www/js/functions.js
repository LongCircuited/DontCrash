"use strict";

var Game = window.Game || {};

Game.Functions = {};
var checkCars = function (context, mod) {
       
    for (var i = 0; i < cars.length; i++) {
             cars[i].update(context, mod);
            if(cars[i].type == "dead"){
                cars.remove(i);
            }
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
     };
var checkPowerups = function (context, mod) { //*NEED MORE IDEAS FOR POWERUPS*//
    for(var i = 0; i < powerups.length; i++) {
        powerups[i].update(context, mod);
    if(!powerups[i].bounding.within(GameScene.roadBounding)){
        powerups.remove(i);
        var random = Math.random()*10;
        if(random <= 0.1){
            addPowerup("delete-level");
        } else if(random <= 2 && random >= 4){
            addPowerup("make-thin");
        }
    }
    }
}
var addPowerup = function (type) {
    powerups.push(new Game.Powerup.powerup(RandRange(canvas.width/4,canvas.width-(canvas.width/4)),0,40,40,RandRange(-5,5),RandRange(1,5),"blue",type));
}
var addCar = function (type) {
    cars.push(new Game.Car.car(RandRange(canvas.width/4,canvas.width-(canvas.width/4)),0,20,60,RandRange(0.1,1),RandRange(level*5,level*10),"blue",type)); 
}
var initCars = function () {
    for(var i = 0; i < (level/2); i++) {
        if (Math.floor(Math.random()*2)) {
            addCar("lorry");
        } else {
            addCar("car");
        }
    }
}
var initPowerups = function () {
    for(var i = 0; i < (level*2); i++) {
         var random = Math.random()*10;
        if(random <= 0.1){
            addPowerup("delete-level");
        } else if(random <= 2){
            addPowerup("make-thin");
        }
    }
}