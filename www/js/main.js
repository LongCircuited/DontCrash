"use strict";

var Game = window.Game || {};

/*GLOBAL VARS*/
var GameScene = new Game.Scene.Scene();
var player = new Game.Player.Player(canvasWidth/2, canvasHeight - 50, 20, 40, "blue", 0.1);
var carcount = 0;
var keyDown = false;
var cars = [];
var powerups = [];

window.onload = function () {
    Game.Engine.init();
    
};

Game.Main = {
    
};