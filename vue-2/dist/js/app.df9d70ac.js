(function(t){function e(e){for(var n,i,o=e[0],c=e[1],u=e[2],l=0,d=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&d.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},s=[];function i(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"edd413f6"}[t]+".js"}function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=n);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=i(t);var u=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(l);var a=r[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",u.name="ChunkLoadError",u.type=n,u.request=s,a[1](u)}r[t]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var p=u;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"0d39":function(t,e,a){},"132d":function(t,e,a){"use strict";a("f723")},"21bb":function(t,e,a){"use strict";a("2dad")},"2dad":function(t,e,a){},"7abd":function(t,e,a){"use strict";a("ac7e")},"7b71":function(t,e,a){"use strict";a("0d39")},ab30:function(t,e,a){},ac7e:function(t,e,a){},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-link",{attrs:{to:"./Home"}},[a("span",[t._v("Home")])]),a("router-view")],1)},s=[],i=a("2877"),o={},c=Object(i["a"])(o,r,s,!1,null,null,null),u=c.exports,l=(a("d3b7"),a("8c4f")),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout page  page-home"},[a("Header",{attrs:{Title:"la home !! "}}),a("main",{staticClass:"main"},[a("div",{staticClass:"container"},[a("div",{staticClass:"jumbotron"},[a("H1",[t._v(" Kit starter twig-Js ")]),a("p",[t._v(" c'est un kit starter basé sur du twig js , avec une architecture front déja préconfigurer et construite a base de gulp, sass, twig-js, et plusieurs extentions et package npm ..., et surtout un systeme atomic de composant twig ( bouttons ,element de formulaire, slaiders ....... , regarder la doc de ce kit dans ce styleGuide ")]),t._m(0)],1)])])],1)},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a",{staticClass:"button button--style01",attrs:{href:"styleguide.html"}},[a("span",[t._v(" styleguide.html ")])])])}],f=a("d4ec"),m=a("262e"),v=a("2caf"),b=a("9ab4"),h=a("60a3"),_=a("d9bd"),y=function(t){Object(m["a"])(a,t);var e=Object(v["a"])(a);function a(){return Object(f["a"])(this,a),e.apply(this,arguments)}return a}(h["c"]);y=Object(b["a"])([Object(h["a"])({components:{Header:_["a"]}})],y);var g=y,j=g,O=(a("21bb"),Object(i["a"])(j,p,d,!1,null,null,null)),C=O.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout page  page-styleguide"},[a("Header",{attrs:{Title:"Style guide"}}),t._m(0)],1)},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"main"},[a("div",{staticClass:"container"},[a("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas libero praesentium laborum voluptatum aperiam distinctio aspernatur velit aut dolor animi at quod quasi eveniet, odio vel sit autem consequatur ullam. ")])])])}],k=function(t){Object(m["a"])(a,t);var e=Object(v["a"])(a);function a(){return Object(f["a"])(this,a),e.apply(this,arguments)}return a}(h["c"]);k=Object(b["a"])([Object(h["a"])({components:{Header:_["a"]}})],k);var x=k,E=x,T=(a("7b71"),Object(i["a"])(E,w,M,!1,null,null,null)),$=T.exports;n["a"].use(l["a"]);var H=[{path:"/",name:"Home",component:C},{path:"/Home",name:"Home",component:C},{path:"/style-guide",name:"StyleGuide",component:$},{path:"/tests",name:"Tests",component:function(){return a.e("about").then(a.bind(null,"751f"))}}],S=new l["a"]({mode:"history",base:"/",routes:H}),P=S,A=a("2f62");n["a"].use(A["a"]);var q=new A["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({router:P,store:q,render:function(t){return t(u)}}).$mount("#app")},d704:function(t,e,a){t.exports=a.p+"media/video-hero-banner-2.4a6167be.mp4"},d9bd:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("link",{attrs:{href:"https://fonts.googleapis.com/css2?family=Material+Icons",rel:"stylesheet"}}),n("link",{attrs:{href:"https://fonts.googleapis.com/css2?family=Material+Icons+Outlined",rel:"stylesheet"}}),n("link",{attrs:{href:"https://fonts.googleapis.com/css2?family=Material+Icons+Round",rel:"stylesheet"}}),n("link",{attrs:{href:"https://fonts.googleapis.com/css2?family=Material+Icons+Sharp",rel:"stylesheet"}}),n("MainMenuTop"),n("div",{staticClass:"header__hero"},[n("figure",{staticClass:"header__hero-video-bg"},[n("video",{attrs:{autoplay:"",loop:"",muted:""},domProps:{muted:!0}},[n("source",{attrs:{src:a("d704"),type:"video/mp4"}})])]),n("div",{staticClass:"container header__hero-content"},[n("h1",[t._v(" "+t._s(t.Title)+" ")]),n("AnimateAvatar")],1)])],1)},r=[],s=a("d4ec"),i=a("262e"),o=a("2caf"),c=a("9ab4"),u=a("60a3"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"maintopmenu"},[a("div",{staticClass:"container maintopmenu__wrapper"},[a("nav",{staticClass:"maintopmenu__navigation d-none d-md-flex"},[a("router-link",{attrs:{to:"./"}},[a("span",[t._v("Home")])]),a("router-link",{attrs:{to:"./style-guide"}},[a("span",[t._v(" StyleGuide")])]),a("router-link",{attrs:{to:"./Tests"}},[a("span",[t._v(" Tests ")])])],1),a("a",{staticClass:"maintopmenu__mobile  d-flex d-md-none",on:{click:t.openCloseMenu}},[a("i",{staticClass:"material-icons fz-40"},[t._v("menu")])]),t._m(0)]),a("div",{staticClass:"maintopmenu__slide-mobile",class:{"maintopmenu__slide-mobile--open":t.isMenuMobileOpen}},[a("router-link",{attrs:{to:"./"}},[a("span",[t._v("Home")])]),a("router-link",{attrs:{to:"./style-guide"}},[a("span",[t._v(" StyleGuide")])]),a("router-link",{attrs:{to:"./tests"}},[a("span",[t._v(" Tests ")])])],1),a("router-view")],1)},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"maintopmenu__tag-mode"},[a("i",{staticClass:"material-icons mr-2"},[t._v("error")]),a("span",[t._v(" version Vue 2.x : under construction ")])])}],d=a("bee2"),f=function(t){Object(i["a"])(a,t);var e=Object(o["a"])(a);function a(){var t;return Object(s["a"])(this,a),t=e.apply(this,arguments),t.isMenuMobileOpen=!1,t}return Object(d["a"])(a,[{key:"openCloseMenu",value:function(){this.isMenuMobileOpen=!this.isMenuMobileOpen}}]),a}(u["c"]);f=Object(c["a"])([Object(u["a"])({components:{}})],f);var m=f,v=m,b=(a("7abd"),a("2877")),h=Object(b["a"])(v,l,p,!1,null,"7754ca12",null),_=h.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"animate-avatar",on:{mouseover:t.hoverAvatar}},[t._m(0),t._m(1),t._m(2),t._m(3)])},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"animate-avatar__photo"},[n("figure",[n("img",{attrs:{src:a("f8cd"),alt:""}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"animate-avatar__html"},[a("span",[t._v("HTML")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"animate-avatar__css"},[a("span",[t._v("CSS")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"animate-avatar__js"},[a("span",[t._v("Js")])])}],j=function(t){Object(i["a"])(a,t);var e=Object(o["a"])(a);function a(){return Object(s["a"])(this,a),e.apply(this,arguments)}return Object(d["a"])(a,[{key:"hoverAvatar",value:function(t){window.innerWidth}}]),a}(u["c"]),O=j,C=(a("132d"),Object(b["a"])(O,y,g,!1,null,"f58326d8",null)),w=C.exports,M=function(t){Object(i["a"])(a,t);var e=Object(o["a"])(a);function a(){return Object(s["a"])(this,a),e.apply(this,arguments)}return a}(u["c"]);Object(c["a"])([Object(u["b"])()],M.prototype,"Title",void 0),M=Object(c["a"])([Object(u["a"])({components:{MainMenuTop:_,AnimateAvatar:w}})],M);var k=M,x=k,E=(a("e2a3"),Object(b["a"])(x,n,r,!1,null,"1d8da59b",null));e["a"]=E.exports},e2a3:function(t,e,a){"use strict";a("ab30")},f723:function(t,e,a){},f8cd:function(t,e,a){t.exports=a.p+"img/photo-profil.a0c6d8fa.jpg"}});
//# sourceMappingURL=app.df9d70ac.js.map