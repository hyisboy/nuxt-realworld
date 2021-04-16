exports.ids = [4];
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

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=db6828a6&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\"><div class=\"container\"><h1 class=\"logo-font\">conduit</h1> <p>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-9\">","</div>",[_vm._ssrNode("<div class=\"feed-toggle\"><ul class=\"nav nav-pills outline-active\">"+((_vm.user)?("<li class=\"nav-item\"><span"+(_vm._ssrClass("nav-link",{ active: _vm.type === 'feed' }))+">Your Feed</span></li>"):"<!---->")+" <li class=\"nav-item\"><span"+(_vm._ssrClass("nav-link",{ active: _vm.type === 'global' }))+">Global Feed</span></li> "+((_vm.params.tag)?("<li class=\"nav-item\"><span class=\"nav-link active\">"+_vm._ssrEscape("# "+_vm._s(_vm.params.tag))+"</span></li>"):"<!---->")+"</ul></div> "),_vm._l((_vm.articles),function(article,index){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":("/profile/" + (article.author.username))}},[_c('img',{attrs:{"src":article.author.image}})]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"info\">","</div>",[_c('nuxt-link',{staticClass:"author",attrs:{"to":("/profile/" + (article.author.username))}},[_vm._v(_vm._s(article.author.username))]),_vm._ssrNode(" <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(article.author.createdAt,'MMM DD, YYYY')))+"</span>")],2),_vm._ssrNode(" <button"+(_vm._ssrClass("btn btn-outline-primary btn-sm pull-xs-right",{ active: article.favorited }))+"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(article.favoritesCount)+"\n            ")+"</button>")],2),_vm._ssrNode(" <span class=\"preview-link\"><h1>"+_vm._ssrEscape(_vm._s(article.title))+"</h1> <p>"+_vm._ssrEscape(_vm._s(article.description))+"</p> <span>Read more...</span> <ul class=\"tag-list\">"+(_vm._ssrList((article.tagList),function(tag,index){return ("<li ng-repeat=\"tag in $ctrl.article.tagList\" class=\"tag-default tag-pill tag-outline ng-binding ng-scope\">"+_vm._ssrEscape("\n                "+_vm._s(tag)+"\n              ")+"</li>")}))+"</ul></span>")],2)}),_vm._ssrNode(" <div>"+((_vm.loading)?("<div>loading...</div>"):"<!---->")+" "+((!_vm.loading && _vm.articles.length == 0)?("<div>nothing</div>"):"<!---->")+"</div>")],2),_vm._ssrNode(" <div class=\"col-md-3\"><div class=\"sidebar\"><p>Popular Tags</p> <div class=\"tag-list\">"+(_vm._ssrList((_vm.tags),function(tag){return ("<span class=\"tag-pill tag-default\">"+_vm._ssrEscape(_vm._s(tag))+"</span>")}))+"</div></div></div>")],2),_vm._ssrNode(" "),_c('Pagenation',{ref:"pagination",attrs:{"total":_vm.articlesCount,"limit":_vm.params.limit},on:{"changePage":_vm.changePage}})],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=db6828a6&

// EXTERNAL MODULE: ./utils/api/article.js
var api_article = __webpack_require__(31);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// EXTERNAL MODULE: ./components/pagenation.vue + 4 modules
var pagenation = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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



/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  layout: "default",
  name: "indexpage",
  components: {
    Pagenation: pagenation["a" /* default */]
  },

  data() {
    return {
      tags: [],
      type: "global",
      // global | feed
      loading: false,
      params: {
        author: "",
        favorited: "",
        limit: 20,
        offset: 0,
        tag: ""
      }
    };
  },

  async asyncData({
    route
  }) {
    console.log("route", route.path);
    const {
      data
    } = await api_article["a" /* ArticleApi */].articleList();
    return data;
  },

  created() {
    this.type = this.$route.params.type || "global";
    this.getTags();
  },

  methods: {
    async getArticles(params, type = "global") {
      this.loading = true;
      const {
        data
      } = await api_article["a" /* ArticleApi */].articleList(params, type);
      this.articles = data.articles;
      this.articlesCount = data.articlesCount;
      this.loading = false;
    },

    async getTags() {
      const {
        data
      } = await api_article["a" /* ArticleApi */].getTags();
      this.tags = data.tags;
    },

    // 更改查询的 范围
    changeArticleType(type) {
      this.type = type;
      this.params.tag = "";
      this.params.offset = 0;
      this.articles = [];
      this.resetPagination();

      if (type == "feed") {
        const params = {
          limit: this.params.limit,
          offset: 0
        };
        this.getArticles(params, type);
      } else {
        this.params.offset = 0;
        this.getArticles(this.params, type);
      }
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

    resetPagination() {
      const ref = this.$refs.pagination;
      ref && ref.reset();
    },

    async changeTag(tag) {
      this.params.tag = tag;
      this.type = "";
      this.getArticles(this.params);
    },

    changePage(index) {
      this.params.offset = (index - 1) * this.params.limit;
      this.getArticles(this.params, this.type);
      this.articles = [];
    },

    toArticle(article) {
      this.$router.push("/article/" + article.slug);
    }

  },
  computed: { ...Object(external_vuex_["mapState"])("user", ["user"])
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6d4639be"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=4.js.map