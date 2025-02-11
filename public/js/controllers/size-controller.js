import { crop, croperCordinates } from "../croper.js";

const croperTop = document.getElementById("croper-top");
const croperBottom = document.getElementById("croper-bottom");
const croperLeft = document.getElementById("croper-left");
const croperRight = document.getElementById("croper-right");

const croperDom = document.getElementById("croper");

const handleTop = (e) => {
   console.log('top', e.movementY)
   croperCordinates.height = croperCordinates.height - e.movementY;
   croperDom.style.height = croperCordinates.height + "px";
};
const handleBottom = (e) => {
   croperCordinates.y = croperCordinates.y - e.movementY
   croperCordinates.x = croperCordinates.x - e.movementX
   croperCordinates.height = croperCordinates.height + e.movementY;
   croperDom.style.height = croperCordinates.height + "px";
};
const handleLeft = (e) => {
   croperCordinates.whidth = croperCordinates.whidth - e.movementX;
   croperDom.style.width = croperCordinates.whidth + "px";
};
const handleRight = (e) => {
   croperCordinates.y = croperCordinates.y - e.movementY
   croperCordinates.x = croperCordinates.x - e.movementX
   croperCordinates.whidth = croperCordinates.whidth + e.movementX;
   croperDom.style.width = croperCordinates.whidth + "px";
};

const croperPositions = [
   { dom: croperTop, fu: handleTop },
   { dom: croperBottom, fu: handleBottom },
   { dom: croperLeft, fu: handleLeft },
   { dom: croperRight, fu: handleRight },
];

croperPositions.map((item) => {
   item.dom.addEventListener("mousedown", () => {
      item.dom.addEventListener("mousemove", item.fu);
      crop();
   });
   item.dom.addEventListener("mouseup", () => {
      item.dom.removeEventListener("mousemove", item.fu);
   });
   item.dom.addEventListener("mouseout", () => {
      item.dom.removeEventListener("mousemove", item.fu);
   });
});
