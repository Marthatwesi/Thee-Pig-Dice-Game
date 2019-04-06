/*
    Created on : April 5 , 2019, 17:13
    Author     : TWESIGYE MARTHA
     
*/

//back-end

var player1;
var player2;

var diceRoller = function () {
    return Math.floor((Math.random() * 6) + 1);
    // return Math.floor(6*Math.random())+1;
}
function Player(changer) {
    this.roll = 0;
    this.currentpoints = 0;
    this.totalpoints = 0;
    this.changer = changer;
}
// game Start
Player.prototype.gameStart = function () {
    this.roll = 0;
    this.currentpoints = 0;
    this.totalpoints = 0;
    $("#player1-section, #player2-section").removeClass("winner");
}
