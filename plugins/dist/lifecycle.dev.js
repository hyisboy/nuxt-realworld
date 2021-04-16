"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(_ref) {
  var app = _ref.app;
  var router = app.router;
  router.beforeEach(function (to, form, next) {
    next();
  });
}