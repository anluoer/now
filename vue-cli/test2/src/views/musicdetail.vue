<template>
  <div>
    <Aplayer autoplay 
        :music="musicdata[0]"
        :list="musicdata"
        showLrc=true   
        v-if="isshow"
     />
  </div>
</template>

<script>
import axios from "axios";
import Aplayer from "vue-aplayer";
export default {
  data() {
    return {
      musicdata: [],
      isshow:false,
    };
  },
  created() {
    axios
      .get("./data/musicdata.json")
      .then(res => {
        res.data.musicData.forEach(obj => {
          let music = {
            src: obj.src,
            title: obj.title,
            artist: obj.author,
            pic: obj.musicImgSrc,
            lrc: obj.lrc
          }
          this.musicdata.push(music);
        });
        this.isshow=true;
      })
      .catch(res => {
        console.log("错误")
      });
  },
  components: {
    Aplayer
  }
};
</script>

<style lang="scss" scoped>
</style>