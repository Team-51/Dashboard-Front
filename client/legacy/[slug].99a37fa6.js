import { N as regenerator, _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, K as _createClass, S as SvelteComponentDev, s as safe_not_equal, f as space, g as element, t as text, q as query_selector_all, j as detach_dev, k as claim_space, l as claim_element, m as children, n as claim_text, r as add_location, p as attr_dev, u as insert_dev, v as append_dev, H as _slicedToArray, M as set_data_dev, x as noop, B as validate_slots } from './client.b884e11a.js';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/blog/[slug].svelte";

function create_fragment(ctx) {
  var title_value;
  var t0;
  var h1;
  var t1_value =
  /*post*/
  ctx[0].title + "";
  var t1;
  var t2;
  var div;
  var raw_value =
  /*post*/
  ctx[0].html + "";
  document.title = title_value =
  /*post*/
  ctx[0].title;
  var block = {
    c: function create() {
      t0 = space();
      h1 = element("h1");
      t1 = text(t1_value);
      t2 = space();
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1uty71u\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      h1 = claim_element(nodes, "H1", {});
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, t1_value);
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      add_location(h1, file, 59, 0, 1210);
      attr_dev(div, "class", "content svelte-10luz6y");
      add_location(div, file, 61, 0, 1233);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, h1, anchor);
      append_dev(h1, t1);
      insert_dev(target, t2, anchor);
      insert_dev(target, div, anchor);
      div.innerHTML = raw_value;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*post*/
      1 && title_value !== (title_value =
      /*post*/
      ctx[0].title)) {
        document.title = title_value;
      }

      if (dirty &
      /*post*/
      1 && t1_value !== (t1_value =
      /*post*/
      ctx[0].title + "")) set_data_dev(t1, t1_value);
      if (dirty &
      /*post*/
      1 && raw_value !== (raw_value =
      /*post*/
      ctx[0].html + "")) div.innerHTML = raw_value;
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(h1);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function preload(_x) {
  return _preload.apply(this, arguments);
}

function _preload() {
  _preload = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(_ref3) {
    var params, res, data;
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = _ref3.params;
            _context.next = 3;
            return this.fetch("blog/".concat(params.slug, ".json"));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            data = _context.sent;

            if (!(res.status === 200)) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", {
              post: data
            });

          case 11:
            this.error(res.status, data.message);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _preload.apply(this, arguments);
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("U5Bslugu5D", slots, []);
  var post = $$props.post;
  var writable_props = ["post"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<U5Bslugu5D> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("post" in $$props) $$invalidate(0, post = $$props.post);
  };

  $$self.$capture_state = function () {
    return {
      preload: preload,
      post: post
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("post" in $$props) $$invalidate(0, post = $$props.post);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [post];
}

var U5Bslugu5D = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(U5Bslugu5D, _SvelteComponentDev);

  var _super = _createSuper(U5Bslugu5D);

  function U5Bslugu5D(options) {
    var _this;

    _classCallCheck(this, U5Bslugu5D);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      post: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "U5Bslugu5D",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*post*/
    ctx[0] === undefined && !("post" in props)) {
      console.warn("<U5Bslugu5D> was created without expected prop 'post'");
    }

    return _this;
  }

  _createClass(U5Bslugu5D, [{
    key: "post",
    get: function get() {
      throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return U5Bslugu5D;
}(SvelteComponentDev);

export default U5Bslugu5D;
export { preload };
