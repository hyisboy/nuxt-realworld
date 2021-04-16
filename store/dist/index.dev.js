"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plugins = exports.actions = void 0;

var _jsCookie = _interopRequireDefault(require("js-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cookieparser = process.server ? require('cookieparser') : undefined;

var userPlugin = function userPlugin(store) {
  store.subscribe(function (mutation, state) {
    if (mutation.type.startsWith('user/')) {
      var user = state.user && state.user.user ? state.user.user : '';

      if (user) {
        _jsCookie["default"].set('user', user);
      } else {
        _jsCookie["default"].remove('user');
      }
    }
  });
};

var actions = {
  // 1. 一个 特殊的 action， 在 服务端期间被调用，
  // 2. 用户初始化数据
  nuxtServerInit: function nuxtServerInit(_ref, _ref2) {
    var commit = _ref.commit;
    var req = _ref2.req;
    var cookie = req.headers.cookie;

    if (cookie) {
      var parsed = cookieparser.parse(cookie);

      try {
        var user = JSON.parse(parsed.user);
        console.log(user);
        commit('user/setUser', user);
      } catch (e) {}
    }
  }
};
exports.actions = actions;
var plugins = [userPlugin];
exports.plugins = plugins;