import { createStore } from "vuex";

export default createStore({
  state: {
    isAuthenticated: false,
  },
  getters: {
    getAuth(state) {
      return state.isAuthenticated;
    }
  },
  mutations: {
    setAuth(state) {
      state.isAuthenticated = !state.isAuthenticated;
    }
  }
});