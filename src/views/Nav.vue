<template>
  <div class="bg-primary py-3 navbar">
    <div
      class="d-flex flex-row justify-content-between text-uppercase container"
    >
      <router-link to="/">API Sondages</router-link>
      <div class="d-flex">
        <router-link class="px-2" v-if="!user.token" to="/register"
          >Inscription</router-link
        >
        <router-link class="px-2" v-if="!user.token" to="/login"
          >Connexion</router-link
        >
        <router-link class="px-2" v-if="user.token" to="/votes"
          >Votes</router-link
        >
        <router-link class="px-2" v-if="user.token" to="/user"
          >Mon Profil</router-link
        >
        <router-link class="px-2" v-if="user.token && user.data.isAdmin" to="/admin"
          >Administration</router-link
        >
        <a href="/home" class="px-2" v-if="user.token" @click.prevent="logout"
          >Déconnexion</a
        >
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "Nav",
  computed: {
    ...mapGetters({ user: "auth/user" }),
  },
  methods: {
    ...mapActions({ logout: "auth/logout" }),
  },
};
</script>
<style>
.navbar a {
  color: white !important;
}
</style>
