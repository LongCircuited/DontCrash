"use strict";

var Game = window.Game || {};

(function () {
    
    function Player(x, y, w, h, colour, speed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.speed = speed;
        this.colour = colour;
        this.bounding = new Game.Utils.Rectangle(this.x, this.y, this.w, this.h);
    }

    Player.prototype.update = function (context, mod) {
        if (!this.bounding.within( GameScene.roadBounding )) {
            this.speed = 0.5;
        } else {
            this.speed = 2;
        }
        if (37 in keysDown) {
            this.x -= this.speed;
        }
        if (39 in keysDown) {
           this.x += this.speed;
        }
        if(40 in keysDown) {
            this.y += this.speed;
        }
        if(38 in keysDown) {
            this.y -= this.speed;
        }
        this.bounding.set(this.x, this.y, this.w, this.h);
        context.fillStyle = this.colour;
        context.fillRect(this.x, this.y, this.w, this.h);
        
    };

    Game.Player = {
        Player : Player
    };
})();