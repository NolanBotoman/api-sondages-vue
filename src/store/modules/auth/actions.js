import axios from "axios";
import router from "../../../router";

const url = "http://localhost:8000";

export const login = ({ commit, state }, form) => {
  processLogin(commit, form);
  state.msg.success = "Vous êtes connecté";
};

export const register = ({ commit, state }, form) => {
  axios
    .post(`${url}/auth/signup`, {
      name: form.name,
      email: form.email,
      password: form.password,
    })
    .then(() => {
      processLogin(commit, form);
    })
    .catch((error) => {
      state.msg.error = error;
      console.log(error);
    });
};

/* eslint-disable no-unused-vars */
const processLogin = (commit, form) => {
  axios
    .post(`${url}/auth/signin`, {
      email: form.email,
      password: form.password,
    })
    .then((response) => {
      commit("token", response.data.user.token);
      commit("user", {
        _id: response.data.user._id,
        name: response.data.user.name,
        email: response.data.user.email,
        isAdmin: response.data.user.is_admin,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
/* eslint-enable no-unused-vars */
export const logout = ({ commit }) => {
  commit("token", null);
  commit("user", {});
  router.push("/");
};

export const getVotes = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${url}/vote`, {
        headers: {
          Authorization: `Bearer ${state.user.token}`,
        },
      })
      .then((response) => {
        commit("votes", response.data.votes);
        resolve();
      })
      .catch((error) => {
        console.log(error);
        reject();
      });
  });
};

export const addVote = ({ state }, vote) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${url}/vote`,
        {
          vote_id: vote
        },
        {
          headers: {
            Authorization: `Bearer ${state.user.token}`,
          },
        }
      )
      .then(() => {
        resolve();
        state.msg.success = "Vote ajoutée";
      })
      .catch((error) => {
        console.log(error);
        reject();
        state.msg.error = error;
      });
  });
};

export const generateVote = ({ state }) => {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `${url}/faker/vote`, 
        {},
        {
          headers: {
            Authorization: `Bearer ${state.user.token}`,
          }
        },
      )
      .then(() => {
        resolve();
      })
      .catch((error) => {
        console.log(error);
        reject();
      });
  });
};

export const getUsers = ({ commit, state }) => {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${url}/admin/users`,
        {
          headers: {
            Authorization: `Bearer ${state.user.token}`,
          }
        },
      )
      .then((response) => {
        commit("admin_users", response.data.users);
        console.log(state.admin_users);
        resolve();
      })
      .catch((error) => {
        console.log(error);
        reject();
        state.msg.error = error;
      });
  });
};
