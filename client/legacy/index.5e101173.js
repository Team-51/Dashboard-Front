import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, f as space, g as element, t as text, h as create_component, q as query_selector_all, j as detach_dev, k as claim_space, l as claim_element, m as children, n as claim_text, o as claim_component, p as attr_dev, r as add_location, u as insert_dev, v as append_dev, w as mount_component, x as noop, y as transition_in, z as transition_out, A as destroy_component, B as validate_slots } from './client.b884e11a.js';
import { C as Carousel } from './Carousel.df6b3814.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/index.svelte";

function create_fragment(ctx) {
  var t0;
  var h10;
  var t1;
  var t2;
  var carousel;
  var t3;
  var h11;
  var t4;
  var t5;
  var h12;
  var t6;
  var current;
  carousel = new Carousel({
    $$inline: true
  });
  var block = {
    c: function create() {
      t0 = space();
      h10 = element("h1");
      t1 = text("Based on your Watchlists");
      t2 = space();
      create_component(carousel.$$.fragment);
      t3 = space();
      h11 = element("h1");
      t4 = text("New Releases");
      t5 = space();
      h12 = element("h1");
      t6 = text("Trending");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-uvo3qh\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      h10 = claim_element(nodes, "H1", {
        class: true
      });
      var h10_nodes = children(h10);
      t1 = claim_text(h10_nodes, "Based on your Watchlists");
      h10_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      claim_component(carousel.$$.fragment, nodes);
      t3 = claim_space(nodes);
      h11 = claim_element(nodes, "H1", {
        class: true
      });
      var h11_nodes = children(h11);
      t4 = claim_text(h11_nodes, "New Releases");
      h11_nodes.forEach(detach_dev);
      t5 = claim_space(nodes);
      h12 = claim_element(nodes, "H1", {
        class: true
      });
      var h12_nodes = children(h12);
      t6 = claim_text(h12_nodes, "Trending");
      h12_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "\n        For You\n    ";
      attr_dev(h10, "class", "mt-6  text-3xl font-extrabold text-gray-600");
      add_location(h10, file, 9, 0, 148);
      attr_dev(h11, "class", "mt-6  text-3xl font-extrabold text-gray-600");
      add_location(h11, file, 14, 0, 261);
      attr_dev(h12, "class", "mt-6  text-3xl font-extrabold text-gray-600");
      add_location(h12, file, 19, 0, 367);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, h10, anchor);
      append_dev(h10, t1);
      insert_dev(target, t2, anchor);
      mount_component(carousel, target, anchor);
      insert_dev(target, t3, anchor);
      insert_dev(target, h11, anchor);
      append_dev(h11, t4);
      insert_dev(target, t5, anchor);
      insert_dev(target, h12, anchor);
      append_dev(h12, t6);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(carousel.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(carousel.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(h10);
      if (detaching) detach_dev(t2);
      destroy_component(carousel, detaching);
      if (detaching) detach_dev(t3);
      if (detaching) detach_dev(h11);
      if (detaching) detach_dev(t5);
      if (detaching) detach_dev(h12);
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
  validate_slots("Routes", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Routes> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      Carousel: Carousel
    };
  };

  return [];
}

var Routes = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Routes, _SvelteComponentDev);

  var _super = _createSuper(Routes);

  function Routes(options) {
    var _this;

    _classCallCheck(this, Routes);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Routes",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Routes;
}(SvelteComponentDev);

export default Routes;
