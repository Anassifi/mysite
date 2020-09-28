<template>
  <nav>
    <div class="nav-wrapper grey">
      <div class="container">
        <router-link @click="closeDashboard" to="/" class="my-logo"
          >Home</router-link
        >
        <ul class="right">
          <li v-if="isLoggedIn">
            <span class="email black-text">{{ currentUser }}</span>
          </li>
          <li v-if="isLoggedIn">
            <router-link to="/dashboard">Dashboard</router-link>
          </li>
          <li v-if="!isLoggedIn">
            <router-link to="/login">Login</router-link>
          </li>
          <li v-if="isLoggedIn">
            <button v-on:click="logout" class="btn black">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  text-align: left;
  line-height: 2em;
}
nav a {
  font-size: 2em;
}
ul a {
  display: inline-block;
}
.container {
  font-size: 1em;
  left: 0;
  top: 0;
}
.email {
  padding-right: 10px;
}
</style>

<script>
import firebase from "firebase";
export default {
  name: "navbar",
  data() {
    return {
      seen: true,
      isLoggedIn: false,
      currentUser: false,
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.currentUser = firebase.auth().currentUser.email;
    }
  },
  methods: {
    logout: function () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.go({ path: this.$router.path });
        });
    },
    closeDashboard: function () {
      this.$router.push("/");
      this.$forceUpdate();
    },
  },
};
</script>
