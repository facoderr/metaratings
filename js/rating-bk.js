$(document).ready(function () {

	// Rating Event
	let swipeItem = $('.js-rating-item');

	swipeItem.swipe({
		swipeStatus: function (event, phase, direction, distance, duration, fingerCount, fingerData, currentDirection) {
			let $this = $(this);
			if (phase == 'start') {
				if (direction == 'left' || direction == 'right') {
					event.preventDefault();
				}
			}
			if (phase == 'move') {
				if (direction == 'left' || direction == 'right') {
					event.preventDefault();
				}
			}
			if (phase == 'end') {
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
		allowPageScroll: 'vertical',
		preventDefaultEvents: true,
		triggerOnTouchEnd: false,
		threshold: 20
	});

	//

});