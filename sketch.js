var ball;
var database, position;
var gameState = 0;
var playerCount = 0;
var player, form, game;

function setup(){
    createCanvas(500,500);

    database = firebase.database();

    game = new Game;
    game.getState();
    game.startState();
}

function draw(){
    background("white");
    drawSprites();
}
