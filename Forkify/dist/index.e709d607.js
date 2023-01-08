function t(t, e, n, r) {
  Object.defineProperty(t, e, {
    get: n,
    set: r,
    enumerable: !0,
    configurable: !0,
  });
}
var e =
  'undefined' != typeof globalThis
    ? globalThis
    : 'undefined' != typeof self
    ? self
    : 'undefined' != typeof window
    ? window
    : 'undefined' != typeof global
    ? global
    : {};
function n(t) {
  return t && t.__esModule ? t.default : t;
}
var r = {},
  o = {},
  i = e.parcelRequire3a11;
null == i &&
  (((i = function (t) {
    if (t in r) return r[t].exports;
    if (t in o) {
      var e = o[t];
      delete o[t];
      var n = { id: t, exports: {} };
      return (r[t] = n), e.call(n.exports, n, n.exports), n.exports;
    }
    var i = new Error("Cannot find module '" + t + "'");
    throw ((i.code = 'MODULE_NOT_FOUND'), i);
  }).register = function (t, e) {
    o[t] = e;
  }),
  (e.parcelRequire3a11 = i)),
  i.register('27Lyk', function (e, n) {
    var r, o;
    t(
      e.exports,
      'register',
      () => r,
      t => (r = t)
    ),
      t(
        e.exports,
        'resolve',
        () => o,
        t => (o = t)
      );
    var i = {};
    (r = function (t) {
      for (var e = Object.keys(t), n = 0; n < e.length; n++) i[e[n]] = t[e[n]];
    }),
      (o = function (t) {
        var e = i[t];
        if (null == e) throw new Error('Could not resolve bundle with id ' + t);
        return e;
      });
  }),
  i('27Lyk').register(
    JSON.parse('{"f9fpV":"index.e709d607.js","eyyUD":"icons.c14567a0.svg"}')
  );
var a = {},
  c = function (t) {
    return t && t.Math == Math && t;
  };
a =
  c('object' == typeof globalThis && globalThis) ||
  c('object' == typeof window && window) ||
  c('object' == typeof self && self) ||
  c('object' == typeof e && e) ||
  (function () {
    return this;
  })() ||
  Function('return this')();
var s, u;
s = !(u = function (t) {
  try {
    return !!t();
  } catch (t) {
    return !0;
  }
})(function () {
  return (
    7 !=
    Object.defineProperty({}, 1, {
      get: function () {
        return 7;
      },
    })[1]
  );
});
var l,
  f,
  p,
  h = {},
  d = 'object' == typeof document && document.all,
  v = (p = { all: d, IS_HTMLDDA: void 0 === d && void 0 !== d }).all;
h = p.IS_HTMLDDA
  ? function (t) {
      return 'function' == typeof t || t === v;
    }
  : function (t) {
      return 'function' == typeof t;
    };
var g,
  m = {},
  y = {};
g = !u(function () {
  var t = function () {}.bind();
  return 'function' != typeof t || t.hasOwnProperty('prototype');
});
var b = Function.prototype,
  w = b.call,
  _ = g && b.bind.bind(w, w);
y = g
  ? _
  : function (t) {
      return function () {
        return w.apply(t, arguments);
      };
    };
var E, S, O;
O = function (t) {
  return null == t;
};
var j = TypeError;
S = function (t) {
  if (O(t)) throw j("Can't call method on " + t);
  return t;
};
var F = Object;
E = function (t) {
  return F(S(t));
};
var L = y({}.hasOwnProperty);
m =
  Object.hasOwn ||
  function (t, e) {
    return L(E(t), e);
  };
var M,
  k = Function.prototype,
  x = s && Object.getOwnPropertyDescriptor,
  P = m(k, 'name'),
  T = {
    EXISTS: P,
    PROPER: P && 'something' === function () {}.name,
    CONFIGURABLE: P && (!s || (s && x(k, 'name').configurable)),
  }.CONFIGURABLE,
  I = {},
  $ = {},
  N = Object.defineProperty;
M = function (t, e) {
  try {
    N(a, t, { value: e, configurable: !0, writable: !0 });
  } catch (n) {
    a[t] = e;
  }
  return e;
};
var D = '__core-js_shared__',
  R = a[D] || M(D, {});
$ = R;
var A = y(Function.toString);
h($.inspectSource) ||
  ($.inspectSource = function (t) {
    return A(t);
  }),
  (I = $.inspectSource);
var C,
  H,
  z = a.WeakMap;
H = h(z) && /native code/.test(String(z));
var q = {},
  G = p.all;
q = p.IS_HTMLDDA
  ? function (t) {
      return 'object' == typeof t ? null !== t : h(t) || t === G;
    }
  : function (t) {
      return 'object' == typeof t ? null !== t : h(t);
    };
var U,
  B,
  W,
  Y = {},
  Q = a.document,
  V = q(Q) && q(Q.createElement);
(W = function (t) {
  return V ? Q.createElement(t) : {};
}),
  (B =
    !s &&
    !u(function () {
      return (
        7 !=
        Object.defineProperty(W('div'), 'a', {
          get: function () {
            return 7;
          },
        }).a
      );
    }));
var J;
J =
  s &&
  u(function () {
    return (
      42 !=
      Object.defineProperty(function () {}, 'prototype', {
        value: 42,
        writable: !1,
      }).prototype
    );
  });
var K,
  X = String,
  Z = TypeError;
K = function (t) {
  if (q(t)) return t;
  throw Z(X(t) + ' is not an object');
};
var tt,
  et,
  nt = {},
  rt = Function.prototype.call;
nt = g
  ? rt.bind(rt)
  : function () {
      return rt.apply(rt, arguments);
    };
var ot,
  it = {},
  at = function (t) {
    return h(t) ? t : void 0;
  };
ot = function (t, e) {
  return arguments.length < 2 ? at(a[t]) : a[t] && a[t][e];
};
var ct = {};
ct = y({}.isPrototypeOf);
var st,
  ut,
  lt,
  ft = {};
