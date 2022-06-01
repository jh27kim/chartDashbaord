<template>
  <Doughnut :chart-data="chartData" />
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
        hoverBorderWidth: 20
      },
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["Green", "Red", "Blue"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
            data: [1, 10, 5]
          }
        ]
      },
      methods: {
        getChartData: function() {
          axios.get("localhost:8081/chart-data")
          .then(function(response){
          console.log(response);
          this.data = response.data;
          })
        }
      },
      beforeMount() {
        this.getChartData()
      }
    }
  }
}
</script>