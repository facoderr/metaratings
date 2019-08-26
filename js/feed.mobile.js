$(document).ready(function() {

	// Feed Mobile Event

	let feedEvent = new Swiper('.feed-event .swiper-container', {
		slidesPerView: 'auto',
		slidesOffsetBefore: 15,
		slidesOffsetAfter: 15,
		spaceBetween: 10,
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
		on: {
			init: function () {
				let widthContainer = $('.feed-event .swiper-container').outerWidth();
						widthSlide = $('.feed-event .swiper-slide').outerWidth();
						firstSlide = $('.feed-event .swiper-slide:first-child');
						widthGutter = 30;
						marginLeft = (widthContainer - widthSlide - widthGutter) / 2;
			},
			reachBeginning: function () {
				firstSlide = $('.feed-event .swiper-slide:first-child');
				firstSlide.animate({
					'margin-left': 0
				}, 300);
			},
			fromEdge: function () {
				firstSlide = $('.feed-event .swiper-slide:first-child');
				firstSlide.animate({
					'margin-left': marginLeft
				}, 300);
			},
			reachEnd: function () {
				firstSlide = $('.feed-event .swiper-slide:first-child');
				firstSlide.animate({
					'margin-left': 0
				}, 300);
			}
		}
	});
	let feedTopic = new Swiper('.feed-topic .swiper-container', {
		slidesPerView: 'auto',
		spaceBetween: 15
	});

	$(document).on('click', '.js-daily-btn', function() {
		$(this).toggleClass('is-active');
		if ($(this).hasClass('is-active')) {
			$('.js-daily-body').slideUp(300).css('opacity', 0);
		} else {
			$('.js-daily-body').slideDown(300).css('opacity', 1);
		}
		setTimeout(function() {
			let tabWrapper = $('.js-tabWrap');
					activeTab = tabWrapper.find('.is-open');
					activeTabHeight = activeTab.outerHeight();
			tabWrapper.css('min-height', activeTabHeight);
		}, 300);
	});
	$(document).on('click', '.js-daily-more', function() {
		setTimeout(function() {
			let tabWrapper = $('.js-tabWrap');
					activeTab = tabWrapper.find('.is-open');
					activeTabHeight = activeTab.outerHeight();
			tabWrapper.css('min-height', activeTabHeight);
		}, 300);
	});
	$(document).bind('scroll', function() {
		if ($(this).scrollTop() > 100) {
			$('.js-inner-back').addClass('is-active');
		} else {
			$('.js-inner-back').removeClass('is-active');
		}
	});

	//
	
});