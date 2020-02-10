<template>
  <div id="app">
      <!-- commonHeader组件 -->
      <common-header></common-header>
      <div id="container">
      <router-view></router-view>
      </div>
        
 
      <common-footer></common-footer>
  </div>
</template>
<script>
    import CommonHeader from './components/CommonHeader.vue';
    import CommonFooter from './components/CommonFooter.vue';
    // import CommonFooter from './components/CommonFooter.vue';
    export default {
        components:{
          CommonHeader,
          CommonFooter
        }
    }
</script>
<style lang="scss">
#container{
  margin:1rem 0;
}
</style>
