<script setup>
import { ref } from 'vue';
import TodoList from './components/TodoList.vue';
import UserPosts from './components/UserPosts.vue';

const selectedMenu = ref('todos');
const todos = ref([]);
const users = ref([]);
const loading = ref(true);

const handleAddOrUpdateTask = (task, index) => {
  if (index !== null) {
    todos.value[index] = task;
  } else {
    todos.value.push(task);
  }
};

const handleRemoveTask = (index) => {
  todos.value.splice(index, 1);
};

const handleToggleDone = (index) => {
  todos.value[index].done = !todos.value[index].done;
};

const fetchUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (response.ok) {
      users.value = await response.json();
      loading.value = false;
    } else {
      throw new Error('Failed to fetch users');
    }
  } catch (error) {
    console.error(error);
    loading.value = false;
  }
};

fetchUsers();
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-info" id="nav">
      <button class="btn btn-light" @click="selectedMenu = 'todos'">Todos</button>
      <button class="btn btn-light" @click="selectedMenu = 'post'">Post</button>
    </nav>
    <section v-if="selectedMenu === 'todos'">
      <TodoList
        :todos="todos"
        @add-or-update-task="handleAddOrUpdateTask"
        @remove-task="handleRemoveTask"
        @toggle-done="handleToggleDone"
      />
    </section>
    <section v-else-if="selectedMenu === 'post'">
      <UserPosts :users="users" :loading="loading" />
    </section>
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
