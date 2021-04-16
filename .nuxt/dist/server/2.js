exports.ids = [2];
exports.modules = {

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleApi; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

const ArticleApi = {
  articleList(params, type = "global") {
    if (type === "feed") {
      return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
        url: "/api/articles/feed",
        params,
        method: "GET"
      });
    }

    return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
      url: "/api/articles",
      params,
      method: "GET"
    });
  },

  getTags() {
    return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
      method: "GET",
      url: "/api/tags"
    });
  },

  favor(slug) {
    return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
      method: "POST",
      url: `/api/articles/${slug}/favorite`
    });
  },

  unfavor(slug) {
    return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
      method: "DELETE",
      url: `/api/articles/${slug}/favorite`
    });
  },

  getArticle(slug) {
    return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
      method: "GET",
      url: `/api/articles/${slug}`
    });
  },

  createArticle(article) {
    return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
      method: "POST",
      url: `/api/articles`,
      data: {
        article
      }
    });
  },

  delArticle(slug) {
    return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
      method: "DELETE",
      url: `/api/articles/${slug}`
    });
  },

  updateArticle(article, slug) {
    return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
      method: "PUT",
      url: `/api/articles/${slug}`,
      data: {
        article
      }
    });
  },

  addComment(comment, slug) {
    return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
      method: "POST",
      url: `/api/articles/${slug}/comments`,
      data: {
        comment: {
          body: comment
        }
      }
    });
  },

  getComment(slug) {
    return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
      method: "GET",
      url: `/api/articles/${slug}/comments`
    });
  },

  delComment(slug, id) {
    return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
      method: "DELETE",
      url: `/api/articles/${slug}/comments/${id}`
    });
  }

};

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserApi; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);

const UserApi = {
  login(params) {
    return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
      url: '/api/users/login',
      data: {
        user: params
      },
      method: 'POST'
    });
  },

  register(params) {
    return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
      url: '/api/users',
      data: {
        user: params
      },
      method: 'POST'
    });
  },

  updateUser(user) {
    return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
      url: '/api/user',
      method: 'PUT',
      data: {
        user
      }
    });
  },

  getUser() {
    return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
      url: '/api/user',
      method: 'GET'
    });
  },

  getProfile(username) {
    return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
      url: '/api/profiles/' + username,
      method: 'GET'
    });
  },

  followUser(username) {
    return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
      url: `/api/profiles/${username}/follow`,
      method: 'POST'
    });
  },

  unfollowUser(username) {
    return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
      url: `/api/profiles/${username}/follow`,
      method: 'DELETE'
    });
  }

};

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article.vue?vue&type=template&id=24d2a448&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_vm._ssrNode("<div class=\"article-meta\">","</div>",[_vm._ssrNode("<a href><img"+(_vm._ssrAttr("src",_vm.article.author.image))+"></a> <div class=\"info\"><a href class=\"author\">"+_vm._ssrEscape(_vm._s(_vm.article.author.username))+"</a> <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm.article.author.updatedAt))+"</span></div> "+((!_vm.isEditor)?("<button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{ active: _vm.article.author.following }))+"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n             \n            "+_vm._s(_vm.article.author.following
                ? "UnFollow " + _vm.article.author.username
                : "Follow " + _vm.article.author.username)+"\n            ")+"<span class=\"counter\"></span></button>\n            \n          <button"+(_vm._ssrClass("btn btn-sm btn-outline-primary",{ active: _vm.article.favorited }))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape("\n             \n            "+_vm._s(_vm.article.favorited ? "UnFavorite Post" : "Favorite Post")+"\n            ")+"<span class=\"counter\">"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button>"):"<!---->")+" "),(_vm.isEditor)?[_vm._ssrNode("<span ng-show=\"$ctrl.canModify\" class=\"ng-scope\">","</span>",[_c('nuxt-link',{staticClass:"btn btn-outline-secondary btn-sm",attrs:{"to":'/article-form?slug=' + _vm.article.slug}},[_c('i',{staticClass:"ion-edit"}),_vm._v(" Edit Article\n            ")]),_vm._ssrNode(" <button class=\"btn btn-outline-danger btn-sm\"><i class=\"ion-trash-a\"></i> Delete Article\n            </button>")],2)]:_vm._e()],2)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\"><div class=\"col-md-12\"><p>"+_vm._ssrEscape("\n          "+_vm._s(_vm.article.description)+"\n        ")+"</p> <h2 id=\"introducing-ionic\">"+(_vm._s(_vm.article.body))+"</h2> <ul class=\"tag-list\">"+(_vm._ssrList((_vm.article.tagList),function(tag,index){return ("<li ng-repeat=\"tag in $ctrl.article.tagList\" class=\"tag-default tag-pill tag-outline ng-binding ng-scope\">"+_vm._ssrEscape("\n            "+_vm._s(tag)+"\n          ")+"</li>")}))+"</ul></div></div> <hr> "),_vm._ssrNode("<div class=\"article-actions\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_vm._ssrNode("<a href=\"profile.html\"><img"+(_vm._ssrAttr("src",_vm.article.author.image))+"></a> "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":("/profile/" + (_vm.article.author.username))}},[_vm._v(_vm._s(_vm.article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm.article.author.updatedAt))+"</span>")],2),_vm._ssrNode(" "+((!_vm.isEditor)?("<button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary",{ active: _vm.article.author.following }))+"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n           \n          "+_vm._s(_vm.article.author.following
              ? "UnFollow " + _vm.article.author.username
              : "Follow " + _vm.article.author.username)+"\n          ")+"<span class=\"counter\"></span></button>\n         \n        <button"+(_vm._ssrClass("btn btn-sm btn-outline-primary",{ active: _vm.article.favorited }))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape("\n           "+_vm._s(_vm.article.favorited ? "UnFavorite Post" : "Favorite Post")+"\n          ")+"<span class=\"counter\">"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button>"):"<!---->")+" "),(_vm.isEditor)?[_vm._ssrNode("<span ng-show=\"$ctrl.canModify\" class=\"ng-scope\">","</span>",[_c('nuxt-link',{staticClass:"btn btn-outline-secondary btn-sm",attrs:{"to":'/article-form?slug=' + _vm.article.slug}},[_c('i',{staticClass:"ion-edit"}),_vm._v(" Edit Article\n            ")]),_vm._ssrNode(" <button class=\"btn btn-outline-danger btn-sm\"><i class=\"ion-trash-a\"></i> Delete Article\n            </button>")],2)]:_vm._e()],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-8 offset-md-2\">","</div>",[_vm._ssrNode("<form class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.form.comment))+"</textarea></div> <div class=\"card-footer\"><img"+(_vm._ssrAttr("src",_vm.article.author.image))+" class=\"comment-author-img\"> <button"+(_vm._ssrAttr("disabled",_vm.isDel))+" type=\"button\" class=\"btn btn-sm btn-primary\">\n              Post Comment\n            </button></div></form> "),_vm._l((_vm.comments),function(comment){return _vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-block\"><p class=\"card-text\">"+_vm._ssrEscape("\n              "+_vm._s(comment.body)+"\n            ")+"</p></div> "),_vm._ssrNode("<div class=\"card-footer\">","</div>",[_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":("/profile/" + (_vm.article.author.username))}},[_c('img',{staticClass:"comment-author-img",attrs:{"src":comment.author.image}})]),_vm._ssrNode("\n             \n            "),_c('nuxt-link',{staticClass:"comment-author",attrs:{"to":("/profile/" + (_vm.article.author.username))}},[_vm._v(_vm._s(comment.author.username))]),_vm._ssrNode(" <span class=\"date-posted\">"+_vm._ssrEscape(_vm._s(comment.updatedAt))+"</span>")],2)],2)})],2)])],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article.vue?vue&type=template&id=24d2a448&

