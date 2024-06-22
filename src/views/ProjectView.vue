<script setup>
import { useUserStore } from "../stores/user";
import { useTaskStore} from "../stores/task"
import { ref } from "vue";
const userStore = useUserStore();
const taskStore = useTaskStore();
</script>

<template>
  <h1>My To Do List</h1>
  <fieldset>
    <input type="text" placeholder="Enter a Task">
    <button @click="taskStore.addTask">Add Task</button> <!-- Corregido el uso equivocado de la etiqueta -->
  </fieldset>
  
  <button @click="taskStore.fetchTasks()">fetch tasks</button>
  <ul>
    <li v-for="task in taskStore.tasks">
      {{ task.title }} <button @="taskStore.editTask">Edit</button> <button @="taskStore.deleteTask">Delete</button>
    </li>
  </ul>
</template>

<style>
  
</style>