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
// tossing the die checking for 1 and switching turns
Player.prototype.dieOne = function () {
    if (this.roll === 1) {
        this.currentpoints = 0;
        alert("sorry you rolled a one, switch to the other player");
    } else {
        this.currentpoints += this.roll;

    }
}
// holding the die
Player.prototype.holdDie = function () {
    this.totalpoints += this.currentpoints;
    this.currentpoints = 0;
    alert("your turn is over, switch to the other player");
}

// checking for the winner
Player.prototype.checkWinner = function () {
    while (this.totalpoints >= 100) {
        alert(" you won the game buddy!");
        $("#player1-section, #player2-section").addClass("winner");
        gameStart();
    }
}
//user interface
$("button#instruction").click(function () {
    $("#instructions").slideToggle();
});
$(document).ready(function () {


    $("button#starter").click(function (event) {

        player1 = new Player(true);
        player2 = new Player(false);

        player1.gameStart();
        player2.gameStart();
        $("#player2").removeClass("selector");
        $("#player1").removeClass("selector");
        $("#p1-currentscore, #p2-currentscore").empty();
        $(".p1Score").empty();
        $(".p2Score").empty();
        $("#rollsideOne, #rollsideTwo").empty();

    });

    