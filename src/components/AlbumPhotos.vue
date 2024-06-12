<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const albumId = route.params.albumId;
const photos = ref([]);
const loading = ref(true);
const selectedPhoto = ref(null);

const fetchPhotos = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
    if (response.ok) {
      photos.value = await response.json();
      loading.value = false;
    } else {
      throw new Error('Failed to fetch photos');
    }
  } catch (error) {
    console.error(error);
    loading.value = false;
  }
};

const viewPhoto = (photoUrl) => {
  selectedPhoto.value = photoUrl;
};

const closePhoto = () => {
  selectedPhoto.value = null;
};

onMounted(fetchPhotos);
</script>

<template>
  <div class="container mt-3">
    <h1 class="text-center">Album Photos</h1>
    <div v-if="loading" class="text-center">Loading...</div>
    <div v-else class="photo-grid">
      <div v-for="(photo, index) in photos" :key="index" class="photo-card">
        <img :src="photo.thumbnailUrl" @click="viewPhoto(photo.url)" class="thumbnail" />
      </div>
    </div>

    <div v-if="selectedPhoto" class="modal" tabindex="-1" role="dialog" style="display: block;">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Photo</h5>
            <button type="button" class="close" @click="closePhoto">
              <span>&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <img :src="selectedPhoto" class="full-size" />
          </div>
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
.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 10px;
}
.photo-card {
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
}
.thumbnail {
  width: 100%;
  height: auto;
  cursor: pointer;
}
.full-size {
  width: 100%;
  height: auto;
}
.modal {
  background: rgba(0, 0, 0, 0.5);
}
</style>
