import { crop, croperCordinates } from "../croper.js";

const croperTop = document.getElementById("croper-top");
const croperBottom = document.getElementById("croper-bottom");
const croperLeft = document.getElementById("croper-left");
const croperRight = document.getElementById("croper-right");

const croperDom = document.getElementById("croper");
const inputImage = document.getElementById("input-image");

const handleTop = (e) => {
   croperCordinates.y = croperCordinates.y + e.movementY;
   croperCordinates.height = croperCordinates.height - e.movementY;
   croperDom.style.top = croperCordinates.y + "px";
   croperDom.style.height = croperCordinates.height + "px";
   crop();
};
const handleBottom = (e) => {
   croperCordinates.height = croperCordinates.height + e.movementY;
   croperDom.style.height = croperCordinates.height + "px";
   crop();
};
const handleLeft = (e) => {
   croperCordinates.x = croperCordinates.x + e.movementX;
   croperCordinates.whidth = croperCordinates.whidth - e.movementX;
   croperDom.style.left = croperCordinates.x + "px";
   croperDom.style.width = croperCordinates.whidth + "px";
   crop();
};
const handleRight = (e) => {
   croperCordinates.whidth = croperCordinates.whidth + e.movementX;
   croperDom.style.width = croperCordinates.whidth + "px";
   crop();
};

const croperPositions = [
   { dom: croperTop, fu: handleTop },
   { dom: croperBottom, fu: handleBottom },
   { dom: croperLeft, fu: handleLeft },
   { dom: croperRight, fu: handleRight },
];

inputImage.addEventListener("mousemove", (e) => {
   console.log(e.movementY)
});


// this is a problem
croperPositions.map((item) => {

   item.dom.addEventListener("mousedown", () => {
      croperDom.addEventListener("mousemove", item.fu);
      inputImage.addEventListener("mousemove", item.fu);
   });

   item.dom.addEventListener("mouseup", () => {
      inputImage.removeEventListener("mousemove", item.fu);
      croperDom.removeEventListener("mousemove", item.fu);
   });
   inputImage.addEventListener("mouseup", () => {
      inputImage.removeEventListener("mousemove", item.fu);
      croperDom.removeEventListener("mousemove", item.fu);
   });
   croperDom.addEventListener("mouseup", () => {
      inputImage.removeEventListener("mousemove", item.fu);
      croperDom.removeEventListener("mousemove", item.fu);
   })
});
