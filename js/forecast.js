$(document).ready(function() {

	// Tab Event

	let clickedTab = $('.js-tabItem.is-active');
			tabWrapper = $('.js-tabWrap');
			activeTab = tabWrapper.find('.is-open');
			activeTabHeight = activeTab.outerHeight();

	tabWrapper.css('min-height', activeTabHeight);

	function tabInit() {
		clickedTab = $('.js-tabItem.is-active');
		activeTab.fadeOut(100, function() {
			$('.js-tabBlock').removeClass('is-open');
			let clickedTabIndex = clickedTab.index('.js-tabItem');
			$('.js-tabBlock').eq(clickedTabIndex).addClass('is-open');
			activeTab = tabWrapper.find('.is-open');
			activeTabHeight = activeTab.outerHeight();
			tabWrapper.stop().delay(25).animate({
				'min-height': activeTabHeight
			}, 50, function() {
				activeTab.delay(25).fadeIn(100);
			});
		});
	}

	$('.js-tabList').on('click', '.js-tabItem', function() {
		$('.js-tabItem').removeClass('is-active');
		$(this).addClass('is-active');
		tabInit();
	});

	//

	// Forecast Event

	let forecastCategory = new Swiper('.forecast-category .swiper-container', {
		slidesPerView: 'auto',
		slidesOffsetBefore: 15,
		slidesOffsetAfter: 15,
		spaceBetween: 20,
		breakpointsInverse: true,
		breakpoints: {
			992: {
				slidesOffsetBefore: 0,
				slidesOffsetAfter: 0,
				spaceBetween: 0,
				touchRatio: 0
			},
		}
	});

	let forecastTab = new Swiper('.forecast-tabList .swiper-container', {
		slidesPerView: 'auto',
		slidesOffsetBefore: 15,
		slidesOffsetAfter: 15,
		spaceBetween: 25,
		breakpointsInverse: true,
		breakpoints: {
			992: {
				slidesOffsetBefore: 0,
				slidesOffsetAfter: 0,
				spaceBetween: 0,
				touchRatio: 0
			},
		}
	});

	let forecastBest = new Swiper('.forecast-best .swiper-container', {
		slidesPerView: 'auto',
		slidesOffsetBefore: 15,
		slidesOffsetAfter: 15,
		spaceBetween: 10,
		freeMode: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		breakpointsInverse: true,
		breakpoints: {
			992: {
				slidesPerView: 3,
				slidesOffsetBefore: 0,
				slidesOffsetAfter: 0,
				spaceBetween: 16,
				freeMode: false
			},
		}
	});

	let forecastSlider = new Swiper('.forecast-slider .swiper-container', {
		slidesPerView: 'auto',
		slidesOffsetBefore: 15,
		slidesOffsetAfter: 15,
		spaceBetween: 10,
		freeMode: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpointsInverse: true,
		breakpoints: {
			992: {
				slidesPerView: 3,
				slidesOffsetBefore: 0,
				slidesOffsetAfter: 0,
				spaceBetween: 16,
				freeMode: false
			},
		}
	});

	$('.forecast-box').each(function() {
		if ($(this).find('.forecast-primary-bg').hasClass('forecast-primary-bg') && $(this).find('.forecast-success-bg').hasClass('forecast-success-bg')) {
			$(this).addClass('forecast-primary').addClass('forecast-success');
		} else if ($(this).find('.forecast-primary-bg').hasClass('forecast-primary-bg')) {
			$(this).addClass('forecast-primary');
		} else if ($(this).find('.forecast-success-bg').hasClass('forecast-success-bg')) {
			$(this).addClass('forecast-success');
		}
	});

	$(document).on('click', '.js-forecast-toggle', function() {
		$(this).toggleClass('is-active');
		$('.forecast-menu').slideToggle(300);
	});

	//
	
});