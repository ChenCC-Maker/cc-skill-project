<template>
  <div>
    <el-input v-model="value" :style="{width:'100px'}"></el-input>
    <el-button type="primary" @click="sendValue">确定</el-button>
  </div>
</template>

<script>
export default {
  name: 'ComponentName',

  data() {
    return {
      // data
      value:''
    };
  },

  methods: {
    // methods
    sendValue(){
        this.$emit('sendValue',this.value);
    }
  },
};
</script>

<style scoped>
  /* scoped css */
</style>