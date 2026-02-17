import { navbar } from "./components/navbar.js";
import { allProducts } from "./components/allProducts.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("navbar").innerHTML = navbar();

  // fetching data
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("products-page").innerHTML = allProducts(data);
    });
});
