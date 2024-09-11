function showMessage(message) {
  console.log(message);
}
showMessage("Я учу JavaScript!");
const image = document.getElementById("image");

const prevOnClick = () => {
  image.src = "assets/images/hummingbird-2.avif";
};
const nextOnClick = () => {
  image.src = "assets/images/hummingbird-3.avif";
};
