<template>
    <div>
        
        <ul class="musicList">
            <li v-for="(obj,index) in musiclist" :key="index" @click="goDetail(obj.id)">
                <img :src="obj.bg" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
                return{
                    musiclist:[]
                }
            },
        created(){
             axios.get('./data/musiclist.json')
            .then((res)=>{
                console.log(res)
                this.musiclist=res.data.albums;
                
            }).catch((res)=>{
                console.log()
            })
        },
        methods:{
            goDetail(id){
                this.$router.push({
                    path:'/musicdetail',
                    query:{id}
                })
            }
        }
    }
</script>
<style lang="scss" scoped>
    .musicList{
        display: flex;
        flex-wrap:wrap;
        li{
            // flex:1;
            width:50%;
            img{
                width:100%;
                display: block;
            }
        }


    }
</style>