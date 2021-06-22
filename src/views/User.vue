<template>
  <div>
    <h2>Mon profil</h2>
    <div class="p-3 text-white mt-4 bg-primary rounded w-100">
      <div class="row text-uppercase mb-2">
        <div class="col">Email</div>
        <div class="col">Nom</div>
        <div class="col">Compte Administrateur</div>
      </div>
      <div class="row">
        <div class="col">
          {{ user.data.email }}
        </div>
        <div class="col">
          {{ user.data.name }}
        </div>
        <div class="col">
          {{ user.data.isAdmin ? "oui" : "non" }}
        </div>
      </div>
    </div>
    <div class="mt-4 d-flex" id="tokenWrapper">
      <button @click="revealToken" class="btn btn-primary mr-2">
        Révéler mon token secret
      </button>
      <div
        v-if="token"
        class="px-3 d-flex align-items-center text-white bg-primary rounded text-break"
      >
        {{ user.token }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "User",
  data() {
    return {
      token: false,
    };
  },
  computed: {
    ...mapGetters({ user: "auth/user" }),
  },
  methods: {
    revealToken() {
      this.token = this.token == true ? false : true;
    },
  },
};
</script>
