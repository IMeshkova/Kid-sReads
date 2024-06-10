<template>
  <section
    class="flex flex-col w-full md:w-full h-full md:h-[70%] gap-y-16 md:gap-y-4 px-16 mt-8"
  >
    <div class="flex flex-col md:flex-row gap-x-4 gap-y-4 h-[50%] md:h-[40%]">
      <div class="bg-white w-full md:w-[60%] rounded-xl">
        <div
          class="flex flex-col bg-white rounded-xl gap-y-[5px] p-4 h-full lg:h-1/2"
        >
          <span class="text-black text-lg md:text-2xl font-semibold"
            >Характеристики</span
          >
          <ul class="columns-2 mt-4">
            <li class="text-gray-400 text-lg py-1">Прочитано книг</li>
            <li class="text-lg font-semibold">20</li>
            <li class="text-gray-400 text-lg py-1">Мова</li>
            <li class="text-lg font-semibold">українська</li>
            <li class="text-gray-400 text-lg py-1">Кількість сторінок</li>
            <li class="text-lg font-semibold">105</li>
            <li class="text-gray-400 text-lg py-1">Дата останнього читання</li>
            <li class="text-lg font-semibold">14.03.2024</li>
          </ul>
        </div>
      </div>
      <div class="bg-white w-full md:w-[40%] rounded-xl">
        <div
          class="flex flex-col bg-white rounded-xl gap-y-[10px] p-4 h-full lg:h-1/2"
        >
          <span class="text-black text-lg md:text-2xl font-semibold"
            >Улюблена книга місяця</span
          >
          <div class="flex flex-row gap-x-4">
            <img
              class="w-16 h-16 object-cover rounded-md"
              src="/images/booksCovers/book4.jpg"
              alt=""
            />
            <span class="text-black text-lg font-semibold"
              >Пригоди котика та мишки</span
            >
          </div>
          <div
            class="inline-block lg:hidden h-24 w-full overflow-hidden"
            style="max-height: 80vh"
          >
            <span class="text-gray-400 font-extralight inline-block">
              Якщо ви не знаєте, як розповісти діткам про емоції в доступній та
              водночас цікаві формі, тоді варто звернути увагу на цю книгу.
            </span>
          </div>
          <span class="hidden md:inline-block text-gray-400 font-extralight">
            Якщо ви не знаєте, як розповісти діткам про емоції в доступній та
            водночас цікаві формі, тоді варто звернути увагу на цю книгу.
          </span>
        </div>
      </div>
    </div>
    <div class="bg-white rounded-xl h-[50%] flex justify-center">
      <Chart />
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import Chart from "./Chart.vue";
</script>