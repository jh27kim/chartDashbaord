<template>
<<<<<<< HEAD
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
=======
    <div>
        <Doughnut :chartData="chartData"></Doughnut>
        {{period}}
    </div>
</template>

<script>

import axios from 'axios';
import {Chart, ArcElement} from 'chart.js'
import { Doughnut } from 'vue-chartjs'
>>>>>>> de678eb00511dde2c16578f8172eb92225058e92

Chart.register(ArcElement);

export default {
  components: { Doughnut },
<<<<<<< HEAD
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
=======
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

    GetChartData: function (){
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
            
>>>>>>> de678eb00511dde2c16578f8172eb92225058e92
    },
  },

  mounted() {
<<<<<<< HEAD
    setInterval(() => this.GetChartData(), 2000);
  },
};
</script>
=======
    setInterval(() => this.GetChartData(), this.period);
  }
}
</script>
>>>>>>> de678eb00511dde2c16578f8172eb92225058e92
