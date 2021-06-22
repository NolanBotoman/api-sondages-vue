<template>
  <div class="d-flex justify-content-between">
    <h2>Dashboard Admin - Liste des utilisateurs</h2>
  </div>
  <div v-if="!admin_users.length">Aucun utilisateurs trouvés.</div>
  <div class="mb-5">
    <div class="my-2 d-flex align-items-center text-white" v-for="user in admin_users" :key="user._id">
      <div class="px-3 py-2 bg-primary rounded w-100 mr-2">
        <p class="m-0">NOM {{ user.name }} | EMAIL {{ user.email }} | ADMIN {{ user.is_admin }}</p>
      </div>
      <div class="px-3 py-2 bg-primary rounded mr-2">
        <p class="m-0">ID°{{ user._id }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "Admin",
  computed: {
    ...mapGetters({ admin_users: "auth/admin_users" }),
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    ...mapActions({ getUsers: "auth/getUsers" }),
  },
};
</script>
