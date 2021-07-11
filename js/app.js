$(function () {
	var mixer = mixitup('.portfolio__content');

	$('.slider-blog__inner').slick({
		arrows: true,
		dots: true,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					arrows: false,
				},
			},
		],
	});

	$('.menu__btn, .menu a').on('click', function () {
		$('.header__top-inner').toggleClass('header__top-inner--active');
	});

	$('.menu a, .top-btn').on('click', function (event) {
		event.preventDefault();

		var id = $(this).attr('href'),
			top = $(id).offset().top;

		$('body,html').animate({ scrollTop: top }, 1000);
	});

	//header fixed

	let header = $('.header__top'),
		scrollPos = $(window).scrollTop(),
		headerH = $(window).innerHeight();

	$(window).on('scroll load', function () {
		scrollPos = $(window).scrollTop();
		if (scrollPos > headerH - 150) {
			header.css('box-shadow', '0 1px 13px 0 #333');
		} else {
			header.css('box-shadow', 'none');
		}
	});
});
