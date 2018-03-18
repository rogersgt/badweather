<template>
<section class="outerSection">
<nav-menu></nav-menu>

<div class="innerSection">
  <form class="contactForm">
    <h1 class="title">Contact Badweather</h1>
    <p class="center">
      Thanks for reaching out! We'll do our best to respond within 24 hours.
    </p>
    <input v-model="email" type="text" :class="{ error: errEmail }" placeholder="email address" />
    <input v-model="confirmEmail" type="text" :class="{ error: errEmail }" placeholder="confirm email address" />
    <input v-model="subject" type="text" :class="{ error: errSubject }" placeholder="subject (i.e. Booking)" />
    <textarea v-model="message" type="text" :class="{ error: errMessage }" placeholder="message" />
    <div class="errMessage" v-if="displayError.length > 0">{{ displayError }}</div>
    <button type="button" v-on:click="submit">Submit</button>
  </form>
</div>
</section>
</template>
<script>
import { SES } from 'aws-sdk';
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
      message: null,
      displayError: '',
      errEmail: false,
      errSubject: false,
      errMessage: false
    };
  },
  methods: {
    submit: function(e) {
      e.preventDefault();
      if (!this.email || this.email.indexOf('@') === -1) {
        this.errEmail = true;
        this.displayError = 'Please enter a valid email address';
      } else if (this.email !== this.confirmEmail) {
        this.errEmail = true;
        this.displayError = 'Email addresses do not match';
      } else if (!this.subject) {
        this.errSubject = true;
        this.displayError = 'Please include a subject to your message';
      } else if (!this.message) {
        this.errMessage = true;
        this.displayError = 'Please include a message';
      } else {
        const emailOBject = {
          email: this.email,
          subject: this.subject,
          message: this.message
        }
        const opts = {
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': `${process.env.API_KEY}`
          }
        };
        this.$http.post(`${process.env.API_HOST}`, emailOBject, opts)
        .then((data) => {
          console.log(data);
          alert('Thanks! We\'ll get back to you ASAP!');
        }, (err) => {
          const msg = `
            ERROR:
            ${JSON.stringify(err)}
          `;
          alert(msg);
        });
      }
    },
    clearErrors: function() {
      this.displayError = '';
      this.errEmail = false;
      this.errSubject = false;
      this.errMessage = false;
    }
  },
  watch: {
    email: function(val) {
      this.clearErrors();
    },
    confirmEmail: function(val) {
      this.clearErrors();
    },
    subject: function(val) {
      this.clearErrors();
    },
    message: function(val) {
      this.clearErrors();
    }
  }
}
</script>
