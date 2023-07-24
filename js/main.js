
$(function (){
    var body = $("html, body");

    // SLIDERS
    if ($('.js-weather-city-slider').length) {
        new Swiper('.js-weather-city-slider', {
            slidesPerView: 3,
            spaceBetween: 60,
            pagination: {
                el: '.js-weather-city-slider .swiper-pagination',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 60,
                }
            }
        });
    }
    if ($('.js-geomagnit-city-slider').length) {
        new Swiper('.js-geomagnit-city-slider', {
            slidesPerView: 3,
            spaceBetween: 60,
            pagination: {
                el: '.js-geomagnit-city-slider .swiper-pagination',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 60,
                }
            }
        });
    }
    if ($('.js-country-list').length) {
        new Swiper('.js-country-list', {
            slidesPerView: 4,
            spaceBetween: 60,
            pagination: {
                el: '.js-country-list .swiper-pagination',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 60,
                }
            }
        });
    }
    if ($('.js-resort-list').length) {
        new Swiper('.js-resort-list', {
            slidesPerView: 4,
            spaceBetween: 60,
            pagination: {
                el: '.js-resort-list .swiper-pagination',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 60,
                }
            }
        });
    }

    // SEARCH MOBILE
    body.on('click', '.js-mobile-search', function (e) {
        e.preventDefault();
        $('.js-mobile-header-search').addClass('mobile-header-search--opened')
    })
    body.on('click', '.js-mobile-search-close', function (e) {
        e.preventDefault();
        $('.js-mobile-header-search').removeClass('mobile-header-search--opened')
    })

    // MOBILE MENU
    body.on('click', '.js-mobile-menu-btn', function (e) {
        e.preventDefault();
        if (!$('.js-mobile-menu').hasClass('is-opened')) {
        	$('.js-mobile-menu').fadeIn();
        	$('.js-mobile-menu').addClass('is-opened');
        }
    });
    body.on('click', '.js-mobile-menu-close', function (e) {
        e.preventDefault();
        $('.js-mobile-menu').fadeOut();
        setTimeout(function (e){
            $('.js-mobile-menu').removeClass('is-opened');
        }, 300)
    })

    // SORT
    body.on('click', '.js-ab-sort-link', function (e) {
        e.preventDefault();
        let current = $(this).data('sort');

        if (!$(this).hasClass('ab-sort-item__link--selected') && current != 'all') {
            $('.js-ab-sort-link').removeClass('ab-sort-item__link--selected');
            $(this).addClass('ab-sort-item__link--selected');
            $('.js-ab-sort-result').removeClass('ab-sort-result--selected')
            $('.js-ab-sort-result[data-sort="'+current+'"]').addClass('ab-sort-result--selected')
        } else if (current == 'all') {
            $('.js-ab-sort-link').removeClass('ab-sort-item__link--selected');
            $(this).addClass('ab-sort-item__link--selected');
            $('.js-ab-sort-result').addClass('ab-sort-result--selected')
        }
    })

    // dATE
    new AirDatepicker('#js-geo-date', {
        days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        daysShort: ['Вос', 'Пон', 'Вто', 'Сре', 'Чет', 'Пят', 'Суб'],
        daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        today: 'Сегодня',
        clear: 'Очистить',
        dateFormat: 'dd.MM.yyyy',
        timeFormat: 'HH:mm',
        firstDay: 1
    })


})