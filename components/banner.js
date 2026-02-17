export const banner = () => {
  return `
    <section id="hero" class="relative w-full h-[85vh] md:h-[90vh]">
      
  
      <div 
        class="absolute inset-0 bg-cover bg-center"
        style="background-image: url('../assets/banner-image.png');"
      ></div>

      <div class="absolute inset-0 bg-black/70"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        
        <div class="text-white max-w-xl">
          
          <h1 class="text-3xl sm:text-3xl md:text-5xl font-bold leading-tight mb-4">
            Best Collection For You
          </h1>

          <p class="text-sm sm:text-base md:text-lg text-gray-200 mb-6">
            Discover premium fashion, electronics and more.
            Quality products at unbeatable prices.
          </p>

          <button 
            class="bg-orange-600 hover:bg-orange-700 transition duration-300 px-6 py-3 md:px-8 md:py-4 rounded-lg text-sm md:text-lg font-semibold shadow-lg"
          >
            Shop Now
          </button>

        </div>

      </div>

    </section>
  `;
};
