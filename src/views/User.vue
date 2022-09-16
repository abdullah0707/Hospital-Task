<template>
  <div>
    <div class="d-flex justify-content-center">
      <user-card v-if="user" :user="user" full-details></user-card>
    </div>
      <div class="card text-bg-dark my-5 mx-auto">
      <div class="card-body p-2">
        <h5 class="card-title fw-bold text-light" style="--bs-text-opacity: .8;">Name: Abdullah</h5>
        <span class="card-text fs-6 px-1 fw-bold mx-2">Medical examination time: <span class="text-success">02:00 PM</span>. </span>
        <span class="">|</span>
        <span class="card-text fs-6 px-1 fw-bold mx-2">Maximum time to detect: <span class="text-danger">90 minute</span>. </span>
      </div>
    </div>
  </div>
</template>

<script>

import UserCard from "@/components/user-card.vue";
import {createNamespacedHelpers} from 'vuex';
const { mapActions } = createNamespacedHelpers('Users'); 
export default {
  name: "User",
  components: {
    UserCard,
  },
  data() {
    return {
      user: null
    };
  },
  methods: {
    ...mapActions(['getUserAction'])
  },
  mounted() {
    this.getUserAction(this.$route.params.id).then((user) => this.user = user )
  },
};
</script>
