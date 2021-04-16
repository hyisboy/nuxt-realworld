<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ isLogin ? "Sign In" : "Sign Up" }}</h1>
          <p class="text-xs-center">
            <nuxt-link to="/login" v-if="!isLogin">Have an account?</nuxt-link>
            <nuxt-link to="/register" v-else>to create account?</nuxt-link>
          </p>
          <ul class="error-messages">
            <li v-for="errText in errorList" :key="errText">{{ errText }}</li>
          </ul>
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group" v-if="!isLogin">
              <input
                v-model="form.username"
                class="form-control form-control-lg"
                type="text"
                placeholder="Your Name"
                required
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                v-model="form.email"
                class="form-control form-control-lg"
                type="email"
                placeholder="Email"
                required
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                v-model="form.password"
                class="form-control form-control-lg"
                type="password"
                placeholder="Password"
                required
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { UserApi } from "../utils/api/user";
import { extraObj, getErrorMsg } from "../utils/support";
export default {
  name: "login",
  data() {
    return {
      form: {
        email: '',//"shanliang@qq.com",
        username:'',// "david-xxx",
        password:'',// "22222222",
      },
      errorList: [],
    };
  },
  computed: {
    isLogin() {
      return this.$route.name == "login";
    },
  },
  async asyncData({app}) {
    console.log(app.store.state.user,'xxxuser in cookie')
    return {};
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  methods: {
    onSubmit(e) {
      if (this.isLogin) {
        this.toLogin();
        return;
      }
      this.toRegister();
    },
    async toLogin() {
      const params = extraObj(this.form, ["email", "password"]);
      const { data } = await UserApi.login(params).catch((err) => {
        const error = getErrorMsg(err.data);
        if (error) {
          this.errorList = error;
        }
        return Promise.resolve({});
      });
      if (data) {
        this.errorList = [];
        this.$store.commit("user/setUser", data.user);
        this.$router.push('/')
      }
    },
    async toRegister() {
      const { data } = await UserApi.register(this.form).catch((err) => {
        const error = getErrorMsg(err.data);
        if (error) {
          this.errorList = error;
        }
        return Promise.resolve({});
      });
      if (data && data.user) {
        this.$router.replace("/login");
        this.errorList = [];
      }
    },
  },
};
</script>
<style>
</style>