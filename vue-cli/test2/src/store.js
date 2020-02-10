import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title:'电影',
    color:'red',
    photodata:[]
  },
  mutations: {
    change(state,arg){
      state.title=arg.title;
      state.color=arg.color;
    },
    addphoto(state,data){
      state.photodata=data;
    }
  },
  actions: {

  },
});
