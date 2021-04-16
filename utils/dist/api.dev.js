"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.API = void 0;

var _request = require("./request");

var API = {
  login: function login(params) {
    return (0, _request.request)({
      url: '/api/users/login',
      data: {
        user: params
      },
      method: 'POST'
    });
  },
  register: function register(params) {
    return (0, _request.request)({
      url: '/api/users',
      data: {
        user: params
      },
      method: 'POST'
    });
  },
  articleList: function articleList() {
    return (0, _request.request)({
      url: '/api/articles',
      data: {},
      method: 'GET'
    });
  }
};
exports.API = API;