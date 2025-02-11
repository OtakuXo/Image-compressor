const outputImageCanvas = document.getElementById("output-image");
const download = document.getElementById("download");
const convert = document.getElementById("convert");

download.addEventListener("click", () => {
  const type = convert.value;
  let dataUrl = "";

  if (type === "jpeg") {
    dataUrl = outputImageCanvas.toDataURL("image/jpeg");
  } else {
    dataUrl = outputImageCanvas.toDataURL("image/png");
  }
  if (dataUrl === "") return;

  const a = document.createElement("a");
  a.href = dataUrl;
  a.download = dataUrl.substring(40, 50);
  a.click();
});
