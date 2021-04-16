export default function({app}) {
  const router = app.router;
  router.beforeEach((to, form, next) => {
    next();
  });
}