ft = ot('navigator', 'userAgent') || '';
var pt,
  ht,
  dt = a.process,
  vt = a.Deno,
  gt = (dt && dt.versions) || (vt && vt.version),
  mt = gt && gt.v8;
mt && (ht = (pt = mt.split('.'))[0] > 0 && pt[0] < 4 ? 1 : +(pt[0] + pt[1])),
  !ht &&
    ft &&
    (!(pt = ft.match(/Edge\/(\d+)/)) || pt[1] >= 74) &&
    (pt = ft.match(/Chrome\/(\d+)/)) &&
    (ht = +pt[1]),
  (lt = ht),
  (ut =
    !!Object.getOwnPropertySymbols &&
    !u(function () {
      var t = Symbol();
      return (
        !String(t) ||
        !(Object(t) instanceof Symbol) ||
        (!Symbol.sham && lt && lt < 41)
      );
    })),
  (st = ut && !Symbol.sham && 'symbol' == typeof Symbol.iterator);
var yt = Object;
it = st
  ? function (t) {
      return 'symbol' == typeof t;
    }
  : function (t) {
      var e = ot('Symbol');
      return h(e) && ct(e.prototype, yt(t));
    };
var bt,
  wt,
  _t,
  Et = String;
_t = function (t) {
  try {
    return Et(t);
  } catch (t) {
    return 'Object';
  }
};
var St = TypeError;
(wt = function (t) {
  if (h(t)) return t;
  throw St(_t(t) + ' is not a function');
}),
  (bt = function (t, e) {
    var n = t[e];
    return O(n) ? void 0 : wt(n);
  });
var Ot,
  jt = TypeError;
Ot = function (t, e) {
  var n, r;
  if ('string' === e && h((n = t.toString)) && !q((r = nt(n, t)))) return r;
  if (h((n = t.valueOf)) && !q((r = nt(n, t)))) return r;
  if ('string' !== e && h((n = t.toString)) && !q((r = nt(n, t)))) return r;
  throw jt("Can't convert object to primitive value");
};
var Ft;
(Ft = function (t, e) {
  return $[t] || ($[t] = void 0 !== e ? e : {});
})('versions', []).push({
  version: '3.27.1',
  mode: 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.27.1/LICENSE',
  source: 'https://github.com/zloirock/core-js',
});
var Lt,
  Mt = 0,
  kt = Math.random(),
  xt = y((1).toString);
Lt = function (t) {
  return 'Symbol(' + (void 0 === t ? '' : t) + ')_' + xt(++Mt + kt, 36);
};
var Pt = Ft('wks'),
  Tt = a.Symbol,
  It = Tt && Tt.for,
  $t = st ? Tt : (Tt && Tt.withoutSetter) || Lt,
  Nt = TypeError,
  Dt = (function (t) {
    if (!m(Pt, t) || (!ut && 'string' != typeof Pt[t])) {
      var e = 'Symbol.' + t;
      ut && m(Tt, t) ? (Pt[t] = Tt[t]) : (Pt[t] = st && It ? It(e) : $t(e));
    }
    return Pt[t];
  })('toPrimitive');
(et = function (t, e) {
  if (!q(t) || it(t)) return t;
  var n,
    r = bt(t, Dt);
  if (r) {
    if ((void 0 === e && (e = 'default'), (n = nt(r, t, e)), !q(n) || it(n)))
      return n;
    throw Nt("Can't convert object to primitive value");
  }
  return void 0 === e && (e = 'number'), Ot(t, e);
}),
  (tt = function (t) {
    var e = et(t, 'string');
    return it(e) ? e : e + '';
  });
var Rt = TypeError,
  At = Object.defineProperty,
  Ct = Object.getOwnPropertyDescriptor,
  Ht = 'enumerable',
  zt = 'configurable',
  qt = 'writable';
U = s
  ? J
    ? function (t, e, n) {
        if (
          (K(t),
          (e = tt(e)),
          K(n),
          'function' == typeof t &&
            'prototype' === e &&
            'value' in n &&
            qt in n &&
            !n[qt])
        ) {
          var r = Ct(t, e);
          r &&
            r[qt] &&
            ((t[e] = n.value),
            (n = {
              configurable: zt in n ? n[zt] : r[zt],
              enumerable: Ht in n ? n[Ht] : r[Ht],
              writable: !1,
            }));
        }
        return At(t, e, n);
      }
    : At
  : function (t, e, n) {
      if ((K(t), (e = tt(e)), K(n), B))
        try {
          return At(t, e, n);
        } catch (t) {}
      if ('get' in n || 'set' in n) throw Rt('Accessors not supported');
      return 'value' in n && (t[e] = n.value), t;
    };
var Gt;
(Gt = function (t, e) {
  return {
    enumerable: !(1 & t),
    configurable: !(2 & t),
    writable: !(4 & t),
    value: e,
  };
}),
  (Y = s
    ? function (t, e, n) {
        return U(t, e, Gt(1, n));
      }
    : function (t, e, n) {
        return (t[e] = n), t;
      });
var Ut,
  Bt = Ft('keys');
Ut = function (t) {
  return Bt[t] || (Bt[t] = Lt(t));
};
var Wt = {};
Wt = {};
var Yt,
  Qt,
  Vt,
  Jt = 'Object already initialized',
  Kt = a.TypeError,
  Xt = a.WeakMap;
