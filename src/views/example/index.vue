<template>
    <div class="wrap-section">
      <section>
        <h1>这是一篇文章</h1>
        <header>文章标题</header>
        <article>
          这是文章内容
        </article>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      
    }
  }
  </script>
  
  <style scoped>
  
  </style>

  <style lang="scss" scoped>
  $bgColor:red;
  .wrap-section{
    background-color: $bgColor;
    h1{
      font-weight: bold;
    }
  }
 </style>
  
  