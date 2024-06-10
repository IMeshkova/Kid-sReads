// stores/booksStore.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useBooksStore = defineStore("books", () => {
  const popularBooks = ref([
    {
      title: "Пригоди Краплинки",
      characteristics: {
        lang: "Українська",
        age: "3+",
        pages: 200,
      },
      description:
        "Якщо ви не знаєте, як розповісти діткам про емоції в доступній та водночас цікаві формі, тоді варто звернути увагу на цю книгу.",
      cover: "images/booksCovers/book1.jpg",
    },
    {
      title: "Лісові монстри",
      characteristics: {
        lang: "Українська",
        age: "3+",
        pages: 200,
      },
      description:
        "Якщо ви не знаєте, як розповісти діткам про емоції в доступній та водночас цікаві формі, тоді варто звернути увагу на цю книгу.",
      cover: "images/booksCovers/book2.jpg",
    },
    {
      title: "Файні звірі",
      characteristics: {
        lang: "Українська",
        age: "5+",
        pages: 200,
      },
      description:
        "Якщо ви не знаєте, як розповісти діткам про емоції в доступній та водночас цікаві формі, тоді варто звернути увагу на цю книгу.",
      cover: "images/booksCovers/book3.jpg",
    },
    {
      title: "Пригоди Котика та Мишки",
      characteristics: {
        lang: "Українська",
        age: "0+",
        pages: 200,
      },
      description:
        "Якщо ви не знаєте, як розповісти діткам про емоції в доступній та водночас цікаві формі, тоді варто звернути увагу на цю книгу.",
      cover: "images/booksCovers/book4.jpg",
    },
    {
      title: "Монстрик Міко",
      characteristics: {
        lang: "Українська",
        age: "16+",
        pages: 200,
      },
      description:
        "Якщо ви не знаєте, як розповісти діткам про емоції в доступній та водночас цікаві формі, тоді варто звернути увагу на цю книгу.",
      cover: "images/booksCovers/book5.jpg",
    },
  ]);
  const developingBooks = ref([
    {
      title: "Цуценя",
      characteristics: {
        lang: "Українська",
        age: "3+",
        pages: 200,
      },
      description:
        "Якщо ви не знаєте, як розповісти діткам про емоції в доступній та водночас цікаві формі, тоді варто звернути увагу на цю книгу.",
      cover: "images/booksCovers/book6.jpg",
    },
    {
      title: "Абетка",
      characteristics: {
        lang: "Українська",
        age: "3+",
        pages: 200,
      },
      description:
        "Якщо ви не знаєте, як розповісти діткам про емоції в доступній та водночас цікаві формі, тоді варто звернути увагу на цю книгу.",
      cover: "images/booksCovers/book7.jpg",
    },
    {
      title: "Космічні пригоди",
      characteristics: {
        lang: "Українська",
        age: "5+",
        pages: 200,
      },
      description:
        "Якщо ви не знаєте, як розповісти діткам про емоції в доступній та водночас цікаві формі, тоді варто звернути увагу на цю книгу.",
      cover: "images/booksCovers/book8.jpg",
    },
    {
      title: "Пригоди Котика та Мишки",
      characteristics: {
        lang: "Українська",
        age: "0+",
        pages: 200,
      },
      description:
        "Якщо ви не знаєте, як розповісти діткам про емоції в доступній та водночас цікаві формі, тоді варто звернути увагу на цю книгу.",
      cover: "images/booksCovers/book4.jpg",
    },
    {
      title: "Монстрик Міко",
      characteristics: {
        lang: "Українська",
        age: "16+",
        pages: 200,
      },
      description:
        "Якщо ви не знаєте, як розповісти діткам про емоції в доступній та водночас цікаві формі, тоді варто звернути увагу на цю книгу.",
      cover: "images/booksCovers/book5.jpg",
    },
  ]);
  return {
    popularBooks,
    developingBooks,
  };
});
