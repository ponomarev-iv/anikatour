function desctopPageHeader(){function e(e){e.scrollTop()>90?(i.addClass("header__menu_fixed").fadeIn("slow"),$("body").addClass("mrg-top")):(i.removeClass("header__menu_fixed").fadeIn("slow"),$("body").removeClass("mrg-top"))}var i=$(".header__menu");if(!i.length)return!1;var n=$(window);i.removeClass("header__menu_fixed"),n.on("scroll",function(){e($(this))}),e(n)}function parallaxEffect(){$(".js-parallax").parallax({imageSrc:"/img/bg-tour.png"})}function SwiperInit(){if($("#swiper-hero-banner").length){var e=new Swiper("#swiper-hero-banner",{pagination:".swiper-pagination",paginationClickable:!0,autoplay:3e3});e=new Swiper("#swiper-partner",{nextButton:".swiper-button-next",prevButton:".swiper-button-prev",loop:!0,slidesPerView:5,autoplay:2e3,breakpoints:{640:{slidesPerView:3,spaceBetween:0},991:{slidesPerView:4,spaceBetween:30}}})}}function popupMagnific(){$(".js-open-popup").magnificPopup({type:"inline",midClick:!0})}function sendForm(){$("#main-form").submit(function(){return $.ajax({type:"POST",url:"send.php",data:$(this).serialize()}).done(function(){$(this).find("input").val(""),alert("Спасибо за обращение в нашу компанию. В ближайшее время мы свяжемся с вами."),$("#main-form").trigger("reset")}),!1}),$("#ticket-form-avia").submit(function(){return $.ajax({type:"POST",url:"send-ticket-avia.php",data:$(this).serialize()}).done(function(){$(this).find("input").val(""),alert("Спасибо за обращение в нашу компанию. В ближайшее время мы свяжемся с вами."),$("#ticket-form-avia").trigger("reset")}),!1}),$("#ticket-form-jd").submit(function(){return $.ajax({type:"POST",url:"send-ticket-jd.php",data:$(this).serialize()}).done(function(){$(this).find("input").val(""),alert("Спасибо за обращение в нашу компанию. В ближайшее время мы свяжемся с вами."),$("#ticket-form-jd").trigger("reset")}),!1}),$("#popup-form").submit(function(){return $.ajax({type:"POST",url:"send-phone.php",data:$(this).serialize()}).done(function(){$(this).find("input").val(""),alert("Спасибо за обращение в нашу компанию. В ближайшее время мы свяжемся с вами."),$("#popup-form").trigger("reset"),$.magnificPopup.close()}),!1})}$(document).ready(function(){popupMagnific(),parallaxEffect(),sendForm(),SwiperInit()});