if (H || $.state) {
  var Zt = $.state || ($.state = new Xt());
  (Zt.get = Zt.get),
    (Zt.has = Zt.has),
    (Zt.set = Zt.set),
    (Yt = function (t, e) {
      if (Zt.has(t)) throw Kt(Jt);
      return (e.facade = t), Zt.set(t, e), e;
    }),
    (Qt = function (t) {
      return Zt.get(t) || {};
    }),
    (Vt = function (t) {
      return Zt.has(t);
    });
} else {
  var te = Ut('state');
  (Wt[te] = !0),
    (Yt = function (t, e) {
      if (m(t, te)) throw Kt(Jt);
      return (e.facade = t), Y(t, te, e), e;
    }),
    (Qt = function (t) {
      return m(t, te) ? t[te] : {};
    }),
    (Vt = function (t) {
      return m(t, te);
    });
}
var ee = (C = {
    set: Yt,
    get: Qt,
    has: Vt,
    enforce: function (t) {
      return Vt(t) ? Qt(t) : Yt(t, {});
    },
    getterFor: function (t) {
      return function (e) {
        var n;
        if (!q(e) || (n = Qt(e)).type !== t)
          throw Kt('Incompatible receiver, ' + t + ' required');
        return n;
      };
    },
  }).enforce,
  ne = C.get,
  re = Object.defineProperty,
  oe =
    s &&
    !u(function () {
      return 8 !== re(function () {}, 'length', { value: 8 }).length;
    }),
  ie = String(String).split('String'),
  ae = (f = function (t, e, n) {
    'Symbol(' === String(e).slice(0, 7) &&
      (e = '[' + String(e).replace(/^Symbol\(([^)]*)\)/, '$1') + ']'),
      n && n.getter && (e = 'get ' + e),
      n && n.setter && (e = 'set ' + e),
      (!m(t, 'name') || (T && t.name !== e)) &&
        (s ? re(t, 'name', { value: e, configurable: !0 }) : (t.name = e)),
      oe &&
        n &&
        m(n, 'arity') &&
        t.length !== n.arity &&
        re(t, 'length', { value: n.arity });
    try {
      n && m(n, 'constructor') && n.constructor
        ? s && re(t, 'prototype', { writable: !1 })
        : t.prototype && (t.prototype = void 0);
    } catch (t) {}
    var r = ee(t);
    return (
      m(r, 'source') || (r.source = ie.join('string' == typeof e ? e : '')), t
    );
  });
(Function.prototype.toString = ae(function () {
  return (h(this) && ne(this).source) || I(this);
}, 'toString')),
  (l = function (t, e, n) {
    return (
      n.get && f(n.get, e, { getter: !0 }),
      n.set && f(n.set, e, { setter: !0 }),
      U(t, e, n)
    );
  });
var ce;
ce = function () {
  var t = K(this),
    e = '';
  return (
    t.hasIndices && (e += 'd'),
    t.global && (e += 'g'),
    t.ignoreCase && (e += 'i'),
    t.multiline && (e += 'm'),
    t.dotAll && (e += 's'),
    t.unicode && (e += 'u'),
    t.unicodeSets && (e += 'v'),
    t.sticky && (e += 'y'),
    e
  );
};
var se = a.RegExp,
  ue = se.prototype;
s &&
  u(function () {
    var t = !0;
    try {
      se('.', 'd');
    } catch (e) {
      t = !1;
    }
    var e = {},
      n = '',
      r = t ? 'dgimsy' : 'gimsy',
      o = function (t, r) {
        Object.defineProperty(e, t, {
          get: function () {
            return (n += r), !0;
          },
        });
      },
      i = {
        dotAll: 's',
        global: 'g',
        ignoreCase: 'i',
        multiline: 'm',
        sticky: 'y',
      };
    for (var a in (t && (i.hasIndices = 'd'), i)) o(a, i[a]);
    return (
      Object.getOwnPropertyDescriptor(ue, 'flags').get.call(e) !== r || n !== r
    );
  }) &&
  l(ue, 'flags', { configurable: !0, get: ce });
var le,
  fe,
  pe,
  he = {}.propertyIsEnumerable,
  de = Object.getOwnPropertyDescriptor,
  ve = de && !he.call({ 1: 2 }, 1);
pe = ve
  ? function (t) {
      var e = de(this, t);
      return !!e && e.enumerable;
    }
  : he;
var ge,
  me,
  ye = {},
  be = y({}.toString),
  we = y(''.slice);
me = function (t) {
  return we(be(t), 8, -1);
};
var _e = Object,
  Ee = y(''.split);
(ye = u(function () {
  return !_e('z').propertyIsEnumerable(0);
})
  ? function (t) {
      return 'String' == me(t) ? Ee(t, '') : _e(t);
    }
  : _e),
  (ge = function (t) {
    return ye(S(t));
  });
var Se,
  Oe = Object.getOwnPropertyDescriptor,
  je = (fe = s
    ? Oe
    : function (t, e) {
        if (((t = ge(t)), (e = tt(e)), B))
          try {
            return Oe(t, e);
          } catch (t) {}
        if (m(t, e)) return Gt(!nt(pe, t, e), t[e]);
      });
Se = function (t, e, n, r) {
  r || (r = {});
  var o = r.enumerable,
    i = void 0 !== r.name ? r.name : e;
  if ((h(n) && f(n, i, r), r.global)) o ? (t[e] = n) : M(e, n);
  else {
    try {
      r.unsafe ? t[e] && (o = !0) : delete t[e];
    } catch (t) {}
    o
      ? (t[e] = n)
      : U(t, e, {
          value: n,
          enumerable: !1,
          configurable: !r.nonConfigurable,
          writable: !r.nonWritable,
        });
  }
  return t;
};
var Fe,
  Le,
  Me,
  ke,
  xe,
  Pe = {},
  Te = {},
  Ie = Math.ceil,
  $e = Math.floor;
(Te =
  Math.trunc ||
  function (t) {
    var e = +t;
    return (e > 0 ? $e : Ie)(e);
  }),
  (xe = function (t) {
    var e = +t;
    return e != e || 0 === e ? 0 : Te(e);
  });
var Ne = Math.max,
  De = Math.min;
ke = function (t, e) {
  var n = xe(t);
  return n < 0 ? Ne(n + e, 0) : De(n, e);
};
var Re,
  Ae,
  Ce = Math.min;
(Ae = function (t) {
  return t > 0 ? Ce(xe(t), 9007199254740991) : 0;
}),
  (Re = function (t) {
    return Ae(t.length);
  });
