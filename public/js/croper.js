const inputImage = document.getElementById("input-image");
const outputImageCanvas = document.getElementById("output-image");

export const croperCordinates = { x: 0, y: 0, whidth: 300, height: 300 };

export const crop = () => {
   const context = outputImageCanvas.getContext("2d");
   // we can only place our cropper in offset height and width of image
   // canvas drawing is determinde by natural hight and width of image
   // converting offset hight and width to natural hight and width
   let offsetXPersentage = (croperCordinates.x * 100) / inputImage.offsetWidth;
   let offsetYPersentage = (croperCordinates.y * 100) / inputImage.offsetHeight;
   let xco = (inputImage.naturalWidth * offsetXPersentage ) / 100;
   let yco = (inputImage.naturalHeight * offsetYPersentage )/ 100;

   let offsetWidthPersentage = (croperCordinates.whidth * 100) / inputImage.offsetWidth
   let offsetHeightPersentage = (croperCordinates.height * 100) / inputImage.offsetHeight;
   let naturalWidth = (inputImage.naturalWidth * offsetWidthPersentage ) / 100;
   let naturalHeight = (inputImage.naturalHeight * offsetHeightPersentage )/ 100;
   context.drawImage(
      inputImage, //source image
      xco, // determindes starting point of x axis to draw
      yco, //determindes starting point of y axis to draw
      naturalWidth, // determined ending point of x axis to draw or you can look it as wieth
      naturalHeight, // determined ending point of y axis to draw or you can look it as height 
      0, // determinds where to start drawing in x axis of canvas
      0, // determines where to start drawing in y axis of canvas
      croperCordinates.whidth, // determinds where to end drawing in x axis of canvas or you can look it as wieth
      croperCordinates.height, // determinds where to end drawing in y axis of canvas or you can look it as height
   );
};
crop();
