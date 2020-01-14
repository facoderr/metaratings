$(document).ready(function () {

	let overflow = $(document.body).add(document.documentElement),
        swipeItem = $('.js-rating-item');

    swipeItem.swipe({
        swipeStatus: function (event, phase, direction, distance, duration, fingerCount, fingerData, currentDirection) {
            let $this = $(this);

            if (phase === 'end') {
                if (direction === 'left') {
                    overflow.css('overflow', 'hidden');

                    $this.addClass('is-swipe is-swiping');

                    setTimeout(function () {
                        overflow.css('overflow', '');
                        $this.removeClass('is-swiping');
                    }, 300);
                }

                if (direction === 'right') {
                    overflow.css('overflow', 'hidden');
                    $this.addClass('is-swiping');
                    $this.removeClass('is-swipe');

                    setTimeout(function () {
                        overflow.css('overflow', '');
                        $this.removeClass('is-swiping');
                    }, 300);
                }
            }
        },
        allowPageScroll: 'none',
        preventDefaultEvents: false,
        triggerOnTouchEnd: false,
        threshold: 10
    });

    let swipeItemFirst = document.querySelectorAll('.js-rating-item:first-child');

    let swipeObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    let swipeThis = entry.target,
                        bound = swipeThis.getBoundingClientRect();

                    if (bound.top <= window.innerHeight && bound.bottom >= 0) {
                        swipeThis.classList.add('is-swipe');
                        swipeObserver.unobserve(swipeThis);
                        setTimeout(() => {
                            swipeThis.classList.remove('is-swipe');
                        }, 1000);
                    }
                }, 300);
            }
        });
    });

    swipeItemFirst.forEach(function (swipeThis) {
        swipeObserver.observe(swipeThis);
    });

});