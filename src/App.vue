<template>
  <Doughnut :chart-data="chartData" />
  <!-- <mycomponent v-if="data" :data="data"></mycomponent> -->
</template>

<script>
// DataPage.vue
import { Doughnut } from 'vue-chartjs'
// import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

// ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
import {Chart, ArcElement} from 'chart.js'
import axios from 'axios'

Chart.register(ArcElement);

export default {
  components: { Doughnut },
  data() {
    return {
      chartOptions: {
        hoverBorderWidth: 10
      },
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 5,
        labels: [],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651"],
            data: [1, 1]
          }
        ]
      },
    }
  },
  methods: {
    getChartData(){
      setInterval(() => {
       axios.get("http://localhost:8081/chart-data")
       .then((response) => {
         this.chartData.datasets[0].data = [];
         this.chartData.labels = [];
          for (var label in response.data.data) {
            this.chartData.labels.push(label);
            this.chartData.datasets[0].data.push(response.data.data[label]);
          }
      })
    }, 2000);
      
    },
  },
  mounted() {
    this.getChartData();
  }
}
</script>