<template>
  <div class="d-flex justify-content-between">
    <h2>Liste des Votes</h2>
    <button type="button" @click="generate" class="btn btn-primary mb-4">
      Générer un nouveau vote
    </button>
  </div>
  <div v-if="!votes.length">Aucun votes trouvés.</div>
  <div class="mb-5">
    <div class="my-2 d-flex align-items-center text-white" v-for="vote in votes" :key="vote._id">
      <input
        class="rounded mr-2"
        type="checkbox"
        @change="edit(vote._id, user._id)"
        :disabled="this.checkVoteUsers(user, vote.users)"
        :checked="this.checkVoteUsers(user, vote.users)"
      />
      <div class="px-3 py-2 bg-primary rounded w-100 mr-2">
        <p class="m-0">{{ vote.name }}</p>
      </div>
      <div class="px-3 py-2 bg-dark rounded mr-2">
        <p class="m-0">{{ vote.users.length }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "Votes",
  computed: {
    ...mapGetters({ user: "auth/user" }),
    ...mapGetters({ votes: "auth/votes" }),
  },
  mounted() {
    this.getVotes();
  },
  methods: {
    ...mapActions({ getVotes: "auth/getVotes" }),
    ...mapActions({ generateVote: "auth/generateVote" }),
    ...mapActions({ addVote: "auth/addVote" }),
    async edit(vote, checkbox) {
      if (checkbox) {
        vote.done = (vote.done == 1) ? 0 : 1;
      }

      await this.addVote(vote);
      await this.getVotes();
      this.$router.push({ path: '/votes/'});
    },
    checkVoteUsers(user, users) {
      let checked = false;
      users.forEach((elem) => {
        checked = (elem == user.data._id) ? true : false;
      });

      return checked;
    },
    async generate() {
      await this.generateVote();
      await this.getVotes();
      this.$router.push({ path: '/votes/'});
    },
  },
};
</script>
<style>
input {
  color: white;
  background-color: inherit;
  padding: 0.4px 0px;
  border: none;
  border-bottom: 2px rgba(0, 0, 0, 0) solid;
}

input:focus {
  border-bottom: 2px white solid;
  outline: 0 !important;
}
</style>
