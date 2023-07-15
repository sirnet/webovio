document.addEventListener('DOMContentLoaded', () => {
    // инициализация слайдера
    new ItcSimpleSlider('.itcss', {
      loop: true,
      autoplay: true,
      interval: 4000,
      swipe: false,
    });
  });