(function ($) {
  "use strict";

  // Preloader
  $(window).on('load', function () {
      $('.preloader').delay(500).fadeOut('slow'); // Fade out effect for a smoother transition
  });

  // Navbar Behavior
  $(".navbar").headroom(); // Hide navbar on scroll down, show on scroll up

  // Close navbar on link click (for mobile views)
  $('.navbar-collapse a').on('click', function () {
      $(".navbar-collapse").collapse('hide');
  });

  // Slick Slideshow for featured content
  $('.slick-slideshow').slick({
      autoplay: true,
      infinite: true,
      arrows: false,
      fade: true,
      dots: true,
      autoplaySpeed: 5000, // Adjusted speed for smoother experience
      speed: 1000, // Transition speed
  });

  // Slick Testimonial Slider
  $('.slick-testimonial').slick({
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 7000, // Duration for testimonials
      speed: 500, // Transition speed
  });

  // Add smooth scroll to anchor links
  $('a[href^="#"]').on('click', function (event) {
      event.preventDefault();
      const target = this.hash;
      const $target = $(target);

      $('html, body').animate({
          scrollTop: $target.offset().top
      }, 800, 'swing');
  });

})(jQuery);
const slides = document.querySelectorAll('.slide');
                            let slideIndex = 0;
                        
                            // Inicializa o slideshow
                            function showDivs() {
                                slides.forEach((slide, index) => {
                                    slide.style.display = index === slideIndex ? 'block' : 'none'; // Mostra o slide atual
                                });
                            }
                        
                            function changeSlide(n) {
                                slideIndex = (slideIndex + n + slides.length) % slides.length; // Altera o índice do slide
                                showDivs(); // Atualiza os slides
                            }
                        
                            document.querySelector('.w3-display-left').addEventListener('click', () => changeSlide(-1));
                            document.querySelector('.w3-display-right').addEventListener('click', () => changeSlide(1));
                        
                            // Inicia o slideshow
                            showDivs();
                        
