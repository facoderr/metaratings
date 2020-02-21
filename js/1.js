(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "../blocks/sentiment/sentiment.js":
/*!****************************************!*\
  !*** ../blocks/sentiment/sentiment.js ***!
  \****************************************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highcharts */ "../../node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);


__webpack_require__(/*! highcharts/highcharts-more.js */ "../../node_modules/highcharts/highcharts-more.js")(highcharts__WEBPACK_IMPORTED_MODULE_0___default.a);

__webpack_require__(/*! highcharts/modules/drilldown.js */ "../../node_modules/highcharts/modules/drilldown.js")(highcharts__WEBPACK_IMPORTED_MODULE_0___default.a);

function init() {
  // Hightlight Text
  $.fn.highlight = function (str, index, className, classGap) {
    var regex = new RegExp(str, 'i');
    return this.each(function () {
      $(this).contents().filter(function () {
        return this.nodeType == 3 && regex.test(this.nodeValue);
      }).replaceWith(function () {
        return (this.nodeValue || "").replace(regex, function (total) {
          return '<span class="' + className + '" data-series="' + index + '"><span class="' + classGap + '"></span>' + total + '</span>';
        });
      });
    });
  }; // Sentiment Varibles


  var win = $(window),
      doc = $(document),
      html = $(document.documentElement),
      sentiment = 'js-sentiment',
      sentimentLoad = $('.js-sentiment-load'),
      sentimentTool = $('.js-sentiment-tool'),
      sentimentTitle = $('.js-sentiment-title'),
      sentimentBack = '.js-sentiment-back',
      sentimentIndicator = $('.js-sentiment-indicator'),
      sentimentBg = $('.js-sentiment-bg'),
      sentimentBgSuccess = $('.js-sentiment-bg-success'),
      sentimentBgDanger = $('.js-sentiment-bg-danger'),
      sentimentList = $('.js-sentiment-list'),
      sentimentScroll = $('.js-sentiment-scroll'),
      sentimentScrollSuccess = $('.is-success.js-sentiment-scroll'),
      sentimentScrollDanger = $('.is-danger.js-sentiment-scroll'),
      sentimentItem = '.js-sentiment-item',
      sentimentFull = '.js-sentiment-full',
      sentimentPagination = $('.js-pagination-sentiment'),
      sentimentPaginationBtn = '.js-more-sentiment',
      reviewList = $('.js-review-list'),
      reviewBody = $('.js-review-body'),
      reviewText = $('.js-review-text'),
      reviewFull = '.js-review-full',
      reviewHighlight = '.js-review-highlight',
      reviewGap = '.js-review-gap',
      sentimentSliderNav = $('.js-review-slideNav'),
      sentimentSliderFor = $('.js-review-slideFor'),
      bodyScrollLock = __webpack_require__(/*! body-scroll-lock */ "../../node_modules/body-scroll-lock/lib/bodyScrollLock.min.js"),
      disableBodyScroll = bodyScrollLock.disableBodyScroll,
      enableBodyScroll = bodyScrollLock.enableBodyScroll,
      BodyScrollOptions = bodyScrollLock.BodyScrollOptions,
      modalWrap = $('.js-modal-wrap'),
      modalTarget = document.querySelectorAll('.js-review-body'),
      modalShow = '.js-modal-show',
      modalHide = '.js-modal-hide';

  sentimentTool.clone().appendTo('.sentiment-graph-body');
  sentimentTool = $('.js-sentiment-tool'); // Sentiment Chart

  var params = $('.sentiment-graph').data('settings');
  params = $.extend({}, {
    drilldown: [],
    series: [],
    ajaxPath: '',
    bookmakerId: 0,
    tagId: 0,
    slider: false,
    count: 10,
    paginationTemplate: ''
  }, params);
  var sentimentChart = highcharts__WEBPACK_IMPORTED_MODULE_0___default.a.chart(sentiment, {
    // Global Options
    chart: {
      type: 'bubble',
      plotBorderWidth: 1,
      plotBorderColor: '#e2e2e2',
      style: {
        'fontFamily': 'Helvetica Neue, Helvetica, Arial, sans-serif',
        'z-index': '1'
      },
      zoomType: '',
      margin: [1, 1, null, 1],
      events: {
        render: function render() {
          setTimeout(function () {
            var chartHeight = $('.highcharts-plot-background').height();
            sentimentIndicator.height(chartHeight + 2);
            sentimentBg.height(chartHeight + 2);
          }, 500);
          var minVal = Math.abs(this.yAxis[0].min),
              maxVal = Math.abs(this.yAxis[0].max);

          if (this.yAxis[0].min > 0 && this.yAxis[0].max > 0) {
            minVal = 0;
          } else if (this.yAxis[0].min < 0 && this.yAxis[0].max < 0) {
            maxVal = 0;
          }

          var totalVal = minVal + maxVal,
              minHalf = minVal * 100 / totalVal,
              maxHalf = maxVal * 100 / totalVal;

          if (minHalf < maxHalf || minHalf > maxHalf) {
            sentimentIndicator.css({
              background: 'linear-gradient(to top, #d0021b ' + minHalf + '%, #20a94a ' + minHalf + '%)'
            });
            sentimentBgSuccess.css('height', maxHalf + '%');
            sentimentBgDanger.css('height', minHalf + '%');
          } else {
            sentimentIndicator.css({
              background: 'linear-gradient(to top, #d0021b 50%, #20a94a 50%)'
            });
            sentimentBgSuccess.css('height', maxHalf + '%');
            sentimentBgDanger.css('height', minHalf + '%');
          }
        },
        drilldown: function drilldown() {
          setTimeout(function () {
            var sentimentVal = sentimentChart.series[0].chart.drilldownLevels[0].pointOptions.y,
                sentimentName = sentimentChart.drilldownLevels[0].pointOptions.name;
            sentimentChart.update({
              chart: {
                zoomType: ''
              }
            });
            sentimentTool.css('display', 'flex');

            if (sentimentVal >= 0) {
              sentimentTitle.addClass('is-success');
            } else {
              sentimentTitle.addClass('is-danger');
            }

            sentimentTitle.html('Упоминания под тегом ' + sentimentName);
            sentimentScroll.html('');
            params.tagId = sentimentChart.drilldownLevels[0].pointOptions.id;
            loadReviews();
            $(sentimentChart.series[0].data).each(function (i, data) {
              var parseDrillDown = $.parseHTML('<a href="javascript:void(0);" class="sentiment-graph-item js-sentiment-item" data-series="' + i + '" data-id="' + data.dataId + '">' + data.name + ' <span>(' + data.z + ')</span></a>');
              $(reviewGap).unwrap().remove();
              setTimeout(function () {
                reviewText.highlight(data.name, i, 'sentiment-review-highlight js-review-highlight ' + data.class + '', 'js-review-gap');

                if (data.y >= 0) {
                  $(parseDrillDown).appendTo(sentimentScrollSuccess);
                  $('' + reviewHighlight + '[data-series=' + i + ']').addClass('is-success');
                } else {
                  $(parseDrillDown).appendTo(sentimentScrollDanger);
                  $('' + reviewHighlight + '[data-series=' + i + ']').addClass('is-danger');
                }

                sentimentList.each(function () {
                  $(this).find(sentimentScrollSuccess).parent().toggle(sentimentScrollSuccess.children().length > 0);
                  $(this).find(sentimentScrollDanger).parent().toggle(sentimentScrollDanger.children().length > 0);
                });
              }, 1);
            });
            setTimeout(function () {
              autoHeight();
            }, 1);
          }, 1);
        },
        drillup: function drillup() {
          setTimeout(function () {
            sentimentChart.update({
              chart: {
                zoomType: ''
              }
            });
            sentimentTool.hide();
            sentimentTitle.removeClass('is-success is-danger').html('Все сущности');
            sentimentScroll.html('');
            params.tagId = 0;
            loadReviews();
            $(sentimentChart.series).each(function (i, serie) {
              var parseMain = $.parseHTML('<a href="javascript:void(0);" class="sentiment-graph-item js-sentiment-item" data-series="' + i + '">' + serie.data[0].name + ' <span>(' + serie.zData[0] + ')</span></a>');
              $(reviewGap).unwrap().remove();
              setTimeout(function () {
                reviewText.highlight(serie.data[0].name, i, 'sentiment-review-highlight js-review-highlight ' + serie.data[0].drilldown + '', 'js-review-gap');

                if (serie.yData[0] >= 0) {
                  $(parseMain).appendTo(sentimentScrollSuccess);
                  $('' + reviewHighlight + '[data-series=' + i + ']').addClass('is-success');
                } else {
                  $(parseMain).appendTo(sentimentScrollDanger);
                  $('' + reviewHighlight + '[data-series=' + i + ']').addClass('is-danger');
                }

                sentimentList.each(function () {
                  $(this).find(sentimentScrollSuccess).parent().toggle(sentimentScrollSuccess.children().length != 0);
                  $(this).find(sentimentScrollDanger).parent().toggle(sentimentScrollDanger.children().length != 0);
                });
              }, 1);
            });
            setTimeout(function () {
              autoHeight();
            }, 1);
            chartSeries = $('.highcharts-series');
          }, 1);
        }
      }
    },
    // Disabled Chart title, tooltip, legend
    title: {
      text: null
    },
    tooltip: {
      enabled: false
    },
    legend: {
      enabled: false
    },
    // Horizontal Coordinates
    xAxis: {
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
      tickPixelInterval: 100,
      showLastLabel: false,
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
      gridLineWidth: 1,
      gridLineColor: '#e2e2e2',
      plotLines: [{
        color: '#9c9c9c',
        width: 1,
        value: 0,
        zIndex: 2
      }],
      labels: {
        enabled: false
      }
    },
    // Sentiment Options
    plotOptions: {
      bubble: {
        minSize: 5,
        maxSize: '11%',
        zMin: 0,
        zMax: null,
        animation: {
          duration: 500
        }
      },
      series: {
        stickyTracking: false,
        zoneAxis: 'y',
        zones: [{
          value: 0,
          className: 'zone-no'
        }, {
          className: 'zone-yes'
        }],
        states: {
          inactive: {
            opacity: 1
          }
        },
        marker: {
          fillOpacity: 1,
          lineWidth: 2,
          states: {
            hover: {
              enabled: false
            }
          }
        },
        dataLabels: {
          enabled: true,
          //allowOverlap: true,
          useHTML: true,
          formatter: function formatter() {
            if (win.outerWidth() <= 1099) {
              return '<span style="position:relative;bottom:-' + (this.point.marker.radius + 10) + 'px;">' + this.point.name + '</span>';
            } else {
              return '<span style="position:relative;bottom:-' + (this.point.marker.radius + 15) + 'px;">' + this.point.name + '</span>';
            }
          },
          style: {
            fontSize: '8px',
            color: '#000000',
            textOutline: 'none'
          }
        },
        events: {
          mouseOver: function mouseOver() {
            setTimeout(function () {
              if (sentimentChart.drillUpButton === undefined) {
                $(sentimentChart.series).each(function (i, serie) {
                  $('' + sentimentItem + '[data-series=' + i + ']').toggleClass('is-hover', $('.highcharts-series-' + i + '.highcharts-series-hover').length > 0);

                  if ($('.highcharts-series-' + i + '.highcharts-series-hover').length > 0) {
                    $('.widget-review-highlight').addClass('is-disable');
                    $('' + reviewHighlight + '[data-series=' + i + ']').removeClass('is-disable');
                  } else {
                    $('' + reviewHighlight + '[data-series=' + i + ']').addClass('is-disable');
                  }
                });
              } else {
                return false;
              }
            }, 1);
          },
          mouseOut: function mouseOut() {
            setTimeout(function () {
              if (sentimentChart.drillUpButton === undefined) {
                $(sentimentItem).removeClass('is-hover');
                $(reviewHighlight).removeClass('is-disable');
              } else {
                return false;
              }
            }, 1);
          }
        }
      }
    },
    // Main Series Data
    series: [],
    // Drilldown Series Data
    drilldown: {
      activeDataLabelStyle: {
        color: '#000000',
        textDecoration: 'none'
      },
      activeAxisLabelStyle: {
        color: '#777777',
        textDecoration: 'none'
      },
      drillUpButton: {
        theme: {
          display: 'none'
        }
      },
      series: []
    },
    // Responsive
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          chart: {
            height: 250
          },
          xAxis: {
            tickPixelInterval: 50
          },
          yAxis: {
            tickPixelInterval: 30
          }
        }
      }]
    }
  });
  sentimentChart.update(params.series, true, true);
  sentimentChart.options.drilldown = highcharts__WEBPACK_IMPORTED_MODULE_0___default.a.merge(sentimentChart.options.drilldown, {
    series: params.drilldown.series
  }); // Init Sentiment Tags, Sentiment Reviews, Sentiment Highlight, Sentiment Block Height, Sentiment Pagination

  function autoHeight() {
    if (win.outerWidth() >= 1100) {
      sentimentList.each(function () {
        var maxH = 54,
            sentimentScrollHeight = $(this).find(sentimentScroll).outerHeight();

        if (sentimentScrollHeight > maxH) {
          $(this).css('max-height', maxH);
          $(this).find(sentimentFull).css('display', 'flex');
        } else {
          $(this).css('max-height', '');
          $(this).find(sentimentFull).css('display', 'none');
        }
      });
    }

    reviewBody.each(function () {
      var maxH = 102,
          reviewTextHeight = $(this).find(reviewText).outerHeight();

      if (reviewTextHeight > maxH) {
        $(this).css('max-height', maxH);
        $(this).find(reviewFull).css('display', 'flex');
      } else {
        $(this).css('max-height', '');
        $(this).find(reviewFull).css('display', 'none');
      }
    });
  }

  function addCommentsSlider(comments) {
    var listNav = $('.js-review-slideNav .swiper-wrapper'),
        listFor = $('.js-review-slideFor .swiper-wrapper');
    listNav.html('');
    listFor.html('');
    $(comments).each(function (i, comment) {
      var parseSlide = $.parseHTML('<div class="swiper-slide">\n' + '<a class="sentiment-review-block-link js-modal-show" href="#review"></a>\n' + '<div class="sentiment-review-item">\n' + '<div class="sentiment-review-item-head">\n' + '<div class="sentiment-review-item-user">\n' + '<div class="sentiment-review-item-img">\n' + '<img src="/local/templates/main/img/icons/user.svg" alt="User" />\n' + '</div>\n' + '<div class="sentiment-review-item-info">\n' + '<div class="sentiment-review-item-name">' + comment.author + '</div>\n' + (comment.source.name ? '<span class="sentiment-review-item-link">' + comment.source.name + '</span>' : ' ') + '\n' + '</div>\n' + '</div>\n' + '<div class="sentiment-review-item-date">' + comment.date + '</div>\n' + '</div>\n' + '<div class="sentiment-review-item-body js-review-body">\n' + '<div class="sentiment-review-item-text js-review-text">' + comment.text + '</div>\n' + '<div class="sentiment-review-item-full js-review-full">еще</div>\n' + '</div>\n' + '</div>\n' + '</div>');
      $(parseSlide).clone().appendTo(listNav);
      $(parseSlide).clone().appendTo(listFor);
    });
    sentimentSliderNav.get(0).swiper.update();
    sentimentSliderNav.get(0).swiper.slideTo(0);
    sentimentSliderFor.get(0).swiper.update();
    sentimentSliderFor.get(0).swiper.slideTo(0);
    reviewBody = $('.js-review-body');
    reviewText = $('.js-review-text');
    reviewFull = '.js-review-full';
    modalTarget = document.querySelectorAll('.js-review-body');
    autoHeight();
  }

  function addComments(comments) {
    reviewList.html('');
    $(comments).each(function (i, comment) {
      $($.parseHTML(' <div class="sentiment-review-item">\n' + '<div class="sentiment-review-item-head">\n' + '<div class="sentiment-review-item-user">\n' + '<div class="sentiment-review-item-img">\n' + '<img src="/local/templates/main/img/icons/user.svg" alt="User" />\n' + '</div>\n' + '<div class="sentiment-review-item-info">\n' + '<div class="sentiment-review-item-name">' + comment.author + '</div>\n' + (comment.source.name ? '<span class="sentiment-review-item-link">' + comment.source.name + '</span>' : ' ') + '\n' + '</div>\n' + '</div>\n' + '<div class="sentiment-review-item-date">' + comment.date + '</div>\n' + '</div>\n' + '<div class="sentiment-review-item-body js-review-body">\n' + '<div class="sentiment-review-item-text js-review-text">' + comment.text + '</div>\n' + '<div class="sentiment-review-item-full js-review-full">еще</div>\n' + '</div>\n' + '</div>')).appendTo(reviewList);
    });
    reviewBody = $('.js-review-body');
    reviewText = $('.js-review-text');
    reviewFull = '.js-review-full';
    autoHeight();
  }

  function addPagination(pagination) {
    var htmlPag = $(pagination);

    if (sentimentPagination.length > 0) {
      var newPagination = htmlPag.is('.js-pagination-sentiment') ? htmlPag.filter('.js-pagination-sentiment') : htmlPag.find('.js-pagination-sentiment');
      sentimentPagination.empty().append(newPagination.children()); // sentimentPagination.replaceWith(pagination);
    } else {
      reviewList.after(pagination);
    }
  }

  function loadReviews(page) {
    var data = {
      action: 'load-comments',
      bookmaker: params.bookmakerId,
      tag: params.tagId,
      count: params.count,
      slider: params.slider,
      subTag: params.subTag,
      paginationTemplate: params.paginationTemplate
    };
    if (page && page > 1) data['page'] = 'page-' + page;
    $.get(params.ajaxPath, data, function (response) {
      if (params.slider) {
        addCommentsSlider(response.comments);
      } else {
        addComments(response.comments);
      }

      if (params.paginationTemplate) addPagination(response.pagination);
    }, 'json');
  }

  function pagination() {
    sentimentPagination.on('click', 'a', function (e) {
      e.preventDefault();
      var html = $(document.body).add(document.documentElement),
          page = parseInt($(this).attr('data-page'));

      if (!isNaN(page) && page > 0 && !$(this).parent().hasClass('.is-active')) {
        html.animate({
          scrollTop: reviewList.offset().top - 15
        }, 200);
        loadReviews(page);
      }

      updateUrlMetaByPage(page);
    });
    doc.on('click', sentimentPaginationBtn, function (e) {
      e.preventDefault();
      var html = $(document.body).add(document.documentElement),
          page = parseInt($(this).attr('data-page'));

      if (!isNaN(page) && page > 0) {
        html.animate({
          scrollTop: reviewList.offset().top - 15
        }, 200);
        loadReviews(page);
      }

      updateUrlMetaByPage(page);
    });
  }

  function updateUrlMetaByPage(page) {
    var $sentimentMain = $('.sentiment-main');
    var title = $sentimentMain.attr('data-title');
    var desc = $sentimentMain.attr('data-desc');
    var url = document.location.pathname;

    if (page > 1) {
      title = $sentimentMain.attr('data-nav-title-template') + page;
      desc = $sentimentMain.attr('data-nav-desc-template') + page;
      url += '?page=page-' + page;
    }

    history.pushState('', '', url);
    document.title = title;
    $(document).find('meta[name=description]').attr('content', desc);
  }

  $(sentimentChart.series).each(function (i, serie) {
    var parseMain = $.parseHTML('<a href="javascript:void(0);" class="sentiment-graph-item js-sentiment-item" data-series="' + i + '">' + serie.data[0].name + ' <span>(' + serie.zData[0] + ')</span></a>');
    reviewText.highlight(serie.data[0].name, i, 'sentiment-review-highlight js-review-highlight ' + serie.data[0].drilldown + '', 'js-review-gap');

    if (serie.yData[0] >= 0) {
      $(parseMain).appendTo(sentimentScrollSuccess);
      $('' + reviewHighlight + '[data-series=' + i + ']').addClass('is-success');
    } else {
      $(parseMain).appendTo(sentimentScrollDanger);
      $('' + reviewHighlight + '[data-series=' + i + ']').addClass('is-danger');
    }

    sentimentList.each(function () {
      $(this).find(sentimentScrollSuccess).parent().toggle(sentimentScrollSuccess.children().length > 0);
      $(this).find(sentimentScrollDanger).parent().toggle(sentimentScrollDanger.children().length > 0);
    });
  });
  autoHeight();
  sentimentLoad.addClass('is-load'); // Interaction

  var chartSeries = $('.highcharts-series'),
      chartPoint = '.highcharts-point',
      chartLabel = '.highcharts-label';
  doc.on('click', sentimentItem, function () {
    var seriesVal = $(this).data('series'),
        idVal = $(this).data('id');

    if (sentimentChart.drillUpButton === undefined) {
      sentimentChart.series[seriesVal].data[0].doDrilldown();
    } else {
      $(sentimentItem).removeClass('is-focus');
      $(this).addClass('is-focus');
      params.tagId = idVal;
      loadReviews();
      return false;
    }
  });
  doc.on('mouseover mouseout', sentimentItem, function () {
    var seriesVal = $(this).data('series');

    if (sentimentChart.drillUpButton === undefined) {
      chartSeries.toggleClass('highcharts-series-inactive');
      $('.highcharts-series-' + seriesVal).removeClass('highcharts-series-inactive');
      $(reviewHighlight).toggleClass('is-disable');
      $('' + reviewHighlight + '[data-series=' + seriesVal + ']').removeClass('is-disable');
    } else {
      $(chartPoint).toggleClass('is-disable');
      $(chartPoint).eq(seriesVal).removeClass('highcharts-point-hover is-disable');
      $(reviewHighlight).toggleClass('is-disable');
      $('' + reviewHighlight + '[data-series=' + seriesVal + ']').removeClass('is-disable');
    }
  });
  doc.on('click', chartLabel, function () {
    if (sentimentChart.drillUpButton === undefined) {
      return false;
    } else {
      $(sentimentChart.series[0].data).each(function (i, data) {
        var condition = $(chartPoint).eq(i).hasClass('highcharts-point-hover');

        if (condition) {
          $('' + sentimentItem + '[data-series=' + i + ']').trigger('click');
        }
      });
    }
  });
  doc.on('mouseover', chartLabel, function () {
    if (sentimentChart.drillUpButton === undefined) {
      return false;
    } else {
      $(this).addClass('highcharts-label-hover');
      var activePoint = $('.highcharts-label-hover'),
          activePointIndex = activePoint.index();
      $(chartPoint).eq(activePointIndex).addClass('highcharts-point-hover');
      $(sentimentChart.series[0].data).each(function (i, data) {
        var condition = $(chartPoint).eq(i).hasClass('highcharts-point-hover');
        $('' + sentimentItem + '[data-series=' + i + ']').toggleClass('is-hover', condition);

        if (condition) {
          $(chartPoint).addClass('is-disable');
          $('.highcharts-point.highcharts-point-hover').removeClass('is-disable');
          $(reviewHighlight).addClass('is-disable');
          $('' + reviewHighlight + '[data-series=' + i + ']').removeClass('is-disable');
        }
      });
    }
  });
  doc.on('mouseout', chartLabel, function () {
    if (sentimentChart.drillUpButton === undefined) {
      return false;
    } else {
      $(sentimentItem).removeClass('is-hover');
      $(chartPoint).removeClass('highcharts-point-hover is-disable');
      $(chartLabel).removeClass('highcharts-label-hover');
      $(reviewHighlight).removeClass('is-disable');
    }
  });
  if (sentimentPagination.length > 0) pagination();
  doc.on('click', sentimentBack, function () {
    $('.highcharts-drillup-button').trigger('click');
  });
  doc.on('click', sentimentFull, function () {
    var sentimentScrollHeight = $(this).siblings().outerHeight();
    $(this).fadeOut(300);
    $(this).parent().css('max-height', sentimentScrollHeight + 10);
  });
  doc.on('click', reviewFull, function () {
    var reviewTextHeight = $(this).siblings().outerHeight();
    $(this).fadeOut(300);
    $(this).parent().css('max-height', reviewTextHeight);
  });
  doc.on('click', modalShow, function () {
    html.css('overflow', 'initial');
    modalTarget.forEach(function (modalTarget) {
      disableBodyScroll(modalTarget, BodyScrollOptions = {
        reserveScrollBarGap: true
      });
    });
    doc.on('mouseup touchend', function (e) {
      if ($(e.target).closest(modalWrap).length) return;
      html.css('overflow', '');
      modalTarget.forEach(function (modalTarget) {
        enableBodyScroll(modalTarget);
      });
    });
    return false;
  });
  doc.on('click', modalHide, function () {
    html.css('overflow', '');
    modalTarget.forEach(function (modalTarget) {
      enableBodyScroll(modalTarget);
    });
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../../node_modules/jquery/dist/jquery.js")))

/***/ })

}]);