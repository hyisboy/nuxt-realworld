"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BASE_URL = 'https://conduit.productionready.io';

var request = _axios["default"].create({
  baseURL: BASE_URL
});

exports.request = request;
request.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error.response);
});