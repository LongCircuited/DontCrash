"use strict";

var Game = window.Game || {};

(function () {
    
    function Player(x, y, w, h, colour, speed, image) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.speed = speed;
        this.colour = colour;
        this.image = image;
        
        this.bounding = new Game.Utils.Rectangle(this.x, this.y, this.w, this.h);
    }

    Player.prototype.update = function (context, mod) {
      
        
      
        if (37 in keysDown) this.x -= this.speed / mod;
        if (39 in keysDown) this.x += this.speed / mod;
        //if(40 in keysDown) this.y += this.speed / mod;
        //if(38 in keysDown) this.y -= this.speed / mod;
        this.y -= 1;
        
        this.bounding.set(this.x, this.y, this.w, this.h);
        context.fillStyle = this.colour;
        context.drawImage(this.image,this.x, this.y, this.w, this.h);
        if (this.y <= 0) {
            this.speed = 600;
            for(var i = 0; i < cars.length; i++){
                cars[i].vy = 100;
            }
            level++;
            GameScene.reset(context);
        }
    };

    Game.Player = {
        Player : Player
    };
})();