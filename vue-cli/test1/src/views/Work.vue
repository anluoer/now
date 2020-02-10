<template>
    <div>
        wwwww
        {{$route.params.id}}
        {{$route.params.name}}
        {{$route.query.id}}
        {{$route.query.name}}
        <router-link to="/work/test1">子路由1</router-link>
        <router-link to="/work/test2">子路由2</router-link> 
        <router-view/>
    </div>
   
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>