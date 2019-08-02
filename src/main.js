import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

/* Main */
import Vue from "vue";
import App from "./App.vue";

import { settings } from "./Variables";

/* Routes and Styles */
import BootstrapVue from "bootstrap-vue";
import VueRouter from "vue-router";

Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({
  routes: settings.routes,
  mode: "history"
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
