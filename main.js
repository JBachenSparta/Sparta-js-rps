

var human = prompt("Human input");

var computer = Math.floor((Math.random() * 3 ) + 1);
  if (computer = 1){
    computer = "r"
  }
  else if (computer = 2) {
    computer = "p"
  }
  else {
    computer = "s"
  }


function match(human, computer){

  if (human === computer){ return "Drawn" }

  if (human == "r" && computer =="p"){ return "Lose" }
  else if (human == "r" && computer == "s"){ return "Won" }

  if (human == "p" && computer =="r"){ return "Won" }
  else if (human == "p" && computer == "s"){ return "Lost" }

  if (human == "s" && computer =="r"){ return "Lost" }
  else if (human == "s" && computer == "p"){ return "Won" }

}

function tally (array){
  tally = [];
  for (var i = 0; i < 5; i++) {
  }
}


var result = match(human, computer);
alert (human + " vs " + computer + " you have " + result);
