export const token = (state, token) => {
  state.user.token = token;
};

export const user = (state, user) => {
  state.user.data = user;
};

export const admin_users = (state, admin_users) => {
  state.admin_users = admin_users;
};

export const votes = (state, votes) => {
  state.votes = votes;
};
