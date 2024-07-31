<template>
  <div>
    <el-menu
      class="el-menu-vertical-demo"
      :background-color="menuStyle.sideNavBgColor"
      :text-color="menuStyle.menuTextColor"
      :active-text-color="menuStyle.menuActiveTextColor"
      @open="handleOpen"
      @close="handleClose"
      router
      :default-active="baseRoutes[0].path">
      <sideItemNav v-for="route in baseRoutes"  :key="route.path" :route="route">

      </sideItemNav>
    </el-menu>

  </div>
</template>

<script>
import variables from '@/styles/variable.scss'
import sideItemNav from './sideItemNav.vue';
export default {
  name: 'sideNavIndex',
  components:{
    sideItemNav
  },
  data() {
    return {
        menuStyle:{
            sideNavBgColor:'#ffffff',
            menuTextColor:'#778899',
            menuActiveTextColor:'#02D4AC',
            menuActiveColor:''
        },
      
    };
  },
  computed:{
    baseRoutes(){
        return this.$router.options.routes;
    },
    variables(){
        return variables;
    }
  },

  methods: {
    handleOpen(){
        console.log(this.baseRoutes);
    },
    handleClose(){

    }
  },
};
</script>

<style lang="scss" scoped>
  /* scoped css */
</style>