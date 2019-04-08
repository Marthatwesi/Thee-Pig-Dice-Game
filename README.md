### Thee Pig Dice
### Author
MARTHA TWESIGYE  (Monday, 8 April)(06:52 AM)
### Description
This is a web site that implements the game of pig dice.
Visit this [link](https://en.wikipedia.org/wiki/Markdown)to learn how the game is played.
## Setup/Installation requirements
* Clone or download and unzip the repository from github, https://github.com/Marthatwesi/Thee-Pig-Dice-Game.git
* If you have git Use this command git clone https://github.com/Marthatwesi/Thee-Pig-Dice-Game.git to clone the project.
* Open index.html via your web browser.
## Known Bugs
no bugs as yet but if found, please let me know through any of the contacts detailed below.
## Technologies used
* HTML
* CSS
* JAVASCRIPT
* Jquery
* Bootstrap
## Support and Contact Details
* For any comments,suggestions,feedback or inquiries, contact me via email: twesimartha@gmail.com or via telephone :+254712385891 0r +256705330004 as well as via github : Marthatwesi
* Make contributions to the code.

## BDD

|GENERAL BEHAVIOUR                                                                  |   INPUT  |   OUTPUT
|-----------------------------------------------------------------------------------|--------- |----------
| The player will click a button, and it will generate a random number from 1 to 6. |  click   |    0              | The player will click roll button if he receives a 1, the player will add 0 points  |  click   |Next Players' turn 
their total score.      |          |
|The player will click roll button if he receives any number that isn't 1, this adds| click    |Summation of current score to their  current score.
|The player will click a roll button, and their result will display.                | click    | Generated points
|The player will click a roll button and receive any number other than one, and can | click    | Hold choose to hold their turn.
|The player will hold, their turn will end while their points are added to their total score   | click    | Turn ends
|The player will roll, if their points will total or exceed 100, the player wins the game.| click   | winner alert