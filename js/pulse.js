$(document).ready(function() {

	// Pulse Event

	let uAg = navigator.userAgent.toLowerCase();
	let isAndroid = uAg.indexOf('android') > -1;
	if (isAndroid) {
		$('meta[name="viewport"]').attr('content', 'width=device-width, initial-scale=1');
	} else {
		$('meta[name="viewport"]').attr('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=1');
	}

	$('.js-calendar').datepicker({
		language: {
			monthsShort: ['янв.','фев.','мар.','апр.','май','июн.','июл.','авг.','сен.','окт.','ноя.','дек.']
		},
		dateFormat: 'dd M',
		range: true,
		maxDate: new Date(),
		todayButton: new Date(),
		autoClose: true,
		onSelect: function(formattedDate, date, inst) {
			let today = new Date();
			if (today.getDate() === date[0].getDate() && today.getMonth() === date[0].getMonth() && today.getFullYear() === date[0].getFullYear()) {
				$('.js-calendar').val('Сегодня ' + formattedDate);
			} else if (date.length == 1) {
				$('.js-calendar').val(date[0].getDate() + ' ' + date[0].toLocaleString('ru', {month: 'long'}));
			} else {
				minMonth = $('.js-calendar').data('datepicker').minRange.getMonth();
				maxMonth = $('.js-calendar').data('datepicker').maxRange.getMonth();
				minMonthName = $('.js-calendar').data('datepicker').loc.monthsShort[minMonth];
				maxMonthName = $('.js-calendar').data('datepicker').loc.monthsShort[maxMonth];
				$('.js-calendar').val(date[0].getDate() + ' ' + minMonthName + ' - ' + date[1].getDate() + ' ' + maxMonthName);
			}
		}
	});
	$('.js-calendar').data('datepicker').selectDate(new Date());

	$('.js-widget-input').keyup(function() {
		$this = $(this);
		$value = $(this).val();
		$this.parent().find('li').each(function() {
			let reg = new RegExp($value, 'i');
			if (!$(this).text().match(reg)) {
				$(this).hide();
				if ($this.parent().find('li:visible').length === 0) {
					$this.parent().removeClass('is-active');
					$this.parent().find('.js-widget-result').slideUp(300);
				}
			}  else if ($value === '') {
				$(this).hide();
				$this.parent().removeClass('is-active');
				$this.parent().find('.js-widget-result').slideUp(300);
			} else {
				$(this).show();
				setTimeout(function() {
					$this.parent().addClass('is-active');
					$this.parent().find('.js-widget-result').slideDown(300);
				}, 100);
			}
		});
	});
	$(document).bind('mouseup touchend', function(e) {
		if ($(e.target).closest('.js-widget-input').length || $(e.target).closest('.js-widget-result').length) return;
		$('.js-widget-result').removeClass('is-active');
		$('.js-widget-result').slideUp(300);
	});

	$(document).on('click', '.js-bk-search', function () {
		$('.widget-bk-list').toggleClass('is-active');
		$('.js-widget-input').toggleClass('is-active');
	});
	$(document).on('click', '.js-resource', function () {
		if ($(this).is(':first-child')) {
			$(this).parent().find('.js-resource').find('input').prop('checked', false);
			$(this).parent().find('.js-resource').first().find('input').prop('checked', true);
		} else {
			$(this).parent().find('.js-resource').first().find('input').prop('checked', false);
		}
		$('.js-resource').each(function () {
			if ($(this).find('input').is(':checked')) {
				$(this).addClass('is-checked');
			} else {
				$(this).removeClass('is-checked');
			}
		});
		if ($(this).parent().find('.js-resource:not(:first-child).is-checked').length === 0) {
			$(this).parent().find('.js-resource').first().find('input').prop('checked', true);
		} else {
			$(this).parent().find('.js-resource').first().find('input').prop('checked', false);
		}
		$('.js-resource').each(function () {
			if ($(this).find('input').is(':checked')) {
				$(this).addClass('is-checked');
			} else {
				$(this).removeClass('is-checked');
			}
		});
	});
	$(document).on('click', '.js-resource-more', function() {
		$('.js-widget-modal').fadeIn().addClass('is-open');
	});
	$(document).on('click', '.js-widget-modal-close', function() {
		$('.js-widget-modal').fadeOut().removeClass('is-open');
	})
	$(document).bind('mouseup', function(e) {
		if ($(e.target).closest('.widget-modal-wrap').length) return;
		$('.js-widget-modal').fadeOut().removeClass('is-open');
	});

	// Highcharts Custom Setting

	(function(factory) {
		if(typeof module === 'object' && module.exports) {
			module.exports = factory;
		} else {
			factory(Highcharts);
		}
	}(function(Highcharts) {
		(function(H) {
			H.wrap(H.seriesTypes.column.prototype, 'translate', function(proceed) {
				const options = this.options;
				const topMargin = options.topMargin || 0;
				const bottomMargin = options.bottomMargin || 0;

				proceed.call(this);

				H.each(this.points, function(point) {
					if(options.borderRadiusTopLeft || options.borderRadiusTopRight || options.borderRadiusBottomRight || options.borderRadiusBottomLeft) {
						const w = point.shapeArgs.width;
						const h = point.shapeArgs.height;
						const x = point.shapeArgs.x;
						const y = point.shapeArgs.y;

						let radiusTopLeft = H.relativeLength(options.borderRadiusTopLeft || 0, w);
						let radiusTopRight = H.relativeLength(options.borderRadiusTopRight || 0, w);
						let radiusBottomRight = H.relativeLength(options.borderRadiusBottomRight || 0, w);
						let radiusBottomLeft = H.relativeLength(options.borderRadiusBottomLeft || 0, w);

						const maxR = Math.min(w, h) / 2

						radiusTopLeft = radiusTopLeft > maxR ? maxR : radiusTopLeft;
						radiusTopRight = radiusTopRight > maxR ? maxR : radiusTopRight;
						radiusBottomRight = radiusBottomRight > maxR ? maxR : radiusBottomRight;
						radiusBottomLeft = radiusBottomLeft > maxR ? maxR : radiusBottomLeft;

						point.dlBox = point.shapeArgs;

						point.shapeType = 'path';
						point.shapeArgs = {
							d: [
							'M', x + radiusTopLeft, y + topMargin,
							'L', x + w - radiusTopRight, y + topMargin,
							'C', x + w - radiusTopRight / 2, y, x + w, y + radiusTopRight / 2, x + w, y + radiusTopRight,
							'L', x + w, y + h - radiusBottomRight,
							'C', x + w, y + h - radiusBottomRight / 2, x + w - radiusBottomRight / 2, y + h, x + w - radiusBottomRight, y + h + bottomMargin,
							'L', x + radiusBottomLeft, y + h + bottomMargin,
							'C', x + radiusBottomLeft / 2, y + h, x, y + h - radiusBottomLeft / 2, x, y + h - radiusBottomLeft,
							'L', x, y + radiusTopLeft,
							'C', x, y + radiusTopLeft / 2, x + radiusTopLeft / 2, y, x + radiusTopLeft, y,
							'Z'
							]
						};
					}

				});
			});
		}(Highcharts));
	}));

	// Highcharts Localization

	Highcharts.setOptions({
		time: {
			timezoneOffset: -180
		},
		lang: {
			months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
			shortMonths: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
			weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
			shortWeekdays: ['Вос', 'Пон', 'Вто', 'Сре', 'Чет', 'Пят', 'Суб'],
		}
	});

	// Pulse Chart

	let pulseChart = Highcharts.chart('js-pulse', {

		// Global Options

		chart: {
			plotBorderWidth: 1,
			plotBorderColor:'#e2e2e2',
			style: {
				'fontFamily': 'Helvetica Neue, Helvetica, Arial, sans-serif'
			},
			marginRight: 45,
			marginBottom: 50,
			marginLeft: 1,
			events: {
				load: function() {
					Highcharts.addEvent(Highcharts.Axis, 'afterDrawCrosshair', function ({ point }) {
						if (this.cross && point) {
							this.cross.attr({
								stroke: point.series.color
							})
						}
					});
				}
			}
		},

		// Disabled Chart title, tooltip, legend

		title: {text: null},

		// Tooltip Options

		tooltip: {
			borderWidth: 0,
			borderRadius: 0,
			shadow: false,
			hideDelay: 200,
			padding: 0,
			useHTML: true,
			formatter: function() {
				let index = this.point.index
						time = Highcharts.dateFormat('%d %b %H:%M', this.x);
						pulsePositive = pulseChart.series[0].processedYData;
						pulseNegative = pulseChart.series[1].processedYData;
						pulseTotal = []

				$.each(pulseChart.series[0].data, function(i, data) {
					pulseTotal.push(pulsePositive[i] + pulseNegative[i]);
				});

				return '<div class="highcharts-tooltip-wrap" style="background-color: ' + this.color + ';"><div class="highcharts-tooltip-date">' + time + '</div><div class="highcharts-tooltip-val"><div class="highcharts-tooltip-yes">+ ' + Math.abs(pulsePositive[index]) + ' Пол.</div><div class="highcharts-tooltip-no">- ' + Math.abs(pulseNegative[index]) + ' Отр.</div></div><div class="highcharts-tooltip-total">' + Math.abs(pulseTotal[index]) + '</div></di'
			},
			crosshairs: {
				width: 1
			},
			style: {
				color: '#ffffff',
				pointerEvents: 'all'
			}
		},

		// Horizontal Coordinates

		xAxis: {
			type: 'datetime',
			title: {
				enabled: false
			},
			startOnTick: true,
			endOnTick: true,
			gridLineWidth: 1,
			gridLineColor: '#e2e2e2',
			gridLineDashStyle: 'ShortDash',
			tickColor: '#e2e2e2',
			tickLength: 15,
			labels: {
				y: 30,
				style: {
					color: '#777777',
					fontSize: '10px'
				}
			}
		},

		// Vertical Coordinates

		yAxis: {
			title: {
				enabled: false
			},
			opposite: true,
			gridLineWidth: 1,
			gridLineColor:'#e2e2e2',
			plotLines: [{
				color: '#e2e2e2',
				width: 2,
				value: 0,
				zIndex: 3
			}],
			labels: {
				x: 10,
				style: {
					color: '#777777',
					fontSize: '10px'
				}
			}
		},

		// Pulse Options

		plotOptions: {
			column: {
				stacking: 'normal',
				pointStart: Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
				pointInterval: 36e5,
				pointWidth: 8,
				borderWidth: 0,
				borderColor: '',
				dataLabels: {
					enabled: true,
					useHTML: true,
					formatter: function() {
						if (this.y > 0) {
							maxVal = Math.max.apply(null, this.series.processedYData);
							if (this.y == maxVal) {
								return '<div style="text-align:center;color:#000;transform:translateY('+ '-' + (this.point.dlBox.height / 2 - 9) + 'px)"><div class="highcharts-data-round"></div></div>';
							}
						} else {
							minVal = Math.min.apply(null, this.series.processedYData);
							if (this.y == minVal) {
								return '<div style="text-align:center;color:#000;transform:translateY(' + (this.point.dlBox.height / 2) + 'px)"><div class="highcharts-data-round"></div></div>';
							}
						}
					}
				},
				states: {
					hover: {
						enabled: false
					}
				}
			},
			spline: {
				pointStart: Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
				pointInterval: 36e5,
				enableMouseTracking: false,
				lineWidth: 0,
				marker: {
					symbol: 'circle',
					radius: 3,
					fillColor: '#ffffff'
				},
				marker: {
					enabled: false
				},
				states: {
					hover: {
						enabled: false
					}
				}
			},
			series: {
				states: {
					inactive: {
						opacity: 1
					}
				}
			}
		},

		// Main Series Data

		series: [{
			type: 'column',
			name: 'Positive',
			data: [500, 300, 275, 380, 800, 200],
			borderRadiusTopLeft: 4,
			borderRadiusTopRight: 4,
			color: '#39af61'
		}, {
			type: 'column',
			name: 'Negative',
			data: [-350, -210, -600, -100, -400, -150],
			borderRadiusBottomLeft: 4,
			borderRadiusBottomRight: 4,
			color: '#d0021b'
		}]

	});

	// Interactive

	$(document).on('click', '.js-pulse-yes', function() {
		$('.widget-pulse-item').toggleClass('is-disable');
		$(this).removeClass('is-disable');
		$('.highcharts-legend-item.highcharts-series-1').trigger('click');
		$('.highcharts-legend-item.highcharts-series-2').trigger('click');
		$('.highcharts-legend-item.highcharts-series-3').trigger('click');
	});
	$(document).on('click', '.js-pulse-no', function() {
		$('.widget-pulse-item').toggleClass('is-disable');
		$(this).removeClass('is-disable');
		$('.highcharts-legend-item.highcharts-series-0').trigger('click');
		$('.highcharts-legend-item.highcharts-series-2').trigger('click');
		$('.highcharts-legend-item.highcharts-series-3').trigger('click');
	});

});