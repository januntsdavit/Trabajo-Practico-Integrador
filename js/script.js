// Navbar toggler
document.addEventListener('DOMContentLoaded', function() {
  var toggler = document.querySelector('.navbar-toggler');
  var collapse = document.querySelector('#navbarResponsive');

  toggler.addEventListener('click', function() {
    collapse.classList.toggle('show');
  });

  // Carousel functionality
  var carousel = document.querySelector('#carouselExampleIndicators');
  if (carousel) {
    var indicators = carousel.querySelectorAll('.carousel-indicators li');
    var items = carousel.querySelectorAll('.carousel-item');
    var currentIndex = 0;

    function goToSlide(index) {
      items[currentIndex].classList.remove('active');
      indicators[currentIndex].classList.remove('active');
      currentIndex = index;
      items[currentIndex].classList.add('active');
      indicators[currentIndex].classList.add('active');
    }

    indicators.forEach(function(indicator, index) {
      indicator.addEventListener('click', function() {
        goToSlide(index);
      });
    });

    document.querySelector('.carousel-control-prev').addEventListener('click', function() {
      var nextIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
      goToSlide(nextIndex);
    });

    document.querySelector('.carousel-control-next').addEventListener('click', function() {
      var nextIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
      goToSlide(nextIndex);
    });
  }
});
