import { defineStore } from "pinia";
import { ref } from "vue";

export const useUsersStore = defineStore("usersData", () => {
  const usersData = ref([
    { name: "Софія" },
    { surname: "Білецька" },
    { phoneNumber: "+38(097) 34 678 24" },
    { email: "Biletska43@gmail.com" },
    { city: "Lviv" },
    { age: 5 },
  ]);
  return {
    usersData,
  };
});
