<template>
  <section class="outerSection">
    <nav-menu></nav-menu>

    <img class="banner" src="assets/logo.png" alt="Badweather">
    <h6 class="downArrows">
      <i class="fa fa-sort-desc" aria-hidden="true"></i>
      scroll down for music
      <i class="fa fa-sort-desc" aria-hidden="true"></i>
    </h6>
    <video poster="assets/banner.jpg" id="bgvid" playsinline autoplay muted loop>
      <!-- <source src="assets//bg2.webm" type="video/webm"> -->
    </video>

    <div class="innerSection">
      <h1 class="center title">MUSIC</h1>
      <ul class="twoColumns">
        <li>
          <img class="album left shadow" src="assets/album2.jpg" alt="Badweather">
        </li>
        <li>
          <h1 class="center">Badweather</h1>
          <h5 class="center">To Be Release: July 2019</h5>

          <p class="center">
            Badweather's self-titled, self-produced LP is to be released Summer 2019.
          </p>
        </li>
        <li>
          <img class="album left" src="assets/Confide.jpg" alt="Confide">
        </li>
        <li>
          <h1 class="center">Confide</h1>
          <h5 class="center">Released: August 4th, 2017</h5>

          <p class="center">
            "[Badweather's] four-song debut EP Confide is an oddball marriage of sharp melodies, subtle dynamics and sparse but well-timed rock ’n’ roll breakdowns...the second and best track, 'For Now', boasts a hook worthy of Weezer; the following 'Wanderer' is a strange sort of ballad, performed with clean electric guitar and Grady Rogers’ quirky but winsome vocals only, that gets more enigmatic and seductive with each listen..."
          </p>

          <p class="signature center">
            - Michael Spawn
            <br>
            <a target="_blank" href="https://www.free-times.com/music/review-three-new-ones-recorded-at-archer-avenue/article_ab97d34c-7782-11e7-8433-f3f1539cc395.html">
              freetimes
            </a>
          </p>
        </li>
      </ul>
      <h2 class="title center noMargBottom">LISTEN</h2>
      <iframe class="spotPlayer" src="https://open.spotify.com/embed/album/0oEo6PLIoukPtYOXAYhzJ6" height="150" frameborder="0" allowtransparency="true"></iframe>
    </div>

    <bottom-nav />
  </section>
</template>
<script>
import navMenu from './navMenu.vue';
import bottomNav from './bottomNav.vue';

export default {
  components: {
    navMenu,
    bottomNav
  }
}
</script>