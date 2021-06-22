<template>
  <h2 class="mb-2">Se connecter</h2>
  <p v-if="msg.success">{{ msg.success }}</p>
  <p v-if="msg.error">{{ msg.error }}</p>
  <form @submit.prevent="loginUser(form)">
    <label for="email">Email</label>
    <br />
    <input
      class="form-control w-100"
      type="email"
      id="email"
      name="email"
      v-model="form.email"
    />
    <br />
    <label for="password">Password</label>
    <br />
    <input
      class="form-control w-100"
      type="password"
      id="password"
      name="password"
      v-model="form.password"
    />
    <br />
    <br />
    <button class="btn btn-primary w-100">Se connecter</button>
  </form>
</template>
<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      form: {},
    };
  },
  methods: {
    ...mapActions({ login: "auth/login" }),
    loginUser(form) {
      this.login(form);
      this.$router.push("/");
    },
  },
  mounted() {
    this.msg.success = "";
    this.msg.error = "";
  },
  computed: {
    ...mapGetters({ msg: "auth/msg" }),
  },
};
</script>
