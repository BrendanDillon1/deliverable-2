
    var playerName = prompt("Welcome to GC mini golf! What is your name?");

    var numHoles = prompt("Hi, " + playerName + "! Would you like to play 3 or 6 holes?");
    var totalPar = numHoles * 3; 

    var score = 0;

    for (var i = 1; i <= numHoles; i++) {
      var numPutts = prompt("How many putts for hole " + i + "? (par: 3)");
      score += parseInt(numPutts);
    }

    var parDifference = score - totalPar;
 
    if (parDifference < 0) {
      console.log("Great job, " + playerName + "! Your total par was: " + parDifference + ".");
    } else if (parDifference > 0) {
      console.log("Nice try, " + playerName + "... Your total par was: +" + parDifference + ".");
    } else {
      console.log("Good game, " + playerName + ". Your total par was: 0.");
    }
 