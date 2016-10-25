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

$(document).ready(function () {
    desctopPageHeader();
    parallaxEffect();
    SwiperInit();
})
