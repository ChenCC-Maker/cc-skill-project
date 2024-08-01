<template>
  <div class="wrap-div">
    <section class="app-main">
        <transition name="fade-transform" mode="out-in">
        <router-view/>
        </transition>
    </section>
  </div>
</template>

<script>


export default {
  name: 'AppMainIndex',

  data() {
    return {
      // data
    };
  },

  methods: {
    // methods
  },
};
</script>

<style lang="scss" scoped>
  .wrap-div{
    width: 100%;
    height: 100%;
  }
</style>