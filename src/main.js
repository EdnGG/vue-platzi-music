import Vue from "vue";
import VueRouter from "vue-router";
import App from "@/App.vue";

import msToMm from "@/filters/ms-to-mm.js";
import blur from "@/directives/blur.js";

import routes from "@/routes";
import store from "@/store";

import EventBus from "@/plugins/event-bus";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(EventBus);
Vue.use(msToMm);
Vue.use(blur);

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  render: (h) => h(App),
  router, // router
  store,
}).$mount("#app");
