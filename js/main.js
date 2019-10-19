$(function() {
  // open Side Nav
  $(".menuTriger ").on("click", function() {
    $(".sideNav").toggleClass("open");
    $(".navover").toggleClass("open");
    $("body").css("overflow", "hidden");
    setTimeout(function() {
      $(".sideNav").addClass("origin");
    }, 500);
  });

  // Close Side Nav
  $(".navover, .close1 , .res li").on("click", function() {
    if ($(".sideNav").hasClass("open")) {
      $(".navover").removeClass("open");
      $(".sideNav").toggleClass("open");
      $("body").css("overflow", "auto");
      setTimeout(function() {
        $(".sideNav").removeClass("origin");
      }, 600);
    }
  });

  // Navbar
  let navTop = $(".navbar").offset().top;
  $(window).on("scroll", function() {
    if ($(window).scrollTop() >= navTop) {
      $(".navbar").addClass("scrolled");
    } else {
      $(".navbar").removeClass("scrolled");
    }
  });

  // Scrolls
  $(".navbar .links a , .res li a").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: $( "#" + $(this).attr("data-sec")).offset().top - $(".head").innerHeight()
    }, 1000)
  });

  // Preloder
  $(window).on("load", function() {
    $("html").css("overflow-y", "auto");
    $(".preloader").fadeOut(400, function() {
      $(this).remove();
    });
  });


  // Resize Body Padding
  $(window).on("resize", function() {
    $("body").css("padding-top", $(".head").innerHeight());
    $(".wrapper .wrapper__video").css("top", $(".head").innerHeight())
  });

  $("body").css("padding-top", $(".head").innerHeight());
  $(".wrapper .wrapper__video").css("top", $(".head").innerHeight())
  // Animation On Scroll
  AOS.init();
});
