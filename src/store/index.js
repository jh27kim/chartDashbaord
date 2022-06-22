// import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';


// Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        pieData: [],
        pieLabels: [],
    },
    getters: {},
    mutations: {},
    actions: {
        getChartData: function (){
            setInterval(() => {
             axios.get("http://localhost:8082/chart-data")
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
            
        }
    }
})
