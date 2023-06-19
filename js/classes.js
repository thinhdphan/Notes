// class = blueprint for creating objects
//        define what properties and methods they have
//        use a constructor for unique properties

class Player{
  score = 0;

  pause(){
    console.log("you paused the game.");
  }

  exit(){
    console.log("You exited.");
  }
}

const player1 = new Player();
const player2 = new Player();

player1.pause();
player2.exit();