<script setup>
import { ref } from 'vue';

const Rencana = ref('');
const Waktu = ref('');
const Catatan = ref('');
const todos = ref([]);
const editingIndex = ref(null);

const addtask = () => {
  if (editingIndex.value !== null) {
    todos.value[editingIndex.value] = { Rencana: Rencana.value, Waktu: Waktu.value, Catatan: Catatan.value };
    editingIndex.value = null;
  } else {
    todos.value.push({ Rencana: Rencana.value, Waktu: Waktu.value, Catatan: Catatan.value });
  }
  Rencana.value = '';
  Waktu.value = '';
  Catatan.value = '';
};

const removetask = (index) => {
  todos.value.splice(index, 1);
};

const toggleDone = (index) => {
  todos.value[index].done = !todos.value[index].done;
};

const edittask = (index) => {
  Rencana.value = todos.value[index].Rencana;
  Waktu.value = todos.value[index].Waktu;
  Catatan.value = todos.value[index].Catatan;
  editingIndex.value = index;
};
</script>

<template>
  <section id="todo">
    <div class="card mt-3">
      <div class="card-header bg-success text-white">
        <h1>Your Plan Activity</h1>
      </div>

      <div class="row">
        <div class="col">
          <input type="text" class="form-control" v-model="Rencana" placeholder="Rencana">
        </div>
        <div class="col">
          <input type="text" class="form-control" v-model="Waktu" placeholder="Waktu" >
        </div>
        <div class="col">
          <input type="text" class="form-control" v-model="Catatan" placeholder="Catatan" >
        </div>
        <div class="col">
          <button class="btn btn-primary" @click="addtask" type="submit">{{ editingIndex !== null ? 'Update' : 'Submit' }}</button>
        </div>
      </div>

      <div class="card-body">
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th>Rencana</th>
              <th>Waktu</th>
              <th>Catatan</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(todo, index) in todos" :key="index">
              <td :class="{ 'done': todo.done }">{{ todo.Rencana }}</td>
              <td :class="{ 'done': todo.done }">{{ todo.Waktu }}</td>
              <td :class="{ 'done': todo.done }">{{ todo.Catatan }}</td>
              <td>
                <button class="btn btn-success" @click="toggleDone(index)">{{ todo.done ? 'Undone' : 'Done' }}</button>
                <button class="btn btn-warning" @click="edittask(index)">Edit</button>
                <button class="btn btn-danger" @click="removetask(index)">Remove</button>
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
</style>
