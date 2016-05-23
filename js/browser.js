var Game = require('./game.js').Game;

$(document).ready(function(){
  });
  $("#red").click(function(){
    sequence.append("red");
  });
  $("#green").click(function(){
    sequence.append("green");
  });
  $("#blue").click(function(){
    sequence.append("blue");
  $("#yellow").click(function(){
    sequence.append("yellow");
  });
  console.log(Game.encode());
});
