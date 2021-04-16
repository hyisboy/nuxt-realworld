

module.exports = {
    router: {
       linkActiveClass:'active',
       extendRoutes(routes,resolve){
           routes.splice(0);
           // 清除后 重新定义路由
           routes.push(...[
            {
                path: '/',
                name: 'home',
                component: resolve(__dirname, 'pages/App.vue'),
                redirect: '/home',
                children: [
                    {
                        path: '/home',
                        name: 'home',
                        component: resolve(__dirname, 'pages/index.vue'),
                    },
                    {
                        path: '/login',
                        name: 'login',
                        component: resolve(__dirname, 'pages/login.vue'),
                    },
                    {
                        path: '/register',
                        name: 'register',
                        component: resolve(__dirname, 'pages/login.vue'),
                    },
                    {
                        path: '/settings',
                        name: 'settings',
                        component: resolve(__dirname, 'pages/settings.vue'),
                    },
                    {
                        path: '/profile/:username',
                        name: 'profile',
                        component: resolve(__dirname, 'pages/profile.vue'),
                    },
                    {
                        path: '/article/:slug',
                        name: 'article',
                        component: resolve(__dirname, 'pages/article.vue'),
                    },
                    {
                        path: '/article-form',
                        name: 'article-form',
                        component: resolve(__dirname, 'pages/article-form.vue'),
                    },

                ]
             },
           ])
       },
    },
    server:{
      host:'0.0.0.0',
      port: 3000
    },
    plugins: ['~/plugins/lifecycle','~/plugins/request','~/plugins/day'], // 通过插件来 实现 路由守卫的功能
}

