import { crop } from "./croper.js";

const uploadImage = document.getElementById("upload");
const inputImage = document.getElementById("input-image");

const originalWidth = document.getElementById("original-width");
const originalHeight = document.getElementById("original-height");
const fileSize = document.getElementById("image-size");

uploadImage.addEventListener("change", (e) => {
   if (!e.target.files[0]) return;

   const fileReader = new FileReader();
   fileReader.readAsDataURL(e.target.files[0]);

   fileReader.onload = (event) => {
      inputImage.src = event.target.result;
      fileSize.innerHTML = "original size: " + (e.target.files[0].size / 1024).toFixed(2) + "kb" 
      originalWidth.innerHTML = "original width: " + inputImage.naturalWidth
      originalHeight.innerHTML = "original height: "+inputImage.naturalHeight
      crop();
   };
});
