import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    isAuthenticated: null,
  },
  plugins: [createPersistedState()],
  getters: {
    getAuth(state) {
      return state.isAuthenticated;
    }
  },
  mutations: {
    setAuth(state, isAuthenticated) {
      console.log("mutation setAuth - isAuthenticated " + isAuthenticated)
      state.isAuthenticated = isAuthenticated;
    }
  }
});