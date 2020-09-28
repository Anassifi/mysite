<template>
  <div id="new-project">
    <h3>New Project</h3>
    <div class="row">
      <form @submit.prevent="saveProject" class="col s12">
        <div class="row">
          <div class="input-filed col s12">
            <label>Project ID#</label>
            <input type="text" v-model="project_id" required>
          </div>
        </div>
        <div class="row">
          <div class="input-filed col s12">
            <label>Project Date</label>
            <input type="text" v-model="date" required>
          </div>
        </div>
        <div class="row">
          <div class="input-filed col s12">
            <label>Project Name</label>
            <input type="text" v-model="name" required>
          </div>
        </div>
        <div class="row">
          <div class="input-filed col s12">
            <label>Project Description</label>
            <input type="text" v-model="description" required>
          </div>
        </div>
        <button type="submit" class="btn">Submit</button>
        <router-link to="/dashboard" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import db from "../firebaseInit"
export default {
  name: "new-project",
  data() {
    return {
      project_id: null,
      date: null,
      name: null,
      description: null
    };
  },
  methods: {
    saveProject () {
      db.collection('projects').add({
        project_id: this.project_id,
        date: this.date,
        name: this.name,
        description: this.description
      })
      .then(docRef => this.$router.push('/dashboard'))
      .catch(error => console.log(err))
    }
  }
};
</script>

<style>
</style>