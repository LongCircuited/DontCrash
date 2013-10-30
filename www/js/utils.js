"use strict";

var Game = window.Game || {};

Game.Utils = {};
/**
* Rectangle intersection check
*/

(function(){
		function Rectangle(left, top, width, height){
			this.left = left || 0;
			this.top = top || 0;
			this.right = (left + width) || 0;
			this.bottom = (top + height) || 0;
		}
		
		Rectangle.prototype.set = function(left, top, /*optional*/width, /*optional*/height){
			this.left = left;
            this.top = top;
            this.width = width || this.width;
            this.height = height || this.height
            this.right = (this.left + this.width);
            this.bottom = (this.top + this.height);
		}
		
		Rectangle.prototype.within = function(r) {
			return (r.left <= this.left && 
					r.right >= this.right &&
					r.top <= this.top && 
					r.bottom >= this.bottom);
		}		
		
		Rectangle.prototype.overlaps = function(r) {
			return (this.left < r.right && 
					r.left < this.right && 
					this.top < r.bottom &&
					r.top < this.bottom);
		}

		// add "class" Rectangle to our Game object
		Game.Utils.Rectangle = Rectangle;
    
    
        // Array Remove - By John Resig (MIT Licensed)
        Array.prototype.remove = function(from, to) {
            var rest = this.slice((to || from) + 1 || this.length);
            this.length = from < 0 ? this.length + from : from;
            return this.push.apply(this, rest);
        };

   

})();

var keysDown = {};

    addEventListener("keydown", function (e) {
	   keysDown[e.keyCode] = true;
    }, false);

    addEventListener("keyup", function (e) {
	   delete keysDown[e.keyCode];
    }, false);




