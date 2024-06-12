<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useTodoStore } from './store/todoStore';

const router = useRouter();
const selectedMenu = ref('todos');
const TodoStore = useTodoStore();

const navigateToTodos = () => {
  selectedMenu.value = 'todos';
  router.push('/todos');
};

const navigateToPost = () => {
  selectedMenu.value = 'post';
  router.push('/post');
};

const navigateToAlbums = () => {
  selectedMenu.value = 'albums';
  router.push('/albums');
};
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-info" id="nav">
      <button class="btn btn-light" @click="navigateToTodos">Todos</button>
      <button class="btn btn-light" @click="navigateToPost">Post</button>
      <button class="btn btn-light" @click="navigateToAlbums">Albums</button>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped>
#nav {
  display: flex;
  justify-content: center;
}
#nav button {
  margin: 0 10px;
}
</style>