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

const addTask = async (title, user_id) => {
  const { data, error } = await supabase
      .from('tasks')
      .insert([
        { title: title, user_id: user_id },
      ]).select()

  if (error) {
    console.error('Error adding task:', error);
  } else {
    tasks.value.push(...data);
    newTaskName.value = '';
  }
};

const deleteTask = async (task) => {
  const { error } = await supabase
    .from('tasks')
    .delete()
    .eq('id', task.id);

    fetchTasks();
}


const editTask = async (task) => {
  const { error } = await supabase
    .from('tasks')
    .update({ title: task.title })
    .eq('id', task.id);

    fetchTaskst();
}

const completeTask = async (task) => {
  task.is_complete = !task.is_complete;
  await supabase
    .from('tasks')
    .update({ is_complete: task.is_complete })
    .eq('id', task.id);
     fetchTasks();
};
  return {  tasks, fetchTasks, addTask, deleteTask, editTask, completeTask}
})