import { createRouter, createWebHistory } from 'vue-router';
import TodoList from './components/TodoList.vue';
import Post from './components/UserPosts.vue';

const routes = [
  { path: '/todos', component: TodoList },
  { path: '/post', component: Post }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
