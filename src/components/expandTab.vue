<template>
  <div>
    <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
        <el-tab-pane
            :key="item.name"
            v-for="(item) in editableTabs"
            :label="item.title"
            :name="item.name"
        >
            <slot name="tabContent"></slot>
        </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: 'ExpandTab',
  props:{
    tabDefaultTitle:{
      type:String,
      required:true
    },
    newTabTitle:{
      type:String,
      default:''
    }
    // editableTabs:{
    //     type:Array,
    //     // default:[],  eslint会报错,需要写成函数
    //     default:()=>[],
    //     required:true
    // }
  },
  data() {
    return {
      // data
       tabIndex: 1,
       editableTabsValue:'1',
       editableTabs:[
        {
          title:this.tabDefaultTitle,
          name:'1'
        }
       ]
    };
  },
  computed:{
  },
  watch:{
    // editableTabsValue:{
    //   handler: function(val) {
    //     this.$emit('sendActiveTab',val);
    //   },
    //   immediate: true
    // },
    newTabTitle(val){
      this.editableTabs.map(item=>{
        if(item.name == this.editableTabsValue){
          item.title = val;
        }
      })
    }
  },
  methods: {
    // methods
    handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: this.tabDefaultTitle,
            name: newTabName
          });
          this.editableTabsValue = newTabName;
        }
        /* 
        1、若我当前选择删除的tab不是当前激活的tab，那么激活的tab不需要转移，
        2、若当前选择删除的tab是当前激活的tab，那么激活的tab需要转移,若选择删除的tab后面还有激活tab转移到后一个，若删除tab为最后一个tab转移到前一个，
        3、不允许删除掉所有的tab
         */
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          let onleOneTab = false;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }else{
                  this.$message.warning("不能删除全部的"+this.tabDefaultTitle);
                  onleOneTab = true;
                }
              }
            });
          }
          if(!onleOneTab){
            this.editableTabsValue = activeName;
            this.editableTabs = tabs.filter(tab => tab.name !== targetName);
          }
        }
     },
  },

};
</script>

<style scoped>
  /* scoped css */
</style>