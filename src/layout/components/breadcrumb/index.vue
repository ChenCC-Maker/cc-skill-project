<template>
  <div>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item>
            <a @click.prevent="handleClick">主页面板</a>
        </el-breadcrumb-item>
        <TransitionGroup name="breadcrumb">
            <el-breadcrumb-item v-for="item in loopRoutes" :key="item.path">
                <span>{{ item.title }}</span>
            </el-breadcrumb-item>
        </TransitionGroup>
        
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'BreadcrumbIndex',

  data() {
    return {
      loopRoutes:null,
      isActive:true
    };
  },
  computed:{
    currentRoute(){
        return this.$route;
    }
  },
  watch:{
    currentRoute(){
        this.getBreadcrumbRouteList();
    }
  },
  methods: {
    // 组织供面包屑循环展示的数据源
    getBreadcrumbRouteList(){
        if(this.currentRoute.path === '/dashboard'){
            this.loopRoutes = [];
        }else{
            let {matched} = this.currentRoute;
            this.loopRoutes = matched.map(item =>{
                return {
                    path:item.path,
                    title:item.meta.title
                }
            })
        }
    },
    handleClick(){
        let isDashboard = this.currentRoute.path === '/dashboard'? true : false;
        if(isDashboard){
            return;
        }else{
            this.$router.push('/dashboard');
        }
    }
  },
  created(){
    this.getBreadcrumbRouteList();
  }
};
</script>

<style lang="scss" scoped>
   
</style>