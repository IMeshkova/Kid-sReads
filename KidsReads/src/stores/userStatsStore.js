import { defineStore } from "pinia";
import { ref } from "vue";

export const useStatsStore = defineStore("userStatistics", () => {
  const userStatistics = ref([
    {
      booksRead: 20,
      pageCnt: 105,
      language: "українська",
      lastDate: "14.03.2024",
      favouriteBook: {
        cover: "images/booksCovers/Книжка4.png",
        title: "Пригоди котика та мишки",
      },
    },
  ]);

  return {
    userStatistics,
  };
});
