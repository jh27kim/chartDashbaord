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
            
             axios.get("http://localhost:8081/chart-data")
             .then((response) => {
                this.pieLabels = [];
                this.pieData = [];
                for (var label in response.data.data) {
                    this.pieLabels.push(label);
                    this.pieData.push(response.data.data[label]);
                }
            })            
        }
    }
})