var He = function (t) {
    return function (e, n, r) {
      var o,
        i = ge(e),
        a = Re(i),
        c = ke(r, a);
      if (t && n != n) {
        for (; a > c; ) if ((o = i[c++]) != o) return !0;
      } else
        for (; a > c; c++) if ((t || c in i) && i[c] === n) return t || c || 0;
      return !t && -1;
    };
  },
  ze = { includes: He(!0), indexOf: He(!1) }.indexOf,
  qe = y([].push);
Me = function (t, e) {
  var n,
    r = ge(t),
    o = 0,
    i = [];
  for (n in r) !m(Wt, n) && m(r, n) && qe(i, n);
  for (; e.length > o; ) m(r, (n = e[o++])) && (~ze(i, n) || qe(i, n));
  return i;
};
var Ge,
  Ue = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf',
  ].concat('length', 'prototype');
(Le =
  Object.getOwnPropertyNames ||
  function (t) {
    return Me(t, Ue);
  }),
  (Ge = Object.getOwnPropertySymbols);
var Be = y([].concat);
(Pe =
  ot('Reflect', 'ownKeys') ||
  function (t) {
    var e = Le(K(t));
    return Ge ? Be(e, Ge(t)) : e;
  }),
  (Fe = function (t, e, n) {
    for (var r = Pe(e), o = U, i = fe, a = 0; a < r.length; a++) {
      var c = r[a];
      m(t, c) || (n && m(n, c)) || o(t, c, i(e, c));
    }
  });
var We = {},
  Ye = /#|\.prototype\./,
  Qe = function (t, e) {
    var n = Je[Ve(t)];
    return n == Xe || (n != Ke && (h(e) ? u(e) : !!e));
  },
  Ve = (Qe.normalize = function (t) {
    return String(t).replace(Ye, '.').toLowerCase();
  }),
  Je = (Qe.data = {}),
  Ke = (Qe.NATIVE = 'N'),
  Xe = (Qe.POLYFILL = 'P');
(We = Qe),
  (le = function (t, e) {
    var n,
      r,
      o,
      i,
      c,
      s = t.target,
      u = t.global,
      l = t.stat;
    if ((n = u ? a : l ? a[s] || M(s, {}) : (a[s] || {}).prototype))
      for (r in e) {
        if (
          ((i = e[r]),
          (o = t.dontCallGetSet ? (c = je(n, r)) && c.value : n[r]),
          !We(u ? r : s + (l ? '.' : '#') + r, t.forced) && void 0 !== o)
        ) {
          if (typeof i == typeof o) continue;
          Fe(i, o);
        }
        (t.sham || (o && o.sham)) && Y(i, 'sham', !0), Se(n, r, i, t);
      }
  });
var Ze,
  tn = {},
  en = Function.prototype,
  nn = en.apply,
  rn = en.call;
tn =
  ('object' == typeof Reflect && Reflect.apply) ||
  (g
    ? rn.bind(nn)
    : function () {
        return rn.apply(nn, arguments);
      });
var on,
  an,
  cn = (an = function (t) {
    if ('Function' === me(t)) return y(t);
  })(an.bind);
on = function (t, e) {
  return (
    wt(t),
    void 0 === e
      ? t
      : g
      ? cn(t, e)
      : function () {
          return t.apply(e, arguments);
        }
  );
};
var sn = {};
sn = ot('document', 'documentElement');
var un = {};
un = y([].slice);
var ln,
  fn = TypeError;
ln = function (t, e) {
  if (t < e) throw fn('Not enough arguments');
  return t;
};
var pn;
pn = /(?:ipad|iphone|ipod).*applewebkit/i.test(ft);
var hn;
hn = 'process' == me(a.process);
var dn,
  vn,
  gn,
  mn,
  yn = a.setImmediate,
  bn = a.clearImmediate,
  wn = a.process,
  _n = a.Dispatch,
  En = a.Function,
  Sn = a.MessageChannel,
  On = a.String,
  jn = 0,
  Fn = {},
  Ln = 'onreadystatechange';
try {
  dn = a.location;
} catch (t) {}
var Mn = function (t) {
    if (m(Fn, t)) {
      var e = Fn[t];
      delete Fn[t], e();
    }
  },
  kn = function (t) {
    return function () {
      Mn(t);
    };
  },
  xn = function (t) {
    Mn(t.data);
  },
  Pn = function (t) {
    a.postMessage(On(t), dn.protocol + '//' + dn.host);
  };
(yn && bn) ||
  ((yn = function (t) {
    ln(arguments.length, 1);
    var e = h(t) ? t : En(t),
      n = un(arguments, 1);
    return (
      (Fn[++jn] = function () {
        tn(e, void 0, n);
      }),
      vn(jn),
      jn
    );
  }),
  (bn = function (t) {
    delete Fn[t];
  }),
  hn
    ? (vn = function (t) {
        wn.nextTick(kn(t));
      })
    : _n && _n.now
    ? (vn = function (t) {
        _n.now(kn(t));
      })
    : Sn && !pn
    ? ((mn = (gn = new Sn()).port2),
      (gn.port1.onmessage = xn),
      (vn = on(mn.postMessage, mn)))
    : a.addEventListener &&
      h(a.postMessage) &&
      !a.importScripts &&
      dn &&
      'file:' !== dn.protocol &&
      !u(Pn)
    ? ((vn = Pn), a.addEventListener('message', xn, !1))
    : (vn =
        Ln in W('script')
          ? function (t) {
              sn.appendChild(W('script'))[Ln] = function () {
                sn.removeChild(this), Mn(t);
              };
            }
          : function (t) {
              setTimeout(kn(t), 0);
            }));
var Tn = (Ze = { set: yn, clear: bn }).clear;
le(
  { global: !0, bind: !0, enumerable: !0, forced: a.clearImmediate !== Tn },
  { clearImmediate: Tn }
);
var In,
  $n,
  Nn = Ze.set;
$n = 'function' == typeof Bun && Bun && 'string' == typeof Bun.version;
var Dn,
  Rn = a.Function,
  An =
    /MSIE .\./.test(ft) ||
    ($n &&
      ((Dn = a.Bun.version.split('.')).length < 3 ||
        (0 == Dn[0] && (Dn[1] < 3 || (3 == Dn[1] && 0 == Dn[2])))));
