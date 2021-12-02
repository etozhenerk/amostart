const swiper = new Swiper(".swiper", {
  loop: false,
  initialSlide: 1,
  spaceBetween: 10,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  centeredSlides: true,
  centeredSlidesBounds: true,
  // Navigation arrows
  navigation: {
    nextEl: ".slider__button-next",
    prevEl: ".slider__button-prev",
  },
  breakpoints: {
    992: {
      spaceBetween: 60,
    },
  },
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
  const modal = document.querySelector(".modal");
  const modalForm = document.querySelector(".modal-form");
  const mobileMenu = document.querySelector(".mobile-menu");

  const openOverlay = () => {
    overlay.classList.add("overlay--isOpen");
    body.style.overflow = "hidden";

  };
  const openModal = () => {
    modal.classList.add("modal--isOpen");
  };
  const openModalForm = () => {
    modalForm.classList.add("modal-form--isOpen");
  };
  const openMobileMenu = () => {
    mobileMenu.classList.add("mobile-menu--isOpen");
  };
  const closeMobileMenu = () => {
    mobileMenu.classList.remove("mobile-menu--isOpen");
  };
  const closeOverlay = () => {
    overlay.classList.remove("overlay--isOpen");
    body.style.overflow = "";
  };
  const closeModal = () => {
    modal.classList.remove("modal--isOpen");
  };
  const closeModalForm = () => {
    modalForm.classList.remove("modal-form--isOpen");
  };

  body.addEventListener("click", (e) => {
    const target = e.target;
    if (target.closest(".card")) {
      openOverlay();
      openModal();
    }
    if (target.closest(".header__button")) {
      openOverlay();
      openModalForm();
    }
    if (target.closest(".header__menu")) {
      openOverlay();
      openMobileMenu();
    }
    if (target.closest(".modal__close") || target === overlay) {
      closeOverlay();
      closeModal();
      closeModalForm();
      closeMobileMenu();
    }
  });
};

const changeOption = () => {
  const selected = document.querySelector(".selected"),
    optionsContainer = document.querySelector(".options-container");

  selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
  });

  optionsContainer.addEventListener("click", (event) => {
    const target = event.target.closest(".option");
    if (target) {
      selected.innerHTML = target.querySelector("label").innerHTML;
      optionsContainer.classList.remove("active");
    }
  });
};


openModal();
accordeon();
changeOption();

const covidLabel = document.querySelector('.header__info');
console.dir(covidLabel);