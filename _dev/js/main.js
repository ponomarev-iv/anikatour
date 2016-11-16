/**
 * Created by Pompo on 19.10.2016.
 */

function desctopPageHeader() {
    var MainHeader = $('.header__menu');

    if (!MainHeader.length) {
        return false;
    }

    var $window = $(window);

    MainHeader.removeClass('header__menu_fixed');

    function headerScroll(el) {
        if (el.scrollTop() > 90) {
            MainHeader.addClass('header__menu_fixed').fadeIn('slow');
            $('body').addClass('mrg-top');
        } else {
            MainHeader.removeClass('header__menu_fixed').fadeIn('slow');
            $('body').removeClass('mrg-top');
        }
    }

    $window.on('scroll', function () {
        headerScroll($(this));
    });

    headerScroll($window);
}

function parallaxEffect(){
    $('.js-parallax').parallax({imageSrc: '/img/bg-tour.png'});
}

function SwiperInit() {

    if($('#swiper-hero-banner').length){
        var mySwiper = new Swiper ('#swiper-hero-banner', {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            autoplay: 3000
        })

        mySwiper = new Swiper ('#swiper-partner', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            loop: true,
            slidesPerView: 3,
            autoplay: 3000,
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                991: {
                    slidesPerView: 2,
                    spaceBetween: 30
                }
            }
        })
    }
}

function popupMagnific(){
    $('.js-open-popup').magnificPopup({
        type:'inline',
        midClick: true
    });
}

function sendForm(){
    $("#main-form").submit(function () {
        $.ajax({
            type: "POST",
            url: "send.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            alert("Спасибо за обращение в нашу компанию. В ближайшее время мы свяжемся с вами.");
            $("#main-form").trigger("reset");
        });
        return false;
    });

    $("#ticket-form-avia").submit(function () {
        $.ajax({
            type: "POST",
            url: "send-ticket-avia.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            alert("Спасибо за обращение в нашу компанию. В ближайшее время мы свяжемся с вами.");
            $("#ticket-form-avia").trigger("reset");
        });
        return false;
    });

    $("#ticket-form-jd").submit(function () {
        $.ajax({
            type: "POST",
            url: "send-ticket-jd.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            alert("Спасибо за обращение в нашу компанию. В ближайшее время мы свяжемся с вами.");
            $("#ticket-form-jd").trigger("reset");
        });
        return false;
    });

    $("#popup-form").submit(function () {
        $.ajax({
            type: "POST",
            url: "send-phone.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            alert("Спасибо за обращение в нашу компанию. В ближайшее время мы свяжемся с вами.");
            $("#popup-form").trigger("reset");
            $.magnificPopup.close();
        });
        return false;
    });
}

$(document).ready(function () {
    desctopPageHeader();
    popupMagnific();
    parallaxEffect();
    sendForm();
    SwiperInit();
})
