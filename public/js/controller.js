import {crop, croperCordinates} from './croper.js'

const croperDom = document.getElementById("croper");

window.addEventListener("keydown", (e) => {
   croperDom.style.left = croperCordinates.x + "px";
   croperDom.style.top = croperCordinates.y + "px";
   croperDom.style.width = croperCordinates.whidth + "px";
   croperDom.style.height = croperCordinates.height + "px";
   crop();
   switch (e.key) {
      case "ArrowRight":
      case "d":
      case "D":
         croperCordinates.x = croperCordinates.x + 5;
         break;
      case "ArrowLeft":
      case "a":
      case "A":
         croperCordinates.x--;
         break;
      case "ArrowDown":
      case "s":
      case "S":
         croperCordinates.y++;
         break;
      case "ArrowUp":
      case "w":
      case "W":
         croperCordinates.y--;
         break;
      case "]":
      case "}":
         croperCordinates.height++;
         croperCordinates.whidth++;
         break;
      case "[":
      case "{":
         croperCordinates.height--;
         croperCordinates.whidth--;
         break;
   }
});
