<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="user.image" class="user-img" />
            <h4>{{user.username}}</h4>
            <p>
              {{user.bio}}
            </p>
            <button class="btn btn-sm btn-outline-secondary action-btn" :class="{active: user.following}" @click="toFollow">
              <i class="ion-plus-round"></i>
              &nbsp; 
               {{user.following
                ? "UnFollow " + user.username
                : "Follow " + user.username }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <span class="nav-link " :class="{active: active === 'author'}" href="" @click="changeArticleType('author')">My Articles</span>
              </li>
              <li class="nav-item">
                <span class="nav-link" :class="{active: active === 'favorited'}" href="" @click="changeArticleType('favorited')">Favorited Articles</span>
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
              <div class="info">
                <nuxt-link
                  :to="`/profile/${article.author.username}`"
                  class="author"
                  >{{ article.author.username }}</nuxt-link
                >
                <span class="date">{{ article.author.createdAt }}</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right" @click="toFavor(article,index)" :class="{active: article.favorited}">
                <i class="ion-heart"  ></i> {{ article.favoritesCount }}
              </button>
            </div>
            <nuxt-link  :to="`/article/${article.slug}`" class="preview-link">
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>
         <Pagenation ref="pagination" :total="articlesCount" :limit="params.limit" @changePage="changePage"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ArticleApi } from "../utils/api/article";
import { UserApi } from "../utils/api/user";
import { extraObj } from "../utils/support";
import Pagenation from '@/components/pagenation'
export default {
  data () {
    return {
      active: 'author'
    }
  },
  components: {
   Pagenation,
  },
  async asyncData({ route }) {
    const author = route.params.username;
    const articleRes = await ArticleApi.articleList({ author: author });
    const profileRes = await UserApi.getProfile(author);
    return {
      articles: articleRes.data.articles,
      articlesCount: articleRes.data.articlesCount,
      params: {
        author,
        favorited: author,
        limit: 20, offset: 0,
      },
      user: profileRes.data.profile,
    };
  },
  methods: {
    async getArticles(type) {
      const params = extraObj(this.params, [type]);
      this.active = type
      const { data } = await ArticleApi.articleList(params);
      this.articles = data.articles;
      this.articlesCount = data.articlesCount;
    },
    async toFavor(article,index) {
      let favorApiName = "favor";
      if (article.favorited) {
        favorApiName = "unfavor";
      }
      const { data } = await ArticleApi[favorApiName](article.slug);
      if (data && data.article) {
        this.articles.splice(index,1,data.article)
      }
    },
    changeArticleType(type) {
      this.params.offset = 0;
      this.getArticles(type);
        this.resetPagination();
      
    },
    async toFollow() {
      let followApiName = "followUser";
      if (this.user.following) {
        followApiName = "unfollowUser";
      }
      const { data } = await UserApi[followApiName](this.user.username);
      if (data && data.profile) {
        this.user.following = data.profile.following
      }
    },
    changePage(index){ 
      this.params.offset = (index - 1) * this.params.limit;
      this.getArticles(this.type);
    },
      resetPagination(){
       const ref = this.$refs.pagination;
       ref && ref.reset();
    },
  },
};
</script>
<style>
</style>