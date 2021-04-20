<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>
        <div class="article-meta">
          <nuxt-link
              :to="`/profile/${article.author.username}`"><img :src="article.author.image" /></nuxt-link>
          <div class="info">
            <a href="" class="author">{{ article.author.username }}</a>
            <span class="date">{{ article.author.updatedAt }}</span>
          </div>
          <template v-if="!isEditor">
            <button
              class="btn btn-sm btn-outline-secondary"
              :class="{ active: article.author.following }"
              @click="toFollow"
            >
              <i class="ion-plus-round"></i>
              &nbsp;
              {{
                article.author.following
                  ? "UnFollow " + article.author.username
                  : "Follow " + article.author.username
              }}
              <span class="counter"></span>
            </button>
            &nbsp;&nbsp;
            <button
              class="btn btn-sm btn-outline-primary"
              :class="{ active: article.favorited }"
              @click="toFavor"
            >
              <i class="ion-heart"></i>
              &nbsp;
              {{ article.favorited ? "UnFavorite Post" : "Favorite Post" }}
              <span class="counter">({{ article.favoritesCount }})</span>
            </button>
          </template>
          <!-- 个人修改 -->
          <template v-if="isEditor">
            <span ng-show="$ctrl.canModify" class="ng-scope">
              <nuxt-link
                class="btn btn-outline-secondary btn-sm"
                :to="'/article-form?slug=' + article.slug"
              >
                <i class="ion-edit"></i> Edit Article
              </nuxt-link>
              <button class="btn btn-outline-danger btn-sm" @click="toDelete">
                <i class="ion-trash-a"></i> Delete Article
              </button>
            </span>
          </template>
        </div>
      </div>
    </div>
    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12">
          <p>
            {{ article.description }}
          </p>
          <h2 id="introducing-ionic" v-html="article.body"></h2>
          <ul class="tag-list">
            <!-- ngRepeat: tag in $ctrl.article.tagList -->
            <li
              v-for="(tag, index) in article.tagList"
              :key="index"
              class="tag-default tag-pill tag-outline ng-binding ng-scope"
              ng-repeat="tag in $ctrl.article.tagList"
            >
              {{ tag }}
            </li>
            <!-- end ngRepeat: tag in $ctrl.article.tagList -->
          </ul>
        </div>
      </div>
      <hr />
      <div class="article-actions">
        <div class="article-meta">
          <nuxt-link
              :to="`/profile/${article.author.username}`"
             ><img :src="article.author.image" /></nuxt-link>
          <div class="info">
            <nuxt-link
              :to="`/profile/${article.author.username}`"
              class="author"
              >{{ article.author.username }}</nuxt-link
            >
            <span class="date">{{ article.author.updatedAt }}</span>
          </div>
          <template v-if="!isEditor">
            <button
            class="btn btn-sm btn-outline-secondary"
            :class="{ active: article.author.following }"
            @click="toFollow"
          >
            <i class="ion-plus-round"></i>
            &nbsp;
            {{
              article.author.following
                ? "UnFollow " + article.author.username
                : "Follow " + article.author.username
            }}
            <span class="counter"></span>
          </button>
          &nbsp;
          <button
            class="btn btn-sm btn-outline-primary"
            :class="{ active: article.favorited }"
            @click="toFavor"
          >
            <i class="ion-heart"></i>
            &nbsp;{{ article.favorited ? "UnFavorite Post" : "Favorite Post" }}
            <span class="counter">({{ article.favoritesCount }})</span>
          </button>
          </template>
          <template v-if="isEditor">
            <span ng-show="$ctrl.canModify" class="ng-scope">
              <nuxt-link
                class="btn btn-outline-secondary btn-sm"
                :to="'/article-form?slug=' + article.slug"
              >
                <i class="ion-edit"></i> Edit Article
              </nuxt-link>
              <button class="btn btn-outline-danger btn-sm" @click="toDelete">
                <i class="ion-trash-a"></i> Delete Article
              </button>
            </span>
          </template>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <form class="card comment-form">
            <div class="card-block">
              <textarea
                class="form-control"
                v-model="form.comment"
                placeholder="Write a comment..."
                rows="3"
              ></textarea>
            </div>
            <div class="card-footer">
              <img :src="article.author.image" class="comment-author-img" />
              <button
                class="btn btn-sm btn-primary"
                @click="addComment"
                :disabled="isDel"
                type="button"
              >
                Post Comment
              </button>
            </div>
          </form>
          <div class="card" v-for="comment in comments" :key="comment.id">
            <div class="card-block">
              <p class="card-text">
                {{ comment.body }}
              </p>
            </div>
            <div class="card-footer">
              <nuxt-link
                :to="`/profile/${article.author.username}`"
                class="comment-author"
              >
                <img :src="comment.author.image" class="comment-author-img" />
              </nuxt-link>
              &nbsp;
              <nuxt-link
                :to="`/profile/${article.author.username}`"
                class="comment-author"
                >{{ comment.author.username }}</nuxt-link
              >
              <span class="date-posted">{{ comment.updatedAt }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ArticleApi } from "../utils/api/article";
import { UserApi } from "../utils/api/user";
import MarkdownIt from "markdown-it";
export default {
  data() {
    return {
      form: {
        comment: "",
        slug: "",
      },
      isDel: false,
    };
  },
  head() {
    return {
      title: `${this.article.title}-详情`,
      meta: [{
        hid: "description",
        name: "description",
        content: this.article.description,
      }],
    };
  },
  async asyncData({ route, store }) {
    const [articleRes, commentRes] = await Promise.all([
      ArticleApi.getArticle(route.params.slug),
      ArticleApi.getComment(route.params.slug),
    ]);
    const article = articleRes.data.article;
    const md = new MarkdownIt();
    article.body = md.render(article.body);
    return {
      article,
      comments: commentRes.data.comments,
      form: {
        comment: "",
        slug: article.slug,
      },
      isEditor: store.state.user.user.username === route.query.uname,
    };
  },
  methods: {
    async toFavor() {
      let favorApiName = "favor";
      const article = this.article;
      if (article.favorited) {
        favorApiName = "unfavor";
      }
      const { data } = await ArticleApi[favorApiName](article.slug);
      if (data && data.article) {
        this.article = data.article;
      }
    },
    async toFollow() {
      let followApiName = "followUser";
      const article = this.article;
      if (article.author.following) {
        followApiName = "unfollowUser";
      }
      const { data } = await UserApi[followApiName](article.author.username);
      if (data && data.profile) {
        this.article.author.following = data.profile.following;
      }
    },
    async addComment() {
      const params = this.form;
      const { data } = await ArticleApi.addComment(params.comment, params.slug);
      if (data.comment) {
        this.form.comment = "";
        this.getComments();
      }
    },
    async getComments() {
      const { data } = await ArticleApi.getComment(this.article.slug);
      this.comments = data.comments;
    },
    async toDelete() {
      this.isDel = true;
      const { data } = await ArticleApi.delArticle(this.article.slug);
      if (data) {
        this.$router.replace("/home");
      }
    },
  },
};
</script>

<style>
</style>