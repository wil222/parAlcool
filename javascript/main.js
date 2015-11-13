!function (d, c) {
  'object' == typeof module && 'object' == typeof module.exports ? module.exports = d.document ? c(d, !0)  : function (b) {
    if (!b.document) {
      throw new Error('jQuery requires a window with a document')
    }
    return c(b)
  }
   : c(d)
}('undefined' != typeof window ? window : this, function (a, b) {
  var c = [
  ],
  d = c.slice,
  e = c.concat,
  f = c.push,
  g = c.indexOf,
  h = {
  },
  i = h.toString,
  j = h.hasOwnProperty,
  k = {
  },
  l = '1.11.3',
  m = function (a, b) {
    return new m.fn.init(a, b)
  },
  n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
  o = /^-ms-/,
  p = /-([\da-z])/gi,
  q = function (a, b) {
    return b.toUpperCase()
  };
  m.fn = m.prototype = {
    jquery: l,
    constructor: m,
    selector: '',
    length: 0,
    toArray: function () {
      return d.call(this)
    },
    get: function (a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
    },
    pushStack: function (a) {
      var b = m.merge(this.constructor(), a);
      return b.prevObject = this,
      b.context = this.context,
      b
    },
    each: function (a, b) {
      return m.each(this, a, b)
    },
    map: function (a) {
      return this.pushStack(m.map(this, function (b, c) {
        return a.call(b, c, b)
      }))
    },
    slice: function () {
      return this.pushStack(d.apply(this, arguments))
    },
    first: function () {
      return this.eq(0)
    },
    last: function () {
      return this.eq( - 1)
    },
    eq: function (a) {
      var b = this.length,
      c = + a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [
        this[c]
      ] : [
      ])
    },
    end: function () {
      return this.prevObject || this.constructor(null)
    },
    push: f,
    sort: c.sort,
    splice: c.splice
  },
  m.extend = m.fn.extend = function () {
    var a,
    b,
    c,
    d,
    e,
    f,
    g = arguments[0] || {
    },
    h = 1,
    i = arguments.length,
    j = !1;
    for ('boolean' == typeof g && (j = g, g = arguments[h] || {
    }, h++), 'object' == typeof g || m.isFunction(g) || (g = {
    }), h === i && (g = this, h--); i > h; h++) {
      if (null != (e = arguments[h])) {
        for (d in e) {
          a = g[d],
          c = e[d],
          g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : [
          ])  : f = a && m.isPlainObject(a) ? a : {
          }, g[d] = m.extend(j, f, c))  : void 0 !== c && (g[d] = c))
        }
      }
    }
    return g
  },
  m.extend({
    expando: 'jQuery' + (l + Math.random()).replace(/\D/g, ''),
    isReady: !0,
    error: function (a) {
      throw new Error(a)
    },
    noop: function () {
    },
    isFunction: function (a) {
      return 'function' === m.type(a)
    },
    isArray: Array.isArray || function (a) {
      return 'array' === m.type(a)
    },
    isWindow: function (a) {
      return null != a && a == a.window
    },
    isNumeric: function (a) {
      return !m.isArray(a) && a - parseFloat(a) + 1 >= 0
    },
    isEmptyObject: function (a) {
      var b;
      for (b in a) {
        return !1
      }
      return !0
    },
    isPlainObject: function (a) {
      var b;
      if (!a || 'object' !== m.type(a) || a.nodeType || m.isWindow(a)) {
        return !1
      }
      try {
        if (a.constructor && !j.call(a, 'constructor') && !j.call(a.constructor.prototype, 'isPrototypeOf')) {
          return !1
        }
      } catch (c) {
        return !1
      }
      if (k.ownLast) {
        for (b in a) {
          return j.call(a, b)
        }
      }
      for (b in a) {
      }
      return void 0 === b || j.call(a, b)
    },
    type: function (a) {
      return null == a ? a + '' : 'object' == typeof a || 'function' == typeof a ? h[i.call(a)] || 'object' : typeof a
    },
    globalEval: function (b) {
      b && m.trim(b) && (a.execScript || function (b) {
        a.eval.call(a, b)
      }) (b)
    },
    camelCase: function (a) {
      return a.replace(o, 'ms-').replace(p, q)
    },
    nodeName: function (a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    },
    each: function (a, b, c) {
      var d,
      e = 0,
      f = a.length,
      g = r(a);
      if (c) {
        if (g) {
          for (; f > e; e++) {
            if (d = b.apply(a[e], c), d === !1) {
              break
            }
          }
        } else {
          for (e in a) {
            if (d = b.apply(a[e], c), d === !1) {
              break
            }
          }
        }
      } else {
        if (g) {
          for (; f > e; e++) {
            if (d = b.call(a[e], e, a[e]), d === !1) {
              break
            }
          }
        } else {
          for (e in a) {
            if (d = b.call(a[e], e, a[e]), d === !1) {
              break
            }
          }
        }
      }
      return a
    },
    trim: function (a) {
      return null == a ? '' : (a + '').replace(n, '')
    },
    makeArray: function (a, b) {
      var c = b || [];
      return null != a && (r(Object(a)) ? m.merge(c, 'string' == typeof a ? [
        a
      ] : a)  : f.call(c, a)),
      c
    },
    inArray: function (a, b, c) {
      var d;
      if (b) {
        if (g) {
          return g.call(b, a, c)
        }
        for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c)  : c : 0; d > c; c++) {
          if (c in b && b[c] === a) {
            return c
          }
        }
      }
      return - 1
    },
    merge: function (a, b) {
      var c = + b.length,
      d = 0,
      e = a.length;
      while (c > d) {
        a[e++] = b[d++]
      }
      if (c !== c) {
        while (void 0 !== b[d]) {
          a[e++] = b[d++]
        }
      }
      return a.length = e,
      a
    },
    grep: function (a, b, c) {
      for (var d, e = [
      ], f = 0, g = a.length, h = !c; g > f; f++) {
        d = !b(a[f], f),
        d !== h && e.push(a[f])
      }
      return e
    },
    map: function (a, b, c) {
      var d,
      f = 0,
      g = a.length,
      h = r(a),
      i = [
      ];
      if (h) {
        for (; g > f; f++) {
          d = b(a[f], f, c),
          null != d && i.push(d)
        }
      } else {
        for (f in a) {
          d = b(a[f], f, c),
          null != d && i.push(d)
        }
      }
      return e.apply([], i)
    },
    guid: 1,
    proxy: function (a, b) {
      var c,
      e,
      f;
      return 'string' == typeof b && (f = a[b], b = a, a = f),
      m.isFunction(a) ? (c = d.call(arguments, 2), e = function () {
        return a.apply(b || this, c.concat(d.call(arguments)))
      }, e.guid = a.guid = a.guid || m.guid++, e)  : void 0
    },
    now: function () {
      return + new Date
    },
    support: k
  }),
  m.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (a, b) {
    h['[object ' + b + ']'] = b.toLowerCase()
  });
  function r(a) {
    var b = 'length' in a && a.length,
    c = m.type(a);
    return 'function' === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : 'array' === c || 0 === b || 'number' == typeof b && b > 0 && b - 1 in a
  }
  var s = function (a) {
    var b,
    c,
    d,
    e,
    f,
    g,
    h,
    i,
    j,
    k,
    l,
    m,
    n,
    o,
    p,
    q,
    r,
    s,
    t,
    u = 'sizzle' + 1 * new Date,
    v = a.document,
    w = 0,
    x = 0,
    y = ha(),
    z = ha(),
    A = ha(),
    B = function (a, b) {
      return a === b && (l = !0),
      0
    },
    C = 1 << 31,
    D = {
    }.hasOwnProperty,
    E = [
    ],
    F = E.pop,
    G = E.push,
    H = E.push,
    I = E.slice,
    J = function (a, b) {
      for (var c = 0, d = a.length; d > c; c++) {
        if (a[c] === b) {
          return c
        }
      }
      return - 1
    },
    K = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
    L = '[\\x20\\t\\r\\n\\f]',
    M = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+',
    N = M.replace('w', 'w#'),
    O = '\\[' + L + '*(' + M + ')(?:' + L + '*([*^$|!~]?=)' + L + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + N + '))|)' + L + '*\\]',
    P = ':(' + M + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + O + ')*)|.*)\\)|)',
    Q = new RegExp(L + '+', 'g'),
    R = new RegExp('^' + L + '+|((?:^|[^\\\\])(?:\\\\.)*)' + L + '+$', 'g'),
    S = new RegExp('^' + L + '*,' + L + '*'),
    T = new RegExp('^' + L + '*([>+~]|' + L + ')' + L + '*'),
    U = new RegExp('=' + L + '*([^\\]\'"]*?)' + L + '*\\]', 'g'),
    V = new RegExp(P),
    W = new RegExp('^' + N + '$'),
    X = {
      ID: new RegExp('^#(' + M + ')'),
      CLASS: new RegExp('^\\.(' + M + ')'),
      TAG: new RegExp('^(' + M.replace('w', 'w*') + ')'),
      ATTR: new RegExp('^' + O),
      PSEUDO: new RegExp('^' + P),
      CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + L + '*(even|odd|(([+-]|)(\\d*)n|)' + L + '*(?:([+-]|)' + L + '*(\\d+)|))' + L + '*\\)|)', 'i'),
      bool: new RegExp('^(?:' + K + ')$', 'i'),
      needsContext: new RegExp('^' + L + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + L + '*((?:-\\d)?\\d*)' + L + '*\\)|)(?=[^-]|$)', 'i')
    },
    Y = /^(?:input|select|textarea|button)$/i,
    Z = /^h\d$/i,
    $ = /^[^{]+\{\s*\[native \w/,
    _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
    aa = /[+~]/,
    ba = /'|\\/g,
    ca = new RegExp('\\\\([\\da-f]{1,6}' + L + '?|(' + L + ')|.)', 'ig'),
    da = function (a, b, c) {
      var d = '0x' + b - 65536;
      return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536)  : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
    },
    ea = function () {
      m()
    };
    try {
      H.apply(E = I.call(v.childNodes), v.childNodes),
      E[v.childNodes.length].nodeType
    } catch (fa) {
      H = {
        apply: E.length ? function (a, b) {
          G.apply(a, I.call(b))
        }
         : function (a, b) {
          var c = a.length,
          d = 0;
          while (a[c++] = b[d++]) {
          }
          a.length = c - 1
        }
      }
    }
    function ga(a, b, d, e) {
      var f,
      h,
      j,
      k,
      l,
      o,
      r,
      s,
      w,
      x;
      if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, 'string' != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) {
        return d
      }
      if (!e && p) {
        if (11 !== k && (f = _.exec(a))) {
          if (j = f[1]) {
            if (9 === k) {
              if (h = b.getElementById(j), !h || !h.parentNode) {
                return d
              }
              if (h.id === j) {
                return d.push(h),
                d
              }
            } else {
              if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) {
                return d.push(h),
                d
              }
            }
          } else {
            if (f[2]) {
              return H.apply(d, b.getElementsByTagName(a)),
              d
            }
            if ((j = f[3]) && c.getElementsByClassName) {
              return H.apply(d, b.getElementsByClassName(j)),
              d
            }
          }
        }
        if (c.qsa && (!q || !q.test(a))) {
          if (s = r = u, w = b, x = 1 !== k && a, 1 === k && 'object' !== b.nodeName.toLowerCase()) {
            o = g(a),
            (r = b.getAttribute('id')) ? s = r.replace(ba, '\\$&')  : b.setAttribute('id', s),
            s = '[id=\'' + s + '\'] ',
            l = o.length;
            while (l--) {
              o[l] = s + ra(o[l])
            }
            w = aa.test(a) && pa(b.parentNode) || b,
            x = o.join(',')
          }
          if (x) {
            try {
              return H.apply(d, w.querySelectorAll(x)),
              d
            } catch (y) {
            } finally {
              r || b.removeAttribute('id')
            }
          }
        }
      }
      return i(a.replace(R, '$1'), b, d, e)
    }
    function ha() {
      var a = [
      ];
      function b(c, e) {
        return a.push(c + ' ') > d.cacheLength && delete b[a.shift()],
        b[c + ' '] = e
      }
      return b
    }
    function ia(a) {
      return a[u] = !0,
      a
    }
    function ja(a) {
      var b = n.createElement('div');
      try {
        return !!a(b)
      } catch (c) {
        return !1
      } finally {
        b.parentNode && b.parentNode.removeChild(b),
        b = null
      }
    }
    function ka(a, b) {
      var c = a.split('|'),
      e = a.length;
      while (e--) {
        d.attrHandle[c[e]] = b
      }
    }
    function la(a, b) {
      var c = b && a,
      d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
      if (d) {
        return d
      }
      if (c) {
        while (c = c.nextSibling) {
          if (c === b) {
            return - 1
          }
        }
      }
      return a ? 1 : - 1
    }
    function ma(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return 'input' === c && b.type === a
      }
    }
    function na(a) {
      return function (b) {
        var c = b.nodeName.toLowerCase();
        return ('input' === c || 'button' === c) && b.type === a
      }
    }
    function oa(a) {
      return ia(function (b) {
        return b = + b,
        ia(function (c, d) {
          var e,
          f = a([], c.length, b),
          g = f.length;
          while (g--) {
            c[e = f[g]] && (c[e] = !(d[e] = c[e]))
          }
        })
      })
    }
    function pa(a) {
      return a && 'undefined' != typeof a.getElementsByTagName && a
    }
    c = ga.support = {
    },
    f = ga.isXML = function (a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return b ? 'HTML' !== b.nodeName : !1
    },
    m = ga.setDocument = function (a) {
      var b,
      e,
      g = a ? a.ownerDocument || a : v;
      return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener('unload', ea, !1)  : e.attachEvent && e.attachEvent('onunload', ea)), p = !f(g), c.attributes = ja(function (a) {
        return a.className = 'i',
        !a.getAttribute('className')
      }), c.getElementsByTagName = ja(function (a) {
        return a.appendChild(g.createComment('')),
        !a.getElementsByTagName('*').length
      }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
        return o.appendChild(a).id = u,
        !g.getElementsByName || !g.getElementsByName(u).length
      }), c.getById ? (d.find.ID = function (a, b) {
        if ('undefined' != typeof b.getElementById && p) {
          var c = b.getElementById(a);
          return c && c.parentNode ? [
            c
          ] : [
          ]
        }
      }, d.filter.ID = function (a) {
        var b = a.replace(ca, da);
        return function (a) {
          return a.getAttribute('id') === b
        }
      })  : (delete d.find.ID, d.filter.ID = function (a) {
        var b = a.replace(ca, da);
        return function (a) {
          var c = 'undefined' != typeof a.getAttributeNode && a.getAttributeNode('id');
          return c && c.value === b
        }
      }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
        return 'undefined' != typeof b.getElementsByTagName ? b.getElementsByTagName(a)  : c.qsa ? b.querySelectorAll(a)  : void 0
      }
       : function (a, b) {
        var c,
        d = [
        ],
        e = 0,
        f = b.getElementsByTagName(a);
        if ('*' === a) {
          while (c = f[e++]) {
            1 === c.nodeType && d.push(c)
          }
          return d
        }
        return f
      }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
        return p ? b.getElementsByClassName(a)  : void 0
      }, r = [
      ], q = [
      ], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
        o.appendChild(a).innerHTML = '<a id=\'' + u + '\'></a><select id=\'' + u + '-\f]\' msallowcapture=\'\'><option selected=\'\'></option></select>',
        a.querySelectorAll('[msallowcapture^=\'\']').length && q.push('[*^$]=' + L + '*(?:\'\'|"")'),
        a.querySelectorAll('[selected]').length || q.push('\\[' + L + '*(?:value|' + K + ')'),
        a.querySelectorAll('[id~=' + u + '-]').length || q.push('~='),
        a.querySelectorAll(':checked').length || q.push(':checked'),
        a.querySelectorAll('a#' + u + '+*').length || q.push('.#.+[+~]')
      }), ja(function (a) {
        var b = g.createElement('input');
        b.setAttribute('type', 'hidden'),
        a.appendChild(b).setAttribute('name', 'D'),
        a.querySelectorAll('[name=d]').length && q.push('name' + L + '*[*^$|!~]?='),
        a.querySelectorAll(':enabled').length || q.push(':enabled', ':disabled'),
        a.querySelectorAll('*,:x'),
        q.push(',.*:')
      })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
        c.disconnectedMatch = s.call(a, 'div'),
        s.call(a, '[s!=\'\']:x'),
        r.push('!=', P)
      }), q = q.length && new RegExp(q.join('|')), r = r.length && new RegExp(r.join('|')), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
        d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d)  : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
      }
       : function (a, b) {
        if (b) {
          while (b = b.parentNode) {
            if (b === a) {
              return !0
            }
          }
        }
        return !1
      }, B = b ? function (a, b) {
        if (a === b) {
          return l = !0,
          0
        }
        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b)  : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? - 1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b)  : 0 : 4 & d ? - 1 : 1)
      }
       : function (a, b) {
        if (a === b) {
          return l = !0,
          0
        }
        var c,
        d = 0,
        e = a.parentNode,
        f = b.parentNode,
        h = [
          a
        ],
        i = [
          b
        ];
        if (!e || !f) {
          return a === g ? - 1 : b === g ? 1 : e ? - 1 : f ? 1 : k ? J(k, a) - J(k, b)  : 0
        }
        if (e === f) {
          return la(a, b)
        }
        c = a;
        while (c = c.parentNode) {
          h.unshift(c)
        }
        c = b;
        while (c = c.parentNode) {
          i.unshift(c)
        }
        while (h[d] === i[d]) {
          d++
        }
        return d ? la(h[d], i[d])  : h[d] === v ? - 1 : i[d] === v ? 1 : 0
      }, g)  : n
    },
    ga.matches = function (a, b) {
      return ga(a, null, null, b)
    },
    ga.matchesSelector = function (a, b) {
      if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, '=\'$1\']'), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) {
        try {
          var d = s.call(a, b);
          if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) {
            return d
          }
        } catch (e) {
        }
      }
      return ga(b, n, null, [
        a
      ]).length > 0
    },
    ga.contains = function (a, b) {
      return (a.ownerDocument || a) !== n && m(a),
      t(a, b)
    },
    ga.attr = function (a, b) {
      (a.ownerDocument || a) !== n && m(a);
      var e = d.attrHandle[b.toLowerCase()],
      f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p)  : void 0;
      return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b)  : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
    },
    ga.error = function (a) {
      throw new Error('Syntax error, unrecognized expression: ' + a)
    },
    ga.uniqueSort = function (a) {
      var b,
      d = [
      ],
      e = 0,
      f = 0;
      if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
        while (b = a[f++]) {
          b === a[f] && (e = d.push(f))
        }
        while (e--) {
          a.splice(d[e], 1)
        }
      }
      return k = null,
      a
    },
    e = ga.getText = function (a) {
      var b,
      c = '',
      d = 0,
      f = a.nodeType;
      if (f) {
        if (1 === f || 9 === f || 11 === f) {
          if ('string' == typeof a.textContent) {
            return a.textContent
          }
          for (a = a.firstChild; a; a = a.nextSibling) {
            c += e(a)
          }
        } else {
          if (3 === f || 4 === f) {
            return a.nodeValue
          }
        }
      } else {
        while (b = a[d++]) {
          c += e(b)
        }
      }
      return c
    },
    d = ga.selectors = {
      cacheLength: 50,
      createPseudo: ia,
      match: X,
      attrHandle: {
      },
      find: {
      },
      relative: {
        '>': {
          dir: 'parentNode',
          first: !0
        },
        ' ': {
          dir: 'parentNode'
        },
        '+': {
          dir: 'previousSibling',
          first: !0
        },
        '~': {
          dir: 'previousSibling'
        }
      },
      preFilter: {
        ATTR: function (a) {
          return a[1] = a[1].replace(ca, da),
          a[3] = (a[3] || a[4] || a[5] || '').replace(ca, da),
          '~=' === a[2] && (a[3] = ' ' + a[3] + ' '),
          a.slice(0, 4)
        },
        CHILD: function (a) {
          return a[1] = a[1].toLowerCase(),
          'nth' === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = + (a[4] ? a[5] + (a[6] || 1)  : 2 * ('even' === a[3] || 'odd' === a[3])), a[5] = + (a[7] + a[8] || 'odd' === a[3]))  : a[3] && ga.error(a[0]),
          a
        },
        PSEUDO: function (a) {
          var b,
          c = !a[6] && a[2];
          return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || '' : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(')', c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
        }
      },
      filter: {
        TAG: function (a) {
          var b = a.replace(ca, da).toLowerCase();
          return '*' === a ? function () {
            return !0
          }
           : function (a) {
            return a.nodeName && a.nodeName.toLowerCase() === b
          }
        },
        CLASS: function (a) {
          var b = y[a + ' '];
          return b || (b = new RegExp('(^|' + L + ')' + a + '(' + L + '|$)')) && y(a, function (a) {
            return b.test('string' == typeof a.className && a.className || 'undefined' != typeof a.getAttribute && a.getAttribute('class') || '')
          })
        },
        ATTR: function (a, b, c) {
          return function (d) {
            var e = ga.attr(d, a);
            return null == e ? '!=' === b : b ? (e += '', '=' === b ? e === c : '!=' === b ? e !== c : '^=' === b ? c && 0 === e.indexOf(c)  : '*=' === b ? c && e.indexOf(c) > - 1 : '$=' === b ? c && e.slice( - c.length) === c : '~=' === b ? (' ' + e.replace(Q, ' ') + ' ').indexOf(c) > - 1 : '|=' === b ? e === c || e.slice(0, c.length + 1) === c + '-' : !1)  : !0
          }
        },
        CHILD: function (a, b, c, d, e) {
          var f = 'nth' !== a.slice(0, 3),
          g = 'last' !== a.slice( - 4),
          h = 'of-type' === b;
          return 1 === d && 0 === e ? function (a) {
            return !!a.parentNode
          }
           : function (b, c, i) {
            var j,
            k,
            l,
            m,
            n,
            o,
            p = f !== g ? 'nextSibling' : 'previousSibling',
            q = b.parentNode,
            r = h && b.nodeName.toLowerCase(),
            s = !i && !h;
            if (q) {
              if (f) {
                while (p) {
                  l = b;
                  while (l = l[p]) {
                    if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) {
                      return !1
                    }
                  }
                  o = p = 'only' === a && !o && 'nextSibling'
                }
                return !0
              }
              if (o = [
                g ? q.firstChild : q.lastChild
              ], g && s) {
                k = q[u] || (q[u] = {
                }),
                j = k[a] || [],
                n = j[0] === w && j[1],
                m = j[0] === w && j[2],
                l = n && q.childNodes[n];
                while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                  if (1 === l.nodeType && ++m && l === b) {
                    k[a] = [
                      w,
                      n,
                      m
                    ];
                    break
                  }
                }
              } else {
                if (s && (j = (b[u] || (b[u] = {
                })) [a]) && j[0] === w) {
                  m = j[1]
                } else {
                  while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {
                    })) [a] = [
                      w,
                      m
                    ]), l === b)) {
                      break
                    }
                  }
                }
              }
              return m -= e,
              m === d || m % d === 0 && m / d >= 0
            }
          }
        },
        PSEUDO: function (a, b) {
          var c,
          e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error('unsupported pseudo: ' + a);
          return e[u] ? e(b)  : e.length > 1 ? (c = [
            a,
            a,
            '',
            b
          ], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
            var d,
            f = e(a, b),
            g = f.length;
            while (g--) {
              d = J(a, f[g]),
              a[d] = !(c[d] = f[g])
            }
          })  : function (a) {
            return e(a, 0, c)
          })  : e
        }
      },
      pseudos: {
        not: ia(function (a) {
          var b = [
          ],
          c = [
          ],
          d = h(a.replace(R, '$1'));
          return d[u] ? ia(function (a, b, c, e) {
            var f,
            g = d(a, null, e, [
            ]),
            h = a.length;
            while (h--) {
              (f = g[h]) && (a[h] = !(b[h] = f))
            }
          })  : function (a, e, f) {
            return b[0] = a,
            d(b, null, f, c),
            b[0] = null,
            !c.pop()
          }
        }),
        has: ia(function (a) {
          return function (b) {
            return ga(a, b).length > 0
          }
        }),
        contains: ia(function (a) {
          return a = a.replace(ca, da),
          function (b) {
            return (b.textContent || b.innerText || e(b)).indexOf(a) > - 1
          }
        }),
        lang: ia(function (a) {
          return W.test(a || '') || ga.error('unsupported lang: ' + a),
          a = a.replace(ca, da).toLowerCase(),
          function (b) {
            var c;
            do {
              if (c = p ? b.lang : b.getAttribute('xml:lang') || b.getAttribute('lang')) {
                return c = c.toLowerCase(),
                c === a || 0 === c.indexOf(a + '-')
              }
            } while ((b = b.parentNode) && 1 === b.nodeType);
            return !1
          }
        }),
        target: function (b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id
        },
        root: function (a) {
          return a === o
        },
        focus: function (a) {
          return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
        },
        enabled: function (a) {
          return a.disabled === !1
        },
        disabled: function (a) {
          return a.disabled === !0
        },
        checked: function (a) {
          var b = a.nodeName.toLowerCase();
          return 'input' === b && !!a.checked || 'option' === b && !!a.selected
        },
        selected: function (a) {
          return a.parentNode && a.parentNode.selectedIndex,
          a.selected === !0
        },
        empty: function (a) {
          for (a = a.firstChild; a; a = a.nextSibling) {
            if (a.nodeType < 6) {
              return !1
            }
          }
          return !0
        },
        parent: function (a) {
          return !d.pseudos.empty(a)
        },
        header: function (a) {
          return Z.test(a.nodeName)
        },
        input: function (a) {
          return Y.test(a.nodeName)
        },
        button: function (a) {
          var b = a.nodeName.toLowerCase();
          return 'input' === b && 'button' === a.type || 'button' === b
        },
        text: function (a) {
          var b;
          return 'input' === a.nodeName.toLowerCase() && 'text' === a.type && (null == (b = a.getAttribute('type')) || 'text' === b.toLowerCase())
        },
        first: oa(function () {
          return [0]
        }),
        last: oa(function (a, b) {
          return [b - 1]
        }),
        eq: oa(function (a, b, c) {
          return [0 > c ? c + b : c]
        }),
        even: oa(function (a, b) {
          for (var c = 0; b > c; c += 2) {
            a.push(c)
          }
          return a
        }),
        odd: oa(function (a, b) {
          for (var c = 1; b > c; c += 2) {
            a.push(c)
          }
          return a
        }),
        lt: oa(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0; ) {
            a.push(d)
          }
          return a
        }),
        gt: oa(function (a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b; ) {
            a.push(d)
          }
          return a
        })
      }
    },
    d.pseudos.nth = d.pseudos.eq;
    for (b in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0
    }) {
      d.pseudos[b] = ma(b)
    }
    for (b in {
      submit: !0,
      reset: !0
    }) {
      d.pseudos[b] = na(b)
    }
    function qa() {
    }
    qa.prototype = d.filters = d.pseudos,
    d.setFilters = new qa,
    g = ga.tokenize = function (a, b) {
      var c,
      e,
      f,
      g,
      h,
      i,
      j,
      k = z[a + ' '];
      if (k) {
        return b ? 0 : k.slice(0)
      }
      h = a,
      i = [
      ],
      j = d.preFilter;
      while (h) {
        (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [
        ])),
        c = !1,
        (e = T.exec(h)) && (c = e.shift(), f.push({
          value: c,
          type: e[0].replace(R, ' ')
        }), h = h.slice(c.length));
        for (g in d.filter) {
          !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
            value: c,
            type: g,
            matches: e
          }), h = h.slice(c.length))
        }
        if (!c) {
          break
        }
      }
      return b ? h.length : h ? ga.error(a)  : z(a, i).slice(0)
    };
    function ra(a) {
      for (var b = 0, c = a.length, d = ''; c > b; b++) {
        d += a[b].value
      }
      return d
    }
    function sa(a, b, c) {
      var d = b.dir,
      e = c && 'parentNode' === d,
      f = x++;
      return b.first ? function (b, c, f) {
        while (b = b[d]) {
          if (1 === b.nodeType || e) {
            return a(b, c, f)
          }
        }
      }
       : function (b, c, g) {
        var h,
        i,
        j = [
          w,
          f
        ];
        if (g) {
          while (b = b[d]) {
            if ((1 === b.nodeType || e) && a(b, c, g)) {
              return !0
            }
          }
        } else {
          while (b = b[d]) {
            if (1 === b.nodeType || e) {
              if (i = b[u] || (b[u] = {
              }), (h = i[d]) && h[0] === w && h[1] === f) {
                return j[2] = h[2]
              }
              if (i[d] = j, j[2] = a(b, c, g)) {
                return !0
              }
            }
          }
        }
      }
    }
    function ta(a) {
      return a.length > 1 ? function (b, c, d) {
        var e = a.length;
        while (e--) {
          if (!a[e](b, c, d)) {
            return !1
          }
        }
        return !0
      }
       : a[0]
    }
    function ua(a, b, c) {
      for (var d = 0, e = b.length; e > d; d++) {
        ga(a, b[d], c)
      }
      return c
    }
    function va(a, b, c, d, e) {
      for (var f, g = [
      ], h = 0, i = a.length, j = null != b; i > h; h++) {
        (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h))
      }
      return g
    }
    function wa(a, b, c, d, e, f) {
      return d && !d[u] && (d = wa(d)),
      e && !e[u] && (e = wa(e, f)),
      ia(function (f, g, h, i) {
        var j,
        k,
        l,
        m = [
        ],
        n = [
        ],
        o = g.length,
        p = f || ua(b || '*', h.nodeType ? [
          h
        ] : h, [
        ]),
        q = !a || !f && b ? p : va(p, m, a, h, i),
        r = c ? e || (f ? a : o || d) ? [
        ] : g : q;
        if (c && c(q, r, h, i), d) {
          j = va(r, n),
          d(j, [
          ], h, i),
          k = j.length;
          while (k--) {
            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
          }
        }
        if (f) {
          if (e || a) {
            if (e) {
              j = [
              ],
              k = r.length;
              while (k--) {
                (l = r[k]) && j.push(q[k] = l)
              }
              e(null, r = [
              ], j, i)
            }
            k = r.length;
            while (k--) {
              (l = r[k]) && (j = e ? J(f, l)  : m[k]) > - 1 && (f[j] = !(g[j] = l))
            }
          }
        } else {
          r = va(r === g ? r.splice(o, r.length)  : r),
          e ? e(null, g, r, i)  : H.apply(g, r)
        }
      })
    }
    function xa(a) {
      for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[' '], i = g ? 1 : 0, k = sa(function (a) {
        return a === b
      }, h, !0), l = sa(function (a) {
        return J(b, a) > - 1
      }, h, !0), m = [
        function (a, c, d) {
          var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d)  : l(a, c, d));
          return b = null,
          e
        }
      ]; f > i; i++) {
        if (c = d.relative[a[i].type]) {
          m = [
            sa(ta(m), c)
          ]
        } else {
          if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
            for (e = ++i; f > e; e++) {
              if (d.relative[a[e].type]) {
                break
              }
            }
            return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
              value: ' ' === a[i - 2].type ? '*' : ''
            })).replace(R, '$1'), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
          }
          m.push(c)
        }
      }
      return ta(m)
    }
    function ya(a, b) {
      var c = b.length > 0,
      e = a.length > 0,
      f = function (f, g, h, i, k) {
        var l,
        m,
        o,
        p = 0,
        q = '0',
        r = f && [],
        s = [
        ],
        t = j,
        u = f || e && d.find.TAG('*', k),
        v = w += null == t ? 1 : Math.random() || 0.1,
        x = u.length;
        for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
          if (e && l) {
            m = 0;
            while (o = a[m++]) {
              if (o(l, g, h)) {
                i.push(l);
                break
              }
            }
            k && (w = v)
          }
          c && ((l = !o && l) && p--, f && r.push(l))
        }
        if (p += q, c && q !== p) {
          m = 0;
          while (o = b[m++]) {
            o(r, s, g, h)
          }
          if (f) {
            if (p > 0) {
              while (q--) {
                r[q] || s[q] || (s[q] = F.call(i))
              }
            }
            s = va(s)
          }
          H.apply(i, s),
          k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
        }
        return k && (w = v, j = t),
        r
      };
      return c ? ia(f)  : f
    }
    return h = ga.compile = function (a, b) {
      var c,
      d = [
      ],
      e = [
      ],
      f = A[a + ' '];
      if (!f) {
        b || (b = g(a)),
        c = b.length;
        while (c--) {
          f = xa(b[c]),
          f[u] ? d.push(f)  : e.push(f)
        }
        f = A(a, ya(e, d)),
        f.selector = a
      }
      return f
    },
    i = ga.select = function (a, b, e, f) {
      var i,
      j,
      k,
      l,
      m,
      n = 'function' == typeof a && a,
      o = !f && g(a = n.selector || a);
      if (e = e || [], 1 === o.length) {
        if (j = o[0] = o[0].slice(0), j.length > 2 && 'ID' === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
          if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || []) [0], !b) {
            return e
          }
          n && (b = b.parentNode),
          a = a.slice(j.shift().value.length)
        }
        i = X.needsContext.test(a) ? 0 : j.length;
        while (i--) {
          if (k = j[i], d.relative[l = k.type]) {
            break
          }
          if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
            if (j.splice(i, 1), a = f.length && ra(j), !a) {
              return H.apply(e, f),
              e
            }
            break
          }
        }
      }
      return (n || h(a, o)) (f, b, !p, e, aa.test(a) && pa(b.parentNode) || b),
      e
    },
    c.sortStable = u.split('').sort(B).join('') === u,
    c.detectDuplicates = !!l,
    m(),
    c.sortDetached = ja(function (a) {
      return 1 & a.compareDocumentPosition(n.createElement('div'))
    }),
    ja(function (a) {
      return a.innerHTML = '<a href=\'#\'></a>',
      '#' === a.firstChild.getAttribute('href')
    }) || ka('type|href|height|width', function (a, b, c) {
      return c ? void 0 : a.getAttribute(b, 'type' === b.toLowerCase() ? 1 : 2)
    }),
    c.attributes && ja(function (a) {
      return a.innerHTML = '<input/>',
      a.firstChild.setAttribute('value', ''),
      '' === a.firstChild.getAttribute('value')
    }) || ka('value', function (a, b, c) {
      return c || 'input' !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
    }),
    ja(function (a) {
      return null == a.getAttribute('disabled')
    }) || ka(K, function (a, b, c) {
      var d;
      return c ? void 0 : a[b] === !0 ? b.toLowerCase()  : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
    }),
    ga
  }(a);
  m.find = s,
  m.expr = s.selectors,
  m.expr[':'] = m.expr.pseudos,
  m.unique = s.uniqueSort,
  m.text = s.getText,
  m.isXMLDoc = s.isXML,
  m.contains = s.contains;
  var t = m.expr.match.needsContext,
  u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
  v = /^.[^:#\[\.,]*$/;
  function w(a, b, c) {
    if (m.isFunction(b)) {
      return m.grep(a, function (a, d) {
        return !!b.call(a, d, a) !== c
      })
    }
    if (b.nodeType) {
      return m.grep(a, function (a) {
        return a === b !== c
      })
    }
    if ('string' == typeof b) {
      if (v.test(b)) {
        return m.filter(b, a, c)
      }
      b = m.filter(b, a)
    }
    return m.grep(a, function (a) {
      return m.inArray(a, b) >= 0 !== c
    })
  }
  m.filter = function (a, b, c) {
    var d = b[0];
    return c && (a = ':not(' + a + ')'),
    1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [
      d
    ] : [
    ] : m.find.matches(a, m.grep(b, function (a) {
      return 1 === a.nodeType
    }))
  },
  m.fn.extend({
    find: function (a) {
      var b,
      c = [
      ],
      d = this,
      e = d.length;
      if ('string' != typeof a) {
        return this.pushStack(m(a).filter(function () {
          for (b = 0; e > b; b++) {
            if (m.contains(d[b], this)) {
              return !0
            }
          }
        }))
      }
      for (b = 0; e > b; b++) {
        m.find(a, d[b], c)
      }
      return c = this.pushStack(e > 1 ? m.unique(c)  : c),
      c.selector = this.selector ? this.selector + ' ' + a : a,
      c
    },
    filter: function (a) {
      return this.pushStack(w(this, a || [], !1))
    },
    not: function (a) {
      return this.pushStack(w(this, a || [], !0))
    },
    is: function (a) {
      return !!w(this, 'string' == typeof a && t.test(a) ? m(a)  : a || [], !1).length
    }
  });
  var x,
  y = a.document,
  z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
  A = m.fn.init = function (a, b) {
    var c,
    d;
    if (!a) {
      return this
    }
    if ('string' == typeof a) {
      if (c = '<' === a.charAt(0) && '>' === a.charAt(a.length - 1) && a.length >= 3 ? [
        null,
        a,
        null
      ] : z.exec(a), !c || !c[1] && b) {
        return !b || b.jquery ? (b || x).find(a)  : this.constructor(b).find(a)
      }
      if (c[1]) {
        if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b)) {
          for (c in b) {
            m.isFunction(this[c]) ? this[c](b[c])  : this.attr(c, b[c])
          }
        }
        return this
      }
      if (d = y.getElementById(c[2]), d && d.parentNode) {
        if (d.id !== c[2]) {
          return x.find(a)
        }
        this.length = 1,
        this[0] = d
      }
      return this.context = y,
      this.selector = a,
      this
    }
    return a.nodeType ? (this.context = this[0] = a, this.length = 1, this)  : m.isFunction(a) ? 'undefined' != typeof x.ready ? x.ready(a)  : a(m)  : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
  };
  A.prototype = m.fn,
  x = m(y);
  var B = /^(?:parents|prev(?:Until|All))/,
  C = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  m.extend({
    dir: function (a, b, c) {
      var d = [
      ],
      e = a[b];
      while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) {
        1 === e.nodeType && d.push(e),
        e = e[b]
      }
      return d
    },
    sibling: function (a, b) {
      for (var c = [
      ]; a; a = a.nextSibling) {
        1 === a.nodeType && a !== b && c.push(a)
      }
      return c
    }
  }),
  m.fn.extend({
    has: function (a) {
      var b,
      c = m(a, this),
      d = c.length;
      return this.filter(function () {
        for (b = 0; d > b; b++) {
          if (m.contains(this, c[b])) {
            return !0
          }
        }
      })
    },
    closest: function (a, b) {
      for (var c, d = 0, e = this.length, f = [
      ], g = t.test(a) || 'string' != typeof a ? m(a, b || this.context)  : 0; e > d; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > - 1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
            f.push(c);
            break
          }
        }
      }
      return this.pushStack(f.length > 1 ? m.unique(f)  : f)
    },
    index: function (a) {
      return a ? 'string' == typeof a ? m.inArray(this[0], m(a))  : m.inArray(a.jquery ? a[0] : a, this)  : this[0] && this[0].parentNode ? this.first().prevAll().length : - 1
    },
    add: function (a, b) {
      return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
    },
    addBack: function (a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }
  });
  function D(a, b) {
    do {
      a = a[b]
    } while (a && 1 !== a.nodeType);
    return a
  }
  m.each({
    parent: function (a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null
    },
    parents: function (a) {
      return m.dir(a, 'parentNode')
    },
    parentsUntil: function (a, b, c) {
      return m.dir(a, 'parentNode', c)
    },
    next: function (a) {
      return D(a, 'nextSibling')
    },
    prev: function (a) {
      return D(a, 'previousSibling')
    },
    nextAll: function (a) {
      return m.dir(a, 'nextSibling')
    },
    prevAll: function (a) {
      return m.dir(a, 'previousSibling')
    },
    nextUntil: function (a, b, c) {
      return m.dir(a, 'nextSibling', c)
    },
    prevUntil: function (a, b, c) {
      return m.dir(a, 'previousSibling', c)
    },
    siblings: function (a) {
      return m.sibling((a.parentNode || {
      }).firstChild, a)
    },
    children: function (a) {
      return m.sibling(a.firstChild)
    },
    contents: function (a) {
      return m.nodeName(a, 'iframe') ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
    }
  }, function (a, b) {
    m.fn[a] = function (c, d) {
      var e = m.map(this, b, c);
      return 'Until' !== a.slice( - 5) && (d = c),
      d && 'string' == typeof d && (e = m.filter(d, e)),
      this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())),
      this.pushStack(e)
    }
  });
  var E = /\S+/g,
  F = {
  };
  function G(a) {
    var b = F[a] = {
    };
    return m.each(a.match(E) || [], function (a, c) {
      b[c] = !0
    }),
    b
  }
  m.Callbacks = function (a) {
    a = 'string' == typeof a ? F[a] || G(a)  : m.extend({
    }, a);
    var b,
    c,
    d,
    e,
    f,
    g,
    h = [
    ],
    i = !a.once && [],
    j = function (l) {
      for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++) {
        if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
          c = !1;
          break
        }
      }
      b = !1,
      h && (i ? i.length && j(i.shift())  : c ? h = [
      ] : k.disable())
    },
    k = {
      add: function () {
        if (h) {
          var d = h.length;
          !function f(b) {
            m.each(b, function (b, c) {
              var d = m.type(c);
              'function' === d ? a.unique && k.has(c) || h.push(c)  : c && c.length && 'string' !== d && f(c)
            })
          }(arguments),
          b ? e = h.length : c && (g = d, j(c))
        }
        return this
      },
      remove: function () {
        return h && m.each(arguments, function (a, c) {
          var d;
          while ((d = m.inArray(c, h, d)) > - 1) {
            h.splice(d, 1),
            b && (e >= d && e--, f >= d && f--)
          }
        }),
        this
      },
      has: function (a) {
        return a ? m.inArray(a, h) > - 1 : !(!h || !h.length)
      },
      empty: function () {
        return h = [
        ],
        e = 0,
        this
      },
      disable: function () {
        return h = i = c = void 0,
        this
      },
      disabled: function () {
        return !h
      },
      lock: function () {
        return i = void 0,
        c || k.disable(),
        this
      },
      locked: function () {
        return !i
      },
      fireWith: function (a, c) {
        return !h || d && !i || (c = c || [], c = [
          a,
          c.slice ? c.slice()  : c
        ], b ? i.push(c)  : j(c)),
        this
      },
      fire: function () {
        return k.fireWith(this, arguments),
        this
      },
      fired: function () {
        return !!d
      }
    };
    return k
  },
  m.extend({
    Deferred: function (a) {
      var b = [
        ['resolve',
        'done',
        m.Callbacks('once memory'),
        'resolved'],
        [
          'reject',
          'fail',
          m.Callbacks('once memory'),
          'rejected'
        ],
        [
          'notify',
          'progress',
          m.Callbacks('memory')
        ]
      ],
      c = 'pending',
      d = {
        state: function () {
          return c
        },
        always: function () {
          return e.done(arguments).fail(arguments),
          this
        },
        then: function () {
          var a = arguments;
          return m.Deferred(function (c) {
            m.each(b, function (b, f) {
              var g = m.isFunction(a[b]) && a[b];
              e[f[1]](function () {
                var a = g && g.apply(this, arguments);
                a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify)  : c[f[0] + 'With'](this === d ? c.promise()  : this, g ? [
                  a
                ] : arguments)
              })
            }),
            a = null
          }).promise()
        },
        promise: function (a) {
          return null != a ? m.extend(a, d)  : d
        }
      },
      e = {
      };
      return d.pipe = d.then,
      m.each(b, function (a, f) {
        var g = f[2],
        h = f[3];
        d[f[1]] = g.add,
        h && g.add(function () {
          c = h
        }, b[1 ^ a][2].disable, b[2][2].lock),
        e[f[0]] = function () {
          return e[f[0] + 'With'](this === e ? d : this, arguments),
          this
        },
        e[f[0] + 'With'] = g.fireWith
      }),
      d.promise(e),
      a && a.call(e, e),
      e
    },
    when: function (a) {
      var b = 0,
      c = d.call(arguments),
      e = c.length,
      f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
      g = 1 === f ? a : m.Deferred(),
      h = function (a, b, c) {
        return function (e) {
          b[a] = this,
          c[a] = arguments.length > 1 ? d.call(arguments)  : e,
          c === i ? g.notifyWith(b, c)  : --f || g.resolveWith(b, c)
        }
      },
      i,
      j,
      k;
      if (e > 1) {
        for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) {
          c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i))  : --f
        }
      }
      return f || g.resolveWith(k, c),
      g.promise()
    }
  });
  var H;
  m.fn.ready = function (a) {
    return m.ready.promise().done(a),
    this
  },
  m.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function (a) {
      a ? m.readyWait++ : m.ready(!0)
    },
    ready: function (a) {
      if (a === !0 ? !--m.readyWait : !m.isReady) {
        if (!y.body) {
          return setTimeout(m.ready)
        }
        m.isReady = !0,
        a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [
          m
        ]), m.fn.triggerHandler && (m(y).triggerHandler('ready'), m(y).off('ready')))
      }
    }
  });
  function I() {
    y.addEventListener ? (y.removeEventListener('DOMContentLoaded', J, !1), a.removeEventListener('load', J, !1))  : (y.detachEvent('onreadystatechange', J), a.detachEvent('onload', J))
  }
  function J() {
    (y.addEventListener || 'load' === event.type || 'complete' === y.readyState) && (I(), m.ready())
  }
  m.ready.promise = function (b) {
    if (!H) {
      if (H = m.Deferred(), 'complete' === y.readyState) {
        setTimeout(m.ready)
      } else {
        if (y.addEventListener) {
          y.addEventListener('DOMContentLoaded', J, !1),
          a.addEventListener('load', J, !1)
        } else {
          y.attachEvent('onreadystatechange', J),
          a.attachEvent('onload', J);
          var c = !1;
          try {
            c = null == a.frameElement && y.documentElement
          } catch (d) {
          }
          c && c.doScroll && !function e() {
            if (!m.isReady) {
              try {
                c.doScroll('left')
              } catch (a) {
                return setTimeout(e, 50)
              }
              I(),
              m.ready()
            }
          }()
        }
      }
    }
    return H.promise(b)
  };
  var K = 'undefined',
  L;
  for (L in m(k)) {
    break
  }
  k.ownLast = '0' !== L,
  k.inlineBlockNeedsLayout = !1,
  m(function () {
    var a,
    b,
    c,
    d;
    c = y.getElementsByTagName('body') [0],
    c && c.style && (b = y.createElement('div'), d = y.createElement('div'), d.style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px', c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = 'display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1', k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
  }),
  function () {
    var a = y.createElement('div');
    if (null == k.deleteExpando) {
      k.deleteExpando = !0;
      try {
        delete a.test
      } catch (b) {
        k.deleteExpando = !1
      }
    }
    a = null
  }(),
  m.acceptData = function (a) {
    var b = m.noData[(a.nodeName + ' ').toLowerCase()],
    c = + a.nodeType || 1;
    return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute('classid') === b
  };
  var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
  N = /([A-Z])/g;
  function O(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = 'data-' + b.replace(N, '-$1').toLowerCase();
      if (c = a.getAttribute(d), 'string' == typeof c) {
        try {
          c = 'true' === c ? !0 : 'false' === c ? !1 : 'null' === c ? null : + c + '' === c ? + c : M.test(c) ? m.parseJSON(c)  : c
        } catch (e) {
        }
        m.data(a, b, c)
      } else {
        c = void 0
      }
    }
    return c
  }
  function P(a) {
    var b;
    for (b in a) {
      if (('data' !== b || !m.isEmptyObject(a[b])) && 'toJSON' !== b) {
        return !1
      }
    }
    return !0
  }
  function Q(a, b, d, e) {
    if (m.acceptData(a)) {
      var f,
      g,
      h = m.expando,
      i = a.nodeType,
      j = i ? m.cache : a,
      k = i ? a[h] : a[h] && h;
      if (k && j[k] && (e || j[k].data) || void 0 !== d || 'string' != typeof b) {
        return k || (k = i ? a[h] = c.pop() || m.guid++ : h),
        j[k] || (j[k] = i ? {
        }
         : {
          toJSON: m.noop
        }),
        ('object' == typeof b || 'function' == typeof b) && (e ? j[k] = m.extend(j[k], b)  : j[k].data = m.extend(j[k].data, b)),
        g = j[k],
        e || (g.data || (g.data = {
        }), g = g.data),
        void 0 !== d && (g[m.camelCase(b)] = d),
        'string' == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)]))  : f = g,
        f
      }
    }
  }
  function R(a, b, c) {
    if (m.acceptData(a)) {
      var d,
      e,
      f = a.nodeType,
      g = f ? m.cache : a,
      h = f ? a[m.expando] : m.expando;
      if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          m.isArray(b) ? b = b.concat(m.map(b, m.camelCase))  : b in d ? b = [
            b
          ] : (b = m.camelCase(b), b = b in d ? [
            b
          ] : b.split(' ')),
          e = b.length;
          while (e--) {
            delete d[b[e]]
          }
          if (c ? !P(d)  : !m.isEmptyObject(d)) {
            return
          }
        }(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0)  : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
      }
    }
  }
  m.extend({
    cache: {
    },
    noData: {
      'applet ': !0,
      'embed ': !0,
      'object ': 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'
    },
    hasData: function (a) {
      return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando],
      !!a && !P(a)
    },
    data: function (a, b, c) {
      return Q(a, b, c)
    },
    removeData: function (a, b) {
      return R(a, b)
    },
    _data: function (a, b, c) {
      return Q(a, b, c, !0)
    },
    _removeData: function (a, b) {
      return R(a, b, !0)
    }
  }),
  m.fn.extend({
    data: function (a, b) {
      var c,
      d,
      e,
      f = this[0],
      g = f && f.attributes;
      if (void 0 === a) {
        if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, 'parsedAttrs'))) {
          c = g.length;
          while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf('data-') && (d = m.camelCase(d.slice(5)), O(f, d, e[d])))
          }
          m._data(f, 'parsedAttrs', !0)
        }
        return e
      }
      return 'object' == typeof a ? this.each(function () {
        m.data(this, a)
      })  : arguments.length > 1 ? this.each(function () {
        m.data(this, a, b)
      })  : f ? O(f, a, m.data(f, a))  : void 0
    },
    removeData: function (a) {
      return this.each(function () {
        m.removeData(this, a)
      })
    }
  }),
  m.extend({
    queue: function (a, b, c) {
      var d;
      return a ? (b = (b || 'fx') + 'queue', d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c))  : d.push(c)), d || [])  : void 0
    },
    dequeue: function (a, b) {
      b = b || 'fx';
      var c = m.queue(a, b),
      d = c.length,
      e = c.shift(),
      f = m._queueHooks(a, b),
      g = function () {
        m.dequeue(a, b)
      };
      'inprogress' === e && (e = c.shift(), d--),
      e && ('fx' === b && c.unshift('inprogress'), delete f.stop, e.call(a, g, f)),
      !d && f && f.empty.fire()
    },
    _queueHooks: function (a, b) {
      var c = b + 'queueHooks';
      return m._data(a, c) || m._data(a, c, {
        empty: m.Callbacks('once memory').add(function () {
          m._removeData(a, b + 'queue'),
          m._removeData(a, c)
        })
      })
    }
  }),
  m.fn.extend({
    queue: function (a, b) {
      var c = 2;
      return 'string' != typeof a && (b = a, a = 'fx', c--),
      arguments.length < c ? m.queue(this[0], a)  : void 0 === b ? this : this.each(function () {
        var c = m.queue(this, a, b);
        m._queueHooks(this, a),
        'fx' === a && 'inprogress' !== c[0] && m.dequeue(this, a)
      })
    },
    dequeue: function (a) {
      return this.each(function () {
        m.dequeue(this, a)
      })
    },
    clearQueue: function (a) {
      return this.queue(a || 'fx', [
      ])
    },
    promise: function (a, b) {
      var c,
      d = 1,
      e = m.Deferred(),
      f = this,
      g = this.length,
      h = function () {
        --d || e.resolveWith(f, [
          f
        ])
      };
      'string' != typeof a && (b = a, a = void 0),
      a = a || 'fx';
      while (g--) {
        c = m._data(f[g], a + 'queueHooks'),
        c && c.empty && (d++, c.empty.add(h))
      }
      return h(),
      e.promise(b)
    }
  });
  var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
  T = [
    'Top',
    'Right',
    'Bottom',
    'Left'
  ],
  U = function (a, b) {
    return a = b || a,
    'none' === m.css(a, 'display') || !m.contains(a.ownerDocument, a)
  },
  V = m.access = function (a, b, c, d, e, f, g) {
    var h = 0,
    i = a.length,
    j = null == c;
    if ('object' === m.type(c)) {
      e = !0;
      for (h in c) {
        m.access(a, b, h, c[h], !0, f, g)
      }
    } else {
      if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null)  : (j = b, b = function (a, b, c) {
        return j.call(m(a), c)
      })), b)) {
        for (; i > h; h++) {
          b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)))
        }
      }
    }
    return e ? a : j ? b.call(a)  : i ? b(a[0], c)  : f
  },
  W = /^(?:checkbox|radio)$/i;
  !function () {
    var a = y.createElement('input'),
    b = y.createElement('div'),
    c = y.createDocumentFragment();
    if (b.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>', k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName('tbody').length, k.htmlSerialize = !!b.getElementsByTagName('link').length, k.html5Clone = '<:nav></:nav>' !== y.createElement('nav').cloneNode(!0).outerHTML, a.type = 'checkbox', a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = '<textarea>x</textarea>', k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = '<input type=\'radio\' checked=\'checked\' name=\'t\'/>', k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent('onclick', function () {
      k.noCloneEvent = !1
    }), b.cloneNode(!0).click()), null == k.deleteExpando) {
      k.deleteExpando = !0;
      try {
        delete b.test
      } catch (d) {
        k.deleteExpando = !1
      }
    }
  }(),
  function () {
    var b,
    c,
    d = y.createElement('div');
    for (b in {
      submit: !0,
      change: !0,
      focusin: !0
    }) {
      c = 'on' + b,
      (k[b + 'Bubbles'] = c in a) || (d.setAttribute(c, 't'), k[b + 'Bubbles'] = d.attributes[c].expando === !1)
    }
    d = null
  }();
  var X = /^(?:input|select|textarea)$/i,
  Y = /^key/,
  Z = /^(?:mouse|pointer|contextmenu)|click/,
  $ = /^(?:focusinfocus|focusoutblur)$/,
  _ = /^([^.]*)(?:\.(.+)|)$/;
  function aa() {
    return !0
  }
  function ba() {
    return !1
  }
  function ca() {
    try {
      return y.activeElement
    } catch (a) {
    }
  }
  m.event = {
    global: {
    },
    add: function (a, b, c, d, e) {
      var f,
      g,
      h,
      i,
      j,
      k,
      l,
      n,
      o,
      p,
      q,
      r = m._data(a);
      if (r) {
        c.handler && (i = c, c = i.handler, e = i.selector),
        c.guid || (c.guid = m.guid++),
        (g = r.events) || (g = r.events = {
        }),
        (k = r.handle) || (k = r.handle = function (a) {
          return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
        }, k.elem = a),
        b = (b || '').match(E) || [''],
        h = b.length;
        while (h--) {
          f = _.exec(b[h]) || [],
          o = q = f[1],
          p = (f[2] || '').split('.').sort(),
          o && (j = m.event.special[o] || {
          }, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {
          }, l = m.extend({
            type: o,
            origType: q,
            data: d,
            handler: c,
            guid: c.guid,
            selector: e,
            needsContext: e && m.expr.match.needsContext.test(e),
            namespace: p.join('.')
          }, i), (n = g[o]) || (n = g[o] = [
          ], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1)  : a.attachEvent && a.attachEvent('on' + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l)  : n.push(l), m.event.global[o] = !0)
        }
        a = null
      }
    },
    remove: function (a, b, c, d, e) {
      var f,
      g,
      h,
      i,
      j,
      k,
      l,
      n,
      o,
      p,
      q,
      r = m.hasData(a) && m._data(a);
      if (r && (k = r.events)) {
        b = (b || '').match(E) || [''],
        j = b.length;
        while (j--) {
          if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || '').split('.').sort(), o) {
            l = m.event.special[o] || {
            },
            o = (d ? l.delegateType : l.bindType) || o,
            n = k[o] || [],
            h = h[2] && new RegExp('(^|\\.)' + p.join('\\.(?:.*\\.|)') + '(\\.|$)'),
            i = f = n.length;
            while (f--) {
              g = n[f],
              !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ('**' !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g))
            }
            i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
          } else {
            for (o in k) {
              m.event.remove(a, o + b[j], c, d, !0)
            }
          }
        }
        m.isEmptyObject(k) && (delete r.handle, m._removeData(a, 'events'))
      }
    },
    trigger: function (b, c, d, e) {
      var f,
      g,
      h,
      i,
      k,
      l,
      n,
      o = [
        d || y
      ],
      p = j.call(b, 'type') ? b.type : b,
      q = j.call(b, 'namespace') ? b.namespace.split('.')  : [
      ];
      if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf('.') >= 0 && (q = p.split('.'), p = q.shift(), q.sort()), g = p.indexOf(':') < 0 && 'on' + p, b = b[m.expando] ? b : new m.Event(p, 'object' == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join('.'), b.namespace_re = b.namespace ? new RegExp('(^|\\.)' + q.join('\\.(?:.*\\.|)') + '(\\.|$)')  : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [
        b
      ] : m.makeArray(c, [
        b
      ]), k = m.event.special[p] || {
      }, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
        if (!e && !k.noBubble && !m.isWindow(d)) {
          for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) {
            o.push(h),
            l = h
          }
          l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
        }
        n = 0;
        while ((h = o[n++]) && !b.isPropagationStopped()) {
          b.type = n > 1 ? i : k.bindType || p,
          f = (m._data(h, 'events') || {
          }) [b.type] && m._data(h, 'handle'),
          f && f.apply(h, c),
          f = g && h[g],
          f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault())
        }
        if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
          l = d[g],
          l && (d[g] = null),
          m.event.triggered = p;
          try {
            d[p]()
          } catch (r) {
          }
          m.event.triggered = void 0,
          l && (d[g] = l)
        }
        return b.result
      }
    },
    dispatch: function (a) {
      a = m.event.fix(a);
      var b,
      c,
      e,
      f,
      g,
      h = [
      ],
      i = d.call(arguments),
      j = (m._data(this, 'events') || {
      }) [a.type] || [],
      k = m.event.special[a.type] || {
      };
      if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = m.event.handlers.call(this, a, j),
        b = 0;
        while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem,
          g = 0;
          while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped()) {
            (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {
            }).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
          }
        }
        return k.postDispatch && k.postDispatch.call(this, a),
        a.result
      }
    },
    handlers: function (a, b) {
      var c,
      d,
      e,
      f,
      g = [
      ],
      h = b.delegateCount,
      i = a.target;
      if (h && i.nodeType && (!a.button || 'click' !== a.type)) {
        for (; i != this; i = i.parentNode || this) {
          if (1 === i.nodeType && (i.disabled !== !0 || 'click' !== a.type)) {
            for (e = [
            ], f = 0; h > f; f++) {
              d = b[f],
              c = d.selector + ' ',
              void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [
                i
              ]).length),
              e[c] && e.push(d)
            }
            e.length && g.push({
              elem: i,
              handlers: e
            })
          }
        }
      }
      return h < b.length && g.push({
        elem: this,
        handlers: b.slice(h)
      }),
      g
    },
    fix: function (a) {
      if (a[m.expando]) {
        return a
      }
      var b,
      c,
      d,
      e = a.type,
      f = a,
      g = this.fixHooks[e];
      g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {
      }),
      d = g.props ? this.props.concat(g.props)  : this.props,
      a = new m.Event(f),
      b = d.length;
      while (b--) {
        c = d[b],
        a[c] = f[c]
      }
      return a.target || (a.target = f.srcElement || y),
      3 === a.target.nodeType && (a.target = a.target.parentNode),
      a.metaKey = !!a.metaKey,
      g.filter ? g.filter(a, f)  : a
    },
    props: 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '),
    fixHooks: {
    },
    keyHooks: {
      props: 'char charCode key keyCode'.split(' '),
      filter: function (a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
        a
      }
    },
    mouseHooks: {
      props: 'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(' '),
      filter: function (a, b) {
        var c,
        d,
        e,
        f = b.button,
        g = b.fromElement;
        return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)),
        !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g),
        a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
        a
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function () {
          if (this !== ca() && this.focus) {
            try {
              return this.focus(),
              !1
            } catch (a) {
            }
          }
        },
        delegateType: 'focusin'
      },
      blur: {
        trigger: function () {
          return this === ca() && this.blur ? (this.blur(), !1)  : void 0
        },
        delegateType: 'focusout'
      },
      click: {
        trigger: function () {
          return m.nodeName(this, 'input') && 'checkbox' === this.type && this.click ? (this.click(), !1)  : void 0
        },
        _default: function (a) {
          return m.nodeName(a.target, 'a')
        }
      },
      beforeunload: {
        postDispatch: function (a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
        }
      }
    },
    simulate: function (a, b, c, d) {
      var e = m.extend(new m.Event, c, {
        type: a,
        isSimulated: !0,
        originalEvent: {
        }
      });
      d ? m.event.trigger(e, null, b)  : m.event.dispatch.call(b, e),
      e.isDefaultPrevented() && c.preventDefault()
    }
  },
  m.removeEvent = y.removeEventListener ? function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1)
  }
   : function (a, b, c) {
    var d = 'on' + b;
    a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
  },
  m.Event = function (a, b) {
    return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? aa : ba)  : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void (this[m.expando] = !0))  : new m.Event(a, b)
  },
  m.Event.prototype = {
    isDefaultPrevented: ba,
    isPropagationStopped: ba,
    isImmediatePropagationStopped: ba,
    preventDefault: function () {
      var a = this.originalEvent;
      this.isDefaultPrevented = aa,
      a && (a.preventDefault ? a.preventDefault()  : a.returnValue = !1)
    },
    stopPropagation: function () {
      var a = this.originalEvent;
      this.isPropagationStopped = aa,
      a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
    },
    stopImmediatePropagation: function () {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = aa,
      a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
      this.stopPropagation()
    }
  },
  m.each({
    mouseenter: 'mouseover',
    mouseleave: 'mouseout',
    pointerenter: 'pointerover',
    pointerleave: 'pointerout'
  }, function (a, b) {
    m.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function (a) {
        var c,
        d = this,
        e = a.relatedTarget,
        f = a.handleObj;
        return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b),
        c
      }
    }
  }),
  k.submitBubbles || (m.event.special.submit = {
    setup: function () {
      return m.nodeName(this, 'form') ? !1 : void m.event.add(this, 'click._submit keypress._submit', function (a) {
        var b = a.target,
        c = m.nodeName(b, 'input') || m.nodeName(b, 'button') ? b.form : void 0;
        c && !m._data(c, 'submitBubbles') && (m.event.add(c, 'submit._submit', function (a) {
          a._submit_bubble = !0
        }), m._data(c, 'submitBubbles', !0))
      })
    },
    postDispatch: function (a) {
      a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate('submit', this.parentNode, a, !0))
    },
    teardown: function () {
      return m.nodeName(this, 'form') ? !1 : void m.event.remove(this, '._submit')
    }
  }),
  k.changeBubbles || (m.event.special.change = {
    setup: function () {
      return X.test(this.nodeName) ? (('checkbox' === this.type || 'radio' === this.type) && (m.event.add(this, 'propertychange._change', function (a) {
        'checked' === a.originalEvent.propertyName && (this._just_changed = !0)
      }), m.event.add(this, 'click._change', function (a) {
        this._just_changed && !a.isTrigger && (this._just_changed = !1),
        m.event.simulate('change', this, a, !0)
      })), !1)  : void m.event.add(this, 'beforeactivate._change', function (a) {
        var b = a.target;
        X.test(b.nodeName) && !m._data(b, 'changeBubbles') && (m.event.add(b, 'change._change', function (a) {
          !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate('change', this.parentNode, a, !0)
        }), m._data(b, 'changeBubbles', !0))
      })
    },
    handle: function (a) {
      var b = a.target;
      return this !== b || a.isSimulated || a.isTrigger || 'radio' !== b.type && 'checkbox' !== b.type ? a.handleObj.handler.apply(this, arguments)  : void 0
    },
    teardown: function () {
      return m.event.remove(this, '._change'),
      !X.test(this.nodeName)
    }
  }),
  k.focusinBubbles || m.each({
    focus: 'focusin',
    blur: 'focusout'
  }, function (a, b) {
    var c = function (a) {
      m.event.simulate(b, a.target, m.event.fix(a), !0)
    };
    m.event.special[b] = {
      setup: function () {
        var d = this.ownerDocument || this,
        e = m._data(d, b);
        e || d.addEventListener(a, c, !0),
        m._data(d, b, (e || 0) + 1)
      },
      teardown: function () {
        var d = this.ownerDocument || this,
        e = m._data(d, b) - 1;
        e ? m._data(d, b, e)  : (d.removeEventListener(a, c, !0), m._removeData(d, b))
      }
    }
  }),
  m.fn.extend({
    on: function (a, b, c, d, e) {
      var f,
      g;
      if ('object' == typeof a) {
        'string' != typeof b && (c = c || b, b = void 0);
        for (f in a) {
          this.on(f, b, c, a[f], e)
        }
        return this
      }
      if (null == c && null == d ? (d = b, c = b = void 0)  : null == d && ('string' == typeof b ? (d = c, c = void 0)  : (d = c, c = b, b = void 0)), d === !1) {
        d = ba
      } else {
        if (!d) {
          return this
        }
      }
      return 1 === e && (g = d, d = function (a) {
        return m().off(a),
        g.apply(this, arguments)
      }, d.guid = g.guid || (g.guid = m.guid++)),
      this.each(function () {
        m.event.add(this, a, d, c, b)
      })
    },
    one: function (a, b, c, d) {
      return this.on(a, b, c, d, 1)
    },
    off: function (a, b, c) {
      var d,
      e;
      if (a && a.preventDefault && a.handleObj) {
        return d = a.handleObj,
        m(a.delegateTarget).off(d.namespace ? d.origType + '.' + d.namespace : d.origType, d.selector, d.handler),
        this
      }
      if ('object' == typeof a) {
        for (e in a) {
          this.off(e, b, a[e])
        }
        return this
      }
      return (b === !1 || 'function' == typeof b) && (c = b, b = void 0),
      c === !1 && (c = ba),
      this.each(function () {
        m.event.remove(this, a, c, b)
      })
    },
    trigger: function (a, b) {
      return this.each(function () {
        m.event.trigger(a, b, this)
      })
    },
    triggerHandler: function (a, b) {
      var c = this[0];
      return c ? m.event.trigger(a, b, c, !0)  : void 0
    }
  });
  function da(a) {
    var b = ea.split('|'),
    c = a.createDocumentFragment();
    if (c.createElement) {
      while (b.length) {
        c.createElement(b.pop())
      }
    }
    return c
  }
  var ea = 'abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video',
  fa = / jQuery\d+="(?:null|\d+)"/g,
  ga = new RegExp('<(?:' + ea + ')[\\s/>]', 'i'),
  ha = /^\s+/,
  ia = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
  ja = /<([\w:]+)/,
  ka = /<tbody/i,
  la = /<|&#?\w+;/,
  ma = /<(?:script|style|link)/i,
  na = /checked\s*(?:[^=]|=\s*.checked.)/i,
  oa = /^$|\/(?:java|ecma)script/i,
  pa = /^true\/(.*)/,
  qa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
  ra = {
    option: [
      1,
      '<select multiple=\'multiple\'>',
      '</select>'
    ],
    legend: [
      1,
      '<fieldset>',
      '</fieldset>'
    ],
    area: [
      1,
      '<map>',
      '</map>'
    ],
    param: [
      1,
      '<object>',
      '</object>'
    ],
    thead: [
      1,
      '<table>',
      '</table>'
    ],
    tr: [
      2,
      '<table><tbody>',
      '</tbody></table>'
    ],
    col: [
      2,
      '<table><tbody></tbody><colgroup>',
      '</colgroup></table>'
    ],
    td: [
      3,
      '<table><tbody><tr>',
      '</tr></tbody></table>'
    ],
    _default: k.htmlSerialize ? [
      0,
      '',
      ''
    ] : [
      1,
      'X<div>',
      '</div>'
    ]
  },
  sa = da(y),
  ta = sa.appendChild(y.createElement('div'));
  ra.optgroup = ra.option,
  ra.tbody = ra.tfoot = ra.colgroup = ra.caption = ra.thead,
  ra.th = ra.td;
  function ua(a, b) {
    var c,
    d,
    e = 0,
    f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || '*')  : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || '*')  : void 0;
    if (!f) {
      for (f = [
      ], c = a.childNodes || a; null != (d = c[e]); e++) {
        !b || m.nodeName(d, b) ? f.push(d)  : m.merge(f, ua(d, b))
      }
    }
    return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f)  : f
  }
  function va(a) {
    W.test(a.type) && (a.defaultChecked = a.checked)
  }
  function wa(a, b) {
    return m.nodeName(a, 'table') && m.nodeName(11 !== b.nodeType ? b : b.firstChild, 'tr') ? a.getElementsByTagName('tbody') [0] || a.appendChild(a.ownerDocument.createElement('tbody'))  : a
  }
  function xa(a) {
    return a.type = (null !== m.find.attr(a, 'type')) + '/' + a.type,
    a
  }
  function ya(a) {
    var b = pa.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute('type'),
    a
  }
  function za(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++) {
      m._data(c, 'globalEval', !b || m._data(b[d], 'globalEval'))
    }
  }
  function Aa(a, b) {
    if (1 === b.nodeType && m.hasData(a)) {
      var c,
      d,
      e,
      f = m._data(a),
      g = m._data(b, f),
      h = f.events;
      if (h) {
        delete g.handle,
        g.events = {
        };
        for (c in h) {
          for (d = 0, e = h[c].length; e > d; d++) {
            m.event.add(b, c, h[c][d])
          }
        }
      }
      g.data && (g.data = m.extend({
      }, g.data))
    }
  }
  function Ba(a, b) {
    var c,
    d,
    e;
    if (1 === b.nodeType) {
      if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
        e = m._data(b);
        for (d in e.events) {
          m.removeEvent(b, d, e.handle)
        }
        b.removeAttribute(m.expando)
      }
      'script' === c && b.text !== a.text ? (xa(b).text = a.text, ya(b))  : 'object' === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML))  : 'input' === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value))  : 'option' === c ? b.defaultSelected = b.selected = a.defaultSelected : ('input' === c || 'textarea' === c) && (b.defaultValue = a.defaultValue)
    }
  }
  m.extend({
    clone: function (a, b, c) {
      var d,
      e,
      f,
      g,
      h,
      i = m.contains(a.ownerDocument, a);
      if (k.html5Clone || m.isXMLDoc(a) || !ga.test('<' + a.nodeName + '>') ? f = a.cloneNode(!0)  : (ta.innerHTML = a.outerHTML, ta.removeChild(f = ta.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a))) {
        for (d = ua(f), h = ua(a), g = 0; null != (e = h[g]); ++g) {
          d[g] && Ba(e, d[g])
        }
      }
      if (b) {
        if (c) {
          for (h = h || ua(a), d = d || ua(f), g = 0; null != (e = h[g]); g++) {
            Aa(e, d[g])
          }
        } else {
          Aa(a, f)
        }
      }
      return d = ua(f, 'script'),
      d.length > 0 && za(d, !i && ua(a, 'script')),
      d = h = e = null,
      f
    },
    buildFragment: function (a, b, c, d) {
      for (var e, f, g, h, i, j, l, n = a.length, o = da(b), p = [
      ], q = 0; n > q; q++) {
        if (f = a[q], f || 0 === f) {
          if ('object' === m.type(f)) {
            m.merge(p, f.nodeType ? [
              f
            ] : f)
          } else {
            if (la.test(f)) {
              h = h || o.appendChild(b.createElement('div')),
              i = (ja.exec(f) || ['',
              '']) [1].toLowerCase(),
              l = ra[i] || ra._default,
              h.innerHTML = l[1] + f.replace(ia, '<$1></$2>') + l[2],
              e = l[0];
              while (e--) {
                h = h.lastChild
              }
              if (!k.leadingWhitespace && ha.test(f) && p.push(b.createTextNode(ha.exec(f) [0])), !k.tbody) {
                f = 'table' !== i || ka.test(f) ? '<table>' !== l[1] || ka.test(f) ? 0 : h : h.firstChild,
                e = f && f.childNodes.length;
                while (e--) {
                  m.nodeName(j = f.childNodes[e], 'tbody') && !j.childNodes.length && f.removeChild(j)
                }
              }
              m.merge(p, h.childNodes),
              h.textContent = '';
              while (h.firstChild) {
                h.removeChild(h.firstChild)
              }
              h = o.lastChild
            } else {
              p.push(b.createTextNode(f))
            }
          }
        }
      }
      h && o.removeChild(h),
      k.appendChecked || m.grep(ua(p, 'input'), va),
      q = 0;
      while (f = p[q++]) {
        if ((!d || - 1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ua(o.appendChild(f), 'script'), g && za(h), c)) {
          e = 0;
          while (f = h[e++]) {
            oa.test(f.type || '') && c.push(f)
          }
        }
      }
      return h = null,
      o
    },
    cleanData: function (a, b) {
      for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++) {
        if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
          if (g.events) {
            for (e in g.events) {
              n[e] ? m.event.remove(d, e)  : m.removeEvent(d, e, g.handle)
            }
          }
          j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i)  : d[i] = null, c.push(f))
        }
      }
    }
  }),
  m.fn.extend({
    text: function (a) {
      return V(this, function (a) {
        return void 0 === a ? m.text(this)  : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
      }, null, a, arguments.length)
    },
    append: function () {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = wa(this, a);
          b.appendChild(a)
        }
      })
    },
    prepend: function () {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = wa(this, a);
          b.insertBefore(a, b.firstChild)
        }
      })
    },
    before: function () {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this)
      })
    },
    after: function () {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
      })
    },
    remove: function (a, b) {
      for (var c, d = a ? m.filter(a, this)  : this, e = 0; null != (c = d[e]); e++) {
        b || 1 !== c.nodeType || m.cleanData(ua(c)),
        c.parentNode && (b && m.contains(c.ownerDocument, c) && za(ua(c, 'script')), c.parentNode.removeChild(c))
      }
      return this
    },
    empty: function () {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && m.cleanData(ua(a, !1));
        while (a.firstChild) {
          a.removeChild(a.firstChild)
        }
        a.options && m.nodeName(a, 'select') && (a.options.length = 0)
      }
      return this
    },
    clone: function (a, b) {
      return a = null == a ? !1 : a,
      b = null == b ? a : b,
      this.map(function () {
        return m.clone(this, a, b)
      })
    },
    html: function (a) {
      return V(this, function (a) {
        var b = this[0] || {
        },
        c = 0,
        d = this.length;
        if (void 0 === a) {
          return 1 === b.nodeType ? b.innerHTML.replace(fa, '')  : void 0
        }
        if (!('string' != typeof a || ma.test(a) || !k.htmlSerialize && ga.test(a) || !k.leadingWhitespace && ha.test(a) || ra[(ja.exec(a) || ['',
        '']) [1].toLowerCase()])) {
          a = a.replace(ia, '<$1></$2>');
          try {
            for (; d > c; c++) {
              b = this[c] || {
              },
              1 === b.nodeType && (m.cleanData(ua(b, !1)), b.innerHTML = a)
            }
            b = 0
          } catch (e) {
          }
        }
        b && this.empty().append(a)
      }, null, a, arguments.length)
    },
    replaceWith: function () {
      var a = arguments[0];
      return this.domManip(arguments, function (b) {
        a = this.parentNode,
        m.cleanData(ua(this)),
        a && a.replaceChild(b, this)
      }),
      a && (a.length || a.nodeType) ? this : this.remove()
    },
    detach: function (a) {
      return this.remove(a, !0)
    },
    domManip: function (a, b) {
      a = e.apply([], a);
      var c,
      d,
      f,
      g,
      h,
      i,
      j = 0,
      l = this.length,
      n = this,
      o = l - 1,
      p = a[0],
      q = m.isFunction(p);
      if (q || l > 1 && 'string' == typeof p && !k.checkClone && na.test(p)) {
        return this.each(function (c) {
          var d = n.eq(c);
          q && (a[0] = p.call(this, c, d.html())),
          d.domManip(a, b)
        })
      }
      if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
        for (g = m.map(ua(i, 'script'), xa), f = g.length; l > j; j++) {
          d = i,
          j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ua(d, 'script'))),
          b.call(this[j], d, j)
        }
        if (f) {
          for (h = g[g.length - 1].ownerDocument, m.map(g, ya), j = 0; f > j; j++) {
            d = g[j],
            oa.test(d.type || '') && !m._data(d, 'globalEval') && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src)  : m.globalEval((d.text || d.textContent || d.innerHTML || '').replace(qa, '')))
          }
        }
        i = c = null
      }
      return this
    }
  }),
  m.each({
    appendTo: 'append',
    prependTo: 'prepend',
    insertBefore: 'before',
    insertAfter: 'after',
    replaceAll: 'replaceWith'
  }, function (a, b) {
    m.fn[a] = function (a) {
      for (var c, d = 0, e = [
      ], g = m(a), h = g.length - 1; h >= d; d++) {
        c = d === h ? this : this.clone(!0),
        m(g[d]) [b](c),
        f.apply(e, c.get())
      }
      return this.pushStack(e)
    }
  });
  var Ca,
  Da = {
  };
  function Ea(b, c) {
    var d,
    e = m(c.createElement(b)).appendTo(c.body),
    f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], 'display');
    return e.detach(),
    f
  }
  function Fa(a) {
    var b = y,
    c = Da[a];
    return c || (c = Ea(a, b), 'none' !== c && c || (Ca = (Ca || m('<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>')).appendTo(b.documentElement), b = (Ca[0].contentWindow || Ca[0].contentDocument).document, b.write(), b.close(), c = Ea(a, b), Ca.detach()), Da[a] = c),
    c
  }
  !function () {
    var a;
    k.shrinkWrapBlocks = function () {
      if (null != a) {
        return a
      }
      a = !1;
      var b,
      c,
      d;
      return c = y.getElementsByTagName('body') [0],
      c && c.style ? (b = y.createElement('div'), d = y.createElement('div'), d.style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px', c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1', b.appendChild(y.createElement('div')).style.width = '5px', a = 3 !== b.offsetWidth), c.removeChild(d), a)  : void 0
    }
  }();
  var Ga = /^margin/,
  Ha = new RegExp('^(' + S + ')(?!px)[a-z%]+$', 'i'),
  Ia,
  Ja,
  Ka = /^(top|right|bottom|left)$/;
  a.getComputedStyle ? (Ia = function (b) {
    return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null)  : a.getComputedStyle(b, null)
  }, Ja = function (a, b, c) {
    var d,
    e,
    f,
    g,
    h = a.style;
    return c = c || Ia(a),
    g = c ? c.getPropertyValue(b) || c[b] : void 0,
    c && ('' !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Ha.test(g) && Ga.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)),
    void 0 === g ? g : g + ''
  })  : y.documentElement.currentStyle && (Ia = function (a) {
    return a.currentStyle
  }, Ja = function (a, b, c) {
    var d,
    e,
    f,
    g,
    h = a.style;
    return c = c || Ia(a),
    g = c ? c[b] : void 0,
    null == g && h && h[b] && (g = h[b]),
    Ha.test(g) && !Ka.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = 'fontSize' === b ? '1em' : g, g = h.pixelLeft + 'px', h.left = d, f && (e.left = f)),
    void 0 === g ? g : g + '' || 'auto'
  });
  function La(a, b) {
    return {
      get: function () {
        var c = a();
        if (null != c) {
          return c ? void delete this.get : (this.get = b).apply(this, arguments)
        }
      }
    }
  }
  !function () {
    var b,
    c,
    d,
    e,
    f,
    g,
    h;
    if (b = y.createElement('div'), b.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>', d = b.getElementsByTagName('a') [0], c = d && d.style) {
      c.cssText = 'float:left;opacity:.5',
      k.opacity = '0.5' === c.opacity,
      k.cssFloat = !!c.cssFloat,
      b.style.backgroundClip = 'content-box',
      b.cloneNode(!0).style.backgroundClip = '',
      k.clearCloneStyle = 'content-box' === b.style.backgroundClip,
      k.boxSizing = '' === c.boxSizing || '' === c.MozBoxSizing || '' === c.WebkitBoxSizing,
      m.extend(k, {
        reliableHiddenOffsets: function () {
          return null == g && i(),
          g
        },
        boxSizingReliable: function () {
          return null == f && i(),
          f
        },
        pixelPosition: function () {
          return null == e && i(),
          e
        },
        reliableMarginRight: function () {
          return null == h && i(),
          h
        }
      });
      function i() {
        var b,
        c,
        d,
        i;
        c = y.getElementsByTagName('body') [0],
        c && c.style && (b = y.createElement('div'), d = y.createElement('div'), d.style.cssText = 'position:absolute;border:0;width:0;height:0;top:0;left:-9999px', c.appendChild(d).appendChild(b), b.style.cssText = '-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute', e = f = !1, h = !0, a.getComputedStyle && (e = '1%' !== (a.getComputedStyle(b, null) || {
        }).top, f = '4px' === (a.getComputedStyle(b, null) || {
          width: '4px'
        }).width, i = b.appendChild(y.createElement('div')), i.style.cssText = b.style.cssText = '-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0', i.style.marginRight = i.style.width = '0', b.style.width = '1px', h = !parseFloat((a.getComputedStyle(i, null) || {
        }).marginRight), b.removeChild(i)), b.innerHTML = '<table><tr><td></td><td>t</td></tr></table>', i = b.getElementsByTagName('td'), i[0].style.cssText = 'margin:0;border:0;padding:0;display:none', g = 0 === i[0].offsetHeight, g && (i[0].style.display = '', i[1].style.display = 'none', g = 0 === i[0].offsetHeight), c.removeChild(d))
      }
    }
  }(),
  m.swap = function (a, b, c, d) {
    var e,
    f,
    g = {
    };
    for (f in b) {
      g[f] = a.style[f],
      a.style[f] = b[f]
    }
    e = c.apply(a, d || []);
    for (f in b) {
      a.style[f] = g[f]
    }
    return e
  };
  var Ma = /alpha\([^)]*\)/i,
  Na = /opacity\s*=\s*([^)]*)/,
  Oa = /^(none|table(?!-c[ea]).+)/,
  Pa = new RegExp('^(' + S + ')(.*)$', 'i'),
  Qa = new RegExp('^([+-])=(' + S + ')', 'i'),
  Ra = {
    position: 'absolute',
    visibility: 'hidden',
    display: 'block'
  },
  Sa = {
    letterSpacing: '0',
    fontWeight: '400'
  },
  Ta = [
    'Webkit',
    'O',
    'Moz',
    'ms'
  ];
  function Ua(a, b) {
    if (b in a) {
      return b
    }
    var c = b.charAt(0).toUpperCase() + b.slice(1),
    d = b,
    e = Ta.length;
    while (e--) {
      if (b = Ta[e] + c, b in a) {
        return b
      }
    }
    return d
  }
  function Va(a, b) {
    for (var c, d, e, f = [
    ], g = 0, h = a.length; h > g; g++) {
      d = a[g],
      d.style && (f[g] = m._data(d, 'olddisplay'), c = d.style.display, b ? (f[g] || 'none' !== c || (d.style.display = ''), '' === d.style.display && U(d) && (f[g] = m._data(d, 'olddisplay', Fa(d.nodeName))))  : (e = U(d), (c && 'none' !== c || !e) && m._data(d, 'olddisplay', e ? c : m.css(d, 'display'))))
    }
    for (g = 0; h > g; g++) {
      d = a[g],
      d.style && (b && 'none' !== d.style.display && '' !== d.style.display || (d.style.display = b ? f[g] || '' : 'none'))
    }
    return a
  }
  function Wa(a, b, c) {
    var d = Pa.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || 'px')  : b
  }
  function Xa(a, b, c, d, e) {
    for (var f = c === (d ? 'border' : 'content') ? 4 : 'width' === b ? 1 : 0, g = 0; 4 > f; f += 2) {
      'margin' === c && (g += m.css(a, c + T[f], !0, e)),
      d ? ('content' === c && (g -= m.css(a, 'padding' + T[f], !0, e)), 'margin' !== c && (g -= m.css(a, 'border' + T[f] + 'Width', !0, e)))  : (g += m.css(a, 'padding' + T[f], !0, e), 'padding' !== c && (g += m.css(a, 'border' + T[f] + 'Width', !0, e)))
    }
    return g
  }
  function Ya(a, b, c) {
    var d = !0,
    e = 'width' === b ? a.offsetWidth : a.offsetHeight,
    f = Ia(a),
    g = k.boxSizing && 'border-box' === m.css(a, 'boxSizing', !1, f);
    if (0 >= e || null == e) {
      if (e = Ja(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ha.test(e)) {
        return e
      }
      d = g && (k.boxSizingReliable() || e === a.style[b]),
      e = parseFloat(e) || 0
    }
    return e + Xa(a, b, c || (g ? 'border' : 'content'), d, f) + 'px'
  }
  m.extend({
    cssHooks: {
      opacity: {
        get: function (a, b) {
          if (b) {
            var c = Ja(a, 'opacity');
            return '' === c ? '1' : c
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      'float': k.cssFloat ? 'cssFloat' : 'styleFloat'
    },
    style: function (a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e,
        f,
        g,
        h = m.camelCase(b),
        i = a.style;
        if (b = m.cssProps[h] || (m.cssProps[h] = Ua(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) {
          return g && 'get' in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b]
        }
        if (f = typeof c, 'string' === f && (e = Qa.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = 'number'), null != c && c === c && ('number' !== f || m.cssNumber[h] || (c += 'px'), k.clearCloneStyle || '' !== c || 0 !== b.indexOf('background') || (i[b] = 'inherit'), !(g && 'set' in g && void 0 === (c = g.set(a, c, d))))) {
          try {
            i[b] = c
          } catch (j) {
          }
        }
      }
    },
    css: function (a, b, c, d) {
      var e,
      f,
      g,
      h = m.camelCase(b);
      return b = m.cssProps[h] || (m.cssProps[h] = Ua(a.style, h)),
      g = m.cssHooks[b] || m.cssHooks[h],
      g && 'get' in g && (f = g.get(a, !0, c)),
      void 0 === f && (f = Ja(a, b, d)),
      'normal' === f && b in Sa && (f = Sa[b]),
      '' === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f)  : f
    }
  }),
  m.each(['height',
  'width'], function (a, b) {
    m.cssHooks[b] = {
      get: function (a, c, d) {
        return c ? Oa.test(m.css(a, 'display')) && 0 === a.offsetWidth ? m.swap(a, Ra, function () {
          return Ya(a, b, d)
        })  : Ya(a, b, d)  : void 0
      },
      set: function (a, c, d) {
        var e = d && Ia(a);
        return Wa(a, c, d ? Xa(a, b, d, k.boxSizing && 'border-box' === m.css(a, 'boxSizing', !1, e), e)  : 0)
      }
    }
  }),
  k.opacity || (m.cssHooks.opacity = {
    get: function (a, b) {
      return Na.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || '') ? 0.01 * parseFloat(RegExp.$1) + '' : b ? '1' : ''
    },
    set: function (a, b) {
      var c = a.style,
      d = a.currentStyle,
      e = m.isNumeric(b) ? 'alpha(opacity=' + 100 * b + ')' : '',
      f = d && d.filter || c.filter || '';
      c.zoom = 1,
      (b >= 1 || '' === b) && '' === m.trim(f.replace(Ma, '')) && c.removeAttribute && (c.removeAttribute('filter'), '' === b || d && !d.filter) || (c.filter = Ma.test(f) ? f.replace(Ma, e)  : f + ' ' + e)
    }
  }),
  m.cssHooks.marginRight = La(k.reliableMarginRight, function (a, b) {
    return b ? m.swap(a, {
      display: 'inline-block'
    }, Ja, [
      a,
      'marginRight'
    ])  : void 0
  }),
  m.each({
    margin: '',
    padding: '',
    border: 'Width'
  }, function (a, b) {
    m.cssHooks[a + b] = {
      expand: function (c) {
        for (var d = 0, e = {
        }, f = 'string' == typeof c ? c.split(' ')  : [
          c
        ]; 4 > d; d++) {
          e[a + T[d] + b] = f[d] || f[d - 2] || f[0]
        }
        return e
      }
    },
    Ga.test(a) || (m.cssHooks[a + b].set = Wa)
  }),
  m.fn.extend({
    css: function (a, b) {
      return V(this, function (a, b, c) {
        var d,
        e,
        f = {
        },
        g = 0;
        if (m.isArray(b)) {
          for (d = Ia(a), e = b.length; e > g; g++) {
            f[b[g]] = m.css(a, b[g], !1, d)
          }
          return f
        }
        return void 0 !== c ? m.style(a, b, c)  : m.css(a, b)
      }, a, b, arguments.length > 1)
    },
    show: function () {
      return Va(this, !0)
    },
    hide: function () {
      return Va(this)
    },
    toggle: function (a) {
      return 'boolean' == typeof a ? a ? this.show()  : this.hide()  : this.each(function () {
        U(this) ? m(this).show()  : m(this).hide()
      })
    }
  });
  function Za(a, b, c, d, e) {
    return new Za.prototype.init(a, b, c, d, e)
  }
  m.Tween = Za,
  Za.prototype = {
    constructor: Za,
    init: function (a, b, c, d, e, f) {
      this.elem = a,
      this.prop = c,
      this.easing = e || 'swing',
      this.options = b,
      this.start = this.now = this.cur(),
      this.end = d,
      this.unit = f || (m.cssNumber[c] ? '' : 'px')
    },
    cur: function () {
      var a = Za.propHooks[this.prop];
      return a && a.get ? a.get(this)  : Za.propHooks._default.get(this)
    },
    run: function (a) {
      var b,
      c = Za.propHooks[this.prop];
      return this.options.duration ? this.pos = b = m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration)  : this.pos = b = a,
      this.now = (this.end - this.start) * b + this.start,
      this.options.step && this.options.step.call(this.elem, this.now, this),
      c && c.set ? c.set(this)  : Za.propHooks._default.set(this),
      this
    }
  },
  Za.prototype.init.prototype = Za.prototype,
  Za.propHooks = {
    _default: {
      get: function (a) {
        var b;
        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ''), b && 'auto' !== b ? b : 0)  : a.elem[a.prop]
      },
      set: function (a) {
        m.fx.step[a.prop] ? m.fx.step[a.prop](a)  : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit)  : a.elem[a.prop] = a.now
      }
    }
  },
  Za.propHooks.scrollTop = Za.propHooks.scrollLeft = {
    set: function (a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
    }
  },
  m.easing = {
    linear: function (a) {
      return a
    },
    swing: function (a) {
      return 0.5 - Math.cos(a * Math.PI) / 2
    }
  },
  m.fx = Za.prototype.init,
  m.fx.step = {
  };
  var $a,
  _a,
  ab = /^(?:toggle|show|hide)$/,
  bb = new RegExp('^(?:([+-])=|)(' + S + ')([a-z%]*)$', 'i'),
  cb = /queueHooks$/,
  db = [
    ib
  ],
  eb = {
    '*': [
      function (a, b) {
        var c = this.createTween(a, b),
        d = c.cur(),
        e = bb.exec(b),
        f = e && e[3] || (m.cssNumber[a] ? '' : 'px'),
        g = (m.cssNumber[a] || 'px' !== f && + d) && bb.exec(m.css(c.elem, a)),
        h = 1,
        i = 20;
        if (g && g[3] !== f) {
          f = f || g[3],
          e = e || [],
          g = + d || 1;
          do {
            h = h || '.5',
            g /= h,
            m.style(c.elem, a, g + f)
          } while (h !== (h = c.cur() / d) && 1 !== h && --i)
        }
        return e && (g = c.start = + g || + d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : + e[2]),
        c
      }
    ]
  };
  function fb() {
    return setTimeout(function () {
      $a = void 0
    }),
    $a = m.now()
  }
  function gb(a, b) {
    var c,
    d = {
      height: a
    },
    e = 0;
    for (b = b ? 1 : 0; 4 > e; e += 2 - b) {
      c = T[e],
      d['margin' + c] = d['padding' + c] = a
    }
    return b && (d.opacity = d.width = a),
    d
  }
  function hb(a, b, c) {
    for (var d, e = (eb[b] || []).concat(eb['*']), f = 0, g = e.length; g > f; f++) {
      if (d = e[f].call(c, b, a)) {
        return d
      }
    }
  }
  function ib(a, b, c) {
    var d,
    e,
    f,
    g,
    h,
    i,
    j,
    l,
    n = this,
    o = {
    },
    p = a.style,
    q = a.nodeType && U(a),
    r = m._data(a, 'fxshow');
    c.queue || (h = m._queueHooks(a, 'fx'), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
      h.unqueued || i()
    }), h.unqueued++, n.always(function () {
      n.always(function () {
        h.unqueued--,
        m.queue(a, 'fx').length || h.empty.fire()
      })
    })),
    1 === a.nodeType && ('height' in b || 'width' in b) && (c.overflow = [
      p.overflow,
      p.overflowX,
      p.overflowY
    ], j = m.css(a, 'display'), l = 'none' === j ? m._data(a, 'olddisplay') || Fa(a.nodeName)  : j, 'inline' === l && 'none' === m.css(a, 'float') && (k.inlineBlockNeedsLayout && 'inline' !== Fa(a.nodeName) ? p.zoom = 1 : p.display = 'inline-block')),
    c.overflow && (p.overflow = 'hidden', k.shrinkWrapBlocks() || n.always(function () {
      p.overflow = c.overflow[0],
      p.overflowX = c.overflow[1],
      p.overflowY = c.overflow[2]
    }));
    for (d in b) {
      if (e = b[d], ab.exec(e)) {
        if (delete b[d], f = f || 'toggle' === e, e === (q ? 'hide' : 'show')) {
          if ('show' !== e || !r || void 0 === r[d]) {
            continue
          }
          q = !0
        }
        o[d] = r && r[d] || m.style(a, d)
      } else {
        j = void 0
      }
    }
    if (m.isEmptyObject(o)) {
      'inline' === ('none' === j ? Fa(a.nodeName)  : j) && (p.display = j)
    } else {
      r ? 'hidden' in r && (q = r.hidden)  : r = m._data(a, 'fxshow', {
      }),
      f && (r.hidden = !q),
      q ? m(a).show()  : n.done(function () {
        m(a).hide()
      }),
      n.done(function () {
        var b;
        m._removeData(a, 'fxshow');
        for (b in o) {
          m.style(a, b, o[b])
        }
      });
      for (d in o) {
        g = hb(q ? r[d] : 0, d, n),
        d in r || (r[d] = g.start, q && (g.end = g.start, g.start = 'width' === d || 'height' === d ? 1 : 0))
      }
    }
  }
  function jb(a, b) {
    var c,
    d,
    e,
    f,
    g;
    for (c in a) {
      if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && 'expand' in g) {
        f = g.expand(f),
        delete a[d];
        for (c in f) {
          c in a || (a[c] = f[c], b[c] = e)
        }
      } else {
        b[d] = e
      }
    }
  }
  function kb(a, b, c) {
    var d,
    e,
    f = 0,
    g = db.length,
    h = m.Deferred().always(function () {
      delete i.elem
    }),
    i = function () {
      if (e) {
        return !1
      }
      for (var b = $a || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
        j.tweens[g].run(f)
      }
      return h.notifyWith(a, [
        j,
        f,
        c
      ]),
      1 > f && i ? c : (h.resolveWith(a, [
        j
      ]), !1)
    },
    j = h.promise({
      elem: a,
      props: m.extend({
      }, b),
      opts: m.extend(!0, {
        specialEasing: {
        }
      }, c),
      originalProperties: b,
      originalOptions: c,
      startTime: $a || fb(),
      duration: c.duration,
      tweens: [
      ],
      createTween: function (b, c) {
        var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
        return j.tweens.push(d),
        d
      },
      stop: function (b) {
        var c = 0,
        d = b ? j.tweens.length : 0;
        if (e) {
          return this
        }
        for (e = !0; d > c; c++) {
          j.tweens[c].run(1)
        }
        return b ? h.resolveWith(a, [
          j,
          b
        ])  : h.rejectWith(a, [
          j,
          b
        ]),
        this
      }
    }),
    k = j.props;
    for (jb(k, j.opts.specialEasing); g > f; f++) {
      if (d = db[f].call(j, a, k, j.opts)) {
        return d
      }
    }
    return m.map(k, hb, j),
    m.isFunction(j.opts.start) && j.opts.start.call(a, j),
    m.fx.timer(m.extend(i, {
      elem: a,
      anim: j,
      queue: j.opts.queue
    })),
    j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
  }
  m.Animation = m.extend(kb, {
    tweener: function (a, b) {
      m.isFunction(a) ? (b = a, a = [
        '*'
      ])  : a = a.split(' ');
      for (var c, d = 0, e = a.length; e > d; d++) {
        c = a[d],
        eb[c] = eb[c] || [],
        eb[c].unshift(b)
      }
    },
    prefilter: function (a, b) {
      b ? db.unshift(a)  : db.push(a)
    }
  }),
  m.speed = function (a, b, c) {
    var d = a && 'object' == typeof a ? m.extend({
    }, a)  : {
      complete: c || !c && b || m.isFunction(a) && a,
      duration: a,
      easing: c && b || b && !m.isFunction(b) && b
    };
    return d.duration = m.fx.off ? 0 : 'number' == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default,
    (null == d.queue || d.queue === !0) && (d.queue = 'fx'),
    d.old = d.complete,
    d.complete = function () {
      m.isFunction(d.old) && d.old.call(this),
      d.queue && m.dequeue(this, d.queue)
    },
    d
  },
  m.fn.extend({
    fadeTo: function (a, b, c, d) {
      return this.filter(U).css('opacity', 0).show().end().animate({
        opacity: b
      }, a, c, d)
    },
    animate: function (a, b, c, d) {
      var e = m.isEmptyObject(a),
      f = m.speed(b, c, d),
      g = function () {
        var b = kb(this, m.extend({
        }, a), f);
        (e || m._data(this, 'finish')) && b.stop(!0)
      };
      return g.finish = g,
      e || f.queue === !1 ? this.each(g)  : this.queue(f.queue, g)
    },
    stop: function (a, b, c) {
      var d = function (a) {
        var b = a.stop;
        delete a.stop,
        b(c)
      };
      return 'string' != typeof a && (c = b, b = a, a = void 0),
      b && a !== !1 && this.queue(a || 'fx', [
      ]),
      this.each(function () {
        var b = !0,
        e = null != a && a + 'queueHooks',
        f = m.timers,
        g = m._data(this);
        if (e) {
          g[e] && g[e].stop && d(g[e])
        } else {
          for (e in g) {
            g[e] && g[e].stop && cb.test(e) && d(g[e])
          }
        }
        for (e = f.length; e--; ) {
          f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1))
        }(b || !c) && m.dequeue(this, a)
      })
    },
    finish: function (a) {
      return a !== !1 && (a = a || 'fx'),
      this.each(function () {
        var b,
        c = m._data(this),
        d = c[a + 'queue'],
        e = c[a + 'queueHooks'],
        f = m.timers,
        g = d ? d.length : 0;
        for (c.finish = !0, m.queue(this, a, [
        ]), e && e.stop && e.stop.call(this, !0), b = f.length; b--; ) {
          f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1))
        }
        for (b = 0; g > b; b++) {
          d[b] && d[b].finish && d[b].finish.call(this)
        }
        delete c.finish
      })
    }
  }),
  m.each(['toggle',
  'show',
  'hide'], function (a, b) {
    var c = m.fn[b];
    m.fn[b] = function (a, d, e) {
      return null == a || 'boolean' == typeof a ? c.apply(this, arguments)  : this.animate(gb(b, !0), a, d, e)
    }
  }),
  m.each({
    slideDown: gb('show'),
    slideUp: gb('hide'),
    slideToggle: gb('toggle'),
    fadeIn: {
      opacity: 'show'
    },
    fadeOut: {
      opacity: 'hide'
    },
    fadeToggle: {
      opacity: 'toggle'
    }
  }, function (a, b) {
    m.fn[a] = function (a, c, d) {
      return this.animate(b, a, c, d)
    }
  }),
  m.timers = [
  ],
  m.fx.tick = function () {
    var a,
    b = m.timers,
    c = 0;
    for ($a = m.now(); c < b.length; c++) {
      a = b[c],
      a() || b[c] !== a || b.splice(c--, 1)
    }
    b.length || m.fx.stop(),
    $a = void 0
  },
  m.fx.timer = function (a) {
    m.timers.push(a),
    a() ? m.fx.start()  : m.timers.pop()
  },
  m.fx.interval = 13,
  m.fx.start = function () {
    _a || (_a = setInterval(m.fx.tick, m.fx.interval))
  },
  m.fx.stop = function () {
    clearInterval(_a),
    _a = null
  },
  m.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  },
  m.fn.delay = function (a, b) {
    return a = m.fx ? m.fx.speeds[a] || a : a,
    b = b || 'fx',
    this.queue(b, function (b, c) {
      var d = setTimeout(b, a);
      c.stop = function () {
        clearTimeout(d)
      }
    })
  },
  function () {
    var a,
    b,
    c,
    d,
    e;
    b = y.createElement('div'),
    b.setAttribute('className', 't'),
    b.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>',
    d = b.getElementsByTagName('a') [0],
    c = y.createElement('select'),
    e = c.appendChild(y.createElement('option')),
    a = b.getElementsByTagName('input') [0],
    d.style.cssText = 'top:1px',
    k.getSetAttribute = 't' !== b.className,
    k.style = /top/.test(d.getAttribute('style')),
    k.hrefNormalized = '/a' === d.getAttribute('href'),
    k.checkOn = !!a.value,
    k.optSelected = e.selected,
    k.enctype = !!y.createElement('form').enctype,
    c.disabled = !0,
    k.optDisabled = !e.disabled,
    a = y.createElement('input'),
    a.setAttribute('value', ''),
    k.input = '' === a.getAttribute('value'),
    a.value = 't',
    a.setAttribute('type', 'radio'),
    k.radioValue = 't' === a.value
  }();
  var lb = /\r/g;
  m.fn.extend({
    val: function (a) {
      var b,
      c,
      d,
      e = this[0];
      if (arguments.length) {
        return d = m.isFunction(a),
        this.each(function (c) {
          var e;
          1 === this.nodeType && (e = d ? a.call(this, c, m(this).val())  : a, null == e ? e = '' : 'number' == typeof e ? e += '' : m.isArray(e) && (e = m.map(e, function (a) {
            return null == a ? '' : a + ''
          })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && 'set' in b && void 0 !== b.set(this, e, 'value') || (this.value = e))
        })
      }
      if (e) {
        return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()],
        b && 'get' in b && void 0 !== (c = b.get(e, 'value')) ? c : (c = e.value, 'string' == typeof c ? c.replace(lb, '')  : null == c ? '' : c)
      }
    }
  }),
  m.extend({
    valHooks: {
      option: {
        get: function (a) {
          var b = m.find.attr(a, 'value');
          return null != b ? b : m.trim(m.text(a))
        }
      },
      select: {
        get: function (a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = 'select-one' === a.type || 0 > e, g = f ? null : [
          ], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
            if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute('disabled')) || c.parentNode.disabled && m.nodeName(c.parentNode, 'optgroup'))) {
              if (b = m(c).val(), f) {
                return b
              }
              g.push(b)
            }
          }
          return g
        },
        set: function (a, b) {
          var c,
          d,
          e = a.options,
          f = m.makeArray(b),
          g = e.length;
          while (g--) {
            if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) {
              try {
                d.selected = c = !0
              } catch (h) {
                d.scrollHeight
              }
            } else {
              d.selected = !1
            }
          }
          return c || (a.selectedIndex = - 1),
          e
        }
      }
    }
  }),
  m.each(['radio',
  'checkbox'], function () {
    m.valHooks[this] = {
      set: function (a, b) {
        return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
      }
    },
    k.checkOn || (m.valHooks[this].get = function (a) {
      return null === a.getAttribute('value') ? 'on' : a.value
    })
  });
  var mb,
  nb,
  ob = m.expr.attrHandle,
  pb = /^(?:checked|selected)$/i,
  qb = k.getSetAttribute,
  rb = k.input;
  m.fn.extend({
    attr: function (a, b) {
      return V(this, m.attr, a, b, arguments.length > 1)
    },
    removeAttr: function (a) {
      return this.each(function () {
        m.removeAttr(this, a)
      })
    }
  }),
  m.extend({
    attr: function (a, b, c) {
      var d,
      e,
      f = a.nodeType;
      if (a && 3 !== f && 8 !== f && 2 !== f) {
        return typeof a.getAttribute === K ? m.prop(a, b, c)  : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nb : mb)), void 0 === c ? d && 'get' in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e)  : null !== c ? d && 'set' in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ''), c)  : void m.removeAttr(a, b))
      }
    },
    removeAttr: function (a, b) {
      var c,
      d,
      e = 0,
      f = b && b.match(E);
      if (f && 1 === a.nodeType) {
        while (c = f[e++]) {
          d = m.propFix[c] || c,
          m.expr.match.bool.test(c) ? rb && qb || !pb.test(c) ? a[d] = !1 : a[m.camelCase('default-' + c)] = a[d] = !1 : m.attr(a, c, ''),
          a.removeAttribute(qb ? c : d)
        }
      }
    },
    attrHooks: {
      type: {
        set: function (a, b) {
          if (!k.radioValue && 'radio' === b && m.nodeName(a, 'input')) {
            var c = a.value;
            return a.setAttribute('type', b),
            c && (a.value = c),
            b
          }
        }
      }
    }
  }),
  nb = {
    set: function (a, b, c) {
      return b === !1 ? m.removeAttr(a, c)  : rb && qb || !pb.test(c) ? a.setAttribute(!qb && m.propFix[c] || c, c)  : a[m.camelCase('default-' + c)] = a[c] = !0,
      c
    }
  },
  m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = ob[b] || m.find.attr;
    ob[b] = rb && qb || !pb.test(b) ? function (a, b, d) {
      var e,
      f;
      return d || (f = ob[b], ob[b] = e, e = null != c(a, b, d) ? b.toLowerCase()  : null, ob[b] = f),
      e
    }
     : function (a, b, c) {
      return c ? void 0 : a[m.camelCase('default-' + b)] ? b.toLowerCase()  : null
    }
  }),
  rb && qb || (m.attrHooks.value = {
    set: function (a, b, c) {
      return m.nodeName(a, 'input') ? void (a.defaultValue = b)  : mb && mb.set(a, b, c)
    }
  }),
  qb || (mb = {
    set: function (a, b, c) {
      var d = a.getAttributeNode(c);
      return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)),
      d.value = b += '',
      'value' === c || b === a.getAttribute(c) ? b : void 0
    }
  }, ob.id = ob.name = ob.coords = function (a, b, c) {
    var d;
    return c ? void 0 : (d = a.getAttributeNode(b)) && '' !== d.value ? d.value : null
  }, m.valHooks.button = {
    get: function (a, b) {
      var c = a.getAttributeNode(b);
      return c && c.specified ? c.value : void 0
    },
    set: mb.set
  }, m.attrHooks.contenteditable = {
    set: function (a, b, c) {
      mb.set(a, '' === b ? !1 : b, c)
    }
  }, m.each(['width',
  'height'], function (a, b) {
    m.attrHooks[b] = {
      set: function (a, c) {
        return '' === c ? (a.setAttribute(b, 'auto'), c)  : void 0
      }
    }
  })),
  k.style || (m.attrHooks.style = {
    get: function (a) {
      return a.style.cssText || void 0
    },
    set: function (a, b) {
      return a.style.cssText = b + ''
    }
  });
  var sb = /^(?:input|select|textarea|button|object)$/i,
  tb = /^(?:a|area)$/i;
  m.fn.extend({
    prop: function (a, b) {
      return V(this, m.prop, a, b, arguments.length > 1)
    },
    removeProp: function (a) {
      return a = m.propFix[a] || a,
      this.each(function () {
        try {
          this[a] = void 0,
          delete this[a]
        } catch (b) {
        }
      })
    }
  }),
  m.extend({
    propFix: {
      'for': 'htmlFor',
      'class': 'className'
    },
    prop: function (a, b, c) {
      var d,
      e,
      f,
      g = a.nodeType;
      if (a && 3 !== g && 8 !== g && 2 !== g) {
        return f = 1 !== g || !m.isXMLDoc(a),
        f && (b = m.propFix[b] || b, e = m.propHooks[b]),
        void 0 !== c ? e && 'set' in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && 'get' in e && null !== (d = e.get(a, b)) ? d : a[b]
      }
    },
    propHooks: {
      tabIndex: {
        get: function (a) {
          var b = m.find.attr(a, 'tabindex');
          return b ? parseInt(b, 10)  : sb.test(a.nodeName) || tb.test(a.nodeName) && a.href ? 0 : - 1
        }
      }
    }
  }),
  k.hrefNormalized || m.each(['href',
  'src'], function (a, b) {
    m.propHooks[b] = {
      get: function (a) {
        return a.getAttribute(b, 4)
      }
    }
  }),
  k.optSelected || (m.propHooks.selected = {
    get: function (a) {
      var b = a.parentNode;
      return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex),
      null
    }
  }),
  m.each(['tabIndex',
  'readOnly',
  'maxLength',
  'cellSpacing',
  'cellPadding',
  'rowSpan',
  'colSpan',
  'useMap',
  'frameBorder',
  'contentEditable'], function () {
    m.propFix[this.toLowerCase()] = this
  }),
  k.enctype || (m.propFix.enctype = 'encoding');
  var ub = /[\t\r\n\f]/g;
  m.fn.extend({
    addClass: function (a) {
      var b,
      c,
      d,
      e,
      f,
      g,
      h = 0,
      i = this.length,
      j = 'string' == typeof a && a;
      if (m.isFunction(a)) {
        return this.each(function (b) {
          m(this).addClass(a.call(this, b, this.className))
        })
      }
      if (j) {
        for (b = (a || '').match(E) || []; i > h; h++) {
          if (c = this[h], d = 1 === c.nodeType && (c.className ? (' ' + c.className + ' ').replace(ub, ' ')  : ' ')) {
            f = 0;
            while (e = b[f++]) {
              d.indexOf(' ' + e + ' ') < 0 && (d += e + ' ')
            }
            g = m.trim(d),
            c.className !== g && (c.className = g)
          }
        }
      }
      return this
    },
    removeClass: function (a) {
      var b,
      c,
      d,
      e,
      f,
      g,
      h = 0,
      i = this.length,
      j = 0 === arguments.length || 'string' == typeof a && a;
      if (m.isFunction(a)) {
        return this.each(function (b) {
          m(this).removeClass(a.call(this, b, this.className))
        })
      }
      if (j) {
        for (b = (a || '').match(E) || []; i > h; h++) {
          if (c = this[h], d = 1 === c.nodeType && (c.className ? (' ' + c.className + ' ').replace(ub, ' ')  : '')) {
            f = 0;
            while (e = b[f++]) {
              while (d.indexOf(' ' + e + ' ') >= 0) {
                d = d.replace(' ' + e + ' ', ' ')
              }
            }
            g = a ? m.trim(d)  : '',
            c.className !== g && (c.className = g)
          }
        }
      }
      return this
    },
    toggleClass: function (a, b) {
      var c = typeof a;
      return 'boolean' == typeof b && 'string' === c ? b ? this.addClass(a)  : this.removeClass(a)  : this.each(m.isFunction(a) ? function (c) {
        m(this).toggleClass(a.call(this, c, this.className, b), b)
      }
       : function () {
        if ('string' === c) {
          var b,
          d = 0,
          e = m(this),
          f = a.match(E) || [];
          while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b)  : e.addClass(b)
          }
        } else {
          (c === K || 'boolean' === c) && (this.className && m._data(this, '__className__', this.className), this.className = this.className || a === !1 ? '' : m._data(this, '__className__') || '')
        }
      })
    },
    hasClass: function (a) {
      for (var b = ' ' + a + ' ', c = 0, d = this.length; d > c; c++) {
        if (1 === this[c].nodeType && (' ' + this[c].className + ' ').replace(ub, ' ').indexOf(b) >= 0) {
          return !0
        }
      }
      return !1
    }
  }),
  m.each('blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(' '), function (a, b) {
    m.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c)  : this.trigger(b)
    }
  }),
  m.fn.extend({
    hover: function (a, b) {
      return this.mouseenter(a).mouseleave(b || a)
    },
    bind: function (a, b, c) {
      return this.on(a, null, b, c)
    },
    unbind: function (a, b) {
      return this.off(a, null, b)
    },
    delegate: function (a, b, c, d) {
      return this.on(b, a, c, d)
    },
    undelegate: function (a, b, c) {
      return 1 === arguments.length ? this.off(a, '**')  : this.off(b, a || '**', c)
    }
  });
  var vb = m.now(),
  wb = /\?/,
  xb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  m.parseJSON = function (b) {
    if (a.JSON && a.JSON.parse) {
      return a.JSON.parse(b + '')
    }
    var c,
    d = null,
    e = m.trim(b + '');
    return e && !m.trim(e.replace(xb, function (a, b, e, f) {
      return c && b && (d = 0),
      0 === d ? a : (c = e || b, d += !f - !e, '')
    })) ? Function('return ' + e) ()  : m.error('Invalid JSON: ' + b)
  },
  m.parseXML = function (b) {
    var c,
    d;
    if (!b || 'string' != typeof b) {
      return null
    }
    try {
      a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, 'text/xml'))  : (c = new ActiveXObject('Microsoft.XMLDOM'), c.async = 'false', c.loadXML(b))
    } catch (e) {
      c = void 0
    }
    return c && c.documentElement && !c.getElementsByTagName('parsererror').length || m.error('Invalid XML: ' + b),
    c
  };
  var yb,
  zb,
  Ab = /#.*$/,
  Bb = /([?&])_=[^&]*/,
  Cb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
  Db = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
  Eb = /^(?:GET|HEAD)$/,
  Fb = /^\/\//,
  Gb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
  Hb = {
  },
  Ib = {
  },
  Jb = '*/'.concat('*');
  try {
    zb = location.href
  } catch (Kb) {
    zb = y.createElement('a'),
    zb.href = '',
    zb = zb.href
  }
  yb = Gb.exec(zb.toLowerCase()) || [];
  function Lb(a) {
    return function (b, c) {
      'string' != typeof b && (c = b, b = '*');
      var d,
      e = 0,
      f = b.toLowerCase().match(E) || [];
      if (m.isFunction(c)) {
        while (d = f[e++]) {
          '+' === d.charAt(0) ? (d = d.slice(1) || '*', (a[d] = a[d] || []).unshift(c))  : (a[d] = a[d] || []).push(c)
        }
      }
    }
  }
  function Mb(a, b, c, d) {
    var e = {
    },
    f = a === Ib;
    function g(h) {
      var i;
      return e[h] = !0,
      m.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);
        return 'string' != typeof j || f || e[j] ? f ? !(i = j)  : void 0 : (b.dataTypes.unshift(j), g(j), !1)
      }),
      i
    }
    return g(b.dataTypes[0]) || !e['*'] && g('*')
  }
  function Nb(a, b) {
    var c,
    d,
    e = m.ajaxSettings.flatOptions || {
    };
    for (d in b) {
      void 0 !== b[d] && ((e[d] ? a : c || (c = {
      })) [d] = b[d])
    }
    return c && m.extend(!0, a, c),
    a
  }
  function Ob(a, b, c) {
    var d,
    e,
    f,
    g,
    h = a.contents,
    i = a.dataTypes;
    while ('*' === i[0]) {
      i.shift(),
      void 0 === e && (e = a.mimeType || b.getResponseHeader('Content-Type'))
    }
    if (e) {
      for (g in h) {
        if (h[g] && h[g].test(e)) {
          i.unshift(g);
          break
        }
      }
    }
    if (i[0] in c) {
      f = i[0]
    } else {
      for (g in c) {
        if (!i[0] || a.converters[g + ' ' + i[0]]) {
          f = g;
          break
        }
        d || (d = g)
      }
      f = f || d
    }
    return f ? (f !== i[0] && i.unshift(f), c[f])  : void 0
  }
  function Pb(a, b, c, d) {
    var e,
    f,
    g,
    h,
    i,
    j = {
    },
    k = a.dataTypes.slice();
    if (k[1]) {
      for (g in a.converters) {
        j[g.toLowerCase()] = a.converters[g]
      }
    }
    f = k.shift();
    while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) {
        if ('*' === f) {
          f = i
        } else {
          if ('*' !== i && i !== f) {
            if (g = j[i + ' ' + f] || j['* ' + f], !g) {
              for (e in j) {
                if (h = e.split(' '), h[1] === f && (g = j[i + ' ' + h[0]] || j['* ' + h[0]])) {
                  g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                  break
                }
              }
            }
            if (g !== !0) {
              if (g && a['throws']) {
                b = g(b)
              } else {
                try {
                  b = g(b)
                } catch (l) {
                  return {
                    state: 'parsererror',
                    error: g ? l : 'No conversion from ' + i + ' to ' + f
                  }
                }
              }
            }
          }
        }
      }
    }
    return {
      state: 'success',
      data: b
    }
  }
  m.extend({
    active: 0,
    lastModified: {
    },
    etag: {
    },
    ajaxSettings: {
      url: zb,
      type: 'GET',
      isLocal: Db.test(yb[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      accepts: {
        '*': Jb,
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript'
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: 'responseXML',
        text: 'responseText',
        json: 'responseJSON'
      },
      converters: {
        '* text': String,
        'text html': !0,
        'text json': m.parseJSON,
        'text xml': m.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function (a, b) {
      return b ? Nb(Nb(a, m.ajaxSettings), b)  : Nb(m.ajaxSettings, a)
    },
    ajaxPrefilter: Lb(Hb),
    ajaxTransport: Lb(Ib),
    ajax: function (a, b) {
      'object' == typeof a && (b = a, a = void 0),
      b = b || {
      };
      var c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k = m.ajaxSetup({
      }, b),
      l = k.context || k,
      n = k.context && (l.nodeType || l.jquery) ? m(l)  : m.event,
      o = m.Deferred(),
      p = m.Callbacks('once memory'),
      q = k.statusCode || {
      },
      r = {
      },
      s = {
      },
      t = 0,
      u = 'canceled',
      v = {
        readyState: 0,
        getResponseHeader: function (a) {
          var b;
          if (2 === t) {
            if (!j) {
              j = {
              };
              while (b = Cb.exec(f)) {
                j[b[1].toLowerCase()] = b[2]
              }
            }
            b = j[a.toLowerCase()]
          }
          return null == b ? null : b
        },
        getAllResponseHeaders: function () {
          return 2 === t ? f : null
        },
        setRequestHeader: function (a, b) {
          var c = a.toLowerCase();
          return t || (a = s[c] = s[c] || a, r[a] = b),
          this
        },
        overrideMimeType: function (a) {
          return t || (k.mimeType = a),
          this
        },
        statusCode: function (a) {
          var b;
          if (a) {
            if (2 > t) {
              for (b in a) {
                q[b] = [
                  q[b],
                  a[b]
                ]
              }
            } else {
              v.always(a[v.status])
            }
          }
          return this
        },
        abort: function (a) {
          var b = a || u;
          return i && i.abort(b),
          x(0, b),
          this
        }
      };
      if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zb) + '').replace(Ab, '').replace(Fb, yb[1] + '//'), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || '*').toLowerCase().match(E) || [''], null == k.crossDomain && (c = Gb.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yb[1] && c[2] === yb[2] && (c[3] || ('http:' === c[1] ? '80' : '443')) === (yb[3] || ('http:' === yb[1] ? '80' : '443')))), k.data && k.processData && 'string' != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mb(Hb, k, b, v), 2 === t) {
        return v
      }
      h = m.event && k.global,
      h && 0 === m.active++ && m.event.trigger('ajaxStart'),
      k.type = k.type.toUpperCase(),
      k.hasContent = !Eb.test(k.type),
      e = k.url,
      k.hasContent || (k.data && (e = k.url += (wb.test(e) ? '&' : '?') + k.data, delete k.data), k.cache === !1 && (k.url = Bb.test(e) ? e.replace(Bb, '$1_=' + vb++)  : e + (wb.test(e) ? '&' : '?') + '_=' + vb++)),
      k.ifModified && (m.lastModified[e] && v.setRequestHeader('If-Modified-Since', m.lastModified[e]), m.etag[e] && v.setRequestHeader('If-None-Match', m.etag[e])),
      (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader('Content-Type', k.contentType),
      v.setRequestHeader('Accept', k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ('*' !== k.dataTypes[0] ? ', ' + Jb + '; q=0.01' : '')  : k.accepts['*']);
      for (d in k.headers) {
        v.setRequestHeader(d, k.headers[d])
      }
      if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) {
        return v.abort()
      }
      u = 'abort';
      for (d in {
        success: 1,
        error: 1,
        complete: 1
      }) {
        v[d](k[d])
      }
      if (i = Mb(Ib, k, b, v)) {
        v.readyState = 1,
        h && n.trigger('ajaxSend', [
          v,
          k
        ]),
        k.async && k.timeout > 0 && (g = setTimeout(function () {
          v.abort('timeout')
        }, k.timeout));
        try {
          t = 1,
          i.send(r, x)
        } catch (w) {
          if (!(2 > t)) {
            throw w
          }
          x( - 1, w)
        }
      } else {
        x( - 1, 'No Transport')
      }
      function x(a, b, c, d) {
        var j,
        r,
        s,
        u,
        w,
        x = b;
        2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || '', v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Ob(k, v, c)), u = Pb(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader('Last-Modified'), w && (m.lastModified[e] = w), w = v.getResponseHeader('etag'), w && (m.etag[e] = w)), 204 === a || 'HEAD' === k.type ? x = 'nocontent' : 304 === a ? x = 'notmodified' : (x = u.state, r = u.data, s = u.error, j = !s))  : (s = x, (a || !x) && (x = 'error', 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + '', j ? o.resolveWith(l, [
          r,
          x,
          v
        ])  : o.rejectWith(l, [
          v,
          x,
          s
        ]), v.statusCode(q), q = void 0, h && n.trigger(j ? 'ajaxSuccess' : 'ajaxError', [
          v,
          k,
          j ? r : s
        ]), p.fireWith(l, [
          v,
          x
        ]), h && (n.trigger('ajaxComplete', [
          v,
          k
        ]), --m.active || m.event.trigger('ajaxStop')))
      }
      return v
    },
    getJSON: function (a, b, c) {
      return m.get(a, b, c, 'json')
    },
    getScript: function (a, b) {
      return m.get(a, void 0, b, 'script')
    }
  }),
  m.each(['get',
  'post'], function (a, b) {
    m[b] = function (a, c, d, e) {
      return m.isFunction(c) && (e = e || d, d = c, c = void 0),
      m.ajax({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      })
    }
  }),
  m._evalUrl = function (a) {
    return m.ajax({
      url: a,
      type: 'GET',
      dataType: 'script',
      async: !1,
      global: !1,
      'throws': !0
    })
  },
  m.fn.extend({
    wrapAll: function (a) {
      if (m.isFunction(a)) {
        return this.each(function (b) {
          m(this).wrapAll(a.call(this, b))
        })
      }
      if (this[0]) {
        var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && b.insertBefore(this[0]),
        b.map(function () {
          var a = this;
          while (a.firstChild && 1 === a.firstChild.nodeType) {
            a = a.firstChild
          }
          return a
        }).append(this)
      }
      return this
    },
    wrapInner: function (a) {
      return this.each(m.isFunction(a) ? function (b) {
        m(this).wrapInner(a.call(this, b))
      }
       : function () {
        var b = m(this),
        c = b.contents();
        c.length ? c.wrapAll(a)  : b.append(a)
      })
    },
    wrap: function (a) {
      var b = m.isFunction(a);
      return this.each(function (c) {
        m(this).wrapAll(b ? a.call(this, c)  : a)
      })
    },
    unwrap: function () {
      return this.parent().each(function () {
        m.nodeName(this, 'body') || m(this).replaceWith(this.childNodes)
      }).end()
    }
  }),
  m.expr.filters.hidden = function (a) {
    return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && 'none' === (a.style && a.style.display || m.css(a, 'display'))
  },
  m.expr.filters.visible = function (a) {
    return !m.expr.filters.hidden(a)
  };
  var Qb = /%20/g,
  Rb = /\[\]$/,
  Sb = /\r?\n/g,
  Tb = /^(?:submit|button|image|reset|file)$/i,
  Ub = /^(?:input|select|textarea|keygen)/i;
  function Vb(a, b, c, d) {
    var e;
    if (m.isArray(b)) {
      m.each(b, function (b, e) {
        c || Rb.test(a) ? d(a, e)  : Vb(a + '[' + ('object' == typeof e ? b : '') + ']', e, c, d)
      })
    } else {
      if (c || 'object' !== m.type(b)) {
        d(a, b)
      } else {
        for (e in b) {
          Vb(a + '[' + e + ']', b[e], c, d)
        }
      }
    }
  }
  m.param = function (a, b) {
    var c,
    d = [
    ],
    e = function (a, b) {
      b = m.isFunction(b) ? b()  : null == b ? '' : b,
      d[d.length] = encodeURIComponent(a) + '=' + encodeURIComponent(b)
    };
    if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) {
      m.each(a, function () {
        e(this.name, this.value)
      })
    } else {
      for (c in a) {
        Vb(c, a[c], b, e)
      }
    }
    return d.join('&').replace(Qb, '+')
  },
  m.fn.extend({
    serialize: function () {
      return m.param(this.serializeArray())
    },
    serializeArray: function () {
      return this.map(function () {
        var a = m.prop(this, 'elements');
        return a ? m.makeArray(a)  : this
      }).filter(function () {
        var a = this.type;
        return this.name && !m(this).is(':disabled') && Ub.test(this.nodeName) && !Tb.test(a) && (this.checked || !W.test(a))
      }).map(function (a, b) {
        var c = m(this).val();
        return null == c ? null : m.isArray(c) ? m.map(c, function (a) {
          return {
            name: b.name,
            value: a.replace(Sb, '\r\n')
          }
        })  : {
          name: b.name,
          value: c.replace(Sb, '\r\n')
        }
      }).get()
    }
  }),
  m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
    return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zb() || $b()
  }
   : Zb;
  var Wb = 0,
  Xb = {
  },
  Yb = m.ajaxSettings.xhr();
  a.attachEvent && a.attachEvent('onunload', function () {
    for (var a in Xb) {
      Xb[a](void 0, !0)
    }
  }),
  k.cors = !!Yb && 'withCredentials' in Yb,
  Yb = k.ajax = !!Yb,
  Yb && m.ajaxTransport(function (a) {
    if (!a.crossDomain || k.cors) {
      var b;
      return {
        send: function (c, d) {
          var e,
          f = a.xhr(),
          g = ++Wb;
          if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) {
            for (e in a.xhrFields) {
              f[e] = a.xhrFields[e]
            }
          }
          a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType),
          a.crossDomain || c['X-Requested-With'] || (c['X-Requested-With'] = 'XMLHttpRequest');
          for (e in c) {
            void 0 !== c[e] && f.setRequestHeader(e, c[e] + '')
          }
          f.send(a.hasContent && a.data || null),
          b = function (c, e) {
            var h,
            i,
            j;
            if (b && (e || 4 === f.readyState)) {
              if (delete Xb[g], b = void 0, f.onreadystatechange = m.noop, e) {
                4 !== f.readyState && f.abort()
              } else {
                j = {
                },
                h = f.status,
                'string' == typeof f.responseText && (j.text = f.responseText);
                try {
                  i = f.statusText
                } catch (k) {
                  i = ''
                }
                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204)  : h = j.text ? 200 : 404
              }
            }
            j && d(h, i, j, f.getAllResponseHeaders())
          },
          a.async ? 4 === f.readyState ? setTimeout(b)  : f.onreadystatechange = Xb[g] = b : b()
        },
        abort: function () {
          b && b(void 0, !0)
        }
      }
    }
  });
  function Zb() {
    try {
      return new a.XMLHttpRequest
    } catch (b) {
    }
  }
  function $b() {
    try {
      return new a.ActiveXObject('Microsoft.XMLHTTP')
    } catch (b) {
    }
  }
  m.ajaxSetup({
    accepts: {
      script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      'text script': function (a) {
        return m.globalEval(a),
        a
      }
    }
  }),
  m.ajaxPrefilter('script', function (a) {
    void 0 === a.cache && (a.cache = !1),
    a.crossDomain && (a.type = 'GET', a.global = !1)
  }),
  m.ajaxTransport('script', function (a) {
    if (a.crossDomain) {
      var b,
      c = y.head || m('head') [0] || y.documentElement;
      return {
        send: function (d, e) {
          b = y.createElement('script'),
          b.async = !0,
          a.scriptCharset && (b.charset = a.scriptCharset),
          b.src = a.url,
          b.onload = b.onreadystatechange = function (a, c) {
            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, 'success'))
          },
          c.insertBefore(b, c.firstChild)
        },
        abort: function () {
          b && b.onload(void 0, !0)
        }
      }
    }
  });
  var _b = [
  ],
  ac = /(=)\?(?=&|$)|\?\?/;
  m.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var a = _b.pop() || m.expando + '_' + vb++;
      return this[a] = !0,
      a
    }
  }),
  m.ajaxPrefilter('json jsonp', function (b, c, d) {
    var e,
    f,
    g,
    h = b.jsonp !== !1 && (ac.test(b.url) ? 'url' : 'string' == typeof b.data && !(b.contentType || '').indexOf('application/x-www-form-urlencoded') && ac.test(b.data) && 'data');
    return h || 'jsonp' === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback()  : b.jsonpCallback, h ? b[h] = b[h].replace(ac, '$1' + e)  : b.jsonp !== !1 && (b.url += (wb.test(b.url) ? '&' : '?') + b.jsonp + '=' + e), b.converters['script json'] = function () {
      return g || m.error(e + ' was not called'),
      g[0]
    }, b.dataTypes[0] = 'json', f = a[e], a[e] = function () {
      g = arguments
    }, d.always(function () {
      a[e] = f,
      b[e] && (b.jsonpCallback = c.jsonpCallback, _b.push(e)),
      g && m.isFunction(f) && f(g[0]),
      g = f = void 0
    }), 'script')  : void 0
  }),
  m.parseHTML = function (a, b, c) {
    if (!a || 'string' != typeof a) {
      return null
    }
    'boolean' == typeof b && (c = b, b = !1),
    b = b || y;
    var d = u.exec(a),
    e = !c && [];
    return d ? [
      b.createElement(d[1])
    ] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
  };
  var bc = m.fn.load;
  m.fn.load = function (a, b, c) {
    if ('string' != typeof a && bc) {
      return bc.apply(this, arguments)
    }
    var d,
    e,
    f,
    g = this,
    h = a.indexOf(' ');
    return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)),
    m.isFunction(b) ? (c = b, b = void 0)  : b && 'object' == typeof b && (f = 'POST'),
    g.length > 0 && m.ajax({
      url: a,
      type: f,
      dataType: 'html',
      data: b
    }).done(function (a) {
      e = arguments,
      g.html(d ? m('<div>').append(m.parseHTML(a)).find(d)  : a)
    }).complete(c && function (a, b) {
      g.each(c, e || [a.responseText,
      b,
      a])
    }),
    this
  },
  m.each(['ajaxStart',
  'ajaxStop',
  'ajaxComplete',
  'ajaxError',
  'ajaxSuccess',
  'ajaxSend'], function (a, b) {
    m.fn[b] = function (a) {
      return this.on(b, a)
    }
  }),
  m.expr.filters.animated = function (a) {
    return m.grep(m.timers, function (b) {
      return a === b.elem
    }).length
  };
  var cc = a.document.documentElement;
  function dc(a) {
    return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
  }
  m.offset = {
    setOffset: function (a, b, c) {
      var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k = m.css(a, 'position'),
      l = m(a),
      n = {
      };
      'static' === k && (a.style.position = 'relative'),
      h = l.offset(),
      f = m.css(a, 'top'),
      i = m.css(a, 'left'),
      j = ('absolute' === k || 'fixed' === k) && m.inArray('auto', [
        f,
        i
      ]) > - 1,
      j ? (d = l.position(), g = d.top, e = d.left)  : (g = parseFloat(f) || 0, e = parseFloat(i) || 0),
      m.isFunction(b) && (b = b.call(a, c, h)),
      null != b.top && (n.top = b.top - h.top + g),
      null != b.left && (n.left = b.left - h.left + e),
      'using' in b ? b.using.call(a, n)  : l.css(n)
    }
  },
  m.fn.extend({
    offset: function (a) {
      if (arguments.length) {
        return void 0 === a ? this : this.each(function (b) {
          m.offset.setOffset(this, a, b)
        })
      }
      var b,
      c,
      d = {
        top: 0,
        left: 0
      },
      e = this[0],
      f = e && e.ownerDocument;
      if (f) {
        return b = f.documentElement,
        m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dc(f), {
          top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
          left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
        })  : d
      }
    },
    position: function () {
      if (this[0]) {
        var a,
        b,
        c = {
          top: 0,
          left: 0
        },
        d = this[0];
        return 'fixed' === m.css(d, 'position') ? b = d.getBoundingClientRect()  : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], 'html') || (c = a.offset()), c.top += m.css(a[0], 'borderTopWidth', !0), c.left += m.css(a[0], 'borderLeftWidth', !0)),
        {
          top: b.top - c.top - m.css(d, 'marginTop', !0),
          left: b.left - c.left - m.css(d, 'marginLeft', !0)
        }
      }
    },
    offsetParent: function () {
      return this.map(function () {
        var a = this.offsetParent || cc;
        while (a && !m.nodeName(a, 'html') && 'static' === m.css(a, 'position')) {
          a = a.offsetParent
        }
        return a || cc
      })
    }
  }),
  m.each({
    scrollLeft: 'pageXOffset',
    scrollTop: 'pageYOffset'
  }, function (a, b) {
    var c = /Y/.test(b);
    m.fn[a] = function (d) {
      return V(this, function (a, d, e) {
        var f = dc(a);
        return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void (f ? f.scrollTo(c ? m(f).scrollLeft()  : e, c ? e : m(f).scrollTop())  : a[d] = e)
      }, a, d, arguments.length, null)
    }
  }),
  m.each(['top',
  'left'], function (a, b) {
    m.cssHooks[b] = La(k.pixelPosition, function (a, c) {
      return c ? (c = Ja(a, b), Ha.test(c) ? m(a).position() [b] + 'px' : c)  : void 0
    })
  }),
  m.each({
    Height: 'height',
    Width: 'width'
  }, function (a, b) {
    m.each({
      padding: 'inner' + a,
      content: b,
      '': 'outer' + a
    }, function (c, d) {
      m.fn[d] = function (d, e) {
        var f = arguments.length && (c || 'boolean' != typeof d),
        g = c || (d === !0 || e === !0 ? 'margin' : 'border');
        return V(this, function (b, c, d) {
          var e;
          return m.isWindow(b) ? b.document.documentElement['client' + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body['scroll' + a], e['scroll' + a], b.body['offset' + a], e['offset' + a], e['client' + a]))  : void 0 === d ? m.css(b, c, g)  : m.style(b, c, d, g)
        }, b, f ? d : void 0, f, null)
      }
    })
  }),
  m.fn.size = function () {
    return this.length
  },
  m.fn.andSelf = m.fn.addBack,
  'function' == typeof define && define.amd && define('jquery', [
  ], function () {
    return m
  });
  var ec = a.jQuery,
  fc = a.$;
  return m.noConflict = function (b) {
    return a.$ === m && (a.$ = fc),
    b && a.jQuery === m && (a.jQuery = ec),
    m
  },
  typeof b === K && (a.jQuery = a.$ = m),
  m
});
!function (d, c) {
  'object' == typeof exports && 'undefined' != typeof module ? module.exports = c()  : 'function' == typeof define && define.amd ? define(c)  : d.moment = c()
}(this, function () {
  function fW() {
    return eP.apply(null, arguments)
  }
  function fU(b) {
    eP = b
  }
  function fS(b) {
    return '[object Array]' === Object.prototype.toString.call(b)
  }
  function fQ(b) {
    return b instanceof Date || '[object Date]' === Object.prototype.toString.call(b)
  }
  function fO(f, e) {
    var h,
    g = [
    ];
    for (h = 0; h < f.length; ++h) {
      g.push(e(f[h], h))
    }
    return g
  }
  function fM(d, c) {
    return Object.prototype.hasOwnProperty.call(d, c)
  }
  function fL(e, d) {
    for (var f in d) {
      fM(d, f) && (e[f] = d[f])
    }
    return fM(d, 'toString') && (e.toString = d.toString),
    fM(d, 'valueOf') && (e.valueOf = d.valueOf),
    e
  }
  function fJ(f, e, h, g) {
    return bj(f, e, h, g, !0).utc()
  }
  function fH() {
    return {
      empty: !1,
      unusedTokens: [
      ],
      unusedInput: [
      ],
      overflow: - 2,
      charsLeftOver: 0,
      nullInput: !1,
      invalidMonth: null,
      invalidFormat: !1,
      userInvalidated: !1,
      iso: !1
    }
  }
  function fG(b) {
    return null == b._pf && (b._pf = fH()),
    b._pf
  }
  function fF(d) {
    if (null == d._isValid) {
      var c = fG(d);
      d._isValid = !(isNaN(d._d.getTime()) || !(c.overflow < 0) || c.empty || c.invalidMonth || c.invalidWeekday || c.nullInput || c.invalidFormat || c.userInvalidated),
      d._strict && (d._isValid = d._isValid && 0 === c.charsLeftOver && 0 === c.unusedTokens.length && void 0 === c.bigHour)
    }
    return d._isValid
  }
  function fE(d) {
    var c = fJ(NaN);
    return null != d ? fL(fG(c), d)  : fG(c).userInvalidated = !0,
    c
  }
  function fD(g, f) {
    var j,
    i,
    h;
    if ('undefined' != typeof f._isAMomentObject && (g._isAMomentObject = f._isAMomentObject), 'undefined' != typeof f._i && (g._i = f._i), 'undefined' != typeof f._f && (g._f = f._f), 'undefined' != typeof f._l && (g._l = f._l), 'undefined' != typeof f._strict && (g._strict = f._strict), 'undefined' != typeof f._tzm && (g._tzm = f._tzm), 'undefined' != typeof f._isUTC && (g._isUTC = f._isUTC), 'undefined' != typeof f._offset && (g._offset = f._offset), 'undefined' != typeof f._pf && (g._pf = fG(f)), 'undefined' != typeof f._locale && (g._locale = f._locale), ep.length > 0) {
      for (j in ep) {
        i = ep[j],
        h = f[i],
        'undefined' != typeof h && (g[i] = h)
      }
    }
    return g
  }
  function fC(a) {
    fD(this, a),
    this._d = new Date(null != a._d ? a._d.getTime()  : NaN),
    d5 === !1 && (d5 = !0, fW.updateOffset(this), d5 = !1)
  }
  function fB(b) {
    return b instanceof fC || null != b && null != b._isAMomentObject
  }
  function fA(b) {
    return 0 > b ? Math.ceil(b)  : Math.floor(b)
  }
  function fz(e) {
    var d = + e,
    f = 0;
    return 0 !== d && isFinite(d) && (f = fA(d)),
    f
  }
  function fy(i, h, n) {
    var m,
    l = Math.min(i.length, h.length),
    k = Math.abs(i.length - h.length),
    j = 0;
    for (m = 0; l > m; m++) {
      (n && i[m] !== h[m] || !n && fz(i[m]) !== fz(h[m])) && j++
    }
    return j + k
  }
  function fx() {
  }
  function fw(b) {
    return b ? b.toLowerCase().replace('_', '-')  : b
  }
  function fv(h) {
    for (var g, l, k, j, i = 0; i < h.length; ) {
      for (j = fw(h[i]).split('-'), g = j.length, l = fw(h[i + 1]), l = l ? l.split('-')  : null; g > 0; ) {
        if (k = fu(j.slice(0, g).join('-'))) {
          return k
        }
        if (l && l.length >= g && fy(j, l, !0) >= g - 1) {
          break
        }
        g--
      }
      i++
    }
    return null
  }
  function fu(e) {
    var d = null;
    if (!dT[e] && 'undefined' != typeof module && module && module.exports) {
      try {
        d = eC._abbr,
        require('./locale/' + e),
        ft(d)
      } catch (f) {
      }
    }
    return dT[e]
  }
  function ft(e, d) {
    var f;
    return e && (f = 'undefined' == typeof d ? fq(e)  : fs(e, d), f && (eC = f)),
    eC._abbr
  }
  function fs(d, c) {
    return null !== c ? (c.abbr = d, dT[d] = dT[d] || new fx, dT[d].set(c), ft(d), dT[d])  : (delete dT[d], null)
  }
  function fq(d) {
    var c;
    if (d && d._locale && d._locale._abbr && (d = d._locale._abbr), !d) {
      return eC
    }
    if (!fS(d)) {
      if (c = fu(d)) {
        return c
      }
      d = [
        d
      ]
    }
    return fv(d)
  }
  function fo(e, d) {
    var f = e.toLowerCase();
    dG[f] = dG[f + 's'] = dG[d] = e
  }
  function gH(b) {
    return 'string' == typeof b ? dG[b] || dG[b.toLowerCase()] : void 0
  }
  function gG(f) {
    var e,
    h,
    g = {
    };
    for (h in f) {
      fM(f, h) && (e = gH(h), e && (g[e] = f[h]))
    }
    return g
  }
  function gE(a, d) {
    return function (b) {
      return null != b ? (gA(this, a, b), fW.updateOffset(this, d), this)  : gC(this, a)
    }
  }
  function gC(d, c) {
    return d._d['get' + (d._isUTC ? 'UTC' : '') + c]()
  }
  function gA(e, d, f) {
    return e._d['set' + (e._isUTC ? 'UTC' : '') + d](f)
  }
  function gy(e, d) {
    var f;
    if ('object' == typeof e) {
      for (f in e) {
        this.set(f, e[f])
      }
    } else {
      if (e = gH(e), 'function' == typeof this[e]) {
        return this[e](d)
      }
    }
    return this
  }
  function gw(h, g, l) {
    var k = '' + Math.abs(h),
    j = g - k.length,
    i = h >= 0;
    return (i ? l ? '+' : '' : '-') + Math.pow(10, Math.max(0, j)).toString().substr(1) + k
  }
  function gv(g, f, j, i) {
    var h = i;
    'string' == typeof i && (h = function () {
      return this[i]()
    }),
    g && (cD[g] = h),
    f && (cD[f[0]] = function () {
      return gw(h.apply(this, arguments), f[1], f[2])
    }),
    j && (cD[j] = function () {
      return this.localeData().ordinal(h.apply(this, arguments), g)
    })
  }
  function gt(b) {
    return b.match(/\[[\s\S]/) ? b.replace(/^\[|\]$/g, '')  : b.replace(/\\/g, '')
  }
  function gr(f) {
    var e,
    h,
    g = f.match(dt);
    for (e = 0, h = g.length; h > e; e++) {
      cD[g[e]] ? g[e] = cD[g[e]] : g[e] = gt(g[e])
    }
    return function (b) {
      var a = '';
      for (e = 0; h > e; e++) {
        a += g[e] instanceof Function ? g[e].call(b, f)  : g[e]
      }
      return a
    }
  }
  function gq(d, c) {
    return d.isValid() ? (c = gp(c, d.localeData()), cV[c] = cV[c] || gr(c), cV[c](d))  : d.localeData().invalidDate()
  }
  function gp(f, e) {
    function h(b) {
      return e.longDateFormat(b) || b
    }
    var g = 5;
    for (c8.lastIndex = 0; g >= 0 && c8.test(f); ) {
      f = f.replace(c8, h),
      c8.lastIndex = 0,
      g -= 1
    }
    return f
  }
  function go(b) {
    return 'function' == typeof b && '[object Function]' === Object.prototype.toString.call(b)
  }
  function gn(e, d, f) {
    dY[e] = go(d) ? d : function (b) {
      return b && f ? f : d
    }
  }
  function gm(d, c) {
    return fM(dY, d) ? dY[d](c._strict, c._locale)  : new RegExp(gl(d))
  }
  function gl(b) {
    return b.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (g, f, j, i, h) {
      return f || j || i || h
    }).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
  }
  function gk(f, e) {
    var h,
    g = e;
    for ('string' == typeof f && (f = [
      f
    ]), 'number' == typeof e && (g = function (b, d) {
      d[e] = fz(b)
    }), h = 0; h < f.length; h++) {
      dM[f[h]] = g
    }
  }
  function gj(d, c) {
    gk(d, function (b, h, g, f) {
      g._w = g._w || {
      },
      c(b, g._w, g, f)
    })
  }
  function gi(e, d, f) {
    null != d && fM(dM, e) && dM[e](d, f._a, f, e)
  }
  function gh(d, c) {
    return new Date(Date.UTC(d, c + 1, 0)).getUTCDate()
  }
  function f9(b) {
    return this._months[b.month()]
  }
  function f8(b) {
    return this._monthsShort[b.month()]
  }
  function f7(h, g, l) {
    var k,
    j,
    i;
    for (this._monthsParse || (this._monthsParse = [
    ], this._longMonthsParse = [
    ], this._shortMonthsParse = [
    ]), k = 0; 12 > k; k++) {
      if (j = fJ([2000,
      k]), l && !this._longMonthsParse[k] && (this._longMonthsParse[k] = new RegExp('^' + this.months(j, '').replace('.', '') + '$', 'i'), this._shortMonthsParse[k] = new RegExp('^' + this.monthsShort(j, '').replace('.', '') + '$', 'i')), l || this._monthsParse[k] || (i = '^' + this.months(j, '') + '|^' + this.monthsShort(j, ''), this._monthsParse[k] = new RegExp(i.replace('.', ''), 'i')), l && 'MMMM' === g && this._longMonthsParse[k].test(h)) {
        return k
      }
      if (l && 'MMM' === g && this._shortMonthsParse[k].test(h)) {
        return k
      }
      if (!l && this._monthsParse[k].test(h)) {
        return k
      }
    }
  }
  function f6(e, d) {
    var f;
    return 'string' == typeof d && (d = e.localeData().monthsParse(d), 'number' != typeof d) ? e : (f = Math.min(e.date(), gh(e.year(), d)), e._d['set' + (e._isUTC ? 'UTC' : '') + 'Month'](d, f), e)
  }
  function f5(a) {
    return null != a ? (f6(this, a), fW.updateOffset(this, !0), this)  : gC(this, 'Month')
  }
  function f3() {
    return gh(this.year(), this.month())
  }
  function g0(e) {
    var d,
    f = e._a;
    return f && - 2 === fG(e).overflow && (d = f[dl] < 0 || f[dl] > 11 ? dl : f[c1] < 1 || f[c1] > gh(f[dz], f[dl]) ? c1 : f[cO] < 0 || f[cO] > 24 || 24 === f[cO] && (0 !== f[cw] || 0 !== f[ck] || 0 !== f[b1]) ? cO : f[cw] < 0 || f[cw] > 59 ? cw : f[ck] < 0 || f[ck] > 59 ? ck : f[b1] < 0 || f[b1] > 999 ? b1 : - 1, fG(e)._overflowDayOfYear && (dz > d || d > c1) && (d = c1), fG(e).overflow = d),
    e
  }
  function fY(a) {
    fW.suppressDeprecationWarnings === !1 && 'undefined' != typeof console && console.warn && console.warn('Deprecation warning: ' + a)
  }
  function g1(e, d) {
    var f = !0;
    return fL(function () {
      return f && (fY(e + '\n' + (new Error).stack), f = !1),
      d.apply(this, arguments)
    }, d)
  }
  function gF(d, c) {
    bl[d] || (fY(c), bl[d] = !0)
  }
  function fV(g) {
    var f,
    j,
    i = g._i,
    h = a2.exec(i);
    if (h) {
      for (fG(g).iso = !0, f = 0, j = aQ.length; j > f; f++) {
        if (aQ[f][1].exec(i)) {
          g._f = aQ[f][0];
          break
        }
      }
      for (f = 0, j = aE.length; j > f; f++) {
        if (aE[f][1].exec(i)) {
          g._f += (h[6] || ' ') + aE[f][0];
          break
        }
      }
      i.match(eI) && (g._f += 'Z'),
      aU(g)
    } else {
      g._isValid = !1
    }
  }
  function fj(a) {
    var d = al.exec(a._i);
    return null !== d ? void (a._d = new Date( + d[1]))  : (fV(a), void (a._isValid === !1 && (delete a._isValid, fW.createFromInputFallback(a))))
  }
  function eZ(j, i, p, o, n, m, l) {
    var k = new Date(j, i, p, o, n, m, l);
    return 1970 > j && k.setFullYear(j),
    k
  }
  function eM(d) {
    var c = new Date(Date.UTC.apply(null, arguments));
    return 1970 > d && c.setUTCFullYear(d),
    c
  }
  function ez(b) {
    return em(b) ? 366 : 365
  }
  function em(b) {
    return b % 4 === 0 && b % 100 !== 0 || b % 400 === 0
  }
  function d2() {
    return em(this.year())
  }
  function dQ(h, g, l) {
    var k,
    j = l - g,
    i = l - h.day();
    return i > j && (i -= 7),
    j - 7 > i && (i += 7),
    k = a0(h).add(i, 'd'),
    {
      week: Math.ceil(k.dayOfYear() / 7),
      year: k.year()
    }
  }
  function dD(b) {
    return dQ(b, this._week.dow, this._week.doy).week
  }
  function dq() {
    return this._week.dow
  }
  function c5() {
    return this._week.doy
  }
  function cS(d) {
    var c = this.localeData().week(this);
    return null == d ? c : this.add(7 * (d - c), 'd')
  }
  function cA(d) {
    var c = dQ(this, 1, 4).week;
    return null == d ? c : this.add(7 * (d - c), 'd')
  }
  function co(r, q, p, o, n) {
    var m,
    l = 6 + n - o,
    k = eM(r, 0, 1 + l),
    j = k.getUTCDay();
    return n > j && (j += 7),
    p = null != p ? 1 * p : n,
    m = 1 + l + 7 * (q - 1) - j + p,
    {
      year: m > 0 ? r : r - 1,
      dayOfYear: m > 0 ? m : ez(r - 1) + m
    }
  }
  function b5(d) {
    var c = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 86400000) + 1;
    return null == d ? c : this.add(d - c, 'd')
  }
  function bT(e, d, f) {
    return null != e ? e : null != d ? d : f
  }
  function bB(d) {
    var c = new Date;
    return d._useUTC ? [
      c.getUTCFullYear(),
      c.getUTCMonth(),
      c.getUTCDate()
    ] : [
      c.getFullYear(),
      c.getMonth(),
      c.getDate()
    ]
  }
  function bp(h) {
    var g,
    l,
    k,
    j,
    i = [
    ];
    if (!h._d) {
      for (k = bB(h), h._w && null == h._a[c1] && null == h._a[dl] && a6(h), h._dayOfYear && (j = bT(h._a[dz], k[dz]), h._dayOfYear > ez(j) && (fG(h)._overflowDayOfYear = !0), l = eM(j, 0, h._dayOfYear), h._a[dl] = l.getUTCMonth(), h._a[c1] = l.getUTCDate()), g = 0; 3 > g && null == h._a[g]; ++g) {
        h._a[g] = i[g] = k[g]
      }
      for (; 7 > g; g++) {
        h._a[g] = i[g] = null == h._a[g] ? 2 === g ? 1 : 0 : h._a[g]
      }
      24 === h._a[cO] && 0 === h._a[cw] && 0 === h._a[ck] && 0 === h._a[b1] && (h._nextDay = !0, h._a[cO] = 0),
      h._d = (h._useUTC ? eM : eZ).apply(null, i),
      null != h._tzm && h._d.setUTCMinutes(h._d.getUTCMinutes() - h._tzm),
      h._nextDay && (h._a[cO] = 24)
    }
  }
  function a6(j) {
    var i,
    p,
    o,
    n,
    m,
    l,
    k;
    i = j._w,
    null != i.GG || null != i.W || null != i.E ? (m = 1, l = 4, p = bT(i.GG, j._a[dz], dQ(a0(), 1, 4).year), o = bT(i.W, 1), n = bT(i.E, 1))  : (m = j._locale._week.dow, l = j._locale._week.doy, p = bT(i.gg, j._a[dz], dQ(a0(), m, l).year), o = bT(i.w, 1), null != i.d ? (n = i.d, m > n && ++o)  : n = null != i.e ? i.e + m : m),
    k = co(p, o, n, l, m),
    j._a[dz] = k.year,
    j._dayOfYear = k.dayOfYear
  }
  function aU(r) {
    if (r._f === fW.ISO_8601) {
      return void fV(r)
    }
    r._a = [
    ],
    fG(r).empty = !0;
    var q,
    p,
    o,
    n,
    m,
    l = '' + r._i,
    j = l.length,
    a = 0;
    for (o = gp(r._f, r._locale).match(dt) || [], q = 0; q < o.length; q++) {
      n = o[q],
      p = (l.match(gm(n, r)) || []) [0],
      p && (m = l.substr(0, l.indexOf(p)), m.length > 0 && fG(r).unusedInput.push(m), l = l.slice(l.indexOf(p) + p.length), a += p.length),
      cD[n] ? (p ? fG(r).empty = !1 : fG(r).unusedTokens.push(n), gi(n, p, r))  : r._strict && !p && fG(r).unusedTokens.push(n)
    }
    fG(r).charsLeftOver = j - a,
    l.length > 0 && fG(r).unusedInput.push(l),
    fG(r).bigHour === !0 && r._a[cO] <= 12 && r._a[cO] > 0 && (fG(r).bigHour = void 0),
    r._a[cO] = aI(r._locale, r._a[cO], r._meridiem),
    bp(r),
    g0(r)
  }
  function aI(f, e, h) {
    var g;
    return null == h ? e : null != f.meridiemHour ? f.meridiemHour(e, h)  : null != f.isPM ? (g = f.isPM(h), g && 12 > e && (e += 12), g || 12 !== e || (e = 0), e)  : e
  }
  function ap(h) {
    var g,
    l,
    k,
    j,
    i;
    if (0 === h._f.length) {
      return fG(h).invalidFormat = !0,
      void (h._d = new Date(NaN))
    }
    for (j = 0; j < h._f.length; j++) {
      i = 0,
      g = fD({
      }, h),
      null != h._useUTC && (g._useUTC = h._useUTC),
      g._f = h._f[j],
      aU(g),
      fF(g) && (i += fG(g).charsLeftOver, i += 10 * fG(g).unusedTokens.length, fG(g).score = i, (null == k || k > i) && (k = i, l = g))
    }
    fL(h, l || g)
  }
  function hk(d) {
    if (!d._d) {
      var c = gG(d._i);
      d._a = [
        c.year,
        c.month,
        c.day || c.date,
        c.hour,
        c.minute,
        c.second,
        c.millisecond
      ],
      bp(d)
    }
  }
  function gT(d) {
    var c = new fC(g0(bN(d)));
    return c._nextDay && (c.add(1, 'd'), c._nextDay = void 0),
    c
  }
  function bN(d) {
    var c = d._i,
    f = d._f;
    return d._locale = d._locale || fq(d._l),
    null === c || void 0 === f && '' === c ? fE({
      nullInput: !0
    })  : ('string' == typeof c && (d._i = c = d._locale.preparse(c)), fB(c) ? new fC(g0(c))  : (fS(f) ? ap(d)  : f ? aU(d)  : fQ(c) ? d._d = c : bv(d), d))
  }
  function bv(a) {
    var c = a._i;
    void 0 === c ? a._d = new Date : fQ(c) ? a._d = new Date( + c)  : 'string' == typeof c ? fj(a)  : fS(c) ? (a._a = fO(c.slice(0), function (b) {
      return parseInt(b, 10)
    }), bp(a))  : 'object' == typeof c ? hk(a)  : 'number' == typeof c ? a._d = new Date(c)  : fW.createFromInputFallback(a)
  }
  function bj(h, g, l, k, j) {
    var i = {
    };
    return 'boolean' == typeof l && (k = l, l = void 0),
    i._isAMomentObject = !0,
    i._useUTC = i._isUTC = j,
    i._l = l,
    i._i = h,
    i._f = g,
    i._strict = k,
    gT(i)
  }
  function a0(f, e, h, g) {
    return bj(f, e, h, g, !1)
  }
  function aO(f, c) {
    var h,
    g;
    if (1 === c.length && fS(c[0]) && (c = c[0]), !c.length) {
      return a0()
    }
    for (h = c[0], g = 1; g < c.length; ++g) {
      (!c[g].isValid() || c[g][f](h)) && (h = c[g])
    }
    return h
  }
  function aC() {
    var b = [
    ].slice.call(arguments, 0);
    return aO('isBefore', b)
  }
  function aj() {
    var b = [
    ].slice.call(arguments, 0);
    return aO('isAfter', b)
  }
  function g7(v) {
    var u = gG(v),
    t = u.year || 0,
    s = u.quarter || 0,
    r = u.month || 0,
    q = u.week || 0,
    p = u.day || 0,
    o = u.hour || 0,
    n = u.minute || 0,
    m = u.second || 0,
    l = u.millisecond || 0;
    this._milliseconds = + l + 1000 * m + 60000 * n + 3600000 * o,
    this._days = + p + 7 * q,
    this._months = + r + 3 * s + 12 * t,
    this._data = {
    },
    this._locale = fq(),
    this._bubble()
  }
  function gN(b) {
    return b instanceof g7
  }
  function f4(d, c) {
    gv(d, 0, 0, function () {
      var b = this.utcOffset(),
      e = '+';
      return 0 > b && (b = - b, e = '-'),
      e + gw(~~(b / 60), 2) + c + gw(~~b % 60, 2)
    })
  }
  function fr(g) {
    var f = (g || '').match(eI) || [],
    j = f[f.length - 1] || [],
    i = (j + '').match(a8) || ['-',
    0,
    0],
    h = + (60 * i[1]) + fz(i[2]);
    return '+' === i[0] ? h : - h
  }
  function e5(a, h) {
    var g,
    d;
    return h._isUTC ? (g = h.clone(), d = (fB(a) || fQ(a) ? + a : + a0(a)) - + g, g._d.setTime( + g._d + d), fW.updateOffset(g, !1), g)  : a0(a).local()
  }
  function eS(b) {
    return 15 * - Math.round(b._d.getTimezoneOffset() / 15)
  }
  function eF(a, h) {
    var g,
    f = this._offset || 0;
    return null != a ? ('string' == typeof a && (a = fr(a)), Math.abs(a) < 16 && (a = 60 * a), !this._isUTC && h && (g = eS(this)), this._offset = a, this._isUTC = !0, null != g && this.add(g, 'm'), f !== a && (!h || this._changeInProgress ? gD(this, bZ(a - f, 'm'), 1, !1)  : this._changeInProgress || (this._changeInProgress = !0, fW.updateOffset(this, !0), this._changeInProgress = null)), this)  : this._isUTC ? f : eS(this)
  }
  function es(d, c) {
    return null != d ? ('string' != typeof d && (d = - d), this.utcOffset(d, c), this)  : - this.utcOffset()
  }
  function d8(b) {
    return this.utcOffset(0, b)
  }
  function dW(b) {
    return this._isUTC && (this.utcOffset(0, b), this._isUTC = !1, b && this.subtract(eS(this), 'm')),
    this
  }
  function dJ() {
    return this._tzm ? this.utcOffset(this._tzm)  : 'string' == typeof this._i && this.utcOffset(fr(this._i)),
    this
  }
  function dw(b) {
    return b = b ? a0(b).utcOffset()  : 0,
    (this.utcOffset() - b) % 60 === 0
  }
  function di() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
  }
  function cY() {
    if ('undefined' != typeof this._isDSTShifted) {
      return this._isDSTShifted
    }
    var d = {
    };
    if (fD(d, this), d = bN(d), d._a) {
      var c = d._isUTC ? fJ(d._a)  : a0(d._a);
      this._isDSTShifted = this.isValid() && fy(d._a, c.toArray()) > 0
    } else {
      this._isDSTShifted = !1
    }
    return this._isDSTShifted
  }
  function cG() {
    return !this._isUTC
  }
  function cu() {
    return this._isUTC
  }
  function ci() {
    return this._isUTC && 0 === this._offset
  }
  function bZ(i, f) {
    var n,
    m,
    l,
    k = i,
    j = null;
    return gN(i) ? k = {
      ms: i._milliseconds,
      d: i._days,
      M: i._months
    }
     : 'number' == typeof i ? (k = {
    }, f ? k[f] = i : k.milliseconds = i)  : (j = aW.exec(i)) ? (n = '-' === j[1] ? - 1 : 1, k = {
      y: 0,
      d: fz(j[c1]) * n,
      h: fz(j[cO]) * n,
      m: fz(j[cw]) * n,
      s: fz(j[ck]) * n,
      ms: fz(j[b1]) * n
    })  : (j = aK.exec(i)) ? (n = '-' === j[1] ? - 1 : 1, k = {
      y: bH(j[2], n),
      M: bH(j[3], n),
      d: bH(j[4], n),
      h: bH(j[5], n),
      m: bH(j[6], n),
      s: bH(j[7], n),
      w: bH(j[8], n)
    })  : null == k ? k = {
    }
     : 'object' == typeof k && ('from' in k || 'to' in k) && (l = aw(a0(k.from), a0(k.to)), k = {
    }, k.ms = l.milliseconds, k.M = l.months),
    m = new g7(k),
    gN(i) && fM(i, '_locale') && (m._locale = i._locale),
    m
  }
  function bH(e, d) {
    var f = e && parseFloat(e.replace(',', '.'));
    return (isNaN(f) ? 0 : f) * d
  }
  function cM(e, d) {
    var f = {
      milliseconds: 0,
      months: 0
    };
    return f.months = d.month() - e.month() + 12 * (d.year() - e.year()),
    e.clone().add(f.months, 'M').isAfter(d) && --f.months,
    f.milliseconds = + d - + e.clone().add(f.months, 'M'),
    f
  }
  function aw(e, d) {
    var f;
    return d = e5(d, e),
    e.isBefore(d) ? f = cM(e, d)  : (f = cM(d, e), f.milliseconds = - f.milliseconds, f.months = - f.months),
    f
  }
  function gZ(d, c) {
    return function (h, g) {
      var b,
      a;
      return null === g || isNaN( + g) || (gF(c, 'moment().' + c + '(period, number) is deprecated. Please use moment().' + c + '(number, period).'), a = h, h = g, g = a),
      h = 'string' == typeof h ? + h : h,
      b = bZ(h, g),
      gD(this, b, d),
      this
    }
  }
  function gD(a, n, m, l) {
    var k = n._milliseconds,
    j = n._days,
    i = n._months;
    l = null == l ? !0 : l,
    k && a._d.setTime( + a._d + k * m),
    j && gA(a, 'Date', gC(a, 'Date') + j * m),
    i && f6(a, gC(a, 'Month') + i * m),
    l && fW.updateOffset(a, j || i)
  }
  function fT(h, g) {
    var l = h || a0(),
    k = e5(l, this).startOf('day'),
    j = this.diff(k, 'days', !0),
    i = - 6 > j ? 'sameElse' : - 1 > j ? 'lastWeek' : 0 > j ? 'lastDay' : 1 > j ? 'sameDay' : 2 > j ? 'nextDay' : 7 > j ? 'nextWeek' : 'sameElse';
    return this.format(g && g[i] || this.localeData().calendar(i, this, a0(l)))
  }
  function fi() {
    return new fC(this)
  }
  function eY(e, d) {
    var f;
    return d = gH('undefined' != typeof d ? d : 'millisecond'),
    'millisecond' === d ? (e = fB(e) ? e : a0(e), + this > + e)  : (f = fB(e) ? + e : + a0(e), f < + this.clone().startOf(d))
  }
  function eL(e, d) {
    var f;
    return d = gH('undefined' != typeof d ? d : 'millisecond'),
    'millisecond' === d ? (e = fB(e) ? e : a0(e), + e > + this)  : (f = fB(e) ? + e : + a0(e), + this.clone().endOf(d) < f)
  }
  function ey(e, d, f) {
    return this.isAfter(e, f) && this.isBefore(d, f)
  }
  function el(e, d) {
    var f;
    return d = gH(d || 'millisecond'),
    'millisecond' === d ? (e = fB(e) ? e : a0(e), + this === + e)  : (f = + a0(e), + this.clone().startOf(d) <= f && f <= + this.clone().endOf(d))
  }
  function d1(i, h, n) {
    var m,
    l,
    k = e5(i, this),
    j = 60000 * (k.utcOffset() - this.utcOffset());
    return h = gH(h),
    'year' === h || 'month' === h || 'quarter' === h ? (l = dP(this, k), 'quarter' === h ? l /= 3 : 'year' === h && (l /= 12))  : (m = this - k, l = 'second' === h ? m / 1000 : 'minute' === h ? m / 60000 : 'hour' === h ? m / 3600000 : 'day' === h ? (m - j) / 86400000 : 'week' === h ? (m - j) / 604800000 : m),
    n ? l : fA(l)
  }
  function dP(h, g) {
    var l,
    k,
    j = 12 * (g.year() - h.year()) + (g.month() - h.month()),
    i = h.clone().add(j, 'months');
    return 0 > g - i ? (l = h.clone().add(j - 1, 'months'), k = (g - i) / (i - l))  : (l = h.clone().add(j + 1, 'months'), k = (g - i) / (l - i)),
    - (j + k)
  }
  function dC() {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ')
  }
  function dp() {
    var b = this.clone().utc();
    return 0 < b.year() && b.year() <= 9999 ? 'function' == typeof Date.prototype.toISOString ? this.toDate().toISOString()  : gq(b, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]')  : gq(b, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]')
  }
  function c4(a) {
    var d = gq(this, a || fW.defaultFormat);
    return this.localeData().postformat(d)
  }
  function cR(d, c) {
    return this.isValid() ? bZ({
      to: this,
      from: d
    }).locale(this.locale()).humanize(!c)  : this.localeData().invalidDate()
  }
  function cz(b) {
    return this.from(a0(), b)
  }
  function cn(d, c) {
    return this.isValid() ? bZ({
      from: this,
      to: d
    }).locale(this.locale()).humanize(!c)  : this.localeData().invalidDate()
  }
  function b4(b) {
    return this.to(a0(), b)
  }
  function bS(d) {
    var c;
    return void 0 === d ? this._locale._abbr : (c = fq(d), null != c && (this._locale = c), this)
  }
  function bA() {
    return this._locale
  }
  function bo(b) {
    switch (b = gH(b)) {
      case 'year':
        this.month(0);
      case 'quarter':
      case 'month':
        this.date(1);
      case 'week':
      case 'isoWeek':
      case 'day':
        this.hours(0);
      case 'hour':
        this.minutes(0);
      case 'minute':
        this.seconds(0);
      case 'second':
        this.milliseconds(0)
    }
    return 'week' === b && this.weekday(0),
    'isoWeek' === b && this.isoWeekday(1),
    'quarter' === b && this.month(3 * Math.floor(this.month() / 3)),
    this
  }
  function a5(b) {
    return b = gH(b),
    void 0 === b || 'millisecond' === b ? this : this.startOf(b).add(1, 'isoWeek' === b ? 'week' : b).subtract(1, 'ms')
  }
  function aT() {
    return + this._d - 60000 * (this._offset || 0)
  }
  function aH() {
    return Math.floor( + this / 1000)
  }
  function ao() {
    return this._offset ? new Date( + this)  : this._d
  }
  function hj() {
    var b = this;
    return [b.year(),
    b.month(),
    b.date(),
    b.hour(),
    b.minute(),
    b.second(),
    b.millisecond()]
  }
  function gS() {
    var b = this;
    return {
      years: b.year(),
      months: b.month(),
      date: b.date(),
      hours: b.hours(),
      minutes: b.minutes(),
      seconds: b.seconds(),
      milliseconds: b.milliseconds()
    }
  }
  function bM() {
    return fF(this)
  }
  function bu() {
    return fL({
    }, fG(this))
  }
  function bi() {
    return fG(this).overflow
  }
  function aZ(d, c) {
    gv(0, [
      d,
      d.length
    ], 0, c)
  }
  function aN(e, d, f) {
    return dQ(a0([e,
    11,
    31 + d - f]), d, f).week
  }
  function aB(d) {
    var c = dQ(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
    return null == d ? c : this.add(d - c, 'y')
  }
  function ai(d) {
    var c = dQ(this, 1, 4).year;
    return null == d ? c : this.add(d - c, 'y')
  }
  function g6() {
    return aN(this.year(), 1, 4)
  }
  function gM() {
    var b = this.localeData()._week;
    return aN(this.year(), b.dow, b.doy)
  }
  function f2(b) {
    return null == b ? Math.ceil((this.month() + 1) / 3)  : this.month(3 * (b - 1) + this.month() % 3)
  }
  function fp(d, c) {
    return 'string' != typeof d ? d : isNaN(d) ? (d = c.weekdaysParse(d), 'number' == typeof d ? d : null)  : parseInt(d, 10)
  }
  function e4(b) {
    return this._weekdays[b.day()]
  }
  function eR(b) {
    return this._weekdaysShort[b.day()]
  }
  function eE(b) {
    return this._weekdaysMin[b.day()]
  }
  function er(f) {
    var e,
    h,
    g;
    for (this._weekdaysParse = this._weekdaysParse || [], e = 0; 7 > e; e++) {
      if (this._weekdaysParse[e] || (h = a0([2000,
      1]).day(e), g = '^' + this.weekdays(h, '') + '|^' + this.weekdaysShort(h, '') + '|^' + this.weekdaysMin(h, ''), this._weekdaysParse[e] = new RegExp(g.replace('.', ''), 'i')), this._weekdaysParse[e].test(f)) {
        return e
      }
    }
  }
  function d7(d) {
    var c = this._isUTC ? this._d.getUTCDay()  : this._d.getDay();
    return null != d ? (d = fp(d, this.localeData()), this.add(d - c, 'd'))  : c
  }
  function dV(d) {
    var c = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return null == d ? c : this.add(d - c, 'd')
  }
  function dI(b) {
    return null == b ? this.day() || 7 : this.day(this.day() % 7 ? b : b - 7)
  }
  function dv(d, c) {
    gv(d, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), c)
    })
  }
  function dh(d, c) {
    return c._meridiemParse
  }
  function cX(b) {
    return 'p' === (b + '').toLowerCase().charAt(0)
  }
  function cF(e, d, f) {
    return e > 11 ? f ? 'pm' : 'PM' : f ? 'am' : 'AM'
  }
  function ct(d, c) {
    c[b1] = fz(1000 * ('0.' + d))
  }
  function ch() {
    return this._isUTC ? 'UTC' : ''
  }
  function bY() {
    return this._isUTC ? 'Coordinated Universal Time' : ''
  }
  function bG(b) {
    return a0(1000 * b)
  }
  function cL() {
    return a0.apply(null, arguments).parseZone()
  }
  function av(f, e, h) {
    var g = this._calendar[f];
    return 'function' == typeof g ? g.call(e, h)  : g
  }
  function gY(e) {
    var d = this._longDateFormat[e],
    f = this._longDateFormat[e.toUpperCase()];
    return d || !f ? d : (this._longDateFormat[e] = f.replace(/MMMM|MM|DD|dddd/g, function (b) {
      return b.slice(1)
    }), this._longDateFormat[e])
  }
  function gB() {
    return this._invalidDate
  }
  function fR(b) {
    return this._ordinal.replace('%d', b)
  }
  function fh(b) {
    return b
  }
  function eX(g, f, j, i) {
    var h = this._relativeTime[j];
    return 'function' == typeof h ? h(g, f, j, i)  : h.replace(/%d/i, g)
  }
  function eK(e, d) {
    var f = this._relativeTime[e > 0 ? 'future' : 'past'];
    return 'function' == typeof f ? f(d)  : f.replace(/%s/i, d)
  }
  function ex(e) {
    var d,
    f;
    for (f in e) {
      d = e[f],
      'function' == typeof d ? this[f] = d : this['_' + f] = d
    }
    this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + /\d{1,2}/.source)
  }
  function ek(h, g, l, k) {
    var j = fq(),
    i = fJ().set(k, g);
    return j[l](i, h)
  }
  function d0(i, h, n, m, l) {
    if ('number' == typeof i && (h = i, i = void 0), i = i || '', null != h) {
      return ek(i, h, n, l)
    }
    var k,
    j = [
    ];
    for (k = 0; m > k; k++) {
      j[k] = ek(i, k, n, l)
    }
    return j
  }
  function dO(d, c) {
    return d0(d, c, 'months', 12, 'month')
  }
  function dB(d, c) {
    return d0(d, c, 'monthsShort', 12, 'month')
  }
  function dn(d, c) {
    return d0(d, c, 'weekdays', 7, 'day')
  }
  function c3(d, c) {
    return d0(d, c, 'weekdaysShort', 7, 'day')
  }
  function cQ(d, c) {
    return d0(d, c, 'weekdaysMin', 7, 'day')
  }
  function cy() {
    var b = this._data;
    return this._milliseconds = ar(this._milliseconds),
    this._days = ar(this._days),
    this._months = ar(this._months),
    b.milliseconds = ar(b.milliseconds),
    b.seconds = ar(b.seconds),
    b.minutes = ar(b.minutes),
    b.hours = ar(b.hours),
    b.months = ar(b.months),
    b.years = ar(b.years),
    this
  }
  function cm(g, f, j, i) {
    var h = bZ(f, j);
    return g._milliseconds += i * h._milliseconds,
    g._days += i * h._days,
    g._months += i * h._months,
    g._bubble()
  }
  function b3(d, c) {
    return cm(this, d, c, 1)
  }
  function bR(d, c) {
    return cm(this, d, c, - 1)
  }
  function bz(b) {
    return 0 > b ? Math.floor(b)  : Math.ceil(b)
  }
  function bn() {
    var r,
    q,
    p,
    o,
    n,
    m = this._milliseconds,
    l = this._days,
    k = this._months,
    j = this._data;
    return m >= 0 && l >= 0 && k >= 0 || 0 >= m && 0 >= l && 0 >= k || (m += 86400000 * bz(aS(k) + l), l = 0, k = 0),
    j.milliseconds = m % 1000,
    r = fA(m / 1000),
    j.seconds = r % 60,
    q = fA(r / 60),
    j.minutes = q % 60,
    p = fA(q / 60),
    j.hours = p % 24,
    l += fA(p / 24),
    n = fA(a4(l)),
    k += n,
    l -= bz(aS(n)),
    o = fA(k / 12),
    k %= 12,
    j.days = l,
    j.months = k,
    j.years = o,
    this
  }
  function a4(b) {
    return 4800 * b / 146097
  }
  function aS(b) {
    return 146097 * b / 4800
  }
  function aG(f) {
    var e,
    h,
    g = this._milliseconds;
    if (f = gH(f), 'month' === f || 'year' === f) {
      return e = this._days + g / 86400000,
      h = this._months + a4(e),
      'month' === f ? h : h / 12
    }
    switch (e = this._days + Math.round(aS(this._months)), f) {
      case 'week':
        return e / 7 + g / 604800000;
      case 'day':
        return e + g / 86400000;
      case 'hour':
        return 24 * e + g / 3600000;
      case 'minute':
        return 1440 * e + g / 60000;
      case 'second':
        return 86400 * e + g / 1000;
      case 'millisecond':
        return Math.floor(86400000 * e) + g;
      default:
        throw new Error('Unknown unit ' + f)
    }
  }
  function an() {
    return this._milliseconds + 86400000 * this._days + this._months % 12 * 2592000000 + 31536000000 * fz(this._months / 12)
  }
  function hi(b) {
    return function () {
      return this.as(b)
    }
  }
  function gR(b) {
    return b = gH(b),
    this[b + 's']()
  }
  function bL(b) {
    return function () {
      return this._data[b]
    }
  }
  function bt() {
    return fA(this.days() / 7)
  }
  function bh(g, f, j, i, h) {
    return h.relativeTime(f || 1, !!j, g, i)
  }
  function aY(v, u, t) {
    var s = bZ(v).abs(),
    r = b0(s.as('s')),
    q = b0(s.as('m')),
    p = b0(s.as('h')),
    o = b0(s.as('d')),
    n = b0(s.as('M')),
    m = b0(s.as('y')),
    l = r < bO.s && ['s',
    r] || 1 === q && ['m'] || q < bO.m && ['mm',
    q] || 1 === p && ['h'] || p < bO.h && ['hh',
    p] || 1 === o && ['d'] || o < bO.d && ['dd',
    o] || 1 === n && ['M'] || n < bO.M && ['MM',
    n] || 1 === m && ['y'] || ['yy',
    m];
    return l[2] = u,
    l[3] = + v > 0,
    l[4] = t,
    bh.apply(null, l)
  }
  function aM(d, c) {
    return void 0 === bO[d] ? !1 : void 0 === c ? bO[d] : (bO[d] = c, !0)
  }
  function aA(e) {
    var d = this.localeData(),
    f = aY(this, !e, d);
    return e && (f = d.pastFuture( + this, f)),
    d.postformat(f)
  }
  function ah() {
    var z,
    y,
    x,
    w = bw(this._milliseconds) / 1000,
    v = bw(this._days),
    u = bw(this._months);
    z = fA(w / 60),
    y = fA(z / 60),
    w %= 60,
    z %= 60,
    x = fA(u / 12),
    u %= 12;
    var t = x,
    s = u,
    r = v,
    q = y,
    p = z,
    o = w,
    n = this.asSeconds();
    return n ? (0 > n ? '-' : '') + 'P' + (t ? t + 'Y' : '') + (s ? s + 'M' : '') + (r ? r + 'D' : '') + (q || p || o ? 'T' : '') + (q ? q + 'H' : '') + (p ? p + 'M' : '') + (o ? o + 'S' : '')  : 'P0D'
  }
  function g5(e, d) {
    var f = e.split('_');
    return d % 10 === 1 && d % 100 !== 11 ? f[0] : d % 10 >= 2 && 4 >= d % 10 && (10 > d % 100 || d % 100 >= 20) ? f[1] : f[2]
  }
  function gL(f, e, h) {
    var g = {
      mm: e ? 'хвіліна_хвіліны_хвілін' : 'хвіліну_хвіліны_хвілін',
      hh: e ? 'гадзіна_гадзіны_гадзін' : 'гадзіну_гадзіны_гадзін',
      dd: 'дзень_дні_дзён',
      MM: 'месяц_месяцы_месяцаў',
      yy: 'год_гады_гадоў'
    };
    return 'm' === h ? e ? 'хвіліна' : 'хвіліну' : 'h' === h ? e ? 'гадзіна' : 'гадзіну' : f + ' ' + g5(g[h], + f)
  }
  function f1(f, e) {
    var h = {
      nominative: 'студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань'.split('_'),
      accusative: 'студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня'.split('_')
    },
    g = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(e) ? 'accusative' : 'nominative';
    return h[g][f.month()]
  }
  function fn(f, e) {
    var h = {
      nominative: 'нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота'.split('_'),
      accusative: 'нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу'.split('_')
    },
    g = /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/.test(e) ? 'accusative' : 'nominative';
    return h[g][f.day()]
  }
  function e3(f, e, h) {
    var g = {
      mm: 'munutenn',
      MM: 'miz',
      dd: 'devezh'
    };
    return f + ' ' + eq(g[h], f)
  }
  function eQ(b) {
    switch (eD(b)) {
      case 1:
      case 3:
      case 4:
      case 5:
      case 9:
        return b + ' bloaz';
      default:
        return b + ' vloaz'
    }
  }
  function eD(b) {
    return b > 9 ? eD(b % 10)  : b
  }
  function eq(d, c) {
    return 2 === c ? d6(d)  : d
  }
  function d6(d) {
    var c = {
      m: 'v',
      b: 'v',
      d: 'z'
    };
    return void 0 === c[d.charAt(0)] ? d : c[d.charAt(0)] + d.substring(1)
  }
  function dU(f, e, h) {
    var g = f + ' ';
    switch (h) {
      case 'm':
        return e ? 'jedna minuta' : 'jedne minute';
      case 'mm':
        return g += 1 === f ? 'minuta' : 2 === f || 3 === f || 4 === f ? 'minute' : 'minuta';
      case 'h':
        return e ? 'jedan sat' : 'jednog sata';
      case 'hh':
        return g += 1 === f ? 'sat' : 2 === f || 3 === f || 4 === f ? 'sata' : 'sati';
      case 'dd':
        return g += 1 === f ? 'dan' : 'dana';
      case 'MM':
        return g += 1 === f ? 'mjesec' : 2 === f || 3 === f || 4 === f ? 'mjeseca' : 'mjeseci';
      case 'yy':
        return g += 1 === f ? 'godina' : 2 === f || 3 === f || 4 === f ? 'godine' : 'godina'
    }
  }
  function dH(b) {
    return b > 1 && 5 > b && 1 !== ~~(b / 10)
  }
  function du(g, f, j, i) {
    var h = g + ' ';
    switch (j) {
      case 's':
        return f || i ? 'pár sekund' : 'pár sekundami';
      case 'm':
        return f ? 'minuta' : i ? 'minutu' : 'minutou';
      case 'mm':
        return f || i ? h + (dH(g) ? 'minuty' : 'minut')  : h + 'minutami';
        break;
      case 'h':
        return f ? 'hodina' : i ? 'hodinu' : 'hodinou';
      case 'hh':
        return f || i ? h + (dH(g) ? 'hodiny' : 'hodin')  : h + 'hodinami';
        break;
      case 'd':
        return f || i ? 'den' : 'dnem';
      case 'dd':
        return f || i ? h + (dH(g) ? 'dny' : 'dní')  : h + 'dny';
        break;
      case 'M':
        return f || i ? 'měsíc' : 'měsícem';
      case 'MM':
        return f || i ? h + (dH(g) ? 'měsíce' : 'měsíců')  : h + 'měsíci';
        break;
      case 'y':
        return f || i ? 'rok' : 'rokem';
      case 'yy':
        return f || i ? h + (dH(g) ? 'roky' : 'let')  : h + 'lety'
    }
  }
  function c9(g, f, j, i) {
    var h = {
      m: [
        'eine Minute',
        'einer Minute'
      ],
      h: [
        'eine Stunde',
        'einer Stunde'
      ],
      d: [
        'ein Tag',
        'einem Tag'
      ],
      dd: [
        g + ' Tage',
        g + ' Tagen'
      ],
      M: [
        'ein Monat',
        'einem Monat'
      ],
      MM: [
        g + ' Monate',
        g + ' Monaten'
      ],
      y: [
        'ein Jahr',
        'einem Jahr'
      ],
      yy: [
        g + ' Jahre',
        g + ' Jahren'
      ]
    };
    return f ? h[j][0] : h[j][1]
  }
  function cW(g, f, j, i) {
    var h = {
      m: [
        'eine Minute',
        'einer Minute'
      ],
      h: [
        'eine Stunde',
        'einer Stunde'
      ],
      d: [
        'ein Tag',
        'einem Tag'
      ],
      dd: [
        g + ' Tage',
        g + ' Tagen'
      ],
      M: [
        'ein Monat',
        'einem Monat'
      ],
      MM: [
        g + ' Monate',
        g + ' Monaten'
      ],
      y: [
        'ein Jahr',
        'einem Jahr'
      ],
      yy: [
        g + ' Jahre',
        g + ' Jahren'
      ]
    };
    return f ? h[j][0] : h[j][1]
  }
  function cE(g, f, j, i) {
    var h = {
      s: [
        'mõne sekundi',
        'mõni sekund',
        'paar sekundit'
      ],
      m: [
        'ühe minuti',
        'üks minut'
      ],
      mm: [
        g + ' minuti',
        g + ' minutit'
      ],
      h: [
        'ühe tunni',
        'tund aega',
        'üks tund'
      ],
      hh: [
        g + ' tunni',
        g + ' tundi'
      ],
      d: [
        'ühe päeva',
        'üks päev'
      ],
      M: [
        'kuu aja',
        'kuu aega',
        'üks kuu'
      ],
      MM: [
        g + ' kuu',
        g + ' kuud'
      ],
      y: [
        'ühe aasta',
        'aasta',
        'üks aasta'
      ],
      yy: [
        g + ' aasta',
        g + ' aastat'
      ]
    };
    return f ? h[j][2] ? h[j][2] : h[j][1] : i ? h[j][0] : h[j][1]
  }
  function cs(g, f, j, i) {
    var h = '';
    switch (j) {
      case 's':
        return i ? 'muutaman sekunnin' : 'muutama sekunti';
      case 'm':
        return i ? 'minuutin' : 'minuutti';
      case 'mm':
        h = i ? 'minuutin' : 'minuuttia';
        break;
      case 'h':
        return i ? 'tunnin' : 'tunti';
      case 'hh':
        h = i ? 'tunnin' : 'tuntia';
        break;
      case 'd':
        return i ? 'päivän' : 'päivä';
      case 'dd':
        h = i ? 'päivän' : 'päivää';
        break;
      case 'M':
        return i ? 'kuukauden' : 'kuukausi';
      case 'MM':
        h = i ? 'kuukauden' : 'kuukautta';
        break;
      case 'y':
        return i ? 'vuoden' : 'vuosi';
      case 'yy':
        h = i ? 'vuoden' : 'vuotta'
    }
    return h = b9(g, i) + ' ' + h
  }
  function b9(d, c) {
    return 10 > d ? c ? d3[d] : en[d] : d
  }
  function bX(f, e, h) {
    var g = f + ' ';
    switch (h) {
      case 'm':
        return e ? 'jedna minuta' : 'jedne minute';
      case 'mm':
        return g += 1 === f ? 'minuta' : 2 === f || 3 === f || 4 === f ? 'minute' : 'minuta';
      case 'h':
        return e ? 'jedan sat' : 'jednog sata';
      case 'hh':
        return g += 1 === f ? 'sat' : 2 === f || 3 === f || 4 === f ? 'sata' : 'sati';
      case 'dd':
        return g += 1 === f ? 'dan' : 'dana';
      case 'MM':
        return g += 1 === f ? 'mjesec' : 2 === f || 3 === f || 4 === f ? 'mjeseca' : 'mjeseci';
      case 'yy':
        return g += 1 === f ? 'godina' : 2 === f || 3 === f || 4 === f ? 'godine' : 'godina'
    }
  }
  function bF(g, f, j, i) {
    var h = g;
    switch (j) {
      case 's':
        return i || f ? 'néhány másodperc' : 'néhány másodperce';
      case 'm':
        return 'egy' + (i || f ? ' perc' : ' perce');
      case 'mm':
        return h + (i || f ? ' perc' : ' perce');
      case 'h':
        return 'egy' + (i || f ? ' óra' : ' órája');
      case 'hh':
        return h + (i || f ? ' óra' : ' órája');
      case 'd':
        return 'egy' + (i || f ? ' nap' : ' napja');
      case 'dd':
        return h + (i || f ? ' nap' : ' napja');
      case 'M':
        return 'egy' + (i || f ? ' hónap' : ' hónapja');
      case 'MM':
        return h + (i || f ? ' hónap' : ' hónapja');
      case 'y':
        return 'egy' + (i || f ? ' év' : ' éve');
      case 'yy':
        return h + (i || f ? ' év' : ' éve')
    }
    return ''
  }
  function cK(b) {
    return (b ? '' : '[múlt] ') + '[' + cT[this.day()] + '] LT[-kor]'
  }
  function au(f, e) {
    var h = {
      nominative: 'հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր'.split('_'),
      accusative: 'հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի'.split('_')
    },
    g = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(e) ? 'accusative' : 'nominative';
    return h[g][f.month()]
  }
  function gX(e, d) {
    var f = 'հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ'.split('_');
    return f[e.month()]
  }
  function gz(e, d) {
    var f = 'կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ'.split('_');
    return f[e.day()]
  }
  function fP(b) {
    return b % 100 === 11 ? !0 : b % 10 === 1 ? !1 : !0
  }
  function e9(g, f, j, i) {
    var h = g + ' ';
    switch (j) {
      case 's':
        return f || i ? 'nokkrar sekúndur' : 'nokkrum sekúndum';
      case 'm':
        return f ? 'mínúta' : 'mínútu';
      case 'mm':
        return fP(g) ? h + (f || i ? 'mínútur' : 'mínútum')  : f ? h + 'mínúta' : h + 'mínútu';
      case 'hh':
        return fP(g) ? h + (f || i ? 'klukkustundir' : 'klukkustundum')  : h + 'klukkustund';
      case 'd':
        return f ? 'dagur' : i ? 'dag' : 'degi';
      case 'dd':
        return fP(g) ? f ? h + 'dagar' : h + (i ? 'daga' : 'dögum')  : f ? h + 'dagur' : h + (i ? 'dag' : 'degi');
      case 'M':
        return f ? 'mánuður' : i ? 'mánuð' : 'mánuði';
      case 'MM':
        return fP(g) ? f ? h + 'mánuðir' : h + (i ? 'mánuði' : 'mánuðum')  : f ? h + 'mánuður' : h + (i ? 'mánuð' : 'mánuði');
      case 'y':
        return f || i ? 'ár' : 'ári';
      case 'yy':
        return fP(g) ? h + (f || i ? 'ár' : 'árum')  : h + (f || i ? 'ár' : 'ári')
    }
  }
  function eW(f, e) {
    var h = {
      nominative: 'იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი'.split('_'),
      accusative: 'იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს'.split('_')
    },
    g = /D[oD] *MMMM?/.test(e) ? 'accusative' : 'nominative';
    return h[g][f.month()]
  }
  function eJ(f, e) {
    var h = {
      nominative: 'კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი'.split('_'),
      accusative: 'კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს'.split('_')
    },
    g = /(წინა|შემდეგ)/.test(e) ? 'accusative' : 'nominative';
    return h[g][f.day()]
  }
  function ew(g, f, j, i) {
    var h = {
      m: [
        'eng Minutt',
        'enger Minutt'
      ],
      h: [
        'eng Stonn',
        'enger Stonn'
      ],
      d: [
        'een Dag',
        'engem Dag'
      ],
      M: [
        'ee Mount',
        'engem Mount'
      ],
      y: [
        'ee Joer',
        'engem Joer'
      ]
    };
    return f ? h[j][0] : h[j][1]
  }
  function ej(d) {
    var c = d.substr(0, d.indexOf(' '));
    return dN(c) ? 'a ' + d : 'an ' + d
  }
  function dZ(d) {
    var c = d.substr(0, d.indexOf(' '));
    return dN(c) ? 'viru ' + d : 'virun ' + d
  }
  function dN(e) {
    if (e = parseInt(e, 10), isNaN(e)) {
      return !1
    }
    if (0 > e) {
      return !0
    }
    if (10 > e) {
      return e >= 4 && 7 >= e ? !0 : !1
    }
    if (100 > e) {
      var d = e % 10,
      f = e / 10;
      return dN(0 === d ? f : d)
    }
    if (10000 > e) {
      for (; e >= 10; ) {
        e /= 10
      }
      return dN(e)
    }
    return e /= 1000,
    dN(e)
  }
  function dA(f, e, h, g) {
    return e ? 'kelios sekundės' : g ? 'kelių sekundžių' : 'kelias sekundes'
  }
  function dm(f, e) {
    var h = {
      nominative: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
      accusative: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_')
    },
    g = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(e) ? 'accusative' : 'nominative';
    return h[g][f.month()]
  }
  function c2(f, e, h, g) {
    return e ? cx(h) [0] : g ? cx(h) [1] : cx(h) [2]
  }
  function cP(b) {
    return b % 10 === 0 || b > 10 && 20 > b
  }
  function cx(b) {
    return cB[b].split('_')
  }
  function cl(g, f, j, i) {
    var h = g + ' ';
    return 1 === g ? h + c2(g, f, j[0], i)  : f ? h + (cP(g) ? cx(j) [1] : cx(j) [0])  : i ? h + cx(j) [1] : h + (cP(g) ? cx(j) [1] : cx(j) [2])
  }
  function b2(f, e) {
    var h = - 1 === e.indexOf('dddd HH:mm'),
    g = cp[f.day()];
    return h ? g : g.substring(0, g.length - 2) + 'į'
  }
  function bQ(e, d, f) {
    return f ? d % 10 === 1 && 11 !== d ? e[2] : e[3] : d % 10 === 1 && 11 !== d ? e[0] : e[1]
  }
  function by(e, d, f) {
    return e + ' ' + bQ(b6[f], e, d)
  }
  function bm(e, d, f) {
    return bQ(b6[f], e, d)
  }
  function a3(d, c) {
    return c ? 'dažas sekundes' : 'dažām sekundēm'
  }
  function aR(b) {
    return 5 > b % 10 && b % 10 > 1 && ~~(b / 10) % 10 !== 1
  }
  function aF(f, e, h) {
    var g = f + ' ';
    switch (h) {
      case 'm':
        return e ? 'minuta' : 'minutę';
      case 'mm':
        return g + (aR(f) ? 'minuty' : 'minut');
      case 'h':
        return e ? 'godzina' : 'godzinę';
      case 'hh':
        return g + (aR(f) ? 'godziny' : 'godzin');
      case 'MM':
        return g + (aR(f) ? 'miesiące' : 'miesięcy');
      case 'yy':
        return g + (aR(f) ? 'lata' : 'lat')
    }
  }
  function am(g, f, j) {
    var i = {
      mm: 'minute',
      hh: 'ore',
      dd: 'zile',
      MM: 'luni',
      yy: 'ani'
    },
    h = ' ';
    return (g % 100 >= 20 || g >= 100 && g % 100 === 0) && (h = ' de '),
    g + h + i[j]
  }
  function hh(e, d) {
    var f = e.split('_');
    return d % 10 === 1 && d % 100 !== 11 ? f[0] : d % 10 >= 2 && 4 >= d % 10 && (10 > d % 100 || d % 100 >= 20) ? f[1] : f[2]
  }
  function gQ(f, e, h) {
    var g = {
      mm: e ? 'минута_минуты_минут' : 'минуту_минуты_минут',
      hh: 'час_часа_часов',
      dd: 'день_дня_дней',
      MM: 'месяц_месяца_месяцев',
      yy: 'год_года_лет'
    };
    return 'm' === h ? e ? 'минута' : 'минуту' : f + ' ' + hh(g[h], + f)
  }
  function bK(f, e) {
    var h = {
      nominative: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
      accusative: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_')
    },
    g = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(e) ? 'accusative' : 'nominative';
    return h[g][f.month()]
  }
  function bs(f, e) {
    var h = {
      nominative: 'янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек'.split('_'),
      accusative: 'янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек'.split('_')
    },
    g = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(e) ? 'accusative' : 'nominative';
    return h[g][f.month()]
  }
  function a9(f, e) {
    var h = {
      nominative: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
      accusative: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_')
    },
    g = /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/.test(e) ? 'accusative' : 'nominative';
    return h[g][f.day()]
  }
  function aX(b) {
    return b > 1 && 5 > b
  }
  function aL(g, f, j, i) {
    var h = g + ' ';
    switch (j) {
      case 's':
        return f || i ? 'pár sekúnd' : 'pár sekundami';
      case 'm':
        return f ? 'minúta' : i ? 'minútu' : 'minútou';
      case 'mm':
        return f || i ? h + (aX(g) ? 'minúty' : 'minút')  : h + 'minútami';
        break;
      case 'h':
        return f ? 'hodina' : i ? 'hodinu' : 'hodinou';
      case 'hh':
        return f || i ? h + (aX(g) ? 'hodiny' : 'hodín')  : h + 'hodinami';
        break;
      case 'd':
        return f || i ? 'deň' : 'dňom';
      case 'dd':
        return f || i ? h + (aX(g) ? 'dni' : 'dní')  : h + 'dňami';
        break;
      case 'M':
        return f || i ? 'mesiac' : 'mesiacom';
      case 'MM':
        return f || i ? h + (aX(g) ? 'mesiace' : 'mesiacov')  : h + 'mesiacmi';
        break;
      case 'y':
        return f || i ? 'rok' : 'rokom';
      case 'yy':
        return f || i ? h + (aX(g) ? 'roky' : 'rokov')  : h + 'rokmi'
    }
  }
  function az(g, f, j, i) {
    var h = g + ' ';
    switch (j) {
      case 's':
        return f || i ? 'nekaj sekund' : 'nekaj sekundami';
      case 'm':
        return f ? 'ena minuta' : 'eno minuto';
      case 'mm':
        return h += 1 === g ? f ? 'minuta' : 'minuto' : 2 === g ? f || i ? 'minuti' : 'minutama' : 5 > g ? f || i ? 'minute' : 'minutami' : f || i ? 'minut' : 'minutami';
      case 'h':
        return f ? 'ena ura' : 'eno uro';
      case 'hh':
        return h += 1 === g ? f ? 'ura' : 'uro' : 2 === g ? f || i ? 'uri' : 'urama' : 5 > g ? f || i ? 'ure' : 'urami' : f || i ? 'ur' : 'urami';
      case 'd':
        return f || i ? 'en dan' : 'enim dnem';
      case 'dd':
        return h += 1 === g ? f || i ? 'dan' : 'dnem' : 2 === g ? f || i ? 'dni' : 'dnevoma' : f || i ? 'dni' : 'dnevi';
      case 'M':
        return f || i ? 'en mesec' : 'enim mesecem';
      case 'MM':
        return h += 1 === g ? f || i ? 'mesec' : 'mesecem' : 2 === g ? f || i ? 'meseca' : 'mesecema' : 5 > g ? f || i ? 'mesece' : 'meseci' : f || i ? 'mesecev' : 'meseci';
      case 'y':
        return f || i ? 'eno leto' : 'enim letom';
      case 'yy':
        return h += 1 === g ? f || i ? 'leto' : 'letom' : 2 === g ? f || i ? 'leti' : 'letoma' : 5 > g ? f || i ? 'leta' : 'leti' : f || i ? 'let' : 'leti'
    }
  }
  function hn(g, f, j, i) {
    var h = {
      s: [
        'viensas secunds',
        '\'iensas secunds'
      ],
      m: [
        '\'n míut',
        '\'iens míut'
      ],
      mm: [
        g + ' míuts',
        ' ' + g + ' míuts'
      ],
      h: [
        '\'n þora',
        '\'iensa þora'
      ],
      hh: [
        g + ' þoras',
        ' ' + g + ' þoras'
      ],
      d: [
        '\'n ziua',
        '\'iensa ziua'
      ],
      dd: [
        g + ' ziuas',
        ' ' + g + ' ziuas'
      ],
      M: [
        '\'n mes',
        '\'iens mes'
      ],
      MM: [
        g + ' mesen',
        ' ' + g + ' mesen'
      ],
      y: [
        '\'n ar',
        '\'iens ar'
      ],
      yy: [
        g + ' ars',
        ' ' + g + ' ars'
      ]
    };
    return i ? h[j][0] : f ? h[j][0] : h[j][1].trim()
  }
  function g4(e, d) {
    var f = e.split('_');
    return d % 10 === 1 && d % 100 !== 11 ? f[0] : d % 10 >= 2 && 4 >= d % 10 && (10 > d % 100 || d % 100 >= 20) ? f[1] : f[2]
  }
  function gK(f, e, h) {
    var g = {
      mm: 'хвилина_хвилини_хвилин',
      hh: 'година_години_годин',
      dd: 'день_дні_днів',
      MM: 'місяць_місяці_місяців',
      yy: 'рік_роки_років'
    };
    return 'm' === h ? e ? 'хвилина' : 'хвилину' : 'h' === h ? e ? 'година' : 'годину' : f + ' ' + g4(g[h], + f)
  }
  function f0(f, e) {
    var h = {
      nominative: 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_'),
      accusative: 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_')
    },
    g = /D[oD]? *MMMM?/.test(e) ? 'accusative' : 'nominative';
    return h[g][f.month()]
  }
  function fm(f, e) {
    var h = {
      nominative: 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
      accusative: 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу'.split('_'),
      genitive: 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи'.split('_')
    },
    g = /(\[[ВвУу]\]) ?dddd/.test(e) ? 'accusative' : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(e) ? 'genitive' : 'nominative';
    return h[g][f.day()]
  }
  function e2(b) {
    return function () {
      return b + 'о' + (11 === this.hours() ? 'б' : '') + '] LT'
    }
  }
  var eP,
  eC,
  ep = fW.momentProperties = [
  ],
  d5 = !1,
  dT = {
  },
  dG = {
  },
  dt = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
  c8 = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
  cV = {
  },
  cD = {
  },
  cr = /\d/,
  b8 = /\d\d/,
  bW = /\d{3}/,
  bE = /\d{4}/,
  cJ = /[+-]?\d{6}/,
  at = /\d\d?/,
  gW = /\d{1,3}/,
  gx = /\d{1,4}/,
  fN = /[+-]?\d{1,6}/,
  e8 = /\d+/,
  eV = /[+-]?\d+/,
  eI = /Z|[+-]\d\d:?\d\d/gi,
  ev = /[+-]?\d+(\.\d{1,3})?/,
  ei = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
  dY = {
  },
  dM = {
  },
  dz = 0,
  dl = 1,
  c1 = 2,
  cO = 3,
  cw = 4,
  ck = 5,
  b1 = 6;
  gv('M', [
    'MM',
    2
  ], 'Mo', function () {
    return this.month() + 1
  }),
  gv('MMM', 0, 0, function (b) {
    return this.localeData().monthsShort(this, b)
  }),
  gv('MMMM', 0, 0, function (b) {
    return this.localeData().months(this, b)
  }),
  fo('month', 'M'),
  gn('M', at),
  gn('MM', at, b8),
  gn('MMM', ei),
  gn('MMMM', ei),
  gk(['M',
  'MM'], function (d, c) {
    c[dl] = fz(d) - 1
  }),
  gk(['MMM',
  'MMMM'], function (g, f, j, i) {
    var h = j._locale.monthsParse(g, i, j._strict);
    null != h ? f[dl] = h : fG(j).invalidMonth = g
  });
  var bP = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
  bx = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
  bl = {
  };
  fW.suppressDeprecationWarnings = !1;
  var a2 = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
  aQ = [
    ['YYYYYY-MM-DD',
    /[+-]\d{6}-\d{2}-\d{2}/],
    [
      'YYYY-MM-DD',
      /\d{4}-\d{2}-\d{2}/
    ],
    [
      'GGGG-[W]WW-E',
      /\d{4}-W\d{2}-\d/
    ],
    [
      'GGGG-[W]WW',
      /\d{4}-W\d{2}/
    ],
    [
      'YYYY-DDD',
      /\d{4}-\d{3}/
    ]
  ],
  aE = [
    ['HH:mm:ss.SSSS',
    /(T| )\d\d:\d\d:\d\d\.\d+/],
    [
      'HH:mm:ss',
      /(T| )\d\d:\d\d:\d\d/
    ],
    [
      'HH:mm',
      /(T| )\d\d:\d\d/
    ],
    [
      'HH',
      /(T| )\d\d/
    ]
  ],
  al = /^\/?Date\((\-?\d+)/i;
  fW.createFromInputFallback = g1('moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.', function (b) {
    b._d = new Date(b._i + (b._useUTC ? ' UTC' : ''))
  }),
  gv(0, [
    'YY',
    2
  ], 0, function () {
    return this.year() % 100
  }),
  gv(0, [
    'YYYY',
    4
  ], 0, 'year'),
  gv(0, [
    'YYYYY',
    5
  ], 0, 'year'),
  gv(0, [
    'YYYYYY',
    6,
    !0
  ], 0, 'year'),
  fo('year', 'y'),
  gn('Y', eV),
  gn('YY', at, b8),
  gn('YYYY', gx, bE),
  gn('YYYYY', fN, cJ),
  gn('YYYYYY', fN, cJ),
  gk(['YYYYY',
  'YYYYYY'], dz),
  gk('YYYY', function (a, d) {
    d[dz] = 2 === a.length ? fW.parseTwoDigitYear(a)  : fz(a)
  }),
  gk('YY', function (a, d) {
    d[dz] = fW.parseTwoDigitYear(a)
  }),
  fW.parseTwoDigitYear = function (b) {
    return fz(b) + (fz(b) > 68 ? 1900 : 2000)
  };
  var g9 = gE('FullYear', !1);
  gv('w', [
    'ww',
    2
  ], 'wo', 'week'),
  gv('W', [
    'WW',
    2
  ], 'Wo', 'isoWeek'),
  fo('week', 'w'),
  fo('isoWeek', 'W'),
  gn('w', at),
  gn('ww', at, b8),
  gn('W', at),
  gn('WW', at, b8),
  gj(['w',
  'ww',
  'W',
  'WW'], function (f, e, h, g) {
    e[g.substr(0, 1)] = fz(f)
  });
  var gP = {
    dow: 0,
    doy: 6
  };
  gv('DDD', [
    'DDDD',
    3
  ], 'DDDo', 'dayOfYear'),
  fo('dayOfYear', 'DDD'),
  gn('DDD', gW),
  gn('DDDD', bW),
  gk(['DDD',
  'DDDD'], function (e, d, f) {
    f._dayOfYear = fz(e)
  }),
  fW.ISO_8601 = function () {
  };
  var bJ = g1('moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548', function () {
    var b = a0.apply(null, arguments);
    return this > b ? this : b
  }),
  br = g1('moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548', function () {
    var b = a0.apply(null, arguments);
    return b > this ? this : b
  });
  f4('Z', ':'),
  f4('ZZ', ''),
  gn('Z', eI),
  gn('ZZ', eI),
  gk(['Z',
  'ZZ'], function (e, d, f) {
    f._useUTC = !0,
    f._tzm = fr(e)
  });
  var a8 = /([\+\-]|\d\d)/gi;
  fW.updateOffset = function () {
  };
  var aW = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
  aK = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
  bZ.fn = g7.prototype;
  var ay = gZ(1, 'add'),
  hm = gZ( - 1, 'subtract');
  fW.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
  var g3 = g1('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function (b) {
    return void 0 === b ? this.localeData()  : this.locale(b)
  });
  gv(0, [
    'gg',
    2
  ], 0, function () {
    return this.weekYear() % 100
  }),
  gv(0, [
    'GG',
    2
  ], 0, function () {
    return this.isoWeekYear() % 100
  }),
  aZ('gggg', 'weekYear'),
  aZ('ggggg', 'weekYear'),
  aZ('GGGG', 'isoWeekYear'),
  aZ('GGGGG', 'isoWeekYear'),
  fo('weekYear', 'gg'),
  fo('isoWeekYear', 'GG'),
  gn('G', eV),
  gn('g', eV),
  gn('GG', at, b8),
  gn('gg', at, b8),
  gn('GGGG', gx, bE),
  gn('gggg', gx, bE),
  gn('GGGGG', fN, cJ),
  gn('ggggg', fN, cJ),
  gj(['gggg',
  'ggggg',
  'GGGG',
  'GGGGG'], function (f, e, h, g) {
    e[g.substr(0, 2)] = fz(f)
  }),
  gj(['gg',
  'GG'], function (a, h, g, f) {
    h[f] = fW.parseTwoDigitYear(a)
  }),
  gv('Q', 0, 0, 'quarter'),
  fo('quarter', 'Q'),
  gn('Q', cr),
  gk('Q', function (d, c) {
    c[dl] = 3 * (fz(d) - 1)
  }),
  gv('D', [
    'DD',
    2
  ], 'Do', 'date'),
  fo('date', 'D'),
  gn('D', at),
  gn('DD', at, b8),
  gn('Do', function (d, c) {
    return d ? c._ordinalParse : c._ordinalParseLenient
  }),
  gk(['D',
  'DD'], c1),
  gk('Do', function (d, c) {
    c[c1] = fz(d.match(at) [0], 10)
  });
  var gJ = gE('Date', !0);
  gv('d', 0, 'do', 'day'),
  gv('dd', 0, 0, function (b) {
    return this.localeData().weekdaysMin(this, b)
  }),
  gv('ddd', 0, 0, function (b) {
    return this.localeData().weekdaysShort(this, b)
  }),
  gv('dddd', 0, 0, function (b) {
    return this.localeData().weekdays(this, b)
  }),
  gv('e', 0, 0, 'weekday'),
  gv('E', 0, 0, 'isoWeekday'),
  fo('day', 'd'),
  fo('weekday', 'e'),
  fo('isoWeekday', 'E'),
  gn('d', at),
  gn('e', at),
  gn('E', at),
  gn('dd', ei),
  gn('ddd', ei),
  gn('dddd', ei),
  gj(['dd',
  'ddd',
  'dddd'], function (f, e, h) {
    var g = h._locale.weekdaysParse(f);
    null != g ? e.d = g : fG(h).invalidWeekday = f
  }),
  gj(['d',
  'e',
  'E'], function (f, e, h, g) {
    e[g] = fz(f)
  });
  var fZ = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
  fl = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
  e1 = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
  gv('H', [
    'HH',
    2
  ], 0, 'hour'),
  gv('h', [
    'hh',
    2
  ], 0, function () {
    return this.hours() % 12 || 12
  }),
  dv('a', !0),
  dv('A', !1),
  fo('hour', 'h'),
  gn('a', dh),
  gn('A', dh),
  gn('H', at),
  gn('h', at),
  gn('HH', at, b8),
  gn('hh', at, b8),
  gk(['H',
  'HH'], cO),
  gk(['a',
  'A'], function (e, d, f) {
    f._isPm = f._locale.isPM(e),
    f._meridiem = e
  }),
  gk(['h',
  'hh'], function (e, d, f) {
    d[cO] = fz(e),
    fG(f).bigHour = !0
  });
  var eO = /[ap]\.?m?\.?/i,
  eB = gE('Hours', !0);
  gv('m', [
    'mm',
    2
  ], 0, 'minute'),
  fo('minute', 'm'),
  gn('m', at),
  gn('mm', at, b8),
  gk(['m',
  'mm'], cw);
  var eo = gE('Minutes', !1);
  gv('s', [
    'ss',
    2
  ], 0, 'second'),
  fo('second', 's'),
  gn('s', at),
  gn('ss', at, b8),
  gk(['s',
  'ss'], ck);
  var d4 = gE('Seconds', !1);
  gv('S', 0, 0, function () {
    return ~~(this.millisecond() / 100)
  }),
  gv(0, [
    'SS',
    2
  ], 0, function () {
    return ~~(this.millisecond() / 10)
  }),
  gv(0, [
    'SSS',
    3
  ], 0, 'millisecond'),
  gv(0, [
    'SSSS',
    4
  ], 0, function () {
    return 10 * this.millisecond()
  }),
  gv(0, [
    'SSSSS',
    5
  ], 0, function () {
    return 100 * this.millisecond()
  }),
  gv(0, [
    'SSSSSS',
    6
  ], 0, function () {
    return 1000 * this.millisecond()
  }),
  gv(0, [
    'SSSSSSS',
    7
  ], 0, function () {
    return 10000 * this.millisecond()
  }),
  gv(0, [
    'SSSSSSSS',
    8
  ], 0, function () {
    return 100000 * this.millisecond()
  }),
  gv(0, [
    'SSSSSSSSS',
    9
  ], 0, function () {
    return 1000000 * this.millisecond()
  }),
  fo('millisecond', 'ms'),
  gn('S', gW, cr),
  gn('SS', gW, b8),
  gn('SSS', gW, bW);
  var dS;
  for (dS = 'SSSS'; dS.length <= 9; dS += 'S') {
    gn(dS, e8)
  }
  for (dS = 'S'; dS.length <= 9; dS += 'S') {
    gk(dS, ct)
  }
  var dF = gE('Milliseconds', !1);
  gv('z', 0, 0, 'zoneAbbr'),
  gv('zz', 0, 0, 'zoneName');
  var ds = fC.prototype;
  ds.add = ay,
  ds.calendar = fT,
  ds.clone = fi,
  ds.diff = d1,
  ds.endOf = a5,
  ds.format = c4,
  ds.from = cR,
  ds.fromNow = cz,
  ds.to = cn,
  ds.toNow = b4,
  ds.get = gy,
  ds.invalidAt = bi,
  ds.isAfter = eY,
  ds.isBefore = eL,
  ds.isBetween = ey,
  ds.isSame = el,
  ds.isValid = bM,
  ds.lang = g3,
  ds.locale = bS,
  ds.localeData = bA,
  ds.max = br,
  ds.min = bJ,
  ds.parsingFlags = bu,
  ds.set = gy,
  ds.startOf = bo,
  ds.subtract = hm,
  ds.toArray = hj,
  ds.toObject = gS,
  ds.toDate = ao,
  ds.toISOString = dp,
  ds.toJSON = dp,
  ds.toString = dC,
  ds.unix = aH,
  ds.valueOf = aT,
  ds.year = g9,
  ds.isLeapYear = d2,
  ds.weekYear = aB,
  ds.isoWeekYear = ai,
  ds.quarter = ds.quarters = f2,
  ds.month = f5,
  ds.daysInMonth = f3,
  ds.week = ds.weeks = cS,
  ds.isoWeek = ds.isoWeeks = cA,
  ds.weeksInYear = gM,
  ds.isoWeeksInYear = g6,
  ds.date = gJ,
  ds.day = ds.days = d7,
  ds.weekday = dV,
  ds.isoWeekday = dI,
  ds.dayOfYear = b5,
  ds.hour = ds.hours = eB,
  ds.minute = ds.minutes = eo,
  ds.second = ds.seconds = d4,
  ds.millisecond = ds.milliseconds = dF,
  ds.utcOffset = eF,
  ds.utc = d8,
  ds.local = dW,
  ds.parseZone = dJ,
  ds.hasAlignedHourOffset = dw,
  ds.isDST = di,
  ds.isDSTShifted = cY,
  ds.isLocal = cG,
  ds.isUtcOffset = cu,
  ds.isUtc = ci,
  ds.isUTC = ci,
  ds.zoneAbbr = ch,
  ds.zoneName = bY,
  ds.dates = g1('dates accessor is deprecated. Use date instead.', gJ),
  ds.months = g1('months accessor is deprecated. Use month instead', f5),
  ds.years = g1('years accessor is deprecated. Use year instead', g9),
  ds.zone = g1('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779', es);
  var c7 = ds,
  cU = {
    sameDay: '[Today at] LT',
    nextDay: '[Tomorrow at] LT',
    nextWeek: 'dddd [at] LT',
    lastDay: '[Yesterday at] LT',
    lastWeek: '[Last] dddd [at] LT',
    sameElse: 'L'
  },
  cC = {
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A'
  },
  cq = 'Invalid date',
  b7 = '%d',
  bV = /\d{1,2}/,
  bD = {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years'
  },
  cI = fx.prototype;
  cI._calendar = cU,
  cI.calendar = av,
  cI._longDateFormat = cC,
  cI.longDateFormat = gY,
  cI._invalidDate = cq,
  cI.invalidDate = gB,
  cI._ordinal = b7,
  cI.ordinal = fR,
  cI._ordinalParse = bV,
  cI.preparse = fh,
  cI.postformat = fh,
  cI._relativeTime = bD,
  cI.relativeTime = eX,
  cI.pastFuture = eK,
  cI.set = ex,
  cI.months = f9,
  cI._months = bP,
  cI.monthsShort = f8,
  cI._monthsShort = bx,
  cI.monthsParse = f7,
  cI.week = dD,
  cI._week = gP,
  cI.firstDayOfYear = c5,
  cI.firstDayOfWeek = dq,
  cI.weekdays = e4,
  cI._weekdays = fZ,
  cI.weekdaysMin = eE,
  cI._weekdaysMin = e1,
  cI.weekdaysShort = eR,
  cI._weekdaysShort = fl,
  cI.weekdaysParse = er,
  cI.isPM = cX,
  cI._meridiemParse = eO,
  cI.meridiem = cF,
  ft('en', {
    ordinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function (e) {
      var d = e % 10,
      f = 1 === fz(e % 100 / 10) ? 'th' : 1 === d ? 'st' : 2 === d ? 'nd' : 3 === d ? 'rd' : 'th';
      return e + f
    }
  }),
  fW.lang = g1('moment.lang is deprecated. Use moment.locale instead.', ft),
  fW.langData = g1('moment.langData is deprecated. Use moment.localeData instead.', fq);
  var ar = Math.abs,
  gV = hi('ms'),
  gu = hi('s'),
  fK = hi('m'),
  e7 = hi('h'),
  eU = hi('d'),
  eH = hi('w'),
  eu = hi('M'),
  eh = hi('y'),
  dL = bL('milliseconds'),
  dy = bL('seconds'),
  dk = bL('minutes'),
  c0 = bL('hours'),
  cN = bL('days'),
  cv = bL('months'),
  cj = bL('years'),
  b0 = Math.round,
  bO = {
    s: 45,
    m: 45,
    h: 22,
    d: 26,
    M: 11
  },
  bw = Math.abs,
  bk = g7.prototype;
  bk.abs = cy,
  bk.add = b3,
  bk.subtract = bR,
  bk.as = aG,
  bk.asMilliseconds = gV,
  bk.asSeconds = gu,
  bk.asMinutes = fK,
  bk.asHours = e7,
  bk.asDays = eU,
  bk.asWeeks = eH,
  bk.asMonths = eu,
  bk.asYears = eh,
  bk.valueOf = an,
  bk._bubble = bn,
  bk.get = gR,
  bk.milliseconds = dL,
  bk.seconds = dy,
  bk.minutes = dk,
  bk.hours = c0,
  bk.days = cN,
  bk.weeks = bt,
  bk.months = cv,
  bk.years = cj,
  bk.humanize = aA,
  bk.toISOString = ah,
  bk.toString = ah,
  bk.toJSON = ah,
  bk.locale = bS,
  bk.localeData = bA,
  bk.toIsoString = g1('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', ah),
  bk.lang = g3,
  gv('X', 0, 0, 'unix'),
  gv('x', 0, 0, 'valueOf'),
  gn('x', eV),
  gn('X', ev),
  gk('X', function (e, d, f) {
    f._d = new Date(1000 * parseFloat(e, 10))
  }),
  gk('x', function (e, d, f) {
    f._d = new Date(fz(e))
  }),
  fW.version = '2.10.6',
  fU(a0),
  fW.fn = c7,
  fW.min = aC,
  fW.max = aj,
  fW.utc = fJ,
  fW.unix = bG,
  fW.months = dO,
  fW.isDate = fQ,
  fW.locale = ft,
  fW.invalid = fE,
  fW.duration = bZ,
  fW.isMoment = fB,
  fW.weekdays = dn,
  fW.parseZone = cL,
  fW.localeData = fq,
  fW.isDuration = gN,
  fW.monthsShort = dB,
  fW.weekdaysMin = cQ,
  fW.defineLocale = fs,
  fW.weekdaysShort = c3,
  fW.normalizeUnits = gH,
  fW.relativeTimeThreshold = aM;
  var a1 = fW,
  aP = (a1.defineLocale('af', {
    months: 'Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'),
    weekdays: 'Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag'.split('_'),
    weekdaysShort: 'Son_Maa_Din_Woe_Don_Vry_Sat'.split('_'),
    weekdaysMin: 'So_Ma_Di_Wo_Do_Vr_Sa'.split('_'),
    meridiemParse: /vm|nm/i,
    isPM: function (b) {
      return /^nm$/i.test(b)
    },
    meridiem: function (e, d, f) {
      return 12 > e ? f ? 'vm' : 'VM' : f ? 'nm' : 'NM'
    },
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Vandag om] LT',
      nextDay: '[Môre om] LT',
      nextWeek: 'dddd [om] LT',
      lastDay: '[Gister om] LT',
      lastWeek: '[Laas] dddd [om] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'oor %s',
      past: '%s gelede',
      s: '\'n paar sekondes',
      m: '\'n minuut',
      mm: '%d minute',
      h: '\'n uur',
      hh: '%d ure',
      d: '\'n dag',
      dd: '%d dae',
      M: '\'n maand',
      MM: '%d maande',
      y: '\'n jaar',
      yy: '%d jaar'
    },
    ordinalParse: /\d{1,2}(ste|de)/,
    ordinal: function (b) {
      return b + (1 === b || 8 === b || b >= 20 ? 'ste' : 'de')
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), a1.defineLocale('ar-ma', {
    months: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
    monthsShort: 'يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر'.split('_'),
    weekdays: 'الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort: 'احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[اليوم على الساعة] LT',
      nextDay: '[غدا على الساعة] LT',
      nextWeek: 'dddd [على الساعة] LT',
      lastDay: '[أمس على الساعة] LT',
      lastWeek: 'dddd [على الساعة] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'في %s',
      past: 'منذ %s',
      s: 'ثوان',
      m: 'دقيقة',
      mm: '%d دقائق',
      h: 'ساعة',
      hh: '%d ساعات',
      d: 'يوم',
      dd: '%d أيام',
      M: 'شهر',
      MM: '%d أشهر',
      y: 'سنة',
      yy: '%d سنوات'
    },
    week: {
      dow: 6,
      doy: 12
    }
  }), {
    1: '١',
    2: '٢',
    3: '٣',
    4: '٤',
    5: '٥',
    6: '٦',
    7: '٧',
    8: '٨',
    9: '٩',
    0: '٠'
  }),
  aD = {
    '١': '1',
    '٢': '2',
    '٣': '3',
    '٤': '4',
    '٥': '5',
    '٦': '6',
    '٧': '7',
    '٨': '8',
    '٩': '9',
    '٠': '0'
  },
  ak = (a1.defineLocale('ar-sa', {
    months: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
    monthsShort: 'يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
    weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    meridiemParse: /ص|م/,
    isPM: function (b) {
      return 'م' === b
    },
    meridiem: function (e, d, f) {
      return 12 > e ? 'ص' : 'م'
    },
    calendar: {
      sameDay: '[اليوم على الساعة] LT',
      nextDay: '[غدا على الساعة] LT',
      nextWeek: 'dddd [على الساعة] LT',
      lastDay: '[أمس على الساعة] LT',
      lastWeek: 'dddd [على الساعة] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'في %s',
      past: 'منذ %s',
      s: 'ثوان',
      m: 'دقيقة',
      mm: '%d دقائق',
      h: 'ساعة',
      hh: '%d ساعات',
      d: 'يوم',
      dd: '%d أيام',
      M: 'شهر',
      MM: '%d أشهر',
      y: 'سنة',
      yy: '%d سنوات'
    },
    preparse: function (b) {
      return b.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (c) {
        return aD[c]
      }).replace(/،/g, ',')
    },
    postformat: function (b) {
      return b.replace(/\d/g, function (c) {
        return aP[c]
      }).replace(/,/g, '،')
    },
    week: {
      dow: 6,
      doy: 12
    }
  }), a1.defineLocale('ar-tn', {
    months: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
    monthsShort: 'جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر'.split('_'),
    weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[اليوم على الساعة] LT',
      nextDay: '[غدا على الساعة] LT',
      nextWeek: 'dddd [على الساعة] LT',
      lastDay: '[أمس على الساعة] LT',
      lastWeek: 'dddd [على الساعة] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'في %s',
      past: 'منذ %s',
      s: 'ثوان',
      m: 'دقيقة',
      mm: '%d دقائق',
      h: 'ساعة',
      hh: '%d ساعات',
      d: 'يوم',
      dd: '%d أيام',
      M: 'شهر',
      MM: '%d أشهر',
      y: 'سنة',
      yy: '%d سنوات'
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), {
    1: '١',
    2: '٢',
    3: '٣',
    4: '٤',
    5: '٥',
    6: '٦',
    7: '٧',
    8: '٨',
    9: '٩',
    0: '٠'
  }),
  g8 = {
    '١': '1',
    '٢': '2',
    '٣': '3',
    '٤': '4',
    '٥': '5',
    '٦': '6',
    '٧': '7',
    '٨': '8',
    '٩': '9',
    '٠': '0'
  },
  gO = function (b) {
    return 0 === b ? 0 : 1 === b ? 1 : 2 === b ? 2 : b % 100 >= 3 && 10 >= b % 100 ? 3 : b % 100 >= 11 ? 4 : 5
  },
  bI = {
    s: [
      'أقل من ثانية',
      'ثانية واحدة',
      [
        'ثانيتان',
        'ثانيتين'
      ],
      '%d ثوان',
      '%d ثانية',
      '%d ثانية'
    ],
    m: [
      'أقل من دقيقة',
      'دقيقة واحدة',
      [
        'دقيقتان',
        'دقيقتين'
      ],
      '%d دقائق',
      '%d دقيقة',
      '%d دقيقة'
    ],
    h: [
      'أقل من ساعة',
      'ساعة واحدة',
      [
        'ساعتان',
        'ساعتين'
      ],
      '%d ساعات',
      '%d ساعة',
      '%d ساعة'
    ],
    d: [
      'أقل من يوم',
      'يوم واحد',
      [
        'يومان',
        'يومين'
      ],
      '%d أيام',
      '%d يومًا',
      '%d يوم'
    ],
    M: [
      'أقل من شهر',
      'شهر واحد',
      [
        'شهران',
        'شهرين'
      ],
      '%d أشهر',
      '%d شهرا',
      '%d شهر'
    ],
    y: [
      'أقل من عام',
      'عام واحد',
      [
        'عامان',
        'عامين'
      ],
      '%d أعوام',
      '%d عامًا',
      '%d عام'
    ]
  },
  bq = function (b) {
    return function (a, l, k, j) {
      var i = gO(a),
      h = bI[b][gO(a)];
      return 2 === i && (h = h[l ? 0 : 1]),
      h.replace(/%d/i, a)
    }
  },
  a7 = [
    'كانون الثاني يناير',
    'شباط فبراير',
    'آذار مارس',
    'نيسان أبريل',
    'أيار مايو',
    'حزيران يونيو',
    'تموز يوليو',
    'آب أغسطس',
    'أيلول سبتمبر',
    'تشرين الأول أكتوبر',
    'تشرين الثاني نوفمبر',
    'كانون الأول ديسمبر'
  ],
  aV = (a1.defineLocale('ar', {
    months: a7,
    monthsShort: a7,
    weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'D/M/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    meridiemParse: /ص|م/,
    isPM: function (b) {
      return 'م' === b
    },
    meridiem: function (e, d, f) {
      return 12 > e ? 'ص' : 'م'
    },
    calendar: {
      sameDay: '[اليوم عند الساعة] LT',
      nextDay: '[غدًا عند الساعة] LT',
      nextWeek: 'dddd [عند الساعة] LT',
      lastDay: '[أمس عند الساعة] LT',
      lastWeek: 'dddd [عند الساعة] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'بعد %s',
      past: 'منذ %s',
      s: bq('s'),
      m: bq('m'),
      mm: bq('m'),
      h: bq('h'),
      hh: bq('h'),
      d: bq('d'),
      dd: bq('d'),
      M: bq('M'),
      MM: bq('M'),
      y: bq('y'),
      yy: bq('y')
    },
    preparse: function (b) {
      return b.replace(/\u200f/g, '').replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (c) {
        return g8[c]
      }).replace(/،/g, ',')
    },
    postformat: function (b) {
      return b.replace(/\d/g, function (c) {
        return ak[c]
      }).replace(/,/g, '،')
    },
    week: {
      dow: 6,
      doy: 12
    }
  }), {
    1: '-inci',
    5: '-inci',
    8: '-inci',
    70: '-inci',
    80: '-inci',
    2: '-nci',
    7: '-nci',
    20: '-nci',
    50: '-nci',
    3: '-üncü',
    4: '-üncü',
    100: '-üncü',
    6: '-ncı',
    9: '-uncu',
    10: '-uncu',
    30: '-uncu',
    60: '-ıncı',
    90: '-ıncı'
  }),
  aJ = (a1.defineLocale('az', {
    months: 'yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr'.split('_'),
    monthsShort: 'yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek'.split('_'),
    weekdays: 'Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə'.split('_'),
    weekdaysShort: 'Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən'.split('_'),
    weekdaysMin: 'Bz_BE_ÇA_Çə_CA_Cü_Şə'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[bugün saat] LT',
      nextDay: '[sabah saat] LT',
      nextWeek: '[gələn həftə] dddd [saat] LT',
      lastDay: '[dünən] LT',
      lastWeek: '[keçən həftə] dddd [saat] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s sonra',
      past: '%s əvvəl',
      s: 'birneçə saniyyə',
      m: 'bir dəqiqə',
      mm: '%d dəqiqə',
      h: 'bir saat',
      hh: '%d saat',
      d: 'bir gün',
      dd: '%d gün',
      M: 'bir ay',
      MM: '%d ay',
      y: 'bir il',
      yy: '%d il'
    },
    meridiemParse: /gecə|səhər|gündüz|axşam/,
    isPM: function (b) {
      return /^(gündüz|axşam)$/.test(b)
    },
    meridiem: function (e, d, f) {
      return 4 > e ? 'gecə' : 12 > e ? 'səhər' : 17 > e ? 'gündüz' : 'axşam'
    },
    ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
    ordinal: function (f) {
      if (0 === f) {
        return f + '-ıncı'
      }
      var e = f % 10,
      h = f % 100 - e,
      g = f >= 100 ? 100 : null;
      return f + (aV[e] || aV[h] || aV[g])
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), a1.defineLocale('be', {
    months: f1,
    monthsShort: 'студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж'.split('_'),
    weekdays: fn,
    weekdaysShort: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
    weekdaysMin: 'нд_пн_ат_ср_чц_пт_сб'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY г.',
      LLL: 'D MMMM YYYY г., HH:mm',
      LLLL: 'dddd, D MMMM YYYY г., HH:mm'
    },
    calendar: {
      sameDay: '[Сёння ў] LT',
      nextDay: '[Заўтра ў] LT',
      lastDay: '[Учора ў] LT',
      nextWeek: function () {
        return '[У] dddd [ў] LT'
      },
      lastWeek: function () {
        switch (this.day()) {
          case 0:
          case 3:
          case 5:
          case 6:
            return '[У мінулую] dddd [ў] LT';
          case 1:
          case 2:
          case 4:
            return '[У мінулы] dddd [ў] LT'
        }
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'праз %s',
      past: '%s таму',
      s: 'некалькі секунд',
      m: gL,
      mm: gL,
      h: gL,
      hh: gL,
      d: 'дзень',
      dd: gL,
      M: 'месяц',
      MM: gL,
      y: 'год',
      yy: gL
    },
    meridiemParse: /ночы|раніцы|дня|вечара/,
    isPM: function (b) {
      return /^(дня|вечара)$/.test(b)
    },
    meridiem: function (e, d, f) {
      return 4 > e ? 'ночы' : 12 > e ? 'раніцы' : 17 > e ? 'дня' : 'вечара'
    },
    ordinalParse: /\d{1,2}-(і|ы|га)/,
    ordinal: function (d, c) {
      switch (c) {
        case 'M':
        case 'd':
        case 'DDD':
        case 'w':
        case 'W':
          return d % 10 !== 2 && d % 10 !== 3 || d % 100 === 12 || d % 100 === 13 ? d + '-ы' : d + '-і';
        case 'D':
          return d + '-га';
        default:
          return d
      }
    },
    week: {
      dow: 1,
      doy: 7
    }
  }),
  a1.defineLocale('bg', {
    months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
    monthsShort: 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
    weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
    weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
    weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'D.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY H:mm',
      LLLL: 'dddd, D MMMM YYYY H:mm'
    },
    calendar: {
      sameDay: '[Днес в] LT',
      nextDay: '[Утре в] LT',
      nextWeek: 'dddd [в] LT',
      lastDay: '[Вчера в] LT',
      lastWeek: function () {
        switch (this.day()) {
          case 0:
          case 3:
          case 6:
            return '[В изминалата] dddd [в] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[В изминалия] dddd [в] LT'
        }
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'след %s',
      past: 'преди %s',
      s: 'няколко секунди',
      m: 'минута',
      mm: '%d минути',
      h: 'час',
      hh: '%d часа',
      d: 'ден',
      dd: '%d дни',
      M: 'месец',
      MM: '%d месеца',
      y: 'година',
      yy: '%d години'
    },
    ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
    ordinal: function (e) {
      var d = e % 10,
      f = e % 100;
      return 0 === e ? e + '-ев' : 0 === f ? e + '-ен' : f > 10 && 20 > f ? e + '-ти' : 1 === d ? e + '-ви' : 2 === d ? e + '-ри' : 7 === d || 8 === d ? e + '-ми' : e + '-ти'
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), {
    1: '১',
    2: '২',
    3: '৩',
    4: '৪',
    5: '৫',
    6: '৬',
    7: '৭',
    8: '৮',
    9: '৯',
    0: '০'
  }),
  ax = {
    '১': '1',
    '২': '2',
    '৩': '3',
    '৪': '4',
    '৫': '5',
    '৬': '6',
    '৭': '7',
    '৮': '8',
    '৯': '9',
    '০': '0'
  },
  hl = (a1.defineLocale('bn', {
    months: 'জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর'.split('_'),
    monthsShort: 'জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্'.split('_'),
    weekdays: 'রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রুবার_শনিবার'.split('_'),
    weekdaysShort: 'রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্রু_শনি'.split('_'),
    weekdaysMin: 'রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি'.split('_'),
    longDateFormat: {
      LT: 'A h:mm সময়',
      LTS: 'A h:mm:ss সময়',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm সময়',
      LLLL: 'dddd, D MMMM YYYY, A h:mm সময়'
    },
    calendar: {
      sameDay: '[আজ] LT',
      nextDay: '[আগামীকাল] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[গতকাল] LT',
      lastWeek: '[গত] dddd, LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s পরে',
      past: '%s আগে',
      s: 'কএক সেকেন্ড',
      m: 'এক মিনিট',
      mm: '%d মিনিট',
      h: 'এক ঘন্টা',
      hh: '%d ঘন্টা',
      d: 'এক দিন',
      dd: '%d দিন',
      M: 'এক মাস',
      MM: '%d মাস',
      y: 'এক বছর',
      yy: '%d বছর'
    },
    preparse: function (b) {
      return b.replace(/[১২৩৪৫৬৭৮৯০]/g, function (c) {
        return ax[c]
      })
    },
    postformat: function (b) {
      return b.replace(/\d/g, function (c) {
        return aJ[c]
      })
    },
    meridiemParse: /রাত|সকাল|দুপুর|বিকেল|রাত/,
    isPM: function (b) {
      return /^(দুপুর|বিকেল|রাত)$/.test(b)
    },
    meridiem: function (e, d, f) {
      return 4 > e ? 'রাত' : 10 > e ? 'সকাল' : 17 > e ? 'দুপুর' : 20 > e ? 'বিকেল' : 'রাত'
    },
    week: {
      dow: 0,
      doy: 6
    }
  }), {
    1: '༡',
    2: '༢',
    3: '༣',
    4: '༤',
    5: '༥',
    6: '༦',
    7: '༧',
    8: '༨',
    9: '༩',
    0: '༠'
  }),
  g2 = {
    '༡': '1',
    '༢': '2',
    '༣': '3',
    '༤': '4',
    '༥': '5',
    '༦': '6',
    '༧': '7',
    '༨': '8',
    '༩': '9',
    '༠': '0'
  },
  gI = (a1.defineLocale('bo', {
    months: 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
    monthsShort: 'ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ'.split('_'),
    weekdays: 'གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་'.split('_'),
    weekdaysShort: 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
    weekdaysMin: 'ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་'.split('_'),
    longDateFormat: {
      LT: 'A h:mm',
      LTS: 'A h:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm',
      LLLL: 'dddd, D MMMM YYYY, A h:mm'
    },
    calendar: {
      sameDay: '[དི་རིང] LT',
      nextDay: '[སང་ཉིན] LT',
      nextWeek: '[བདུན་ཕྲག་རྗེས་མ], LT',
      lastDay: '[ཁ་སང] LT',
      lastWeek: '[བདུན་ཕྲག་མཐའ་མ] dddd, LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s ལ་',
      past: '%s སྔན་ལ',
      s: 'ལམ་སང',
      m: 'སྐར་མ་གཅིག',
      mm: '%d སྐར་མ',
      h: 'ཆུ་ཚོད་གཅིག',
      hh: '%d ཆུ་ཚོད',
      d: 'ཉིན་གཅིག',
      dd: '%d ཉིན་',
      M: 'ཟླ་བ་གཅིག',
      MM: '%d ཟླ་བ',
      y: 'ལོ་གཅིག',
      yy: '%d ལོ'
    },
    preparse: function (b) {
      return b.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (c) {
        return g2[c]
      })
    },
    postformat: function (b) {
      return b.replace(/\d/g, function (c) {
        return hl[c]
      })
    },
    meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
    isPM: function (b) {
      return /^(ཉིན་གུང|དགོང་དག|མཚན་མོ)$/.test(b)
    },
    meridiem: function (e, d, f) {
      return 4 > e ? 'མཚན་མོ' : 10 > e ? 'ཞོགས་ཀས' : 17 > e ? 'ཉིན་གུང' : 20 > e ? 'དགོང་དག' : 'མཚན་མོ'
    },
    week: {
      dow: 0,
      doy: 6
    }
  }), a1.defineLocale('br', {
    months: 'Genver_C\'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu'.split('_'),
    monthsShort: 'Gen_C\'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker'.split('_'),
    weekdays: 'Sul_Lun_Meurzh_Merc\'her_Yaou_Gwener_Sadorn'.split('_'),
    weekdaysShort: 'Sul_Lun_Meu_Mer_Yao_Gwe_Sad'.split('_'),
    weekdaysMin: 'Su_Lu_Me_Mer_Ya_Gw_Sa'.split('_'),
    longDateFormat: {
      LT: 'h[e]mm A',
      LTS: 'h[e]mm:ss A',
      L: 'DD/MM/YYYY',
      LL: 'D [a viz] MMMM YYYY',
      LLL: 'D [a viz] MMMM YYYY h[e]mm A',
      LLLL: 'dddd, D [a viz] MMMM YYYY h[e]mm A'
    },
    calendar: {
      sameDay: '[Hiziv da] LT',
      nextDay: '[Warc\'hoazh da] LT',
      nextWeek: 'dddd [da] LT',
      lastDay: '[Dec\'h da] LT',
      lastWeek: 'dddd [paset da] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'a-benn %s',
      past: '%s \'zo',
      s: 'un nebeud segondennoù',
      m: 'ur vunutenn',
      mm: e3,
      h: 'un eur',
      hh: '%d eur',
      d: 'un devezh',
      dd: e3,
      M: 'ur miz',
      MM: e3,
      y: 'ur bloaz',
      yy: eQ
    },
    ordinalParse: /\d{1,2}(añ|vet)/,
    ordinal: function (d) {
      var c = 1 === d ? 'añ' : 'vet';
      return d + c
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), a1.defineLocale('bs', {
    months: 'januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar'.split('_'),
    monthsShort: 'jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.'.split('_'),
    weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
    weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
    weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD. MM. YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm',
      LLLL: 'dddd, D. MMMM YYYY H:mm'
    },
    calendar: {
      sameDay: '[danas u] LT',
      nextDay: '[sutra u] LT',
      nextWeek: function () {
        switch (this.day()) {
          case 0:
            return '[u] [nedjelju] [u] LT';
          case 3:
            return '[u] [srijedu] [u] LT';
          case 6:
            return '[u] [subotu] [u] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[u] dddd [u] LT'
        }
      },
      lastDay: '[jučer u] LT',
      lastWeek: function () {
        switch (this.day()) {
          case 0:
          case 3:
            return '[prošlu] dddd [u] LT';
          case 6:
            return '[prošle] [subote] [u] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[prošli] dddd [u] LT'
        }
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'za %s',
      past: 'prije %s',
      s: 'par sekundi',
      m: dU,
      mm: dU,
      h: dU,
      hh: dU,
      d: 'dan',
      dd: dU,
      M: 'mjesec',
      MM: dU,
      y: 'godinu',
      yy: dU
    },
    ordinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      doy: 7
    }
  }),
  a1.defineLocale('ca', {
    months: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
    monthsShort: 'gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.'.split('_'),
    weekdays: 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
    weekdaysShort: 'dg._dl._dt._dc._dj._dv._ds.'.split('_'),
    weekdaysMin: 'Dg_Dl_Dt_Dc_Dj_Dv_Ds'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'LT:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY H:mm',
      LLLL: 'dddd D MMMM YYYY H:mm'
    },
    calendar: {
      sameDay: function () {
        return '[avui a ' + (1 !== this.hours() ? 'les' : 'la') + '] LT'
      },
      nextDay: function () {
        return '[demà a ' + (1 !== this.hours() ? 'les' : 'la') + '] LT'
      },
      nextWeek: function () {
        return 'dddd [a ' + (1 !== this.hours() ? 'les' : 'la') + '] LT'
      },
      lastDay: function () {
        return '[ahir a ' + (1 !== this.hours() ? 'les' : 'la') + '] LT'
      },
      lastWeek: function () {
        return '[el] dddd [passat a ' + (1 !== this.hours() ? 'les' : 'la') + '] LT'
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'en %s',
      past: 'fa %s',
      s: 'uns segons',
      m: 'un minut',
      mm: '%d minuts',
      h: 'una hora',
      hh: '%d hores',
      d: 'un dia',
      dd: '%d dies',
      M: 'un mes',
      MM: '%d mesos',
      y: 'un any',
      yy: '%d anys'
    },
    ordinalParse: /\d{1,2}(r|n|t|è|a)/,
    ordinal: function (e, d) {
      var f = 1 === e ? 'r' : 2 === e ? 'n' : 3 === e ? 'r' : 4 === e ? 't' : 'è';
      return ('w' === d || 'W' === d) && (f = 'a'),
      e + f
    },
    week: {
      dow: 1,
      doy: 4
    }
  }),
  'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_')), fX = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_'), fk = (a1.defineLocale('cs', {
    months: gI,
    monthsShort: fX,
    monthsParse: function (f, e) {
      var h,
      g = [
      ];
      for (h = 0; 12 > h; h++) {
        g[h] = new RegExp('^' + f[h] + '$|^' + e[h] + '$', 'i')
      }
      return g
    }(gI, fX),
    weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
    weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
    weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm',
      LLLL: 'dddd D. MMMM YYYY H:mm'
    },
    calendar: {
      sameDay: '[dnes v] LT',
      nextDay: '[zítra v] LT',
      nextWeek: function () {
        switch (this.day()) {
          case 0:
            return '[v neděli v] LT';
          case 1:
          case 2:
            return '[v] dddd [v] LT';
          case 3:
            return '[ve středu v] LT';
          case 4:
            return '[ve čtvrtek v] LT';
          case 5:
            return '[v pátek v] LT';
          case 6:
            return '[v sobotu v] LT'
        }
      },
      lastDay: '[včera v] LT',
      lastWeek: function () {
        switch (this.day()) {
          case 0:
            return '[minulou neděli v] LT';
          case 1:
          case 2:
            return '[minulé] dddd [v] LT';
          case 3:
            return '[minulou středu v] LT';
          case 4:
          case 5:
            return '[minulý] dddd [v] LT';
          case 6:
            return '[minulou sobotu v] LT'
        }
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'za %s',
      past: 'před %s',
      s: du,
      m: du,
      mm: du,
      h: du,
      hh: du,
      d: du,
      dd: du,
      M: du,
      MM: du,
      y: du,
      yy: du
    },
    ordinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      doy: 4
    }
  }),
  a1.defineLocale('cv', {
    months: 'кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав'.split('_'),
    monthsShort: 'кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш'.split('_'),
    weekdays: 'вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун'.split('_'),
    weekdaysShort: 'выр_тун_ытл_юн_кӗҫ_эрн_шӑм'.split('_'),
    weekdaysMin: 'вр_тн_ыт_юн_кҫ_эр_шм'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD-MM-YYYY',
      LL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]',
      LLL: 'YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm',
      LLLL: 'dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm'
    },
    calendar: {
      sameDay: '[Паян] LT [сехетре]',
      nextDay: '[Ыран] LT [сехетре]',
      lastDay: '[Ӗнер] LT [сехетре]',
      nextWeek: '[Ҫитес] dddd LT [сехетре]',
      lastWeek: '[Иртнӗ] dddd LT [сехетре]',
      sameElse: 'L'
    },
    relativeTime: {
      future: function (d) {
        var c = /сехет$/i.exec(d) ? 'рен' : /ҫул$/i.exec(d) ? 'тан' : 'ран';
        return d + c
      },
      past: '%s каялла',
      s: 'пӗр-ик ҫеккунт',
      m: 'пӗр минут',
      mm: '%d минут',
      h: 'пӗр сехет',
      hh: '%d сехет',
      d: 'пӗр кун',
      dd: '%d кун',
      M: 'пӗр уйӑх',
      MM: '%d уйӑх',
      y: 'пӗр ҫул',
      yy: '%d ҫул'
    },
    ordinalParse: /\d{1,2}-мӗш/,
    ordinal: '%d-мӗш',
    week: {
      dow: 1,
      doy: 7
    }
  }),
  a1.defineLocale('cy', {
    months: 'Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr'.split('_'),
    monthsShort: 'Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag'.split('_'),
    weekdays: 'Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn'.split('_'),
    weekdaysShort: 'Sul_Llun_Maw_Mer_Iau_Gwe_Sad'.split('_'),
    weekdaysMin: 'Su_Ll_Ma_Me_Ia_Gw_Sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Heddiw am] LT',
      nextDay: '[Yfory am] LT',
      nextWeek: 'dddd [am] LT',
      lastDay: '[Ddoe am] LT',
      lastWeek: 'dddd [diwethaf am] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'mewn %s',
      past: '%s yn ôl',
      s: 'ychydig eiliadau',
      m: 'munud',
      mm: '%d munud',
      h: 'awr',
      hh: '%d awr',
      d: 'diwrnod',
      dd: '%d diwrnod',
      M: 'mis',
      MM: '%d mis',
      y: 'blwyddyn',
      yy: '%d flynedd'
    },
    ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
    ordinal: function (f) {
      var e = f,
      h = '',
      g = [
        '',
        'af',
        'il',
        'ydd',
        'ydd',
        'ed',
        'ed',
        'ed',
        'fed',
        'fed',
        'fed',
        'eg',
        'fed',
        'eg',
        'eg',
        'fed',
        'eg',
        'eg',
        'fed',
        'eg',
        'fed'
      ];
      return e > 20 ? h = 40 === e || 50 === e || 60 === e || 80 === e || 100 === e ? 'fed' : 'ain' : e > 0 && (h = g[e]),
      f + h
    },
    week: {
      dow: 1,
      doy: 4
    }
  }),
  a1.defineLocale('da', {
    months: 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split('_'),
    monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
    weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
    weekdaysShort: 'søn_man_tir_ons_tor_fre_lør'.split('_'),
    weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY HH:mm',
      LLLL: 'dddd [d.] D. MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[I dag kl.] LT',
      nextDay: '[I morgen kl.] LT',
      nextWeek: 'dddd [kl.] LT',
      lastDay: '[I går kl.] LT',
      lastWeek: '[sidste] dddd [kl] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'om %s',
      past: '%s siden',
      s: 'få sekunder',
      m: 'et minut',
      mm: '%d minutter',
      h: 'en time',
      hh: '%d timer',
      d: 'en dag',
      dd: '%d dage',
      M: 'en måned',
      MM: '%d måneder',
      y: 'et år',
      yy: '%d år'
    },
    ordinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      doy: 4
    }
  }),
  a1.defineLocale('de-at', {
    months: 'Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    monthsShort: 'Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
    weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
    weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
    weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY HH:mm',
      LLLL: 'dddd, D. MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Heute um] LT [Uhr]',
      sameElse: 'L',
      nextDay: '[Morgen um] LT [Uhr]',
      nextWeek: 'dddd [um] LT [Uhr]',
      lastDay: '[Gestern um] LT [Uhr]',
      lastWeek: '[letzten] dddd [um] LT [Uhr]'
    },
    relativeTime: {
      future: 'in %s',
      past: 'vor %s',
      s: 'ein paar Sekunden',
      m: c9,
      mm: '%d Minuten',
      h: c9,
      hh: '%d Stunden',
      d: c9,
      dd: c9,
      M: c9,
      MM: c9,
      y: c9,
      yy: c9
    },
    ordinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      doy: 4
    }
  }),
  a1.defineLocale('de', {
    months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    monthsShort: 'Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
    weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
    weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
    weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY HH:mm',
      LLLL: 'dddd, D. MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Heute um] LT [Uhr]',
      sameElse: 'L',
      nextDay: '[Morgen um] LT [Uhr]',
      nextWeek: 'dddd [um] LT [Uhr]',
      lastDay: '[Gestern um] LT [Uhr]',
      lastWeek: '[letzten] dddd [um] LT [Uhr]'
    },
    relativeTime: {
      future: 'in %s',
      past: 'vor %s',
      s: 'ein paar Sekunden',
      m: cW,
      mm: '%d Minuten',
      h: cW,
      hh: '%d Stunden',
      d: cW,
      dd: cW,
      M: cW,
      MM: cW,
      y: cW,
      yy: cW
    },
    ordinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      doy: 4
    }
  }),
  a1.defineLocale('el', {
    monthsNominativeEl: 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος'.split('_'),
    monthsGenitiveEl: 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου'.split('_'),
    months: function (d, c) {
      return /D/.test(c.substring(0, c.indexOf('MMMM'))) ? this._monthsGenitiveEl[d.month()] : this._monthsNominativeEl[d.month()]
    },
    monthsShort: 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ'.split('_'),
    weekdays: 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο'.split('_'),
    weekdaysShort: 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ'.split('_'),
    weekdaysMin: 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα'.split('_'),
    meridiem: function (e, d, f) {
      return e > 11 ? f ? 'μμ' : 'ΜΜ' : f ? 'πμ' : 'ΠΜ'
    },
    isPM: function (b) {
      return 'μ' === (b + '').toLowerCase() [0]
    },
    meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY h:mm A',
      LLLL: 'dddd, D MMMM YYYY h:mm A'
    },
    calendarEl: {
      sameDay: '[Σήμερα {}] LT',
      nextDay: '[Αύριο {}] LT',
      nextWeek: 'dddd [{}] LT',
      lastDay: '[Χθες {}] LT',
      lastWeek: function () {
        switch (this.day()) {
          case 6:
            return '[το προηγούμενο] dddd [{}] LT';
          default:
            return '[την προηγούμενη] dddd [{}] LT'
        }
      },
      sameElse: 'L'
    },
    calendar: function (f, e) {
      var h = this._calendarEl[f],
      g = e && e.hours();
      return 'function' == typeof h && (h = h.apply(e)),
      h.replace('{}', g % 12 === 1 ? 'στη' : 'στις')
    },
    relativeTime: {
      future: 'σε %s',
      past: '%s πριν',
      s: 'λίγα δευτερόλεπτα',
      m: 'ένα λεπτό',
      mm: '%d λεπτά',
      h: 'μία ώρα',
      hh: '%d ώρες',
      d: 'μία μέρα',
      dd: '%d μέρες',
      M: 'ένας μήνας',
      MM: '%d μήνες',
      y: 'ένας χρόνος',
      yy: '%d χρόνια'
    },
    ordinalParse: /\d{1,2}η/,
    ordinal: '%dη',
    week: {
      dow: 1,
      doy: 4
    }
  }), a1.defineLocale('en-au', {
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY h:mm A',
      LLLL: 'dddd, D MMMM YYYY h:mm A'
    },
    calendar: {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years'
    },
    ordinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function (e) {
      var d = e % 10,
      f = 1 === ~~(e % 100 / 10) ? 'th' : 1 === d ? 'st' : 2 === d ? 'nd' : 3 === d ? 'rd' : 'th';
      return e + f
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), a1.defineLocale('en-ca', {
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'YYYY-MM-DD',
      LL: 'D MMMM, YYYY',
      LLL: 'D MMMM, YYYY h:mm A',
      LLLL: 'dddd, D MMMM, YYYY h:mm A'
    },
    calendar: {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years'
    },
    ordinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function (e) {
      var d = e % 10,
      f = 1 === ~~(e % 100 / 10) ? 'th' : 1 === d ? 'st' : 2 === d ? 'nd' : 3 === d ? 'rd' : 'th';
      return e + f
    }
  }), a1.defineLocale('en-gb', {
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Today at] LT',
      nextDay: '[Tomorrow at] LT',
      nextWeek: 'dddd [at] LT',
      lastDay: '[Yesterday at] LT',
      lastWeek: '[Last] dddd [at] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'in %s',
      past: '%s ago',
      s: 'a few seconds',
      m: 'a minute',
      mm: '%d minutes',
      h: 'an hour',
      hh: '%d hours',
      d: 'a day',
      dd: '%d days',
      M: 'a month',
      MM: '%d months',
      y: 'a year',
      yy: '%d years'
    },
    ordinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: function (e) {
      var d = e % 10,
      f = 1 === ~~(e % 100 / 10) ? 'th' : 1 === d ? 'st' : 2 === d ? 'nd' : 3 === d ? 'rd' : 'th';
      return e + f
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), a1.defineLocale('eo', {
    months: 'januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro'.split('_'),
    monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec'.split('_'),
    weekdays: 'Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato'.split('_'),
    weekdaysShort: 'Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab'.split('_'),
    weekdaysMin: 'Di_Lu_Ma_Me_Ĵa_Ve_Sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY-MM-DD',
      LL: 'D[-an de] MMMM, YYYY',
      LLL: 'D[-an de] MMMM, YYYY HH:mm',
      LLLL: 'dddd, [la] D[-an de] MMMM, YYYY HH:mm'
    },
    meridiemParse: /[ap]\.t\.m/i,
    isPM: function (b) {
      return 'p' === b.charAt(0).toLowerCase()
    },
    meridiem: function (e, d, f) {
      return e > 11 ? f ? 'p.t.m.' : 'P.T.M.' : f ? 'a.t.m.' : 'A.T.M.'
    },
    calendar: {
      sameDay: '[Hodiaŭ je] LT',
      nextDay: '[Morgaŭ je] LT',
      nextWeek: 'dddd [je] LT',
      lastDay: '[Hieraŭ je] LT',
      lastWeek: '[pasinta] dddd [je] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'je %s',
      past: 'antaŭ %s',
      s: 'sekundoj',
      m: 'minuto',
      mm: '%d minutoj',
      h: 'horo',
      hh: '%d horoj',
      d: 'tago',
      dd: '%d tagoj',
      M: 'monato',
      MM: '%d monatoj',
      y: 'jaro',
      yy: '%d jaroj'
    },
    ordinalParse: /\d{1,2}a/,
    ordinal: '%da',
    week: {
      dow: 1,
      doy: 7
    }
  }), 'Ene._Feb._Mar._Abr._May._Jun._Jul._Ago._Sep._Oct._Nov._Dic.'.split('_')),
  e0 = 'Ene_Feb_Mar_Abr_May_Jun_Jul_Ago_Sep_Oct_Nov_Dic'.split('_'),
  eN = (a1.defineLocale('es', {
    months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split('_'),
    monthsShort: function (d, c) {
      return /-MMM-/.test(c) ? e0[d.month()] : fk[d.month()]
    },
    weekdays: 'Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado'.split('_'),
    weekdaysShort: 'Dom._Lun._Mar._Mié._Jue._Vie._Sáb.'.split('_'),
    weekdaysMin: 'Do_Lu_Ma_Mi_Ju_Vi_Sá'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D [de] MMMM [de] YYYY',
      LLL: 'D [de] MMMM [de] YYYY H:mm',
      LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
    },
    calendar: {
      sameDay: function () {
        return '[hoy a la' + (1 !== this.hours() ? 's' : '') + '] LT'
      },
      nextDay: function () {
        return '[mañana a la' + (1 !== this.hours() ? 's' : '') + '] LT'
      },
      nextWeek: function () {
        return 'dddd [a la' + (1 !== this.hours() ? 's' : '') + '] LT'
      },
      lastDay: function () {
        return '[ayer a la' + (1 !== this.hours() ? 's' : '') + '] LT'
      },
      lastWeek: function () {
        return '[el] dddd [pasado a la' + (1 !== this.hours() ? 's' : '') + '] LT'
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'en %s',
      past: 'hace %s',
      s: 'unos segundos',
      m: 'un minuto',
      mm: '%d minutos',
      h: 'una hora',
      hh: '%d horas',
      d: 'un día',
      dd: '%d días',
      M: 'un mes',
      MM: '%d meses',
      y: 'un año',
      yy: '%d años'
    },
    ordinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
      dow: 1,
      doy: 4
    }
  }), a1.defineLocale('et', {
    months: 'jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember'.split('_'),
    monthsShort: 'jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets'.split('_'),
    weekdays: 'pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev'.split('_'),
    weekdaysShort: 'P_E_T_K_N_R_L'.split('_'),
    weekdaysMin: 'P_E_T_K_N_R_L'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm',
      LLLL: 'dddd, D. MMMM YYYY H:mm'
    },
    calendar: {
      sameDay: '[Täna,] LT',
      nextDay: '[Homme,] LT',
      nextWeek: '[Järgmine] dddd LT',
      lastDay: '[Eile,] LT',
      lastWeek: '[Eelmine] dddd LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s pärast',
      past: '%s tagasi',
      s: cE,
      m: cE,
      mm: cE,
      h: cE,
      hh: cE,
      d: cE,
      dd: '%d päeva',
      M: cE,
      MM: cE,
      y: cE,
      yy: cE
    },
    ordinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      doy: 4
    }
  }), a1.defineLocale('eu', {
    months: 'urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua'.split('_'),
    monthsShort: 'urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.'.split('_'),
    weekdays: 'igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata'.split('_'),
    weekdaysShort: 'ig._al._ar._az._og._ol._lr.'.split('_'),
    weekdaysMin: 'ig_al_ar_az_og_ol_lr'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY-MM-DD',
      LL: 'YYYY[ko] MMMM[ren] D[a]',
      LLL: 'YYYY[ko] MMMM[ren] D[a] HH:mm',
      LLLL: 'dddd, YYYY[ko] MMMM[ren] D[a] HH:mm',
      l: 'YYYY-M-D',
      ll: 'YYYY[ko] MMM D[a]',
      lll: 'YYYY[ko] MMM D[a] HH:mm',
      llll: 'ddd, YYYY[ko] MMM D[a] HH:mm'
    },
    calendar: {
      sameDay: '[gaur] LT[etan]',
      nextDay: '[bihar] LT[etan]',
      nextWeek: 'dddd LT[etan]',
      lastDay: '[atzo] LT[etan]',
      lastWeek: '[aurreko] dddd LT[etan]',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s barru',
      past: 'duela %s',
      s: 'segundo batzuk',
      m: 'minutu bat',
      mm: '%d minutu',
      h: 'ordu bat',
      hh: '%d ordu',
      d: 'egun bat',
      dd: '%d egun',
      M: 'hilabete bat',
      MM: '%d hilabete',
      y: 'urte bat',
      yy: '%d urte'
    },
    ordinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      doy: 7
    }
  }), {
    1: '۱',
    2: '۲',
    3: '۳',
    4: '۴',
    5: '۵',
    6: '۶',
    7: '۷',
    8: '۸',
    9: '۹',
    0: '۰'
  }),
  eA = {
    '۱': '1',
    '۲': '2',
    '۳': '3',
    '۴': '4',
    '۵': '5',
    '۶': '6',
    '۷': '7',
    '۸': '8',
    '۹': '9',
    '۰': '0'
  },
  en = (a1.defineLocale('fa', {
    months: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
    monthsShort: 'ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر'.split('_'),
    weekdays: 'یکشنبه_دوشنبه_سهشنبه_چهارشنبه_پنجشنبه_جمعه_شنبه'.split('_'),
    weekdaysShort: 'یکشنبه_دوشنبه_سهشنبه_چهارشنبه_پنجشنبه_جمعه_شنبه'.split('_'),
    weekdaysMin: 'ی_د_س_چ_پ_ج_ش'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    meridiemParse: /قبل از ظهر|بعد از ظهر/,
    isPM: function (b) {
      return /بعد از ظهر/.test(b)
    },
    meridiem: function (e, d, f) {
      return 12 > e ? 'قبل از ظهر' : 'بعد از ظهر'
    },
    calendar: {
      sameDay: '[امروز ساعت] LT',
      nextDay: '[فردا ساعت] LT',
      nextWeek: 'dddd [ساعت] LT',
      lastDay: '[دیروز ساعت] LT',
      lastWeek: 'dddd [پیش] [ساعت] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'در %s',
      past: '%s پیش',
      s: 'چندین ثانیه',
      m: 'یک دقیقه',
      mm: '%d دقیقه',
      h: 'یک ساعت',
      hh: '%d ساعت',
      d: 'یک روز',
      dd: '%d روز',
      M: 'یک ماه',
      MM: '%d ماه',
      y: 'یک سال',
      yy: '%d سال'
    },
    preparse: function (b) {
      return b.replace(/[۰-۹]/g, function (c) {
        return eA[c]
      }).replace(/،/g, ',')
    },
    postformat: function (b) {
      return b.replace(/\d/g, function (c) {
        return eN[c]
      }).replace(/,/g, '،')
    },
    ordinalParse: /\d{1,2}م/,
    ordinal: '%dم',
    week: {
      dow: 6,
      doy: 12
    }
  }), 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' ')),
  d3 = [
    'nolla',
    'yhden',
    'kahden',
    'kolmen',
    'neljän',
    'viiden',
    'kuuden',
    en[7],
    en[8],
    en[9]
  ],
  dR = (a1.defineLocale('fi', {
    months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
    monthsShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
    weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
    weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
    weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
    longDateFormat: {
      LT: 'HH.mm',
      LTS: 'HH.mm.ss',
      L: 'DD.MM.YYYY',
      LL: 'Do MMMM[ta] YYYY',
      LLL: 'Do MMMM[ta] YYYY, [klo] HH.mm',
      LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
      l: 'D.M.YYYY',
      ll: 'Do MMM YYYY',
      lll: 'Do MMM YYYY, [klo] HH.mm',
      llll: 'ddd, Do MMM YYYY, [klo] HH.mm'
    },
    calendar: {
      sameDay: '[tänään] [klo] LT',
      nextDay: '[huomenna] [klo] LT',
      nextWeek: 'dddd [klo] LT',
      lastDay: '[eilen] [klo] LT',
      lastWeek: '[viime] dddd[na] [klo] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s päästä',
      past: '%s sitten',
      s: cs,
      m: cs,
      mm: cs,
      h: cs,
      hh: cs,
      d: cs,
      dd: cs,
      M: cs,
      MM: cs,
      y: cs,
      yy: cs
    },
    ordinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      doy: 4
    }
  }), a1.defineLocale('fo', {
    months: 'januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
    monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
    weekdays: 'sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur'.split('_'),
    weekdaysShort: 'sun_mán_týs_mik_hós_frí_ley'.split('_'),
    weekdaysMin: 'su_má_tý_mi_hó_fr_le'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D. MMMM, YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Í dag kl.] LT',
      nextDay: '[Í morgin kl.] LT',
      nextWeek: 'dddd [kl.] LT',
      lastDay: '[Í gjár kl.] LT',
      lastWeek: '[síðstu] dddd [kl] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'um %s',
      past: '%s síðani',
      s: 'fá sekund',
      m: 'ein minutt',
      mm: '%d minuttir',
      h: 'ein tími',
      hh: '%d tímar',
      d: 'ein dagur',
      dd: '%d dagar',
      M: 'ein mánaði',
      MM: '%d mánaðir',
      y: 'eitt ár',
      yy: '%d ár'
    },
    ordinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      doy: 4
    }
  }), a1.defineLocale('fr-ca', {
    months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY-MM-DD',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Aujourd\'hui à] LT',
      nextDay: '[Demain à] LT',
      nextWeek: 'dddd [à] LT',
      lastDay: '[Hier à] LT',
      lastWeek: 'dddd [dernier à] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'dans %s',
      past: 'il y a %s',
      s: 'quelques secondes',
      m: 'une minute',
      mm: '%d minutes',
      h: 'une heure',
      hh: '%d heures',
      d: 'un jour',
      dd: '%d jours',
      M: 'un mois',
      MM: '%d mois',
      y: 'un an',
      yy: '%d ans'
    },
    ordinalParse: /\d{1,2}(er|e)/,
    ordinal: function (b) {
      return b + (1 === b ? 'er' : 'e')
    }
  }), a1.defineLocale('fr', {
    months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin: 'Di_Lu_Ma_Me_Je_Ve_Sa'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Aujourd\'hui à] LT',
      nextDay: '[Demain à] LT',
      nextWeek: 'dddd [à] LT',
      lastDay: '[Hier à] LT',
      lastWeek: 'dddd [dernier à] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'dans %s',
      past: 'il y a %s',
      s: 'quelques secondes',
      m: 'une minute',
      mm: '%d minutes',
      h: 'une heure',
      hh: '%d heures',
      d: 'un jour',
      dd: '%d jours',
      M: 'un mois',
      MM: '%d mois',
      y: 'un an',
      yy: '%d ans'
    },
    ordinalParse: /\d{1,2}(er|)/,
    ordinal: function (b) {
      return b + (1 === b ? 'er' : '')
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), 'jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.'.split('_')),
  dE = 'jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
  dr = (a1.defineLocale('fy', {
    months: 'jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber'.split('_'),
    monthsShort: function (d, c) {
      return /-MMM-/.test(c) ? dE[d.month()] : dR[d.month()]
    },
    weekdays: 'snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon'.split('_'),
    weekdaysShort: 'si._mo._ti._wo._to._fr._so.'.split('_'),
    weekdaysMin: 'Si_Mo_Ti_Wo_To_Fr_So'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD-MM-YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[hjoed om] LT',
      nextDay: '[moarn om] LT',
      nextWeek: 'dddd [om] LT',
      lastDay: '[juster om] LT',
      lastWeek: '[ôfrûne] dddd [om] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'oer %s',
      past: '%s lyn',
      s: 'in pear sekonden',
      m: 'ien minút',
      mm: '%d minuten',
      h: 'ien oere',
      hh: '%d oeren',
      d: 'ien dei',
      dd: '%d dagen',
      M: 'ien moanne',
      MM: '%d moannen',
      y: 'ien jier',
      yy: '%d jierren'
    },
    ordinalParse: /\d{1,2}(ste|de)/,
    ordinal: function (b) {
      return b + (1 === b || 8 === b || b >= 20 ? 'ste' : 'de')
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), a1.defineLocale('gl', {
    months: 'Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro'.split('_'),
    monthsShort: 'Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.'.split('_'),
    weekdays: 'Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado'.split('_'),
    weekdaysShort: 'Dom._Lun._Mar._Mér._Xov._Ven._Sáb.'.split('_'),
    weekdaysMin: 'Do_Lu_Ma_Mé_Xo_Ve_Sá'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY H:mm',
      LLLL: 'dddd D MMMM YYYY H:mm'
    },
    calendar: {
      sameDay: function () {
        return '[hoxe ' + (1 !== this.hours() ? 'ás' : 'á') + '] LT'
      },
      nextDay: function () {
        return '[mañá ' + (1 !== this.hours() ? 'ás' : 'á') + '] LT'
      },
      nextWeek: function () {
        return 'dddd [' + (1 !== this.hours() ? 'ás' : 'a') + '] LT'
      },
      lastDay: function () {
        return '[onte ' + (1 !== this.hours() ? 'á' : 'a') + '] LT'
      },
      lastWeek: function () {
        return '[o] dddd [pasado ' + (1 !== this.hours() ? 'ás' : 'a') + '] LT'
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: function (b) {
        return 'uns segundos' === b ? 'nuns segundos' : 'en ' + b
      },
      past: 'hai %s',
      s: 'uns segundos',
      m: 'un minuto',
      mm: '%d minutos',
      h: 'unha hora',
      hh: '%d horas',
      d: 'un día',
      dd: '%d días',
      M: 'un mes',
      MM: '%d meses',
      y: 'un ano',
      yy: '%d anos'
    },
    ordinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
      dow: 1,
      doy: 7
    }
  }), a1.defineLocale('he', {
    months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
    monthsShort: 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
    weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
    weekdaysShort: 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
    weekdaysMin: 'א_ב_ג_ד_ה_ו_ש'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D [ב]MMMM YYYY',
      LLL: 'D [ב]MMMM YYYY HH:mm',
      LLLL: 'dddd, D [ב]MMMM YYYY HH:mm',
      l: 'D/M/YYYY',
      ll: 'D MMM YYYY',
      lll: 'D MMM YYYY HH:mm',
      llll: 'ddd, D MMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[היום ב־]LT',
      nextDay: '[מחר ב־]LT',
      nextWeek: 'dddd [בשעה] LT',
      lastDay: '[אתמול ב־]LT',
      lastWeek: '[ביום] dddd [האחרון בשעה] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'בעוד %s',
      past: 'לפני %s',
      s: 'מספר שניות',
      m: 'דקה',
      mm: '%d דקות',
      h: 'שעה',
      hh: function (b) {
        return 2 === b ? 'שעתיים' : b + ' שעות'
      },
      d: 'יום',
      dd: function (b) {
        return 2 === b ? 'יומיים' : b + ' ימים'
      },
      M: 'חודש',
      MM: function (b) {
        return 2 === b ? 'חודשיים' : b + ' חודשים'
      },
      y: 'שנה',
      yy: function (b) {
        return 2 === b ? 'שנתיים' : b % 10 === 0 && 10 !== b ? b + ' שנה' : b + ' שנים'
      }
    }
  }), {
    1: '१',
    2: '२',
    3: '३',
    4: '४',
    5: '५',
    6: '६',
    7: '७',
    8: '८',
    9: '९',
    0: '०'
  }),
  c6 = {
    '१': '1',
    '२': '2',
    '३': '3',
    '४': '4',
    '५': '5',
    '६': '6',
    '७': '7',
    '८': '8',
    '९': '9',
    '०': '0'
  },
  cT = (a1.defineLocale('hi', {
    months: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
    monthsShort: 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
    weekdays: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
    weekdaysShort: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
    weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
    longDateFormat: {
      LT: 'A h:mm बजे',
      LTS: 'A h:mm:ss बजे',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm बजे',
      LLLL: 'dddd, D MMMM YYYY, A h:mm बजे'
    },
    calendar: {
      sameDay: '[आज] LT',
      nextDay: '[कल] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[कल] LT',
      lastWeek: '[पिछले] dddd, LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s में',
      past: '%s पहले',
      s: 'कुछ ही क्षण',
      m: 'एक मिनट',
      mm: '%d मिनट',
      h: 'एक घंटा',
      hh: '%d घंटे',
      d: 'एक दिन',
      dd: '%d दिन',
      M: 'एक महीने',
      MM: '%d महीने',
      y: 'एक वर्ष',
      yy: '%d वर्ष'
    },
    preparse: function (b) {
      return b.replace(/[१२३४५६७८९०]/g, function (c) {
        return c6[c]
      })
    },
    postformat: function (b) {
      return b.replace(/\d/g, function (c) {
        return dr[c]
      })
    },
    meridiemParse: /रात|सुबह|दोपहर|शाम/,
    meridiemHour: function (d, c) {
      return 12 === d && (d = 0),
      'रात' === c ? 4 > d ? d : d + 12 : 'सुबह' === c ? d : 'दोपहर' === c ? d >= 10 ? d : d + 12 : 'शाम' === c ? d + 12 : void 0
    },
    meridiem: function (e, d, f) {
      return 4 > e ? 'रात' : 10 > e ? 'सुबह' : 17 > e ? 'दोपहर' : 20 > e ? 'शाम' : 'रात'
    },
    week: {
      dow: 0,
      doy: 6
    }
  }), a1.defineLocale('hr', {
    months: 'siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac'.split('_'),
    monthsShort: 'sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.'.split('_'),
    weekdays: 'nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota'.split('_'),
    weekdaysShort: 'ned._pon._uto._sri._čet._pet._sub.'.split('_'),
    weekdaysMin: 'ne_po_ut_sr_če_pe_su'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD. MM. YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm',
      LLLL: 'dddd, D. MMMM YYYY H:mm'
    },
    calendar: {
      sameDay: '[danas u] LT',
      nextDay: '[sutra u] LT',
      nextWeek: function () {
        switch (this.day()) {
          case 0:
            return '[u] [nedjelju] [u] LT';
          case 3:
            return '[u] [srijedu] [u] LT';
          case 6:
            return '[u] [subotu] [u] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[u] dddd [u] LT'
        }
      },
      lastDay: '[jučer u] LT',
      lastWeek: function () {
        switch (this.day()) {
          case 0:
          case 3:
            return '[prošlu] dddd [u] LT';
          case 6:
            return '[prošle] [subote] [u] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[prošli] dddd [u] LT'
        }
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'za %s',
      past: 'prije %s',
      s: 'par sekundi',
      m: bX,
      mm: bX,
      h: bX,
      hh: bX,
      d: 'dan',
      dd: bX,
      M: 'mjesec',
      MM: bX,
      y: 'godinu',
      yy: bX
    },
    ordinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      doy: 7
    }
  }),
  'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ')), cB = (a1.defineLocale('hu', {
    months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
    monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
    weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
    weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
    weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'YYYY.MM.DD.',
      LL: 'YYYY. MMMM D.',
      LLL: 'YYYY. MMMM D. H:mm',
      LLLL: 'YYYY. MMMM D., dddd H:mm'
    },
    meridiemParse: /de|du/i,
    isPM: function (b) {
      return 'u' === b.charAt(1).toLowerCase()
    },
    meridiem: function (e, d, f) {
      return 12 > e ? f === !0 ? 'de' : 'DE' : f === !0 ? 'du' : 'DU'
    },
    calendar: {
      sameDay: '[ma] LT[-kor]',
      nextDay: '[holnap] LT[-kor]',
      nextWeek: function () {
        return cK.call(this, !0)
      },
      lastDay: '[tegnap] LT[-kor]',
      lastWeek: function () {
        return cK.call(this, !1)
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s múlva',
      past: '%s',
      s: bF,
      m: bF,
      mm: bF,
      h: bF,
      hh: bF,
      d: bF,
      dd: bF,
      M: bF,
      MM: bF,
      y: bF,
      yy: bF
    },
    ordinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      doy: 7
    }
  }), a1.defineLocale('hy-am', {
    months: au,
    monthsShort: gX,
    weekdays: gz,
    weekdaysShort: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
    weekdaysMin: 'կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY թ.',
      LLL: 'D MMMM YYYY թ., HH:mm',
      LLLL: 'dddd, D MMMM YYYY թ., HH:mm'
    },
    calendar: {
      sameDay: '[այսօր] LT',
      nextDay: '[վաղը] LT',
      lastDay: '[երեկ] LT',
      nextWeek: function () {
        return 'dddd [օրը ժամը] LT'
      },
      lastWeek: function () {
        return '[անցած] dddd [օրը ժամը] LT'
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s հետո',
      past: '%s առաջ',
      s: 'մի քանի վայրկյան',
      m: 'րոպե',
      mm: '%d րոպե',
      h: 'ժամ',
      hh: '%d ժամ',
      d: 'օր',
      dd: '%d օր',
      M: 'ամիս',
      MM: '%d ամիս',
      y: 'տարի',
      yy: '%d տարի'
    },
    meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
    isPM: function (b) {
      return /^(ցերեկվա|երեկոյան)$/.test(b)
    },
    meridiem: function (b) {
      return 4 > b ? 'գիշերվա' : 12 > b ? 'առավոտվա' : 17 > b ? 'ցերեկվա' : 'երեկոյան'
    },
    ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
    ordinal: function (d, c) {
      switch (c) {
        case 'DDD':
        case 'w':
        case 'W':
        case 'DDDo':
          return 1 === d ? d + '-ին' : d + '-րդ';
        default:
          return d
      }
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), a1.defineLocale('id', {
    months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),
    weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
    weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
    weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
    longDateFormat: {
      LT: 'HH.mm',
      LTS: 'HH.mm.ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY [pukul] HH.mm',
      LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
    },
    meridiemParse: /pagi|siang|sore|malam/,
    meridiemHour: function (d, c) {
      return 12 === d && (d = 0),
      'pagi' === c ? d : 'siang' === c ? d >= 11 ? d : d + 12 : 'sore' === c || 'malam' === c ? d + 12 : void 0
    },
    meridiem: function (e, d, f) {
      return 11 > e ? 'pagi' : 15 > e ? 'siang' : 19 > e ? 'sore' : 'malam'
    },
    calendar: {
      sameDay: '[Hari ini pukul] LT',
      nextDay: '[Besok pukul] LT',
      nextWeek: 'dddd [pukul] LT',
      lastDay: '[Kemarin pukul] LT',
      lastWeek: 'dddd [lalu pukul] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'dalam %s',
      past: '%s yang lalu',
      s: 'beberapa detik',
      m: 'semenit',
      mm: '%d menit',
      h: 'sejam',
      hh: '%d jam',
      d: 'sehari',
      dd: '%d hari',
      M: 'sebulan',
      MM: '%d bulan',
      y: 'setahun',
      yy: '%d tahun'
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), a1.defineLocale('is', {
    months: 'janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember'.split('_'),
    monthsShort: 'jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des'.split('_'),
    weekdays: 'sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur'.split('_'),
    weekdaysShort: 'sun_mán_þri_mið_fim_fös_lau'.split('_'),
    weekdaysMin: 'Su_Má_Þr_Mi_Fi_Fö_La'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY [kl.] H:mm',
      LLLL: 'dddd, D. MMMM YYYY [kl.] H:mm'
    },
    calendar: {
      sameDay: '[í dag kl.] LT',
      nextDay: '[á morgun kl.] LT',
      nextWeek: 'dddd [kl.] LT',
      lastDay: '[í gær kl.] LT',
      lastWeek: '[síðasta] dddd [kl.] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'eftir %s',
      past: 'fyrir %s síðan',
      s: e9,
      m: e9,
      mm: e9,
      h: 'klukkustund',
      hh: e9,
      d: e9,
      dd: e9,
      M: e9,
      MM: e9,
      y: e9,
      yy: e9
    },
    ordinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      doy: 4
    }
  }), a1.defineLocale('it', {
    months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
    monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
    weekdays: 'Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato'.split('_'),
    weekdaysShort: 'Dom_Lun_Mar_Mer_Gio_Ven_Sab'.split('_'),
    weekdaysMin: 'D_L_Ma_Me_G_V_S'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Oggi alle] LT',
      nextDay: '[Domani alle] LT',
      nextWeek: 'dddd [alle] LT',
      lastDay: '[Ieri alle] LT',
      lastWeek: function () {
        switch (this.day()) {
          case 0:
            return '[la scorsa] dddd [alle] LT';
          default:
            return '[lo scorso] dddd [alle] LT'
        }
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: function (b) {
        return (/^[0-9].+$/.test(b) ? 'tra' : 'in') + ' ' + b
      },
      past: '%s fa',
      s: 'alcuni secondi',
      m: 'un minuto',
      mm: '%d minuti',
      h: 'un\'ora',
      hh: '%d ore',
      d: 'un giorno',
      dd: '%d giorni',
      M: 'un mese',
      MM: '%d mesi',
      y: 'un anno',
      yy: '%d anni'
    },
    ordinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
      dow: 1,
      doy: 4
    }
  }), a1.defineLocale('ja', {
    months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
    weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
    weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
    longDateFormat: {
      LT: 'Ah時m分',
      LTS: 'Ah時m分s秒',
      L: 'YYYY/MM/DD',
      LL: 'YYYY年M月D日',
      LLL: 'YYYY年M月D日Ah時m分',
      LLLL: 'YYYY年M月D日Ah時m分 dddd'
    },
    meridiemParse: /午前|午後/i,
    isPM: function (b) {
      return '午後' === b
    },
    meridiem: function (e, d, f) {
      return 12 > e ? '午前' : '午後'
    },
    calendar: {
      sameDay: '[今日] LT',
      nextDay: '[明日] LT',
      nextWeek: '[来週]dddd LT',
      lastDay: '[昨日] LT',
      lastWeek: '[前週]dddd LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s後',
      past: '%s前',
      s: '数秒',
      m: '1分',
      mm: '%d分',
      h: '1時間',
      hh: '%d時間',
      d: '1日',
      dd: '%d日',
      M: '1ヶ月',
      MM: '%dヶ月',
      y: '1年',
      yy: '%d年'
    }
  }), a1.defineLocale('jv', {
    months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des'.split('_'),
    weekdays: 'Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu'.split('_'),
    weekdaysShort: 'Min_Sen_Sel_Reb_Kem_Jem_Sep'.split('_'),
    weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sp'.split('_'),
    longDateFormat: {
      LT: 'HH.mm',
      LTS: 'HH.mm.ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY [pukul] HH.mm',
      LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
    },
    meridiemParse: /enjing|siyang|sonten|ndalu/,
    meridiemHour: function (d, c) {
      return 12 === d && (d = 0),
      'enjing' === c ? d : 'siyang' === c ? d >= 11 ? d : d + 12 : 'sonten' === c || 'ndalu' === c ? d + 12 : void 0
    },
    meridiem: function (e, d, f) {
      return 11 > e ? 'enjing' : 15 > e ? 'siyang' : 19 > e ? 'sonten' : 'ndalu'
    },
    calendar: {
      sameDay: '[Dinten puniko pukul] LT',
      nextDay: '[Mbenjang pukul] LT',
      nextWeek: 'dddd [pukul] LT',
      lastDay: '[Kala wingi pukul] LT',
      lastWeek: 'dddd [kepengker pukul] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'wonten ing %s',
      past: '%s ingkang kepengker',
      s: 'sawetawis detik',
      m: 'setunggal menit',
      mm: '%d menit',
      h: 'setunggal jam',
      hh: '%d jam',
      d: 'sedinten',
      dd: '%d dinten',
      M: 'sewulan',
      MM: '%d wulan',
      y: 'setaun',
      yy: '%d taun'
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), a1.defineLocale('ka', {
    months: eW,
    monthsShort: 'იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ'.split('_'),
    weekdays: eJ,
    weekdaysShort: 'კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ'.split('_'),
    weekdaysMin: 'კვ_ორ_სა_ოთ_ხუ_პა_შა'.split('_'),
    longDateFormat: {
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY h:mm A',
      LLLL: 'dddd, D MMMM YYYY h:mm A'
    },
    calendar: {
      sameDay: '[დღეს] LT[-ზე]',
      nextDay: '[ხვალ] LT[-ზე]',
      lastDay: '[გუშინ] LT[-ზე]',
      nextWeek: '[შემდეგ] dddd LT[-ზე]',
      lastWeek: '[წინა] dddd LT-ზე',
      sameElse: 'L'
    },
    relativeTime: {
      future: function (b) {
        return /(წამი|წუთი|საათი|წელი)/.test(b) ? b.replace(/ი$/, 'ში')  : b + 'ში'
      },
      past: function (b) {
        return /(წამი|წუთი|საათი|დღე|თვე)/.test(b) ? b.replace(/(ი|ე)$/, 'ის წინ')  : /წელი/.test(b) ? b.replace(/წელი$/, 'წლის წინ')  : void 0
      },
      s: 'რამდენიმე წამი',
      m: 'წუთი',
      mm: '%d წუთი',
      h: 'საათი',
      hh: '%d საათი',
      d: 'დღე',
      dd: '%d დღე',
      M: 'თვე',
      MM: '%d თვე',
      y: 'წელი',
      yy: '%d წელი'
    },
    ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
    ordinal: function (b) {
      return 0 === b ? b : 1 === b ? b + '-ლი' : 20 > b || 100 >= b && b % 20 === 0 || b % 100 === 0 ? 'მე-' + b : b + '-ე'
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), a1.defineLocale('km', {
    months: 'មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
    monthsShort: 'មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ'.split('_'),
    weekdays: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
    weekdaysShort: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
    weekdaysMin: 'អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[ថ្ងៃនៈ ម៉ោង] LT',
      nextDay: '[ស្អែក ម៉ោង] LT',
      nextWeek: 'dddd [ម៉ោង] LT',
      lastDay: '[ម្សិលមិញ ម៉ោង] LT',
      lastWeek: 'dddd [សប្តាហ៍មុន] [ម៉ោង] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%sទៀត',
      past: '%sមុន',
      s: 'ប៉ុន្មានវិនាទី',
      m: 'មួយនាទី',
      mm: '%d នាទី',
      h: 'មួយម៉ោង',
      hh: '%d ម៉ោង',
      d: 'មួយថ្ងៃ',
      dd: '%d ថ្ងៃ',
      M: 'មួយខែ',
      MM: '%d ខែ',
      y: 'មួយឆ្នាំ',
      yy: '%d ឆ្នាំ'
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), a1.defineLocale('ko', {
    months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
    monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
    weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
    weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
    weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
    longDateFormat: {
      LT: 'A h시 m분',
      LTS: 'A h시 m분 s초',
      L: 'YYYY.MM.DD',
      LL: 'YYYY년 MMMM D일',
      LLL: 'YYYY년 MMMM D일 A h시 m분',
      LLLL: 'YYYY년 MMMM D일 dddd A h시 m분'
    },
    calendar: {
      sameDay: '오늘 LT',
      nextDay: '내일 LT',
      nextWeek: 'dddd LT',
      lastDay: '어제 LT',
      lastWeek: '지난주 dddd LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s 후',
      past: '%s 전',
      s: '몇초',
      ss: '%d초',
      m: '일분',
      mm: '%d분',
      h: '한시간',
      hh: '%d시간',
      d: '하루',
      dd: '%d일',
      M: '한달',
      MM: '%d달',
      y: '일년',
      yy: '%d년'
    },
    ordinalParse: /\d{1,2}일/,
    ordinal: '%d일',
    meridiemParse: /오전|오후/,
    isPM: function (b) {
      return '오후' === b
    },
    meridiem: function (e, d, f) {
      return 12 > e ? '오전' : '오후'
    }
  }), a1.defineLocale('lb', {
    months: 'Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    monthsShort: 'Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.'.split('_'),
    weekdays: 'Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg'.split('_'),
    weekdaysShort: 'So._Mé._Dë._Më._Do._Fr._Sa.'.split('_'),
    weekdaysMin: 'So_Mé_Dë_Më_Do_Fr_Sa'.split('_'),
    longDateFormat: {
      LT: 'H:mm [Auer]',
      LTS: 'H:mm:ss [Auer]',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm [Auer]',
      LLLL: 'dddd, D. MMMM YYYY H:mm [Auer]'
    },
    calendar: {
      sameDay: '[Haut um] LT',
      sameElse: 'L',
      nextDay: '[Muer um] LT',
      nextWeek: 'dddd [um] LT',
      lastDay: '[Gëschter um] LT',
      lastWeek: function () {
        switch (this.day()) {
          case 2:
          case 4:
            return '[Leschten] dddd [um] LT';
          default:
            return '[Leschte] dddd [um] LT'
        }
      }
    },
    relativeTime: {
      future: ej,
      past: dZ,
      s: 'e puer Sekonnen',
      m: ew,
      mm: '%d Minutten',
      h: ew,
      hh: '%d Stonnen',
      d: ew,
      dd: '%d Deeg',
      M: ew,
      MM: '%d Méint',
      y: ew,
      yy: '%d Joer'
    },
    ordinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      doy: 4
    }
  }), {
    m: 'minutė_minutės_minutę',
    mm: 'minutės_minučių_minutes',
    h: 'valanda_valandos_valandą',
    hh: 'valandos_valandų_valandas',
    d: 'diena_dienos_dieną',
    dd: 'dienos_dienų_dienas',
    M: 'mėnuo_mėnesio_mėnesį',
    MM: 'mėnesiai_mėnesių_mėnesius',
    y: 'metai_metų_metus',
    yy: 'metai_metų_metus'
  }), cp = 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'), b6 = (a1.defineLocale('lt', {
    months: dm,
    monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
    weekdays: b2,
    weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
    weekdaysMin: 'S_P_A_T_K_Pn_Š'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY-MM-DD',
      LL: 'YYYY [m.] MMMM D [d.]',
      LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
      LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
      l: 'YYYY-MM-DD',
      ll: 'YYYY [m.] MMMM D [d.]',
      lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
      llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
    },
    calendar: {
      sameDay: '[Šiandien] LT',
      nextDay: '[Rytoj] LT',
      nextWeek: 'dddd LT',
      lastDay: '[Vakar] LT',
      lastWeek: '[Praėjusį] dddd LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'po %s',
      past: 'prieš %s',
      s: dA,
      m: c2,
      mm: cl,
      h: c2,
      hh: cl,
      d: c2,
      dd: cl,
      M: c2,
      MM: cl,
      y: c2,
      yy: cl
    },
    ordinalParse: /\d{1,2}-oji/,
    ordinal: function (b) {
      return b + '-oji'
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), {
    m: 'minūtes_minūtēm_minūte_minūtes'.split('_'),
    mm: 'minūtes_minūtēm_minūte_minūtes'.split('_'),
    h: 'stundas_stundām_stunda_stundas'.split('_'),
    hh: 'stundas_stundām_stunda_stundas'.split('_'),
    d: 'dienas_dienām_diena_dienas'.split('_'),
    dd: 'dienas_dienām_diena_dienas'.split('_'),
    M: 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
    MM: 'mēneša_mēnešiem_mēnesis_mēneši'.split('_'),
    y: 'gada_gadiem_gads_gadi'.split('_'),
    yy: 'gada_gadiem_gads_gadi'.split('_')
  }), bU = (a1.defineLocale('lv', {
    months: 'janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris'.split('_'),
    monthsShort: 'jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec'.split('_'),
    weekdays: 'svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena'.split('_'),
    weekdaysShort: 'Sv_P_O_T_C_Pk_S'.split('_'),
    weekdaysMin: 'Sv_P_O_T_C_Pk_S'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY.',
      LL: 'YYYY. [gada] D. MMMM',
      LLL: 'YYYY. [gada] D. MMMM, HH:mm',
      LLLL: 'YYYY. [gada] D. MMMM, dddd, HH:mm'
    },
    calendar: {
      sameDay: '[Šodien pulksten] LT',
      nextDay: '[Rīt pulksten] LT',
      nextWeek: 'dddd [pulksten] LT',
      lastDay: '[Vakar pulksten] LT',
      lastWeek: '[Pagājušā] dddd [pulksten] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'pēc %s',
      past: 'pirms %s',
      s: a3,
      m: bm,
      mm: by,
      h: bm,
      hh: by,
      d: bm,
      dd: by,
      M: bm,
      MM: by,
      y: bm,
      yy: by
    },
    ordinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      doy: 4
    }
  }), {
    words: {
      m: [
        'jedan minut',
        'jednog minuta'
      ],
      mm: [
        'minut',
        'minuta',
        'minuta'
      ],
      h: [
        'jedan sat',
        'jednog sata'
      ],
      hh: [
        'sat',
        'sata',
        'sati'
      ],
      dd: [
        'dan',
        'dana',
        'dana'
      ],
      MM: [
        'mjesec',
        'mjeseca',
        'mjeseci'
      ],
      yy: [
        'godina',
        'godine',
        'godina'
      ]
    },
    correctGrammaticalCase: function (d, c) {
      return 1 === d ? c[0] : d >= 2 && 4 >= d ? c[1] : c[2]
    },
    translate: function (f, e, h) {
      var g = bU.words[h];
      return 1 === h.length ? e ? g[0] : g[1] : f + ' ' + bU.correctGrammaticalCase(f, g)
    }
  }), bC = (a1.defineLocale('me', {
    months: [
      'januar',
      'februar',
      'mart',
      'april',
      'maj',
      'jun',
      'jul',
      'avgust',
      'septembar',
      'oktobar',
      'novembar',
      'decembar'
    ],
    monthsShort: [
      'jan.',
      'feb.',
      'mar.',
      'apr.',
      'maj',
      'jun',
      'jul',
      'avg.',
      'sep.',
      'okt.',
      'nov.',
      'dec.'
    ],
    weekdays: [
      'nedjelja',
      'ponedjeljak',
      'utorak',
      'srijeda',
      'četvrtak',
      'petak',
      'subota'
    ],
    weekdaysShort: [
      'ned.',
      'pon.',
      'uto.',
      'sri.',
      'čet.',
      'pet.',
      'sub.'
    ],
    weekdaysMin: [
      'ne',
      'po',
      'ut',
      'sr',
      'če',
      'pe',
      'su'
    ],
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD. MM. YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm',
      LLLL: 'dddd, D. MMMM YYYY H:mm'
    },
    calendar: {
      sameDay: '[danas u] LT',
      nextDay: '[sjutra u] LT',
      nextWeek: function () {
        switch (this.day()) {
          case 0:
            return '[u] [nedjelju] [u] LT';
          case 3:
            return '[u] [srijedu] [u] LT';
          case 6:
            return '[u] [subotu] [u] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[u] dddd [u] LT'
        }
      },
      lastDay: '[juče u] LT',
      lastWeek: function () {
        var b = [
          '[prošle] [nedjelje] [u] LT',
          '[prošlog] [ponedjeljka] [u] LT',
          '[prošlog] [utorka] [u] LT',
          '[prošle] [srijede] [u] LT',
          '[prošlog] [četvrtka] [u] LT',
          '[prošlog] [petka] [u] LT',
          '[prošle] [subote] [u] LT'
        ];
        return b[this.day()]
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'za %s',
      past: 'prije %s',
      s: 'nekoliko sekundi',
      m: bU.translate,
      mm: bU.translate,
      h: bU.translate,
      hh: bU.translate,
      d: 'dan',
      dd: bU.translate,
      M: 'mjesec',
      MM: bU.translate,
      y: 'godinu',
      yy: bU.translate
    },
    ordinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      doy: 7
    }
  }), a1.defineLocale('mk', {
    months: 'јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември'.split('_'),
    monthsShort: 'јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек'.split('_'),
    weekdays: 'недела_понеделник_вторник_среда_четврток_петок_сабота'.split('_'),
    weekdaysShort: 'нед_пон_вто_сре_чет_пет_саб'.split('_'),
    weekdaysMin: 'нe_пo_вт_ср_че_пе_сa'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'D.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY H:mm',
      LLLL: 'dddd, D MMMM YYYY H:mm'
    },
    calendar: {
      sameDay: '[Денес во] LT',
      nextDay: '[Утре во] LT',
      nextWeek: 'dddd [во] LT',
      lastDay: '[Вчера во] LT',
      lastWeek: function () {
        switch (this.day()) {
          case 0:
          case 3:
          case 6:
            return '[Во изминатата] dddd [во] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[Во изминатиот] dddd [во] LT'
        }
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'после %s',
      past: 'пред %s',
      s: 'неколку секунди',
      m: 'минута',
      mm: '%d минути',
      h: 'час',
      hh: '%d часа',
      d: 'ден',
      dd: '%d дена',
      M: 'месец',
      MM: '%d месеци',
      y: 'година',
      yy: '%d години'
    },
    ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
    ordinal: function (e) {
      var d = e % 10,
      f = e % 100;
      return 0 === e ? e + '-ев' : 0 === f ? e + '-ен' : f > 10 && 20 > f ? e + '-ти' : 1 === d ? e + '-ви' : 2 === d ? e + '-ри' : 7 === d || 8 === d ? e + '-ми' : e + '-ти'
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), a1.defineLocale('ml', {
    months: 'ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ'.split('_'),
    monthsShort: 'ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.'.split('_'),
    weekdays: 'ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച'.split('_'),
    weekdaysShort: 'ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി'.split('_'),
    weekdaysMin: 'ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ'.split('_'),
    longDateFormat: {
      LT: 'A h:mm -നു',
      LTS: 'A h:mm:ss -നു',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm -നു',
      LLLL: 'dddd, D MMMM YYYY, A h:mm -നു'
    },
    calendar: {
      sameDay: '[ഇന്ന്] LT',
      nextDay: '[നാളെ] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[ഇന്നലെ] LT',
      lastWeek: '[കഴിഞ്ഞ] dddd, LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s കഴിഞ്ഞ്',
      past: '%s മുൻപ്',
      s: 'അൽപ നിമിഷങ്ങൾ',
      m: 'ഒരു മിനിറ്റ്',
      mm: '%d മിനിറ്റ്',
      h: 'ഒരു മണിക്കൂർ',
      hh: '%d മണിക്കൂർ',
      d: 'ഒരു ദിവസം',
      dd: '%d ദിവസം',
      M: 'ഒരു മാസം',
      MM: '%d മാസം',
      y: 'ഒരു വർഷം',
      yy: '%d വർഷം'
    },
    meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
    isPM: function (b) {
      return /^(ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി)$/.test(b)
    },
    meridiem: function (e, d, f) {
      return 4 > e ? 'രാത്രി' : 12 > e ? 'രാവിലെ' : 17 > e ? 'ഉച്ച കഴിഞ്ഞ്' : 20 > e ? 'വൈകുന്നേരം' : 'രാത്രി'
    }
  }), {
    1: '१',
    2: '२',
    3: '३',
    4: '४',
    5: '५',
    6: '६',
    7: '७',
    8: '८',
    9: '९',
    0: '०'
  }), cH = {
    '१': '1',
    '२': '2',
    '३': '3',
    '४': '4',
    '५': '5',
    '६': '6',
    '७': '7',
    '८': '8',
    '९': '9',
    '०': '0'
  }, aq = (a1.defineLocale('mr', {
    months: 'जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर'.split('_'),
    monthsShort: 'जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.'.split('_'),
    weekdays: 'रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
    weekdaysShort: 'रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि'.split('_'),
    weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
    longDateFormat: {
      LT: 'A h:mm वाजता',
      LTS: 'A h:mm:ss वाजता',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, A h:mm वाजता',
      LLLL: 'dddd, D MMMM YYYY, A h:mm वाजता'
    },
    calendar: {
      sameDay: '[आज] LT',
      nextDay: '[उद्या] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[काल] LT',
      lastWeek: '[मागील] dddd, LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s नंतर',
      past: '%s पूर्वी',
      s: 'सेकंद',
      m: 'एक मिनिट',
      mm: '%d मिनिटे',
      h: 'एक तास',
      hh: '%d तास',
      d: 'एक दिवस',
      dd: '%d दिवस',
      M: 'एक महिना',
      MM: '%d महिने',
      y: 'एक वर्ष',
      yy: '%d वर्षे'
    },
    preparse: function (b) {
      return b.replace(/[१२३४५६७८९०]/g, function (c) {
        return cH[c]
      })
    },
    postformat: function (b) {
      return b.replace(/\d/g, function (c) {
        return bC[c]
      })
    },
    meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
    meridiemHour: function (d, c) {
      return 12 === d && (d = 0),
      'रात्री' === c ? 4 > d ? d : d + 12 : 'सकाळी' === c ? d : 'दुपारी' === c ? d >= 10 ? d : d + 12 : 'सायंकाळी' === c ? d + 12 : void 0
    },
    meridiem: function (e, d, f) {
      return 4 > e ? 'रात्री' : 10 > e ? 'सकाळी' : 17 > e ? 'दुपारी' : 20 > e ? 'सायंकाळी' : 'रात्री'
    },
    week: {
      dow: 0,
      doy: 6
    }
  }), a1.defineLocale('ms-my', {
    months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
    monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
    weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
    weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
    weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
    longDateFormat: {
      LT: 'HH.mm',
      LTS: 'HH.mm.ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY [pukul] HH.mm',
      LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
    },
    meridiemParse: /pagi|tengahari|petang|malam/,
    meridiemHour: function (d, c) {
      return 12 === d && (d = 0),
      'pagi' === c ? d : 'tengahari' === c ? d >= 11 ? d : d + 12 : 'petang' === c || 'malam' === c ? d + 12 : void 0
    },
    meridiem: function (e, d, f) {
      return 11 > e ? 'pagi' : 15 > e ? 'tengahari' : 19 > e ? 'petang' : 'malam'
    },
    calendar: {
      sameDay: '[Hari ini pukul] LT',
      nextDay: '[Esok pukul] LT',
      nextWeek: 'dddd [pukul] LT',
      lastDay: '[Kelmarin pukul] LT',
      lastWeek: 'dddd [lepas pukul] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'dalam %s',
      past: '%s yang lepas',
      s: 'beberapa saat',
      m: 'seminit',
      mm: '%d minit',
      h: 'sejam',
      hh: '%d jam',
      d: 'sehari',
      dd: '%d hari',
      M: 'sebulan',
      MM: '%d bulan',
      y: 'setahun',
      yy: '%d tahun'
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), a1.defineLocale('ms', {
    months: 'Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember'.split('_'),
    monthsShort: 'Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis'.split('_'),
    weekdays: 'Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu'.split('_'),
    weekdaysShort: 'Ahd_Isn_Sel_Rab_Kha_Jum_Sab'.split('_'),
    weekdaysMin: 'Ah_Is_Sl_Rb_Km_Jm_Sb'.split('_'),
    longDateFormat: {
      LT: 'HH.mm',
      LTS: 'HH.mm.ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY [pukul] HH.mm',
      LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
    },
    meridiemParse: /pagi|tengahari|petang|malam/,
    meridiemHour: function (d, c) {
      return 12 === d && (d = 0),
      'pagi' === c ? d : 'tengahari' === c ? d >= 11 ? d : d + 12 : 'petang' === c || 'malam' === c ? d + 12 : void 0
    },
    meridiem: function (e, d, f) {
      return 11 > e ? 'pagi' : 15 > e ? 'tengahari' : 19 > e ? 'petang' : 'malam'
    },
    calendar: {
      sameDay: '[Hari ini pukul] LT',
      nextDay: '[Esok pukul] LT',
      nextWeek: 'dddd [pukul] LT',
      lastDay: '[Kelmarin pukul] LT',
      lastWeek: 'dddd [lepas pukul] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'dalam %s',
      past: '%s yang lepas',
      s: 'beberapa saat',
      m: 'seminit',
      mm: '%d minit',
      h: 'sejam',
      hh: '%d jam',
      d: 'sehari',
      dd: '%d hari',
      M: 'sebulan',
      MM: '%d bulan',
      y: 'setahun',
      yy: '%d tahun'
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), {
    1: '၁',
    2: '၂',
    3: '၃',
    4: '၄',
    5: '၅',
    6: '၆',
    7: '၇',
    8: '၈',
    9: '၉',
    0: '၀'
  }), gU = {
    '၁': '1',
    '၂': '2',
    '၃': '3',
    '၄': '4',
    '၅': '5',
    '၆': '6',
    '၇': '7',
    '၈': '8',
    '၉': '9',
    '၀': '0'
  }, gs = (a1.defineLocale('my', {
    months: 'ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ'.split('_'),
    monthsShort: 'ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ'.split('_'),
    weekdays: 'တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ'.split('_'),
    weekdaysShort: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
    weekdaysMin: 'နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[ယနေ.] LT [မှာ]',
      nextDay: '[မနက်ဖြန်] LT [မှာ]',
      nextWeek: 'dddd LT [မှာ]',
      lastDay: '[မနေ.က] LT [မှာ]',
      lastWeek: '[ပြီးခဲ့သော] dddd LT [မှာ]',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'လာမည့် %s မှာ',
      past: 'လွန်ခဲ့သော %s က',
      s: 'စက္ကန်.အနည်းငယ်',
      m: 'တစ်မိနစ်',
      mm: '%d မိနစ်',
      h: 'တစ်နာရီ',
      hh: '%d နာရီ',
      d: 'တစ်ရက်',
      dd: '%d ရက်',
      M: 'တစ်လ',
      MM: '%d လ',
      y: 'တစ်နှစ်',
      yy: '%d နှစ်'
    },
    preparse: function (b) {
      return b.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (c) {
        return gU[c]
      })
    },
    postformat: function (b) {
      return b.replace(/\d/g, function (c) {
        return aq[c]
      })
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), a1.defineLocale('nb', {
    months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
    monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
    weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
    weekdaysShort: 'søn_man_tirs_ons_tors_fre_lør'.split('_'),
    weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
    longDateFormat: {
      LT: 'H.mm',
      LTS: 'H.mm.ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY [kl.] H.mm',
      LLLL: 'dddd D. MMMM YYYY [kl.] H.mm'
    },
    calendar: {
      sameDay: '[i dag kl.] LT',
      nextDay: '[i morgen kl.] LT',
      nextWeek: 'dddd [kl.] LT',
      lastDay: '[i går kl.] LT',
      lastWeek: '[forrige] dddd [kl.] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'om %s',
      past: 'for %s siden',
      s: 'noen sekunder',
      m: 'ett minutt',
      mm: '%d minutter',
      h: 'en time',
      hh: '%d timer',
      d: 'en dag',
      dd: '%d dager',
      M: 'en måned',
      MM: '%d måneder',
      y: 'ett år',
      yy: '%d år'
    },
    ordinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      doy: 4
    }
  }), {
    1: '१',
    2: '२',
    3: '३',
    4: '४',
    5: '५',
    6: '६',
    7: '७',
    8: '८',
    9: '९',
    0: '०'
  }), fI = {
    '१': '1',
    '२': '2',
    '३': '3',
    '४': '4',
    '५': '5',
    '६': '6',
    '७': '7',
    '८': '8',
    '९': '9',
    '०': '0'
  }, e6 = (a1.defineLocale('ne', {
    months: 'जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर'.split('_'),
    monthsShort: 'जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.'.split('_'),
    weekdays: 'आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार'.split('_'),
    weekdaysShort: 'आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.'.split('_'),
    weekdaysMin: 'आइ._सो._मङ्_बु._बि._शु._श.'.split('_'),
    longDateFormat: {
      LT: 'Aको h:mm बजे',
      LTS: 'Aको h:mm:ss बजे',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, Aको h:mm बजे',
      LLLL: 'dddd, D MMMM YYYY, Aको h:mm बजे'
    },
    preparse: function (b) {
      return b.replace(/[१२३४५६७८९०]/g, function (c) {
        return fI[c]
      })
    },
    postformat: function (b) {
      return b.replace(/\d/g, function (c) {
        return gs[c]
      })
    },
    meridiemParse: /राती|बिहान|दिउँसो|बेलुका|साँझ|राती/,
    meridiemHour: function (d, c) {
      return 12 === d && (d = 0),
      'राती' === c ? 3 > d ? d : d + 12 : 'बिहान' === c ? d : 'दिउँसो' === c ? d >= 10 ? d : d + 12 : 'बेलुका' === c || 'साँझ' === c ? d + 12 : void 0
    },
    meridiem: function (e, d, f) {
      return 3 > e ? 'राती' : 10 > e ? 'बिहान' : 15 > e ? 'दिउँसो' : 18 > e ? 'बेलुका' : 20 > e ? 'साँझ' : 'राती'
    },
    calendar: {
      sameDay: '[आज] LT',
      nextDay: '[भोली] LT',
      nextWeek: '[आउँदो] dddd[,] LT',
      lastDay: '[हिजो] LT',
      lastWeek: '[गएको] dddd[,] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%sमा',
      past: '%s अगाडी',
      s: 'केही समय',
      m: 'एक मिनेट',
      mm: '%d मिनेट',
      h: 'एक घण्टा',
      hh: '%d घण्टा',
      d: 'एक दिन',
      dd: '%d दिन',
      M: 'एक महिना',
      MM: '%d महिना',
      y: 'एक बर्ष',
      yy: '%d बर्ष'
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_')), eT = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_'), eG = (a1.defineLocale('nl', {
    months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
    monthsShort: function (d, c) {
      return /-MMM-/.test(c) ? eT[d.month()] : e6[d.month()]
    },
    weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
    weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
    weekdaysMin: 'Zo_Ma_Di_Wo_Do_Vr_Za'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD-MM-YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[vandaag om] LT',
      nextDay: '[morgen om] LT',
      nextWeek: 'dddd [om] LT',
      lastDay: '[gisteren om] LT',
      lastWeek: '[afgelopen] dddd [om] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'over %s',
      past: '%s geleden',
      s: 'een paar seconden',
      m: 'één minuut',
      mm: '%d minuten',
      h: 'één uur',
      hh: '%d uur',
      d: 'één dag',
      dd: '%d dagen',
      M: 'één maand',
      MM: '%d maanden',
      y: 'één jaar',
      yy: '%d jaar'
    },
    ordinalParse: /\d{1,2}(ste|de)/,
    ordinal: function (b) {
      return b + (1 === b || 8 === b || b >= 20 ? 'ste' : 'de')
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), a1.defineLocale('nn', {
    months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
    monthsShort: 'jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des'.split('_'),
    weekdays: 'sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag'.split('_'),
    weekdaysShort: 'sun_mån_tys_ons_tor_fre_lau'.split('_'),
    weekdaysMin: 'su_må_ty_on_to_fr_lø'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[I dag klokka] LT',
      nextDay: '[I morgon klokka] LT',
      nextWeek: 'dddd [klokka] LT',
      lastDay: '[I går klokka] LT',
      lastWeek: '[Føregåande] dddd [klokka] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'om %s',
      past: 'for %s sidan',
      s: 'nokre sekund',
      m: 'eit minutt',
      mm: '%d minutt',
      h: 'ein time',
      hh: '%d timar',
      d: 'ein dag',
      dd: '%d dagar',
      M: 'ein månad',
      MM: '%d månader',
      y: 'eit år',
      yy: '%d år'
    },
    ordinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      doy: 4
    }
  }), 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_')), et = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_'), d9 = (a1.defineLocale('pl', {
    months: function (d, c) {
      return '' === c ? '(' + et[d.month()] + '|' + eG[d.month()] + ')' : /D MMMM/.test(c) ? et[d.month()] : eG[d.month()]
    },
    monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
    weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
    weekdaysShort: 'nie_pon_wt_śr_czw_pt_sb'.split('_'),
    weekdaysMin: 'N_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Dziś o] LT',
      nextDay: '[Jutro o] LT',
      nextWeek: '[W] dddd [o] LT',
      lastDay: '[Wczoraj o] LT',
      lastWeek: function () {
        switch (this.day()) {
          case 0:
            return '[W zeszłą niedzielę o] LT';
          case 3:
            return '[W zeszłą środę o] LT';
          case 6:
            return '[W zeszłą sobotę o] LT';
          default:
            return '[W zeszły] dddd [o] LT'
        }
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'za %s',
      past: '%s temu',
      s: 'kilka sekund',
      m: aF,
      mm: aF,
      h: aF,
      hh: aF,
      d: '1 dzień',
      dd: '%d dni',
      M: 'miesiąc',
      MM: aF,
      y: 'rok',
      yy: aF
    },
    ordinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      doy: 4
    }
  }), a1.defineLocale('pt-br', {
    months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
    monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
    weekdays: 'Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado'.split('_'),
    weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
    weekdaysMin: 'Dom_2ª_3ª_4ª_5ª_6ª_Sáb'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D [de] MMMM [de] YYYY',
      LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
      LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
    },
    calendar: {
      sameDay: '[Hoje às] LT',
      nextDay: '[Amanhã às] LT',
      nextWeek: 'dddd [às] LT',
      lastDay: '[Ontem às] LT',
      lastWeek: function () {
        return 0 === this.day() || 6 === this.day() ? '[Último] dddd [às] LT' : '[Última] dddd [às] LT'
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'em %s',
      past: '%s atrás',
      s: 'poucos segundos',
      m: 'um minuto',
      mm: '%d minutos',
      h: 'uma hora',
      hh: '%d horas',
      d: 'um dia',
      dd: '%d dias',
      M: 'um mês',
      MM: '%d meses',
      y: 'um ano',
      yy: '%d anos'
    },
    ordinalParse: /\d{1,2}º/,
    ordinal: '%dº'
  }), a1.defineLocale('pt', {
    months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
    monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
    weekdays: 'Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado'.split('_'),
    weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
    weekdaysMin: 'Dom_2ª_3ª_4ª_5ª_6ª_Sáb'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D [de] MMMM [de] YYYY',
      LLL: 'D [de] MMMM [de] YYYY HH:mm',
      LLLL: 'dddd, D [de] MMMM [de] YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Hoje às] LT',
      nextDay: '[Amanhã às] LT',
      nextWeek: 'dddd [às] LT',
      lastDay: '[Ontem às] LT',
      lastWeek: function () {
        return 0 === this.day() || 6 === this.day() ? '[Último] dddd [às] LT' : '[Última] dddd [às] LT'
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'em %s',
      past: 'há %s',
      s: 'segundos',
      m: 'um minuto',
      mm: '%d minutos',
      h: 'uma hora',
      hh: '%d horas',
      d: 'um dia',
      dd: '%d dias',
      M: 'um mês',
      MM: '%d meses',
      y: 'um ano',
      yy: '%d anos'
    },
    ordinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
      dow: 1,
      doy: 4
    }
  }), a1.defineLocale('ro', {
    months: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
    monthsShort: 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
    weekdays: 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
    weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
    weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY H:mm',
      LLLL: 'dddd, D MMMM YYYY H:mm'
    },
    calendar: {
      sameDay: '[azi la] LT',
      nextDay: '[mâine la] LT',
      nextWeek: 'dddd [la] LT',
      lastDay: '[ieri la] LT',
      lastWeek: '[fosta] dddd [la] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'peste %s',
      past: '%s în urmă',
      s: 'câteva secunde',
      m: 'un minut',
      mm: am,
      h: 'o oră',
      hh: am,
      d: 'o zi',
      dd: am,
      M: 'o lună',
      MM: am,
      y: 'un an',
      yy: am
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), a1.defineLocale('ru', {
    months: bK,
    monthsShort: bs,
    weekdays: a9,
    weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
    weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
    monthsParse: [
      /^янв/i,
      /^фев/i,
      /^мар/i,
      /^апр/i,
      /^ма[й|я]/i,
      /^июн/i,
      /^июл/i,
      /^авг/i,
      /^сен/i,
      /^окт/i,
      /^ноя/i,
      /^дек/i
    ],
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY г.',
      LLL: 'D MMMM YYYY г., HH:mm',
      LLLL: 'dddd, D MMMM YYYY г., HH:mm'
    },
    calendar: {
      sameDay: '[Сегодня в] LT',
      nextDay: '[Завтра в] LT',
      lastDay: '[Вчера в] LT',
      nextWeek: function () {
        return 2 === this.day() ? '[Во] dddd [в] LT' : '[В] dddd [в] LT'
      },
      lastWeek: function (b) {
        if (b.week() === this.week()) {
          return 2 === this.day() ? '[Во] dddd [в] LT' : '[В] dddd [в] LT'
        }
        switch (this.day()) {
          case 0:
            return '[В прошлое] dddd [в] LT';
          case 1:
          case 2:
          case 4:
            return '[В прошлый] dddd [в] LT';
          case 3:
          case 5:
          case 6:
            return '[В прошлую] dddd [в] LT'
        }
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'через %s',
      past: '%s назад',
      s: 'несколько секунд',
      m: gQ,
      mm: gQ,
      h: 'час',
      hh: gQ,
      d: 'день',
      dd: gQ,
      M: 'месяц',
      MM: gQ,
      y: 'год',
      yy: gQ
    },
    meridiemParse: /ночи|утра|дня|вечера/i,
    isPM: function (b) {
      return /^(дня|вечера)$/.test(b)
    },
    meridiem: function (e, d, f) {
      return 4 > e ? 'ночи' : 12 > e ? 'утра' : 17 > e ? 'дня' : 'вечера'
    },
    ordinalParse: /\d{1,2}-(й|го|я)/,
    ordinal: function (d, c) {
      switch (c) {
        case 'M':
        case 'd':
        case 'DDD':
          return d + '-й';
        case 'D':
          return d + '-го';
        case 'w':
        case 'W':
          return d + '-я';
        default:
          return d
      }
    },
    week: {
      dow: 1,
      doy: 7
    }
  }),
  a1.defineLocale('si', {
    months: 'ජනවාරි_පෙබරවාරි_මාර්තු_අප්රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්'.split('_'),
    monthsShort: 'ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ'.split('_'),
    weekdays: 'ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා'.split('_'),
    weekdaysShort: 'ඉරි_සඳු_අඟ_බදා_බ්රහ_සිකු_සෙන'.split('_'),
    weekdaysMin: 'ඉ_ස_අ_බ_බ්ර_සි_සෙ'.split('_'),
    longDateFormat: {
      LT: 'a h:mm',
      LTS: 'a h:mm:ss',
      L: 'YYYY/MM/DD',
      LL: 'YYYY MMMM D',
      LLL: 'YYYY MMMM D, a h:mm',
      LLLL: 'YYYY MMMM D [වැනි] dddd, a h:mm:ss'
    },
    calendar: {
      sameDay: '[අද] LT[ට]',
      nextDay: '[හෙට] LT[ට]',
      nextWeek: 'dddd LT[ට]',
      lastDay: '[ඊයේ] LT[ට]',
      lastWeek: '[පසුගිය] dddd LT[ට]',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%sකින්',
      past: '%sකට පෙර',
      s: 'තත්පර කිහිපය',
      m: 'මිනිත්තුව',
      mm: 'මිනිත්තු %d',
      h: 'පැය',
      hh: 'පැය %d',
      d: 'දිනය',
      dd: 'දින %d',
      M: 'මාසය',
      MM: 'මාස %d',
      y: 'වසර',
      yy: 'වසර %d'
    },
    ordinalParse: /\d{1,2} වැනි/,
    ordinal: function (b) {
      return b + ' වැනි'
    },
    meridiem: function (e, d, f) {
      return e > 11 ? f ? 'ප.ව.' : 'පස් වරු' : f ? 'පෙ.ව.' : 'පෙර වරු'
    }
  }),
  'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_')), dX = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_'), dK = (a1.defineLocale('sk', {
    months: d9,
    monthsShort: dX,
    monthsParse: function (f, e) {
      var h,
      g = [
      ];
      for (h = 0; 12 > h; h++) {
        g[h] = new RegExp('^' + f[h] + '$|^' + e[h] + '$', 'i')
      }
      return g
    }(d9, dX),
    weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
    weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),
    weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm',
      LLLL: 'dddd D. MMMM YYYY H:mm'
    },
    calendar: {
      sameDay: '[dnes o] LT',
      nextDay: '[zajtra o] LT',
      nextWeek: function () {
        switch (this.day()) {
          case 0:
            return '[v nedeľu o] LT';
          case 1:
          case 2:
            return '[v] dddd [o] LT';
          case 3:
            return '[v stredu o] LT';
          case 4:
            return '[vo štvrtok o] LT';
          case 5:
            return '[v piatok o] LT';
          case 6:
            return '[v sobotu o] LT'
        }
      },
      lastDay: '[včera o] LT',
      lastWeek: function () {
        switch (this.day()) {
          case 0:
            return '[minulú nedeľu o] LT';
          case 1:
          case 2:
            return '[minulý] dddd [o] LT';
          case 3:
            return '[minulú stredu o] LT';
          case 4:
          case 5:
            return '[minulý] dddd [o] LT';
          case 6:
            return '[minulú sobotu o] LT'
        }
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'za %s',
      past: 'pred %s',
      s: aL,
      m: aL,
      mm: aL,
      h: aL,
      hh: aL,
      d: aL,
      dd: aL,
      M: aL,
      MM: aL,
      y: aL,
      yy: aL
    },
    ordinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      doy: 4
    }
  }),
  a1.defineLocale('sl', {
    months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
    monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
    weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
    weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
    weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD. MM. YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm',
      LLLL: 'dddd, D. MMMM YYYY H:mm'
    },
    calendar: {
      sameDay: '[danes ob] LT',
      nextDay: '[jutri ob] LT',
      nextWeek: function () {
        switch (this.day()) {
          case 0:
            return '[v] [nedeljo] [ob] LT';
          case 3:
            return '[v] [sredo] [ob] LT';
          case 6:
            return '[v] [soboto] [ob] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[v] dddd [ob] LT'
        }
      },
      lastDay: '[včeraj ob] LT',
      lastWeek: function () {
        switch (this.day()) {
          case 0:
            return '[prejšnjo] [nedeljo] [ob] LT';
          case 3:
            return '[prejšnjo] [sredo] [ob] LT';
          case 6:
            return '[prejšnjo] [soboto] [ob] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[prejšnji] dddd [ob] LT'
        }
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'čez %s',
      past: 'pred %s',
      s: az,
      m: az,
      mm: az,
      h: az,
      hh: az,
      d: az,
      dd: az,
      M: az,
      MM: az,
      y: az,
      yy: az
    },
    ordinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      doy: 7
    }
  }),
  a1.defineLocale('sq', {
    months: 'Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor'.split('_'),
    monthsShort: 'Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj'.split('_'),
    weekdays: 'E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë'.split('_'),
    weekdaysShort: 'Die_Hën_Mar_Mër_Enj_Pre_Sht'.split('_'),
    weekdaysMin: 'D_H_Ma_Më_E_P_Sh'.split('_'),
    meridiemParse: /PD|MD/,
    isPM: function (b) {
      return 'M' === b.charAt(0)
    },
    meridiem: function (e, d, f) {
      return 12 > e ? 'PD' : 'MD'
    },
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Sot në] LT',
      nextDay: '[Nesër në] LT',
      nextWeek: 'dddd [në] LT',
      lastDay: '[Dje në] LT',
      lastWeek: 'dddd [e kaluar në] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'në %s',
      past: '%s më parë',
      s: 'disa sekonda',
      m: 'një minutë',
      mm: '%d minuta',
      h: 'një orë',
      hh: '%d orë',
      d: 'një ditë',
      dd: '%d ditë',
      M: 'një muaj',
      MM: '%d muaj',
      y: 'një vit',
      yy: '%d vite'
    },
    ordinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      doy: 4
    }
  }),
  {
    words: {
      m: [
        'један минут',
        'једне минуте'
      ],
      mm: [
        'минут',
        'минуте',
        'минута'
      ],
      h: [
        'један сат',
        'једног сата'
      ],
      hh: [
        'сат',
        'сата',
        'сати'
      ],
      dd: [
        'дан',
        'дана',
        'дана'
      ],
      MM: [
        'месец',
        'месеца',
        'месеци'
      ],
      yy: [
        'година',
        'године',
        'година'
      ]
    },
    correctGrammaticalCase: function (d, c) {
      return 1 === d ? c[0] : d >= 2 && 4 >= d ? c[1] : c[2]
    },
    translate: function (f, e, h) {
      var g = dK.words[h];
      return 1 === h.length ? e ? g[0] : g[1] : f + ' ' + dK.correctGrammaticalCase(f, g)
    }
  }), dx = (a1.defineLocale('sr-cyrl', {
    months: [
      'јануар',
      'фебруар',
      'март',
      'април',
      'мај',
      'јун',
      'јул',
      'август',
      'септембар',
      'октобар',
      'новембар',
      'децембар'
    ],
    monthsShort: [
      'јан.',
      'феб.',
      'мар.',
      'апр.',
      'мај',
      'јун',
      'јул',
      'авг.',
      'сеп.',
      'окт.',
      'нов.',
      'дец.'
    ],
    weekdays: [
      'недеља',
      'понедељак',
      'уторак',
      'среда',
      'четвртак',
      'петак',
      'субота'
    ],
    weekdaysShort: [
      'нед.',
      'пон.',
      'уто.',
      'сре.',
      'чет.',
      'пет.',
      'суб.'
    ],
    weekdaysMin: [
      'не',
      'по',
      'ут',
      'ср',
      'че',
      'пе',
      'су'
    ],
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD. MM. YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm',
      LLLL: 'dddd, D. MMMM YYYY H:mm'
    },
    calendar: {
      sameDay: '[данас у] LT',
      nextDay: '[сутра у] LT',
      nextWeek: function () {
        switch (this.day()) {
          case 0:
            return '[у] [недељу] [у] LT';
          case 3:
            return '[у] [среду] [у] LT';
          case 6:
            return '[у] [суботу] [у] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[у] dddd [у] LT'
        }
      },
      lastDay: '[јуче у] LT',
      lastWeek: function () {
        var b = [
          '[прошле] [недеље] [у] LT',
          '[прошлог] [понедељка] [у] LT',
          '[прошлог] [уторка] [у] LT',
          '[прошле] [среде] [у] LT',
          '[прошлог] [четвртка] [у] LT',
          '[прошлог] [петка] [у] LT',
          '[прошле] [суботе] [у] LT'
        ];
        return b[this.day()]
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'за %s',
      past: 'пре %s',
      s: 'неколико секунди',
      m: dK.translate,
      mm: dK.translate,
      h: dK.translate,
      hh: dK.translate,
      d: 'дан',
      dd: dK.translate,
      M: 'месец',
      MM: dK.translate,
      y: 'годину',
      yy: dK.translate
    },
    ordinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      doy: 7
    }
  }), {
    words: {
      m: [
        'jedan minut',
        'jedne minute'
      ],
      mm: [
        'minut',
        'minute',
        'minuta'
      ],
      h: [
        'jedan sat',
        'jednog sata'
      ],
      hh: [
        'sat',
        'sata',
        'sati'
      ],
      dd: [
        'dan',
        'dana',
        'dana'
      ],
      MM: [
        'mesec',
        'meseca',
        'meseci'
      ],
      yy: [
        'godina',
        'godine',
        'godina'
      ]
    },
    correctGrammaticalCase: function (d, c) {
      return 1 === d ? c[0] : d >= 2 && 4 >= d ? c[1] : c[2]
    },
    translate: function (f, e, h) {
      var g = dx.words[h];
      return 1 === h.length ? e ? g[0] : g[1] : f + ' ' + dx.correctGrammaticalCase(f, g)
    }
  }), dj = (a1.defineLocale('sr', {
    months: [
      'januar',
      'februar',
      'mart',
      'april',
      'maj',
      'jun',
      'jul',
      'avgust',
      'septembar',
      'oktobar',
      'novembar',
      'decembar'
    ],
    monthsShort: [
      'jan.',
      'feb.',
      'mar.',
      'apr.',
      'maj',
      'jun',
      'jul',
      'avg.',
      'sep.',
      'okt.',
      'nov.',
      'dec.'
    ],
    weekdays: [
      'nedelja',
      'ponedeljak',
      'utorak',
      'sreda',
      'četvrtak',
      'petak',
      'subota'
    ],
    weekdaysShort: [
      'ned.',
      'pon.',
      'uto.',
      'sre.',
      'čet.',
      'pet.',
      'sub.'
    ],
    weekdaysMin: [
      'ne',
      'po',
      'ut',
      'sr',
      'če',
      'pe',
      'su'
    ],
    longDateFormat: {
      LT: 'H:mm',
      LTS: 'H:mm:ss',
      L: 'DD. MM. YYYY',
      LL: 'D. MMMM YYYY',
      LLL: 'D. MMMM YYYY H:mm',
      LLLL: 'dddd, D. MMMM YYYY H:mm'
    },
    calendar: {
      sameDay: '[danas u] LT',
      nextDay: '[sutra u] LT',
      nextWeek: function () {
        switch (this.day()) {
          case 0:
            return '[u] [nedelju] [u] LT';
          case 3:
            return '[u] [sredu] [u] LT';
          case 6:
            return '[u] [subotu] [u] LT';
          case 1:
          case 2:
          case 4:
          case 5:
            return '[u] dddd [u] LT'
        }
      },
      lastDay: '[juče u] LT',
      lastWeek: function () {
        var b = [
          '[prošle] [nedelje] [u] LT',
          '[prošlog] [ponedeljka] [u] LT',
          '[prošlog] [utorka] [u] LT',
          '[prošle] [srede] [u] LT',
          '[prošlog] [četvrtka] [u] LT',
          '[prošlog] [petka] [u] LT',
          '[prošle] [subote] [u] LT'
        ];
        return b[this.day()]
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'za %s',
      past: 'pre %s',
      s: 'nekoliko sekundi',
      m: dx.translate,
      mm: dx.translate,
      h: dx.translate,
      hh: dx.translate,
      d: 'dan',
      dd: dx.translate,
      M: 'mesec',
      MM: dx.translate,
      y: 'godinu',
      yy: dx.translate
    },
    ordinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      doy: 7
    }
  }), a1.defineLocale('sv', {
    months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
    monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
    weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
    weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
    weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'YYYY-MM-DD',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Idag] LT',
      nextDay: '[Imorgon] LT',
      lastDay: '[Igår] LT',
      nextWeek: '[På] dddd LT',
      lastWeek: '[I] dddd[s] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'om %s',
      past: 'för %s sedan',
      s: 'några sekunder',
      m: 'en minut',
      mm: '%d minuter',
      h: 'en timme',
      hh: '%d timmar',
      d: 'en dag',
      dd: '%d dagar',
      M: 'en månad',
      MM: '%d månader',
      y: 'ett år',
      yy: '%d år'
    },
    ordinalParse: /\d{1,2}(e|a)/,
    ordinal: function (e) {
      var d = e % 10,
      f = 1 === ~~(e % 100 / 10) ? 'e' : 1 === d ? 'a' : 2 === d ? 'a' : 'e';
      return e + f
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), a1.defineLocale('ta', {
    months: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
    monthsShort: 'ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்'.split('_'),
    weekdays: 'ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை'.split('_'),
    weekdaysShort: 'ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி'.split('_'),
    weekdaysMin: 'ஞா_தி_செ_பு_வி_வெ_ச'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY, HH:mm',
      LLLL: 'dddd, D MMMM YYYY, HH:mm'
    },
    calendar: {
      sameDay: '[இன்று] LT',
      nextDay: '[நாளை] LT',
      nextWeek: 'dddd, LT',
      lastDay: '[நேற்று] LT',
      lastWeek: '[கடந்த வாரம்] dddd, LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s இல்',
      past: '%s முன்',
      s: 'ஒரு சில விநாடிகள்',
      m: 'ஒரு நிமிடம்',
      mm: '%d நிமிடங்கள்',
      h: 'ஒரு மணி நேரம்',
      hh: '%d மணி நேரம்',
      d: 'ஒரு நாள்',
      dd: '%d நாட்கள்',
      M: 'ஒரு மாதம்',
      MM: '%d மாதங்கள்',
      y: 'ஒரு வருடம்',
      yy: '%d ஆண்டுகள்'
    },
    ordinalParse: /\d{1,2}வது/,
    ordinal: function (b) {
      return b + 'வது'
    },
    meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
    meridiem: function (e, d, f) {
      return 2 > e ? ' யாமம்' : 6 > e ? ' வைகறை' : 10 > e ? ' காலை' : 14 > e ? ' நண்பகல்' : 18 > e ? ' எற்பாடு' : 22 > e ? ' மாலை' : ' யாமம்'
    },
    meridiemHour: function (d, c) {
      return 12 === d && (d = 0),
      'யாமம்' === c ? 2 > d ? d : d + 12 : 'வைகறை' === c || 'காலை' === c ? d : 'நண்பகல்' === c && d >= 10 ? d : d + 12
    },
    week: {
      dow: 0,
      doy: 6
    }
  }), a1.defineLocale('th', {
    months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
    monthsShort: 'มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา'.split('_'),
    weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
    weekdaysShort: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'),
    weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
    longDateFormat: {
      LT: 'H นาฬิกา m นาที',
      LTS: 'H นาฬิกา m นาที s วินาที',
      L: 'YYYY/MM/DD',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY เวลา H นาฬิกา m นาที',
      LLLL: 'วันddddที่ D MMMM YYYY เวลา H นาฬิกา m นาที'
    },
    meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
    isPM: function (b) {
      return 'หลังเที่ยง' === b
    },
    meridiem: function (e, d, f) {
      return 12 > e ? 'ก่อนเที่ยง' : 'หลังเที่ยง'
    },
    calendar: {
      sameDay: '[วันนี้ เวลา] LT',
      nextDay: '[พรุ่งนี้ เวลา] LT',
      nextWeek: 'dddd[หน้า เวลา] LT',
      lastDay: '[เมื่อวานนี้ เวลา] LT',
      lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'อีก %s',
      past: '%sที่แล้ว',
      s: 'ไม่กี่วินาที',
      m: '1 นาที',
      mm: '%d นาที',
      h: '1 ชั่วโมง',
      hh: '%d ชั่วโมง',
      d: '1 วัน',
      dd: '%d วัน',
      M: '1 เดือน',
      MM: '%d เดือน',
      y: '1 ปี',
      yy: '%d ปี'
    }
  }), a1.defineLocale('tl-ph', {
    months: 'Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre'.split('_'),
    monthsShort: 'Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis'.split('_'),
    weekdays: 'Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado'.split('_'),
    weekdaysShort: 'Lin_Lun_Mar_Miy_Huw_Biy_Sab'.split('_'),
    weekdaysMin: 'Li_Lu_Ma_Mi_Hu_Bi_Sab'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'MM/D/YYYY',
      LL: 'MMMM D, YYYY',
      LLL: 'MMMM D, YYYY HH:mm',
      LLLL: 'dddd, MMMM DD, YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Ngayon sa] LT',
      nextDay: '[Bukas sa] LT',
      nextWeek: 'dddd [sa] LT',
      lastDay: '[Kahapon sa] LT',
      lastWeek: 'dddd [huling linggo] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'sa loob ng %s',
      past: '%s ang nakalipas',
      s: 'ilang segundo',
      m: 'isang minuto',
      mm: '%d minuto',
      h: 'isang oras',
      hh: '%d oras',
      d: 'isang araw',
      dd: '%d araw',
      M: 'isang buwan',
      MM: '%d buwan',
      y: 'isang taon',
      yy: '%d taon'
    },
    ordinalParse: /\d{1,2}/,
    ordinal: function (b) {
      return b
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), {
    1: '\'inci',
    5: '\'inci',
    8: '\'inci',
    70: '\'inci',
    80: '\'inci',
    2: '\'nci',
    7: '\'nci',
    20: '\'nci',
    50: '\'nci',
    3: '\'üncü',
    4: '\'üncü',
    100: '\'üncü',
    6: '\'ncı',
    9: '\'uncu',
    10: '\'uncu',
    30: '\'uncu',
    60: '\'ıncı',
    90: '\'ıncı'
  }), cZ = (a1.defineLocale('tr', {
    months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
    monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
    weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
    weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
    weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[bugün saat] LT',
      nextDay: '[yarın saat] LT',
      nextWeek: '[haftaya] dddd [saat] LT',
      lastDay: '[dün] LT',
      lastWeek: '[geçen hafta] dddd [saat] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s sonra',
      past: '%s önce',
      s: 'birkaç saniye',
      m: 'bir dakika',
      mm: '%d dakika',
      h: 'bir saat',
      hh: '%d saat',
      d: 'bir gün',
      dd: '%d gün',
      M: 'bir ay',
      MM: '%d ay',
      y: 'bir yıl',
      yy: '%d yıl'
    },
    ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
    ordinal: function (f) {
      if (0 === f) {
        return f + '\'ıncı'
      }
      var e = f % 10,
      h = f % 100 - e,
      g = f >= 100 ? 100 : null;
      return f + (dj[e] || dj[h] || dj[g])
    },
    week: {
      dow: 1,
      doy: 7
    }
  }), a1.defineLocale('tzl', {
    months: 'Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar'.split('_'),
    monthsShort: 'Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec'.split('_'),
    weekdays: 'Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi'.split('_'),
    weekdaysShort: 'Súl_Lún_Mai_Már_Xhú_Vié_Sát'.split('_'),
    weekdaysMin: 'Sú_Lú_Ma_Má_Xh_Vi_Sá'.split('_'),
    longDateFormat: {
      LT: 'HH.mm',
      LTS: 'LT.ss',
      L: 'DD.MM.YYYY',
      LL: 'D. MMMM [dallas] YYYY',
      LLL: 'D. MMMM [dallas] YYYY LT',
      LLLL: 'dddd, [li] D. MMMM [dallas] YYYY LT'
    },
    meridiem: function (e, d, f) {
      return e > 11 ? f ? 'd\'o' : 'D\'O' : f ? 'd\'a' : 'D\'A'
    },
    calendar: {
      sameDay: '[oxhi à] LT',
      nextDay: '[demà à] LT',
      nextWeek: 'dddd [à] LT',
      lastDay: '[ieiri à] LT',
      lastWeek: '[sür el] dddd [lasteu à] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'osprei %s',
      past: 'ja%s',
      s: hn,
      m: hn,
      mm: hn,
      h: hn,
      hh: hn,
      d: hn,
      dd: hn,
      M: hn,
      MM: hn,
      y: hn,
      yy: hn
    },
    ordinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
      dow: 1,
      doy: 4
    }
  }), a1.defineLocale('tzm-latn', {
    months: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
    monthsShort: 'innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir'.split('_'),
    weekdays: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
    weekdaysShort: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
    weekdaysMin: 'asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[asdkh g] LT',
      nextDay: '[aska g] LT',
      nextWeek: 'dddd [g] LT',
      lastDay: '[assant g] LT',
      lastWeek: 'dddd [g] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'dadkh s yan %s',
      past: 'yan %s',
      s: 'imik',
      m: 'minuḍ',
      mm: '%d minuḍ',
      h: 'saɛa',
      hh: '%d tassaɛin',
      d: 'ass',
      dd: '%d ossan',
      M: 'ayowr',
      MM: '%d iyyirn',
      y: 'asgas',
      yy: '%d isgasn'
    },
    week: {
      dow: 6,
      doy: 12
    }
  }), a1.defineLocale('tzm', {
    months: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
    monthsShort: 'ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ'.split('_'),
    weekdays: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
    weekdaysShort: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
    weekdaysMin: 'ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[ⴰⵙⴷⵅ ⴴ] LT',
      nextDay: '[ⴰⵙⴽⴰ ⴴ] LT',
      nextWeek: 'dddd [ⴴ] LT',
      lastDay: '[ⴰⵚⴰⵏⵜ ⴴ] LT',
      lastWeek: 'dddd [ⴴ] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s',
      past: 'ⵢⴰⵏ %s',
      s: 'ⵉⵎⵉⴽ',
      m: 'ⵎⵉⵏⵓⴺ',
      mm: '%d ⵎⵉⵏⵓⴺ',
      h: 'ⵙⴰⵄⴰ',
      hh: '%d ⵜⴰⵙⵙⴰⵄⵉⵏ',
      d: 'ⴰⵙⵙ',
      dd: '%d oⵙⵙⴰⵏ',
      M: 'ⴰⵢoⵓⵔ',
      MM: '%d ⵉⵢⵢⵉⵔⵏ',
      y: 'ⴰⵙⴳⴰⵙ',
      yy: '%d ⵉⵙⴳⴰⵙⵏ'
    },
    week: {
      dow: 6,
      doy: 12
    }
  }), a1.defineLocale('uk', {
    months: f0,
    monthsShort: 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
    weekdays: fm,
    weekdaysShort: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD.MM.YYYY',
      LL: 'D MMMM YYYY р.',
      LLL: 'D MMMM YYYY р., HH:mm',
      LLLL: 'dddd, D MMMM YYYY р., HH:mm'
    },
    calendar: {
      sameDay: e2('[Сьогодні '),
      nextDay: e2('[Завтра '),
      lastDay: e2('[Вчора '),
      nextWeek: e2('[У] dddd ['),
      lastWeek: function () {
        switch (this.day()) {
          case 0:
          case 3:
          case 5:
          case 6:
            return e2('[Минулої] dddd [').call(this);
          case 1:
          case 2:
          case 4:
            return e2('[Минулого] dddd [').call(this)
        }
      },
      sameElse: 'L'
    },
    relativeTime: {
      future: 'за %s',
      past: '%s тому',
      s: 'декілька секунд',
      m: gK,
      mm: gK,
      h: 'годину',
      hh: gK,
      d: 'день',
      dd: gK,
      M: 'місяць',
      MM: gK,
      y: 'рік',
      yy: gK
    },
    meridiemParse: /ночі|ранку|дня|вечора/,
    isPM: function (b) {
      return /^(дня|вечора)$/.test(b)
    },
    meridiem: function (e, d, f) {
      return 4 > e ? 'ночі' : 12 > e ? 'ранку' : 17 > e ? 'дня' : 'вечора'
    },
    ordinalParse: /\d{1,2}-(й|го)/,
    ordinal: function (d, c) {
      switch (c) {
        case 'M':
        case 'd':
        case 'DDD':
        case 'w':
        case 'W':
          return d + '-й';
        case 'D':
          return d + '-го';
        default:
          return d
      }
    },
    week: {
      dow: 1,
      doy: 7
    }
  }),
  a1.defineLocale('uz', {
    months: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_'),
    monthsShort: 'янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек'.split('_'),
    weekdays: 'Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба'.split('_'),
    weekdaysShort: 'Якш_Душ_Сеш_Чор_Пай_Жум_Шан'.split('_'),
    weekdaysMin: 'Як_Ду_Се_Чо_Па_Жу_Ша'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY HH:mm',
      LLLL: 'D MMMM YYYY, dddd HH:mm'
    },
    calendar: {
      sameDay: '[Бугун соат] LT [да]',
      nextDay: '[Эртага] LT [да]',
      nextWeek: 'dddd [куни соат] LT [да]',
      lastDay: '[Кеча соат] LT [да]',
      lastWeek: '[Утган] dddd [куни соат] LT [да]',
      sameElse: 'L'
    },
    relativeTime: {
      future: 'Якин %s ичида',
      past: 'Бир неча %s олдин',
      s: 'фурсат',
      m: 'бир дакика',
      mm: '%d дакика',
      h: 'бир соат',
      hh: '%d соат',
      d: 'бир кун',
      dd: '%d кун',
      M: 'бир ой',
      MM: '%d ой',
      y: 'бир йил',
      yy: '%d йил'
    },
    week: {
      dow: 1,
      doy: 7
    }
  }),
  a1.defineLocale('vi', {
    months: 'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split('_'),
    monthsShort: 'Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12'.split('_'),
    weekdays: 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split('_'),
    weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
    weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
    longDateFormat: {
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      L: 'DD/MM/YYYY',
      LL: 'D MMMM [năm] YYYY',
      LLL: 'D MMMM [năm] YYYY HH:mm',
      LLLL: 'dddd, D MMMM [năm] YYYY HH:mm',
      l: 'DD/M/YYYY',
      ll: 'D MMM YYYY',
      lll: 'D MMM YYYY HH:mm',
      llll: 'ddd, D MMM YYYY HH:mm'
    },
    calendar: {
      sameDay: '[Hôm nay lúc] LT',
      nextDay: '[Ngày mai lúc] LT',
      nextWeek: 'dddd [tuần tới lúc] LT',
      lastDay: '[Hôm qua lúc] LT',
      lastWeek: 'dddd [tuần rồi lúc] LT',
      sameElse: 'L'
    },
    relativeTime: {
      future: '%s tới',
      past: '%s trước',
      s: 'vài giây',
      m: 'một phút',
      mm: '%d phút',
      h: 'một giờ',
      hh: '%d giờ',
      d: 'một ngày',
      dd: '%d ngày',
      M: 'một tháng',
      MM: '%d tháng',
      y: 'một năm',
      yy: '%d năm'
    },
    ordinalParse: /\d{1,2}/,
    ordinal: function (b) {
      return b
    },
    week: {
      dow: 1,
      doy: 4
    }
  }),
  a1.defineLocale('zh-cn', {
    months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
    weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
    longDateFormat: {
      LT: 'Ah点mm分',
      LTS: 'Ah点m分s秒',
      L: 'YYYY-MM-DD',
      LL: 'YYYY年MMMD日',
      LLL: 'YYYY年MMMD日Ah点mm分',
      LLLL: 'YYYY年MMMD日ddddAh点mm分',
      l: 'YYYY-MM-DD',
      ll: 'YYYY年MMMD日',
      lll: 'YYYY年MMMD日Ah点mm分',
      llll: 'YYYY年MMMD日ddddAh点mm分'
    },
    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour: function (d, c) {
      return 12 === d && (d = 0),
      '凌晨' === c || '早上' === c || '上午' === c ? d : '下午' === c || '晚上' === c ? d + 12 : d >= 11 ? d : d + 12
    },
    meridiem: function (f, e, h) {
      var g = 100 * f + e;
      return 600 > g ? '凌晨' : 900 > g ? '早上' : 1130 > g ? '上午' : 1230 > g ? '中午' : 1800 > g ? '下午' : '晚上'
    },
    calendar: {
      sameDay: function () {
        return 0 === this.minutes() ? '[今天]Ah[点整]' : '[今天]LT'
      },
      nextDay: function () {
        return 0 === this.minutes() ? '[明天]Ah[点整]' : '[明天]LT'
      },
      lastDay: function () {
        return 0 === this.minutes() ? '[昨天]Ah[点整]' : '[昨天]LT'
      },
      nextWeek: function () {
        var d,
        c;
        return d = a1().startOf('week'),
        c = this.unix() - d.unix() >= 604800 ? '[下]' : '[本]',
        0 === this.minutes() ? c + 'dddAh点整' : c + 'dddAh点mm'
      },
      lastWeek: function () {
        var d,
        c;
        return d = a1().startOf('week'),
        c = this.unix() < d.unix() ? '[上]' : '[本]',
        0 === this.minutes() ? c + 'dddAh点整' : c + 'dddAh点mm'
      },
      sameElse: 'LL'
    },
    ordinalParse: /\d{1,2}(日|月|周)/,
    ordinal: function (d, c) {
      switch (c) {
        case 'd':
        case 'D':
        case 'DDD':
          return d + '日';
        case 'M':
          return d + '月';
        case 'w':
        case 'W':
          return d + '周';
        default:
          return d
      }
    },
    relativeTime: {
      future: '%s内',
      past: '%s前',
      s: '几秒',
      m: '1 分钟',
      mm: '%d 分钟',
      h: '1 小时',
      hh: '%d 小时',
      d: '1 天',
      dd: '%d 天',
      M: '1 个月',
      MM: '%d 个月',
      y: '1 年',
      yy: '%d 年'
    },
    week: {
      dow: 1,
      doy: 4
    }
  }), a1.defineLocale('zh-tw', {
    months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort: '週日_週一_週二_週三_週四_週五_週六'.split('_'),
    weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
    longDateFormat: {
      LT: 'Ah點mm分',
      LTS: 'Ah點m分s秒',
      L: 'YYYY年MMMD日',
      LL: 'YYYY年MMMD日',
      LLL: 'YYYY年MMMD日Ah點mm分',
      LLLL: 'YYYY年MMMD日ddddAh點mm分',
      l: 'YYYY年MMMD日',
      ll: 'YYYY年MMMD日',
      lll: 'YYYY年MMMD日Ah點mm分',
      llll: 'YYYY年MMMD日ddddAh點mm分'
    },
    meridiemParse: /早上|上午|中午|下午|晚上/,
    meridiemHour: function (d, c) {
      return 12 === d && (d = 0),
      '早上' === c || '上午' === c ? d : '中午' === c ? d >= 11 ? d : d + 12 : '下午' === c || '晚上' === c ? d + 12 : void 0
    },
    meridiem: function (f, e, h) {
      var g = 100 * f + e;
      return 900 > g ? '早上' : 1130 > g ? '上午' : 1230 > g ? '中午' : 1800 > g ? '下午' : '晚上'
    },
    calendar: {
      sameDay: '[今天]LT',
      nextDay: '[明天]LT',
      nextWeek: '[下]ddddLT',
      lastDay: '[昨天]LT',
      lastWeek: '[上]ddddLT',
      sameElse: 'L'
    },
    ordinalParse: /\d{1,2}(日|月|週)/,
    ordinal: function (d, c) {
      switch (c) {
        case 'd':
        case 'D':
        case 'DDD':
          return d + '日';
        case 'M':
          return d + '月';
        case 'w':
        case 'W':
          return d + '週';
        default:
          return d
      }
    },
    relativeTime: {
      future: '%s內',
      past: '%s前',
      s: '幾秒',
      m: '一分鐘',
      mm: '%d分鐘',
      h: '一小時',
      hh: '%d小時',
      d: '一天',
      dd: '%d天',
      M: '一個月',
      MM: '%d個月',
      y: '一年',
      yy: '%d年'
    }
  }), a1); return cZ.locale('en'), cZ
}); 'function' !== typeof Object.create && (Object.create = function (b) {
  function a() {
  }
  a.prototype = b;
  return new a
}); (function (d, c, b) {
  var a = {
    init: function (f, e) {
      this.$elem = d(e);
      this.options = d.extend({
      }, d.fn.owlCarousel.options, this.$elem.data(), f);
      this.userOptions = f;
      this.loadContent()
    },
    loadContent: function () {
      function g(i) {
        var k,
        j = '';
        if ('function' === typeof f.options.jsonSuccess) {
          f.options.jsonSuccess.apply(this, [
            i
          ])
        } else {
          for (k in i.owl) {
            i.owl.hasOwnProperty(k) && (j += i.owl[k].item)
          }
          f.$elem.html(j)
        }
        f.logIn()
      }
      var f = this,
      h;
      'function' === typeof f.options.beforeInit && f.options.beforeInit.apply(this, [
        f.$elem
      ]);
      'string' === typeof f.options.jsonPath ? (h = f.options.jsonPath, d.getJSON(h, g))  : f.logIn()
    },
    logIn: function () {
      this.$elem.data('owl-originalStyles', this.$elem.attr('style'));
      this.$elem.data('owl-originalClasses', this.$elem.attr('class'));
      this.$elem.css({
        opacity: 0
      });
      this.orignalItems = this.options.items;
      this.checkBrowser();
      this.wrapperWidth = 0;
      this.checkVisible = null;
      this.setVars()
    },
    setVars: function () {
      if (0 === this.$elem.children().length) {
        return !1
      }
      this.baseClass();
      this.eventTypes();
      this.$userItems = this.$elem.children();
      this.itemsAmount = this.$userItems.length;
      this.wrapItems();
      this.$owlItems = this.$elem.find('.owl-item');
      this.$owlWrapper = this.$elem.find('.owl-wrapper');
      this.playDirection = 'next';
      this.prevItem = 0;
      this.prevArr = [
        0
      ];
      this.currentItem = 0;
      this.customEvents();
      this.onStartup()
    },
    onStartup: function () {
      this.updateItems();
      this.calculateAll();
      this.buildControls();
      this.updateControls();
      this.response();
      this.moveEvents();
      this.stopOnHover();
      this.owlStatus();
      !1 !== this.options.transitionStyle && this.transitionTypes(this.options.transitionStyle);
      !0 === this.options.autoPlay && (this.options.autoPlay = 5000);
      this.play();
      this.$elem.find('.owl-wrapper').css('display', 'block');
      this.$elem.is(':visible') ? this.$elem.css('opacity', 1)  : this.watchVisibility();
      this.onstartup = !1;
      this.eachMoveUpdate();
      'function' === typeof this.options.afterInit && this.options.afterInit.apply(this, [
        this.$elem
      ])
    },
    eachMoveUpdate: function () {
      !0 === this.options.lazyLoad && this.lazyLoad();
      !0 === this.options.autoHeight && this.autoHeight();
      this.onVisibleItems();
      'function' === typeof this.options.afterAction && this.options.afterAction.apply(this, [
        this.$elem
      ])
    },
    updateVars: function () {
      'function' === typeof this.options.beforeUpdate && this.options.beforeUpdate.apply(this, [
        this.$elem
      ]);
      this.watchVisibility();
      this.updateItems();
      this.calculateAll();
      this.updatePosition();
      this.updateControls();
      this.eachMoveUpdate();
      'function' === typeof this.options.afterUpdate && this.options.afterUpdate.apply(this, [
        this.$elem
      ])
    },
    reload: function () {
      var e = this;
      c.setTimeout(function () {
        e.updateVars()
      }, 0)
    },
    watchVisibility: function () {
      var e = this;
      if (!1 === e.$elem.is(':visible')) {
        e.$elem.css({
          opacity: 0
        }),
        c.clearInterval(e.autoPlayInterval),
        c.clearInterval(e.checkVisible)
      } else {
        return !1
      }
      e.checkVisible = c.setInterval(function () {
        e.$elem.is(':visible') && (e.reload(), e.$elem.animate({
          opacity: 1
        }, 200), c.clearInterval(e.checkVisible))
      }, 500)
    },
    wrapItems: function () {
      this.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>');
      this.$elem.find('.owl-wrapper').wrap('<div class="owl-wrapper-outer">');
      this.wrapperOuter = this.$elem.find('.owl-wrapper-outer');
      this.$elem.css('display', 'block')
    },
    baseClass: function () {
      var f = this.$elem.hasClass(this.options.baseClass),
      e = this.$elem.hasClass(this.options.theme);
      f || this.$elem.addClass(this.options.baseClass);
      e || this.$elem.addClass(this.options.theme)
    },
    updateItems: function () {
      var f,
      e;
      if (!1 === this.options.responsive) {
        return !1
      }
      if (!0 === this.options.singleItem) {
        return this.options.items = this.orignalItems = 1,
        this.options.itemsCustom = !1,
        this.options.itemsDesktop = !1,
        this.options.itemsDesktopSmall = !1,
        this.options.itemsTablet = !1,
        this.options.itemsTabletSmall = !1,
        this.options.itemsMobile = !1
      }
      f = d(this.options.responsiveBaseWidth).width();
      f > (this.options.itemsDesktop[0] || this.orignalItems) && (this.options.items = this.orignalItems);
      if (!1 !== this.options.itemsCustom) {
        for (this.options.itemsCustom.sort(function (h, g) {
          return h[0] - g[0]
        }), e = 0; e < this.options.itemsCustom.length; e += 1) {
          this.options.itemsCustom[e][0] <= f && (this.options.items = this.options.itemsCustom[e][1])
        }
      } else {
        f <= this.options.itemsDesktop[0] && !1 !== this.options.itemsDesktop && (this.options.items = this.options.itemsDesktop[1]),
        f <= this.options.itemsDesktopSmall[0] && !1 !== this.options.itemsDesktopSmall && (this.options.items = this.options.itemsDesktopSmall[1]),
        f <= this.options.itemsTablet[0] && !1 !== this.options.itemsTablet && (this.options.items = this.options.itemsTablet[1]),
        f <= this.options.itemsTabletSmall[0] && !1 !== this.options.itemsTabletSmall && (this.options.items = this.options.itemsTabletSmall[1]),
        f <= this.options.itemsMobile[0] && !1 !== this.options.itemsMobile && (this.options.items = this.options.itemsMobile[1])
      }
      this.options.items > this.itemsAmount && !0 === this.options.itemsScaleUp && (this.options.items = this.itemsAmount)
    },
    response: function () {
      var g = this,
      f,
      h;
      if (!0 !== g.options.responsive) {
        return !1
      }
      h = d(c).width();
      g.resizer = function () {
        d(c).width() !== h && (!1 !== g.options.autoPlay && c.clearInterval(g.autoPlayInterval), c.clearTimeout(f), f = c.setTimeout(function () {
          h = d(c).width();
          g.updateVars()
        }, g.options.responsiveRefreshRate))
      };
      d(c).resize(g.resizer)
    },
    updatePosition: function () {
      this.jumpTo(this.currentItem);
      !1 !== this.options.autoPlay && this.checkAp()
    },
    appendItemsSizes: function () {
      var g = this,
      f = 0,
      h = g.itemsAmount - g.options.items;
      g.$owlItems.each(function (i) {
        var e = d(this);
        e.css({
          width: g.itemWidth
        }).data('owl-item', Number(i));
        if (0 === i % g.options.items || i === h) {
          i > h || (f += 1)
        }
        e.data('owl-roundPages', f)
      })
    },
    appendWrapperSizes: function () {
      this.$owlWrapper.css({
        width: this.$owlItems.length * this.itemWidth * 2,
        left: 0
      });
      this.appendItemsSizes()
    },
    calculateAll: function () {
      this.calculateWidth();
      this.appendWrapperSizes();
      this.loops();
      this.max()
    },
    calculateWidth: function () {
      this.itemWidth = Math.round(this.$elem.width() / this.options.items)
    },
    max: function () {
      var e = - 1 * (this.itemsAmount * this.itemWidth - this.options.items * this.itemWidth);
      this.options.items > this.itemsAmount ? this.maximumPixels = e = this.maximumItem = 0 : (this.maximumItem = this.itemsAmount - this.options.items, this.maximumPixels = e);
      return e
    },
    min: function () {
      return 0
    },
    loops: function () {
      var g = 0,
      f = 0,
      h,
      i;
      this.positionsInArray = [
        0
      ];
      this.pagesInArray = [
      ];
      for (h = 0; h < this.itemsAmount; h += 1) {
        f += this.itemWidth,
        this.positionsInArray.push( - f),
        !0 === this.options.scrollPerPage && (i = d(this.$owlItems[h]), i = i.data('owl-roundPages'), i !== g && (this.pagesInArray[g] = this.positionsInArray[h], g = i))
      }
    },
    buildControls: function () {
      if (!0 === this.options.navigation || !0 === this.options.pagination) {
        this.owlControls = d('<div class="owl-controls"/>').toggleClass('clickable', !this.browser.isTouch).appendTo(this.$elem)
      }
      !0 === this.options.pagination && this.buildPagination();
      !0 === this.options.navigation && this.buildButtons()
    },
    buildButtons: function () {
      var f = this,
      e = d('<div class="owl-buttons"/>');
      f.owlControls.append(e);
      f.buttonPrev = d('<div/>', {
        'class': 'owl-prev',
        html: f.options.navigationText[0] || ''
      });
      f.buttonNext = d('<div/>', {
        'class': 'owl-next',
        html: f.options.navigationText[1] || ''
      });
      e.append(f.buttonPrev).append(f.buttonNext);
      e.on('touchstart.owlControls mousedown.owlControls', 'div[class^="owl"]', function (g) {
        g.preventDefault()
      });
      e.on('touchend.owlControls mouseup.owlControls', 'div[class^="owl"]', function (g) {
        g.preventDefault();
        d(this).hasClass('owl-next') ? f.next()  : f.prev()
      })
    },
    buildPagination: function () {
      var e = this;
      e.paginationWrapper = d('<div class="owl-pagination"/>');
      e.owlControls.append(e.paginationWrapper);
      e.paginationWrapper.on('touchend.owlControls mouseup.owlControls', '.owl-page', function (f) {
        f.preventDefault();
        Number(d(this).data('owl-page')) !== e.currentItem && e.goTo(Number(d(this).data('owl-page')), !0)
      })
    },
    updatePagination: function () {
      var h,
      f,
      j,
      l,
      k,
      i;
      if (!1 === this.options.pagination) {
        return !1
      }
      this.paginationWrapper.html('');
      h = 0;
      f = this.itemsAmount - this.itemsAmount % this.options.items;
      for (l = 0; l < this.itemsAmount; l += 1) {
        0 === l % this.options.items && (h += 1, f === l && (j = this.itemsAmount - this.options.items), k = d('<div/>', {
          'class': 'owl-page'
        }), i = d('<span></span>', {
          text: !0 === this.options.paginationNumbers ? h : '',
          'class': !0 === this.options.paginationNumbers ? 'owl-numbers' : ''
        }), k.append(i), k.data('owl-page', f === l ? j : l), k.data('owl-roundPages', h), this.paginationWrapper.append(k))
      }
      this.checkPagination()
    },
    checkPagination: function () {
      var e = this;
      if (!1 === e.options.pagination) {
        return !1
      }
      e.paginationWrapper.find('.owl-page').each(function () {
        d(this).data('owl-roundPages') === d(e.$owlItems[e.currentItem]).data('owl-roundPages') && (e.paginationWrapper.find('.owl-page').removeClass('active'), d(this).addClass('active'))
      })
    },
    checkNavigation: function () {
      if (!1 === this.options.navigation) {
        return !1
      }
      !1 === this.options.rewindNav && (0 === this.currentItem && 0 === this.maximumItem ? (this.buttonPrev.addClass('disabled'), this.buttonNext.addClass('disabled'))  : 0 === this.currentItem && 0 !== this.maximumItem ? (this.buttonPrev.addClass('disabled'), this.buttonNext.removeClass('disabled'))  : this.currentItem === this.maximumItem ? (this.buttonPrev.removeClass('disabled'), this.buttonNext.addClass('disabled'))  : 0 !== this.currentItem && this.currentItem !== this.maximumItem && (this.buttonPrev.removeClass('disabled'), this.buttonNext.removeClass('disabled')))
    },
    updateControls: function () {
      this.updatePagination();
      this.checkNavigation();
      this.owlControls && (this.options.items >= this.itemsAmount ? this.owlControls.hide()  : this.owlControls.show())
    },
    destroyControls: function () {
      this.owlControls && this.owlControls.remove()
    },
    next: function (e) {
      if (this.isTransition) {
        return !1
      }
      this.currentItem += !0 === this.options.scrollPerPage ? this.options.items : 1;
      if (this.currentItem > this.maximumItem + (!0 === this.options.scrollPerPage ? this.options.items - 1 : 0)) {
        if (!0 === this.options.rewindNav) {
          this.currentItem = 0,
          e = 'rewind'
        } else {
          return this.currentItem = this.maximumItem,
          !1
        }
      }
      this.goTo(this.currentItem, e)
    },
    prev: function (e) {
      if (this.isTransition) {
        return !1
      }
      this.currentItem = !0 === this.options.scrollPerPage && 0 < this.currentItem && this.currentItem < this.options.items ? 0 : this.currentItem - (!0 === this.options.scrollPerPage ? this.options.items : 1);
      if (0 > this.currentItem) {
        if (!0 === this.options.rewindNav) {
          this.currentItem = this.maximumItem,
          e = 'rewind'
        } else {
          return this.currentItem = 0,
          !1
        }
      }
      this.goTo(this.currentItem, e)
    },
    goTo: function (g, f, h) {
      var i = this;
      if (i.isTransition) {
        return !1
      }
      'function' === typeof i.options.beforeMove && i.options.beforeMove.apply(this, [
        i.$elem
      ]);
      g >= i.maximumItem ? g = i.maximumItem : 0 >= g && (g = 0);
      i.currentItem = i.owl.currentItem = g;
      if (!1 !== i.options.transitionStyle && 'drag' !== h && 1 === i.options.items && !0 === i.browser.support3d) {
        return i.swapSpeed(0),
        !0 === i.browser.support3d ? i.transition3d(i.positionsInArray[g])  : i.css2slide(i.positionsInArray[g], 1),
        i.afterGo(),
        i.singleItemTransition(),
        !1
      }
      g = i.positionsInArray[g];
      !0 === i.browser.support3d ? (i.isCss3Finish = !1, !0 === f ? (i.swapSpeed('paginationSpeed'), c.setTimeout(function () {
        i.isCss3Finish = !0
      }, i.options.paginationSpeed))  : 'rewind' === f ? (i.swapSpeed(i.options.rewindSpeed), c.setTimeout(function () {
        i.isCss3Finish = !0
      }, i.options.rewindSpeed))  : (i.swapSpeed('slideSpeed'), c.setTimeout(function () {
        i.isCss3Finish = !0
      }, i.options.slideSpeed)), i.transition3d(g))  : !0 === f ? i.css2slide(g, i.options.paginationSpeed)  : 'rewind' === f ? i.css2slide(g, i.options.rewindSpeed)  : i.css2slide(g, i.options.slideSpeed);
      i.afterGo()
    },
    jumpTo: function (e) {
      'function' === typeof this.options.beforeMove && this.options.beforeMove.apply(this, [
        this.$elem
      ]);
      e >= this.maximumItem || - 1 === e ? e = this.maximumItem : 0 >= e && (e = 0);
      this.swapSpeed(0);
      !0 === this.browser.support3d ? this.transition3d(this.positionsInArray[e])  : this.css2slide(this.positionsInArray[e], 1);
      this.currentItem = this.owl.currentItem = e;
      this.afterGo()
    },
    afterGo: function () {
      this.prevArr.push(this.currentItem);
      this.prevItem = this.owl.prevItem = this.prevArr[this.prevArr.length - 2];
      this.prevArr.shift(0);
      this.prevItem !== this.currentItem && (this.checkPagination(), this.checkNavigation(), this.eachMoveUpdate(), !1 !== this.options.autoPlay && this.checkAp());
      'function' === typeof this.options.afterMove && this.prevItem !== this.currentItem && this.options.afterMove.apply(this, [
        this.$elem
      ])
    },
    stop: function () {
      this.apStatus = 'stop';
      c.clearInterval(this.autoPlayInterval)
    },
    checkAp: function () {
      'stop' !== this.apStatus && this.play()
    },
    play: function () {
      var e = this;
      e.apStatus = 'play';
      if (!1 === e.options.autoPlay) {
        return !1
      }
      c.clearInterval(e.autoPlayInterval);
      e.autoPlayInterval = c.setInterval(function () {
        e.next(!0)
      }, e.options.autoPlay)
    },
    swapSpeed: function (e) {
      'slideSpeed' === e ? this.$owlWrapper.css(this.addCssSpeed(this.options.slideSpeed))  : 'paginationSpeed' === e ? this.$owlWrapper.css(this.addCssSpeed(this.options.paginationSpeed))  : 'string' !== typeof e && this.$owlWrapper.css(this.addCssSpeed(e))
    },
    addCssSpeed: function (e) {
      return {
        '-webkit-transition': 'all ' + e + 'ms ease',
        '-moz-transition': 'all ' + e + 'ms ease',
        '-o-transition': 'all ' + e + 'ms ease',
        transition: 'all ' + e + 'ms ease'
      }
    },
    removeTransition: function () {
      return {
        '-webkit-transition': '',
        '-moz-transition': '',
        '-o-transition': '',
        transition: ''
      }
    },
    doTranslate: function (e) {
      return {
        '-webkit-transform': 'translate3d(' + e + 'px, 0px, 0px)',
        '-moz-transform': 'translate3d(' + e + 'px, 0px, 0px)',
        '-o-transform': 'translate3d(' + e + 'px, 0px, 0px)',
        '-ms-transform': 'translate3d(' + e + 'px, 0px, 0px)',
        transform: 'translate3d(' + e + 'px, 0px,0px)'
      }
    },
    transition3d: function (e) {
      this.$owlWrapper.css(this.doTranslate(e))
    },
    css2move: function (e) {
      this.$owlWrapper.css({
        left: e
      })
    },
    css2slide: function (g, f) {
      var h = this;
      h.isCssFinish = !1;
      h.$owlWrapper.stop(!0, !0).animate({
        left: g
      }, {
        duration: f || h.options.slideSpeed,
        complete: function () {
          h.isCssFinish = !0
        }
      })
    },
    checkBrowser: function () {
      var e = b.createElement('div');
      e.style.cssText = '  -moz-transform:translate3d(0px, 0px, 0px); -ms-transform:translate3d(0px, 0px, 0px); -o-transform:translate3d(0px, 0px, 0px); -webkit-transform:translate3d(0px, 0px, 0px); transform:translate3d(0px, 0px, 0px)';
      e = e.style.cssText.match(/translate3d\(0px, 0px, 0px\)/g);
      this.browser = {
        support3d: null !== e && 1 === e.length,
        isTouch: 'ontouchstart' in c || c.navigator.msMaxTouchPoints
      }
    },
    moveEvents: function () {
      if (!1 !== this.options.mouseDrag || !1 !== this.options.touchDrag) {
        this.gestures(),
        this.disabledEvents()
      }
    },
    eventTypes: function () {
      var e = [
        's',
        'e',
        'x'
      ];
      this.ev_types = {
      };
      !0 === this.options.mouseDrag && !0 === this.options.touchDrag ? e = [
        'touchstart.owl mousedown.owl',
        'touchmove.owl mousemove.owl',
        'touchend.owl touchcancel.owl mouseup.owl'
      ] : !1 === this.options.mouseDrag && !0 === this.options.touchDrag ? e = [
        'touchstart.owl',
        'touchmove.owl',
        'touchend.owl touchcancel.owl'
      ] : !0 === this.options.mouseDrag && !1 === this.options.touchDrag && (e = [
        'mousedown.owl',
        'mousemove.owl',
        'mouseup.owl'
      ]);
      this.ev_types.start = e[0];
      this.ev_types.move = e[1];
      this.ev_types.end = e[2]
    },
    disabledEvents: function () {
      this.$elem.on('dragstart.owl', function (e) {
        e.preventDefault()
      });
      this.$elem.on('mousedown.disableTextSelect', function (e) {
        return d(e.target).is('input, textarea, select, option')
      })
    },
    gestures: function () {
      function g(e) {
        if (void 0 !== e.touches) {
          return {
            x: e.touches[0].pageX,
            y: e.touches[0].pageY
          }
        }
        if (void 0 === e.touches) {
          if (void 0 !== e.pageX) {
            return {
              x: e.pageX,
              y: e.pageY
            }
          }
          if (void 0 === e.pageX) {
            return {
              x: e.clientX,
              y: e.clientY
            }
          }
        }
      }
      function f(e) {
        'on' === e ? (d(b).on(k.ev_types.move, j), d(b).on(k.ev_types.end, l))  : 'off' === e && (d(b).off(k.ev_types.move), d(b).off(k.ev_types.end))
      }
      function j(e) {
        e = e.originalEvent || e || c.event;
        k.newPosX = g(e).x - i.offsetX;
        k.newPosY = g(e).y - i.offsetY;
        k.newRelativeX = k.newPosX - i.relativePos;
        'function' === typeof k.options.startDragging && !0 !== i.dragging && 0 !== k.newRelativeX && (i.dragging = !0, k.options.startDragging.apply(k, [
          k.$elem
        ]));
        (8 < k.newRelativeX || - 8 > k.newRelativeX) && !0 === k.browser.isTouch && (void 0 !== e.preventDefault ? e.preventDefault()  : e.returnValue = !1, i.sliding = !0);
        (10 < k.newPosY || - 10 > k.newPosY) && !1 === i.sliding && d(b).off('touchmove.owl');
        k.newPosX = Math.max(Math.min(k.newPosX, k.newRelativeX / 5), k.maximumPixels + k.newRelativeX / 5);
        !0 === k.browser.support3d ? k.transition3d(k.newPosX)  : k.css2move(k.newPosX)
      }
      function l(e) {
        e = e.originalEvent || e || c.event;
        var h;
        e.target = e.target || e.srcElement;
        i.dragging = !1;
        !0 !== k.browser.isTouch && k.$owlWrapper.removeClass('grabbing');
        k.dragDirection = 0 > k.newRelativeX ? k.owl.dragDirection = 'left' : k.owl.dragDirection = 'right';
        0 !== k.newRelativeX && (h = k.getNewPosition(), k.goTo(h, !1, 'drag'), i.targetElement === e.target && !0 !== k.browser.isTouch && (d(e.target).on('click.disable', function (m) {
          m.stopImmediatePropagation();
          m.stopPropagation();
          m.preventDefault();
          d(m.target).off('click.disable')
        }), e = d._data(e.target, 'events').click, h = e.pop(), e.splice(0, 0, h)));
        f('off')
      }
      var k = this,
      i = {
        offsetX: 0,
        offsetY: 0,
        baseElWidth: 0,
        relativePos: 0,
        position: null,
        minSwipe: null,
        maxSwipe: null,
        sliding: null,
        dargging: null,
        targetElement: null
      };
      k.isCssFinish = !0;
      k.$elem.on(k.ev_types.start, '.owl-wrapper', function (m) {
        m = m.originalEvent || m || c.event;
        var h;
        if (3 === m.which) {
          return !1
        }
        if (!(k.itemsAmount <= k.options.items)) {
          if (!1 === k.isCssFinish && !k.options.dragBeforeAnimFinish || !1 === k.isCss3Finish && !k.options.dragBeforeAnimFinish) {
            return !1
          }
          !1 !== k.options.autoPlay && c.clearInterval(k.autoPlayInterval);
          !0 === k.browser.isTouch || k.$owlWrapper.hasClass('grabbing') || k.$owlWrapper.addClass('grabbing');
          k.newPosX = 0;
          k.newRelativeX = 0;
          d(this).css(k.removeTransition());
          h = d(this).position();
          i.relativePos = h.left;
          i.offsetX = g(m).x - h.left;
          i.offsetY = g(m).y - h.top;
          f('on');
          i.sliding = !1;
          i.targetElement = m.target || m.srcElement
        }
      })
    },
    getNewPosition: function () {
      var e = this.closestItem();
      e > this.maximumItem ? e = this.currentItem = this.maximumItem : 0 <= this.newPosX && (this.currentItem = e = 0);
      return e
    },
    closestItem: function () {
      var g = this,
      f = !0 === g.options.scrollPerPage ? g.pagesInArray : g.positionsInArray,
      h = g.newPosX,
      i = null;
      d.each(f, function (j, e) {
        h - g.itemWidth / 20 > f[j + 1] && h - g.itemWidth / 20 < e && 'left' === g.moveDirection() ? (i = e, g.currentItem = !0 === g.options.scrollPerPage ? d.inArray(i, g.positionsInArray)  : j)  : h + g.itemWidth / 20 < e && h + g.itemWidth / 20 > (f[j + 1] || f[j] - g.itemWidth) && 'right' === g.moveDirection() && (!0 === g.options.scrollPerPage ? (i = f[j + 1] || f[f.length - 1], g.currentItem = d.inArray(i, g.positionsInArray))  : (i = f[j + 1], g.currentItem = j + 1))
      });
      return g.currentItem
    },
    moveDirection: function () {
      var e;
      0 > this.newRelativeX ? (e = 'right', this.playDirection = 'next')  : (e = 'left', this.playDirection = 'prev');
      return e
    },
    customEvents: function () {
      var e = this;
      e.$elem.on('owl.next', function () {
        e.next()
      });
      e.$elem.on('owl.prev', function () {
        e.prev()
      });
      e.$elem.on('owl.play', function (f, g) {
        e.options.autoPlay = g;
        e.play();
        e.hoverStatus = 'play'
      });
      e.$elem.on('owl.stop', function () {
        e.stop();
        e.hoverStatus = 'stop'
      });
      e.$elem.on('owl.goTo', function (f, g) {
        e.goTo(g)
      });
      e.$elem.on('owl.jumpTo', function (f, g) {
        e.jumpTo(g)
      })
    },
    stopOnHover: function () {
      var e = this;
      !0 === e.options.stopOnHover && !0 !== e.browser.isTouch && !1 !== e.options.autoPlay && (e.$elem.on('mouseover', function () {
        e.stop()
      }), e.$elem.on('mouseout', function () {
        'stop' !== e.hoverStatus && e.play()
      }))
    },
    lazyLoad: function () {
      var g,
      f,
      h,
      j,
      i;
      if (!1 === this.options.lazyLoad) {
        return !1
      }
      for (g = 0; g < this.itemsAmount; g += 1) {
        f = d(this.$owlItems[g]),
        'loaded' !== f.data('owl-loaded') && (h = f.data('owl-item'), j = f.find('.lazyOwl'), 'string' !== typeof j.data('src') ? f.data('owl-loaded', 'loaded')  : (void 0 === f.data('owl-loaded') && (j.hide(), f.addClass('loading').data('owl-loaded', 'checked')), (i = !0 === this.options.lazyFollow ? h >= this.currentItem : !0) && h < this.currentItem + this.options.items && j.length && this.lazyPreload(f, j)))
      }
    },
    lazyPreload: function (h, g) {
      function l() {
        h.data('owl-loaded', 'loaded').removeClass('loading');
        g.removeAttr('data-src');
        'fade' === m.options.lazyEffect ? g.fadeIn(400)  : g.show();
        'function' === typeof m.options.afterLazyLoad && m.options.afterLazyLoad.apply(this, [
          m.$elem
        ])
      }
      function n() {
        j += 1;
        m.completeImg(g.get(0)) || !0 === i ? l()  : 100 >= j ? c.setTimeout(n, 100)  : l()
      }
      var m = this,
      j = 0,
      i;
      'DIV' === g.prop('tagName') ? (g.css('background-image', 'url(' + g.data('src') + ')'), i = !0)  : g[0].src = g.data('src');
      n()
    },
    autoHeight: function () {
      function g() {
        var e = d(h.$owlItems[h.currentItem]).height();
        h.wrapperOuter.css('height', e + 'px');
        h.wrapperOuter.hasClass('autoHeight') || c.setTimeout(function () {
          h.wrapperOuter.addClass('autoHeight')
        }, 0)
      }
      function f() {
        i += 1;
        h.completeImg(j.get(0)) ? g()  : 100 >= i ? c.setTimeout(f, 100)  : h.wrapperOuter.css('height', '')
      }
      var h = this,
      j = d(h.$owlItems[h.currentItem]).find('img'),
      i;
      void 0 !== j.get(0) ? (i = 0, f())  : g()
    },
    completeImg: function (e) {
      return !e.complete || 'undefined' !== typeof e.naturalWidth && 0 === e.naturalWidth ? !1 : !0
    },
    onVisibleItems: function () {
      var e;
      !0 === this.options.addClassActive && this.$owlItems.removeClass('active');
      this.visibleItems = [
      ];
      for (e = this.currentItem; e < this.currentItem + this.options.items; e += 1) {
        this.visibleItems.push(e),
        !0 === this.options.addClassActive && d(this.$owlItems[e]).addClass('active')
      }
      this.owl.visibleItems = this.visibleItems
    },
    transitionTypes: function (e) {
      this.outClass = 'owl-' + e + '-out';
      this.inClass = 'owl-' + e + '-in'
    },
    singleItemTransition: function () {
      var i = this,
      h = i.outClass,
      l = i.inClass,
      n = i.$owlItems.eq(i.currentItem),
      m = i.$owlItems.eq(i.prevItem),
      k = Math.abs(i.positionsInArray[i.currentItem]) + i.positionsInArray[i.prevItem],
      j = Math.abs(i.positionsInArray[i.currentItem]) + i.itemWidth / 2;
      i.isTransition = !0;
      i.$owlWrapper.addClass('owl-origin').css({
        '-webkit-transform-origin': j + 'px',
        '-moz-perspective-origin': j + 'px',
        'perspective-origin': j + 'px'
      });
      m.css({
        position: 'relative',
        left: k + 'px'
      }).addClass(h).on('webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend', function () {
        i.endPrev = !0;
        m.off('webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend');
        i.clearTransStyle(m, h)
      });
      n.addClass(l).on('webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend', function () {
        i.endCurrent = !0;
        n.off('webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend');
        i.clearTransStyle(n, l)
      })
    },
    clearTransStyle: function (f, e) {
      f.css({
        position: '',
        left: ''
      }).removeClass(e);
      this.endPrev && this.endCurrent && (this.$owlWrapper.removeClass('owl-origin'), this.isTransition = this.endCurrent = this.endPrev = !1)
    },
    owlStatus: function () {
      this.owl = {
        userOptions: this.userOptions,
        baseElement: this.$elem,
        userItems: this.$userItems,
        owlItems: this.$owlItems,
        currentItem: this.currentItem,
        prevItem: this.prevItem,
        visibleItems: this.visibleItems,
        isTouch: this.browser.isTouch,
        browser: this.browser,
        dragDirection: this.dragDirection
      }
    },
    clearEvents: function () {
      this.$elem.off('.owl owl mousedown.disableTextSelect');
      d(b).off('.owl owl');
      d(c).off('resize', this.resizer)
    },
    unWrap: function () {
      0 !== this.$elem.children().length && (this.$owlWrapper.unwrap(), this.$userItems.unwrap().unwrap(), this.owlControls && this.owlControls.remove());
      this.clearEvents();
      this.$elem.attr('style', this.$elem.data('owl-originalStyles') || '').attr('class', this.$elem.data('owl-originalClasses'))
    },
    destroy: function () {
      this.stop();
      c.clearInterval(this.checkVisible);
      this.unWrap();
      this.$elem.removeData()
    },
    reinit: function (e) {
      e = d.extend({
      }, this.userOptions, e);
      this.unWrap();
      this.init(e, this.$elem)
    },
    addItem: function (g, f) {
      var h;
      if (!g) {
        return !1
      }
      if (0 === this.$elem.children().length) {
        return this.$elem.append(g),
        this.setVars(),
        !1
      }
      this.unWrap();
      h = void 0 === f || - 1 === f ? - 1 : f;
      h >= this.$userItems.length || - 1 === h ? this.$userItems.eq( - 1).after(g)  : this.$userItems.eq(h).before(g);
      this.setVars()
    },
    removeItem: function (e) {
      if (0 === this.$elem.children().length) {
        return !1
      }
      e = void 0 === e || - 1 === e ? - 1 : e;
      this.unWrap();
      this.$userItems.eq(e).remove();
      this.setVars()
    }
  };
  d.fn.owlCarousel = function (e) {
    return this.each(function () {
      if (!0 === d(this).data('owl-init')) {
        return !1
      }
      d(this).data('owl-init', !0);
      var f = Object.create(a);
      f.init(e, this);
      d.data(this, 'owlCarousel', f)
    })
  };
  d.fn.owlCarousel.options = {
    items: 5,
    itemsCustom: !1,
    itemsDesktop: [
      1199,
      4
    ],
    itemsDesktopSmall: [
      979,
      3
    ],
    itemsTablet: [
      768,
      2
    ],
    itemsTabletSmall: !1,
    itemsMobile: [
      479,
      1
    ],
    singleItem: !1,
    itemsScaleUp: !1,
    slideSpeed: 200,
    paginationSpeed: 800,
    rewindSpeed: 1000,
    autoPlay: !1,
    stopOnHover: !1,
    navigation: !1,
    navigationText: [
      'prev',
      'next'
    ],
    rewindNav: !0,
    scrollPerPage: !1,
    pagination: !0,
    paginationNumbers: !1,
    responsive: !0,
    responsiveRefreshRate: 200,
    responsiveBaseWidth: c,
    baseClass: 'owl-carousel',
    theme: 'owl-theme',
    lazyLoad: !1,
    lazyFollow: !0,
    lazyEffect: 'fade',
    autoHeight: !1,
    jsonPath: !1,
    jsonSuccess: !1,
    dragBeforeAnimFinish: !0,
    mouseDrag: !0,
    touchDrag: !0,
    addClassActive: !1,
    transitionStyle: !1,
    beforeUpdate: !1,
    afterUpdate: !1,
    beforeInit: !1,
    afterInit: !1,
    beforeMove: !1,
    afterMove: !1,
    afterAction: !1,
    startDragging: !1,
    afterLazyLoad: !1
  }
}) (jQuery, window, document); + function (d) {
  var c = function (f, e) {
    this.options = d.extend({
    }, c.DEFAULTS, e);
    this.$target = d(this.options.target).on('scroll.bs.affix.data-api', d.proxy(this.checkPosition, this)).on('click.bs.affix.data-api', d.proxy(this.checkPositionWithEventLoop, this));
    this.$element = d(f);
    this.affixed = null;
    this.unpin = null;
    this.pinnedOffset = null;
    this.checkPosition()
  };
  c.VERSION = '3.3.5';
  c.RESET = 'affix affix-top affix-bottom';
  c.DEFAULTS = {
    offset: 0,
    target: window
  };
  c.prototype.getState = function (n, m, f, g) {
    var e = this.$target.scrollTop();
    var i = this.$element.offset();
    var j = this.$target.height();
    if (f != null && this.affixed == 'top') {
      return e < f ? 'top' : false
    }
    if (this.affixed == 'bottom') {
      if (f != null) {
        return (e + this.unpin <= i.top) ? false : 'bottom'
      }
      return (e + j <= n - g) ? false : 'bottom'
    }
    var h = this.affixed == null;
    var l = h ? e : i.top;
    var k = h ? j : m;
    if (f != null && e <= f) {
      return 'top'
    }
    if (g != null && (l + k >= n - g)) {
      return 'bottom'
    }
    return false
  };
  c.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) {
      return this.pinnedOffset
    }
    this.$element.removeClass(c.RESET).addClass('affix');
    var f = this.$target.scrollTop();
    var e = this.$element.offset();
    return (this.pinnedOffset = e.top - f)
  };
  c.prototype.checkPositionWithEventLoop = function () {
    setTimeout(d.proxy(this.checkPosition, this), 1)
  };
  c.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) {
      return
    }
    var f = this.$element.height();
    var l = this.options.offset;
    var j = l.top;
    var h = l.bottom;
    var i = Math.max(d(document).height(), d(document.body).height());
    if (typeof l != 'object') {
      h = j = l
    }
    if (typeof j == 'function') {
      j = l.top(this.$element)
    }
    if (typeof h == 'function') {
      h = l.bottom(this.$element)
    }
    var g = this.getState(i, f, j, h);
    if (this.affixed != g) {
      if (this.unpin != null) {
        this.$element.css('top', '')
      }
      var m = 'affix' + (g ? '-' + g : '');
      var k = d.Event(m + '.bs.affix');
      this.$element.trigger(k);
      if (k.isDefaultPrevented()) {
        return
      }
      this.affixed = g;
      this.unpin = g == 'bottom' ? this.getPinnedOffset()  : null;
      this.$element.removeClass(c.RESET).addClass(m).trigger(m.replace('affix', 'affixed') + '.bs.affix')
    }
    if (g == 'bottom') {
      this.$element.offset({
        top: i - f - h
      })
    }
  };
  function b(e) {
    return this.each(function () {
      var h = d(this);
      var g = h.data('bs.affix');
      var f = typeof e == 'object' && e;
      if (!g) {
        h.data('bs.affix', (g = new c(this, f)))
      }
      if (typeof e == 'string') {
        g[e]()
      }
    })
  }
  var a = d.fn.affix;
  d.fn.affix = b;
  d.fn.affix.Constructor = c;
  d.fn.affix.noConflict = function () {
    d.fn.affix = a;
    return this
  };
  d(window).on('load', function () {
    d('[data-spy="affix"]').each(function () {
      var f = d(this);
      var e = f.data();
      e.offset = e.offset || {
      };
      if (e.offsetBottom != null) {
        e.offset.bottom = e.offsetBottom
      }
      if (e.offsetTop != null) {
        e.offset.top = e.offsetTop
      }
      b.call(f, e)
    })
  })
}(jQuery); + function (d) {
  function c(f, e) {
    this.$body = d(document.body);
    this.$scrollElement = d(f).is(document.body) ? d(window)  : d(f);
    this.options = d.extend({
    }, c.DEFAULTS, e);
    this.selector = (this.options.target || '') + ' .nav li > a';
    this.offsets = [
    ];
    this.targets = [
    ];
    this.activeTarget = null;
    this.scrollHeight = 0;
    this.$scrollElement.on('scroll.bs.scrollspy', d.proxy(this.process, this));
    this.refresh();
    this.process()
  }
  c.VERSION = '3.3.5';
  c.DEFAULTS = {
    offset: 10
  };
  c.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  };
  c.prototype.refresh = function () {
    var g = this;
    var e = 'offset';
    var f = 0;
    this.offsets = [
    ];
    this.targets = [
    ];
    this.scrollHeight = this.getScrollHeight();
    if (!d.isWindow(this.$scrollElement[0])) {
      e = 'position';
      f = this.$scrollElement.scrollTop()
    }
    this.$body.find(this.selector).map(function () {
      var i = d(this);
      var h = i.data('target') || i.attr('href');
      var j = /^#./.test(h) && d(h);
      return (j && j.length && j.is(':visible') && [[j[e]().top + f,
      h]]) || null
    }).sort(function (i, h) {
      return i[0] - h[0]
    }).each(function () {
      g.offsets.push(this[0]);
      g.targets.push(this[1])
    })
  };
  c.prototype.process = function () {
    var k = this.$scrollElement.scrollTop() + this.options.offset;
    var g = this.getScrollHeight();
    var j = this.options.offset + g - this.$scrollElement.height();
    var h = this.offsets;
    var e = this.targets;
    var l = this.activeTarget;
    var f;
    if (this.scrollHeight != g) {
      this.refresh()
    }
    if (k >= j) {
      return l != (f = e[e.length - 1]) && this.activate(f)
    }
    if (l && k < h[0]) {
      this.activeTarget = null;
      return this.clear()
    }
    for (f = h.length; f--; ) {
      l != e[f] && k >= h[f] && (h[f + 1] === undefined || k < h[f + 1]) && this.activate(e[f])
    }
  };
  c.prototype.activate = function (g) {
    this.activeTarget = g;
    this.clear();
    var e = this.selector + '[data-target="' + g + '"],' + this.selector + '[href="' + g + '"]';
    var f = d(e).parents('li').addClass('active');
    if (f.parent('.dropdown-menu').length) {
      f = f.closest('li.dropdown').addClass('active')
    }
    f.trigger('activate.bs.scrollspy')
  };
  c.prototype.clear = function () {
    d(this.selector).parentsUntil(this.options.target, '.active').removeClass('active')
  };
  function b(e) {
    return this.each(function () {
      var h = d(this);
      var g = h.data('bs.scrollspy');
      var f = typeof e == 'object' && e;
      if (!g) {
        h.data('bs.scrollspy', (g = new c(this, f)))
      }
      if (typeof e == 'string') {
        g[e]()
      }
    })
  }
  var a = d.fn.scrollspy;
  d.fn.scrollspy = b;
  d.fn.scrollspy.Constructor = c;
  d.fn.scrollspy.noConflict = function () {
    d.fn.scrollspy = a;
    return this
  };
  d(window).on('load.bs.scrollspy.data-api', function () {
    d('[data-spy="scroll"]').each(function () {
      var e = d(this);
      b.call(e, e.data())
    })
  })
}(jQuery); + function (d) {
  var e = function (g, f) {
    this.$element = d(g);
    this.options = d.extend({
    }, e.DEFAULTS, f);
    this.$trigger = d('[data-toggle="collapse"][href="#' + g.id + '"],[data-toggle="collapse"][data-target="#' + g.id + '"]');
    this.transitioning = null;
    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }
    if (this.options.toggle) {
      this.toggle()
    }
  };
  e.VERSION = '3.3.5';
  e.TRANSITION_DURATION = 350;
  e.DEFAULTS = {
    toggle: true
  };
  e.prototype.dimension = function () {
    var f = this.$element.hasClass('width');
    return f ? 'width' : 'height'
  };
  e.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) {
      return
    }
    var h;
    var j = this.$parent && this.$parent.children('.panel').children('.in, .collapsing');
    if (j && j.length) {
      h = j.data('bs.collapse');
      if (h && h.transitioning) {
        return
      }
    }
    var g = d.Event('show.bs.collapse');
    this.$element.trigger(g);
    if (g.isDefaultPrevented()) {
      return
    }
    if (j && j.length) {
      b.call(j, 'hide');
      h || j.data('bs.collapse', null)
    }
    var k = this.dimension();
    this.$element.removeClass('collapse').addClass('collapsing') [k](0).attr('aria-expanded', true);
    this.$trigger.removeClass('collapsed').attr('aria-expanded', true);
    this.transitioning = 1;
    var f = function () {
      this.$element.removeClass('collapsing').addClass('collapse in') [k]('');
      this.transitioning = 0;
      this.$element.trigger('shown.bs.collapse')
    };
    if (!d.support.transition) {
      return f.call(this)
    }
    var i = d.camelCase(['scroll',
    k].join('-'));
    this.$element.one('bsTransitionEnd', d.proxy(f, this)).emulateTransitionEnd(e.TRANSITION_DURATION) [k](this.$element[0][i])
  };
  e.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) {
      return
    }
    var g = d.Event('hide.bs.collapse');
    this.$element.trigger(g);
    if (g.isDefaultPrevented()) {
      return
    }
    var h = this.dimension();
    this.$element[h](this.$element[h]()) [0].offsetHeight;
    this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded', false);
    this.$trigger.addClass('collapsed').attr('aria-expanded', false);
    this.transitioning = 1;
    var f = function () {
      this.transitioning = 0;
      this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse')
    };
    if (!d.support.transition) {
      return f.call(this)
    }
    this.$element[h](0).one('bsTransitionEnd', d.proxy(f, this)).emulateTransitionEnd(e.TRANSITION_DURATION)
  };
  e.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  };
  e.prototype.getParent = function () {
    return d(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(d.proxy(function (h, g) {
      var f = d(g);
      this.addAriaAndCollapsedClass(c(f), f)
    }, this)).end()
  };
  e.prototype.addAriaAndCollapsedClass = function (g, f) {
    var h = g.hasClass('in');
    g.attr('aria-expanded', h);
    f.toggleClass('collapsed', !h).attr('aria-expanded', h)
  };
  function c(f) {
    var g;
    var h = f.attr('data-target') || (g = f.attr('href')) && g.replace(/.*(?=#[^\s]+$)/, '');
    return d(h)
  }
  function b(f) {
    return this.each(function () {
      var i = d(this);
      var h = i.data('bs.collapse');
      var g = d.extend({
      }, e.DEFAULTS, i.data(), typeof f == 'object' && f);
      if (!h && g.toggle && /show|hide/.test(f)) {
        g.toggle = false
      }
      if (!h) {
        i.data('bs.collapse', (h = new e(this, g)))
      }
      if (typeof f == 'string') {
        h[f]()
      }
    })
  }
  var a = d.fn.collapse;
  d.fn.collapse = b;
  d.fn.collapse.Constructor = e;
  d.fn.collapse.noConflict = function () {
    d.fn.collapse = a;
    return this
  };
  d(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (j) {
    var i = d(this);
    if (!i.attr('data-target')) {
      j.preventDefault()
    }
    var f = c(i);
    var h = f.data('bs.collapse');
    var g = h ? 'toggle' : i.data();
    b.call(f, g)
  })
}(jQuery); + function (b) {
  function a() {
    var e = document.createElement('bootstrap');
    var d = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd otransitionend',
      transition: 'transitionend'
    };
    for (var c in d) {
      if (e.style[c] !== undefined) {
        return {
          end: d[c]
        }
      }
    }
    return false
  }
  b.fn.emulateTransitionEnd = function (e) {
    var d = false;
    var c = this;
    b(this).one('bsTransitionEnd', function () {
      d = true
    });
    var f = function () {
      if (!d) {
        b(c).trigger(b.support.transition.end)
      }
    };
    setTimeout(f, e);
    return this
  };
  b(function () {
    b.support.transition = a();
    if (!b.support.transition) {
      return
    }
    b.event.special.bsTransitionEnd = {
      bindType: b.support.transition.end,
      delegateType: b.support.transition.end,
      handle: function (c) {
        if (b(c.target).is(this)) {
          return c.handleObj.handler.apply(this, arguments)
        }
      }
    }
  })
}(jQuery); (function (a) {
  'function' === typeof define && define.amd ? define(['jquery'], a)  : 'undefined' !== typeof module && module.exports ? module.exports = a(require('jquery'))  : a(jQuery)
}) (function (b) {
  function d(e) {
    return !e.nodeName || - 1 !== b.inArray(e.nodeName.toLowerCase(), [
      'iframe',
      '#document',
      'html',
      'body'
    ])
  }
  function a(e) {
    return b.isFunction(e) || b.isPlainObject(e) ? e : {
      top: e,
      left: e
    }
  }
  var c = b.scrollTo = function (f, g, e) {
    return b(window).scrollTo(f, g, e)
  };
  c.defaults = {
    axis: 'xy',
    duration: 0,
    limit: !0
  };
  b.fn.scrollTo = function (f, h, e) {
    'object' === typeof h && (e = h, h = 0);
    'function' === typeof e && (e = {
      onAfter: e
    });
    'max' === f && (f = 9000000000);
    e = b.extend({
    }, c.defaults, e);
    h = h || e.duration;
    var g = e.queue && 1 < e.axis.length;
    g && (h /= 2);
    e.offset = a(e.offset);
    e.over = a(e.over);
    return this.each(function () {
      function m(l) {
        var q = b.extend({
        }, e, {
          queue: !0,
          duration: h,
          complete: l && function () {
            l.call(s, u, e)
          }
        });
        o.animate(p, q)
      }
      if (null !== f) {
        var i = d(this),
        s = i ? this.contentWindow || window : this,
        o = b(s),
        u = f,
        p = {
        },
        n;
        switch (typeof u) {
          case 'number':
          case 'string':
            if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(u)) {
              u = a(u);
              break
            }
            u = i ? b(u)  : b(u, s);
            if (!u.length) {
              return
            }
          case 'object':
            if (u.is || u.style) {
              n = (u = b(u)).offset()
            }
        }
        var j = b.isFunction(e.offset) && e.offset(s, u) || e.offset;
        b.each(e.axis.split(''), function (l, w) {
          var t = 'x' === w ? 'Left' : 'Top',
          k = t.toLowerCase(),
          r = 'scroll' + t,
          q = o[r](),
          v = c.max(s, w);
          n ? (p[r] = n[k] + (i ? 0 : q - o.offset() [k]), e.margin && (p[r] -= parseInt(u.css('margin' + t), 10) || 0, p[r] -= parseInt(u.css('border' + t + 'Width'), 10) || 0), p[r] += j[k] || 0, e.over[k] && (p[r] += u['x' === w ? 'width' : 'height']() * e.over[k]))  : (t = u[k], p[r] = t.slice && '%' === t.slice( - 1) ? parseFloat(t) / 100 * v : t);
          e.limit && /^\d+$/.test(p[r]) && (p[r] = 0 >= p[r] ? 0 : Math.min(p[r], v));
          !l && 1 < e.axis.length && (q === p[r] ? p = {
          }
           : g && (m(e.onAfterFirst), p = {
          }))
        });
        m(e.onAfter)
      }
    })
  };
  c.max = function (g, m) {
    var e = 'x' === m ? 'Width' : 'Height',
    j = 'scroll' + e;
    if (!d(g)) {
      return g[j] - b(g) [e.toLowerCase()]()
    }
    var e = 'client' + e,
    i = g.ownerDocument || g.document,
    f = i.documentElement,
    i = i.body;
    return Math.max(f[j], i[j]) - Math.min(f[e], i[e])
  };
  b.Tween.propHooks.scrollLeft = b.Tween.propHooks.scrollTop = {
    get: function (e) {
      return b(e.elem) [e.prop]()
    },
    set: function (f) {
      var g = this.get(f);
      if (f.options.interrupt && f._last && f._last !== g) {
        return b(f.elem).stop()
      }
      var e = Math.round(f.now);
      g !== e && (b(f.elem) [f.prop](e), f._last = this.get(f))
    }
  };
  return c
}); (function (b) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], b)
  } else {
    b(jQuery)
  }
}(function (d) {
  var c = location.href.replace(/#.*/, '');
  var b = d.localScroll = function (e) {
    d('body').localScroll(e)
  };
  b.defaults = {
    duration: 1000,
    axis: 'y',
    event: 'click',
    stop: true,
    target: window
  };
  d.fn.localScroll = function (e) {
    e = d.extend({
    }, b.defaults, e);
    if (e.hash && location.hash) {
      if (e.target) {
        window.scrollTo(0, 0)
      }
      a(0, location, e)
    }
    return e.lazy ? this.on(e.event, 'a,area', function (g) {
      if (f.call(this)) {
        a(g, this, e)
      }
    })  : this.find('a,area').filter(f).bind(e.event, function (g) {
      a(g, this, e)
    }).end().end();
    function f() {
      return !!this.href && !!this.hash && this.href.replace(this.hash, '') === c && (!e.filter || d(this).is(e.filter))
    }
  };
  b.hash = function () {
  };
  function a(l, h, g) {
    var n = h.hash.slice(1),
    i = document.getElementById(n) || document.getElementsByName(n) [0];
    if (!i) {
      return
    }
    if (l) {
      l.preventDefault()
    }
    var m = d(g.target);
    if (g.lock && m.is(':animated') || g.onBefore && g.onBefore(l, i, m) === false) {
      return
    }
    if (g.stop) {
      m.stop(true)
    }
    if (g.hash) {
      var k = i.id === n ? 'id' : 'name',
      j = d('<a> </a>').attr(k, n).css({
        position: 'absolute',
        top: d(window).scrollTop(),
        left: d(window).scrollLeft()
      });
      i[k] = '';
      d('body').prepend(j);
      location.hash = h.hash;
      j.remove();
      i[k] = n
    }
    m.scrollTo(i, g).trigger('notify.serialScroll', [
      i
    ])
  }
  return b
})); + function (d) {
  var b = function (f, e) {
    this.options = e;
    this.$body = d(document.body);
    this.$element = d(f);
    this.$dialog = this.$element.find('.modal-dialog');
    this.$backdrop = null;
    this.isShown = null;
    this.originalBodyPad = null;
    this.scrollbarWidth = 0;
    this.ignoreBackdropClick = false;
    if (this.options.remote) {
      this.$element.find('.modal-content').load(this.options.remote, d.proxy(function () {
        this.$element.trigger('loaded.bs.modal')
      }, this))
    }
  };
  b.VERSION = '3.3.5';
  b.TRANSITION_DURATION = 300;
  b.BACKDROP_TRANSITION_DURATION = 150;
  b.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  };
  b.prototype.toggle = function (e) {
    return this.isShown ? this.hide()  : this.show(e)
  };
  b.prototype.show = function (h) {
    var f = this;
    var g = d.Event('show.bs.modal', {
      relatedTarget: h
    });
    this.$element.trigger(g);
    if (this.isShown || g.isDefaultPrevented()) {
      return
    }
    this.isShown = true;
    this.checkScrollbar();
    this.setScrollbar();
    this.$body.addClass('modal-open');
    this.escape();
    this.resize();
    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', d.proxy(this.hide, this));
    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      f.$element.one('mouseup.dismiss.bs.modal', function (i) {
        if (d(i.target).is(f.$element)) {
          f.ignoreBackdropClick = true
        }
      })
    });
    this.backdrop(function () {
      var j = d.support.transition && f.$element.hasClass('fade');
      if (!f.$element.parent().length) {
        f.$element.appendTo(f.$body)
      }
      f.$element.show().scrollTop(0);
      f.adjustDialog();
      if (j) {
        f.$element[0].offsetWidth
      }
      f.$element.addClass('in');
      f.enforceFocus();
      var i = d.Event('shown.bs.modal', {
        relatedTarget: h
      });
      j ? f.$dialog.one('bsTransitionEnd', function () {
        f.$element.trigger('focus').trigger(i)
      }).emulateTransitionEnd(b.TRANSITION_DURATION)  : f.$element.trigger('focus').trigger(i)
    })
  };
  b.prototype.hide = function (f) {
    if (f) {
      f.preventDefault()
    }
    f = d.Event('hide.bs.modal');
    this.$element.trigger(f);
    if (!this.isShown || f.isDefaultPrevented()) {
      return
    }
    this.isShown = false;
    this.escape();
    this.resize();
    d(document).off('focusin.bs.modal');
    this.$element.removeClass('in').off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal');
    this.$dialog.off('mousedown.dismiss.bs.modal');
    d.support.transition && this.$element.hasClass('fade') ? this.$element.one('bsTransitionEnd', d.proxy(this.hideModal, this)).emulateTransitionEnd(b.TRANSITION_DURATION)  : this.hideModal()
  };
  b.prototype.enforceFocus = function () {
    d(document).off('focusin.bs.modal').on('focusin.bs.modal', d.proxy(function (f) {
      if (this.$element[0] !== f.target && !this.$element.has(f.target).length) {
        this.$element.trigger('focus')
      }
    }, this))
  };
  b.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', d.proxy(function (f) {
        f.which == 27 && this.hide()
      }, this))
    } else {
      if (!this.isShown) {
        this.$element.off('keydown.dismiss.bs.modal')
      }
    }
  };
  b.prototype.resize = function () {
    if (this.isShown) {
      d(window).on('resize.bs.modal', d.proxy(this.handleUpdate, this))
    } else {
      d(window).off('resize.bs.modal')
    }
  };
  b.prototype.hideModal = function () {
    var e = this;
    this.$element.hide();
    this.backdrop(function () {
      e.$body.removeClass('modal-open');
      e.resetAdjustments();
      e.resetScrollbar();
      e.$element.trigger('hidden.bs.modal')
    })
  };
  b.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove();
    this.$backdrop = null
  };
  b.prototype.backdrop = function (i) {
    var h = this;
    var f = this.$element.hasClass('fade') ? 'fade' : '';
    if (this.isShown && this.options.backdrop) {
      var e = d.support.transition && f;
      this.$backdrop = d(document.createElement('div')).addClass('modal-backdrop ' + f).appendTo(this.$body);
      this.$element.on('click.dismiss.bs.modal', d.proxy(function (j) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false;
          return
        }
        if (j.target !== j.currentTarget) {
          return
        }
        this.options.backdrop == 'static' ? this.$element[0].focus()  : this.hide()
      }, this));
      if (e) {
        this.$backdrop[0].offsetWidth
      }
      this.$backdrop.addClass('in');
      if (!i) {
        return
      }
      e ? this.$backdrop.one('bsTransitionEnd', i).emulateTransitionEnd(b.BACKDROP_TRANSITION_DURATION)  : i()
    } else {
      if (!this.isShown && this.$backdrop) {
        this.$backdrop.removeClass('in');
        var g = function () {
          h.removeBackdrop();
          i && i()
        };
        d.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one('bsTransitionEnd', g).emulateTransitionEnd(b.BACKDROP_TRANSITION_DURATION)  : g()
      } else {
        if (i) {
          i()
        }
      }
    }
  };
  b.prototype.handleUpdate = function () {
    this.adjustDialog()
  };
  b.prototype.adjustDialog = function () {
    var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ''
    })
  };
  b.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  };
  b.prototype.checkScrollbar = function () {
    var f = window.innerWidth;
    if (!f) {
      var e = document.documentElement.getBoundingClientRect();
      f = e.right - Math.abs(e.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < f;
    this.scrollbarWidth = this.measureScrollbar()
  };
  b.prototype.setScrollbar = function () {
    var e = parseInt((this.$body.css('padding-right') || 0), 10);
    this.originalBodyPad = document.body.style.paddingRight || '';
    if (this.bodyIsOverflowing) {
      this.$body.css('padding-right', e + this.scrollbarWidth)
    }
  };
  b.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  };
  b.prototype.measureScrollbar = function () {
    var f = document.createElement('div');
    f.className = 'modal-scrollbar-measure';
    this.$body.append(f);
    var e = f.offsetWidth - f.clientWidth;
    this.$body[0].removeChild(f);
    return e
  };
  function c(e, f) {
    return this.each(function () {
      var i = d(this);
      var h = i.data('bs.modal');
      var g = d.extend({
      }, b.DEFAULTS, i.data(), typeof e == 'object' && e);
      if (!h) {
        i.data('bs.modal', (h = new b(this, g)))
      }
      if (typeof e == 'string') {
        h[e](f)
      } else {
        if (g.show) {
          h.show(f)
        }
      }
    })
  }
  var a = d.fn.modal;
  d.fn.modal = c;
  d.fn.modal.Constructor = b;
  d.fn.modal.noConflict = function () {
    d.fn.modal = a;
    return this
  };
  d(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (j) {
    var i = d(this);
    var g = i.attr('href');
    var f = d(i.attr('data-target') || (g && g.replace(/.*(?=#[^\s]+$)/, '')));
    var h = f.data('bs.modal') ? 'toggle' : d.extend({
      remote: !/#/.test(g) && g
    }, f.data(), i.data());
    if (i.is('a')) {
      j.preventDefault()
    }
    f.one('show.bs.modal', function (e) {
      if (e.isDefaultPrevented()) {
        return
      }
      f.one('hidden.bs.modal', function () {
        i.is(':visible') && i.trigger('focus')
      })
    });
    c.call(f, h, this)
  })
}(jQuery); (function () {
  var b,
  a;
  b = jQuery;
  a = function (d, c) {
    var e,
    h,
    g,
    f = this;
    this.options = b.extend({
      title: null,
      footer: null,
      remote: null
    }, b.fn.ekkoLightbox.defaults, c || {
    });
    this.$element = b(d);
    e = '';
    this.modal_id = this.options.modal_id ? this.options.modal_id : 'ekkoLightbox-' + Math.floor((Math.random() * 1000) + 1);
    g = '<div class="modal-header"' + (this.options.title || this.options.always_show_close ? '' : ' style="display:none"') + '><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title">' + (this.options.title || '&nbsp;') + '</h4></div>';
    h = '<div class="modal-footer"' + (this.options.footer ? '' : ' style="display:none"') + '>' + this.options.footer + '</div>';
    b(document.body).append('<div id="' + this.modal_id + '" class="ekko-lightbox modal fade" tabindex="-1"><div class="modal-dialog"><div class="modal-content">' + g + '<div class="modal-body"><div class="ekko-lightbox-container"><div></div></div></div>' + h + '</div></div></div>');
    this.modal = b('#' + this.modal_id);
    this.modal_dialog = this.modal.find('.modal-dialog').first();
    this.modal_content = this.modal.find('.modal-content').first();
    this.modal_body = this.modal.find('.modal-body').first();
    this.lightbox_container = this.modal_body.find('.ekko-lightbox-container').first();
    this.lightbox_body = this.lightbox_container.find('> div:first-child').first();
    this.showLoading();
    this.modal_arrows = null;
    this.border = {
      top: parseFloat(this.modal_dialog.css('border-top-width')) + parseFloat(this.modal_content.css('border-top-width')) + parseFloat(this.modal_body.css('border-top-width')),
      right: parseFloat(this.modal_dialog.css('border-right-width')) + parseFloat(this.modal_content.css('border-right-width')) + parseFloat(this.modal_body.css('border-right-width')),
      bottom: parseFloat(this.modal_dialog.css('border-bottom-width')) + parseFloat(this.modal_content.css('border-bottom-width')) + parseFloat(this.modal_body.css('border-bottom-width')),
      left: parseFloat(this.modal_dialog.css('border-left-width')) + parseFloat(this.modal_content.css('border-left-width')) + parseFloat(this.modal_body.css('border-left-width'))
    };
    this.padding = {
      top: parseFloat(this.modal_dialog.css('padding-top')) + parseFloat(this.modal_content.css('padding-top')) + parseFloat(this.modal_body.css('padding-top')),
      right: parseFloat(this.modal_dialog.css('padding-right')) + parseFloat(this.modal_content.css('padding-right')) + parseFloat(this.modal_body.css('padding-right')),
      bottom: parseFloat(this.modal_dialog.css('padding-bottom')) + parseFloat(this.modal_content.css('padding-bottom')) + parseFloat(this.modal_body.css('padding-bottom')),
      left: parseFloat(this.modal_dialog.css('padding-left')) + parseFloat(this.modal_content.css('padding-left')) + parseFloat(this.modal_body.css('padding-left'))
    };
    this.modal.on('show.bs.modal', this.options.onShow.bind(this)).on('shown.bs.modal', function () {
      f.modal_shown();
      return f.options.onShown.call(f)
    }).on('hide.bs.modal', this.options.onHide.bind(this)).on('hidden.bs.modal', function () {
      if (f.gallery) {
        b(document).off('keydown.ekkoLightbox')
      }
      f.modal.remove();
      return f.options.onHidden.call(f)
    }).modal('show', c);
    return this.modal
  };
  a.prototype = {
    modal_shown: function () {
      var c,
      d = this;
      if (!this.options.remote) {
        return this.error('No remote target given')
      } else {
        this.gallery = this.$element.data('gallery');
        if (this.gallery) {
          if (this.options.gallery_parent_selector === 'document.body' || this.options.gallery_parent_selector === '') {
            this.gallery_items = b(document.body).find('*[data-toggle="lightbox"][data-gallery="' + this.gallery + '"]')
          } else {
            this.gallery_items = this.$element.parents(this.options.gallery_parent_selector).first().find('*[data-toggle="lightbox"][data-gallery="' + this.gallery + '"]')
          }
          this.gallery_index = this.gallery_items.index(this.$element);
          b(document).on('keydown.ekkoLightbox', this.navigate.bind(this));
          if (this.options.directional_arrows && this.gallery_items.length > 1) {
            this.lightbox_container.append('<div class="ekko-lightbox-nav-overlay"><a href="#" class="' + this.strip_stops(this.options.left_arrow_class) + '"></a><a href="#" class="' + this.strip_stops(this.options.right_arrow_class) + '"></a></div>');
            this.modal_arrows = this.lightbox_container.find('div.ekko-lightbox-nav-overlay').first();
            this.lightbox_container.find('a' + this.strip_spaces(this.options.left_arrow_class)).on('click', function (e) {
              e.preventDefault();
              return d.navigate_left()
            });
            this.lightbox_container.find('a' + this.strip_spaces(this.options.right_arrow_class)).on('click', function (e) {
              e.preventDefault();
              return d.navigate_right()
            })
          }
        }
        if (this.options.type) {
          if (this.options.type === 'image') {
            return this.preloadImage(this.options.remote, true)
          } else {
            if (this.options.type === 'youtube' && (c = this.getYoutubeId(this.options.remote))) {
              return this.showYoutubeVideo(c)
            } else {
              if (this.options.type === 'vimeo') {
                return this.showVimeoVideo(this.options.remote)
              } else {
                if (this.options.type === 'instagram') {
                  return this.showInstagramVideo(this.options.remote)
                } else {
                  if (this.options.type === 'url') {
                    return this.loadRemoteContent(this.options.remote)
                  } else {
                    if (this.options.type === 'video') {
                      return this.showVideoIframe(this.options.remote)
                    } else {
                      return this.error('Could not detect remote target type. Force the type using data-type="image|youtube|vimeo|instagram|url|video"')
                    }
                  }
                }
              }
            }
          }
        } else {
          return this.detectRemoteType(this.options.remote)
        }
      }
    },
    strip_stops: function (c) {
      return c.replace(/\./g, '')
    },
    strip_spaces: function (c) {
      return c.replace(/\s/g, '')
    },
    isImage: function (c) {
      return c.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)
    },
    isSwf: function (c) {
      return c.match(/\.(swf)((\?|#).*)?$/i)
    },
    getYoutubeId: function (d) {
      var c;
      c = d.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
      if (c && c[2].length === 11) {
        return c[2]
      } else {
        return false
      }
    },
    getVimeoId: function (c) {
      if (c.indexOf('vimeo') > 0) {
        return c
      } else {
        return false
      }
    },
    getInstagramId: function (c) {
      if (c.indexOf('instagram') > 0) {
        return c
      } else {
        return false
      }
    },
    navigate: function (c) {
      c = c || window.event;
      if (c.keyCode === 39 || c.keyCode === 37) {
        if (c.keyCode === 39) {
          return this.navigate_right()
        } else {
          if (c.keyCode === 37) {
            return this.navigate_left()
          }
        }
      }
    },
    navigateTo: function (c) {
      var d,
      e;
      if (c < 0 || c > this.gallery_items.length - 1) {
        return this
      }
      this.showLoading();
      this.gallery_index = c;
      this.$element = b(this.gallery_items.get(this.gallery_index));
      this.updateTitleAndFooter();
      e = this.$element.attr('data-remote') || this.$element.attr('href');
      this.detectRemoteType(e, this.$element.attr('data-type') || false);
      if (this.gallery_index + 1 < this.gallery_items.length) {
        d = b(this.gallery_items.get(this.gallery_index + 1), false);
        e = d.attr('data-remote') || d.attr('href');
        if (d.attr('data-type') === 'image' || this.isImage(e)) {
          return this.preloadImage(e, false)
        }
      }
    },
    navigate_left: function () {
      if (this.gallery_items.length === 1) {
        return
      }
      if (this.gallery_index === 0) {
        this.gallery_index = this.gallery_items.length - 1
      } else {
        this.gallery_index--
      }
      this.options.onNavigate.call(this, 'left', this.gallery_index);
      return this.navigateTo(this.gallery_index)
    },
    navigate_right: function () {
      if (this.gallery_items.length === 1) {
        return
      }
      if (this.gallery_index === this.gallery_items.length - 1) {
        this.gallery_index = 0
      } else {
        this.gallery_index++
      }
      this.options.onNavigate.call(this, 'right', this.gallery_index);
      return this.navigateTo(this.gallery_index)
    },
    detectRemoteType: function (e, d) {
      var c;
      d = d || false;
      if (d === 'image' || this.isImage(e)) {
        this.options.type = 'image';
        return this.preloadImage(e, true)
      } else {
        if (d === 'youtube' || (c = this.getYoutubeId(e))) {
          this.options.type = 'youtube';
          return this.showYoutubeVideo(c)
        } else {
          if (d === 'vimeo' || (c = this.getVimeoId(e))) {
            this.options.type = 'vimeo';
            return this.showVimeoVideo(c)
          } else {
            if (d === 'instagram' || (c = this.getInstagramId(e))) {
              this.options.type = 'instagram';
              return this.showInstagramVideo(c)
            } else {
              if (d === 'video') {
                this.options.type = 'video';
                return this.showVideoIframe(c)
              } else {
                this.options.type = 'url';
                return this.loadRemoteContent(e)
              }
            }
          }
        }
      }
    },
    updateTitleAndFooter: function () {
      var c,
      f,
      e,
      d;
      e = this.modal_content.find('.modal-header');
      f = this.modal_content.find('.modal-footer');
      d = this.$element.data('title') || '';
      c = this.$element.data('footer') || '';
      if (d || this.options.always_show_close) {
        e.css('display', '').find('.modal-title').html(d || '&nbsp;')
      } else {
        e.css('display', 'none')
      }
      if (c) {
        f.css('display', '').html(c)
      } else {
        f.css('display', 'none')
      }
      return this
    },
    showLoading: function () {
      this.lightbox_body.html('<div class="modal-loading">' + this.options.loadingMessage + '</div>');
      return this
    },
    showYoutubeVideo: function (e) {
      var c,
      d;
      d = this.checkDimensions(this.$element.data('width') || 560);
      c = d / (560 / 315);
      return this.showVideoIframe('//www.youtube.com/embed/' + e + '?badge=0&autoplay=1&html5=1', d, c)
    },
    showVimeoVideo: function (e) {
      var c,
      d;
      d = this.checkDimensions(this.$element.data('width') || 560);
      c = d / (500 / 281);
      return this.showVideoIframe(e + '?autoplay=1', d, c)
    },
    showInstagramVideo: function (e) {
      var c,
      d;
      d = this.checkDimensions(this.$element.data('width') || 612);
      this.resize(d);
      c = d + 80;
      this.lightbox_body.html('<iframe width="' + d + '" height="' + c + '" src="' + this.addTrailingSlash(e) + 'embed/" frameborder="0" allowfullscreen></iframe>');
      this.options.onContentLoaded.call(this);
      if (this.modal_arrows) {
        return this.modal_arrows.css('display', 'none')
      }
    },
    showVideoIframe: function (d, e, c) {
      c = c || e;
      this.resize(e);
      this.lightbox_body.html('<div class="embed-responsive embed-responsive-16by9"><iframe width="' + e + '" height="' + c + '" src="' + d + '" frameborder="0" allowfullscreenclass="embed-responsive-item"></iframe></div>');
      this.options.onContentLoaded.call(this);
      if (this.modal_arrows) {
        this.modal_arrows.css('display', 'none')
      }
      return this
    },
    loadRemoteContent: function (d) {
      var c,
      e,
      f = this;
      e = this.$element.data('width') || 560;
      this.resize(e);
      c = this.$element.data('disableExternalCheck') || false;
      if (!c && !this.isExternal(d)) {
        this.lightbox_body.load(d, b.proxy(function () {
          return f.$element.trigger('loaded.bs.modal')
        }))
      } else {
        this.lightbox_body.html('<iframe width="' + e + '" height="' + e + '" src="' + d + '" frameborder="0" allowfullscreen></iframe>');
        this.options.onContentLoaded.call(this)
      }
      if (this.modal_arrows) {
        this.modal_arrows.css('display', 'none')
      }
      return this
    },
    isExternal: function (d) {
      var c;
      c = d.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);
      if (typeof c[1] === 'string' && c[1].length > 0 && c[1].toLowerCase() !== location.protocol) {
        return true
      }
      if (typeof c[2] === 'string' && c[2].length > 0 && c[2].replace(new RegExp(':(' + {
        'http:': 80,
        'https:': 443
      }
      [
        location.protocol
      ] + ')?$'), '') !== location.host) {
        return true
      }
      return false
    },
    error: function (c) {
      this.lightbox_body.html(c);
      return this
    },
    preloadImage: function (e, d) {
      var c,
      f = this;
      c = new Image();
      if ((d == null) || d === true) {
        c.onload = function () {
          var g;
          g = b('<img />');
          g.attr('src', c.src);
          g.addClass('img-responsive');
          f.lightbox_body.html(g);
          if (f.modal_arrows) {
            f.modal_arrows.css('display', 'block')
          }
          f.resize(c.width);
          return f.options.onContentLoaded.call(f)
        };
        c.onerror = function () {
          return f.error('Failed to load image: ' + e)
        }
      }
      c.src = e;
      return c
    },
    resize: function (d) {
      var c;
      c = d + this.border.left + this.padding.left + this.padding.right + this.border.right;
      this.modal_dialog.css('width', 'auto').css('max-width', c);
      this.lightbox_container.find('a').css('line-height', function () {
        return b(this).parent().height() + 'px'
      });
      return this
    },
    checkDimensions: function (e) {
      var c,
      d;
      d = e + this.border.left + this.padding.left + this.padding.right + this.border.right;
      c = document.body.clientWidth;
      if (d > c) {
        e = this.modal_body.width()
      }
      return e
    },
    close: function () {
      return this.modal.modal('hide')
    },
    addTrailingSlash: function (c) {
      if (c.substr( - 1) !== '/') {
        c += '/'
      }
      return c
    }
  };
  b.fn.ekkoLightbox = function (c) {
    return this.each(function () {
      var d;
      d = b(this);
      c = b.extend({
        remote: d.attr('data-remote') || d.attr('href'),
        gallery_parent_selector: d.attr('data-parent'),
        type: d.attr('data-type')
      }, c, d.data());
      new a(this, c);
      return this
    })
  };
  b.fn.ekkoLightbox.defaults = {
    gallery_parent_selector: 'document.body',
    left_arrow_class: '.glyphicon .glyphicon-chevron-left',
    right_arrow_class: '.glyphicon .glyphicon-chevron-right',
    directional_arrows: true,
    type: null,
    always_show_close: true,
    loadingMessage: 'Loading...',
    onShow: function () {
    },
    onShown: function () {
    },
    onHide: function () {
    },
    onHidden: function () {
    },
    onNavigate: function () {
    },
    onContentLoaded: function () {
    }
  }
}).call(this); (function (a) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery',
    'moment'], a)
  } else {
    if (typeof exports === 'object') {
      a(require('jquery'), require('moment'))
    } else {
      if (typeof jQuery === 'undefined') {
        throw 'bootstrap-datetimepicker requires jQuery to be loaded first'
      }
      if (typeof moment === 'undefined') {
        throw 'bootstrap-datetimepicker requires Moment.js to be loaded first'
      }
      a(jQuery, moment)
    }
  }
}(function (b, c) {
  if (!c) {
    throw new Error('bootstrap-datetimepicker requires Moment.js to be loaded first')
  }
  var a = function (u, A) {
    var o = {
    },
    aj = c().startOf('d'),
    ae = aj.clone(),
    Q = true,
    j,
    ak = false,
    L = false,
    h,
    S = 0,
    w,
    ao,
    r,
    ab = [
      {
        clsName: 'days',
        navFnc: 'M',
        navStep: 1
      },
      {
        clsName: 'months',
        navFnc: 'y',
        navStep: 1
      },
      {
        clsName: 'years',
        navFnc: 'y',
        navStep: 10
      },
      {
        clsName: 'decades',
        navFnc: 'y',
        navStep: 100
      }
    ],
    al = [
      'days',
      'months',
      'years',
      'decades'
    ],
    s = [
      'top',
      'bottom',
      'auto'
    ],
    i = [
      'left',
      'right',
      'auto'
    ],
    an = [
      'default',
      'top',
      'bottom'
    ],
    B = {
      up: 38,
      38: 'up',
      down: 40,
      40: 'down',
      left: 37,
      37: 'left',
      right: 39,
      39: 'right',
      tab: 9,
      9: 'tab',
      escape: 27,
      27: 'escape',
      enter: 13,
      13: 'enter',
      pageUp: 33,
      33: 'pageUp',
      pageDown: 34,
      34: 'pageDown',
      shift: 16,
      16: 'shift',
      control: 17,
      17: 'control',
      space: 32,
      32: 'space',
      t: 84,
      84: 't',
      'delete': 46,
      46: 'delete'
    },
    ah = {
    },
    af = function (ar) {
      if (typeof ar !== 'string' || ar.length > 1) {
        throw new TypeError('isEnabled expects a single character string parameter')
      }
      switch (ar) {
        case 'y':
          return w.indexOf('Y') !== - 1;
        case 'M':
          return w.indexOf('M') !== - 1;
        case 'd':
          return w.toLowerCase().indexOf('d') !== - 1;
        case 'h':
        case 'H':
          return w.toLowerCase().indexOf('h') !== - 1;
        case 'm':
          return w.indexOf('m') !== - 1;
        case 's':
          return w.indexOf('s') !== - 1;
        default:
          return false
      }
    },
    E = function () {
      return (af('h') || af('m') || af('s'))
    },
    K = function () {
      return (af('y') || af('M') || af('d'))
    },
    l = function () {
      var at = b('<thead>').append(b('<tr>').append(b('<th>').addClass('prev').attr('data-action', 'previous').append(b('<span>').addClass(A.icons.previous))).append(b('<th>').addClass('picker-switch').attr('data-action', 'pickerSwitch').attr('colspan', (A.calendarWeeks ? '6' : '5'))).append(b('<th>').addClass('next').attr('data-action', 'next').append(b('<span>').addClass(A.icons.next)))),
      ar = b('<tbody>').append(b('<tr>').append(b('<td>').attr('colspan', (A.calendarWeeks ? '8' : '7'))));
      return [b('<div>').addClass('datepicker-days').append(b('<table>').addClass('table-condensed').append(at).append(b('<tbody>'))),
      b('<div>').addClass('datepicker-months').append(b('<table>').addClass('table-condensed').append(at.clone()).append(ar.clone())),
      b('<div>').addClass('datepicker-years').append(b('<table>').addClass('table-condensed').append(at.clone()).append(ar.clone())),
      b('<div>').addClass('datepicker-decades').append(b('<table>').addClass('table-condensed').append(at.clone()).append(ar.clone()))]
    },
    O = function () {
      var ar = b('<tr>'),
      at = b('<tr>'),
      au = b('<tr>');
      if (af('h')) {
        ar.append(b('<td>').append(b('<a>').attr({
          href: '#',
          tabindex: '-1',
          title: 'Increment Hour'
        }).addClass('btn').attr('data-action', 'incrementHours').append(b('<span>').addClass(A.icons.up))));
        at.append(b('<td>').append(b('<span>').addClass('timepicker-hour').attr({
          'data-time-component': 'hours',
          title: 'Pick Hour'
        }).attr('data-action', 'showHours')));
        au.append(b('<td>').append(b('<a>').attr({
          href: '#',
          tabindex: '-1',
          title: 'Decrement Hour'
        }).addClass('btn').attr('data-action', 'decrementHours').append(b('<span>').addClass(A.icons.down))))
      }
      if (af('m')) {
        if (af('h')) {
          ar.append(b('<td>').addClass('separator'));
          at.append(b('<td>').addClass('separator').html(':'));
          au.append(b('<td>').addClass('separator'))
        }
        ar.append(b('<td>').append(b('<a>').attr({
          href: '#',
          tabindex: '-1',
          title: 'Increment Minute'
        }).addClass('btn').attr('data-action', 'incrementMinutes').append(b('<span>').addClass(A.icons.up))));
        at.append(b('<td>').append(b('<span>').addClass('timepicker-minute').attr({
          'data-time-component': 'minutes',
          title: 'Pick Minute'
        }).attr('data-action', 'showMinutes')));
        au.append(b('<td>').append(b('<a>').attr({
          href: '#',
          tabindex: '-1',
          title: 'Decrement Minute'
        }).addClass('btn').attr('data-action', 'decrementMinutes').append(b('<span>').addClass(A.icons.down))))
      }
      if (af('s')) {
        if (af('m')) {
          ar.append(b('<td>').addClass('separator'));
          at.append(b('<td>').addClass('separator').html(':'));
          au.append(b('<td>').addClass('separator'))
        }
        ar.append(b('<td>').append(b('<a>').attr({
          href: '#',
          tabindex: '-1',
          title: 'Increment Second'
        }).addClass('btn').attr('data-action', 'incrementSeconds').append(b('<span>').addClass(A.icons.up))));
        at.append(b('<td>').append(b('<span>').addClass('timepicker-second').attr({
          'data-time-component': 'seconds',
          title: 'Pick Second'
        }).attr('data-action', 'showSeconds')));
        au.append(b('<td>').append(b('<a>').attr({
          href: '#',
          tabindex: '-1',
          title: 'Decrement Second'
        }).addClass('btn').attr('data-action', 'decrementSeconds').append(b('<span>').addClass(A.icons.down))))
      }
      if (!h) {
        ar.append(b('<td>').addClass('separator'));
        at.append(b('<td>').append(b('<button>').addClass('btn btn-primary').attr({
          'data-action': 'togglePeriod',
          tabindex: '-1',
          title: 'Toggle Period'
        })));
        au.append(b('<td>').addClass('separator'))
      }
      return b('<div>').addClass('timepicker-picker').append(b('<table>').addClass('table-condensed').append([ar,
      at,
      au]))
    },
    P = function () {
      var at = b('<div>').addClass('timepicker-hours').append(b('<table>').addClass('table-condensed')),
      ar = b('<div>').addClass('timepicker-minutes').append(b('<table>').addClass('table-condensed')),
      av = b('<div>').addClass('timepicker-seconds').append(b('<table>').addClass('table-condensed')),
      au = [
        O()
      ];
      if (af('h')) {
        au.push(at)
      }
      if (af('m')) {
        au.push(ar)
      }
      if (af('s')) {
        au.push(av)
      }
      return au
    },
    aa = function () {
      var ar = [
      ];
      if (A.showTodayButton) {
        ar.push(b('<td>').append(b('<a>').attr({
          'data-action': 'today',
          title: A.tooltips.today
        }).append(b('<span>').addClass(A.icons.today))))
      }
      if (!A.sideBySide && K() && E()) {
        ar.push(b('<td>').append(b('<a>').attr({
          'data-action': 'togglePicker',
          title: 'Select Time'
        }).append(b('<span>').addClass(A.icons.time))))
      }
      if (A.showClear) {
        ar.push(b('<td>').append(b('<a>').attr({
          'data-action': 'clear',
          title: A.tooltips.clear
        }).append(b('<span>').addClass(A.icons.clear))))
      }
      if (A.showClose) {
        ar.push(b('<td>').append(b('<a>').attr({
          'data-action': 'close',
          title: A.tooltips.close
        }).append(b('<span>').addClass(A.icons.close))))
      }
      return b('<table>').addClass('table-condensed').append(b('<tbody>').append(b('<tr>').append(ar)))
    },
    aq = function () {
      var au = b('<div>').addClass('bootstrap-datetimepicker-widget dropdown-menu'),
      ar = b('<div>').addClass('datepicker').append(l()),
      at = b('<div>').addClass('timepicker').append(P()),
      aw = b('<ul>').addClass('list-unstyled'),
      av = b('<li>').addClass('picker-switch' + (A.collapse ? ' accordion-toggle' : '')).append(aa());
      if (A.inline) {
        au.removeClass('dropdown-menu')
      }
      if (h) {
        au.addClass('usetwentyfour')
      }
      if (af('s') && !h) {
        au.addClass('wider')
      }
      if (A.sideBySide && K() && E()) {
        au.addClass('timepicker-sbs');
        if (A.toolbarPlacement === 'top') {
          au.append(av)
        }
        au.append(b('<div>').addClass('row').append(ar.addClass('col-md-6')).append(at.addClass('col-md-6')));
        if (A.toolbarPlacement === 'bottom') {
          au.append(av)
        }
        return au
      }
      if (A.toolbarPlacement === 'top') {
        aw.append(av)
      }
      if (K()) {
        aw.append(b('<li>').addClass((A.collapse && E() ? 'collapse in' : '')).append(ar))
      }
      if (A.toolbarPlacement === 'default') {
        aw.append(av)
      }
      if (E()) {
        aw.append(b('<li>').addClass((A.collapse && K() ? 'collapse' : '')).append(at))
      }
      if (A.toolbarPlacement === 'bottom') {
        aw.append(av)
      }
      return au.append(aw)
    },
    d = function () {
      var ar,
      at = {
      };
      if (u.is('input') || A.inline) {
        ar = u.data()
      } else {
        ar = u.find('input').data()
      }
      if (ar.dateOptions && ar.dateOptions instanceof Object) {
        at = b.extend(true, at, ar.dateOptions)
      }
      b.each(A, function (av) {
        var au = 'date' + av.charAt(0).toUpperCase() + av.slice(1);
        if (ar[au] !== undefined) {
          at[av] = ar[au]
        }
      });
      return at
    },
    m = function () {
      var ar = (ak || u).position(),
      aw = (ak || u).offset(),
      au = A.widgetPositioning.vertical,
      at = A.widgetPositioning.horizontal,
      av;
      if (A.widgetParent) {
        av = A.widgetParent.append(L)
      } else {
        if (u.is('input')) {
          av = u.after(L).parent()
        } else {
          if (A.inline) {
            av = u.append(L);
            return
          } else {
            av = u;
            u.children().first().after(L)
          }
        }
      }
      if (au === 'auto') {
        if (aw.top + L.height() * 1.5 >= b(window).height() + b(window).scrollTop() && L.height() + u.outerHeight() < aw.top) {
          au = 'top'
        } else {
          au = 'bottom'
        }
      }
      if (at === 'auto') {
        if (av.width() < aw.left + L.outerWidth() / 2 && aw.left + L.outerWidth() > b(window).width()) {
          at = 'right'
        } else {
          at = 'left'
        }
      }
      if (au === 'top') {
        L.addClass('top').removeClass('bottom')
      } else {
        L.addClass('bottom').removeClass('top')
      }
      if (at === 'right') {
        L.addClass('pull-right')
      } else {
        L.removeClass('pull-right')
      }
      if (av.css('position') !== 'relative') {
        av = av.parents().filter(function () {
          return b(this).css('position') === 'relative'
        }).first()
      }
      if (av.length === 0) {
        throw new Error('datetimepicker component should be placed within a relative positioned container')
      }
      L.css({
        top: au === 'top' ? 'auto' : ar.top + u.outerHeight(),
        bottom: au === 'top' ? ar.top + u.outerHeight()  : 'auto',
        left: at === 'left' ? (av === u ? 0 : ar.left)  : 'auto',
        right: at === 'left' ? 'auto' : av.outerWidth() - u.outerWidth() - (av === u ? 0 : ar.left)
      })
    },
    q = function (ar) {
      if (ar.type === 'dp.change' && ((ar.date && ar.date.isSame(ar.oldDate)) || (!ar.date && !ar.oldDate))) {
        return
      }
      u.trigger(ar)
    },
    G = function (ar) {
      if (ar === 'y') {
        ar = 'YYYY'
      }
      q({
        type: 'dp.update',
        change: ar,
        viewDate: ae.clone()
      })
    },
    e = function (ar) {
      if (!L) {
        return
      }
      if (ar) {
        r = Math.max(S, Math.min(3, r + ar))
      }
      L.find('.datepicker > div').hide().filter('.datepicker-' + ab[r].clsName).show()
    },
    ai = function () {
      var at = b('<tr>'),
      ar = ae.clone().startOf('w').startOf('d');
      if (A.calendarWeeks === true) {
        at.append(b('<th>').addClass('cw').text('#'))
      }
      while (ar.isBefore(ae.clone().endOf('w'))) {
        at.append(b('<th>').addClass('dow').text(ar.format('dd')));
        ar.add(1, 'd')
      }
      L.find('.datepicker-days thead').append(at)
    },
    y = function (ar) {
      return A.disabledDates[ar.format('YYYY-MM-DD')] === true
    },
    N = function (ar) {
      return A.enabledDates[ar.format('YYYY-MM-DD')] === true
    },
    Z = function (ar) {
      return A.disabledHours[ar.format('H')] === true
    },
    am = function (ar) {
      return A.enabledHours[ar.format('H')] === true
    },
    k = function (at, au) {
      if (!at.isValid()) {
        return false
      }
      if (A.disabledDates && au === 'd' && y(at)) {
        return false
      }
      if (A.enabledDates && au === 'd' && !N(at)) {
        return false
      }
      if (A.minDate && at.isBefore(A.minDate, au)) {
        return false
      }
      if (A.maxDate && at.isAfter(A.maxDate, au)) {
        return false
      }
      if (A.daysOfWeekDisabled && au === 'd' && A.daysOfWeekDisabled.indexOf(at.day()) !== - 1) {
        return false
      }
      if (A.disabledHours && (au === 'h' || au === 'm' || au === 's') && Z(at)) {
        return false
      }
      if (A.enabledHours && (au === 'h' || au === 'm' || au === 's') && !am(at)) {
        return false
      }
      if (A.disabledTimeIntervals && (au === 'h' || au === 'm' || au === 's')) {
        var ar = false;
        b.each(A.disabledTimeIntervals, function () {
          if (at.isBetween(this[0], this[1])) {
            ar = true;
            return false
          }
        });
        if (ar) {
          return false
        }
      }
      return true
    },
    F = function () {
      var ar = [
      ],
      at = ae.clone().startOf('y').startOf('d');
      while (at.isSame(ae, 'y')) {
        ar.push(b('<span>').attr('data-action', 'selectMonth').addClass('month').text(at.format('MMM')));
        at.add(1, 'M')
      }
      L.find('.datepicker-months td').empty().append(ar)
    },
    v = function () {
      var at = L.find('.datepicker-months'),
      au = at.find('th'),
      ar = at.find('tbody').find('span');
      au.eq(0).find('span').attr('title', A.tooltips.prevYear);
      au.eq(1).attr('title', A.tooltips.selectYear);
      au.eq(2).find('span').attr('title', A.tooltips.nextYear);
      at.find('.disabled').removeClass('disabled');
      if (!k(ae.clone().subtract(1, 'y'), 'y')) {
        au.eq(0).addClass('disabled')
      }
      au.eq(1).text(ae.year());
      if (!k(ae.clone().add(1, 'y'), 'y')) {
        au.eq(2).addClass('disabled')
      }
      ar.removeClass('active');
      if (aj.isSame(ae, 'y') && !Q) {
        ar.eq(aj.month()).addClass('active')
      }
      ar.each(function (av) {
        if (!k(ae.clone().month(av), 'M')) {
          b(this).addClass('disabled')
        }
      })
    },
    x = function () {
      var at = L.find('.datepicker-years'),
      av = at.find('th'),
      ar = ae.clone().subtract(5, 'y'),
      aw = ae.clone().add(6, 'y'),
      au = '';
      av.eq(0).find('span').attr('title', A.tooltips.nextDecade);
      av.eq(1).attr('title', A.tooltips.selectDecade);
      av.eq(2).find('span').attr('title', A.tooltips.prevDecade);
      at.find('.disabled').removeClass('disabled');
      if (A.minDate && A.minDate.isAfter(ar, 'y')) {
        av.eq(0).addClass('disabled')
      }
      av.eq(1).text(ar.year() + '-' + aw.year());
      if (A.maxDate && A.maxDate.isBefore(aw, 'y')) {
        av.eq(2).addClass('disabled')
      }
      while (!ar.isAfter(aw, 'y')) {
        au += '<span data-action="selectYear" class="year' + (ar.isSame(aj, 'y') && !Q ? ' active' : '') + (!k(ar, 'y') ? ' disabled' : '') + '">' + ar.year() + '</span>';
        ar.add(1, 'y')
      }
      at.find('td').html(au)
    },
    ac = function () {
      var av = L.find('.datepicker-decades'),
      au = av.find('th'),
      aw = ae.isBefore(c({
        y: 1999
      })) ? c({
        y: 1899
      })  : c({
        y: 1999
      }),
      ar = aw.clone().add(100, 'y'),
      at = '';
      au.eq(0).find('span').attr('title', A.tooltips.prevCentury);
      au.eq(2).find('span').attr('title', A.tooltips.nextCentury);
      av.find('.disabled').removeClass('disabled');
      if (aw.isSame(c({
        y: 1900
      })) || (A.minDate && A.minDate.isAfter(aw, 'y'))) {
        au.eq(0).addClass('disabled')
      }
      au.eq(1).text(aw.year() + '-' + ar.year());
      if (aw.isSame(c({
        y: 2000
      })) || (A.maxDate && A.maxDate.isBefore(ar, 'y'))) {
        au.eq(2).addClass('disabled')
      }
      while (!aw.isAfter(ar, 'y')) {
        at += '<span data-action="selectDecade" class="decade' + (aw.isSame(aj, 'y') ? ' active' : '') + (!k(aw, 'y') ? ' disabled' : '') + '" data-selection="' + (aw.year() + 6) + '">' + (aw.year() + 1) + ' - ' + (aw.year() + 12) + '</span>';
        aw.add(12, 'y')
      }
      at += '<span></span><span></span><span></span>';
      av.find('td').html(at)
    },
    p = function () {
      var at = L.find('.datepicker-days'),
      ay = at.find('th'),
      ar,
      av = [
      ],
      ax,
      aw,
      au;
      if (!K()) {
        return
      }
      ay.eq(0).find('span').attr('title', A.tooltips.prevMonth);
      ay.eq(1).attr('title', A.tooltips.selectMonth);
      ay.eq(2).find('span').attr('title', A.tooltips.nextMonth);
      at.find('.disabled').removeClass('disabled');
      ay.eq(1).text(ae.format(A.dayViewHeaderFormat));
      if (!k(ae.clone().subtract(1, 'M'), 'M')) {
        ay.eq(0).addClass('disabled')
      }
      if (!k(ae.clone().add(1, 'M'), 'M')) {
        ay.eq(2).addClass('disabled')
      }
      ar = ae.clone().startOf('M').startOf('w').startOf('d');
      for (au = 0; au < 42; au++) {
        if (ar.weekday() === 0) {
          ax = b('<tr>');
          if (A.calendarWeeks) {
            ax.append('<td class="cw">' + ar.week() + '</td>')
          }
          av.push(ax)
        }
        aw = '';
        if (ar.isBefore(ae, 'M')) {
          aw += ' old'
        }
        if (ar.isAfter(ae, 'M')) {
          aw += ' new'
        }
        if (ar.isSame(aj, 'd') && !Q) {
          aw += ' active'
        }
        if (!k(ar, 'd')) {
          aw += ' disabled'
        }
        if (ar.isSame(c(), 'd')) {
          aw += ' today'
        }
        if (ar.day() === 0 || ar.day() === 6) {
          aw += ' weekend'
        }
        ax.append('<td data-action="selectDay" data-day="' + ar.format('L') + '" class="day' + aw + '">' + ar.date() + '</td>');
        ar.add(1, 'd')
      }
      at.find('tbody').empty().append(av);
      v();
      x();
      ac()
    },
    I = function () {
      var at = L.find('.timepicker-hours table'),
      av = ae.clone().startOf('d'),
      ar = [
      ],
      au = b('<tr>');
      if (ae.hour() > 11 && !h) {
        av.hour(12)
      }
      while (av.isSame(ae, 'd') && (h || (ae.hour() < 12 && av.hour() < 12) || ae.hour() > 11)) {
        if (av.hour() % 4 === 0) {
          au = b('<tr>');
          ar.push(au)
        }
        au.append('<td data-action="selectHour" class="hour' + (!k(av, 'h') ? ' disabled' : '') + '">' + av.format(h ? 'HH' : 'hh') + '</td>');
        av.add(1, 'h')
      }
      at.empty().append(ar)
    },
    D = function () {
      var au = L.find('.timepicker-minutes table'),
      av = ae.clone().startOf('h'),
      ar = [
      ],
      aw = b('<tr>'),
      at = A.stepping === 1 ? 5 : A.stepping;
      while (ae.isSame(av, 'h')) {
        if (av.minute() % (at * 4) === 0) {
          aw = b('<tr>');
          ar.push(aw)
        }
        aw.append('<td data-action="selectMinute" class="minute' + (!k(av, 'm') ? ' disabled' : '') + '">' + av.format('mm') + '</td>');
        av.add(at, 'm')
      }
      au.empty().append(ar)
    },
    g = function () {
      var au = L.find('.timepicker-seconds table'),
      ar = ae.clone().startOf('m'),
      at = [
      ],
      av = b('<tr>');
      while (ae.isSame(ar, 'm')) {
        if (ar.second() % 20 === 0) {
          av = b('<tr>');
          at.push(av)
        }
        av.append('<td data-action="selectSecond" class="second' + (!k(ar, 's') ? ' disabled' : '') + '">' + ar.format('ss') + '</td>');
        ar.add(5, 's')
      }
      au.empty().append(at)
    },
    n = function () {
      var ar,
      at,
      au = L.find('.timepicker span[data-time-component]');
      if (!h) {
        ar = L.find('.timepicker [data-action=togglePeriod]');
        at = aj.clone().add((aj.hours() >= 12) ? - 12 : 12, 'h');
        ar.text(aj.format('A'));
        if (k(at, 'h')) {
          ar.removeClass('disabled')
        } else {
          ar.addClass('disabled')
        }
      }
      au.filter('[data-time-component=hours]').text(aj.format(h ? 'HH' : 'hh'));
      au.filter('[data-time-component=minutes]').text(aj.format('mm'));
      au.filter('[data-time-component=seconds]').text(aj.format('ss'));
      I();
      D();
      g()
    },
    M = function () {
      if (!L) {
        return
      }
      p();
      n()
    },
    R = function (at) {
      var ar = Q ? null : aj;
      if (!at) {
        Q = true;
        j.val('');
        u.data('date', '');
        q({
          type: 'dp.change',
          date: false,
          oldDate: ar
        });
        M();
        return
      }
      at = at.clone().locale(A.locale);
      if (A.stepping !== 1) {
        at.minutes((Math.round(at.minutes() / A.stepping) * A.stepping) % 60).seconds(0)
      }
      if (k(at)) {
        aj = at;
        ae = aj.clone();
        j.val(aj.format(w));
        u.data('date', aj.format(w));
        Q = false;
        M();
        q({
          type: 'dp.change',
          date: aj.clone(),
          oldDate: ar
        })
      } else {
        if (!A.keepInvalid) {
          j.val(Q ? '' : aj.format(w))
        }
        q({
          type: 'dp.error',
          date: at
        })
      }
    },
    ag = function () {
      var ar = false;
      if (!L) {
        return o
      }
      L.find('.collapse').each(function () {
        var at = b(this).data('collapse');
        if (at && at.transitioning) {
          ar = true;
          return false
        }
        return true
      });
      if (ar) {
        return o
      }
      if (ak && ak.hasClass('btn')) {
        ak.toggleClass('active')
      }
      L.hide();
      b(window).off('resize', m);
      L.off('click', '[data-action]');
      L.off('mousedown', false);
      L.remove();
      L = false;
      q({
        type: 'dp.hide',
        date: aj.clone()
      });
      j.blur();
      return o
    },
    V = function () {
      R(null)
    },
    Y = {
      next: function () {
        var ar = ab[r].navFnc;
        ae.add(ab[r].navStep, ar);
        p();
        G(ar)
      },
      previous: function () {
        var ar = ab[r].navFnc;
        ae.subtract(ab[r].navStep, ar);
        p();
        G(ar)
      },
      pickerSwitch: function () {
        e(1)
      },
      selectMonth: function (at) {
        var ar = b(at.target).closest('tbody').find('span').index(b(at.target));
        ae.month(ar);
        if (r === S) {
          R(aj.clone().year(ae.year()).month(ae.month()));
          if (!A.inline) {
            ag()
          }
        } else {
          e( - 1);
          p()
        }
        G('M')
      },
      selectYear: function (at) {
        var ar = parseInt(b(at.target).text(), 10) || 0;
        ae.year(ar);
        if (r === S) {
          R(aj.clone().year(ae.year()));
          if (!A.inline) {
            ag()
          }
        } else {
          e( - 1);
          p()
        }
        G('YYYY')
      },
      selectDecade: function (at) {
        var ar = parseInt(b(at.target).data('selection'), 10) || 0;
        ae.year(ar);
        if (r === S) {
          R(aj.clone().year(ae.year()));
          if (!A.inline) {
            ag()
          }
        } else {
          e( - 1);
          p()
        }
        G('YYYY')
      },
      selectDay: function (at) {
        var ar = ae.clone();
        if (b(at.target).is('.old')) {
          ar.subtract(1, 'M')
        }
        if (b(at.target).is('.new')) {
          ar.add(1, 'M')
        }
        R(ar.date(parseInt(b(at.target).text(), 10)));
        if (!E() && !A.keepOpen && !A.inline) {
          ag()
        }
      },
      incrementHours: function () {
        var ar = aj.clone().add(1, 'h');
        if (k(ar, 'h')) {
          R(ar)
        }
      },
      incrementMinutes: function () {
        var ar = aj.clone().add(A.stepping, 'm');
        if (k(ar, 'm')) {
          R(ar)
        }
      },
      incrementSeconds: function () {
        var ar = aj.clone().add(1, 's');
        if (k(ar, 's')) {
          R(ar)
        }
      },
      decrementHours: function () {
        var ar = aj.clone().subtract(1, 'h');
        if (k(ar, 'h')) {
          R(ar)
        }
      },
      decrementMinutes: function () {
        var ar = aj.clone().subtract(A.stepping, 'm');
        if (k(ar, 'm')) {
          R(ar)
        }
      },
      decrementSeconds: function () {
        var ar = aj.clone().subtract(1, 's');
        if (k(ar, 's')) {
          R(ar)
        }
      },
      togglePeriod: function () {
        R(aj.clone().add((aj.hours() >= 12) ? - 12 : 12, 'h'))
      },
      togglePicker: function (ax) {
        var aw = b(ax.target),
        av = aw.closest('ul'),
        at = av.find('.in'),
        ar = av.find('.collapse:not(.in)'),
        au;
        if (at && at.length) {
          au = at.data('collapse');
          if (au && au.transitioning) {
            return
          }
          if (at.collapse) {
            at.collapse('hide');
            ar.collapse('show')
          } else {
            at.removeClass('in');
            ar.addClass('in')
          }
          if (aw.is('span')) {
            aw.toggleClass(A.icons.time + ' ' + A.icons.date)
          } else {
            aw.find('span').toggleClass(A.icons.time + ' ' + A.icons.date)
          }
        }
      },
      showPicker: function () {
        L.find('.timepicker > div:not(.timepicker-picker)').hide();
        L.find('.timepicker .timepicker-picker').show()
      },
      showHours: function () {
        L.find('.timepicker .timepicker-picker').hide();
        L.find('.timepicker .timepicker-hours').show()
      },
      showMinutes: function () {
        L.find('.timepicker .timepicker-picker').hide();
        L.find('.timepicker .timepicker-minutes').show()
      },
      showSeconds: function () {
        L.find('.timepicker .timepicker-picker').hide();
        L.find('.timepicker .timepicker-seconds').show()
      },
      selectHour: function (at) {
        var ar = parseInt(b(at.target).text(), 10);
        if (!h) {
          if (aj.hours() >= 12) {
            if (ar !== 12) {
              ar += 12
            }
          } else {
            if (ar === 12) {
              ar = 0
            }
          }
        }
        R(aj.clone().hours(ar));
        Y.showPicker.call(o)
      },
      selectMinute: function (ar) {
        R(aj.clone().minutes(parseInt(b(ar.target).text(), 10)));
        Y.showPicker.call(o)
      },
      selectSecond: function (ar) {
        R(aj.clone().seconds(parseInt(b(ar.target).text(), 10)));
        Y.showPicker.call(o)
      },
      clear: V,
      today: function () {
        if (k(c(), 'd')) {
          R(c())
        }
      },
      close: ag
    },
    J = function (ar) {
      if (b(ar.currentTarget).is('.disabled')) {
        return false
      }
      Y[b(ar.currentTarget).data('action')].apply(o, arguments);
      return false
    },
    U = function () {
      var ar,
      at = {
        year: function (au) {
          return au.month(0).date(1).hours(0).seconds(0).minutes(0)
        },
        month: function (au) {
          return au.date(1).hours(0).seconds(0).minutes(0)
        },
        day: function (au) {
          return au.hours(0).seconds(0).minutes(0)
        },
        hour: function (au) {
          return au.seconds(0).minutes(0)
        },
        minute: function (au) {
          return au.seconds(0)
        }
      };
      if (j.prop('disabled') || (!A.ignoreReadonly && j.prop('readonly')) || L) {
        return o
      }
      if (j.val() !== undefined && j.val().trim().length !== 0) {
        R(T(j.val().trim()))
      } else {
        if (A.useCurrent && Q && ((j.is('input') && j.val().trim().length === 0) || A.inline)) {
          ar = c();
          if (typeof A.useCurrent === 'string') {
            ar = at[A.useCurrent](ar)
          }
          R(ar)
        }
      }
      L = aq();
      ai();
      F();
      L.find('.timepicker-hours').hide();
      L.find('.timepicker-minutes').hide();
      L.find('.timepicker-seconds').hide();
      M();
      e();
      b(window).on('resize', m);
      L.on('click', '[data-action]', J);
      L.on('mousedown', false);
      if (ak && ak.hasClass('btn')) {
        ak.toggleClass('active')
      }
      L.show();
      m();
      if (A.focusOnShow && !j.is(':focus')) {
        j.focus()
      }
      q({
        type: 'dp.show'
      });
      return o
    },
    C = function () {
      return (L ? ag()  : U())
    },
    T = function (ar) {
      if (A.parseInputDate === undefined) {
        if (c.isMoment(ar) || ar instanceof Date) {
          ar = c(ar)
        } else {
          ar = c(ar, ao, A.useStrict)
        }
      } else {
        ar = A.parseInputDate(ar)
      }
      ar.locale(A.locale);
      return ar
    },
    z = function (ay) {
      var aB = null,
      aw,
      ax,
      az = [
      ],
      av = {
      },
      aA = ay.which,
      at,
      ar,
      au = 'p';
      ah[aA] = au;
      for (aw in ah) {
        if (ah.hasOwnProperty(aw) && ah[aw] === au) {
          az.push(aw);
          if (parseInt(aw, 10) !== aA) {
            av[aw] = true
          }
        }
      }
      for (aw in A.keyBinds) {
        if (A.keyBinds.hasOwnProperty(aw) && typeof (A.keyBinds[aw]) === 'function') {
          at = aw.split(' ');
          if (at.length === az.length && B[aA] === at[at.length - 1]) {
            ar = true;
            for (ax = at.length - 2; ax >= 0; ax--) {
              if (!(B[at[ax]] in av)) {
                ar = false;
                break
              }
            }
            if (ar) {
              aB = A.keyBinds[aw];
              break
            }
          }
        }
      }
      if (aB) {
        aB.call(o, L);
        ay.stopPropagation();
        ay.preventDefault()
      }
    },
    ad = function (ar) {
      ah[ar.which] = 'r';
      ar.stopPropagation();
      ar.preventDefault()
    },
    f = function (at) {
      var au = b(at.target).val().trim(),
      ar = au ? T(au)  : null;
      R(ar);
      at.stopImmediatePropagation();
      return false
    },
    t = function () {
      j.on({
        change: f,
        blur: A.debug ? '' : ag,
        keydown: z,
        keyup: ad,
        focus: A.allowInputToggle ? U : ''
      });
      if (u.is('input')) {
        j.on({
          focus: U
        })
      } else {
        if (ak) {
          ak.on('click', C);
          ak.on('mousedown', false)
        }
      }
    },
    H = function () {
      j.off({
        change: f,
        blur: blur,
        keydown: z,
        keyup: ad,
        focus: A.allowInputToggle ? ag : ''
      });
      if (u.is('input')) {
        j.off({
          focus: U
        })
      } else {
        if (ak) {
          ak.off('click', C);
          ak.off('mousedown', false)
        }
      }
    },
    W = function (ar) {
      var at = {
      };
      b.each(ar, function () {
        var au = T(this);
        if (au.isValid()) {
          at[au.format('YYYY-MM-DD')] = true
        }
      });
      return (Object.keys(at).length) ? at : false
    },
    ap = function (ar) {
      var at = {
      };
      b.each(ar, function () {
        at[this] = true
      });
      return (Object.keys(at).length) ? at : false
    },
    X = function () {
      var ar = A.format || 'L LT';
      w = ar.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (at) {
        var au = aj.localeData().longDateFormat(at) || at;
        return au.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (av) {
          return aj.localeData().longDateFormat(av) || av
        })
      });
      ao = A.extraFormats ? A.extraFormats.slice()  : [
      ];
      if (ao.indexOf(ar) < 0 && ao.indexOf(w) < 0) {
        ao.push(w)
      }
      h = (w.toLowerCase().indexOf('a') < 1 && w.replace(/\[.*?\]/g, '').indexOf('h') < 1);
      if (af('y')) {
        S = 2
      }
      if (af('M')) {
        S = 1
      }
      if (af('d')) {
        S = 0
      }
      r = Math.max(S, r);
      if (!Q) {
        R(aj)
      }
    };
    o.destroy = function () {
      ag();
      H();
      u.removeData('DateTimePicker');
      u.removeData('date')
    };
    o.toggle = C;
    o.show = U;
    o.hide = ag;
    o.disable = function () {
      ag();
      if (ak && ak.hasClass('btn')) {
        ak.addClass('disabled')
      }
      j.prop('disabled', true);
      return o
    };
    o.enable = function () {
      if (ak && ak.hasClass('btn')) {
        ak.removeClass('disabled')
      }
      j.prop('disabled', false);
      return o
    };
    o.ignoreReadonly = function (ar) {
      if (arguments.length === 0) {
        return A.ignoreReadonly
      }
      if (typeof ar !== 'boolean') {
        throw new TypeError('ignoreReadonly () expects a boolean parameter')
      }
      A.ignoreReadonly = ar;
      return o
    };
    o.options = function (ar) {
      if (arguments.length === 0) {
        return b.extend(true, {
        }, A)
      }
      if (!(ar instanceof Object)) {
        throw new TypeError('options() options parameter should be an object')
      }
      b.extend(true, A, ar);
      b.each(A, function (at, au) {
        if (o[at] !== undefined) {
          o[at](au)
        } else {
          throw new TypeError('option ' + at + ' is not recognized!')
        }
      });
      return o
    };
    o.date = function (ar) {
      if (arguments.length === 0) {
        if (Q) {
          return null
        }
        return aj.clone()
      }
      if (ar !== null && typeof ar !== 'string' && !c.isMoment(ar) && !(ar instanceof Date)) {
        throw new TypeError('date() parameter must be one of [null, string, moment or Date]')
      }
      R(ar === null ? null : T(ar));
      return o
    };
    o.format = function (ar) {
      if (arguments.length === 0) {
        return A.format
      }
      if ((typeof ar !== 'string') && ((typeof ar !== 'boolean') || (ar !== false))) {
        throw new TypeError('format() expects a sting or boolean:false parameter ' + ar)
      }
      A.format = ar;
      if (w) {
        X()
      }
      return o
    };
    o.dayViewHeaderFormat = function (ar) {
      if (arguments.length === 0) {
        return A.dayViewHeaderFormat
      }
      if (typeof ar !== 'string') {
        throw new TypeError('dayViewHeaderFormat() expects a string parameter')
      }
      A.dayViewHeaderFormat = ar;
      return o
    };
    o.extraFormats = function (ar) {
      if (arguments.length === 0) {
        return A.extraFormats
      }
      if (ar !== false && !(ar instanceof Array)) {
        throw new TypeError('extraFormats() expects an array or false parameter')
      }
      A.extraFormats = ar;
      if (ao) {
        X()
      }
      return o
    };
    o.disabledDates = function (ar) {
      if (arguments.length === 0) {
        return (A.disabledDates ? b.extend({
        }, A.disabledDates)  : A.disabledDates)
      }
      if (!ar) {
        A.disabledDates = false;
        M();
        return o
      }
      if (!(ar instanceof Array)) {
        throw new TypeError('disabledDates() expects an array parameter')
      }
      A.disabledDates = W(ar);
      A.enabledDates = false;
      M();
      return o
    };
    o.enabledDates = function (ar) {
      if (arguments.length === 0) {
        return (A.enabledDates ? b.extend({
        }, A.enabledDates)  : A.enabledDates)
      }
      if (!ar) {
        A.enabledDates = false;
        M();
        return o
      }
      if (!(ar instanceof Array)) {
        throw new TypeError('enabledDates() expects an array parameter')
      }
      A.enabledDates = W(ar);
      A.disabledDates = false;
      M();
      return o
    };
    o.daysOfWeekDisabled = function (ar) {
      if (arguments.length === 0) {
        return A.daysOfWeekDisabled.splice(0)
      }
      if ((typeof ar === 'boolean') && !ar) {
        A.daysOfWeekDisabled = false;
        M();
        return o
      }
      if (!(ar instanceof Array)) {
        throw new TypeError('daysOfWeekDisabled() expects an array parameter')
      }
      A.daysOfWeekDisabled = ar.reduce(function (au, av) {
        av = parseInt(av, 10);
        if (av > 6 || av < 0 || isNaN(av)) {
          return au
        }
        if (au.indexOf(av) === - 1) {
          au.push(av)
        }
        return au
      }, [
      ]).sort();
      if (A.useCurrent && !A.keepInvalid) {
        var at = 0;
        while (!k(aj, 'd')) {
          aj.add(1, 'd');
          if (at === 7) {
            throw 'Tried 7 times to find a valid date'
          }
          at++
        }
        R(aj)
      }
      M();
      return o
    };
    o.maxDate = function (at) {
      if (arguments.length === 0) {
        return A.maxDate ? A.maxDate.clone()  : A.maxDate
      }
      if ((typeof at === 'boolean') && at === false) {
        A.maxDate = false;
        M();
        return o
      }
      if (typeof at === 'string') {
        if (at === 'now' || at === 'moment') {
          at = c()
        }
      }
      var ar = T(at);
      if (!ar.isValid()) {
        throw new TypeError('maxDate() Could not parse date parameter: ' + at)
      }
      if (A.minDate && ar.isBefore(A.minDate)) {
        throw new TypeError('maxDate() date parameter is before options.minDate: ' + ar.format(w))
      }
      A.maxDate = ar;
      if (A.useCurrent && !A.keepInvalid && aj.isAfter(at)) {
        R(A.maxDate)
      }
      if (ae.isAfter(ar)) {
        ae = ar.clone().subtract(A.stepping, 'm')
      }
      M();
      return o
    };
    o.minDate = function (at) {
      if (arguments.length === 0) {
        return A.minDate ? A.minDate.clone()  : A.minDate
      }
      if ((typeof at === 'boolean') && at === false) {
        A.minDate = false;
        M();
        return o
      }
      if (typeof at === 'string') {
        if (at === 'now' || at === 'moment') {
          at = c()
        }
      }
      var ar = T(at);
      if (!ar.isValid()) {
        throw new TypeError('minDate() Could not parse date parameter: ' + at)
      }
      if (A.maxDate && ar.isAfter(A.maxDate)) {
        throw new TypeError('minDate() date parameter is after options.maxDate: ' + ar.format(w))
      }
      A.minDate = ar;
      if (A.useCurrent && !A.keepInvalid && aj.isBefore(at)) {
        R(A.minDate)
      }
      if (ae.isBefore(ar)) {
        ae = ar.clone().add(A.stepping, 'm')
      }
      M();
      return o
    };
    o.defaultDate = function (at) {
      if (arguments.length === 0) {
        return A.defaultDate ? A.defaultDate.clone()  : A.defaultDate
      }
      if (!at) {
        A.defaultDate = false;
        return o
      }
      if (typeof at === 'string') {
        if (at === 'now' || at === 'moment') {
          at = c()
        }
      }
      var ar = T(at);
      if (!ar.isValid()) {
        throw new TypeError('defaultDate() Could not parse date parameter: ' + at)
      }
      if (!k(ar)) {
        throw new TypeError('defaultDate() date passed is invalid according to component setup validations')
      }
      A.defaultDate = ar;
      if (A.defaultDate && A.inline || (j.val().trim() === '' && j.attr('placeholder') === undefined)) {
        R(A.defaultDate)
      }
      return o
    };
    o.locale = function (ar) {
      if (arguments.length === 0) {
        return A.locale
      }
      if (!c.localeData(ar)) {
        throw new TypeError('locale() locale ' + ar + ' is not loaded from moment locales!')
      }
      A.locale = ar;
      aj.locale(A.locale);
      ae.locale(A.locale);
      if (w) {
        X()
      }
      if (L) {
        ag();
        U()
      }
      return o
    };
    o.stepping = function (ar) {
      if (arguments.length === 0) {
        return A.stepping
      }
      ar = parseInt(ar, 10);
      if (isNaN(ar) || ar < 1) {
        ar = 1
      }
      A.stepping = ar;
      return o
    };
    o.useCurrent = function (ar) {
      var at = [
        'year',
        'month',
        'day',
        'hour',
        'minute'
      ];
      if (arguments.length === 0) {
        return A.useCurrent
      }
      if ((typeof ar !== 'boolean') && (typeof ar !== 'string')) {
        throw new TypeError('useCurrent() expects a boolean or string parameter')
      }
      if (typeof ar === 'string' && at.indexOf(ar.toLowerCase()) === - 1) {
        throw new TypeError('useCurrent() expects a string parameter of ' + at.join(', '))
      }
      A.useCurrent = ar;
      return o
    };
    o.collapse = function (ar) {
      if (arguments.length === 0) {
        return A.collapse
      }
      if (typeof ar !== 'boolean') {
        throw new TypeError('collapse() expects a boolean parameter')
      }
      if (A.collapse === ar) {
        return o
      }
      A.collapse = ar;
      if (L) {
        ag();
        U()
      }
      return o
    };
    o.icons = function (ar) {
      if (arguments.length === 0) {
        return b.extend({
        }, A.icons)
      }
      if (!(ar instanceof Object)) {
        throw new TypeError('icons() expects parameter to be an Object')
      }
      b.extend(A.icons, ar);
      if (L) {
        ag();
        U()
      }
      return o
    };
    o.tooltips = function (ar) {
      if (arguments.length === 0) {
        return b.extend({
        }, A.tooltips)
      }
      if (!(ar instanceof Object)) {
        throw new TypeError('tooltips() expects parameter to be an Object')
      }
      b.extend(A.tooltips, ar);
      if (L) {
        ag();
        U()
      }
      return o
    };
    o.useStrict = function (ar) {
      if (arguments.length === 0) {
        return A.useStrict
      }
      if (typeof ar !== 'boolean') {
        throw new TypeError('useStrict() expects a boolean parameter')
      }
      A.useStrict = ar;
      return o
    };
    o.sideBySide = function (ar) {
      if (arguments.length === 0) {
        return A.sideBySide
      }
      if (typeof ar !== 'boolean') {
        throw new TypeError('sideBySide() expects a boolean parameter')
      }
      A.sideBySide = ar;
      if (L) {
        ag();
        U()
      }
      return o
    };
    o.viewMode = function (ar) {
      if (arguments.length === 0) {
        return A.viewMode
      }
      if (typeof ar !== 'string') {
        throw new TypeError('viewMode() expects a string parameter')
      }
      if (al.indexOf(ar) === - 1) {
        throw new TypeError('viewMode() parameter must be one of (' + al.join(', ') + ') value')
      }
      A.viewMode = ar;
      r = Math.max(al.indexOf(ar), S);
      e();
      return o
    };
    o.toolbarPlacement = function (ar) {
      if (arguments.length === 0) {
        return A.toolbarPlacement
      }
      if (typeof ar !== 'string') {
        throw new TypeError('toolbarPlacement() expects a string parameter')
      }
      if (an.indexOf(ar) === - 1) {
        throw new TypeError('toolbarPlacement() parameter must be one of (' + an.join(', ') + ') value')
      }
      A.toolbarPlacement = ar;
      if (L) {
        ag();
        U()
      }
      return o
    };
    o.widgetPositioning = function (ar) {
      if (arguments.length === 0) {
        return b.extend({
        }, A.widgetPositioning)
      }
      if (({
      }).toString.call(ar) !== '[object Object]') {
        throw new TypeError('widgetPositioning() expects an object variable')
      }
      if (ar.horizontal) {
        if (typeof ar.horizontal !== 'string') {
          throw new TypeError('widgetPositioning() horizontal variable must be a string')
        }
        ar.horizontal = ar.horizontal.toLowerCase();
        if (i.indexOf(ar.horizontal) === - 1) {
          throw new TypeError('widgetPositioning() expects horizontal parameter to be one of (' + i.join(', ') + ')')
        }
        A.widgetPositioning.horizontal = ar.horizontal
      }
      if (ar.vertical) {
        if (typeof ar.vertical !== 'string') {
          throw new TypeError('widgetPositioning() vertical variable must be a string')
        }
        ar.vertical = ar.vertical.toLowerCase();
        if (s.indexOf(ar.vertical) === - 1) {
          throw new TypeError('widgetPositioning() expects vertical parameter to be one of (' + s.join(', ') + ')')
        }
        A.widgetPositioning.vertical = ar.vertical
      }
      M();
      return o
    };
    o.calendarWeeks = function (ar) {
      if (arguments.length === 0) {
        return A.calendarWeeks
      }
      if (typeof ar !== 'boolean') {
        throw new TypeError('calendarWeeks() expects parameter to be a boolean value')
      }
      A.calendarWeeks = ar;
      M();
      return o
    };
    o.showTodayButton = function (ar) {
      if (arguments.length === 0) {
        return A.showTodayButton
      }
      if (typeof ar !== 'boolean') {
        throw new TypeError('showTodayButton() expects a boolean parameter')
      }
      A.showTodayButton = ar;
      if (L) {
        ag();
        U()
      }
      return o
    };
    o.showClear = function (ar) {
      if (arguments.length === 0) {
        return A.showClear
      }
      if (typeof ar !== 'boolean') {
        throw new TypeError('showClear() expects a boolean parameter')
      }
      A.showClear = ar;
      if (L) {
        ag();
        U()
      }
      return o
    };
    o.widgetParent = function (ar) {
      if (arguments.length === 0) {
        return A.widgetParent
      }
      if (typeof ar === 'string') {
        ar = b(ar)
      }
      if (ar !== null && (typeof ar !== 'string' && !(ar instanceof b))) {
        throw new TypeError('widgetParent() expects a string or a jQuery object parameter')
      }
      A.widgetParent = ar;
      if (L) {
        ag();
        U()
      }
      return o
    };
    o.keepOpen = function (ar) {
      if (arguments.length === 0) {
        return A.keepOpen
      }
      if (typeof ar !== 'boolean') {
        throw new TypeError('keepOpen() expects a boolean parameter')
      }
      A.keepOpen = ar;
      return o
    };
    o.focusOnShow = function (ar) {
      if (arguments.length === 0) {
        return A.focusOnShow
      }
      if (typeof ar !== 'boolean') {
        throw new TypeError('focusOnShow() expects a boolean parameter')
      }
      A.focusOnShow = ar;
      return o
    };
    o.inline = function (ar) {
      if (arguments.length === 0) {
        return A.inline
      }
      if (typeof ar !== 'boolean') {
        throw new TypeError('inline() expects a boolean parameter')
      }
      A.inline = ar;
      return o
    };
    o.clear = function () {
      V();
      return o
    };
    o.keyBinds = function (ar) {
      A.keyBinds = ar;
      return o
    };
    o.debug = function (ar) {
      if (typeof ar !== 'boolean') {
        throw new TypeError('debug() expects a boolean parameter')
      }
      A.debug = ar;
      return o
    };
    o.allowInputToggle = function (ar) {
      if (arguments.length === 0) {
        return A.allowInputToggle
      }
      if (typeof ar !== 'boolean') {
        throw new TypeError('allowInputToggle() expects a boolean parameter')
      }
      A.allowInputToggle = ar;
      return o
    };
    o.showClose = function (ar) {
      if (arguments.length === 0) {
        return A.showClose
      }
      if (typeof ar !== 'boolean') {
        throw new TypeError('showClose() expects a boolean parameter')
      }
      A.showClose = ar;
      return o
    };
    o.keepInvalid = function (ar) {
      if (arguments.length === 0) {
        return A.keepInvalid
      }
      if (typeof ar !== 'boolean') {
        throw new TypeError('keepInvalid() expects a boolean parameter')
      }
      A.keepInvalid = ar;
      return o
    };
    o.datepickerInput = function (ar) {
      if (arguments.length === 0) {
        return A.datepickerInput
      }
      if (typeof ar !== 'string') {
        throw new TypeError('datepickerInput() expects a string parameter')
      }
      A.datepickerInput = ar;
      return o
    };
    o.parseInputDate = function (ar) {
      if (arguments.length === 0) {
        return A.parseInputDate
      }
      if (typeof ar !== 'function') {
        throw new TypeError('parseInputDate() sholud be as function')
      }
      A.parseInputDate = ar;
      return o
    };
    o.disabledTimeIntervals = function (ar) {
      if (arguments.length === 0) {
        return (A.disabledTimeIntervals ? b.extend({
        }, A.disabledTimeIntervals)  : A.disabledTimeIntervals)
      }
      if (!ar) {
        A.disabledTimeIntervals = false;
        M();
        return o
      }
      if (!(ar instanceof Array)) {
        throw new TypeError('disabledTimeIntervals() expects an array parameter')
      }
      A.disabledTimeIntervals = ar;
      M();
      return o
    };
    o.disabledHours = function (ar) {
      if (arguments.length === 0) {
        return (A.disabledHours ? b.extend({
        }, A.disabledHours)  : A.disabledHours)
      }
      if (!ar) {
        A.disabledHours = false;
        M();
        return o
      }
      if (!(ar instanceof Array)) {
        throw new TypeError('disabledHours() expects an array parameter')
      }
      A.disabledHours = ap(ar);
      A.enabledHours = false;
      if (A.useCurrent && !A.keepInvalid) {
        var at = 0;
        while (!k(aj, 'h')) {
          aj.add(1, 'h');
          if (at === 24) {
            throw 'Tried 24 times to find a valid date'
          }
          at++
        }
        R(aj)
      }
      M();
      return o
    };
    o.enabledHours = function (ar) {
      if (arguments.length === 0) {
        return (A.enabledHours ? b.extend({
        }, A.enabledHours)  : A.enabledHours)
      }
      if (!ar) {
        A.enabledHours = false;
        M();
        return o
      }
      if (!(ar instanceof Array)) {
        throw new TypeError('enabledHours() expects an array parameter')
      }
      A.enabledHours = ap(ar);
      A.disabledHours = false;
      if (A.useCurrent && !A.keepInvalid) {
        var at = 0;
        while (!k(aj, 'h')) {
          aj.add(1, 'h');
          if (at === 24) {
            throw 'Tried 24 times to find a valid date'
          }
          at++
        }
        R(aj)
      }
      M();
      return o
    };
    o.viewDate = function (ar) {
      if (arguments.length === 0) {
        return ae.clone()
      }
      if (!ar) {
        ae = aj.clone();
        return o
      }
      if (typeof ar !== 'string' && !c.isMoment(ar) && !(ar instanceof Date)) {
        throw new TypeError('viewDate() parameter must be one of [string, moment or Date]')
      }
      ae = T(ar);
      G();
      return o
    };
    if (u.is('input')) {
      j = u
    } else {
      j = u.find(A.datepickerInput);
      if (j.size() === 0) {
        j = u.find('input')
      } else {
        if (!j.is('input')) {
          throw new Error('CSS class "' + A.datepickerInput + '" cannot be applied to non input element')
        }
      }
    }
    if (u.hasClass('input-group')) {
      if (u.find('.datepickerbutton').size() === 0) {
        ak = u.find('.input-group-addon')
      } else {
        ak = u.find('.datepickerbutton')
      }
    }
    if (!A.inline && !j.is('input')) {
      throw new Error('Could not initialize DateTimePicker without an input element')
    }
    b.extend(true, A, d());
    o.options(A);
    X();
    t();
    if (j.prop('disabled')) {
      o.disable()
    }
    if (j.is('input') && j.val().trim().length !== 0) {
      R(T(j.val().trim()))
    } else {
      if (A.defaultDate && j.attr('placeholder') === undefined) {
        R(A.defaultDate)
      }
    }
    if (A.inline) {
      U()
    }
    return o
  };
  b.fn.datetimepicker = function (d) {
    return this.each(function () {
      var e = b(this);
      if (!e.data('DateTimePicker')) {
        d = b.extend(true, {
        }, b.fn.datetimepicker.defaults, d);
        e.data('DateTimePicker', a(e, d))
      }
    })
  };
  b.fn.datetimepicker.defaults = {
    format: false,
    dayViewHeaderFormat: 'MMMM YYYY',
    extraFormats: false,
    stepping: 1,
    minDate: false,
    maxDate: false,
    useCurrent: false,
    collapse: true,
    locale: 'fr',
    defaultDate: false,
    disabledDates: false,
    enabledDates: false,
    icons: {
      time: 'glyphicon glyphicon-time',
      date: 'glyphicon glyphicon-calendar',
      up: 'glyphicon glyphicon-chevron-up',
      down: 'glyphicon glyphicon-chevron-down',
      previous: 'glyphicon glyphicon-chevron-left',
      next: 'glyphicon glyphicon-chevron-right',
      today: 'glyphicon glyphicon-screenshot',
      clear: 'glyphicon glyphicon-trash',
      close: 'glyphicon glyphicon-remove'
    },
    tooltips: {
      today: 'Go to today',
      clear: 'Clear selection',
      close: 'Close the picker',
      selectMonth: 'Select Month',
      prevMonth: 'Previous Month',
      nextMonth: 'Next Month',
      selectYear: 'Select Year',
      prevYear: 'Previous Year',
      nextYear: 'Next Year',
      selectDecade: 'Select Decade',
      prevDecade: 'Previous Decade',
      nextDecade: 'Next Decade',
      prevCentury: 'Previous Century',
      nextCentury: 'Next Century'
    },
    useStrict: false,
    sideBySide: false,
    daysOfWeekDisabled: false,
    calendarWeeks: false,
    viewMode: 'days',
    toolbarPlacement: 'default',
    showTodayButton: false,
    showClear: false,
    showClose: true,
    widgetPositioning: {
      horizontal: 'auto',
      vertical: 'auto'
    },
    widgetParent: null,
    ignoreReadonly: false,
    keepOpen: false,
    focusOnShow: true,
    inline: false,
    keepInvalid: false,
    datepickerInput: '.datepickerinput',
    keyBinds: {
      up: function (e) {
        if (!e) {
          return
        }
        var f = this.date() || c();
        if (e.find('.datepicker').is(':visible')) {
          this.date(f.clone().subtract(7, 'd'))
        } else {
          this.date(f.clone().add(this.stepping(), 'm'))
        }
      },
      down: function (e) {
        if (!e) {
          this.show();
          return
        }
        var f = this.date() || c();
        if (e.find('.datepicker').is(':visible')) {
          this.date(f.clone().add(7, 'd'))
        } else {
          this.date(f.clone().subtract(this.stepping(), 'm'))
        }
      },
      'control up': function (e) {
        if (!e) {
          return
        }
        var f = this.date() || c();
        if (e.find('.datepicker').is(':visible')) {
          this.date(f.clone().subtract(1, 'y'))
        } else {
          this.date(f.clone().add(1, 'h'))
        }
      },
      'control down': function (e) {
        if (!e) {
          return
        }
        var f = this.date() || c();
        if (e.find('.datepicker').is(':visible')) {
          this.date(f.clone().add(1, 'y'))
        } else {
          this.date(f.clone().subtract(1, 'h'))
        }
      },
      left: function (e) {
        if (!e) {
          return
        }
        var f = this.date() || c();
        if (e.find('.datepicker').is(':visible')) {
          this.date(f.clone().subtract(1, 'd'))
        }
      },
      right: function (e) {
        if (!e) {
          return
        }
        var f = this.date() || c();
        if (e.find('.datepicker').is(':visible')) {
          this.date(f.clone().add(1, 'd'))
        }
      },
      pageUp: function (e) {
        if (!e) {
          return
        }
        var f = this.date() || c();
        if (e.find('.datepicker').is(':visible')) {
          this.date(f.clone().subtract(1, 'M'))
        }
      },
      pageDown: function (e) {
        if (!e) {
          return
        }
        var f = this.date() || c();
        if (e.find('.datepicker').is(':visible')) {
          this.date(f.clone().add(1, 'M'))
        }
      },
      enter: function () {
        this.hide()
      },
      escape: function () {
        this.hide()
      },
      'control space': function (d) {
        if (d.find('.timepicker').is(':visible')) {
          d.find('.btn[data-action="togglePeriod"]').click()
        }
      },
      t: function () {
        this.date(c())
      },
      'delete': function () {
        this.clear()
      }
    },
    debug: false,
    allowInputToggle: false,
    disabledTimeIntervals: false,
    disabledHours: false,
    enabledHours: false,
    viewDate: false
  }
})); (function (d) {
  function a() {
    windowHeight = d(window).innerHeight();
    d('#home').css('height', windowHeight);
    d('#owl div').css('height', windowHeight)
  }
  var f;
  var c = false;
  var e = 200;
  d(window).resize(function () {
    f = new Date();
    if (c === false) {
      c = true;
      setTimeout(b, e)
    }
  });
  function b() {
    if (new Date() - f < e) {
      setTimeout(b, e)
    } else {
      c = false;
      windowHeight = d(window).innerHeight();
      a()
    }
  }
  d('.navbar-special').affix({
    offset: {
      top: function () {
        return d(window).innerHeight() - 77
      }
    }
  });
  d(document).ready(function () {
    a();
    d.each(jQuery('.owl-carousel .item'), function () {
      d(this).css('background-image', 'url(' + d(this).find('img').attr('src') + ')').css('background-position', 'left').css('background-size', 'cover').find('img').css('visibility', 'hidden')
    });
    d('.ekko-lightbox').on('hidden.bs.modal', function () {
      d(this).find('.embed-responsive iframe').attr('src', d(this).find('.embed-responsive iframe').attr('src'))
    });
    var g = d('#owl');
    g.owlCarousel({
      autoPlay: 10000,
      navigation: false,
      singleItem: true,
      transitionStyle: 'fadeUp'
    });
    d('#navbar').localScroll({
      target: 'body',
      queue: true,
      duration: 1000,
      hash: true,
      interrupt: true,
    });
    d('.navbar-collapse a').click(function () {
      d('.navbar-collapse').collapse('hide')
    });
    d('.datetimepicker').datetimepicker()
  })
}(jQuery)); (function (c) {
  function b() {
    var e = c('#screening_collapse .collapse'),
    d = c('input, select', e);
    if (c(this).val() == '1') {
      d.prop('required', true);
      e.collapse('show')
    } else {
      d.prop('required', false);
      d.filter('[type="text"]').val('');
      d.filter('[type="radio"]').prop('checked', false);
      d.filter('select').prop('selectedIndex', 0);
      e.collapse('hide')
    }
  }
  function a() {
    var d = c('#screening_public_collapse');
    (c(this).val() == '1') ? d.collapse('show')  : d.collapse('hide')
  }
  c(function () {
    c('input[name="has_screening"]').change(b);
    c('input[name="screening_public"]').change(a)
  })
}(jQuery));

