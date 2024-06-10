<template>
  <div
    class="w-full flex md:hidden flex-col h-20 justify-center bg-[#FFA500] ml-48 absolute"
  >
    <div class="w-full flex flex-row justify-between items-center px-10">
      <div class="w-24">
        <img src="/images/whiteLogo.png" alt="" />
      </div>
      <Burger @click="toggleDropdown" class="object-contain w-10 md:hidden" />
    </div>

    <div
      v-if="isDropdownOpen"
      class="absolute w-full h-fit top-20 md:top-28 bg-primary"
    >
      <div class="flex flex-row items-center justify-center pt-2">
        <div
          class="w-16 h-16 rounded-full border-2 border-white shadow-lg flex justify-center items-center"
        >
          <img class="w-10" src="../../assets/ProfilePic.png" alt="" />
        </div>
      </div>
      <ul class="px-10 grid grid-cols-1">
        <li
          v-for="(item, idx) in headerLinks"
          :key="idx"
          class="flex p-2 text-lg font-semibold border-b-2 justify-between group hover:bg-gray-300 items-center"
        >
          <a :href="item.url">{{ item.label }}</a>
        </li>
      </ul>
      <div class="flex items-center w-full h-auto py-6 px-10 border-b-2">
        <input
          type="text"
          class="w-full h-full shadow-lg p-3 rounded-xl"
          placeholder="..."
          required
        />
        <button
          type="submit"
          class="bg-white p-2 ml-2 text-md text-black rounded-xl shadow-lg"
        >
          <span class="">Пошук</span>
        </button>
      </div>
    </div>
  </div>
  <div
    class="md:h-[100vh] w-[100vw] md:w-[100vw] bg-[#F4F4F4] md:rounded-l-[70px] flex flex-col md:flex-row justify-between items-center mt-20 md:mt-0"
  >
    <UserStats />
    <UserInfo />
  </div>
</template>
<script setup>
import Burger from "../icons/BurgerIcon.vue";
import { ref } from "vue";
import { useHeadersStore } from "../../stores/headerLinksStore";
import UserStats from "./UserStats.vue";
import UserInfo from "./UserInfo.vue";
const headerStore = useHeadersStore();
const headerLinks = headerStore.headerLinks;

const isDropdownOpen = ref(false);
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>