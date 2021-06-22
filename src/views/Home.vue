<template>
  <h2 class="text-uppercase">API Sondages</h2>
  <h5 v-if="!user.token">
    Inscrivez-vous gratuitement et commencez dès à présent à voter.
  </h5>
  <h5 v-else>
    Accèdez à la liste de nos votes depuis la barre de navigation.
  </h5>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Nav",
  computed: {
    ...mapGetters({ user: "auth/user" }),
  },
};
</script>
