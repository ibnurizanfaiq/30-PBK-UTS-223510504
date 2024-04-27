<script setup>
import { ref } from 'vue';

const Rencana = ref('');
const Waktu = ref('');
const Catatan = ref('');
const todos = ref([]);

const addtask = () => {
  todos.value.push({ Rencana: Rencana.value, Waktu: Waktu.value, Catatan: Catatan.value });
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
            <button class="btn btn-primary" @click="addtask" type="submit">submit</button>
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
                <button class="btn btn-danger" @click="removetask(index)">remove</button>
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
