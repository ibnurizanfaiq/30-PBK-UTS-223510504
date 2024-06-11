<template>
    <div>
      <h1>Photos</h1>
      <ul>
        <li v-for="photo in photos" :key="photo.id">
          <img :src="photo.thumbnailUrl" @click="showFullPhoto(photo.url)" alt="Thumbnail">
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const photos = ref([]);
  
  onMounted(async () => {
    // Fetch photos data from API based on album id
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${route.params.id}`);
    photos.value = await response.json();
  });
  
  const showFullPhoto = (url) => {
    window.open(url, '_blank');
  };
  </script>
  