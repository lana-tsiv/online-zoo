const App = () => {
  let currentSlide = 2;
  let clicksCount = 0;

  const menu = document.querySelector("#nav");
  const burgerItem = document.querySelector(".burger");
  const test = document.querySelectorAll(".testimonial__card");
  const popUp = document.querySelector(".pop__up__testimonial");
  const popClose = document.querySelector(".pop__up__close");
  const close = document.querySelector(".header_nav-close");
  const mobileArrowRight = document.querySelector(".pets__arrow-right");
  const mobileArrowLeft = document.querySelector(".pets__arrow-left");
  const slide1 = document.querySelector(".pets__wrapper");
  const slide2 = document.querySelector(".second-slide");
  const slide3 = document.querySelector(".third-slide");
  const pets = document.querySelector(".pets");

  const navHandler = () => menu.classList.add("active");

  const closeMenuHandler = (e) => {
    if (
      e.target.id !== "nav" &&
      e.target.id !== "burger" &&
      e.target.id !== "burger-line1" &&
      e.target.id !== "burger-line2" &&
      e.target.id !== "burger-line3"
    ) {
      menu.classList.remove("active");
    }

    if (e.target.id === "close") {
      menu.classList.remove("active");
    }
  };

  const closeModalHandler = (e) => {};

  const mobileArrowRightHandler = () => {
    clicksCount = clicksCount + 1;

    console.log(clicksCount);

    if (currentSlide === 2) {
      if (clicksCount >= 2) {
        console.log("THIRD CLICK !! GO!");

        pets.insertBefore(slide1, slide2);

        slide1.style.transform = `translateX(0)`;
        slide2.style.transform = `translateX(0)`;
        slide3.style.transform = `translateX(0)`;

        slide1.style.transition = "0s";

        setTimeout(() => {
          slide1.style.transition = "0.2s";
          slide1.style.transform = `translateX(135%)`;
          slide2.style.transform = `translateX(135%)`;
          slide3.style.transform = `translateX(135%)`;

          currentSlide = 1;
        }, 0.0000001);

        return;
      }

      console.log("FIRST CLICK !! GO!");
      slide1.style.transform = `translateX(135%)`;
      slide2.style.transform = `translateX(135%)`;
      slide3.style.transform = `translateX(135%)`;
      currentSlide = 1;

      return;
    } else if (currentSlide === 1) {
      pets.insertBefore(slide2, slide1);

      console.log("SECOND CLICK !! GO!");

      slide1.style.transform = `translateX(0)`;
      slide2.style.transform = `translateX(0)`;
      slide3.style.transform = `translateX(0)`;

      slide1.style.transition = "0s";

      setTimeout(() => {
        slide1.style.transition = "0.2s";
        slide1.style.transform = `translateX(135%)`;
        slide2.style.transform = `translateX(135%)`;
        slide3.style.transform = `translateX(135%)`;
        currentSlide = 2;
      }, 0.0000001);
    }

    return;
  };

  const mobileArrowLeftHandler = () => {
    if (currentSlide === 2 || currentSlide === 1) {
      slide1.style.transform = "translateX(-135%)";
      slide3.style.transform = "translateX(-135%)";
      slide2.style.transform = "translateX(-135%)";
      currentSlide = 3;
    }
  };

  close.addEventListener("click", closeMenuHandler);
  burgerItem.addEventListener("click", navHandler);

  document.addEventListener("click", (e) => closeMenuHandler(e));
  document.addEventListener("click", (e) => closeModalHandler(e));

  mobileArrowRight.addEventListener("click", mobileArrowRightHandler);
  mobileArrowLeft.addEventListener("click", mobileArrowLeftHandler);

  const scroll = document.querySelector('input[type="range"]'),
    positionCard = document.querySelectorAll(".testimonial__card"),
    inputSize = document.querySelector('input[type="range"]');
  const screenWidth = window.screen.width;
  // -------------------------------------------------------testimonials-scroll--------------------------------->
  let newMax;
  const moveCards = screenWidth > 1340 ? 297 : screenWidth <= 995 ? 343 : 323;

  if (screenWidth <= 995) {
    inputSize.setAttribute("max", 9);
  } else if (screenWidth > 1340) {
    inputSize.setAttribute("max", 7);
  }

  let rangeValue = function () {
    let newValue = scroll.value * moveCards;

    positionCard.forEach((card) => {
      console.log(card);
      card.style.left = -newValue + "px";
    });
  };

  scroll.addEventListener("input", rangeValue);
  // ---------------------------------------------------------------------------------------------------------->

  // pop-up

  const popAvatar = document.querySelector(".pop__testimonial-avatar");
  const popName = document.querySelector(".pop__testimonial-name");
  const popText = document.querySelector(".pop__testimonial__card-content");

  test.forEach((elem) => {
    elem.addEventListener("click", (event) => {
      const avatar = elem.getElementsByTagName("img");
      const name = elem.getElementsByTagName("h4");
      const text = elem.getElementsByTagName("p");

      popAvatar.setAttribute("src", avatar[0].getAttribute("src"));
      popName.textContent = name[0].textContent;
      popText.textContent = text[0].textContent;
      popUp.classList.add("active__popup");
    });
  });

  popClose.addEventListener("click", () => {
    popUp.classList.remove("active__popup");
  });

  // -------------------------
};

document.addEventListener("DOMContentLoaded", App);
