const inputImage = document.getElementById("input-image");
const preview = document.getElementById("prevew");
export const croperCordinates = { x: 0, y: 0, whidth: 300, height: 300 };

export const crop = () => {
   const outputImageCanvas = document.getElementById("output-image")
   const context = outputImageCanvas.getContext("2d");
   outputImageCanvas.width = croperCordinates.whidth;
   outputImageCanvas.height = croperCordinates.height;

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
      inputImage, //source image
      mousePositionInSourceImageNaturalX, // determindes starting point of x axis to draw
      mousePositionInSourceImageNaturalY, //determindes starting point of y axis to draw
      naturalImageWidth, // deteakjrmined ending point of x axis to draw or you can look it as wieth
      naturalImageHeight, // determined ending point of y axis to draw or you can look it as height
      0, // determinds where to start drawing in x axis of canvas
      0, // determines where to start drawing in y axis of canvas
      outputImageCanvas.width, // determinds where to end drawing in x axis of canvas or you can look it as wieth
      outputImageCanvas.height, // determinds where to end drawing in y axis of canvas or you can look it as height
   );
   const dataUrl = outputImageCanvas.toDataURL("image/png");
   preview.src = dataUrl

};
crop();
