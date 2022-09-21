const owl = $('.owl-carousel');
owl.owlCarousel({
  center: true,
  loop: true,
  margin: 20,
  startPosition: 1,
  items: 3,
  responsive: {
    850: {
      items: 3,
      startPosition: 1,
    },
    1000: {
      margin: 20,
    },
    1200: {
      margin: 30
    }
  }
});
// Go to the next item
$('.slider__btn--prev').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.slider__btn--next').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel');
})

const btnToggle = document.querySelector('.btn-toggle');
const menuIcon = document.querySelector('.menu-icon');
const headerTop = document.querySelector('.header__top');
btnToggle.onclick = function(){
  headerTop.classList.toggle('header__top--mobile')
  menuIcon.classList.toggle('menu-icon-active');
  document.body.classList.toggle('no-scroll')
}