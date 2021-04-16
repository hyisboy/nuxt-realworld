exports.ids = [1];
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

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return extraObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getErrorMsg; });
/* unused harmony export getToken */
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);

function extraObj(obj, fields) {
  return fields.reduce((_, field) => {
    _[field] = obj[field];
    return _;
  }, {});
} // 获取错误信息

function getErrorMsg(error) {
  const {
    errors
  } = error;

  if (errors) {
    const errorArr = Object.keys(errors).reduce((_, key) => {
      _.push(`${key}:` + errors[key].join(','));

      return _;
    }, []);

    if (errorArr.length > 0) {
      return errorArr;
    }
  }

  return undefined;
}
function getToken() {
  let token;

  if (true) {}
}

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/pagenation.vue?vue&type=template&id=2250037e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',[_vm._ssrNode("<ul class=\"pagination\">"+(_vm._ssrList((_vm.pageTotal),function(index){return ("<li"+(_vm._ssrClass("page-item ",{ active: _vm.currentIndex == index }))+"><span class=\"page-link ng-binding\">"+_vm._ssrEscape(_vm._s(index))+"</span></li>")}))+"</ul>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/pagenation.vue?vue&type=template&id=2250037e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pagenation.vue?vue&type=script&lang=js&
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
/* harmony default export */ var pagenationvue_type_script_lang_js_ = ({
  name: "pagenation",
  props: {
    total: {
      type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: 20
    }
  },

  data() {
    return {
      currentIndex: 1
    };
  },

  methods: {
    change(index) {
      this.currentIndex = index;
      this.$emit("changePage", index);
    },

    reset() {
      this.currentIndex = 1;
    }

  },
  computed: {
    pageTotal() {
      return Math.ceil(this.total / this.limit);
    }

  }
});
// CONCATENATED MODULE: ./components/pagenation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_pagenationvue_type_script_lang_js_ = (pagenationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/pagenation.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_pagenationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "56e0af66"
  
)

/* harmony default export */ var pagenation = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile.vue?vue&type=template&id=18ab83d0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"profile-page"},[_vm._ssrNode("<div class=\"user-info\"><div class=\"container\"><div class=\"row\"><div class=\"col-xs-12 col-md-10 offset-md-1\"><img"+(_vm._ssrAttr("src",_vm.user.image))+" class=\"user-img\"> <h4>"+_vm._ssrEscape(_vm._s(_vm.user.username))+"</h4> <p>"+_vm._ssrEscape("\n            "+_vm._s(_vm.user.bio)+"\n          ")+"</p> <button"+(_vm._ssrClass("btn btn-sm btn-outline-secondary action-btn",{active: _vm.user.following}))+"><i class=\"ion-plus-round\"></i>"+_vm._ssrEscape("\n              \n             "+_vm._s(_vm.user.following
              ? "UnFollow " + _vm.user.username
              : "Follow " + _vm.user.username)+"\n          ")+"</button></div></div></div></div> "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xs-12 col-md-10 offset-md-1\">","</div>",[_vm._ssrNode("<div class=\"articles-toggle\"><ul class=\"nav nav-pills outline-active\"><li class=\"nav-item\"><span href"+(_vm._ssrClass("nav-link ",{active: _vm.active === 'author'}))+">My Articles</span></li> <li class=\"nav-item\"><span href"+(_vm._ssrClass("nav-link",{active: _vm.active === 'favorited'}))+">Favorited Articles</span></li></ul></div> "),_vm._l((_vm.articles),function(article,index){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":("/profile/" + (article.author.username))}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":("/profile/" + (article.author.username))}},[_vm._v(_vm._s(article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(article.author.createdAt))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{active: article.favorited}))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":("/article/" + (article.slug))}},[_c('h1',[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(article.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)}),_vm._ssrNode(" "),_c('Pagenation',{ref:"pagination",attrs:{"total":_vm.articlesCount,"limit":_vm.params.limit},on:{"changePage":_vm.changePage}})],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/profile.vue?vue&type=template&id=18ab83d0&

// EXTERNAL MODULE: ./utils/api/article.js
var api_article = __webpack_require__(31);

// EXTERNAL MODULE: ./utils/api/user.js
var user = __webpack_require__(32);

// EXTERNAL MODULE: ./utils/support.js
var support = __webpack_require__(33);

// EXTERNAL MODULE: ./components/pagenation.vue + 4 modules
var pagenation = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/profile.vue?vue&type=script&lang=js&
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




/* harmony default export */ var profilevue_type_script_lang_js_ = ({
  data() {
    return {
      active: 'author'
    };
  },

  components: {
    Pagenation: pagenation["a" /* default */]
  },

  async asyncData({
    route
  }) {
    const author = route.params.username;
    const articleRes = await api_article["a" /* ArticleApi */].articleList({
      author: author
    });
    const profileRes = await user["a" /* UserApi */].getProfile(author);
    return {
      articles: articleRes.data.articles,
      articlesCount: articleRes.data.articlesCount,
      params: {
        author,
        favorited: author,
        limit: 20,
        offset: 0
      },
      user: profileRes.data.profile
    };
  },

  methods: {
    async getArticles(type) {
      const params = Object(support["a" /* extraObj */])(this.params, [type]);
      this.active = type;
      const {
        data
      } = await api_article["a" /* ArticleApi */].articleList(params);
      this.articles = data.articles;
      this.articlesCount = data.articlesCount;
    },

    async toFavor(article, index) {
      let favorApiName = "favor";

      if (article.favorited) {
        favorApiName = "unfavor";
      }

      const {
        data
      } = await api_article["a" /* ArticleApi */][favorApiName](article.slug);

      if (data && data.article) {
        this.articles.splice(index, 1, data.article);
      }
    },

    changeArticleType(type) {
      this.params.offset = 0;
      this.getArticles(type);
      this.resetPagination();
    },

    async toFollow() {
      let followApiName = "followUser";

      if (this.user.following) {
        followApiName = "unfollowUser";
      }

      const {
        data
      } = await user["a" /* UserApi */][followApiName](this.user.username);

      if (data && data.profile) {
        this.user.following = data.profile.following;
      }
    },

    changePage(index) {
      this.params.offset = (index - 1) * this.params.limit;
      this.getArticles(this.type);
    },

    resetPagination() {
      const ref = this.$refs.pagination;
      ref && ref.reset();
    }

  }
});
// CONCATENATED MODULE: ./pages/profile.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_profilevue_type_script_lang_js_ = (profilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/profile.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_profilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2e16d215"
  
)

/* harmony default export */ var profile = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map