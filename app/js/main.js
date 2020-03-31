$(function () {
    $('.header__slider-inner').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
    });
    
    $('.tabs').slick({
        dots: false,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [{
                breakpoint: 1085,
                settings: {
                    arrows: true,
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 887,
                settings: {
                    arrows: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 691,
                settings: {
                    arrows: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 495,
                settings: {
                    arrows: true,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.services__slider-inner .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.services__slider-inner').find('.tab-item').removeClass('active-tab').hide();
        $('.services__slider-inner .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    $('.carpark__slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
    });

    $('.reviews__slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
    });

    $(".rate-star").rateYo({
        rating: 4,
        starWidth: "16px",
        ratedFill: "#ffc200",
        readOnly: true
    });

    $('.work__slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 500,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [{
                breakpoint: 1160,
                settings: {
                    arrows: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 903,
                settings: {
                    arrows: true,
                    slidesToShow: 1
                }
            },
        ]
    });

    $('.carbrands__slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        responsive: [{
                breakpoint: 952,
                settings: {
                    arrows: true,
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 700,
                settings: {
                    arrows: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 495,
                settings: {
                    arrows: true,
                    slidesToShow: 1
                }
            },
        ]
    });

    // $('.menu__btn').on('click', function () {
    //     $('.menu__list').slideToggle();
    // });
    $('.check-menu').on('click', function () {
        $('.menu__list').slideToggle();
    });

    $('.search-btn').on('click', function () {
        $('.header__search').addClass('active');
        $('.search-btn').addClass('active');
    });

    $('select').styler();

    $(".content").hide();
    $(".toggle").on("click", function (e) {

    var $this = $(this).prev('.content');
    var $text = $(this);
    $this.slideToggle('fast', function () {
        if ($(this).is(':visible')) {
            $text.text('скрыть');
        } else {
            $text.text('читать далее');
        }
    });

    });


    $(".chevron-conten").hide();
    $(".chevrone").on("click", function (e) {

        var $this = $(this).prev('.chevron-conten');
        var $text = $(this);
        $this.slideToggle('fast', function () {
            if ($(this).is(':visible')) {
                $text.text('');
            } else {
                $text.text('');
            }
        });

    });

    $('.chevrone').on('click', function () {
        this.classList.toggle('rotate')
    });

    new WOW().init();
});