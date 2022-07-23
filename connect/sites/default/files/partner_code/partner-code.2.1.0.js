window.partnerCode = (function (t) {
  var e = {}
  function n(o) {
    if (e[o]) return e[o].exports
    var r = (e[o] = { i: o, l: !1, exports: {} })
    return t[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports
  }
  return (
    (n.m = t),
    (n.c = e),
    (n.d = function (t, e, o) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o })
    }),
    (n.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t
      var o = Object.create(null)
      if (
        (n.r(o),
        Object.defineProperty(o, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var r in t)
          n.d(
            o,
            r,
            function (e) {
              return t[e]
            }.bind(null, r)
          )
      return o
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default
            }
          : function () {
              return t
            }
      return n.d(e, 'a', e), e
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (n.p = ''),
    n((n.s = 0))
  )
})([
  function (t, e, n) {
    'use strict'
    n.r(e),
      n.d(e, 'init', function () {
        return r
      })
    n(1), n(2), n(3)
    const o = {
      storageKey: 'affilateData',
      domains: [
        'stormgain.com',
        'www.stormgain.com',
        'app.stormgain.com',
        'promo.stormgain.com'
      ]
    }
    function r(t) {
      o.params = t
      const e = i(c(window.location.href))
      var n
      Object.keys(e).length
        ? ((n = e),
          window.localStorage.setItem(o.storageKey, JSON.stringify(n)))
        : (function (t) {
            const e = JSON.parse(window.localStorage.getItem(o.storageKey))
            if (null === e) return !1
            const n = i(e)
            Object.assign(t, n)
          })(e),
        (function (t) {
          if (!Object.keys(t).length) return
          ;(function (t) {
            Array.prototype.forEach.call(
              document.querySelectorAll('form'),
              function (e) {
                e.addEventListener(
                  'submit',
                  function (n) {
                    const o = e.querySelector('[name="partnersLink"]')
                    o && (o.value = u(o.value, t)),
                      (e.action = u(e.action, t)),
                      Object.keys(t).forEach(function (n) {
                        if (void 0 === e[n]) {
                          const o = document.createElement('input')
                          ;(o.type = 'hidden'),
                            (o.name = n),
                            (o.value = t[n]),
                            e.appendChild(o)
                        }
                      })
                  },
                  !1
                )
              }
            )
          })(t),
            (function (t) {
              const e = function (e) {
                const n = e.target.closest('a[href]')
                if (!n) return
                const r = c(n.href),
                  i = a(n.href)
                if (
                  n.hostname === window.location.hostname ||
                  -1 === o.domains.indexOf(n.hostname)
                )
                  return
                const u = Object.assign({}, r, t)
                n.href = i + '?' + f(u) + n.hash
              }
              document.addEventListener('mouseup', e),
                document.addEventListener('touchup', e)
            })(t)
        })(e)
    }
    function c(t) {
      const e = document.createElement('a')
      e.href = t
      const n = e.search.slice(1),
        o = {}
      return (
        n.length &&
          n.split('&').forEach(function (t) {
            ;(t = t.split('=')), (o[t[0]] = t[1] || '')
          }),
        o
      )
    }
    function i(t) {
      const e = {},
        n = o.params.find(function (e) {
          return e.params.every(function (e) {
            return void 0 !== t[e]
          })
        })
      return n
        ? (n.params.concat(n.optional || []).forEach(function (n) {
            'string' == typeof t[n] && (e[n] = t[n])
          }),
          e)
        : e
    }
    function u(t, e) {
      if (t) {
        const n = a(t),
          o = c(t),
          r = (function (t) {
            const e = document.createElement('a')
            return (e.href = t), decodeURIComponent(e.hash)
          })(t),
          i = Object.assign({}, o, e)
        Object.keys(i).length && (t = n + '?' + f(i) + r)
      }
      return t
    }
    function a(t) {
      const e = document.createElement('a')
      return (
        (e.href = t),
        decodeURIComponent(
          e.protocol + '//' + e.hostname + '/' + e.pathname.replace(/^\//, '')
        )
      )
    }
    function f(t) {
      return decodeURIComponent(
        Object.keys(t)
          .map(function (e) {
            return e + '=' + t[e]
          })
          .join('&')
      )
    }
  },
  function (t, e, n) {
    'use strict'
    'function' != typeof Object.assign &&
      (Object.assign = function (t) {
        if (null == t)
          throw new TypeError('Cannot convert undefined or null to object')
        for (var e = Object(t), n = 1; n < arguments.length; n++) {
          var o = arguments[n]
          if (null != o) for (var r in o) o.hasOwnProperty(r) && (e[r] = o[r])
        }
        return e
      })
  },
  function (t, e) {
    var n
    'function' != typeof (n = window.Element.prototype).matches &&
      (n.matches =
        n.msMatchesSelector ||
        n.mozMatchesSelector ||
        n.webkitMatchesSelector ||
        function (t) {
          for (
            var e = (this.document || this.ownerDocument).querySelectorAll(t),
              n = 0;
            e[n] && e[n] !== this;

          )
            ++n
          return Boolean(e[n])
        }),
      'function' != typeof n.closest &&
        (n.closest = function (t) {
          for (var e = this; e && 1 === e.nodeType; ) {
            if (e.matches(t)) return e
            e = e.parentNode
          }
          return null
        })
  },
  function (t, e, n) {
    'use strict'
    Array.prototype.find ||
      Object.defineProperty(Array.prototype, 'find', {
        value: function (t) {
          if (null == this) throw new TypeError('this is null or not defined')
          var e = Object(this),
            n = e.length >>> 0
          if ('function' != typeof t)
            throw new TypeError('predicate must be a function')
          for (var o = arguments[1], r = 0; r < n; ) {
            var c = e[r]
            if (t.call(o, c, r, e)) return c
            r++
          }
        }
      })
  }
])
partnerCode.init([
  {
    partnerName: 'CELLXPERT',
    params: ['aff_id', 'cxd'],
    optional: ['sourceType']
  }
])
