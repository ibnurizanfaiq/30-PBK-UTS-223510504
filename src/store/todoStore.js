import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [],
  }),
  actions: {
    addOrUpdateTask(task, index) {
      if (index !== null) {
        this.todos[index] = task;
      } else {
        this.todos.push(task);
      }
    },
    removeTask(index) {
      this.todos.splice(index, 1);
    },
    toggleDone(index) {
      this.todos[index].done = !this.todos[index].done;
    },
  }
});
