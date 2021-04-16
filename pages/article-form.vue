<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <ul class="error-messages">
            <li v-for="errText in errorList" :key="errText">{{ errText }}</li>
          </ul>
          <form @submit.prevent @keyup="(e) => {return e.keyCode != 13;}">
              <fieldset class="form-group">
                <input
                  type="text"
                  v-model="form.title"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  v-model="form.description"
                  class="form-control"
                  placeholder="What's this article about?"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  v-model="form.body"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  v-model="tag"
                  @keyup.enter.prevent="addTag"
                  placeholder="enter tag"
                />
                <div class="tag-list">
                  <span
                    ng-repeat="tag in $ctrl.article.tagList"
                    v-for="tag in form.tagList"
                    :key="tag"
                    class="tag-default tag-pill ng-binding ng-scope"
                  >
                    <i class="ion-close-round" @click="removeTag(tag)"></i>
                    {{ tag }}
                  </span>
                </div>
              </fieldset>
              <button class="btn btn-lg pull-xs-right btn-primary" type="button" @click="submit">
                Publish Article
              </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ArticleApi } from "@/utils/api/article";
import { getErrorMsg } from "@/utils/support";
export default {
  middleware: ["auth"],
  data() {
    return {
      form: {
        title: "",
        description: "",
        body: "",
        tagList: [],
      },
      errorList: [],
      isEditor: false,
      slug: "",
      tag: "",
    };
  },
  async created() {
    const { slug } = this.$route.query;
    if (slug) {
      const { data } = await ArticleApi.getArticle(slug);
      this.isEditor = true;
      this.slug = slug;
      if (data) {
        const { title, body, description, tagList } = data.article;
        this.form = { title, body, description, tagList: tagList };
      }
    }
  },
  methods: {
    async submit() {
      const form = Object.assign(this.form);
      const API_NAME = this.isEditor ? "updateArticle" : "createArticle";
      const { data } = await ArticleApi[API_NAME](form, this.slug).catch(
        (err) => {
          const error = getErrorMsg(err.data);
          if (error) {
            this.errorList = error;
          }
          return Promise.resolve({})
        }
      );
      if (data && data.article) {
        const username = this.$store.state.user.user.username;
        this.$router.replace(`/article/${data.article.slug}?uname=${username}`);
      }
    },
    removeTag(tag) {
      const list = this.form.tagList;
      const index = list.indexOf(tag);
      list.splice(index,1);
    },
    addTag() {
      if(typeof this.tag != 'number' && !this.tag)return;
      const list = this.form.tagList;
      if (!list.includes(this.tag)) {
        list.push(this.tag);
      }
      this.tag = "";
    },
  },
};
</script>
<style>
</style>