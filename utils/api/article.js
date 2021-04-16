import { request } from "../../plugins/request";
export const ArticleApi = {
  articleList(params, type = "global") {
    if (type === "feed") {
      return request({
        url: "/api/articles/feed",
        params,
        method: "GET",
      });
    }
    return request({
      url: "/api/articles",
      params,
      method: "GET",
    });
  },
  getTags() {
    return request({
      method: "GET",
      url: "/api/tags",
    });
  },
  favor(slug) {
    return request({
      method: "POST",
      url: `/api/articles/${slug}/favorite`,
    });
  },
  unfavor(slug) {
    return request({
      method: "DELETE",
      url: `/api/articles/${slug}/favorite`,
    });
  },
  getArticle(slug) {
    return request({
      method: "GET",
      url: `/api/articles/${slug}`,
    });
  },
  createArticle(article) {
    return request({
      method: "POST",
      url: `/api/articles`,
      data: {
        article,
      },
    });
  },
  delArticle(slug) {
    return request({
        method: "DELETE",
        url: `/api/articles/${slug}`,
    });
  },
  updateArticle(article, slug) {
    return request({
        method: "PUT",
        url: `/api/articles/${slug}`,
        data: {
            article,
          },
    });
  },
  addComment(comment, slug) {
    return request({
      method: "POST",
      url: `/api/articles/${slug}/comments`,
      data: {
        comment: {
          body: comment,
        },
      },
    });
  },
  getComment(slug) {
    return request({
      method: "GET",
      url: `/api/articles/${slug}/comments`,
    });
  },
  delComment(slug, id) {
    return request({
      method: "DELETE",
      url: `/api/articles/${slug}/comments/${id}`,
    });
  },
};
