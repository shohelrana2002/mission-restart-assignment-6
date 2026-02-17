import { banner } from "../components/banner.js";
import { features } from "../components/features.js";
import navbar from "../components/navbar.js";
import { trending } from "../components/trendingNow.js";

document.getElementById("navbar").innerHTML = navbar();

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");

  if (mobileMenu.classList.contains("hidden")) {
    menuBtn.textContent = "☰";
  } else {
    menuBtn.textContent = "✖";
  }
});

document.getElementById("hero-section").innerHTML = banner();

document.getElementById("features-section").innerHTML = features();

const trendingContainer = document.getElementById("trending-section");
const modal = document.getElementById("product-modal");
const modalContent = document.getElementById("modal-content");
const closeModalBtn = document.getElementById("close-modal");

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products) => {
    trendingContainer.innerHTML = trending(products);

    trendingContainer.querySelectorAll("button").forEach((btn) => {
      if (btn.textContent.includes("Details")) {
        btn.addEventListener("click", async (e) => {
          const id = e.currentTarget.dataset.id;
          console.log(e.currentTarget.dataset.id);
          const productRes = await fetch(
            `https://fakestoreapi.com/products/${id}`,
          );
          const product = await productRes.json();
          showModal(product);
        });
      }
    });
  });

// model
function showModal(product) {
  modalContent.innerHTML = `
    <h2 class="text-2xl font-bold mb-2">${product.title}</h2>
    <img src="${product.image}" class="h-64 w-full object-contain mb-4"/>
    <p class="mb-2">${product.description}</p>
    <p class="font-bold text-orange-500 mb-2">$${product.price}</p>
    <p class="text-yellow-500 mb-4">⭐ ${product.rating.rate} (${product.rating.count})</p>
    <button id="modal-add-cart" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" data-id="${product.id}">
      Add to Cart
    </button>
  `;
  modal.classList.remove("hidden");
}

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});
