<template>
    <Doughnut :chartData="chartData"></Doughnut>
</template>

<script>

import { Doughnut } from 'vue-chartjs'

// DataPage.vue
// import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

// ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
import {Chart, ArcElement} from 'chart.js'
// import axios from 'axios'

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
        labels: this.$store.pieLabels,
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651"],
            data: [1, 3]
          }
        ]
      },
    }
  },
  methods: {
    GetChartData: function (){
        this.$store.dispatch('getChartData');
        this.chartData.datasets[0].data = this.$store.pieData;
        this.chartData.labels = this.$store.pieLabels;
    },
  },

  mounted() {
    setInterval(() => this.GetChartData(), 2000);
  }
}
</script>