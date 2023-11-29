//Smooth Scroll Navigation
const navigation = document.querySelector(".navbar");
const navigationHeight = navigation.offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);

//Start of Modal Section

function Modal() {
  const openImg = document.querySelector(".open-img");
  const images = document.querySelectorAll(".images > img");
  const hiddenImgs = document.querySelector(".hidden-img");
  const mainImage = document.querySelector(".open-img > img");
  const modalTitle = document.querySelector(".modal-title");

  let currentValue = -1;

  images.forEach((img, value) => {
    img.addEventListener("click", (x) => {
      openImg.classList.toggle("active");

      currentValue = value;

      mainImage.src = x.target.src;

      if (x.target.alt == "") {
        modalTitle.innerHTML = "Agile Geek Images";
      } else {
        modalTitle.innerHTML = x.target.alt;
      }
    });
  });

  hiddenImgs.addEventListener("click", () => {
    openImg.classList.remove("active");
  });

  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      openImg.classList.remove("active");
    }
  });
}
Modal();
//End of Modal Section 

function pageScroll(){

}

pageScroll();