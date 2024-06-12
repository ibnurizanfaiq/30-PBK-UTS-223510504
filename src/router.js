import { createRouter, createWebHistory } from 'vue-router';
import TodoList from './components/TodoList.vue';
import Post from './components/UserPosts.vue';
import Albums from './components/Albums.vue';
import AlbumPhotos from './components/AlbumPhotos.vue';

const routes = [
  { path: '/todos', name: 'Todos', component: TodoList },
  { path: '/post', name: 'Post', component: Post },
  { path: '/albums', name: 'Albums', component: Albums },
  { path: '/albums/:albumId', name: 'AlbumPhotos', component: AlbumPhotos, props: true }
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
