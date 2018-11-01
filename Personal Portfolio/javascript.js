/* Open when someone clicks on the span element */
function openNav() {
    $("#myNav").fadeIn(1000);
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    $("#myNav").fadeOut(1000);
}

//Back to top button implementation
function backToTopButton() {
    if ($('#back-to-top').length) {
        var scrollTrigger = 100,
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
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
                scrollTop: 0}, 500);
        });
    }
}