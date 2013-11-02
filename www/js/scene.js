"use strict";

var Game = window.Game || {};

(function () {
    var pyy = 0;
    function Scene() {
        this.bounding = new Game.Utils.Rectangle(0, 0, canvasWidth, canvasHeight);
        this.roadBounding = new Game.Utils.Rectangle(canvasWidth/4, 0, canvasHeight/2,canvasHeight)
    }
    Scene.prototype.update = function (context, mod) {
        pyy += player.speed / mod;
        this.bounding.set(0, 0, canvas.width, canvas.height);
        this.roadBounding.set(canvas.width/4,0,canvas.width/2,canvas.height+100);
        context.strokeRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "green";
        context.fillRect(0,0,canvas.width,canvas.height);
        context.fillStyle = "gray";
        context.fillRect(canvas.width/4,0,canvas.width/2,canvas.height);
     
        context.fillStyle = "white";
        /*FAKE ENDLESSNESS*/
        context.fillRect(canvas.width/2,pyy,10,200);
        context.fillRect(canvas.width/2,pyy-350,10,200);
        context.fillStyle = "yellow";
        context.fillRect(canvas.width/2,pyy-100,10,10)
        if (pyy >= canvas.height + 350) {
           pyy = -200;
        }
       
        
        
    };
    Scene.prototype.reset = function (context) {
        player.y = canvas.height - 200;
        player.speed = 40;
        
        
        initCars();
    }
    Game.Scene = {
        Scene : Scene
    };
})();