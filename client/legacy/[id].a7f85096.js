import { r as regenerator, _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, d as init, e as _assertThisInitialized, f as dispatch_dev, S as SvelteComponentDev, v as validate_each_argument, s as safe_not_equal, k as element, l as space, C as text, m as claim_element, n as children, p as detach_dev, q as claim_space, F as claim_text, t as attr_dev, w as add_location, x as insert_dev, y as append_dev, A as noop, z as _slicedToArray, B as destroy_each, h as validate_slots } from './client.fb8cb239.js';
import { _ as _asyncToGenerator } from './asyncToGenerator.5229e80b.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/list/[id].svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[0] = list[i];
  return child_ctx;
} // (59:4) {#each jsonData as  title}


function create_each_block(ctx) {
  var div4;
  var div3;
  var div2;
  var div0;
  var img;
  var img_src_value;
  var t0;
  var div1;
  var h3;
  var t1_value =
  /*title*/
  ctx[0].name + "";
  var t1;
  var t2;
  var p0;
  var t3_value =
  /*title*/
  ctx[0].desc1 + "";
  var t3;
  var t4;
  var p1;
  var t5_value =
  /*title*/
  ctx[0].desc2 + "";
  var t5;
  var t6;
  var block = {
    c: function create() {
      div4 = element("div");
      div3 = element("div");
      div2 = element("div");
      div0 = element("div");
      img = element("img");
      t0 = space();
      div1 = element("div");
      h3 = element("h3");
      t1 = text(t1_value);
      t2 = space();
      p0 = element("p");
      t3 = text(t3_value);
      t4 = space();
      p1 = element("p");
      t5 = text(t5_value);
      t6 = space();
      this.h();
    },
    l: function claim(nodes) {
      div4 = claim_element(nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      div3 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      img = claim_element(div0_nodes, "IMG", {
        src: true,
        width: true,
        alt: true
      });
      div0_nodes.forEach(detach_dev);
      t0 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      h3 = claim_element(div1_nodes, "H3", {
        class: true
      });
      var h3_nodes = children(h3);
      t1 = claim_text(h3_nodes, t1_value);
      h3_nodes.forEach(detach_dev);
      t2 = claim_space(div1_nodes);
      p0 = claim_element(div1_nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      t3 = claim_text(p0_nodes, t3_value);
      p0_nodes.forEach(detach_dev);
      t4 = claim_space(div1_nodes);
      p1 = claim_element(div1_nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      t5 = claim_text(p1_nodes, t5_value);
      p1_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t6 = claim_space(div4_nodes);
      div4_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      if (img.src !== (img_src_value =
      /*title*/
      ctx[0].img)) attr_dev(img, "src", img_src_value);
      attr_dev(img, "width", "200px");
      attr_dev(img, "alt", 1);
      add_location(img, file, 63, 24, 3804);
      attr_dev(div0, "class", "p-1 bg-blue-200 ");
      add_location(div0, file, 62, 20, 3749);
      attr_dev(h3, "class", "mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl");
      add_location(h3, file, 70, 24, 4037);
      attr_dev(p0, "class", "text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal leading-5");
      add_location(p0, file, 73, 24, 4213);
      attr_dev(p1, "class", "text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal leading-5");
      add_location(p1, file, 76, 24, 4400);
      attr_dev(div1, "class", "ml-6");
      add_location(div1, file, 69, 20, 3994);
      attr_dev(div2, "class", "flex items-center");
      add_location(div2, file, 61, 16, 3697);
      attr_dev(div3, "class", "flex items-center justify-between w-full sm:w-full mb-8");
      add_location(div3, file, 60, 12, 3611);
      attr_dev(div4, "class", "bg-white dark:bg-gray-800 rounded shadow p-6");
      add_location(div4, file, 59, 8, 3540);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div4, anchor);
      append_dev(div4, div3);
      append_dev(div3, div2);
      append_dev(div2, div0);
      append_dev(div0, img);
      append_dev(div2, t0);
      append_dev(div2, div1);
      append_dev(div1, h3);
      append_dev(h3, t1);
      append_dev(div1, t2);
      append_dev(div1, p0);
      append_dev(p0, t3);
      append_dev(div1, t4);
      append_dev(div1, p1);
      append_dev(p1, t5);
      append_dev(div4, t6);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div4);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(59:4) {#each jsonData as  title}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var div;
  var each_value = jsonData;
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
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "grid xl:grid-cols-1 my-4 gap-4  mx-10");
      add_location(div, file, 55, 0, 3446);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(div, null);
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*jsonData*/
      0) {
        each_value = jsonData;
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

var getData = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee() {
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", [{
              img: "./images/sample_1.jpg",
              name: "Jumanji",
              desc1: " 12A | 2h 3min | Action, Adventure, Comedy | 11 December 2019 (UK)",
              desc2: "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game."
            }, {
              img: "./images/sample_1.jpg",
              name: "Jumanji",
              desc1: " 12A | 2h 3min | Action, Adventure, Comedy | 11 December 2019 (UK)",
              desc2: "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game."
            }, {
              img: "./images/sample_1.jpg",
              name: "Jumanji",
              desc1: " 12A | 2h 3min | Action, Adventure, Comedy | 11 December 2019 (UK)",
              desc2: "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game."
            }, {
              img: "./images/sample_1.jpg",
              name: "Jumanji",
              desc1: " 12A | 2h 3min | Action, Adventure, Comedy | 11 December 2019 (UK)",
              desc2: "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game."
            }, {
              img: "./images/sample_1.jpg",
              name: "Jumanji",
              desc1: " 12A | 2h 3min | Action, Adventure, Comedy | 11 December 2019 (UK)",
              desc2: "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game."
            }, {
              img: "./images/sample_1.jpg",
              name: "Jumanji",
              desc1: " 12A | 2h 3min | Action, Adventure, Comedy | 11 December 2019 (UK)",
              desc2: "In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game."
            }]);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getData() {
    return _ref3.apply(this, arguments);
  };
}();

var jsonData;

function preload(_x, _x2) {
  return _preload.apply(this, arguments);
}

function _preload() {
  _preload = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee2(page, session) {
    return regenerator.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // the `slug` parameter is available because this file
            // is called [slug].svelte
            page.params.id;
            _context2.next = 3;
            return getData();

          case 3:
            jsonData = _context2.sent;

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _preload.apply(this, arguments);
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("U5Bidu5D", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<U5Bidu5D> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      getData: getData,
      jsonData: jsonData,
      preload: preload
    };
  };

  return [];
}

var U5Bidu5D = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(U5Bidu5D, _SvelteComponentDev);

  var _super = _createSuper(U5Bidu5D);

  function U5Bidu5D(options) {
    var _this;

    _classCallCheck(this, U5Bidu5D);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "U5Bidu5D",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return U5Bidu5D;
}(SvelteComponentDev);

export default U5Bidu5D;
export { preload };
