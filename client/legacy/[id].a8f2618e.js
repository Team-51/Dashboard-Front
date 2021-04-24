import { G as regenerator, _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, g as element, f as space, L as svg_element, t as text, h as create_component, l as claim_element, m as children, j as detach_dev, k as claim_space, n as claim_text, o as claim_component, p as attr_dev, r as add_location, I as set_style, u as insert_dev, v as append_dev, w as mount_component, x as noop, y as transition_in, z as transition_out, A as destroy_component, B as validate_slots } from './client.966ab273.js';
import { _ as _asyncToGenerator } from './asyncToGenerator.5229e80b.js';
import { C as Carousel } from './Carousel.aba482d8.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/profile/[id].svelte";

function create_fragment(ctx) {
  var section0;
  var div0;
  var span0;
  var t0;
  var div1;
  var svg;
  var polygon;
  var t1;
  var section1;
  var div19;
  var div18;
  var div17;
  var div11;
  var div3;
  var div2;
  var img;
  var img_src_value;
  var t2;
  var div5;
  var div4;
  var button;
  var t3;
  var t4;
  var div10;
  var div9;
  var div6;
  var span1;
  var t5;
  var span2;
  var t6;
  var t7;
  var div7;
  var span3;
  var t8;
  var span4;
  var t9;
  var t10;
  var div8;
  var span5;
  var t11;
  var span6;
  var t12;
  var t13;
  var div13;
  var h3;
  var t14;
  var t15;
  var div12;
  var i;
  var t16;
  var t17;
  var div16;
  var div15;
  var div14;
  var p0;
  var b0;
  var t18;
  var t19;
  var br0;
  var t20;
  var t21;
  var p1;
  var b1;
  var t22;
  var t23;
  var br1;
  var t24;
  var t25;
  var a;
  var t26;
  var t27;
  var carousel;
  var current;
  carousel = new Carousel({
    $$inline: true
  });
  var block = {
    c: function create() {
      section0 = element("section");
      div0 = element("div");
      span0 = element("span");
      t0 = space();
      div1 = element("div");
      svg = svg_element("svg");
      polygon = svg_element("polygon");
      t1 = space();
      section1 = element("section");
      div19 = element("div");
      div18 = element("div");
      div17 = element("div");
      div11 = element("div");
      div3 = element("div");
      div2 = element("div");
      img = element("img");
      t2 = space();
      div5 = element("div");
      div4 = element("div");
      button = element("button");
      t3 = text("Follow");
      t4 = space();
      div10 = element("div");
      div9 = element("div");
      div6 = element("div");
      span1 = element("span");
      t5 = text("22");
      span2 = element("span");
      t6 = text("Watchlists");
      t7 = space();
      div7 = element("div");
      span3 = element("span");
      t8 = text("10");
      span4 = element("span");
      t9 = text("Followers");
      t10 = space();
      div8 = element("div");
      span5 = element("span");
      t11 = text("89");
      span6 = element("span");
      t12 = text("Reviews");
      t13 = space();
      div13 = element("div");
      h3 = element("h3");
      t14 = text("Saksham Mrig");
      t15 = space();
      div12 = element("div");
      i = element("i");
      t16 = text("\n              Gurgaon, India");
      t17 = space();
      div16 = element("div");
      div15 = element("div");
      div14 = element("div");
      p0 = element("p");
      b0 = element("b");
      t18 = text("Breaking Bad : Since GOT is over, this is Officially the Greatest show ever made");
      t19 = space();
      br0 = element("br");
      t20 = text("\n                    I was waiting to see how GOT ended. It should be the greatest but they failed miserably in the finale season especially the last 3 (mainly the finale) episode.\n                    Writers need to take notes and be more like breaking bad. They had they ending planned out from the begging. They didn't try and build a massive brand or following behind the show and extend their seasons to do so. They stuck with their plan and created the greatest show we may ever see.\n                    \n                    Thank you for existing.");
      t21 = space();
      p1 = element("p");
      b1 = element("b");
      t22 = text("GOT:  Extraordinary untill season 8");
      t23 = space();
      br1 = element("br");
      t24 = text("\n                    This is the first series i would recommend to anybody , it is an amazing piece of work , the most stunning TV series you will ever watch. Why i gave it 9/10 because of the last season, it's still good but very disappointing compared to all the seasons. YOU will enjoy every episode");
      t25 = space();
      a = element("a");
      t26 = text("Show more");
      t27 = space();
      create_component(carousel.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      section0 = claim_element(nodes, "SECTION", {
        class: true,
        style: true
      });
      var section0_nodes = children(section0);
      div0 = claim_element(section0_nodes, "DIV", {
        class: true,
        style: true
      });
      var div0_nodes = children(div0);
      span0 = claim_element(div0_nodes, "SPAN", {
        id: true,
        class: true
      });
      children(span0).forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t0 = claim_space(section0_nodes);
      div1 = claim_element(section0_nodes, "DIV", {
        class: true,
        style: true
      });
      var div1_nodes = children(div1);
      svg = claim_element(div1_nodes, "svg", {
        class: true,
        xmlns: true,
        preserveAspectRatio: true,
        version: true,
        viewBox: true,
        x: true,
        y: true
      }, 1);
      var svg_nodes = children(svg);
      polygon = claim_element(svg_nodes, "polygon", {
        class: true,
        points: true
      }, 1);
      children(polygon).forEach(detach_dev);
      svg_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      section0_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);
      section1 = claim_element(nodes, "SECTION", {
        class: true
      });
      var section1_nodes = children(section1);
      div19 = claim_element(section1_nodes, "DIV", {
        class: true
      });
      var div19_nodes = children(div19);
      div18 = claim_element(div19_nodes, "DIV", {
        class: true
      });
      var div18_nodes = children(div18);
      div17 = claim_element(div18_nodes, "DIV", {
        class: true
      });
      var div17_nodes = children(div17);
      div11 = claim_element(div17_nodes, "DIV", {
        class: true
      });
      var div11_nodes = children(div11);
      div3 = claim_element(div11_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      img = claim_element(div2_nodes, "IMG", {
        alt: true,
        src: true,
        class: true,
        style: true
      });
      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      t2 = claim_space(div11_nodes);
      div5 = claim_element(div11_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      button = claim_element(div4_nodes, "BUTTON", {
        class: true,
        type: true,
        style: true
      });
      var button_nodes = children(button);
      t3 = claim_text(button_nodes, "Follow");
      button_nodes.forEach(detach_dev);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      t4 = claim_space(div11_nodes);
      div10 = claim_element(div11_nodes, "DIV", {
        class: true
      });
      var div10_nodes = children(div10);
      div9 = claim_element(div10_nodes, "DIV", {
        class: true
      });
      var div9_nodes = children(div9);
      div6 = claim_element(div9_nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      span1 = claim_element(div6_nodes, "SPAN", {
        class: true
      });
      var span1_nodes = children(span1);
      t5 = claim_text(span1_nodes, "22");
      span1_nodes.forEach(detach_dev);
      span2 = claim_element(div6_nodes, "SPAN", {
        class: true
      });
      var span2_nodes = children(span2);
      t6 = claim_text(span2_nodes, "Watchlists");
      span2_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      t7 = claim_space(div9_nodes);
      div7 = claim_element(div9_nodes, "DIV", {
        class: true
      });
      var div7_nodes = children(div7);
      span3 = claim_element(div7_nodes, "SPAN", {
        class: true
      });
      var span3_nodes = children(span3);
      t8 = claim_text(span3_nodes, "10");
      span3_nodes.forEach(detach_dev);
      span4 = claim_element(div7_nodes, "SPAN", {
        class: true
      });
      var span4_nodes = children(span4);
      t9 = claim_text(span4_nodes, "Followers");
      span4_nodes.forEach(detach_dev);
      div7_nodes.forEach(detach_dev);
      t10 = claim_space(div9_nodes);
      div8 = claim_element(div9_nodes, "DIV", {
        class: true
      });
      var div8_nodes = children(div8);
      span5 = claim_element(div8_nodes, "SPAN", {
        class: true
      });
      var span5_nodes = children(span5);
      t11 = claim_text(span5_nodes, "89");
      span5_nodes.forEach(detach_dev);
      span6 = claim_element(div8_nodes, "SPAN", {
        class: true
      });
      var span6_nodes = children(span6);
      t12 = claim_text(span6_nodes, "Reviews");
      span6_nodes.forEach(detach_dev);
      div8_nodes.forEach(detach_dev);
      div9_nodes.forEach(detach_dev);
      div10_nodes.forEach(detach_dev);
      div11_nodes.forEach(detach_dev);
      t13 = claim_space(div17_nodes);
      div13 = claim_element(div17_nodes, "DIV", {
        class: true
      });
      var div13_nodes = children(div13);
      h3 = claim_element(div13_nodes, "H3", {
        class: true
      });
      var h3_nodes = children(h3);
      t14 = claim_text(h3_nodes, "Saksham Mrig");
      h3_nodes.forEach(detach_dev);
      t15 = claim_space(div13_nodes);
      div12 = claim_element(div13_nodes, "DIV", {
        class: true
      });
      var div12_nodes = children(div12);
      i = claim_element(div12_nodes, "I", {
        class: true
      });
      children(i).forEach(detach_dev);
      t16 = claim_text(div12_nodes, "\n              Gurgaon, India");
      div12_nodes.forEach(detach_dev);
      div13_nodes.forEach(detach_dev);
      t17 = claim_space(div17_nodes);
      div16 = claim_element(div17_nodes, "DIV", {
        class: true
      });
      var div16_nodes = children(div16);
      div15 = claim_element(div16_nodes, "DIV", {
        class: true
      });
      var div15_nodes = children(div15);
      div14 = claim_element(div15_nodes, "DIV", {
        class: true
      });
      var div14_nodes = children(div14);
      p0 = claim_element(div14_nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      b0 = claim_element(p0_nodes, "B", {});
      var b0_nodes = children(b0);
      t18 = claim_text(b0_nodes, "Breaking Bad : Since GOT is over, this is Officially the Greatest show ever made");
      b0_nodes.forEach(detach_dev);
      t19 = claim_space(p0_nodes);
      br0 = claim_element(p0_nodes, "BR", {});
      t20 = claim_text(p0_nodes, "\n                    I was waiting to see how GOT ended. It should be the greatest but they failed miserably in the finale season especially the last 3 (mainly the finale) episode.\n                    Writers need to take notes and be more like breaking bad. They had they ending planned out from the begging. They didn't try and build a massive brand or following behind the show and extend their seasons to do so. They stuck with their plan and created the greatest show we may ever see.\n                    \n                    Thank you for existing.");
      p0_nodes.forEach(detach_dev);
      t21 = claim_space(div14_nodes);
      p1 = claim_element(div14_nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      b1 = claim_element(p1_nodes, "B", {});
      var b1_nodes = children(b1);
      t22 = claim_text(b1_nodes, "GOT:  Extraordinary untill season 8");
      b1_nodes.forEach(detach_dev);
      t23 = claim_space(p1_nodes);
      br1 = claim_element(p1_nodes, "BR", {});
      t24 = claim_text(p1_nodes, "\n                    This is the first series i would recommend to anybody , it is an amazing piece of work , the most stunning TV series you will ever watch. Why i gave it 9/10 because of the last season, it's still good but very disappointing compared to all the seasons. YOU will enjoy every episode");
      p1_nodes.forEach(detach_dev);
      t25 = claim_space(div14_nodes);
      a = claim_element(div14_nodes, "A", {
        href: true,
        class: true
      });
      var a_nodes = children(a);
      t26 = claim_text(a_nodes, "Show more");
      a_nodes.forEach(detach_dev);
      div14_nodes.forEach(detach_dev);
      div15_nodes.forEach(detach_dev);
      div16_nodes.forEach(detach_dev);
      t27 = claim_space(div17_nodes);
      claim_component(carousel.$$.fragment, div17_nodes);
      div17_nodes.forEach(detach_dev);
      div18_nodes.forEach(detach_dev);
      div19_nodes.forEach(detach_dev);
      section1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(span0, "id", "blackOverlay");
      attr_dev(span0, "class", "w-full h-full absolute opacity-50 bg-black");
      add_location(span0, file, 22, 6, 761);
      attr_dev(div0, "class", "absolute top-0 w-full h-full bg-center bg-cover");
      set_style(div0, "background-image", "url(\"https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80\")");
      add_location(div0, file, 18, 4, 487);
      attr_dev(polygon, "class", "text-gray-300 fill-current");
      attr_dev(polygon, "points", "2560 0 2560 100 0 100");
      add_location(polygon, file, 40, 8, 1256);
      attr_dev(svg, "class", "absolute bottom-0 overflow-hidden");
      attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
      attr_dev(svg, "preserveAspectRatio", "none");
      attr_dev(svg, "version", "1.1");
      attr_dev(svg, "viewBox", "0 0 2560 100");
      attr_dev(svg, "x", "0");
      attr_dev(svg, "y", "0");
      add_location(svg, file, 31, 6, 1026);
      attr_dev(div1, "class", "top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden");
      set_style(div1, "height", "70px");
      add_location(div1, file, 27, 4, 882);
      attr_dev(section0, "class", "relative block");
      set_style(section0, "height", "500px");
      add_location(section0, file, 17, 0, 427);
      attr_dev(img, "alt", "...");
      if (img.src !== (img_src_value = "./images/prof_1.jpeg")) attr_dev(img, "src", img_src_value);
      attr_dev(img, "class", "shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16");
      set_style(img, "max-width", "150px");
      add_location(img, file, 58, 16, 1863);
      attr_dev(div2, "class", "relative");
      add_location(div2, file, 57, 14, 1824);
      attr_dev(div3, "class", "w-full lg:w-3/12 px-4 lg:order-2 flex justify-center");
      add_location(div3, file, 54, 12, 1716);
      attr_dev(button, "class", "bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1");
      attr_dev(button, "type", "button");
      set_style(button, "transition", "all 0.15s ease 0s");
      add_location(button, file, 70, 16, 2340);
      attr_dev(div4, "class", "py-6 px-3 mt-32 sm:mt-0");
      add_location(div4, file, 69, 14, 2286);
      attr_dev(div5, "class", "w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center");
      add_location(div5, file, 66, 12, 2169);
      attr_dev(span1, "class", "text-xl font-bold block uppercase tracking-wide text-gray-700");
      add_location(span1, file, 82, 18, 2922);
      attr_dev(span2, "class", "text-sm text-gray-500");
      add_location(span2, file, 85, 19, 3067);
      attr_dev(div6, "class", "mr-4 p-3 text-center");
      add_location(div6, file, 81, 16, 2869);
      attr_dev(span3, "class", "text-xl font-bold block uppercase tracking-wide text-gray-700");
      add_location(span3, file, 88, 18, 3213);
      attr_dev(span4, "class", "text-sm text-gray-500");
      add_location(span4, file, 91, 19, 3358);
      attr_dev(div7, "class", "mr-4 p-3 text-center");
      add_location(div7, file, 87, 16, 3160);
      attr_dev(span5, "class", "text-xl font-bold block uppercase tracking-wide text-gray-700");
      add_location(span5, file, 94, 18, 3506);
      attr_dev(span6, "class", "text-sm text-gray-500");
      add_location(span6, file, 97, 19, 3651);
      attr_dev(div8, "class", "lg:mr-4 p-3 text-center");
      add_location(div8, file, 93, 16, 3450);
      attr_dev(div9, "class", "flex justify-center py-4 lg:pt-4 pt-8");
      add_location(div9, file, 80, 14, 2801);
      attr_dev(div10, "class", "w-full lg:w-4/12 px-4 lg:order-1");
      add_location(div10, file, 79, 12, 2740);
      attr_dev(div11, "class", "flex flex-wrap justify-center");
      add_location(div11, file, 53, 10, 1660);
      attr_dev(h3, "class", "text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2");
      add_location(h3, file, 103, 12, 3836);
      attr_dev(i, "class", "fas fa-map-marker-alt mr-2 text-lg text-gray-500");
      add_location(i, file, 111, 14, 4117);
      attr_dev(div12, "class", "text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase");
      add_location(div12, file, 108, 12, 3995);
      attr_dev(div13, "class", "text-center mt-12");
      add_location(div13, file, 102, 10, 3792);
      add_location(b0, file, 121, 20, 4548);
      add_location(br0, file, 125, 20, 4712);
      attr_dev(p0, "class", "mb-4 text-lg leading-relaxed text-gray-800");
      add_location(p0, file, 120, 16, 4473);
      add_location(b1, file, 133, 20, 5425);
      add_location(br1, file, 136, 20, 5534);
      attr_dev(p1, "class", "mb-4 text-lg leading-relaxed text-gray-800");
      add_location(p1, file, 132, 16, 5350);
      attr_dev(a, "href", "#pablo");
      attr_dev(a, "class", "font-normal text-pink-500");
      add_location(a, file, 141, 16, 5881);
      attr_dev(div14, "class", "w-full lg:w-9/12 px-4");
      add_location(div14, file, 119, 14, 4421);
      attr_dev(div15, "class", "flex flex-wrap justify-center");
      add_location(div15, file, 118, 12, 4363);
      attr_dev(div16, "class", "mt-10 py-10 border-t border-gray-300 text-center");
      add_location(div16, file, 117, 10, 4288);
      attr_dev(div17, "class", "px-6");
      add_location(div17, file, 52, 8, 1631);
      attr_dev(div18, "class", "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64");
      add_location(div18, file, 49, 6, 1502);
      attr_dev(div19, "class", "container mx-auto px-4");
      add_location(div19, file, 48, 4, 1459);
      attr_dev(section1, "class", "relative py-16 bg-gray-300");
      add_location(section1, file, 47, 2, 1410);
    },
    m: function mount(target, anchor) {
      insert_dev(target, section0, anchor);
      append_dev(section0, div0);
      append_dev(div0, span0);
      append_dev(section0, t0);
      append_dev(section0, div1);
      append_dev(div1, svg);
      append_dev(svg, polygon);
      insert_dev(target, t1, anchor);
      insert_dev(target, section1, anchor);
      append_dev(section1, div19);
      append_dev(div19, div18);
      append_dev(div18, div17);
      append_dev(div17, div11);
      append_dev(div11, div3);
      append_dev(div3, div2);
      append_dev(div2, img);
      append_dev(div11, t2);
      append_dev(div11, div5);
      append_dev(div5, div4);
      append_dev(div4, button);
      append_dev(button, t3);
      append_dev(div11, t4);
      append_dev(div11, div10);
      append_dev(div10, div9);
      append_dev(div9, div6);
      append_dev(div6, span1);
      append_dev(span1, t5);
      append_dev(div6, span2);
      append_dev(span2, t6);
      append_dev(div9, t7);
      append_dev(div9, div7);
      append_dev(div7, span3);
      append_dev(span3, t8);
      append_dev(div7, span4);
      append_dev(span4, t9);
      append_dev(div9, t10);
      append_dev(div9, div8);
      append_dev(div8, span5);
      append_dev(span5, t11);
      append_dev(div8, span6);
      append_dev(span6, t12);
      append_dev(div17, t13);
      append_dev(div17, div13);
      append_dev(div13, h3);
      append_dev(h3, t14);
      append_dev(div13, t15);
      append_dev(div13, div12);
      append_dev(div12, i);
      append_dev(div12, t16);
      append_dev(div17, t17);
      append_dev(div17, div16);
      append_dev(div16, div15);
      append_dev(div15, div14);
      append_dev(div14, p0);
      append_dev(p0, b0);
      append_dev(b0, t18);
      append_dev(p0, t19);
      append_dev(p0, br0);
      append_dev(p0, t20);
      append_dev(div14, t21);
      append_dev(div14, p1);
      append_dev(p1, b1);
      append_dev(b1, t22);
      append_dev(p1, t23);
      append_dev(p1, br1);
      append_dev(p1, t24);
      append_dev(div14, t25);
      append_dev(div14, a);
      append_dev(a, t26);
      append_dev(div17, t27);
      mount_component(carousel, div17, null);
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
      if (detaching) detach_dev(section0);
      if (detaching) detach_dev(t1);
      if (detaching) detach_dev(section1);
      destroy_component(carousel);
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

function preload(_x, _x2) {
  return _preload.apply(this, arguments);
}

function _preload() {
  _preload = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(page, session) {
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // the `slug` parameter is available because this file
            // is called [slug].svelte
            page.params.id;

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
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
      preload: preload,
      Carousel: Carousel
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
