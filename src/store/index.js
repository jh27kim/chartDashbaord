import Vuex from 'vuex';
import axios from 'axios';
// prevent reset when refresh
import createPersistedState from 'vuex-persistedstate';

//import authModule from './modules/auth/index.js';
// Vue.use(Vuex);
// import { createStore } from 'vuex';
// const store = createStore({});
// export default store;

export const store = new Vuex.Store({
  // modules: {
  //   auth: authModule,
  // },
  plugins: [
    createPersistedState({
      key: 'vuex',
      reducer(val) {
        if (val.accessToken === null) {
          // return empty state when user logged out
          return {};
        }
        return val;
      },
    }),
  ],
  state: {
    pieData: [],
    pieLabels: [],
  },
  getters: {},
  mutations: {},
  actions: {
    getChartData: function () {
      setInterval(() => {
        axios
          .get('http://localhost:8082/chart-data')
          .then((response) => {
            console.log(response);
            //   console.log(This);
            //   This.chartData.datasets[0].data = [];
            //   This.chartData.labels = [];

            this.pieLabels = [];
            this.pieData = [];
            for (var label in response.data.data) {
              this.pieLabels.push(label);
              this.pieData.push(response.data.data[label]);
            }
          })
          .catch((error) => {
            console.log(error);
            this.pieData = [1, 29];
          });
      }, 2000);
    },
  },
});
