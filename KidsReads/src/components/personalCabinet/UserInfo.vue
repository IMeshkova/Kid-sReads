<template>
  <section
    class="xl:flex flex-col hidden md:w-[300px] items-center justify-center lg:w-[400px] h-[100vh] bg-[#89CFF0] gap-y-3"
  >
    <div
      class="w-60 h-60 rounded-full border-2 bg-white border-white shadow-xl flex justify-center items-center"
    >
      <img class="w-36" src="../../assets/ProfileBig.png" alt="" />
    </div>
    <span class="text-3xl font-semibold my-6">Софія Білецька</span>

    <div
      class="flex items-center justify-start w-[85%] bg-[#A9E3FF] border-2 rounded-2xl h-12"
    >
      <span class="px-1">Телефон:</span>
      <span class="font-bold text-[16px]">+38(097) 34 678 24</span>
    </div>
    <div
      class="flex items-center justify-start w-[85%] bg-[#A9E3FF] border-2 rounded-2xl h-12"
    >
      <span class="px-1">E-mail:</span>
      <span class="font-bold">Biletska43@gmail.com</span>
    </div>
    <div
      class="flex items-center justify-start w-[85%] bg-[#A9E3FF] border-2 rounded-2xl h-12"
    >
      <span class="px-1">Місто:</span>
      <span class="font-bold">Львів</span>
    </div>
    <div
      class="flex items-center justify-start w-[85%] bg-[#A9E3FF] border-2 rounded-2xl h-12"
    >
      <span class="px-1">Вік:</span>
      <span class="font-bold">5</span>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import { useUsersStore } from "../../stores/userData.js";
const store = useUsersStore();
const usersData = computed(() => store.usersData);
</script>