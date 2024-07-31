<template>
  <div class="wrap-outer">
    <div class="nav-bar">
        <sideNva/>
    </div>
    <div class="app-main">
        <router-view/>
    </div>
  </div>
</template>

<script>

import sideNva from './components/sideNav/index.vue'
export default {
  name: 'LayoutIndex',
  components:{
    sideNva
  },
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

<style scoped>
  /* scoped css */
</style>

<style lang="scss" scoped>
    .wrap-outer{
        display: flex;
        justify-content: flex-starts;
        .nav-bar{
            width: 200px;
            height: 100vh;
        }
        .app-main{
            margin-top: 50px;
            width: 1234px;
            height: calc(100vh - 50px);
            background-color: blue;
            margin: 0 10px;
            border-radius: 15px;
        }
    }
    
</style>