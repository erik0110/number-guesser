var randomNum;

var userInput = document.querySelector('.user-input');

var guessBtn = document.querySelector('.guess');

var clearBtn = document.querySelector('.clear')

var resetBtn = document.querySelector('.reset');

var pinkNumber = document.querySelector('.pink-number');

var feedback = document.querySelector ('.instruction');

guessBtn.addEventListener('click', function() {
  // console.log("fuck");
  pinkNumber.innerText = userInput.value;
  return evaluation();
});

clearBtn.addEventListener('click', function() {
  console.log("work damnit");
  userInput.value  = '';
});

resetBtn.addEventListener('click', function() {
  randomNumber();
  console.log("I'm working " + randomNum);
  userInput.value  = '';
});

function randomNumber() {
  var min = Math.ceil(min);
  var max = Math.floor(max);
  randomNum = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
};

randomNumber();
console.log("woohoo" + randomNum);

function evaluation() {
  if(parseInt(userInput.value) < randomNum){
  feedback.innerText = "Sorry Charlie, too low";
} else if(parseInt(userInput.value) > randomNum){
  feedback.innertext = "Guess again, too high";
} else {
  feedback.innerText = "BOOM!";
}
}