In = function (t, e) {
  var n = e ? 2 : 1;
  return An
    ? function (r, o) {
        var i = ln(arguments.length, 1) > n,
          a = h(r) ? r : Rn(r),
          c = i ? un(arguments, n) : [],
          s = i
            ? function () {
                tn(a, this, c);
              }
            : a;
        return e ? t(s, o) : t(s);
      }
    : t;
};
var Cn = a.setImmediate ? In(Nn, !1) : Nn;
le(
  { global: !0, bind: !0, enumerable: !0, forced: a.setImmediate !== Cn },
  { setImmediate: Cn }
);
var Hn = (function (t) {
  var e,
    n = Object.prototype,
    r = n.hasOwnProperty,
    o =
      Object.defineProperty ||
      function (t, e, n) {
        t[e] = n.value;
      },
    i = 'function' == typeof Symbol ? Symbol : {},
    a = i.iterator || '@@iterator',
    c = i.asyncIterator || '@@asyncIterator',
    s = i.toStringTag || '@@toStringTag';
  function u(t, e, n) {
    return (
      Object.defineProperty(t, e, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      t[e]
    );
  }
  try {
    u({}, '');
  } catch (t) {
    u = function (t, e, n) {
      return (t[e] = n);
    };
  }
  function l(t, e, n, r) {
    var i = e && e.prototype instanceof g ? e : g,
      a = Object.create(i.prototype),
      c = new k(r || []);
    return o(a, '_invoke', { value: j(t, n, c) }), a;
  }
  function f(t, e, n) {
    try {
      return { type: 'normal', arg: t.call(e, n) };
    } catch (t) {
      return { type: 'throw', arg: t };
    }
  }
  t.wrap = l;
  var p = 'suspendedStart',
    h = 'executing',
    d = 'completed',
    v = {};
  function g() {}
  function m() {}
  function y() {}
  var b = {};
  u(b, a, function () {
    return this;
  });
  var w = Object.getPrototypeOf,
    _ = w && w(w(x([])));
  _ && _ !== n && r.call(_, a) && (b = _);
  var E = (y.prototype = g.prototype = Object.create(b));
  function S(t) {
    ['next', 'throw', 'return'].forEach(function (e) {
      u(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function O(t, e) {
    function n(o, i, a, c) {
      var s = f(t[o], t, i);
      if ('throw' !== s.type) {
        var u = s.arg,
          l = u.value;
        return l && 'object' == typeof l && r.call(l, '__await')
          ? e.resolve(l.__await).then(
              function (t) {
                n('next', t, a, c);
              },
              function (t) {
                n('throw', t, a, c);
              }
            )
          : e.resolve(l).then(
              function (t) {
                (u.value = t), a(u);
              },
              function (t) {
                return n('throw', t, a, c);
              }
            );
      }
      c(s.arg);
    }
    var i;
    o(this, '_invoke', {
      value: function (t, r) {
        function o() {
          return new e(function (e, o) {
            n(t, r, e, o);
          });
        }
        return (i = i ? i.then(o, o) : o());
      },
    });
  }
  function j(t, e, n) {
    var r = p;
    return function (o, i) {
      if (r === h) throw new Error('Generator is already running');
      if (r === d) {
        if ('throw' === o) throw i;
        return P();
      }
      for (n.method = o, n.arg = i; ; ) {
        var a = n.delegate;
        if (a) {
          var c = F(a, n);
          if (c) {
            if (c === v) continue;
            return c;
          }
        }
        if ('next' === n.method) n.sent = n._sent = n.arg;
        else if ('throw' === n.method) {
          if (r === p) throw ((r = d), n.arg);
          n.dispatchException(n.arg);
        } else 'return' === n.method && n.abrupt('return', n.arg);
        r = h;
        var s = f(t, e, n);
        if ('normal' === s.type) {
          if (((r = n.done ? d : 'suspendedYield'), s.arg === v)) continue;
          return { value: s.arg, done: n.done };
        }
        'throw' === s.type && ((r = d), (n.method = 'throw'), (n.arg = s.arg));
      }
    };
  }
  function F(t, n) {
    var r = n.method,
      o = t.iterator[r];
    if (o === e)
      return (
        (n.delegate = null),
        ('throw' === r &&
          t.iterator.return &&
          ((n.method = 'return'),
          (n.arg = e),
          F(t, n),
          'throw' === n.method)) ||
          ('return' !== r &&
            ((n.method = 'throw'),
            (n.arg = new TypeError(
              "The iterator does not provide a '" + r + "' method"
            )))),
        v
      );
    var i = f(o, t.iterator, n.arg);
    if ('throw' === i.type)
      return (n.method = 'throw'), (n.arg = i.arg), (n.delegate = null), v;
    var a = i.arg;
    return a
      ? a.done
        ? ((n[t.resultName] = a.value),
          (n.next = t.nextLoc),
          'return' !== n.method && ((n.method = 'next'), (n.arg = e)),
          (n.delegate = null),
          v)
        : a
      : ((n.method = 'throw'),
        (n.arg = new TypeError('iterator result is not an object')),
        (n.delegate = null),
        v);
  }
  function L(t) {
    var e = { tryLoc: t[0] };
    1 in t && (e.catchLoc = t[1]),
      2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
      this.tryEntries.push(e);
  }
  function M(t) {
    var e = t.completion || {};
    (e.type = 'normal'), delete e.arg, (t.completion = e);
  }
  function k(t) {
    (this.tryEntries = [{ tryLoc: 'root' }]),
      t.forEach(L, this),
      this.reset(!0);
  }
  function x(t) {
    if (t) {
      var n = t[a];
      if (n) return n.call(t);
      if ('function' == typeof t.next) return t;
      if (!isNaN(t.length)) {
        var o = -1,
          i = function n() {
            for (; ++o < t.length; )
              if (r.call(t, o)) return (n.value = t[o]), (n.done = !1), n;
            return (n.value = e), (n.done = !0), n;
          };
        return (i.next = i);
      }
    }
    return { next: P };
  }
  function P() {
    return { value: e, done: !0 };
  }
  return (
    (m.prototype = y),
    o(E, 'constructor', { value: y, configurable: !0 }),
    o(y, 'constructor', { value: m, configurable: !0 }),
    (m.displayName = u(y, s, 'GeneratorFunction')),
    (t.isGeneratorFunction = function (t) {
      var e = 'function' == typeof t && t.constructor;
      return (
        !!e && (e === m || 'GeneratorFunction' === (e.displayName || e.name))
      );
    }),
    (t.mark = function (t) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(t, y)
          : ((t.__proto__ = y), u(t, s, 'GeneratorFunction')),
        (t.prototype = Object.create(E)),
        t
      );
    }),
    (t.awrap = function (t) {
      return { __await: t };
    }),
    S(O.prototype),
    u(O.prototype, c, function () {
      return this;
    }),
    (t.AsyncIterator = O),
    (t.async = function (e, n, r, o, i) {
      void 0 === i && (i = Promise);
      var a = new O(l(e, n, r, o), i);
      return t.isGeneratorFunction(n)
        ? a
        : a.next().then(function (t) {
            return t.done ? t.value : a.next();
          });
    }),
    S(E),
    u(E, s, 'Generator'),
    u(E, a, function () {
      return this;
    }),
    u(E, 'toString', function () {
      return '[object Generator]';
    }),
    (t.keys = function (t) {
      var e = Object(t),
        n = [];
      for (var r in e) n.push(r);
      return (
        n.reverse(),
        function t() {
          for (; n.length; ) {
            var r = n.pop();
            if (r in e) return (t.value = r), (t.done = !1), t;
          }
          return (t.done = !0), t;
        }
      );
    }),
    (t.values = x),
    (k.prototype = {
      constructor: k,
      reset: function (t) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = e),
          (this.done = !1),
          (this.delegate = null),
          (this.method = 'next'),
          (this.arg = e),
          this.tryEntries.forEach(M),
          !t)
        )
          for (var n in this)
            't' === n.charAt(0) &&
              r.call(this, n) &&
              !isNaN(+n.slice(1)) &&
              (this[n] = e);
      },
      stop: function () {
        this.done = !0;
        var t = this.tryEntries[0].completion;
        if ('throw' === t.type) throw t.arg;
        return this.rval;
      },
      dispatchException: function (t) {
        if (this.done) throw t;
        var n = this;
        function o(r, o) {
          return (
            (c.type = 'throw'),
            (c.arg = t),
            (n.next = r),
            o && ((n.method = 'next'), (n.arg = e)),
            !!o
          );
        }
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var a = this.tryEntries[i],
            c = a.completion;
          if ('root' === a.tryLoc) return o('end');
          if (a.tryLoc <= this.prev) {
            var s = r.call(a, 'catchLoc'),
              u = r.call(a, 'finallyLoc');
            if (s && u) {
              if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
              if (this.prev < a.finallyLoc) return o(a.finallyLoc);
            } else if (s) {
              if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
            } else {
              if (!u) throw new Error('try statement without catch or finally');
              if (this.prev < a.finallyLoc) return o(a.finallyLoc);
            }
          }
        }
      },
      abrupt: function (t, e) {
        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
          var o = this.tryEntries[n];
          if (
            o.tryLoc <= this.prev &&
            r.call(o, 'finallyLoc') &&
            this.prev < o.finallyLoc
          ) {
            var i = o;
            break;
          }
        }
        i &&
          ('break' === t || 'continue' === t) &&
          i.tryLoc <= e &&
          e <= i.finallyLoc &&
          (i = null);
        var a = i ? i.completion : {};
        return (
          (a.type = t),
          (a.arg = e),
          i
            ? ((this.method = 'next'), (this.next = i.finallyLoc), v)
            : this.complete(a)
        );
      },
      complete: function (t, e) {
        if ('throw' === t.type) throw t.arg;
        return (
          'break' === t.type || 'continue' === t.type
            ? (this.next = t.arg)
            : 'return' === t.type
            ? ((this.rval = this.arg = t.arg),
              (this.method = 'return'),
              (this.next = 'end'))
            : 'normal' === t.type && e && (this.next = e),
          v
        );
      },
      finish: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var n = this.tryEntries[e];
          if (n.finallyLoc === t)
            return this.complete(n.completion, n.afterLoc), M(n), v;
        }
      },
      catch: function (t) {
        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
          var n = this.tryEntries[e];
          if (n.tryLoc === t) {
            var r = n.completion;
            if ('throw' === r.type) {
              var o = r.arg;
              M(n);
            }
            return o;
          }
        }
        throw new Error('illegal catch attempt');
      },
      delegateYield: function (t, n, r) {
        return (
          (this.delegate = { iterator: x(t), resultName: n, nextLoc: r }),
          'next' === this.method && (this.arg = e),
          v
        );
      },
    }),
    t
  );
})({});
try {
  regeneratorRuntime = Hn;
} catch (t) {
  'object' == typeof globalThis
    ? (globalThis.regeneratorRuntime = Hn)
    : Function('r', 'regeneratorRuntime = r')(Hn);
}
const zn = 'https://forkify-api.herokuapp.com/api/v2/recipes',
  qn = async function (t) {
    try {
      const n = await Promise.race([
          fetch(t),
          ((e = 10),
          new Promise(function (t, n) {
            setTimeout(function () {
              n(new Error(`Request took too long! Timeout after ${e} second`));
            }, 1e3 * e);
          })),
        ]),
        r = await n.json();
      if (!n.ok) throw new Error(`${r.message} (${n.status})`);
      return r;
    } catch (t) {
      throw t;
    }
    var e;
  },
  Gn = { recipe: {}, search: { query: '', results: [] } };
