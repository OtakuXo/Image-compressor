import { crop, croperCordinates } from "../croper.js";

const inputImage = document.getElementById("input-image");
const croperDom = document.getElementById("croper");

inputImage.addEventListener("dblclick", (e) => {
   // console.log(e)
   croperCordinates.x = e.offsetX;
   croperCordinates.y = e.offsetY;
   croperCordinates.whidth = 100;
   croperCordinates.height = 100;

   croperDom.style.width = croperCordinates.whidth + "px";
   croperDom.style.height = croperCordinates.height + "px";
   croperDom.style.left = e.offsetX + "px";
   croperDom.style.top = e.offsetY + "px";

   crop();
});

const dragCroper = (e) => {
   croperCordinates.x = croperCordinates.x + e.movementX;
   croperCordinates.y = croperCordinates.y + e.movementY;
   croperDom.style.left = croperCordinates.x + "px";
   croperDom.style.top = croperCordinates.y + "px";
   crop();
};

croperDom.addEventListener("mousedown", () => {
   croperDom.addEventListener("mousemove", dragCroper);
});

croperDom.addEventListener("mouseup", () => {
   croperDom.removeEventListener("mousemove", dragCroper);
});
croperDom.addEventListener("mouseout", () => {
   croperDom.removeEventListener("mousemove", dragCroper);
});

