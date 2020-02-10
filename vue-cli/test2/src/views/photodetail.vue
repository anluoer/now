<template>
    <div >
            <v-touch class="img-box" :style="{backgroundImage:'url('+url+')'}" @swipeleft="next()" @tap="gophoto()">
            </v-touch>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueTouch from 'vue-touch';
    Vue.use(VueTouch, {name: 'v-touch'})
    export default {
        data(){
            return{
                idx:this.$route.params.index
            }
        },
        computed:{
            url(){
               return this.$store.state.photodata[this.idx].src
            }
        },
        methods:{
            next(){
                this.idx++;
                if(this.idx==this.$store.state.photodata.length){
                    this.idx=0;
                }
            },
            gophoto(){
                this.$router.push('/photo')
            }
        }
    }
</script>

<style lang="scss" scoped>
.img-box{
    position: absolute;
    top:1rem;
    bottom: 1rem;
    left:0;
    right:0;
    background: black center center no-repeat;
    background-size: contain;
    
}
    
</style>