$(document).ready(function() {
    $("#owl-demo").owlCarousel({
        slideSpeed : 300,
        paginationSpeed : 400,
        autoPlay: 5000,
        items : 1, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false
    });
});

$(document).ready(function() {
    $("#owl-demo2").owlCarousel({
        autoPlay: 3000, 
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
    });
});

$(document).ready(function() {
    $("#owl-demo3").owlCarousel({
        autoPlay: 3000,
        items : 4,
        itemsDesktop : [1199,3],
        itemsDesktopSmall : [979,3]
    });
});