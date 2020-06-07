function roll() {

  var randomNumber1 = Math.ceil(Math.random() * 6);

  var randomDiceImage = "dice" + randomNumber1 + "-black.png";

  var randomImageSource = "images/dice" + randomNumber1 + "-black.png";

  document.querySelector(".img1").setAttribute("src", randomImageSource);

  var randomNumber2 = Math.ceil(Math.random() * 6);

  var randomDiceImage2 = "dice" + randomNumber2 + "-black.png";

  var randomImageSource2 = "images/dice" + randomNumber2 + "-black.png";

  document.querySelector(".img2").setAttribute("src", randomImageSource2);

  document.querySelector(".myButton").innerHTML = "Roll Again!";

  // Winner Displayed

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  } else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "It's A Draw!";
  }

}
