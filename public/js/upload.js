const uploadImage = document.getElementById("upload");
const inputImage = document.getElementById("input-image");

uploadImage.addEventListener("change", (e) => {
   if (!e.target.files[0]) return;

   const fileReader = new FileReader();
   fileReader.readAsDataURL(e.target.files[0]);

   fileReader.onload = (event) => {
      inputImage.src = event.target.result;
   };
});
