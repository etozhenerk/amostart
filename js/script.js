const myCarousel = new Carousel(document.querySelector(".carousel"), {
  slides: [{ slidesPerPage: 1 }, { center: true }],
  Navigation: {
    prevTpl: `<svg width="17" height="29" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.4601 2.46033L3 14.9204L15.4601 27.3805" stroke="white" stroke-width="3" stroke-linecap="round"/>
          </svg>
          `,
    nextTpl: `<svg width="17" height="29" viewBox="0 0 17 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.38074 27.3805L14.8408 14.9204L2.38074 2.46033" stroke="white" stroke-width="3" stroke-linecap="round"/>
          </svg>
          `,
  },
});
