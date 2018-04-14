$(document).ready(function(){

    /* tabs */

    (function($) {
        $(function() {

            $('.tabs').on('click', '.tab:not(.current)', function() {
                $(this).addClass('current').siblings().removeClass('current')
                    .parents('.description-bl').find('div.box').eq($(this).index()).fadeIn(150).siblings('div.box').hide();
            })

        })
    })(jQuery);


    /* smooth scroll */

    $('a[href *= anchor]').bind('click',function(event){
        var $anchor = $(this);



        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top -0
        }, 1000,'easeInOutExpo');

        event.preventDefault();
    });


    /* ---------------- mask ------------------ */

    $("input[name=k_input_field_691_22031]").mask("+7(999)999-9999");
	$("input[name=phone]").mask("+7(999)999-9999");


    /* ---------------- modals ------------------ */

    $('.fancy-button').fancybox({
       padding: 0
    });

    $('.fancy-rev-photo').fancybox({
        padding: 0,
        scrolling: "no"

    })




    /* ----------------- map ------------------ */


    function initialize() {
        var mapOptions = {
            center: new google.maps.LatLng(55.76629, 37.647872),
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false

        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
        var marker = new google.maps.Marker ({
            position: new google.maps.LatLng(55.76629, 37.647872),
            title: "просп. Победы 158"
        });
        marker.setMap(map);
    }
    google.maps.event.addDomListener(window, 'load', initialize);





    /* __________ forms ________________ */


    $('.top-form .submit-button').on('click', function(){
        if( $('.top-form [name=name]').val() !== '' && $('.top-form [name=phone]').val() !== '' && $('.top-form [name=address]').val() !== '') {
           $('#link-wrap-modal--big').click();
        }
    });

    $('.envelope-form .submit-button').on('click', function(){
        if( $('.envelope-form [name=name]').val() !== '' && $('.envelope-form [name=phone]').val() !== '' && $('.envelope-form [name=address]').val() !== '') {
            $('#link-wrap-modal--big').click();
        }
    });


    $('.delivery-modal .box input').on('click', function(){
        $('.delivery-modal .box input').removeClass('active');
        $(this).addClass('active');
    });

});
