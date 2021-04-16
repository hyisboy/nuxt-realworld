"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.request = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BASE_URL = 'https://conduit.productionready.io';

var request = _axios["default"].create({
  baseURL: BASE_URL
});

exports.request = request;

var _default = function _default(_ref) {
  var store = _ref.store,
      redirect = _ref.redirect;
  request.interceptors.request.use(function (config) {
    var user = store.state.user.user;
    var token = user ? user.token : undefined;

    if (token) {
      config.headers.authorization = "Token ".concat(token);
    }

    return config;
  }, function (err) {
    console.log(err);
    return err;
  });
  request.interceptors.response.use(function (response) {
    return response;
  }, function (err) {
    switch (err.response.status) {
      case 401:
        redirect('/login');
        return Promise.reject();
    }

    return Promise.reject(err.response);
  });
};

exports["default"] = _default;