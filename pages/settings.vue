<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>
          <form @submit.prevent="updateUser">
            <fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control"
                  type="text"
                  v-model="user.image"
                  placeholder="URL of profile picture"
                  required
                />
              </fieldset>
              <fieldset class="form-group" required>
                <input
                  class="form-control form-control-lg"
                  type="text"
                  v-model="user.username"
                  placeholder="Your Name"
                  required
                />
              </fieldset>
              <fieldset class="form-group" required>
                <textarea
                  class="form-control form-control-lg"
                  rows="8"
                  v-model="user.bio"
                  placeholder="Short bio about you"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                   v-model="user.email"
                  placeholder="Email"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  v-model="user.password"
                  placeholder="Password"
                />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                Update Settings
              </button>
              <br/>
              <br/>
               <hr />
              <button class="btn btn-outline-danger" type="button"  @click.stop="logout">
                Or click here to logout.
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {UserApi} from '@/utils/api/user'
export default {
  middleware: ["auth"],
  data() {
    return {
      user: null
    }
  },
  async asyncData() {
    const {data} = await UserApi.getUser();
    return {
      user: data.user
    }
  },
  methods: {
    logout() {
    // 移除 用户信息
        this.$router.replace('/');
        this.$store.commit('user/setUser', '');
    },
    async updateUser() {
     const {data} = await  UserApi.updateUser(this.user);
     if(data){
       this.user = data.user;
     }
    }
  }
};
</script>
<style>
</style>