// EXTERNAL MODULE: ./utils/api/article.js
var api_article = __webpack_require__(31);

// EXTERNAL MODULE: ./utils/api/user.js
var user = __webpack_require__(32);

// EXTERNAL MODULE: external "markdown-it"
var external_markdown_it_ = __webpack_require__(30);
var external_markdown_it_default = /*#__PURE__*/__webpack_require__.n(external_markdown_it_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  data() {
    return {
      form: {
        comment: "",
        slug: ""
      },
      isDel: false
    };
  },

  head() {
    return {
      title: `${this.article.title}-详情`,
      meta: [{
        hid: "description",
        name: "description",
        content: this.article.description
      }]
    };
  },

  async asyncData({
    route,
    store
  }) {
    const [articleRes, commentRes] = await Promise.all([api_article["a" /* ArticleApi */].getArticle(route.params.slug), api_article["a" /* ArticleApi */].getComment(route.params.slug)]);
    const article = articleRes.data.article;
    const md = new external_markdown_it_default.a();
    article.body = md.render(article.body);
    return {
      article,
      comments: commentRes.data.comments,
      form: {
        comment: "",
        slug: article.slug
      },
      isEditor: store.state.user.user.username === route.query.uname
    };
  },

  methods: {
    async toFavor() {
      let favorApiName = "favor";
      const article = this.article;

      if (article.favorited) {
        favorApiName = "unfavor";
      }

      const {
        data
      } = await api_article["a" /* ArticleApi */][favorApiName](article.slug);

      if (data && data.article) {
        this.article = data.article;
      }
    },

    async toFollow() {
      let followApiName = "followUser";
      const article = this.article;

      if (article.author.following) {
        followApiName = "unfollowUser";
      }

      const {
        data
      } = await user["a" /* UserApi */][followApiName](article.author.username);

      if (data && data.profile) {
        this.article.author.following = data.profile.following;
      }
    },

    async addComment() {
      const params = this.form;
      const {
        data
      } = await api_article["a" /* ArticleApi */].addComment(params.comment, params.slug);

      if (data.comment) {
        this.form.comment = "";
        this.getComments();
      }
    },

    async getComments() {
      const {
        data
      } = await api_article["a" /* ArticleApi */].getComment(this.article.slug);
      this.comments = data.comments;
    },

    async toDelete() {
      this.isDel = true;
      const {
        data
      } = await api_article["a" /* ArticleApi */].delArticle(this.article.slug);

      if (data) {
        this.$router.replace("/home");
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/article.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/article.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5444a6e2"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=2.js.map