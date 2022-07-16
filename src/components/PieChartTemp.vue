<template>
    <div>
        <Doughnut :chartData="chartData"></Doughnut>
    </div>
</template>

<script>

import axios from 'axios';
import {Chart, ArcElement} from 'chart.js'
import { Doughnut } from 'vue-chartjs'

Chart.register(ArcElement);

export default {
  components: { Doughnut },
  props: ['chartinfo'],
  data() {
    return {
      keyword: this.chartinfo.keyword,
      period : this.chartinfo.period,
      chartOptions: {
        hoverBorderWidth: 5
      },
      chartData: {
        hoverBackgroundColor: "red",
        hoverBorderWidth: 5,
        labels: ["agree", "disagree"],
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
    GetChartForm: function() {
      this.$router.push('/chartform')
    },

    getChartData: function (){
          setInterval(() => {
             axios.get("http://localhost:8082/chart-data/" + this.keyword)
             .then((response) => {
                console.log(response);
                this.chartData.datasets[0].data = this.data
            })
            .catch((error) => {
                console.log(error);
                // this.pieData = [1, 29];
              });
          }, this.period);
            
    },
  },

  mounted() {
    // this.getChartData();
  }
}
</script>