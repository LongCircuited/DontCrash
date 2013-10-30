"use strict";

var Game = window.Game || {};

(function () {
    function Car(x, y, w, h, vx, vy, colour, type, lane) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.vx = vx;
        this.vy = vy;
        this.type = type;
        this.colour = colour;
        this.lane = lane;
        this.bounding = new Game.Utils.Rectangle(this.x, this.y, this.w, this.h);
    }
    Car.prototype.update = function (context) {
        this.bounding.set(this.x, this.y, this.w, this.h);
        context.fillStyle = this.colour;
        
        context.fillRect(this.x, this.y, this.w, this.h);
      if ( this.lane === 0 ){
          this.y += (this.vy * player.speed);
      } else {
          this.y -= (this.vy * player.speed);
      }
             
              
            
               
                    
        
    };

    Game.Car = {
        car : Car
    };
})();