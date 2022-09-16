<template>
      <div class="container">
        <div class="row">
            <user-card v-for="user in users" :key="user.id" :user="user"></user-card>
        </div>
      </div>
</template>

<script>
import UserCard from "./user-card";
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapActions } = createNamespacedHelpers('Users');

export default {
  name: "users-list",
  components: {
    UserCard,
  },
  computed: {
    ...mapState(['users'])
  },
  mounted() {
    this.getUsersAction().finally();
  },
  methods: {
    ...mapActions(['getUsersAction']),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
