"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mutations = exports.state = void 0;

var _jsCookie = _interopRequireDefault(require("js-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var state = function state() {
  var user = _jsCookie["default"].get('user');

  user = user ? JSON.parse(user) : '';
  return {
    user: user // 存储用户登录信息

  };
};

exports.state = state;
var mutations = {
  setUser: function setUser(state, user) {
    state.user = user;
  }
};
exports.mutations = mutations;