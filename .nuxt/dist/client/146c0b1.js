(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{196:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(66),o={articleList:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"global";return"feed"===e?Object(n.b)({url:"/api/articles/feed",params:t,method:"GET"}):Object(n.b)({url:"/api/articles",params:t,method:"GET"})},getTags:function(){return Object(n.b)({method:"GET",url:"/api/tags"})},favor:function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},unfavor:function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},getArticle:function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},createArticle:function(article){return Object(n.b)({method:"POST",url:"/api/articles",data:{article:article}})},delArticle:function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t)})},updateArticle:function(article,t){return Object(n.b)({method:"PUT",url:"/api/articles/".concat(t),data:{article:article}})},addComment:function(t,e){return Object(n.b)({method:"POST",url:"/api/articles/".concat(e,"/comments"),data:{comment:{body:t}}})},getComment:function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},delComment:function(t,e){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/comments/").concat(e)})}}},197:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(66),o={login:function(t){return Object(n.b)({url:"/api/users/login",data:{user:t},method:"POST"})},register:function(t){return Object(n.b)({url:"/api/users",data:{user:t},method:"POST"})},updateUser:function(t){return Object(n.b)({url:"/api/user",method:"PUT",data:{user:t}})},getUser:function(){return Object(n.b)({url:"/api/user",method:"GET"})},getProfile:function(t){return Object(n.b)({url:"/api/profiles/"+t,method:"GET"})},followUser:function(t){return Object(n.b)({url:"/api/profiles/".concat(t,"/follow"),method:"POST"})},unfollowUser:function(t){return Object(n.b)({url:"/api/profiles/".concat(t,"/follow"),method:"DELETE"})}}},275:function(t,e,r){"use strict";r.r(e);var n=r(11),o=r(4),c=(r(43),r(37),r(14),r(38),r(52),r(196)),l=r(197),m=r(214),d=r.n(m),f={data:function(){return{form:{comment:"",slug:""},isDel:!1}},head:function(){return{title:"".concat(this.article.title,"-详情"),meta:[{hid:"description",name:"description",content:this.article.description}]}},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,l,m,f,v,article,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.route,o=t.store,e.next=3,Promise.all([c.a.getArticle(r.params.slug),c.a.getComment(r.params.slug)]);case 3:return l=e.sent,m=Object(n.a)(l,2),f=m[0],v=m[1],article=f.data.article,h=new d.a,article.body=h.render(article.body),e.abrupt("return",{article:article,comments:v.data.comments,form:{comment:"",slug:article.slug},isEditor:o.state.user.user.username===r.query.uname});case 11:case"end":return e.stop()}}),e)})))()},methods:{toFavor:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,article,n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="favor",(article=t.article).favorited&&(r="unfavor"),e.next=5,c.a[r](article.slug);case 5:n=e.sent,(data=n.data)&&data.article&&(t.article=data.article);case 8:case"end":return e.stop()}}),e)})))()},toFollow:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,article,n,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="followUser",(article=t.article).author.following&&(r="unfollowUser"),e.next=5,l.a[r](article.author.username);case 5:n=e.sent,(data=n.data)&&data.profile&&(t.article.author.following=data.profile.following);case 8:case"end":return e.stop()}}),e)})))()},addComment:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.form,e.next=3,c.a.addComment(r.comment,r.slug);case 3:n=e.sent,n.data.comment&&(t.form.comment="",t.getComments());case 6:case"end":return e.stop()}}),e)})))()},getComments:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.getComment(t.article.slug);case 2:r=e.sent,data=r.data,t.comments=data.comments;case 5:case"end":return e.stop()}}),e)})))()},toDelete:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isDel=!0,e.next=3,c.a.delArticle(t.article.slug);case 3:r=e.sent,r.data&&t.$router.replace("/home");case 6:case"end":return e.stop()}}),e)})))()}}},v=r(10),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-page"},[r("div",{staticClass:"banner"},[r("div",{staticClass:"container"},[r("h1",[t._v(t._s(t.article.title))]),t._v(" "),r("div",{staticClass:"article-meta"},[r("a",{attrs:{href:""}},[r("img",{attrs:{src:t.article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("a",{staticClass:"author",attrs:{href:""}},[t._v(t._s(t.article.author.username))]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t.article.author.updatedAt))])]),t._v(" "),t.isEditor?t._e():[r("button",{staticClass:"btn btn-sm btn-outline-secondary",class:{active:t.article.author.following},on:{click:t.toFollow}},[r("i",{staticClass:"ion-plus-round"}),t._v("\n             \n            "+t._s(t.article.author.following?"UnFollow "+t.article.author.username:"Follow "+t.article.author.username)+"\n            "),r("span",{staticClass:"counter"})]),t._v("\n            \n          "),r("button",{staticClass:"btn btn-sm btn-outline-primary",class:{active:t.article.favorited},on:{click:t.toFavor}},[r("i",{staticClass:"ion-heart"}),t._v("\n             \n            "+t._s(t.article.favorited?"UnFavorite Post":"Favorite Post")+"\n            "),r("span",{staticClass:"counter"},[t._v("("+t._s(t.article.favoritesCount)+")")])])],t._v(" "),t.isEditor?[r("span",{staticClass:"ng-scope",attrs:{"ng-show":"$ctrl.canModify"}},[r("nuxt-link",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{to:"/article-form?slug="+t.article.slug}},[r("i",{staticClass:"ion-edit"}),t._v(" Edit Article\n            ")]),t._v(" "),r("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:t.toDelete}},[r("i",{staticClass:"ion-trash-a"}),t._v(" Delete Article\n            ")])],1)]:t._e()],2)])]),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row article-content"},[r("div",{staticClass:"col-md-12"},[r("p",[t._v("\n          "+t._s(t.article.description)+"\n        ")]),t._v(" "),r("h2",{attrs:{id:"introducing-ionic"},domProps:{innerHTML:t._s(t.article.body)}}),t._v(" "),r("ul",{staticClass:"tag-list"},t._l(t.article.tagList,(function(e,n){return r("li",{key:n,staticClass:"tag-default tag-pill tag-outline ng-binding ng-scope",attrs:{"ng-repeat":"tag in $ctrl.article.tagList"}},[t._v("\n            "+t._s(e)+"\n          ")])})),0)])]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"article-actions"},[r("div",{staticClass:"article-meta"},[r("a",{attrs:{href:"profile.html"}},[r("img",{attrs:{src:t.article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{staticClass:"author",attrs:{to:"/profile/"+t.article.author.username}},[t._v(t._s(t.article.author.username))]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t.article.author.updatedAt))])],1),t._v(" "),t.isEditor?t._e():[r("button",{staticClass:"btn btn-sm btn-outline-secondary",class:{active:t.article.author.following},on:{click:t.toFollow}},[r("i",{staticClass:"ion-plus-round"}),t._v("\n           \n          "+t._s(t.article.author.following?"UnFollow "+t.article.author.username:"Follow "+t.article.author.username)+"\n          "),r("span",{staticClass:"counter"})]),t._v("\n         \n        "),r("button",{staticClass:"btn btn-sm btn-outline-primary",class:{active:t.article.favorited},on:{click:t.toFavor}},[r("i",{staticClass:"ion-heart"}),t._v("\n           "+t._s(t.article.favorited?"UnFavorite Post":"Favorite Post")+"\n          "),r("span",{staticClass:"counter"},[t._v("("+t._s(t.article.favoritesCount)+")")])])],t._v(" "),t.isEditor?[r("span",{staticClass:"ng-scope",attrs:{"ng-show":"$ctrl.canModify"}},[r("nuxt-link",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{to:"/article-form?slug="+t.article.slug}},[r("i",{staticClass:"ion-edit"}),t._v(" Edit Article\n            ")]),t._v(" "),r("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:t.toDelete}},[r("i",{staticClass:"ion-trash-a"}),t._v(" Delete Article\n            ")])],1)]:t._e()],2)]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-md-8 offset-md-2"},[r("form",{staticClass:"card comment-form"},[r("div",{staticClass:"card-block"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.comment,expression:"form.comment"}],staticClass:"form-control",attrs:{placeholder:"Write a comment...",rows:"3"},domProps:{value:t.form.comment},on:{input:function(e){e.target.composing||t.$set(t.form,"comment",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"card-footer"},[r("img",{staticClass:"comment-author-img",attrs:{src:t.article.author.image}}),t._v(" "),r("button",{staticClass:"btn btn-sm btn-primary",attrs:{disabled:t.isDel,type:"button"},on:{click:t.addComment}},[t._v("\n              Post Comment\n            ")])])]),t._v(" "),t._l(t.comments,(function(e){return r("div",{key:e.id,staticClass:"card"},[r("div",{staticClass:"card-block"},[r("p",{staticClass:"card-text"},[t._v("\n              "+t._s(e.body)+"\n            ")])]),t._v(" "),r("div",{staticClass:"card-footer"},[r("nuxt-link",{staticClass:"comment-author",attrs:{to:"/profile/"+t.article.author.username}},[r("img",{staticClass:"comment-author-img",attrs:{src:e.author.image}})]),t._v("\n             \n            "),r("nuxt-link",{staticClass:"comment-author",attrs:{to:"/profile/"+t.article.author.username}},[t._v(t._s(e.author.username))]),t._v(" "),r("span",{staticClass:"date-posted"},[t._v(t._s(e.updatedAt))])],1)])}))],2)])])])}),[],!1,null,null,null);e.default=component.exports}}]);