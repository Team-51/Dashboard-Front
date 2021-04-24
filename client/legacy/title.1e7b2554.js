import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, B as validate_slots, g as element, f as space, t as text, l as claim_element, m as children, j as detach_dev, k as claim_space, n as claim_text, p as attr_dev, r as add_location, u as insert_dev, v as append_dev, x as noop, D as _createClass, M as globals, h as create_component, o as claim_component, w as mount_component, y as transition_in, z as transition_out, A as destroy_component, F as onMount } from './client.0b81d8bd.js';

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src/components/Banner.svelte";

function create_fragment$1(ctx) {
  var section;
  var div3;
  var div0;
  var img;
  var img_src_value;
  var t0;
  var div2;
  var h2;
  var t1;
  var t2;
  var div1;
  var i0;
  var t3;
  var i1;
  var t4;
  var i2;
  var t5;
  var i3;
  var t6;
  var i4;
  var t7;
  var p0;
  var t8;
  var t9;
  var p1;
  var t10;
  var span0;
  var t11;
  var t12;
  var span1;
  var t13;
  var t14;
  var span2;
  var t15;
  var t16;
  var block = {
    c: function create() {
      section = element("section");
      div3 = element("div");
      div0 = element("div");
      img = element("img");
      t0 = space();
      div2 = element("div");
      h2 = element("h2");
      t1 = text("Deadpool");
      t2 = space();
      div1 = element("div");
      i0 = element("i");
      t3 = space();
      i1 = element("i");
      t4 = space();
      i2 = element("i");
      t5 = space();
      i3 = element("i");
      t6 = space();
      i4 = element("i");
      t7 = space();
      p0 = element("p");
      t8 = text("A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelerated healing powers, adopting the alter ego Deadpool.");
      t9 = space();
      p1 = element("p");
      t10 = text("R ");
      span0 = element("span");
      t11 = text("|");
      t12 = text(" 108 min ");
      span1 = element("span");
      t13 = text("|");
      t14 = text(" Action, Adventure, Comedy ");
      span2 = element("span");
      t15 = text("|");
      t16 = text(" 12 February 2016");
      this.h();
    },
    l: function claim(nodes) {
      section = claim_element(nodes, "SECTION", {
        id: true,
        class: true
      });
      var section_nodes = children(section);
      div3 = claim_element(section_nodes, "DIV", {
        id: true,
        class: true
      });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", {
        id: true,
        class: true
      });
      var div0_nodes = children(div0);
      img = claim_element(div0_nodes, "IMG", {
        src: true,
        alt: true,
        class: true
      });
      div0_nodes.forEach(detach_dev);
      t0 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {
        id: true,
        class: true
      });
      var div2_nodes = children(div2);
      h2 = claim_element(div2_nodes, "H2", {
        class: true
      });
      var h2_nodes = children(h2);
      t1 = claim_text(h2_nodes, "Deadpool");
      h2_nodes.forEach(detach_dev);
      t2 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      i0 = claim_element(div1_nodes, "I", {
        class: true
      });
      children(i0).forEach(detach_dev);
      t3 = claim_space(div1_nodes);
      i1 = claim_element(div1_nodes, "I", {
        class: true
      });
      children(i1).forEach(detach_dev);
      t4 = claim_space(div1_nodes);
      i2 = claim_element(div1_nodes, "I", {
        class: true
      });
      children(i2).forEach(detach_dev);
      t5 = claim_space(div1_nodes);
      i3 = claim_element(div1_nodes, "I", {
        class: true
      });
      children(i3).forEach(detach_dev);
      t6 = claim_space(div1_nodes);
      i4 = claim_element(div1_nodes, "I", {
        class: true
      });
      children(i4).forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t7 = claim_space(div2_nodes);
      p0 = claim_element(div2_nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      t8 = claim_text(p0_nodes, "A former Special Forces operative turned mercenary is subjected to a rogue experiment that leaves him with accelerated healing powers, adopting the alter ego Deadpool.");
      p0_nodes.forEach(detach_dev);
      t9 = claim_space(div2_nodes);
      p1 = claim_element(div2_nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      t10 = claim_text(p1_nodes, "R ");
      span0 = claim_element(p1_nodes, "SPAN", {
        class: true
      });
      var span0_nodes = children(span0);
      t11 = claim_text(span0_nodes, "|");
      span0_nodes.forEach(detach_dev);
      t12 = claim_text(p1_nodes, " 108 min ");
      span1 = claim_element(p1_nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      t13 = claim_text(span1_nodes, "|");
      span1_nodes.forEach(detach_dev);
      t14 = claim_text(p1_nodes, " Action, Adventure, Comedy ");
      span2 = claim_element(p1_nodes, "SPAN", {
        class: true
      });
      var span2_nodes = children(span2);
      t15 = claim_text(span2_nodes, "|");
      span2_nodes.forEach(detach_dev);
      t16 = claim_text(p1_nodes, " 12 February 2016");
      p1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      if (img.src !== (img_src_value = "https://res.cloudinary.com/dw369yzsh/image/upload/v1470917169/deadpool_wn1hwe.jpg")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "Deadpool Movie Poster");
      attr_dev(img, "class", "featured_image svelte-16t8c5r");
      add_location(img, file$1, 3, 12, 115);
      attr_dev(div0, "id", "poster");
      attr_dev(div0, "class", "svelte-16t8c5r");
      add_location(div0, file$1, 2, 8, 85);
      attr_dev(h2, "class", "title svelte-16t8c5r");
      add_location(h2, file$1, 6, 12, 314);
      attr_dev(i0, "class", "fa fa-star svelte-16t8c5r");
      add_location(i0, file$1, 8, 16, 396);
      attr_dev(i1, "class", "fa fa-star svelte-16t8c5r");
      add_location(i1, file$1, 9, 16, 439);
      attr_dev(i2, "class", "fa fa-star svelte-16t8c5r");
      add_location(i2, file$1, 10, 16, 482);
      attr_dev(i3, "class", "fa fa-star svelte-16t8c5r");
      add_location(i3, file$1, 11, 16, 525);
      attr_dev(i4, "class", "fa fa-star inactive svelte-16t8c5r");
      add_location(i4, file$1, 12, 16, 568);
      attr_dev(div1, "class", "ratings svelte-16t8c5r");
      add_location(div1, file$1, 7, 12, 358);
      attr_dev(p0, "class", "description svelte-16t8c5r");
      add_location(p0, file$1, 15, 12, 636);
      attr_dev(span0, "class", "svelte-16t8c5r");
      add_location(span0, file$1, 17, 30, 862);
      attr_dev(span1, "class", "svelte-16t8c5r");
      add_location(span1, file$1, 17, 53, 885);
      attr_dev(span2, "class", "svelte-16t8c5r");
      add_location(span2, file$1, 17, 94, 926);
      attr_dev(p1, "class", "info svelte-16t8c5r");
      add_location(p1, file$1, 17, 12, 844);
      attr_dev(div2, "id", "content");
      attr_dev(div2, "class", "svelte-16t8c5r");
      add_location(div2, file$1, 5, 8, 283);
      attr_dev(div3, "id", "banner_content_wrapper");
      attr_dev(div3, "class", "svelte-16t8c5r");
      add_location(div3, file$1, 1, 4, 43);
      attr_dev(section, "id", "banner");
      attr_dev(section, "class", "clearfix svelte-16t8c5r");
      add_location(section, file$1, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, section, anchor);
      append_dev(section, div3);
      append_dev(div3, div0);
      append_dev(div0, img);
      append_dev(div3, t0);
      append_dev(div3, div2);
      append_dev(div2, h2);
      append_dev(h2, t1);
      append_dev(div2, t2);
      append_dev(div2, div1);
      append_dev(div1, i0);
      append_dev(div1, t3);
      append_dev(div1, i1);
      append_dev(div1, t4);
      append_dev(div1, i2);
      append_dev(div1, t5);
      append_dev(div1, i3);
      append_dev(div1, t6);
      append_dev(div1, i4);
      append_dev(div2, t7);
      append_dev(div2, p0);
      append_dev(p0, t8);
      append_dev(div2, t9);
      append_dev(div2, p1);
      append_dev(p1, t10);
      append_dev(p1, span0);
      append_dev(span0, t11);
      append_dev(p1, t12);
      append_dev(p1, span1);
      append_dev(span1, t13);
      append_dev(p1, t14);
      append_dev(p1, span2);
      append_dev(span2, t15);
      append_dev(p1, t16);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(section);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$1($$self, $$props) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Banner", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Banner> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var Banner = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Banner, _SvelteComponentDev);

  var _super = _createSuper$1(Banner);

  function Banner(options) {
    var _this;

    _classCallCheck(this, Banner);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Banner",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  return Banner;
}(SvelteComponentDev);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var console_1 = globals.console;
var file = "src/routes/title.svelte";

function create_fragment(ctx) {
  var banner;
  var t0;
  var div5;
  var ul;
  var li0;
  var a0;
  var t1;
  var t2;
  var li1;
  var a1;
  var t3;
  var t4;
  var li2;
  var a2;
  var t5;
  var t6;
  var li3;
  var a3;
  var t7;
  var t8;
  var div4;
  var div0;
  var t9;
  var t10;
  var div1;
  var t11;
  var t12;
  var div2;
  var t13;
  var t14;
  var div3;
  var t15;
  var current;
  banner = new Banner({
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(banner.$$.fragment);
      t0 = space();
      div5 = element("div");
      ul = element("ul");
      li0 = element("li");
      a0 = element("a");
      t1 = text("Cast");
      t2 = space();
      li1 = element("li");
      a1 = element("a");
      t3 = text("Creators");
      t4 = space();
      li2 = element("li");
      a2 = element("a");
      t5 = text("Awards");
      t6 = space();
      li3 = element("li");
      a3 = element("a");
      t7 = text("Production Houses");
      t8 = space();
      div4 = element("div");
      div0 = element("div");
      t9 = text("First tab");
      t10 = space();
      div1 = element("div");
      t11 = text("Second tab");
      t12 = space();
      div2 = element("div");
      t13 = text("Third tab");
      t14 = space();
      div3 = element("div");
      t15 = text("Fourth tab");
      this.h();
    },
    l: function claim(nodes) {
      claim_component(banner.$$.fragment, nodes);
      t0 = claim_space(nodes);
      div5 = claim_element(nodes, "DIV", {
        class: true,
        style: true
      });
      var div5_nodes = children(div5);
      ul = claim_element(div5_nodes, "UL", {
        id: true,
        class: true
      });
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", {
        class: true
      });
      var li0_nodes = children(li0);
      a0 = claim_element(li0_nodes, "A", {
        id: true,
        href: true
      });
      var a0_nodes = children(a0);
      t1 = claim_text(a0_nodes, "Cast");
      a0_nodes.forEach(detach_dev);
      li0_nodes.forEach(detach_dev);
      t2 = claim_space(ul_nodes);
      li1 = claim_element(ul_nodes, "LI", {
        class: true
      });
      var li1_nodes = children(li1);
      a1 = claim_element(li1_nodes, "A", {
        href: true
      });
      var a1_nodes = children(a1);
      t3 = claim_text(a1_nodes, "Creators");
      a1_nodes.forEach(detach_dev);
      li1_nodes.forEach(detach_dev);
      t4 = claim_space(ul_nodes);
      li2 = claim_element(ul_nodes, "LI", {
        class: true
      });
      var li2_nodes = children(li2);
      a2 = claim_element(li2_nodes, "A", {
        href: true
      });
      var a2_nodes = children(a2);
      t5 = claim_text(a2_nodes, "Awards");
      a2_nodes.forEach(detach_dev);
      li2_nodes.forEach(detach_dev);
      t6 = claim_space(ul_nodes);
      li3 = claim_element(ul_nodes, "LI", {
        class: true
      });
      var li3_nodes = children(li3);
      a3 = claim_element(li3_nodes, "A", {
        href: true
      });
      var a3_nodes = children(a3);
      t7 = claim_text(a3_nodes, "Production Houses");
      a3_nodes.forEach(detach_dev);
      li3_nodes.forEach(detach_dev);
      ul_nodes.forEach(detach_dev);
      t8 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", {
        id: true
      });
      var div4_nodes = children(div4);
      div0 = claim_element(div4_nodes, "DIV", {
        id: true,
        class: true
      });
      var div0_nodes = children(div0);
      t9 = claim_text(div0_nodes, "First tab");
      div0_nodes.forEach(detach_dev);
      t10 = claim_space(div4_nodes);
      div1 = claim_element(div4_nodes, "DIV", {
        id: true,
        class: true
      });
      var div1_nodes = children(div1);
      t11 = claim_text(div1_nodes, "Second tab");
      div1_nodes.forEach(detach_dev);
      t12 = claim_space(div4_nodes);
      div2 = claim_element(div4_nodes, "DIV", {
        id: true,
        class: true
      });
      var div2_nodes = children(div2);
      t13 = claim_text(div2_nodes, "Third tab");
      div2_nodes.forEach(detach_dev);
      t14 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", {
        id: true,
        class: true
      });
      var div3_nodes = children(div3);
      t15 = claim_text(div3_nodes, "Fourth tab");
      div3_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a0, "id", "default-tab");
      attr_dev(a0, "href", "#first");
      add_location(a0, file, 42, 107, 1331);
      attr_dev(li0, "class", "bg-white px-4 text-gray-800 font-semibold py-2 rounded-t border-t border-r border-l -mb-px");
      add_location(li0, file, 42, 4, 1228);
      attr_dev(a1, "href", "#second");
      add_location(a1, file, 43, 64, 1443);
      attr_dev(li1, "class", "px-4 text-gray-800 font-semibold py-2 rounded-t");
      add_location(li1, file, 43, 4, 1383);
      attr_dev(a2, "href", "#third");
      add_location(a2, file, 44, 64, 1543);
      attr_dev(li2, "class", "px-4 text-gray-800 font-semibold py-2 rounded-t");
      add_location(li2, file, 44, 4, 1483);
      attr_dev(a3, "href", "#fourth");
      add_location(a3, file, 45, 64, 1640);
      attr_dev(li3, "class", "px-4 text-gray-800 font-semibold py-2 rounded-t");
      add_location(li3, file, 45, 4, 1580);
      attr_dev(ul, "id", "tabs");
      attr_dev(ul, "class", "inline-flex pt-2 px-1 w-full border-b");
      add_location(ul, file, 41, 2, 1163);
      attr_dev(div0, "id", "first");
      attr_dev(div0, "class", "p-4");
      add_location(div0, file, 50, 4, 1748);
      attr_dev(div1, "id", "second");
      attr_dev(div1, "class", "hidden p-4");
      add_location(div1, file, 53, 4, 1808);
      attr_dev(div2, "id", "third");
      attr_dev(div2, "class", "hidden p-4");
      add_location(div2, file, 56, 4, 1877);
      attr_dev(div3, "id", "fourth");
      attr_dev(div3, "class", "hidden p-4");
      add_location(div3, file, 59, 4, 1944);
      attr_dev(div4, "id", "tab-contents");
      add_location(div4, file, 49, 2, 1720);
      attr_dev(div5, "class", "rounded border mx-auto mt-4");
      add_location(div5, file, 39, 0, 1094);
    },
    m: function mount(target, anchor) {
      mount_component(banner, target, anchor);
      insert_dev(target, t0, anchor);
      insert_dev(target, div5, anchor);
      append_dev(div5, ul);
      append_dev(ul, li0);
      append_dev(li0, a0);
      append_dev(a0, t1);
      append_dev(ul, t2);
      append_dev(ul, li1);
      append_dev(li1, a1);
      append_dev(a1, t3);
      append_dev(ul, t4);
      append_dev(ul, li2);
      append_dev(li2, a2);
      append_dev(a2, t5);
      append_dev(ul, t6);
      append_dev(ul, li3);
      append_dev(li3, a3);
      append_dev(a3, t7);
      append_dev(div5, t8);
      append_dev(div5, div4);
      append_dev(div4, div0);
      append_dev(div0, t9);
      append_dev(div4, t10);
      append_dev(div4, div1);
      append_dev(div1, t11);
      append_dev(div4, t12);
      append_dev(div4, div2);
      append_dev(div2, t13);
      append_dev(div4, t14);
      append_dev(div4, div3);
      append_dev(div3, t15);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(banner.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(banner.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(banner, detaching);
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div5);
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
  validate_slots("Title", slots, []);
  var profile = $$props.profile;
  onMount(function () {
    var tabsContainer = document.querySelector("#tabs");
    var tabTogglers = tabsContainer.querySelectorAll("a");
    console.log(tabTogglers);
    tabTogglers.forEach(function (toggler) {
      toggler.addEventListener("click", function (e) {
        e.preventDefault();
        var tabName = this.getAttribute("href");
        var tabContents = document.querySelector("#tab-contents");

        for (var i = 0; i < tabContents.children.length; i++) {
          tabTogglers[i].parentElement.classList.remove("border-t", "border-r", "border-l", "-mb-px", "bg-white");
          tabContents.children[i].classList.remove("hidden");

          if ("#" + tabContents.children[i].id === tabName) {
            continue;
          }

          tabContents.children[i].classList.add("hidden");
        }

        e.target.parentElement.classList.add("border-t", "border-r", "border-l", "-mb-px", "bg-white");
      });
    });
    document.getElementById("default-tab").click();
  });
  var writable_props = ["profile"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn("<Title> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("profile" in $$props) $$invalidate(0, profile = $$props.profile);
  };

  $$self.$capture_state = function () {
    return {
      profile: profile,
      Banner: Banner,
      onMount: onMount
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("profile" in $$props) $$invalidate(0, profile = $$props.profile);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [profile];
}

var Title = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Title, _SvelteComponentDev);

  var _super = _createSuper(Title);

  function Title(options) {
    var _this;

    _classCallCheck(this, Title);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      profile: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Title",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*profile*/
    ctx[0] === undefined && !("profile" in props)) {
      console_1.warn("<Title> was created without expected prop 'profile'");
    }

    return _this;
  }

  _createClass(Title, [{
    key: "profile",
    get: function get() {
      throw new Error("<Title>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Title>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Title;
}(SvelteComponentDev);

export default Title;
