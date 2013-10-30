"use strict";

var Game = window.Game || {};

(function () {
    function Car(x, y, w, h, vx, vy, colour) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.vx = vx;
        this.vy = vy;
        this.colour = colour;
        this.bounding = new Game.Utils.Rectangle(this.x, this.y, this.w, this.h);
    }
    Car.prototype.update = function (context) {
        this.bounding.set(this.x, this.y, this.w, this.h);
        context.fillStyle = this.colour;
        context.fillRect(this.x, this.y, this.w, this.h);
    };

    Game.Car = {
        car : Car
    };
})();