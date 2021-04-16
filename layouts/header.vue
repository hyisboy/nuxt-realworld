<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <nuxt-link class="navbar-brand" to="/">conduit</nuxt-link>
      <ul class="nav navbar-nav pull-xs-right">
        <template v-if="user">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <nuxt-link class="nav-link " to="/home">Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/article-form">
              <i class="ion-compose"></i>&nbsp;New Post
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/settings">
              <i class="ion-gear-a"></i>&nbsp;Settings
            </nuxt-link>
          </li>
          <li class="nav-item" style="margin-top: 4px; font-size: 20px;color: rgba(0,0,0,.3)">
            <i class="ion-user"></i>{{ user.username }}
          </li>
        </template>
        <template v-else>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/register">Sign up</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/login">Sign In</nuxt-link>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("user", ["user"]),
  },
};
</script>

<style>
</style>