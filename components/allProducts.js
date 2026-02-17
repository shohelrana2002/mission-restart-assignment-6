export const allProducts = (products) => {
  return `
  <section class="py-16 bg-gray-50 min-h-screen">
    <div class="max-w-7xl mx-auto px-6">

      <div class="text-center mb-10">
        <h1 class="text-3xl md:text-4xl font-bold">All Products</h1>
        <p class="text-gray-500 mt-2">
          Browse all available products
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        ${products
          .map(
            (product) => `
         <div class=" rounded-xl shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col">
                  <div class="bg-blue-100 w-full rounded-xl h-full">
                  <img 
                    src="${product.image}" 
                    alt="${product.title}"
                    class="h-48 p-2 object-contain mb-4 mx-auto"
                  />
                  </div>
  <div class="flex justify-between my-2 font-bold  "> 
  <p class=" text-sky-700 bg-sky-100 rounded-sm capitalize"> ${product.category || ""}</p>
  <p class=" text-gray-500 ">⭐ ${product.rating?.rate || ""}( ${product.rating?.count || "Undefined"})</p>
  </div>
                  <h3 class="text-lg  text-black/90 font-semibold mb-0">
                    ${
                      product?.title.length > 40
                        ? product?.title.slice(0, 40) + "..."
                        : product?.title
                    }
                  </h3>

                  <p class="text-black font-bold text-xl mb-2">
                    $${product.price}
                  </p>

                  

                  <div class="mt-auto flex gap-2">
                    <button 
                      class="w-1/2 font-semibold flex items-center gap-x-2 justify-center text-black py-2 rounded-lg hover:bg-orange-100 cursor-pointer border border-sky-200 transition text-sm"
                      data-id="${product.id}"
                    >
                    <i class="fa-regular fa-eye"></i>  Details
                    </button>

                    <button 
                      class="w-1/2 font-semibold flex items-center gap-x-2 justify-center bg-blue-600 text-white py-2 cursor-pointer rounded-lg hover:bg-orange-700 transition text-sm"
                      data-id="${product.id}"
                    >
                      <i class="fa-solid fa-cart-shopping"></i>Add to Cart
                    </button>
                  </div>

                </div>
        `,
          )
          .join("")}
      </div>

    </div>
  </section>
  `;
};
