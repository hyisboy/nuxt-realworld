<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item" v-if="user">
                <span
                  class="nav-link"
                  :class="{ active: type === 'feed' }"
                  @click="changeArticleType('feed')"
                  >Your Feed</span
                >
              </li>
              <li class="nav-item">
                <span
                  class="nav-link"
                  :class="{ active: type === 'global' }"
                  @click="changeArticleType('global')"
                  >Global Feed</span
                >
              </li>
              <li class="nav-item" v-if="params.tag">
                <span class="nav-link active"># {{ params.tag }}</span>
              </li>
            </ul>
          </div>
          <div
            class="article-preview"
            v-for="(article, index) in articles"
            :key="index"
          >
            <div class="article-meta">
              <nuxt-link :to="`/profile/${article.author.username}`"
                ><img :src="article.author.image"
              /></nuxt-link>
              <div class="info" >
                <nuxt-link
                  :to="`/profile/${article.author.username}`"
                  class="author"
                  >{{ article.author.username }}</nuxt-link
                >
                <span class="date">{{ article.author.createdAt | date('MMM DD, YYYY') }}</span>
              </div>
              <button
                class="btn btn-outline-primary btn-sm pull-xs-right"
                :class="{ active: article.favorited }"
                @click="toFavor(article, index)"
              >
                <i class="ion-heart"></i> {{ article.favoritesCount }}
              </button>
            </div>
            <span  class="preview-link"  @click="toArticle(article)">
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
              <ul class="tag-list">
                <!-- ngRepeat: tag in $ctrl.article.tagList -->
                <li
                  v-for="(tag, index) in article.tagList"
                  :key="index"
                  @click="toArticle(article)"
                  class="tag-default tag-pill tag-outline ng-binding ng-scope"
                  ng-repeat="tag in $ctrl.article.tagList"
                >
                  {{ tag }}
                </li>
                <!-- end ngRepeat: tag in $ctrl.article.tagList -->
              </ul>
            </span>
          </div>
          <div>
            <div v-if="loading">loading...</div>
            <div v-if="!loading && articles.length == 0">nothing</div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>
            <div class="tag-list">
              <span
                @click="changeTag(tag)"
                v-for="tag in tags"
                :key="tag"
                class="tag-pill tag-default"
                >{{ tag }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <Pagenation :total="articlesCount" ref="pagination"  :limit="params.limit" @changePage="changePage"/>
    </div>
  </div>
</template>
<script>
import { ArticleApi } from "../utils/api/article";
import { mapState } from "vuex";
import Pagenation from '@/components/pagenation'
export default {
  layout: "default",
  name: "indexpage",
  components: {
    Pagenation,
  },
  data() {
    return {
      tags: [],
      type: "global", // global | feed
      loading: false,
      params: {
        author: "",
        favorited: "",
        limit: 20,
        offset: 0,
        tag: "",
      },
    };
  },
  async asyncData({ route }) {
    console.log("route", route.path);
    const { data } = await ArticleApi.articleList();
    return data;
  },
  created() {
    this.type = this.$route.params.type || "global";
    this.getTags();
  },
  methods: {
    async getArticles(params, type = "global") {
      this.loading = true;
      const { data } = await ArticleApi.articleList(params, type);
      this.articles = data.articles;
      this.articlesCount = data.articlesCount;
      this.loading = false;
    },
    async getTags() {
      const { data } = await ArticleApi.getTags();
      this.tags = data.tags;
    },
    // 更改查询的 范围
    changeArticleType(type) {
      this.type = type;
      this.params.tag = "";
      this.params.offset = 0;
      this.articles = [];
      
      this.resetPagination();
      
      if (type == "feed") {
        const params = {
          limit: this.params.limit,
          offset: 0,
        };
        this.getArticles(params, type);
      } else {
        this.params.offset = 0;
        this.getArticles(this.params, type);
      }
    },
    async toFavor(article, index) {
      let favorApiName = "favor";
      if (article.favorited) {
        favorApiName = "unfavor";
      }
      const { data } = await ArticleApi[favorApiName](article.slug);
      if (data && data.article) {
        this.articles.splice(index, 1, data.article);
      }
    },
    resetPagination(){
       const ref = this.$refs.pagination;
       ref && ref.reset();
    },
    async changeTag(tag) {
      this.params.tag = tag;
      this.type = "";
      this.getArticles(this.params);
    },
    changePage(index) {
      this.params.offset = (index - 1) * this.params.limit;
      this.getArticles(this.params,this.type);
      this.articles = [];
    },
    toArticle(article) {
      this.$router.push("/article/" + article.slug);
    },
  },
  computed: {
    ...mapState("user", ["user"]),
  },
};
</script>

<style>
</style>