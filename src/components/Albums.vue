<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const albums = ref([]);
const loading = ref(true);
const router = useRouter();

const fetchAlbums = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums');
    if (response.ok) {
      albums.value = await response.json();
      loading.value = false;
    } else {
      throw new Error('Failed to fetch albums');
    }
  } catch (error) {
    console.error(error);
    loading.value = false;
  }
};

const viewAlbum = (albumId) => {
  router.push({ name: 'AlbumPhotos', params: { albumId } });
};

onMounted(fetchAlbums);
</script>

<template>
  <div class="container mt-3">
    <h1 class="text-center"> Data Albums</h1>
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-else>
      <div v-for="(album, index) in albums" :key="index" class="card mt-3">
        <div class="card-body">
          <h5>{{ album.title }}</h5>
          <button class="btn btn-primary" @click="viewAlbum(album.id)">View Photos</button>
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
