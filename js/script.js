const swiper = new Swiper('.swiper', {
  loop: false,
  initialSlide: 1,
  spaceBetween: 10,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  centeredSlides: true,
  centeredSlidesBounds: true,
  // Navigation arrows
  navigation: {
    nextEl: '.slider__button-next',
    prevEl: '.slider__button-prev',
  },
  breakpoints: {
    992: {
      spaceBetween: 60
    }
  }
});

const accordeon = () => {
  const accordeonBlock = document.querySelector(".accordeon"),
    elements = accordeonBlock.querySelectorAll(".accordeon-element");

  accordeonBlock.addEventListener("click", (e) => {
    const target = e.target,
      parent = target.closest(".accordeon-element");

    if (parent) {
      if (parent.classList.contains("faq__item--active")) {
        parent.classList.remove("faq__item--active");
      } else {
        elements.forEach((elem) => {
          elem.classList.remove("faq__item--active");
          if (elem === parent) {
            elem.classList.add("faq__item--active");
          }
        });
      }
    }
  });
};

const openModal = () => {
  const overlay = document.querySelector(".overlay");
  const body = document.querySelector("body");

  const open = () => {
    overlay.classList.add("overlay--isOpen");
  }
  const close = () => {
    overlay.classList.remove("overlay--isOpen");
  }

  body.addEventListener('click', e => {
    const target = e.target;
    if(target.closest(".card")){
      open();
    }
    if(target.closest(".modal__close") || target === overlay){
      close();
    }
  })
}

accordeon();
openModal();