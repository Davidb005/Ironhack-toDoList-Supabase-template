<script setup>
import { useUserStore } from "../stores/user";
import { ref } from "vue";
const userStore = useUserStore();
const email = ref("");
const password = ref("");
</script>

<template>
  <div class="title-container">
    <h1 class="title">Your ToDo List</h1>
  </div>
  <h2>Create your Account</h2>
  <h3 v-if="userStore.user">Current User: {{ userStore.user.user.email }}</h3>
  <fieldset class="signin-container">
    <input class="input" placeholder="Write your email" v-model="email" />
    <input
      class="input"
      type="password"
      placeholder="Write your password"
      v-model="password"
    />
    <RouterLink to="/list">
      <button class="button" @click="userStore.createNewUser(email, password)">
        Create new User
      </button>
    </RouterLink>
  </fieldset>
</template>

<style>
.title-container {
  background-color: darkolivegreen;
  margin-bottom: 30px;

  .title {
    color: rgb(255, 153, 0);
    text-align: center;
  }
}
h2 {
  text-align: center;
  font-size: 20px;
  margin-bottom: 50px;
}

.signin-container {
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  height: 50vh;
  background-color: mediumturquoise;
  margin-bottom: 100px;
  .input {
    width: 33vw;
    height: 20px;
    color: gray;
  }
  .button {
    height: 30px;
    width: 200px;
    background-color: lightgray;
    border-radius: 20px;
  }
  .button:hover {
    cursor: pointer;
  }
}
</style>
