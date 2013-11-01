"use strict";

var Game = window.Game || {};

/*GLOBAL VARS*/
var GameScene = new Game.Scene.Scene();
var playerimage = new Image();
playerimage.src = "images/car.png";
var player = new Game.Player.Player(canvasWidth/2, canvasHeight-80, 32, 80, "blue", 30, playerimage);
var carcount = 0;
var max = 15;

var level = 1;

var keyDown = false;
var cars = [];
var powerups = [];

window.onload = function () {
    Game.Engine.init();
    initCars();
};

Game.Main = {
    
};