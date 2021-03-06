document.addEventListener('DOMContentLoaded', function () {


    const nav = document.querySelector('.navbar');
    const burgerBtn = document.querySelector('.navbar-toggler');
    




    function addShadow() {
        if (window.scrollY >= 300) {
            nav.classList.add('shadow-bg')
        } else {
            nav.classList.remove('shadow-bg')
        }
    }

    function checkScreen() {
        if (document.documentElement.clientWidth < 530 || document.documentElement.clientWidth > document.documentElement.clientHeight) {
            nav.classList.add('shadow-bg')
        } else {
            nav.classList.remove('shadow-bg')
        }
    }

   

    window.addEventListener('scroll', addShadow);
    burgerBtn.addEventListener('click', checkScreen);
    

    $(document).ready(function () {
        $(document).click(function (event) {
            var clickover = $(event.target);
            var _opened = $(".navbar-collapse").hasClass("show");
            if (_opened === true && !clickover.hasClass("navbar-toggler")) {
                $(".navbar-toggler").click();
            }
        });
    });

    $(document).ready(function () {

        $('.category-carousel').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            mobileFirst: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 4
                    }
                }
            ]
        });

    });



});