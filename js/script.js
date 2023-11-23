let slide = document.getElementById("slider");
let imgs = slide.getElementsByClassName("images");
let currentImageIndex = 0;

function startSlideShow() {
   setInterval(() => {
      imgs[currentImageIndex].style.opacity = 0;
      currentImageIndex = (currentImageIndex + 1) % imgs.length;
      imgs[currentImageIndex].style.opacity = 1;
   }, 3000);
}

startSlideShow();

function validasiInput() {
    const name = document.querySelector("input[name='name']").value != "";
    const email =
      document.querySelector("input[name='email']").value.includes("@") &&
      document.querySelector("input[name='email']").value.includes(".");
    const interest =
      document.querySelector("select[name='interest']").value !=
      "What are you interested in ?";
    return [name, email, interest];
  }

  function cekSatuInput(valid) {
    const semuaInput = document.querySelectorAll(".invalid");
    if (!valid.includes(false)) {
      document.forms["formulir"].submit();
    }
    valid.forEach((e, i) => {
      semuaInput[i].style.display = e == false ? "block" : "none";
    });
  }
  document.forms["formulir"].addEventListener("submit", function (e) {
    e.preventDefault();
    cekSatuInput(validasiInput());
  });