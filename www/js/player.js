"use strict";

var Game = window.Game || {};

(function () {
    function Player(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.bounding = new Game.Utils.Rectangle(this.x, this.y, this.w, this.h);
    }

    Player.prototype.update = function (context) {
        this.bounding.set(this.x, this.y, this.w, this.h);
        context.fillStyle = "blue";
        context.fillRect(this.x, this.y, this.w, this.h);
    };

    Game.Player = {
        car : Player
    };
})();