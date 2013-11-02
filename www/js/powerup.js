"use strict";

var Game = window.Game || {};

(function () {
    function Powerup(x, y, w, h, vx, vy, colour, type) {
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
    Powerup.prototype.update = function (context) {
        this.bounding.set(this.x, this.y, this.w, this.h);
        context.fillStyle = this.colour;
        context.fillRect(this.x, this.y, this.w, this.h);
        this.x += this.vx;
        this.y += this.vy;
    };

    Game.Powerup = {
        powerup : Powerup
    };
})();