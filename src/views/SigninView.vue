<script setup>
  import { RouterLink } from "vue-router";
import { useUserStore } from "../stores/user";
import { ref } from "vue";
const userStore = useUserStore();
const email = ref("");
const password = ref("");
</script>

<template>
  <div class="title-container">
    <RouterLink class="router-link" to="/">
    <h1 class="title">Your ToDo List</h1>
  </RouterLink>
  </div>
  <h2>Create your Account</h2>
  <h3 class="welcome-text" v-if="userStore.user">{{ userStore.user.user.email }}, you are already signed in!</h3>
  <RouterLink to="/list">
     <button class="link-button2" v-if="userStore.user">Get started</button>
  </RouterLink> 
  <fieldset class="signin-container">
    <input class="input" placeholder="Write your email" v-model="email"/>
    <input
      class="input"
      type="password"
      placeholder="Write your password"
      v-model="password"
    />
      <button class="button" @click="userStore.createNewUser(email, password)">
        Create new User
      </button>
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
  font-size: 30px;
  margin-bottom: 50px;
}

.welcome-text {
    text-align: center;
    font-size: 20px;
    margin-bottom: 50px;
}

.signin-container {
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  height: 50vh;
  background-color: rgb(244, 162, 162);
  margin-bottom: 100px;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 20px;
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
.router-link{
  text-decoration: none;
}
</style>
