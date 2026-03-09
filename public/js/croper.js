const inputImage = document.getElementById("input-image");
const preview = document.getElementById("prevew");
const reducer = document.getElementById("size-reducer-input")
const outputSize = document.getElementById("output-size")

// i need to make it so reducer value is in between 0-1
export const croperCordinates = { x: 0, y: 0, whidth: 300, height: 300 };

export const crop = () => {
   const outputImageCanvas = document.getElementById("output-image")
   const context = outputImageCanvas.getContext("2d");
   outputImageCanvas.width = croperCordinates.whidth * reducer.value;
   outputImageCanvas.height = croperCordinates.height * reducer.value;

   if (croperCordinates.whidth <= croperCordinates.height) {
      preview.className = "horizontal"
   }
   if (croperCordinates.whidth > croperCordinates.height) {
      preview.className = "potret"
   }

   // we can only place our cropper in offset height and width of image
   // canvas drawing is determinde by natural hight and width of image
   // converting offset hight and width to natural hight and width
   let mousePositionInSourceImageOffsetXPersentage =
      (croperCordinates.x * 100) / inputImage.offsetWidth;
   let mousePositionInSourceImageOffsetYPersentage =
      (croperCordinates.y * 100) / inputImage.offsetHeight;
   let mousePositionInSourceImageNaturalX =
      (inputImage.naturalWidth * mousePositionInSourceImageOffsetXPersentage) /
      100;
   let mousePositionInSourceImageNaturalY =
      (inputImage.naturalHeight * mousePositionInSourceImageOffsetYPersentage) /
      100;

   let sourceImageOffsetWidthPersentage =
      (croperCordinates.whidth * 100) / inputImage.offsetWidth;
   let sourceImageOffsetHeightPersentage =
      (croperCordinates.height * 100) / inputImage.offsetHeight;
   let naturalImageWidth =
      (inputImage.naturalWidth * sourceImageOffsetWidthPersentage) / 100;
   let naturalImageHeight =
      (inputImage.naturalHeight * sourceImageOffsetHeightPersentage) / 100;

   context.drawImage(
      inputImage, 
      mousePositionInSourceImageNaturalX, 
      mousePositionInSourceImageNaturalY,
      naturalImageWidth,
      naturalImageHeight,
      0, 
      0,
      outputImageCanvas.width, 
      outputImageCanvas.height,
   );
   const dataUrl = outputImageCanvas.toDataURL("image/jpeg");
   const base64string = dataUrl.split(',')[1];
   const size = window.atob(base64string).length;
   outputSize.innerHTML = "output size: " + (size / 1024).toFixed(2) + "kb"
   // console.log(size)
   
   preview.src = dataUrl
};
