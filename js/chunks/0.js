(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../../node_modules/highcharts/highcharts-more.js":
/*!************************************************************************************************************!*\
  !*** C:/Users/Farkhad/Desktop/GitHub/metaratings-v2/markup-new/node_modules/highcharts/highcharts-more.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 Highcharts JS v7.2.1 (2019-10-31)

 (c) 2009-2018 Torstein Honsi

 License: www.highcharts.com/license
*/
(function (u) {
  "object" === ( false ? undefined : _typeof(module)) && module.exports ? (u["default"] = u, module.exports = u) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! highcharts */ "../../node_modules/highcharts/highcharts.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (B) {
    u(B);
    u.Highcharts = B;
    return u;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(function (u) {
  function B(b, a, h, g) {
    b.hasOwnProperty(a) || (b[a] = g.apply(null, h));
  }

  u = u ? u._modules : {};
  B(u, "parts-more/Pane.js", [u["parts/Globals.js"], u["parts/Utilities.js"]], function (b, a) {
    function h(e, c) {
      this.init(e, c);
    }

    var g = a.extend,
        m = a.splat,
        n = b.CenteredSeriesMixin,
        q = b.merge;
    g(h.prototype, {
      coll: "pane",
      init: function init(e, c) {
        this.chart = c;
        this.background = [];
        c.pane.push(this);
        this.setOptions(e);
      },
      setOptions: function setOptions(e) {
        this.options = q(this.defaultOptions, this.chart.angular ? {
          background: {}
        } : void 0, e);
      },
      render: function render() {
        var e = this.options,
            c = this.options.background,
            a = this.chart.renderer;
        this.group || (this.group = a.g("pane-group").attr({
          zIndex: e.zIndex || 0
        }).add());
        this.updateCenter();
        if (c) for (c = m(c), e = Math.max(c.length, this.background.length || 0), a = 0; a < e; a++) {
          c[a] && this.axis ? this.renderBackground(q(this.defaultBackgroundOptions, c[a]), a) : this.background[a] && (this.background[a] = this.background[a].destroy(), this.background.splice(a, 1));
        }
      },
      renderBackground: function renderBackground(a, c) {
        var e = "animate",
            v = {
          "class": "highcharts-pane " + (a.className || "")
        };
        this.chart.styledMode || g(v, {
          fill: a.backgroundColor,
          stroke: a.borderColor,
          "stroke-width": a.borderWidth
        });
        this.background[c] || (this.background[c] = this.chart.renderer.path().add(this.group), e = "attr");
        this.background[c][e]({
          d: this.axis.getPlotBandPath(a.from, a.to, a)
        }).attr(v);
      },
      defaultOptions: {
        center: ["50%", "50%"],
        size: "85%",
        startAngle: 0
      },
      defaultBackgroundOptions: {
        shape: "circle",
        borderWidth: 1,
        borderColor: "#cccccc",
        backgroundColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [[0, "#ffffff"], [1, "#e6e6e6"]]
        },
        from: -Number.MAX_VALUE,
        innerRadius: 0,
        to: Number.MAX_VALUE,
        outerRadius: "105%"
      },
      updateCenter: function updateCenter(a) {
        this.center = (a || this.axis || {}).center = n.getCenter.call(this);
      },
      update: function update(a, c) {
        q(!0, this.options, a);
        q(!0, this.chart.options.pane, a);
        this.setOptions(this.options);
        this.render();
        this.chart.axes.forEach(function (a) {
          a.pane === this && (a.pane = null, a.update({}, c));
        }, this);
      }
    });
    b.Pane = h;
  });
  B(u, "parts-more/RadialAxis.js", [u["parts/Globals.js"], u["parts/Utilities.js"]], function (b, a) {
    var h = a.extend,
        g = a.pick,
        m = a.pInt;
    a = b.addEvent;
    var n = b.Axis,
        q = b.merge,
        e = b.noop,
        c = b.Tick,
        f = b.wrap,
        v = b.correctFloat,
        t = n.prototype,
        p = c.prototype;
    var x = {
      getOffset: e,
      redraw: function redraw() {
        this.isDirty = !1;
      },
      render: function render() {
        this.isDirty = !1;
      },
      createLabelCollector: function createLabelCollector() {
        return !1;
      },
      setScale: e,
      setCategories: e,
      setTitle: e
    };
    var z = {
      defaultRadialGaugeOptions: {
        labels: {
          align: "center",
          x: 0,
          y: null
        },
        minorGridLineWidth: 0,
        minorTickInterval: "auto",
        minorTickLength: 10,
        minorTickPosition: "inside",
        minorTickWidth: 1,
        tickLength: 10,
        tickPosition: "inside",
        tickWidth: 2,
        title: {
          rotation: 0
        },
        zIndex: 2
      },
      defaultRadialXOptions: {
        gridLineWidth: 1,
        labels: {
          align: null,
          distance: 15,
          x: 0,
          y: null,
          style: {
            textOverflow: "none"
          }
        },
        maxPadding: 0,
        minPadding: 0,
        showLastLabel: !1,
        tickLength: 0
      },
      defaultRadialYOptions: {
        gridLineInterpolation: "circle",
        labels: {
          align: "right",
          x: -3,
          y: -2
        },
        showLastLabel: !1,
        title: {
          x: 4,
          text: null,
          rotation: 90
        }
      },
      setOptions: function setOptions(l) {
        l = this.options = q(this.defaultOptions, this.defaultRadialOptions, l);
        l.plotBands || (l.plotBands = []);
        b.fireEvent(this, "afterSetOptions");
      },
      getOffset: function getOffset() {
        t.getOffset.call(this);
        this.chart.axisOffset[this.side] = 0;
      },
      getLinePath: function getLinePath(l, d) {
        l = this.center;
        var k = this.chart,
            r = g(d, l[2] / 2 - this.offset);
        this.isCircular || void 0 !== d ? (d = this.chart.renderer.symbols.arc(this.left + l[0], this.top + l[1], r, r, {
          start: this.startAngleRad,
          end: this.endAngleRad,
          open: !0,
          innerR: 0
        }), d.xBounds = [this.left + l[0]], d.yBounds = [this.top + l[1] - r]) : (d = this.postTranslate(this.angleRad, r), d = ["M", l[0] + k.plotLeft, l[1] + k.plotTop, "L", d.x, d.y]);
        return d;
      },
      setAxisTranslation: function setAxisTranslation() {
        t.setAxisTranslation.call(this);
        this.center && (this.transA = this.isCircular ? (this.endAngleRad - this.startAngleRad) / (this.max - this.min || 1) : this.center[2] / 2 / (this.max - this.min || 1), this.minPixelPadding = this.isXAxis ? this.transA * this.minPointOffset : 0);
      },
      beforeSetTickPositions: function beforeSetTickPositions() {
        if (this.autoConnect = this.isCircular && void 0 === g(this.userMax, this.options.max) && v(this.endAngleRad - this.startAngleRad) === v(2 * Math.PI)) this.max += this.categories && 1 || this.pointRange || this.closestPointRange || 0;
      },
      setAxisSize: function setAxisSize() {
        t.setAxisSize.call(this);
        this.isRadial && (this.pane.updateCenter(this), this.isCircular && (this.sector = this.endAngleRad - this.startAngleRad), this.len = this.width = this.height = this.center[2] * g(this.sector, 1) / 2);
      },
      getPosition: function getPosition(l, d) {
        return this.postTranslate(this.isCircular ? this.translate(l) : this.angleRad, g(this.isCircular ? d : this.translate(l), this.center[2] / 2) - this.offset);
      },
      postTranslate: function postTranslate(l, d) {
        var k = this.chart,
            r = this.center;
        l = this.startAngleRad + l;
        return {
          x: k.plotLeft + r[0] + Math.cos(l) * d,
          y: k.plotTop + r[1] + Math.sin(l) * d
        };
      },
      getPlotBandPath: function getPlotBandPath(l, d, k) {
        var r = this.center,
            w = this.startAngleRad,
            c = r[2] / 2,
            a = [g(k.outerRadius, "100%"), k.innerRadius, g(k.thickness, 10)],
            e = Math.min(this.offset, 0),
            v = /%$/;
        var p = this.isCircular;
        if ("polygon" === this.options.gridLineInterpolation) a = this.getPlotLinePath({
          value: l
        }).concat(this.getPlotLinePath({
          value: d,
          reverse: !0
        }));else {
          l = Math.max(l, this.min);
          d = Math.min(d, this.max);
          p || (a[0] = this.translate(l), a[1] = this.translate(d));
          a = a.map(function (d) {
            v.test(d) && (d = m(d, 10) * c / 100);
            return d;
          });
          if ("circle" !== k.shape && p) l = w + this.translate(l), d = w + this.translate(d);else {
            l = -Math.PI / 2;
            d = 1.5 * Math.PI;
            var t = !0;
          }
          a[0] -= e;
          a[2] -= e;
          a = this.chart.renderer.symbols.arc(this.left + r[0], this.top + r[1], a[0], a[0], {
            start: Math.min(l, d),
            end: Math.max(l, d),
            innerR: g(a[1], a[0] - a[2]),
            open: t
          });
          p && (p = (d + l) / 2, e = this.left + r[0] + r[2] / 2 * Math.cos(p), a.xBounds = p > -Math.PI / 2 && p < Math.PI / 2 ? [e, this.chart.plotWidth] : [0, e], a.yBounds = [this.top + r[1] + r[2] / 2 * Math.sin(p)], a.yBounds[0] += p > -Math.PI && 0 > p || p > Math.PI ? -10 : 10);
        }
        return a;
      },
      getPlotLinePath: function getPlotLinePath(c) {
        var d = this,
            k = d.center,
            r = d.chart,
            w = c.value;
        c = c.reverse;
        var l = d.getPosition(w),
            a = d.pane.options.background ? d.pane.options.background[0] || d.pane.options.background : {},
            e = a.innerRadius || "0%",
            p = a.outerRadius || "100%";
        a = k[0] + r.plotLeft;
        k = k[1] + r.plotTop;
        var v = l.x;
        l = l.y;
        var t, f;

        if (d.isCircular) {
          r = "string" === typeof e ? b.relativeLength(e, 1) : e / Math.sqrt(Math.pow(v - a, 2) + Math.pow(l - k, 2));
          c = "string" === typeof p ? b.relativeLength(p, 1) : p / Math.sqrt(Math.pow(v - a, 2) + Math.pow(l - k, 2));
          var g = ["M", a + r * (v - a), k - r * (k - l), "L", v - (1 - c) * (v - a), l + (1 - c) * (k - l)];
        } else "circle" === d.options.gridLineInterpolation ? (w = d.translate(w), g = d.getLinePath(0, w)) : (r.xAxis.forEach(function (k) {
          k.pane === d.pane && (t = k);
        }), g = [], w = d.translate(w), r = t.tickPositions, t.autoConnect && (r = r.concat([r[0]])), c && (r = [].concat(r).reverse()), r.forEach(function (d, k) {
          f = t.getPosition(d, w);
          g.push(k ? "L" : "M", f.x, f.y);
        }));

        return g;
      },
      getTitlePosition: function getTitlePosition() {
        var c = this.center,
            d = this.chart,
            k = this.options.title;
        return {
          x: d.plotLeft + c[0] + (k.x || 0),
          y: d.plotTop + c[1] - {
            high: .5,
            middle: .25,
            low: 0
          }[k.align] * c[2] + (k.y || 0)
        };
      },
      createLabelCollector: function createLabelCollector() {
        var c = this;
        return function () {
          if (c.isRadial && c.tickPositions && !0 !== c.options.labels.allowOverlap) return c.tickPositions.map(function (d) {
            return c.ticks[d] && c.ticks[d].label;
          }).filter(function (d) {
            return !!d;
          });
        };
      }
    };
    a(n, "init", function (c) {
      var d = this.chart,
          k = d.angular,
          r = d.polar,
          w = this.isXAxis,
          a = k && w,
          l,
          e = d.options;
      c = c.userOptions.pane || 0;
      c = this.pane = d.pane && d.pane[c];
      if ("colorAxis" === this.coll) this.isRadial = !1;else {
        if (k) {
          if (h(this, a ? x : z), l = !w) this.defaultRadialOptions = this.defaultRadialGaugeOptions;
        } else r && (h(this, z), this.defaultRadialOptions = (l = w) ? this.defaultRadialXOptions : q(this.defaultYAxisOptions, this.defaultRadialYOptions));

        k || r ? (this.isRadial = !0, d.inverted = !1, e.chart.zoomType = null, this.labelCollector || (this.labelCollector = this.createLabelCollector()), this.labelCollector && d.labelCollectors.push(this.labelCollector)) : this.isRadial = !1;
        c && l && (c.axis = this);
        this.isCircular = l;
      }
    });
    a(n, "afterInit", function () {
      var c = this.chart,
          d = this.options,
          k = this.pane,
          r = k && k.options;
      c.angular && this.isXAxis || !k || !c.angular && !c.polar || (this.angleRad = (d.angle || 0) * Math.PI / 180, this.startAngleRad = (r.startAngle - 90) * Math.PI / 180, this.endAngleRad = (g(r.endAngle, r.startAngle + 360) - 90) * Math.PI / 180, this.offset = d.offset || 0);
    });
    a(n, "autoLabelAlign", function (c) {
      this.isRadial && (c.align = void 0, c.preventDefault());
    });
    a(n, "destroy", function () {
      if (this.chart && this.chart.labelCollectors) {
        var c = this.chart.labelCollectors.indexOf(this.labelCollector);
        0 <= c && this.chart.labelCollectors.splice(c, 1);
      }
    });
    a(c, "afterGetPosition", function (c) {
      this.axis.getPosition && h(c.pos, this.axis.getPosition(this.pos));
    });
    a(c, "afterGetLabelPosition", function (c) {
      var d = this.axis,
          k = this.label,
          r = k.getBBox(),
          w = d.options.labels,
          a = w.y,
          l = 20,
          e = w.align,
          v = (d.translate(this.pos) + d.startAngleRad + Math.PI / 2) / Math.PI * 180 % 360,
          p = Math.round(v),
          t = "end",
          f = 0 > p ? p + 360 : p,
          m = f,
          h = 0,
          n = 0,
          z = null === w.y ? .3 * -r.height : 0;

      if (d.isRadial) {
        var x = d.getPosition(this.pos, d.center[2] / 2 + b.relativeLength(g(w.distance, -25), d.center[2] / 2, -d.center[2] / 2));
        "auto" === w.rotation ? k.attr({
          rotation: v
        }) : null === a && (a = d.chart.renderer.fontMetrics(k.styles && k.styles.fontSize).b - r.height / 2);
        null === e && (d.isCircular ? (r.width > d.len * d.tickInterval / (d.max - d.min) && (l = 0), e = v > l && v < 180 - l ? "left" : v > 180 + l && v < 360 - l ? "right" : "center") : e = "center", k.attr({
          align: e
        }));

        if ("auto" === e && 2 === d.tickPositions.length && d.isCircular) {
          90 < f && 180 > f ? f = 180 - f : 270 < f && 360 >= f && (f = 540 - f);
          180 < m && 360 >= m && (m = 360 - m);
          if (d.pane.options.startAngle === p || d.pane.options.startAngle === p + 360 || d.pane.options.startAngle === p - 360) t = "start";
          e = -90 <= p && 90 >= p || -360 <= p && -270 >= p || 270 <= p && 360 >= p ? "start" === t ? "right" : "left" : "start" === t ? "left" : "right";
          70 < m && 110 > m && (e = "center");
          15 > f || 180 <= f && 195 > f ? h = .3 * r.height : 15 <= f && 35 >= f ? h = "start" === t ? 0 : .75 * r.height : 195 <= f && 215 >= f ? h = "start" === t ? .75 * r.height : 0 : 35 < f && 90 >= f ? h = "start" === t ? .25 * -r.height : r.height : 215 < f && 270 >= f && (h = "start" === t ? r.height : .25 * -r.height);
          15 > m ? n = "start" === t ? .15 * -r.height : .15 * r.height : 165 < m && 180 >= m && (n = "start" === t ? .15 * r.height : .15 * -r.height);
          k.attr({
            align: e
          });
          k.translate(n, h + z);
        }

        c.pos.x = x.x + w.x;
        c.pos.y = x.y + a;
      }
    });
    f(p, "getMarkPath", function (c, d, k, r, w, a, e) {
      var l = this.axis;
      l.isRadial ? (c = l.getPosition(this.pos, l.center[2] / 2 + r), d = ["M", d, k, "L", c.x, c.y]) : d = c.call(this, d, k, r, w, a, e);
      return d;
    });
  });
  B(u, "parts-more/AreaRangeSeries.js", [u["parts/Globals.js"], u["parts/Utilities.js"]], function (b, a) {
    var h = a.defined,
        g = a.extend,
        m = a.isArray,
        n = a.isNumber,
        q = a.pick;
    a = b.seriesType;
    var e = b.seriesTypes,
        c = b.Series.prototype,
        f = b.Point.prototype;
    a("arearange", "area", {
      lineWidth: 1,
      threshold: null,
      tooltip: {
        pointFormat: "<span style=\"color:{series.color}\">\u25CF</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>"
      },
      trackByArea: !0,
      dataLabels: {
        align: null,
        verticalAlign: null,
        xLow: 0,
        xHigh: 0,
        yLow: 0,
        yHigh: 0
      }
    }, {
      pointArrayMap: ["low", "high"],
      pointValKey: "low",
      deferTranslatePolar: !0,
      toYData: function toYData(c) {
        return [c.low, c.high];
      },
      highToXY: function highToXY(c) {
        var a = this.chart,
            e = this.xAxis.postTranslate(c.rectPlotX, this.yAxis.len - c.plotHigh);
        c.plotHighX = e.x - a.plotLeft;
        c.plotHigh = e.y - a.plotTop;
        c.plotLowX = c.plotX;
      },
      translate: function translate() {
        var c = this,
            a = c.yAxis,
            p = !!c.modifyValue;
        e.area.prototype.translate.apply(c);
        c.points.forEach(function (e) {
          var f = e.high,
              l = e.plotY;
          e.isNull ? e.plotY = null : (e.plotLow = l, e.plotHigh = a.translate(p ? c.modifyValue(f, e) : f, 0, 1, 0, 1), p && (e.yBottom = e.plotHigh));
        });
        this.chart.polar && this.points.forEach(function (a) {
          c.highToXY(a);
          a.tooltipPos = [(a.plotHighX + a.plotLowX) / 2, (a.plotHigh + a.plotLow) / 2];
        });
      },
      getGraphPath: function getGraphPath(c) {
        var a = [],
            p = [],
            f,
            g = e.area.prototype.getGraphPath;
        var l = this.options;
        var d = this.chart.polar && !1 !== l.connectEnds,
            k = l.connectNulls,
            r = l.step;
        c = c || this.points;

        for (f = c.length; f--;) {
          var w = c[f];
          w.isNull || d || k || c[f + 1] && !c[f + 1].isNull || p.push({
            plotX: w.plotX,
            plotY: w.plotY,
            doCurve: !1
          });
          var F = {
            polarPlotY: w.polarPlotY,
            rectPlotX: w.rectPlotX,
            yBottom: w.yBottom,
            plotX: q(w.plotHighX, w.plotX),
            plotY: w.plotHigh,
            isNull: w.isNull
          };
          p.push(F);
          a.push(F);
          w.isNull || d || k || c[f - 1] && !c[f - 1].isNull || p.push({
            plotX: w.plotX,
            plotY: w.plotY,
            doCurve: !1
          });
        }

        c = g.call(this, c);
        r && (!0 === r && (r = "left"), l.step = {
          left: "right",
          center: "center",
          right: "left"
        }[r]);
        a = g.call(this, a);
        p = g.call(this, p);
        l.step = r;
        l = [].concat(c, a);
        this.chart.polar || "M" !== p[0] || (p[0] = "L");
        this.graphPath = l;
        this.areaPath = c.concat(p);
        l.isArea = !0;
        l.xMap = c.xMap;
        this.areaPath.xMap = c.xMap;
        return l;
      },
      drawDataLabels: function drawDataLabels() {
        var a = this.points,
            e = a.length,
            f,
            b = [],
            h = this.options.dataLabels,
            l,
            d = this.chart.inverted;
        if (m(h)) {
          if (1 < h.length) {
            var k = h[0];
            var r = h[1];
          } else k = h[0], r = {
            enabled: !1
          };
        } else k = g({}, h), k.x = h.xHigh, k.y = h.yHigh, r = g({}, h), r.x = h.xLow, r.y = h.yLow;

        if (k.enabled || this._hasPointLabels) {
          for (f = e; f--;) {
            if (l = a[f]) {
              var w = k.inside ? l.plotHigh < l.plotLow : l.plotHigh > l.plotLow;
              l.y = l.high;
              l._plotY = l.plotY;
              l.plotY = l.plotHigh;
              b[f] = l.dataLabel;
              l.dataLabel = l.dataLabelUpper;
              l.below = w;
              d ? k.align || (k.align = w ? "right" : "left") : k.verticalAlign || (k.verticalAlign = w ? "top" : "bottom");
            }
          }

          this.options.dataLabels = k;
          c.drawDataLabels && c.drawDataLabels.apply(this, arguments);

          for (f = e; f--;) {
            if (l = a[f]) l.dataLabelUpper = l.dataLabel, l.dataLabel = b[f], delete l.dataLabels, l.y = l.low, l.plotY = l._plotY;
          }
        }

        if (r.enabled || this._hasPointLabels) {
          for (f = e; f--;) {
            if (l = a[f]) w = r.inside ? l.plotHigh < l.plotLow : l.plotHigh > l.plotLow, l.below = !w, d ? r.align || (r.align = w ? "left" : "right") : r.verticalAlign || (r.verticalAlign = w ? "bottom" : "top");
          }

          this.options.dataLabels = r;
          c.drawDataLabels && c.drawDataLabels.apply(this, arguments);
        }

        if (k.enabled) for (f = e; f--;) {
          if (l = a[f]) l.dataLabels = [l.dataLabelUpper, l.dataLabel].filter(function (d) {
            return !!d;
          });
        }
        this.options.dataLabels = h;
      },
      alignDataLabel: function alignDataLabel() {
        e.column.prototype.alignDataLabel.apply(this, arguments);
      },
      drawPoints: function drawPoints() {
        var a = this.points.length,
            e;
        c.drawPoints.apply(this, arguments);

        for (e = 0; e < a;) {
          var f = this.points[e];
          f.origProps = {
            plotY: f.plotY,
            plotX: f.plotX,
            isInside: f.isInside,
            negative: f.negative,
            zone: f.zone,
            y: f.y
          };
          f.lowerGraphic = f.graphic;
          f.graphic = f.upperGraphic;
          f.plotY = f.plotHigh;
          h(f.plotHighX) && (f.plotX = f.plotHighX);
          f.y = f.high;
          f.negative = f.high < (this.options.threshold || 0);
          f.zone = this.zones.length && f.getZone();
          this.chart.polar || (f.isInside = f.isTopInside = void 0 !== f.plotY && 0 <= f.plotY && f.plotY <= this.yAxis.len && 0 <= f.plotX && f.plotX <= this.xAxis.len);
          e++;
        }

        c.drawPoints.apply(this, arguments);

        for (e = 0; e < a;) {
          f = this.points[e], f.upperGraphic = f.graphic, f.graphic = f.lowerGraphic, g(f, f.origProps), delete f.origProps, e++;
        }
      },
      setStackedPoints: b.noop
    }, {
      setState: function setState() {
        var c = this.state,
            a = this.series,
            e = a.chart.polar;
        h(this.plotHigh) || (this.plotHigh = a.yAxis.toPixels(this.high, !0));
        h(this.plotLow) || (this.plotLow = this.plotY = a.yAxis.toPixels(this.low, !0));
        a.stateMarkerGraphic && (a.lowerStateMarkerGraphic = a.stateMarkerGraphic, a.stateMarkerGraphic = a.upperStateMarkerGraphic);
        this.graphic = this.upperGraphic;
        this.plotY = this.plotHigh;
        e && (this.plotX = this.plotHighX);
        f.setState.apply(this, arguments);
        this.state = c;
        this.plotY = this.plotLow;
        this.graphic = this.lowerGraphic;
        e && (this.plotX = this.plotLowX);
        a.stateMarkerGraphic && (a.upperStateMarkerGraphic = a.stateMarkerGraphic, a.stateMarkerGraphic = a.lowerStateMarkerGraphic, a.lowerStateMarkerGraphic = void 0);
        f.setState.apply(this, arguments);
      },
      haloPath: function haloPath() {
        var c = this.series.chart.polar,
            a = [];
        this.plotY = this.plotLow;
        c && (this.plotX = this.plotLowX);
        this.isInside && (a = f.haloPath.apply(this, arguments));
        this.plotY = this.plotHigh;
        c && (this.plotX = this.plotHighX);
        this.isTopInside && (a = a.concat(f.haloPath.apply(this, arguments)));
        return a;
      },
      destroyElements: function destroyElements() {
        ["lowerGraphic", "upperGraphic"].forEach(function (c) {
          this[c] && (this[c] = this[c].destroy());
        }, this);
        this.graphic = null;
        return f.destroyElements.apply(this, arguments);
      },
      isValid: function isValid() {
        return n(this.low) && n(this.high);
      }
    });
    "";
  });
  B(u, "parts-more/AreaSplineRangeSeries.js", [u["parts/Globals.js"]], function (b) {
    var a = b.seriesType;
    a("areasplinerange", "arearange", null, {
      getPointSpline: b.seriesTypes.spline.prototype.getPointSpline
    });
    "";
  });
  B(u, "parts-more/ColumnRangeSeries.js", [u["parts/Globals.js"], u["parts/Utilities.js"]], function (b, a) {
    var h = a.pick;
    a = b.defaultPlotOptions;
    var g = b.merge,
        m = b.noop,
        n = b.seriesType,
        q = b.seriesTypes.column.prototype;
    n("columnrange", "arearange", g(a.column, a.arearange, {
      pointRange: null,
      marker: null,
      states: {
        hover: {
          halo: !1
        }
      }
    }), {
      translate: function translate() {
        var a = this,
            c = a.yAxis,
            f = a.xAxis,
            g = f.startAngleRad,
            m,
            b = a.chart,
            n = a.xAxis.isRadial,
            z = Math.max(b.chartWidth, b.chartHeight) + 999,
            l;
        q.translate.apply(a);
        a.points.forEach(function (d) {
          var k = d.shapeArgs,
              r = a.options.minPointLength;
          d.plotHigh = l = Math.min(Math.max(-z, c.translate(d.high, 0, 1, 0, 1)), z);
          d.plotLow = Math.min(Math.max(-z, d.plotY), z);
          var w = l;
          var e = h(d.rectPlotY, d.plotY) - l;
          Math.abs(e) < r ? (r -= e, e += r, w -= r / 2) : 0 > e && (e *= -1, w -= e);
          n ? (m = d.barX + g, d.shapeType = "path", d.shapeArgs = {
            d: a.polarArc(w + e, w, m, m + d.pointWidth)
          }) : (k.height = e, k.y = w, d.tooltipPos = b.inverted ? [c.len + c.pos - b.plotLeft - w - e / 2, f.len + f.pos - b.plotTop - k.x - k.width / 2, e] : [f.left - b.plotLeft + k.x + k.width / 2, c.pos - b.plotTop + w + e / 2, e]);
        });
      },
      directTouch: !0,
      trackerGroups: ["group", "dataLabelsGroup"],
      drawGraph: m,
      getSymbol: m,
      crispCol: function crispCol() {
        return q.crispCol.apply(this, arguments);
      },
      drawPoints: function drawPoints() {
        return q.drawPoints.apply(this, arguments);
      },
      drawTracker: function drawTracker() {
        return q.drawTracker.apply(this, arguments);
      },
      getColumnMetrics: function getColumnMetrics() {
        return q.getColumnMetrics.apply(this, arguments);
      },
      pointAttribs: function pointAttribs() {
        return q.pointAttribs.apply(this, arguments);
      },
      animate: function animate() {
        return q.animate.apply(this, arguments);
      },
      polarArc: function polarArc() {
        return q.polarArc.apply(this, arguments);
      },
      translate3dPoints: function translate3dPoints() {
        return q.translate3dPoints.apply(this, arguments);
      },
      translate3dShapes: function translate3dShapes() {
        return q.translate3dShapes.apply(this, arguments);
      }
    }, {
      setState: q.pointClass.prototype.setState
    });
    "";
  });
  B(u, "parts-more/ColumnPyramidSeries.js", [u["parts/Globals.js"], u["parts/Utilities.js"]], function (b, a) {
    var h = a.pick;
    a = b.seriesType;
    var g = b.seriesTypes.column.prototype;
    a("columnpyramid", "column", {}, {
      translate: function translate() {
        var a = this,
            b = a.chart,
            q = a.options,
            e = a.dense = 2 > a.closestPointRange * a.xAxis.transA;
        e = a.borderWidth = h(q.borderWidth, e ? 0 : 1);
        var c = a.yAxis,
            f = q.threshold,
            v = a.translatedThreshold = c.getThreshold(f),
            t = h(q.minPointLength, 5),
            p = a.getColumnMetrics(),
            x = p.width,
            z = a.barW = Math.max(x, 1 + 2 * e),
            l = a.pointXOffset = p.offset;
        b.inverted && (v -= .5);
        q.pointPadding && (z = Math.ceil(z));
        g.translate.apply(a);
        a.points.forEach(function (d) {
          var k = h(d.yBottom, v),
              r = 999 + Math.abs(k),
              w = Math.min(Math.max(-r, d.plotY), c.len + r);
          r = d.plotX + l;
          var e = z / 2,
              C = Math.min(w, k);
          k = Math.max(w, k) - C;
          d.barX = r;
          d.pointWidth = x;
          d.tooltipPos = b.inverted ? [c.len + c.pos - b.plotLeft - w, a.xAxis.len - r - e, k] : [r + e, w + c.pos - b.plotTop, k];
          w = f + (d.total || d.y);
          "percent" === q.stacking && (w = f + (0 > d.y) ? -100 : 100);
          w = c.toPixels(w, !0);
          var g = b.plotHeight - w - (b.plotHeight - v);
          var m = e * (C - w) / g;
          var p = e * (C + k - w) / g;
          g = r - m + e;
          m = r + m + e;
          var n = r + p + e;
          p = r - p + e;
          var E = C - t;
          var D = C + k;
          0 > d.y && (E = C, D = C + k + t);
          b.inverted && (n = b.plotWidth - C, g = w - (b.plotWidth - v), m = e * (w - n) / g, p = e * (w - (n - k)) / g, g = r + e + m, m = g - 2 * m, n = r - p + e, p = r + p + e, E = C, D = C + k - t, 0 > d.y && (D = C + k + t));
          d.shapeType = "path";
          d.shapeArgs = {
            x: g,
            y: E,
            width: m - g,
            height: k,
            d: ["M", g, E, "L", m, E, n, D, p, D, "Z"]
          };
        });
      }
    });
    "";
  });
  B(u, "parts-more/GaugeSeries.js", [u["parts/Globals.js"], u["parts/Utilities.js"]], function (b, a) {
    var h = a.isNumber,
        g = a.pick,
        m = a.pInt,
        n = b.merge,
        q = b.Series;
    a = b.seriesType;
    var e = b.TrackerMixin;
    a("gauge", "line", {
      dataLabels: {
        borderColor: "#cccccc",
        borderRadius: 3,
        borderWidth: 1,
        crop: !1,
        defer: !1,
        enabled: !0,
        verticalAlign: "top",
        y: 15,
        zIndex: 2
      },
      dial: {},
      pivot: {},
      tooltip: {
        headerFormat: ""
      },
      showInLegend: !1
    }, {
      angular: !0,
      directTouch: !0,
      drawGraph: b.noop,
      fixedBox: !0,
      forceDL: !0,
      noSharedTooltip: !0,
      trackerGroups: ["group", "dataLabelsGroup"],
      translate: function translate() {
        var c = this.yAxis,
            a = this.options,
            e = c.center;
        this.generatePoints();
        this.points.forEach(function (f) {
          var b = n(a.dial, f.dial),
              v = m(g(b.radius, "80%")) * e[2] / 200,
              t = m(g(b.baseLength, "70%")) * v / 100,
              l = m(g(b.rearLength, "10%")) * v / 100,
              d = b.baseWidth || 3,
              k = b.topWidth || 1,
              r = a.overshoot,
              w = c.startAngleRad + c.translate(f.y, null, null, null, !0);
          h(r) ? (r = r / 180 * Math.PI, w = Math.max(c.startAngleRad - r, Math.min(c.endAngleRad + r, w))) : !1 === a.wrap && (w = Math.max(c.startAngleRad, Math.min(c.endAngleRad, w)));
          w = 180 * w / Math.PI;
          f.shapeType = "path";
          f.shapeArgs = {
            d: b.path || ["M", -l, -d / 2, "L", t, -d / 2, v, -k / 2, v, k / 2, t, d / 2, -l, d / 2, "z"],
            translateX: e[0],
            translateY: e[1],
            rotation: w
          };
          f.plotX = e[0];
          f.plotY = e[1];
        });
      },
      drawPoints: function drawPoints() {
        var c = this,
            a = c.chart,
            e = c.yAxis.center,
            b = c.pivot,
            m = c.options,
            h = m.pivot,
            q = a.renderer;
        c.points.forEach(function (e) {
          var d = e.graphic,
              k = e.shapeArgs,
              r = k.d,
              w = n(m.dial, e.dial);
          d ? (d.animate(k), k.d = r) : e.graphic = q[e.shapeType](k).attr({
            rotation: k.rotation,
            zIndex: 1
          }).addClass("highcharts-dial").add(c.group);
          if (!a.styledMode) e.graphic[d ? "animate" : "attr"]({
            stroke: w.borderColor || "none",
            "stroke-width": w.borderWidth || 0,
            fill: w.backgroundColor || "#000000"
          });
        });
        b ? b.animate({
          translateX: e[0],
          translateY: e[1]
        }) : (c.pivot = q.circle(0, 0, g(h.radius, 5)).attr({
          zIndex: 2
        }).addClass("highcharts-pivot").translate(e[0], e[1]).add(c.group), a.styledMode || c.pivot.attr({
          "stroke-width": h.borderWidth || 0,
          stroke: h.borderColor || "#cccccc",
          fill: h.backgroundColor || "#000000"
        }));
      },
      animate: function animate(c) {
        var a = this;
        c || (a.points.forEach(function (c) {
          var e = c.graphic;
          e && (e.attr({
            rotation: 180 * a.yAxis.startAngleRad / Math.PI
          }), e.animate({
            rotation: c.shapeArgs.rotation
          }, a.options.animation));
        }), a.animate = null);
      },
      render: function render() {
        this.group = this.plotGroup("group", "series", this.visible ? "visible" : "hidden", this.options.zIndex, this.chart.seriesGroup);
        q.prototype.render.call(this);
        this.group.clip(this.chart.clipRect);
      },
      setData: function setData(c, a) {
        q.prototype.setData.call(this, c, !1);
        this.processData();
        this.generatePoints();
        g(a, !0) && this.chart.redraw();
      },
      hasData: function hasData() {
        return !!this.points.length;
      },
      drawTracker: e && e.drawTrackerPoint
    }, {
      setState: function setState(c) {
        this.state = c;
      }
    });
    "";
  });
  B(u, "parts-more/BoxPlotSeries.js", [u["parts/Globals.js"], u["parts/Utilities.js"]], function (b, a) {
    var h = a.pick;
    a = b.noop;
    var g = b.seriesType,
        m = b.seriesTypes;
    g("boxplot", "column", {
      threshold: null,
      tooltip: {
        pointFormat: "<span style=\"color:{point.color}\">\u25CF</span> <b> {series.name}</b><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>"
      },
      whiskerLength: "50%",
      fillColor: "#ffffff",
      lineWidth: 1,
      medianWidth: 2,
      whiskerWidth: 2
    }, {
      pointArrayMap: ["low", "q1", "median", "q3", "high"],
      toYData: function toYData(a) {
        return [a.low, a.q1, a.median, a.q3, a.high];
      },
      pointValKey: "high",
      pointAttribs: function pointAttribs() {
        return {};
      },
      drawDataLabels: a,
      translate: function translate() {
        var a = this.yAxis,
            b = this.pointArrayMap;
        m.column.prototype.translate.apply(this);
        this.points.forEach(function (e) {
          b.forEach(function (c) {
            null !== e[c] && (e[c + "Plot"] = a.translate(e[c], 0, 1, 0, 1));
          });
        });
      },
      drawPoints: function drawPoints() {
        var a = this,
            b = a.options,
            e = a.chart,
            c = e.renderer,
            f,
            g,
            m,
            p,
            x,
            z,
            l = 0,
            d,
            k,
            r,
            w,
            F = !1 !== a.doQuartiles,
            C,
            H = a.options.whiskerLength;
        a.points.forEach(function (A) {
          var v = A.graphic,
              t = v ? "animate" : "attr",
              n = A.shapeArgs,
              q = {},
              G = {},
              y = {},
              I = {},
              u = A.color || a.color;
          void 0 !== A.plotY && (d = n.width, k = Math.floor(n.x), r = k + d, w = Math.round(d / 2), f = Math.floor(F ? A.q1Plot : A.lowPlot), g = Math.floor(F ? A.q3Plot : A.lowPlot), m = Math.floor(A.highPlot), p = Math.floor(A.lowPlot), v || (A.graphic = v = c.g("point").add(a.group), A.stem = c.path().addClass("highcharts-boxplot-stem").add(v), H && (A.whiskers = c.path().addClass("highcharts-boxplot-whisker").add(v)), F && (A.box = c.path(void 0).addClass("highcharts-boxplot-box").add(v)), A.medianShape = c.path(void 0).addClass("highcharts-boxplot-median").add(v)), e.styledMode || (G.stroke = A.stemColor || b.stemColor || u, G["stroke-width"] = h(A.stemWidth, b.stemWidth, b.lineWidth), G.dashstyle = A.stemDashStyle || b.stemDashStyle, A.stem.attr(G), H && (y.stroke = A.whiskerColor || b.whiskerColor || u, y["stroke-width"] = h(A.whiskerWidth, b.whiskerWidth, b.lineWidth), A.whiskers.attr(y)), F && (q.fill = A.fillColor || b.fillColor || u, q.stroke = b.lineColor || u, q["stroke-width"] = b.lineWidth || 0, A.box.attr(q)), I.stroke = A.medianColor || b.medianColor || u, I["stroke-width"] = h(A.medianWidth, b.medianWidth, b.lineWidth), A.medianShape.attr(I)), z = A.stem.strokeWidth() % 2 / 2, l = k + w + z, A.stem[t]({
            d: ["M", l, g, "L", l, m, "M", l, f, "L", l, p]
          }), F && (z = A.box.strokeWidth() % 2 / 2, f = Math.floor(f) + z, g = Math.floor(g) + z, k += z, r += z, A.box[t]({
            d: ["M", k, g, "L", k, f, "L", r, f, "L", r, g, "L", k, g, "z"]
          })), H && (z = A.whiskers.strokeWidth() % 2 / 2, m += z, p += z, C = /%$/.test(H) ? w * parseFloat(H) / 100 : H / 2, A.whiskers[t]({
            d: ["M", l - C, m, "L", l + C, m, "M", l - C, p, "L", l + C, p]
          })), x = Math.round(A.medianPlot), z = A.medianShape.strokeWidth() % 2 / 2, x += z, A.medianShape[t]({
            d: ["M", k, x, "L", r, x]
          }));
        });
      },
      setStackedPoints: a
    });
    "";
  });
  B(u, "parts-more/ErrorBarSeries.js", [u["parts/Globals.js"]], function (b) {
    var a = b.noop,
        h = b.seriesType,
        g = b.seriesTypes;
    h("errorbar", "boxplot", {
      color: "#000000",
      grouping: !1,
      linkedTo: ":previous",
      tooltip: {
        pointFormat: "<span style=\"color:{point.color}\">\u25CF</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>"
      },
      whiskerWidth: null
    }, {
      type: "errorbar",
      pointArrayMap: ["low", "high"],
      toYData: function toYData(a) {
        return [a.low, a.high];
      },
      pointValKey: "high",
      doQuartiles: !1,
      drawDataLabels: g.arearange ? function () {
        var a = this.pointValKey;
        g.arearange.prototype.drawDataLabels.call(this);
        this.data.forEach(function (b) {
          b.y = b[a];
        });
      } : a,
      getColumnMetrics: function getColumnMetrics() {
        return this.linkedParent && this.linkedParent.columnMetrics || g.column.prototype.getColumnMetrics.call(this);
      }
    });
    "";
  });
  B(u, "parts-more/WaterfallSeries.js", [u["parts/Globals.js"], u["parts/Utilities.js"]], function (b, a) {
    var h = a.arrayMax,
        g = a.arrayMin,
        m = a.isNumber,
        n = a.objectEach,
        q = a.pick,
        e = b.correctFloat;
    a = b.addEvent;
    var c = b.Axis,
        f = b.Chart,
        v = b.Point,
        t = b.Series,
        p = b.StackItem,
        x = b.seriesType,
        z = b.seriesTypes;
    a(c, "afterInit", function () {
      this.isXAxis || (this.waterfallStacks = {
        changed: !1
      });
    });
    a(f, "beforeRedraw", function () {
      for (var a = this.axes, d = this.series, k = d.length; k--;) {
        d[k].options.stacking && (a.forEach(function (d) {
          d.isXAxis || (d.waterfallStacks.changed = !0);
        }), k = 0);
      }
    });
    a(c, "afterRender", function () {
      var a = this.options.stackLabels;
      a && a.enabled && this.waterfallStacks && this.renderWaterfallStackTotals();
    });

    c.prototype.renderWaterfallStackTotals = function () {
      var a = this.waterfallStacks,
          d = this.stackTotalGroup,
          k = new p(this, this.options.stackLabels, !1, 0, void 0);
      this.dummyStackItem = k;
      n(a, function (a) {
        n(a, function (a) {
          k.total = a.stackTotal;
          a.label && (k.label = a.label);
          p.prototype.render.call(k, d);
          a.label = k.label;
          delete k.label;
        });
      });
      k.total = null;
    };

    x("waterfall", "column", {
      dataLabels: {
        inside: !0
      },
      lineWidth: 1,
      lineColor: "#333333",
      dashStyle: "Dot",
      borderColor: "#333333",
      states: {
        hover: {
          lineWidthPlus: 0
        }
      }
    }, {
      pointValKey: "y",
      showLine: !0,
      generatePoints: function generatePoints() {
        var a;
        z.column.prototype.generatePoints.apply(this);
        var d = 0;

        for (a = this.points.length; d < a; d++) {
          var k = this.points[d];
          var c = this.processedYData[d];
          if (k.isIntermediateSum || k.isSum) k.y = e(c);
        }
      },
      translate: function translate() {
        var a = this.options,
            d = this.yAxis,
            k,
            c = q(a.minPointLength, 5),
            e = c / 2,
            f = a.threshold,
            b = a.stacking,
            g = d.waterfallStacks[this.stackKey];
        z.column.prototype.translate.apply(this);
        var m = k = f;
        var h = this.points;
        var v = 0;

        for (a = h.length; v < a; v++) {
          var p = h[v];
          var t = this.processedYData[v];
          var n = p.shapeArgs;
          var y = [0, t];
          var x = p.y;

          if (b) {
            if (g) {
              y = g[v];

              if ("overlap" === b) {
                var u = y.stackState[y.stateIndex--];
                u = 0 <= x ? u : u - x;
                Object.hasOwnProperty.call(y, "absolutePos") && delete y.absolutePos;
                Object.hasOwnProperty.call(y, "absoluteNeg") && delete y.absoluteNeg;
              } else 0 <= x ? (u = y.threshold + y.posTotal, y.posTotal -= x) : (u = y.threshold + y.negTotal, y.negTotal -= x, u -= x), !y.posTotal && Object.hasOwnProperty.call(y, "absolutePos") && (y.posTotal = y.absolutePos, delete y.absolutePos), !y.negTotal && Object.hasOwnProperty.call(y, "absoluteNeg") && (y.negTotal = y.absoluteNeg, delete y.absoluteNeg);

              p.isSum || (y.connectorThreshold = y.threshold + y.stackTotal);
              d.reversed ? (t = 0 <= x ? u - x : u + x, x = u) : (t = u, x = u - x);
              p.below = t <= q(f, 0);
              n.y = d.translate(t, 0, 1, 0, 1);
              n.height = Math.abs(n.y - d.translate(x, 0, 1, 0, 1));
            }

            if (x = d.dummyStackItem) x.x = v, x.label = g[v].label, x.setOffset(this.pointXOffset || 0, this.barW || 0, this.stackedYNeg[v], this.stackedYPos[v]);
          } else u = Math.max(m, m + x) + y[0], n.y = d.translate(u, 0, 1, 0, 1), p.isSum ? (n.y = d.translate(y[1], 0, 1, 0, 1), n.height = Math.min(d.translate(y[0], 0, 1, 0, 1), d.len) - n.y) : p.isIntermediateSum ? (0 <= x ? (t = y[1] + k, x = k) : (t = k, x = y[1] + k), d.reversed && (t ^= x, x ^= t, t ^= x), n.y = d.translate(t, 0, 1, 0, 1), n.height = Math.abs(n.y - Math.min(d.translate(x, 0, 1, 0, 1), d.len)), k += y[1]) : (n.height = 0 < t ? d.translate(m, 0, 1, 0, 1) - n.y : d.translate(m, 0, 1, 0, 1) - d.translate(m - t, 0, 1, 0, 1), m += t, p.below = m < q(f, 0)), 0 > n.height && (n.y += n.height, n.height *= -1);

          p.plotY = n.y = Math.round(n.y) - this.borderWidth % 2 / 2;
          n.height = Math.max(Math.round(n.height), .001);
          p.yBottom = n.y + n.height;
          n.height <= c && !p.isNull ? (n.height = c, n.y -= e, p.plotY = n.y, p.minPointLengthOffset = 0 > p.y ? -e : e) : (p.isNull && (n.width = 0), p.minPointLengthOffset = 0);
          n = p.plotY + (p.negative ? n.height : 0);
          this.chart.inverted ? p.tooltipPos[0] = d.len - n : p.tooltipPos[1] = n;
        }
      },
      processData: function processData(a) {
        var d = this.options,
            k = this.yData,
            c = d.data,
            w = k.length,
            f = d.threshold || 0,
            l,
            b,
            g,
            m,
            h;

        for (h = b = l = g = m = 0; h < w; h++) {
          var p = k[h];
          var v = c && c[h] ? c[h] : {};
          "sum" === p || v.isSum ? k[h] = e(b) : "intermediateSum" === p || v.isIntermediateSum ? (k[h] = e(l), l = 0) : (b += p, l += p);
          g = Math.min(b, g);
          m = Math.max(b, m);
        }

        t.prototype.processData.call(this, a);
        d.stacking || (this.dataMin = g + f, this.dataMax = m);
      },
      toYData: function toYData(a) {
        return a.isSum ? "sum" : a.isIntermediateSum ? "intermediateSum" : a.y;
      },
      updateParallelArrays: function updateParallelArrays(a, d) {
        t.prototype.updateParallelArrays.call(this, a, d);
        if ("sum" === this.yData[0] || "intermediateSum" === this.yData[0]) this.yData[0] = null;
      },
      pointAttribs: function pointAttribs(a, d) {
        var k = this.options.upColor;
        k && !a.options.color && (a.color = 0 < a.y ? k : null);
        a = z.column.prototype.pointAttribs.call(this, a, d);
        delete a.dashstyle;
        return a;
      },
      getGraphPath: function getGraphPath() {
        return ["M", 0, 0];
      },
      getCrispPath: function getCrispPath() {
        var a = this.data,
            d = this.yAxis,
            k = a.length,
            c = Math.round(this.graph.strokeWidth()) % 2 / 2,
            e = Math.round(this.borderWidth) % 2 / 2,
            f = this.xAxis.reversed,
            b = this.yAxis.reversed,
            g = this.options.stacking,
            m = [],
            h;

        for (h = 1; h < k; h++) {
          var p = a[h].shapeArgs;
          var v = a[h - 1];
          var n = a[h - 1].shapeArgs;
          var t = d.waterfallStacks[this.stackKey];
          var y = 0 < v.y ? -n.height : 0;

          if (t) {
            t = t[h - 1];
            g ? (t = t.connectorThreshold, y = Math.round(d.translate(t, 0, 1, 0, 1) + (b ? y : 0)) - c) : y = n.y + v.minPointLengthOffset + e - c;
            var q = ["M", n.x + (f ? 0 : n.width), y, "L", p.x + (f ? p.width : 0), y];
          }

          if (!g && 0 > v.y && !b || 0 < v.y && b) q[2] += n.height, q[5] += n.height;
          m = m.concat(q);
        }

        return m;
      },
      drawGraph: function drawGraph() {
        t.prototype.drawGraph.call(this);
        this.graph.attr({
          d: this.getCrispPath()
        });
      },
      setStackedPoints: function setStackedPoints() {
        function a(d, a, k, c) {
          if (B) for (k; k < B; k++) {
            q.stackState[k] += c;
          } else q.stackState[0] = d, B = q.stackState.length;
          q.stackState.push(q.stackState[B - 1] + a);
        }

        var d = this.options,
            k = this.yAxis.waterfallStacks,
            c = d.threshold,
            e = c || 0,
            f = e,
            b = this.stackKey,
            g = this.xData,
            m = g.length,
            h,
            p;
        this.yAxis.usePercentage = !1;
        var v = h = p = e;

        if (this.visible || !this.chart.options.chart.ignoreHiddenSeries) {
          k[b] || (k[b] = {});
          b = k[b];

          for (var n = 0; n < m; n++) {
            var t = g[n];
            if (!b[t] || k.changed) b[t] = {
              negTotal: 0,
              posTotal: 0,
              stackTotal: 0,
              threshold: 0,
              stateIndex: 0,
              stackState: [],
              label: k.changed && b[t] ? b[t].label : void 0
            };
            var q = b[t];
            var x = this.yData[n];
            0 <= x ? q.posTotal += x : q.negTotal += x;
            var z = d.data[n];
            t = q.absolutePos = q.posTotal;
            var u = q.absoluteNeg = q.negTotal;
            q.stackTotal = t + u;
            var B = q.stackState.length;
            z && z.isIntermediateSum ? (a(p, h, 0, p), p = h, h = c, e ^= f, f ^= e, e ^= f) : z && z.isSum ? (a(c, v, B), e = c) : (a(e, x, 0, v), z && (v += x, h += x));
            q.stateIndex++;
            q.threshold = e;
            e += q.stackTotal;
          }

          k.changed = !1;
        }
      },
      getExtremes: function getExtremes() {
        var a = this.options.stacking;

        if (a) {
          var d = this.yAxis;
          d = d.waterfallStacks;
          var k = this.stackedYNeg = [];
          var c = this.stackedYPos = [];
          "overlap" === a ? n(d[this.stackKey], function (d) {
            k.push(g(d.stackState));
            c.push(h(d.stackState));
          }) : n(d[this.stackKey], function (d) {
            k.push(d.negTotal + d.threshold);
            c.push(d.posTotal + d.threshold);
          });
          this.dataMin = g(k);
          this.dataMax = h(c);
        }
      }
    }, {
      getClassName: function getClassName() {
        var a = v.prototype.getClassName.call(this);
        this.isSum ? a += " highcharts-sum" : this.isIntermediateSum && (a += " highcharts-intermediate-sum");
        return a;
      },
      isValid: function isValid() {
        return m(this.y) || this.isSum || this.isIntermediateSum;
      }
    });
    "";
  });
  B(u, "parts-more/PolygonSeries.js", [u["parts/Globals.js"]], function (b) {
    var a = b.Series,
        h = b.seriesType,
        g = b.seriesTypes;
    h("polygon", "scatter", {
      marker: {
        enabled: !1,
        states: {
          hover: {
            enabled: !1
          }
        }
      },
      stickyTracking: !1,
      tooltip: {
        followPointer: !0,
        pointFormat: ""
      },
      trackByArea: !0
    }, {
      type: "polygon",
      getGraphPath: function getGraphPath() {
        for (var b = a.prototype.getGraphPath.call(this), g = b.length + 1; g--;) {
          (g === b.length || "M" === b[g]) && 0 < g && b.splice(g, 0, "z");
        }

        return this.areaPath = b;
      },
      drawGraph: function drawGraph() {
        this.options.fillColor = this.color;
        g.area.prototype.drawGraph.call(this);
      },
      drawLegendSymbol: b.LegendSymbolMixin.drawRectangle,
      drawTracker: a.prototype.drawTracker,
      setStackedPoints: b.noop
    });
    "";
  });
  B(u, "parts-more/BubbleLegend.js", [u["parts/Globals.js"], u["parts/Utilities.js"]], function (b, a) {
    var h = a.arrayMax,
        g = a.arrayMin,
        m = a.isNumber,
        n = a.objectEach,
        q = a.pick;
    a = b.Series;
    var e = b.Legend,
        c = b.Chart,
        f = b.addEvent,
        v = b.wrap,
        t = b.color,
        p = b.numberFormat,
        x = b.merge,
        z = b.noop,
        l = b.stableSort,
        d = b.setOptions;
    d({
      legend: {
        bubbleLegend: {
          borderColor: void 0,
          borderWidth: 2,
          className: void 0,
          color: void 0,
          connectorClassName: void 0,
          connectorColor: void 0,
          connectorDistance: 60,
          connectorWidth: 1,
          enabled: !1,
          labels: {
            className: void 0,
            allowOverlap: !1,
            format: "",
            formatter: void 0,
            align: "right",
            style: {
              fontSize: 10,
              color: void 0
            },
            x: 0,
            y: 0
          },
          maxSize: 60,
          minSize: 10,
          legendIndex: 0,
          ranges: {
            value: void 0,
            borderColor: void 0,
            color: void 0,
            connectorColor: void 0
          },
          sizeBy: "area",
          sizeByAbsoluteValue: !1,
          zIndex: 1,
          zThreshold: 0
        }
      }
    });

    b.BubbleLegend = function (d, a) {
      this.init(d, a);
    };

    b.BubbleLegend.prototype = {
      init: function init(d, a) {
        this.options = d;
        this.visible = !0;
        this.chart = a.chart;
        this.legend = a;
      },
      setState: z,
      addToLegend: function addToLegend(d) {
        d.splice(this.options.legendIndex, 0, this);
      },
      drawLegendSymbol: function drawLegendSymbol(d) {
        var a = this.chart,
            c = this.options,
            k = q(d.options.itemDistance, 20),
            e = c.ranges;
        var f = c.connectorDistance;
        this.fontMetrics = a.renderer.fontMetrics(c.labels.style.fontSize.toString() + "px");
        e && e.length && m(e[0].value) ? (l(e, function (d, a) {
          return a.value - d.value;
        }), this.ranges = e, this.setOptions(), this.render(), a = this.getMaxLabelSize(), e = this.ranges[0].radius, d = 2 * e, f = f - e + a.width, f = 0 < f ? f : 0, this.maxLabel = a, this.movementX = "left" === c.labels.align ? f : 0, this.legendItemWidth = d + f + k, this.legendItemHeight = d + this.fontMetrics.h / 2) : d.options.bubbleLegend.autoRanges = !0;
      },
      setOptions: function setOptions() {
        var d = this.ranges,
            a = this.options,
            c = this.chart.series[a.seriesIndex],
            e = this.legend.baseline,
            f = {
          "z-index": a.zIndex,
          "stroke-width": a.borderWidth
        },
            b = {
          "z-index": a.zIndex,
          "stroke-width": a.connectorWidth
        },
            g = this.getLabelStyles(),
            l = c.options.marker.fillOpacity,
            h = this.chart.styledMode;
        d.forEach(function (k, r) {
          h || (f.stroke = q(k.borderColor, a.borderColor, c.color), f.fill = q(k.color, a.color, 1 !== l ? t(c.color).setOpacity(l).get("rgba") : c.color), b.stroke = q(k.connectorColor, a.connectorColor, c.color));
          d[r].radius = this.getRangeRadius(k.value);
          d[r] = x(d[r], {
            center: d[0].radius - d[r].radius + e
          });
          h || x(!0, d[r], {
            bubbleStyle: x(!1, f),
            connectorStyle: x(!1, b),
            labelStyle: g
          });
        }, this);
      },
      getLabelStyles: function getLabelStyles() {
        var d = this.options,
            a = {},
            c = "left" === d.labels.align,
            e = this.legend.options.rtl;
        n(d.labels.style, function (d, c) {
          "color" !== c && "fontSize" !== c && "z-index" !== c && (a[c] = d);
        });
        return x(!1, a, {
          "font-size": d.labels.style.fontSize,
          fill: q(d.labels.style.color, "#000000"),
          "z-index": d.zIndex,
          align: e || c ? "right" : "left"
        });
      },
      getRangeRadius: function getRangeRadius(d) {
        var a = this.options;
        return this.chart.series[this.options.seriesIndex].getRadius.call(this, a.ranges[a.ranges.length - 1].value, a.ranges[0].value, a.minSize, a.maxSize, d);
      },
      render: function render() {
        var d = this.chart.renderer,
            a = this.options.zThreshold;
        this.symbols || (this.symbols = {
          connectors: [],
          bubbleItems: [],
          labels: []
        });
        this.legendSymbol = d.g("bubble-legend");
        this.legendItem = d.g("bubble-legend-item");
        this.legendSymbol.translateX = 0;
        this.legendSymbol.translateY = 0;
        this.ranges.forEach(function (d) {
          d.value >= a && this.renderRange(d);
        }, this);
        this.legendSymbol.add(this.legendItem);
        this.legendItem.add(this.legendGroup);
        this.hideOverlappingLabels();
      },
      renderRange: function renderRange(d) {
        var a = this.options,
            c = a.labels,
            k = this.chart.renderer,
            e = this.symbols,
            f = e.labels,
            b = d.center,
            g = Math.abs(d.radius),
            l = a.connectorDistance,
            h = c.align,
            m = c.style.fontSize;
        l = this.legend.options.rtl || "left" === h ? -l : l;
        c = a.connectorWidth;
        var p = this.ranges[0].radius,
            v = b - g - a.borderWidth / 2 + c / 2;
        m = m / 2 - (this.fontMetrics.h - m) / 2;
        var t = k.styledMode;
        "center" === h && (l = 0, a.connectorDistance = 0, d.labelStyle.align = "center");
        h = v + a.labels.y;
        var n = p + l + a.labels.x;
        e.bubbleItems.push(k.circle(p, b + ((v % 1 ? 1 : .5) - (c % 2 ? 0 : .5)), g).attr(t ? {} : d.bubbleStyle).addClass((t ? "highcharts-color-" + this.options.seriesIndex + " " : "") + "highcharts-bubble-legend-symbol " + (a.className || "")).add(this.legendSymbol));
        e.connectors.push(k.path(k.crispLine(["M", p, v, "L", p + l, v], a.connectorWidth)).attr(t ? {} : d.connectorStyle).addClass((t ? "highcharts-color-" + this.options.seriesIndex + " " : "") + "highcharts-bubble-legend-connectors " + (a.connectorClassName || "")).add(this.legendSymbol));
        d = k.text(this.formatLabel(d), n, h + m).attr(t ? {} : d.labelStyle).addClass("highcharts-bubble-legend-labels " + (a.labels.className || "")).add(this.legendSymbol);
        f.push(d);
        d.placed = !0;
        d.alignAttr = {
          x: n,
          y: h + m
        };
      },
      getMaxLabelSize: function getMaxLabelSize() {
        var d, a;
        this.symbols.labels.forEach(function (c) {
          a = c.getBBox(!0);
          d = d ? a.width > d.width ? a : d : a;
        });
        return d || {};
      },
      formatLabel: function formatLabel(d) {
        var a = this.options,
            c = a.labels.formatter;
        return (a = a.labels.format) ? b.format(a, d) : c ? c.call(d) : p(d.value, 1);
      },
      hideOverlappingLabels: function hideOverlappingLabels() {
        var d = this.chart,
            a = this.symbols;
        !this.options.labels.allowOverlap && a && (d.hideOverlappingLabels(a.labels), a.labels.forEach(function (d, c) {
          d.newOpacity ? d.newOpacity !== d.oldOpacity && a.connectors[c].show() : a.connectors[c].hide();
        }));
      },
      getRanges: function getRanges() {
        var d = this.legend.bubbleLegend,
            a = d.options.ranges,
            c,
            e = Number.MAX_VALUE,
            f = -Number.MAX_VALUE;
        d.chart.series.forEach(function (d) {
          d.isBubble && !d.ignoreSeries && (c = d.zData.filter(m), c.length && (e = q(d.options.zMin, Math.min(e, Math.max(g(c), !1 === d.options.displayNegative ? d.options.zThreshold : -Number.MAX_VALUE))), f = q(d.options.zMax, Math.max(f, h(c)))));
        });
        var b = e === f ? [{
          value: f
        }] : [{
          value: e
        }, {
          value: (e + f) / 2
        }, {
          value: f,
          autoRanges: !0
        }];
        a.length && a[0].radius && b.reverse();
        b.forEach(function (d, c) {
          a && a[c] && (b[c] = x(!1, a[c], d));
        });
        return b;
      },
      predictBubbleSizes: function predictBubbleSizes() {
        var d = this.chart,
            a = this.fontMetrics,
            c = d.legend.options,
            e = "horizontal" === c.layout,
            f = e ? d.legend.lastLineHeight : 0,
            b = d.plotSizeX,
            g = d.plotSizeY,
            l = d.series[this.options.seriesIndex];
        d = Math.ceil(l.minPxSize);
        var h = Math.ceil(l.maxPxSize);
        l = l.options.maxSize;
        var m = Math.min(g, b);
        if (c.floating || !/%$/.test(l)) a = h;else if (l = parseFloat(l), a = (m + f - a.h / 2) * l / 100 / (l / 100 + 1), e && g - a >= b || !e && b - a >= g) a = h;
        return [d, Math.ceil(a)];
      },
      updateRanges: function updateRanges(d, a) {
        var c = this.legend.options.bubbleLegend;
        c.minSize = d;
        c.maxSize = a;
        c.ranges = this.getRanges();
      },
      correctSizes: function correctSizes() {
        var d = this.legend,
            a = this.chart.series[this.options.seriesIndex];
        1 < Math.abs(Math.ceil(a.maxPxSize) - this.options.maxSize) && (this.updateRanges(this.options.minSize, a.maxPxSize), d.render());
      }
    };
    f(b.Legend, "afterGetAllItems", function (d) {
      var a = this.bubbleLegend,
          c = this.options,
          e = c.bubbleLegend,
          k = this.chart.getVisibleBubbleSeriesIndex();
      a && a.ranges && a.ranges.length && (e.ranges.length && (e.autoRanges = !!e.ranges[0].autoRanges), this.destroyItem(a));
      0 <= k && c.enabled && e.enabled && (e.seriesIndex = k, this.bubbleLegend = new b.BubbleLegend(e, this), this.bubbleLegend.addToLegend(d.allItems));
    });

    c.prototype.getVisibleBubbleSeriesIndex = function () {
      for (var d = this.series, a = 0; a < d.length;) {
        if (d[a] && d[a].isBubble && d[a].visible && d[a].zData.length) return a;
        a++;
      }

      return -1;
    };

    e.prototype.getLinesHeights = function () {
      var d = this.allItems,
          a = [],
          c = d.length,
          e,
          f = 0;

      for (e = 0; e < c; e++) {
        if (d[e].legendItemHeight && (d[e].itemHeight = d[e].legendItemHeight), d[e] === d[c - 1] || d[e + 1] && d[e]._legendItemPos[1] !== d[e + 1]._legendItemPos[1]) {
          a.push({
            height: 0
          });
          var b = a[a.length - 1];

          for (f; f <= e; f++) {
            d[f].itemHeight > b.height && (b.height = d[f].itemHeight);
          }

          b.step = e;
        }
      }

      return a;
    };

    e.prototype.retranslateItems = function (d) {
      var a,
          c,
          e,
          k = this.options.rtl,
          f = 0;
      this.allItems.forEach(function (b, r) {
        a = b.legendGroup.translateX;
        c = b._legendItemPos[1];
        if ((e = b.movementX) || k && b.ranges) e = k ? a - b.options.maxSize / 2 : a + e, b.legendGroup.attr({
          translateX: e
        });
        r > d[f].step && f++;
        b.legendGroup.attr({
          translateY: Math.round(c + d[f].height / 2)
        });
        b._legendItemPos[1] = c + d[f].height / 2;
      });
    };

    f(a, "legendItemClick", function () {
      var d = this.chart,
          a = this.visible,
          c = this.chart.legend;
      c && c.bubbleLegend && (this.visible = !a, this.ignoreSeries = a, d = 0 <= d.getVisibleBubbleSeriesIndex(), c.bubbleLegend.visible !== d && (c.update({
        bubbleLegend: {
          enabled: d
        }
      }), c.bubbleLegend.visible = d), this.visible = a);
    });
    v(c.prototype, "drawChartBox", function (d, a, c) {
      var e = this.legend,
          k = 0 <= this.getVisibleBubbleSeriesIndex();

      if (e && e.options.enabled && e.bubbleLegend && e.options.bubbleLegend.autoRanges && k) {
        var f = e.bubbleLegend.options;
        k = e.bubbleLegend.predictBubbleSizes();
        e.bubbleLegend.updateRanges(k[0], k[1]);
        f.placed || (e.group.placed = !1, e.allItems.forEach(function (d) {
          d.legendGroup.translateY = null;
        }));
        e.render();
        this.getMargins();
        this.axes.forEach(function (d) {
          d.visible && d.render();
          f.placed || (d.setScale(), d.updateNames(), n(d.ticks, function (d) {
            d.isNew = !0;
            d.isNewLabel = !0;
          }));
        });
        f.placed = !0;
        this.getMargins();
        d.call(this, a, c);
        e.bubbleLegend.correctSizes();
        e.retranslateItems(e.getLinesHeights());
      } else d.call(this, a, c), e && e.options.enabled && e.bubbleLegend && (e.render(), e.retranslateItems(e.getLinesHeights()));
    });
  });
  B(u, "parts-more/BubbleSeries.js", [u["parts/Globals.js"], u["parts/Utilities.js"]], function (b, a) {
    var h = a.arrayMax,
        g = a.arrayMin,
        m = a.extend,
        n = a.isNumber,
        q = a.pick,
        e = a.pInt;
    a = b.Axis;
    var c = b.color,
        f = b.noop,
        v = b.Point,
        t = b.Series,
        p = b.seriesType,
        x = b.seriesTypes;
    p("bubble", "scatter", {
      dataLabels: {
        formatter: function formatter() {
          return this.point.z;
        },
        inside: !0,
        verticalAlign: "middle"
      },
      animationLimit: 250,
      marker: {
        lineColor: null,
        lineWidth: 1,
        fillOpacity: .5,
        radius: null,
        states: {
          hover: {
            radiusPlus: 0
          }
        },
        symbol: "circle"
      },
      minSize: 8,
      maxSize: "20%",
      softThreshold: !1,
      states: {
        hover: {
          halo: {
            size: 5
          }
        }
      },
      tooltip: {
        pointFormat: "({point.x}, {point.y}), Size: {point.z}"
      },
      turboThreshold: 0,
      zThreshold: 0,
      zoneAxis: "z"
    }, {
      pointArrayMap: ["y", "z"],
      parallelArrays: ["x", "y", "z"],
      trackerGroups: ["group", "dataLabelsGroup"],
      specialGroup: "group",
      bubblePadding: !0,
      zoneAxis: "z",
      directTouch: !0,
      isBubble: !0,
      pointAttribs: function pointAttribs(a, e) {
        var d = this.options.marker.fillOpacity;
        a = t.prototype.pointAttribs.call(this, a, e);
        1 !== d && (a.fill = c(a.fill).setOpacity(d).get("rgba"));
        return a;
      },
      getRadii: function getRadii(a, c, d) {
        var e = this.zData,
            f = this.yData,
            b = d.minPxSize,
            g = d.maxPxSize,
            l = [];
        var h = 0;

        for (d = e.length; h < d; h++) {
          var m = e[h];
          l.push(this.getRadius(a, c, b, g, m, f[h]));
        }

        this.radii = l;
      },
      getRadius: function getRadius(a, c, d, e, f, b) {
        var k = this.options,
            r = "width" !== k.sizeBy,
            g = k.zThreshold,
            l = c - a,
            h = .5;
        if (null === b || null === f) return null;

        if (n(f)) {
          k.sizeByAbsoluteValue && (f = Math.abs(f - g), l = Math.max(c - g, Math.abs(a - g)), a = 0);
          if (f < a) return d / 2 - 1;
          0 < l && (h = (f - a) / l);
        }

        r && 0 <= h && (h = Math.sqrt(h));
        return Math.ceil(d + h * (e - d)) / 2;
      },
      animate: function animate(a) {
        !a && this.points.length < this.options.animationLimit && (this.points.forEach(function (a) {
          var d = a.graphic;

          if (d && d.width) {
            var c = {
              x: d.x,
              y: d.y,
              width: d.width,
              height: d.height
            };
            d.attr({
              x: a.plotX,
              y: a.plotY,
              width: 1,
              height: 1
            });
            d.animate(c, this.options.animation);
          }
        }, this), this.animate = null);
      },
      hasData: function hasData() {
        return !!this.processedXData.length;
      },
      translate: function translate() {
        var a,
            c = this.data,
            d = this.radii;
        x.scatter.prototype.translate.call(this);

        for (a = c.length; a--;) {
          var e = c[a];
          var f = d ? d[a] : 0;
          n(f) && f >= this.minPxSize / 2 ? (e.marker = m(e.marker, {
            radius: f,
            width: 2 * f,
            height: 2 * f
          }), e.dlBox = {
            x: e.plotX - f,
            y: e.plotY - f,
            width: 2 * f,
            height: 2 * f
          }) : e.shapeArgs = e.plotY = e.dlBox = void 0;
        }
      },
      alignDataLabel: x.column.prototype.alignDataLabel,
      buildKDTree: f,
      applyZones: f
    }, {
      haloPath: function haloPath(a) {
        return v.prototype.haloPath.call(this, 0 === a ? 0 : (this.marker ? this.marker.radius || 0 : 0) + a);
      },
      ttBelow: !1
    });

    a.prototype.beforePadding = function () {
      var a = this,
          c = this.len,
          d = this.chart,
          f = 0,
          b = c,
          m = this.isXAxis,
          p = m ? "xData" : "yData",
          t = this.min,
          v = {},
          x = Math.min(d.plotWidth, d.plotHeight),
          u = Number.MAX_VALUE,
          B = -Number.MAX_VALUE,
          E = this.max - t,
          D = c / E,
          G = [];
      this.series.forEach(function (c) {
        var f = c.options;
        !c.bubblePadding || !c.visible && d.options.chart.ignoreHiddenSeries || (a.allowZoomOutside = !0, G.push(c), m && (["minSize", "maxSize"].forEach(function (d) {
          var a = f[d],
              c = /%$/.test(a);
          a = e(a);
          v[d] = c ? x * a / 100 : a;
        }), c.minPxSize = v.minSize, c.maxPxSize = Math.max(v.maxSize, v.minSize), c = c.zData.filter(n), c.length && (u = q(f.zMin, Math.min(u, Math.max(g(c), !1 === f.displayNegative ? f.zThreshold : -Number.MAX_VALUE))), B = q(f.zMax, Math.max(B, h(c))))));
      });
      G.forEach(function (d) {
        var c = d[p],
            e = c.length;
        m && d.getRadii(u, B, d);
        if (0 < E) for (; e--;) {
          if (n(c[e]) && a.dataMin <= c[e] && c[e] <= a.dataMax) {
            var k = d.radii ? d.radii[e] : 0;
            f = Math.min((c[e] - t) * D - k, f);
            b = Math.max((c[e] - t) * D + k, b);
          }
        }
      });
      G.length && 0 < E && !this.isLog && (b -= c, D *= (c + Math.max(0, f) - Math.min(b, c)) / c, [["min", "userMin", f], ["max", "userMax", b]].forEach(function (d) {
        void 0 === q(a.options[d[0]], a[d[1]]) && (a[d[0]] += d[2] / D);
      }));
    };

    "";
  });
  B(u, "modules/networkgraph/integrations.js", [u["parts/Globals.js"]], function (b) {
    b.networkgraphIntegrations = {
      verlet: {
        attractiveForceFunction: function attractiveForceFunction(a, b) {
          return (b - a) / a;
        },
        repulsiveForceFunction: function repulsiveForceFunction(a, b) {
          return (b - a) / a * (b > a ? 1 : 0);
        },
        barycenter: function barycenter() {
          var a = this.options.gravitationalConstant,
              b = this.barycenter.xFactor,
              g = this.barycenter.yFactor;
          b = (b - (this.box.left + this.box.width) / 2) * a;
          g = (g - (this.box.top + this.box.height) / 2) * a;
          this.nodes.forEach(function (a) {
            a.fixedPosition || (a.plotX -= b / a.mass / a.degree, a.plotY -= g / a.mass / a.degree);
          });
        },
        repulsive: function repulsive(a, b, g) {
          b = b * this.diffTemperature / a.mass / a.degree;
          a.fixedPosition || (a.plotX += g.x * b, a.plotY += g.y * b);
        },
        attractive: function attractive(a, b, g) {
          var h = a.getMass(),
              n = -g.x * b * this.diffTemperature;
          b = -g.y * b * this.diffTemperature;
          a.fromNode.fixedPosition || (a.fromNode.plotX -= n * h.fromNode / a.fromNode.degree, a.fromNode.plotY -= b * h.fromNode / a.fromNode.degree);
          a.toNode.fixedPosition || (a.toNode.plotX += n * h.toNode / a.toNode.degree, a.toNode.plotY += b * h.toNode / a.toNode.degree);
        },
        integrate: function integrate(a, b) {
          var g = -a.options.friction,
              m = a.options.maxSpeed,
              h = (b.plotX + b.dispX - b.prevX) * g;
          g *= b.plotY + b.dispY - b.prevY;
          var q = Math.abs,
              e = q(h) / (h || 1);
          q = q(g) / (g || 1);
          h = e * Math.min(m, Math.abs(h));
          g = q * Math.min(m, Math.abs(g));
          b.prevX = b.plotX + b.dispX;
          b.prevY = b.plotY + b.dispY;
          b.plotX += h;
          b.plotY += g;
          b.temperature = a.vectorLength({
            x: h,
            y: g
          });
        },
        getK: function getK(a) {
          return Math.pow(a.box.width * a.box.height / a.nodes.length, .5);
        }
      },
      euler: {
        attractiveForceFunction: function attractiveForceFunction(a, b) {
          return a * a / b;
        },
        repulsiveForceFunction: function repulsiveForceFunction(a, b) {
          return b * b / a;
        },
        barycenter: function barycenter() {
          var a = this.options.gravitationalConstant,
              b = this.barycenter.xFactor,
              g = this.barycenter.yFactor;
          this.nodes.forEach(function (m) {
            if (!m.fixedPosition) {
              var h = m.getDegree();
              h *= 1 + h / 2;
              m.dispX += (b - m.plotX) * a * h / m.degree;
              m.dispY += (g - m.plotY) * a * h / m.degree;
            }
          });
        },
        repulsive: function repulsive(a, b, g, m) {
          a.dispX += g.x / m * b / a.degree;
          a.dispY += g.y / m * b / a.degree;
        },
        attractive: function attractive(a, b, g, m) {
          var h = a.getMass(),
              q = g.x / m * b;
          b *= g.y / m;
          a.fromNode.fixedPosition || (a.fromNode.dispX -= q * h.fromNode / a.fromNode.degree, a.fromNode.dispY -= b * h.fromNode / a.fromNode.degree);
          a.toNode.fixedPosition || (a.toNode.dispX += q * h.toNode / a.toNode.degree, a.toNode.dispY += b * h.toNode / a.toNode.degree);
        },
        integrate: function integrate(a, b) {
          b.dispX += b.dispX * a.options.friction;
          b.dispY += b.dispY * a.options.friction;
          var g = b.temperature = a.vectorLength({
            x: b.dispX,
            y: b.dispY
          });
          0 !== g && (b.plotX += b.dispX / g * Math.min(Math.abs(b.dispX), a.temperature), b.plotY += b.dispY / g * Math.min(Math.abs(b.dispY), a.temperature));
        },
        getK: function getK(a) {
          return Math.pow(a.box.width * a.box.height / a.nodes.length, .3);
        }
      }
    };
  });
  B(u, "modules/networkgraph/QuadTree.js", [u["parts/Globals.js"], u["parts/Utilities.js"]], function (b, a) {
    a = a.extend;

    var h = b.QuadTreeNode = function (a) {
      this.box = a;
      this.boxSize = Math.min(a.width, a.height);
      this.nodes = [];
      this.body = this.isInternal = !1;
      this.isEmpty = !0;
    };

    a(h.prototype, {
      insert: function insert(a, b) {
        this.isInternal ? this.nodes[this.getBoxPosition(a)].insert(a, b - 1) : (this.isEmpty = !1, this.body ? b ? (this.isInternal = !0, this.divideBox(), !0 !== this.body && (this.nodes[this.getBoxPosition(this.body)].insert(this.body, b - 1), this.body = !0), this.nodes[this.getBoxPosition(a)].insert(a, b - 1)) : (b = new h({
          top: a.plotX,
          left: a.plotY,
          width: .1,
          height: .1
        }), b.body = a, b.isInternal = !1, this.nodes.push(b)) : (this.isInternal = !1, this.body = a));
      },
      updateMassAndCenter: function updateMassAndCenter() {
        var a = 0,
            b = 0,
            h = 0;
        this.isInternal ? (this.nodes.forEach(function (g) {
          g.isEmpty || (a += g.mass, b += g.plotX * g.mass, h += g.plotY * g.mass);
        }), b /= a, h /= a) : this.body && (a = this.body.mass, b = this.body.plotX, h = this.body.plotY);
        this.mass = a;
        this.plotX = b;
        this.plotY = h;
      },
      divideBox: function divideBox() {
        var a = this.box.width / 2,
            b = this.box.height / 2;
        this.nodes[0] = new h({
          left: this.box.left,
          top: this.box.top,
          width: a,
          height: b
        });
        this.nodes[1] = new h({
          left: this.box.left + a,
          top: this.box.top,
          width: a,
          height: b
        });
        this.nodes[2] = new h({
          left: this.box.left + a,
          top: this.box.top + b,
          width: a,
          height: b
        });
        this.nodes[3] = new h({
          left: this.box.left,
          top: this.box.top + b,
          width: a,
          height: b
        });
      },
      getBoxPosition: function getBoxPosition(a) {
        var b = a.plotY < this.box.top + this.box.height / 2;
        return a.plotX < this.box.left + this.box.width / 2 ? b ? 0 : 3 : b ? 1 : 2;
      }
    });

    b = b.QuadTree = function (a, b, n, q) {
      this.box = {
        left: a,
        top: b,
        width: n,
        height: q
      };
      this.maxDepth = 25;
      this.root = new h(this.box, "0");
      this.root.isInternal = !0;
      this.root.isRoot = !0;
      this.root.divideBox();
    };

    a(b.prototype, {
      insertNodes: function insertNodes(a) {
        a.forEach(function (a) {
          this.root.insert(a, this.maxDepth);
        }, this);
      },
      visitNodeRecursive: function visitNodeRecursive(a, b, h) {
        var g;
        a || (a = this.root);
        a === this.root && b && (g = b(a));
        !1 !== g && (a.nodes.forEach(function (a) {
          if (a.isInternal) {
            b && (g = b(a));
            if (!1 === g) return;
            this.visitNodeRecursive(a, b, h);
          } else a.body && b && b(a.body);

          h && h(a);
        }, this), a === this.root && h && h(a));
      },
      calculateMassAndCenter: function calculateMassAndCenter() {
        this.visitNodeRecursive(null, null, function (a) {
          a.updateMassAndCenter();
        });
      }
    });
  });
  B(u, "modules/networkgraph/layouts.js", [u["parts/Globals.js"], u["parts/Utilities.js"]], function (b, a) {
    var h = a.defined,
        g = a.extend,
        m = a.pick,
        n = a.setAnimation;
    a = b.addEvent;
    var q = b.Chart;
    b.layouts = {
      "reingold-fruchterman": function reingoldFruchterman() {}
    };
    g(b.layouts["reingold-fruchterman"].prototype, {
      init: function init(a) {
        this.options = a;
        this.nodes = [];
        this.links = [];
        this.series = [];
        this.box = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
        this.setInitialRendering(!0);
        this.integration = b.networkgraphIntegrations[a.integration];
        this.attractiveForce = m(a.attractiveForce, this.integration.attractiveForceFunction);
        this.repulsiveForce = m(a.repulsiveForce, this.integration.repulsiveForceFunction);
        this.approximation = a.approximation;
      },
      start: function start() {
        var a = this.series,
            c = this.options;
        this.currentStep = 0;
        this.forces = a[0] && a[0].forces || [];
        this.initialRendering && (this.initPositions(), a.forEach(function (a) {
          a.render();
        }));
        this.setK();
        this.resetSimulation(c);
        c.enableSimulation && this.step();
      },
      step: function step() {
        var a = this,
            c = this.series,
            f = this.options;
        a.currentStep++;
        "barnes-hut" === a.approximation && (a.createQuadTree(), a.quadTree.calculateMassAndCenter());
        a.forces.forEach(function (c) {
          a[c + "Forces"](a.temperature);
        });
        a.applyLimits(a.temperature);
        a.temperature = a.coolDown(a.startTemperature, a.diffTemperature, a.currentStep);
        a.prevSystemTemperature = a.systemTemperature;
        a.systemTemperature = a.getSystemTemperature();
        f.enableSimulation && (c.forEach(function (a) {
          a.chart && a.render();
        }), a.maxIterations-- && isFinite(a.temperature) && !a.isStable() ? (a.simulation && b.win.cancelAnimationFrame(a.simulation), a.simulation = b.win.requestAnimationFrame(function () {
          a.step();
        })) : a.simulation = !1);
      },
      stop: function stop() {
        this.simulation && b.win.cancelAnimationFrame(this.simulation);
      },
      setArea: function setArea(a, c, b, g) {
        this.box = {
          left: a,
          top: c,
          width: b,
          height: g
        };
      },
      setK: function setK() {
        this.k = this.options.linkLength || this.integration.getK(this);
      },
      addElementsToCollection: function addElementsToCollection(a, c) {
        a.forEach(function (a) {
          -1 === c.indexOf(a) && c.push(a);
        });
      },
      removeElementFromCollection: function removeElementFromCollection(a, c) {
        a = c.indexOf(a);
        -1 !== a && c.splice(a, 1);
      },
      clear: function clear() {
        this.nodes.length = 0;
        this.links.length = 0;
        this.series.length = 0;
        this.resetSimulation();
      },
      resetSimulation: function resetSimulation() {
        this.forcedStop = !1;
        this.systemTemperature = 0;
        this.setMaxIterations();
        this.setTemperature();
        this.setDiffTemperature();
      },
      setMaxIterations: function setMaxIterations(a) {
        this.maxIterations = m(a, this.options.maxIterations);
      },
      setTemperature: function setTemperature() {
        this.temperature = this.startTemperature = Math.sqrt(this.nodes.length);
      },
      setDiffTemperature: function setDiffTemperature() {
        this.diffTemperature = this.startTemperature / (this.options.maxIterations + 1);
      },
      setInitialRendering: function setInitialRendering(a) {
        this.initialRendering = a;
      },
      createQuadTree: function createQuadTree() {
        this.quadTree = new b.QuadTree(this.box.left, this.box.top, this.box.width, this.box.height);
        this.quadTree.insertNodes(this.nodes);
      },
      initPositions: function initPositions() {
        var a = this.options.initialPositions;
        b.isFunction(a) ? (a.call(this), this.nodes.forEach(function (a) {
          h(a.prevX) || (a.prevX = a.plotX);
          h(a.prevY) || (a.prevY = a.plotY);
          a.dispX = 0;
          a.dispY = 0;
        })) : "circle" === a ? this.setCircularPositions() : this.setRandomPositions();
      },
      setCircularPositions: function setCircularPositions() {
        function a(c) {
          c.linksFrom.forEach(function (d) {
            n[d.toNode.id] || (n[d.toNode.id] = !0, p.push(d.toNode), a(d.toNode));
          });
        }

        var c = this.box,
            b = this.nodes,
            g = 2 * Math.PI / (b.length + 1),
            h = b.filter(function (a) {
          return 0 === a.linksTo.length;
        }),
            p = [],
            n = {},
            q = this.options.initialPositionRadius;
        h.forEach(function (c) {
          p.push(c);
          a(c);
        });
        p.length ? b.forEach(function (a) {
          -1 === p.indexOf(a) && p.push(a);
        }) : p = b;
        p.forEach(function (a, d) {
          a.plotX = a.prevX = m(a.plotX, c.width / 2 + q * Math.cos(d * g));
          a.plotY = a.prevY = m(a.plotY, c.height / 2 + q * Math.sin(d * g));
          a.dispX = 0;
          a.dispY = 0;
        });
      },
      setRandomPositions: function setRandomPositions() {
        function a(a) {
          a = a * a / Math.PI;
          return a -= Math.floor(a);
        }

        var c = this.box,
            b = this.nodes,
            g = b.length + 1;
        b.forEach(function (b, e) {
          b.plotX = b.prevX = m(b.plotX, c.width * a(e));
          b.plotY = b.prevY = m(b.plotY, c.height * a(g + e));
          b.dispX = 0;
          b.dispY = 0;
        });
      },
      force: function force(a) {
        this.integration[a].apply(this, Array.prototype.slice.call(arguments, 1));
      },
      barycenterForces: function barycenterForces() {
        this.getBarycenter();
        this.force("barycenter");
      },
      getBarycenter: function getBarycenter() {
        var a = 0,
            c = 0,
            b = 0;
        this.nodes.forEach(function (e) {
          c += e.plotX * e.mass;
          b += e.plotY * e.mass;
          a += e.mass;
        });
        return this.barycenter = {
          x: c,
          y: b,
          xFactor: c / a,
          yFactor: b / a
        };
      },
      barnesHutApproximation: function barnesHutApproximation(a, c) {
        var b = this.getDistXY(a, c),
            e = this.vectorLength(b);
        if (a !== c && 0 !== e) if (c.isInternal) {
          if (c.boxSize / e < this.options.theta && 0 !== e) {
            var g = this.repulsiveForce(e, this.k);
            this.force("repulsive", a, g * c.mass, b, e);
            var h = !1;
          } else h = !0;
        } else g = this.repulsiveForce(e, this.k), this.force("repulsive", a, g * c.mass, b, e);
        return h;
      },
      repulsiveForces: function repulsiveForces() {
        var a = this;
        "barnes-hut" === a.approximation ? a.nodes.forEach(function (c) {
          a.quadTree.visitNodeRecursive(null, function (b) {
            return a.barnesHutApproximation(c, b);
          });
        }) : a.nodes.forEach(function (c) {
          a.nodes.forEach(function (b) {
            if (c !== b && !c.fixedPosition) {
              var e = a.getDistXY(c, b);
              var f = a.vectorLength(e);

              if (0 !== f) {
                var g = a.repulsiveForce(f, a.k);
                a.force("repulsive", c, g * b.mass, e, f);
              }
            }
          });
        });
      },
      attractiveForces: function attractiveForces() {
        var a = this,
            c,
            b,
            g;
        a.links.forEach(function (e) {
          e.fromNode && e.toNode && (c = a.getDistXY(e.fromNode, e.toNode), b = a.vectorLength(c), 0 !== b && (g = a.attractiveForce(b, a.k), a.force("attractive", e, g, c, b)));
        });
      },
      applyLimits: function applyLimits() {
        var a = this;
        a.nodes.forEach(function (c) {
          c.fixedPosition || (a.integration.integrate(a, c), a.applyLimitBox(c, a.box), c.dispX = 0, c.dispY = 0);
        });
      },
      applyLimitBox: function applyLimitBox(a, c) {
        var b = a.radius;
        a.plotX = Math.max(Math.min(a.plotX, c.width - b), c.left + b);
        a.plotY = Math.max(Math.min(a.plotY, c.height - b), c.top + b);
      },
      coolDown: function coolDown(a, c, b) {
        return a - c * b;
      },
      isStable: function isStable() {
        return .00001 > Math.abs(this.systemTemperature - this.prevSystemTemperature) || 0 >= this.temperature;
      },
      getSystemTemperature: function getSystemTemperature() {
        return this.nodes.reduce(function (a, c) {
          return a + c.temperature;
        }, 0);
      },
      vectorLength: function vectorLength(a) {
        return Math.sqrt(a.x * a.x + a.y * a.y);
      },
      getDistR: function getDistR(a, c) {
        a = this.getDistXY(a, c);
        return this.vectorLength(a);
      },
      getDistXY: function getDistXY(a, c) {
        var b = a.plotX - c.plotX;
        a = a.plotY - c.plotY;
        return {
          x: b,
          y: a,
          absX: Math.abs(b),
          absY: Math.abs(a)
        };
      }
    });
    a(q, "predraw", function () {
      this.graphLayoutsLookup && this.graphLayoutsLookup.forEach(function (a) {
        a.stop();
      });
    });
    a(q, "render", function () {
      function a(a) {
        a.maxIterations-- && isFinite(a.temperature) && !a.isStable() && !a.options.enableSimulation && (a.beforeStep && a.beforeStep(), a.step(), b = !1, c = !0);
      }

      var c = !1;

      if (this.graphLayoutsLookup) {
        n(!1, this);

        for (this.graphLayoutsLookup.forEach(function (a) {
          a.start();
        }); !b;) {
          var b = !0;
          this.graphLayoutsLookup.forEach(a);
        }

        c && this.series.forEach(function (a) {
          a && a.layout && a.render();
        });
      }
    });
  });
  B(u, "modules/networkgraph/draggable-nodes.js", [u["parts/Globals.js"]], function (b) {
    var a = b.Chart,
        h = b.addEvent;
    b.dragNodesMixin = {
      onMouseDown: function onMouseDown(a, b) {
        b = this.chart.pointer.normalize(b);
        a.fixedPosition = {
          chartX: b.chartX,
          chartY: b.chartY,
          plotX: a.plotX,
          plotY: a.plotY
        };
        a.inDragMode = !0;
      },
      onMouseMove: function onMouseMove(a, b) {
        if (a.fixedPosition && a.inDragMode) {
          var g = this.chart,
              h = g.pointer.normalize(b);
          b = a.fixedPosition.chartX - h.chartX;
          h = a.fixedPosition.chartY - h.chartY;
          if (5 < Math.abs(b) || 5 < Math.abs(h)) b = a.fixedPosition.plotX - b, h = a.fixedPosition.plotY - h, g.isInsidePlot(b, h) && (a.plotX = b, a.plotY = h, a.hasDragged = !0, this.redrawHalo(a), this.layout.simulation ? this.layout.resetSimulation() : (this.layout.setInitialRendering(!1), this.layout.enableSimulation ? this.layout.start() : this.layout.setMaxIterations(1), this.chart.redraw(), this.layout.setInitialRendering(!0)));
        }
      },
      onMouseUp: function onMouseUp(a, b) {
        a.fixedPosition && a.hasDragged && (this.layout.enableSimulation ? this.layout.start() : this.chart.redraw(), a.inDragMode = a.hasDragged = !1, this.options.fixedDraggable || delete a.fixedPosition);
      },
      redrawHalo: function redrawHalo(a) {
        a && this.halo && this.halo.attr({
          d: a.haloPath(this.options.states.hover.halo.size)
        });
      }
    };
    h(a, "load", function () {
      var a = this,
          b,
          n,
          q;
      a.container && (b = h(a.container, "mousedown", function (b) {
        var c = a.hoverPoint;
        c && c.series && c.series.hasDraggableNodes && c.series.options.draggable && (c.series.onMouseDown(c, b), n = h(a.container, "mousemove", function (a) {
          return c && c.series && c.series.onMouseMove(c, a);
        }), q = h(a.container.ownerDocument, "mouseup", function (a) {
          n();
          q();
          return c && c.series && c.series.onMouseUp(c, a);
        }));
      }));
      h(a, "destroy", function () {
        b();
      });
    });
  });
  B(u, "parts-more/PackedBubbleSeries.js", [u["parts/Globals.js"], u["parts/Utilities.js"]], function (b, a) {
    var h = a.defined,
        g = a.extend,
        m = a.isArray,
        n = a.isNumber,
        q = a.pick;
    a = b.seriesType;
    var e = b.Series,
        c = b.Point,
        f = b.addEvent,
        v = b.fireEvent,
        t = b.Chart,
        p = b.Color,
        x = b.layouts["reingold-fruchterman"],
        u = b.seriesTypes.bubble.prototype.pointClass,
        l = b.dragNodesMixin;
    b.networkgraphIntegrations.packedbubble = {
      repulsiveForceFunction: function repulsiveForceFunction(a, c, b, e) {
        return Math.min(a, (b.marker.radius + e.marker.radius) / 2);
      },
      barycenter: function barycenter() {
        var a = this,
            c = a.options.gravitationalConstant,
            b = a.box,
            e = a.nodes,
            f,
            h;
        e.forEach(function (d) {
          a.options.splitSeries && !d.isParentNode ? (f = d.series.parentNode.plotX, h = d.series.parentNode.plotY) : (f = b.width / 2, h = b.height / 2);
          d.fixedPosition || (d.plotX -= (d.plotX - f) * c / (d.mass * Math.sqrt(e.length)), d.plotY -= (d.plotY - h) * c / (d.mass * Math.sqrt(e.length)));
        });
      },
      repulsive: function repulsive(a, c, b, e) {
        var d = c * this.diffTemperature / a.mass / a.degree;
        c = b.x * d;
        b = b.y * d;
        a.fixedPosition || (a.plotX += c, a.plotY += b);
        e.fixedPosition || (e.plotX -= c, e.plotY -= b);
      },
      integrate: b.networkgraphIntegrations.verlet.integrate,
      getK: b.noop
    };
    b.layouts.packedbubble = b.extendClass(x, {
      beforeStep: function beforeStep() {
        this.options.marker && this.series.forEach(function (a) {
          a && a.calculateParentRadius();
        });
      },
      setCircularPositions: function setCircularPositions() {
        var a = this,
            c = a.box,
            b = a.nodes,
            e = 2 * Math.PI / (b.length + 1),
            f,
            h,
            g = a.options.initialPositionRadius;
        b.forEach(function (d, b) {
          a.options.splitSeries && !d.isParentNode ? (f = d.series.parentNode.plotX, h = d.series.parentNode.plotY) : (f = c.width / 2, h = c.height / 2);
          d.plotX = d.prevX = q(d.plotX, f + g * Math.cos(d.index || b * e));
          d.plotY = d.prevY = q(d.plotY, h + g * Math.sin(d.index || b * e));
          d.dispX = 0;
          d.dispY = 0;
        });
      },
      repulsiveForces: function repulsiveForces() {
        var a = this,
            c,
            b,
            e,
            f = a.options.bubblePadding;
        a.nodes.forEach(function (d) {
          d.degree = d.mass;
          d.neighbours = 0;
          a.nodes.forEach(function (k) {
            c = 0;
            d === k || d.fixedPosition || !a.options.seriesInteraction && d.series !== k.series || (e = a.getDistXY(d, k), b = a.vectorLength(e) - (d.marker.radius + k.marker.radius + f), 0 > b && (d.degree += .01, d.neighbours++, c = a.repulsiveForce(-b / Math.sqrt(d.neighbours), a.k, d, k)), a.force("repulsive", d, c * k.mass, e, k, b));
          });
        });
      },
      applyLimitBox: function applyLimitBox(a) {
        if (this.options.splitSeries && !a.isParentNode && this.options.parentNodeLimit) {
          var d = this.getDistXY(a, a.series.parentNode);
          var c = a.series.parentNodeRadius - a.marker.radius - this.vectorLength(d);
          0 > c && c > -2 * a.marker.radius && (a.plotX -= .01 * d.x, a.plotY -= .01 * d.y);
        }

        x.prototype.applyLimitBox.apply(this, arguments);
      },
      isStable: function isStable() {
        return .00001 > Math.abs(this.systemTemperature - this.prevSystemTemperature) || 0 >= this.temperature || 0 < this.systemTemperature && .02 > this.systemTemperature / this.nodes.length && this.enableSimulation;
      }
    });
    a("packedbubble", "bubble", {
      minSize: "10%",
      maxSize: "50%",
      sizeBy: "area",
      zoneAxis: "y",
      tooltip: {
        pointFormat: "Value: {point.value}"
      },
      draggable: !0,
      useSimulation: !0,
      dataLabels: {
        formatter: function formatter() {
          return this.point.value;
        },
        parentNodeFormatter: function parentNodeFormatter() {
          return this.name;
        },
        parentNodeTextPath: {
          enabled: !0
        },
        padding: 0
      },
      layoutAlgorithm: {
        initialPositions: "circle",
        initialPositionRadius: 20,
        bubblePadding: 5,
        parentNodeLimit: !1,
        seriesInteraction: !0,
        dragBetweenSeries: !1,
        parentNodeOptions: {
          maxIterations: 400,
          gravitationalConstant: .03,
          maxSpeed: 50,
          initialPositionRadius: 100,
          seriesInteraction: !0,
          marker: {
            fillColor: null,
            fillOpacity: 1,
            lineWidth: 1,
            lineColor: null,
            symbol: "circle"
          }
        },
        enableSimulation: !0,
        type: "packedbubble",
        integration: "packedbubble",
        maxIterations: 1E3,
        splitSeries: !1,
        maxSpeed: 5,
        gravitationalConstant: .01,
        friction: -.981
      }
    }, {
      hasDraggableNodes: !0,
      forces: ["barycenter", "repulsive"],
      pointArrayMap: ["value"],
      pointValKey: "value",
      isCartesian: !1,
      axisTypes: [],
      noSharedTooltip: !0,
      accumulateAllPoints: function accumulateAllPoints(a) {
        var d = a.chart,
            c = [],
            b,
            e;

        for (b = 0; b < d.series.length; b++) {
          if (a = d.series[b], a.visible || !d.options.chart.ignoreHiddenSeries) for (e = 0; e < a.yData.length; e++) {
            c.push([null, null, a.yData[e], a.index, e, {
              id: e,
              marker: {
                radius: 0
              }
            }]);
          }
        }

        return c;
      },
      init: function init() {
        e.prototype.init.apply(this, arguments);
        f(this, "updatedData", function () {
          this.chart.series.forEach(function (a) {
            a.type === this.type && (a.isDirty = !0);
          }, this);
        });
        return this;
      },
      render: function render() {
        var a = [];
        e.prototype.render.apply(this, arguments);
        this.options.dataLabels.allowOverlap || (this.data.forEach(function (d) {
          m(d.dataLabels) && d.dataLabels.forEach(function (d) {
            a.push(d);
          });
        }), this.chart.hideOverlappingLabels(a));
      },
      setVisible: function setVisible() {
        var a = this;
        e.prototype.setVisible.apply(a, arguments);
        a.parentNodeLayout && a.graph ? a.visible ? (a.graph.show(), a.parentNode.dataLabel && a.parentNode.dataLabel.show()) : (a.graph.hide(), a.parentNodeLayout.removeElementFromCollection(a.parentNode, a.parentNodeLayout.nodes), a.parentNode.dataLabel && a.parentNode.dataLabel.hide()) : a.layout && (a.visible ? a.layout.addElementsToCollection(a.points, a.layout.nodes) : a.points.forEach(function (d) {
          a.layout.removeElementFromCollection(d, a.layout.nodes);
        }));
      },
      drawDataLabels: function drawDataLabels() {
        var a = this.options.dataLabels.textPath,
            c = this.points;
        e.prototype.drawDataLabels.apply(this, arguments);
        this.parentNode && (this.parentNode.formatPrefix = "parentNode", this.points = [this.parentNode], this.options.dataLabels.textPath = this.options.dataLabels.parentNodeTextPath, e.prototype.drawDataLabels.apply(this, arguments), this.points = c, this.options.dataLabels.textPath = a);
      },
      seriesBox: function seriesBox() {
        var a = this.chart,
            c = Math.max,
            b = Math.min,
            e,
            f = [a.plotLeft, a.plotLeft + a.plotWidth, a.plotTop, a.plotTop + a.plotHeight];
        this.data.forEach(function (a) {
          h(a.plotX) && h(a.plotY) && a.marker.radius && (e = a.marker.radius, f[0] = b(f[0], a.plotX - e), f[1] = c(f[1], a.plotX + e), f[2] = b(f[2], a.plotY - e), f[3] = c(f[3], a.plotY + e));
        });
        return n(f.width / f.height) ? f : null;
      },
      calculateParentRadius: function calculateParentRadius() {
        var a = this.seriesBox();
        this.parentNodeRadius = Math.min(Math.max(Math.sqrt(2 * this.parentNodeMass / Math.PI) + 20, 20), a ? Math.max(Math.sqrt(Math.pow(a.width, 2) + Math.pow(a.height, 2)) / 2 + 20, 20) : Math.sqrt(2 * this.parentNodeMass / Math.PI) + 20);
        this.parentNode && (this.parentNode.marker.radius = this.parentNode.radius = this.parentNodeRadius);
      },
      drawGraph: function drawGraph() {
        if (this.layout && this.layout.options.splitSeries) {
          var a = this.chart,
              c = this.layout.options.parentNodeOptions.marker;
          c = {
            fill: c.fillColor || p(this.color).brighten(.4).get(),
            opacity: c.fillOpacity,
            stroke: c.lineColor || this.color,
            "stroke-width": c.lineWidth
          };
          var e = this.visible ? "inherit" : "hidden";
          this.parentNodesGroup || (this.parentNodesGroup = this.plotGroup("parentNodesGroup", "parentNode", e, .1, a.seriesGroup), this.group.attr({
            zIndex: 2
          }));
          this.calculateParentRadius();
          e = b.merge({
            x: this.parentNode.plotX - this.parentNodeRadius,
            y: this.parentNode.plotY - this.parentNodeRadius,
            width: 2 * this.parentNodeRadius,
            height: 2 * this.parentNodeRadius
          }, c);
          this.parentNode.graphic || (this.graph = this.parentNode.graphic = a.renderer.symbol(c.symbol).add(this.parentNodesGroup));
          this.parentNode.graphic.attr(e);
        }
      },
      createParentNodes: function createParentNodes() {
        var a = this,
            c = a.chart,
            b = a.parentNodeLayout,
            e,
            f = a.parentNode;
        a.parentNodeMass = 0;
        a.points.forEach(function (d) {
          a.parentNodeMass += Math.PI * Math.pow(d.marker.radius, 2);
        });
        a.calculateParentRadius();
        b.nodes.forEach(function (d) {
          d.seriesIndex === a.index && (e = !0);
        });
        b.setArea(0, 0, c.plotWidth, c.plotHeight);
        e || (f || (f = new u().init(this, {
          mass: a.parentNodeRadius / 2,
          marker: {
            radius: a.parentNodeRadius
          },
          dataLabels: {
            inside: !1
          },
          dataLabelOnNull: !0,
          degree: a.parentNodeRadius,
          isParentNode: !0,
          seriesIndex: a.index
        })), a.parentNode && (f.plotX = a.parentNode.plotX, f.plotY = a.parentNode.plotY), a.parentNode = f, b.addElementsToCollection([a], b.series), b.addElementsToCollection([f], b.nodes));
      },
      addSeriesLayout: function addSeriesLayout() {
        var a = this.options.layoutAlgorithm,
            c = this.chart.graphLayoutsStorage,
            e = this.chart.graphLayoutsLookup,
            f = b.merge(a, a.parentNodeOptions, {
          enableSimulation: this.layout.options.enableSimulation
        });
        var h = c[a.type + "-series"];
        h || (c[a.type + "-series"] = h = new b.layouts[a.type](), h.init(f), e.splice(h.index, 0, h));
        this.parentNodeLayout = h;
        this.createParentNodes();
      },
      addLayout: function addLayout() {
        var a = this.options.layoutAlgorithm,
            c = this.chart.graphLayoutsStorage,
            e = this.chart.graphLayoutsLookup,
            f = this.chart.options.chart;
        c || (this.chart.graphLayoutsStorage = c = {}, this.chart.graphLayoutsLookup = e = []);
        var g = c[a.type];
        g || (a.enableSimulation = h(f.forExport) ? !f.forExport : a.enableSimulation, c[a.type] = g = new b.layouts[a.type](), g.init(a), e.splice(g.index, 0, g));
        this.layout = g;
        this.points.forEach(function (a) {
          a.mass = 2;
          a.degree = 1;
          a.collisionNmb = 1;
        });
        g.setArea(0, 0, this.chart.plotWidth, this.chart.plotHeight);
        g.addElementsToCollection([this], g.series);
        g.addElementsToCollection(this.points, g.nodes);
      },
      deferLayout: function deferLayout() {
        var a = this.options.layoutAlgorithm;
        this.visible && (this.addLayout(), a.splitSeries && this.addSeriesLayout());
      },
      translate: function translate() {
        var a = this.chart,
            c = this.data,
            b = this.index,
            e,
            f = this.options.useSimulation;
        this.processedXData = this.xData;
        this.generatePoints();
        h(a.allDataPoints) || (a.allDataPoints = this.accumulateAllPoints(this), this.getPointRadius());
        if (f) var l = a.allDataPoints;else l = this.placeBubbles(a.allDataPoints), this.options.draggable = !1;

        for (e = 0; e < l.length; e++) {
          if (l[e][3] === b) {
            var p = c[l[e][4]];
            var t = l[e][2];
            f || (p.plotX = l[e][0] - a.plotLeft + a.diffX, p.plotY = l[e][1] - a.plotTop + a.diffY);
            p.marker = g(p.marker, {
              radius: t,
              width: 2 * t,
              height: 2 * t
            });
            p.radius = t;
          }
        }

        f && this.deferLayout();
        v(this, "afterTranslate");
      },
      checkOverlap: function checkOverlap(a, c) {
        var d = a[0] - c[0],
            b = a[1] - c[1];
        return -.001 > Math.sqrt(d * d + b * b) - Math.abs(a[2] + c[2]);
      },
      positionBubble: function positionBubble(a, c, b) {
        var d = Math.sqrt,
            e = Math.asin,
            f = Math.acos,
            k = Math.pow,
            h = Math.abs;
        d = d(k(a[0] - c[0], 2) + k(a[1] - c[1], 2));
        f = f((k(d, 2) + k(b[2] + c[2], 2) - k(b[2] + a[2], 2)) / (2 * (b[2] + c[2]) * d));
        e = e(h(a[0] - c[0]) / d);
        a = (0 > a[1] - c[1] ? 0 : Math.PI) + f + e * (0 > (a[0] - c[0]) * (a[1] - c[1]) ? 1 : -1);
        return [c[0] + (c[2] + b[2]) * Math.sin(a), c[1] - (c[2] + b[2]) * Math.cos(a), b[2], b[3], b[4]];
      },
      placeBubbles: function placeBubbles(a) {
        var c = this.checkOverlap,
            d = this.positionBubble,
            b = [],
            e = 1,
            f = 0,
            h = 0;
        var g = [];
        var l;
        a = a.sort(function (a, c) {
          return c[2] - a[2];
        });

        if (a.length) {
          b.push([[0, 0, a[0][2], a[0][3], a[0][4]]]);
          if (1 < a.length) for (b.push([[0, 0 - a[1][2] - a[0][2], a[1][2], a[1][3], a[1][4]]]), l = 2; l < a.length; l++) {
            a[l][2] = a[l][2] || 1, g = d(b[e][f], b[e - 1][h], a[l]), c(g, b[e][0]) ? (b.push([]), h = 0, b[e + 1].push(d(b[e][f], b[e][0], a[l])), e++, f = 0) : 1 < e && b[e - 1][h + 1] && c(g, b[e - 1][h + 1]) ? (h++, b[e].push(d(b[e][f], b[e - 1][h], a[l])), f++) : (f++, b[e].push(g));
          }
          this.chart.stages = b;
          this.chart.rawPositions = [].concat.apply([], b);
          this.resizeRadius();
          g = this.chart.rawPositions;
        }

        return g;
      },
      resizeRadius: function resizeRadius() {
        var a = this.chart,
            c = a.rawPositions,
            b = Math.min,
            e = Math.max,
            f = a.plotLeft,
            h = a.plotTop,
            g = a.plotHeight,
            l = a.plotWidth,
            p,
            t,
            m;
        var n = p = Number.POSITIVE_INFINITY;
        var v = t = Number.NEGATIVE_INFINITY;

        for (m = 0; m < c.length; m++) {
          var q = c[m][2];
          n = b(n, c[m][0] - q);
          v = e(v, c[m][0] + q);
          p = b(p, c[m][1] - q);
          t = e(t, c[m][1] + q);
        }

        m = [v - n, t - p];
        b = b.apply([], [(l - f) / m[0], (g - h) / m[1]]);

        if (1e-10 < Math.abs(b - 1)) {
          for (m = 0; m < c.length; m++) {
            c[m][2] *= b;
          }

          this.placeBubbles(c);
        } else a.diffY = g / 2 + h - p - (t - p) / 2, a.diffX = l / 2 + f - n - (v - n) / 2;
      },
      calculateZExtremes: function calculateZExtremes() {
        var a = this.options.zMin,
            c = this.options.zMax,
            b = Infinity,
            e = -Infinity;
        if (a && c) return [a, c];
        this.chart.series.forEach(function (a) {
          a.yData.forEach(function (a) {
            h(a) && (a > e && (e = a), a < b && (b = a));
          });
        });
        a = q(a, b);
        c = q(c, e);
        return [a, c];
      },
      getPointRadius: function getPointRadius() {
        var a = this,
            c = a.chart,
            b = a.options,
            e = b.useSimulation,
            f = Math.min(c.plotWidth, c.plotHeight),
            h = {},
            g = [],
            l = c.allDataPoints,
            p,
            t,
            m,
            n;
        ["minSize", "maxSize"].forEach(function (a) {
          var c = parseInt(b[a], 10),
              d = /%$/.test(b[a]);
          h[a] = d ? f * c / 100 : c * Math.sqrt(l.length);
        });
        c.minRadius = p = h.minSize / Math.sqrt(l.length);
        c.maxRadius = t = h.maxSize / Math.sqrt(l.length);
        var v = e ? a.calculateZExtremes() : [p, t];
        (l || []).forEach(function (c, b) {
          m = e ? Math.max(Math.min(c[2], v[1]), v[0]) : c[2];
          n = a.getRadius(v[0], v[1], p, t, m);
          0 === n && (n = null);
          l[b][2] = n;
          g.push(n);
        });
        a.radii = g;
      },
      redrawHalo: l.redrawHalo,
      onMouseDown: l.onMouseDown,
      onMouseMove: l.onMouseMove,
      onMouseUp: function onMouseUp(a) {
        if (a.fixedPosition && !a.removed) {
          var c,
              d,
              e = this.layout,
              f = this.parentNodeLayout;
          f && e.options.dragBetweenSeries && f.nodes.forEach(function (f) {
            a && a.marker && f !== a.series.parentNode && (c = e.getDistXY(a, f), d = e.vectorLength(c) - f.marker.radius - a.marker.radius, 0 > d && (f.series.addPoint(b.merge(a.options, {
              plotX: a.plotX,
              plotY: a.plotY
            }), !1), e.removeElementFromCollection(a, e.nodes), a.remove()));
          });
          l.onMouseUp.apply(this, arguments);
        }
      },
      destroy: function destroy() {
        this.chart.graphLayoutsLookup && this.chart.graphLayoutsLookup.forEach(function (a) {
          a.removeElementFromCollection(this, a.series);
        }, this);
        this.parentNode && (this.parentNodeLayout.removeElementFromCollection(this.parentNode, this.parentNodeLayout.nodes), this.parentNode.dataLabel && (this.parentNode.dataLabel = this.parentNode.dataLabel.destroy()));
        b.Series.prototype.destroy.apply(this, arguments);
      },
      alignDataLabel: b.Series.prototype.alignDataLabel
    }, {
      destroy: function destroy() {
        this.series.layout && this.series.layout.removeElementFromCollection(this, this.series.layout.nodes);
        return c.prototype.destroy.apply(this, arguments);
      }
    });
    f(t, "beforeRedraw", function () {
      this.allDataPoints && delete this.allDataPoints;
    });
    "";
  });
  B(u, "parts-more/Polar.js", [u["parts/Globals.js"], u["parts/Utilities.js"]], function (b, a) {
    var h = a.pick,
        g = a.splat,
        m = b.Series,
        n = b.seriesTypes;
    a = b.wrap;
    var q = m.prototype,
        e = b.Pointer.prototype;

    q.searchPointByAngle = function (a) {
      var c = this.chart,
          b = this.xAxis.pane.center;
      return this.searchKDTree({
        clientX: 180 + -180 / Math.PI * Math.atan2(a.chartX - b[0] - c.plotLeft, a.chartY - b[1] - c.plotTop)
      });
    };

    q.getConnectors = function (a, b, e, h) {
      var c = h ? 1 : 0;
      var f = 0 <= b && b <= a.length - 1 ? b : 0 > b ? a.length - 1 + b : 0;
      b = 0 > f - 1 ? a.length - (1 + c) : f - 1;
      c = f + 1 > a.length - 1 ? c : f + 1;
      var g = a[b];
      c = a[c];
      var l = g.plotX;
      g = g.plotY;
      var d = c.plotX;
      var k = c.plotY;
      c = a[f].plotX;
      f = a[f].plotY;
      l = (1.5 * c + l) / 2.5;
      g = (1.5 * f + g) / 2.5;
      d = (1.5 * c + d) / 2.5;
      var t = (1.5 * f + k) / 2.5;
      k = Math.sqrt(Math.pow(l - c, 2) + Math.pow(g - f, 2));
      var m = Math.sqrt(Math.pow(d - c, 2) + Math.pow(t - f, 2));
      l = Math.atan2(g - f, l - c);
      t = Math.PI / 2 + (l + Math.atan2(t - f, d - c)) / 2;
      Math.abs(l - t) > Math.PI / 2 && (t -= Math.PI);
      l = c + Math.cos(t) * k;
      g = f + Math.sin(t) * k;
      d = c + Math.cos(Math.PI + t) * m;
      t = f + Math.sin(Math.PI + t) * m;
      c = {
        rightContX: d,
        rightContY: t,
        leftContX: l,
        leftContY: g,
        plotX: c,
        plotY: f
      };
      e && (c.prevPointCont = this.getConnectors(a, b, !1, h));
      return c;
    };

    q.toXY = function (a) {
      var c = this.chart,
          b = a.plotX;
      var e = a.plotY;
      a.rectPlotX = b;
      a.rectPlotY = e;
      e = this.xAxis.postTranslate(a.plotX, this.yAxis.len - e);
      a.plotX = a.polarPlotX = e.x - c.plotLeft;
      a.plotY = a.polarPlotY = e.y - c.plotTop;
      this.kdByAngle ? (c = (b / Math.PI * 180 + this.xAxis.pane.options.startAngle) % 360, 0 > c && (c += 360), a.clientX = c) : a.clientX = a.plotX;
    };

    n.spline && (a(n.spline.prototype, "getPointSpline", function (a, b, e, g) {
      this.chart.polar ? g ? (a = this.getConnectors(b, g, !0, this.connectEnds), a = ["C", a.prevPointCont.rightContX, a.prevPointCont.rightContY, a.leftContX, a.leftContY, a.plotX, a.plotY]) : a = ["M", e.plotX, e.plotY] : a = a.call(this, b, e, g);
      return a;
    }), n.areasplinerange && (n.areasplinerange.prototype.getPointSpline = n.spline.prototype.getPointSpline));
    b.addEvent(m, "afterTranslate", function () {
      var a = this.chart,
          e;

      if (a.polar && this.xAxis) {
        (this.kdByAngle = a.tooltip && a.tooltip.shared) ? this.searchPoint = this.searchPointByAngle : this.options.findNearestPointBy = "xy";

        if (!this.preventPostTranslate) {
          var g = this.points;

          for (e = g.length; e--;) {
            this.toXY(g[e]), !a.hasParallelCoordinates && !this.yAxis.reversed && g[e].y < this.yAxis.min && (g[e].isNull = !0);
          }
        }

        this.hasClipCircleSetter || (this.hasClipCircleSetter = !!b.addEvent(this, "afterRender", function () {
          if (a.polar) {
            var c = this.yAxis.center;
            this.group.clip(a.renderer.clipCircle(c[0], c[1], c[2] / 2));
            this.setClip = b.noop;
          }
        }));
      }
    }, {
      order: 2
    });
    a(q, "getGraphPath", function (a, b) {
      var c = this,
          e;

      if (this.chart.polar) {
        b = b || this.points;

        for (e = 0; e < b.length; e++) {
          if (!b[e].isNull) {
            var f = e;
            break;
          }
        }

        if (!1 !== this.options.connectEnds && void 0 !== f) {
          this.connectEnds = !0;
          b.splice(b.length, 0, b[f]);
          var g = !0;
        }

        b.forEach(function (a) {
          void 0 === a.polarPlotY && c.toXY(a);
        });
      }

      e = a.apply(this, [].slice.call(arguments, 1));
      g && b.pop();
      return e;
    });

    m = function m(a, b) {
      var c = this.chart,
          e = this.options.animation,
          f = this.group,
          g = this.markerGroup,
          h = this.xAxis.center,
          l = c.plotLeft,
          d = c.plotTop;
      c.polar ? c.renderer.isSVG && (!0 === e && (e = {}), b ? (a = {
        translateX: h[0] + l,
        translateY: h[1] + d,
        scaleX: .001,
        scaleY: .001
      }, f.attr(a), g && g.attr(a)) : (a = {
        translateX: l,
        translateY: d,
        scaleX: 1,
        scaleY: 1
      }, f.animate(a, e), g && g.animate(a, e), this.animate = null)) : a.call(this, b);
    };

    a(q, "animate", m);
    n.column && (n = n.column.prototype, n.polarArc = function (a, b, e, g) {
      var c = this.xAxis.center,
          f = this.yAxis.len;
      return this.chart.renderer.symbols.arc(c[0], c[1], f - b, null, {
        start: e,
        end: g,
        innerR: f - h(a, f)
      });
    }, a(n, "animate", m), a(n, "translate", function (a) {
      var b = this.xAxis,
          c = b.startAngleRad,
          e;
      this.preventPostTranslate = !0;
      a.call(this);

      if (b.isRadial) {
        var g = this.points;

        for (e = g.length; e--;) {
          var h = g[e];
          a = h.barX + c;
          h.shapeType = "path";
          h.shapeArgs = {
            d: this.polarArc(h.yBottom, h.plotY, a, a + h.pointWidth)
          };
          this.toXY(h);
          h.tooltipPos = [h.plotX, h.plotY];
          h.ttBelow = h.plotY > b.center[1];
        }
      }
    }), a(n, "alignDataLabel", function (a, b, e, g, h, m) {
      this.chart.polar ? (a = b.rectPlotX / Math.PI * 180, null === g.align && (g.align = 20 < a && 160 > a ? "left" : 200 < a && 340 > a ? "right" : "center"), null === g.verticalAlign && (g.verticalAlign = 45 > a || 315 < a ? "bottom" : 135 < a && 225 > a ? "top" : "middle"), q.alignDataLabel.call(this, b, e, g, h, m)) : a.call(this, b, e, g, h, m);
    }));
    a(e, "getCoordinates", function (a, b) {
      var c = this.chart,
          e = {
        xAxis: [],
        yAxis: []
      };
      c.polar ? c.axes.forEach(function (a) {
        var f = a.isXAxis,
            g = a.center;

        if ("colorAxis" !== a.coll) {
          var h = b.chartX - g[0] - c.plotLeft;
          g = b.chartY - g[1] - c.plotTop;
          e[f ? "xAxis" : "yAxis"].push({
            axis: a,
            value: a.translate(f ? Math.PI - Math.atan2(h, g) : Math.sqrt(Math.pow(h, 2) + Math.pow(g, 2)), !0)
          });
        }
      }) : e = a.call(this, b);
      return e;
    });

    b.SVGRenderer.prototype.clipCircle = function (a, e, g) {
      var c = b.uniqueKey(),
          f = this.createElement("clipPath").attr({
        id: c
      }).add(this.defs);
      a = this.circle(a, e, g).add(f);
      a.id = c;
      a.clipPath = f;
      return a;
    };

    b.addEvent(b.Chart, "getAxes", function () {
      this.pane || (this.pane = []);
      g(this.options.pane).forEach(function (a) {
        new b.Pane(a, this);
      }, this);
    });
    b.addEvent(b.Chart, "afterDrawChartBox", function () {
      this.pane.forEach(function (a) {
        a.render();
      });
    });
    a(b.Chart.prototype, "get", function (a, e) {
      return b.find(this.pane, function (a) {
        return a.options.id === e;
      }) || a.call(this, e);
    });
  });
  B(u, "masters/highcharts-more.src.js", [], function () {});
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "../../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/highcharts/highcharts.js":
/*!*******************************************************************************************************!*\
  !*** C:/Users/Farkhad/Desktop/GitHub/metaratings-v2/markup-new/node_modules/highcharts/highcharts.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 Highcharts JS v7.2.1 (2019-10-31)

 (c) 2009-2018 Torstein Honsi

 License: www.highcharts.com/license
*/
(function (P, M) {
  "object" === ( false ? undefined : _typeof(module)) && module.exports ? (M["default"] = M, module.exports = P.document ? M(P) : M) :  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return M(P);
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : (undefined);
})("undefined" !== typeof window ? window : this, function (P) {
  function M(c, f, F, G) {
    c.hasOwnProperty(f) || (c[f] = G.apply(null, F));
  }

  var I = {};
  M(I, "parts/Globals.js", [], function () {
    var c = "undefined" !== typeof P ? P : "undefined" !== typeof window ? window : {},
        f = c.document,
        F = c.navigator && c.navigator.userAgent || "",
        G = f && f.createElementNS && !!f.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
        z = /(edge|msie|trident)/i.test(F) && !c.opera,
        B = -1 !== F.indexOf("Firefox"),
        t = -1 !== F.indexOf("Chrome"),
        v = B && 4 > parseInt(F.split("Firefox/")[1], 10);
    return {
      product: "Highcharts",
      version: "7.2.1",
      deg2rad: 2 * Math.PI / 360,
      doc: f,
      hasBidiBug: v,
      hasTouch: !!c.TouchEvent,
      isMS: z,
      isWebKit: -1 !== F.indexOf("AppleWebKit"),
      isFirefox: B,
      isChrome: t,
      isSafari: !t && -1 !== F.indexOf("Safari"),
      isTouchDevice: /(Mobile|Android|Windows Phone)/.test(F),
      SVG_NS: "http://www.w3.org/2000/svg",
      chartCount: 0,
      seriesTypes: {},
      symbolSizes: {},
      svg: G,
      win: c,
      marginNames: ["plotTop", "marginRight", "marginBottom", "plotLeft"],
      noop: function noop() {},
      charts: [],
      dateFormats: {}
    };
  });
  M(I, "parts/Utilities.js", [I["parts/Globals.js"]], function (c) {
    function f(a, d) {
      return parseInt(a, d || 10);
    }

    function F(a) {
      return "string" === typeof a;
    }

    function G(a) {
      a = Object.prototype.toString.call(a);
      return "[object Array]" === a || "[object Array Iterator]" === a;
    }

    function z(a, d) {
      return !!a && "object" === _typeof(a) && (!d || !G(a));
    }

    function B(a) {
      return z(a) && "number" === typeof a.nodeType;
    }

    function t(a) {
      var d = a && a.constructor;
      return !(!z(a, !0) || B(a) || !d || !d.name || "Object" === d.name);
    }

    function v(a) {
      return "number" === typeof a && !isNaN(a) && Infinity > a && -Infinity < a;
    }

    function C(a) {
      return "undefined" !== typeof a && null !== a;
    }

    function H(a, d, e) {
      var b;
      F(d) ? C(e) ? a.setAttribute(d, e) : a && a.getAttribute && ((b = a.getAttribute(d)) || "class" !== d || (b = a.getAttribute(d + "Name"))) : n(d, function (d, e) {
        a.setAttribute(e, d);
      });
      return b;
    }

    function y(a, d) {
      var e;
      a || (a = {});

      for (e in d) {
        a[e] = d[e];
      }

      return a;
    }

    function h() {
      for (var a = arguments, d = a.length, e = 0; e < d; e++) {
        var b = a[e];
        if ("undefined" !== typeof b && null !== b) return b;
      }
    }

    function n(a, d, e) {
      for (var b in a) {
        Object.hasOwnProperty.call(a, b) && d.call(e || a[b], a[b], b, a);
      }
    }

    c.timers = [];
    var q = c.charts,
        g = c.doc,
        b = c.win;

    c.error = function (a, d, e, l) {
      var g = v(a),
          h = g ? "Highcharts error #" + a + ": www.highcharts.com/errors/" + a + "/" : a.toString(),
          p = function p() {
        if (d) throw Error(h);
        b.console && console.log(h);
      };

      if ("undefined" !== typeof l) {
        var u = "";
        g && (h += "?");
        c.objectEach(l, function (a, d) {
          u += "\n" + d + ": " + a;
          g && (h += encodeURI(d) + "=" + encodeURI(a));
        });
        h += u;
      }

      e ? c.fireEvent(e, "displayError", {
        code: a,
        message: h,
        params: l
      }, p) : p();
    };

    c.Fx = function (a, d, e) {
      this.options = d;
      this.elem = a;
      this.prop = e;
    };

    c.Fx.prototype = {
      dSetter: function dSetter() {
        var a = this.paths[0],
            d = this.paths[1],
            e = [],
            b = this.now,
            g = a.length;
        if (1 === b) e = this.toD;else if (g === d.length && 1 > b) for (; g--;) {
          var c = parseFloat(a[g]);
          e[g] = isNaN(c) || "A" === d[g - 4] || "A" === d[g - 5] ? d[g] : b * parseFloat("" + (d[g] - c)) + c;
        } else e = d;
        this.elem.attr("d", e, null, !0);
      },
      update: function update() {
        var a = this.elem,
            d = this.prop,
            e = this.now,
            b = this.options.step;
        if (this[d + "Setter"]) this[d + "Setter"]();else a.attr ? a.element && a.attr(d, e, null, !0) : a.style[d] = e + this.unit;
        b && b.call(a, e, this);
      },
      run: function run(a, d, e) {
        var l = this,
            g = l.options,
            h = function h(a) {
          return h.stopped ? !1 : l.step(a);
        },
            p = b.requestAnimationFrame || function (a) {
          setTimeout(a, 13);
        },
            u = function u() {
          for (var a = 0; a < c.timers.length; a++) {
            c.timers[a]() || c.timers.splice(a--, 1);
          }

          c.timers.length && p(u);
        };

        a !== d || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +new Date(), this.start = a, this.end = d, this.unit = e, this.now = this.start, this.pos = 0, h.elem = this.elem, h.prop = this.prop, h() && 1 === c.timers.push(h) && p(u)) : (delete g.curAnim[this.prop], g.complete && 0 === Object.keys(g.curAnim).length && g.complete.call(this.elem));
      },
      step: function step(a) {
        var d = +new Date(),
            e = this.options,
            b = this.elem,
            g = e.complete,
            c = e.duration,
            p = e.curAnim;
        if (b.attr && !b.element) a = !1;else if (a || d >= c + this.startTime) {
          this.now = this.end;
          this.pos = 1;
          this.update();
          var u = p[this.prop] = !0;
          n(p, function (a) {
            !0 !== a && (u = !1);
          });
          u && g && g.call(b);
          a = !1;
        } else this.pos = e.easing((d - this.startTime) / c), this.now = this.start + (this.end - this.start) * this.pos, this.update(), a = !0;
        return a;
      },
      initPath: function initPath(a, d, e) {
        function b(a) {
          for (A = a.length; A--;) {
            var d = "M" === a[A] || "L" === a[A];
            var e = /[a-zA-Z]/.test(a[A + 3]);
            d && e && a.splice(A + 1, 0, a[A + 1], a[A + 2], a[A + 1], a[A + 2]);
          }
        }

        function g(a, d) {
          for (; a.length < h;) {
            a[0] = d[h - a.length];
            var e = a.slice(0, r);
            [].splice.apply(a, [0, 0].concat(e));
            w && (e = a.slice(a.length - r), [].splice.apply(a, [a.length, 0].concat(e)), A--);
          }

          a[0] = "M";
        }

        function c(a, d) {
          for (var e = (h - a.length) / r; 0 < e && e--;) {
            x = a.slice().splice(a.length / m - r, r * m), x[0] = d[h - r - e * r], k && (x[r - 6] = x[r - 2], x[r - 5] = x[r - 1]), [].splice.apply(a, [a.length / m, 0].concat(x)), w && e--;
          }
        }

        d = d || "";
        var p = a.startX,
            u = a.endX,
            k = -1 < d.indexOf("C"),
            r = k ? 7 : 3,
            x,
            A;
        d = d.split(" ");
        e = e.slice();
        var w = a.isArea,
            m = w ? 2 : 1;
        k && (b(d), b(e));

        if (p && u) {
          for (A = 0; A < p.length; A++) {
            if (p[A] === u[0]) {
              var K = A;
              break;
            } else if (p[0] === u[u.length - p.length + A]) {
              K = A;
              var J = !0;
              break;
            } else if (p[p.length - 1] === u[u.length - p.length + A]) {
              K = p.length - A;
              break;
            }
          }

          "undefined" === typeof K && (d = []);
        }

        if (d.length && v(K)) {
          var h = e.length + K * m * r;
          J ? (g(d, e), c(e, d)) : (g(e, d), c(d, e));
        }

        return [d, e];
      },
      fillSetter: function fillSetter() {
        c.Fx.prototype.strokeSetter.apply(this, arguments);
      },
      strokeSetter: function strokeSetter() {
        this.elem.attr(this.prop, c.color(this.start).tweenTo(c.color(this.end), this.pos), null, !0);
      }
    };

    c.merge = function () {
      var a,
          d = arguments,
          e = {},
          b = function b(a, d) {
        "object" !== _typeof(a) && (a = {});
        n(d, function (e, k) {
          !z(e, !0) || t(e) || B(e) ? a[k] = d[k] : a[k] = b(a[k] || {}, e);
        });
        return a;
      };

      !0 === d[0] && (e = d[1], d = Array.prototype.slice.call(d, 2));
      var g = d.length;

      for (a = 0; a < g; a++) {
        e = b(e, d[a]);
      }

      return e;
    };

    c.clearTimeout = function (a) {
      C(a) && clearTimeout(a);
    };

    c.css = function (a, d) {
      c.isMS && !c.svg && d && "undefined" !== typeof d.opacity && (d.filter = "alpha(opacity=" + 100 * d.opacity + ")");
      y(a.style, d);
    };

    c.createElement = function (a, d, e, b, L) {
      a = g.createElement(a);
      var l = c.css;
      d && y(a, d);
      L && l(a, {
        padding: "0",
        border: "none",
        margin: "0"
      });
      e && l(a, e);
      b && b.appendChild(a);
      return a;
    };

    c.extendClass = function (a, d) {
      var e = function e() {};

      e.prototype = new a();
      y(e.prototype, d);
      return e;
    };

    c.pad = function (a, d, e) {
      return Array((d || 2) + 1 - String(a).replace("-", "").length).join(e || "0") + a;
    };

    c.relativeLength = function (a, d, e) {
      return /%$/.test(a) ? d * parseFloat(a) / 100 + (e || 0) : parseFloat(a);
    };

    c.wrap = function (a, d, e) {
      var b = a[d];

      a[d] = function () {
        var a = Array.prototype.slice.call(arguments),
            d = arguments,
            l = this;

        l.proceed = function () {
          b.apply(l, arguments.length ? arguments : d);
        };

        a.unshift(b);
        a = e.apply(this, a);
        l.proceed = null;
        return a;
      };
    };

    c.datePropsToTimestamps = function (a) {
      n(a, function (d, e) {
        z(d) && "function" === typeof d.getTime ? a[e] = d.getTime() : (z(d) || G(d)) && c.datePropsToTimestamps(d);
      });
    };

    c.formatSingle = function (a, d, e) {
      var b = /\.([0-9])/,
          g = c.defaultOptions.lang;
      /f$/.test(a) ? (e = (e = a.match(b)) ? e[1] : -1, null !== d && (d = c.numberFormat(d, e, g.decimalPoint, -1 < a.indexOf(",") ? g.thousandsSep : ""))) : d = (e || c.time).dateFormat(a, d);
      return d;
    };

    c.format = function (a, d, e) {
      for (var b = "{", g = !1, h, p, u, k, r = [], x; a;) {
        b = a.indexOf(b);
        if (-1 === b) break;
        h = a.slice(0, b);

        if (g) {
          h = h.split(":");
          p = h.shift().split(".");
          k = p.length;
          x = d;

          for (u = 0; u < k; u++) {
            x && (x = x[p[u]]);
          }

          h.length && (x = c.formatSingle(h.join(":"), x, e));
          r.push(x);
        } else r.push(h);

        a = a.slice(b + 1);
        b = (g = !g) ? "}" : "{";
      }

      r.push(a);
      return r.join("");
    };

    c.getMagnitude = function (a) {
      return Math.pow(10, Math.floor(Math.log(a) / Math.LN10));
    };

    c.normalizeTickInterval = function (a, d, e, b, g) {
      var l = a;
      e = h(e, 1);
      var p = a / e;
      d || (d = g ? [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] : [1, 2, 2.5, 5, 10], !1 === b && (1 === e ? d = d.filter(function (a) {
        return 0 === a % 1;
      }) : .1 >= e && (d = [1 / e])));

      for (b = 0; b < d.length && !(l = d[b], g && l * e >= a || !g && p <= (d[b] + (d[b + 1] || d[b])) / 2); b++) {
        ;
      }

      return l = c.correctFloat(l * e, -Math.round(Math.log(.001) / Math.LN10));
    };

    c.stableSort = function (a, d) {
      var b = a.length,
          l,
          g;

      for (g = 0; g < b; g++) {
        a[g].safeI = g;
      }

      a.sort(function (a, b) {
        l = d(a, b);
        return 0 === l ? a.safeI - b.safeI : l;
      });

      for (g = 0; g < b; g++) {
        delete a[g].safeI;
      }
    };

    c.correctFloat = function (a, d) {
      return parseFloat(a.toPrecision(d || 14));
    };

    c.animObject = function (a) {
      return z(a) ? c.merge(a) : {
        duration: a ? 500 : 0
      };
    };

    c.timeUnits = {
      millisecond: 1,
      second: 1E3,
      minute: 6E4,
      hour: 36E5,
      day: 864E5,
      week: 6048E5,
      month: 24192E5,
      year: 314496E5
    };

    c.numberFormat = function (a, d, b, l) {
      a = +a || 0;
      d = +d;
      var e = c.defaultOptions.lang,
          g = (a.toString().split(".")[1] || "").split("e")[0].length,
          p = a.toString().split("e");
      if (-1 === d) d = Math.min(g, 20);else if (!v(d)) d = 2;else if (d && p[1] && 0 > p[1]) {
        var u = d + +p[1];
        0 <= u ? (p[0] = (+p[0]).toExponential(u).split("e")[0], d = u) : (p[0] = p[0].split(".")[0] || 0, a = 20 > d ? (p[0] * Math.pow(10, p[1])).toFixed(d) : 0, p[1] = 0);
      }
      var k = (Math.abs(p[1] ? p[0] : a) + Math.pow(10, -Math.max(d, g) - 1)).toFixed(d);
      g = String(f(k));
      u = 3 < g.length ? g.length % 3 : 0;
      b = h(b, e.decimalPoint);
      l = h(l, e.thousandsSep);
      a = (0 > a ? "-" : "") + (u ? g.substr(0, u) + l : "");
      a += g.substr(u).replace(/(\d{3})(?=\d)/g, "$1" + l);
      d && (a += b + k.slice(-d));
      p[1] && 0 !== +a && (a += "e" + p[1]);
      return a;
    };

    Math.easeInOutSine = function (a) {
      return -.5 * (Math.cos(Math.PI * a) - 1);
    };

    c.getStyle = function (a, d, e) {
      if ("width" === d) return d = Math.min(a.offsetWidth, a.scrollWidth), e = a.getBoundingClientRect && a.getBoundingClientRect().width, e < d && e >= d - 1 && (d = Math.floor(e)), Math.max(0, d - c.getStyle(a, "padding-left") - c.getStyle(a, "padding-right"));
      if ("height" === d) return Math.max(0, Math.min(a.offsetHeight, a.scrollHeight) - c.getStyle(a, "padding-top") - c.getStyle(a, "padding-bottom"));
      b.getComputedStyle || c.error(27, !0);
      if (a = b.getComputedStyle(a, void 0)) a = a.getPropertyValue(d), h(e, "opacity" !== d) && (a = f(a));
      return a;
    };

    c.inArray = function (a, d, b) {
      return d.indexOf(a, b);
    };

    c.find = Array.prototype.find ? function (a, d) {
      return a.find(d);
    } : function (a, d) {
      var b,
          l = a.length;

      for (b = 0; b < l; b++) {
        if (d(a[b], b)) return a[b];
      }
    };
    c.keys = Object.keys;

    c.offset = function (a) {
      var d = g.documentElement;
      a = a.parentElement || a.parentNode ? a.getBoundingClientRect() : {
        top: 0,
        left: 0
      };
      return {
        top: a.top + (b.pageYOffset || d.scrollTop) - (d.clientTop || 0),
        left: a.left + (b.pageXOffset || d.scrollLeft) - (d.clientLeft || 0)
      };
    };

    c.stop = function (a, b) {
      for (var d = c.timers.length; d--;) {
        c.timers[d].elem !== a || b && b !== c.timers[d].prop || (c.timers[d].stopped = !0);
      }
    };

    n({
      map: "map",
      each: "forEach",
      grep: "filter",
      reduce: "reduce",
      some: "some"
    }, function (a, b) {
      c[b] = function (b) {
        return Array.prototype[a].apply(b, [].slice.call(arguments, 1));
      };
    });

    c.addEvent = function (a, b, e, l) {
      void 0 === l && (l = {});
      var d = a.addEventListener || c.addEventListenerPolyfill;
      var g = "function" === typeof a && a.prototype ? a.prototype.protoEvents = a.prototype.protoEvents || {} : a.hcEvents = a.hcEvents || {};
      c.Point && a instanceof c.Point && a.series && a.series.chart && (a.series.chart.runTrackerClick = !0);
      d && d.call(a, b, e, !1);
      g[b] || (g[b] = []);
      g[b].push({
        fn: e,
        order: "number" === typeof l.order ? l.order : Infinity
      });
      g[b].sort(function (a, b) {
        return a.order - b.order;
      });
      return function () {
        c.removeEvent(a, b, e);
      };
    };

    c.removeEvent = function (a, b, e) {
      function d(b, d) {
        var e = a.removeEventListener || c.removeEventListenerPolyfill;
        e && e.call(a, b, d, !1);
      }

      function g(e) {
        var l;

        if (a.nodeName) {
          if (b) {
            var k = {};
            k[b] = !0;
          } else k = e;

          n(k, function (a, b) {
            if (e[b]) for (l = e[b].length; l--;) {
              d(b, e[b][l].fn);
            }
          });
        }
      }

      var h;
      ["protoEvents", "hcEvents"].forEach(function (l, c) {
        var k = (c = c ? a : a.prototype) && c[l];
        k && (b ? (h = k[b] || [], e ? (k[b] = h.filter(function (a) {
          return e !== a.fn;
        }), d(b, e)) : (g(k), k[b] = [])) : (g(k), c[l] = {}));
      });
    };

    c.fireEvent = function (a, b, e, l) {
      var d;
      e = e || {};

      if (g.createEvent && (a.dispatchEvent || a.fireEvent)) {
        var c = g.createEvent("Events");
        c.initEvent(b, !0, !0);
        y(c, e);
        a.dispatchEvent ? a.dispatchEvent(c) : a.fireEvent(b, c);
      } else e.target || y(e, {
        preventDefault: function preventDefault() {
          e.defaultPrevented = !0;
        },
        target: a,
        type: b
      }), function (b, l) {
        void 0 === b && (b = []);
        void 0 === l && (l = []);
        var k = 0,
            r = 0,
            g = b.length + l.length;

        for (d = 0; d < g; d++) {
          !1 === (b[k] ? l[r] ? b[k].order <= l[r].order ? b[k++] : l[r++] : b[k++] : l[r++]).fn.call(a, e) && e.preventDefault();
        }
      }(a.protoEvents && a.protoEvents[b], a.hcEvents && a.hcEvents[b]);

      l && !e.defaultPrevented && l.call(a, e);
    };

    c.animate = function (a, b, e) {
      var d,
          g = "",
          h,
          p;

      if (!z(e)) {
        var u = arguments;
        e = {
          duration: u[2],
          easing: u[3],
          complete: u[4]
        };
      }

      v(e.duration) || (e.duration = 400);
      e.easing = "function" === typeof e.easing ? e.easing : Math[e.easing] || Math.easeInOutSine;
      e.curAnim = c.merge(b);
      n(b, function (k, l) {
        c.stop(a, l);
        p = new c.Fx(a, e, l);
        h = null;
        "d" === l ? (p.paths = p.initPath(a, a.d, b.d), p.toD = b.d, d = 0, h = 1) : a.attr ? d = a.attr(l) : (d = parseFloat(c.getStyle(a, l)) || 0, "opacity" !== l && (g = "px"));
        h || (h = k);
        h && h.match && h.match("px") && (h = h.replace(/px/g, ""));
        p.run(d, h, g);
      });
    };

    c.seriesType = function (a, b, e, l, g) {
      var d = c.getOptions(),
          p = c.seriesTypes;
      d.plotOptions[a] = c.merge(d.plotOptions[b], e);
      p[a] = c.extendClass(p[b] || function () {}, l);
      p[a].prototype.type = a;
      g && (p[a].prototype.pointClass = c.extendClass(c.Point, g));
      return p[a];
    };

    c.uniqueKey = function () {
      var a = Math.random().toString(36).substring(2, 9),
          b = 0;
      return function () {
        return "highcharts-" + a + "-" + b++;
      };
    }();

    c.isFunction = function (a) {
      return "function" === typeof a;
    };

    b.jQuery && (b.jQuery.fn.highcharts = function () {
      var a = [].slice.call(arguments);
      if (this[0]) return a[0] ? (new c[F(a[0]) ? a.shift() : "Chart"](this[0], a[0], a[1]), this) : q[H(this[0], "data-highcharts-chart")];
    });
    return {
      arrayMax: function arrayMax(a) {
        for (var b = a.length, e = a[0]; b--;) {
          a[b] > e && (e = a[b]);
        }

        return e;
      },
      arrayMin: function arrayMin(a) {
        for (var b = a.length, e = a[0]; b--;) {
          a[b] < e && (e = a[b]);
        }

        return e;
      },
      attr: H,
      defined: C,
      destroyObjectProperties: function destroyObjectProperties(a, b) {
        n(a, function (d, l) {
          d && d !== b && d.destroy && d.destroy();
          delete a[l];
        });
      },
      discardElement: function discardElement(a) {
        var b = c.garbageBin;
        b || (b = c.createElement("div"));
        a && b.appendChild(a);
        b.innerHTML = "";
      },
      erase: function erase(a, b) {
        for (var d = a.length; d--;) {
          if (a[d] === b) {
            a.splice(d, 1);
            break;
          }
        }
      },
      extend: y,
      isArray: G,
      isClass: t,
      isDOMElement: B,
      isNumber: v,
      isObject: z,
      isString: F,
      objectEach: n,
      pick: h,
      pInt: f,
      setAnimation: function setAnimation(a, b) {
        b.renderer.globalAnimation = h(a, b.options.chart.animation, !0);
      },
      splat: function splat(a) {
        return G(a) ? a : [a];
      },
      syncTimeout: function syncTimeout(a, b, e) {
        if (0 < b) return setTimeout(a, b, e);
        a.call(0, e);
        return -1;
      }
    };
  });
  M(I, "parts/Color.js", [I["parts/Globals.js"], I["parts/Utilities.js"]], function (c, f) {
    var F = f.isNumber,
        G = f.pInt,
        z = c.merge;

    c.Color = function (f) {
      if (!(this instanceof c.Color)) return new c.Color(f);
      this.init(f);
    };

    c.Color.prototype = {
      parsers: [{
        regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
        parse: function parse(c) {
          return [G(c[1]), G(c[2]), G(c[3]), parseFloat(c[4], 10)];
        }
      }, {
        regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
        parse: function parse(c) {
          return [G(c[1]), G(c[2]), G(c[3]), 1];
        }
      }],
      names: {
        white: "#ffffff",
        black: "#000000"
      },
      init: function init(f) {
        var t, v;
        if ((this.input = f = this.names[f && f.toLowerCase ? f.toLowerCase() : ""] || f) && f.stops) this.stops = f.stops.map(function (f) {
          return new c.Color(f[1]);
        });else {
          if (f && f.charAt && "#" === f.charAt()) {
            var C = f.length;
            f = parseInt(f.substr(1), 16);
            7 === C ? t = [(f & 16711680) >> 16, (f & 65280) >> 8, f & 255, 1] : 4 === C && (t = [(f & 3840) >> 4 | (f & 3840) >> 8, (f & 240) >> 4 | f & 240, (f & 15) << 4 | f & 15, 1]);
          }

          if (!t) for (v = this.parsers.length; v-- && !t;) {
            var B = this.parsers[v];
            (C = B.regex.exec(f)) && (t = B.parse(C));
          }
        }
        this.rgba = t || [];
      },
      get: function get(c) {
        var f = this.input,
            v = this.rgba;

        if (this.stops) {
          var C = z(f);
          C.stops = [].concat(C.stops);
          this.stops.forEach(function (f, v) {
            C.stops[v] = [C.stops[v][0], f.get(c)];
          });
        } else C = v && F(v[0]) ? "rgb" === c || !c && 1 === v[3] ? "rgb(" + v[0] + "," + v[1] + "," + v[2] + ")" : "a" === c ? v[3] : "rgba(" + v.join(",") + ")" : f;

        return C;
      },
      brighten: function brighten(c) {
        var f,
            v = this.rgba;
        if (this.stops) this.stops.forEach(function (f) {
          f.brighten(c);
        });else if (F(c) && 0 !== c) for (f = 0; 3 > f; f++) {
          v[f] += G(255 * c), 0 > v[f] && (v[f] = 0), 255 < v[f] && (v[f] = 255);
        }
        return this;
      },
      setOpacity: function setOpacity(c) {
        this.rgba[3] = c;
        return this;
      },
      tweenTo: function tweenTo(c, f) {
        var v = this.rgba,
            t = c.rgba;
        t.length && v && v.length ? (c = 1 !== t[3] || 1 !== v[3], f = (c ? "rgba(" : "rgb(") + Math.round(t[0] + (v[0] - t[0]) * (1 - f)) + "," + Math.round(t[1] + (v[1] - t[1]) * (1 - f)) + "," + Math.round(t[2] + (v[2] - t[2]) * (1 - f)) + (c ? "," + (t[3] + (v[3] - t[3]) * (1 - f)) : "") + ")") : f = c.input || "none";
        return f;
      }
    };

    c.color = function (f) {
      return new c.Color(f);
    };
  });
  M(I, "parts/SvgRenderer.js", [I["parts/Globals.js"], I["parts/Utilities.js"]], function (c, f) {
    var F = f.attr,
        G = f.defined,
        z = f.destroyObjectProperties,
        B = f.erase,
        t = f.extend,
        v = f.isArray,
        C = f.isNumber,
        H = f.isObject,
        y = f.isString,
        h = f.objectEach,
        n = f.pick,
        q = f.pInt,
        g = f.splat,
        b = c.addEvent,
        a = c.animate,
        d = c.charts,
        e = c.color,
        l = c.css,
        L = c.createElement,
        E = c.deg2rad,
        p = c.doc,
        u = c.hasTouch,
        k = c.isFirefox,
        r = c.isMS,
        x = c.isWebKit,
        A = c.merge,
        w = c.noop,
        m = c.removeEvent,
        K = c.stop,
        J = c.svg,
        U = c.SVG_NS,
        S = c.symbolSizes,
        Q = c.win;

    var O = c.SVGElement = function () {
      return this;
    };

    t(O.prototype, {
      opacity: 1,
      SVG_NS: U,
      textProps: "direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline cursor".split(" "),
      init: function init(a, b) {
        this.element = "span" === b ? L(b) : p.createElementNS(this.SVG_NS, b);
        this.renderer = a;
        c.fireEvent(this, "afterInit");
      },
      animate: function animate(b, d, m) {
        var D = c.animObject(n(d, this.renderer.globalAnimation, !0));
        n(p.hidden, p.msHidden, p.webkitHidden, !1) && (D.duration = 0);
        0 !== D.duration ? (m && (D.complete = m), a(this, b, D)) : (this.attr(b, void 0, m), h(b, function (a, b) {
          D.step && D.step.call(this, a, {
            prop: b,
            pos: 1
          });
        }, this));
        return this;
      },
      complexColor: function complexColor(a, b, d) {
        var D = this.renderer,
            m,
            e,
            w,
            N,
            k,
            l,
            g,
            r,
            x,
            p,
            K,
            J = [],
            T;
        c.fireEvent(this.renderer, "complexColor", {
          args: arguments
        }, function () {
          a.radialGradient ? e = "radialGradient" : a.linearGradient && (e = "linearGradient");
          e && (w = a[e], k = D.gradients, g = a.stops, p = d.radialReference, v(w) && (a[e] = w = {
            x1: w[0],
            y1: w[1],
            x2: w[2],
            y2: w[3],
            gradientUnits: "userSpaceOnUse"
          }), "radialGradient" === e && p && !G(w.gradientUnits) && (N = w, w = A(w, D.getRadialAttr(p, N), {
            gradientUnits: "userSpaceOnUse"
          })), h(w, function (a, b) {
            "id" !== b && J.push(b, a);
          }), h(g, function (a) {
            J.push(a);
          }), J = J.join(","), k[J] ? K = k[J].attr("id") : (w.id = K = c.uniqueKey(), k[J] = l = D.createElement(e).attr(w).add(D.defs), l.radAttr = N, l.stops = [], g.forEach(function (a) {
            0 === a[1].indexOf("rgba") ? (m = c.color(a[1]), r = m.get("rgb"), x = m.get("a")) : (r = a[1], x = 1);
            a = D.createElement("stop").attr({
              offset: a[0],
              "stop-color": r,
              "stop-opacity": x
            }).add(l);
            l.stops.push(a);
          })), T = "url(" + D.url + "#" + K + ")", d.setAttribute(b, T), d.gradient = J, a.toString = function () {
            return T;
          });
        });
      },
      applyTextOutline: function applyTextOutline(a) {
        var b = this.element,
            D;
        -1 !== a.indexOf("contrast") && (a = a.replace(/contrast/g, this.renderer.getContrast(b.style.fill)));
        a = a.split(" ");
        var d = a[a.length - 1];

        if ((D = a[0]) && "none" !== D && c.svg) {
          this.fakeTS = !0;
          a = [].slice.call(b.getElementsByTagName("tspan"));
          this.ySetter = this.xSetter;
          D = D.replace(/(^[\d\.]+)(.*?)$/g, function (a, b, D) {
            return 2 * b + D;
          });
          this.removeTextOutline(a);
          var m = b.firstChild;
          a.forEach(function (a, e) {
            0 === e && (a.setAttribute("x", b.getAttribute("x")), e = b.getAttribute("y"), a.setAttribute("y", e || 0), null === e && b.setAttribute("y", 0));
            a = a.cloneNode(1);
            F(a, {
              "class": "highcharts-text-outline",
              fill: d,
              stroke: d,
              "stroke-width": D,
              "stroke-linejoin": "round"
            });
            b.insertBefore(a, m);
          });
        }
      },
      removeTextOutline: function removeTextOutline(a) {
        for (var b = a.length, D; b--;) {
          D = a[b], "highcharts-text-outline" === D.getAttribute("class") && B(a, this.element.removeChild(D));
        }
      },
      symbolCustomAttribs: "x y width height r start end innerR anchorX anchorY rounded".split(" "),
      attr: function attr(a, b, d, e) {
        var D = this.element,
            m,
            w = this,
            N,
            k,
            l = this.symbolCustomAttribs;

        if ("string" === typeof a && void 0 !== b) {
          var g = a;
          a = {};
          a[g] = b;
        }

        "string" === typeof a ? w = (this[a + "Getter"] || this._defaultGetter).call(this, a, D) : (h(a, function (b, d) {
          N = !1;
          e || K(this, d);
          this.symbolName && -1 !== c.inArray(d, l) && (m || (this.symbolAttr(a), m = !0), N = !0);
          !this.rotation || "x" !== d && "y" !== d || (this.doTransform = !0);
          N || (k = this[d + "Setter"] || this._defaultSetter, k.call(this, b, d, D), !this.styledMode && this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(d) && this.updateShadows(d, b, k));
        }, this), this.afterSetters());
        d && d.call(this);
        return w;
      },
      afterSetters: function afterSetters() {
        this.doTransform && (this.updateTransform(), this.doTransform = !1);
      },
      updateShadows: function updateShadows(a, b, d) {
        for (var D = this.shadows, e = D.length; e--;) {
          d.call(D[e], "height" === a ? Math.max(b - (D[e].cutHeight || 0), 0) : "d" === a ? this.d : b, a, D[e]);
        }
      },
      addClass: function addClass(a, b) {
        var D = b ? "" : this.attr("class") || "";
        a = (a || "").split(/ /g).reduce(function (a, b) {
          -1 === D.indexOf(b) && a.push(b);
          return a;
        }, D ? [D] : []).join(" ");
        a !== D && this.attr("class", a);
        return this;
      },
      hasClass: function hasClass(a) {
        return -1 !== (this.attr("class") || "").split(" ").indexOf(a);
      },
      removeClass: function removeClass(a) {
        return this.attr("class", (this.attr("class") || "").replace(y(a) ? new RegExp(" ?" + a + " ?") : a, ""));
      },
      symbolAttr: function symbolAttr(a) {
        var b = this;
        "x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function (D) {
          b[D] = n(a[D], b[D]);
        });
        b.attr({
          d: b.renderer.symbols[b.symbolName](b.x, b.y, b.width, b.height, b)
        });
      },
      clip: function clip(a) {
        return this.attr("clip-path", a ? "url(" + this.renderer.url + "#" + a.id + ")" : "none");
      },
      crisp: function crisp(a, b) {
        b = b || a.strokeWidth || 0;
        var D = Math.round(b) % 2 / 2;
        a.x = Math.floor(a.x || this.x || 0) + D;
        a.y = Math.floor(a.y || this.y || 0) + D;
        a.width = Math.floor((a.width || this.width || 0) - 2 * D);
        a.height = Math.floor((a.height || this.height || 0) - 2 * D);
        G(a.strokeWidth) && (a.strokeWidth = b);
        return a;
      },
      css: function css(a) {
        var b = this.styles,
            D = {},
            d = this.element,
            e = "",
            m = !b,
            w = ["textOutline", "textOverflow", "width"];
        a && a.color && (a.fill = a.color);
        b && h(a, function (a, d) {
          a !== b[d] && (D[d] = a, m = !0);
        });

        if (m) {
          b && (a = t(b, D));
          if (a) if (null === a.width || "auto" === a.width) delete this.textWidth;else if ("text" === d.nodeName.toLowerCase() && a.width) var k = this.textWidth = q(a.width);
          this.styles = a;
          k && !J && this.renderer.forExport && delete a.width;

          if (d.namespaceURI === this.SVG_NS) {
            var g = function g(a, b) {
              return "-" + b.toLowerCase();
            };

            h(a, function (a, b) {
              -1 === w.indexOf(b) && (e += b.replace(/([A-Z])/g, g) + ":" + a + ";");
            });
            e && F(d, "style", e);
          } else l(d, a);

          this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), a && a.textOutline && this.applyTextOutline(a.textOutline));
        }

        return this;
      },
      getStyle: function getStyle(a) {
        return Q.getComputedStyle(this.element || this, "").getPropertyValue(a);
      },
      strokeWidth: function strokeWidth() {
        if (!this.renderer.styledMode) return this["stroke-width"] || 0;
        var a = this.getStyle("stroke-width");
        if (a.indexOf("px") === a.length - 2) a = q(a);else {
          var b = p.createElementNS(U, "rect");
          F(b, {
            width: a,
            "stroke-width": 0
          });
          this.element.parentNode.appendChild(b);
          a = b.getBBox().width;
          b.parentNode.removeChild(b);
        }
        return a;
      },
      on: function on(a, b) {
        var d = this,
            D = d.element;
        u && "click" === a ? (D.ontouchstart = function (a) {
          d.touchEventFired = Date.now();
          a.preventDefault();
          b.call(D, a);
        }, D.onclick = function (a) {
          (-1 === Q.navigator.userAgent.indexOf("Android") || 1100 < Date.now() - (d.touchEventFired || 0)) && b.call(D, a);
        }) : D["on" + a] = b;
        return this;
      },
      setRadialReference: function setRadialReference(a) {
        var b = this.renderer.gradients[this.element.gradient];
        this.element.radialReference = a;
        b && b.radAttr && b.animate(this.renderer.getRadialAttr(a, b.radAttr));
        return this;
      },
      translate: function translate(a, b) {
        return this.attr({
          translateX: a,
          translateY: b
        });
      },
      invert: function invert(a) {
        this.inverted = a;
        this.updateTransform();
        return this;
      },
      updateTransform: function updateTransform() {
        var a = this.translateX || 0,
            b = this.translateY || 0,
            d = this.scaleX,
            e = this.scaleY,
            m = this.inverted,
            w = this.rotation,
            k = this.matrix,
            l = this.element;
        m && (a += this.width, b += this.height);
        a = ["translate(" + a + "," + b + ")"];
        G(k) && a.push("matrix(" + k.join(",") + ")");
        m ? a.push("rotate(90) scale(-1,1)") : w && a.push("rotate(" + w + " " + n(this.rotationOriginX, l.getAttribute("x"), 0) + " " + n(this.rotationOriginY, l.getAttribute("y") || 0) + ")");
        (G(d) || G(e)) && a.push("scale(" + n(d, 1) + " " + n(e, 1) + ")");
        a.length && l.setAttribute("transform", a.join(" "));
      },
      toFront: function toFront() {
        var a = this.element;
        a.parentNode.appendChild(a);
        return this;
      },
      align: function align(a, b, d) {
        var e,
            m = {};
        var D = this.renderer;
        var w = D.alignedObjects;
        var k, l;

        if (a) {
          if (this.alignOptions = a, this.alignByTranslate = b, !d || y(d)) this.alignTo = e = d || "renderer", B(w, this), w.push(this), d = null;
        } else a = this.alignOptions, b = this.alignByTranslate, e = this.alignTo;

        d = n(d, D[e], D);
        e = a.align;
        D = a.verticalAlign;
        w = (d.x || 0) + (a.x || 0);
        var N = (d.y || 0) + (a.y || 0);
        "right" === e ? k = 1 : "center" === e && (k = 2);
        k && (w += (d.width - (a.width || 0)) / k);
        m[b ? "translateX" : "x"] = Math.round(w);
        "bottom" === D ? l = 1 : "middle" === D && (l = 2);
        l && (N += (d.height - (a.height || 0)) / l);
        m[b ? "translateY" : "y"] = Math.round(N);
        this[this.placed ? "animate" : "attr"](m);
        this.placed = !0;
        this.alignAttr = m;
        return this;
      },
      getBBox: function getBBox(a, b) {
        var d,
            e = this.renderer,
            m = this.element,
            D = this.styles,
            w = this.textStr,
            k,
            l = e.cache,
            N = e.cacheKeys,
            g = m.namespaceURI === this.SVG_NS;
        b = n(b, this.rotation, 0);
        var r = e.styledMode ? m && O.prototype.getStyle.call(m, "font-size") : D && D.fontSize;

        if (G(w)) {
          var c = w.toString();
          -1 === c.indexOf("<") && (c = c.replace(/[0-9]/g, "0"));
          c += ["", b, r, this.textWidth, D && D.textOverflow].join();
        }

        c && !a && (d = l[c]);

        if (!d) {
          if (g || e.forExport) {
            try {
              (k = this.fakeTS && function (a) {
                [].forEach.call(m.querySelectorAll(".highcharts-text-outline"), function (b) {
                  b.style.display = a;
                });
              }) && k("none"), d = m.getBBox ? t({}, m.getBBox()) : {
                width: m.offsetWidth,
                height: m.offsetHeight
              }, k && k("");
            } catch (aa) {
              "";
            }

            if (!d || 0 > d.width) d = {
              width: 0,
              height: 0
            };
          } else d = this.htmlGetBBox();

          e.isSVG && (a = d.width, e = d.height, g && (d.height = e = {
            "11px,17": 14,
            "13px,20": 16
          }[D && D.fontSize + "," + Math.round(e)] || e), b && (D = b * E, d.width = Math.abs(e * Math.sin(D)) + Math.abs(a * Math.cos(D)), d.height = Math.abs(e * Math.cos(D)) + Math.abs(a * Math.sin(D))));

          if (c && 0 < d.height) {
            for (; 250 < N.length;) {
              delete l[N.shift()];
            }

            l[c] || N.push(c);
            l[c] = d;
          }
        }

        return d;
      },
      show: function show(a) {
        return this.attr({
          visibility: a ? "inherit" : "visible"
        });
      },
      hide: function hide(a) {
        a ? this.attr({
          y: -9999
        }) : this.attr({
          visibility: "hidden"
        });
        return this;
      },
      fadeOut: function fadeOut(a) {
        var b = this;
        b.animate({
          opacity: 0
        }, {
          duration: a || 150,
          complete: function complete() {
            b.attr({
              y: -9999
            });
          }
        });
      },
      add: function add(a) {
        var b = this.renderer,
            d = this.element;
        a && (this.parentGroup = a);
        this.parentInverted = a && a.inverted;
        void 0 !== this.textStr && b.buildText(this);
        this.added = !0;
        if (!a || a.handleZ || this.zIndex) var e = this.zIndexSetter();
        e || (a ? a.element : b.box).appendChild(d);
        if (this.onAdd) this.onAdd();
        return this;
      },
      safeRemoveChild: function safeRemoveChild(a) {
        var b = a.parentNode;
        b && b.removeChild(a);
      },
      destroy: function destroy() {
        var a = this,
            b = a.element || {},
            d = a.renderer,
            e = d.isSVG && "SPAN" === b.nodeName && a.parentGroup,
            m = b.ownerSVGElement,
            w = a.clipPath;
        b.onclick = b.onmouseout = b.onmouseover = b.onmousemove = b.point = null;
        K(a);
        w && m && ([].forEach.call(m.querySelectorAll("[clip-path],[CLIP-PATH]"), function (a) {
          -1 < a.getAttribute("clip-path").indexOf(w.element.id) && a.removeAttribute("clip-path");
        }), a.clipPath = w.destroy());

        if (a.stops) {
          for (m = 0; m < a.stops.length; m++) {
            a.stops[m] = a.stops[m].destroy();
          }

          a.stops = null;
        }

        a.safeRemoveChild(b);

        for (d.styledMode || a.destroyShadows(); e && e.div && 0 === e.div.childNodes.length;) {
          b = e.parentGroup, a.safeRemoveChild(e.div), delete e.div, e = b;
        }

        a.alignTo && B(d.alignedObjects, a);
        h(a, function (b, d) {
          a[d] && a[d].parentGroup === a && a[d].destroy && a[d].destroy();
          delete a[d];
        });
      },
      shadow: function shadow(a, b, d) {
        var e = [],
            m,
            w = this.element;
        if (!a) this.destroyShadows();else if (!this.shadows) {
          var D = n(a.width, 3);
          var k = (a.opacity || .15) / D;
          var l = this.parentInverted ? "(-1,-1)" : "(" + n(a.offsetX, 1) + ", " + n(a.offsetY, 1) + ")";

          for (m = 1; m <= D; m++) {
            var g = w.cloneNode(0);
            var r = 2 * D + 1 - 2 * m;
            F(g, {
              stroke: a.color || "#000000",
              "stroke-opacity": k * m,
              "stroke-width": r,
              transform: "translate" + l,
              fill: "none"
            });
            g.setAttribute("class", (g.getAttribute("class") || "") + " highcharts-shadow");
            d && (F(g, "height", Math.max(F(g, "height") - r, 0)), g.cutHeight = r);
            b ? b.element.appendChild(g) : w.parentNode && w.parentNode.insertBefore(g, w);
            e.push(g);
          }

          this.shadows = e;
        }
        return this;
      },
      destroyShadows: function destroyShadows() {
        (this.shadows || []).forEach(function (a) {
          this.safeRemoveChild(a);
        }, this);
        this.shadows = void 0;
      },
      xGetter: function xGetter(a) {
        "circle" === this.element.nodeName && ("x" === a ? a = "cx" : "y" === a && (a = "cy"));
        return this._defaultGetter(a);
      },
      _defaultGetter: function _defaultGetter(a) {
        a = n(this[a + "Value"], this[a], this.element ? this.element.getAttribute(a) : null, 0);
        /^[\-0-9\.]+$/.test(a) && (a = parseFloat(a));
        return a;
      },
      dSetter: function dSetter(a, b, d) {
        a && a.join && (a = a.join(" "));
        /(NaN| {2}|^$)/.test(a) && (a = "M 0 0");
        this[b] !== a && (d.setAttribute(b, a), this[b] = a);
      },
      dashstyleSetter: function dashstyleSetter(a) {
        var b,
            d = this["stroke-width"];
        "inherit" === d && (d = 1);

        if (a = a && a.toLowerCase()) {
          a = a.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");

          for (b = a.length; b--;) {
            a[b] = q(a[b]) * d;
          }

          a = a.join(",").replace(/NaN/g, "none");
          this.element.setAttribute("stroke-dasharray", a);
        }
      },
      alignSetter: function alignSetter(a) {
        var b = {
          left: "start",
          center: "middle",
          right: "end"
        };
        b[a] && (this.alignValue = a, this.element.setAttribute("text-anchor", b[a]));
      },
      opacitySetter: function opacitySetter(a, b, d) {
        this[b] = a;
        d.setAttribute(b, a);
      },
      titleSetter: function titleSetter(a) {
        var b = this.element.getElementsByTagName("title")[0];
        b || (b = p.createElementNS(this.SVG_NS, "title"), this.element.appendChild(b));
        b.firstChild && b.removeChild(b.firstChild);
        b.appendChild(p.createTextNode(String(n(a, "")).replace(/<[^>]*>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">")));
      },
      textSetter: function textSetter(a) {
        a !== this.textStr && (delete this.bBox, delete this.textPxLength, this.textStr = a, this.added && this.renderer.buildText(this));
      },
      setTextPath: function setTextPath(a, b) {
        var d = this.element,
            e = {
          textAnchor: "text-anchor"
        },
            m = !1,
            D = this.textPathWrapper,
            k = !D;
        b = A(!0, {
          enabled: !0,
          attributes: {
            dy: -5,
            startOffset: "50%",
            textAnchor: "middle"
          }
        }, b);
        var l = b.attributes;

        if (a && b && b.enabled) {
          this.options && this.options.padding && (l.dx = -this.options.padding);
          D || (this.textPathWrapper = D = this.renderer.createElement("textPath"), m = !0);
          var g = D.element;
          (b = a.element.getAttribute("id")) || a.element.setAttribute("id", b = c.uniqueKey());
          if (k) for (a = d.getElementsByTagName("tspan"); a.length;) {
            a[0].setAttribute("y", 0), g.appendChild(a[0]);
          }
          m && D.add({
            element: this.text ? this.text.element : d
          });
          g.setAttributeNS("http://www.w3.org/1999/xlink", "href", this.renderer.url + "#" + b);
          G(l.dy) && (g.parentNode.setAttribute("dy", l.dy), delete l.dy);
          G(l.dx) && (g.parentNode.setAttribute("dx", l.dx), delete l.dx);
          h(l, function (a, b) {
            g.setAttribute(e[b] || b, a);
          });
          d.removeAttribute("transform");
          this.removeTextOutline.call(D, [].slice.call(d.getElementsByTagName("tspan")));
          this.text && !this.renderer.styledMode && this.attr({
            fill: "none",
            "stroke-width": 0
          });
          this.applyTextOutline = this.updateTransform = w;
        } else D && (delete this.updateTransform, delete this.applyTextOutline, this.destroyTextPath(d, a));

        return this;
      },
      destroyTextPath: function destroyTextPath(a, b) {
        var d;
        b.element.setAttribute("id", "");

        for (d = this.textPathWrapper.element.childNodes; d.length;) {
          a.firstChild.appendChild(d[0]);
        }

        a.firstChild.removeChild(this.textPathWrapper.element);
        delete b.textPathWrapper;
      },
      fillSetter: function fillSetter(a, b, d) {
        "string" === typeof a ? d.setAttribute(b, a) : a && this.complexColor(a, b, d);
      },
      visibilitySetter: function visibilitySetter(a, b, d) {
        "inherit" === a ? d.removeAttribute(b) : this[b] !== a && d.setAttribute(b, a);
        this[b] = a;
      },
      zIndexSetter: function zIndexSetter(a, b) {
        var d = this.renderer,
            e = this.parentGroup,
            m = (e || d).element || d.box,
            w = this.element,
            k = !1;
        d = m === d.box;
        var D = this.added;
        var l;
        G(a) ? (w.setAttribute("data-z-index", a), a = +a, this[b] === a && (D = !1)) : G(this[b]) && w.removeAttribute("data-z-index");
        this[b] = a;

        if (D) {
          (a = this.zIndex) && e && (e.handleZ = !0);
          b = m.childNodes;

          for (l = b.length - 1; 0 <= l && !k; l--) {
            e = b[l];
            D = e.getAttribute("data-z-index");
            var g = !G(D);
            if (e !== w) if (0 > a && g && !d && !l) m.insertBefore(w, b[l]), k = !0;else if (q(D) <= a || g && (!G(a) || 0 <= a)) m.insertBefore(w, b[l + 1] || null), k = !0;
          }

          k || (m.insertBefore(w, b[d ? 3 : 0] || null), k = !0);
        }

        return k;
      },
      _defaultSetter: function _defaultSetter(a, b, d) {
        d.setAttribute(b, a);
      }
    });
    O.prototype.yGetter = O.prototype.xGetter;

    O.prototype.translateXSetter = O.prototype.translateYSetter = O.prototype.rotationSetter = O.prototype.verticalAlignSetter = O.prototype.rotationOriginXSetter = O.prototype.rotationOriginYSetter = O.prototype.scaleXSetter = O.prototype.scaleYSetter = O.prototype.matrixSetter = function (a, b) {
      this[b] = a;
      this.doTransform = !0;
    };

    O.prototype["stroke-widthSetter"] = O.prototype.strokeSetter = function (a, b, d) {
      this[b] = a;
      this.stroke && this["stroke-width"] ? (O.prototype.fillSetter.call(this, this.stroke, "stroke", d), d.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === b && 0 === a && this.hasStroke ? (d.removeAttribute("stroke"), this.hasStroke = !1) : this.renderer.styledMode && this["stroke-width"] && (d.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0);
    };

    f = c.SVGRenderer = function () {
      this.init.apply(this, arguments);
    };

    t(f.prototype, {
      Element: O,
      SVG_NS: U,
      init: function init(a, d, e, m, w, g, r) {
        var D = this.createElement("svg").attr({
          version: "1.1",
          "class": "highcharts-root"
        });
        r || D.css(this.getStyle(m));
        m = D.element;
        a.appendChild(m);
        F(a, "dir", "ltr");
        -1 === a.innerHTML.indexOf("xmlns") && F(m, "xmlns", this.SVG_NS);
        this.isSVG = !0;
        this.box = m;
        this.boxWrapper = D;
        this.alignedObjects = [];
        this.url = (k || x) && p.getElementsByTagName("base").length ? Q.location.href.split("#")[0].replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20") : "";
        this.createElement("desc").add().element.appendChild(p.createTextNode("Created with Highcharts 7.2.1"));
        this.defs = this.createElement("defs").add();
        this.allowHTML = g;
        this.forExport = w;
        this.styledMode = r;
        this.gradients = {};
        this.cache = {};
        this.cacheKeys = [];
        this.imgCount = 0;
        this.setSize(d, e, !1);
        var c;
        k && a.getBoundingClientRect && (d = function d() {
          l(a, {
            left: 0,
            top: 0
          });
          c = a.getBoundingClientRect();
          l(a, {
            left: Math.ceil(c.left) - c.left + "px",
            top: Math.ceil(c.top) - c.top + "px"
          });
        }, d(), this.unSubPixelFix = b(Q, "resize", d));
      },
      definition: function definition(a) {
        function b(a, e) {
          var m;
          g(a).forEach(function (a) {
            var w = d.createElement(a.tagName),
                k = {};
            h(a, function (a, b) {
              "tagName" !== b && "children" !== b && "textContent" !== b && (k[b] = a);
            });
            w.attr(k);
            w.add(e || d.defs);
            a.textContent && w.element.appendChild(p.createTextNode(a.textContent));
            b(a.children || [], w);
            m = w;
          });
          return m;
        }

        var d = this;
        return b(a);
      },
      getStyle: function getStyle(a) {
        return this.style = t({
          fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
          fontSize: "12px"
        }, a);
      },
      setStyle: function setStyle(a) {
        this.boxWrapper.css(this.getStyle(a));
      },
      isHidden: function isHidden() {
        return !this.boxWrapper.getBBox().width;
      },
      destroy: function destroy() {
        var a = this.defs;
        this.box = null;
        this.boxWrapper = this.boxWrapper.destroy();
        z(this.gradients || {});
        this.gradients = null;
        a && (this.defs = a.destroy());
        this.unSubPixelFix && this.unSubPixelFix();
        return this.alignedObjects = null;
      },
      createElement: function createElement(a) {
        var b = new this.Element();
        b.init(this, a);
        return b;
      },
      draw: w,
      getRadialAttr: function getRadialAttr(a, b) {
        return {
          cx: a[0] - a[2] / 2 + b.cx * a[2],
          cy: a[1] - a[2] / 2 + b.cy * a[2],
          r: b.r * a[2]
        };
      },
      truncate: function truncate(a, b, d, e, m, w, k) {
        var l = this,
            D = a.rotation,
            g,
            r = e ? 1 : 0,
            c = (d || e).length,
            x = c,
            J = [],
            K = function K(a) {
          b.firstChild && b.removeChild(b.firstChild);
          a && b.appendChild(p.createTextNode(a));
        },
            N = function N(w, D) {
          D = D || w;
          if (void 0 === J[D]) if (b.getSubStringLength) try {
            J[D] = m + b.getSubStringLength(0, e ? D + 1 : D);
          } catch (ba) {
            "";
          } else l.getSpanWidth && (K(k(d || e, w)), J[D] = m + l.getSpanWidth(a, b));
          return J[D];
        },
            A;

        a.rotation = 0;
        var h = N(b.textContent.length);

        if (A = m + h > w) {
          for (; r <= c;) {
            x = Math.ceil((r + c) / 2), e && (g = k(e, x)), h = N(x, g && g.length - 1), r === c ? r = c + 1 : h > w ? c = x - 1 : r = x;
          }

          0 === c ? K("") : d && c === d.length - 1 || K(g || k(d || e, x));
        }

        e && e.splice(0, x);
        a.actualWidth = h;
        a.rotation = D;
        return A;
      },
      escapes: {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;"
      },
      buildText: function buildText(a) {
        var b = a.element,
            d = this,
            e = d.forExport,
            m = n(a.textStr, "").toString(),
            w = -1 !== m.indexOf("<"),
            k = b.childNodes,
            D,
            g = F(b, "x"),
            r = a.styles,
            c = a.textWidth,
            x = r && r.lineHeight,
            K = r && r.textOutline,
            A = r && "ellipsis" === r.textOverflow,
            u = r && "nowrap" === r.whiteSpace,
            L = r && r.fontSize,
            E,
            f = k.length;
        r = c && !a.added && this.box;

        var S = function S(a) {
          var m;
          d.styledMode || (m = /(px|em)$/.test(a && a.style.fontSize) ? a.style.fontSize : L || d.style.fontSize || 12);
          return x ? q(x) : d.fontMetrics(m, a.getAttribute("style") ? a : b).h;
        },
            v = function v(a, b) {
          h(d.escapes, function (d, m) {
            b && -1 !== b.indexOf(d) || (a = a.toString().replace(new RegExp(d, "g"), m));
          });
          return a;
        },
            O = function O(a, b) {
          var d = a.indexOf("<");
          a = a.substring(d, a.indexOf(">") - d);
          d = a.indexOf(b + "=");
          if (-1 !== d && (d = d + b.length + 1, b = a.charAt(d), '"' === b || "'" === b)) return a = a.substring(d + 1), a.substring(0, a.indexOf(b));
        },
            Q = /<br.*?>/g;

        var t = [m, A, u, x, K, L, c].join();

        if (t !== a.textCache) {
          for (a.textCache = t; f--;) {
            b.removeChild(k[f]);
          }

          w || K || A || c || -1 !== m.indexOf(" ") && (!u || Q.test(m)) ? (r && r.appendChild(b), w ? (m = d.styledMode ? m.replace(/<(b|strong)>/g, '<span class="highcharts-strong">').replace(/<(i|em)>/g, '<span class="highcharts-emphasized">') : m.replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">'), m = m.replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(Q)) : m = [m], m = m.filter(function (a) {
            return "" !== a;
          }), m.forEach(function (m, w) {
            var k = 0,
                r = 0;
            m = m.replace(/^\s+|\s+$/g, "").replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
            var x = m.split("|||");
            x.forEach(function (m) {
              if ("" !== m || 1 === x.length) {
                var K = {},
                    N = p.createElementNS(d.SVG_NS, "tspan"),
                    h,
                    n;
                (h = O(m, "class")) && F(N, "class", h);
                if (h = O(m, "style")) h = h.replace(/(;| |^)color([ :])/, "$1fill$2"), F(N, "style", h);
                (n = O(m, "href")) && !e && (F(N, "onclick", 'location.href="' + n + '"'), F(N, "class", "highcharts-anchor"), d.styledMode || l(N, {
                  cursor: "pointer"
                }));
                m = v(m.replace(/<[a-zA-Z\/](.|\n)*?>/g, "") || " ");

                if (" " !== m) {
                  N.appendChild(p.createTextNode(m));
                  k ? K.dx = 0 : w && null !== g && (K.x = g);
                  F(N, K);
                  b.appendChild(N);
                  !k && E && (!J && e && l(N, {
                    display: "block"
                  }), F(N, "dy", S(N)));

                  if (c) {
                    var T = m.replace(/([^\^])-/g, "$1- ").split(" ");
                    K = !u && (1 < x.length || w || 1 < T.length);
                    n = 0;
                    var f = S(N);
                    if (A) D = d.truncate(a, N, m, void 0, 0, Math.max(0, c - parseInt(L || 12, 10)), function (a, b) {
                      return a.substring(0, b) + "\u2026";
                    });else if (K) for (; T.length;) {
                      T.length && !u && 0 < n && (N = p.createElementNS(U, "tspan"), F(N, {
                        dy: f,
                        x: g
                      }), h && F(N, "style", h), N.appendChild(p.createTextNode(T.join(" ").replace(/- /g, "-"))), b.appendChild(N)), d.truncate(a, N, null, T, 0 === n ? r : 0, c, function (a, b) {
                        return T.slice(0, b).join(" ").replace(/- /g, "-");
                      }), r = a.actualWidth, n++;
                    }
                  }

                  k++;
                }
              }
            });
            E = E || b.childNodes.length;
          }), A && D && a.attr("title", v(a.textStr, ["&lt;", "&gt;"])), r && r.removeChild(b), K && a.applyTextOutline && a.applyTextOutline(K)) : b.appendChild(p.createTextNode(v(m)));
        }
      },
      getContrast: function getContrast(a) {
        a = e(a).rgba;
        a[0] *= 1;
        a[1] *= 1.2;
        a[2] *= .5;
        return 459 < a[0] + a[1] + a[2] ? "#000000" : "#FFFFFF";
      },
      button: function button(a, d, m, e, w, k, l, g, c, x) {
        var D = this.label(a, d, m, c, null, null, x, null, "button"),
            p = 0,
            K = this.styledMode;
        D.attr(A({
          padding: 8,
          r: 2
        }, w));

        if (!K) {
          w = A({
            fill: "#f7f7f7",
            stroke: "#cccccc",
            "stroke-width": 1,
            style: {
              color: "#333333",
              cursor: "pointer",
              fontWeight: "normal"
            }
          }, w);
          var J = w.style;
          delete w.style;
          k = A(w, {
            fill: "#e6e6e6"
          }, k);
          var N = k.style;
          delete k.style;
          l = A(w, {
            fill: "#e6ebf5",
            style: {
              color: "#000000",
              fontWeight: "bold"
            }
          }, l);
          var h = l.style;
          delete l.style;
          g = A(w, {
            style: {
              color: "#cccccc"
            }
          }, g);
          var u = g.style;
          delete g.style;
        }

        b(D.element, r ? "mouseover" : "mouseenter", function () {
          3 !== p && D.setState(1);
        });
        b(D.element, r ? "mouseout" : "mouseleave", function () {
          3 !== p && D.setState(p);
        });

        D.setState = function (a) {
          1 !== a && (D.state = p = a);
          D.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + ["normal", "hover", "pressed", "disabled"][a || 0]);
          K || D.attr([w, k, l, g][a || 0]).css([J, N, h, u][a || 0]);
        };

        K || D.attr(w).css(t({
          cursor: "default"
        }, J));
        return D.on("click", function (a) {
          3 !== p && e.call(D, a);
        });
      },
      crispLine: function crispLine(a, b) {
        a[1] === a[4] && (a[1] = a[4] = Math.round(a[1]) - b % 2 / 2);
        a[2] === a[5] && (a[2] = a[5] = Math.round(a[2]) + b % 2 / 2);
        return a;
      },
      path: function path(a) {
        var b = this.styledMode ? {} : {
          fill: "none"
        };
        v(a) ? b.d = a : H(a) && t(b, a);
        return this.createElement("path").attr(b);
      },
      circle: function circle(a, b, d) {
        a = H(a) ? a : void 0 === a ? {} : {
          x: a,
          y: b,
          r: d
        };
        b = this.createElement("circle");

        b.xSetter = b.ySetter = function (a, b, d) {
          d.setAttribute("c" + b, a);
        };

        return b.attr(a);
      },
      arc: function arc(a, b, d, m, e, w) {
        H(a) ? (m = a, b = m.y, d = m.r, a = m.x) : m = {
          innerR: m,
          start: e,
          end: w
        };
        a = this.symbol("arc", a, b, d, d, m);
        a.r = d;
        return a;
      },
      rect: function rect(a, b, d, m, e, w) {
        e = H(a) ? a.r : e;
        var k = this.createElement("rect");
        a = H(a) ? a : void 0 === a ? {} : {
          x: a,
          y: b,
          width: Math.max(d, 0),
          height: Math.max(m, 0)
        };
        this.styledMode || (void 0 !== w && (a.strokeWidth = w, a = k.crisp(a)), a.fill = "none");
        e && (a.r = e);

        k.rSetter = function (a, b, d) {
          k.r = a;
          F(d, {
            rx: a,
            ry: a
          });
        };

        k.rGetter = function () {
          return k.r;
        };

        return k.attr(a);
      },
      setSize: function setSize(a, b, d) {
        var m = this.alignedObjects,
            e = m.length;
        this.width = a;
        this.height = b;

        for (this.boxWrapper.animate({
          width: a,
          height: b
        }, {
          step: function step() {
            this.attr({
              viewBox: "0 0 " + this.attr("width") + " " + this.attr("height")
            });
          },
          duration: n(d, !0) ? void 0 : 0
        }); e--;) {
          m[e].align();
        }
      },
      g: function g(a) {
        var b = this.createElement("g");
        return a ? b.attr({
          "class": "highcharts-" + a
        }) : b;
      },
      image: function image(a, d, m, e, w, k) {
        var l = {
          preserveAspectRatio: "none"
        },
            g = function g(a, b) {
          a.setAttributeNS ? a.setAttributeNS("http://www.w3.org/1999/xlink", "href", b) : a.setAttribute("hc-svg-href", b);
        },
            r = function r(b) {
          g(c.element, a);
          k.call(c, b);
        };

        1 < arguments.length && t(l, {
          x: d,
          y: m,
          width: e,
          height: w
        });
        var c = this.createElement("image").attr(l);
        k ? (g(c.element, "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="), l = new Q.Image(), b(l, "load", r), l.src = a, l.complete && r({})) : g(c.element, a);
        return c;
      },
      symbol: function symbol(a, b, m, e, w, k) {
        var g = this,
            r = /^url\((.*?)\)$/,
            c = r.test(a),
            D = !c && (this.symbols[a] ? a : "circle"),
            x = D && this.symbols[D],
            K = G(b) && x && x.call(this.symbols, Math.round(b), Math.round(m), e, w, k);

        if (x) {
          var J = this.path(K);
          g.styledMode || J.attr("fill", "none");
          t(J, {
            symbolName: D,
            x: b,
            y: m,
            width: e,
            height: w
          });
          k && t(J, k);
        } else if (c) {
          var A = a.match(r)[1];
          J = this.image(A);
          J.imgwidth = n(S[A] && S[A].width, k && k.width);
          J.imgheight = n(S[A] && S[A].height, k && k.height);

          var h = function h() {
            J.attr({
              width: J.width,
              height: J.height
            });
          };

          ["width", "height"].forEach(function (a) {
            J[a + "Setter"] = function (a, b) {
              var d = {},
                  m = this["img" + b],
                  e = "width" === b ? "translateX" : "translateY";
              this[b] = a;
              G(m) && (k && "within" === k.backgroundSize && this.width && this.height && (m = Math.round(m * Math.min(this.width / this.imgwidth, this.height / this.imgheight))), this.element && this.element.setAttribute(b, m), this.alignByTranslate || (d[e] = ((this[b] || 0) - m) / 2, this.attr(d)));
            };
          });
          G(b) && J.attr({
            x: b,
            y: m
          });
          J.isImg = !0;
          G(J.imgwidth) && G(J.imgheight) ? h() : (J.attr({
            width: 0,
            height: 0
          }), L("img", {
            onload: function onload() {
              var a = d[g.chartIndex];
              0 === this.width && (l(this, {
                position: "absolute",
                top: "-999em"
              }), p.body.appendChild(this));
              S[A] = {
                width: this.width,
                height: this.height
              };
              J.imgwidth = this.width;
              J.imgheight = this.height;
              J.element && h();
              this.parentNode && this.parentNode.removeChild(this);
              g.imgCount--;
              if (!g.imgCount && a && a.onload) a.onload();
            },
            src: A
          }), this.imgCount++);
        }

        return J;
      },
      symbols: {
        circle: function circle(a, b, d, m) {
          return this.arc(a + d / 2, b + m / 2, d / 2, m / 2, {
            start: .5 * Math.PI,
            end: 2.5 * Math.PI,
            open: !1
          });
        },
        square: function square(a, b, d, m) {
          return ["M", a, b, "L", a + d, b, a + d, b + m, a, b + m, "Z"];
        },
        triangle: function triangle(a, b, d, m) {
          return ["M", a + d / 2, b, "L", a + d, b + m, a, b + m, "Z"];
        },
        "triangle-down": function triangleDown(a, b, d, m) {
          return ["M", a, b, "L", a + d, b, a + d / 2, b + m, "Z"];
        },
        diamond: function diamond(a, b, d, m) {
          return ["M", a + d / 2, b, "L", a + d, b + m / 2, a + d / 2, b + m, a, b + m / 2, "Z"];
        },
        arc: function arc(a, b, d, m, e) {
          var w = e.start,
              k = e.r || d,
              l = e.r || m || d,
              g = e.end - .001;
          d = e.innerR;
          m = n(e.open, .001 > Math.abs(e.end - e.start - 2 * Math.PI));
          var r = Math.cos(w),
              c = Math.sin(w),
              x = Math.cos(g);
          g = Math.sin(g);
          w = .001 > e.end - w - Math.PI ? 0 : 1;
          e = ["M", a + k * r, b + l * c, "A", k, l, 0, w, n(e.clockwise, 1), a + k * x, b + l * g];
          G(d) && e.push(m ? "M" : "L", a + d * x, b + d * g, "A", d, d, 0, w, 0, a + d * r, b + d * c);
          e.push(m ? "" : "Z");
          return e;
        },
        callout: function callout(a, b, d, m, e) {
          var w = Math.min(e && e.r || 0, d, m),
              k = w + 6,
              l = e && e.anchorX;
          e = e && e.anchorY;
          var g = ["M", a + w, b, "L", a + d - w, b, "C", a + d, b, a + d, b, a + d, b + w, "L", a + d, b + m - w, "C", a + d, b + m, a + d, b + m, a + d - w, b + m, "L", a + w, b + m, "C", a, b + m, a, b + m, a, b + m - w, "L", a, b + w, "C", a, b, a, b, a + w, b];
          l && l > d ? e > b + k && e < b + m - k ? g.splice(13, 3, "L", a + d, e - 6, a + d + 6, e, a + d, e + 6, a + d, b + m - w) : g.splice(13, 3, "L", a + d, m / 2, l, e, a + d, m / 2, a + d, b + m - w) : l && 0 > l ? e > b + k && e < b + m - k ? g.splice(33, 3, "L", a, e + 6, a - 6, e, a, e - 6, a, b + w) : g.splice(33, 3, "L", a, m / 2, l, e, a, m / 2, a, b + w) : e && e > m && l > a + k && l < a + d - k ? g.splice(23, 3, "L", l + 6, b + m, l, b + m + 6, l - 6, b + m, a + w, b + m) : e && 0 > e && l > a + k && l < a + d - k && g.splice(3, 3, "L", l - 6, b, l, b - 6, l + 6, b, d - w, b);
          return g;
        }
      },
      clipRect: function clipRect(a, b, d, m) {
        var e = c.uniqueKey() + "-",
            w = this.createElement("clipPath").attr({
          id: e
        }).add(this.defs);
        a = this.rect(a, b, d, m, 0).add(w);
        a.id = e;
        a.clipPath = w;
        a.count = 0;
        return a;
      },
      text: function text(a, b, d, m) {
        var e = {};
        if (m && (this.allowHTML || !this.forExport)) return this.html(a, b, d);
        e.x = Math.round(b || 0);
        d && (e.y = Math.round(d));
        G(a) && (e.text = a);
        a = this.createElement("text").attr(e);
        m || (a.xSetter = function (a, b, d) {
          var m = d.getElementsByTagName("tspan"),
              e = d.getAttribute(b),
              w;

          for (w = 0; w < m.length; w++) {
            var k = m[w];
            k.getAttribute(b) === e && k.setAttribute(b, a);
          }

          d.setAttribute(b, a);
        });
        return a;
      },
      fontMetrics: function fontMetrics(a, b) {
        a = !this.styledMode && /px/.test(a) || !Q.getComputedStyle ? a || b && b.style && b.style.fontSize || this.style && this.style.fontSize : b && O.prototype.getStyle.call(b, "font-size");
        a = /px/.test(a) ? q(a) : 12;
        b = 24 > a ? a + 3 : Math.round(1.2 * a);
        return {
          h: b,
          b: Math.round(.8 * b),
          f: a
        };
      },
      rotCorr: function rotCorr(a, b, d) {
        var m = a;
        b && d && (m = Math.max(m * Math.cos(b * E), 4));
        return {
          x: -a / 3 * Math.sin(b * E),
          y: m
        };
      },
      label: function label(a, b, d, e, w, k, l, g, r) {
        var c = this,
            x = c.styledMode,
            J = c.g("button" !== r && "label"),
            p = J.text = c.text("", 0, 0, l).attr({
          zIndex: 1
        }),
            K,
            h,
            D = 0,
            u = 3,
            L = 0,
            n,
            N,
            E,
            U,
            f,
            q = {},
            T,
            S,
            v = /^url\((.*?)\)$/.test(e),
            Q = x || v,
            y = function y() {
          return x ? K.strokeWidth() % 2 / 2 : (T ? parseInt(T, 10) : 0) % 2 / 2;
        };

        r && J.addClass("highcharts-" + r);

        var R = function R() {
          var a = p.element.style,
              b = {};
          h = (void 0 === n || void 0 === N || f) && G(p.textStr) && p.getBBox();
          J.width = (n || h.width || 0) + 2 * u + L;
          J.height = (N || h.height || 0) + 2 * u;
          S = u + Math.min(c.fontMetrics(a && a.fontSize, p).b, h ? h.height : Infinity);
          Q && (K || (J.box = K = c.symbols[e] || v ? c.symbol(e) : c.rect(), K.addClass(("button" === r ? "" : "highcharts-label-box") + (r ? " highcharts-" + r + "-box" : "")), K.add(J), a = y(), b.x = a, b.y = (g ? -S : 0) + a), b.width = Math.round(J.width), b.height = Math.round(J.height), K.attr(t(b, q)), q = {});
        };

        var B = function B() {
          var a = L + u;
          var b = g ? 0 : S;
          G(n) && h && ("center" === f || "right" === f) && (a += {
            center: .5,
            right: 1
          }[f] * (n - h.width));
          if (a !== p.x || b !== p.y) p.attr("x", a), p.hasBoxWidthChanged && (h = p.getBBox(!0), R()), void 0 !== b && p.attr("y", b);
          p.x = a;
          p.y = b;
        };

        var V = function V(a, b) {
          K ? K.attr(a, b) : q[a] = b;
        };

        J.onAdd = function () {
          p.add(J);
          J.attr({
            text: a || 0 === a ? a : "",
            x: b,
            y: d
          });
          K && G(w) && J.attr({
            anchorX: w,
            anchorY: k
          });
        };

        J.widthSetter = function (a) {
          n = C(a) ? a : null;
        };

        J.heightSetter = function (a) {
          N = a;
        };

        J["text-alignSetter"] = function (a) {
          f = a;
        };

        J.paddingSetter = function (a) {
          G(a) && a !== u && (u = J.padding = a, B());
        };

        J.paddingLeftSetter = function (a) {
          G(a) && a !== L && (L = a, B());
        };

        J.alignSetter = function (a) {
          a = {
            left: 0,
            center: .5,
            right: 1
          }[a];
          a !== D && (D = a, h && J.attr({
            x: E
          }));
        };

        J.textSetter = function (a) {
          void 0 !== a && p.attr({
            text: a
          });
          R();
          B();
        };

        J["stroke-widthSetter"] = function (a, b) {
          a && (Q = !0);
          T = this["stroke-width"] = a;
          V(b, a);
        };

        x ? J.rSetter = function (a, b) {
          V(b, a);
        } : J.strokeSetter = J.fillSetter = J.rSetter = function (a, b) {
          "r" !== b && ("fill" === b && a && (Q = !0), J[b] = a);
          V(b, a);
        };

        J.anchorXSetter = function (a, b) {
          w = J.anchorX = a;
          V(b, Math.round(a) - y() - E);
        };

        J.anchorYSetter = function (a, b) {
          k = J.anchorY = a;
          V(b, a - U);
        };

        J.xSetter = function (a) {
          J.x = a;
          D && (a -= D * ((n || h.width) + 2 * u), J["forceAnimate:x"] = !0);
          E = Math.round(a);
          J.attr("translateX", E);
        };

        J.ySetter = function (a) {
          U = J.y = Math.round(a);
          J.attr("translateY", U);
        };

        var H = J.css;
        l = {
          css: function css(a) {
            if (a) {
              var b = {};
              a = A(a);
              J.textProps.forEach(function (d) {
                void 0 !== a[d] && (b[d] = a[d], delete a[d]);
              });
              p.css(b);
              "width" in b && R();
              "fontSize" in b && (R(), B());
            }

            return H.call(J, a);
          },
          getBBox: function getBBox() {
            return {
              width: h.width + 2 * u,
              height: h.height + 2 * u,
              x: h.x - u,
              y: h.y - u
            };
          },
          destroy: function destroy() {
            m(J.element, "mouseenter");
            m(J.element, "mouseleave");
            p && (p = p.destroy());
            K && (K = K.destroy());
            O.prototype.destroy.call(J);
            J = c = R = B = V = null;
          }
        };
        x || (l.shadow = function (a) {
          a && (R(), K && K.shadow(a));
          return J;
        });
        return t(J, l);
      }
    });
    c.Renderer = f;
  });
  M(I, "parts/Html.js", [I["parts/Globals.js"], I["parts/Utilities.js"]], function (c, f) {
    var F = f.attr,
        G = f.defined,
        z = f.extend,
        B = f.pick,
        t = f.pInt,
        v = c.createElement,
        C = c.css,
        H = c.isFirefox,
        y = c.isMS,
        h = c.isWebKit,
        n = c.SVGElement;
    f = c.SVGRenderer;
    var q = c.win;
    z(n.prototype, {
      htmlCss: function htmlCss(g) {
        var b = "SPAN" === this.element.tagName && g && "width" in g,
            a = B(b && g.width, void 0);

        if (b) {
          delete g.width;
          this.textWidth = a;
          var d = !0;
        }

        g && "ellipsis" === g.textOverflow && (g.whiteSpace = "nowrap", g.overflow = "hidden");
        this.styles = z(this.styles, g);
        C(this.element, g);
        d && this.htmlUpdateTransform();
        return this;
      },
      htmlGetBBox: function htmlGetBBox() {
        var g = this.element;
        return {
          x: g.offsetLeft,
          y: g.offsetTop,
          width: g.offsetWidth,
          height: g.offsetHeight
        };
      },
      htmlUpdateTransform: function htmlUpdateTransform() {
        if (this.added) {
          var g = this.renderer,
              b = this.element,
              a = this.translateX || 0,
              d = this.translateY || 0,
              e = this.x || 0,
              l = this.y || 0,
              c = this.textAlign || "left",
              h = {
            left: 0,
            center: .5,
            right: 1
          }[c],
              p = this.styles,
              u = p && p.whiteSpace;
          C(b, {
            marginLeft: a,
            marginTop: d
          });
          !g.styledMode && this.shadows && this.shadows.forEach(function (b) {
            C(b, {
              marginLeft: a + 1,
              marginTop: d + 1
            });
          });
          this.inverted && [].forEach.call(b.childNodes, function (a) {
            g.invertChild(a, b);
          });

          if ("SPAN" === b.tagName) {
            p = this.rotation;
            var k = this.textWidth && t(this.textWidth),
                r = [p, c, b.innerHTML, this.textWidth, this.textAlign].join(),
                x;
            (x = k !== this.oldTextWidth) && !(x = k > this.oldTextWidth) && ((x = this.textPxLength) || (C(b, {
              width: "",
              whiteSpace: u || "nowrap"
            }), x = b.offsetWidth), x = x > k);
            x && (/[ \-]/.test(b.textContent || b.innerText) || "ellipsis" === b.style.textOverflow) ? (C(b, {
              width: k + "px",
              display: "block",
              whiteSpace: u || "normal"
            }), this.oldTextWidth = k, this.hasBoxWidthChanged = !0) : this.hasBoxWidthChanged = !1;
            r !== this.cTT && (u = g.fontMetrics(b.style.fontSize, b).b, !G(p) || p === (this.oldRotation || 0) && c === this.oldAlign || this.setSpanRotation(p, h, u), this.getSpanCorrection(!G(p) && this.textPxLength || b.offsetWidth, u, h, p, c));
            C(b, {
              left: e + (this.xCorr || 0) + "px",
              top: l + (this.yCorr || 0) + "px"
            });
            this.cTT = r;
            this.oldRotation = p;
            this.oldAlign = c;
          }
        } else this.alignOnAdd = !0;
      },
      setSpanRotation: function setSpanRotation(g, b, a) {
        var d = {},
            e = this.renderer.getTransformKey();
        d[e] = d.transform = "rotate(" + g + "deg)";
        d[e + (H ? "Origin" : "-origin")] = d.transformOrigin = 100 * b + "% " + a + "px";
        C(this.element, d);
      },
      getSpanCorrection: function getSpanCorrection(g, b, a) {
        this.xCorr = -g * a;
        this.yCorr = -b;
      }
    });
    z(f.prototype, {
      getTransformKey: function getTransformKey() {
        return y && !/Edge/.test(q.navigator.userAgent) ? "-ms-transform" : h ? "-webkit-transform" : H ? "MozTransform" : q.opera ? "-o-transform" : "";
      },
      html: function html(g, b, a) {
        var d = this.createElement("span"),
            e = d.element,
            l = d.renderer,
            c = l.isSVG,
            h = function h(a, b) {
          ["opacity", "visibility"].forEach(function (d) {
            a[d + "Setter"] = function (e, k, l) {
              var w = a.div ? a.div.style : b;
              n.prototype[d + "Setter"].call(this, e, k, l);
              w && (w[k] = e);
            };
          });
          a.addedSetters = !0;
        };

        d.textSetter = function (a) {
          a !== e.innerHTML && (delete this.bBox, delete this.oldTextWidth);
          this.textStr = a;
          e.innerHTML = B(a, "");
          d.doTransform = !0;
        };

        c && h(d, d.element.style);

        d.xSetter = d.ySetter = d.alignSetter = d.rotationSetter = function (a, b) {
          "align" === b && (b = "textAlign");
          d[b] = a;
          d.doTransform = !0;
        };

        d.afterSetters = function () {
          this.doTransform && (this.htmlUpdateTransform(), this.doTransform = !1);
        };

        d.attr({
          text: g,
          x: Math.round(b),
          y: Math.round(a)
        }).css({
          position: "absolute"
        });
        l.styledMode || d.css({
          fontFamily: this.style.fontFamily,
          fontSize: this.style.fontSize
        });
        e.style.whiteSpace = "nowrap";
        d.css = d.htmlCss;
        c && (d.add = function (a) {
          var b = l.box.parentNode,
              k = [];

          if (this.parentGroup = a) {
            var g = a.div;

            if (!g) {
              for (; a;) {
                k.push(a), a = a.parentGroup;
              }

              k.reverse().forEach(function (a) {
                function e(b, d) {
                  a[d] = b;
                  "translateX" === d ? m.left = b + "px" : m.top = b + "px";
                  a.doTransform = !0;
                }

                var w = F(a.element, "class");
                g = a.div = a.div || v("div", w ? {
                  className: w
                } : void 0, {
                  position: "absolute",
                  left: (a.translateX || 0) + "px",
                  top: (a.translateY || 0) + "px",
                  display: a.display,
                  opacity: a.opacity,
                  pointerEvents: a.styles && a.styles.pointerEvents
                }, g || b);
                var m = g.style;
                z(a, {
                  classSetter: function (a) {
                    return function (b) {
                      this.element.setAttribute("class", b);
                      a.className = b;
                    };
                  }(g),
                  on: function on() {
                    k[0].div && d.on.apply({
                      element: k[0].div
                    }, arguments);
                    return a;
                  },
                  translateXSetter: e,
                  translateYSetter: e
                });
                a.addedSetters || h(a);
              });
            }
          } else g = b;

          g.appendChild(e);
          d.added = !0;
          d.alignOnAdd && d.htmlUpdateTransform();
          return d;
        });
        return d;
      }
    });
  });
  M(I, "parts/Time.js", [I["parts/Globals.js"], I["parts/Utilities.js"]], function (c, f) {
    var F = f.defined,
        G = f.extend,
        z = f.isObject,
        B = f.objectEach,
        t = f.pick,
        v = f.splat,
        C = c.merge,
        H = c.timeUnits,
        y = c.win;

    c.Time = function (c) {
      this.update(c, !1);
    };

    c.Time.prototype = {
      defaultOptions: {
        Date: void 0,
        getTimezoneOffset: void 0,
        timezone: void 0,
        timezoneOffset: 0,
        useUTC: !0
      },
      update: function update(c) {
        var h = t(c && c.useUTC, !0),
            f = this;
        this.options = c = C(!0, this.options || {}, c);
        this.Date = c.Date || y.Date || Date;
        this.timezoneOffset = (this.useUTC = h) && c.timezoneOffset;
        this.getTimezoneOffset = this.timezoneOffsetFunction();
        (this.variableTimezone = !(h && !c.getTimezoneOffset && !c.timezone)) || this.timezoneOffset ? (this.get = function (g, b) {
          var a = b.getTime(),
              d = a - f.getTimezoneOffset(b);
          b.setTime(d);
          g = b["getUTC" + g]();
          b.setTime(a);
          return g;
        }, this.set = function (g, b, a) {
          if ("Milliseconds" === g || "Seconds" === g || "Minutes" === g && 0 === b.getTimezoneOffset() % 60) b["set" + g](a);else {
            var d = f.getTimezoneOffset(b);
            d = b.getTime() - d;
            b.setTime(d);
            b["setUTC" + g](a);
            g = f.getTimezoneOffset(b);
            d = b.getTime() + g;
            b.setTime(d);
          }
        }) : h ? (this.get = function (g, b) {
          return b["getUTC" + g]();
        }, this.set = function (g, b, a) {
          return b["setUTC" + g](a);
        }) : (this.get = function (g, b) {
          return b["get" + g]();
        }, this.set = function (g, b, a) {
          return b["set" + g](a);
        });
      },
      makeTime: function makeTime(h, n, f, g, b, a) {
        if (this.useUTC) {
          var d = this.Date.UTC.apply(0, arguments);
          var e = this.getTimezoneOffset(d);
          d += e;
          var l = this.getTimezoneOffset(d);
          e !== l ? d += l - e : e - 36E5 !== this.getTimezoneOffset(d - 36E5) || c.isSafari || (d -= 36E5);
        } else d = new this.Date(h, n, t(f, 1), t(g, 0), t(b, 0), t(a, 0)).getTime();

        return d;
      },
      timezoneOffsetFunction: function timezoneOffsetFunction() {
        var h = this,
            n = this.options,
            f = y.moment;
        if (!this.useUTC) return function (g) {
          return 6E4 * new Date(g).getTimezoneOffset();
        };

        if (n.timezone) {
          if (f) return function (g) {
            return 6E4 * -f.tz(g, n.timezone).utcOffset();
          };
          c.error(25);
        }

        return this.useUTC && n.getTimezoneOffset ? function (g) {
          return 6E4 * n.getTimezoneOffset(g);
        } : function () {
          return 6E4 * (h.timezoneOffset || 0);
        };
      },
      dateFormat: function dateFormat(h, n, f) {
        if (!F(n) || isNaN(n)) return c.defaultOptions.lang.invalidDate || "";
        h = t(h, "%Y-%m-%d %H:%M:%S");
        var g = this,
            b = new this.Date(n),
            a = this.get("Hours", b),
            d = this.get("Day", b),
            e = this.get("Date", b),
            l = this.get("Month", b),
            L = this.get("FullYear", b),
            E = c.defaultOptions.lang,
            p = E.weekdays,
            u = E.shortWeekdays,
            k = c.pad;
        b = G({
          a: u ? u[d] : p[d].substr(0, 3),
          A: p[d],
          d: k(e),
          e: k(e, 2, " "),
          w: d,
          b: E.shortMonths[l],
          B: E.months[l],
          m: k(l + 1),
          o: l + 1,
          y: L.toString().substr(2, 2),
          Y: L,
          H: k(a),
          k: a,
          I: k(a % 12 || 12),
          l: a % 12 || 12,
          M: k(g.get("Minutes", b)),
          p: 12 > a ? "AM" : "PM",
          P: 12 > a ? "am" : "pm",
          S: k(b.getSeconds()),
          L: k(Math.floor(n % 1E3), 3)
        }, c.dateFormats);
        B(b, function (a, b) {
          for (; -1 !== h.indexOf("%" + b);) {
            h = h.replace("%" + b, "function" === typeof a ? a.call(g, n) : a);
          }
        });
        return f ? h.substr(0, 1).toUpperCase() + h.substr(1) : h;
      },
      resolveDTLFormat: function resolveDTLFormat(c) {
        return z(c, !0) ? c : (c = v(c), {
          main: c[0],
          from: c[1],
          to: c[2]
        });
      },
      getTimeTicks: function getTimeTicks(c, n, f, g) {
        var b = this,
            a = [],
            d = {};
        var e = new b.Date(n);
        var l = c.unitRange,
            h = c.count || 1,
            E;
        g = t(g, 1);

        if (F(n)) {
          b.set("Milliseconds", e, l >= H.second ? 0 : h * Math.floor(b.get("Milliseconds", e) / h));
          l >= H.second && b.set("Seconds", e, l >= H.minute ? 0 : h * Math.floor(b.get("Seconds", e) / h));
          l >= H.minute && b.set("Minutes", e, l >= H.hour ? 0 : h * Math.floor(b.get("Minutes", e) / h));
          l >= H.hour && b.set("Hours", e, l >= H.day ? 0 : h * Math.floor(b.get("Hours", e) / h));
          l >= H.day && b.set("Date", e, l >= H.month ? 1 : Math.max(1, h * Math.floor(b.get("Date", e) / h)));

          if (l >= H.month) {
            b.set("Month", e, l >= H.year ? 0 : h * Math.floor(b.get("Month", e) / h));
            var p = b.get("FullYear", e);
          }

          l >= H.year && b.set("FullYear", e, p - p % h);
          l === H.week && (p = b.get("Day", e), b.set("Date", e, b.get("Date", e) - p + g + (p < g ? -7 : 0)));
          p = b.get("FullYear", e);
          g = b.get("Month", e);
          var u = b.get("Date", e),
              k = b.get("Hours", e);
          n = e.getTime();
          b.variableTimezone && (E = f - n > 4 * H.month || b.getTimezoneOffset(n) !== b.getTimezoneOffset(f));
          n = e.getTime();

          for (e = 1; n < f;) {
            a.push(n), n = l === H.year ? b.makeTime(p + e * h, 0) : l === H.month ? b.makeTime(p, g + e * h) : !E || l !== H.day && l !== H.week ? E && l === H.hour && 1 < h ? b.makeTime(p, g, u, k + e * h) : n + l * h : b.makeTime(p, g, u + e * h * (l === H.day ? 1 : 7)), e++;
          }

          a.push(n);
          l <= H.hour && 1E4 > a.length && a.forEach(function (a) {
            0 === a % 18E5 && "000000000" === b.dateFormat("%H%M%S%L", a) && (d[a] = "day");
          });
        }

        a.info = G(c, {
          higherRanks: d,
          totalRange: l * h
        });
        return a;
      }
    };
  });
  M(I, "parts/Options.js", [I["parts/Globals.js"]], function (c) {
    var f = c.color,
        F = c.merge;
    c.defaultOptions = {
      colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
      symbols: ["circle", "diamond", "square", "triangle", "triangle-down"],
      lang: {
        loading: "Loading...",
        months: "January February March April May June July August September October November December".split(" "),
        shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
        weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        decimalPoint: ".",
        numericSymbols: "kMGTPE".split(""),
        resetZoom: "Reset zoom",
        resetZoomTitle: "Reset zoom level 1:1",
        thousandsSep: " "
      },
      global: {},
      time: c.Time.prototype.defaultOptions,
      chart: {
        styledMode: !1,
        borderRadius: 0,
        colorCount: 10,
        defaultSeriesType: "line",
        ignoreHiddenSeries: !0,
        spacing: [10, 10, 15, 10],
        resetZoomButton: {
          theme: {
            zIndex: 6
          },
          position: {
            align: "right",
            x: -10,
            y: 10
          }
        },
        width: null,
        height: null,
        borderColor: "#335cad",
        backgroundColor: "#ffffff",
        plotBorderColor: "#cccccc"
      },
      title: {
        text: "Chart title",
        align: "center",
        margin: 15,
        widthAdjust: -44
      },
      subtitle: {
        text: "",
        align: "center",
        widthAdjust: -44
      },
      caption: {
        margin: 15,
        text: "",
        align: "left",
        verticalAlign: "bottom"
      },
      plotOptions: {},
      labels: {
        style: {
          position: "absolute",
          color: "#333333"
        }
      },
      legend: {
        enabled: !0,
        align: "center",
        alignColumns: !0,
        layout: "horizontal",
        labelFormatter: function labelFormatter() {
          return this.name;
        },
        borderColor: "#999999",
        borderRadius: 0,
        navigation: {
          activeColor: "#003399",
          inactiveColor: "#cccccc"
        },
        itemStyle: {
          color: "#333333",
          cursor: "pointer",
          fontSize: "12px",
          fontWeight: "bold",
          textOverflow: "ellipsis"
        },
        itemHoverStyle: {
          color: "#000000"
        },
        itemHiddenStyle: {
          color: "#cccccc"
        },
        shadow: !1,
        itemCheckboxStyle: {
          position: "absolute",
          width: "13px",
          height: "13px"
        },
        squareSymbol: !0,
        symbolPadding: 5,
        verticalAlign: "bottom",
        x: 0,
        y: 0,
        title: {
          style: {
            fontWeight: "bold"
          }
        }
      },
      loading: {
        labelStyle: {
          fontWeight: "bold",
          position: "relative",
          top: "45%"
        },
        style: {
          position: "absolute",
          backgroundColor: "#ffffff",
          opacity: .5,
          textAlign: "center"
        }
      },
      tooltip: {
        enabled: !0,
        animation: c.svg,
        borderRadius: 3,
        dateTimeLabelFormats: {
          millisecond: "%A, %b %e, %H:%M:%S.%L",
          second: "%A, %b %e, %H:%M:%S",
          minute: "%A, %b %e, %H:%M",
          hour: "%A, %b %e, %H:%M",
          day: "%A, %b %e, %Y",
          week: "Week from %A, %b %e, %Y",
          month: "%B %Y",
          year: "%Y"
        },
        footerFormat: "",
        padding: 8,
        snap: c.isTouchDevice ? 25 : 10,
        headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
        pointFormat: "<span style=\"color:{point.color}\">\u25CF</span> {series.name}: <b>{point.y}</b><br/>",
        backgroundColor: f("#f7f7f7").setOpacity(.85).get(),
        borderWidth: 1,
        shadow: !0,
        style: {
          color: "#333333",
          cursor: "default",
          fontSize: "12px",
          pointerEvents: "none",
          whiteSpace: "nowrap"
        }
      },
      credits: {
        enabled: !0,
        href: "https://www.highcharts.com?credits",
        position: {
          align: "right",
          x: -10,
          verticalAlign: "bottom",
          y: -5
        },
        style: {
          cursor: "pointer",
          color: "#999999",
          fontSize: "9px"
        },
        text: "Highcharts.com"
      }
    };

    c.setOptions = function (f) {
      c.defaultOptions = F(!0, c.defaultOptions, f);
      (f.time || f.global) && c.time.update(F(c.defaultOptions.global, c.defaultOptions.time, f.global, f.time));
      return c.defaultOptions;
    };

    c.getOptions = function () {
      return c.defaultOptions;
    };

    c.defaultPlotOptions = c.defaultOptions.plotOptions;
    c.time = new c.Time(F(c.defaultOptions.global, c.defaultOptions.time));

    c.dateFormat = function (f, z, B) {
      return c.time.dateFormat(f, z, B);
    };

    "";
  });
  M(I, "parts/Tick.js", [I["parts/Globals.js"], I["parts/Utilities.js"]], function (c, f) {
    var F = f.defined,
        G = f.destroyObjectProperties,
        z = f.extend,
        B = f.isNumber,
        t = f.pick,
        v = c.correctFloat,
        C = c.fireEvent,
        H = c.merge,
        y = c.deg2rad;

    c.Tick = function (c, n, f, g, b) {
      this.axis = c;
      this.pos = n;
      this.type = f || "";
      this.isNewLabel = this.isNew = !0;
      this.parameters = b || {};
      this.tickmarkOffset = this.parameters.tickmarkOffset;
      this.options = this.parameters.options;
      f || g || this.addLabel();
    };

    c.Tick.prototype = {
      addLabel: function addLabel() {
        var c = this,
            n = c.axis,
            f = n.options,
            g = n.chart,
            b = n.categories,
            a = n.names,
            d = c.pos,
            e = t(c.options && c.options.labels, f.labels),
            l = n.tickPositions,
            L = d === l[0],
            E = d === l[l.length - 1];
        b = this.parameters.category || (b ? t(b[d], a[d], d) : d);
        var p = c.label;
        l = l.info;
        var u, k;

        if (n.isDatetimeAxis && l) {
          var r = g.time.resolveDTLFormat(f.dateTimeLabelFormats[!f.grid && l.higherRanks[d] || l.unitName]);
          var x = r.main;
        }

        c.isFirst = L;
        c.isLast = E;
        c.formatCtx = {
          axis: n,
          chart: g,
          isFirst: L,
          isLast: E,
          dateTimeLabelFormat: x,
          tickPositionInfo: l,
          value: n.isLog ? v(n.lin2log(b)) : b,
          pos: d
        };
        f = n.labelFormatter.call(c.formatCtx, this.formatCtx);
        if (k = r && r.list) c.shortenLabel = function () {
          for (u = 0; u < k.length; u++) {
            if (p.attr({
              text: n.labelFormatter.call(z(c.formatCtx, {
                dateTimeLabelFormat: k[u]
              }))
            }), p.getBBox().width < n.getSlotWidth(c) - 2 * t(e.padding, 5)) return;
          }

          p.attr({
            text: ""
          });
        };
        if (F(p)) p && p.textStr !== f && (!p.textWidth || e.style && e.style.width || p.styles.width || p.css({
          width: null
        }), p.attr({
          text: f
        }), p.textPxLength = p.getBBox().width);else {
          if (c.label = p = F(f) && e.enabled ? g.renderer.text(f, 0, 0, e.useHTML).add(n.labelGroup) : null) g.styledMode || p.css(H(e.style)), p.textPxLength = p.getBBox().width;
          c.rotation = 0;
        }
      },
      getLabelSize: function getLabelSize() {
        return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
      },
      handleOverflow: function handleOverflow(c) {
        var h = this.axis,
            f = h.options.labels,
            g = c.x,
            b = h.chart.chartWidth,
            a = h.chart.spacing,
            d = t(h.labelLeft, Math.min(h.pos, a[3]));
        a = t(h.labelRight, Math.max(h.isRadial ? 0 : h.pos + h.len, b - a[1]));
        var e = this.label,
            l = this.rotation,
            L = {
          left: 0,
          center: .5,
          right: 1
        }[h.labelAlign || e.attr("align")],
            E = e.getBBox().width,
            p = h.getSlotWidth(this),
            u = p,
            k = 1,
            r,
            x = {};
        if (l || "justify" !== t(f.overflow, "justify")) 0 > l && g - L * E < d ? r = Math.round(g / Math.cos(l * y) - d) : 0 < l && g + L * E > a && (r = Math.round((b - g) / Math.cos(l * y)));else if (b = g + (1 - L) * E, g - L * E < d ? u = c.x + u * (1 - L) - d : b > a && (u = a - c.x + u * L, k = -1), u = Math.min(p, u), u < p && "center" === h.labelAlign && (c.x += k * (p - u - L * (p - Math.min(E, u)))), E > u || h.autoRotation && (e.styles || {}).width) r = u;
        r && (this.shortenLabel ? this.shortenLabel() : (x.width = Math.floor(r), (f.style || {}).textOverflow || (x.textOverflow = "ellipsis"), e.css(x)));
      },
      getPosition: function getPosition(h, n, f, g) {
        var b = this.axis,
            a = b.chart,
            d = g && a.oldChartHeight || a.chartHeight;
        h = {
          x: h ? c.correctFloat(b.translate(n + f, null, null, g) + b.transB) : b.left + b.offset + (b.opposite ? (g && a.oldChartWidth || a.chartWidth) - b.right - b.left : 0),
          y: h ? d - b.bottom + b.offset - (b.opposite ? b.height : 0) : c.correctFloat(d - b.translate(n + f, null, null, g) - b.transB)
        };
        h.y = Math.max(Math.min(h.y, 1E5), -1E5);
        C(this, "afterGetPosition", {
          pos: h
        });
        return h;
      },
      getLabelPosition: function getLabelPosition(c, n, f, g, b, a, d, e) {
        var l = this.axis,
            h = l.transA,
            E = l.isLinked && l.linkedParent ? l.linkedParent.reversed : l.reversed,
            p = l.staggerLines,
            u = l.tickRotCorr || {
          x: 0,
          y: 0
        },
            k = b.y,
            r = g || l.reserveSpaceDefault ? 0 : -l.labelOffset * ("center" === l.labelAlign ? .5 : 1),
            x = {};
        F(k) || (k = 0 === l.side ? f.rotation ? -8 : -f.getBBox().height : 2 === l.side ? u.y + 8 : Math.cos(f.rotation * y) * (u.y - f.getBBox(!1, 0).height / 2));
        c = c + b.x + r + u.x - (a && g ? a * h * (E ? -1 : 1) : 0);
        n = n + k - (a && !g ? a * h * (E ? 1 : -1) : 0);
        p && (f = d / (e || 1) % p, l.opposite && (f = p - f - 1), n += l.labelOffset / p * f);
        x.x = c;
        x.y = Math.round(n);
        C(this, "afterGetLabelPosition", {
          pos: x,
          tickmarkOffset: a,
          index: d
        });
        return x;
      },
      getMarkPath: function getMarkPath(c, n, f, g, b, a) {
        return a.crispLine(["M", c, n, "L", c + (b ? 0 : -f), n + (b ? f : 0)], g);
      },
      renderGridLine: function renderGridLine(c, n, f) {
        var g = this.axis,
            b = g.options,
            a = this.gridLine,
            d = {},
            e = this.pos,
            l = this.type,
            h = t(this.tickmarkOffset, g.tickmarkOffset),
            E = g.chart.renderer,
            p = l ? l + "Grid" : "grid",
            u = b[p + "LineWidth"],
            k = b[p + "LineColor"];
        b = b[p + "LineDashStyle"];
        a || (g.chart.styledMode || (d.stroke = k, d["stroke-width"] = u, b && (d.dashstyle = b)), l || (d.zIndex = 1), c && (n = 0), this.gridLine = a = E.path().attr(d).addClass("highcharts-" + (l ? l + "-" : "") + "grid-line").add(g.gridGroup));
        if (a && (f = g.getPlotLinePath({
          value: e + h,
          lineWidth: a.strokeWidth() * f,
          force: "pass",
          old: c
        }))) a[c || this.isNew ? "attr" : "animate"]({
          d: f,
          opacity: n
        });
      },
      renderMark: function renderMark(c, n, f) {
        var g = this.axis,
            b = g.options,
            a = g.chart.renderer,
            d = this.type,
            e = d ? d + "Tick" : "tick",
            l = g.tickSize(e),
            h = this.mark,
            E = !h,
            p = c.x;
        c = c.y;
        var u = t(b[e + "Width"], !d && g.isXAxis ? 1 : 0);
        b = b[e + "Color"];
        l && (g.opposite && (l[0] = -l[0]), E && (this.mark = h = a.path().addClass("highcharts-" + (d ? d + "-" : "") + "tick").add(g.axisGroup), g.chart.styledMode || h.attr({
          stroke: b,
          "stroke-width": u
        })), h[E ? "attr" : "animate"]({
          d: this.getMarkPath(p, c, l[0], h.strokeWidth() * f, g.horiz, a),
          opacity: n
        }));
      },
      renderLabel: function renderLabel(c, n, f, g) {
        var b = this.axis,
            a = b.horiz,
            d = b.options,
            e = this.label,
            l = d.labels,
            h = l.step;
        b = t(this.tickmarkOffset, b.tickmarkOffset);
        var E = !0,
            p = c.x;
        c = c.y;
        e && B(p) && (e.xy = c = this.getLabelPosition(p, c, e, a, l, b, g, h), this.isFirst && !this.isLast && !t(d.showFirstLabel, 1) || this.isLast && !this.isFirst && !t(d.showLastLabel, 1) ? E = !1 : !a || l.step || l.rotation || n || 0 === f || this.handleOverflow(c), h && g % h && (E = !1), E && B(c.y) ? (c.opacity = f, e[this.isNewLabel ? "attr" : "animate"](c), this.isNewLabel = !1) : (e.attr("y", -9999), this.isNewLabel = !0));
      },
      render: function render(h, n, f) {
        var g = this.axis,
            b = g.horiz,
            a = this.pos,
            d = t(this.tickmarkOffset, g.tickmarkOffset);
        a = this.getPosition(b, a, d, n);
        d = a.x;
        var e = a.y;
        g = b && d === g.pos + g.len || !b && e === g.pos ? -1 : 1;
        f = t(f, 1);
        this.isActive = !0;
        this.renderGridLine(n, f, g);
        this.renderMark(a, f, g);
        this.renderLabel(a, n, f, h);
        this.isNew = !1;
        c.fireEvent(this, "afterRender");
      },
      destroy: function destroy() {
        G(this, this.axis);
      }
    };
  });
  M(I, "parts/Axis.js", [I["parts/Globals.js"], I["parts/Utilities.js"]], function (c, f) {
    var F = f.arrayMax,
        G = f.arrayMin,
        z = f.defined,
        B = f.destroyObjectProperties,
        t = f.extend,
        v = f.isArray,
        C = f.isNumber,
        H = f.isString,
        y = f.objectEach,
        h = f.pick,
        n = f.splat,
        q = f.syncTimeout,
        g = c.addEvent,
        b = c.animObject,
        a = c.color,
        d = c.correctFloat,
        e = c.defaultOptions,
        l = c.deg2rad,
        L = c.fireEvent,
        E = c.format,
        p = c.getMagnitude,
        u = c.merge,
        k = c.normalizeTickInterval,
        r = c.removeEvent,
        x = c.seriesTypes,
        A = c.Tick;

    f = function f() {
      this.init.apply(this, arguments);
    };

    t(f.prototype, {
      defaultOptions: {
        dateTimeLabelFormats: {
          millisecond: {
            main: "%H:%M:%S.%L",
            range: !1
          },
          second: {
            main: "%H:%M:%S",
            range: !1
          },
          minute: {
            main: "%H:%M",
            range: !1
          },
          hour: {
            main: "%H:%M",
            range: !1
          },
          day: {
            main: "%e. %b"
          },
          week: {
            main: "%e. %b"
          },
          month: {
            main: "%b '%y"
          },
          year: {
            main: "%Y"
          }
        },
        endOnTick: !1,
        labels: {
          enabled: !0,
          indentation: 10,
          x: 0,
          style: {
            color: "#666666",
            cursor: "default",
            fontSize: "11px"
          }
        },
        maxPadding: .01,
        minorTickLength: 2,
        minorTickPosition: "outside",
        minPadding: .01,
        showEmpty: !0,
        startOfWeek: 1,
        startOnTick: !1,
        tickLength: 10,
        tickPixelInterval: 100,
        tickmarkPlacement: "between",
        tickPosition: "outside",
        title: {
          align: "middle",
          style: {
            color: "#666666"
          }
        },
        type: "linear",
        minorGridLineColor: "#f2f2f2",
        minorGridLineWidth: 1,
        minorTickColor: "#999999",
        lineColor: "#ccd6eb",
        lineWidth: 1,
        gridLineColor: "#e6e6e6",
        tickColor: "#ccd6eb"
      },
      defaultYAxisOptions: {
        endOnTick: !0,
        maxPadding: .05,
        minPadding: .05,
        tickPixelInterval: 72,
        showLastLabel: !0,
        labels: {
          x: -8
        },
        startOnTick: !0,
        title: {
          rotation: 270,
          text: "Values"
        },
        stackLabels: {
          allowOverlap: !1,
          enabled: !1,
          crop: !0,
          overflow: "justify",
          formatter: function formatter() {
            return c.numberFormat(this.total, -1);
          },
          style: {
            color: "#000000",
            fontSize: "11px",
            fontWeight: "bold",
            textOutline: "1px contrast"
          }
        },
        gridLineWidth: 1,
        lineWidth: 0
      },
      defaultLeftAxisOptions: {
        labels: {
          x: -15
        },
        title: {
          rotation: 270
        }
      },
      defaultRightAxisOptions: {
        labels: {
          x: 15
        },
        title: {
          rotation: 90
        }
      },
      defaultBottomAxisOptions: {
        labels: {
          autoRotation: [-45],
          x: 0
        },
        margin: 15,
        title: {
          rotation: 0
        }
      },
      defaultTopAxisOptions: {
        labels: {
          autoRotation: [-45],
          x: 0
        },
        margin: 15,
        title: {
          rotation: 0
        }
      },
      init: function init(a, b) {
        var d = b.isX,
            m = this;
        m.chart = a;
        m.horiz = a.inverted && !m.isZAxis ? !d : d;
        m.isXAxis = d;
        m.coll = m.coll || (d ? "xAxis" : "yAxis");
        L(this, "init", {
          userOptions: b
        });
        m.opposite = b.opposite;
        m.side = b.side || (m.horiz ? m.opposite ? 0 : 2 : m.opposite ? 1 : 3);
        m.setOptions(b);
        var e = this.options,
            w = e.type;
        m.labelFormatter = e.labels.formatter || m.defaultLabelFormatter;
        m.userOptions = b;
        m.minPixelPadding = 0;
        m.reversed = e.reversed;
        m.visible = !1 !== e.visible;
        m.zoomEnabled = !1 !== e.zoomEnabled;
        m.hasNames = "category" === w || !0 === e.categories;
        m.categories = e.categories || m.hasNames;
        m.names || (m.names = [], m.names.keys = {});
        m.plotLinesAndBandsGroups = {};
        m.isLog = "logarithmic" === w;
        m.isDatetimeAxis = "datetime" === w;
        m.positiveValuesOnly = m.isLog && !m.allowNegativeLog;
        m.isLinked = z(e.linkedTo);
        m.ticks = {};
        m.labelEdge = [];
        m.minorTicks = {};
        m.plotLinesAndBands = [];
        m.alternateBands = {};
        m.len = 0;
        m.minRange = m.userMinRange = e.minRange || e.maxZoom;
        m.range = e.range;
        m.offset = e.offset || 0;
        m.stacks = {};
        m.oldStacks = {};
        m.stacksTouched = 0;
        m.max = null;
        m.min = null;
        m.crosshair = h(e.crosshair, n(a.options.tooltip.crosshairs)[d ? 0 : 1], !1);
        b = m.options.events;
        -1 === a.axes.indexOf(m) && (d ? a.axes.splice(a.xAxis.length, 0, m) : a.axes.push(m), a[m.coll].push(m));
        m.series = m.series || [];
        a.inverted && !m.isZAxis && d && void 0 === m.reversed && (m.reversed = !0);
        y(b, function (a, b) {
          c.isFunction(a) && g(m, b, a);
        });
        m.lin2log = e.linearToLogConverter || m.lin2log;
        m.isLog && (m.val2lin = m.log2lin, m.lin2val = m.lin2log);
        L(this, "afterInit");
      },
      setOptions: function setOptions(a) {
        this.options = u(this.defaultOptions, "yAxis" === this.coll && this.defaultYAxisOptions, [this.defaultTopAxisOptions, this.defaultRightAxisOptions, this.defaultBottomAxisOptions, this.defaultLeftAxisOptions][this.side], u(e[this.coll], a));
        L(this, "afterSetOptions", {
          userOptions: a
        });
      },
      defaultLabelFormatter: function defaultLabelFormatter() {
        var a = this.axis,
            b = this.value,
            d = a.chart.time,
            k = a.categories,
            l = this.dateTimeLabelFormat,
            g = e.lang,
            r = g.numericSymbols;
        g = g.numericSymbolMagnitude || 1E3;
        var x = r && r.length,
            p = a.options.labels.format;
        a = a.isLog ? Math.abs(b) : a.tickInterval;
        if (p) var h = E(p, this, d);else if (k) h = b;else if (l) h = d.dateFormat(l, b);else if (x && 1E3 <= a) for (; x-- && void 0 === h;) {
          d = Math.pow(g, x + 1), a >= d && 0 === 10 * b % d && null !== r[x] && 0 !== b && (h = c.numberFormat(b / d, -1) + r[x]);
        }
        void 0 === h && (h = 1E4 <= Math.abs(b) ? c.numberFormat(b, -1) : c.numberFormat(b, -1, void 0, ""));
        return h;
      },
      getSeriesExtremes: function getSeriesExtremes() {
        var a = this,
            b = a.chart,
            d;
        L(this, "getSeriesExtremes", null, function () {
          a.hasVisibleSeries = !1;
          a.dataMin = a.dataMax = a.threshold = null;
          a.softThreshold = !a.isXAxis;
          a.buildStacks && a.buildStacks();
          a.series.forEach(function (m) {
            if (m.visible || !b.options.chart.ignoreHiddenSeries) {
              var e = m.options,
                  w = e.threshold;
              a.hasVisibleSeries = !0;
              a.positiveValuesOnly && 0 >= w && (w = null);

              if (a.isXAxis) {
                if (e = m.xData, e.length) {
                  d = m.getXExtremes(e);
                  var k = d.min;
                  var c = d.max;
                  C(k) || k instanceof Date || (e = e.filter(C), d = m.getXExtremes(e), k = d.min, c = d.max);
                  e.length && (a.dataMin = Math.min(h(a.dataMin, k), k), a.dataMax = Math.max(h(a.dataMax, c), c));
                }
              } else if (m.getExtremes(), c = m.dataMax, k = m.dataMin, z(k) && z(c) && (a.dataMin = Math.min(h(a.dataMin, k), k), a.dataMax = Math.max(h(a.dataMax, c), c)), z(w) && (a.threshold = w), !e.softThreshold || a.positiveValuesOnly) a.softThreshold = !1;
            }
          });
        });
        L(this, "afterGetSeriesExtremes");
      },
      translate: function translate(a, b, d, e, k, c) {
        var m = this.linkedParent || this,
            w = 1,
            l = 0,
            g = e ? m.oldTransA : m.transA;
        e = e ? m.oldMin : m.min;
        var r = m.minPixelPadding;
        k = (m.isOrdinal || m.isBroken || m.isLog && k) && m.lin2val;
        g || (g = m.transA);
        d && (w *= -1, l = m.len);
        m.reversed && (w *= -1, l -= w * (m.sector || m.len));
        b ? (a = (a * w + l - r) / g + e, k && (a = m.lin2val(a))) : (k && (a = m.val2lin(a)), a = C(e) ? w * (a - e) * g + l + w * r + (C(c) ? g * c : 0) : void 0);
        return a;
      },
      toPixels: function toPixels(a, b) {
        return this.translate(a, !1, !this.horiz, null, !0) + (b ? 0 : this.pos);
      },
      toValue: function toValue(a, b) {
        return this.translate(a - (b ? 0 : this.pos), !0, !this.horiz, null, !0);
      },
      getPlotLinePath: function getPlotLinePath(a) {
        var b = this,
            d = b.chart,
            e = b.left,
            w = b.top,
            k = a.old,
            c = a.value,
            l = a.translatedValue,
            g = a.lineWidth,
            r = a.force,
            x,
            p,
            A,
            u,
            n = k && d.oldChartHeight || d.chartHeight,
            f = k && d.oldChartWidth || d.chartWidth,
            E,
            q = b.transB,
            v = function v(a, b, d) {
          if ("pass" !== r && a < b || a > d) r ? a = Math.min(Math.max(b, a), d) : E = !0;
          return a;
        };

        a = {
          value: c,
          lineWidth: g,
          old: k,
          force: r,
          acrossPanes: a.acrossPanes,
          translatedValue: l
        };
        L(this, "getPlotLinePath", a, function (a) {
          l = h(l, b.translate(c, null, null, k));
          l = Math.min(Math.max(-1E5, l), 1E5);
          x = A = Math.round(l + q);
          p = u = Math.round(n - l - q);
          C(l) ? b.horiz ? (p = w, u = n - b.bottom, x = A = v(x, e, e + b.width)) : (x = e, A = f - b.right, p = u = v(p, w, w + b.height)) : (E = !0, r = !1);
          a.path = E && !r ? null : d.renderer.crispLine(["M", x, p, "L", A, u], g || 1);
        });
        return a.path;
      },
      getLinearTickPositions: function getLinearTickPositions(a, b, e) {
        var m = d(Math.floor(b / a) * a);
        e = d(Math.ceil(e / a) * a);
        var w = [],
            k;
        d(m + a) === m && (k = 20);
        if (this.single) return [b];

        for (b = m; b <= e;) {
          w.push(b);
          b = d(b + a, k);
          if (b === c) break;
          var c = b;
        }

        return w;
      },
      getMinorTickInterval: function getMinorTickInterval() {
        var a = this.options;
        return !0 === a.minorTicks ? h(a.minorTickInterval, "auto") : !1 === a.minorTicks ? null : a.minorTickInterval;
      },
      getMinorTickPositions: function getMinorTickPositions() {
        var a = this,
            b = a.options,
            d = a.tickPositions,
            e = a.minorTickInterval,
            k = [],
            c = a.pointRangePadding || 0,
            l = a.min - c;
        c = a.max + c;
        var g = c - l;
        if (g && g / e < a.len / 3) if (a.isLog) this.paddedTicks.forEach(function (b, d, m) {
          d && k.push.apply(k, a.getLogTickPositions(e, m[d - 1], m[d], !0));
        });else if (a.isDatetimeAxis && "auto" === this.getMinorTickInterval()) k = k.concat(a.getTimeTicks(a.normalizeTimeTickInterval(e), l, c, b.startOfWeek));else for (b = l + (d[0] - l) % e; b <= c && b !== k[0]; b += e) {
          k.push(b);
        }
        0 !== k.length && a.trimTicks(k);
        return k;
      },
      adjustForMinRange: function adjustForMinRange() {
        var a = this.options,
            b = this.min,
            d = this.max,
            e,
            k,
            c,
            l,
            g;
        this.isXAxis && void 0 === this.minRange && !this.isLog && (z(a.min) || z(a.max) ? this.minRange = null : (this.series.forEach(function (a) {
          l = a.xData;

          for (k = g = a.xIncrement ? 1 : l.length - 1; 0 < k; k--) {
            if (c = l[k] - l[k - 1], void 0 === e || c < e) e = c;
          }
        }), this.minRange = Math.min(5 * e, this.dataMax - this.dataMin)));

        if (d - b < this.minRange) {
          var r = this.dataMax - this.dataMin >= this.minRange;
          var x = this.minRange;
          var p = (x - d + b) / 2;
          p = [b - p, h(a.min, b - p)];
          r && (p[2] = this.isLog ? this.log2lin(this.dataMin) : this.dataMin);
          b = F(p);
          d = [b + x, h(a.max, b + x)];
          r && (d[2] = this.isLog ? this.log2lin(this.dataMax) : this.dataMax);
          d = G(d);
          d - b < x && (p[0] = d - x, p[1] = h(a.min, d - x), b = F(p));
        }

        this.min = b;
        this.max = d;
      },
      getClosest: function getClosest() {
        var a;
        this.categories ? a = 1 : this.series.forEach(function (b) {
          var d = b.closestPointRange,
              m = b.visible || !b.chart.options.chart.ignoreHiddenSeries;
          !b.noSharedTooltip && z(d) && m && (a = z(a) ? Math.min(a, d) : d);
        });
        return a;
      },
      nameToX: function nameToX(a) {
        var b = v(this.categories),
            d = b ? this.categories : this.names,
            e = a.options.x;
        a.series.requireSorting = !1;
        z(e) || (e = !1 === this.options.uniqueNames ? a.series.autoIncrement() : b ? d.indexOf(a.name) : h(d.keys[a.name], -1));

        if (-1 === e) {
          if (!b) var k = d.length;
        } else k = e;

        void 0 !== k && (this.names[k] = a.name, this.names.keys[a.name] = k);
        return k;
      },
      updateNames: function updateNames() {
        var a = this,
            b = this.names;
        0 < b.length && (Object.keys(b.keys).forEach(function (a) {
          delete b.keys[a];
        }), b.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach(function (b) {
          b.xIncrement = null;
          if (!b.points || b.isDirtyData) a.max = Math.max(a.max, b.xData.length - 1), b.processData(), b.generatePoints();
          b.data.forEach(function (d, e) {
            if (d && d.options && void 0 !== d.name) {
              var m = a.nameToX(d);
              void 0 !== m && m !== d.x && (d.x = m, b.xData[e] = m);
            }
          });
        }));
      },
      setAxisTranslation: function setAxisTranslation(a) {
        var b = this,
            d = b.max - b.min,
            e = b.axisPointRange || 0,
            k = 0,
            w = 0,
            c = b.linkedParent,
            l = !!b.categories,
            g = b.transA,
            r = b.isXAxis;

        if (r || l || e) {
          var p = b.getClosest();
          c ? (k = c.minPointOffset, w = c.pointRangePadding) : b.series.forEach(function (a) {
            var d = l ? 1 : r ? h(a.options.pointRange, p, 0) : b.axisPointRange || 0,
                m = a.options.pointPlacement;
            e = Math.max(e, d);
            if (!b.single || l) a = x.xrange && a instanceof x.xrange ? !r : r, k = Math.max(k, a && H(m) ? 0 : d / 2), w = Math.max(w, a && "on" === m ? 0 : d);
          });
          c = b.ordinalSlope && p ? b.ordinalSlope / p : 1;
          b.minPointOffset = k *= c;
          b.pointRangePadding = w *= c;
          b.pointRange = Math.min(e, b.single && l ? 1 : d);
          r && (b.closestPointRange = p);
        }

        a && (b.oldTransA = g);
        b.translationSlope = b.transA = g = b.staticScale || b.len / (d + w || 1);
        b.transB = b.horiz ? b.left : b.bottom;
        b.minPixelPadding = g * k;
        L(this, "afterSetAxisTranslation");
      },
      minFromRange: function minFromRange() {
        return this.max - this.range;
      },
      setTickInterval: function setTickInterval(a) {
        var b = this,
            e = b.chart,
            w = b.options,
            l = b.isLog,
            g = b.isDatetimeAxis,
            r = b.isXAxis,
            x = b.isLinked,
            A = w.maxPadding,
            u = w.minPadding,
            n = w.tickInterval,
            f = w.tickPixelInterval,
            E = b.categories,
            q = C(b.threshold) ? b.threshold : null,
            v = b.softThreshold;
        g || E || x || this.getTickAmount();
        var t = h(b.userMin, w.min);
        var y = h(b.userMax, w.max);

        if (x) {
          b.linkedParent = e[b.coll][w.linkedTo];
          var B = b.linkedParent.getExtremes();
          b.min = h(B.min, B.dataMin);
          b.max = h(B.max, B.dataMax);
          w.type !== b.linkedParent.options.type && c.error(11, 1, e);
        } else {
          if (!v && z(q)) if (b.dataMin >= q) B = q, u = 0;else if (b.dataMax <= q) {
            var H = q;
            A = 0;
          }
          b.min = h(t, B, b.dataMin);
          b.max = h(y, H, b.dataMax);
        }

        l && (b.positiveValuesOnly && !a && 0 >= Math.min(b.min, h(b.dataMin, b.min)) && c.error(10, 1, e), b.min = d(b.log2lin(b.min), 16), b.max = d(b.log2lin(b.max), 16));
        b.range && z(b.max) && (b.userMin = b.min = t = Math.max(b.dataMin, b.minFromRange()), b.userMax = y = b.max, b.range = null);
        L(b, "foundExtremes");
        b.beforePadding && b.beforePadding();
        b.adjustForMinRange();
        !(E || b.axisPointRange || b.usePercentage || x) && z(b.min) && z(b.max) && (e = b.max - b.min) && (!z(t) && u && (b.min -= e * u), !z(y) && A && (b.max += e * A));
        C(w.softMin) && !C(b.userMin) && w.softMin < b.min && (b.min = t = w.softMin);
        C(w.softMax) && !C(b.userMax) && w.softMax > b.max && (b.max = y = w.softMax);
        C(w.floor) && (b.min = Math.min(Math.max(b.min, w.floor), Number.MAX_VALUE));
        C(w.ceiling) && (b.max = Math.max(Math.min(b.max, w.ceiling), h(b.userMax, -Number.MAX_VALUE)));
        v && z(b.dataMin) && (q = q || 0, !z(t) && b.min < q && b.dataMin >= q ? b.min = b.options.minRange ? Math.min(q, b.max - b.minRange) : q : !z(y) && b.max > q && b.dataMax <= q && (b.max = b.options.minRange ? Math.max(q, b.min + b.minRange) : q));
        b.tickInterval = b.min === b.max || void 0 === b.min || void 0 === b.max ? 1 : x && !n && f === b.linkedParent.options.tickPixelInterval ? n = b.linkedParent.tickInterval : h(n, this.tickAmount ? (b.max - b.min) / Math.max(this.tickAmount - 1, 1) : void 0, E ? 1 : (b.max - b.min) * f / Math.max(b.len, f));
        r && !a && b.series.forEach(function (a) {
          a.processData(b.min !== b.oldMin || b.max !== b.oldMax);
        });
        b.setAxisTranslation(!0);
        b.beforeSetTickPositions && b.beforeSetTickPositions();
        b.postProcessTickInterval && (b.tickInterval = b.postProcessTickInterval(b.tickInterval));
        b.pointRange && !n && (b.tickInterval = Math.max(b.pointRange, b.tickInterval));
        a = h(w.minTickInterval, b.isDatetimeAxis && b.closestPointRange);
        !n && b.tickInterval < a && (b.tickInterval = a);
        g || l || n || (b.tickInterval = k(b.tickInterval, null, p(b.tickInterval), h(w.allowDecimals, !(.5 < b.tickInterval && 5 > b.tickInterval && 1E3 < b.max && 9999 > b.max)), !!this.tickAmount));
        this.tickAmount || (b.tickInterval = b.unsquish());
        this.setTickPositions();
      },
      setTickPositions: function setTickPositions() {
        var a = this.options,
            b = a.tickPositions;
        var d = this.getMinorTickInterval();
        var e = a.tickPositioner,
            k = a.startOnTick,
            l = a.endOnTick;
        this.tickmarkOffset = this.categories && "between" === a.tickmarkPlacement && 1 === this.tickInterval ? .5 : 0;
        this.minorTickInterval = "auto" === d && this.tickInterval ? this.tickInterval / 5 : d;
        this.single = this.min === this.max && z(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || !1 !== a.allowDecimals);
        this.tickPositions = d = b && b.slice();
        !d && (!this.ordinalPositions && (this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200) ? (d = [this.min, this.max], c.error(19, !1, this.chart)) : d = this.isDatetimeAxis ? this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval, a.units), this.min, this.max, a.startOfWeek, this.ordinalPositions, this.closestPointRange, !0) : this.isLog ? this.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max), d.length > this.len && (d = [d[0], d.pop()], d[0] === d[1] && (d.length = 1)), this.tickPositions = d, e && (e = e.apply(this, [this.min, this.max]))) && (this.tickPositions = d = e);
        this.paddedTicks = d.slice(0);
        this.trimTicks(d, k, l);
        this.isLinked || (this.single && 2 > d.length && !this.categories && (this.min -= .5, this.max += .5), b || e || this.adjustTickAmount());
        L(this, "afterSetTickPositions");
      },
      trimTicks: function trimTicks(a, b, d) {
        var e = a[0],
            m = a[a.length - 1],
            k = this.minPointOffset || 0;
        L(this, "trimTicks");

        if (!this.isLinked) {
          if (b && -Infinity !== e) this.min = e;else for (; this.min - k > a[0];) {
            a.shift();
          }
          if (d) this.max = m;else for (; this.max + k < a[a.length - 1];) {
            a.pop();
          }
          0 === a.length && z(e) && !this.options.tickPositions && a.push((m + e) / 2);
        }
      },
      alignToOthers: function alignToOthers() {
        var a = {},
            b,
            d = this.options;
        !1 === this.chart.options.chart.alignTicks || !1 === d.alignTicks || !1 === d.startOnTick || !1 === d.endOnTick || this.isLog || this.chart[this.coll].forEach(function (d) {
          var e = d.options;
          e = [d.horiz ? e.left : e.top, e.width, e.height, e.pane].join();
          d.series.length && (a[e] ? b = !0 : a[e] = 1);
        });
        return b;
      },
      getTickAmount: function getTickAmount() {
        var a = this.options,
            b = a.tickAmount,
            d = a.tickPixelInterval;
        !z(a.tickInterval) && this.len < d && !this.isRadial && !this.isLog && a.startOnTick && a.endOnTick && (b = 2);
        !b && this.alignToOthers() && (b = Math.ceil(this.len / d) + 1);
        4 > b && (this.finalTickAmt = b, b = 5);
        this.tickAmount = b;
      },
      adjustTickAmount: function adjustTickAmount() {
        var a = this.options,
            b = this.tickInterval,
            e = this.tickPositions,
            k = this.tickAmount,
            c = this.finalTickAmt,
            l = e && e.length,
            g = h(this.threshold, this.softThreshold ? 0 : null),
            r;

        if (this.hasData()) {
          if (l < k) {
            for (r = this.min; e.length < k;) {
              e.length % 2 || r === g ? e.push(d(e[e.length - 1] + b)) : e.unshift(d(e[0] - b));
            }

            this.transA *= (l - 1) / (k - 1);
            this.min = a.startOnTick ? e[0] : Math.min(this.min, e[0]);
            this.max = a.endOnTick ? e[e.length - 1] : Math.max(this.max, e[e.length - 1]);
          } else l > k && (this.tickInterval *= 2, this.setTickPositions());

          if (z(c)) {
            for (b = a = e.length; b--;) {
              (3 === c && 1 === b % 2 || 2 >= c && 0 < b && b < a - 1) && e.splice(b, 1);
            }

            this.finalTickAmt = void 0;
          }
        }
      },
      setScale: function setScale() {
        var a = this.series.some(function (a) {
          return a.isDirtyData || a.isDirty || a.xAxis && a.xAxis.isDirty;
        }),
            b;
        this.oldMin = this.min;
        this.oldMax = this.max;
        this.oldAxisLength = this.len;
        this.setAxisSize();
        (b = this.len !== this.oldAxisLength) || a || this.isLinked || this.forceRedraw || this.userMin !== this.oldUserMin || this.userMax !== this.oldUserMax || this.alignToOthers() ? (this.resetStacks && this.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.oldUserMin = this.userMin, this.oldUserMax = this.userMax, this.isDirty || (this.isDirty = b || this.min !== this.oldMin || this.max !== this.oldMax)) : this.cleanStacks && this.cleanStacks();
        L(this, "afterSetScale");
      },
      setExtremes: function setExtremes(a, b, d, e, k) {
        var m = this,
            w = m.chart;
        d = h(d, !0);
        m.series.forEach(function (a) {
          delete a.kdTree;
        });
        k = t(k, {
          min: a,
          max: b
        });
        L(m, "setExtremes", k, function () {
          m.userMin = a;
          m.userMax = b;
          m.eventArgs = k;
          d && w.redraw(e);
        });
      },
      zoom: function zoom(a, b) {
        var d = this.dataMin,
            e = this.dataMax,
            m = this.options,
            k = Math.min(d, h(m.min, d)),
            w = Math.max(e, h(m.max, e));
        a = {
          newMin: a,
          newMax: b
        };
        L(this, "zoom", a, function (a) {
          var b = a.newMin,
              m = a.newMax;
          if (b !== this.min || m !== this.max) this.allowZoomOutside || (z(d) && (b < k && (b = k), b > w && (b = w)), z(e) && (m < k && (m = k), m > w && (m = w))), this.displayBtn = void 0 !== b || void 0 !== m, this.setExtremes(b, m, !1, void 0, {
            trigger: "zoom"
          });
          a.zoomed = !0;
        });
        return a.zoomed;
      },
      setAxisSize: function setAxisSize() {
        var a = this.chart,
            b = this.options,
            d = b.offsets || [0, 0, 0, 0],
            e = this.horiz,
            k = this.width = Math.round(c.relativeLength(h(b.width, a.plotWidth - d[3] + d[1]), a.plotWidth)),
            l = this.height = Math.round(c.relativeLength(h(b.height, a.plotHeight - d[0] + d[2]), a.plotHeight)),
            g = this.top = Math.round(c.relativeLength(h(b.top, a.plotTop + d[0]), a.plotHeight, a.plotTop));
        b = this.left = Math.round(c.relativeLength(h(b.left, a.plotLeft + d[3]), a.plotWidth, a.plotLeft));
        this.bottom = a.chartHeight - l - g;
        this.right = a.chartWidth - k - b;
        this.len = Math.max(e ? k : l, 0);
        this.pos = e ? b : g;
      },
      getExtremes: function getExtremes() {
        var a = this.isLog;
        return {
          min: a ? d(this.lin2log(this.min)) : this.min,
          max: a ? d(this.lin2log(this.max)) : this.max,
          dataMin: this.dataMin,
          dataMax: this.dataMax,
          userMin: this.userMin,
          userMax: this.userMax
        };
      },
      getThreshold: function getThreshold(a) {
        var b = this.isLog,
            d = b ? this.lin2log(this.min) : this.min;
        b = b ? this.lin2log(this.max) : this.max;
        null === a || -Infinity === a ? a = d : Infinity === a ? a = b : d > a ? a = d : b < a && (a = b);
        return this.translate(a, 0, 1, 0, 1);
      },
      autoLabelAlign: function autoLabelAlign(a) {
        var b = (h(a, 0) - 90 * this.side + 720) % 360;
        a = {
          align: "center"
        };
        L(this, "autoLabelAlign", a, function (a) {
          15 < b && 165 > b ? a.align = "right" : 195 < b && 345 > b && (a.align = "left");
        });
        return a.align;
      },
      tickSize: function tickSize(a) {
        var b = this.options,
            d = b[a + "Length"],
            e = h(b[a + "Width"], "tick" === a && this.isXAxis && !this.categories ? 1 : 0);

        if (e && d) {
          "inside" === b[a + "Position"] && (d = -d);
          var k = [d, e];
        }

        a = {
          tickSize: k
        };
        L(this, "afterTickSize", a);
        return a.tickSize;
      },
      labelMetrics: function labelMetrics() {
        var a = this.tickPositions && this.tickPositions[0] || 0;
        return this.chart.renderer.fontMetrics(this.options.labels.style && this.options.labels.style.fontSize, this.ticks[a] && this.ticks[a].label);
      },
      unsquish: function unsquish() {
        var a = this.options.labels,
            b = this.horiz,
            e = this.tickInterval,
            k = e,
            c = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / e),
            g,
            r = a.rotation,
            x = this.labelMetrics(),
            p,
            A = Number.MAX_VALUE,
            u,
            n = this.max - this.min,
            f = function f(a) {
          var b = a / (c || 1);
          b = 1 < b ? Math.ceil(b) : 1;
          b * e > n && Infinity !== a && Infinity !== c && n && (b = Math.ceil(n / e));
          return d(b * e);
        };

        b ? (u = !a.staggerLines && !a.step && (z(r) ? [r] : c < h(a.autoRotationLimit, 80) && a.autoRotation)) && u.forEach(function (a) {
          if (a === r || a && -90 <= a && 90 >= a) {
            p = f(Math.abs(x.h / Math.sin(l * a)));
            var b = p + Math.abs(a / 360);
            b < A && (A = b, g = a, k = p);
          }
        }) : a.step || (k = f(x.h));
        this.autoRotation = u;
        this.labelRotation = h(g, r);
        return k;
      },
      getSlotWidth: function getSlotWidth(a) {
        var b = this.chart,
            d = this.horiz,
            e = this.options.labels,
            k = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1),
            c = b.margin[3];
        return a && a.slotWidth || d && 2 > (e.step || 0) && !e.rotation && (this.staggerLines || 1) * this.len / k || !d && (e.style && parseInt(e.style.width, 10) || c && c - b.spacing[3] || .33 * b.chartWidth);
      },
      renderUnsquish: function renderUnsquish() {
        var a = this.chart,
            b = a.renderer,
            d = this.tickPositions,
            e = this.ticks,
            k = this.options.labels,
            c = k && k.style || {},
            l = this.horiz,
            g = this.getSlotWidth(),
            r = Math.max(1, Math.round(g - 2 * (k.padding || 5))),
            x = {},
            p = this.labelMetrics(),
            h = k.style && k.style.textOverflow,
            A = 0;
        H(k.rotation) || (x.rotation = k.rotation || 0);
        d.forEach(function (a) {
          (a = e[a]) && a.label && a.label.textPxLength > A && (A = a.label.textPxLength);
        });
        this.maxLabelLength = A;
        if (this.autoRotation) A > r && A > p.h ? x.rotation = this.labelRotation : this.labelRotation = 0;else if (g) {
          var u = r;

          if (!h) {
            var n = "clip";

            for (r = d.length; !l && r--;) {
              var f = d[r];
              if (f = e[f].label) f.styles && "ellipsis" === f.styles.textOverflow ? f.css({
                textOverflow: "clip"
              }) : f.textPxLength > g && f.css({
                width: g + "px"
              }), f.getBBox().height > this.len / d.length - (p.h - p.f) && (f.specificTextOverflow = "ellipsis");
            }
          }
        }
        x.rotation && (u = A > .5 * a.chartHeight ? .33 * a.chartHeight : A, h || (n = "ellipsis"));
        if (this.labelAlign = k.align || this.autoLabelAlign(this.labelRotation)) x.align = this.labelAlign;
        d.forEach(function (a) {
          var b = (a = e[a]) && a.label,
              d = c.width,
              k = {};
          b && (b.attr(x), a.shortenLabel ? a.shortenLabel() : u && !d && "nowrap" !== c.whiteSpace && (u < b.textPxLength || "SPAN" === b.element.tagName) ? (k.width = u, h || (k.textOverflow = b.specificTextOverflow || n), b.css(k)) : b.styles && b.styles.width && !k.width && !d && b.css({
            width: null
          }), delete b.specificTextOverflow, a.rotation = x.rotation);
        }, this);
        this.tickRotCorr = b.rotCorr(p.b, this.labelRotation || 0, 0 !== this.side);
      },
      hasData: function hasData() {
        return this.series.some(function (a) {
          return a.hasData();
        }) || this.options.showEmpty && z(this.min) && z(this.max);
      },
      addTitle: function addTitle(a) {
        var b = this.chart.renderer,
            d = this.horiz,
            e = this.opposite,
            k = this.options.title,
            c,
            l = this.chart.styledMode;
        this.axisTitle || ((c = k.textAlign) || (c = (d ? {
          low: "left",
          middle: "center",
          high: "right"
        } : {
          low: e ? "right" : "left",
          middle: "center",
          high: e ? "left" : "right"
        })[k.align]), this.axisTitle = b.text(k.text, 0, 0, k.useHTML).attr({
          zIndex: 7,
          rotation: k.rotation || 0,
          align: c
        }).addClass("highcharts-axis-title"), l || this.axisTitle.css(u(k.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = !0);
        l || k.style.width || this.isRadial || this.axisTitle.css({
          width: this.len
        });
        this.axisTitle[a ? "show" : "hide"](a);
      },
      generateTick: function generateTick(a) {
        var b = this.ticks;
        b[a] ? b[a].addLabel() : b[a] = new A(this, a);
      },
      getOffset: function getOffset() {
        var a = this,
            b = a.chart,
            d = b.renderer,
            e = a.options,
            k = a.tickPositions,
            c = a.ticks,
            l = a.horiz,
            g = a.side,
            r = b.inverted && !a.isZAxis ? [1, 0, 3, 2][g] : g,
            x,
            p = 0,
            A = 0,
            u = e.title,
            n = e.labels,
            f = 0,
            E = b.axisOffset;
        b = b.clipOffset;
        var q = [-1, 1, 1, -1][g],
            v = e.className,
            t = a.axisParent;
        var C = a.hasData();
        a.showAxis = x = C || h(e.showEmpty, !0);
        a.staggerLines = a.horiz && n.staggerLines;
        a.axisGroup || (a.gridGroup = d.g("grid").attr({
          zIndex: e.gridZIndex || 1
        }).addClass("highcharts-" + this.coll.toLowerCase() + "-grid " + (v || "")).add(t), a.axisGroup = d.g("axis").attr({
          zIndex: e.zIndex || 2
        }).addClass("highcharts-" + this.coll.toLowerCase() + " " + (v || "")).add(t), a.labelGroup = d.g("axis-labels").attr({
          zIndex: n.zIndex || 7
        }).addClass("highcharts-" + a.coll.toLowerCase() + "-labels " + (v || "")).add(t));
        C || a.isLinked ? (k.forEach(function (b, d) {
          a.generateTick(b, d);
        }), a.renderUnsquish(), a.reserveSpaceDefault = 0 === g || 2 === g || {
          1: "left",
          3: "right"
        }[g] === a.labelAlign, h(n.reserveSpace, "center" === a.labelAlign ? !0 : null, a.reserveSpaceDefault) && k.forEach(function (a) {
          f = Math.max(c[a].getLabelSize(), f);
        }), a.staggerLines && (f *= a.staggerLines), a.labelOffset = f * (a.opposite ? -1 : 1)) : y(c, function (a, b) {
          a.destroy();
          delete c[b];
        });

        if (u && u.text && !1 !== u.enabled && (a.addTitle(x), x && !1 !== u.reserveSpace)) {
          a.titleOffset = p = a.axisTitle.getBBox()[l ? "height" : "width"];
          var B = u.offset;
          A = z(B) ? 0 : h(u.margin, l ? 5 : 10);
        }

        a.renderLine();
        a.offset = q * h(e.offset, E[g] ? E[g] + (e.margin || 0) : 0);
        a.tickRotCorr = a.tickRotCorr || {
          x: 0,
          y: 0
        };
        d = 0 === g ? -a.labelMetrics().h : 2 === g ? a.tickRotCorr.y : 0;
        A = Math.abs(f) + A;
        f && (A = A - d + q * (l ? h(n.y, a.tickRotCorr.y + 8 * q) : n.x));
        a.axisTitleMargin = h(B, A);
        a.getMaxLabelDimensions && (a.maxLabelDimensions = a.getMaxLabelDimensions(c, k));
        l = this.tickSize("tick");
        E[g] = Math.max(E[g], a.axisTitleMargin + p + q * a.offset, A, k && k.length && l ? l[0] + q * a.offset : 0);
        e = e.offset ? 0 : 2 * Math.floor(a.axisLine.strokeWidth() / 2);
        b[r] = Math.max(b[r], e);
        L(this, "afterGetOffset");
      },
      getLinePath: function getLinePath(a) {
        var b = this.chart,
            d = this.opposite,
            e = this.offset,
            k = this.horiz,
            c = this.left + (d ? this.width : 0) + e;
        e = b.chartHeight - this.bottom - (d ? this.height : 0) + e;
        d && (a *= -1);
        return b.renderer.crispLine(["M", k ? this.left : c, k ? e : this.top, "L", k ? b.chartWidth - this.right : c, k ? e : b.chartHeight - this.bottom], a);
      },
      renderLine: function renderLine() {
        this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({
          stroke: this.options.lineColor,
          "stroke-width": this.options.lineWidth,
          zIndex: 7
        }));
      },
      getTitlePosition: function getTitlePosition() {
        var a = this.horiz,
            b = this.left,
            d = this.top,
            e = this.len,
            k = this.options.title,
            c = a ? b : d,
            l = this.opposite,
            g = this.offset,
            r = k.x || 0,
            x = k.y || 0,
            p = this.axisTitle,
            A = this.chart.renderer.fontMetrics(k.style && k.style.fontSize, p);
        p = Math.max(p.getBBox(null, 0).height - A.h - 1, 0);
        e = {
          low: c + (a ? 0 : e),
          middle: c + e / 2,
          high: c + (a ? e : 0)
        }[k.align];
        b = (a ? d + this.height : b) + (a ? 1 : -1) * (l ? -1 : 1) * this.axisTitleMargin + [-p, p, A.f, -p][this.side];
        a = {
          x: a ? e + r : b + (l ? this.width : 0) + g + r,
          y: a ? b + x - (l ? this.height : 0) + g : e + x
        };
        L(this, "afterGetTitlePosition", {
          titlePosition: a
        });
        return a;
      },
      renderMinorTick: function renderMinorTick(a) {
        var b = this.chart.hasRendered && C(this.oldMin),
            d = this.minorTicks;
        d[a] || (d[a] = new A(this, a, "minor"));
        b && d[a].isNew && d[a].render(null, !0);
        d[a].render(null, !1, 1);
      },
      renderTick: function renderTick(a, b) {
        var d = this.isLinked,
            e = this.ticks,
            k = this.chart.hasRendered && C(this.oldMin);
        if (!d || a >= this.min && a <= this.max) e[a] || (e[a] = new A(this, a)), k && e[a].isNew && e[a].render(b, !0, -1), e[a].render(b);
      },
      render: function render() {
        var a = this,
            d = a.chart,
            e = a.options,
            k = a.isLog,
            l = a.isLinked,
            g = a.tickPositions,
            r = a.axisTitle,
            x = a.ticks,
            p = a.minorTicks,
            h = a.alternateBands,
            u = e.stackLabels,
            n = e.alternateGridColor,
            f = a.tickmarkOffset,
            E = a.axisLine,
            v = a.showAxis,
            t = b(d.renderer.globalAnimation),
            B,
            H;
        a.labelEdge.length = 0;
        a.overlap = !1;
        [x, p, h].forEach(function (a) {
          y(a, function (a) {
            a.isActive = !1;
          });
        });
        if (a.hasData() || l) a.minorTickInterval && !a.categories && a.getMinorTickPositions().forEach(function (b) {
          a.renderMinorTick(b);
        }), g.length && (g.forEach(function (b, d) {
          a.renderTick(b, d);
        }), f && (0 === a.min || a.single) && (x[-1] || (x[-1] = new A(a, -1, null, !0)), x[-1].render(-1))), n && g.forEach(function (b, e) {
          H = void 0 !== g[e + 1] ? g[e + 1] + f : a.max - f;
          0 === e % 2 && b < a.max && H <= a.max + (d.polar ? -f : f) && (h[b] || (h[b] = new c.PlotLineOrBand(a)), B = b + f, h[b].options = {
            from: k ? a.lin2log(B) : B,
            to: k ? a.lin2log(H) : H,
            color: n
          }, h[b].render(), h[b].isActive = !0);
        }), a._addedPlotLB || ((e.plotLines || []).concat(e.plotBands || []).forEach(function (b) {
          a.addPlotBandOrLine(b);
        }), a._addedPlotLB = !0);
        [x, p, h].forEach(function (a) {
          var b,
              e = [],
              k = t.duration;
          y(a, function (a, b) {
            a.isActive || (a.render(b, !1, 0), a.isActive = !1, e.push(b));
          });
          q(function () {
            for (b = e.length; b--;) {
              a[e[b]] && !a[e[b]].isActive && (a[e[b]].destroy(), delete a[e[b]]);
            }
          }, a !== h && d.hasRendered && k ? k : 0);
        });
        E && (E[E.isPlaced ? "animate" : "attr"]({
          d: this.getLinePath(E.strokeWidth())
        }), E.isPlaced = !0, E[v ? "show" : "hide"](v));
        r && v && (e = a.getTitlePosition(), C(e.y) ? (r[r.isNew ? "attr" : "animate"](e), r.isNew = !1) : (r.attr("y", -9999), r.isNew = !0));
        u && u.enabled && a.renderStackTotals();
        a.isDirty = !1;
        L(this, "afterRender");
      },
      redraw: function redraw() {
        this.visible && (this.render(), this.plotLinesAndBands.forEach(function (a) {
          a.render();
        }));
        this.series.forEach(function (a) {
          a.isDirty = !0;
        });
      },
      keepProps: "extKey hcEvents names series userMax userMin".split(" "),
      destroy: function destroy(a) {
        var b = this,
            d = b.stacks,
            e = b.plotLinesAndBands,
            k;
        L(this, "destroy", {
          keepEvents: a
        });
        a || r(b);
        y(d, function (a, b) {
          B(a);
          d[b] = null;
        });
        [b.ticks, b.minorTicks, b.alternateBands].forEach(function (a) {
          B(a);
        });
        if (e) for (a = e.length; a--;) {
          e[a].destroy();
        }
        "stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function (a) {
          b[a] && (b[a] = b[a].destroy());
        });

        for (k in b.plotLinesAndBandsGroups) {
          b.plotLinesAndBandsGroups[k] = b.plotLinesAndBandsGroups[k].destroy();
        }

        y(b, function (a, d) {
          -1 === b.keepProps.indexOf(d) && delete b[d];
        });
      },
      drawCrosshair: function drawCrosshair(b, d) {
        var e,
            k = this.crosshair,
            c = h(k.snap, !0),
            l,
            g = this.cross;
        L(this, "drawCrosshair", {
          e: b,
          point: d
        });
        b || (b = this.cross && this.cross.e);

        if (this.crosshair && !1 !== (z(d) || !c)) {
          c ? z(d) && (l = h("colorAxis" !== this.coll ? d.crosshairPos : null, this.isXAxis ? d.plotX : this.len - d.plotY)) : l = b && (this.horiz ? b.chartX - this.pos : this.len - b.chartY + this.pos);
          z(l) && (e = this.getPlotLinePath({
            value: d && (this.isXAxis ? d.x : h(d.stackY, d.y)),
            translatedValue: l
          }) || null);

          if (!z(e)) {
            this.hideCrosshair();
            return;
          }

          c = this.categories && !this.isRadial;
          g || (this.cross = g = this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (c ? "category " : "thin ") + k.className).attr({
            zIndex: h(k.zIndex, 2)
          }).add(), this.chart.styledMode || (g.attr({
            stroke: k.color || (c ? a("#ccd6eb").setOpacity(.25).get() : "#cccccc"),
            "stroke-width": h(k.width, 1)
          }).css({
            "pointer-events": "none"
          }), k.dashStyle && g.attr({
            dashstyle: k.dashStyle
          })));
          g.show().attr({
            d: e
          });
          c && !k.width && g.attr({
            "stroke-width": this.transA
          });
          this.cross.e = b;
        } else this.hideCrosshair();

        L(this, "afterDrawCrosshair", {
          e: b,
          point: d
        });
      },
      hideCrosshair: function hideCrosshair() {
        this.cross && this.cross.hide();
        L(this, "afterHideCrosshair");
      }
    });
    return c.Axis = f;
  });
  M(I, "parts/DateTimeAxis.js", [I["parts/Globals.js"]], function (c) {
    var f = c.Axis,
        F = c.getMagnitude,
        G = c.normalizeTickInterval,
        z = c.timeUnits;

    f.prototype.getTimeTicks = function () {
      return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
    };

    f.prototype.normalizeTimeTickInterval = function (c, f) {
      var v = f || [["millisecond", [1, 2, 5, 10, 20, 25, 50, 100, 200, 500]], ["second", [1, 2, 5, 10, 15, 30]], ["minute", [1, 2, 5, 10, 15, 30]], ["hour", [1, 2, 3, 4, 6, 8, 12]], ["day", [1, 2]], ["week", [1, 2]], ["month", [1, 2, 3, 4, 6]], ["year", null]];
      f = v[v.length - 1];
      var t = z[f[0]],
          B = f[1],
          y;

      for (y = 0; y < v.length && !(f = v[y], t = z[f[0]], B = f[1], v[y + 1] && c <= (t * B[B.length - 1] + z[v[y + 1][0]]) / 2); y++) {
        ;
      }

      t === z.year && c < 5 * t && (B = [1, 2, 5]);
      c = G(c / t, B, "year" === f[0] ? Math.max(F(c / t), 1) : 1);
      return {
        unitRange: t,
        count: c,
        unitName: f[0]
      };
    };
  });
  M(I, "parts/LogarithmicAxis.js", [I["parts/Globals.js"], I["parts/Utilities.js"]], function (c, f) {
    var F = f.pick;
    f = c.Axis;
    var G = c.getMagnitude,
        z = c.normalizeTickInterval;

    f.prototype.getLogTickPositions = function (c, f, v, C) {
      var t = this.options,
          y = this.len,
          h = [];
      C || (this._minorAutoInterval = null);
      if (.5 <= c) c = Math.round(c), h = this.getLinearTickPositions(c, f, v);else if (.08 <= c) {
        y = Math.floor(f);
        var n, q;

        for (t = .3 < c ? [1, 2, 4] : .15 < c ? [1, 2, 4, 6, 8] : [1, 2, 3, 4, 5, 6, 7, 8, 9]; y < v + 1 && !q; y++) {
          var g = t.length;

          for (n = 0; n < g && !q; n++) {
            var b = this.log2lin(this.lin2log(y) * t[n]);
            b > f && (!C || a <= v) && void 0 !== a && h.push(a);
            a > v && (q = !0);
            var a = b;
          }
        }
      } else f = this.lin2log(f), v = this.lin2log(v), c = C ? this.getMinorTickInterval() : t.tickInterval, c = F("auto" === c ? null : c, this._minorAutoInterval, t.tickPixelInterval / (C ? 5 : 1) * (v - f) / ((C ? y / this.tickPositions.length : y) || 1)), c = z(c, null, G(c)), h = this.getLinearTickPositions(c, f, v).map(this.log2lin), C || (this._minorAutoInterval = c / 5);
      C || (this.tickInterval = c);
      return h;
    };

    f.prototype.log2lin = function (c) {
      return Math.log(c) / Math.LN10;
    };

    f.prototype.lin2log = function (c) {
      return Math.pow(10, c);
    };
  });
  M(I, "parts/PlotLineOrBand.js", [I["parts/Globals.js"], I["parts/Axis.js"], I["parts/Utilities.js"]], function (c, f, F) {
    var G = F.arrayMax,
        z = F.arrayMin,
        B = F.defined,
        t = F.destroyObjectProperties,
        v = F.erase,
        C = F.extend,
        H = F.objectEach,
        y = F.pick,
        h = c.merge;

    c.PlotLineOrBand = function (c, h) {
      this.axis = c;
      h && (this.options = h, this.id = h.id);
    };

    c.PlotLineOrBand.prototype = {
      render: function render() {
        c.fireEvent(this, "render");
        var f = this,
            q = f.axis,
            g = q.horiz,
            b = f.options,
            a = b.label,
            d = f.label,
            e = b.to,
            l = b.from,
            L = b.value,
            E = B(l) && B(e),
            p = B(L),
            u = f.svgElem,
            k = !u,
            r = [],
            x = b.color,
            A = y(b.zIndex, 0),
            w = b.events;
        r = {
          "class": "highcharts-plot-" + (E ? "band " : "line ") + (b.className || "")
        };
        var m = {},
            K = q.chart.renderer,
            J = E ? "bands" : "lines";
        q.isLog && (l = q.log2lin(l), e = q.log2lin(e), L = q.log2lin(L));
        q.chart.styledMode || (p ? (r.stroke = x || "#999999", r["stroke-width"] = y(b.width, 1), b.dashStyle && (r.dashstyle = b.dashStyle)) : E && (r.fill = x || "#e6ebf5", b.borderWidth && (r.stroke = b.borderColor, r["stroke-width"] = b.borderWidth)));
        m.zIndex = A;
        J += "-" + A;
        (x = q.plotLinesAndBandsGroups[J]) || (q.plotLinesAndBandsGroups[J] = x = K.g("plot-" + J).attr(m).add());
        k && (f.svgElem = u = K.path().attr(r).add(x));
        if (p) r = q.getPlotLinePath({
          value: L,
          lineWidth: u.strokeWidth(),
          acrossPanes: b.acrossPanes
        });else if (E) r = q.getPlotBandPath(l, e, b);else return;
        (k || !u.d) && r && r.length ? (u.attr({
          d: r
        }), w && H(w, function (a, b) {
          u.on(b, function (a) {
            w[b].apply(f, [a]);
          });
        })) : u && (r ? (u.show(!0), u.animate({
          d: r
        })) : u.d && (u.hide(), d && (f.label = d = d.destroy())));
        a && (B(a.text) || B(a.formatter)) && r && r.length && 0 < q.width && 0 < q.height && !r.isFlat ? (a = h({
          align: g && E && "center",
          x: g ? !E && 4 : 10,
          verticalAlign: !g && E && "middle",
          y: g ? E ? 16 : 10 : E ? 6 : -4,
          rotation: g && !E && 90
        }, a), this.renderLabel(a, r, E, A)) : d && d.hide();
        return f;
      },
      renderLabel: function renderLabel(c, h, g, b) {
        var a = this.label,
            d = this.axis.chart.renderer;
        a || (a = {
          align: c.textAlign || c.align,
          rotation: c.rotation,
          "class": "highcharts-plot-" + (g ? "band" : "line") + "-label " + (c.className || "")
        }, a.zIndex = b, b = this.getLabelText(c), this.label = a = d.text(b, 0, 0, c.useHTML).attr(a).add(), this.axis.chart.styledMode || a.css(c.style));
        d = h.xBounds || [h[1], h[4], g ? h[6] : h[1]];
        h = h.yBounds || [h[2], h[5], g ? h[7] : h[2]];
        g = z(d);
        b = z(h);
        a.align(c, !1, {
          x: g,
          y: b,
          width: G(d) - g,
          height: G(h) - b
        });
        a.show(!0);
      },
      getLabelText: function getLabelText(c) {
        return B(c.formatter) ? c.formatter.call(this) : c.text;
      },
      destroy: function destroy() {
        v(this.axis.plotLinesAndBands, this);
        delete this.axis;
        t(this);
      }
    };
    C(f.prototype, {
      getPlotBandPath: function getPlotBandPath(c, h) {
        var g = this.getPlotLinePath({
          value: h,
          force: !0,
          acrossPanes: this.options.acrossPanes
        }),
            b = this.getPlotLinePath({
          value: c,
          force: !0,
          acrossPanes: this.options.acrossPanes
        }),
            a = [],
            d = this.horiz,
            e = 1;
        c = c < this.min && h < this.min || c > this.max && h > this.max;

        if (b && g) {
          if (c) {
            var l = b.toString() === g.toString();
            e = 0;
          }

          for (c = 0; c < b.length; c += 6) {
            d && g[c + 1] === b[c + 1] ? (g[c + 1] += e, g[c + 4] += e) : d || g[c + 2] !== b[c + 2] || (g[c + 2] += e, g[c + 5] += e), a.push("M", b[c + 1], b[c + 2], "L", b[c + 4], b[c + 5], g[c + 4], g[c + 5], g[c + 1], g[c + 2], "z"), a.isFlat = l;
          }
        }

        return a;
      },
      addPlotBand: function addPlotBand(c) {
        return this.addPlotBandOrLine(c, "plotBands");
      },
      addPlotLine: function addPlotLine(c) {
        return this.addPlotBandOrLine(c, "plotLines");
      },
      addPlotBandOrLine: function addPlotBandOrLine(h, f) {
        var g = new c.PlotLineOrBand(this, h).render(),
            b = this.userOptions;

        if (g) {
          if (f) {
            var a = b[f] || [];
            a.push(h);
            b[f] = a;
          }

          this.plotLinesAndBands.push(g);
        }

        return g;
      },
      removePlotBandOrLine: function removePlotBandOrLine(c) {
        for (var h = this.plotLinesAndBands, g = this.options, b = this.userOptions, a = h.length; a--;) {
          h[a].id === c && h[a].destroy();
        }

        [g.plotLines || [], b.plotLines || [], g.plotBands || [], b.plotBands || []].forEach(function (b) {
          for (a = b.length; a--;) {
            b[a].id === c && v(b, b[a]);
          }
        });
      },
      removePlotBand: function removePlotBand(c) {
        this.removePlotBandOrLine(c);
      },
      removePlotLine: function removePlotLine(c) {
        this.removePlotBandOrLine(c);
      }
    });
  });
  M(I, "parts/Tooltip.js", [I["parts/Globals.js"], I["parts/Utilities.js"]], function (c, f) {
    var F = f.defined,
        G = f.discardElement,
        z = f.extend,
        B = f.isNumber,
        t = f.isString,
        v = f.pick,
        C = f.splat,
        H = f.syncTimeout;
    "";
    var y = c.doc,
        h = c.format,
        n = c.merge,
        q = c.timeUnits;

    c.Tooltip = function () {
      this.init.apply(this, arguments);
    };

    c.Tooltip.prototype = {
      init: function init(c, b) {
        this.chart = c;
        this.options = b;
        this.crosshairs = [];
        this.now = {
          x: 0,
          y: 0
        };
        this.isHidden = !0;
        this.split = b.split && !c.inverted;
        this.shared = b.shared || this.split;
        this.outside = v(b.outside, !(!c.scrollablePixelsX && !c.scrollablePixelsY));
      },
      cleanSplit: function cleanSplit(c) {
        this.chart.series.forEach(function (b) {
          var a = b && b.tt;
          a && (!a.isActive || c ? b.tt = a.destroy() : a.isActive = !1);
        });
      },
      applyFilter: function applyFilter() {
        var c = this.chart;
        c.renderer.definition({
          tagName: "filter",
          id: "drop-shadow-" + c.index,
          opacity: .5,
          children: [{
            tagName: "feGaussianBlur",
            "in": "SourceAlpha",
            stdDeviation: 1
          }, {
            tagName: "feOffset",
            dx: 1,
            dy: 1
          }, {
            tagName: "feComponentTransfer",
            children: [{
              tagName: "feFuncA",
              type: "linear",
              slope: .3
            }]
          }, {
            tagName: "feMerge",
            children: [{
              tagName: "feMergeNode"
            }, {
              tagName: "feMergeNode",
              "in": "SourceGraphic"
            }]
          }]
        });
        c.renderer.definition({
          tagName: "style",
          textContent: ".highcharts-tooltip-" + c.index + "{filter:url(#drop-shadow-" + c.index + ")}"
        });
      },
      getLabel: function getLabel() {
        var g = this,
            b = this.chart.renderer,
            a = this.chart.styledMode,
            d = this.options,
            e = "tooltip" + (F(d.className) ? " " + d.className : ""),
            l;

        if (!this.label) {
          this.outside && (this.container = l = c.doc.createElement("div"), l.className = "highcharts-tooltip-container", c.css(l, {
            position: "absolute",
            top: "1px",
            pointerEvents: d.style && d.style.pointerEvents,
            zIndex: 3
          }), c.doc.body.appendChild(l), this.renderer = b = new c.Renderer(l, 0, 0, {}, void 0, void 0, b.styledMode));
          this.split ? this.label = b.g(e) : (this.label = b.label("", 0, 0, d.shape || "callout", null, null, d.useHTML, null, e).attr({
            padding: d.padding,
            r: d.borderRadius
          }), a || this.label.attr({
            fill: d.backgroundColor,
            "stroke-width": d.borderWidth
          }).css(d.style).shadow(d.shadow));
          a && (this.applyFilter(), this.label.addClass("highcharts-tooltip-" + this.chart.index));

          if (g.outside && !g.split) {
            var h = {
              x: this.label.xSetter,
              y: this.label.ySetter
            };

            this.label.xSetter = function (a, b) {
              h[b].call(this.label, g.distance);
              l.style.left = a + "px";
            };

            this.label.ySetter = function (a, b) {
              h[b].call(this.label, g.distance);
              l.style.top = a + "px";
            };
          }

          this.label.attr({
            zIndex: 8
          }).add();
        }

        return this.label;
      },
      update: function update(c) {
        this.destroy();
        n(!0, this.chart.options.tooltip.userOptions, c);
        this.init(this.chart, n(!0, this.options, c));
      },
      destroy: function destroy() {
        this.label && (this.label = this.label.destroy());
        this.split && this.tt && (this.cleanSplit(this.chart, !0), this.tt = this.tt.destroy());
        this.renderer && (this.renderer = this.renderer.destroy(), G(this.container));
        c.clearTimeout(this.hideTimer);
        c.clearTimeout(this.tooltipTimeout);
      },
      move: function move(g, b, a, d) {
        var e = this,
            l = e.now,
            h = !1 !== e.options.animation && !e.isHidden && (1 < Math.abs(g - l.x) || 1 < Math.abs(b - l.y)),
            f = e.followPointer || 1 < e.len;
        z(l, {
          x: h ? (2 * l.x + g) / 3 : g,
          y: h ? (l.y + b) / 2 : b,
          anchorX: f ? void 0 : h ? (2 * l.anchorX + a) / 3 : a,
          anchorY: f ? void 0 : h ? (l.anchorY + d) / 2 : d
        });
        e.getLabel().attr(l);
        h && (c.clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function () {
          e && e.move(g, b, a, d);
        }, 32));
      },
      hide: function hide(g) {
        var b = this;
        c.clearTimeout(this.hideTimer);
        g = v(g, this.options.hideDelay, 500);
        this.isHidden || (this.hideTimer = H(function () {
          b.getLabel()[g ? "fadeOut" : "hide"]();
          b.isHidden = !0;
        }, g));
      },
      getAnchor: function getAnchor(c, b) {
        var a = this.chart,
            d = a.pointer,
            e = a.inverted,
            l = a.plotTop,
            g = a.plotLeft,
            h = 0,
            p = 0,
            f,
            k;
        c = C(c);
        this.followPointer && b ? (void 0 === b.chartX && (b = d.normalize(b)), c = [b.chartX - a.plotLeft, b.chartY - l]) : c[0].tooltipPos ? c = c[0].tooltipPos : (c.forEach(function (a) {
          f = a.series.yAxis;
          k = a.series.xAxis;
          h += a.plotX + (!e && k ? k.left - g : 0);
          p += (a.plotLow ? (a.plotLow + a.plotHigh) / 2 : a.plotY) + (!e && f ? f.top - l : 0);
        }), h /= c.length, p /= c.length, c = [e ? a.plotWidth - p : h, this.shared && !e && 1 < c.length && b ? b.chartY - l : e ? a.plotHeight - h : p]);
        return c.map(Math.round);
      },
      getPosition: function getPosition(c, b, a) {
        var d = this.chart,
            e = this.distance,
            l = {},
            g = d.inverted && a.h || 0,
            h,
            p = this.outside,
            f = p ? y.documentElement.clientWidth - 2 * e : d.chartWidth,
            k = p ? Math.max(y.body.scrollHeight, y.documentElement.scrollHeight, y.body.offsetHeight, y.documentElement.offsetHeight, y.documentElement.clientHeight) : d.chartHeight,
            r = d.pointer.getChartPosition(),
            x = d.containerScaling,
            A = function A(a) {
          return x ? a * x.scaleX : a;
        },
            w = function w(a) {
          return x ? a * x.scaleY : a;
        },
            m = function m(l) {
          var m = "x" === l;
          return [l, m ? f : k, m ? c : b].concat(p ? [m ? A(c) : w(b), m ? r.left - e + A(a.plotX + d.plotLeft) : r.top - e + w(a.plotY + d.plotTop), 0, m ? f : k] : [m ? c : b, m ? a.plotX + d.plotLeft : a.plotY + d.plotTop, m ? d.plotLeft : d.plotTop, m ? d.plotLeft + d.plotWidth : d.plotTop + d.plotHeight]);
        },
            n = m("y"),
            J = m("x"),
            q = !this.followPointer && v(a.ttBelow, !d.inverted === !!a.negative),
            t = function t(a, b, d, c, k, m, r) {
          var x = "y" === a ? w(e) : A(e),
              p = (d - c) / 2,
              h = c < k - e,
              f = k + e + c < b,
              u = k - x - d + p;
          k = k + x - p;
          if (q && f) l[a] = k;else if (!q && h) l[a] = u;else if (h) l[a] = Math.min(r - c, 0 > u - g ? u : u - g);else if (f) l[a] = Math.max(m, k + g + d > b ? k : k + g);else return !1;
        },
            C = function C(a, b, d, k, c) {
          var m;
          c < e || c > b - e ? m = !1 : l[a] = c < d / 2 ? 1 : c > b - k / 2 ? b - k - 2 : c - d / 2;
          return m;
        },
            O = function O(a) {
          var b = n;
          n = J;
          J = b;
          h = a;
        },
            D = function D() {
          !1 !== t.apply(0, n) ? !1 !== C.apply(0, J) || h || (O(!0), D()) : h ? l.x = l.y = 0 : (O(!0), D());
        };

        (d.inverted || 1 < this.len) && O();
        D();
        return l;
      },
      defaultFormatter: function defaultFormatter(c) {
        var b = this.points || C(this);
        var a = [c.tooltipFooterHeaderFormatter(b[0])];
        a = a.concat(c.bodyFormatter(b));
        a.push(c.tooltipFooterHeaderFormatter(b[0], !0));
        return a;
      },
      refresh: function refresh(g, b) {
        var a = this.chart,
            d = this.options,
            e = g,
            l = {},
            h = [],
            f = d.formatter || this.defaultFormatter;
        l = this.shared;
        var p = a.styledMode;

        if (d.enabled) {
          c.clearTimeout(this.hideTimer);
          this.followPointer = C(e)[0].series.tooltipOptions.followPointer;
          var u = this.getAnchor(e, b);
          b = u[0];
          var k = u[1];
          !l || e.series && e.series.noSharedTooltip ? l = e.getLabelConfig() : (a.pointer.applyInactiveState(e), e.forEach(function (a) {
            a.setState("hover");
            h.push(a.getLabelConfig());
          }), l = {
            x: e[0].category,
            y: e[0].y
          }, l.points = h, e = e[0]);
          this.len = h.length;
          a = f.call(l, this);
          f = e.series;
          this.distance = v(f.tooltipOptions.distance, 16);
          !1 === a ? this.hide() : (this.split ? this.renderSplit(a, C(g)) : (g = this.getLabel(), d.style.width && !p || g.css({
            width: this.chart.spacingBox.width
          }), g.attr({
            text: a && a.join ? a.join("") : a
          }), g.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" + v(e.colorIndex, f.colorIndex)), p || g.attr({
            stroke: d.borderColor || e.color || f.color || "#666666"
          }), this.updatePosition({
            plotX: b,
            plotY: k,
            negative: e.negative,
            ttBelow: e.ttBelow,
            h: u[2] || 0
          })), this.isHidden && this.label && this.label.attr({
            opacity: 1
          }).show(), this.isHidden = !1);
          c.fireEvent(this, "refresh");
        }
      },
      renderSplit: function renderSplit(g, b) {
        var a = this,
            d = [],
            e = this.chart,
            l = e.renderer,
            h = !0,
            f = this.options,
            p = 0,
            u,
            k = this.getLabel(),
            r = e.plotTop;
        t(g) && (g = [!1, g]);
        g.slice(0, b.length + 1).forEach(function (c, m) {
          if (!1 !== c && "" !== c) {
            m = b[m - 1] || {
              isHeader: !0,
              plotX: b[0].plotX,
              plotY: e.plotHeight
            };
            var g = m.series || a,
                x = g.tt,
                w = m.series || {},
                A = "highcharts-color-" + v(m.colorIndex, w.colorIndex, "none");
            x || (x = {
              padding: f.padding,
              r: f.borderRadius
            }, e.styledMode || (x.fill = f.backgroundColor, x["stroke-width"] = f.borderWidth), g.tt = x = l.label(null, null, null, (m.isHeader ? f.headerShape : f.shape) || "callout", null, null, f.useHTML).addClass(m.isHeader ? "highcharts-tooltip-header " : "highcharts-tooltip-box " + A).attr(x).add(k));
            x.isActive = !0;
            x.attr({
              text: c
            });
            e.styledMode || x.css(f.style).shadow(f.shadow).attr({
              stroke: f.borderColor || m.color || w.color || "#333333"
            });
            c = x.getBBox();
            A = c.width + x.strokeWidth();
            m.isHeader ? (p = c.height, e.xAxis[0].opposite && (u = !0, r -= p), c = Math.max(0, Math.min(m.plotX + e.plotLeft - A / 2, e.chartWidth + (e.scrollablePixelsX ? e.scrollablePixelsX - e.marginRight : 0) - A))) : c = m.plotX + e.plotLeft - v(f.distance, 16) - A;
            0 > c && (h = !1);
            m.isHeader ? w = u ? -p : e.plotHeight + p : (w = w.yAxis, w = w.pos - r + Math.max(0, Math.min(m.plotY || 0, w.len)));
            d.push({
              target: w,
              rank: m.isHeader ? 1 : 0,
              size: g.tt.getBBox().height + 1,
              point: m,
              x: c,
              tt: x
            });
          }
        });
        this.cleanSplit();
        f.positioner && d.forEach(function (b) {
          var d = f.positioner.call(a, b.tt.getBBox().width, b.size, b.point);
          b.x = d.x;
          b.align = 0;
          b.target = d.y;
          b.rank = v(d.rank, b.rank);
        });
        c.distribute(d, e.plotHeight + p);
        d.forEach(function (b) {
          var d = b.point,
              c = d.series,
              k = c && c.yAxis;
          b.tt.attr({
            visibility: void 0 === b.pos ? "hidden" : "inherit",
            x: h || d.isHeader || f.positioner ? b.x : d.plotX + e.plotLeft + a.distance,
            y: b.pos + r,
            anchorX: d.isHeader ? d.plotX + e.plotLeft : d.plotX + c.xAxis.pos,
            anchorY: d.isHeader ? e.plotTop + e.plotHeight / 2 : k.pos + Math.max(0, Math.min(d.plotY, k.len))
          });
        });
        var x = a.container;
        g = a.renderer;

        if (a.outside && x && g) {
          var A = e.pointer.getChartPosition();
          x.style.left = A.left + "px";
          x.style.top = A.top + "px";
          x = k.getBBox();
          g.setSize(x.width + x.x, x.height + x.y, !1);
        }
      },
      updatePosition: function updatePosition(g) {
        var b = this.chart,
            a = b.pointer,
            d = this.getLabel(),
            e = g.plotX + b.plotLeft,
            l = g.plotY + b.plotTop;
        a = a.getChartPosition();
        g = (this.options.positioner || this.getPosition).call(this, d.width, d.height, g);

        if (this.outside) {
          var h = (this.options.borderWidth || 0) + 2 * this.distance;
          this.renderer.setSize(d.width + h, d.height + h, !1);
          if (b = b.containerScaling) c.css(this.container, {
            transform: "scale(" + b.scaleX + ", " + b.scaleY + ")"
          }), e *= b.scaleX, l *= b.scaleY;
          e += a.left - g.x;
          l += a.top - g.y;
        }

        this.move(Math.round(g.x), Math.round(g.y || 0), e, l);
      },
      getDateFormat: function getDateFormat(c, b, a, d) {
        var e = this.chart.time,
            l = e.dateFormat("%m-%d %H:%M:%S.%L", b),
            g = {
          millisecond: 15,
          second: 12,
          minute: 9,
          hour: 6,
          day: 3
        },
            h = "millisecond";

        for (p in q) {
          if (c === q.week && +e.dateFormat("%w", b) === a && "00:00:00.000" === l.substr(6)) {
            var p = "week";
            break;
          }

          if (q[p] > c) {
            p = h;
            break;
          }

          if (g[p] && l.substr(g[p]) !== "01-01 00:00:00.000".substr(g[p])) break;
          "week" !== p && (h = p);
        }

        if (p) var f = e.resolveDTLFormat(d[p]).main;
        return f;
      },
      getXDateFormat: function getXDateFormat(c, b, a) {
        b = b.dateTimeLabelFormats;
        var d = a && a.closestPointRange;
        return (d ? this.getDateFormat(d, c.x, a.options.startOfWeek, b) : b.day) || b.year;
      },
      tooltipFooterHeaderFormatter: function tooltipFooterHeaderFormatter(g, b) {
        var a = b ? "footer" : "header",
            d = g.series,
            e = d.tooltipOptions,
            l = e.xDateFormat,
            f = d.xAxis,
            n = f && "datetime" === f.options.type && B(g.key),
            p = e[a + "Format"];
        b = {
          isFooter: b,
          labelConfig: g
        };
        c.fireEvent(this, "headerFormatter", b, function (a) {
          n && !l && (l = this.getXDateFormat(g, e, f));
          n && l && (g.point && g.point.tooltipDateKeys || ["key"]).forEach(function (a) {
            p = p.replace("{point." + a + "}", "{point." + a + ":" + l + "}");
          });
          d.chart.styledMode && (p = this.styledModeFormat(p));
          a.text = h(p, {
            point: g,
            series: d
          }, this.chart.time);
        });
        return b.text;
      },
      bodyFormatter: function bodyFormatter(c) {
        return c.map(function (b) {
          var a = b.series.tooltipOptions;
          return (a[(b.point.formatPrefix || "point") + "Formatter"] || b.point.tooltipFormatter).call(b.point, a[(b.point.formatPrefix || "point") + "Format"] || "");
        });
      },
      styledModeFormat: function styledModeFormat(c) {
        return c.replace('style="font-size: 10px"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex}"');
      }
    };
  });
  M(I, "parts/Pointer.js", [I["parts/Globals.js"], I["parts/Utilities.js"]], function (c, f) {
    var F = f.attr,
        G = f.defined,
        z = f.extend,
        B = f.isNumber,
        t = f.isObject,
        v = f.objectEach,
        C = f.pick,
        H = f.splat,
        y = c.addEvent,
        h = c.charts,
        n = c.color,
        q = c.css,
        g = c.find,
        b = c.fireEvent,
        a = c.offset,
        d = c.Tooltip;

    c.Pointer = function (a, b) {
      this.init(a, b);
    };

    c.Pointer.prototype = {
      init: function init(a, b) {
        this.options = b;
        this.chart = a;
        this.runChartClick = b.chart.events && !!b.chart.events.click;
        this.pinchDown = [];
        this.lastValidTouch = {};
        d && (a.tooltip = new d(a, b.tooltip), this.followTouchMove = C(b.tooltip.followTouchMove, !0));
        this.setDOMEvents();
      },
      zoomOption: function zoomOption(a) {
        var b = this.chart,
            d = b.options.chart,
            e = d.zoomType || "";
        b = b.inverted;
        /touch/.test(a.type) && (e = C(d.pinchType, e));
        this.zoomX = a = /x/.test(e);
        this.zoomY = e = /y/.test(e);
        this.zoomHor = a && !b || e && b;
        this.zoomVert = e && !b || a && b;
        this.hasZoom = a || e;
      },
      getChartPosition: function getChartPosition() {
        return this.chartPosition || (this.chartPosition = a(this.chart.container));
      },
      normalize: function normalize(a, b) {
        var d = a.touches ? a.touches.length ? a.touches.item(0) : a.changedTouches[0] : a;
        b || (b = this.getChartPosition());
        var e = d.pageX - b.left;
        b = d.pageY - b.top;
        if (d = this.chart.containerScaling) e /= d.scaleX, b /= d.scaleY;
        return z(a, {
          chartX: Math.round(e),
          chartY: Math.round(b)
        });
      },
      getCoordinates: function getCoordinates(a) {
        var b = {
          xAxis: [],
          yAxis: []
        };
        this.chart.axes.forEach(function (d) {
          b[d.isXAxis ? "xAxis" : "yAxis"].push({
            axis: d,
            value: d.toValue(a[d.horiz ? "chartX" : "chartY"])
          });
        });
        return b;
      },
      findNearestKDPoint: function findNearestKDPoint(a, b, d) {
        var e;
        a.forEach(function (a) {
          var c = !(a.noSharedTooltip && b) && 0 > a.options.findNearestPointBy.indexOf("y");
          a = a.searchPoint(d, c);

          if ((c = t(a, !0)) && !(c = !t(e, !0))) {
            c = e.distX - a.distX;
            var k = e.dist - a.dist,
                l = (a.series.group && a.series.group.zIndex) - (e.series.group && e.series.group.zIndex);
            c = 0 < (0 !== c && b ? c : 0 !== k ? k : 0 !== l ? l : e.series.index > a.series.index ? -1 : 1);
          }

          c && (e = a);
        });
        return e;
      },
      getPointFromEvent: function getPointFromEvent(a) {
        a = a.target;

        for (var b; a && !b;) {
          b = a.point, a = a.parentNode;
        }

        return b;
      },
      getChartCoordinatesFromPoint: function getChartCoordinatesFromPoint(a, b) {
        var d = a.series,
            e = d.xAxis;
        d = d.yAxis;
        var c = C(a.clientX, a.plotX),
            l = a.shapeArgs;
        if (e && d) return b ? {
          chartX: e.len + e.pos - c,
          chartY: d.len + d.pos - a.plotY
        } : {
          chartX: c + e.pos,
          chartY: a.plotY + d.pos
        };
        if (l && l.x && l.y) return {
          chartX: l.x,
          chartY: l.y
        };
      },
      getHoverData: function getHoverData(a, b, d, c, h, f) {
        var e,
            l = [];
        c = !(!c || !a);
        var x = b && !b.stickyTracking ? [b] : d.filter(function (a) {
          return a.visible && !(!h && a.directTouch) && C(a.options.enableMouseTracking, !0) && a.stickyTracking;
        });
        b = (e = c || !f ? a : this.findNearestKDPoint(x, h, f)) && e.series;
        e && (h && !b.noSharedTooltip ? (x = d.filter(function (a) {
          return a.visible && !(!h && a.directTouch) && C(a.options.enableMouseTracking, !0) && !a.noSharedTooltip;
        }), x.forEach(function (a) {
          var b = g(a.points, function (a) {
            return a.x === e.x && !a.isNull;
          });
          t(b) && (a.chart.isBoosting && (b = a.getPoint(b)), l.push(b));
        })) : l.push(e));
        return {
          hoverPoint: e,
          hoverSeries: b,
          hoverPoints: l
        };
      },
      runPointActions: function runPointActions(a, b) {
        var d = this.chart,
            e = d.tooltip && d.tooltip.options.enabled ? d.tooltip : void 0,
            l = e ? e.shared : !1,
            g = b || d.hoverPoint,
            k = g && g.series || d.hoverSeries;
        k = this.getHoverData(g, k, d.series, (!a || "touchmove" !== a.type) && (!!b || k && k.directTouch && this.isDirectTouch), l, a);
        g = k.hoverPoint;
        var r = k.hoverPoints;
        b = (k = k.hoverSeries) && k.tooltipOptions.followPointer;
        l = l && k && !k.noSharedTooltip;

        if (g && (g !== d.hoverPoint || e && e.isHidden)) {
          (d.hoverPoints || []).forEach(function (a) {
            -1 === r.indexOf(a) && a.setState();
          });
          if (d.hoverSeries !== k) k.onMouseOver();
          this.applyInactiveState(r);
          (r || []).forEach(function (a) {
            a.setState("hover");
          });
          d.hoverPoint && d.hoverPoint.firePointEvent("mouseOut");
          if (!g.series) return;
          g.firePointEvent("mouseOver");
          d.hoverPoints = r;
          d.hoverPoint = g;
          e && e.refresh(l ? r : g, a);
        } else b && e && !e.isHidden && (g = e.getAnchor([{}], a), e.updatePosition({
          plotX: g[0],
          plotY: g[1]
        }));

        this.unDocMouseMove || (this.unDocMouseMove = y(d.container.ownerDocument, "mousemove", function (a) {
          var b = h[c.hoverChartIndex];
          if (b) b.pointer.onDocumentMouseMove(a);
        }));
        d.axes.forEach(function (b) {
          var d = C(b.crosshair.snap, !0),
              e = d ? c.find(r, function (a) {
            return a.series[b.coll] === b;
          }) : void 0;
          e || !d ? b.drawCrosshair(a, e) : b.hideCrosshair();
        });
      },
      applyInactiveState: function applyInactiveState(a) {
        var b = [],
            d;
        (a || []).forEach(function (a) {
          d = a.series;
          b.push(d);
          d.linkedParent && b.push(d.linkedParent);
          d.linkedSeries && (b = b.concat(d.linkedSeries));
          d.navigatorSeries && b.push(d.navigatorSeries);
        });
        this.chart.series.forEach(function (a) {
          -1 === b.indexOf(a) ? a.setState("inactive", !0) : a.options.inactiveOtherPoints && a.setAllPointsToState("inactive");
        });
      },
      reset: function reset(a, b) {
        var d = this.chart,
            e = d.hoverSeries,
            c = d.hoverPoint,
            g = d.hoverPoints,
            k = d.tooltip,
            l = k && k.shared ? g : c;
        a && l && H(l).forEach(function (b) {
          b.series.isCartesian && void 0 === b.plotX && (a = !1);
        });
        if (a) k && l && H(l).length && (k.refresh(l), k.shared && g ? g.forEach(function (a) {
          a.setState(a.state, !0);
          a.series.isCartesian && (a.series.xAxis.crosshair && a.series.xAxis.drawCrosshair(null, a), a.series.yAxis.crosshair && a.series.yAxis.drawCrosshair(null, a));
        }) : c && (c.setState(c.state, !0), d.axes.forEach(function (a) {
          a.crosshair && a.drawCrosshair(null, c);
        })));else {
          if (c) c.onMouseOut();
          g && g.forEach(function (a) {
            a.setState();
          });
          if (e) e.onMouseOut();
          k && k.hide(b);
          this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove());
          d.axes.forEach(function (a) {
            a.hideCrosshair();
          });
          this.hoverX = d.hoverPoints = d.hoverPoint = null;
        }
      },
      scaleGroups: function scaleGroups(a, b) {
        var d = this.chart,
            e;
        d.series.forEach(function (c) {
          e = a || c.getPlotBox();
          c.xAxis && c.xAxis.zoomEnabled && c.group && (c.group.attr(e), c.markerGroup && (c.markerGroup.attr(e), c.markerGroup.clip(b ? d.clipRect : null)), c.dataLabelsGroup && c.dataLabelsGroup.attr(e));
        });
        d.clipRect.attr(b || d.clipBox);
      },
      dragStart: function dragStart(a) {
        var b = this.chart;
        b.mouseIsDown = a.type;
        b.cancelClick = !1;
        b.mouseDownX = this.mouseDownX = a.chartX;
        b.mouseDownY = this.mouseDownY = a.chartY;
      },
      drag: function drag(a) {
        var b = this.chart,
            d = b.options.chart,
            e = a.chartX,
            c = a.chartY,
            g = this.zoomHor,
            k = this.zoomVert,
            r = b.plotLeft,
            h = b.plotTop,
            A = b.plotWidth,
            w = b.plotHeight,
            m = this.selectionMarker,
            f = this.mouseDownX,
            J = this.mouseDownY,
            v = d.panKey && a[d.panKey + "Key"];
        if (!m || !m.touch) if (e < r ? e = r : e > r + A && (e = r + A), c < h ? c = h : c > h + w && (c = h + w), this.hasDragged = Math.sqrt(Math.pow(f - e, 2) + Math.pow(J - c, 2)), 10 < this.hasDragged) {
          var q = b.isInsidePlot(f - r, J - h);
          b.hasCartesianSeries && (this.zoomX || this.zoomY) && q && !v && !m && (this.selectionMarker = m = b.renderer.rect(r, h, g ? 1 : A, k ? 1 : w, 0).attr({
            "class": "highcharts-selection-marker",
            zIndex: 7
          }).add(), b.styledMode || m.attr({
            fill: d.selectionMarkerFill || n("#335cad").setOpacity(.25).get()
          }));
          m && g && (e -= f, m.attr({
            width: Math.abs(e),
            x: (0 < e ? 0 : e) + f
          }));
          m && k && (e = c - J, m.attr({
            height: Math.abs(e),
            y: (0 < e ? 0 : e) + J
          }));
          q && !m && d.panning && b.pan(a, d.panning);
        }
      },
      drop: function drop(a) {
        var d = this,
            e = this.chart,
            c = this.hasPinched;

        if (this.selectionMarker) {
          var g = {
            originalEvent: a,
            xAxis: [],
            yAxis: []
          },
              h = this.selectionMarker,
              k = h.attr ? h.attr("x") : h.x,
              r = h.attr ? h.attr("y") : h.y,
              x = h.attr ? h.attr("width") : h.width,
              A = h.attr ? h.attr("height") : h.height,
              w;
          if (this.hasDragged || c) e.axes.forEach(function (b) {
            if (b.zoomEnabled && G(b.min) && (c || d[{
              xAxis: "zoomX",
              yAxis: "zoomY"
            }[b.coll]])) {
              var e = b.horiz,
                  m = "touchend" === a.type ? b.minPixelPadding : 0,
                  l = b.toValue((e ? k : r) + m);
              e = b.toValue((e ? k + x : r + A) - m);
              g[b.coll].push({
                axis: b,
                min: Math.min(l, e),
                max: Math.max(l, e)
              });
              w = !0;
            }
          }), w && b(e, "selection", g, function (a) {
            e.zoom(z(a, c ? {
              animation: !1
            } : null));
          });
          B(e.index) && (this.selectionMarker = this.selectionMarker.destroy());
          c && this.scaleGroups();
        }

        e && B(e.index) && (q(e.container, {
          cursor: e._cursor
        }), e.cancelClick = 10 < this.hasDragged, e.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = []);
      },
      onContainerMouseDown: function onContainerMouseDown(a) {
        a = this.normalize(a);
        2 !== a.button && (this.zoomOption(a), a.preventDefault && a.preventDefault(), this.dragStart(a));
      },
      onDocumentMouseUp: function onDocumentMouseUp(a) {
        h[c.hoverChartIndex] && h[c.hoverChartIndex].pointer.drop(a);
      },
      onDocumentMouseMove: function onDocumentMouseMove(a) {
        var b = this.chart,
            d = this.chartPosition;
        a = this.normalize(a, d);
        !d || this.inClass(a.target, "highcharts-tracker") || b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) || this.reset();
      },
      onContainerMouseLeave: function onContainerMouseLeave(a) {
        var b = h[c.hoverChartIndex];
        b && (a.relatedTarget || a.toElement) && (b.pointer.reset(), b.pointer.chartPosition = void 0);
      },
      onContainerMouseMove: function onContainerMouseMove(a) {
        var b = this.chart;
        G(c.hoverChartIndex) && h[c.hoverChartIndex] && h[c.hoverChartIndex].mouseIsDown || (c.hoverChartIndex = b.index);
        a = this.normalize(a);
        a.preventDefault || (a.returnValue = !1);
        "mousedown" === b.mouseIsDown && this.drag(a);
        !this.inClass(a.target, "highcharts-tracker") && !b.isInsidePlot(a.chartX - b.plotLeft, a.chartY - b.plotTop) || b.openMenu || this.runPointActions(a);
      },
      inClass: function inClass(a, b) {
        for (var d; a;) {
          if (d = F(a, "class")) {
            if (-1 !== d.indexOf(b)) return !0;
            if (-1 !== d.indexOf("highcharts-container")) return !1;
          }

          a = a.parentNode;
        }
      },
      onTrackerMouseOut: function onTrackerMouseOut(a) {
        var b = this.chart.hoverSeries;
        a = a.relatedTarget || a.toElement;
        this.isDirectTouch = !1;
        if (!(!b || !a || b.stickyTracking || this.inClass(a, "highcharts-tooltip") || this.inClass(a, "highcharts-series-" + b.index) && this.inClass(a, "highcharts-tracker"))) b.onMouseOut();
      },
      onContainerClick: function onContainerClick(a) {
        var d = this.chart,
            e = d.hoverPoint,
            c = d.plotLeft,
            g = d.plotTop;
        a = this.normalize(a);
        d.cancelClick || (e && this.inClass(a.target, "highcharts-tracker") ? (b(e.series, "click", z(a, {
          point: e
        })), d.hoverPoint && e.firePointEvent("click", a)) : (z(a, this.getCoordinates(a)), d.isInsidePlot(a.chartX - c, a.chartY - g) && b(d, "click", a)));
      },
      setDOMEvents: function setDOMEvents() {
        var a = this,
            b = a.chart.container,
            d = b.ownerDocument;

        b.onmousedown = function (b) {
          a.onContainerMouseDown(b);
        };

        b.onmousemove = function (b) {
          a.onContainerMouseMove(b);
        };

        b.onclick = function (b) {
          a.onContainerClick(b);
        };

        this.unbindContainerMouseLeave = y(b, "mouseleave", a.onContainerMouseLeave);
        c.unbindDocumentMouseUp || (c.unbindDocumentMouseUp = y(d, "mouseup", a.onDocumentMouseUp));
        c.hasTouch && (y(b, "touchstart", function (b) {
          a.onContainerTouchStart(b);
        }), y(b, "touchmove", function (b) {
          a.onContainerTouchMove(b);
        }), c.unbindDocumentTouchEnd || (c.unbindDocumentTouchEnd = y(d, "touchend", a.onDocumentTouchEnd)));
      },
      destroy: function destroy() {
        var a = this;
        a.unDocMouseMove && a.unDocMouseMove();
        this.unbindContainerMouseLeave();
        c.chartCount || (c.unbindDocumentMouseUp && (c.unbindDocumentMouseUp = c.unbindDocumentMouseUp()), c.unbindDocumentTouchEnd && (c.unbindDocumentTouchEnd = c.unbindDocumentTouchEnd()));
        clearInterval(a.tooltipTimeout);
        v(a, function (b, d) {
          a[d] = null;
        });
      }
    };
  });
  M(I, "parts/TouchPointer.js", [I["parts/Globals.js"], I["parts/Utilities.js"]], function (c, f) {
    var F = f.extend,
        G = f.pick,
        z = c.charts,
        B = c.noop;
    F(c.Pointer.prototype, {
      pinchTranslate: function pinchTranslate(c, f, C, B, y, h) {
        this.zoomHor && this.pinchTranslateDirection(!0, c, f, C, B, y, h);
        this.zoomVert && this.pinchTranslateDirection(!1, c, f, C, B, y, h);
      },
      pinchTranslateDirection: function pinchTranslateDirection(c, f, C, B, y, h, n, q) {
        var g = this.chart,
            b = c ? "x" : "y",
            a = c ? "X" : "Y",
            d = "chart" + a,
            e = c ? "width" : "height",
            l = g["plot" + (c ? "Left" : "Top")],
            v,
            t,
            p = q || 1,
            u = g.inverted,
            k = g.bounds[c ? "h" : "v"],
            r = 1 === f.length,
            x = f[0][d],
            A = C[0][d],
            w = !r && f[1][d],
            m = !r && C[1][d];

        C = function C() {
          !r && 20 < Math.abs(x - w) && (p = q || Math.abs(A - m) / Math.abs(x - w));
          t = (l - A) / p + x;
          v = g["plot" + (c ? "Width" : "Height")] / p;
        };

        C();
        f = t;

        if (f < k.min) {
          f = k.min;
          var K = !0;
        } else f + v > k.max && (f = k.max - v, K = !0);

        K ? (A -= .8 * (A - n[b][0]), r || (m -= .8 * (m - n[b][1])), C()) : n[b] = [A, m];
        u || (h[b] = t - l, h[e] = v);
        h = u ? 1 / p : p;
        y[e] = v;
        y[b] = f;
        B[u ? c ? "scaleY" : "scaleX" : "scale" + a] = p;
        B["translate" + a] = h * l + (A - h * x);
      },
      pinch: function pinch(c) {
        var f = this,
            t = f.chart,
            z = f.pinchDown,
            y = c.touches,
            h = y.length,
            n = f.lastValidTouch,
            q = f.hasZoom,
            g = f.selectionMarker,
            b = {},
            a = 1 === h && (f.inClass(c.target, "highcharts-tracker") && t.runTrackerClick || f.runChartClick),
            d = {};
        1 < h && (f.initiated = !0);
        q && f.initiated && !a && c.preventDefault();
        [].map.call(y, function (a) {
          return f.normalize(a);
        });
        "touchstart" === c.type ? ([].forEach.call(y, function (a, b) {
          z[b] = {
            chartX: a.chartX,
            chartY: a.chartY
          };
        }), n.x = [z[0].chartX, z[1] && z[1].chartX], n.y = [z[0].chartY, z[1] && z[1].chartY], t.axes.forEach(function (a) {
          if (a.zoomEnabled) {
            var b = t.bounds[a.horiz ? "h" : "v"],
                d = a.minPixelPadding,
                e = a.toPixels(Math.min(G(a.options.min, a.dataMin), a.dataMin)),
                c = a.toPixels(Math.max(G(a.options.max, a.dataMax), a.dataMax)),
                g = Math.max(e, c);
            b.min = Math.min(a.pos, Math.min(e, c) - d);
            b.max = Math.max(a.pos + a.len, g + d);
          }
        }), f.res = !0) : f.followTouchMove && 1 === h ? this.runPointActions(f.normalize(c)) : z.length && (g || (f.selectionMarker = g = F({
          destroy: B,
          touch: !0
        }, t.plotBox)), f.pinchTranslate(z, y, b, g, d, n), f.hasPinched = q, f.scaleGroups(b, d), f.res && (f.res = !1, this.reset(!1, 0)));
      },
      touch: function touch(f, v) {
        var t = this.chart,
            z;
        if (t.index !== c.hoverChartIndex) this.onContainerMouseLeave({
          relatedTarget: !0
        });
        c.hoverChartIndex = t.index;
        if (1 === f.touches.length) {
          if (f = this.normalize(f), (z = t.isInsidePlot(f.chartX - t.plotLeft, f.chartY - t.plotTop)) && !t.openMenu) {
            v && this.runPointActions(f);

            if ("touchmove" === f.type) {
              v = this.pinchDown;
              var y = v[0] ? 4 <= Math.sqrt(Math.pow(v[0].chartX - f.chartX, 2) + Math.pow(v[0].chartY - f.chartY, 2)) : !1;
            }

            G(y, !0) && this.pinch(f);
          } else v && this.reset();
        } else 2 === f.touches.length && this.pinch(f);
      },
      onContainerTouchStart: function onContainerTouchStart(c) {
        this.zoomOption(c);
        this.touch(c, !0);
      },
      onContainerTouchMove: function onContainerTouchMove(c) {
        this.touch(c);
      },
      onDocumentTouchEnd: function onDocumentTouchEnd(f) {
        z[c.hoverChartIndex] && z[c.hoverChartIndex].pointer.drop(f);
      }
    });
  });
  M(I, "parts/MSPointer.js", [I["parts/Globals.js"], I["parts/Utilities.js"]], function (c, f) {
    var F = f.extend,
        G = f.objectEach,
        z = c.addEvent,
        B = c.charts,
        t = c.css,
        v = c.doc,
        C = c.noop;
    f = c.Pointer;
    var H = c.removeEvent,
        y = c.win,
        h = c.wrap;

    if (!c.hasTouch && (y.PointerEvent || y.MSPointerEvent)) {
      var n = {},
          q = !!y.PointerEvent,
          g = function g() {
        var a = [];

        a.item = function (a) {
          return this[a];
        };

        G(n, function (b) {
          a.push({
            pageX: b.pageX,
            pageY: b.pageY,
            target: b.target
          });
        });
        return a;
      },
          b = function b(a, _b, e, l) {
        "touch" !== a.pointerType && a.pointerType !== a.MSPOINTER_TYPE_TOUCH || !B[c.hoverChartIndex] || (l(a), l = B[c.hoverChartIndex].pointer, l[_b]({
          type: e,
          target: a.currentTarget,
          preventDefault: C,
          touches: g()
        }));
      };

      F(f.prototype, {
        onContainerPointerDown: function onContainerPointerDown(a) {
          b(a, "onContainerTouchStart", "touchstart", function (a) {
            n[a.pointerId] = {
              pageX: a.pageX,
              pageY: a.pageY,
              target: a.currentTarget
            };
          });
        },
        onContainerPointerMove: function onContainerPointerMove(a) {
          b(a, "onContainerTouchMove", "touchmove", function (a) {
            n[a.pointerId] = {
              pageX: a.pageX,
              pageY: a.pageY
            };
            n[a.pointerId].target || (n[a.pointerId].target = a.currentTarget);
          });
        },
        onDocumentPointerUp: function onDocumentPointerUp(a) {
          b(a, "onDocumentTouchEnd", "touchend", function (a) {
            delete n[a.pointerId];
          });
        },
        batchMSEvents: function batchMSEvents(a) {
          a(this.chart.container, q ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);
          a(this.chart.container, q ? "pointermove" : "MSPointerMove", this.onContainerPointerMove);
          a(v, q ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp);
        }
      });
      h(f.prototype, "init", function (a, b, e) {
        a.call(this, b, e);
        this.hasZoom && t(b.container, {
          "-ms-touch-action": "none",
          "touch-action": "none"
        });
      });
      h(f.prototype, "setDOMEvents", function (a) {
        a.apply(this);
        (this.hasZoom || this.followTouchMove) && this.batchMSEvents(z);
      });
      h(f.prototype, "destroy", function (a) {
        this.batchMSEvents(H);
        a.call(this);
      });
    }
  });
  M(I, "parts/Legend.js", [I["parts/Globals.js"], I["parts/Utilities.js"]], function (c, f) {
    var F = f.defined,
        G = f.discardElement,
        z = f.isNumber,
        B = f.pick,
        t = f.setAnimation,
        v = c.addEvent,
        C = c.css,
        H = c.fireEvent;
    f = c.isFirefox;
    var y = c.marginNames,
        h = c.merge,
        n = c.stableSort,
        q = c.win,
        g = c.wrap;

    c.Legend = function (b, a) {
      this.init(b, a);
    };

    c.Legend.prototype = {
      init: function init(b, a) {
        this.chart = b;
        this.setOptions(a);
        a.enabled && (this.render(), v(this.chart, "endResize", function () {
          this.legend.positionCheckboxes();
        }), this.proximate ? this.unchartrender = v(this.chart, "render", function () {
          this.legend.proximatePositions();
          this.legend.positionItems();
        }) : this.unchartrender && this.unchartrender());
      },
      setOptions: function setOptions(b) {
        var a = B(b.padding, 8);
        this.options = b;
        this.chart.styledMode || (this.itemStyle = b.itemStyle, this.itemHiddenStyle = h(this.itemStyle, b.itemHiddenStyle));
        this.itemMarginTop = b.itemMarginTop || 0;
        this.itemMarginBottom = b.itemMarginBottom || 0;
        this.padding = a;
        this.initialItemY = a - 5;
        this.symbolWidth = B(b.symbolWidth, 16);
        this.pages = [];
        this.proximate = "proximate" === b.layout && !this.chart.inverted;
      },
      update: function update(b, a) {
        var d = this.chart;
        this.setOptions(h(!0, this.options, b));
        this.destroy();
        d.isDirtyLegend = d.isDirtyBox = !0;
        B(a, !0) && d.redraw();
        H(this, "afterUpdate");
      },
      colorizeItem: function colorizeItem(b, a) {
        b.legendGroup[a ? "removeClass" : "addClass"]("highcharts-legend-item-hidden");

        if (!this.chart.styledMode) {
          var d = this.options,
              e = b.legendItem,
              c = b.legendLine,
              g = b.legendSymbol,
              h = this.itemHiddenStyle.color;
          d = a ? d.itemStyle.color : h;
          var f = a ? b.color || h : h,
              u = b.options && b.options.marker,
              k = {
            fill: f
          };
          e && e.css({
            fill: d,
            color: d
          });
          c && c.attr({
            stroke: f
          });
          g && (u && g.isMarker && (k = b.pointAttribs(), a || (k.stroke = k.fill = h)), g.attr(k));
        }

        H(this, "afterColorizeItem", {
          item: b,
          visible: a
        });
      },
      positionItems: function positionItems() {
        this.allItems.forEach(this.positionItem, this);
        this.chart.isResizing || this.positionCheckboxes();
      },
      positionItem: function positionItem(b) {
        var a = this.options,
            d = a.symbolPadding;
        a = !a.rtl;
        var e = b._legendItemPos,
            c = e[0];
        e = e[1];
        var g = b.checkbox;
        if ((b = b.legendGroup) && b.element) b[F(b.translateY) ? "animate" : "attr"]({
          translateX: a ? c : this.legendWidth - c - 2 * d - 4,
          translateY: e
        });
        g && (g.x = c, g.y = e);
      },
      destroyItem: function destroyItem(b) {
        var a = b.checkbox;
        ["legendItem", "legendLine", "legendSymbol", "legendGroup"].forEach(function (a) {
          b[a] && (b[a] = b[a].destroy());
        });
        a && G(b.checkbox);
      },
      destroy: function destroy() {
        function b(a) {
          this[a] && (this[a] = this[a].destroy());
        }

        this.getAllItems().forEach(function (a) {
          ["legendItem", "legendGroup"].forEach(b, a);
        });
        "clipRect up down pager nav box title group".split(" ").forEach(b, this);
        this.display = null;
      },
      positionCheckboxes: function positionCheckboxes() {
        var b = this.group && this.group.alignAttr,
            a = this.clipHeight || this.legendHeight,
            d = this.titleHeight;

        if (b) {
          var e = b.translateY;
          this.allItems.forEach(function (c) {
            var g = c.checkbox;

            if (g) {
              var l = e + d + g.y + (this.scrollOffset || 0) + 3;
              C(g, {
                left: b.translateX + c.checkboxOffset + g.x - 20 + "px",
                top: l + "px",
                display: this.proximate || l > e - 6 && l < e + a - 6 ? "" : "none"
              });
            }
          }, this);
        }
      },
      renderTitle: function renderTitle() {
        var b = this.options,
            a = this.padding,
            d = b.title,
            e = 0;
        d.text && (this.title || (this.title = this.chart.renderer.label(d.text, a - 3, a - 4, null, null, null, b.useHTML, null, "legend-title").attr({
          zIndex: 1
        }), this.chart.styledMode || this.title.css(d.style), this.title.add(this.group)), d.width || this.title.css({
          width: this.maxLegendWidth + "px"
        }), b = this.title.getBBox(), e = b.height, this.offsetWidth = b.width, this.contentGroup.attr({
          translateY: e
        }));
        this.titleHeight = e;
      },
      setText: function setText(b) {
        var a = this.options;
        b.legendItem.attr({
          text: a.labelFormat ? c.format(a.labelFormat, b, this.chart.time) : a.labelFormatter.call(b)
        });
      },
      renderItem: function renderItem(b) {
        var a = this.chart,
            d = a.renderer,
            e = this.options,
            c = this.symbolWidth,
            g = e.symbolPadding,
            f = this.itemStyle,
            p = this.itemHiddenStyle,
            u = "horizontal" === e.layout ? B(e.itemDistance, 20) : 0,
            k = !e.rtl,
            r = b.legendItem,
            x = !b.series,
            A = !x && b.series.drawLegendSymbol ? b.series : b,
            w = A.options;
        w = this.createCheckboxForItem && w && w.showCheckbox;
        u = c + g + u + (w ? 20 : 0);
        var m = e.useHTML,
            n = b.options.className;
        r || (b.legendGroup = d.g("legend-item").addClass("highcharts-" + A.type + "-series highcharts-color-" + b.colorIndex + (n ? " " + n : "") + (x ? " highcharts-series-" + b.index : "")).attr({
          zIndex: 1
        }).add(this.scrollGroup), b.legendItem = r = d.text("", k ? c + g : -g, this.baseline || 0, m), a.styledMode || r.css(h(b.visible ? f : p)), r.attr({
          align: k ? "left" : "right",
          zIndex: 2
        }).add(b.legendGroup), this.baseline || (this.fontMetrics = d.fontMetrics(a.styledMode ? 12 : f.fontSize, r), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, r.attr("y", this.baseline)), this.symbolHeight = e.symbolHeight || this.fontMetrics.f, A.drawLegendSymbol(this, b), this.setItemEvents && this.setItemEvents(b, r, m));
        w && !b.checkbox && this.createCheckboxForItem(b);
        this.colorizeItem(b, b.visible);
        !a.styledMode && f.width || r.css({
          width: (e.itemWidth || this.widthOption || a.spacingBox.width) - u
        });
        this.setText(b);
        a = r.getBBox();
        b.itemWidth = b.checkboxOffset = e.itemWidth || b.legendItemWidth || a.width + u;
        this.maxItemWidth = Math.max(this.maxItemWidth, b.itemWidth);
        this.totalItemWidth += b.itemWidth;
        this.itemHeight = b.itemHeight = Math.round(b.legendItemHeight || a.height || this.symbolHeight);
      },
      layoutItem: function layoutItem(b) {
        var a = this.options,
            d = this.padding,
            e = "horizontal" === a.layout,
            c = b.itemHeight,
            g = this.itemMarginBottom,
            h = this.itemMarginTop,
            f = e ? B(a.itemDistance, 20) : 0,
            u = this.maxLegendWidth;
        a = a.alignColumns && this.totalItemWidth > u ? this.maxItemWidth : b.itemWidth;
        e && this.itemX - d + a > u && (this.itemX = d, this.lastLineHeight && (this.itemY += h + this.lastLineHeight + g), this.lastLineHeight = 0);
        this.lastItemY = h + this.itemY + g;
        this.lastLineHeight = Math.max(c, this.lastLineHeight);
        b._legendItemPos = [this.itemX, this.itemY];
        e ? this.itemX += a : (this.itemY += h + c + g, this.lastLineHeight = c);
        this.offsetWidth = this.widthOption || Math.max((e ? this.itemX - d - (b.checkbox ? 0 : f) : a) + d, this.offsetWidth);
      },
      getAllItems: function getAllItems() {
        var b = [];
        this.chart.series.forEach(function (a) {
          var d = a && a.options;
          a && B(d.showInLegend, F(d.linkedTo) ? !1 : void 0, !0) && (b = b.concat(a.legendItems || ("point" === d.legendType ? a.data : a)));
        });
        H(this, "afterGetAllItems", {
          allItems: b
        });
        return b;
      },
      getAlignment: function getAlignment() {
        var b = this.options;
        return this.proximate ? b.align.charAt(0) + "tv" : b.floating ? "" : b.align.charAt(0) + b.verticalAlign.charAt(0) + b.layout.charAt(0);
      },
      adjustMargins: function adjustMargins(b, a) {
        var d = this.chart,
            e = this.options,
            c = this.getAlignment();
        c && [/(lth|ct|rth)/, /(rtv|rm|rbv)/, /(rbh|cb|lbh)/, /(lbv|lm|ltv)/].forEach(function (g, l) {
          g.test(c) && !F(b[l]) && (d[y[l]] = Math.max(d[y[l]], d.legend[(l + 1) % 2 ? "legendHeight" : "legendWidth"] + [1, -1, -1, 1][l] * e[l % 2 ? "x" : "y"] + B(e.margin, 12) + a[l] + (d.titleOffset[l] || 0)));
        });
      },
      proximatePositions: function proximatePositions() {
        var b = this.chart,
            a = [],
            d = "left" === this.options.align;
        this.allItems.forEach(function (e) {
          var g = d;

          if (e.yAxis && e.points) {
            e.xAxis.options.reversed && (g = !g);
            var h = c.find(g ? e.points : e.points.slice(0).reverse(), function (a) {
              return z(a.plotY);
            });
            g = this.itemMarginTop + e.legendItem.getBBox().height + this.itemMarginBottom;
            var f = e.yAxis.top - b.plotTop;
            e.visible ? (h = h ? h.plotY : e.yAxis.height, h += f - .3 * g) : h = f + e.yAxis.height;
            a.push({
              target: h,
              size: g,
              item: e
            });
          }
        }, this);
        c.distribute(a, b.plotHeight);
        a.forEach(function (a) {
          a.item._legendItemPos[1] = b.plotTop - b.spacing[0] + a.pos;
        });
      },
      render: function render() {
        var b = this.chart,
            a = b.renderer,
            d = this.group,
            e,
            g = this.box,
            f = this.options,
            q = this.padding;
        this.itemX = q;
        this.itemY = this.initialItemY;
        this.lastItemY = this.offsetWidth = 0;
        this.widthOption = c.relativeLength(f.width, b.spacingBox.width - q);
        var p = b.spacingBox.width - 2 * q - f.x;
        -1 < ["rm", "lm"].indexOf(this.getAlignment().substring(0, 2)) && (p /= 2);
        this.maxLegendWidth = this.widthOption || p;
        d || (this.group = d = a.g("legend").attr({
          zIndex: 7
        }).add(), this.contentGroup = a.g().attr({
          zIndex: 1
        }).add(d), this.scrollGroup = a.g().add(this.contentGroup));
        this.renderTitle();
        p = this.getAllItems();
        n(p, function (a, b) {
          return (a.options && a.options.legendIndex || 0) - (b.options && b.options.legendIndex || 0);
        });
        f.reversed && p.reverse();
        this.allItems = p;
        this.display = e = !!p.length;
        this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0;
        p.forEach(this.renderItem, this);
        p.forEach(this.layoutItem, this);
        p = (this.widthOption || this.offsetWidth) + q;
        var u = this.lastItemY + this.lastLineHeight + this.titleHeight;
        u = this.handleOverflow(u);
        u += q;
        g || (this.box = g = a.rect().addClass("highcharts-legend-box").attr({
          r: f.borderRadius
        }).add(d), g.isNew = !0);
        b.styledMode || g.attr({
          stroke: f.borderColor,
          "stroke-width": f.borderWidth || 0,
          fill: f.backgroundColor || "none"
        }).shadow(f.shadow);
        0 < p && 0 < u && (g[g.isNew ? "attr" : "animate"](g.crisp.call({}, {
          x: 0,
          y: 0,
          width: p,
          height: u
        }, g.strokeWidth())), g.isNew = !1);
        g[e ? "show" : "hide"]();
        b.styledMode && "none" === d.getStyle("display") && (p = u = 0);
        this.legendWidth = p;
        this.legendHeight = u;
        e && (a = b.spacingBox, g = a.y, /(lth|ct|rth)/.test(this.getAlignment()) && 0 < b.titleOffset[0] ? g += b.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && 0 < b.titleOffset[2] && (g -= b.titleOffset[2]), g !== a.y && (a = h(a, {
          y: g
        })), d.align(h(f, {
          width: p,
          height: u,
          verticalAlign: this.proximate ? "top" : f.verticalAlign
        }), !0, a));
        this.proximate || this.positionItems();
        H(this, "afterRender");
      },
      handleOverflow: function handleOverflow(b) {
        var a = this,
            d = this.chart,
            e = d.renderer,
            c = this.options,
            g = c.y,
            h = this.padding;
        g = d.spacingBox.height + ("top" === c.verticalAlign ? -g : g) - h;

        var f = c.maxHeight,
            u,
            k = this.clipRect,
            r = c.navigation,
            x = B(r.animation, !0),
            A = r.arrowSize || 12,
            w = this.nav,
            m = this.pages,
            n,
            J = this.allItems,
            q = function q(b) {
          "number" === typeof b ? k.attr({
            height: b
          }) : k && (a.clipRect = k.destroy(), a.contentGroup.clip());
          a.contentGroup.div && (a.contentGroup.div.style.clip = b ? "rect(" + h + "px,9999px," + (h + b) + "px,0)" : "auto");
        },
            v = function v(b) {
          a[b] = e.circle(0, 0, 1.3 * A).translate(A / 2, A / 2).add(w);
          d.styledMode || a[b].attr("fill", "rgba(0,0,0,0.0001)");
          return a[b];
        };

        "horizontal" !== c.layout || "middle" === c.verticalAlign || c.floating || (g /= 2);
        f && (g = Math.min(g, f));
        m.length = 0;
        b > g && !1 !== r.enabled ? (this.clipHeight = u = Math.max(g - 20 - this.titleHeight - h, 0), this.currentPage = B(this.currentPage, 1), this.fullHeight = b, J.forEach(function (a, b) {
          var d = a._legendItemPos[1],
              e = Math.round(a.legendItem.getBBox().height),
              c = m.length;
          if (!c || d - m[c - 1] > u && (n || d) !== m[c - 1]) m.push(n || d), c++;
          a.pageIx = c - 1;
          n && (J[b - 1].pageIx = c - 1);
          b === J.length - 1 && d + e - m[c - 1] > u && d !== n && (m.push(d), a.pageIx = c);
          d !== n && (n = d);
        }), k || (k = a.clipRect = e.clipRect(0, h, 9999, 0), a.contentGroup.clip(k)), q(u), w || (this.nav = w = e.g().attr({
          zIndex: 1
        }).add(this.group), this.up = e.symbol("triangle", 0, 0, A, A).add(w), v("upTracker").on("click", function () {
          a.scroll(-1, x);
        }), this.pager = e.text("", 15, 10).addClass("highcharts-legend-navigation"), d.styledMode || this.pager.css(r.style), this.pager.add(w), this.down = e.symbol("triangle-down", 0, 0, A, A).add(w), v("downTracker").on("click", function () {
          a.scroll(1, x);
        })), a.scroll(0), b = g) : w && (q(), this.nav = w.destroy(), this.scrollGroup.attr({
          translateY: 1
        }), this.clipHeight = 0);
        return b;
      },
      scroll: function scroll(b, a) {
        var d = this.pages,
            e = d.length,
            c = this.currentPage + b;
        b = this.clipHeight;
        var g = this.options.navigation,
            h = this.pager,
            f = this.padding;
        c > e && (c = e);
        0 < c && (void 0 !== a && t(a, this.chart), this.nav.attr({
          translateX: f,
          translateY: b + this.padding + 7 + this.titleHeight,
          visibility: "visible"
        }), [this.up, this.upTracker].forEach(function (a) {
          a.attr({
            "class": 1 === c ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
          });
        }), h.attr({
          text: c + "/" + e
        }), [this.down, this.downTracker].forEach(function (a) {
          a.attr({
            x: 18 + this.pager.getBBox().width,
            "class": c === e ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
          });
        }, this), this.chart.styledMode || (this.up.attr({
          fill: 1 === c ? g.inactiveColor : g.activeColor
        }), this.upTracker.css({
          cursor: 1 === c ? "default" : "pointer"
        }), this.down.attr({
          fill: c === e ? g.inactiveColor : g.activeColor
        }), this.downTracker.css({
          cursor: c === e ? "default" : "pointer"
        })), this.scrollOffset = -d[c - 1] + this.initialItemY, this.scrollGroup.animate({
          translateY: this.scrollOffset
        }), this.currentPage = c, this.positionCheckboxes());
      }
    };
    c.LegendSymbolMixin = {
      drawRectangle: function drawRectangle(b, a) {
        var d = b.symbolHeight,
            e = b.options.squareSymbol;
        a.legendSymbol = this.chart.renderer.rect(e ? (b.symbolWidth - d) / 2 : 0, b.baseline - d + 1, e ? d : b.symbolWidth, d, B(b.options.symbolRadius, d / 2)).addClass("highcharts-point").attr({
          zIndex: 3
        }).add(a.legendGroup);
      },
      drawLineMarker: function drawLineMarker(b) {
        var a = this.options,
            d = a.marker,
            e = b.symbolWidth,
            c = b.symbolHeight,
            g = c / 2,
            f = this.chart.renderer,
            p = this.legendGroup;
        b = b.baseline - Math.round(.3 * b.fontMetrics.b);
        var u = {};
        this.chart.styledMode || (u = {
          "stroke-width": a.lineWidth || 0
        }, a.dashStyle && (u.dashstyle = a.dashStyle));
        this.legendLine = f.path(["M", 0, b, "L", e, b]).addClass("highcharts-graph").attr(u).add(p);
        d && !1 !== d.enabled && e && (a = Math.min(B(d.radius, g), g), 0 === this.symbol.indexOf("url") && (d = h(d, {
          width: c,
          height: c
        }), a = 0), this.legendSymbol = d = f.symbol(this.symbol, e / 2 - a, b - a, 2 * a, 2 * a, d).addClass("highcharts-point").add(p), d.isMarker = !0);
      }
    };
    (/Trident\/7\.0/.test(q.navigator && q.navigator.userAgent) || f) && g(c.Legend.prototype, "positionItem", function (b, a) {
      var d = this,
          e = function e() {
        a._legendItemPos && b.call(d, a);
      };

      e();
      d.bubbleLegend || setTimeout(e);
    });
  });
  M(I, "parts/Chart.js", [I["parts/Globals.js"], I["parts/Utilities.js"]], function (c, f) {
    var F = f.attr,
        G = f.defined,
        z = f.discardElement,
        B = f.erase,
        t = f.extend,
        v = f.isArray,
        C = f.isNumber,
        H = f.isObject,
        y = f.isString,
        h = f.objectEach,
        n = f.pick,
        q = f.pInt,
        g = f.setAnimation,
        b = f.splat,
        a = f.syncTimeout,
        d = c.addEvent,
        e = c.animate,
        l = c.animObject,
        L = c.doc,
        E = c.Axis,
        p = c.createElement,
        u = c.defaultOptions,
        k = c.charts,
        r = c.css,
        x = c.find,
        A = c.fireEvent,
        w = c.Legend,
        m = c.marginNames,
        K = c.merge,
        J = c.Pointer,
        U = c.removeEvent,
        S = c.seriesTypes,
        Q = c.win,
        O = c.Chart = function () {
      this.getArgs.apply(this, arguments);
    };

    c.chart = function (a, b, d) {
      return new O(a, b, d);
    };

    t(O.prototype, {
      callbacks: [],
      getArgs: function getArgs() {
        var a = [].slice.call(arguments);
        if (y(a[0]) || a[0].nodeName) this.renderTo = a.shift();
        this.init(a[0], a[1]);
      },
      init: function init(a, b) {
        var e,
            g = a.series,
            m = a.plotOptions || {};
        A(this, "init", {
          args: arguments
        }, function () {
          a.series = null;
          e = K(u, a);
          h(e.plotOptions, function (a, b) {
            H(a) && (a.tooltip = m[b] && K(m[b].tooltip) || void 0);
          });
          e.tooltip.userOptions = a.chart && a.chart.forExport && a.tooltip.userOptions || a.tooltip;
          e.series = a.series = g;
          this.userOptions = a;
          var r = e.chart,
              l = r.events;
          this.margin = [];
          this.spacing = [];
          this.bounds = {
            h: {},
            v: {}
          };
          this.labelCollectors = [];
          this.callback = b;
          this.isResizing = 0;
          this.options = e;
          this.axes = [];
          this.series = [];
          this.time = a.time && Object.keys(a.time).length ? new c.Time(a.time) : c.time;
          this.styledMode = r.styledMode;
          this.hasCartesianSeries = r.showAxes;
          var f = this;
          f.index = k.length;
          k.push(f);
          c.chartCount++;
          l && h(l, function (a, b) {
            c.isFunction(a) && d(f, b, a);
          });
          f.xAxis = [];
          f.yAxis = [];
          f.pointCount = f.colorCounter = f.symbolCounter = 0;
          A(f, "afterInit");
          f.firstRender();
        });
      },
      initSeries: function initSeries(a) {
        var b = this.options.chart;
        b = a.type || b.type || b.defaultSeriesType;
        var d = S[b];
        d || c.error(17, !0, this, {
          missingModuleFor: b
        });
        b = new d();
        b.init(this, a);
        return b;
      },
      orderSeries: function orderSeries(a) {
        var b = this.series;

        for (a = a || 0; a < b.length; a++) {
          b[a] && (b[a].index = a, b[a].name = b[a].getName());
        }
      },
      isInsidePlot: function isInsidePlot(a, b, d) {
        var e = d ? b : a;
        a = d ? a : b;
        return 0 <= e && e <= this.plotWidth && 0 <= a && a <= this.plotHeight;
      },
      redraw: function redraw(a) {
        A(this, "beforeRedraw");
        var b = this.axes,
            d = this.series,
            e = this.pointer,
            c = this.legend,
            k = this.userOptions.legend,
            m = this.isDirtyLegend,
            r = this.hasCartesianSeries,
            h = this.isDirtyBox,
            l = this.renderer,
            f = l.isHidden(),
            x = [];
        this.setResponsive && this.setResponsive(!1);
        g(a, this);
        f && this.temporaryDisplay();
        this.layOutTitles();

        for (a = d.length; a--;) {
          var w = d[a];

          if (w.options.stacking) {
            var p = !0;

            if (w.isDirty) {
              var u = !0;
              break;
            }
          }
        }

        if (u) for (a = d.length; a--;) {
          w = d[a], w.options.stacking && (w.isDirty = !0);
        }
        d.forEach(function (a) {
          a.isDirty && ("point" === a.options.legendType ? (a.updateTotals && a.updateTotals(), m = !0) : k && (k.labelFormatter || k.labelFormat) && (m = !0));
          a.isDirtyData && A(a, "updatedData");
        });
        m && c && c.options.enabled && (c.render(), this.isDirtyLegend = !1);
        p && this.getStacks();
        r && b.forEach(function (a) {
          a.updateNames();
          a.setScale();
        });
        this.getMargins();
        r && (b.forEach(function (a) {
          a.isDirty && (h = !0);
        }), b.forEach(function (a) {
          var b = a.min + "," + a.max;
          a.extKey !== b && (a.extKey = b, x.push(function () {
            A(a, "afterSetExtremes", t(a.eventArgs, a.getExtremes()));
            delete a.eventArgs;
          }));
          (h || p) && a.redraw();
        }));
        h && this.drawChartBox();
        A(this, "predraw");
        d.forEach(function (a) {
          (h || a.isDirty) && a.visible && a.redraw();
          a.isDirtyData = !1;
        });
        e && e.reset(!0);
        l.draw();
        A(this, "redraw");
        A(this, "render");
        f && this.temporaryDisplay(!0);
        x.forEach(function (a) {
          a.call();
        });
      },
      get: function get(a) {
        function b(b) {
          return b.id === a || b.options && b.options.id === a;
        }

        var d = this.series,
            e;
        var c = x(this.axes, b) || x(this.series, b);

        for (e = 0; !c && e < d.length; e++) {
          c = x(d[e].points || [], b);
        }

        return c;
      },
      getAxes: function getAxes() {
        var a = this,
            d = this.options,
            e = d.xAxis = b(d.xAxis || {});
        d = d.yAxis = b(d.yAxis || {});
        A(this, "getAxes");
        e.forEach(function (a, b) {
          a.index = b;
          a.isX = !0;
        });
        d.forEach(function (a, b) {
          a.index = b;
        });
        e.concat(d).forEach(function (b) {
          new E(a, b);
        });
        A(this, "afterGetAxes");
      },
      getSelectedPoints: function getSelectedPoints() {
        var a = [];
        this.series.forEach(function (b) {
          a = a.concat((b[b.hasGroupedData ? "points" : "data"] || []).filter(function (a) {
            return n(a.selectedStaging, a.selected);
          }));
        });
        return a;
      },
      getSelectedSeries: function getSelectedSeries() {
        return this.series.filter(function (a) {
          return a.selected;
        });
      },
      setTitle: function setTitle(a, b, d) {
        this.applyDescription("title", a);
        this.applyDescription("subtitle", b);
        this.applyDescription("caption", void 0);
        this.layOutTitles(d);
      },
      applyDescription: function applyDescription(a, b) {
        var d = this,
            e = "title" === a ? {
          color: "#333333",
          fontSize: this.options.isStock ? "16px" : "18px"
        } : {
          color: "#666666"
        };
        e = this.options[a] = K(!this.styledMode && {
          style: e
        }, this.options[a], b);
        var c = this[a];
        c && b && (this[a] = c = c.destroy());
        e && !c && (c = this.renderer.text(e.text, 0, 0, e.useHTML).attr({
          align: e.align,
          "class": "highcharts-" + a,
          zIndex: e.zIndex || 4
        }).add(), c.update = function (b) {
          d[{
            title: "setTitle",
            subtitle: "setSubtitle",
            caption: "setCaption"
          }[a]](b);
        }, this.styledMode || c.css(e.style), this[a] = c);
      },
      layOutTitles: function layOutTitles(a) {
        var b = [0, 0, 0],
            d = this.renderer,
            e = this.spacingBox;
        ["title", "subtitle", "caption"].forEach(function (a) {
          var c = this[a],
              k = this.options[a],
              g = k.verticalAlign || "top";
          a = "title" === a ? -3 : "top" === g ? b[0] + 2 : 0;

          if (c) {
            if (!this.styledMode) var m = k.style.fontSize;
            m = d.fontMetrics(m, c).b;
            c.css({
              width: (k.width || e.width + (k.widthAdjust || 0)) + "px"
            });
            var r = Math.round(c.getBBox(k.useHTML).height);
            c.align(t({
              y: "bottom" === g ? m : a + m,
              height: r
            }, k), !1, "spacingBox");
            k.floating || ("top" === g ? b[0] = Math.ceil(b[0] + r) : "bottom" === g && (b[2] = Math.ceil(b[2] + r)));
          }
        }, this);
        b[0] && "top" === (this.options.title.verticalAlign || "top") && (b[0] += this.options.title.margin);
        b[2] && "bottom" === this.options.caption.verticalAlign && (b[2] += this.options.caption.margin);
        var c = !this.titleOffset || this.titleOffset.join(",") !== b.join(",");
        this.titleOffset = b;
        A(this, "afterLayOutTitles");
        !this.isDirtyBox && c && (this.isDirtyBox = this.isDirtyLegend = c, this.hasRendered && n(a, !0) && this.isDirtyBox && this.redraw());
      },
      getChartSize: function getChartSize() {
        var a = this.options.chart,
            b = a.width;
        a = a.height;
        var d = this.renderTo;
        G(b) || (this.containerWidth = c.getStyle(d, "width"));
        G(a) || (this.containerHeight = c.getStyle(d, "height"));
        this.chartWidth = Math.max(0, b || this.containerWidth || 600);
        this.chartHeight = Math.max(0, c.relativeLength(a, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400));
      },
      temporaryDisplay: function temporaryDisplay(a) {
        var b = this.renderTo;
        if (a) for (; b && b.style;) {
          b.hcOrigStyle && (c.css(b, b.hcOrigStyle), delete b.hcOrigStyle), b.hcOrigDetached && (L.body.removeChild(b), b.hcOrigDetached = !1), b = b.parentNode;
        } else for (; b && b.style;) {
          L.body.contains(b) || b.parentNode || (b.hcOrigDetached = !0, L.body.appendChild(b));
          if ("none" === c.getStyle(b, "display", !1) || b.hcOricDetached) b.hcOrigStyle = {
            display: b.style.display,
            height: b.style.height,
            overflow: b.style.overflow
          }, a = {
            display: "block",
            overflow: "hidden"
          }, b !== this.renderTo && (a.height = 0), c.css(b, a), b.offsetWidth || b.style.setProperty("display", "block", "important");
          b = b.parentNode;
          if (b === L.body) break;
        }
      },
      setClassName: function setClassName(a) {
        this.container.className = "highcharts-container " + (a || "");
      },
      getContainer: function getContainer() {
        var a = this.options,
            b = a.chart;
        var d = this.renderTo;
        var e = c.uniqueKey(),
            g,
            m;
        d || (this.renderTo = d = b.renderTo);
        y(d) && (this.renderTo = d = L.getElementById(d));
        d || c.error(13, !0, this);
        var h = q(F(d, "data-highcharts-chart"));
        C(h) && k[h] && k[h].hasRendered && k[h].destroy();
        F(d, "data-highcharts-chart", this.index);
        d.innerHTML = "";
        b.skipClone || d.offsetWidth || this.temporaryDisplay();
        this.getChartSize();
        h = this.chartWidth;
        var l = this.chartHeight;
        r(d, {
          overflow: "hidden"
        });
        this.styledMode || (g = t({
          position: "relative",
          overflow: "hidden",
          width: h + "px",
          height: l + "px",
          textAlign: "left",
          lineHeight: "normal",
          zIndex: 0,
          "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
        }, b.style));
        this.container = d = p("div", {
          id: e
        }, g, d);
        this._cursor = d.style.cursor;
        this.renderer = new (c[b.renderer] || c.Renderer)(d, h, l, null, b.forExport, a.exporting && a.exporting.allowHTML, this.styledMode);
        this.setClassName(b.className);
        if (this.styledMode) for (m in a.defs) {
          this.renderer.definition(a.defs[m]);
        } else this.renderer.setStyle(b.style);
        this.renderer.chartIndex = this.index;
        A(this, "afterGetContainer");
      },
      getMargins: function getMargins(a) {
        var b = this.spacing,
            d = this.margin,
            e = this.titleOffset;
        this.resetMargins();
        e[0] && !G(d[0]) && (this.plotTop = Math.max(this.plotTop, e[0] + b[0]));
        e[2] && !G(d[2]) && (this.marginBottom = Math.max(this.marginBottom, e[2] + b[2]));
        this.legend && this.legend.display && this.legend.adjustMargins(d, b);
        A(this, "getMargins");
        a || this.getAxisMargins();
      },
      getAxisMargins: function getAxisMargins() {
        var a = this,
            b = a.axisOffset = [0, 0, 0, 0],
            d = a.colorAxis,
            e = a.margin,
            c = function c(a) {
          a.forEach(function (a) {
            a.visible && a.getOffset();
          });
        };

        a.hasCartesianSeries ? c(a.axes) : d && d.length && c(d);
        m.forEach(function (d, c) {
          G(e[c]) || (a[d] += b[c]);
        });
        a.setChartSize();
      },
      reflow: function reflow(b) {
        var d = this,
            e = d.options.chart,
            k = d.renderTo,
            g = G(e.width) && G(e.height),
            m = e.width || c.getStyle(k, "width");
        e = e.height || c.getStyle(k, "height");
        k = b ? b.target : Q;

        if (!g && !d.isPrinting && m && e && (k === Q || k === L)) {
          if (m !== d.containerWidth || e !== d.containerHeight) c.clearTimeout(d.reflowTimeout), d.reflowTimeout = a(function () {
            d.container && d.setSize(void 0, void 0, !1);
          }, b ? 100 : 0);
          d.containerWidth = m;
          d.containerHeight = e;
        }
      },
      setReflow: function setReflow(a) {
        var b = this;
        !1 === a || this.unbindReflow ? !1 === a && this.unbindReflow && (this.unbindReflow = this.unbindReflow()) : (this.unbindReflow = d(Q, "resize", function (a) {
          b.options && b.reflow(a);
        }), d(this, "destroy", this.unbindReflow));
      },
      setSize: function setSize(b, d, c) {
        var k = this,
            m = k.renderer;
        k.isResizing += 1;
        g(c, k);
        k.oldChartHeight = k.chartHeight;
        k.oldChartWidth = k.chartWidth;
        void 0 !== b && (k.options.chart.width = b);
        void 0 !== d && (k.options.chart.height = d);
        k.getChartSize();

        if (!k.styledMode) {
          var h = m.globalAnimation;
          (h ? e : r)(k.container, {
            width: k.chartWidth + "px",
            height: k.chartHeight + "px"
          }, h);
        }

        k.setChartSize(!0);
        m.setSize(k.chartWidth, k.chartHeight, c);
        k.axes.forEach(function (a) {
          a.isDirty = !0;
          a.setScale();
        });
        k.isDirtyLegend = !0;
        k.isDirtyBox = !0;
        k.layOutTitles();
        k.getMargins();
        k.redraw(c);
        k.oldChartHeight = null;
        A(k, "resize");
        a(function () {
          k && A(k, "endResize", null, function () {
            --k.isResizing;
          });
        }, l(h).duration || 0);
      },
      setChartSize: function setChartSize(a) {
        var b = this.inverted,
            d = this.renderer,
            e = this.chartWidth,
            c = this.chartHeight,
            k = this.options.chart,
            g = this.spacing,
            m = this.clipOffset,
            r,
            h,
            l,
            f;
        this.plotLeft = r = Math.round(this.plotLeft);
        this.plotTop = h = Math.round(this.plotTop);
        this.plotWidth = l = Math.max(0, Math.round(e - r - this.marginRight));
        this.plotHeight = f = Math.max(0, Math.round(c - h - this.marginBottom));
        this.plotSizeX = b ? f : l;
        this.plotSizeY = b ? l : f;
        this.plotBorderWidth = k.plotBorderWidth || 0;
        this.spacingBox = d.spacingBox = {
          x: g[3],
          y: g[0],
          width: e - g[3] - g[1],
          height: c - g[0] - g[2]
        };
        this.plotBox = d.plotBox = {
          x: r,
          y: h,
          width: l,
          height: f
        };
        e = 2 * Math.floor(this.plotBorderWidth / 2);
        b = Math.ceil(Math.max(e, m[3]) / 2);
        d = Math.ceil(Math.max(e, m[0]) / 2);
        this.clipBox = {
          x: b,
          y: d,
          width: Math.floor(this.plotSizeX - Math.max(e, m[1]) / 2 - b),
          height: Math.max(0, Math.floor(this.plotSizeY - Math.max(e, m[2]) / 2 - d))
        };
        a || this.axes.forEach(function (a) {
          a.setAxisSize();
          a.setAxisTranslation();
        });
        A(this, "afterSetChartSize", {
          skipAxes: a
        });
      },
      resetMargins: function resetMargins() {
        A(this, "resetMargins");
        var a = this,
            b = a.options.chart;
        ["margin", "spacing"].forEach(function (d) {
          var e = b[d],
              c = H(e) ? e : [e, e, e, e];
          ["Top", "Right", "Bottom", "Left"].forEach(function (e, k) {
            a[d][k] = n(b[d + e], c[k]);
          });
        });
        m.forEach(function (b, d) {
          a[b] = n(a.margin[d], a.spacing[d]);
        });
        a.axisOffset = [0, 0, 0, 0];
        a.clipOffset = [0, 0, 0, 0];
      },
      drawChartBox: function drawChartBox() {
        var a = this.options.chart,
            b = this.renderer,
            d = this.chartWidth,
            e = this.chartHeight,
            c = this.chartBackground,
            k = this.plotBackground,
            g = this.plotBorder,
            m = this.styledMode,
            r = this.plotBGImage,
            h = a.backgroundColor,
            l = a.plotBackgroundColor,
            f = a.plotBackgroundImage,
            x,
            w = this.plotLeft,
            p = this.plotTop,
            u = this.plotWidth,
            n = this.plotHeight,
            J = this.plotBox,
            K = this.clipRect,
            q = this.clipBox,
            v = "animate";
        c || (this.chartBackground = c = b.rect().addClass("highcharts-background").add(), v = "attr");
        if (m) var y = x = c.strokeWidth();else {
          y = a.borderWidth || 0;
          x = y + (a.shadow ? 8 : 0);
          h = {
            fill: h || "none"
          };
          if (y || c["stroke-width"]) h.stroke = a.borderColor, h["stroke-width"] = y;
          c.attr(h).shadow(a.shadow);
        }
        c[v]({
          x: x / 2,
          y: x / 2,
          width: d - x - y % 2,
          height: e - x - y % 2,
          r: a.borderRadius
        });
        v = "animate";
        k || (v = "attr", this.plotBackground = k = b.rect().addClass("highcharts-plot-background").add());
        k[v](J);
        m || (k.attr({
          fill: l || "none"
        }).shadow(a.plotShadow), f && (r ? r.animate(J) : this.plotBGImage = b.image(f, w, p, u, n).add()));
        K ? K.animate({
          width: q.width,
          height: q.height
        }) : this.clipRect = b.clipRect(q);
        v = "animate";
        g || (v = "attr", this.plotBorder = g = b.rect().addClass("highcharts-plot-border").attr({
          zIndex: 1
        }).add());
        m || g.attr({
          stroke: a.plotBorderColor,
          "stroke-width": a.plotBorderWidth || 0,
          fill: "none"
        });
        g[v](g.crisp({
          x: w,
          y: p,
          width: u,
          height: n
        }, -g.strokeWidth()));
        this.isDirtyBox = !1;
        A(this, "afterDrawChartBox");
      },
      propFromSeries: function propFromSeries() {
        var a = this,
            b = a.options.chart,
            d,
            e = a.options.series,
            c,
            k;
        ["inverted", "angular", "polar"].forEach(function (g) {
          d = S[b.type || b.defaultSeriesType];
          k = b[g] || d && d.prototype[g];

          for (c = e && e.length; !k && c--;) {
            (d = S[e[c].type]) && d.prototype[g] && (k = !0);
          }

          a[g] = k;
        });
      },
      linkSeries: function linkSeries() {
        var a = this,
            b = a.series;
        b.forEach(function (a) {
          a.linkedSeries.length = 0;
        });
        b.forEach(function (b) {
          var d = b.options.linkedTo;
          y(d) && (d = ":previous" === d ? a.series[b.index - 1] : a.get(d)) && d.linkedParent !== b && (d.linkedSeries.push(b), b.linkedParent = d, b.visible = n(b.options.visible, d.options.visible, b.visible));
        });
        A(this, "afterLinkSeries");
      },
      renderSeries: function renderSeries() {
        this.series.forEach(function (a) {
          a.translate();
          a.render();
        });
      },
      renderLabels: function renderLabels() {
        var a = this,
            b = a.options.labels;
        b.items && b.items.forEach(function (d) {
          var e = t(b.style, d.style),
              c = q(e.left) + a.plotLeft,
              k = q(e.top) + a.plotTop + 12;
          delete e.left;
          delete e.top;
          a.renderer.text(d.html, c, k).attr({
            zIndex: 2
          }).css(e).add();
        });
      },
      render: function render() {
        var a = this.axes,
            b = this.colorAxis,
            d = this.renderer,
            e = this.options,
            c = 0,
            k = function k(a) {
          a.forEach(function (a) {
            a.visible && a.render();
          });
        };

        this.setTitle();
        this.legend = new w(this, e.legend);
        this.getStacks && this.getStacks();
        this.getMargins(!0);
        this.setChartSize();
        e = this.plotWidth;
        a.some(function (a) {
          if (a.horiz && a.visible && a.options.labels.enabled && a.series.length) return c = 21, !0;
        });
        var g = this.plotHeight = Math.max(this.plotHeight - c, 0);
        a.forEach(function (a) {
          a.setScale();
        });
        this.getAxisMargins();
        var m = 1.1 < e / this.plotWidth;
        var r = 1.05 < g / this.plotHeight;
        if (m || r) a.forEach(function (a) {
          (a.horiz && m || !a.horiz && r) && a.setTickInterval(!0);
        }), this.getMargins();
        this.drawChartBox();
        this.hasCartesianSeries ? k(a) : b && b.length && k(b);
        this.seriesGroup || (this.seriesGroup = d.g("series-group").attr({
          zIndex: 3
        }).add());
        this.renderSeries();
        this.renderLabels();
        this.addCredits();
        this.setResponsive && this.setResponsive();
        this.updateContainerScaling();
        this.hasRendered = !0;
      },
      addCredits: function addCredits(a) {
        var b = this;
        a = K(!0, this.options.credits, a);
        a.enabled && !this.credits && (this.credits = this.renderer.text(a.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function () {
          a.href && (Q.location.href = a.href);
        }).attr({
          align: a.position.align,
          zIndex: 8
        }), b.styledMode || this.credits.css(a.style), this.credits.add().align(a.position), this.credits.update = function (a) {
          b.credits = b.credits.destroy();
          b.addCredits(a);
        });
      },
      updateContainerScaling: function updateContainerScaling() {
        var a = this.container;

        if (a.offsetWidth && a.offsetHeight && a.getBoundingClientRect) {
          var b = a.getBoundingClientRect(),
              d = b.width / a.offsetWidth;
          a = b.height / a.offsetHeight;
          1 !== d || 1 !== a ? this.containerScaling = {
            scaleX: d,
            scaleY: a
          } : delete this.containerScaling;
        }
      },
      destroy: function destroy() {
        var a = this,
            b = a.axes,
            d = a.series,
            e = a.container,
            g,
            m = e && e.parentNode;
        A(a, "destroy");
        a.renderer.forExport ? B(k, a) : k[a.index] = void 0;
        c.chartCount--;
        a.renderTo.removeAttribute("data-highcharts-chart");
        U(a);

        for (g = b.length; g--;) {
          b[g] = b[g].destroy();
        }

        this.scroller && this.scroller.destroy && this.scroller.destroy();

        for (g = d.length; g--;) {
          d[g] = d[g].destroy();
        }

        "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function (b) {
          var d = a[b];
          d && d.destroy && (a[b] = d.destroy());
        });
        e && (e.innerHTML = "", U(e), m && z(e));
        h(a, function (b, d) {
          delete a[d];
        });
      },
      firstRender: function firstRender() {
        var a = this,
            b = a.options;

        if (!a.isReadyToRender || a.isReadyToRender()) {
          a.getContainer();
          a.resetMargins();
          a.setChartSize();
          a.propFromSeries();
          a.getAxes();
          (v(b.series) ? b.series : []).forEach(function (b) {
            a.initSeries(b);
          });
          a.linkSeries();
          A(a, "beforeRender");
          J && (a.pointer = new J(a, b));
          a.render();
          if (!a.renderer.imgCount && a.onload) a.onload();
          a.temporaryDisplay(!0);
        }
      },
      onload: function onload() {
        this.callbacks.concat([this.callback]).forEach(function (a) {
          a && void 0 !== this.index && a.apply(this, [this]);
        }, this);
        A(this, "load");
        A(this, "render");
        G(this.index) && this.setReflow(this.options.chart.reflow);
        this.onload = null;
      }
    });
  });
  M(I, "parts/ScrollablePlotArea.js", [I["parts/Globals.js"], I["parts/Utilities.js"]], function (c, f) {
    var F = f.pick,
        G = c.addEvent;
    f = c.Chart;
    "";
    G(f, "afterSetChartSize", function (f) {
      var z = this.options.chart.scrollablePlotArea,
          t = z && z.minWidth;
      z = z && z.minHeight;

      if (!this.renderer.forExport) {
        if (t) {
          if (this.scrollablePixelsX = t = Math.max(0, t - this.chartWidth)) {
            this.plotWidth += t;
            this.inverted ? (this.clipBox.height += t, this.plotBox.height += t) : (this.clipBox.width += t, this.plotBox.width += t);
            var v = {
              1: {
                name: "right",
                value: t
              }
            };
          }
        } else z && (this.scrollablePixelsY = t = Math.max(0, z - this.chartHeight)) && (this.plotHeight += t, this.inverted ? (this.clipBox.width += t, this.plotBox.width += t) : (this.clipBox.height += t, this.plotBox.height += t), v = {
          2: {
            name: "bottom",
            value: t
          }
        });

        v && !f.skipAxes && this.axes.forEach(function (f) {
          v[f.side] ? f.getPlotLinePath = function () {
            var t = v[f.side].name,
                y = this[t];
            this[t] = y - v[f.side].value;
            var h = c.Axis.prototype.getPlotLinePath.apply(this, arguments);
            this[t] = y;
            return h;
          } : (f.setAxisSize(), f.setAxisTranslation());
        });
      }
    });
    G(f, "render", function () {
      this.scrollablePixelsX || this.scrollablePixelsY ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed()) : this.fixedDiv && this.applyFixed();
    });

    f.prototype.setUpScrolling = function () {
      var f = {
        WebkitOverflowScrolling: "touch",
        overflowX: "hidden",
        overflowY: "hidden"
      };
      this.scrollablePixelsX && (f.overflowX = "auto");
      this.scrollablePixelsY && (f.overflowY = "auto");
      this.scrollingContainer = c.createElement("div", {
        className: "highcharts-scrolling"
      }, f, this.renderTo);
      this.innerContainer = c.createElement("div", {
        className: "highcharts-inner-container"
      }, null, this.scrollingContainer);
      this.innerContainer.appendChild(this.container);
      this.setUpScrolling = null;
    };

    f.prototype.moveFixedElements = function () {
      var c = this.container,
          f = this.fixedRenderer,
          t = ".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" "),
          v;
      this.scrollablePixelsX && !this.inverted ? v = ".highcharts-yaxis" : this.scrollablePixelsX && this.inverted ? v = ".highcharts-xaxis" : this.scrollablePixelsY && !this.inverted ? v = ".highcharts-xaxis" : this.scrollablePixelsY && this.inverted && (v = ".highcharts-yaxis");
      t.push(v, v + "-labels");
      t.forEach(function (v) {
        [].forEach.call(c.querySelectorAll(v), function (c) {
          (c.namespaceURI === f.SVG_NS ? f.box : f.box.parentNode).appendChild(c);
          c.style.pointerEvents = "auto";
        });
      });
    };

    f.prototype.applyFixed = function () {
      var f,
          B = !this.fixedDiv,
          t = this.options.chart.scrollablePlotArea;
      B ? (this.fixedDiv = c.createElement("div", {
        className: "highcharts-fixed"
      }, {
        position: "absolute",
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 2
      }, null, !0), this.renderTo.insertBefore(this.fixedDiv, this.renderTo.firstChild), this.renderTo.style.overflow = "visible", this.fixedRenderer = f = new c.Renderer(this.fixedDiv, this.chartWidth, this.chartHeight), this.scrollableMask = f.path().attr({
        fill: c.color(this.options.chart.backgroundColor || "#fff").setOpacity(F(t.opacity, .85)).get(),
        zIndex: -1
      }).addClass("highcharts-scrollable-mask").add(), this.moveFixedElements(), G(this, "afterShowResetZoom", this.moveFixedElements), G(this, "afterLayOutTitles", this.moveFixedElements)) : this.fixedRenderer.setSize(this.chartWidth, this.chartHeight);
      f = this.chartWidth + (this.scrollablePixelsX || 0);
      var v = this.chartHeight + (this.scrollablePixelsY || 0);
      c.stop(this.container);
      this.container.style.width = f + "px";
      this.container.style.height = v + "px";
      this.renderer.boxWrapper.attr({
        width: f,
        height: v,
        viewBox: [0, 0, f, v].join(" ")
      });
      this.chartBackground.attr({
        width: f,
        height: v
      });
      this.scrollablePixelsY && (this.scrollingContainer.style.height = this.chartHeight + "px");
      B && (t.scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixelsX * t.scrollPositionX), t.scrollPositionY && (this.scrollingContainer.scrollTop = this.scrollablePixelsY * t.scrollPositionY));
      v = this.axisOffset;
      B = this.plotTop - v[0] - 1;
      t = this.plotLeft - v[3] - 1;
      f = this.plotTop + this.plotHeight + v[2] + 1;
      v = this.plotLeft + this.plotWidth + v[1] + 1;
      var C = this.plotLeft + this.plotWidth - (this.scrollablePixelsX || 0),
          H = this.plotTop + this.plotHeight - (this.scrollablePixelsY || 0);
      B = this.scrollablePixelsX ? ["M", 0, B, "L", this.plotLeft - 1, B, "L", this.plotLeft - 1, f, "L", 0, f, "Z", "M", C, B, "L", this.chartWidth, B, "L", this.chartWidth, f, "L", C, f, "Z"] : this.scrollablePixelsY ? ["M", t, 0, "L", t, this.plotTop - 1, "L", v, this.plotTop - 1, "L", v, 0, "Z", "M", t, H, "L", t, this.chartHeight, "L", v, this.chartHeight, "L", v, H, "Z"] : ["M", 0, 0];
      "adjustHeight" !== this.redrawTrigger && this.scrollableMask.attr({
        d: B
      });
    };
  });
  M(I, "parts/Point.js", [I["parts/Globals.js"], I["parts/Utilities.js"]], function (c, f) {
    var F = f.defined,
        G = f.erase,
        z = f.extend,
        B = f.isArray,
        t = f.isNumber,
        v = f.isObject,
        C = f.pick,
        H,
        y = c.fireEvent,
        h = c.format,
        n = c.uniqueKey,
        q = c.removeEvent;

    c.Point = H = function H() {};

    c.Point.prototype = {
      init: function init(c, b, a) {
        this.series = c;
        this.applyOptions(b, a);
        this.id = F(this.id) ? this.id : n();
        this.resolveColor();
        c.chart.pointCount++;
        y(this, "afterInit");
        return this;
      },
      resolveColor: function resolveColor() {
        var c = this.series;
        var b = c.chart.options.chart.colorCount;
        var a = c.chart.styledMode;
        a || this.options.color || (this.color = c.color);
        c.options.colorByPoint ? (a || (b = c.options.colors || c.chart.options.colors, this.color = this.color || b[c.colorCounter], b = b.length), a = c.colorCounter, c.colorCounter++, c.colorCounter === b && (c.colorCounter = 0)) : a = c.colorIndex;
        this.colorIndex = C(this.colorIndex, a);
      },
      applyOptions: function applyOptions(c, b) {
        var a = this.series,
            d = a.options.pointValKey || a.pointValKey;
        c = H.prototype.optionsToObject.call(this, c);
        z(this, c);
        this.options = this.options ? z(this.options, c) : c;
        c.group && delete this.group;
        c.dataLabels && delete this.dataLabels;
        d && (this.y = this[d]);
        this.formatPrefix = (this.isNull = C(this.isValid && !this.isValid(), null === this.x || !t(this.y))) ? "null" : "point";
        this.selected && (this.state = "select");
        "name" in this && void 0 === b && a.xAxis && a.xAxis.hasNames && (this.x = a.xAxis.nameToX(this));
        void 0 === this.x && a && (this.x = void 0 === b ? a.autoIncrement(this) : b);
        return this;
      },
      setNestedProperty: function setNestedProperty(c, b, a) {
        a.split(".").reduce(function (a, e, c, g) {
          a[e] = g.length - 1 === c ? b : v(a[e], !0) ? a[e] : {};
          return a[e];
        }, c);
        return c;
      },
      optionsToObject: function optionsToObject(g) {
        var b = {},
            a = this.series,
            d = a.options.keys,
            e = d || a.pointArrayMap || ["y"],
            h = e.length,
            f = 0,
            n = 0;
        if (t(g) || null === g) b[e[0]] = g;else if (B(g)) for (!d && g.length > h && (a = _typeof(g[0]), "string" === a ? b.name = g[0] : "number" === a && (b.x = g[0]), f++); n < h;) {
          d && void 0 === g[f] || (0 < e[n].indexOf(".") ? c.Point.prototype.setNestedProperty(b, g[f], e[n]) : b[e[n]] = g[f]), f++, n++;
        } else "object" === _typeof(g) && (b = g, g.dataLabels && (a._hasPointLabels = !0), g.marker && (a._hasPointMarkers = !0));
        return b;
      },
      getClassName: function getClassName() {
        return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + (void 0 !== this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "");
      },
      getZone: function getZone() {
        var c = this.series,
            b = c.zones;
        c = c.zoneAxis || "y";
        var a = 0,
            d;

        for (d = b[a]; this[c] >= d.value;) {
          d = b[++a];
        }

        this.nonZonedColor || (this.nonZonedColor = this.color);
        this.color = d && d.color && !this.options.color ? d.color : this.nonZonedColor;
        return d;
      },
      hasNewShapeType: function hasNewShapeType() {
        return this.graphic && this.graphic.element.nodeName !== this.shapeType;
      },
      destroy: function destroy() {
        var c = this.series.chart,
            b = c.hoverPoints,
            a;
        c.pointCount--;
        b && (this.setState(), G(b, this), b.length || (c.hoverPoints = null));
        if (this === c.hoverPoint) this.onMouseOut();
        if (this.graphic || this.dataLabel || this.dataLabels) q(this), this.destroyElements();
        this.legendItem && c.legend.destroyItem(this);

        for (a in this) {
          this[a] = null;
        }
      },
      destroyElements: function destroyElements(c) {
        var b = this,
            a = [],
            d;
        c = c || {
          graphic: 1,
          dataLabel: 1
        };
        c.graphic && a.push("graphic", "shadowGroup");
        c.dataLabel && a.push("dataLabel", "dataLabelUpper", "connector");

        for (d = a.length; d--;) {
          var e = a[d];
          b[e] && (b[e] = b[e].destroy());
        }

        ["dataLabel", "connector"].forEach(function (a) {
          var d = a + "s";
          c[a] && b[d] && (b[d].forEach(function (a) {
            a.element && a.destroy();
          }), delete b[d]);
        });
      },
      getLabelConfig: function getLabelConfig() {
        return {
          x: this.category,
          y: this.y,
          color: this.color,
          colorIndex: this.colorIndex,
          key: this.name || this.category,
          series: this.series,
          point: this,
          percentage: this.percentage,
          total: this.total || this.stackTotal
        };
      },
      tooltipFormatter: function tooltipFormatter(c) {
        var b = this.series,
            a = b.tooltipOptions,
            d = C(a.valueDecimals, ""),
            e = a.valuePrefix || "",
            g = a.valueSuffix || "";
        b.chart.styledMode && (c = b.chart.tooltip.styledModeFormat(c));
        (b.pointArrayMap || ["y"]).forEach(function (a) {
          a = "{point." + a;
          if (e || g) c = c.replace(RegExp(a + "}", "g"), e + a + "}" + g);
          c = c.replace(RegExp(a + "}", "g"), a + ":,." + d + "f}");
        });
        return h(c, {
          point: this,
          series: this.series
        }, b.chart.time);
      },
      firePointEvent: function firePointEvent(c, b, a) {
        var d = this,
            e = this.series.options;
        (e.point.events[c] || d.options && d.options.events && d.options.events[c]) && this.importEvents();
        "click" === c && e.allowPointSelect && (a = function a(_a) {
          d.select && d.select(null, _a.ctrlKey || _a.metaKey || _a.shiftKey);
        });
        y(this, c, b, a);
      },
      visible: !0
    };
  });
  M(I, "parts/Series.js", [I["parts/Globals.js"], I["parts/Utilities.js"]], function (c, f) {
    var F = f.arrayMax,
        G = f.arrayMin,
        z = f.defined,
        B = f.erase,
        t = f.extend,
        v = f.isArray,
        C = f.isNumber,
        H = f.isString,
        y = f.objectEach,
        h = f.pick,
        n = f.splat,
        q = f.syncTimeout,
        g = c.addEvent,
        b = c.animObject,
        a = c.correctFloat,
        d = c.defaultOptions,
        e = c.defaultPlotOptions,
        l = c.fireEvent,
        L = c.merge,
        E = c.removeEvent,
        p = c.SVGElement,
        u = c.win;
    c.Series = c.seriesType("line", null, {
      lineWidth: 2,
      allowPointSelect: !1,
      showCheckbox: !1,
      animation: {
        duration: 1E3
      },
      events: {},
      marker: {
        lineWidth: 0,
        lineColor: "#ffffff",
        enabledThreshold: 2,
        radius: 4,
        states: {
          normal: {
            animation: !0
          },
          hover: {
            animation: {
              duration: 50
            },
            enabled: !0,
            radiusPlus: 2,
            lineWidthPlus: 1
          },
          select: {
            fillColor: "#cccccc",
            lineColor: "#000000",
            lineWidth: 2
          }
        }
      },
      point: {
        events: {}
      },
      dataLabels: {
        align: "center",
        formatter: function formatter() {
          return null === this.y ? "" : c.numberFormat(this.y, -1);
        },
        padding: 5,
        style: {
          fontSize: "11px",
          fontWeight: "bold",
          color: "contrast",
          textOutline: "1px contrast"
        },
        verticalAlign: "bottom",
        x: 0,
        y: 0
      },
      cropThreshold: 300,
      opacity: 1,
      pointRange: 0,
      softThreshold: !0,
      states: {
        normal: {
          animation: !0
        },
        hover: {
          animation: {
            duration: 50
          },
          lineWidthPlus: 1,
          marker: {},
          halo: {
            size: 10,
            opacity: .25
          }
        },
        select: {
          animation: {
            duration: 0
          }
        },
        inactive: {
          animation: {
            duration: 50
          },
          opacity: .2
        }
      },
      stickyTracking: !0,
      turboThreshold: 1E3,
      findNearestPointBy: "x"
    }, {
      axisTypes: ["xAxis", "yAxis"],
      coll: "series",
      colorCounter: 0,
      cropShoulder: 1,
      directTouch: !1,
      isCartesian: !0,
      parallelArrays: ["x", "y"],
      pointClass: c.Point,
      requireSorting: !0,
      sorted: !0,
      init: function init(a, b) {
        l(this, "init", {
          options: b
        });
        var d = this,
            e = a.series,
            k;
        this.eventOptions = this.eventOptions || {};
        d.chart = a;
        d.options = b = d.setOptions(b);
        d.linkedSeries = [];
        d.bindAxes();
        t(d, {
          name: b.name,
          state: "",
          visible: !1 !== b.visible,
          selected: !0 === b.selected
        });
        var m = b.events;
        y(m, function (a, b) {
          c.isFunction(a) && d.eventOptions[b] !== a && (c.isFunction(d.eventOptions[b]) && E(d, b, d.eventOptions[b]), d.eventOptions[b] = a, g(d, b, a));
        });
        if (m && m.click || b.point && b.point.events && b.point.events.click || b.allowPointSelect) a.runTrackerClick = !0;
        d.getColor();
        d.getSymbol();
        d.parallelArrays.forEach(function (a) {
          d[a + "Data"] || (d[a + "Data"] = []);
        });
        d.points || d.data || d.setData(b.data, !1);
        d.isCartesian && (a.hasCartesianSeries = !0);
        e.length && (k = e[e.length - 1]);
        d._i = h(k && k._i, -1) + 1;
        a.orderSeries(this.insert(e));
        l(this, "afterInit");
      },
      insert: function insert(a) {
        var b = this.options.index,
            d;

        if (C(b)) {
          for (d = a.length; d--;) {
            if (b >= h(a[d].options.index, a[d]._i)) {
              a.splice(d + 1, 0, this);
              break;
            }
          }

          -1 === d && a.unshift(this);
          d += 1;
        } else a.push(this);

        return h(d, a.length - 1);
      },
      bindAxes: function bindAxes() {
        var a = this,
            b = a.options,
            d = a.chart,
            e;
        l(this, "bindAxes", null, function () {
          (a.axisTypes || []).forEach(function (k) {
            d[k].forEach(function (d) {
              e = d.options;
              if (b[k] === e.index || void 0 !== b[k] && b[k] === e.id || void 0 === b[k] && 0 === e.index) a.insert(d.series), a[k] = d, d.isDirty = !0;
            });
            a[k] || a.optionalAxis === k || c.error(18, !0, d);
          });
        });
      },
      updateParallelArrays: function updateParallelArrays(a, b) {
        var d = a.series,
            c = arguments,
            e = C(b) ? function (c) {
          var e = "y" === c && d.toYData ? d.toYData(a) : a[c];
          d[c + "Data"][b] = e;
        } : function (a) {
          Array.prototype[b].apply(d[a + "Data"], Array.prototype.slice.call(c, 2));
        };
        d.parallelArrays.forEach(e);
      },
      hasData: function hasData() {
        return this.visible && void 0 !== this.dataMax && void 0 !== this.dataMin || this.visible && this.yData && 0 < this.yData.length;
      },
      autoIncrement: function autoIncrement() {
        var a = this.options,
            b = this.xIncrement,
            d,
            c = a.pointIntervalUnit,
            e = this.chart.time;
        b = h(b, a.pointStart, 0);
        this.pointInterval = d = h(this.pointInterval, a.pointInterval, 1);
        c && (a = new e.Date(b), "day" === c ? e.set("Date", a, e.get("Date", a) + d) : "month" === c ? e.set("Month", a, e.get("Month", a) + d) : "year" === c && e.set("FullYear", a, e.get("FullYear", a) + d), d = a.getTime() - b);
        this.xIncrement = b + d;
        return b;
      },
      setOptions: function setOptions(a) {
        var b = this.chart,
            c = b.options,
            e = c.plotOptions,
            k = b.userOptions || {};
        a = L(a);
        b = b.styledMode;
        var g = {
          plotOptions: e,
          userOptions: a
        };
        l(this, "setOptions", g);
        var f = g.plotOptions[this.type],
            p = k.plotOptions || {};
        this.userOptions = g.userOptions;
        k = L(f, e.series, k.plotOptions && k.plotOptions[this.type], a);
        this.tooltipOptions = L(d.tooltip, d.plotOptions.series && d.plotOptions.series.tooltip, d.plotOptions[this.type].tooltip, c.tooltip.userOptions, e.series && e.series.tooltip, e[this.type].tooltip, a.tooltip);
        this.stickyTracking = h(a.stickyTracking, p[this.type] && p[this.type].stickyTracking, p.series && p.series.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? !0 : k.stickyTracking);
        null === f.marker && delete k.marker;
        this.zoneAxis = k.zoneAxis;
        c = this.zones = (k.zones || []).slice();
        !k.negativeColor && !k.negativeFillColor || k.zones || (e = {
          value: k[this.zoneAxis + "Threshold"] || k.threshold || 0,
          className: "highcharts-negative"
        }, b || (e.color = k.negativeColor, e.fillColor = k.negativeFillColor), c.push(e));
        c.length && z(c[c.length - 1].value) && c.push(b ? {} : {
          color: this.color,
          fillColor: this.fillColor
        });
        l(this, "afterSetOptions", {
          options: k
        });
        return k;
      },
      getName: function getName() {
        return h(this.options.name, "Series " + (this.index + 1));
      },
      getCyclic: function getCyclic(a, b, d) {
        var c = this.chart,
            e = this.userOptions,
            k = a + "Index",
            g = a + "Counter",
            f = d ? d.length : h(c.options.chart[a + "Count"], c[a + "Count"]);

        if (!b) {
          var r = h(e[k], e["_" + k]);
          z(r) || (c.series.length || (c[g] = 0), e["_" + k] = r = c[g] % f, c[g] += 1);
          d && (b = d[r]);
        }

        void 0 !== r && (this[k] = r);
        this[a] = b;
      },
      getColor: function getColor() {
        this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.options.color = null : this.getCyclic("color", this.options.color || e[this.type].color, this.chart.options.colors);
      },
      getSymbol: function getSymbol() {
        this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols);
      },
      findPointIndex: function findPointIndex(a, b) {
        var d = a.id;
        a = a.x;
        var c = this.points,
            e;

        if (d) {
          var k = (d = this.chart.get(d)) && d.index;
          void 0 !== k && (e = !0);
        }

        void 0 === k && C(a) && (k = this.xData.indexOf(a, b));
        -1 !== k && void 0 !== k && this.cropped && (k = k >= this.cropStart ? k - this.cropStart : k);
        !e && c[k] && c[k].touched && (k = void 0);
        return k;
      },
      drawLegendSymbol: c.LegendSymbolMixin.drawLineMarker,
      updateData: function updateData(a) {
        var b = this.options,
            d = this.points,
            c = [],
            e,
            k,
            g,
            h = this.requireSorting,
            f = a.length === d.length,
            l = !0;
        this.xIncrement = null;
        a.forEach(function (a, k) {
          var m = z(a) && this.pointClass.prototype.optionsToObject.call({
            series: this
          }, a) || {};
          var r = m.x;
          if (m.id || C(r)) if (r = this.findPointIndex(m, g), -1 === r || void 0 === r ? c.push(a) : d[r] && a !== b.data[r] ? (d[r].update(a, !1, null, !1), d[r].touched = !0, h && (g = r + 1)) : d[r] && (d[r].touched = !0), !f || k !== r || this.hasDerivedData) e = !0;
        }, this);
        if (e) for (a = d.length; a--;) {
          (k = d[a]) && !k.touched && k.remove(!1);
        } else f ? a.forEach(function (a, b) {
          d[b].update && a !== d[b].y && d[b].update(a, !1, null, !1);
        }) : l = !1;
        d.forEach(function (a) {
          a && (a.touched = !1);
        });
        if (!l) return !1;
        c.forEach(function (a) {
          this.addPoint(a, !1, null, null, !1);
        }, this);
        return !0;
      },
      setData: function setData(a, b, d, e) {
        var k = this,
            g = k.points,
            f = g && g.length || 0,
            r,
            l = k.options,
            p = k.chart,
            x = null,
            A = k.xAxis;
        x = l.turboThreshold;
        var u = this.xData,
            n = this.yData,
            q = (r = k.pointArrayMap) && r.length,
            y = l.keys,
            t = 0,
            E = 1,
            L;
        a = a || [];
        r = a.length;
        b = h(b, !0);
        !1 !== e && r && f && !k.cropped && !k.hasGroupedData && k.visible && !k.isSeriesBoosting && (L = this.updateData(a));

        if (!L) {
          k.xIncrement = null;
          k.colorCounter = 0;
          this.parallelArrays.forEach(function (a) {
            k[a + "Data"].length = 0;
          });
          if (x && r > x) {
            if (x = k.getFirstValidPoint(a), C(x)) for (d = 0; d < r; d++) {
              u[d] = this.autoIncrement(), n[d] = a[d];
            } else if (v(x)) {
              if (q) for (d = 0; d < r; d++) {
                e = a[d], u[d] = e[0], n[d] = e.slice(1, q + 1);
              } else for (y && (t = y.indexOf("x"), E = y.indexOf("y"), t = 0 <= t ? t : 0, E = 0 <= E ? E : 1), d = 0; d < r; d++) {
                e = a[d], u[d] = e[t], n[d] = e[E];
              }
            } else c.error(12, !1, p);
          } else for (d = 0; d < r; d++) {
            void 0 !== a[d] && (e = {
              series: k
            }, k.pointClass.prototype.applyOptions.apply(e, [a[d]]), k.updateParallelArrays(e, d));
          }
          n && H(n[0]) && c.error(14, !0, p);
          k.data = [];
          k.options.data = k.userOptions.data = a;

          for (d = f; d--;) {
            g[d] && g[d].destroy && g[d].destroy();
          }

          A && (A.minRange = A.userMinRange);
          k.isDirty = p.isDirtyBox = !0;
          k.isDirtyData = !!g;
          d = !1;
        }

        "point" === l.legendType && (this.processData(), this.generatePoints());
        b && p.redraw(d);
      },
      processData: function processData(a) {
        var b = this.xData,
            d = this.yData,
            e = b.length;
        var k = 0;
        var g = this.xAxis,
            h = this.options;
        var f = h.cropThreshold;
        var l = this.getExtremesFromAll || h.getExtremesFromAll,
            p = this.isCartesian;
        h = g && g.val2lin;
        var u = g && g.isLog,
            n = this.requireSorting;
        if (p && !this.isDirty && !g.isDirty && !this.yAxis.isDirty && !a) return !1;

        if (g) {
          a = g.getExtremes();
          var q = a.min;
          var v = a.max;
        }

        if (p && this.sorted && !l && (!f || e > f || this.forceCrop)) if (b[e - 1] < q || b[0] > v) b = [], d = [];else if (this.yData && (b[0] < q || b[e - 1] > v)) {
          k = this.cropData(this.xData, this.yData, q, v);
          b = k.xData;
          d = k.yData;
          k = k.start;
          var y = !0;
        }

        for (f = b.length || 1; --f;) {
          if (e = u ? h(b[f]) - h(b[f - 1]) : b[f] - b[f - 1], 0 < e && (void 0 === t || e < t)) var t = e;else 0 > e && n && (c.error(15, !1, this.chart), n = !1);
        }

        this.cropped = y;
        this.cropStart = k;
        this.processedXData = b;
        this.processedYData = d;
        this.closestPointRange = this.basePointRange = t;
      },
      cropData: function cropData(a, b, d, e, c) {
        var k = a.length,
            g = 0,
            f = k,
            r;
        c = h(c, this.cropShoulder);

        for (r = 0; r < k; r++) {
          if (a[r] >= d) {
            g = Math.max(0, r - c);
            break;
          }
        }

        for (d = r; d < k; d++) {
          if (a[d] > e) {
            f = d + c;
            break;
          }
        }

        return {
          xData: a.slice(g, f),
          yData: b.slice(g, f),
          start: g,
          end: f
        };
      },
      generatePoints: function generatePoints() {
        var a = this.options,
            b = a.data,
            d = this.data,
            e,
            c = this.processedXData,
            g = this.processedYData,
            f = this.pointClass,
            h = c.length,
            p = this.cropStart || 0,
            u = this.hasGroupedData;
        a = a.keys;
        var q = [],
            v;
        d || u || (d = [], d.length = b.length, d = this.data = d);
        a && u && (this.options.keys = !1);

        for (v = 0; v < h; v++) {
          var y = p + v;

          if (u) {
            var E = new f().init(this, [c[v]].concat(n(g[v])));
            E.dataGroup = this.groupMap[v];
            E.dataGroup.options && (E.options = E.dataGroup.options, t(E, E.dataGroup.options), delete E.dataLabels);
          } else (E = d[y]) || void 0 === b[y] || (d[y] = E = new f().init(this, b[y], c[v]));

          E && (E.index = y, q[v] = E);
        }

        this.options.keys = a;
        if (d && (h !== (e = d.length) || u)) for (v = 0; v < e; v++) {
          v !== p || u || (v += h), d[v] && (d[v].destroyElements(), d[v].plotX = void 0);
        }
        this.data = d;
        this.points = q;
        l(this, "afterGeneratePoints");
      },
      getXExtremes: function getXExtremes(a) {
        return {
          min: G(a),
          max: F(a)
        };
      },
      getExtremes: function getExtremes(a) {
        var b = this.xAxis,
            d = this.yAxis,
            e = this.processedXData || this.xData,
            c = [],
            k = 0,
            g = 0;
        var f = 0;
        var h = this.requireSorting ? this.cropShoulder : 0,
            p = d ? d.positiveValuesOnly : !1,
            u;
        a = a || this.stackedYData || this.processedYData || [];
        d = a.length;
        b && (f = b.getExtremes(), g = f.min, f = f.max);

        for (u = 0; u < d; u++) {
          var n = e[u];
          var q = a[u];
          var y = (C(q) || v(q)) && (q.length || 0 < q || !p);
          n = this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !b || (e[u + h] || n) >= g && (e[u - h] || n) <= f;
          if (y && n) if (y = q.length) for (; y--;) {
            C(q[y]) && (c[k++] = q[y]);
          } else c[k++] = q;
        }

        this.dataMin = G(c);
        this.dataMax = F(c);
        l(this, "afterGetExtremes");
      },
      getFirstValidPoint: function getFirstValidPoint(a) {
        for (var b = null, d = a.length, e = 0; null === b && e < d;) {
          b = a[e], e++;
        }

        return b;
      },
      translate: function translate() {
        this.processedXData || this.processData();
        this.generatePoints();
        var b = this.options,
            d = b.stacking,
            e = this.xAxis,
            c = e.categories,
            g = this.yAxis,
            m = this.points,
            f = m.length,
            p = !!this.modifyValue,
            u,
            n = this.pointPlacementToXValue(),
            q = C(n),
            y = b.threshold,
            t = b.startFromThreshold ? y : 0,
            E,
            L = this.zoneAxis || "y",
            B = Number.MAX_VALUE;

        for (u = 0; u < f; u++) {
          var H = m[u],
              G = H.x;
          var F = H.y;
          var I = H.low,
              M = d && g.stacks[(this.negStacks && F < (t ? 0 : y) ? "-" : "") + this.stackKey];
          g.positiveValuesOnly && null !== F && 0 >= F && (H.isNull = !0);
          H.plotX = E = a(Math.min(Math.max(-1E5, e.translate(G, 0, 0, 0, 1, n, "flags" === this.type)), 1E5));

          if (d && this.visible && M && M[G]) {
            var X = this.getStackIndicator(X, G, this.index);

            if (!H.isNull) {
              var P = M[G];
              var Y = P.points[X.key];
            }
          }

          v(Y) && (I = Y[0], F = Y[1], I === t && X.key === M[G].base && (I = h(C(y) && y, g.min)), g.positiveValuesOnly && 0 >= I && (I = null), H.total = H.stackTotal = P.total, H.percentage = P.total && H.y / P.total * 100, H.stackY = F, this.irregularWidths || P.setOffset(this.pointXOffset || 0, this.barW || 0));
          H.yBottom = z(I) ? Math.min(Math.max(-1E5, g.translate(I, 0, 1, 0, 1)), 1E5) : null;
          p && (F = this.modifyValue(F, H));
          H.plotY = F = "number" === typeof F && Infinity !== F ? Math.min(Math.max(-1E5, g.translate(F, 0, 1, 0, 1)), 1E5) : void 0;
          H.isInside = void 0 !== F && 0 <= F && F <= g.len && 0 <= E && E <= e.len;
          H.clientX = q ? a(e.translate(G, 0, 0, 0, 1, n)) : E;
          H.negative = H[L] < (b[L + "Threshold"] || y || 0);
          H.category = c && void 0 !== c[H.x] ? c[H.x] : H.x;

          if (!H.isNull) {
            void 0 !== Z && (B = Math.min(B, Math.abs(E - Z)));
            var Z = E;
          }

          H.zone = this.zones.length && H.getZone();
        }

        this.closestPointRangePx = B;
        l(this, "afterTranslate");
      },
      getValidPoints: function getValidPoints(a, b, d) {
        var e = this.chart;
        return (a || this.points || []).filter(function (a) {
          return b && !e.isInsidePlot(a.plotX, a.plotY, e.inverted) ? !1 : d || !a.isNull;
        });
      },
      getClipBox: function getClipBox(a, b) {
        var d = this.options,
            e = this.chart,
            c = e.inverted,
            k = this.xAxis,
            g = k && this.yAxis;
        a && !1 === d.clip && g ? a = c ? {
          y: -e.chartWidth + g.len + g.pos,
          height: e.chartWidth,
          width: e.chartHeight,
          x: -e.chartHeight + k.len + k.pos
        } : {
          y: -g.pos,
          height: e.chartHeight,
          width: e.chartWidth,
          x: -k.pos
        } : (a = this.clipBox || e.clipBox, b && (a.width = e.plotSizeX, a.x = 0));
        return b ? {
          width: a.width,
          x: a.x
        } : a;
      },
      setClip: function setClip(a) {
        var b = this.chart,
            d = this.options,
            e = b.renderer,
            c = b.inverted,
            k = this.clipBox,
            g = this.getClipBox(a),
            f = this.sharedClipKey || ["_sharedClip", a && a.duration, a && a.easing, g.height, d.xAxis, d.yAxis].join(),
            h = b[f],
            l = b[f + "m"];
        h || (a && (g.width = 0, c && (g.x = b.plotSizeX + (!1 !== d.clip ? 0 : b.plotTop)), b[f + "m"] = l = e.clipRect(c ? b.plotSizeX + 99 : -99, c ? -b.plotLeft : -b.plotTop, 99, c ? b.chartWidth : b.chartHeight)), b[f] = h = e.clipRect(g), h.count = {
          length: 0
        });
        a && !h.count[this.index] && (h.count[this.index] = !0, h.count.length += 1);
        if (!1 !== d.clip || a) this.group.clip(a || k ? h : b.clipRect), this.markerGroup.clip(l), this.sharedClipKey = f;
        a || (h.count[this.index] && (delete h.count[this.index], --h.count.length), 0 === h.count.length && f && b[f] && (k || (b[f] = b[f].destroy()), b[f + "m"] && (b[f + "m"] = b[f + "m"].destroy())));
      },
      animate: function animate(a) {
        var d = this.chart,
            e = b(this.options.animation);
        if (a) this.setClip(e);else {
          var c = this.sharedClipKey;
          a = d[c];
          var k = this.getClipBox(e, !0);
          a && a.animate(k, e);
          d[c + "m"] && d[c + "m"].animate({
            width: k.width + 99,
            x: k.x - (d.inverted ? 0 : 99)
          }, e);
          this.animate = null;
        }
      },
      afterAnimate: function afterAnimate() {
        this.setClip();
        l(this, "afterAnimate");
        this.finishedAnimating = !0;
      },
      drawPoints: function drawPoints() {
        var a = this.points,
            b = this.chart,
            d,
            e = this.options.marker,
            c = this[this.specialGroup] || this.markerGroup;
        var g = this.xAxis;
        var f = h(e.enabled, !g || g.isRadial ? !0 : null, this.closestPointRangePx >= e.enabledThreshold * e.radius);
        if (!1 !== e.enabled || this._hasPointMarkers) for (g = 0; g < a.length; g++) {
          var l = a[g];
          var p = (d = l.graphic) ? "animate" : "attr";
          var u = l.marker || {};
          var n = !!l.marker;
          var q = f && void 0 === u.enabled || u.enabled;
          var v = !1 !== l.isInside;

          if (q && !l.isNull) {
            var y = h(u.symbol, this.symbol);
            q = this.markerAttribs(l, l.selected && "select");
            d ? d[v ? "show" : "hide"](v).animate(q) : v && (0 < q.width || l.hasImage) && (l.graphic = d = b.renderer.symbol(y, q.x, q.y, q.width, q.height, n ? u : e).add(c));
            if (d && !b.styledMode) d[p](this.pointAttribs(l, l.selected && "select"));
            d && d.addClass(l.getClassName(), !0);
          } else d && (l.graphic = d.destroy());
        }
      },
      markerAttribs: function markerAttribs(a, b) {
        var d = this.options.marker,
            e = a.marker || {},
            c = e.symbol || d.symbol,
            k = h(e.radius, d.radius);
        b && (d = d.states[b], b = e.states && e.states[b], k = h(b && b.radius, d && d.radius, k + (d && d.radiusPlus || 0)));
        a.hasImage = c && 0 === c.indexOf("url");
        a.hasImage && (k = 0);
        a = {
          x: Math.floor(a.plotX) - k,
          y: a.plotY - k
        };
        k && (a.width = a.height = 2 * k);
        return a;
      },
      pointAttribs: function pointAttribs(a, b) {
        var d = this.options.marker,
            e = a && a.options,
            c = e && e.marker || {},
            k = this.color,
            g = e && e.color,
            f = a && a.color;
        e = h(c.lineWidth, d.lineWidth);
        var l = a && a.zone && a.zone.color;
        a = 1;
        k = g || l || f || k;
        g = c.fillColor || d.fillColor || k;
        k = c.lineColor || d.lineColor || k;
        b = b || "normal";
        d = d.states[b];
        b = c.states && c.states[b] || {};
        e = h(b.lineWidth, d.lineWidth, e + h(b.lineWidthPlus, d.lineWidthPlus, 0));
        g = b.fillColor || d.fillColor || g;
        k = b.lineColor || d.lineColor || k;
        a = h(b.opacity, d.opacity, a);
        return {
          stroke: k,
          "stroke-width": e,
          fill: g,
          opacity: a
        };
      },
      destroy: function destroy(a) {
        var b = this,
            d = b.chart,
            e = /AppleWebKit\/533/.test(u.navigator.userAgent),
            k,
            g,
            f = b.data || [],
            h,
            n;
        l(b, "destroy");
        a || E(b);
        (b.axisTypes || []).forEach(function (a) {
          (n = b[a]) && n.series && (B(n.series, b), n.isDirty = n.forceRedraw = !0);
        });
        b.legendItem && b.chart.legend.destroyItem(b);

        for (g = f.length; g--;) {
          (h = f[g]) && h.destroy && h.destroy();
        }

        b.points = null;
        c.clearTimeout(b.animationTimeout);
        y(b, function (a, b) {
          a instanceof p && !a.survive && (k = e && "group" === b ? "hide" : "destroy", a[k]());
        });
        d.hoverSeries === b && (d.hoverSeries = null);
        B(d.series, b);
        d.orderSeries();
        y(b, function (d, e) {
          a && "hcEvents" === e || delete b[e];
        });
      },
      getGraphPath: function getGraphPath(a, b, d) {
        var e = this,
            c = e.options,
            k = c.step,
            g,
            f = [],
            h = [],
            l;
        a = a || e.points;
        (g = a.reversed) && a.reverse();
        (k = {
          right: 1,
          center: 2
        }[k] || k && 3) && g && (k = 4 - k);
        !c.connectNulls || b || d || (a = this.getValidPoints(a));
        a.forEach(function (g, m) {
          var r = g.plotX,
              p = g.plotY,
              u = a[m - 1];
          (g.leftCliff || u && u.rightCliff) && !d && (l = !0);
          g.isNull && !z(b) && 0 < m ? l = !c.connectNulls : g.isNull && !b ? l = !0 : (0 === m || l ? m = ["M", g.plotX, g.plotY] : e.getPointSpline ? m = e.getPointSpline(a, g, m) : k ? (m = 1 === k ? ["L", u.plotX, p] : 2 === k ? ["L", (u.plotX + r) / 2, u.plotY, "L", (u.plotX + r) / 2, p] : ["L", r, u.plotY], m.push("L", r, p)) : m = ["L", r, p], h.push(g.x), k && (h.push(g.x), 2 === k && h.push(g.x)), f.push.apply(f, m), l = !1);
        });
        f.xMap = h;
        return e.graphPath = f;
      },
      drawGraph: function drawGraph() {
        var a = this,
            b = this.options,
            d = (this.gappedPath || this.getGraphPath).call(this),
            e = this.chart.styledMode,
            c = [["graph", "highcharts-graph"]];
        e || c[0].push(b.lineColor || this.color || "#cccccc", b.dashStyle);
        c = a.getZonesGraphs(c);
        c.forEach(function (c, k) {
          var g = c[0],
              f = a[g],
              h = f ? "animate" : "attr";
          f ? (f.endX = a.preventGraphAnimation ? null : d.xMap, f.animate({
            d: d
          })) : d.length && (a[g] = f = a.chart.renderer.path(d).addClass(c[1]).attr({
            zIndex: 1
          }).add(a.group));
          f && !e && (g = {
            stroke: c[2],
            "stroke-width": b.lineWidth,
            fill: a.fillGraph && a.color || "none"
          }, c[3] ? g.dashstyle = c[3] : "square" !== b.linecap && (g["stroke-linecap"] = g["stroke-linejoin"] = "round"), f[h](g).shadow(2 > k && b.shadow));
          f && (f.startX = d.xMap, f.isArea = d.isArea);
        });
      },
      getZonesGraphs: function getZonesGraphs(a) {
        this.zones.forEach(function (b, d) {
          d = ["zone-graph-" + d, "highcharts-graph highcharts-zone-graph-" + d + " " + (b.className || "")];
          this.chart.styledMode || d.push(b.color || this.color, b.dashStyle || this.options.dashStyle);
          a.push(d);
        }, this);
        return a;
      },
      applyZones: function applyZones() {
        var a = this,
            b = this.chart,
            d = b.renderer,
            e = this.zones,
            c,
            g,
            f = this.clips || [],
            l,
            p = this.graph,
            u = this.area,
            n = Math.max(b.chartWidth, b.chartHeight),
            q = this[(this.zoneAxis || "y") + "Axis"],
            v = b.inverted,
            y,
            t,
            E,
            C = !1;

        if (e.length && (p || u) && q && void 0 !== q.min) {
          var L = q.reversed;
          var z = q.horiz;
          p && !this.showLine && p.hide();
          u && u.hide();
          var B = q.getExtremes();
          e.forEach(function (e, k) {
            c = L ? z ? b.plotWidth : 0 : z ? 0 : q.toPixels(B.min) || 0;
            c = Math.min(Math.max(h(g, c), 0), n);
            g = Math.min(Math.max(Math.round(q.toPixels(h(e.value, B.max), !0) || 0), 0), n);
            C && (c = g = q.toPixels(B.max));
            y = Math.abs(c - g);
            t = Math.min(c, g);
            E = Math.max(c, g);
            q.isXAxis ? (l = {
              x: v ? E : t,
              y: 0,
              width: y,
              height: n
            }, z || (l.x = b.plotHeight - l.x)) : (l = {
              x: 0,
              y: v ? E : t,
              width: n,
              height: y
            }, z && (l.y = b.plotWidth - l.y));
            v && d.isVML && (l = q.isXAxis ? {
              x: 0,
              y: L ? t : E,
              height: l.width,
              width: b.chartWidth
            } : {
              x: l.y - b.plotLeft - b.spacingBox.x,
              y: 0,
              width: l.height,
              height: b.chartHeight
            });
            f[k] ? f[k].animate(l) : f[k] = d.clipRect(l);
            p && a["zone-graph-" + k].clip(f[k]);
            u && a["zone-area-" + k].clip(f[k]);
            C = e.value > B.max;
            a.resetZones && 0 === g && (g = void 0);
          });
          this.clips = f;
        } else a.visible && (p && p.show(!0), u && u.show(!0));
      },
      invertGroups: function invertGroups(a) {
        function b() {
          ["group", "markerGroup"].forEach(function (b) {
            d[b] && (e.renderer.isVML && d[b].attr({
              width: d.yAxis.len,
              height: d.xAxis.len
            }), d[b].width = d.yAxis.len, d[b].height = d.xAxis.len, d[b].invert(a));
          });
        }

        var d = this,
            e = d.chart;

        if (d.xAxis) {
          var c = g(e, "resize", b);
          g(d, "destroy", c);
          b(a);
          d.invertGroups = b;
        }
      },
      plotGroup: function plotGroup(a, b, d, e, c) {
        var k = this[a],
            g = !k;
        g && (this[a] = k = this.chart.renderer.g().attr({
          zIndex: e || .1
        }).add(c));
        k.addClass("highcharts-" + b + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (z(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (k.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0);
        k.attr({
          visibility: d
        })[g ? "attr" : "animate"](this.getPlotBox());
        return k;
      },
      getPlotBox: function getPlotBox() {
        var a = this.chart,
            b = this.xAxis,
            d = this.yAxis;
        a.inverted && (b = d, d = this.xAxis);
        return {
          translateX: b ? b.left : a.plotLeft,
          translateY: d ? d.top : a.plotTop,
          scaleX: 1,
          scaleY: 1
        };
      },
      render: function render() {
        var a = this,
            d = a.chart,
            e = a.options,
            c = !!a.animate && d.renderer.isSVG && b(e.animation).duration,
            g = a.visible ? "inherit" : "hidden",
            f = e.zIndex,
            h = a.hasRendered,
            p = d.seriesGroup,
            u = d.inverted;
        l(this, "render");
        var n = a.plotGroup("group", "series", g, f, p);
        a.markerGroup = a.plotGroup("markerGroup", "markers", g, f, p);
        c && a.animate(!0);
        n.inverted = a.isCartesian || a.invertable ? u : !1;
        a.drawGraph && (a.drawGraph(), a.applyZones());
        a.visible && a.drawPoints();
        a.drawDataLabels && a.drawDataLabels();
        a.redrawPoints && a.redrawPoints();
        a.drawTracker && !1 !== a.options.enableMouseTracking && a.drawTracker();
        a.invertGroups(u);
        !1 === e.clip || a.sharedClipKey || h || n.clip(d.clipRect);
        c && a.animate();
        h || (a.animationTimeout = q(function () {
          a.afterAnimate();
        }, c || 0));
        a.isDirty = !1;
        a.hasRendered = !0;
        l(a, "afterRender");
      },
      redraw: function redraw() {
        var a = this.chart,
            b = this.isDirty || this.isDirtyData,
            d = this.group,
            e = this.xAxis,
            c = this.yAxis;
        d && (a.inverted && d.attr({
          width: a.plotWidth,
          height: a.plotHeight
        }), d.animate({
          translateX: h(e && e.left, a.plotLeft),
          translateY: h(c && c.top, a.plotTop)
        }));
        this.translate();
        this.render();
        b && delete this.kdTree;
      },
      kdAxisArray: ["clientX", "plotY"],
      searchPoint: function searchPoint(a, b) {
        var d = this.xAxis,
            e = this.yAxis,
            c = this.chart.inverted;
        return this.searchKDTree({
          clientX: c ? d.len - a.chartY + d.pos : a.chartX - d.pos,
          plotY: c ? e.len - a.chartX + e.pos : a.chartY - e.pos
        }, b, a);
      },
      buildKDTree: function buildKDTree(a) {
        function b(a, e, c) {
          var g;

          if (g = a && a.length) {
            var k = d.kdAxisArray[e % c];
            a.sort(function (a, b) {
              return a[k] - b[k];
            });
            g = Math.floor(g / 2);
            return {
              point: a[g],
              left: b(a.slice(0, g), e + 1, c),
              right: b(a.slice(g + 1), e + 1, c)
            };
          }
        }

        this.buildingKdTree = !0;
        var d = this,
            e = -1 < d.options.findNearestPointBy.indexOf("y") ? 2 : 1;
        delete d.kdTree;
        q(function () {
          d.kdTree = b(d.getValidPoints(null, !d.directTouch), e, e);
          d.buildingKdTree = !1;
        }, d.options.kdNow || a && "touchstart" === a.type ? 0 : 1);
      },
      searchKDTree: function searchKDTree(a, b, d) {
        function e(a, b, d, h) {
          var l = b.point,
              m = c.kdAxisArray[d % h],
              p = l;
          var r = z(a[g]) && z(l[g]) ? Math.pow(a[g] - l[g], 2) : null;
          var u = z(a[k]) && z(l[k]) ? Math.pow(a[k] - l[k], 2) : null;
          u = (r || 0) + (u || 0);
          l.dist = z(u) ? Math.sqrt(u) : Number.MAX_VALUE;
          l.distX = z(r) ? Math.sqrt(r) : Number.MAX_VALUE;
          m = a[m] - l[m];
          u = 0 > m ? "left" : "right";
          r = 0 > m ? "right" : "left";
          b[u] && (u = e(a, b[u], d + 1, h), p = u[f] < p[f] ? u : l);
          b[r] && Math.sqrt(m * m) < p[f] && (a = e(a, b[r], d + 1, h), p = a[f] < p[f] ? a : p);
          return p;
        }

        var c = this,
            g = this.kdAxisArray[0],
            k = this.kdAxisArray[1],
            f = b ? "distX" : "dist";
        b = -1 < c.options.findNearestPointBy.indexOf("y") ? 2 : 1;
        this.kdTree || this.buildingKdTree || this.buildKDTree(d);
        if (this.kdTree) return e(a, this.kdTree, b, b);
      },
      pointPlacementToXValue: function pointPlacementToXValue() {
        var a = this.xAxis,
            b = this.options.pointPlacement;
        "between" === b && (b = a.reversed ? -.5 : .5);
        C(b) && (b *= h(this.options.pointRange || a.pointRange));
        return b;
      }
    });
    "";
  });
  M(I, "parts/Stacking.js", [I["parts/Globals.js"], I["parts/Utilities.js"]], function (c, f) {
    var F = f.defined,
        G = f.destroyObjectProperties,
        z = f.objectEach,
        B = f.pick;
    f = c.Axis;
    var t = c.Chart,
        v = c.correctFloat,
        C = c.format,
        H = c.Series;

    c.StackItem = function (c, f, n, q, g) {
      var b = c.chart.inverted;
      this.axis = c;
      this.isNegative = n;
      this.options = f = f || {};
      this.x = q;
      this.total = null;
      this.points = {};
      this.stack = g;
      this.rightCliff = this.leftCliff = 0;
      this.alignOptions = {
        align: f.align || (b ? n ? "left" : "right" : "center"),
        verticalAlign: f.verticalAlign || (b ? "middle" : n ? "bottom" : "top"),
        y: f.y,
        x: f.x
      };
      this.textAlign = f.textAlign || (b ? n ? "right" : "left" : "center");
    };

    c.StackItem.prototype = {
      destroy: function destroy() {
        G(this, this.axis);
      },
      render: function render(c) {
        var f = this.axis.chart,
            n = this.options,
            q = n.format;
        q = q ? C(q, this, f.time) : n.formatter.call(this);
        this.label ? this.label.attr({
          text: q,
          visibility: "hidden"
        }) : (this.label = f.renderer.label(q, null, null, n.shape, null, null, n.useHTML, !1, "stack-labels"), q = {
          text: q,
          align: this.textAlign,
          rotation: n.rotation,
          padding: B(n.padding, 0),
          visibility: "hidden"
        }, this.label.attr(q), f.styledMode || this.label.css(n.style), this.label.added || this.label.add(c));
        this.label.labelrank = f.plotHeight;
      },
      setOffset: function setOffset(c, f, n, q, g) {
        var b = this.axis,
            a = b.chart;
        q = b.translate(b.usePercentage ? 100 : q ? q : this.total, 0, 0, 0, 1);
        n = b.translate(n ? n : 0);
        n = F(q) && Math.abs(q - n);
        c = B(g, a.xAxis[0].translate(this.x)) + c;
        b = F(q) && this.getStackBox(a, this, c, q, f, n, b);
        f = this.label;
        c = this.isNegative;
        g = "justify" === B(this.options.overflow, "justify");

        if (f && b) {
          n = f.getBBox();
          var d = a.inverted ? c ? n.width : 0 : n.width / 2,
              e = a.inverted ? n.height / 2 : c ? -4 : n.height + 4;
          this.alignOptions.x = B(this.options.x, 0);
          f.align(this.alignOptions, null, b);
          q = f.alignAttr;
          f.show();
          q.y -= e;
          g && (q.x -= d, H.prototype.justifyDataLabel.call(this.axis, f, this.alignOptions, q, n, b), q.x += d);
          q.x = f.alignAttr.x;
          f.attr({
            x: q.x,
            y: q.y
          });
          B(!g && this.options.crop, !0) && ((a = a.isInsidePlot(f.x + (a.inverted ? 0 : -n.width / 2), f.y) && a.isInsidePlot(f.x + (a.inverted ? c ? -n.width : n.width : n.width / 2), f.y + n.height)) || f.hide());
        }
      },
      getStackBox: function getStackBox(c, f, n, q, g, b, a) {
        var d = f.axis.reversed,
            e = c.inverted;
        c = a.height + a.pos - (e ? c.plotLeft : c.plotTop);
        f = f.isNegative && !d || !f.isNegative && d;
        return {
          x: e ? f ? q : q - b : n,
          y: e ? c - n - g : f ? c - q - b : c - q,
          width: e ? b : g,
          height: e ? g : b
        };
      }
    };

    t.prototype.getStacks = function () {
      var c = this,
          f = c.inverted;
      c.yAxis.forEach(function (c) {
        c.stacks && c.hasVisibleSeries && (c.oldStacks = c.stacks);
      });
      c.series.forEach(function (h) {
        var n = h.xAxis && h.xAxis.options || {};
        !h.options.stacking || !0 !== h.visible && !1 !== c.options.chart.ignoreHiddenSeries || (h.stackKey = [h.type, B(h.options.stack, ""), f ? n.top : n.left, f ? n.height : n.width].join());
      });
    };

    f.prototype.buildStacks = function () {
      var c = this.series,
          f = B(this.options.reversedStacks, !0),
          n = c.length,
          q;

      if (!this.isXAxis) {
        this.usePercentage = !1;

        for (q = n; q--;) {
          c[f ? q : n - q - 1].setStackedPoints();
        }

        for (q = 0; q < n; q++) {
          c[q].modifyStacks();
        }
      }
    };

    f.prototype.renderStackTotals = function () {
      var c = this.chart,
          f = c.renderer,
          n = this.stacks,
          q = this.stackTotalGroup;
      q || (this.stackTotalGroup = q = f.g("stack-labels").attr({
        visibility: "visible",
        zIndex: 6
      }).add());
      q.translate(c.plotLeft, c.plotTop);
      z(n, function (c) {
        z(c, function (b) {
          b.render(q);
        });
      });
    };

    f.prototype.resetStacks = function () {
      var c = this,
          f = c.stacks;
      c.isXAxis || z(f, function (f) {
        z(f, function (h, g) {
          h.touched < c.stacksTouched ? (h.destroy(), delete f[g]) : (h.total = null, h.cumulative = null);
        });
      });
    };

    f.prototype.cleanStacks = function () {
      if (!this.isXAxis) {
        if (this.oldStacks) var c = this.stacks = this.oldStacks;
        z(c, function (c) {
          z(c, function (c) {
            c.cumulative = c.total;
          });
        });
      }
    };

    H.prototype.setStackedPoints = function () {
      if (this.options.stacking && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
        var f = this.processedXData,
            h = this.processedYData,
            n = [],
            q = h.length,
            g = this.options,
            b = g.threshold,
            a = B(g.startFromThreshold && b, 0),
            d = g.stack;
        g = g.stacking;
        var e = this.stackKey,
            l = "-" + e,
            t = this.negStacks,
            E = this.yAxis,
            p = E.stacks,
            u = E.oldStacks,
            k,
            r;
        E.stacksTouched += 1;

        for (r = 0; r < q; r++) {
          var x = f[r];
          var A = h[r];
          var w = this.getStackIndicator(w, x, this.index);
          var m = w.key;
          var K = (k = t && A < (a ? 0 : b)) ? l : e;
          p[K] || (p[K] = {});
          p[K][x] || (u[K] && u[K][x] ? (p[K][x] = u[K][x], p[K][x].total = null) : p[K][x] = new c.StackItem(E, E.options.stackLabels, k, x, d));
          K = p[K][x];
          null !== A ? (K.points[m] = K.points[this.index] = [B(K.cumulative, a)], F(K.cumulative) || (K.base = m), K.touched = E.stacksTouched, 0 < w.index && !1 === this.singleStacks && (K.points[m][0] = K.points[this.index + "," + x + ",0"][0])) : K.points[m] = K.points[this.index] = null;
          "percent" === g ? (k = k ? e : l, t && p[k] && p[k][x] ? (k = p[k][x], K.total = k.total = Math.max(k.total, K.total) + Math.abs(A) || 0) : K.total = v(K.total + (Math.abs(A) || 0))) : K.total = v(K.total + (A || 0));
          K.cumulative = B(K.cumulative, a) + (A || 0);
          null !== A && (K.points[m].push(K.cumulative), n[r] = K.cumulative);
        }

        "percent" === g && (E.usePercentage = !0);
        this.stackedYData = n;
        E.oldStacks = {};
      }
    };

    H.prototype.modifyStacks = function () {
      var c = this,
          f = c.stackKey,
          n = c.yAxis.stacks,
          q = c.processedXData,
          g,
          b = c.options.stacking;
      c[b + "Stacker"] && [f, "-" + f].forEach(function (a) {
        for (var d = q.length, e, f; d--;) {
          if (e = q[d], g = c.getStackIndicator(g, e, c.index, a), f = (e = n[a] && n[a][e]) && e.points[g.key]) c[b + "Stacker"](f, e, d);
        }
      });
    };

    H.prototype.percentStacker = function (c, f, n) {
      f = f.total ? 100 / f.total : 0;
      c[0] = v(c[0] * f);
      c[1] = v(c[1] * f);
      this.stackedYData[n] = c[1];
    };

    H.prototype.getStackIndicator = function (c, f, n, q) {
      !F(c) || c.x !== f || q && c.key !== q ? c = {
        x: f,
        index: 0,
        key: q
      } : c.index++;
      c.key = [n, f, c.index].join();
      return c;
    };
  });
  M(I, "parts/Dynamics.js", [I["parts/Globals.js"], I["parts/Utilities.js"]], function (c, f) {
    var F = f.defined,
        G = f.erase,
        z = f.extend,
        B = f.isArray,
        t = f.isNumber,
        v = f.isObject,
        C = f.isString,
        H = f.objectEach,
        y = f.pick,
        h = f.setAnimation,
        n = f.splat,
        q = c.addEvent,
        g = c.animate,
        b = c.Axis;
    f = c.Chart;
    var a = c.createElement,
        d = c.css,
        e = c.fireEvent,
        l = c.merge,
        L = c.Point,
        E = c.Series,
        p = c.seriesTypes;

    c.cleanRecursively = function (a, b) {
      var d = {};
      H(a, function (e, g) {
        if (v(a[g], !0) && !a.nodeType && b[g]) e = c.cleanRecursively(a[g], b[g]), Object.keys(e).length && (d[g] = e);else if (v(a[g]) || a[g] !== b[g]) d[g] = a[g];
      });
      return d;
    };

    z(f.prototype, {
      addSeries: function addSeries(a, b, d) {
        var c,
            g = this;
        a && (b = y(b, !0), e(g, "addSeries", {
          options: a
        }, function () {
          c = g.initSeries(a);
          g.isDirtyLegend = !0;
          g.linkSeries();
          e(g, "afterAddSeries", {
            series: c
          });
          b && g.redraw(d);
        }));
        return c;
      },
      addAxis: function addAxis(a, b, d, c) {
        return this.createAxis(b ? "xAxis" : "yAxis", {
          axis: a,
          redraw: d,
          animation: c
        });
      },
      addColorAxis: function addColorAxis(a, b, d) {
        return this.createAxis("colorAxis", {
          axis: a,
          redraw: b,
          animation: d
        });
      },
      createAxis: function createAxis(a, d) {
        var e = this.options,
            g = "colorAxis" === a,
            k = d.redraw,
            f = d.animation;
        d = l(d.axis, {
          index: this[a].length,
          isX: "xAxis" === a
        });
        var h = g ? new c.ColorAxis(this, d) : new b(this, d);
        e[a] = n(e[a] || {});
        e[a].push(d);
        g && (this.isDirtyLegend = !0, this.axes.forEach(function (a) {
          a.series = [];
        }), this.series.forEach(function (a) {
          a.bindAxes();
          a.isDirtyData = !0;
        }));
        y(k, !0) && this.redraw(f);
        return h;
      },
      showLoading: function showLoading(b) {
        var c = this,
            e = c.options,
            f = c.loadingDiv,
            h = e.loading,
            l = function l() {
          f && d(f, {
            left: c.plotLeft + "px",
            top: c.plotTop + "px",
            width: c.plotWidth + "px",
            height: c.plotHeight + "px"
          });
        };

        f || (c.loadingDiv = f = a("div", {
          className: "highcharts-loading highcharts-loading-hidden"
        }, null, c.container), c.loadingSpan = a("span", {
          className: "highcharts-loading-inner"
        }, null, f), q(c, "redraw", l));
        f.className = "highcharts-loading";
        c.loadingSpan.innerHTML = y(b, e.lang.loading, "");
        c.styledMode || (d(f, z(h.style, {
          zIndex: 10
        })), d(c.loadingSpan, h.labelStyle), c.loadingShown || (d(f, {
          opacity: 0,
          display: ""
        }), g(f, {
          opacity: h.style.opacity || .5
        }, {
          duration: h.showDuration || 0
        })));
        c.loadingShown = !0;
        l();
      },
      hideLoading: function hideLoading() {
        var a = this.options,
            b = this.loadingDiv;
        b && (b.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || g(b, {
          opacity: 0
        }, {
          duration: a.loading.hideDuration || 100,
          complete: function complete() {
            d(b, {
              display: "none"
            });
          }
        }));
        this.loadingShown = !1;
      },
      propsRequireDirtyBox: "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
      propsRequireReflow: "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),
      propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),
      collectionsWithUpdate: "xAxis yAxis zAxis colorAxis series pane".split(" "),
      update: function update(a, b, d, g) {
        var k = this,
            f = {
          credits: "addCredits",
          title: "setTitle",
          subtitle: "setSubtitle",
          caption: "setCaption"
        },
            h,
            p,
            r,
            u = a.isResponsiveOptions,
            q = [];
        e(k, "update", {
          options: a
        });
        u || k.setResponsive(!1, !0);
        a = c.cleanRecursively(a, k.options);
        l(!0, k.userOptions, a);

        if (h = a.chart) {
          l(!0, k.options.chart, h);
          "className" in h && k.setClassName(h.className);
          "reflow" in h && k.setReflow(h.reflow);

          if ("inverted" in h || "polar" in h || "type" in h) {
            k.propFromSeries();
            var x = !0;
          }

          "alignTicks" in h && (x = !0);
          H(h, function (a, b) {
            -1 !== k.propsRequireUpdateSeries.indexOf("chart." + b) && (p = !0);
            -1 !== k.propsRequireDirtyBox.indexOf(b) && (k.isDirtyBox = !0);
            u || -1 === k.propsRequireReflow.indexOf(b) || (r = !0);
          });
          !k.styledMode && "style" in h && k.renderer.setStyle(h.style);
        }

        !k.styledMode && a.colors && (this.options.colors = a.colors);
        a.plotOptions && l(!0, this.options.plotOptions, a.plotOptions);
        a.time && this.time === c.time && (this.time = new c.Time(a.time));
        H(a, function (a, b) {
          if (k[b] && "function" === typeof k[b].update) k[b].update(a, !1);else if ("function" === typeof k[f[b]]) k[f[b]](a);
          "chart" !== b && -1 !== k.propsRequireUpdateSeries.indexOf(b) && (p = !0);
        });
        this.collectionsWithUpdate.forEach(function (b) {
          if (a[b]) {
            if ("series" === b) {
              var c = [];
              k[b].forEach(function (a, b) {
                a.options.isInternal || c.push(y(a.options.index, b));
              });
            }

            n(a[b]).forEach(function (a, e) {
              (e = F(a.id) && k.get(a.id) || k[b][c ? c[e] : e]) && e.coll === b && (e.update(a, !1), d && (e.touched = !0));
              !e && d && k.collectionsWithInit[b] && (k.collectionsWithInit[b][0].apply(k, [a].concat(k.collectionsWithInit[b][1] || []).concat([!1])).touched = !0);
            });
            d && k[b].forEach(function (a) {
              a.touched || a.options.isInternal ? delete a.touched : q.push(a);
            });
          }
        });
        q.forEach(function (a) {
          a.remove && a.remove(!1);
        });
        x && k.axes.forEach(function (a) {
          a.update({}, !1);
        });
        p && k.series.forEach(function (a) {
          a.update({}, !1);
        });
        a.loading && l(!0, k.options.loading, a.loading);
        x = h && h.width;
        h = h && h.height;
        C(h) && (h = c.relativeLength(h, x || k.chartWidth));
        r || t(x) && x !== k.chartWidth || t(h) && h !== k.chartHeight ? k.setSize(x, h, g) : y(b, !0) && k.redraw(g);
        e(k, "afterUpdate", {
          options: a,
          redraw: b,
          animation: g
        });
      },
      setSubtitle: function setSubtitle(a, b) {
        this.applyDescription("subtitle", a);
        this.layOutTitles(b);
      },
      setCaption: function setCaption(a, b) {
        this.applyDescription("caption", a);
        this.layOutTitles(b);
      }
    });
    f.prototype.collectionsWithInit = {
      xAxis: [f.prototype.addAxis, [!0]],
      yAxis: [f.prototype.addAxis, [!1]],
      colorAxis: [f.prototype.addColorAxis, [!1]],
      series: [f.prototype.addSeries]
    };
    z(L.prototype, {
      update: function update(a, b, d, c) {
        function e() {
          g.applyOptions(a);
          null === g.y && f && (g.graphic = f.destroy());
          v(a, !0) && (f && f.element && a && a.marker && void 0 !== a.marker.symbol && (g.graphic = f.destroy()), a && a.dataLabels && g.dataLabel && (g.dataLabel = g.dataLabel.destroy()), g.connector && (g.connector = g.connector.destroy()));
          h = g.index;
          k.updateParallelArrays(g, h);
          p.data[h] = v(p.data[h], !0) || v(a, !0) ? g.options : y(a, p.data[h]);
          k.isDirty = k.isDirtyData = !0;
          !k.fixedBox && k.hasCartesianSeries && (l.isDirtyBox = !0);
          "point" === p.legendType && (l.isDirtyLegend = !0);
          b && l.redraw(d);
        }

        var g = this,
            k = g.series,
            f = g.graphic,
            h,
            l = k.chart,
            p = k.options;
        b = y(b, !0);
        !1 === c ? e() : g.firePointEvent("update", {
          options: a
        }, e);
      },
      remove: function remove(a, b) {
        this.series.removePoint(this.series.data.indexOf(this), a, b);
      }
    });
    z(E.prototype, {
      addPoint: function addPoint(a, b, d, c, g) {
        var k = this.options,
            f = this.data,
            h = this.chart,
            l = this.xAxis;
        l = l && l.hasNames && l.names;
        var p = k.data,
            r = this.xData,
            n;
        b = y(b, !0);
        var u = {
          series: this
        };
        this.pointClass.prototype.applyOptions.apply(u, [a]);
        var q = u.x;
        var x = r.length;
        if (this.requireSorting && q < r[x - 1]) for (n = !0; x && r[x - 1] > q;) {
          x--;
        }
        this.updateParallelArrays(u, "splice", x, 0, 0);
        this.updateParallelArrays(u, x);
        l && u.name && (l[q] = u.name);
        p.splice(x, 0, a);
        n && (this.data.splice(x, 0, null), this.processData());
        "point" === k.legendType && this.generatePoints();
        d && (f[0] && f[0].remove ? f[0].remove(!1) : (f.shift(), this.updateParallelArrays(u, "shift"), p.shift()));
        !1 !== g && e(this, "addPoint", {
          point: u
        });
        this.isDirtyData = this.isDirty = !0;
        b && h.redraw(c);
      },
      removePoint: function removePoint(a, b, d) {
        var c = this,
            e = c.data,
            g = e[a],
            k = c.points,
            f = c.chart,
            l = function l() {
          k && k.length === e.length && k.splice(a, 1);
          e.splice(a, 1);
          c.options.data.splice(a, 1);
          c.updateParallelArrays(g || {
            series: c
          }, "splice", a, 1);
          g && g.destroy();
          c.isDirty = !0;
          c.isDirtyData = !0;
          b && f.redraw();
        };

        h(d, f);
        b = y(b, !0);
        g ? g.firePointEvent("remove", null, l) : l();
      },
      remove: function remove(a, b, d, c) {
        function g() {
          k.destroy(c);
          k.remove = null;
          f.isDirtyLegend = f.isDirtyBox = !0;
          f.linkSeries();
          y(a, !0) && f.redraw(b);
        }

        var k = this,
            f = k.chart;
        !1 !== d ? e(k, "remove", null, g) : g();
      },
      update: function update(a, b) {
        a = c.cleanRecursively(a, this.userOptions);
        e(this, "update", {
          options: a
        });
        var d = this,
            g = d.chart,
            k = d.userOptions,
            f = d.initialType || d.type,
            h = a.type || k.type || g.options.chart.type,
            n = !(this.hasDerivedData || a.dataGrouping || h && h !== this.type || void 0 !== a.pointStart || a.pointInterval || a.pointIntervalUnit || a.keys),
            u = p[f].prototype,
            q,
            v = ["group", "markerGroup", "dataLabelsGroup", "transformGroup"],
            t = ["eventOptions", "navigatorSeries", "baseSeries"],
            E = d.finishedAnimating && {
          animation: !1
        },
            C = {};
        n && (t.push("data", "isDirtyData", "points", "processedXData", "processedYData", "xIncrement", "_hasPointMarkers", "_hasPointLabels", "mapMap", "mapData", "minY", "maxY", "minX", "maxX"), !1 !== a.visible && t.push("area", "graph"), d.parallelArrays.forEach(function (a) {
          t.push(a + "Data");
        }), a.data && this.setData(a.data, !1));
        a = l(k, E, {
          index: void 0 === k.index ? d.index : k.index,
          pointStart: y(k.pointStart, d.xData[0])
        }, !n && {
          data: d.options.data
        }, a);
        n && a.data && (a.data = d.options.data);
        t = v.concat(t);
        t.forEach(function (a) {
          t[a] = d[a];
          delete d[a];
        });
        d.remove(!1, null, !1, !0);

        for (q in u) {
          d[q] = void 0;
        }

        p[h || f] ? z(d, p[h || f].prototype) : c.error(17, !0, g, {
          missingModuleFor: h || f
        });
        t.forEach(function (a) {
          d[a] = t[a];
        });
        d.init(g, a);

        if (n && this.points) {
          var L = d.options;
          !1 === L.visible ? (C.graphic = 1, C.dataLabel = 1) : d._hasPointLabels || (h = L.marker, u = L.dataLabels, h && (!1 === h.enabled || "symbol" in h) && (C.graphic = 1), u && !1 === u.enabled && (C.dataLabel = 1));
          this.points.forEach(function (a) {
            a && a.series && (a.resolveColor(), Object.keys(C).length && a.destroyElements(C), !1 === L.showInLegend && a.legendItem && g.legend.destroyItem(a));
          }, this);
        }

        a.zIndex !== k.zIndex && v.forEach(function (b) {
          d[b] && d[b].attr({
            zIndex: a.zIndex
          });
        });
        d.initialType = f;
        g.linkSeries();
        e(this, "afterUpdate");
        y(b, !0) && g.redraw(n ? void 0 : !1);
      },
      setName: function setName(a) {
        this.name = this.options.name = this.userOptions.name = a;
        this.chart.isDirtyLegend = !0;
      }
    });
    z(b.prototype, {
      update: function update(a, b) {
        var d = this.chart,
            c = a && a.events || {};
        a = l(this.userOptions, a);
        d.options[this.coll].indexOf && (d.options[this.coll][d.options[this.coll].indexOf(this.userOptions)] = a);
        H(d.options[this.coll].events, function (a, b) {
          "undefined" === typeof c[b] && (c[b] = void 0);
        });
        this.destroy(!0);
        this.init(d, z(a, {
          events: c
        }));
        d.isDirtyBox = !0;
        y(b, !0) && d.redraw();
      },
      remove: function remove(a) {
        for (var b = this.chart, d = this.coll, c = this.series, e = c.length; e--;) {
          c[e] && c[e].remove(!1);
        }

        G(b.axes, this);
        G(b[d], this);
        B(b.options[d]) ? b.options[d].splice(this.options.index, 1) : delete b.options[d];
        b[d].forEach(function (a, b) {
          a.options.index = a.userOptions.index = b;
        });
        this.destroy();
        b.isDirtyBox = !0;
        y(a, !0) && b.redraw();
      },
      setTitle: function setTitle(a, b) {
        this.update({
          title: a
        }, b);
      },
      setCategories: function setCategories(a, b) {
        this.update({
          categories: a
        }, b);
      }
    });
  });
  M(I, "parts/AreaSeries.js", [I["parts/Globals.js"], I["parts/Utilities.js"]], function (c, f) {
    var F = f.objectEach,
        G = f.pick,
        z = c.color,
        B = c.Series;
    f = c.seriesType;
    f("area", "line", {
      softThreshold: !1,
      threshold: 0
    }, {
      singleStacks: !1,
      getStackPoints: function getStackPoints(c) {
        var f = [],
            t = [],
            z = this.xAxis,
            y = this.yAxis,
            h = y.stacks[this.stackKey],
            n = {},
            q = this.index,
            g = y.series,
            b = g.length,
            a = G(y.options.reversedStacks, !0) ? 1 : -1,
            d;
        c = c || this.points;

        if (this.options.stacking) {
          for (d = 0; d < c.length; d++) {
            c[d].leftNull = c[d].rightNull = void 0, n[c[d].x] = c[d];
          }

          F(h, function (a, b) {
            null !== a.total && t.push(b);
          });
          t.sort(function (a, b) {
            return a - b;
          });
          var e = g.map(function (a) {
            return a.visible;
          });
          t.forEach(function (c, g) {
            var l = 0,
                p,
                u;
            if (n[c] && !n[c].isNull) f.push(n[c]), [-1, 1].forEach(function (k) {
              var f = 1 === k ? "rightNull" : "leftNull",
                  l = 0,
                  v = h[t[g + k]];
              if (v) for (d = q; 0 <= d && d < b;) {
                p = v.points[d], p || (d === q ? n[c][f] = !0 : e[d] && (u = h[c].points[d]) && (l -= u[1] - u[0])), d += a;
              }
              n[c][1 === k ? "rightCliff" : "leftCliff"] = l;
            });else {
              for (d = q; 0 <= d && d < b;) {
                if (p = h[c].points[d]) {
                  l = p[1];
                  break;
                }

                d += a;
              }

              l = y.translate(l, 0, 1, 0, 1);
              f.push({
                isNull: !0,
                plotX: z.translate(c, 0, 0, 0, 1),
                x: c,
                plotY: l,
                yBottom: l
              });
            }
          });
        }

        return f;
      },
      getGraphPath: function getGraphPath(c) {
        var f = B.prototype.getGraphPath,
            t = this.options,
            z = t.stacking,
            y = this.yAxis,
            h,
            n = [],
            q = [],
            g = this.index,
            b = y.stacks[this.stackKey],
            a = t.threshold,
            d = Math.round(y.getThreshold(t.threshold));
        t = G(t.connectNulls, "percent" === z);

        var e = function e(_e, f, k) {
          var h = c[_e];
          _e = z && b[h.x].points[g];
          var l = h[k + "Null"] || 0;
          k = h[k + "Cliff"] || 0;
          h = !0;

          if (k || l) {
            var p = (l ? _e[0] : _e[1]) + k;
            var u = _e[0] + k;
            h = !!l;
          } else !z && c[f] && c[f].isNull && (p = u = a);

          void 0 !== p && (q.push({
            plotX: L,
            plotY: null === p ? d : y.getThreshold(p),
            isNull: h,
            isCliff: !0
          }), n.push({
            plotX: L,
            plotY: null === u ? d : y.getThreshold(u),
            doCurve: !1
          }));
        };

        c = c || this.points;
        z && (c = this.getStackPoints(c));

        for (h = 0; h < c.length; h++) {
          z || (c[h].leftCliff = c[h].rightCliff = c[h].leftNull = c[h].rightNull = void 0);
          var l = c[h].isNull;
          var L = G(c[h].rectPlotX, c[h].plotX);
          var E = G(c[h].yBottom, d);
          if (!l || t) t || e(h, h - 1, "left"), l && !z && t || (q.push(c[h]), n.push({
            x: h,
            plotX: L,
            plotY: E
          })), t || e(h, h + 1, "right");
        }

        h = f.call(this, q, !0, !0);
        n.reversed = !0;
        l = f.call(this, n, !0, !0);
        l.length && (l[0] = "L");
        l = h.concat(l);
        f = f.call(this, q, !1, t);
        l.xMap = h.xMap;
        this.areaPath = l;
        return f;
      },
      drawGraph: function drawGraph() {
        this.areaPath = [];
        B.prototype.drawGraph.apply(this);
        var c = this,
            f = this.areaPath,
            C = this.options,
            H = [["area", "highcharts-area", this.color, C.fillColor]];
        this.zones.forEach(function (f, h) {
          H.push(["zone-area-" + h, "highcharts-area highcharts-zone-area-" + h + " " + f.className, f.color || c.color, f.fillColor || C.fillColor]);
        });
        H.forEach(function (v) {
          var h = v[0],
              n = c[h],
              q = n ? "animate" : "attr",
              g = {};
          n ? (n.endX = c.preventGraphAnimation ? null : f.xMap, n.animate({
            d: f
          })) : (g.zIndex = 0, n = c[h] = c.chart.renderer.path(f).addClass(v[1]).add(c.group), n.isArea = !0);
          c.chart.styledMode || (g.fill = G(v[3], z(v[2]).setOpacity(G(C.fillOpacity, .75)).get()));
          n[q](g);
          n.startX = f.xMap;
          n.shiftUnit = C.step ? 2 : 1;
        });
      },
      drawLegendSymbol: c.LegendSymbolMixin.drawRectangle
    });
    "";
  });
  M(I, "parts/SplineSeries.js", [I["parts/Globals.js"], I["parts/Utilities.js"]], function (c, f) {
    var F = f.pick;
    c = c.seriesType;
    c("spline", "line", {}, {
      getPointSpline: function getPointSpline(c, f, B) {
        var t = f.plotX,
            v = f.plotY,
            C = c[B - 1];
        B = c[B + 1];

        if (C && !C.isNull && !1 !== C.doCurve && !f.isCliff && B && !B.isNull && !1 !== B.doCurve && !f.isCliff) {
          c = C.plotY;
          var z = B.plotX;
          B = B.plotY;
          var y = 0;
          var h = (1.5 * t + C.plotX) / 2.5;
          var n = (1.5 * v + c) / 2.5;
          z = (1.5 * t + z) / 2.5;
          var q = (1.5 * v + B) / 2.5;
          z !== h && (y = (q - n) * (z - t) / (z - h) + v - q);
          n += y;
          q += y;
          n > c && n > v ? (n = Math.max(c, v), q = 2 * v - n) : n < c && n < v && (n = Math.min(c, v), q = 2 * v - n);
          q > B && q > v ? (q = Math.max(B, v), n = 2 * v - q) : q < B && q < v && (q = Math.min(B, v), n = 2 * v - q);
          f.rightContX = z;
          f.rightContY = q;
        }

        f = ["C", F(C.rightContX, C.plotX), F(C.rightContY, C.plotY), F(h, t), F(n, v), t, v];
        C.rightContX = C.rightContY = null;
        return f;
      }
    });
    "";
  });
  M(I, "parts/AreaSplineSeries.js", [I["parts/Globals.js"]], function (c) {
    var f = c.seriesTypes.area.prototype,
        F = c.seriesType;
    F("areaspline", "spline", c.defaultPlotOptions.area, {
      getStackPoints: f.getStackPoints,
      getGraphPath: f.getGraphPath,
      drawGraph: f.drawGraph,
      drawLegendSymbol: c.LegendSymbolMixin.drawRectangle
    });
    "";
  });
  M(I, "parts/ColumnSeries.js", [I["parts/Globals.js"], I["parts/Utilities.js"]], function (c, f) {
    var F = f.defined,
        G = f.extend,
        z = f.isNumber,
        B = f.pick,
        t = c.animObject,
        v = c.color,
        C = c.merge,
        H = c.Series;
    f = c.seriesType;
    var y = c.svg;
    f("column", "line", {
      borderRadius: 0,
      crisp: !0,
      groupPadding: .2,
      marker: null,
      pointPadding: .1,
      minPointLength: 0,
      cropThreshold: 50,
      pointRange: null,
      states: {
        hover: {
          halo: !1,
          brightness: .1
        },
        select: {
          color: "#cccccc",
          borderColor: "#000000"
        }
      },
      dataLabels: {
        align: null,
        verticalAlign: null,
        y: null
      },
      softThreshold: !1,
      startFromThreshold: !0,
      stickyTracking: !1,
      tooltip: {
        distance: 6
      },
      threshold: 0,
      borderColor: "#ffffff"
    }, {
      cropShoulder: 0,
      directTouch: !0,
      trackerGroups: ["group", "dataLabelsGroup"],
      negStacks: !0,
      init: function init() {
        H.prototype.init.apply(this, arguments);
        var c = this,
            f = c.chart;
        f.hasRendered && f.series.forEach(function (f) {
          f.type === c.type && (f.isDirty = !0);
        });
      },
      getColumnMetrics: function getColumnMetrics() {
        var c = this,
            f = c.options,
            q = c.xAxis,
            g = c.yAxis,
            b = q.options.reversedStacks;
        b = q.reversed && !b || !q.reversed && b;
        var a,
            d = {},
            e = 0;
        !1 === f.grouping ? e = 1 : c.chart.series.forEach(function (b) {
          var f = b.yAxis,
              k = b.options;

          if (b.type === c.type && (b.visible || !c.chart.options.chart.ignoreHiddenSeries) && g.len === f.len && g.pos === f.pos) {
            if (k.stacking) {
              a = b.stackKey;
              void 0 === d[a] && (d[a] = e++);
              var h = d[a];
            } else !1 !== k.grouping && (h = e++);

            b.columnIndex = h;
          }
        });
        var l = Math.min(Math.abs(q.transA) * (q.ordinalSlope || f.pointRange || q.closestPointRange || q.tickInterval || 1), q.len),
            v = l * f.groupPadding,
            t = (l - 2 * v) / (e || 1);
        f = Math.min(f.maxPointWidth || q.len, B(f.pointWidth, t * (1 - 2 * f.pointPadding)));
        c.columnMetrics = {
          width: f,
          offset: (t - f) / 2 + (v + ((c.columnIndex || 0) + (b ? 1 : 0)) * t - l / 2) * (b ? -1 : 1)
        };
        return c.columnMetrics;
      },
      crispCol: function crispCol(c, f, q, g) {
        var b = this.chart,
            a = this.borderWidth,
            d = -(a % 2 ? .5 : 0);
        a = a % 2 ? .5 : 1;
        b.inverted && b.renderer.isVML && (a += 1);
        this.options.crisp && (q = Math.round(c + q) + d, c = Math.round(c) + d, q -= c);
        g = Math.round(f + g) + a;
        d = .5 >= Math.abs(f) && .5 < g;
        f = Math.round(f) + a;
        g -= f;
        d && g && (--f, g += 1);
        return {
          x: c,
          y: f,
          width: q,
          height: g
        };
      },
      translate: function translate() {
        var c = this,
            f = c.chart,
            q = c.options,
            g = c.dense = 2 > c.closestPointRange * c.xAxis.transA;
        g = c.borderWidth = B(q.borderWidth, g ? 0 : 1);
        var b = c.yAxis,
            a = q.threshold,
            d = c.translatedThreshold = b.getThreshold(a),
            e = B(q.minPointLength, 5),
            l = c.getColumnMetrics(),
            v = l.width,
            t = c.barW = Math.max(v, 1 + 2 * g),
            p = c.pointXOffset = l.offset,
            u = c.dataMin,
            k = c.dataMax;
        f.inverted && (d -= .5);
        q.pointPadding && (t = Math.ceil(t));
        H.prototype.translate.apply(c);
        c.points.forEach(function (g) {
          var h = B(g.yBottom, d),
              l = 999 + Math.abs(h),
              r = v;
          l = Math.min(Math.max(-l, g.plotY), b.len + l);
          var m = g.plotX + p,
              n = t,
              q = Math.min(l, h),
              y = Math.max(l, h) - q;

          if (e && Math.abs(y) < e) {
            y = e;
            var E = !b.reversed && !g.negative || b.reversed && g.negative;
            g.y === a && c.dataMax <= a && b.min < a && u !== k && (E = !E);
            q = Math.abs(q - d) > e ? h - e : d - (E ? e : 0);
          }

          F(g.options.pointWidth) && (r = n = Math.ceil(g.options.pointWidth), m -= Math.round((r - v) / 2));
          g.barX = m;
          g.pointWidth = r;
          g.tooltipPos = f.inverted ? [b.len + b.pos - f.plotLeft - l, c.xAxis.len - m - n / 2, y] : [m + n / 2, l + b.pos - f.plotTop, y];
          g.shapeType = c.pointClass.prototype.shapeType || "rect";
          g.shapeArgs = c.crispCol.apply(c, g.isNull ? [m, d, n, 0] : [m, q, n, y]);
        });
      },
      getSymbol: c.noop,
      drawLegendSymbol: c.LegendSymbolMixin.drawRectangle,
      drawGraph: function drawGraph() {
        this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
      },
      pointAttribs: function pointAttribs(c, f) {
        var h = this.options,
            g = this.pointAttrToOptions || {};
        var b = g.stroke || "borderColor";
        var a = g["stroke-width"] || "borderWidth",
            d = c && c.color || this.color,
            e = c && c[b] || h[b] || this.color || d,
            l = c && c[a] || h[a] || this[a] || 0;
        g = c && c.options.dashStyle || h.dashStyle;
        var n = B(h.opacity, 1);

        if (c && this.zones.length) {
          var t = c.getZone();
          d = c.options.color || t && (t.color || c.nonZonedColor) || this.color;
          t && (e = t.borderColor || e, g = t.dashStyle || g, l = t.borderWidth || l);
        }

        f && (c = C(h.states[f], c.options.states && c.options.states[f] || {}), f = c.brightness, d = c.color || void 0 !== f && v(d).brighten(c.brightness).get() || d, e = c[b] || e, l = c[a] || l, g = c.dashStyle || g, n = B(c.opacity, n));
        b = {
          fill: d,
          stroke: e,
          "stroke-width": l,
          opacity: n
        };
        g && (b.dashstyle = g);
        return b;
      },
      drawPoints: function drawPoints() {
        var c = this,
            f = this.chart,
            q = c.options,
            g = f.renderer,
            b = q.animationLimit || 250,
            a;
        c.points.forEach(function (d) {
          var e = d.graphic,
              l = e && f.pointCount < b ? "animate" : "attr";

          if (z(d.plotY) && null !== d.y) {
            a = d.shapeArgs;
            e && d.hasNewShapeType() && (e = e.destroy());
            if (e) e[l](C(a));else d.graphic = e = g[d.shapeType](a).add(d.group || c.group);
            if (q.borderRadius) e[l]({
              r: q.borderRadius
            });
            f.styledMode || e[l](c.pointAttribs(d, d.selected && "select")).shadow(!1 !== d.allowShadow && q.shadow, null, q.stacking && !q.borderRadius);
            e.addClass(d.getClassName(), !0);
          } else e && (d.graphic = e.destroy());
        });
      },
      animate: function animate(c) {
        var f = this,
            h = this.yAxis,
            g = f.options,
            b = this.chart.inverted,
            a = {},
            d = b ? "translateX" : "translateY";
        if (y) if (c) a.scaleY = .001, c = Math.min(h.pos + h.len, Math.max(h.pos, h.toPixels(g.threshold))), b ? a.translateX = c - h.len : a.translateY = c, f.clipBox && f.setClip(), f.group.attr(a);else {
          var e = f.group.attr(d);
          f.group.animate({
            scaleY: 1
          }, G(t(f.options.animation), {
            step: function step(b, c) {
              a[d] = e + c.pos * (h.pos - e);
              f.group.attr(a);
            }
          }));
          f.animate = null;
        }
      },
      remove: function remove() {
        var c = this,
            f = c.chart;
        f.hasRendered && f.series.forEach(function (f) {
          f.type === c.type && (f.isDirty = !0);
        });
        H.prototype.remove.apply(c, arguments);
      }
    });
    "";
  });
  M(I, "parts/BarSeries.js", [I["parts/Globals.js"]], function (c) {
    c = c.seriesType;
    c("bar", "column", null, {
      inverted: !0
    });
    "";
  });
  M(I, "parts/ScatterSeries.js", [I["parts/Globals.js"]], function (c) {
    var f = c.Series,
        F = c.seriesType;
    F("scatter", "line", {
      lineWidth: 0,
      findNearestPointBy: "xy",
      jitter: {
        x: 0,
        y: 0
      },
      marker: {
        enabled: !0
      },
      tooltip: {
        headerFormat: "<span style=\"color:{point.color}\">\u25CF</span> <span style=\"font-size: 10px\"> {series.name}</span><br/>",
        pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
      }
    }, {
      sorted: !1,
      requireSorting: !1,
      noSharedTooltip: !0,
      trackerGroups: ["group", "markerGroup", "dataLabelsGroup"],
      takeOrdinalPosition: !1,
      drawGraph: function drawGraph() {
        this.options.lineWidth && f.prototype.drawGraph.call(this);
      },
      applyJitter: function applyJitter() {
        var c = this,
            f = this.options.jitter,
            B = this.points.length;
        f && this.points.forEach(function (t, v) {
          ["x", "y"].forEach(function (C, z) {
            var y = "plot" + C.toUpperCase();

            if (f[C] && !t.isNull) {
              var h = c[C + "Axis"];
              var n = f[C] * h.transA;

              if (h && !h.isLog) {
                var q = Math.max(0, t[y] - n);
                h = Math.min(h.len, t[y] + n);
                z = 1E4 * Math.sin(v + z * B);
                t[y] = q + (h - q) * (z - Math.floor(z));
                "x" === C && (t.clientX = t.plotX);
              }
            }
          });
        });
      }
    });
    c.addEvent(f, "afterTranslate", function () {
      this.applyJitter && this.applyJitter();
    });
    "";
  });
  M(I, "mixins/centered-series.js", [I["parts/Globals.js"], I["parts/Utilities.js"]], function (c, f) {
    var F = f.isNumber,
        G = f.pick,
        z = c.deg2rad,
        B = c.relativeLength;
    c.CenteredSeriesMixin = {
      getCenter: function getCenter() {
        var c = this.options,
            f = this.chart,
            C = 2 * (c.slicedOffset || 0),
            z = f.plotWidth - 2 * C;
        f = f.plotHeight - 2 * C;
        var y = c.center;
        y = [G(y[0], "50%"), G(y[1], "50%"), c.size || "100%", c.innerSize || 0];
        var h = Math.min(z, f),
            n;

        for (n = 0; 4 > n; ++n) {
          var q = y[n];
          c = 2 > n || 2 === n && /%$/.test(q);
          y[n] = B(q, [z, f, h, y[2]][n]) + (c ? C : 0);
        }

        y[3] > y[2] && (y[3] = y[2]);
        return y;
      },
      getStartAndEndRadians: function getStartAndEndRadians(c, f) {
        c = F(c) ? c : 0;
        f = F(f) && f > c && 360 > f - c ? f : c + 360;
        return {
          start: z * (c + -90),
          end: z * (f + -90)
        };
      }
    };
  });
  M(I, "parts/PieSeries.js", [I["parts/Globals.js"], I["parts/Utilities.js"]], function (c, f) {
    var F = f.defined,
        G = f.isNumber,
        z = f.pick,
        B = f.setAnimation,
        t = c.addEvent;
    f = c.CenteredSeriesMixin;
    var v = f.getStartAndEndRadians,
        C = c.merge,
        H = c.noop,
        y = c.Point,
        h = c.Series,
        n = c.seriesType,
        q = c.fireEvent;
    n("pie", "line", {
      center: [null, null],
      clip: !1,
      colorByPoint: !0,
      dataLabels: {
        allowOverlap: !0,
        connectorPadding: 5,
        distance: 30,
        enabled: !0,
        formatter: function formatter() {
          return this.point.isNull ? void 0 : this.point.name;
        },
        softConnector: !0,
        x: 0,
        connectorShape: "fixedOffset",
        crookDistance: "70%"
      },
      fillColor: void 0,
      ignoreHiddenPoint: !0,
      inactiveOtherPoints: !0,
      legendType: "point",
      marker: null,
      size: null,
      showInLegend: !1,
      slicedOffset: 10,
      stickyTracking: !1,
      tooltip: {
        followPointer: !0
      },
      borderColor: "#ffffff",
      borderWidth: 1,
      lineWidth: void 0,
      states: {
        hover: {
          brightness: .1
        }
      }
    }, {
      isCartesian: !1,
      requireSorting: !1,
      directTouch: !0,
      noSharedTooltip: !0,
      trackerGroups: ["group", "dataLabelsGroup"],
      axisTypes: [],
      pointAttribs: c.seriesTypes.column.prototype.pointAttribs,
      animate: function animate(c) {
        var b = this,
            a = b.points,
            d = b.startAngleRad;
        c || (a.forEach(function (a) {
          var c = a.graphic,
              e = a.shapeArgs;
          c && (c.attr({
            r: a.startR || b.center[3] / 2,
            start: d,
            end: d
          }), c.animate({
            r: e.r,
            start: e.start,
            end: e.end
          }, b.options.animation));
        }), b.animate = null);
      },
      hasData: function hasData() {
        return !!this.processedXData.length;
      },
      updateTotals: function updateTotals() {
        var c,
            b = 0,
            a = this.points,
            d = a.length,
            e = this.options.ignoreHiddenPoint;

        for (c = 0; c < d; c++) {
          var f = a[c];
          b += e && !f.visible ? 0 : f.isNull ? 0 : f.y;
        }

        this.total = b;

        for (c = 0; c < d; c++) {
          f = a[c], f.percentage = 0 < b && (f.visible || !e) ? f.y / b * 100 : 0, f.total = b;
        }
      },
      generatePoints: function generatePoints() {
        h.prototype.generatePoints.call(this);
        this.updateTotals();
      },
      getX: function getX(c, b, a) {
        var d = this.center,
            e = this.radii ? this.radii[a.index] : d[2] / 2;
        return d[0] + (b ? -1 : 1) * Math.cos(Math.asin(Math.max(Math.min((c - d[1]) / (e + a.labelDistance), 1), -1))) * (e + a.labelDistance) + (0 < a.labelDistance ? (b ? -1 : 1) * this.options.dataLabels.padding : 0);
      },
      translate: function translate(g) {
        this.generatePoints();
        var b = 0,
            a = this.options,
            d = a.slicedOffset,
            e = d + (a.borderWidth || 0),
            f = v(a.startAngle, a.endAngle),
            h = this.startAngleRad = f.start;
        f = (this.endAngleRad = f.end) - h;
        var n = this.points,
            p = a.dataLabels.distance;
        a = a.ignoreHiddenPoint;
        var u,
            k = n.length;
        g || (this.center = g = this.getCenter());

        for (u = 0; u < k; u++) {
          var r = n[u];
          var x = h + b * f;
          if (!a || r.visible) b += r.percentage / 100;
          var A = h + b * f;
          r.shapeType = "arc";
          r.shapeArgs = {
            x: g[0],
            y: g[1],
            r: g[2] / 2,
            innerR: g[3] / 2,
            start: Math.round(1E3 * x) / 1E3,
            end: Math.round(1E3 * A) / 1E3
          };
          r.labelDistance = z(r.options.dataLabels && r.options.dataLabels.distance, p);
          r.labelDistance = c.relativeLength(r.labelDistance, r.shapeArgs.r);
          this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, r.labelDistance);
          A = (A + x) / 2;
          A > 1.5 * Math.PI ? A -= 2 * Math.PI : A < -Math.PI / 2 && (A += 2 * Math.PI);
          r.slicedTranslation = {
            translateX: Math.round(Math.cos(A) * d),
            translateY: Math.round(Math.sin(A) * d)
          };
          var w = Math.cos(A) * g[2] / 2;
          var m = Math.sin(A) * g[2] / 2;
          r.tooltipPos = [g[0] + .7 * w, g[1] + .7 * m];
          r.half = A < -Math.PI / 2 || A > Math.PI / 2 ? 1 : 0;
          r.angle = A;
          x = Math.min(e, r.labelDistance / 5);
          r.labelPosition = {
            natural: {
              x: g[0] + w + Math.cos(A) * r.labelDistance,
              y: g[1] + m + Math.sin(A) * r.labelDistance
            },
            "final": {},
            alignment: 0 > r.labelDistance ? "center" : r.half ? "right" : "left",
            connectorPosition: {
              breakAt: {
                x: g[0] + w + Math.cos(A) * x,
                y: g[1] + m + Math.sin(A) * x
              },
              touchingSliceAt: {
                x: g[0] + w,
                y: g[1] + m
              }
            }
          };
        }

        q(this, "afterTranslate");
      },
      drawEmpty: function drawEmpty() {
        var c = this.options;

        if (0 === this.total) {
          var b = this.center[0];
          var a = this.center[1];
          this.graph || (this.graph = this.chart.renderer.circle(b, a, 0).addClass("highcharts-graph").add(this.group));
          this.graph.animate({
            "stroke-width": c.borderWidth,
            cx: b,
            cy: a,
            r: this.center[2] / 2,
            fill: c.fillColor || "none",
            stroke: c.color || "#cccccc"
          });
        } else this.graph && (this.graph = this.graph.destroy());
      },
      redrawPoints: function redrawPoints() {
        var c = this,
            b = c.chart,
            a = b.renderer,
            d,
            e,
            f,
            h,
            n = c.options.shadow;
        this.drawEmpty();
        !n || c.shadowGroup || b.styledMode || (c.shadowGroup = a.g("shadow").attr({
          zIndex: -1
        }).add(c.group));
        c.points.forEach(function (g) {
          var l = {};
          e = g.graphic;

          if (!g.isNull && e) {
            h = g.shapeArgs;
            d = g.getTranslate();

            if (!b.styledMode) {
              var k = g.shadowGroup;
              n && !k && (k = g.shadowGroup = a.g("shadow").add(c.shadowGroup));
              k && k.attr(d);
              f = c.pointAttribs(g, g.selected && "select");
            }

            g.delayedRendering ? (e.setRadialReference(c.center).attr(h).attr(d), b.styledMode || e.attr(f).attr({
              "stroke-linejoin": "round"
            }).shadow(n, k), g.delayedRendering = !1) : (e.setRadialReference(c.center), b.styledMode || C(!0, l, f), C(!0, l, h, d), e.animate(l));
            e.attr({
              visibility: g.visible ? "inherit" : "hidden"
            });
            e.addClass(g.getClassName());
          } else e && (g.graphic = e.destroy());
        });
      },
      drawPoints: function drawPoints() {
        var c = this.chart.renderer;
        this.points.forEach(function (b) {
          b.graphic || (b.graphic = c[b.shapeType](b.shapeArgs).add(b.series.group), b.delayedRendering = !0);
        });
      },
      searchPoint: H,
      sortByAngle: function sortByAngle(c, b) {
        c.sort(function (a, d) {
          return void 0 !== a.angle && (d.angle - a.angle) * b;
        });
      },
      drawLegendSymbol: c.LegendSymbolMixin.drawRectangle,
      getCenter: f.getCenter,
      getSymbol: H,
      drawGraph: null
    }, {
      init: function init() {
        y.prototype.init.apply(this, arguments);
        var c = this;
        c.name = z(c.name, "Slice");

        var b = function b(a) {
          c.slice("select" === a.type);
        };

        t(c, "select", b);
        t(c, "unselect", b);
        return c;
      },
      isValid: function isValid() {
        return G(this.y) && 0 <= this.y;
      },
      setVisible: function setVisible(c, b) {
        var a = this,
            d = a.series,
            e = d.chart,
            f = d.options.ignoreHiddenPoint;
        b = z(b, f);
        c !== a.visible && (a.visible = a.options.visible = c = void 0 === c ? !a.visible : c, d.options.data[d.data.indexOf(a)] = a.options, ["graphic", "dataLabel", "connector", "shadowGroup"].forEach(function (b) {
          if (a[b]) a[b][c ? "show" : "hide"](!0);
        }), a.legendItem && e.legend.colorizeItem(a, c), c || "hover" !== a.state || a.setState(""), f && (d.isDirty = !0), b && e.redraw());
      },
      slice: function slice(c, b, a) {
        var d = this.series;
        B(a, d.chart);
        z(b, !0);
        this.sliced = this.options.sliced = F(c) ? c : !this.sliced;
        d.options.data[d.data.indexOf(this)] = this.options;
        this.graphic.animate(this.getTranslate());
        this.shadowGroup && this.shadowGroup.animate(this.getTranslate());
      },
      getTranslate: function getTranslate() {
        return this.sliced ? this.slicedTranslation : {
          translateX: 0,
          translateY: 0
        };
      },
      haloPath: function haloPath(c) {
        var b = this.shapeArgs;
        return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(b.x, b.y, b.r + c, b.r + c, {
          innerR: b.r - 1,
          start: b.start,
          end: b.end
        });
      },
      connectorShapes: {
        fixedOffset: function fixedOffset(c, b, a) {
          var d = b.breakAt;
          b = b.touchingSliceAt;
          return ["M", c.x, c.y].concat(a.softConnector ? ["C", c.x + ("left" === c.alignment ? -5 : 5), c.y, 2 * d.x - b.x, 2 * d.y - b.y, d.x, d.y] : ["L", d.x, d.y]).concat(["L", b.x, b.y]);
        },
        straight: function straight(c, b) {
          b = b.touchingSliceAt;
          return ["M", c.x, c.y, "L", b.x, b.y];
        },
        crookedLine: function crookedLine(f, b, a) {
          b = b.touchingSliceAt;
          var d = this.series,
              e = d.center[0],
              g = d.chart.plotWidth,
              h = d.chart.plotLeft;
          d = f.alignment;
          var n = this.shapeArgs.r;
          a = c.relativeLength(a.crookDistance, 1);
          a = "left" === d ? e + n + (g + h - e - n) * (1 - a) : h + (e - n) * a;
          e = ["L", a, f.y];
          if ("left" === d ? a > f.x || a < b.x : a < f.x || a > b.x) e = [];
          return ["M", f.x, f.y].concat(e).concat(["L", b.x, b.y]);
        }
      },
      getConnectorPath: function getConnectorPath() {
        var c = this.labelPosition,
            b = this.series.options.dataLabels,
            a = b.connectorShape,
            d = this.connectorShapes;
        d[a] && (a = d[a]);
        return a.call(this, {
          x: c.final.x,
          y: c.final.y,
          alignment: c.alignment
        }, c.connectorPosition, b);
      }
    });
    "";
  });
  M(I, "parts/DataLabels.js", [I["parts/Globals.js"], I["parts/Utilities.js"]], function (c, f) {
    var F = f.arrayMax,
        G = f.defined,
        z = f.extend,
        B = f.isArray,
        t = f.objectEach,
        v = f.pick,
        C = f.splat,
        H = c.format,
        y = c.merge;
    f = c.noop;
    var h = c.relativeLength,
        n = c.Series,
        q = c.seriesTypes,
        g = c.stableSort;

    c.distribute = function (b, a, d) {
      function e(a, b) {
        return a.target - b.target;
      }

      var f,
          h = !0,
          n = b,
          p = [];
      var u = 0;
      var k = n.reducedLen || a;

      for (f = b.length; f--;) {
        u += b[f].size;
      }

      if (u > k) {
        g(b, function (a, b) {
          return (b.rank || 0) - (a.rank || 0);
        });

        for (u = f = 0; u <= k;) {
          u += b[f].size, f++;
        }

        p = b.splice(f - 1, b.length);
      }

      g(b, e);

      for (b = b.map(function (a) {
        return {
          size: a.size,
          targets: [a.target],
          align: v(a.align, .5)
        };
      }); h;) {
        for (f = b.length; f--;) {
          h = b[f], u = (Math.min.apply(0, h.targets) + Math.max.apply(0, h.targets)) / 2, h.pos = Math.min(Math.max(0, u - h.size * h.align), a - h.size);
        }

        f = b.length;

        for (h = !1; f--;) {
          0 < f && b[f - 1].pos + b[f - 1].size > b[f].pos && (b[f - 1].size += b[f].size, b[f - 1].targets = b[f - 1].targets.concat(b[f].targets), b[f - 1].align = .5, b[f - 1].pos + b[f - 1].size > a && (b[f - 1].pos = a - b[f - 1].size), b.splice(f, 1), h = !0);
        }
      }

      n.push.apply(n, p);
      f = 0;
      b.some(function (b) {
        var e = 0;
        if (b.targets.some(function () {
          n[f].pos = b.pos + e;
          if (Math.abs(n[f].pos - n[f].target) > d) return n.slice(0, f + 1).forEach(function (a) {
            delete a.pos;
          }), n.reducedLen = (n.reducedLen || a) - .1 * a, n.reducedLen > .1 * a && c.distribute(n, a, d), !0;
          e += n[f].size;
          f++;
        })) return !0;
      });
      g(n, e);
    };

    n.prototype.drawDataLabels = function () {
      function b(a, b) {
        var d = b.filter;
        return d ? (b = d.operator, a = a[d.property], d = d.value, ">" === b && a > d || "<" === b && a < d || ">=" === b && a >= d || "<=" === b && a <= d || "==" === b && a == d || "===" === b && a === d ? !0 : !1) : !0;
      }

      function a(a, b) {
        var d = [],
            c;
        if (B(a) && !B(b)) d = a.map(function (a) {
          return y(a, b);
        });else if (B(b) && !B(a)) d = b.map(function (b) {
          return y(a, b);
        });else if (B(a) || B(b)) for (c = Math.max(a.length, b.length); c--;) {
          d[c] = y(a[c], b[c]);
        } else d = y(a, b);
        return d;
      }

      var d = this,
          e = d.chart,
          f = d.options,
          g = f.dataLabels,
          h = d.points,
          p,
          n = d.hasRendered || 0,
          k = c.animObject(f.animation).duration,
          r = Math.min(k, 200),
          q = !e.renderer.forExport && v(g.defer, 0 < r),
          A = e.renderer;
      g = a(a(e.options.plotOptions && e.options.plotOptions.series && e.options.plotOptions.series.dataLabels, e.options.plotOptions && e.options.plotOptions[d.type] && e.options.plotOptions[d.type].dataLabels), g);
      c.fireEvent(this, "drawDataLabels");

      if (B(g) || g.enabled || d._hasPointLabels) {
        var w = d.plotGroup("dataLabelsGroup", "data-labels", q && !n ? "hidden" : "inherit", g.zIndex || 6);
        q && (w.attr({
          opacity: +n
        }), n || setTimeout(function () {
          var a = d.dataLabelsGroup;
          a && (d.visible && w.show(!0), a[f.animation ? "animate" : "attr"]({
            opacity: 1
          }, {
            duration: r
          }));
        }, k - r));
        h.forEach(function (c) {
          p = C(a(g, c.dlOptions || c.options && c.options.dataLabels));
          p.forEach(function (a, g) {
            var k = a.enabled && (!c.isNull || c.dataLabelOnNull) && b(c, a),
                h = c.dataLabels ? c.dataLabels[g] : c.dataLabel,
                l = c.connectors ? c.connectors[g] : c.connector,
                p = v(a.distance, c.labelDistance),
                m = !h;

            if (k) {
              var r = c.getLabelConfig();
              var n = v(a[c.formatPrefix + "Format"], a.format);
              r = G(n) ? H(n, r, e.time) : (a[c.formatPrefix + "Formatter"] || a.formatter).call(r, a);
              n = a.style;
              var u = a.rotation;
              e.styledMode || (n.color = v(a.color, n.color, d.color, "#000000"), "contrast" === n.color && (c.contrastColor = A.getContrast(c.color || d.color), n.color = !G(p) && a.inside || 0 > p || f.stacking ? c.contrastColor : "#000000"), f.cursor && (n.cursor = f.cursor));
              var q = {
                r: a.borderRadius || 0,
                rotation: u,
                padding: a.padding,
                zIndex: 1
              };
              e.styledMode || (q.fill = a.backgroundColor, q.stroke = a.borderColor, q["stroke-width"] = a.borderWidth);
              t(q, function (a, b) {
                void 0 === a && delete q[b];
              });
            }

            !h || k && G(r) ? k && G(r) && (h ? q.text = r : (c.dataLabels = c.dataLabels || [], h = c.dataLabels[g] = u ? A.text(r, 0, -9999).addClass("highcharts-data-label") : A.label(r, 0, -9999, a.shape, null, null, a.useHTML, null, "data-label"), g || (c.dataLabel = h), h.addClass(" highcharts-data-label-color-" + c.colorIndex + " " + (a.className || "") + (a.useHTML ? " highcharts-tracker" : ""))), h.options = a, h.attr(q), e.styledMode || h.css(n).shadow(a.shadow), h.added || h.add(w), a.textPath && !a.useHTML && h.setTextPath(c.getDataLabelPath && c.getDataLabelPath(h) || c.graphic, a.textPath), d.alignDataLabel(c, h, a, null, m)) : (c.dataLabel = c.dataLabel && c.dataLabel.destroy(), c.dataLabels && (1 === c.dataLabels.length ? delete c.dataLabels : delete c.dataLabels[g]), g || delete c.dataLabel, l && (c.connector = c.connector.destroy(), c.connectors && (1 === c.connectors.length ? delete c.connectors : delete c.connectors[g])));
          });
        });
      }

      c.fireEvent(this, "afterDrawDataLabels");
    };

    n.prototype.alignDataLabel = function (b, a, d, c, f) {
      var e = this.chart,
          g = this.isCartesian && e.inverted,
          h = v(b.dlBox && b.dlBox.centerX, b.plotX, -9999),
          l = v(b.plotY, -9999),
          k = a.getBBox(),
          n = d.rotation,
          q = d.align,
          A = this.visible && (b.series.forceDL || e.isInsidePlot(h, Math.round(l), g) || c && e.isInsidePlot(h, g ? c.x + 1 : c.y + c.height - 1, g)),
          w = "justify" === v(d.overflow, "justify");

      if (A) {
        var m = e.renderer.fontMetrics(e.styledMode ? void 0 : d.style.fontSize, a).b;
        c = z({
          x: g ? this.yAxis.len - l : h,
          y: Math.round(g ? this.xAxis.len - h : l),
          width: 0,
          height: 0
        }, c);
        z(d, {
          width: k.width,
          height: k.height
        });
        n ? (w = !1, h = e.renderer.rotCorr(m, n), h = {
          x: c.x + d.x + c.width / 2 + h.x,
          y: c.y + d.y + {
            top: 0,
            middle: .5,
            bottom: 1
          }[d.verticalAlign] * c.height
        }, a[f ? "attr" : "animate"](h).attr({
          align: q
        }), l = (n + 720) % 360, l = 180 < l && 360 > l, "left" === q ? h.y -= l ? k.height : 0 : "center" === q ? (h.x -= k.width / 2, h.y -= k.height / 2) : "right" === q && (h.x -= k.width, h.y -= l ? 0 : k.height), a.placed = !0, a.alignAttr = h) : (a.align(d, null, c), h = a.alignAttr);
        w && 0 <= c.height ? this.justifyDataLabel(a, d, h, k, c, f) : v(d.crop, !0) && (A = e.isInsidePlot(h.x, h.y) && e.isInsidePlot(h.x + k.width, h.y + k.height));
        if (d.shape && !n) a[f ? "attr" : "animate"]({
          anchorX: g ? e.plotWidth - b.plotY : b.plotX,
          anchorY: g ? e.plotHeight - b.plotX : b.plotY
        });
      }

      A || (a.hide(!0), a.placed = !1);
    };

    n.prototype.justifyDataLabel = function (b, a, d, c, f, g) {
      var e = this.chart,
          h = a.align,
          l = a.verticalAlign,
          k = b.box ? 0 : b.padding || 0;
      var n = d.x + k;

      if (0 > n) {
        "right" === h ? (a.align = "left", a.inside = !0) : a.x = -n;
        var q = !0;
      }

      n = d.x + c.width - k;
      n > e.plotWidth && ("left" === h ? (a.align = "right", a.inside = !0) : a.x = e.plotWidth - n, q = !0);
      n = d.y + k;
      0 > n && ("bottom" === l ? (a.verticalAlign = "top", a.inside = !0) : a.y = -n, q = !0);
      n = d.y + c.height - k;
      n > e.plotHeight && ("top" === l ? (a.verticalAlign = "bottom", a.inside = !0) : a.y = e.plotHeight - n, q = !0);
      q && (b.placed = !g, b.align(a, null, f));
      return q;
    };

    q.pie && (q.pie.prototype.dataLabelPositioners = {
      radialDistributionY: function radialDistributionY(b) {
        return b.top + b.distributeBox.pos;
      },
      radialDistributionX: function radialDistributionX(b, a, d, c) {
        return b.getX(d < a.top + 2 || d > a.bottom - 2 ? c : d, a.half, a);
      },
      justify: function justify(b, a, d) {
        return d[0] + (b.half ? -1 : 1) * (a + b.labelDistance);
      },
      alignToPlotEdges: function alignToPlotEdges(b, a, d, c) {
        b = b.getBBox().width;
        return a ? b + c : d - b - c;
      },
      alignToConnectors: function alignToConnectors(b, a, d, c) {
        var e = 0,
            f;
        b.forEach(function (a) {
          f = a.dataLabel.getBBox().width;
          f > e && (e = f);
        });
        return a ? e + c : d - e - c;
      }
    }, q.pie.prototype.drawDataLabels = function () {
      var b = this,
          a = b.data,
          d,
          e = b.chart,
          f = b.options.dataLabels,
          g = f.connectorPadding,
          h,
          p = e.plotWidth,
          u = e.plotHeight,
          k = e.plotLeft,
          r = Math.round(e.chartWidth / 3),
          q,
          A = b.center,
          w = A[2] / 2,
          m = A[1],
          t,
          z,
          C,
          B,
          H = [[], []],
          I,
          D,
          N,
          M,
          R = [0, 0, 0, 0],
          P = b.dataLabelPositioners,
          W;
      b.visible && (f.enabled || b._hasPointLabels) && (a.forEach(function (a) {
        a.dataLabel && a.visible && a.dataLabel.shortened && (a.dataLabel.attr({
          width: "auto"
        }).css({
          width: "auto",
          textOverflow: "clip"
        }), a.dataLabel.shortened = !1);
      }), n.prototype.drawDataLabels.apply(b), a.forEach(function (a) {
        a.dataLabel && (a.visible ? (H[a.half].push(a), a.dataLabel._pos = null, !G(f.style.width) && !G(a.options.dataLabels && a.options.dataLabels.style && a.options.dataLabels.style.width) && a.dataLabel.getBBox().width > r && (a.dataLabel.css({
          width: .7 * r
        }), a.dataLabel.shortened = !0)) : (a.dataLabel = a.dataLabel.destroy(), a.dataLabels && 1 === a.dataLabels.length && delete a.dataLabels));
      }), H.forEach(function (a, h) {
        var l = a.length,
            n = [],
            r;

        if (l) {
          b.sortByAngle(a, h - .5);

          if (0 < b.maxLabelDistance) {
            var q = Math.max(0, m - w - b.maxLabelDistance);
            var x = Math.min(m + w + b.maxLabelDistance, e.plotHeight);
            a.forEach(function (a) {
              0 < a.labelDistance && a.dataLabel && (a.top = Math.max(0, m - w - a.labelDistance), a.bottom = Math.min(m + w + a.labelDistance, e.plotHeight), r = a.dataLabel.getBBox().height || 21, a.distributeBox = {
                target: a.labelPosition.natural.y - a.top + r / 2,
                size: r,
                rank: a.y
              }, n.push(a.distributeBox));
            });
            q = x + r - q;
            c.distribute(n, q, q / 5);
          }

          for (M = 0; M < l; M++) {
            d = a[M];
            C = d.labelPosition;
            t = d.dataLabel;
            N = !1 === d.visible ? "hidden" : "inherit";
            D = q = C.natural.y;
            n && G(d.distributeBox) && (void 0 === d.distributeBox.pos ? N = "hidden" : (B = d.distributeBox.size, D = P.radialDistributionY(d)));
            delete d.positionIndex;
            if (f.justify) I = P.justify(d, w, A);else switch (f.alignTo) {
              case "connectors":
                I = P.alignToConnectors(a, h, p, k);
                break;

              case "plotEdges":
                I = P.alignToPlotEdges(t, h, p, k);
                break;

              default:
                I = P.radialDistributionX(b, d, D, q);
            }
            t._attr = {
              visibility: N,
              align: C.alignment
            };
            t._pos = {
              x: I + f.x + ({
                left: g,
                right: -g
              }[C.alignment] || 0),
              y: D + f.y - 10
            };
            C.final.x = I;
            C.final.y = D;
            v(f.crop, !0) && (z = t.getBBox().width, q = null, I - z < g && 1 === h ? (q = Math.round(z - I + g), R[3] = Math.max(q, R[3])) : I + z > p - g && 0 === h && (q = Math.round(I + z - p + g), R[1] = Math.max(q, R[1])), 0 > D - B / 2 ? R[0] = Math.max(Math.round(-D + B / 2), R[0]) : D + B / 2 > u && (R[2] = Math.max(Math.round(D + B / 2 - u), R[2])), t.sideOverflow = q);
          }
        }
      }), 0 === F(R) || this.verifyDataLabelOverflow(R)) && (this.placeDataLabels(), this.points.forEach(function (a) {
        W = y(f, a.options.dataLabels);

        if (h = v(W.connectorWidth, 1)) {
          var d;
          q = a.connector;

          if ((t = a.dataLabel) && t._pos && a.visible && 0 < a.labelDistance) {
            N = t._attr.visibility;
            if (d = !q) a.connector = q = e.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + a.colorIndex + (a.className ? " " + a.className : "")).add(b.dataLabelsGroup), e.styledMode || q.attr({
              "stroke-width": h,
              stroke: W.connectorColor || a.color || "#666666"
            });
            q[d ? "attr" : "animate"]({
              d: a.getConnectorPath()
            });
            q.attr("visibility", N);
          } else q && (a.connector = q.destroy());
        }
      }));
    }, q.pie.prototype.placeDataLabels = function () {
      this.points.forEach(function (b) {
        var a = b.dataLabel,
            d;
        a && b.visible && ((d = a._pos) ? (a.sideOverflow && (a._attr.width = Math.max(a.getBBox().width - a.sideOverflow, 0), a.css({
          width: a._attr.width + "px",
          textOverflow: (this.options.dataLabels.style || {}).textOverflow || "ellipsis"
        }), a.shortened = !0), a.attr(a._attr), a[a.moved ? "animate" : "attr"](d), a.moved = !0) : a && a.attr({
          y: -9999
        }));
        delete b.distributeBox;
      }, this);
    }, q.pie.prototype.alignDataLabel = f, q.pie.prototype.verifyDataLabelOverflow = function (b) {
      var a = this.center,
          d = this.options,
          c = d.center,
          f = d.minSize || 80,
          g = null !== d.size;

      if (!g) {
        if (null !== c[0]) var n = Math.max(a[2] - Math.max(b[1], b[3]), f);else n = Math.max(a[2] - b[1] - b[3], f), a[0] += (b[3] - b[1]) / 2;
        null !== c[1] ? n = Math.max(Math.min(n, a[2] - Math.max(b[0], b[2])), f) : (n = Math.max(Math.min(n, a[2] - b[0] - b[2]), f), a[1] += (b[0] - b[2]) / 2);
        n < a[2] ? (a[2] = n, a[3] = Math.min(h(d.innerSize || 0, n), n), this.translate(a), this.drawDataLabels && this.drawDataLabels()) : g = !0;
      }

      return g;
    });
    q.column && (q.column.prototype.alignDataLabel = function (b, a, d, c, f) {
      var e = this.chart.inverted,
          g = b.series,
          h = b.dlBox || b.shapeArgs,
          l = v(b.below, b.plotY > v(this.translatedThreshold, g.yAxis.len)),
          k = v(d.inside, !!this.options.stacking);
      h && (c = y(h), 0 > c.y && (c.height += c.y, c.y = 0), h = c.y + c.height - g.yAxis.len, 0 < h && (c.height -= h), e && (c = {
        x: g.yAxis.len - c.y - c.height,
        y: g.xAxis.len - c.x - c.width,
        width: c.height,
        height: c.width
      }), k || (e ? (c.x += l ? 0 : c.width, c.width = 0) : (c.y += l ? c.height : 0, c.height = 0)));
      d.align = v(d.align, !e || k ? "center" : l ? "right" : "left");
      d.verticalAlign = v(d.verticalAlign, e || k ? "middle" : l ? "top" : "bottom");
      n.prototype.alignDataLabel.call(this, b, a, d, c, f);
      d.inside && b.contrastColor && a.css({
        color: b.contrastColor
      });
    });
  });
  M(I, "modules/overlapping-datalabels.src.js", [I["parts/Globals.js"], I["parts/Utilities.js"]], function (c, f) {
    var F = f.isArray,
        G = f.objectEach,
        z = f.pick;
    f = c.Chart;
    var B = c.addEvent,
        t = c.fireEvent;
    B(f, "render", function () {
      var c = [];
      (this.labelCollectors || []).forEach(function (f) {
        c = c.concat(f());
      });
      (this.yAxis || []).forEach(function (f) {
        f.options.stackLabels && !f.options.stackLabels.allowOverlap && G(f.stacks, function (f) {
          G(f, function (f) {
            c.push(f.label);
          });
        });
      });
      (this.series || []).forEach(function (f) {
        var v = f.options.dataLabels;
        f.visible && (!1 !== v.enabled || f._hasPointLabels) && f.points.forEach(function (f) {
          f.visible && (F(f.dataLabels) ? f.dataLabels : f.dataLabel ? [f.dataLabel] : []).forEach(function (h) {
            var n = h.options;
            h.labelrank = z(n.labelrank, f.labelrank, f.shapeArgs && f.shapeArgs.height);
            n.allowOverlap || c.push(h);
          });
        });
      });
      this.hideOverlappingLabels(c);
    });

    f.prototype.hideOverlappingLabels = function (c) {
      var f = this,
          v = c.length,
          y = f.renderer,
          h,
          n,
          q;

      var g = function g(a) {
        var b = a.box ? 0 : a.padding || 0;
        var d = 0;

        if (a && (!a.alignAttr || a.placed)) {
          var c = a.attr("x");
          var f = a.attr("y");
          c = "number" === typeof c && "number" === typeof f ? {
            x: c,
            y: f
          } : a.alignAttr;
          f = a.parentGroup;
          a.width || (d = a.getBBox(), a.width = d.width, a.height = d.height, d = y.fontMetrics(null, a.element).h);
          return {
            x: c.x + (f.translateX || 0) + b,
            y: c.y + (f.translateY || 0) + b - d,
            width: a.width - 2 * b,
            height: a.height - 2 * b
          };
        }
      };

      for (n = 0; n < v; n++) {
        if (h = c[n]) h.oldOpacity = h.opacity, h.newOpacity = 1, h.absoluteBox = g(h);
      }

      c.sort(function (a, b) {
        return (b.labelrank || 0) - (a.labelrank || 0);
      });

      for (n = 0; n < v; n++) {
        var b = (g = c[n]) && g.absoluteBox;

        for (h = n + 1; h < v; ++h) {
          var a = (q = c[h]) && q.absoluteBox;
          !b || !a || g === q || 0 === g.newOpacity || 0 === q.newOpacity || a.x > b.x + b.width || a.x + a.width < b.x || a.y > b.y + b.height || a.y + a.height < b.y || ((g.labelrank < q.labelrank ? g : q).newOpacity = 0);
        }
      }

      c.forEach(function (a) {
        var b;

        if (a) {
          var d = a.newOpacity;
          a.oldOpacity !== d && (a.alignAttr && a.placed ? (d ? a.show(!0) : b = function b() {
            a.hide(!0);
            a.placed = !1;
          }, a.alignAttr.opacity = d, a[a.isOld ? "animate" : "attr"](a.alignAttr, null, b), t(f, "afterHideOverlappingLabels")) : a.attr({
            opacity: d
          }));
          a.isOld = !0;
        }
      });
    };
  });
  M(I, "parts/Interaction.js", [I["parts/Globals.js"], I["parts/Utilities.js"]], function (c, f) {
    var F = f.defined,
        G = f.extend,
        z = f.isArray,
        B = f.isObject,
        t = f.objectEach,
        v = f.pick,
        C = c.addEvent;
    f = c.Chart;
    var H = c.createElement,
        y = c.css,
        h = c.defaultOptions,
        n = c.defaultPlotOptions,
        q = c.fireEvent,
        g = c.hasTouch,
        b = c.Legend,
        a = c.merge,
        d = c.Point,
        e = c.Series,
        l = c.seriesTypes,
        I = c.svg;
    var E = c.TrackerMixin = {
      drawTrackerPoint: function drawTrackerPoint() {
        var a = this,
            b = a.chart,
            d = b.pointer,
            c = function c(a) {
          var b = d.getPointFromEvent(a);
          void 0 !== b && (d.isDirectTouch = !0, b.onMouseOver(a));
        },
            e;

        a.points.forEach(function (a) {
          e = z(a.dataLabels) ? a.dataLabels : a.dataLabel ? [a.dataLabel] : [];
          a.graphic && (a.graphic.element.point = a);
          e.forEach(function (b) {
            b.div ? b.div.point = a : b.element.point = a;
          });
        });
        a._hasTracking || (a.trackerGroups.forEach(function (e) {
          if (a[e]) {
            a[e].addClass("highcharts-tracker").on("mouseover", c).on("mouseout", function (a) {
              d.onTrackerMouseOut(a);
            });
            if (g) a[e].on("touchstart", c);
            !b.styledMode && a.options.cursor && a[e].css(y).css({
              cursor: a.options.cursor
            });
          }
        }), a._hasTracking = !0);
        q(this, "afterDrawTracker");
      },
      drawTrackerGraph: function drawTrackerGraph() {
        var a = this,
            b = a.options,
            d = b.trackByArea,
            c = [].concat(d ? a.areaPath : a.graphPath),
            e = c.length,
            f = a.chart,
            h = f.pointer,
            l = f.renderer,
            n = f.options.tooltip.snap,
            v = a.tracker,
            t,
            y = function y() {
          if (f.hoverSeries !== a) a.onMouseOver();
        },
            z = "rgba(192,192,192," + (I ? .0001 : .002) + ")";

        if (e && !d) for (t = e + 1; t--;) {
          "M" === c[t] && c.splice(t + 1, 0, c[t + 1] - n, c[t + 2], "L"), (t && "M" === c[t] || t === e) && c.splice(t, 0, "L", c[t - 2] + n, c[t - 1]);
        }
        v ? v.attr({
          d: c
        }) : a.graph && (a.tracker = l.path(c).attr({
          visibility: a.visible ? "visible" : "hidden",
          zIndex: 2
        }).addClass(d ? "highcharts-tracker-area" : "highcharts-tracker-line").add(a.group), f.styledMode || a.tracker.attr({
          "stroke-linejoin": "round",
          stroke: z,
          fill: d ? z : "none",
          "stroke-width": a.graph.strokeWidth() + (d ? 0 : 2 * n)
        }), [a.tracker, a.markerGroup].forEach(function (a) {
          a.addClass("highcharts-tracker").on("mouseover", y).on("mouseout", function (a) {
            h.onTrackerMouseOut(a);
          });
          b.cursor && !f.styledMode && a.css({
            cursor: b.cursor
          });
          if (g) a.on("touchstart", y);
        }));
        q(this, "afterDrawTracker");
      }
    };
    l.column && (l.column.prototype.drawTracker = E.drawTrackerPoint);
    l.pie && (l.pie.prototype.drawTracker = E.drawTrackerPoint);
    l.scatter && (l.scatter.prototype.drawTracker = E.drawTrackerPoint);
    G(b.prototype, {
      setItemEvents: function setItemEvents(b, c, e) {
        var f = this,
            g = f.chart.renderer.boxWrapper,
            k = b instanceof d,
            h = "highcharts-legend-" + (k ? "point" : "series") + "-active",
            l = f.chart.styledMode;
        (e ? c : b.legendGroup).on("mouseover", function () {
          b.visible && f.allItems.forEach(function (a) {
            b !== a && a.setState("inactive", !k);
          });
          b.setState("hover");
          b.visible && g.addClass(h);
          l || c.css(f.options.itemHoverStyle);
        }).on("mouseout", function () {
          f.chart.styledMode || c.css(a(b.visible ? f.itemStyle : f.itemHiddenStyle));
          f.allItems.forEach(function (a) {
            b !== a && a.setState("", !k);
          });
          g.removeClass(h);
          b.setState();
        }).on("click", function (a) {
          var c = function c() {
            b.setVisible && b.setVisible();
            f.allItems.forEach(function (a) {
              b !== a && a.setState(b.visible ? "inactive" : "", !k);
            });
          };

          g.removeClass(h);
          a = {
            browserEvent: a
          };
          b.firePointEvent ? b.firePointEvent("legendItemClick", a, c) : q(b, "legendItemClick", a, c);
        });
      },
      createCheckboxForItem: function createCheckboxForItem(a) {
        a.checkbox = H("input", {
          type: "checkbox",
          className: "highcharts-legend-checkbox",
          checked: a.selected,
          defaultChecked: a.selected
        }, this.options.itemCheckboxStyle, this.chart.container);
        C(a.checkbox, "click", function (b) {
          q(a.series || a, "checkboxClick", {
            checked: b.target.checked,
            item: a
          }, function () {
            a.select();
          });
        });
      }
    });
    G(f.prototype, {
      showResetZoom: function showResetZoom() {
        function a() {
          b.zoomOut();
        }

        var b = this,
            c = h.lang,
            d = b.options.chart.resetZoomButton,
            e = d.theme,
            f = e.states,
            g = "chart" === d.relativeTo || "spaceBox" === d.relativeTo ? null : "plotBox";
        q(this, "beforeShowResetZoom", null, function () {
          b.resetZoomButton = b.renderer.button(c.resetZoom, null, null, a, e, f && f.hover).attr({
            align: d.position.align,
            title: c.resetZoomTitle
          }).addClass("highcharts-reset-zoom").add().align(d.position, !1, g);
        });
        q(this, "afterShowResetZoom");
      },
      zoomOut: function zoomOut() {
        q(this, "selection", {
          resetSelection: !0
        }, this.zoom);
      },
      zoom: function zoom(a) {
        var b = this,
            c,
            d = b.pointer,
            e = !1,
            f = b.inverted ? d.mouseDownX : d.mouseDownY;
        !a || a.resetSelection ? (b.axes.forEach(function (a) {
          c = a.zoom();
        }), d.initiated = !1) : a.xAxis.concat(a.yAxis).forEach(function (a) {
          var g = a.axis,
              k = b.inverted ? g.left : g.top,
              h = b.inverted ? k + g.width : k + g.height,
              l = g.isXAxis,
              m = !1;
          if (!l && f >= k && f <= h || l || !F(f)) m = !0;
          d[l ? "zoomX" : "zoomY"] && m && (c = g.zoom(a.min, a.max), g.displayBtn && (e = !0));
        });
        var g = b.resetZoomButton;
        e && !g ? b.showResetZoom() : !e && B(g) && (b.resetZoomButton = g.destroy());
        c && b.redraw(v(b.options.chart.animation, a && a.animation, 100 > b.pointCount));
      },
      pan: function pan(a, b) {
        var c = this,
            d = c.hoverPoints,
            e;
        q(this, "pan", {
          originalEvent: a
        }, function () {
          d && d.forEach(function (a) {
            a.setState();
          });
          ("xy" === b ? [1, 0] : [1]).forEach(function (b) {
            b = c[b ? "xAxis" : "yAxis"][0];
            var d = b.horiz,
                f = a[d ? "chartX" : "chartY"];
            d = d ? "mouseDownX" : "mouseDownY";
            var g = c[d],
                k = (b.pointRange || 0) / 2,
                h = b.reversed && !c.inverted || !b.reversed && c.inverted ? -1 : 1,
                l = b.getExtremes(),
                p = b.toValue(g - f, !0) + k * h;
            h = b.toValue(g + b.len - f, !0) - k * h;
            var n = h < p;
            g = n ? h : p;
            p = n ? p : h;
            h = Math.min(l.dataMin, k ? l.min : b.toValue(b.toPixels(l.min) - b.minPixelPadding));
            k = Math.max(l.dataMax, k ? l.max : b.toValue(b.toPixels(l.max) + b.minPixelPadding));
            n = h - g;
            0 < n && (p += n, g = h);
            n = p - k;
            0 < n && (p = k, g -= n);
            b.series.length && g !== l.min && p !== l.max && (b.setExtremes(g, p, !1, !1, {
              trigger: "pan"
            }), e = !0);
            c[d] = f;
          });
          e && c.redraw(!1);
          y(c.container, {
            cursor: "move"
          });
        });
      }
    });
    G(d.prototype, {
      select: function select(a, b) {
        var c = this,
            d = c.series,
            e = d.chart;
        this.selectedStaging = a = v(a, !c.selected);
        c.firePointEvent(a ? "select" : "unselect", {
          accumulate: b
        }, function () {
          c.selected = c.options.selected = a;
          d.options.data[d.data.indexOf(c)] = c.options;
          c.setState(a && "select");
          b || e.getSelectedPoints().forEach(function (a) {
            var b = a.series;
            a.selected && a !== c && (a.selected = a.options.selected = !1, b.options.data[b.data.indexOf(a)] = a.options, a.setState(e.hoverPoints && b.options.inactiveOtherPoints ? "inactive" : ""), a.firePointEvent("unselect"));
          });
        });
        delete this.selectedStaging;
      },
      onMouseOver: function onMouseOver(a) {
        var b = this.series.chart,
            c = b.pointer;
        a = a ? c.normalize(a) : c.getChartCoordinatesFromPoint(this, b.inverted);
        c.runPointActions(a, this);
      },
      onMouseOut: function onMouseOut() {
        var a = this.series.chart;
        this.firePointEvent("mouseOut");
        this.series.options.inactiveOtherPoints || (a.hoverPoints || []).forEach(function (a) {
          a.setState();
        });
        a.hoverPoints = a.hoverPoint = null;
      },
      importEvents: function importEvents() {
        if (!this.hasImportedEvents) {
          var b = this,
              d = a(b.series.options.point, b.options).events;
          b.events = d;
          t(d, function (a, d) {
            c.isFunction(a) && C(b, d, a);
          });
          this.hasImportedEvents = !0;
        }
      },
      setState: function setState(a, b) {
        var c = this.series,
            d = this.state,
            e = c.options.states[a || "normal"] || {},
            f = n[c.type].marker && c.options.marker,
            g = f && !1 === f.enabled,
            h = f && f.states && f.states[a || "normal"] || {},
            l = !1 === h.enabled,
            p = c.stateMarkerGraphic,
            u = this.marker || {},
            t = c.chart,
            y = c.halo,
            z,
            B = f && c.markerAttribs;
        a = a || "";

        if (!(a === this.state && !b || this.selected && "select" !== a || !1 === e.enabled || a && (l || g && !1 === h.enabled) || a && u.states && u.states[a] && !1 === u.states[a].enabled)) {
          this.state = a;
          B && (z = c.markerAttribs(this, a));

          if (this.graphic) {
            d && this.graphic.removeClass("highcharts-point-" + d);
            a && this.graphic.addClass("highcharts-point-" + a);

            if (!t.styledMode) {
              var C = c.pointAttribs(this, a);
              var H = v(t.options.chart.animation, e.animation);
              c.options.inactiveOtherPoints && ((this.dataLabels || []).forEach(function (a) {
                a && a.animate({
                  opacity: C.opacity
                }, H);
              }), this.connector && this.connector.animate({
                opacity: C.opacity
              }, H));
              this.graphic.animate(C, H);
            }

            z && this.graphic.animate(z, v(t.options.chart.animation, h.animation, f.animation));
            p && p.hide();
          } else {
            if (a && h) {
              d = u.symbol || c.symbol;
              p && p.currentSymbol !== d && (p = p.destroy());
              if (z) if (p) p[b ? "animate" : "attr"]({
                x: z.x,
                y: z.y
              });else d && (c.stateMarkerGraphic = p = t.renderer.symbol(d, z.x, z.y, z.width, z.height).add(c.markerGroup), p.currentSymbol = d);
              !t.styledMode && p && p.attr(c.pointAttribs(this, a));
            }

            p && (p[a && this.isInside ? "show" : "hide"](), p.element.point = this);
          }

          a = e.halo;
          e = (p = this.graphic || p) && p.visibility || "inherit";
          a && a.size && p && "hidden" !== e ? (y || (c.halo = y = t.renderer.path().add(p.parentGroup)), y.show()[b ? "animate" : "attr"]({
            d: this.haloPath(a.size)
          }), y.attr({
            "class": "highcharts-halo highcharts-color-" + v(this.colorIndex, c.colorIndex) + (this.className ? " " + this.className : ""),
            visibility: e,
            zIndex: -1
          }), y.point = this, t.styledMode || y.attr(G({
            fill: this.color || c.color,
            "fill-opacity": a.opacity
          }, a.attributes))) : y && y.point && y.point.haloPath && y.animate({
            d: y.point.haloPath(0)
          }, null, y.hide);
          q(this, "afterSetState");
        }
      },
      haloPath: function haloPath(a) {
        return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - a, this.plotY - a, 2 * a, 2 * a);
      }
    });
    G(e.prototype, {
      onMouseOver: function onMouseOver() {
        var a = this.chart,
            b = a.hoverSeries;
        if (b && b !== this) b.onMouseOut();
        this.options.events.mouseOver && q(this, "mouseOver");
        this.setState("hover");
        a.hoverSeries = this;
      },
      onMouseOut: function onMouseOut() {
        var a = this.options,
            b = this.chart,
            c = b.tooltip,
            d = b.hoverPoint;
        b.hoverSeries = null;
        if (d) d.onMouseOut();
        this && a.events.mouseOut && q(this, "mouseOut");
        !c || this.stickyTracking || c.shared && !this.noSharedTooltip || c.hide();
        b.series.forEach(function (a) {
          a.setState("", !0);
        });
      },
      setState: function setState(a, b) {
        var c = this,
            d = c.options,
            e = c.graph,
            f = d.inactiveOtherPoints,
            g = d.states,
            h = d.lineWidth,
            l = d.opacity,
            n = v(g[a || "normal"] && g[a || "normal"].animation, c.chart.options.chart.animation);
        d = 0;
        a = a || "";

        if (c.state !== a && ([c.group, c.markerGroup, c.dataLabelsGroup].forEach(function (b) {
          b && (c.state && b.removeClass("highcharts-series-" + c.state), a && b.addClass("highcharts-series-" + a));
        }), c.state = a, !c.chart.styledMode)) {
          if (g[a] && !1 === g[a].enabled) return;
          a && (h = g[a].lineWidth || h + (g[a].lineWidthPlus || 0), l = v(g[a].opacity, l));
          if (e && !e.dashstyle) for (g = {
            "stroke-width": h
          }, e.animate(g, n); c["zone-graph-" + d];) {
            c["zone-graph-" + d].attr(g), d += 1;
          }
          f || [c.group, c.markerGroup, c.dataLabelsGroup, c.labelBySeries].forEach(function (a) {
            a && a.animate({
              opacity: l
            }, n);
          });
        }

        b && f && c.points && c.setAllPointsToState(a);
      },
      setAllPointsToState: function setAllPointsToState(a) {
        this.points.forEach(function (b) {
          b.setState && b.setState(a);
        });
      },
      setVisible: function setVisible(a, b) {
        var c = this,
            d = c.chart,
            e = c.legendItem,
            f = d.options.chart.ignoreHiddenSeries,
            g = c.visible;
        var h = (c.visible = a = c.options.visible = c.userOptions.visible = void 0 === a ? !g : a) ? "show" : "hide";
        ["group", "dataLabelsGroup", "markerGroup", "tracker", "tt"].forEach(function (a) {
          if (c[a]) c[a][h]();
        });
        if (d.hoverSeries === c || (d.hoverPoint && d.hoverPoint.series) === c) c.onMouseOut();
        e && d.legend.colorizeItem(c, a);
        c.isDirty = !0;
        c.options.stacking && d.series.forEach(function (a) {
          a.options.stacking && a.visible && (a.isDirty = !0);
        });
        c.linkedSeries.forEach(function (b) {
          b.setVisible(a, !1);
        });
        f && (d.isDirtyBox = !0);
        q(c, h);
        !1 !== b && d.redraw();
      },
      show: function show() {
        this.setVisible(!0);
      },
      hide: function hide() {
        this.setVisible(!1);
      },
      select: function select(a) {
        this.selected = a = this.options.selected = void 0 === a ? !this.selected : a;
        this.checkbox && (this.checkbox.checked = a);
        q(this, a ? "select" : "unselect");
      },
      drawTracker: E.drawTrackerGraph
    });
  });
  M(I, "parts/Responsive.js", [I["parts/Globals.js"], I["parts/Utilities.js"]], function (c, f) {
    var F = f.isArray,
        G = f.isObject,
        z = f.objectEach,
        B = f.pick,
        t = f.splat;
    f = c.Chart;

    f.prototype.setResponsive = function (f, t) {
      var v = this.options.responsive,
          y = [],
          h = this.currentResponsive;
      !t && v && v.rules && v.rules.forEach(function (f) {
        void 0 === f._id && (f._id = c.uniqueKey());
        this.matchResponsiveRule(f, y);
      }, this);
      t = c.merge.apply(0, y.map(function (f) {
        return c.find(v.rules, function (c) {
          return c._id === f;
        }).chartOptions;
      }));
      t.isResponsiveOptions = !0;
      y = y.toString() || void 0;
      y !== (h && h.ruleIds) && (h && this.update(h.undoOptions, f, !0), y ? (h = this.currentOptions(t), h.isResponsiveOptions = !0, this.currentResponsive = {
        ruleIds: y,
        mergedOptions: t,
        undoOptions: h
      }, this.update(t, f, !0)) : this.currentResponsive = void 0);
    };

    f.prototype.matchResponsiveRule = function (c, f) {
      var t = c.condition;
      (t.callback || function () {
        return this.chartWidth <= B(t.maxWidth, Number.MAX_VALUE) && this.chartHeight <= B(t.maxHeight, Number.MAX_VALUE) && this.chartWidth >= B(t.minWidth, 0) && this.chartHeight >= B(t.minHeight, 0);
      }).call(this) && f.push(c._id);
    };

    f.prototype.currentOptions = function (c) {
      function f(c, n, q, g) {
        var b;
        z(c, function (a, c) {
          if (!g && -1 < v.collectionsWithUpdate.indexOf(c)) for (a = t(a), q[c] = [], b = 0; b < a.length; b++) {
            n[c][b] && (q[c][b] = {}, f(a[b], n[c][b], q[c][b], g + 1));
          } else G(a) ? (q[c] = F(a) ? [] : {}, f(a, n[c] || {}, q[c], g + 1)) : q[c] = void 0 === n[c] ? null : n[c];
        });
      }

      var v = this,
          y = {};
      f(c, this.options, y, 0);
      return y;
    };
  });
  M(I, "masters/highcharts.src.js", [I["parts/Globals.js"], I["parts/Utilities.js"]], function (c, f) {
    var F = f.extend;
    F(c, {
      arrayMax: f.arrayMax,
      arrayMin: f.arrayMin,
      attr: f.attr,
      defined: f.defined,
      erase: f.erase,
      extend: f.extend,
      isArray: f.isArray,
      isClass: f.isClass,
      isDOMElement: f.isDOMElement,
      isNumber: f.isNumber,
      isObject: f.isObject,
      isString: f.isString,
      objectEach: f.objectEach,
      pick: f.pick,
      pInt: f.pInt,
      setAnimation: f.setAnimation,
      splat: f.splat,
      syncTimeout: f.syncTimeout
    });
    return c;
  });
  I["masters/highcharts.src.js"]._modules = I;
  return I["masters/highcharts.src.js"];
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "../../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/highcharts/modules/drilldown.js":
/*!**************************************************************************************************************!*\
  !*** C:/Users/Farkhad/Desktop/GitHub/metaratings-v2/markup-new/node_modules/highcharts/modules/drilldown.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 Highcharts JS v7.2.1 (2019-10-31)

 Highcharts Drilldown module

 Author: Torstein Honsi
 License: www.highcharts.com/license

*/
(function (g) {
  "object" === ( false ? undefined : _typeof(module)) && module.exports ? (g["default"] = g, module.exports = g) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! highcharts */ "../../node_modules/highcharts/highcharts.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (n) {
    g(n);
    g.Highcharts = n;
    return g;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(function (g) {
  function n(f, g, q, n) {
    f.hasOwnProperty(g) || (f[g] = n.apply(null, q));
  }

  g = g ? g._modules : {};
  n(g, "modules/drilldown.src.js", [g["parts/Globals.js"], g["parts/Utilities.js"]], function (f, g) {
    var q = g.extend,
        n = g.objectEach,
        t = g.pick,
        C = g.syncTimeout,
        w = f.animObject,
        x = f.noop,
        y = f.color;
    g = f.defaultOptions;
    var D = f.format,
        p = f.Chart,
        r = f.seriesTypes,
        z = r.pie;
    r = r.column;
    var A = f.Tick,
        u = f.fireEvent,
        B = 1;
    q(g.lang, {
      drillUpText: "\u25C1 Back to {series.name}"
    });
    g.drilldown = {
      activeAxisLabelStyle: {
        cursor: "pointer",
        color: "#003399",
        fontWeight: "bold",
        textDecoration: "underline"
      },
      activeDataLabelStyle: {
        cursor: "pointer",
        color: "#003399",
        fontWeight: "bold",
        textDecoration: "underline"
      },
      animation: {
        duration: 500
      },
      drillUpButton: {
        position: {
          align: "right",
          x: -10,
          y: 10
        }
      }
    };

    f.SVGRenderer.prototype.Element.prototype.fadeIn = function (a) {
      this.attr({
        opacity: .1,
        visibility: "inherit"
      }).animate({
        opacity: t(this.newOpacity, 1)
      }, a || {
        duration: 250
      });
    };

    p.prototype.addSeriesAsDrilldown = function (a, b) {
      this.addSingleSeriesAsDrilldown(a, b);
      this.applyDrilldown();
    };

    p.prototype.addSingleSeriesAsDrilldown = function (a, b) {
      var c = a.series,
          d = c.xAxis,
          e = c.yAxis,
          h = [],
          l = [],
          k;
      var m = this.styledMode ? {
        colorIndex: t(a.colorIndex, c.colorIndex)
      } : {
        color: a.color || c.color
      };
      this.drilldownLevels || (this.drilldownLevels = []);
      var g = c.options._levelNumber || 0;
      (k = this.drilldownLevels[this.drilldownLevels.length - 1]) && k.levelNumber !== g && (k = void 0);
      b = q(q({
        _ddSeriesId: B++
      }, m), b);
      var n = c.points.indexOf(a);
      c.chart.series.forEach(function (a) {
        a.xAxis !== d || a.isDrilling || (a.options._ddSeriesId = a.options._ddSeriesId || B++, a.options._colorIndex = a.userOptions._colorIndex, a.options._levelNumber = a.options._levelNumber || g, k ? (h = k.levelSeries, l = k.levelSeriesOptions) : (h.push(a), a.purgedOptions = f.merge({
          _ddSeriesId: a.options._ddSeriesId,
          _levelNumber: a.options._levelNumber,
          selected: a.options.selected
        }, a.userOptions), l.push(a.purgedOptions)));
      });
      a = q({
        levelNumber: g,
        seriesOptions: c.options,
        seriesPurgedOptions: c.purgedOptions,
        levelSeriesOptions: l,
        levelSeries: h,
        shapeArgs: a.shapeArgs,
        bBox: a.graphic ? a.graphic.getBBox() : {},
        color: a.isNull ? new f.Color(y).setOpacity(0).get() : y,
        lowerSeriesOptions: b,
        pointOptions: c.options.data[n],
        pointIndex: n,
        oldExtremes: {
          xMin: d && d.userMin,
          xMax: d && d.userMax,
          yMin: e && e.userMin,
          yMax: e && e.userMax
        },
        resetZoomButton: this.resetZoomButton
      }, m);
      this.drilldownLevels.push(a);
      d && d.names && (d.names.length = 0);
      b = a.lowerSeries = this.addSeries(b, !1);
      b.options._levelNumber = g + 1;
      d && (d.oldPos = d.pos, d.userMin = d.userMax = null, e.userMin = e.userMax = null);
      c.type === b.type && (b.animate = b.animateDrilldown || x, b.options.animation = !0);
    };

    p.prototype.applyDrilldown = function () {
      var a = this.drilldownLevels;

      if (a && 0 < a.length) {
        var b = a[a.length - 1].levelNumber;
        this.drilldownLevels.forEach(function (a) {
          a.levelNumber === b && a.levelSeries.forEach(function (a) {
            a.options && a.options._levelNumber === b && a.remove(!1);
          });
        });
      }

      this.resetZoomButton && (this.resetZoomButton.hide(), delete this.resetZoomButton);
      this.pointer.reset();
      this.redraw();
      this.showDrillUpButton();
      u(this, "afterDrilldown");
    };

    p.prototype.getDrilldownBackText = function () {
      var a = this.drilldownLevels;
      if (a && 0 < a.length) return a = a[a.length - 1], a.series = a.seriesOptions, D(this.options.lang.drillUpText, a);
    };

    p.prototype.showDrillUpButton = function () {
      var a = this,
          b = this.getDrilldownBackText(),
          c = a.options.drilldown.drillUpButton,
          d;
      if (this.drillUpButton) this.drillUpButton.attr({
        text: b
      }).align();else {
        var e = (d = c.theme) && d.states;
        this.drillUpButton = this.renderer.button(b, null, null, function () {
          a.drillUp();
        }, d, e && e.hover, e && e.select).addClass("highcharts-drillup-button").attr({
          align: c.position.align,
          zIndex: 7
        }).add().align(c.position, !1, c.relativeTo || "plotBox");
      }
    };

    p.prototype.drillUp = function () {
      if (this.drilldownLevels && 0 !== this.drilldownLevels.length) {
        for (var a = this, b = a.drilldownLevels, c = b[b.length - 1].levelNumber, d = b.length, e = a.series, h, l, k, m, f = function f(b) {
          e.forEach(function (a) {
            a.options._ddSeriesId === b._ddSeriesId && (c = a);
          });
          var c = c || a.addSeries(b, !1);
          c.type === k.type && c.animateDrillupTo && (c.animate = c.animateDrillupTo);
          b === l.seriesPurgedOptions && (m = c);
        }; d--;) {
          if (l = b[d], l.levelNumber === c) {
            b.pop();
            k = l.lowerSeries;
            if (!k.chart) for (h = e.length; h--;) {
              if (e[h].options.id === l.lowerSeriesOptions.id && e[h].options._levelNumber === c + 1) {
                k = e[h];
                break;
              }
            }
            k.xData = [];
            l.levelSeriesOptions.forEach(f);
            u(a, "drillup", {
              seriesOptions: l.seriesOptions
            });
            m.type === k.type && (m.drilldownLevel = l, m.options.animation = a.options.drilldown.animation, k.animateDrillupFrom && k.chart && k.animateDrillupFrom(l));
            m.options._levelNumber = c;
            k.remove(!1);
            m.xAxis && (h = l.oldExtremes, m.xAxis.setExtremes(h.xMin, h.xMax, !1), m.yAxis.setExtremes(h.yMin, h.yMax, !1));
            l.resetZoomButton && (a.resetZoomButton = l.resetZoomButton, a.resetZoomButton.show());
          }
        }

        this.redraw();
        0 === this.drilldownLevels.length ? this.drillUpButton = this.drillUpButton.destroy() : this.drillUpButton.attr({
          text: this.getDrilldownBackText()
        }).align();
        this.ddDupes.length = [];
        u(a, "drillupall");
      }
    };

    p.prototype.callbacks.push(function () {
      var a = this;
      a.drilldown = {
        update: function update(b, c) {
          f.merge(!0, a.options.drilldown, b);
          t(c, !0) && a.redraw();
        }
      };
    });
    f.addEvent(p, "beforeShowResetZoom", function () {
      if (this.drillUpButton) return !1;
    });
    f.addEvent(p, "render", function () {
      (this.xAxis || []).forEach(function (a) {
        a.ddPoints = {};
        a.series.forEach(function (b) {
          var c,
              d = b.xData || [],
              e = b.points;

          for (c = 0; c < d.length; c++) {
            var h = b.options.data[c];
            "number" !== typeof h && (h = b.pointClass.prototype.optionsToObject.call({
              series: b
            }, h), h.drilldown && (a.ddPoints[d[c]] || (a.ddPoints[d[c]] = []), a.ddPoints[d[c]].push(e ? e[c] : !0)));
          }
        });
        n(a.ticks, A.prototype.drillable);
      });
    });

    r.prototype.animateDrillupTo = function (a) {
      if (!a) {
        var b = this,
            c = b.drilldownLevel;
        this.points.forEach(function (a) {
          var b = a.dataLabel;
          a.graphic && a.graphic.hide();
          b && (b.hidden = "hidden" === b.attr("visibility"), b.hidden || (b.hide(), a.connector && a.connector.hide()));
        });
        C(function () {
          b.points && b.points.forEach(function (a, b) {
            b = b === (c && c.pointIndex) ? "show" : "fadeIn";
            var d = "show" === b ? !0 : void 0,
                e = a.dataLabel;
            if (a.graphic) a.graphic[b](d);
            e && !e.hidden && (e.fadeIn(), a.connector && a.connector.fadeIn());
          });
        }, Math.max(this.chart.options.drilldown.animation.duration - 50, 0));
        this.animate = x;
      }
    };

    r.prototype.animateDrilldown = function (a) {
      var b = this,
          c = this.chart,
          d = c.drilldownLevels,
          e,
          h = w(c.options.drilldown.animation),
          f = this.xAxis,
          k = c.styledMode;
      a || (d.forEach(function (a) {
        b.options._ddSeriesId === a.lowerSeriesOptions._ddSeriesId && (e = a.shapeArgs, k || (e.fill = a.color));
      }), e.x += t(f.oldPos, f.pos) - f.pos, this.points.forEach(function (a) {
        var c = a.shapeArgs;
        k || (c.fill = a.color);
        a.graphic && a.graphic.attr(e).animate(q(a.shapeArgs, {
          fill: a.color || b.color
        }), h);
        a.dataLabel && a.dataLabel.fadeIn(h);
      }), this.animate = null);
    };

    r.prototype.animateDrillupFrom = function (a) {
      var b = w(this.chart.options.drilldown.animation),
          c = this.group,
          d = c !== this.chart.columnGroup,
          e = this;
      e.trackerGroups.forEach(function (a) {
        if (e[a]) e[a].on("mouseover");
      });
      d && delete this.group;
      this.points.forEach(function (h) {
        var g = h.graphic,
            k = a.shapeArgs,
            m = function m() {
          g.destroy();
          c && d && (c = c.destroy());
        };

        g && (delete h.graphic, e.chart.styledMode || (k.fill = a.color), b.duration ? g.animate(k, f.merge(b, {
          complete: m
        })) : (g.attr(k), m()));
      });
    };

    z && q(z.prototype, {
      animateDrillupTo: r.prototype.animateDrillupTo,
      animateDrillupFrom: r.prototype.animateDrillupFrom,
      animateDrilldown: function animateDrilldown(a) {
        var b = this.chart.drilldownLevels[this.chart.drilldownLevels.length - 1],
            c = this.chart.options.drilldown.animation,
            d = b.shapeArgs,
            e = d.start,
            h = (d.end - e) / this.points.length,
            g = this.chart.styledMode;
        a || (this.points.forEach(function (a, l) {
          var k = a.shapeArgs;
          g || (d.fill = b.color, k.fill = a.color);
          if (a.graphic) a.graphic.attr(f.merge(d, {
            start: e + l * h,
            end: e + (l + 1) * h
          }))[c ? "animate" : "attr"](k, c);
        }), this.animate = null);
      }
    });

    f.Point.prototype.doDrilldown = function (a, b, c) {
      var d = this.series.chart,
          e = d.options.drilldown,
          h = (e.series || []).length;
      d.ddDupes || (d.ddDupes = []);

      for (; h-- && !f;) {
        if (e.series[h].id === this.drilldown && -1 === d.ddDupes.indexOf(this.drilldown)) {
          var f = e.series[h];
          d.ddDupes.push(this.drilldown);
        }
      }

      u(d, "drilldown", {
        point: this,
        seriesOptions: f,
        category: b,
        originalEvent: c,
        points: void 0 !== b && this.series.xAxis.getDDPoints(b).slice(0)
      }, function (b) {
        var c = b.point.series && b.point.series.chart,
            d = b.seriesOptions;
        c && d && (a ? c.addSingleSeriesAsDrilldown(b.point, d) : c.addSeriesAsDrilldown(b.point, d));
      });
    };

    f.Axis.prototype.drilldownCategory = function (a, b) {
      n(this.getDDPoints(a), function (c) {
        c && c.series && c.series.visible && c.doDrilldown && c.doDrilldown(!0, a, b);
      });
      this.chart.applyDrilldown();
    };

    f.Axis.prototype.getDDPoints = function (a) {
      return this.ddPoints && this.ddPoints[a];
    };

    A.prototype.drillable = function () {
      var a = this.pos,
          b = this.label,
          c = this.axis,
          d = "xAxis" === c.coll && c.getDDPoints,
          e = d && c.getDDPoints(a),
          h = c.chart.styledMode;
      d && (b && e && e.length ? (b.drillable = !0, b.basicStyles || h || (b.basicStyles = f.merge(b.styles)), b.addClass("highcharts-drilldown-axis-label").on("click", function (b) {
        c.drilldownCategory(a, b);
      }), h || b.css(c.chart.options.drilldown.activeAxisLabelStyle)) : b && b.drillable && (h || (b.styles = {}, b.css(b.basicStyles)), b.on("click", null), b.removeClass("highcharts-drilldown-axis-label")));
    };

    f.addEvent(f.Point, "afterInit", function () {
      var a = this,
          b = a.series;
      a.drilldown && f.addEvent(a, "click", function (c) {
        b.xAxis && !1 === b.chart.options.drilldown.allowPointDrilldown ? b.xAxis.drilldownCategory(a.x, c) : a.doDrilldown(void 0, void 0, c);
      });
      return a;
    });
    f.addEvent(f.Series, "afterDrawDataLabels", function () {
      var a = this.chart.options.drilldown.activeDataLabelStyle,
          b = this.chart.renderer,
          c = this.chart.styledMode;
      this.points.forEach(function (d) {
        var e = d.options.dataLabels,
            f = t(d.dlOptions, e && e.style, {});
        d.drilldown && d.dataLabel && ("contrast" !== a.color || c || (f.color = b.getContrast(d.color || this.color)), e && e.color && (f.color = e.color), d.dataLabel.addClass("highcharts-drilldown-data-label"), c || d.dataLabel.css(a).css(f));
      }, this);
    });

    var v = function v(a, b, c, d) {
      a[c ? "addClass" : "removeClass"]("highcharts-drilldown-point");
      d || a.css({
        cursor: b
      });
    };

    f.addEvent(f.Series, "afterDrawTracker", function () {
      var a = this.chart.styledMode;
      this.points.forEach(function (b) {
        b.drilldown && b.graphic && v(b.graphic, "pointer", !0, a);
      });
    });
    f.addEvent(f.Point, "afterSetState", function () {
      var a = this.series.chart.styledMode;
      this.drilldown && this.series.halo && "hover" === this.state ? v(this.series.halo, "pointer", !0, a) : this.series.halo && v(this.series.halo, "auto", !1, a);
    });
  });
  n(g, "masters/modules/drilldown.src.js", [], function () {});
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/module.js */ "../../node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);