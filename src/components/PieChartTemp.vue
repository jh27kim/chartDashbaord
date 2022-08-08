<template>

    <div>
        <Doughnut :chartData="chartData"></Doughnut>
    </div>
</template>

<script>
import axios from '../axios/axios'
import { Chart, ArcElement } from 'chart.js';
import { Doughnut } from 'vue-chartjs';
Chart.register(ArcElement);
export default {
  components: { Doughnut },
  props: ['chartinfo'],
  data() {
    return {
      keyword: this.chartinfo.keyword,
      period: this.chartinfo.periodSec,
      initData: this.chartinfo.chartdata,
      chartOptions: {
        hoverBorderWidth: 5,
      },
      chartData: {
        hoverBackgroundColor: 'red',
        hoverBorderWidth: 5,
        labels: ["a", "b", "c", "d", "e"],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: ['#41B883', '#E46651','#41B853', '#E16251','#41B883'],
            data: [1, 2, 3, 4, 5],
          },
        ],
      },
    };
  },

  methods: {
    GetChartForm: function () {
      this.$router.push('/chartform');
    },
    getChartData: function (){
          console.log("initial - "+this.chartData.datasets[0].data)
          console.log("initial - "+this.chartData.labels)
          setInterval(() => {
             axios.get("http://localhost:8082/chart-data/" + this.keyword)
             .then((response) => {
                this.chartData.labels = response.data[0].labelList
                for (let i = 0; i < 5; i++) {
                  this.chartData.datasets[0].data[i] += (response.data[0].quantityList[i])
                }
            })
            .catch((error) => {
                console.log(error);
                // this.pieData = [1, 29];
              });
          }, this.period*1000);
            
    },
  },
  mounted() {
    this.getChartData();
  }
}
</script>
