(function(t){function e(e){for(var s,r,c=e[0],o=e[1],l=e[2],d=0,v=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&v.push(n[r][0]),n[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(v.length)v.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,c=1;c<a.length;c++){var o=a[c];0!==n[o]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"07cb":function(t,e,a){"use strict";var s=a("0ebe"),n=a.n(s);n.a},"0ebe":function(t,e,a){},3211:function(t,e,a){},4365:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=a("8c4f"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("pm-header"),a("router-view"),a("pm-footer")],1)},r=[],c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"container has-text-centered"},[a("p",[t._v("😂 i love 💻 coxi ")])])])])}],l={},u=l,d=a("2877"),v=Object(d["a"])(u,c,o,!1,null,null,null),m=v.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"hero is-success"},[a("div",{staticClass:"hero-head"},[a("header",{staticClass:"nav"},[a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"nav-right nav-menu"},[a("router-link",{staticClass:"nav-item",attrs:{to:{name:"search"}}},[t._v("Search")]),a("router-link",{staticClass:"nav-item",attrs:{to:"about"}},[t._v("About us")])],1)])])]),a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container has-text-centered"},[a("h1",{staticClass:"title"},[t._v("Platzi Music")]),a("h2",{staticClass:"subtitle"},[t._v("Good songs")]),a("pm-player")],1)])])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-left"},[a("div",{staticClass:"nav-item"},[a("strong",[t._v("📻 Platzi Music")])])])}],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.track&&t.track.album?a("div",{staticClass:"content"},[a("p",[a("img",{attrs:{src:t.track.album.images[0].url}})]),a("p",[a("strong",[t._v(t._s(t.track.name))]),a("small",[t._v("[ "+t._s(t._f("ms-to-mm")(t.track.duration_ms))+" ]")])]),a("p",[a("audio",{attrs:{controls:"",src:t.track.preview_url}})])]):t._e()},b=[],_=a("5530"),k=a("2f62"),C={computed:Object(_["a"])({},Object(k["d"])(["track"]))},g=C,y=(a("07cb"),Object(d["a"])(g,h,b,!1,null,"06997f5e",null)),w=y.exports,x={components:{PmPlayer:w}},O=x,j=Object(d["a"])(O,f,p,!1,null,null,null),T=j.exports,$={name:"app",components:{PmFooter:m,PmHeader:T}},E=$,P=(a("5c0b"),Object(d["a"])(E,i,r,!1,null,null,null)),N=P.exports,S=(a("99af"),a("4de4"),a("b680"),{});function L(t){var e=Math.floor(t/6e4),a=(t%6e4/1e3).toFixed(0);return"".concat(e,":").concat(a)}S.install=function(t){t.filter("ms-to-mm",(function(t){return L(t)}))};var M=S,Q=(a("4160"),a("159b"),{});function B(t,e){t.style.filter=e.value?"(none)":"blur(3px)",t.style.cursor=e.value?"inherit":"not-allowed",t.querySelectorAll("button").forEach((function(t){e.value?t.removeAttribute("disabled"):t.setAttribute("disabled",!0)}))}Q.install=function(t){t.directive("blur",{bind:function(t,e){B(t,e)}})};var I=Q,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("transition",{attrs:{name:"move"}},[a("pm-notifications",{directives:[{name:"show",rawName:"v-show",value:t.showNotifications,expression:"showNotifications"}]},[a("p",{attrs:{slot:"body"},slot:"body"},[t._v("Results not Found")])])],1),a("trasition",{attrs:{name:"move"}},[a("pm-loader",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}]})],1),a("section",{directives:[{name:"show",rawName:"v-show",value:!t.isLoading,expression:"!isLoading"}],staticClass:"section"},[a("nav",{staticClass:"nav"},[a("div",{staticClass:"container"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],staticClass:"input is-large",attrs:{type:"text",placeholder:"Search Songs"},domProps:{value:t.searchQuery},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)},input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),a("a",{staticClass:"button is-info is-large",on:{click:t.search}},[t._v("Buscar")]),a("a",{staticClass:"button is-danger is-large"},[t._v("×")])])]),a("div",{staticClass:"container"},[a("p",[a("small",[t._v(t._s(t.searchMessage))])])]),a("div",{staticClass:"container results"},[a("div",{staticClass:"columns is-multiline"},t._l(t.tracks,(function(e){return a("div",{staticClass:"column is-one-quarter"},[a("pm-track",{directives:[{name:"blur",rawName:"v-blur",value:e.preview_url,expression:"t.preview_url"}],class:{"is-active":e.id===t.selectedTrack},attrs:{track:e},on:{select:t.setSelectedTrack}})],1)})),0)])])],1)},A=[],z=(a("ac1f"),a("841c"),a("5ab2")),F=a.n(z),U={apiUrl:"https://platzi-music-api.now.sh"},J=U,G=F.a.create({baseUrl:J.apiUrl}),H=G,R={search:function(t){var e="track";return H.get("/search",{params:{q:t,type:e}}).then((function(t){return t.data}))},getById:function(t){return H.get("/tracks/".concat(t)).then((function(t){return t.data}))}},W=R,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.track&&t.track.album?a("div",{staticClass:"card"},[a("div",{staticClass:"card-image"},[a("figure",{staticClass:"image is-1by1"},[a("img",{attrs:{src:t.track.album.images[0].url}})])]),a("div",{staticClass:"card-content"},[a("div",{staticClass:"media"},[a("div",{staticClass:"media-left"},[a("figure",{staticClass:"image is-48x48"},[a("img",{attrs:{src:t.track.album.images[0].url}})])]),a("div",{staticClass:"media-content"},[a("p",{staticClass:"title is-6"},[a("strong",[t._v(t._s(t.track.name))])]),a("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.track.artists[0].name))])])]),a("div",{staticClass:"content"},[a("small",[t._v(t._s(t._f("ms-to-mm")(t.track.duration_ms)))]),a("nav",{staticClass:"level"},[a("div",{staticClass:"level-left"},[a("button",{staticClass:"level-item button is-primary"},[a("span",{staticClass:"icon is-small",on:{click:t.selectTrack}},[t._v("⏯")])]),a("button",{staticClass:"level-item button is-warning"},[a("span",{staticClass:"icon is-small",on:{click:function(e){return t.goToTrack(t.track.id)}}},[t._v("🌌")])])])])])])]):t._e()},K=[],V={methods:{selectTrack:function(){this.track.preview_url&&this.$store.commit("setTrack",this.track)}}},X=V,Y={mixins:[X],props:{track:{type:Object,required:!0}},methods:{goToTrack:function(t){this.track.preview_url&&this.$router.push({name:"track",params:{id:t}})}}},Z=Y,tt=Object(d["a"])(Z,D,K,!1,null,null,null),et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("content",{staticClass:"has-text-centered"}),t._t("loader",[a("h1",[t._v("Loading...")])])],2)},st=[],nt=(a("9a3c"),{}),it=Object(d["a"])(nt,at,st,!1,null,"1ff4c9a7",null),rt=it.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-5 is-offset-4"},[a("div",{staticClass:"notification is-danger"},[t._t("body",[t._v("Something went wrong...")])],2)])])])},ot=[],lt=(a("9049"),{}),ut=Object(d["a"])(lt,ct,ot,!1,null,"3b2286ed",null),dt=ut.exports,vt={name:"app",components:{PmTrack:et,PmLoader:rt,PmNotifications:dt},data:function(){return{searchQuery:"",tracks:[],isLoading:!1,showNotifications:!1,selectedTrack:""}},computed:{searchMessage:function(){return"Encontrados: ".concat(this.tracks.length)}},watch:{showNotifications:function(){var t=this;this.showNotifications&&setTimeout((function(){t.showNotifications=!1}),3e3)}},methods:{search:function(){var t=this;this.searchQuery&&(this.isLoading=!0,W.search(this.searchQuery).then((function(e){t.showNotifications=0===e.tracks.total,t.tracks=e.tracks.items,t.isLoading=!1})))},setSelectedTrack:function(t){this.selectedTrack=t}}},mt=vt,ft=(a("e589"),Object(d["a"])(mt,q,A,!1,null,null,null)),pt=ft.exports,ht=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},bt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h1",{staticClass:"title"},[t._v("We")])])}],_t={},kt=Object(d["a"])(_t,ht,bt,!1,null,null,null),Ct=kt.exports,gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.track&&t.track.album?a("div",{staticClass:"container"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-3 has-text-centered"},[a("figure",{staticClass:"media-left"},[a("p",{staticClass:"image"},[a("img",{attrs:{src:t.track.album.images[0].url}})]),a("p",{staticClass:"button-bar"},[a("a",{staticClass:"button is-primary is-large"},[a("span",{staticClass:"icon",on:{click:t.selectTrack}},[t._v("▶️")])])])])]),a("div",{staticClass:"column is-8"},[a("div",{staticClass:"panel"},[a("div",{staticClass:"panel-heading"},[a("h1",{staticClass:"title"},[t._v(t._s(t.trackTitle))])]),a("div",{staticClass:"panel-block"},[a("div",{staticClass:"article-media"},[a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},t._l(t.track,(function(e,s){return a("ul",[a("li",[a("strong",[t._v(t._s(s)+": ")]),a("span",[t._v(t._s(e))])])])})),0)]),t._m(0)])])])])])]):t._e()},yt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"nav-level"},[a("div",{staticClass:"level-left"},[a("a",{staticClass:"level-item"})])])}],wt={mixins:[X],computed:Object(_["a"])(Object(_["a"])({},Object(k["d"])(["track"])),Object(k["c"])(["trackTitle"])),created:function(){var t=this.$route.params.id;this.track&&this.track.id&&this.track.id===t||this.getTrackById({id:t}).then((function(){return console.log("Track loaded...")}))},methods:Object(_["a"])({},Object(k["b"])(["getTrackById"]))},xt=wt,Ot=(a("db75"),Object(d["a"])(xt,gt,yt,!1,null,null,null)),jt=Ot.exports,Tt=[{path:"/",component:pt,name:"search"},{path:"/about",component:Ct,name:"about"},{path:"/track/:id",component:jt,name:"track"}],$t=Tt;a("b0c0");s["a"].use(k["a"]);var Et=new k["a"].Store({state:{track:{}},getters:{trackTitle:function(t){return t.track.name?"".concat(t.track.name," - ").concat(t.track.artists[0].name):""}},mutations:{setTrack:function(t,e){t.track=e}},actions:{getTrackById:function(t,e){return W.getById(e.id).then((function(e){return t.commit("setTrack",e),e}))}}}),Pt=Et,Nt={install:function(t){t.prototype.$bus=new t}},St=Nt;s["a"].config.productionTip=!1,s["a"].use(n["a"]),s["a"].use(St),s["a"].use(M),s["a"].use(I);var Lt=new n["a"]({routes:$t,mode:"history"});new s["a"]({render:function(t){return t(N)},router:Lt,store:Pt}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),n=a.n(s);n.a},"7bff":function(t,e,a){},"82d8":function(t,e,a){},9049:function(t,e,a){"use strict";var s=a("7bff"),n=a.n(s);n.a},"9a3c":function(t,e,a){"use strict";var s=a("3211"),n=a.n(s);n.a},"9c0c":function(t,e,a){},db75:function(t,e,a){"use strict";var s=a("82d8"),n=a.n(s);n.a},e589:function(t,e,a){"use strict";var s=a("4365"),n=a.n(s);n.a}});
//# sourceMappingURL=app.bc971a95.js.map