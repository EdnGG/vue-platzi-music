import Vue from "vue";
import VueRouter from "vue-router";
import App from "@/App.vue";

import msToMm from "@/filters/ms-to-mm.js";
import blur from "@/directives/blur.js";

import routes from "@/routes";
import store from "@/store";
import i18n from "@/i18n";

import EventBus from "@/plugins/event-bus";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(EventBus);
Vue.use(msToMm);
Vue.use(blur);
// Vue.use(i18n);

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  render: (h) => h(App),
  router, // router
  store,
  i18n,
}).$mount("#app");
