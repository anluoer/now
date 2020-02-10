<template>
    <div class="header" :style="{background:$store.state.color}">
        首页   {{$store.state.title}}
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .header{
        height: 1rem;
        line-height: 1rem;
        background: red;
        position: fixed;
        top:0px;
        width:100%;
        }
    
</style>