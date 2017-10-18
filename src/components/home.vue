<template>
  <section class="outerSection">
    <nav-menu></nav-menu>

    <img class="banner" src="assets/logo.png" alt="Badweather">
    <h6 class="downArrows">
      <i class="fa fa-sort-desc" aria-hidden="true"></i>
      scroll down for music
      <i class="fa fa-sort-desc" aria-hidden="true"></i>
    </h6>
    <video poster="assets/poster.JPG" id="bgvid" playsinline autoplay muted loop>
      <source src="assets//bg2.webm" type="video/webm">
    </video>

    <div class="innerSection">
      <h1 class="center title">MUSIC</h1>
      <ul class="twoColumns">
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

    <ul class="musicOptions">
        <li>
          <a target="_blank" href="https://open.spotify.com/artist/1whJAEmRNttVE3XtGRUp9K">
            <img src="assets/spotify-icon.png" alt="Open Spotify Badweather Artist Page">
          </a>
        </li>
        <li>
          <a target="_blank" href="https://itunes.apple.com/us/album/confide-ep/id1266906668">
            <img src="assets/itunes-icon.png" alt="Open Confide in the iTunes Store">
          </a>
        </li>
        <li>
          <a target="_blank" href="https://play.google.com/store/music/album/Badweather_Confide?id=Bdwbmktmf7d457ug7yfspfbnpda&hl=en">
            <img src="assets/google-play-icon.png" alt="Open Confide on google Play">
          </a>
        </li>
      </ul>
  </section>
</template>
<script>
import navMenu from './navMenu.vue';

export default {
  components: {
    navMenu: navMenu
  }
}
</script>