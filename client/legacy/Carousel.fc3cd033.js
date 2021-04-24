import { C as identity, _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, D as _createClass, S as SvelteComponentDev, E as validate_each_argument, B as validate_slots, F as onMount, G as regenerator, H as onDestroy, g as element, f as space, l as claim_element, m as children, j as detach_dev, k as claim_space, p as attr_dev, I as set_style, r as add_location, u as insert_dev, v as append_dev, J as _slicedToArray, x as noop, K as destroy_each } from './client.0b81d8bd.js';
import { _ as _asyncToGenerator } from './asyncToGenerator.5229e80b.js';

function fade(node) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$delay = _ref2.delay,
      delay = _ref2$delay === void 0 ? 0 : _ref2$delay,
      _ref2$duration = _ref2.duration,
      duration = _ref2$duration === void 0 ? 400 : _ref2$duration,
      _ref2$easing = _ref2.easing,
      easing = _ref2$easing === void 0 ? identity : _ref2$easing;

  var o = +getComputedStyle(node).opacity;
  return {
    delay: delay,
    duration: duration,
    easing: easing,
    css: function css(t) {
      return "opacity: ".concat(t * o);
    }
  };
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/components/Carousel.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[2] = list[i];
  child_ctx[4] = i;
  return child_ctx;
} // (22:6) {#each images as item, i}


function create_each_block(ctx) {
  var li;
  var div;
  var img;
  var img_src_value;
  var t;
  var block = {
    c: function create() {
      li = element("li");
      div = element("div");
      img = element("img");
      t = space();
      this.h();
    },
    l: function claim(nodes) {
      li = claim_element(nodes, "LI", {
        class: true
      });
      var li_nodes = children(li);
      div = claim_element(li_nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      img = claim_element(div_nodes, "IMG", {
        src: true,
        alt: true,
        style: true
      });
      div_nodes.forEach(detach_dev);
      t = claim_space(li_nodes);
      li_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      if (img.src !== (img_src_value =
      /*item*/
      ctx[2].img)) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", /*i*/
      ctx[4]);
      set_style(img, "width", "100%");
      set_style(img, "height", "200px");
      set_style(img, "object-fit", "cover");
      add_location(img, file, 24, 10, 594);
      attr_dev(div, "class", "mx-2 my-2");
      add_location(div, file, 23, 8, 560);
      attr_dev(li, "class", "splide__slide");
      add_location(li, file, 22, 6, 524);
    },
    m: function mount(target, anchor) {
      insert_dev(target, li, anchor);
      append_dev(li, div);
      append_dev(div, img);
      append_dev(li, t);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*images*/
      1 && img.src !== (img_src_value =
      /*item*/
      ctx[2].img)) {
        attr_dev(img, "src", img_src_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(li);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(22:6) {#each images as item, i}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var div1;
  var div0;
  var ul;
  var each_value =
  /*images*/
  ctx[0];
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");
      ul = element("ul");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      ul = claim_element(div0_nodes, "UL", {
        class: true
      });
      var ul_nodes = children(ul);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(ul_nodes);
      }

      ul_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(ul, "class", "splide__list");
      add_location(ul, file, 20, 2, 460);
      attr_dev(div0, "class", "splide__track");
      add_location(div0, file, 19, 1, 430);
      attr_dev(div1, "class", "splide");
      add_location(div1, file, 18, 0, 408);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, div0);
      append_dev(div0, ul);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(ul, null);
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*images*/
      1) {
        each_value =
        /*images*/
        ctx[0];
        validate_each_argument(each_value);

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);
          } else {
            each_blocks[_i4] = create_each_block(child_ctx);

            each_blocks[_i4].c();

            each_blocks[_i4].m(ul, null);
          }
        }

        for (; _i4 < each_blocks.length; _i4 += 1) {
          each_blocks[_i4].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div1);
      destroy_each(each_blocks, detaching);
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

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Carousel", slots, []);
  var images = $$props.images;
  var slider;
  onMount( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
    var _yield$import, Splide;

    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.all([import('./splide.esm.8309b659.js'), __inject_styles(["client-d6828986.css"])]).then(function(x) { return x[0]; }).then(function (n) { return n.s; });

          case 2:
            _yield$import = _context.sent;
            Splide = _yield$import.default;
            new Splide.default(".splide", {
              type: "loop",
              perPage: 4,
              focus: "center",
              autoplay: true,
              interval: 1000
            }).mount();

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
  var writable_props = ["images"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Carousel> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("images" in $$props) $$invalidate(0, images = $$props.images);
  };

  $$self.$capture_state = function () {
    return {
      onDestroy: onDestroy,
      onMount: onMount,
      fade: fade,
      images: images,
      slider: slider
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("images" in $$props) $$invalidate(0, images = $$props.images);
    if ("slider" in $$props) slider = $$props.slider;
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [images];
}

var Carousel = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Carousel, _SvelteComponentDev);

  var _super = _createSuper(Carousel);

  function Carousel(options) {
    var _this;

    _classCallCheck(this, Carousel);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      images: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Carousel",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*images*/
    ctx[0] === undefined && !("images" in props)) {
      console.warn("<Carousel> was created without expected prop 'images'");
    }

    return _this;
  }

  _createClass(Carousel, [{
    key: "images",
    get: function get() {
      throw new Error("<Carousel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Carousel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Carousel;
}(SvelteComponentDev);

export { Carousel as C };

import __inject_styles from './inject_styles.fe622066.js';