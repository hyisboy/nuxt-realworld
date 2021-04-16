exports.ids = [5];
exports.modules = {

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

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=template&id=86223754&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auth-page"},[_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-6 offset-md-3 col-xs-12\">","</div>",[_vm._ssrNode("<h1 class=\"text-xs-center\">"+_vm._ssrEscape(_vm._s(_vm.isLogin ? "Sign In" : "Sign Up"))+"</h1> "),_vm._ssrNode("<p class=\"text-xs-center\">","</p>",[(!_vm.isLogin)?_c('nuxt-link',{attrs:{"to":"/login"}},[_vm._v("Have an account?")]):_c('nuxt-link',{attrs:{"to":"/register"}},[_vm._v("to create account?")])],1),_vm._ssrNode(" <ul class=\"error-messages\">"+(_vm._ssrList((_vm.errorList),function(errText){return ("<li>"+_vm._ssrEscape(_vm._s(errText))+"</li>")}))+"</ul> <form>"+((!_vm.isLogin)?("<fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Your Name\" required=\"required\""+(_vm._ssrAttr("value",(_vm.form.username)))+" class=\"form-control form-control-lg\"></fieldset>"):"<!---->")+" <fieldset class=\"form-group\"><input type=\"email\" placeholder=\"Email\" required=\"required\""+(_vm._ssrAttr("value",(_vm.form.email)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"password\" placeholder=\"Password\" required=\"required\""+(_vm._ssrAttr("value",(_vm.form.password)))+" class=\"form-control form-control-lg\"></fieldset> <button class=\"btn btn-lg btn-primary pull-xs-right\">\n            Sign up\n          </button></form>")],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login.vue?vue&type=template&id=86223754&

// EXTERNAL MODULE: ./utils/api/user.js
var user = __webpack_require__(32);

// EXTERNAL MODULE: ./utils/support.js
var support = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var loginvue_type_script_lang_js_ = ({
  name: "login",

  data() {
    return {
      form: {
        email: '',
        //"shanliang@qq.com",
        username: '',
        // "david-xxx",
        password: '' // "22222222",

      },
      errorList: []
    };
  },

  computed: {
    isLogin() {
      return this.$route.name == "login";
    }

  },

  async asyncData({
    app
  }) {
    console.log(app.store.state.user, 'xxxuser in cookie');
    return {};
  },

  beforeCreate() {
    console.log("beforeCreate");
  },

  created() {
    console.log("created");
  },

  methods: {
    onSubmit(e) {
      if (this.isLogin) {
        this.toLogin();
        return;
      }

      this.toRegister();
    },

    async toLogin() {
      const params = Object(support["a" /* extraObj */])(this.form, ["email", "password"]);
      const {
        data
      } = await user["a" /* UserApi */].login(params).catch(err => {
        const error = Object(support["b" /* getErrorMsg */])(err.data);

        if (error) {
          this.errorList = error;
        }

        return Promise.resolve({});
      });

      if (data) {
        this.errorList = [];
        this.$store.commit("user/setUser", data.user);
        this.$router.push('/');
      }
    },

    async toRegister() {
      const {
        data
      } = await user["a" /* UserApi */].register(this.form).catch(err => {
        const error = Object(support["b" /* getErrorMsg */])(err.data);

        if (error) {
          this.errorList = error;
        }

        return Promise.resolve({});
      });

      if (data && data.user) {
        this.$router.replace("/login");
        this.errorList = [];
      }
    }

  }
});
// CONCATENATED MODULE: ./pages/login.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/login.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "36eddcd5"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map