<template>
    <div>
        <ul class="movie-box">
            <li class="movieList" v-for="(obj,index) in movieslist" :key="index" @click="goDetail(obj.id)">
                <img :src="obj.images.small" alt="">
                <div >
                    <h2>{{obj.original_title}}</h2>
                    <p>{{obj.collect_count}}已收藏</p>
                    <p >演员：<span v-for="(cast,index) in obj.casts" :key="index">{{cast.name}} </span></p>
                </div>

            </li>
        </ul>
        
        
        <img class="loading" v-show="isShow" src="@/assets/images/loading.gif" alt="">
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return{
                movieslist: [],
                isShow:false,
                flag:true
            }
        },
        created(){
            this.getmovielist(this.movieslist.length)
             window.onscroll=()=>{
                 
                 let scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
                 let clientHeight=document.documentElement.clientHeight;
                 let scrollHeight=document.documentElement.scrollHeight;
                 
                 if(Math.abs(scrollHeight-scrollTop-clientHeight)<1){
                     this.getmovielist(this.movieslist.length);
                 }
             }
        },
        methods:{
            getmovielist(num){
                this.isShow=true;
                if(this.flag){
                  this.flag=false;
                  axios.get('https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/in_theaters?start='+num+'&count=10')
                .then((res)=>{
                    this.flag=true;
                    this.movieslist=[...this.movieslist,...res.data.subjects],
                    this.isShow=false;
                }).catch(()=>{

                })  
                }
               
            },
            goDetail(id){
                this.$router.push({
                    path:'/movies/moviesDetail',
                    query:{id}
                })
            }


        }

    }
</script>

<style lang="scss" scoped>
.movie-box{
    .movieList{
        display:flex;
    img{
        width:2rem;
        margin-right: 0.2rem;   
    }
    padding-top: 0.2rem;
    // padding-left:0.2rem;
    // margin-bottom: 0.2rem;
    border-bottom: 1px solid black
    }
}
.loading{
    width:1.5rem;
    // height:3rem;
    position: fixed;
    left:50%;
    top:50%;
    //transform: translate(-50%,-50%);
}
</style>