"use strict";

var Game = window.Game || {};

/*GLOBAL VARS*/
var GameScene = new Game.Scene.Scene();
var playerimage = new Image();
playerimage.src = "images/car.png";
var player = new Game.Player.Player(canvasWidth/2, canvasHeight-80, 32, 80, "blue", 70, playerimage);
var carcount = 0;
var max = 15;
var now = new Date();
var level = 1;
var oldlevel = 0;
var keyDown = false;
var cars = [];
var powerups = [];

window.onload = function () {
    Game.Engine.init();
    initCars();
    initPowerups();
};

Game.Main = {
    
};