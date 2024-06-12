<script setup>
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <h1 class="navbar-brand"><i class="bi bi-cpu-fill"></i>  Ibnu Rizan</h1>
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
  <router-view />
</template>

<style scoped>
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
