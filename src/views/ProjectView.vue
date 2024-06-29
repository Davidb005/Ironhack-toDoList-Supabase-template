<script setup>
import { useUserStore } from "../stores/user";
import { useTaskStore } from "../stores/task";
import { ref } from "vue";
const userStore = useUserStore();
const taskStore = useTaskStore();
</script>

<template>
  <div class="title-container">
    <h1 class="title">Your ToDo List</h1>
  </div>
  <fieldset class="task-input-container">
    <input class="task-input" type="text" placeholder="Enter a Task" />
    <button class="task-button" @click="taskStore.addTask">Add Task</button>
  </fieldset>
  <div class="fetch-button-container">
    <button class="fetch-button" @click="taskStore.fetchTasks()">
      SHOW ME MY NEXT GOAL!
    </button>
  </div>
  <ul class="task-list">
    <li class="list-items" v-for="task in taskStore.tasks">
      <h4 class="task-name">
        {{ task.title }}
      </h4>
      <div class="button-container">
        <button class="task-button1" @="taskStore.editTask">Edit</button>
        <button class="task-button2" @="taskStore.deleteTask">Delete</button>
      </div>
    </li>
  </ul>
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
.task-input-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
  margin: 10px 10px;
  .task-input {
    width: 75vw;
  }
  .task-button {
    width: 15vw;
  }
}
.fetch-button-container {
  display: flex;
  justify-content: center;
  height: 30vh;
  width: 100vw;
}

.fetch-button {
  width: 14vw;
  height: 21vh;
  border-radius: 50%;
  color: darkblue;
  margin: 30px;
}
.fetch-button:hover {
  cursor: pointer;
  background-color: lightgreen;
}
.task-list {
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  gap: 20px;

  .button-container {
    display: flex;
    justify-content: end;
    gap: 30px;
    width: 30%;
    margin-right: 10px;
  }
  .list-items {
    display: flex;
  }
  .task-name {
    width: 70%;
    border: 3px dashed lightgreen;
  }
  .task-button1 {
    width: 45%;
    background-color: lightblue;
    color: white;
  }
  .task-button2 {
    width: 45%;
    background-color: rgb(255, 64, 0);
    color: white;
  }
}

button:hover {
  cursor: pointer;
}
</style>
