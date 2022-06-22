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
            <label for="example-datepicker">Choose a date</label>
            <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker>
            <p>Date: '{{ date }}'</p>
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
import axios from 'axios';

export default {
    data() {
    return {
      keyword: "",
      date: "",
      period: "",
      charttype: "",
    }
  },
  methods: {
    AddChart: function() {
      console.log(this.keyword);
      // console.log(this.date);
      console.log(this.period);
      console.log(this.charttype);
      axios.get("http://localhost:8081/addchart")
    },
  }
};
</script>
