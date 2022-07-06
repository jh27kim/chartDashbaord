export default {
  setDrawer: (state, payload) => (state.drawer = payload),
  toggleDrawer: (state) => (state.drawer = !state.drawer),
  LOGIN(state, payload) {
    state.accessToken = payload['auth-token'];
    state.userEmail = payload['user-email'];
  },
  LOGOUT(state) {
    state.accessToken = null;
    state.userEmail = '';
  },
  REGIST(state, payload) {
    state.accessToken = payload['auth-token'];
    state.userEmail = payload['user-email'];
  },
};
