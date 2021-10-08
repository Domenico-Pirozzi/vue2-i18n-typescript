import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { i18n } from "./i18n/index";
import VueCompositionAPI from "@vue/composition-api";

Vue.use(VueCompositionAPI);
import "@/utils/vee-validate";

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
