<template>
    <div>
        <my-swipe :imglist="imglist" mode="fade" speed="2000" @xx="aa"></my-swipe>
        <!-- <swipe class="my-swipe">
        <swipe-item class="slide1"></swipe-item>
        <swipe-item class="slide2"></swipe-item>
        <swipe-item class="slide3"></swipe-item>
</swipe> -->
    </div>
</template>

<script>
    import MySwipe from '@/components/MySwipe.vue'
    import'vue-swipe/dist/vue-swipe.css';
    import { Swipe, SwipeItem } from 'vue-swipe';

    export default {
        data(){
            return{
                imglist:[
                    "/img/photo/1.jpg",
                    "/img/photo/2.jpg",
                    "/img/photo/3.jpg",

                ],
            }
        },
        components:{
            Swipe,
            SwipeItem,
            MySwipe
        },
        methods:{
            aa(arg){
                console.log(arg)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide1 {
  background-color: #0089dc;
  color: #fff;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}
</style>