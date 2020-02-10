<template>
    <div id="app">
    <!-- <common-header></common-header> -->
   
    <div id="nav">
    <router-link to="/test/3/zs">test</router-link>
    <router-link :to="{name:'work',params:{id:666,name:'lisi'}}">work</router-link>
    <router-link :to="{path:'work',query:{id:666,name:'lisi'}}">work</router-link>
    <router-link to="/aa">别名</router-link>
    <router-link to="/cc">重定向</router-link>
    <button @click="$router.push('/')">首页</button>
    <button @click="$router.go(-1)">上一页</button>
    <button @click="$router.go(1)">下一页</button>
    </div>
    <transition name='fade'>
     <router-view/>
    </transition>
    </div>
</template>
<script>
    // 先导入再声明
    import CommonHeader from './components/CommonHeader';
    export default {
        components:{
            CommonHeader
        }
    }
</script>
<style lang="scss">
    .fade-enter{
        opacity:0;
    }
    .fade-enter-active{
        transition:opacity 3s ease;
    }
    .fade-enter-to{
        opacity:1;
    }
    .fade-leave{
    transform: translateX(0);
  }
  .fade-leave-active{
    transition: transform 1s ease;
  }
  .fade-leave-to{
    transform: translateX(100%);
  }


</style>
