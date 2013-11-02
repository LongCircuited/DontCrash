"use strict";

var Game = window.Game || {};

(function () {
    function Car(x, y, w, h, vx, vy, colour, type) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.vx = vx;
        this.vy = vy;
        this.type = type;
        this.colour = colour;
        this.bounding = new Game.Utils.Rectangle(this.x, this.y, this.w, this.h);
    }
    Car.prototype.update = function (context, mod) {
        this.bounding.set(this.x, this.y, this.w, this.h);
        context.strokeStyle = "red";
        
        context.strokeRect(this.x,this.y,this.w,this.h);
        context.drawImage(playerimage,this.x, this.y, this.w, this.h);
        this.y += (this.vy / mod);
    };

    Game.Car = {
        car : Car
    };
})();