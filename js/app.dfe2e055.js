(function(e){function t(t){for(var r,n,c=t[0],u=t[1],o=t[2],l=0,d=[];l<c.length;l++)n=c[l],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,n=1;n<a.length;n++){var c=a[n];0!==s[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=a[0]))}return e}var r={},n={app:0},s={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-1b742b12":"f11a44f7","chunk-21bf94a0":"7173c2f9","chunk-00509996":"f96f7a5d","chunk-38955c11":"4116b92a","chunk-3fdfc446":"32213af3","chunk-29a7bba7":"da35928b","chunk-2d0ab43a":"ebbd081a","chunk-3a59ff0e":"462ebc72","chunk-46733508":"4cac55f8","chunk-57ef77d8":"031d78dc","chunk-2d228901":"0885cd89","chunk-452696c7":"efd3d78f","chunk-84cc821a":"1adda927","chunk-71c50812":"aaaf228e","chunk-d55d3ce2":"c7bda036","chunk-e06d6a3a":"7b4842d9"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(e){var t=[],a={"chunk-00509996":1,"chunk-38955c11":1,"chunk-29a7bba7":1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var r="css/"+({}[e]||e)+"."+{"chunk-1b742b12":"31d6cfe0","chunk-21bf94a0":"31d6cfe0","chunk-00509996":"6b204671","chunk-38955c11":"700358a2","chunk-3fdfc446":"31d6cfe0","chunk-29a7bba7":"82fc8cca","chunk-2d0ab43a":"31d6cfe0","chunk-3a59ff0e":"31d6cfe0","chunk-46733508":"31d6cfe0","chunk-57ef77d8":"31d6cfe0","chunk-2d228901":"31d6cfe0","chunk-452696c7":"31d6cfe0","chunk-84cc821a":"31d6cfe0","chunk-71c50812":"31d6cfe0","chunk-d55d3ce2":"31d6cfe0","chunk-e06d6a3a":"31d6cfe0"}[e]+".css",s=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var o=i[c],l=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(l===r||l===s))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){o=d[c],l=o.getAttribute("data-href");if(l===r||l===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete n[e],f.parentNode.removeChild(f),a(i)},f.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){n[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,a){r=s[e]=[t,a]}));t.push(r[2]=i);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e);var d=new Error;o=function(t){l.onerror=l.onload=null,clearTimeout(f);var a=s[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,a[1](d)}s[e]=void 0}};var f=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,a){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(a,r,function(t){return e[t]}.bind(null,r));return a},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/forum-front-end-vue/",u.oe=function(e){throw console.error(e),e};var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var d=0;d<o.length;d++)t(o[d]);var f=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"099c":function(e,t,a){},"12ab":function(e,t,a){},"15a8":function(e,t,a){"use strict";a("099c")},2375:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"spinner"},[a("div",{staticClass:"bouncing-loader"},[a("div"),a("div"),a("div")])])}],s=(a("15a8"),a("2877")),i={},c=Object(s["a"])(i,r,n,!1,null,"74807b6a",null);t["a"]=c.exports},"2fa3":function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return l}));a("d3b7");var r=a("bc3a"),n=a.n(r),s=a("3d20"),i=a.n(s),c="http://localhost:3000/api",u=n.a.create({baseURL:c});u.interceptors.request.use((function(e){var t=localStorage.getItem("token");return t&&(e.headers["Authorization"]="Bearer ".concat(t)),e}),(function(e){return Promise.reject(e)}));var o=u,l=i.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3})},"3b50":function(e,t,a){},"4cce":function(e,t,a){"use strict";var r=a("2fa3");t["a"]={getCurrentUser:function(){return r["b"].get("/get_current_user")},getUser:function(e){var t=e.userId;return r["b"].get("/users/".concat(t))},updateUser:function(e){var t=e.userId,a=e.formData;return r["b"].put("/users/".concat(t),a)},addFavorite:function(e){var t=e.restaurantId;return r["b"].post("/favorite/".concat(t),null)},removeFavorite:function(e){var t=e.restaurantId;return r["b"].delete("/favorite/".concat(t))},addLike:function(e){var t=e.restaurantId;return r["b"].post("/like/".concat(t),null)},deleteLike:function(e){var t=e.restaurantId;return r["b"].delete("/like/".concat(t))},getTopUsers:function(){return r["b"].get("/users/top")},addFollowing:function(e){var t=e.userId;return r["b"].post("/following/".concat(t),null)},deleteFollowing:function(e){var t=e.userId;return r["b"].delete("/following/".concat(t))}}},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"restaurant-forum"}},[a("Navbar"),a("main",{staticClass:"mt-5 bg-white",attrs:{role:"main"}},[a("router-view")],1)],1)},s=[],i=(a("4989"),a("ab8b"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar navbar-expand-lg fixed-top navbar-dark bg-dark"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e._v(" 餐廳評論網 ")]),e._m(0),a("div",{staticClass:"navbar-collapse collapse",attrs:{id:"navbarSupportedContent"}},[a("div",{staticClass:"ml-auto d-flex align-items-center"},[e.currentUser.isAdmin?a("router-link",{staticClass:"text-white mr-3",attrs:{to:"/admin"}},[e._v(" 管理員後台 ")]):e._e(),e.isAuthenticated?[a("router-link",{staticClass:"text-white mr-3",attrs:{to:"#"}},[e._v(" "+e._s(e.currentUser.name||"使用者")+" 您好 使用者 您好 ")]),a("button",{staticClass:"btn btn-sm btn-outline-success my-2 my-sm-0",attrs:{type:"button"},on:{click:e.logout}},[e._v(" 登出 ")])]:e._e()],2)])],1)}),c=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],u=a("5530"),o=a("2f62"),l={computed:Object(u["a"])({},Object(o["b"])(["currentUser","isAuthenticated"])),methods:{logout:function(){this.$store.commit("revokeAuthentication"),this.$router.push("/signin")}}},d=l,f=(a("fb5f"),a("2877")),p=Object(f["a"])(d,i,c,!1,null,"41346fa2",null),m=p.exports,b={components:{Navbar:m}},g=b,v=(a("a505"),Object(f["a"])(g,n,s,!1,null,"f8de434a",null)),h=v.exports,k=a("1da1"),w=(a("96cf"),a("b0c0"),a("d3b7"),a("3ca3"),a("ddb0"),a("caad"),a("2532"),a("8c4f")),y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[e._v(" 404 Page Not Found ")])},x=[],_={},C=Object(f["a"])(_,y,x,!1,null,null,null),P=C.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container py-5"},[a("form",{staticClass:"w-100",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[e._m(0),a("div",{staticClass:"form-label-group mb-2"},[a("label",{attrs:{for:"email"}},[e._v("email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",name:"email",type:"email",placeholder:"email",autocomplete:"email",required:"",autofocus:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),a("div",{staticClass:"form-label-group mb-3"},[a("label",{attrs:{for:"password"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"Password",autocomplete:"current-password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("button",{staticClass:"btn btn-lg btn-primary btn-block mb-3",attrs:{type:"submit",disabled:e.isProcessing}},[e._v(" Submit ")]),a("div",{staticClass:"text-center mb-3"},[a("p",[a("router-link",{attrs:{to:"/signup"}},[e._v("Sign Up")])],1)]),a("p",{staticClass:"mt-5 mb-3 text-muted text-center"},[e._v("© 2017-2018")])])])},j=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center mb-4"},[a("h1",{staticClass:"h3 mb-3 font-weight-normal"},[e._v("Sign In")])])}],I=a("7696"),E=a("2fa3"),R={data:function(){return{email:"",password:"",isProcessing:!1}},methods:{handleSubmit:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e.email&&e.password){t.next=4;break}return E["a"].fire({icon:"warning",title:"沒有輸入帳號密碼"}),t.abrupt("return");case 4:return e.isProcessing=!0,t.next=7,I["a"].signIn({email:e.email,password:e.password});case 7:if(a=t.sent,r=a.data,"success"===r.status){t.next=11;break}throw new Error("請確認您輸入了正確的帳號密碼");case 11:localStorage.setItem("token",r.token),e.$store.commit("setCurrentUser",r.user),e.$router.push("/restaurants"),t.next=21;break;case 16:t.prev=16,t.t0=t["catch"](0),e.isProcessing=!1,e.password="",E["a"].fire({icon:"warning",title:t.t0});case 21:case"end":return t.stop()}}),t,null,[[0,16]])})))()}}},S=R,A=Object(f["a"])(S,O,j,!1,null,null,null),L=A.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container py-5"},[a("NavTabs"),a("RestaurantsNavPills",{attrs:{categories:e.categories}}),e.isLoading?a("Spinner"):e._e(),a("div",{staticClass:"row"},e._l(e.restaurants,(function(e){return a("RestaurantCard",{key:e.id,attrs:{"initial-restaurant":e}})})),1),e.totalPage.length>1?a("RestaurantsPagination",{attrs:{"current-page":e.currentPage,"total-page":e.totalPage,"category-id":e.categoryId,"previous-page":e.previousPage,"next-page":e.nextPage}}):e._e()],1)},q=[],N=a("8bb1"),$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-md-6 col-lg-4"},[a("div",{staticClass:"card mb-4"},[a("img",{staticClass:"card-img-top",attrs:{src:e.restaurant.image,alt:"Card image cap",width:"286px",height:"180px"}}),a("div",{staticClass:"card-body"},[a("p",{staticClass:"card-text title-wrap"},[a("router-link",{attrs:{to:{name:"restaurant",params:{id:e.restaurant.id}}}},[e._v(" "+e._s(e.restaurant.name)+" ")])],1),a("span",{staticClass:"badge badge-secondary"},[e._v(e._s(e.restaurant.Category.name))]),a("p",{staticClass:"card-text text-truncate"},[e._v(" "+e._s(e.restaurant.description)+" ")])]),a("div",{staticClass:"card-footer"},[e.restaurant.isFavorited?a("button",{staticClass:"btn btn-danger btn-border favorite mr-2",attrs:{type:"button",disabled:e.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.removeFavorite(e.restaurant.id)}}},[e._v(" 移除最愛 ")]):a("button",{staticClass:"btn btn-primary btn-border favorite mr-2",attrs:{type:"button",disabled:e.isProcessing},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.addFavorite(e.restaurant.id)}}},[e._v(" 加到最愛 ")]),e.restaurant.isLiked?a("button",{staticClass:"btn btn-danger like m-1",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.deleteLike(e.restaurant.id)}}},[e._v(" Unlike ")]):a("button",{staticClass:"btn btn-primary like m-1",attrs:{type:"button"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.addLike(e.restaurant.id)}}},[e._v(" Like ")])])])])},F=[],T=a("4cce"),D={props:{initialRestaurant:{type:Object,required:!0}},data:function(){return{restaurant:this.initialRestaurant,isProcessing:!1}},methods:{addFavorite:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,T["a"].addFavorite({restaurantId:e});case 3:if(r=a.sent,n=r.data,"success"===n.status){a.next=7;break}throw new Error(n.message);case 7:t.restaurant=Object(u["a"])(Object(u["a"])({},t.restaurant),{},{isFavorited:!0}),a.next=14;break;case 10:a.prev=10,a.t0=a["catch"](0),console.log("error",a.t0),E["a"].fire({icon:"error",title:"無法將餐廳加入最愛，請稍後再試"});case 14:case"end":return a.stop()}}),a,null,[[0,10]])})))()},removeFavorite:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,T["a"].removeFavorite({restaurantId:e});case 3:if(r=a.sent,n=r.data,"success"===n.status){a.next=7;break}throw new Error(n.message);case 7:t.restaurant=Object(u["a"])(Object(u["a"])({},t.restaurant),{},{isFavorited:!1}),a.next=14;break;case 10:a.prev=10,a.t0=a["catch"](0),console.log("error",a.t0),E["a"].fire({icon:"error",title:"無法將餐廳移除最愛，請稍後再試"});case 14:case"end":return a.stop()}}),a,null,[[0,10]])})))()},addLike:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,T["a"].addLike({restaurantId:e});case 3:if(r=a.sent,n=r.data,"success"===n.status){a.next=7;break}throw new Error(n.message);case 7:t.restaurant=Object(u["a"])(Object(u["a"])({},t.restaurant),{},{isLiked:!0}),a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),E["a"].fire({icon:"error",title:"無法將餐廳加入 Like，請稍後再試"});case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()},deleteLike:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,T["a"].deleteLike({restaurantId:e});case 3:if(r=a.sent,n=r.data,"success"===n.status){a.next=7;break}throw new Error(n.message);case 7:t.restaurant=Object(u["a"])(Object(u["a"])({},t.restaurant),{},{isLiked:!1}),a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),E["a"].fire({icon:"error",title:"無法將餐廳移除 Like"});case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()}}},B=D,M=(a("ccfa"),Object(f["a"])(B,$,F,!1,null,"4155931e",null)),J=M.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"nav nav-pills mb-4"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"restaurants"}}},[e._v(" 全部 ")])],1),e._l(e.categories,(function(t){return a("li",{key:t.id,staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"restaurants",query:{categoryId:t.id}}}},[e._v(" "+e._s(t.name)+" ")])],1)}))],2)},H=[],K={props:{categories:{type:Array,required:!0}}},G=K,Q=(a("fdf7"),Object(f["a"])(G,z,H,!1,null,"3a07d45b",null)),V=Q.exports,W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{directives:[{name:"show",rawName:"v-show",value:e.previousPage,expression:"previousPage"}],class:["page-item",{disabled:1===e.currentPage}]},[a("router-link",{staticClass:"page-link",attrs:{"aria-label":"Previous",to:{name:"restaurants",query:{categoryId:e.categoryId,page:e.previousPage}}}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("«")])])],1),e._l(e.totalPage,(function(t){return a("li",{key:t,class:["page-item",{active:e.currentPage===t}]},[a("router-link",{staticClass:"page-link",attrs:{to:{name:"restaurants",query:{categoryId:e.categoryId,page:t}}}},[e._v(" "+e._s(t)+" ")])],1)})),a("li",{directives:[{name:"show",rawName:"v-show",value:e.nextPage,expression:"nextPage"}],class:["page-item",{disabled:e.currentPage===e.totalPage.length}]},[a("router-link",{staticClass:"page-link",attrs:{to:{name:"restaurants",query:{categoryId:e.categoryId,page:e.nextPage}},"aria-label":"Next"}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("»")])])],1)],2)])},X=[],Y=(a("a9e3"),{props:{categoryId:{type:[String,Number],default:""},currentPage:{type:Number,default:1},totalPage:{type:Array,required:!0},previousPage:{type:Number,required:!0},nextPage:{type:Number,required:!0}}}),Z=Y,ee=(a("92c4"),Object(f["a"])(Z,W,X,!1,null,"4de7085c",null)),te=ee.exports,ae=a("c4c3"),re=a("2375"),ne={components:{NavTabs:N["a"],RestaurantCard:J,RestaurantsNavPills:V,RestaurantsPagination:te,Spinner:re["a"]},data:function(){return{restaurants:[],categories:[],categoryId:-1,currentPage:1,totalPage:[],previousPage:-1,nextPage:-1,isLoading:!0}},created:function(){var e=this.$route.query,t=e.page,a=void 0===t?"":t,r=e.categoryId,n=void 0===r?"":r;this.fetchRestaurants({queryPage:a,queryCategoryId:n})},beforeRouteUpdate:function(e,t,a){var r=e.query,n=r.page,s=void 0===n?"":n,i=r.categoryId,c=void 0===i?"":i;this.fetchRestaurants({queryPage:s,queryCategoryId:c}),a()},methods:{fetchRestaurants:function(e){var t=this;return Object(k["a"])(regeneratorRuntime.mark((function a(){var r,n,s,i,c,u,o,l,d,f,p;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.queryPage,n=e.queryCategoryId,a.prev=1,a.next=4,ae["a"].getRestaurants({page:r,categoryId:n});case 4:s=a.sent,i=s.data,c=i.restaurants,u=i.categories,o=i.categoryId,l=i.page,d=i.totalPage,f=i.prev,p=i.next,t.restaurants=c,t.categories=u,t.categoryId=o,t.currentPage=l,t.totalPage=d,t.previousPage=f,t.nextPage=p,t.isLoading=!1,a.next=20;break;case 16:a.prev=16,a.t0=a["catch"](1),console.log("error",a.t0),E["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 20:case"end":return a.stop()}}),a,null,[[1,16]])})))()}}},se=ne,ie=Object(f["a"])(se,U,q,!1,null,null,null),ce=ie.exports;r["a"].use(o["a"]);var ue=new o["a"].Store({state:{currentUser:{id:-1,name:"",email:"",image:"",isAdmin:!1},isAuthenticated:!1,token:""},mutations:{setCurrentUser:function(e,t){e.currentUser=Object(u["a"])(Object(u["a"])({},e.currentUser),t),e.isAuthenticated=!0,e.token=localStorage.getItem("token")},revokeAuthentication:function(e){e.currentUser={},e.isAuthenticated=!1,e.token="",localStorage.removeItem("token")}},actions:{fetchCurrentUser:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){var a,r,n,s,i,c,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T["a"].getCurrentUser();case 3:return a=t.sent,r=a.data,n=r.id,s=r.name,i=r.email,c=r.image,u=r.isAdmin,e.commit("setCurrentUser",{id:n,name:s,email:i,image:c,isAdmin:u}),t.abrupt("return",!0);case 10:return t.prev=10,t.t0=t["catch"](0),console.log("error",t.t0),console.error("Failed to fetch user information"),e.commit("revokeAuthentication"),t.abrupt("return",!1);case 16:case"end":return t.stop()}}),t,null,[[0,10]])})))()}},modules:{}});r["a"].use(w["a"]);var oe=function(e,t,a){var r=ue.state.currentUser;0===r.name.length||r.isAdmin||a({name:"not-found"}),a()},le=[{path:"/",name:"root",redirect:"/signin"},{path:"/signin",name:"sign-in",component:L},{path:"/signup",name:"sign-up",component:function(){return a.e("chunk-3a59ff0e").then(a.bind(null,"5c9c"))}},{path:"/restaurants",name:"restaurants",component:ce},{path:"/restaurants/feeds",name:"restaurants-feeds",component:function(){return Promise.all([a.e("chunk-21bf94a0"),a.e("chunk-38955c11")]).then(a.bind(null,"9cab"))}},{path:"/restaurants/top",name:"restaurants-tops",component:function(){return a.e("chunk-46733508").then(a.bind(null,"571a"))}},{path:"/restaurants/:id",name:"restaurant",component:function(){return Promise.all([a.e("chunk-21bf94a0"),a.e("chunk-00509996")]).then(a.bind(null,"ad68"))}},{path:"/restaurants/:id/dashboard",name:"restaurant-dashboard",component:function(){return a.e("chunk-1b742b12").then(a.bind(null,"25d3"))}},{path:"/users/top",name:"users-top",component:function(){return a.e("chunk-d55d3ce2").then(a.bind(null,"22ab"))}},{path:"/users/:id",name:"user",component:function(){return a.e("chunk-2d0ab43a").then(a.bind(null,"1511"))}},{path:"/users/:id/edit",name:"user-edit",component:function(){return Promise.all([a.e("chunk-57ef77d8"),a.e("chunk-2d228901")]).then(a.bind(null,"da5c"))}},{path:"/admin",exact:!0,redirect:"admin/restaurants",beforeEnter:oe},{path:"/admin/restaurants",name:"admin-restaurants",component:function(){return a.e("chunk-71c50812").then(a.bind(null,"73a3"))},beforeEnter:oe},{path:"/admin/restaurants/new",name:"admin-restaurant-new",component:function(){return Promise.all([a.e("chunk-57ef77d8"),a.e("chunk-84cc821a")]).then(a.bind(null,"2743"))},beforeEnter:oe},{path:"/admin/restaurants/:id",name:"admin-restaurant",component:function(){return Promise.all([a.e("chunk-21bf94a0"),a.e("chunk-3fdfc446")]).then(a.bind(null,"f91c"))},beforeEnter:oe},{path:"/admin/restaurants/:id/edit",name:"admin-restaurant-edit",component:function(){return Promise.all([a.e("chunk-57ef77d8"),a.e("chunk-452696c7")]).then(a.bind(null,"6945"))},beforeEnter:oe},{path:"/admin/categories",name:"admin-categories",component:function(){return a.e("chunk-29a7bba7").then(a.bind(null,"5652"))},beforeEnter:oe},{path:"/admin/users",name:"admin-users",component:function(){return a.e("chunk-e06d6a3a").then(a.bind(null,"6135"))},beforeEnter:oe},{path:"*",name:"not-found",component:P}],de=new w["a"]({linkExactActiveClass:"active",routes:le});de.beforeEach(function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(t,a,r){var n,s,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=localStorage.getItem("token"),s=ue.state.token,i=ue.state.isAuthenticated,!n||n===s){e.next=7;break}return e.next=6,ue.dispatch("fetchCurrentUser");case 6:i=e.sent;case 7:if(c=["sign-up","sign-in"],i||c.includes(t.name)){e.next=13;break}return r("/signin"),e.abrupt("return");case 13:if(!i||!c.includes(t.name)){e.next=16;break}return r("/restaurants"),e.abrupt("return");case 16:r();case 17:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}());var fe=de;a("12ab");r["a"].config.productionTip=!1,new r["a"]({router:fe,store:ue,render:function(e){return e(h)}}).$mount("#app")},"594a":function(e,t,a){},"73ef":function(e,t,a){"use strict";a("594a")},7696:function(e,t,a){"use strict";var r=a("2fa3");t["a"]={signIn:function(e){var t=e.email,a=e.password;return r["b"].post("/signin",{email:t,password:a})}}},8771:function(e,t,a){},"8bb1":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"nav nav-tabs mb-4"},e._l(e.tabs,(function(t){return a("li",{key:t.id,staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:t.path}},[e._v(" "+e._s(t.title)+" ")])],1)})),0)},n=[],s=a("ec26"),i={data:function(){return{tabs:[{id:Object(s["a"])(),title:"首頁",path:"/restaurants"},{id:Object(s["a"])(),title:"最新動態",path:"/restaurants/feeds"},{id:Object(s["a"])(),title:"TOP 10 人氣餐廳",path:"/restaurants/top"},{id:Object(s["a"])(),title:"美食達人",path:"/users/top"}]}}},c=i,u=(a("73ef"),a("2877")),o=Object(u["a"])(c,r,n,!1,null,"1b0d83c0",null);t["a"]=o.exports},"92c4":function(e,t,a){"use strict";a("8771")},"9f93":function(e,t,a){},a505:function(e,t,a){"use strict";a("d08f")},c4c3:function(e,t,a){"use strict";a("d3b7"),a("3ca3"),a("ddb0"),a("9861");var r=a("2fa3");t["a"]={getRestaurants:function(e){var t=e.page,a=e.categoryID,n=new URLSearchParams({page:t,categoryID:a});return r["b"].get("/restaurants?".concat(n))},getRestaurant:function(e){var t=e.restaurantId;return r["b"].get("/restaurants/".concat(t))},getFeeds:function(){return r["b"].get("/restaurants/feeds")},getRestaurantsTop:function(){return r["b"].get("/restaurants/top")}}},ccfa:function(e,t,a){"use strict";a("9f93")},d08f:function(e,t,a){},d2e7:function(e,t,a){},fb5f:function(e,t,a){"use strict";a("3b50")},fdf7:function(e,t,a){"use strict";a("d2e7")}});
//# sourceMappingURL=app.dfe2e055.js.map