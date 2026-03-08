import { crop, croperCordinates } from '../croper.js'

const croperDom = document.getElementById("croper");

window.addEventListener("keydown", (e) => {
   croperDom.style.left = croperCordinates.x + "px";
   croperDom.style.top = croperCordinates.y + "px";
   croperDom.style.width = croperCordinates.whidth + "px";
   croperDom.style.height = croperCordinates.height + "px";
   let key = e.key.toLowerCase()
   crop();
   switch (key) {
      case "arrowright":
      case "d":
         croperCordinates.x = croperCordinates.x + 5;
         break;
      case "arrowleft":
      case "a":
         croperCordinates.x = croperCordinates.x - 5;
         break;
      case "arrowdown":
      case "s":
         croperCordinates.y = croperCordinates.y + 5;
         break;
      case "arrowup":
      case "w":
         croperCordinates.y = croperCordinates.y - 5;
         break;
      case "]":
         croperCordinates.height = croperCordinates.height + 5;
         croperCordinates.whidth = croperCordinates.whidth + 5;
         break;
      case "[":
         croperCordinates.height = croperCordinates.height - 5;
         croperCordinates.whidth = croperCordinates.whidth - 5;
         break;
      case "}":
         croperCordinates.x = croperCordinates.x - 5;
         croperCordinates.y = croperCordinates.y - 5;
         croperCordinates.height = croperCordinates.height + 5;
         croperCordinates.whidth = croperCordinates.whidth + 5;
         break;
      case "{":
         croperCordinates.y = croperCordinates.y + 5;
         croperCordinates.x = croperCordinates.x + 5;
         croperCordinates.height = croperCordinates.height - 5;
         croperCordinates.whidth = croperCordinates.whidth - 5;
         break;
   }
});
