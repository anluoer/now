<template>
    <div class="img-box"> 
        <img v-for="(obj,index) in photodata" :key="index" :src="obj.src" alt="" @click="godetail(index)">
    </div>
</template>

<script>
    import axios from 'axios';
    import {mapMutations} from 'vuex'
    export default {
        data(){
            return {
                photodata:[]
            }
        },
        created(){
            axios.get('/data/photodata.json')
            .then((res)=>{
               this.photodata=res.data.photoData;
               this.addphoto(res.data.photoData)
            }).catch(()=>{
                console.log('错误')
            })
        },
        methods:{
            ...mapMutations(['addphoto']),
            godetail(index){
                this.$router.push({
                    path:'/photodetail/'+index,
                    
                    
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .img-box{
        overflow: hidden;
        img{
        float:left;
        width:50%
    }
    }
    
</style>