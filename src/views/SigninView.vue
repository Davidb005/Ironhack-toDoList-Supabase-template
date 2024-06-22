<script setup>
import { useUserStore } from "../stores/user";
import { ref } from "vue";
const userStore = useUserStore();
const email = ref("");
const password = ref("");
</script>

<template>
    <h2>Create your Account</h2>
    <h3 v-if="userStore.user">Current User: {{ userStore.user.user.email }}</h3>
  <input placeholder="Write your email" v-model="email" />
  <input type="password" placeholder="Write your password" v-model="password" />
 <RouterLink to="/list">
  <button @click="userStore.createNewUser(email, password)">
    Create new User
  </button>
</RouterLink>
</template>

<style>

</style>