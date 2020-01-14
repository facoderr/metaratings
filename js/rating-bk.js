$(document).ready(function () {

	// Rating Event
	let swipeItem = $('.js-rating-item');

	let html = document.html;

	let hideScroll = function (e) {
		e.preventDefault();
	};

	function toggleScroll(bool) {

		if (bool === true) {
			html.on('touchmove', hideScroll);
		} else {
			html.off('touchmove', hideScroll);
		}
	}

	swipeItem.swipe({
		swipeStatus: function (event, phase, direction, distance, duration, fingerCount, fingerData, currentDirection) {
			let $this = $(this);
			if (phase == 'start') {
				if (direction == 'left' || direction == 'right') {
					toggleScroll(true);
				}
			}
			if (phase == 'move') {
				if (direction == 'left' || direction == 'right') {
					toggleScroll(true);
				}
			}
			if (phase == 'end') {
				toggleScroll(false);
				
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