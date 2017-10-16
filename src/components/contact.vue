<template>
<section class="outerSection">
<nav-menu></nav-menu>

<div class="innerSection">
  <form class="contactForm">
    <h1 class="title">Contact Badweather</h1>
    <p class="center">
      Thanks for reaching out! We'll do our best to respond withing 24 hours.
    </p>
    <input type="text" placeholder="email address" />
    <input type="text" placeholder="confirm email address" />
    <input type="text" placeholder="subject (i.e. Booking)" />
    <textarea type="text" placeholder="message" />
    <button v-on:click="submit">Submit</button>
  </form>
</div>
</section>
</template>
<script>
import navMenu from './navMenu.vue';

export default {
  components: {
    navMenu: navMenu
  },
  data: function() {
    return {
      email: null,
      confirmEmail: null,
      subject: null,
      message: null
    };
  },
  methods: {
    submit: function() {
      alert('Sorry for the inconvenience! Our site is currently under construction...');
    }
  }
}
</script>
