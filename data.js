let products_data = [
  {
    name: "Tea",
    storage: 100,
    average_stop_time: 0,
    average_purchase_time: 0,
    accum_stop_time: 0,
    sold_num: 0,
    consideration_num: 0,
    purchase_rate: 0,
  },
  {
    name: "Candy",
    storage: 55,
    average_stop_time: 4,
    average_purchase_time: 10,
    accum_stop_time: 44,
    sold_num: 5,
    consideration_num: 32,
    purchase_rate: 15,
  },
  {
    name: "Cake",
    storage: 100,
    average_stop_time: 13,
    average_purchase_time: 14,
    accum_stop_time: 57,
    sold_num: 3,
    consideration_num: 12,
    purchase_rate: 25,
  },
  {
    name: "Chocolate",
    storage: 0,
    average_stop_time: 7,
    average_purchase_time: 5,
    accum_stop_time: 75,
    sold_num: 24,
    consideration_num: 30,
    purchase_rate: 80,
  },
  {
    name: "Chips",
    storage: 90,
    average_stop_time: 5,
    average_purchase_time: 9,
    accum_stop_time: 42,
    sold_num: 7,
    consideration_num: 10,
    purchase_rate: 70,
  },
];

let coke_sold_data = {
  time: [],
  sold_num: [],
};

const backgroundColors = [
  "rgba(230, 57, 70, 0.95)",
  "rgba(251, 133, 0, 0.95)",
  "rgba(255, 209, 102, 0.95)",
  "rgba(6, 214, 160, 0.95)",
  "rgba(17, 138, 178, 0.95)",
];
const borderColors = [
  "rgba(50, 50, 50, 0.8)",
  "rgba(50, 50, 50, 0.8)",
  "rgba(50, 50, 50, 0.8)",
  "rgba(50, 50, 50, 0.8)",
  "rgba(50, 50, 50, 0.8)",
];
