<template>
  <div id="edit-project">
    <h3>Edit project</h3>
    <div class="row">
      <form @submit.prevent="updateProject" class="col s12">
        <div class="row">
          <div class="input-filed col s12">
            <input disabled type="text" v-model="project_id" required>
          </div>
        </div>
        <div class="row">
          <div class="input-filed col s12">
            <input type="text" v-model="date" required>
          </div>
        </div>
        <div class="row">
          <div class="input-filed col s12">
            <input type="text" v-model="name" required>
          </div>
        </div>
        <div class="row">
          <div class="input-filed col s12">
            <input type="text" v-model="description" required>
          </div>
        </div>
        <button type="submit" class="btn">Edit</button>
        <router-link to="/dashboard" class="btn grey">Cancel</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import db from "../firebaseInit"
export default {
  name: "edit-project",
  data() {
    return {
        project_id: null,
        date: null,
        name: null,
        description: null
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
    updateProject () {
        db.collection("projects")
        .where("project_id", "==", this.$route.params.project_id)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            doc.ref.update({
                project_id: this.project_id,
                date: this.date,
                name: this.name,
                description: this.description
            })
            .then(() => {
                this.$router.push({name: 'view-project', params: {project_id: this.project_id}})
            })
          })
        })
    }
  },
};
</script>

<style>
</style>