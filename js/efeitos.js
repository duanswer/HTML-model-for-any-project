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
        nav: true,
        navText: ["Anterior", "Próximo"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 3
            },
            1000: {
                items: 4
            },

        }
    });

});