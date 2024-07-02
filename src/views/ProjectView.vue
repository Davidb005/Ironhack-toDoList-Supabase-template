<script setup>
import { useUserStore } from "../stores/user";
import { useTaskStore } from "../stores/task";
import { ref } from "vue";
const userStore = useUserStore();
const taskStore = useTaskStore();

const newTaskInput = ref();
const deletedTask = ref();  
async function addTask(){
  if(!newTaskInput.value) {
    alert('please introduce a task');
  }  else {
    taskStore.addTask(newTaskInput.value, userStore.user.user.id);
  }
}

async function deleteTask(task) {
  taskStore.deleteTask(task)
}

async function editTask(task){
  let newTitle = prompt('What are you up to?', task.title);
  if(!newTitle){
    alert('Please, introduce the title of your new task');
  } else{
    task.title = newTitle;
    taskStore.editTask(task);
  }
}
async function completeTask(task){
  taskStore.completeTask(task)
}
</script>

<template>
  <div class="title-container">
    <RouterLink class="router-link" to="/">
     <h1 class="title">Your ToDo List</h1>
    </RouterLink>
  </div>
  <fieldset class="task-input-container">
    <input class="task-input" type="text" placeholder="Enter a Task" v-model="newTaskInput" />
    <button class="task-button" @click="addTask()">Add Task</button>
  </fieldset>
  <div class="fetch-button-container">
    <button class="fetch-button" @click="taskStore.fetchTasks()">
      SHOW ME MY TASKS
    </button>
  </div>
  <ul class="task-list">
    <li class="list-items" v-for="task in taskStore.tasks">
      <input type="checkbox" class="complete-button" @click="completeTask(task)">
      <h4 :class="{'completed-task': task.is_complete, 'task-name': !task.is_complete}">
        {{ task.title }}
      </h4>
      <div class="button-container">
          <button class="task-button1" v-if="!task.is_complete" @click="editTask(task)">Edit</button>
        <button class="task-button2" @click="deleteTask(task)">Delete</button>
      </div>
    </li>
  </ul>
</template>

<style>
.title-container {
  margin-bottom: 30px;
  border-bottom: solid  10px black;
  padding-bottom: 10px;
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
  height: 10vh;
  width: 50%;
  color: darkblue;
  margin: 30px;
  background-color: lightcoral;
}
.fetch-button:hover {
  cursor: pointer;
  background-color: lightblue;
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
    border: 3px dashed black;
    padding-left: 20px;
  }
  .task-button1 {
    width: 45%;
    background-color: lightblue;
    color: white;
    margin-left: 5px;
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
.complete-button{
  background-color: white;
  margin-right: 5px;
}

.completed-task{
  text-decoration: line-through;
  background-color: gray;
  width: 70%;
  border: 3px dashed black;
  padding-left: 20px;
}

.router-link{
  text-decoration: none;
}
</style>
