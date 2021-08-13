import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VuePageTitle from "vue-page-title";

Vue.config.productionTip = false;

Vue.use(VuePageTitle, {
  suffix: " - Yumeket",
});

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
