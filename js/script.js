(function($) {

    "use strict";

    // cuando la pagina termina de cargar
    $(document).ready(function() {

        // activa los filtros de mis proyectos
        iniciarFiltros();

        // hace funcionar el carrusel de testimonios
        var carruselTestimonios = new Swiper(".testimonial-swiper", {

            // espacio entre cada testimonio
            spaceBetween: 20,

            // permite cambiar de testimonio con los puntos
            pagination: {
                el: ".testimonial-swiper-pagination",
                clickable: true,
            },

            // cambia cuantos testimonios se muestran
            // dependiendo del tamaño de la pantalla
            breakpoints: {

                // celular
                0: {
                    slidesPerView: 1,
                },

                // tablet y computadora
                800: {
                    slidesPerView: 3,
                },

                // pantallas grandes
                1400: {
                    slidesPerView: 3,
                }
            },
        });

    });


    // funcion para filtrar mis proyectos
    var iniciarFiltros = function() {

        // busca la parte donde estan mis proyectos
        $('.grid').each(function() {

            // obtiene los botones de las categorias
            var $botones = $('.button-group');

            // busca cual boton esta seleccionado
            var $seleccionado = $botones.find('.is-checked');

            // obtiene la categoria seleccionada
            var filtro = $seleccionado.attr('data-filter');


            // organiza y muestra los proyectos
            var $proyectos = $('.grid').isotope({

                // identifica cada proyecto
                itemSelector: '.portfolio-item',

                // muestra la categoria seleccionada
                filter: filtro
            });


            // cuando selecciono una categoria
            $('.button-group').on('click', 'a', function(e) {

                // evita que la pagina se recargue
                e.preventDefault();

                // obtiene la categoria que seleccione
                filtro = $(this).attr('data-filter');

                // muestra solamente esos proyectos
                $proyectos.isotope({
                    filter: filtro
                });

            });


            // cambia visualmente el boton seleccionado
            $('.button-group').each(function(i, buttonGroup) {

                $botones.on('click', 'a', function() {

                    // quita la seleccion anterior
                    $botones
                        .find('.is-checked')
                        .removeClass('is-checked');

                    // selecciona el boton que presione
                    $(this).addClass('is-checked');

                });

            });

        });
    }


})(jQuery);