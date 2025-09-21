/*
 * Template Name: Palm - Corporate HTML5 Template
 * Author: Freator - (https://www.upwork.com/Freator)
 * Version: 1.0
 * Copyright 2025 Freator - Syeed Saleh Siddique

===========================================
    
    All jQuery section Include: 

    01. prealoder start
    02. smooth scroll start
    03. sticky header start
    04. show or hide start
    05. animate scroll start
    06. hamburger menu start
    07. image slider start
    08. testimonial slider start
    09. team slider start
    10. community slider start
    11. aos animation area start
    
===========================================


*/

(function ($) {
  "use strict";

  $(window).on("load", function () {
    //01. prealoder start
    $("#preloader").delay(1800).fadeOut("slow");
  });

  $(document).ready(function () {
    //02. smooth scroll start
    function smoothScroolInit() {
      $(".back-to-top").smoothScroll({
        speed: 1000,
      });
    }
    smoothScroolInit();

    //03. sticky header start
    function sticky_header() {
      var wind = $(window);
      var sticky = $("header");
      wind.on("scroll", function () {
        var scroll = wind.scrollTop();
        if (scroll < 5) {
          sticky.removeClass("sticky");
        } else {
          sticky.addClass("sticky");
        }
      });
    }
    sticky_header();

    //04. show or hide start
    $(window).on("scroll", function (event) {
      if ($(this).scrollTop() > 600) {
        $(".back-to-top").fadeIn(200);
      } else {
        $(".back-to-top").fadeOut(200);
      }
    });

    //05. animate scroll start
    $(".back-to-top").on("click", function (event) {
      event.preventDefault();

      $("html, body").animate(
        {
          scrollTop: 0,
        },
        1500
      );
    });

    //06. hamburger menu start
    $(".hamburger_menu").on("click", function () {
      $(".hamburger_menu .line_top").toggleClass("current");
      $(".hamburger_menu .line_center").toggleClass("current");
      $(".hamburger_menu .line_bottom").toggleClass("current");
      $(".offcavas_wrap").toggleClass("open");
    });

    //07. image slider start
    function image_carouselInit() {
      $(".owl-carousel.image_slider").owlCarousel({
        dots: true,
        loop: true,
        margin: 0,
        stagePadding: 0,
        autoWidth: false,
        autoplay: true,
        items: 1,
        autoplayTimeout: 6000,
        smartSpeed: 3000,
        autoplayHoverPause: false,
        // animateOut: 'fadeOut',
        // responsive: {
        //     0: {
        //         items: 1
        //     },
        //     768: {
        //         items: 2,
        //     },
        //     992: {
        //         items: 5
        //     }
        // }
      });
    }
    image_carouselInit();

    //08. testimonial slider start
    function testimonial_carouselInit() {
      $(".owl-carousel.testimonial_slider").owlCarousel({
        dots: true,
        loop: true,
        margin: 0,
        stagePadding: 0,
        autoWidth: false,
        autoplay: true,
        nav: false,
        navText: ["<span>Previous</span>", "<span>Next</span>"],
        items: 1,
        autoplayTimeout: 5000,
        smartSpeed: 4000,
        autoplayHoverPause: false,
        // responsive: {
        //     0: {
        //         dotsData: true,
        //     },
        //     768: {
        //         dotsData: false,
        //     },
        //     992: {
        //         dotsData: false,
        //     }
        // }
      });
    }
    testimonial_carouselInit();

    //09. team slider start
    function team_carouselInit() {
      $(".owl-carousel.team_slider").owlCarousel({
        dots: true,
        dotsData: true,
        loop: true,
        margin: 20,
        stagePadding: 0,
        autoWidth: true,
        autoplay: true,
        nav: true,
        navText: ["<span>Previous</span>", "<span>Next</span>"],
        autoplayTimeout: 5000,
        smartSpeed: 3000,
        autoplayHoverPause: false,
        responsive: {
          0: {
            items: 1,
            margin: 10,
            autoWidth: false,
          },
          576: {
            autoWidth: true,
            margin: 0,
          },
          700: {
            autoWidth: false,
            items: 2,
          },
          992: {
            autoWidth: true,
          },
        },
      });
    }
    team_carouselInit();

    //10. community slider start
    function communities_carouselInit() {
      $(".owl-carousel.communities_slider").owlCarousel({
        dots: true,
        loop: true,
        margin: 0,
        stagePadding: 0,
        autoWidth: false,
        items: 1,
        autoplay: true,
        nav: false,
        autoplayTimeout: 2500,
        smartSpeed: 3000,
        autoplayHoverPause: false,
        // responsive: {
        //     0: {
        //         items: 1,
        //         margin: 10,
        //         autoWidth: false,
        //     },
        //     576: {
        //         autoWidth: true,
        //     },
        //     992: {
        //         autoWidth: true,
        //     }
        // }
      });
    }
    communities_carouselInit();

    //11. aos animation area start
    setTimeout(function () {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, 600);
  });
})(jQuery);
