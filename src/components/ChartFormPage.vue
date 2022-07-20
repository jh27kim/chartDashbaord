<template>
  <div>
    <form>
        <div class="mb-3">
            <label class="form-label">Keyword</label>
            <input v-model="keyword" class="form-control" aria-describedby="emailHelp">
            <div class="form-text">Keyword to Collect Data</div>
        </div>
        <div class="mb-3">
            <div>Selected Chart Type:    {{ chartType }}</div>
                <select v-model="chartType">
                <option disabled value="">Please select one</option>
                <option>Pie</option>
                <option>Bar</option>
                <option>Line</option>
                </select>
            <div class="form-text">Select Chart Type</div>
        </div>

        <div>
            <Datepicker v-model="dateRange" range :partial-range="true"></Datepicker>
        </div>

        <div class="mb-3">
            <label class="form-label">Period</label>
            <input v-model="period" class="form-control" aria-describedby="emailHelp">
            <div class="form-text">Period to Collect Data</div>
        </div>

        <button type="submit" class="btn btn-primary" @click="AddChart">Submit</button>
    </form>
  </div>
</template>

<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import axios from '../axios/axios';
// import { ref } from 'vue';

export default {
    components: { Datepicker },
    data() {
    return {
      keyword: "",
      dateRange: null,
      period: "",
      chartType: "",
    }
  },
  methods: {
    dateToString: function(date) {
          const day = date.getDate();
          const month = date.getMonth() + 1;
          const year = date.getFullYear();

          return `${year}${month < 10 ? '0' : ''}${month}${day < 10 ? '0' : ''}${day}`;
        },
    

    AddChart: function() {
      
      const params = new URLSearchParams();
        
      this.startDate = this.dateToString(this.dateRange[0])
      this.endDate = this.dateToString(this.dateRange[1])
      // this.startDate = this.processDate(this.startDate);
      params.append('keyword', this.keyword);
      params.append('startDate', this.startDate);
      params.append('endDate', this.endDate);
      params.append('period', this.period);
      params.append('chartType', this.chartType);

      // axios.defaults.headers.common['Access-Token'] = window.localStorage.getItem("Access-Token");


      axios.post('http://localhost:8081/chart/', params)
      .then((response) => {
          console.log(response);
        })
      .catch((error) => {
          // alert("null");
          console.log(error);
      });      
      
    },
  }
};
</script>
