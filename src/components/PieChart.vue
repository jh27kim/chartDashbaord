<<<<<<< HEAD
<template>
  <div>
    <Doughnut :chartData="chartData"></Doughnut>
=======
<template> 
  <div v-for="chart in chartinfo" :key="chart">
    <PieChartTempVue :chartinfo="chart"></PieChartTempVue>
    <!-- {{ index }} {{ chart.chartId }} {{ chart.type }} {{ chart.chartdata }} {{ chart.period }} {{ chart.keyword }} {{ chart.enddate }} -->
>>>>>>> de678eb00511dde2c16578f8172eb92225058e92
  </div>

  <div>
    <button type="button" class="btn btn-info" @click="GetChartForm">
      New Chart
    </button>
  </div>
</template>

<script>
<<<<<<< HEAD
import { Doughnut } from 'vue-chartjs';
import axios from 'axios';
import { Chart, ArcElement } from 'chart.js';

Chart.register(ArcElement);
=======
import axios from 'axios';
import PieChartTempVue from './PieChartTemp.vue';
>>>>>>> de678eb00511dde2c16578f8172eb92225058e92

export default {
  components: { PieChartTempVue },
  data() {
    return {
<<<<<<< HEAD
      keyword: 'mama',
      chartOptions: {
        hoverBorderWidth: 10,
      },
      chartData: {
        hoverBackgroundColor: 'red',
        hoverBorderWidth: 5,
        labels: this.$store.pieLabels,
        datasets: [
          {
            label: 'Data One',
            backgroundColor: ['#41B883', '#E46651'],
            data: [1, 3],
          },
        ],
      },
    };
  },
=======
      chartinfo: [{chartId: 1, type:"pie", chartdata: [1, 4], period: [3000], keyword: "trump", enddate: "20220701"},
      {chartId: 2, type:"pie", chartdata: [5, 2], period: [5000000], keyword: "biden", enddate: "20220702"},
      {chartId: 3, type:"pie", chartdata: [7, 9], period: [9000000], keyword: "obama", enddate: "20220703"}]
      }
    },

>>>>>>> de678eb00511dde2c16578f8172eb92225058e92
  methods: {
    GetChartForm: function () {
      this.$router.push('/chartform');
    },

<<<<<<< HEAD
    GetChartMetada: function (userId) {
      axios
        .get('http://localhost:8082/chart/')
        .then((response) => {})
        .catch((error) => {
          console.log(error);
        });
      return;
    },

    GetChartData: function () {
      setInterval(() => {
        console.log(this.keyword);
        axios
          .get('http://localhost:8082/chart-data/' + this.keyword)
          .then((response) => {
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

  mounted() {
    setInterval(() => this.GetChartData(), 2000);
  },
};
</script>
=======
    GetChartMetadata: function() {
      axios.get("http://localhost:8081/chart/")
      // Get chart metadata from server
      return;
    }
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
>>>>>>> de678eb00511dde2c16578f8172eb92225058e92
