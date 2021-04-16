"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArticleApi = void 0;

var _request = require("../../plugins/request");

var ArticleApi = {
  articleList: function articleList(params) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "global";

    if (type === "feed") {
      return (0, _request.request)({
        url: "/api/articles/feed",
        params: params,
        method: "GET"
      });
    }

    return (0, _request.request)({
      url: "/api/articles",
      params: params,
      method: "GET"
    });
  },
  getTags: function getTags() {
    return (0, _request.request)({
      method: "GET",
      url: "/api/tags"
    });
  },
  favor: function favor(slug) {
    return (0, _request.request)({
      method: "POST",
      url: "/api/articles/".concat(slug, "/favorite")
    });
  },
  unfavor: function unfavor(slug) {
    return (0, _request.request)({
      method: "DELETE",
      url: "/api/articles/".concat(slug, "/favorite")
    });
  },
  getArticle: function getArticle(slug) {
    return (0, _request.request)({
      method: "GET",
      url: "/api/articles/".concat(slug)
    });
  },
  createArticle: function createArticle(article) {
    return (0, _request.request)({
      method: "POST",
      url: "/api/articles",
      data: {
        article: article
      }
    });
  },
  delArticle: function delArticle(slug) {
    return (0, _request.request)({
      method: "DELETE",
      url: "/api/articles/".concat(slug)
    });
  },
  updateArticle: function updateArticle(article, slug) {
    return (0, _request.request)({
      method: "PUT",
      url: "/api/articles/".concat(slug),
      data: {
        article: article
      }
    });
  },
  addComment: function addComment(comment, slug) {
    return (0, _request.request)({
      method: "POST",
      url: "/api/articles/".concat(slug, "/comments"),
      data: {
        comment: {
          body: comment
        }
      }
    });
  },
  getComment: function getComment(slug) {
    return (0, _request.request)({
      method: "GET",
      url: "/api/articles/".concat(slug, "/comments")
    });
  },
  delComment: function delComment(slug, id) {
    return (0, _request.request)({
      method: "DELETE",
      url: "/api/articles/".concat(slug, "/comments/").concat(id)
    });
  }
};
exports.ArticleApi = ArticleApi;