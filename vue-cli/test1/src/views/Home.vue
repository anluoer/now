<template>
  <div class="home">
    <!-- 导航栏 -->
    <van-nav-bar title="首页" id="title">
      <van-icon name="search" slot="left" />
      <van-icon name="cart" slot="right" />
    </van-nav-bar>
      <!-- 轮播图 -->
      <div id="carousel">
        <van-swipe  :autoplay="3000" indicator-color="white">
          <van-swipe-item id="carousel-item" v-for="(obj,index) in ImageList" :key="index">
            <img v-lazy="obj.path" alt="">
          </van-swipe-item>
        </van-swipe>
      </div>
      
    
    <!-- <div class="hot">
      <p class="hot-head">热门商品</p>
      <div class="hot-produce">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in hotProduceList" :key="index">
            <img :src="item.img" alt="">
            <div>
              <p>{{item.name}}</p>
              <p>{{item.date}}</p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div> -->
  </div>
</template>

<script>
//用的是Vue-Awesome-Swiper组件库
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    components: {
      swiper,
      swiperSlide
    },
    data(){
      return{
      ImageList:[
        {
          path:'./images/1.jpg'
        },{
          path:'./images/2.jpg'
        },{
          path:'./images/3.jpg'
        }      
      ],
      hotProduceList:[
        {
          name:'四轮车1',
          date:'2019.2.3',
          img:'./images/1.jpg'
        },
        {
          name:'四轮车2',
          date:'2019.2.3',
          img:'./images/2.jpg'
        },
        {
          name:'四轮车3',
          date:'2019.2.3',
          img:'./images/3.jpg'
        },{
          name:'四轮车4',
          date:'2019.2.3',
          img:'./images/1.jpg'
        },{
          name:'四轮车5',
          date:'2019.2.3',
          img:'./images/1.jpg'
        },{
          name:'四轮车6',
          date:'2019.2.3',
          img:'./images/1.jpg'
        }
      ],
      swiperOption:{
        slidesPerView:3
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#carousel{
  height:3rem;
}
#carousel-item{
    width: 100%;
    height: 3rem;
  }
  

</style>