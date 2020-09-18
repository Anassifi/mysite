<template>
  <div id="app">
    <div id="nav">
      <router-link to="/about">About</router-link>|
      <router-link to="/">Portfolio</router-link>|
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$store.getters.http.url)
  },
}
</script>

<style lang="scss" src="./_app.scss">
</style>

