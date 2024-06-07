    // Prompt the user
    var p1 = prompt("Place your bets.");
  
    // Function to roll dice and update the DOM
    function rollDiceAndUpdateDOM() {
      var randomNumber1 = Math.floor(Math.random() * 6) + 1;
      var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  
      var imgSrc1 = "images/dice" + randomNumber1 + ".png";
      var imgSrc2 = "images/dice" + randomNumber2 + ".png";
  
      document.getElementsByClassName("img1")[0].setAttribute("src", imgSrc1);
      document.getElementsByClassName("img2")[0].setAttribute("src", imgSrc2);
  
      if (randomNumber1 > randomNumber2) {
        document.getElementsByTagName("h1")[0].textContent = "Player 1 has won Rs. " + p1*2 ;
      } else if (randomNumber1 < randomNumber2) {
        document.getElementsByTagName("h1")[0].textContent = "Player 2 has won Rs. " + p1*2 ;
      } else {
        document.getElementsByTagName("h1")[0].textContent = "It's a tie";
      }
    }
  
    // Execute the function to roll dice and update the DOM
    rollDiceAndUpdateDOM();

  