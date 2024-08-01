<template>
  <div class="wrap-outer">
    <div class="nav-bar">
        <sideNva/>
    </div>
    <div class="app-main-wrap">
      <div class="breadcrumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">主页看板</el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">糖炒栗子店</a></el-breadcrumb-item>
          <el-breadcrumb-item>元素滚动</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="app-main">
        <appMain/>
      </div>
      
    </div>
  </div>
</template>

<script>

import sideNva from './components/sideNav/index.vue';
import appMain from './components/appMain.vue';
export default {
  name: 'LayoutIndex',
  components:{
    sideNva,
    appMain
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
        .app-main-wrap{
          .breadcrumb{
            height: 30px;
            width: 100%;
            margin: 10px 10px 0px;
          }
          .app-main{
            width: 1234px;
            height: calc(100vh - 40px);
            background-color: #ffffff;
            margin:0 10px;
            border-radius: 15px;
            box-shadow: 0px 0px 10px 3px rgba(220, 220, 220, 0.5);
          }
        }
        
    }
    
</style>