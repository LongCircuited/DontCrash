"use strict";

/*Declare The Game Namespace*/
var Game = window.Game || {};

var requestAnimFrame = (function() {
    return  window.requestAnimationFrame        ||
            window.webkitRequestAnimationFrame  ||
            window.mozRequestAnimationFrame     ||
            window.oRequestAnimationFrame       ||
            window.msRequestAnimationFrame      ||

            function (callback, element) {
              window.setTimeout(callback, 1000/60);
            };
  })();

/*Variables*/
var canvas = null;
var context = null;
var instance = null;
var running = false;
var debugmode = true;
var LastFrameTime = 0;
var TimeSinceLastFrame = 0;
var FPS = 0;
var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;
var paused = false;

var Engine = function () {
    running = true;

    console.log("Initializing");
    if( !Game.Main ){
        console.error("Main class not found!");
    } else if ( !Game.Utils ) {
        console.error("Utils class not found!");
    }
    canvas   = document.getElementById('canvas');
    context  = canvas.getContext('2d');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    window.oncontextmenu = function(e){
        e = e || window.event;
        e.preventDefault();
        return false;
    }

    this.draw(TimeSinceLastFrame);
    console.log("Done");
}

 //DRAW A FRAME
Engine.prototype.draw = function(timeSinceLastFrame) {
    if( running ) {
         timeSinceLastFrame = timeSinceLastFrame || 0;
        context.imageSmoothingEnabled = false;
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        context.font = "normal 20pt Arial";
      
      
        
        GameScene.update(context, timeSinceLastFrame);
          
        checkCars(context, timeSinceLastFrame);
        
        checkPowerups(context, timeSinceLastFrame);
        
        player.update(context, timeSinceLastFrame);
          
   // console.log(player.speed);
        context.fillStyle = "white";
        context.fillText(FPS.toFixed(1),5,25);
        context.fillText("Level: "+level,5,50);
        context.fillText("Speed: "+player.speed,5,75);
        context.fillText("Cars: "+cars.length,5,100);
        requestAnimFrame(function() {
            var now = new Date();
            TimeSinceLastFrame = LastFrameTime ? (now - LastFrameTime) : 0;
            instance.resize();
            instance.draw(TimeSinceLastFrame);
            LastFrameTime = now;
            FPS = 1/(TimeSinceLastFrame / 1000);
        });
        
    } else {
        return false;
    }

};

Engine.prototype.shutdown = function () {
    if( !running )return;
    console.log("Shutting Down", Game.Engine.get());
    running = false;
    instance = null;
};
Engine.prototype.restart = function () {
    this.shutdown();
    instance = new Engine();
}
Engine.prototype.resize = function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};

Game.Engine = {
    init : function() {
        if( !instance && running === false){
            instance = new Engine();
        }
        return instance;
    },
    get : function() {
        return instance;
    },
    shutdown : function() {
        if( instance && running === true){
            instance.shutdown();
        }
        return true;
    },
    restart : function () {
        instance.restart();
    }
}