<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  todos: Array
});

const emit = defineEmits(['add-or-update-task', 'remove-task', 'toggle-done']);

const Rencana = ref('');
const Waktu = ref('');
const Catatan = ref('');
const editingIndex = ref(null);

const addTask = () => {
  emit('add-or-update-task', { Rencana: Rencana.value, Waktu: Waktu.value, Catatan: Catatan.value }, editingIndex.value);
  Rencana.value = '';
  Waktu.value = '';
  Catatan.value = '';
  editingIndex.value = null;
};

const editTask = (index) => {
  const task = props.todos[index];
  Rencana.value = task.Rencana;
  Waktu.value = task.Waktu;
  Catatan.value = task.Catatan;
  editingIndex.value = index;
};

</script>

<template>
  <section id="todo">
    <div class="card mt-3">
      <div class="card-header bg-success text-white">
        <h1>Masukan Aktivitas Kamu</h1>
      </div>
      <br>
      <div class="row">
        <div class="col">
          <input type="text" class="form-control" v-model="Rencana" placeholder="Rencana">
        </div>
        <div class="col">
          <input type="text" class="form-control" v-model="Waktu" placeholder="Waktu">
        </div>
        <div class="col">
          <input type="text" class="form-control" v-model="Catatan" placeholder="Catatan">
        </div>
        <div class="col">
          <button class="btn btn-primary" @click="addTask" type="submit">{{ editingIndex !== null ? 'Update' : 'Submit' }}</button>
        </div>
      </div>

      <div class="card-body">
        <br>
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th>Rencana</th>
              <th>Waktu</th>
              <th>Catatan</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(todo, index) in todos" :key="index">
              <td :class="{ 'done': todo.done }">{{ todo.Rencana }}</td>
              <td :class="{ 'done': todo.done }">{{ todo.Waktu }}</td>
              <td :class="{ 'done': todo.done }">{{ todo.Catatan }}</td>
              <td>
                <button class="btn btn-success" @click="$emit('toggle-done', index)">{{ todo.done ? 'Undone' : 'Done' }}</button>
                <button class="btn btn-warning" @click="editTask(index)">Edit</button>
                <button class="btn btn-danger" @click="$emit('remove-task', index)">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<style scoped>
.done {
  text-decoration: line-through;
}
h1 {
  text-align: center;
}
</style>
