// import { defineStore } from "pinia";
// import { ref } from "vue";

// export const useChartStore = defineStore("chartStore", () => {
//   const chartsData = ref([
//     {
//       labels: ["January", "February", "March", "April", "May", "June", "July"],
//       datasets: [
//         {
//           label: "Data One",
//           backgroundColor: "#f87979",
//           data: [40, 39, 10, 40, 39, 80, 40],
//         },
//       ],
//     },
//   ]);
//   const chartOptions = ref([
//     {
//       responsive: true,
//       maintainAspectRatio: false,
//     },
//   ]);
//   return {
//     chartsData,
//     chartOptions,
//   };
// });

export const data = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Кількість прочитаного",
      backgroundColor: "#f87979",
      data: [0, 40, 60, 68, 41],
    },
  ],
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
};
