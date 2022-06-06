import axios from 'axios'

function getChartData(This){
    setInterval(() => {
     axios.get("http://localhost:8081/chart-data")
     .then((response) => {
      console.log(This);
      This.chartData.datasets[0].data = [];
      This.chartData.labels = [];
        for (var label in response.data.data) {
            This.chartData.labels.push(label);
            This.chartData.datasets[0].data.push(response.data.data[label]);
        }
    })
  }, 2000);
    
  }
export default getChartData