import { createRouter, createWebHistory } from 'vue-router';
import TodoList from './components/TodoList.vue';
import Post from './components/UserPosts.vue';

const routes = [
  { path: '/todos', name: 'Todos', component: TodoList },
  { path: '/post', name: 'Post', component: Post }
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
