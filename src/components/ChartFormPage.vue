<template>
  <div>
    <form>
        <div class="mb-3">
            <label class="form-label">Keyword</label>
            <input v-model="keyword" class="form-control" aria-describedby="emailHelp">
            <div class="form-text">Keyword to Collect Data</div>
        </div>
        <div class="mb-3">
            <div>Selected Chart Type:    {{ charttype }}</div>
                <select v-model="charttype">
                <option disabled value="">Please select one</option>
                <option>Pie</option>
                <option>Bar</option>
                <option>Line</option>
                </select>
            <div class="form-text">Select Chart Type</div>
        </div>

        <div>
            <Datepicker v-model="date"></Datepicker>
        </div>

        <div class="mb-3">
            <div>Selected Period: {{ period }}</div>
                <select v-model="period">
                <option disabled value="">Please select one</option>
                <option>Day</option>
                <option>Hour</option>
                <option>Minute</option>
                </select>
            <div class="form-text">Select Period to Extract Data</div>
        </div>

        <button type="submit" class="btn btn-primary" @click="AddChart">Submit</button>
    </form>
  </div>
</template>

<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import axios from 'axios';

export default {
    components: { Datepicker },
    data() {
    return {
      keyword: "",
      date: null,
      period: "",
      charttype: "",
    }
  },
  methods: {
    AddChart: function() {
      if (this.date < Date.now() ){
        alert("Please Check End Date")
        return;
      }
      const params = new URLSearchParams();
      params.append('keyword', this.keyword);
      params.append('date', this.date);
      params.append('period', this.period);
      params.append('type', this.charttype);
      axios.post('http://localhost:8081/add-chart/', params)
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
