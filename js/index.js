var cardTurnOn = function(crd, col) {
  var card = document.getElementById(crd);
  card.style.backgroundColor = (col);
};

var cardTurnOff = function(crd, col) {
  var card = document.getElementById(crd);
  card.style.backgroundColor = (col);
};

var cardTurnOnRandom = function() {

  var x = Math.floor(Math.random() * 100 + 1);

  if (x < 25) {
    cardTurnOn('card1', 'red');
    timeCard('card1', 1000, '#FF9999');

  }

  if (x < 50 && x > 25) {
    cardTurnOn('card2', 'green');
    timeCard('card2', 1000, '#80C080');

  }

  if (x < 75 && x > 50) {
    cardTurnOn('card3', 'blue');
    timeCard('card3', 1000, '#94DBFF');

  }

  if (x < 100 && x > 75) {
    cardTurnOn('card4', 'yellow');
    timeCard('card4', 1000, '#FFFFB2');

  }

}

var timeCard = function(card, sec, offColor) {
  setTimeout(function() {
    cardTurnOff(card, offColor)
  }, sec);
};

var delay = function(sec) {
  setTimeout(showNumber, sec);
}

var startGame = function() {
  var i = 1; //  set your counter to 1
  function myLoop() { //  create a loop function
    setTimeout(function() { //  call a 3s setTimeout when the loop is called
      cardTurnOnRandom(); //  your code here
      i++; //  increment the counter
      if (i < 10) { //  if the counter < 10, call the loop function
        myLoop(); //  ..  again which will trigger another 
      } //  ..  setTimeout()
    }, 2000)
  }

  myLoop();
};

var showNumber = function() {};