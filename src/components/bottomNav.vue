<style lang="scss">
@import "../styles/variables.scss";

.musicOptions {
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: $dark;
  li {
    display: inline-block;
    width: 32%;
    margin: 0;
    margin-left: 1.05%;
    padding: 0;
    img {
      width: 20%;
      margin: 0 35%;
    }
  }
}
@media(max-width: 1080px) {
  .musicOptions {
    li {
      width: 100%;
      margin: 0;
      padding: 0;
      img {
        width: 30%;
        margin: 0 35%;
      }
    }
  }
}
</style>

<template>
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
</template>

<script>
export default {
  
}
</script>
