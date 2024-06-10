<template>
  <section class="h-fit">
    <div class="hidden md:flex w-48 lg:w-64 h-full md:h-[86.6vh] p-4 pt-2">
      <div
        class="w-full h-full shadow-custom rounded-xl bg-white flex justify-center"
      >
        <ul class="mt-20">
          <li
            v-for="(item, idx) in headerLinks"
            :key="idx"
            class="text-lg lg:text-xl py-4 text-center hover:underline cursor-pointer"
          >
            <a :href="item.url">{{ item.label }}</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useHeadersStore } from "../../stores/headerLinksStore";

const store = useHeadersStore();
const headerLinks = store.headerLinks;
</script>