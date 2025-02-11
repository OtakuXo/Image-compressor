import {crop, croperCordinates} from '../croper.js'

const croperDom = document.getElementById("croper");

window.addEventListener("keydown", (e) => {
   croperDom.style.left = croperCordinates.x + "px";
   croperDom.style.top = croperCordinates.y + "px";
   croperDom.style.width = croperCordinates.whidth + "px";
   croperDom.style.height = croperCordinates.height + "px";
   let key = e.key.toLowerCase()
   console.log(key)
   crop();
   switch (key) {
      case "arrowright":
      case "d":
         croperCordinates.x++;
         break;
      case "arrowleft":
      case "a":
         croperCordinates.x--;
         break;
      case "arrowdown":
      case "s":
         croperCordinates.y++;
         break;
      case "arrowup":
      case "w":
         croperCordinates.y--;
         break;
      case "]":
         croperCordinates.height++;
         croperCordinates.whidth++;
         break;
      case "[":
         croperCordinates.height--;
         croperCordinates.whidth--;
         break;
      case "}":
         croperCordinates.x--;
         croperCordinates.y--;
         croperCordinates.height++;
         croperCordinates.whidth++;
         break;
      case "{":
         croperCordinates.y++;
         croperCordinates.x++;
         croperCordinates.height--;
         croperCordinates.whidth--;
         break;
   }
});
