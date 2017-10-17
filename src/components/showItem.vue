<template>
<li class="showItem">
  <h1 class="center">{{displayDate}}</h1>
  <h2 class="center">{{show.venue.city}}, {{show.venue.region}} {{show.venue.country || ''}}</h2>
  <h3>{{show.venue.name}}</h3>
  <a target="_blank" :href="show.url">View Event</a>
  <h5>Lineup:</h5>
  <ul>
    <li :key="band" v-for="band in show.lineup">
      {{ band }}
    </li>
  </ul>
</li>
</template>
<script>
import moment from 'moment';

export default {
  data: function() {
    return {
      displayDate: ''
    };
  },
  props: [
    'show'
  ],
  methods: {
    setDate: function() {
      if (!!this.show.datetime) {
        const split = this.show.datetime.split('T');    
        this.displayDate = moment(split[0]).format('MMMM Do YYYY');
      } else {
        this.displayDate = 'N/A';
      }
      return Promise.resolve();
    }
  },
  created: function() {
    return Promise.resolve()
    .then(this.setDate);
  }
}
</script>
