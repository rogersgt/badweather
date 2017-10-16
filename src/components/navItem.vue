<style lang="scss">
@import "../styles/variables.scss";

.active {
  border-radius: .2rem;
  box-shadow: 0 0 .3rem white;
  &:hover {
    box-shadow: none;
  }
}
</style>
<template>
<li v-on:click="navigate">
  <h3 :class="{active: isActive}">{{title}}</h3>
</li>
</template>
<script>
export default {
  mounted() {
    let self = this;
    const route = self.$route.name;
    this.isActive = route === this.title.toLowerCase();
  },
  data: function() {
    return {
      isActive: false
    };
  },
  props: [
    'title'
  ],
  methods: {
    navigate: function() {
      this.$router.push(this.title.toLowerCase());
    }
  }
}
</script>
