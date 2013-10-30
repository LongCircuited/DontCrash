"use strict";

var Game = window.Game || {};

/*GLOBAL VARS*/
var GameScene = new Game.Scene.Scene();
var player = new Game.Player.Player(canvasWidth/2, canvasHeight - 50, 20, 40, "blue", 5);
var cars = [];
var powerups = [];

window.onload = function () {
    Game.Engine.init();
    
};

Game.Main = {
    
};