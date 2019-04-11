<template lang="html">
<section class="outerSection">
  <nav-menu></nav-menu>

  <div class="innerSection">
    <h3 class="title center showsTitle">UPCOMING BADWEATHER EVENTS</h3>
    <ul id="iconList" class="horizontalList">
      <li>
        <a target="_blank" href="http://www.bandsintown.com/a/1255890?came_from=267&app_id=badweatherpage">
          <img class="img" src="assets/bandsintown-icon.png" alt="Go to Badweather's page on bandsintown">
        </a>
      </li>
      <li>
        <a target="_blank" href="https://www.facebook.com/badweathersc/app/123966167614127/">
          <img class="img" src="assets/fb-icon.png" alt="Go to Badweather's tour dates on Faccebook">
        </a>
      </li>
      <li>
        <a target="_blank" href="https://www.instagram.com/badweatherband/">
          <img src="assets/instagram-icon.png" alt="Follow Badweather shinnanegans on Instagram">
        </a>
      </li>
    </ul>
    <ul class="shows">
      <item :key="show.id" v-for="show in shows" :show="show"></item>
    </ul>
    <div v-if="noShows && !loading" class="center message">There are no upcoming shows listed on Bandsintown. Check back with us later!</div>
    <img id="loading" v-if="loading" src="assets/spinner.gif" alt="loading">
  </div>

  <bottom-nav />
</section>
</template>
<script>
import navMenu from './navMenu.vue';
import item from './showItem.vue';
import bottomNav from './bottomNav.vue';

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
    item,
    bottomNav
  },
  methods: {
    checkShows: function() {
      if (this.shows.length > 0) {
        this.noShows = false;
      }
      return Promise.resolve();
    },
    getShows: async function() {
      const bandName = process.env.NODE_ENV === 'production' ? 'badweather' : 'pinegrove';
      const url = `https://rest.bandsintown.com/artists/${bandName}/events?app_id=badweatherband`;
      const res = await this.$http.get(url);
      if (res.body) {
        this.shows = res.body.map((show) => show);
        console.log(this.shows);
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
