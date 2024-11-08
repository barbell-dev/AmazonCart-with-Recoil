import { atom } from "recoil";
export const wishItemsState = atom({
  key: "wishItemsState",
  default: [
    {
      "image-url": "https://m.media-amazon.com/images/I/61JyZxQ36lL.jpg",
      name: "Keyboard",
      price: 100,
    },
    {
      name: "coffee-cup",
      "image-url":
        "https://images.meesho.com/images/products/407761667/z7qsi_1200.jpg",
      price: 100,
    },
    {
      name: "pillows",
      "image-url":
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSr08-YTXwmoDbiI7NbYqiCmx_KkNVPJDhlEkZ-_L1QptKuH-k8OGKrecBjWS2wARbnU6ntTqbUFkPHkLwsjuUdpRkDair6AKON5l7hqYxozFDMahv7GIWf&usqp=CAc",
      price: 100,
    },
  ],
  //default should contain array of objects and each object should contain produce name , product price , product image (optional)
});
