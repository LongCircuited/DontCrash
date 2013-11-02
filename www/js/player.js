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
        this.dist = 4;
        this.bounding = new Game.Utils.Rectangle(this.x, this.y, this.w, this.h);
    }

    Player.prototype.update = function (context, mod) {
      
        this.dist += (mod / 500) / this.speed; //Distance 'travelled'
       
        
        level = (Math.floor(this.dist) + 1);
        if (level > oldlevel) {
            GameScene.reset(context);
            oldlevel = level;
        }    
        
      
        if (37 in keysDown) this.x -= this.speed / mod;
        if (39 in keysDown) this.x += this.speed / mod;
        //if(40 in keysDown) this.y += this.speed / mod;
        //if(38 in keysDown) this.y -= this.speed / mod;
      for(var i = 0; i < cars.length; i++){
          if(cars[i].bounding.overlaps( this.bounding )){
              this.x -= i;
          }
      }
       
        this.bounding.set(this.x, this.y, this.w, this.h);
       
      
        context.drawImage(this.image,this.x, this.y, this.w, this.h);
    
    
        
          
       
    };

    Game.Player = {
        Player : Player
    };
})();