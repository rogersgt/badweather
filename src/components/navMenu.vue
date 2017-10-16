<template>
<div id="navMenu">
  <i v-on:click="toggle" v-if="mobileLayout" class="fa fa-bars" aria-hidden="true"></i>
  <div class="panel" :class="{closed: !open}">
    <i v-on:click="toggle" v-if="mobileLayout && open" class="fa fa-bars" aria-hidden="true"></i>
    <ul>
      <item title="HOME"></item>
      <item title="SHOWS"></item>
      <item title="CONTACT"></item>
    </ul>
    </div>
</div>
</template>
<script>
import item from './navItem.vue';

export default {
  components: {
    item
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.checkWindow);
    });
  }, 
  data: function() {
    return {
      open: false,
      mobileLayout: false
    };
  },
  methods: {
    checkWindow: function() {
      const w = document.documentElement.clientWidth;
      this.mobileLayout = w <= 1065; // this seems to be 15px off from the css media queries
      if (!this.mobileLayout) {
        this.open = true;
      } else {
        this.open = false;
      }
    },
    renderActiveTab: function() {
      let self = this;
      const route = self.$route.name;
      return Promise.resolve();
    },
    toggle: function() {
      this.open = !this.open;
    }
  },
  created: function() {
    return Promise.resolve()
    .then(this.checkWindow)
    .then(this.renderActiveTab);
  }
}
</script>
