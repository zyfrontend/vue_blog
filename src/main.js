import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "amfe-flexible";
import "@/Muse";
import "@/assets/style/base.less";
import { isPC } from "@/utils";
Vue.config.productionTip = false;
Vue.prototype.isPC = isPC;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
