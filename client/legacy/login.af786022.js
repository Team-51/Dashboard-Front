import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, d as init, e as _assertThisInitialized, f as dispatch_dev, g as _createClass, S as SvelteComponentDev, s as safe_not_equal, k as element, l as space, C as text, L as svg_element, E as query_selector_all, m as claim_element, n as children, p as detach_dev, q as claim_space, F as claim_text, t as attr_dev, w as add_location, y as append_dev, x as insert_dev, A as noop, h as validate_slots } from './client.fb8cb239.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/login.svelte";

function create_fragment(ctx) {
  var meta;
  var html;
  var t0;
  var div9;
  var div8;
  var div0;
  var h2;
  var img;
  var img_src_value;
  var t1;
  var t2;
  var form;
  var input0;
  var t3;
  var div3;
  var div1;
  var label0;
  var t4;
  var t5;
  var input1;
  var t6;
  var div2;
  var label1;
  var t7;
  var t8;
  var input2;
  var t9;
  var div6;
  var div4;
  var input3;
  var t10;
  var label2;
  var t11;
  var t12;
  var div5;
  var a;
  var t13;
  var t14;
  var div7;
  var button;
  var span;
  var svg;
  var path;
  var t15;
  var block = {
    c: function create() {
      meta = element("meta");
      html = element("html");
      t0 = space();
      div9 = element("div");
      div8 = element("div");
      div0 = element("div");
      h2 = element("h2");
      img = element("img");
      t1 = text("\n        Sign in to your Movie-Master account");
      t2 = space();
      form = element("form");
      input0 = element("input");
      t3 = space();
      div3 = element("div");
      div1 = element("div");
      label0 = element("label");
      t4 = text("Email address");
      t5 = space();
      input1 = element("input");
      t6 = space();
      div2 = element("div");
      label1 = element("label");
      t7 = text("Password");
      t8 = space();
      input2 = element("input");
      t9 = space();
      div6 = element("div");
      div4 = element("div");
      input3 = element("input");
      t10 = space();
      label2 = element("label");
      t11 = text("Remember me");
      t12 = space();
      div5 = element("div");
      a = element("a");
      t13 = text("Forgot your password?");
      t14 = space();
      div7 = element("div");
      button = element("button");
      span = element("span");
      svg = svg_element("svg");
      path = svg_element("path");
      t15 = text("\n          Sign in");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1chjox6\"]", document.head);
      meta = claim_element(head_nodes, "META", {
        name: true,
        content: true
      });
      html = claim_element(head_nodes, "HTML", {
        lang: true
      });
      children(html).forEach(detach_dev);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      div9 = claim_element(nodes, "DIV", {
        class: true
      });
      var div9_nodes = children(div9);
      div8 = claim_element(div9_nodes, "DIV", {
        class: true
      });
      var div8_nodes = children(div8);
      div0 = claim_element(div8_nodes, "DIV", {});
      var div0_nodes = children(div0);
      h2 = claim_element(div0_nodes, "H2", {
        class: true
      });
      var h2_nodes = children(h2);
      img = claim_element(h2_nodes, "IMG", {
        class: true,
        src: true,
        width: true,
        alt: true
      });
      t1 = claim_text(h2_nodes, "\n        Sign in to your Movie-Master account");
      h2_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t2 = claim_space(div8_nodes);
      form = claim_element(div8_nodes, "FORM", {
        class: true,
        action: true,
        method: true
      });
      var form_nodes = children(form);
      input0 = claim_element(form_nodes, "INPUT", {
        type: true,
        name: true,
        value: true
      });
      t3 = claim_space(form_nodes);
      div3 = claim_element(form_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      div1 = claim_element(div3_nodes, "DIV", {});
      var div1_nodes = children(div1);
      label0 = claim_element(div1_nodes, "LABEL", {
        for: true,
        class: true
      });
      var label0_nodes = children(label0);
      t4 = claim_text(label0_nodes, "Email address");
      label0_nodes.forEach(detach_dev);
      t5 = claim_space(div1_nodes);
      input1 = claim_element(div1_nodes, "INPUT", {
        id: true,
        name: true,
        type: true,
        autocomplete: true,
        required: true,
        class: true,
        placeholder: true
      });
      div1_nodes.forEach(detach_dev);
      t6 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {});
      var div2_nodes = children(div2);
      label1 = claim_element(div2_nodes, "LABEL", {
        for: true,
        class: true
      });
      var label1_nodes = children(label1);
      t7 = claim_text(label1_nodes, "Password");
      label1_nodes.forEach(detach_dev);
      t8 = claim_space(div2_nodes);
      input2 = claim_element(div2_nodes, "INPUT", {
        id: true,
        name: true,
        type: true,
        autocomplete: true,
        required: true,
        class: true,
        placeholder: true
      });
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t9 = claim_space(form_nodes);
      div6 = claim_element(form_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      div4 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      input3 = claim_element(div4_nodes, "INPUT", {
        id: true,
        name: true,
        type: true,
        class: true
      });
      t10 = claim_space(div4_nodes);
      label2 = claim_element(div4_nodes, "LABEL", {
        for: true,
        class: true
      });
      var label2_nodes = children(label2);
      t11 = claim_text(label2_nodes, "Remember me");
      label2_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      t12 = claim_space(div6_nodes);
      div5 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      a = claim_element(div5_nodes, "A", {
        href: true,
        class: true
      });
      var a_nodes = children(a);
      t13 = claim_text(a_nodes, "Forgot your password?");
      a_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      t14 = claim_space(form_nodes);
      div7 = claim_element(form_nodes, "DIV", {});
      var div7_nodes = children(div7);
      button = claim_element(div7_nodes, "BUTTON", {
        type: true,
        class: true
      });
      var button_nodes = children(button);
      span = claim_element(button_nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      svg = claim_element(span_nodes, "svg", {
        class: true,
        xmlns: true,
        viewBox: true,
        fill: true,
        "aria-hidden": true
      }, 1);
      var svg_nodes = children(svg);
      path = claim_element(svg_nodes, "path", {
        "fill-rule": true,
        d: true,
        "clip-rule": true
      }, 1);
      children(path).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      span_nodes.forEach(detach_dev);
      t15 = claim_text(button_nodes, "\n          Sign in");
      button_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      form_nodes.forEach(detach_dev);
      div8_nodes.forEach(detach_dev);
      div9_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Login";
      attr_dev(meta, "name", "robots");
      attr_dev(meta, "content", "noindex nofollow");
      add_location(meta, file, 22, 2, 341);
      attr_dev(html, "lang", "en");
      add_location(html, file, 23, 2, 393);
      attr_dev(img, "class", "mx-auto h-12 w-auto");
      if (img.src !== (img_src_value = "./logo.svg")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "width", "100px");
      attr_dev(img, "alt", "Workflow");
      add_location(img, file, 34, 8, 672);
      attr_dev(h2, "class", "mt-6 text-center text-3xl font-extrabold text-gray-900");
      add_location(h2, file, 33, 6, 596);
      add_location(div0, file, 32, 4, 584);
      attr_dev(input0, "type", "hidden");
      attr_dev(input0, "name", "remember");
      input0.value = "true";
      add_location(input0, file, 44, 6, 935);
      attr_dev(label0, "for", "email-address");
      attr_dev(label0, "class", "sr-only");
      add_location(label0, file, 47, 10, 1065);
      attr_dev(input1, "id", "email-address");
      attr_dev(input1, "name", "email");
      attr_dev(input1, "type", "email");
      attr_dev(input1, "autocomplete", "email");
      input1.required = true;
      attr_dev(input1, "class", "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm");
      attr_dev(input1, "placeholder", "Email address");
      add_location(input1, file, 48, 10, 1140);
      add_location(div1, file, 46, 8, 1049);
      attr_dev(label1, "for", "password");
      attr_dev(label1, "class", "sr-only");
      add_location(label1, file, 59, 10, 1613);
      attr_dev(input2, "id", "password");
      attr_dev(input2, "name", "password");
      attr_dev(input2, "type", "password");
      attr_dev(input2, "autocomplete", "current-password");
      input2.required = true;
      attr_dev(input2, "class", "appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm");
      attr_dev(input2, "placeholder", "Password");
      add_location(input2, file, 60, 10, 1678);
      add_location(div2, file, 58, 8, 1597);
      attr_dev(div3, "class", "rounded-md shadow-sm -space-y-px");
      add_location(div3, file, 45, 6, 994);
      attr_dev(input3, "id", "remember_me");
      attr_dev(input3, "name", "remember_me");
      attr_dev(input3, "type", "checkbox");
      attr_dev(input3, "class", "h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded");
      add_location(input3, file, 74, 10, 2252);
      attr_dev(label2, "for", "remember_me");
      attr_dev(label2, "class", "ml-2 block text-sm text-gray-900");
      add_location(label2, file, 80, 10, 2460);
      attr_dev(div4, "class", "flex items-center");
      add_location(div4, file, 73, 8, 2210);
      attr_dev(a, "href", "#");
      attr_dev(a, "class", "font-medium text-indigo-600 hover:text-indigo-500");
      add_location(a, file, 86, 10, 2626);
      attr_dev(div5, "class", "text-sm");
      add_location(div5, file, 85, 8, 2594);
      attr_dev(div6, "class", "flex items-center justify-between");
      add_location(div6, file, 72, 6, 2154);
      attr_dev(path, "fill-rule", "evenodd");
      attr_dev(path, "d", "M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z");
      attr_dev(path, "clip-rule", "evenodd");
      add_location(path, file, 106, 14, 3480);
      attr_dev(svg, "class", "h-5 w-5 text-indigo-500 group-hover:text-indigo-400");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg, "viewBox", "0 0 20 20");
      attr_dev(svg, "fill", "currentColor");
      attr_dev(svg, "aria-hidden", "true");
      add_location(svg, file, 99, 12, 3223);
      attr_dev(span, "class", "absolute left-0 inset-y-0 flex items-center pl-3");
      add_location(span, file, 97, 10, 3093);
      attr_dev(button, "type", "submit");
      attr_dev(button, "class", "group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500");
      add_location(button, file, 93, 8, 2795);
      add_location(div7, file, 92, 6, 2781);
      attr_dev(form, "class", "mt-8 space-y-6");
      attr_dev(form, "action", "#");
      attr_dev(form, "method", "POST");
      add_location(form, file, 43, 4, 874);
      attr_dev(div8, "class", "max-w-md w-full space-y-8");
      add_location(div8, file, 31, 2, 540);
      attr_dev(div9, "class", "min-h-screen flex  justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 z-10 bg-opacity-50");
      add_location(div9, file, 27, 0, 429);
    },
    m: function mount(target, anchor) {
      append_dev(document.head, meta);
      append_dev(document.head, html);
      insert_dev(target, t0, anchor);
      insert_dev(target, div9, anchor);
      append_dev(div9, div8);
      append_dev(div8, div0);
      append_dev(div0, h2);
      append_dev(h2, img);
      append_dev(h2, t1);
      append_dev(div8, t2);
      append_dev(div8, form);
      append_dev(form, input0);
      append_dev(form, t3);
      append_dev(form, div3);
      append_dev(div3, div1);
      append_dev(div1, label0);
      append_dev(label0, t4);
      append_dev(div1, t5);
      append_dev(div1, input1);
      append_dev(div3, t6);
      append_dev(div3, div2);
      append_dev(div2, label1);
      append_dev(label1, t7);
      append_dev(div2, t8);
      append_dev(div2, input2);
      append_dev(form, t9);
      append_dev(form, div6);
      append_dev(div6, div4);
      append_dev(div4, input3);
      append_dev(div4, t10);
      append_dev(div4, label2);
      append_dev(label2, t11);
      append_dev(div6, t12);
      append_dev(div6, div5);
      append_dev(div5, a);
      append_dev(a, t13);
      append_dev(form, t14);
      append_dev(form, div7);
      append_dev(div7, button);
      append_dev(button, span);
      append_dev(span, svg);
      append_dev(svg, path);
      append_dev(button, t15);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      detach_dev(meta);
      detach_dev(html);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div9);
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
  validate_slots("Login", slots, []);
  var _$$props$open = $$props.open,
      open = _$$props$open === void 0 ? false : _$$props$open;
  var writable_props = ["open"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Login> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("open" in $$props) $$invalidate(0, open = $$props.open);
  };

  $$self.$capture_state = function () {
    return {
      open: open
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("open" in $$props) $$invalidate(0, open = $$props.open);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [open];
}

var Login = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Login, _SvelteComponentDev);

  var _super = _createSuper(Login);

  function Login(options) {
    var _this;

    _classCallCheck(this, Login);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      open: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Login",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(Login, [{
    key: "open",
    get: function get() {
      throw new Error("<Login>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Login>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Login;
}(SvelteComponentDev);

export default Login;
