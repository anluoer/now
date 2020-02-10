import Vue from 'vue';
import Router from 'vue-router';
import Movies from './views/movies.vue';
import Moviesdetail from './views/moviesdetail.vue';
import Music from './views/music.vue';
import Musicdetail from './views/musicdetail.vue'
import Book from './views/book.vue';
import Photo from './views/photo.vue';
import Photodetail from './views/photodetail.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'movies',
      component: Movies,
    },
    {
      path: '/movies/moviesdetail',
      name: 'moviesdetail',
      component: Moviesdetail,
    },
    {
      path: '/music',
      name: 'music',
      component: Music,
    },
    {
      path: '/musicdetail',
      name: 'musicdetail',
      component: Musicdetail,
    },
    {
      path: '/book',
      name: 'book',
      component: Book,
    },
    {
      path: '/photo',
      name: 'photo',
      component: Photo,
    },
    {
      path: '/photodetail/:index',
      name: 'photodetail',
      component: Photodetail,
    },
  ],
});
