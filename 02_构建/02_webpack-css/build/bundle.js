(() => {
  var e = {
      682: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => s });
        var r = n(645),
          o = n.n(r)()(function (e) {
            return e[1];
          });
        o.push([
          e.id,
          ".title {\n  background-color: blue;\n  text-decoration: underline;\n}\n",
          "",
        ]);
        const s = o;
      },
      390: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => s });
        var r = n(645),
          o = n.n(r)()(function (e) {
            return e[1];
          });
        o.push([
          e.id,
          ".title {\r\n  color: red;\r\n  font-size: 100px;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none; /* 需要后缀 */\r\n}\r\n",
          "",
        ]);
        const s = o;
      },
      645: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = e(t);
                return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
              }).join("");
            }),
            (t.i = function (e, n, r) {
              "string" == typeof e && (e = [[null, e, ""]]);
              var o = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var i = this[s][0];
                  null != i && (o[i] = !0);
                }
              for (var a = 0; a < e.length; a++) {
                var c = [].concat(e[a]);
                (r && o[c[0]]) ||
                  (n &&
                    (c[2]
                      ? (c[2] = "".concat(n, " and ").concat(c[2]))
                      : (c[2] = n)),
                  t.push(c));
              }
            }),
            t
          );
        };
      },
      379: (e) => {
        "use strict";
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var s = {}, i = [], a = 0; a < e.length; a++) {
            var c = e[a],
              u = r.base ? c[0] + r.base : c[0],
              l = s[u] || 0,
              d = "".concat(u, " ").concat(l);
            s[u] = l + 1;
            var f = n(d),
              p = { css: c[1], media: c[2], sourceMap: c[3] };
            -1 !== f
              ? (t[f].references++, t[f].updater(p))
              : t.push({ identifier: d, updater: o(p, r), references: 1 }),
              i.push(d);
          }
          return i;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var s = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < s.length; i++) {
              var a = n(s[i]);
              t[a].references--;
            }
            for (var c = r(e, o), u = 0; u < s.length; u++) {
              var l = n(s[u]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            s = c;
          };
        };
      },
      569: (e) => {
        "use strict";
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(n);
        };
      },
      216: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t), t;
        };
      },
      565: (e, t, n) => {
        "use strict";
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = n.css,
                  o = n.media,
                  s = n.sourceMap;
                o ? e.setAttribute("media", o) : e.removeAttribute("media"),
                  s &&
                    "undefined" != typeof btoa &&
                    (r +=
                      "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                        btoa(unescape(encodeURIComponent(JSON.stringify(s)))),
                        " */"
                      )),
                  t.styleTagTransform(r, e);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        "use strict";
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      466: (e) => {
        e.exports = {
          priceFormat: function () {
            return "$99.88";
          },
        };
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var s = (t[r] = { id: r, exports: {} });
    return e[r](s, s.exports, n), s.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      var e = n(379),
        t = n.n(e),
        r = n(795),
        o = n.n(r),
        s = n(569),
        i = n.n(s),
        a = n(565),
        c = n.n(a),
        u = n(216),
        l = n.n(u),
        d = n(589),
        f = n.n(d),
        p = n(390),
        v = {};
      (v.styleTagTransform = f()),
        (v.setAttributes = c()),
        (v.insert = i().bind(null, "head")),
        (v.domAPI = o()),
        (v.insertStyleElement = l()),
        t()(p.Z, v),
        p.Z && p.Z.locals && p.Z.locals;
      var m = n(682),
        h = {};
      (h.styleTagTransform = f()),
        (h.setAttributes = c()),
        (h.insert = i().bind(null, "head")),
        (h.domAPI = o()),
        (h.insertStyleElement = l()),
        t()(m.Z, h),
        m.Z && m.Z.locals && m.Z.locals;
      const b = document.createElement("div");
      (b.className = "title"),
        (b.innerHTML = "你好啊，李银河"),
        document.body.appendChild(b),
        console.log(111);
      const { priceFormat: y } = n(466);
      console.log(50), console.log(y());
    })();
})();
