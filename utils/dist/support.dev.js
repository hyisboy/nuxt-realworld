"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extraObj = extraObj;
exports.getErrorMsg = getErrorMsg;
exports.getToken = getToken;

var _jsCookie = _interopRequireDefault(require("js-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function extraObj(obj, fields) {
  return fields.reduce(function (_, field) {
    _[field] = obj[field];
    return _;
  }, {});
} // 获取错误信息


function getErrorMsg(error) {
  var errors = error.errors;

  if (errors) {
    var errorArr = Object.keys(errors).reduce(function (_, key) {
      _.push("".concat(key, ":") + errors[key].join(','));

      return _;
    }, []);

    if (errorArr.length > 0) {
      return errorArr;
    }
  }

  return undefined;
}

function getToken() {
  var token;

  if (process.server) {}
}