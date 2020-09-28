<template>
  <div id="view-project">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>{{ name }}</h4>
      </li>
      <li class="collection-item">Project ID#: {{ project_id }}</li>
      <li class="collection-item">Project date: {{ date }}</li>
      <li class="collection-item">Project description: {{ description }}</li>
    </ul>
    <router-link to="/dashboard" class="btn grey">Back</router-link>
    <button @click="deleteProject" class="btn red">Delete</button>
    <div class="fixed-action-btn">
      <router-link v-bind:to="{name: 'edit-project', params: {project_id: project_id}}" class="btn-floating btn-large red">
        <i class="fa fa-pencil"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from "../firebaseInit";
export default {
  name: "view-project",
  data() {
    return {
      project_id: null,
      date: null,
      name: null,
      description: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    db.collection("projects")
      .where("project_id", "==", to.params.project_id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          next((vm) => {
            (vm.project_id = doc.data().project_id),
              (vm.date = doc.data().date),
              (vm.name = doc.data().name),
              (vm.description = doc.data().description)
          });
        });
      });
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    fetchData() {
      db.collection("projects")
        .where("project_id", "==", this.$route.params.project_id)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            (this.project_id = doc.data().project_id),
              (this.date = doc.data().date),
              (this.name = doc.data().name),
              (this.description = doc.data().description)
          });
        });
    },
    deleteProject() {
      if (confirm("Are you sure?")) {
        db.collection("projects")
          .where("project_id", "==", this.$route.params.project_id)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              doc.ref.delete()
              this.$router.push("/dashboard")
            });
          });
      }
    },
  },
};
</script>

<style>
</style>