<template>
  <div>
    <expandTab :editableTabs="editableTabs" :tabDefaultTitle="tabDefaultTitle" @sendActiveTab="sendActiveTab">
      <template v-slot:tabContent>
        <tabContent @sendValue="sendValue"/>
      </template>
    </expandTab>
  </div>
</template>

<script>
import expandTab from '@/components/expandTab.vue';
import tabContent from './tabContent.vue';
export default {
  name: 'TabSheet',
  components:{
    expandTab,
    tabContent
  },
  data() {
    return {
      editableTabs: [
        {
            title: '审查调查对象',
            name: '1',
        }, 
      ],
      tabDefaultTitle:'审查调查对象',
      activeTabIndex:''
    };
  },

  methods: {
    // methods
    sendValue(value){
      this.editableTabs[this.activeTabIndex-1].title = value;
    },
    sendActiveTab(val){
      this.activeTabIndex = val;
    }
  },
};
</script>

<style scoped>
  /* scoped css */
  
</style>