function openNav() {
  $("#myNav").fadeIn(1000);
}

function closeNav() {
  $("#myNav").fadeOut(1000);
}

function backToTopButton() {
  if ($('#back-to-top').length) {
    let scrollTrigger = 100;

    let backToTop = function () {
        let scrollTop = $(window).scrollTop();

        if (scrollTop > scrollTrigger) {
          $('#back-to-top').addClass('show');
        } else {
          $('#back-to-top').removeClass('show');
        }
      };

    backToTop();

    $(window).on('scroll', function () {
      backToTop();
    });

    $('#back-to-top').on('click', function (e) {
      e.preventDefault();

      $('html,body').animate({
        scrollTop: 0
      }, 500);
    });
  }
}