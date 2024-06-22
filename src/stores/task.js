import { defineStore } from "pinia";
import supabase from "@/lib/supabase"
import { ref } from "vue";

export const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref([]);
  const newTaskName = ref('')

  const fetchTasks = async () => {
    const { data, error } = await supabase
      .from('tasks')
      .select()

    if (error) console.log("Error: ", error);
    else tasks.value = data;
    console.log("tasks: ", tasks.value);
  }

const addTask = async () => {
  const { data, error } = await supabase
    .from('tasks')
    .insert({ name: newTaskName.value })
    .select();
  
  if (error) {
    console.error('Error adding task:', error);
  } else {
    tasks.value.push(...data);
    newTaskName.value = '';
  }
};

const deleteTask = async () => {
  const { error } = await supabase
    .from('tasks')
    .delete()
    .eq('id', 1);
}

const editTask = async() => {
  const { data, error } = await supabase
    .from('tasks')
    .update({ name: newTaskName.value })
    .eq('id', 1);
  
  if (error) {
    console.error('Error editing task:', error);
  } 
}
  return { tasks, fetchTasks, addTask, deleteTask, editTask}
})