<template>
  <div>
    <Doughnut :chartData="chartData"></Doughnut>
  </div>
  <div>
    <button type="button" class="btn btn-info" @click="GetChartForm">
      New Chart
    </button>
  </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs';
import axios from 'axios';
import { Chart, ArcElement } from 'chart.js';

Chart.register(ArcElement);

export default {
  components: { Doughnut },
  data() {
    return {
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
  methods: {
    GetChartForm: function () {
      this.$router.push('/chartform');
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
