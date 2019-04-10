
//function to prompt user input, returns all strings to lowercase
function GetHumanInput (){
  var humanInput = prompt("Please enter either:\r\n(r) rock \r\n(p) paper \r\n(s) scissors").toLowerCase ();
  return humanInput
}

//generate Random number function
function getRandomComputerInput (){
  var computerRandom = Math.floor((Math.random() * 3 ) + 1);

  if (computerRandom == 1){
    computerRandom = "r"
    return computerRandom
  }
  else if (computerRandom == 2){
    computerRandom = "p"
    return computerRandom
  }
  else if (computerRandom == 3){
    computerRandom = "s"
    return computerRandom
  }
}

//Function start, calls function getRandomComputerInput and GetHumanInput and then compares the result of each, resulting in either a win draw or lose which is outputted to console
function start () {
  for (var i = 0; i < 5; i++) {
    var word = "";
    
    var inputHuman = GetHumanInput ();
    var inputComputer = getRandomComputerInput();

     if (inputHuman === inputComputer) { word += "Drawn" };

     if (inputHuman == "r" && inputComputer == "s") { word += "Win" }
     else if (inputHuman == "r" && inputComputer == "p") { word += "Lose"  };

     if (inputHuman == "P" && inputComputer == "r") { word += "Win"  }
     else if (inputHuman == "p" && inputComputer == "s") { word += "Lose" };

     if (inputHuman == "s" && inputComputer == "p") { word += "Win"  }
     else if (inputHuman == "S" && inputComputer == "r") { word += "Lose"};

     console.log (inputHuman, inputComputer, word)
  }
}
//initiates the start function
start ();
