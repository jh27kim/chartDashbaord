<template>
  <div v-for="chart in chartinfo" :key="chart">
    <div width="200px">
    <PieChartTempVue :chartinfo="chart"></PieChartTempVue>
    <!-- {{ index }} {{ chart.chartId }} {{ chart.type }} {{ chart.chartdata }} {{ chart.period }} {{ chart.keyword }} {{ chart.enddate }} -->
    </div>
  </div>

  <div>
    <button type="button" class="btn btn-info" @click="GetChartForm">
      New Chart
    </button>
  </div>
</template>

<script>
// import axios from 'axios';
// import axios from '../axios/axios'
import tokenAxios from '../axios/tokenAxios'
import PieChartTempVue from './PieChartTemp.vue';

export default {
  components: { PieChartTempVue },
  data() {
    return {
      chartinfo: []
      // chartinfo: [{chartId: 1, type:"pie", chartdata: [1, 4], period: [3000], keyword: "trump", enddate: "20220701"},
      // {chartId: 2, type:"pie", chartdata: [5, 2], period: [5000000], keyword: "biden", enddate: "20220702"},
      // {chartId: 3, type:"pie", chartdata: [7, 9], period: [9000000], keyword: "obama", enddate: "20220703"}]
      }
    },

  methods: {
    GetChartForm: function () {
      this.$router.push('/chartform');
    },

    GetChartMetadata: function() {
         // TODO Get Initial Data from BE 
      // ADD init data in DTO !!
      const loadchart = (response) => {
        this.chartinfo = response.data
      }

      tokenAxios("/chart/load",loadchart,"get")

      

      // axios.get("http://localhost:8081/chart/load")
      //   .then((response) => {
      //     console.log(response)
      //     if (response.data.errorCode === "TOKEN_REFRESH"){
      //       console.log("TOKEN_REFRESH")
      //       window.localStorage.setItem("Access-Token", response.data.errorMessage)
      //       axios.get("http://localhost:8081/chart/load")
      //       .then((response) => {
      //         console.log("inner response")
      //         console.log(response)
      //         this.chartinfo = response.data
      //         console.log(this.chartinfo)
      //     })
      //   }
      //   else if(response.errorCode === "TOKEN_EXPIRED"){
      //     window.localStorage.removeItem("Access-Token")
      //     this.$router.push("/login")
      //   }
      //   this.chartinfo = response.data
      // })
      return;
    }
  },

  mounted() {
    this.GetChartMetadata();
  }
}
</script>

<!-- //   GetChartData: function (){
  //         setInterval(() => {
  //            axios.get("http://localhost:8082/chart-data/" + this.keyword)
  //            .then((response) => {

  //               this.pieLabels = [];
  //               this.pieData = [];
  //               for (var label in response.data.data) {
  //                   this.pieLabels.push(label);
  //                   this.pieData.push(response.data.data[label]);
  //               }

  //           })
  //           .catch((error) => {
  //               console.log(error);
  //               this.pieData = [1, 29];
  //             });
  //         }, 2000);
            
  //       }
  //   ,
  // },

  // mounted() {
  //   setInterval(() => this.GetChartData(), 2000);
  // }
// } -->
