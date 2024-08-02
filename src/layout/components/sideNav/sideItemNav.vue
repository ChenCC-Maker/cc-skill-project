<template>
  <div>
    <template v-if="route.children.length==1">
        <el-menu-item :index="route.path">
            <i :class="route.children[0].meta.icon"></i>
            <span slot="title">{{ route.children[0].meta.title }}</span>
        </el-menu-item>
    </template>

    <el-submenu v-else  :index="route.path">
        <template slot="title">
            <i :class="route.meta.icon"></i>
            <span>{{ route.meta.title }}</span>
        </template>
        <el-menu-item v-for="childRoute in route.children" :key="childRoute.path" :index="childRoute.path">
            {{ childRoute.meta.title }}
        </el-menu-item>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'SideItemNav',
  props:{
    // 路由信息
    route:{
        type:Object,
        required:true
    }
  },
  data() {
    return {
      // data
    };
  },

  methods: {
     
  },
  created(){
    
  }
};
</script>

<style scoped>
  /* scoped css */
</style>