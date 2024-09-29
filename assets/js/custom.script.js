(function ($) {
  "use strict";
  $(document).ready(function () {
    var s = $(".lgx-header-position");
    var pos = s.position();
    $(window).on("scroll", function () {
      var windowpos = $(window).scrollTop();
      if (windowpos >= pos.top) {
        s.addClass("menu-onscroll");
      } else {
        s.removeClass("menu-onscroll");
      }
    });
    var lgxCounter = $(".lgx-counter");
    if (lgxCounter.length) {
      lgxCounter.counterUp({ delay: 10, time: 5000 });
    }
    if ($("#lgx-countdown").length) {
      var dataTime = $("#lgx-countdown").data("date");
      $("#lgx-countdown").countdown(dataTime, function (event) {
        var $this = $(this).html(
          event.strftime(
            "" +
              '<span class="lgx-days">%D <i> Days </i></span> ' +
              '<span class="lgx-hr">%H <i> Hour </i></span> ' +
              '<span class="lgx-min">%M <i> Min </i></span> ' +
              '<span class="lgx-sec">%S <i> Sec </i></span>'
          )
        );
      });
    }
    $("a.lgx-scroll").on("click", function (event) {
      var $anchor = $(this);
      var topTo = $($anchor.attr("href")).offset().top;
      if (window.innerWidth < 768) {
        topTo = topTo - 90;
      }
      $("html, body")
        .stop()
        .animate({ scrollTop: topTo }, 1500, "easeInOutExpo");
      event.preventDefault();
      return false;
    });
    if ($(window).width() < 787) {
      $("#navbar").removeClass("lgx-collapse");
    }
  });
})(jQuery);
