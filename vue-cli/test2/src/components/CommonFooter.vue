<template>
    <div id="footer1" :style="{background:$store.state.color}">
        <router-link v-for="(obj,index) in menu" :key="index"  :to="obj.path" @click.native="change({title:obj.title,color:obj.color})">{{obj.title}}</router-link>
        
    </div>
</template>

<script>
    import {mapMutations} from 'vuex';
    export default {
        data(){
            return{
                menu:[
                    {
                        title:'电影',
                        path:'/',
                        color:'red',
                    },
                     {
                        title:'音乐',
                        path:'/music',
                        color:'green',
                    },
                     {
                        title:'图书',
                        path:'/book',
                        color:'orange',
                    },
                     {
                        title:'图片',
                        path:'/photo',
                        color:'yellow',
                    }
                ]
            }
        },
        methods:mapMutations(['change']),
        //生命周期函数
        created(){
            this.menu.forEach((obj,index)=>{
                if(obj.path == this.$route.path){
                    this.change({title:obj.title,color:obj.color})
                }
            });
        }
    }
</script>

<style lang="scss" scoped>
    #footer1{
       height: 1rem;
       line-height: 1rem;
       background: red;
       position:fixed;
       bottom: 0px;
       width:100%;
       display: flex;
       a{
           flex:1;
           text-align: center;
           color:#000;
            &.router-link-exact-active{
                color:#fff;
            }
       }
    }
</style>