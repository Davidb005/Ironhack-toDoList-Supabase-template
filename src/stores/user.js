import { defineStore } from "pinia";
import supabase from "@/lib/supabase";
import { ref } from "vue";

export const useUserStore = defineStore("userStore", () => {
  const user = ref();

  // const createNewUser = async (email, password) => {
  //   const { data, error } = await supabase.auth.signUp({
  //     email: email,
  //     password: password,
  //   });

  //   if (error) console.log("error: ", error);
  //   else user.value = data;
  //   console.log("user :", user.value);
  // };

  const createNewUser = async (email, password) => {
    const { user, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
      if (error) {
      console.log('Error registering user:', error);
      return;
    } 
  
    const { data, error:inserError } = await supabase
      .from('users')
      .insert({
        id: user.id, 
        email: email,
      });
  
    if (insertError) {
      console.error('Error creating new user in database:', error);
    } else {
      console.log('User registered and additional user info stored:', data);
    }
  };

  const signInUser = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (error) console.log("error: ", error);
    else user.value = data;
    console.log("user :", user.value);
  };
  return { user, createNewUser, signInUser };
});
