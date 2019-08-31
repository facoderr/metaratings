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

	// Reward Event

	let rewardTab = new Swiper('.reward-tabList .swiper-container', {
		slidesPerView: 'auto',
		slidesOffsetBefore: 15,
		slidesOffsetAfter: 15,
		spaceBetween: 25,
		breakpointsInverse: true,
		breakpoints: {
			992: {
				touchRatio: 0
			},
		}
	});

	let rewardBest = new Swiper('.reward-best .swiper-container', {
		slidesPerView: 2,
		spaceBetween: 10,
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
				spaceBetween: 16
			},
		}
	});

	let rewardSlider = {};

	$('.reward-slider .swiper-container').each(function(index, element){
		let $this = $(this);
		$this.addClass('swiper-' + index);
		$this.find('.swiper-button-prev').addClass('swiper-prev-' + index);
		$this.find('.swiper-button-next').addClass('swiper-next-' + index);
		rewardSlider[index] = new Swiper('.swiper-' + index, {
			observer: true,
			slidesPerView: 'auto',
			slidesOffsetBefore: 15,
			slidesOffsetAfter: 15,
			spaceBetween: 10,
			freeMode: true,
			navigation: {
				nextEl: '.swiper-next-' + index,
				prevEl: '.swiper-prev-' + index,
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
	});

	$('.reward-box').each(function() {
		if ($(this).find('.reward-primary').hasClass('reward-primary')) {
			$(this).addClass('reward-primary-border');
		}
	});

	$('.js-select').click(function () {
		$(this).toggleClass('is-active');
		$(this).find('.select-menu').slideToggle(300);
	});
	$('.js-select li').click(function () {
		let selectValue = $(this).data('value');
		$(this).parents('.select').find('.select-field-text').text($(this).text());
		$(this).parents('.select').find('.select-input').val(selectValue);
	});
	$('.js-select-input').keyup(function() {
		$this = $(this);
		$value = $(this).val();
		$this.parents('.select').find('li').each(function() {
			let reg = new RegExp($value, 'i');
			if (!$(this).text().match(reg)) {
				$(this).hide();
				if ($this.parents('.select').find('li:visible').length === 0) {
					$this.parents('.select').removeClass('is-active');
					$this.parents('.select').find('.select-menu').slideUp(300);
				}
			}  else if ($value === '') {
				$(this).hide();
				$this.parents('.select').removeClass('is-active');
				$this.parents('.select').find('.select-menu').slideUp(300);
			} else {
				$(this).show();
				setTimeout(function() {
					$this.parents('.select').addClass('is-active');
					$this.parents('.select').find('.select-menu').slideDown(300);
				}, 100);
			}
		});
	});
	$('.js-select-search li').click(function () {
		let selectValue = $(this).data('value');
		$(this).parents('.select').find('.js-select-input').val($(this).text());
		$(this).parents('.select').find('.select-input').val(selectValue);
		$this.parents('.select').removeClass('is-active')
		$this.parents('.select').find('.select-menu').slideUp(300);
	});
	$(document).bind('mouseup touchend', function(e) {
		if ($(e.target).closest('.js-select').length || $(e.target).closest('.js-select-search').length) return;
		$('.select').removeClass('is-active');
		$('.select').find('.select-menu').slideUp(300);
	});

	//
	
});