var Un, Bn, Wn, Yn;
(Un = new URL(i('27Lyk').resolve('eyyUD'), import.meta.url).toString()),
  (Fraction = function (t, e) {
    if (void 0 !== t && e)
      'number' == typeof t && 'number' == typeof e
        ? ((this.numerator = t), (this.denominator = e))
        : 'string' == typeof t &&
          'string' == typeof e &&
          ((this.numerator = parseInt(t)), (this.denominator = parseInt(e)));
    else if (void 0 === e)
      if (((num = t), 'number' == typeof num))
        (this.numerator = num), (this.denominator = 1);
      else if ('string' == typeof num) {
        var n,
          r,
          o = num.split(' ');
        if (
          (o[0] && (n = o[0]),
          o[1] && (r = o[1]),
          n % 1 == 0 && r && r.match('/'))
        )
          return new Fraction(n).add(new Fraction(r));
        if (!n || r) return;
        if ('string' == typeof n && n.match('/')) {
          var i = n.split('/');
          (this.numerator = i[0]), (this.denominator = i[1]);
        } else {
          if ('string' == typeof n && n.match('.'))
            return new Fraction(parseFloat(n));
          (this.numerator = parseInt(n)), (this.denominator = 1);
        }
      }
    this.normalize();
  }),
  (Fraction.prototype.clone = function () {
    return new Fraction(this.numerator, this.denominator);
  }),
  (Fraction.prototype.toString = function () {
    if ('NaN' === this.denominator) return 'NaN';
    var t =
        this.numerator / this.denominator > 0
          ? Math.floor(this.numerator / this.denominator)
          : Math.ceil(this.numerator / this.denominator),
      e = this.numerator % this.denominator,
      n = this.denominator,
      r = [];
    return (
      0 != t && r.push(t),
      0 != e && r.push((0 === t ? e : Math.abs(e)) + '/' + n),
      r.length > 0 ? r.join(' ') : 0
    );
  }),
  (Fraction.prototype.rescale = function (t) {
    return (this.numerator *= t), (this.denominator *= t), this;
  }),
  (Fraction.prototype.add = function (t) {
    var e = this.clone();
    return (
      (t = t instanceof Fraction ? t.clone() : new Fraction(t)),
      (td = e.denominator),
      e.rescale(t.denominator),
      t.rescale(td),
      (e.numerator += t.numerator),
      e.normalize()
    );
  }),
  (Fraction.prototype.subtract = function (t) {
    var e = this.clone();
    return (
      (t = t instanceof Fraction ? t.clone() : new Fraction(t)),
      (td = e.denominator),
      e.rescale(t.denominator),
      t.rescale(td),
      (e.numerator -= t.numerator),
      e.normalize()
    );
  }),
  (Fraction.prototype.multiply = function (t) {
    var e = this.clone();
    if (t instanceof Fraction)
      (e.numerator *= t.numerator), (e.denominator *= t.denominator);
    else {
      if ('number' != typeof t) return e.multiply(new Fraction(t));
      e.numerator *= t;
    }
    return e.normalize();
  }),
  (Fraction.prototype.divide = function (t) {
    var e = this.clone();
    if (t instanceof Fraction)
      (e.numerator *= t.denominator), (e.denominator *= t.numerator);
    else {
      if ('number' != typeof t) return e.divide(new Fraction(t));
      e.denominator *= t;
    }
    return e.normalize();
  }),
  (Fraction.prototype.equals = function (t) {
    t instanceof Fraction || (t = new Fraction(t));
    var e = this.clone().normalize();
    t = t.clone().normalize();
    return e.numerator === t.numerator && e.denominator === t.denominator;
  }),
  (Fraction.prototype.normalize =
    ((Wn = function (t) {
      return (
        'number' == typeof t &&
        ((t > 0 && t % 1 > 0 && t % 1 < 1) ||
          (t < 0 && t % -1 < 0 && t % -1 > -1))
      );
    }),
    (Yn = function (t, e) {
      if (e) {
        var n = Math.pow(10, e);
        return Math.round(t * n) / n;
      }
      return Math.round(t);
    }),
    function () {
      if (Wn(this.denominator)) {
        var t = Yn(this.denominator, 9),
          e = Math.pow(10, t.toString().split('.')[1].length);
        (this.denominator = Math.round(this.denominator * e)),
          (this.numerator *= e);
      }
      Wn(this.numerator) &&
        ((t = Yn(this.numerator, 9)),
        (e = Math.pow(10, t.toString().split('.')[1].length)),
        (this.numerator = Math.round(this.numerator * e)),
        (this.denominator *= e));
      var n = Fraction.gcf(this.numerator, this.denominator);
      return (
        (this.numerator /= n),
        (this.denominator /= n),
        ((this.numerator < 0 && this.denominator < 0) ||
          (this.numerator > 0 && this.denominator < 0)) &&
          ((this.numerator *= -1), (this.denominator *= -1)),
        this
      );
    })),
  (Fraction.gcf = function (t, e) {
    var n = [],
      r = Fraction.primeFactors(t),
      o = Fraction.primeFactors(e);
    return (
      r.forEach(function (t) {
        var e = o.indexOf(t);
        e >= 0 && (n.push(t), o.splice(e, 1));
      }),
      0 === n.length
        ? 1
        : (function () {
            var t,
              e = n[0];
            for (t = 1; t < n.length; t++) e *= n[t];
            return e;
          })()
    );
  }),
  (Fraction.primeFactors = function (t) {
    for (var e = Math.abs(t), n = [], r = 2; r * r <= e; )
      e % r == 0 ? (n.push(r), (e /= r)) : r++;
    return 1 != e && n.push(e), n;
  }),
  (Bn = Fraction);
