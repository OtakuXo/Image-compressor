const outputImageCanvas = document.getElementById("output-image");
const inputImage = document.getElementById("input-image");
const download = document.getElementById("download");
const convert = document.getElementById("convert");

download.addEventListener("click", () => {
   const type = convert.value;
   let dataUrl = "";

   if (inputImage.getAttribute('src') === null) return;

   if (type === "jpeg") {
      dataUrl = outputImageCanvas.toDataURL("image/jpeg");
   } else {
      dataUrl = outputImageCanvas.toDataURL("image/png");
   }


   const a = document.createElement("a");
   a.href = dataUrl;
   a.download = dataUrl.substring(40, 50);
   a.click();
});
