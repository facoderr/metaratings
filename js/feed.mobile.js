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

	// Feed Mobile Event

	$(document).bind('scroll', function() {
		$('.js-feed-totop').toggleClass('is-active', $(this).scrollTop() >= 1000);
		if ($(this).scrollTop() + $(window).height() >= $(this).height() - 25) {
			$('.feed-tabBlock.is-open .feed-box').first().clone().appendTo($('.feed-tabBlock.is-open'));
		}
		if ($(this).scrollTop() > 100) {
			$('.js-inner-back').addClass('is-active');
		} else {
			$('.js-inner-back').removeClass('is-active');
		}
	});

	let widthContainer = $('.feed-event .swiper-container').outerWidth();
			widthSlide = $('.feed-event .swiper-slide').outerWidth();
			firstSlide = $('.feed-event .swiper-slide').first();
			widthGutter = 30;
			marginLeft = (widthContainer - widthSlide - widthGutter) / 2;

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
			reachBeginning: function () {
				firstSlide.animate({
					'margin-left': 0
				}, 300);
			},
			fromEdge: function () {
				firstSlide.animate({
					'margin-left': marginLeft
				}, 300);
			},
			reachEnd: function () {
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
	$(document).on('click', '.js-feed-totop', function() {
		let lastScroll = $(document).scrollTop();
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
		$('.js-feed-toback').addClass('is-active').attr('data-scroll', lastScroll);
	});
	$(document).on('click', '.js-feed-toback', function() {
		$('html, body').animate({
			scrollTop: $(this).attr('data-scroll')
		}, 1000);
		$(this).removeClass('is-active');
	});

	//
	
});