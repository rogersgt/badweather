<template lang="html">
<section class="outerSection">
  <nav-menu></nav-menu>

  <div class="innerSection">
    <h3 class="title center showsTitle">UPCOMING BADWEATHER EVENTS</h3>
    <ul id="iconList" class="horizontalList">
      <li>
        <a target="_blank" href="http://www.bandsintown.com/a/1255890?came_from=267&app_id=badweatherpage">
          <img class="img" src="./bandsintown-icon.png" alt="Go to Badweather's page on bandsintown">
        </a>
      </li>
      <li>
        <a target="_blank" href="https://www.facebook.com/badweathersc/app/123966167614127/">
          <img class="img" src="./fb-icon.png" alt="Go to Badweather's tour dates on Faccebook">
        </a>
      </li>
      <li>
        <a target="_blank" href="https://www.instagram.com/badweatherband/">
          <img src="./instagram-icon.png" alt="Follow Badweather shinnanegans on Instagram">
        </a>
      </li>
    </ul>
    <ul class="shows">
      <item :key="show.id" v-for="show in shows" :show="show"></item>
    </ul>
    <div v-if="noShows && !loading" class="center message">There are no upcoming shows listed on Bandsintown. Check back with us later!</div>
    <img id="loading" v-if="loading" src="./spinner.gif" alt="loading">
  </div>

</section>
</template>
<script>
import navMenu from './navMenu.vue';
import item from './showItem.vue';

export default {
  data: function() {
    return {
      shows: [],
      noShows: false,
      loading: true
    };
  },
  components: {
    navMenu,
    item
  },
  methods: {
    checkShows: function() {
      if (this.shows.length > 0) {
        this.noShows = false;
      }
      return Promise.resolve();
    },
    getShows: async function() {
      const bandName = 'badweather';
      const url = `https://rest.bandsintown.com/artists/${bandName}/events?app_id=badweatherband`;
      const res = await this.$http.get(url);
      if (res.body) {
        this.shows = res.body.map((show) => show);
      }
      this.loading = false;
      this.noShows = this.shows.length === 0;
      return Promise.resolve();
    }
  },
  created: function() {
    return Promise.resolve()
    .then(this.getShows)
    .then(this.checkShows);
  }
}
</script>
