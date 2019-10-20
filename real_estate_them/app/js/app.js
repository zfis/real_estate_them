$(function(){
    $("#testimonials .slide").owlCarousel({
        loop: true,
        responsive: {
            0: {
                items: 1,
                center: true
            },
            768: {
                items: 2,
                center: true
            },
            1024: {
                items: 3,
                center: true
            }
        }
    });

    $('.burger').click(function(){
        $('nav ul.left').toggleClass('opened');
        $(this).toggleClass('opened');
    });
});
