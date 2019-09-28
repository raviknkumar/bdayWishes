import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";

import anime from "animejs";

/* css */

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

/*---*/

Vue.config.productionTip = false;
Object.defineProperty(Vue.prototype, "$anime", { value: anime });

import { BButton } from "bootstrap-vue";
Vue.component("b-button", BButton);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
