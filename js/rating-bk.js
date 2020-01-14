$(document).ready(function () {

	// Rating Event
	let overflow = $('html, body'),
		swipeItem = $('.js-rating-item');

	function preventDefault(e) {
		e.preventDefault();
	}

	function disableScroll() {
		document.body.addEventListener('touchmove', preventDefault, { passive: false });
	}
	function enableScroll() {
		document.body.removeEventListener('touchmove', preventDefault);
	}

	swipeItem.swipe({
		swipeStatus: function (event, phase, direction, distance, duration, fingerCount, fingerData, currentDirection) {
			let $this = $(this);
			if (phase == 'start') {
				if (direction == 'left' || direction == 'right') {
					disableScroll();
				}
			}
			if (phase == 'move') {
				if (direction == 'left' || direction == 'right') {
					disableScroll();
				}
			}
			if (phase == 'end') {
				enableScroll();
				if (direction == 'left') {
					$this.addClass('is-swipe is-swiping');
					setTimeout(function () {
						$this.removeClass('is-swiping');
					}, 300);
				}
				if (direction == 'right') {
					$this.addClass('is-swiping');
					$this.removeClass('is-swipe');
					setTimeout(function () {
						$this.removeClass('is-swiping');
					}, 300);
				}
			}
		},
		allowPageScroll: 'none',
		preventDefaultEvents: false,
		triggerOnTouchEnd: false,
		threshold: 20
	});

	//

});