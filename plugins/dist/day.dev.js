"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _dayjs = _interopRequireDefault(require("dayjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].filter('date', function (value) {
  return (0, _dayjs["default"])(value);
});