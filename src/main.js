import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "amfe-flexible";
import VueLazyload from "vue-lazyload";
import "@/Muse";
import "@/assets/style/base.less";
import Toast from "muse-ui-toast";
// 过滤器
import * as filters from "@/filter";
Object.keys(filters).forEach((k) => Vue.filter(k, filters[k]));
Vue.prototype.filterDate = filters.filterDate;
import { isPC } from "@/utils";
Vue.config.productionTip = false;
Vue.prototype.isPC = isPC;
Vue.prototype.avatar =
  "https://zyfullstack-images.oss-cn-shanghai.aliyuncs.com/img/202201101407139.png";
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error:
    "https://zyfullstack-images.oss-cn-shanghai.aliyuncs.com/img/202201101407139.png",
  loading:
    "https://zyfullstack-images.oss-cn-shanghai.aliyuncs.com/img/202201101407139.png",
  attempt: 1,
});
Vue.use(Toast, {
  position: "top", // 弹出的位置
  time: 2000, // 显示的时长
  closeIcon: "close", // 关闭的图标
  close: true, // 是否显示关闭按钮
  successIcon: "check_circle", // 成功信息图标
  infoIcon: "info", // 信息信息图标
  warningIcon: "priority_high", // 提醒信息图标
  errorIcon: "warning", // 错误信息图标
});

import theme from "muse-ui/lib/theme";
theme.add(
  "selfDark",
  {
    primary: "#1976d2",
    secondary: "#ff4081",
    success: "#4caf50",
    warning: "#fdd835",
    info: "#2196f3",
    error: "#f44336",
    track: "#757575",
    text: {
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.7)",
      alternate: "#303030",
      disabled: "rgba(255, 255, 255, 0.3)",
      hint: "rgba(255, 255, 255, 0.3)", // 提示文字颜色
    },
    divider: "rgba(255, 255, 255, 0.3)",
    background: {
      paper: "#424242",
      chip: "#616161",
      default: "#303030",
    },
  },
  "dark"
);

theme.add(
  "selfLight",
  {
    primary: "#00e676",
    secondary: "#ff4081",
    success: "#4caf50",
    warning: "#fdd835",
    info: "#2196f3",
    error: "#f44336",
    track: "#bdbdbd",
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "gba(0, 0, 0, 0.54)",
      alternate: "#fff",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)", // 提示文字颜色
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: {
      paper: "#fff",
      chip: "#e0e0e0",
      default: "#fafafa",
    },
  },
  "light"
);
theme.use("selfLight");
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
