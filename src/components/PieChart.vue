<template>
  <div v-for="chart in chartinfo" :key="chart">
    <PieChartTempVue :chartinfo="chart"></PieChartTempVue>
    <!-- {{ index }} {{ chart.chartId }} {{ chart.type }} {{ chart.chartdata }} {{ chart.period }} {{ chart.keyword }} {{ chart.enddate }} -->
  </div>

  <div>
    <button type="button" class="btn btn-info" @click="GetChartForm">
      New Chart
    </button>
  </div>
</template>

<script>
// import axios from 'axios';
import axios from '../axios/axios'
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
      const params = new URLSearchParams();
      params.append('email', window.localStorage.getItem("User-Email"));
      console.log(window.localStorage.getItem("User-Email"));
      console.log(params);
      
      // 이거도 바꾸셈
      axios.get("http://localhost:8081/chart/load/?email="+window.localStorage.getItem("User-Email"))
        .then((response) => {
          this.chartinfo = response.data
          console.log(this.chartinfo)
                // this.chartData.datasets[0].data = this.data
            })
      
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
