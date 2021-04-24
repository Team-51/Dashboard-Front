import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, g as element, t as text, f as space, l as claim_element, m as children, n as claim_text, j as detach_dev, k as claim_space, p as attr_dev, r as add_location, u as insert_dev, v as append_dev, x as noop, B as validate_slots } from './client.0b81d8bd.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/settings.svelte";

function create_fragment(ctx) {
  var form;
  var div5;
  var div0;
  var h2;
  var t0;
  var t1;
  var p0;
  var t2;
  var t3;
  var div4;
  var div1;
  var label0;
  var t4;
  var t5;
  var input0;
  var t6;
  var hr;
  var t7;
  var div2;
  var label1;
  var t8;
  var t9;
  var input1;
  var t10;
  var div3;
  var label2;
  var t11;
  var t12;
  var input2;
  var t13;
  var div6;
  var p1;
  var t14;
  var t15;
  var input3;
  var block = {
    c: function create() {
      form = element("form");
      div5 = element("div");
      div0 = element("div");
      h2 = element("h2");
      t0 = text("Profile Info");
      t1 = space();
      p0 = element("p");
      t2 = text("Update your basic profile information such as Email Address, Name, and Image.");
      t3 = space();
      div4 = element("div");
      div1 = element("div");
      label0 = element("label");
      t4 = text("Username");
      t5 = space();
      input0 = element("input");
      t6 = space();
      hr = element("hr");
      t7 = space();
      div2 = element("div");
      label1 = element("label");
      t8 = text("Password");
      t9 = space();
      input1 = element("input");
      t10 = space();
      div3 = element("div");
      label2 = element("label");
      t11 = text("Re endter Password *");
      t12 = space();
      input2 = element("input");
      t13 = space();
      div6 = element("div");
      p1 = element("p");
      t14 = text("Click on Save to update your Profile Info");
      t15 = space();
      input3 = element("input");
      this.h();
    },
    l: function claim(nodes) {
      form = claim_element(nodes, "FORM", {
        method: true,
        enctype: true
      });
      var form_nodes = children(form);
      div5 = claim_element(form_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      div0 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      h2 = claim_element(div0_nodes, "H2", {
        class: true
      });
      var h2_nodes = children(h2);
      t0 = claim_text(h2_nodes, "Profile Info");
      h2_nodes.forEach(detach_dev);
      t1 = claim_space(div0_nodes);
      p0 = claim_element(div0_nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      t2 = claim_text(p0_nodes, "Update your basic profile information such as Email Address, Name, and Image.");
      p0_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      div1 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      label0 = claim_element(div1_nodes, "LABEL", {
        for: true,
        class: true
      });
      var label0_nodes = children(label0);
      t4 = claim_text(label0_nodes, "Username");
      label0_nodes.forEach(detach_dev);
      t5 = claim_space(div1_nodes);
      input0 = claim_element(div1_nodes, "INPUT", {
        class: true,
        type: true,
        value: true,
        name: true
      });
      div1_nodes.forEach(detach_dev);
      t6 = claim_space(div4_nodes);
      hr = claim_element(div4_nodes, "HR", {
        class: true
      });
      t7 = claim_space(div4_nodes);
      div2 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      label1 = claim_element(div2_nodes, "LABEL", {
        for: true,
        class: true
      });
      var label1_nodes = children(label1);
      t8 = claim_text(label1_nodes, "Password");
      label1_nodes.forEach(detach_dev);
      t9 = claim_space(div2_nodes);
      input1 = claim_element(div2_nodes, "INPUT", {
        class: true,
        type: true,
        name: true,
        value: true
      });
      div2_nodes.forEach(detach_dev);
      t10 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      label2 = claim_element(div3_nodes, "LABEL", {
        for: true,
        class: true
      });
      var label2_nodes = children(label2);
      t11 = claim_text(label2_nodes, "Re endter Password *");
      label2_nodes.forEach(detach_dev);
      t12 = claim_space(div3_nodes);
      input2 = claim_element(div3_nodes, "INPUT", {
        class: true,
        type: true,
        name: true,
        value: true
      });
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      t13 = claim_space(form_nodes);
      div6 = claim_element(form_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      p1 = claim_element(div6_nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      t14 = claim_text(p1_nodes, "Click on Save to update your Profile Info");
      p1_nodes.forEach(detach_dev);
      t15 = claim_space(div6_nodes);
      input3 = claim_element(div6_nodes, "INPUT", {
        type: true,
        class: true,
        value: true
      });
      div6_nodes.forEach(detach_dev);
      form_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h2, "class", "font-medium text-md text-gray-700 mb-4 tracking-wide");
      add_location(h2, file, 4, 8, 237);
      attr_dev(p0, "class", "text-xs text-gray-500");
      add_location(p0, file, 5, 8, 328);
      attr_dev(div0, "class", "w-1/3 bg-gray-100 p-8 hidden md:inline-block");
      add_location(div0, file, 3, 6, 170);
      attr_dev(label0, "for", "name");
      attr_dev(label0, "class", "text-sm text-gray-600");
      add_location(label0, file, 9, 10, 535);
      attr_dev(input0, "class", "mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500");
      attr_dev(input0, "type", "text");
      input0.value = "";
      attr_dev(input0, "name", "name");
      add_location(input0, file, 10, 10, 610);
      attr_dev(div1, "class", "py-8 px-16");
      add_location(div1, file, 8, 8, 500);
      attr_dev(hr, "class", "border-gray-200");
      add_location(hr, file, 12, 8, 813);
      attr_dev(label1, "for", "email");
      attr_dev(label1, "class", "text-sm text-gray-600");
      add_location(label1, file, 14, 10, 885);
      attr_dev(input1, "class", "mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500");
      attr_dev(input1, "type", "email");
      attr_dev(input1, "name", "email");
      input1.value = "";
      add_location(input1, file, 15, 10, 961);
      attr_dev(div2, "class", "py-8 px-16");
      add_location(div2, file, 13, 8, 850);
      attr_dev(label2, "for", "email");
      attr_dev(label2, "class", "text-sm text-gray-600");
      add_location(label2, file, 18, 10, 1201);
      attr_dev(input2, "class", "mt-2 border-2 border-gray-200 px-3 py-2 block w-full rounded-lg text-base text-gray-900 focus:outline-none focus:border-indigo-500");
      attr_dev(input2, "type", "email");
      attr_dev(input2, "name", "email");
      input2.value = "";
      add_location(input2, file, 19, 10, 1289);
      attr_dev(div3, "class", "py-8 px-16");
      add_location(div3, file, 17, 8, 1166);
      attr_dev(div4, "class", "md:w-2/3 w-full");
      add_location(div4, file, 7, 6, 462);
      attr_dev(div5, "class", "w-full bg-white rounded-lg mx-auto mt-8 flex overflow-hidden rounded-b-none");
      add_location(div5, file, 2, 4, 74);
      attr_dev(p1, "class", "float-left text-xs text-gray-500 tracking-tight mt-2");
      add_location(p1, file, 26, 6, 1605);
      attr_dev(input3, "type", "submit");
      attr_dev(input3, "class", "bg-indigo-500 text-white text-sm font-medium px-6 py-2 rounded float-right uppercase cursor-pointer");
      input3.value = "Save";
      add_location(input3, file, 27, 6, 1721);
      attr_dev(div6, "class", "p-16 py-8 bg-gray-300 clearfix rounded-b-lg border-t border-gray-200");
      add_location(div6, file, 25, 4, 1516);
      attr_dev(form, "method", "POST");
      attr_dev(form, "enctype", "multipart/form-data");
      add_location(form, file, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, form, anchor);
      append_dev(form, div5);
      append_dev(div5, div0);
      append_dev(div0, h2);
      append_dev(h2, t0);
      append_dev(div0, t1);
      append_dev(div0, p0);
      append_dev(p0, t2);
      append_dev(div5, t3);
      append_dev(div5, div4);
      append_dev(div4, div1);
      append_dev(div1, label0);
      append_dev(label0, t4);
      append_dev(div1, t5);
      append_dev(div1, input0);
      append_dev(div4, t6);
      append_dev(div4, hr);
      append_dev(div4, t7);
      append_dev(div4, div2);
      append_dev(div2, label1);
      append_dev(label1, t8);
      append_dev(div2, t9);
      append_dev(div2, input1);
      append_dev(div4, t10);
      append_dev(div4, div3);
      append_dev(div3, label2);
      append_dev(label2, t11);
      append_dev(div3, t12);
      append_dev(div3, input2);
      append_dev(form, t13);
      append_dev(form, div6);
      append_dev(div6, p1);
      append_dev(p1, t14);
      append_dev(div6, t15);
      append_dev(div6, input3);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(form);
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

function instance($$self, $$props) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Settings", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Settings> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var Settings = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Settings, _SvelteComponentDev);

  var _super = _createSuper(Settings);

  function Settings(options) {
    var _this;

    _classCallCheck(this, Settings);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Settings",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Settings;
}(SvelteComponentDev);

export default Settings;
