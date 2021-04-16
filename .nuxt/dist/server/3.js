exports.ids = [3];
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

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article-form.vue?vue&type=template&id=3851d362&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"editor-page"},[_vm._ssrNode("<div class=\"container page\"><div class=\"row\"><div class=\"col-md-10 offset-md-1 col-xs-12\"><ul class=\"error-messages\">"+(_vm._ssrList((_vm.errorList),function(errText){return ("<li>"+_vm._ssrEscape(_vm._s(errText))+"</li>")}))+"</ul> <form><fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Article Title\""+(_vm._ssrAttr("value",(_vm.form.title)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"What's this article about?\""+(_vm._ssrAttr("value",(_vm.form.description)))+" class=\"form-control\"></fieldset> <fieldset class=\"form-group\"><textarea rows=\"8\" placeholder=\"Write your article (in markdown)\" class=\"form-control\">"+_vm._ssrEscape(_vm._s(_vm.form.body))+"</textarea></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"enter tag\""+(_vm._ssrAttr("value",(_vm.tag)))+" class=\"form-control\"> <div class=\"tag-list\">"+(_vm._ssrList((_vm.form.tagList),function(tag){return ("<span ng-repeat=\"tag in $ctrl.article.tagList\" class=\"tag-default tag-pill ng-binding ng-scope\"><i class=\"ion-close-round\"></i>"+_vm._ssrEscape("\n                  "+_vm._s(tag)+"\n                ")+"</span>")}))+"</div></fieldset> <button type=\"button\" class=\"btn btn-lg pull-xs-right btn-primary\">\n              Publish Article\n            </button></form></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article-form.vue?vue&type=template&id=3851d362&

// EXTERNAL MODULE: ./utils/api/article.js
var article = __webpack_require__(31);

// EXTERNAL MODULE: ./utils/support.js
var support = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article-form.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var article_formvue_type_script_lang_js_ = ({
  middleware: ["auth"],

  data() {
    return {
      form: {
        title: "",
        description: "",
        body: "",
        tagList: []
      },
      errorList: [],
      isEditor: false,
      slug: "",
      tag: ""
    };
  },

  async created() {
    const {
      slug
    } = this.$route.query;

    if (slug) {
      const {
        data
      } = await article["a" /* ArticleApi */].getArticle(slug);
      this.isEditor = true;
      this.slug = slug;

      if (data) {
        const {
          title,
          body,
          description,
          tagList
        } = data.article;
        this.form = {
          title,
          body,
          description,
          tagList: tagList
        };
      }
    }
  },

  methods: {
    async submit() {
      const form = Object.assign(this.form);
      const API_NAME = this.isEditor ? "updateArticle" : "createArticle";
      const {
        data
      } = await article["a" /* ArticleApi */][API_NAME](form, this.slug).catch(err => {
        const error = Object(support["b" /* getErrorMsg */])(err.data);

        if (error) {
          this.errorList = error;
        }

        return Promise.resolve({});
      });

      if (data && data.article) {
        const username = this.$store.state.user.user.username;
        this.$router.replace(`/article/${data.article.slug}?uname=${username}`);
      }
    },

    removeTag(tag) {
      const list = this.form.tagList;
      const index = list.indexOf(tag);
      list.splice(index, 1);
    },

    addTag() {
      if (typeof this.tag != 'number' && !this.tag) return;
      const list = this.form.tagList;

      if (!list.includes(this.tag)) {
        list.push(this.tag);
      }

      this.tag = "";
    }

  }
});
// CONCATENATED MODULE: ./pages/article-form.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_article_formvue_type_script_lang_js_ = (article_formvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/article-form.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_article_formvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "48e36a7f"
  
)

/* harmony default export */ var article_form = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map