var Qn = new (class {
  #t = document.querySelector('.recipe');
  #e;
  #n = 'We could not find that recipe. Please try another one!!!';
  #r = '';
  render(t) {
    this.#e = t;
    const e = this.#o();
    this.#i(), this.#t.insertAdjacentHTML('afterbegin', e);
  }
  #i() {
    this.#t.innerHTML = '';
  }
  renderMessage(t = this.#r) {
    const e = `\n    <div class="error">\n    <div>\n      <svg>\n        <use href="${n(
      Un
    )}#icon-smile"></use>\n      </svg>\n    </div>\n    <p>${t}</p>\n  </div>`;
    this.#i(), this.#t.insertAdjacentHTML('afterbegin', e);
  }
  addHandlerRender(t) {
    ['hashchange', 'load'].forEach(e => window.addEventListener(e, t));
  }
  renderSpinner = function () {
    const t = `\n    <div class="spinner">\n    <svg>\n    <use href="${n(
      Un
    )}#icon-loader"></use>\n    </svg>\n    </div>\n    `;
    this.#i(), this.#t.insertAdjacentHTML('afterbegin', t);
  };
  renderError(t = this.#n) {
    const e = `\n    <div class="error">\n    <div>\n      <svg>\n        <use href="${n(
      Un
    )}#icon-alert-triangle"></use>\n      </svg>\n    </div>\n    <p>${t}</p>\n  </div>`;
    this.#i(), this.#t.insertAdjacentHTML('afterbegin', e);
  }
  #o() {
    return `\n    <figure class="recipe__fig">\n    <img src="${
      this.#e.image
    }" alt="${
      this.#e.title
    }" class="recipe__img" />\n    <h1 class="recipe__title">\n      <span>${
      this.#e.title
    }</span>\n    </h1>\n  </figure>\n\n  <div class="recipe__details">\n    <div class="recipe__info">\n      <svg class="recipe__info-icon">\n        <use href="${n(
      Un
    )}#icon-clock"></use>\n      </svg>\n      <span class="recipe__info-data recipe__info-data--minutes">${
      this.#e.cookingTime
    }</span>\n      <span class="recipe__info-text">minutes</span>\n    </div>\n    <div class="recipe__info">\n      <svg class="recipe__info-icon">\n        <use href="${n(
      Un
    )}#icon-users"></use>\n      </svg>\n      <span class="recipe__info-data recipe__info-data--people">4</span>\n      <span class="recipe__info-text">${
      this.#e.servings
    }</span>\n\n      <div class="recipe__info-buttons">\n        <button class="btn--tiny btn--increase-servings">\n          <svg>\n            <use href="${n(
      Un
    )}#icon-minus-circle"></use>\n          </svg>\n        </button>\n        <button class="btn--tiny btn--increase-servings">\n          <svg>\n            <use href="${n(
      Un
    )}#icon-plus-circle"></use>\n          </svg>\n        </button>\n      </div>\n    </div>\n\n    <div class="recipe__user-generated">\n      <svg>\n        <use href="${n(
      Un
    )}#icon-user"></use>\n      </svg>\n    </div>\n    <button class="btn--round">\n      <svg class="">\n        <use href="${n(
      Un
    )}#icon-bookmark-fill"></use>\n      </svg>\n    </button>\n  </div>\n\n  <div class="recipe__ingredients">\n    <h2 class="heading--2">Recipe ingredients</h2>\n    <ul class="recipe__ingredient-list">\n    ${this.#e.ingredients
      .map(this.#a)
      .join(
        ''
      )}\n    </ul>\n  </div>\n\n  <div class="recipe__directions">\n    <h2 class="heading--2">How to cook it</h2>\n    <p class="recipe__directions-text">\n      This recipe was carefully designed and tested by\n      <span class="recipe__publisher">${
      this.#e.publisher
    }</span>. Please check out\n      directions at their website.\n    </p>\n    <a\n      class="btn--small recipe__btn"\n      href="${
      this.#e.sourceUrl
    }"\n      target="_blank"\n    >\n      <span>Directions</span>\n      <svg class="search__icon">\n        <use href="src/img/icons.svg#icon-arrow-right"></use>\n      </svg>\n    </a>\n  </div>\n    `;
  }
  #a(t) {
    return `\n    <li class="recipe__ingredient">\n      <svg class="recipe__icon">\n        <use href="${n(
      Un
    )}#icon-check"></use>\n      </svg>\n      <div class="recipe__quantity">${
      t.quantity ? new Bn(t.quantity).toString() : ''
    }</div>\n      <div class="recipe__description">\n        <span class="recipe__unit">${
      t.unit
    }</span>\n        ${t.description}\n      </div>\n    </li>\n    `;
  }
})();
var Vn = new (class {
  #c = document.querySelector('.search');
  getQueary() {
    const t = this.#c.querySelector('.search__field').value;
    return this.#s(), t;
  }
  #s() {
    this.#c.querySelector('.search__field').value = '';
  }
  addHandlerSearch(t) {
    this.#c.addEventListener('submit', function (e) {
      e.preventDefault(), t();
    });
  }
})();
const Jn = async function () {
    try {
      const t = window.location.hash.slice(1);
      if (!t) return;
      Qn.renderSpinner(),
        await (async function (t) {
          try {
            const e = await qn(`${zn}/${t}`),
              { recipe: n } = e.data;
            Gn.recipe = {
              id: n.id,
              title: n.title,
              publisher: n.publisher,
              sourceUrl: n.source_url,
              image: n.image_url,
              servings: n.servings,
              cookingTime: n.cooking_time,
              ingredients: n.ingredients,
            };
          } catch (t) {
            throw (console.error(`${t} 💥💥💥💥💥`), t);
          }
        })(t),
        Qn.render(Gn.recipe);
    } catch (t) {
      Qn.renderError();
    }
  },
  Kn = async function () {
    try {
      const t = Vn.getQueary();
      if (!t) return;
      await (async function (t) {
        try {
          const e = await qn(`${zn}?search=${t}`);
          Gn.search.results = e.data.recipes.map(t => ({
            id: t.id,
            title: t.title,
            publisher: t.publisher,
            image: t.image_url,
          }));
        } catch (t) {
          throw (console.error(`${t} 💥💥💥💥💥`), t);
        }
      })(t),
        console.log(Gn.search.results);
    } catch (t) {
      console.log(t);
    }
  };
Qn.addHandlerRender(Jn), Vn.addHandlerSearch(Kn);
//# sourceMappingURL=index.e709d607.js.map
