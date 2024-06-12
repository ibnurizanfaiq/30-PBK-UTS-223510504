import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import router from './router';
import { createPinia } from 'pinia';

createApp(App).use(router).use(createPinia()).mount('#app');
