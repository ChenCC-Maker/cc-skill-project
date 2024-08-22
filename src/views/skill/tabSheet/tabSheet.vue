<template>
  <div>
    <expandTab :tabDefaultTitle="tabDefaultTitle" :newTabTitle="newTabTitle">
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
      tabDefaultTitle:'审查调查对象',
      activeTabIndex:'',
      newTabTitle:''
    };
  },

  methods: {
    // methods
    sendValue(value){
      this.newTabTitle = value;
    },
  },
};
</script>

<style scoped>
  /* scoped css */
  
</style>