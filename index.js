const app = document.getElementById("app");
const image = document.getElementById("image");
const input = document.getElementById("input");

const generate = () => {
  var result = input.value.toUpperCase();
  console.log(result);

  if (result === "BURUNG") {
    image.src =
      "https://cdn.kibrispdr.org/data/307/gambar-burung-lucu-editan-0.jpg";
  } else if (result === "HARIMAU") {
    image.src =
      "https://i.kym-cdn.com/photos/images/original/001/233/509/6b9.jpg_large";
  } else if (result === "KUCING") {
    image.src =
      "https://i0.wp.com/digstraksi.com/wp-content/uploads/2019/01/47082656_335336877051723_174747259903148032_n.jpg?resize=540%2C540&ssl=1";
  } else {
    image.src =
      "https://awsimages.detik.net.id/community/media/visual/2022/08/02/pengasuh-padepokan-nur-dzat-sejati-gus-samsudin-jadab-1_169.jpeg?w=700&q=90";
  }
}; 