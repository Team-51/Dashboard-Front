import { C as identity, _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, D as validate_each_argument, B as validate_slots, E as onMount, F as onDestroy, g as element, f as space, l as claim_element, m as children, k as claim_space, j as detach_dev, p as attr_dev, G as set_style, r as add_location, u as insert_dev, v as append_dev, x as noop, H as _slicedToArray, I as destroy_each } from './client.b884e11a.js';

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
} // (64:6) {#each images as item,i }


function create_each_block(ctx) {
  var div;
  var img;
  var img_src_value;
  var t;
  var block = {
    c: function create() {
      div = element("div");
      img = element("img");
      t = space();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      img = claim_element(div_nodes, "IMG", {
        src: true,
        alt: true,
        style: true
      });
      t = claim_space(div_nodes);
      div_nodes.forEach(detach_dev);
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
      add_location(img, file, 65, 12, 1564);
      attr_dev(div, "class", "mx-2 my-2");
      add_location(div, file, 64, 10, 1526);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, img);
      append_dev(div, t);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(64:6) {#each images as item,i }",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var div;
  var t0;
  var a0;
  var i0;
  var t1;
  var a1;
  var i1;
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
      div = element("div");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t0 = space();
      a0 = element("a");
      i0 = element("i");
      t1 = space();
      a1 = element("a");
      i1 = element("i");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(div_nodes);
      }

      div_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      a0 = claim_element(nodes, "A", {
        id: true,
        class: true
      });
      var a0_nodes = children(a0);
      i0 = claim_element(a0_nodes, "I", {
        class: true
      });
      children(i0).forEach(detach_dev);
      a0_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);
      a1 = claim_element(nodes, "A", {
        id: true,
        class: true
      });
      var a1_nodes = children(a1);
      i1 = claim_element(a1_nodes, "I", {
        class: true
      });
      children(i1).forEach(detach_dev);
      a1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "my-slider");
      add_location(div, file, 62, 4, 1458);
      attr_dev(i0, "class", "fa fa-chevron-left");
      add_location(i0, file, 69, 69, 1763);
      attr_dev(a0, "id", "prev-carousel");
      attr_dev(a0, "class", "z-10 left carousel-control-left svelte-klqk0c");
      add_location(a0, file, 69, 6, 1700);
      attr_dev(i1, "class", "fa fa-chevron-right");
      add_location(i1, file, 70, 71, 1873);
      attr_dev(a1, "id", "next-carousel");
      attr_dev(a1, "class", "z-10 right carousel-control-right svelte-klqk0c");
      add_location(a1, file, 70, 6, 1808);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(div, null);
      }

      insert_dev(target, t0, anchor);
      insert_dev(target, a0, anchor);
      append_dev(a0, i0);
      insert_dev(target, t1, anchor);
      insert_dev(target, a1, anchor);
      append_dev(a1, i1);
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

            each_blocks[_i4].m(div, null);
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
      if (detaching) detach_dev(div);
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(a0);
      if (detaching) detach_dev(t1);
      if (detaching) detach_dev(a1);
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
  var images = [{
    img: "/images/sample_1.jpg",
    text1: "",
    text2: ""
  }, {
    img: "/images/sample_3.jpg",
    text1: "",
    text2: ""
  }, {
    img: "/images/sample_2.jpg",
    text1: "",
    text2: ""
  }, {
    img: "/images/sample_1.jpg",
    text1: "",
    text2: ""
  }, {
    img: "/images/sample_3.jpg",
    text1: "",
    text2: ""
  }, {
    img: "/images/sample_2.jpg",
    text1: "",
    text2: ""
  }, {
    img: "/images/sample_1.jpg",
    text1: "",
    text2: ""
  }];
  var slider = "";
  onMount(function () {
    if (slider) slider.rebuild();else {
      slider = tns({
        container: ".my-slider",
        autoHeight: true,
        items: 4,
        swipeAngle: false,
        speed: 600,
        autoplayTimeout: 1000,
        nav: false,
        autoplay: true,
        autoplayButtonOutput: false,
        prevButton: document.getElementById("prev-carousel"),
        nextButton: document.getElementById("next-carousel"),
        mouseDrag: true
      });
    }
  });
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Carousel> was created with unknown prop '".concat(key, "'"));
  });

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
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Carousel",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Carousel;
}(SvelteComponentDev);

export { Carousel as C };
