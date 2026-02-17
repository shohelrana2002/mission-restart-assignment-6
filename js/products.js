import { allProducts } from "../components/allProducts.js";
import navbar from "../components/navbar.js";

// Navbar
document.getElementById("navbar").innerHTML = navbar();

// Footer

// Products
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    document.getElementById("products-page").innerHTML = allProducts(data);
  });
