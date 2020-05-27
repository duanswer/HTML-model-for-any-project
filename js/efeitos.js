$(document).ready(function () {

    /*First function: efect whereas passing mouse */
    $("#id_logotipo").on("mouseover", function () {
        console.log("Mouse no logotipo");

        $("#banner h1").addClass("efeito");

    }).on("mouseout", function () {
        $("#banner h1").removeClass("efeito");
    });

    /*Second function: elarging the search area*/
    $("#input-search").on("focus", function () {
        $("li.search").addClass("ativo");

    }).on("blur", function () {
        $("li.search").removeClass("ativo");
    });

    /*Carousel plugin*/
    $(".thumbnails").owlCarousel({
        loop: true,
        margin: 20,
        /*autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause:true,*/        
        autoplay: 6000,
        slideSpeed: 10000,
        paginationSpeed: 400,
        /*nav: true,*/
        navText: ["Anterior", "Próximo"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1
            },
            1000: {
                items: 4
            },

        }
    });

    /*For smartphone */
    var owl = $('.thumbnails');
    owl.owlCarousel();
    // Go to the next item
    $('#btn-news-next').click(function () {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('#btn-news-prev').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })


    /*Page up: returns to the top */
    $("#page-up").on("click", function(event){
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        /**Avoids to refresh the page when returns to the top */
        event.preventDefault();
    });  
    
    $("#btn-bars").on("click", function(){
        $("header").toggleClass("open-menu");
    });

    $("#menu-mobile-mask, .btn-close").on("click", function(){
        $("header").removeClass("open-menu");
    });

    $("#btn-search").on("click", function(){
        $("header").toggleClass("open-search");
        $("#input-search-mobile").focus();
    });

});