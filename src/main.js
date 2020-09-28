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
import firebase from 'firebase'
import './components/firebaseInit'

library.add(fas);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

let app;
firebase.auth().onAuthStateChanged(user => {
  if(!app){
    app = new Vue({
      router,
      store,
      vuetify,
      render: (h) => h(App),
    }).$mount("#app");
  }
})

/* new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app"); */
