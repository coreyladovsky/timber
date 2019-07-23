export const keydownListner = (chopper) => (e) => {
 switch (e.key) {
   case "ArrowUp":
   case "w":
     chopper.movement.down = false;
     chopper.movement.up = true;
     break;
   case "ArrowDown":
   case "s":
     chopper.movement.up = false;
     chopper.movement.down = true;
     break;
   case "ArrowRight":
   case "d":
     chopper.movement.left = false;
     chopper.movement.right = true;
     break;
   case "ArrowLeft":
   case "a":
     chopper.movement.right = false;
     chopper.movement.left = true;
     break;
   default:
   console.log("Please keep your eyes and attention on the game!");
   console.log("https://github.com/coreyladovsky");
 }

};


export const keyupListner = (chopper) => (e) => {
  switch (e.key) {
    case "ArrowUp":
    case "w":
    chopper.movement.up = false;
      break;
    case "ArrowDown":
    case "s":
    chopper.movement.down = false;
    break;
    case "ArrowRight":
    case "d":
    chopper.movement.right = false;
    break;
    case "ArrowLeft":
    case "a":
    chopper.movement.left = false;
      break;
    default:
    console.log("Please keep your eyes and attention on the game!");
  }
};
