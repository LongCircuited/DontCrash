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
      
       if(this.speed >= 10){
           this.speed = 10;
          
       } else {
           if (!this.bounding.within( GameScene.roadBounding )) {
               this.speed = 0.5;
           }
       }
        
        if (37 in keysDown) {
            keyDown = true; 
            this.speed += 0.1 / mod;
            
            this.x -= 2;
         } else {
            keyDown = false;
        } 
        if (39 in keysDown) {
            keyDown = true;
            this.speed += 0.1 / mod;
            
            this.x += 2;
        } else {
            keyDown = false;
        }
        if(40 in keysDown) {
            keyDown = true; 
            this.speed -= 0.1 / mod;
            
          
        } else {
            keyDown = false;
        }
        if(38 in keysDown) {
            keyDown = true;
            this.speed += 0.1 / mod;
            
         
        } else {
            keyDown = false;
        }
        
        if( keyDown == false ){
            
            if( this.speed <= 0.7) {
                this.speed = 0.7;
            } else {
                this.speed -= 0.01;
            }
            
            
    
      
        }
        this.bounding.set(this.x, this.y, this.w, this.h);
        context.fillStyle = this.colour;
        context.drawImage(this.image,this.x, this.y, this.w, this.h);
        
    };

    Game.Player = {
        Player : Player
    };
})();