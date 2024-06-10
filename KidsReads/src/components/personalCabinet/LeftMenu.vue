<template>
  <div class="bg-[#FFA500] w-[100vw] h-[100vh] flex justify-end">
    <div class="hidden md:flex w-48 lg:w-64 h-full p-4 pt-2">
      <div class="w-full h-full rounded-xl flex justify-center">
        <ul>
          <img src="/images/whiteLogo.png" class="mb-16 mt-4" />

          <li
            v-for="(item, idx) in headerLinks"
            :key="idx"
            class="text-lg text-[#F4F4F4] lg:text-xl py-4 text-center hover:underline cursor-pointer"
          >
            <a :href="item.url">{{ item.label }}</a>
          </li>
        </ul>
      </div>
    </div>
    <CabinetContent />
  </div>
</template>
<script setup>
import CabinetContent from "./CabinetContent.vue";
import { useHeadersStore } from "../../stores/headerLinksStore";

const store = useHeadersStore();
const headerLinks = store.headerLinks;
</script>