"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(_ref) {
  var store = _ref.store,
      redirect = _ref.redirect,
      route = _ref.route;

  if (route.path !== '/login' && !store.state.user.user) {
    redirect('/login');
  }
}