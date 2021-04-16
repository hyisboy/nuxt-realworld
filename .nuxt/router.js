import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _31095055 = () => interopDefault(import('../pages/App.vue' /* webpackChunkName: "" */))
const _51f187a6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "" */))
const _1b992abd = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "" */))
const _2dad3302 = () => interopDefault(import('../pages/settings.vue' /* webpackChunkName: "" */))
const _d5b37406 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "" */))
const _8957ca6c = () => interopDefault(import('../pages/article.vue' /* webpackChunkName: "" */))
const _872fb0d2 = () => interopDefault(import('../pages/article-form.vue' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _31095055,
    redirect: "/home",
    name: "home",
    children: [{
      path: "/home",
      component: _51f187a6,
      name: "home"
    }, {
      path: "/login",
      component: _1b992abd,
      name: "login"
    }, {
      path: "/register",
      component: _1b992abd,
      name: "register"
    }, {
      path: "/settings",
      component: _2dad3302,
      name: "settings"
    }, {
      path: "/profile/:username",
      component: _d5b37406,
      name: "profile"
    }, {
      path: "/article/:slug",
      component: _8957ca6c,
      name: "article"
    }, {
      path: "/article-form",
      component: _872fb0d2,
      name: "article-form"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
