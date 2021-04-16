"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserApi = void 0;

var _request = require("../../plugins/request");

var UserApi = {
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
  updateUser: function updateUser(user) {
    return (0, _request.request)({
      url: '/api/user',
      method: 'PUT',
      data: {
        user: user
      }
    });
  },
  getUser: function getUser() {
    return (0, _request.request)({
      url: '/api/user',
      method: 'GET'
    });
  },
  getProfile: function getProfile(username) {
    return (0, _request.request)({
      url: '/api/profiles/' + username,
      method: 'GET'
    });
  },
  followUser: function followUser(username) {
    return (0, _request.request)({
      url: "/api/profiles/".concat(username, "/follow"),
      method: 'POST'
    });
  },
  unfollowUser: function unfollowUser(username) {
    return (0, _request.request)({
      url: "/api/profiles/".concat(username, "/follow"),
      method: 'DELETE'
    });
  }
};
exports.UserApi = UserApi;