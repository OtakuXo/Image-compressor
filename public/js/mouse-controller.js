import { crop, croperCordinates } from "./croper.js";

const inputImage = document.getElementById("input-image");
const croperDom = document.getElementById("croper");

inputImage.addEventListener("dblclick", (e) => {
   croperCordinates.x = e.offsetX;
   croperCordinates.y = e.offsetY;
   croperCordinates.whidth = 10;
   croperCordinates.height = 10;

   croperDom.style.width = 10 + "px";
   croperDom.style.height = 10 + "px";
   croperDom.style.left = e.offsetX + "px";
   croperDom.style.top = e.offsetY + "px";

   crop();
});

const drag = (e) => {
   croperCordinates.x = croperCordinates.x + e.movementX;
   croperCordinates.y = croperCordinates.y + e.movementY;
   croperDom.style.left = croperCordinates.x + "px";
   croperDom.style.top = croperCordinates.y + "px";
   crop();
};

croperDom.addEventListener("mousedown", () => {
   croperDom.addEventListener("mousemove", drag);
});

croperDom.addEventListener("mouseup", () => {
   croperDom.removeEventListener("mousemove", drag);
});
