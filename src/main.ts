import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Notifications from "vue-notification";

import "@/styles/css/normalize.css";
import "@/styles/scss/index.scss";

Vue.config.productionTip = false;
Vue.use(Notifications);

new Vue({
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
