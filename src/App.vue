<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isHomeRoute = computed(() => route.path === '/');
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <router-Link to ="/" class="navbar-brand"><i class="bi bi-cpu-fill"></i>  Ibnu Rizan</router-Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/todos" class="nav-link">Todos  <i class="bi bi-list-task"></i></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/post" class="nav-link">Post  <i class="bi bi-file-post"></i></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/albums" class="nav-link">Albums  <i class="bi bi-journal-album"></i></router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div v-if="isHomeRoute" class="land">
      <h1>Project UAS</h1>
      <h2>Ibnu Rizan Faiq</h2>
  </div>
  <router-view />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.land {
  font-family: 'Roboto', sans-serif;
  text-align: center;
  margin-top: 100px; /* Untuk memberi jarak dari navbar */
  color: #333;
}

.land h1 {
  font-size: 48px;
  font-weight: bold;
}

.land h2 {
  font-size: 36px;
  font-weight: bold;
}
.navbar-brand {
  font-weight: bold;
}

.nav-link {
  font-size: 18px;
  margin-left: 20px;
  font-weight: bold;
}

.nav-link:hover {
  color: #ffffff;
  text-decoration: none;
}
</style>
