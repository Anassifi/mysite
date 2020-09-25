import "./firebase";
import Vue from "vue";
import App from "./views/app/App.vue";
import router from "./router";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./registerServiceWorker";
import "@/styles/style.scss";
import vuetify from "./plugins/vuetify";
import { rtdbPlugin } from "vuefire";

Vue.use(rtdbPlugin);
library.add(fas);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
