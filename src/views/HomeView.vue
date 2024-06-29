<script setup>
import SigninView from "./SigninView.vue";
import { useUserStore } from "../stores/user";
import { useTaskStore } from "../stores/task";
import { ref } from "vue";

const userStore = useUserStore();
const taskStore = useTaskStore();

const email = ref("");
const password = ref("");
</script>

<template>
  <div class="title-container">
    <h1 class="title">Your ToDo List</h1>
  </div>
  <h2 v-if="userStore.user">Welcome {{ userStore.user.user.email }}!</h2>
  <fieldset class="login-container">
    <input class="input" placeholder="Write your email" v-model="email" />
    <input
      class="input"
      type="password"
      placeholder="Write your password"
      v-model="password"
    />

    <button class="button" @click="userStore.signInUser(email, password)">
      Log In
    </button>
  </fieldset>
  <div class="subtitle-container">
    <h3 class="subtitle">Don't have an account yet?</h3>
    <button class="link-button">
      <RouterLink class="link" to="/sign-in">Create account</RouterLink>
    </button>
  </div>
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
.login-container {
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
.subtitle-container {
 margin-left: 50%;
  border: 5px double lightsalmon;
  display: inline-block;
  transform: translateX(-50%);
  padding: 30px;

  .subtitle {
    color: rgb(255, 153, 0);
    margin-bottom: 30px;
  }
  .link {
    text-decoration: none;
    color: black;
  }
  .link-button{
    margin-left: 50%;
    transform: translateX(-50%);
  }
}
</style>
