<script setup>
import { ref, onMounted, watch } from 'vue';

const users = ref([]);
const selectedUser = ref(null);
const userPosts = ref([]);
const loading = ref(true);

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

const fetchPosts = async () => {
  if (selectedUser.value !== null) {
    loading.value = true;
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${selectedUser.value}`);
      if (response.ok) {
        userPosts.value = await response.json();
        loading.value = false;
      } else {
        throw new Error('Failed to fetch user posts');
      }
    } catch (error) {
      console.error(error);
      loading.value = false;
    }
  }
};

onMounted(fetchUsers);
watch(selectedUser, fetchPosts);

</script>

<template>
  <div class="container mt-3">
    <h1 class="text-center">Postingan Users</h1>
    <div class="form-group">
      <label for="userSelect">Pilih User:</label>
      <select class="form-control" id="userSelect" v-model="selectedUser">
        <option v-for="user in users" :value="user.id" :key="user.id">{{ user.name }}</option>
      </select>
    </div>
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-else>
      <div v-for="(post, index) in userPosts" :key="index" class="card mt-3">
        <div class="card-header">
          <h5>{{ post.title }}</h5>
        </div>
        <div class="card-body">
          <p>{{ post.body }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-center {
  text-align: center;
}
.mt-3 {
  margin-top: 1rem;
}
</style>
