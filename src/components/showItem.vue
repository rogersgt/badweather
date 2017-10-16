<style lang="scss">
@import '../styles/variables.scss';

.showItem {
  font-family: 'Saira Extra Condensed', sans-serif;
  list-style-type: none;
  background-color: white;
  width: 90%;
  padding: 5%;
  border-radius: .2rem;
  box-shadow: 0 0 1rem #abafaa;
  color: $dark;
  h1 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.8rem;
  }
  h5 {
    font-size: 1.2rem;
    font-family: arial;
  }
  ul {
    li {
      list-style-type: none;
      font-size: 1.5rem;
    }
  }
  a {
    font-size: 2rem;
    color: $highlight;
    font-family: arial;
  }
}

@media(max-width: 1080px) {
  .showItem {
    
  }
}
</style>
<template>
<li class="showItem">
  <h1 class="center">{{displayDate}}</h1>
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
