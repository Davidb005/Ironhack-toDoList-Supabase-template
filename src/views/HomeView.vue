<script setup>
import SigninView from './SigninView.vue'
import { useUserStore } from "../stores/user";
import { useTaskStore} from "../stores/task"
import { ref } from "vue";

const userStore = useUserStore();
const taskStore = useTaskStore();

const email = ref("");
const password = ref("");
</script>

<template>
  <h1>Home</h1>
  <h2 v-if="userStore.user">Current User: {{ userStore.user.user.email }}</h2>
  <input placeholder="Write your email" v-model="email" />
  <input type="password" placeholder="Write your password" v-model="password" />
  <button @click="userStore.signInUser(email, password)">
    Log In
  </button>
  <h3>Don't have an account yet?</h3>
<RouterLink to="/sign-in">Create account</RouterLink>

  <br><br>
  <button @click="taskStore.fetchTasks()">fetch tasks</button>
  <ul>
    <li v-for="task in taskStore.tasks">
      {{ task.title }} <button @="taskStore.editTask">Edit</button> <button @="taskStore.deleteTask">Delete</button>
    </li>
  </ul>
</template>

<style></style>
