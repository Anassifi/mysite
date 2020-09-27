<template>
  <div id="dashboard">
    <ul class="collection with-header">
      <li class="collection-header">
        <h4>Projects</h4>
      </li>
      <li
        v-for="project in projects"
        v-bind:key="project.id"
        class="collection-item"
      >
        <div class="chip">{{ project.project_id }} :</div>
        {{ project.name }}

        <router-link
          class="secondary-content"
          v-bind:to="{
            name: 'view-project',
            params: { project_id: project.project_id },
          }"
        >
        <i class="fa fa-eye"></i>
        </router-link>
      </li>
    </ul>
    <div class="fixed-action-btn">
      <router-link to="/dashboard/new" class="btn-floating btn-large red">
        <i class="fa fa-plus"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from "../firebaseInit";
export default {
  name: "dashboard",
  data() {
    return {
      projects: [],
    };
  },
  created() {
    db.collection("projects")
      .orderBy("project_id")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = {
            id: doc.id,
            project_id: doc.data().project_id,
            date: doc.data().date,
            name: doc.data().name,
            description: doc.data().description,
          };
          this.projects.push(data);
        });
      });
  },
};
</script>

<style>
</style>