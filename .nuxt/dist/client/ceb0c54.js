(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{196:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r(66),c={articleList:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"global";return"feed"===e?Object(n.b)({url:"/api/articles/feed",params:t,method:"GET"}):Object(n.b)({url:"/api/articles",params:t,method:"GET"})},getTags:function(){return Object(n.b)({method:"GET",url:"/api/tags"})},favor:function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},unfavor:function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},getArticle:function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},createArticle:function(article){return Object(n.b)({method:"POST",url:"/api/articles",data:{article:article}})},delArticle:function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t)})},updateArticle:function(article,t){return Object(n.b)({method:"PUT",url:"/api/articles/".concat(t),data:{article:article}})},addComment:function(t,e){return Object(n.b)({method:"POST",url:"/api/articles/".concat(e,"/comments"),data:{comment:{body:t}}})},getComment:function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},delComment:function(t,e){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/comments/").concat(e)})}}},199:function(t,e,r){"use strict";var n=r(5),c=r(26),o=r(27),l=r(129),f=r(67),v=r(9),d=r(53).f,m=r(54).f,h=r(12).f,_=r(200).trim,O="Number",C=n.Number,y=C,E=C.prototype,j=o(r(85)(E))==O,T="trim"in String.prototype,k=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var r,n,c,o=(e=T?e.trim():_(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+e}for(var code,l=e.slice(2),i=0,v=l.length;i<v;i++)if((code=l.charCodeAt(i))<48||code>c)return NaN;return parseInt(l,n)}}return+e};if(!C(" 0o1")||!C("0b1")||C("+0x1")){C=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof C&&(j?v((function(){E.valueOf.call(r)})):o(r)!=O)?l(new y(k(e)),r,C):k(e)};for(var w,A=r(7)?d(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;A.length>x;x++)c(y,w=A[x])&&!c(C,w)&&h(C,w,m(y,w));C.prototype=E,E.constructor=C,r(15)(n,O,C)}},200:function(t,e,r){var n=r(3),c=r(35),o=r(9),l=r(201),f="["+l+"]",v=RegExp("^"+f+f+"*"),d=RegExp(f+f+"*$"),m=function(t,e,r){var c={},f=o((function(){return!!l[t]()||"​"!="​"[t]()})),v=c[t]=f?e(h):l[t];r&&(c[r]=v),n(n.P+n.F*f,"String",c)},h=m.trim=function(t,e){return t=String(c(t)),1&e&&(t=t.replace(v,"")),2&e&&(t=t.replace(d,"")),t};t.exports=m},201:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},205:function(t,e,r){"use strict";r(199);var n={name:"pagenation",props:{total:{type:Number,default:0},limit:{type:Number,default:20}},data:function(){return{currentIndex:1}},methods:{change:function(t){this.currentIndex=t,this.$emit("changePage",t)},reset:function(){this.currentIndex=1}},computed:{pageTotal:function(){return Math.ceil(this.total/this.limit)}}},c=r(10),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",[r("ul",{staticClass:"pagination"},t._l(t.pageTotal,(function(e){return r("li",{key:e,staticClass:"page-item ",class:{active:t.currentIndex==e}},[r("span",{staticClass:"page-link ng-binding",on:{click:function(r){return t.change(e)}}},[t._v(t._s(e))])])})),0)])}),[],!1,null,null,null);e.a=component.exports},271:function(t,e,r){"use strict";r.r(e);r(34),r(18),r(22),r(44),r(45);var n=r(17),c=r(4),o=(r(43),r(196)),l=r(33);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var v={layout:"default",name:"indexpage",components:{Pagenation:r(205).a},data:function(){return{tags:[],type:"global",loading:!1,params:{author:"",favorited:"",limit:20,offset:0,tag:""}}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.route,console.log("route",r.path),e.next=4,o.a.articleList();case 4:return n=e.sent,data=n.data,e.abrupt("return",data);case 7:case"end":return e.stop()}}),e)})))()},created:function(){this.type=this.$route.params.type||"global",this.getTags()},methods:{getArticles:function(t){var e=arguments,r=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var c,l,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=e.length>1&&void 0!==e[1]?e[1]:"global",r.loading=!0,n.next=4,o.a.articleList(t,c);case 4:l=n.sent,data=l.data,r.articles=data.articles,r.articlesCount=data.articlesCount,r.loading=!1;case 9:case"end":return n.stop()}}),n)})))()},getTags:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.getTags();case 2:r=e.sent,data=r.data,t.tags=data.tags;case 5:case"end":return e.stop()}}),e)})))()},changeArticleType:function(t){if(this.type=t,this.params.tag="",this.params.offset=0,this.articles=[],this.resetPagination(),"feed"==t){var e={limit:this.params.limit,offset:0};this.getArticles(e,t)}else this.params.offset=0,this.getArticles(this.params,t)},toFavor:function(article,t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var n,c,data;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n="favor",article.favorited&&(n="unfavor"),r.next=4,o.a[n](article.slug);case 4:c=r.sent,(data=c.data)&&data.article&&e.articles.splice(t,1,data.article);case 7:case"end":return r.stop()}}),r)})))()},resetPagination:function(){var t=this.$refs.pagination;t&&t.reset()},changeTag:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.params.tag=t,e.type="",e.getArticles(e.params);case 3:case"end":return r.stop()}}),r)})))()},changePage:function(t){this.params.offset=(t-1)*this.params.limit,this.getArticles(this.params,this.type),this.articles=[]},toArticle:function(article){this.$router.push("/article/"+article.slug)}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)("user",["user"]))},d=r(10),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-page"},[t._m(0),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-9"},[r("div",{staticClass:"feed-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[t.user?r("li",{staticClass:"nav-item"},[r("span",{staticClass:"nav-link",class:{active:"feed"===t.type},on:{click:function(e){return t.changeArticleType("feed")}}},[t._v("Your Feed")])]):t._e(),t._v(" "),r("li",{staticClass:"nav-item"},[r("span",{staticClass:"nav-link",class:{active:"global"===t.type},on:{click:function(e){return t.changeArticleType("global")}}},[t._v("Global Feed")])]),t._v(" "),t.params.tag?r("li",{staticClass:"nav-item"},[r("span",{staticClass:"nav-link active"},[t._v("# "+t._s(t.params.tag))])]):t._e()])]),t._v(" "),t._l(t.articles,(function(article,e){return r("div",{key:e,staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{to:"/profile/"+article.author.username}},[r("img",{attrs:{src:article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:"/profile/"+article.author.username}},[t._v(t._s(article.author.username))]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(article.author.createdAt,"MMM DD, YYYY")))])],1),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:article.favorited},on:{click:function(r){return t.toFavor(article,e)}}},[r("i",{staticClass:"ion-heart"}),t._v(" "+t._s(article.favoritesCount)+"\n            ")])],1),t._v(" "),r("span",{staticClass:"preview-link",on:{click:function(e){return t.toArticle(article)}}},[r("h1",[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v(t._s(article.description))]),t._v(" "),r("span",[t._v("Read more...")]),t._v(" "),r("ul",{staticClass:"tag-list"},t._l(article.tagList,(function(e,n){return r("li",{key:n,staticClass:"tag-default tag-pill tag-outline ng-binding ng-scope",attrs:{"ng-repeat":"tag in $ctrl.article.tagList"},on:{click:function(e){return t.toArticle(article)}}},[t._v("\n                "+t._s(e)+"\n              ")])})),0)])])})),t._v(" "),r("div",[t.loading?r("div",[t._v("loading...")]):t._e(),t._v(" "),t.loading||0!=t.articles.length?t._e():r("div",[t._v("nothing")])])],2),t._v(" "),r("div",{staticClass:"col-md-3"},[r("div",{staticClass:"sidebar"},[r("p",[t._v("Popular Tags")]),t._v(" "),r("div",{staticClass:"tag-list"},t._l(t.tags,(function(e){return r("span",{key:e,staticClass:"tag-pill tag-default",on:{click:function(r){return t.changeTag(e)}}},[t._v(t._s(e))])})),0)])])]),t._v(" "),r("Pagenation",{ref:"pagination",attrs:{total:t.articlesCount,limit:t.params.limit},on:{changePage:t.changePage}})],1)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"banner"},[r("div",{staticClass:"container"},[r("h1",{staticClass:"logo-font"},[t._v("conduit")]),t._v(" "),r("p",[t._v("A place to share your knowledge.")])])])}],!1,null,null,null);e.default=component.exports}}]);