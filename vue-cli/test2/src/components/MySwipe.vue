<template>
    <div class="img-box">
        <transition-group :name="mode" tag="ul">
            <li v-for="(obj,index) in imglist" :key="index" v-show="index==nowIndex">
                <img :src="obj" alt="">
            </li>
        </transition-group>
        <button @click="fn()">click回传</button>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                
                nowIndex:0
            }
        },
        props:['imglist','mode','speed'],
        created(){
            setInterval(()=>{
                this.nowIndex++;
                if(this.nowIndex==this.imglist.length){
                    this.nowIndex=0;
                }
            },this.speed)
        },
        methods:{
            fn(){
                this.$emit('xx','sdfghjkjhgfhjkm')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .img-box{
         position:relative;
        ul{
           height: 250px;   
        }
        li{
                width:100%;
                position: absolute;
                top:0;
                left:0;
            img{
                width:100%;
                height:250px;
                
            }
        }
    .slide-enter{
        transform: translateX(-100%)
    }
    .slide-enter-active{
        transition: transform 1s linear
    }
    .slide-enter-to{
        transform: translateX(0%)
    }
    .slide-leave{
        transform: translateX(0%)
    }
    .slide-leave-active{
        transition: transform 1s linear
    }
    .slide-leave-to{
        transform: translateX(100%)
    }
    .fade-enter{
        opacity:0;
    }
    .fade-enter-active{
        transition: opacity 1s linear
    }
    .fade-enter-to{
        opacity:1;
    }
    .fade-leave{
        opacity:1;
    }
    .fade-leave-active{
        transition: opacity 1s linear
    }
    .fade-leave-to{
        opacity:0;
    }
    }
    
</style>