<template>
  <h2 class="mb-2">Inscription</h2>
  <p v-if="msg.success">{{ msg.success }}</p>
  <p v-if="msg.error">{{ msg.error }}</p>
  <form @submit.prevent="registerUser(form)">
    <label for="name">Nom</label><br />
    <input
      class="form-control w-100"
      type="text"
      id="name"
      name="name"
      v-model="form.name"
    />
    <br />
    <label for="email">Email</label><br />
    <input
      class="form-control w-100"
      type="email"
      id="email"
      name="email"
      v-model="form.email"
    />
    <br />
    <label for="password">Mot de passe</label><br />
    <input
      class="form-control w-100"
      type="password"
      id="password"
      name="password"
      v-model="form.password"
    />
    <br /><br />
    <button class="btn btn-primary w-100">S'inscrire</button>
  </form>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "Register",
  data() {
    return {
      form: {},
    };
  },
  computed: {
    ...mapGetters({ msg: "auth/msg" }),
  },
  mounted() {
    this.msg.success = "";
    this.msg.error = "";
  },
  methods: {
    ...mapActions({ register: "auth/register" }),
    registerUser(form) {
      this.register(form);
      this.$router.push("/");
    },
  },
};
</script>
