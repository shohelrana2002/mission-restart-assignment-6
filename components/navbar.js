const navbar = () => {
  return `
    <nav class="text-black bg-gray-200/80 sticky top-0 z-50 backdrop-blur-md shadow-sm">
      <div class="px-4 max-w-7xl mx-auto">
        <div class="flex justify-between items-center h-16">
          
          <div class="text-2xl font-bold text-orange-700 cursor-pointer">
            SwiftCart
          </div>

          <ul class="hidden md:flex space-x-8 font-medium">
            <li><a href="#" class="hover:text-orange-700 transition">Home</a></li>
            <li><a href="#products" class="hover:text-orange-700 transition">Products</a></li>
            <li><a href="#about" class="hover:text-orange-700 transition">About</a></li>
            <li><a href="#contact" class="hover:text-orange-700 transition">Contact</a></li>
          </ul>

          <div class="flex items-center space-x-4">
            <div class="relative cursor-pointer text-xl">
              🛒
              <span
                id="cart-count"
                class="absolute -top-2 -right-3 bg-orange-700 text-white text-xs px-2 py-0.5 rounded-full"
              >
                0
              </span>
            </div>

            <button id="menu-btn" class="md:hidden text-2xl">
              ☰
            </button>
          </div>
        </div>
      </div>

      <div id="mobile-menu" class="hidden md:hidden text-center space-y-4 py-4 bg-gray-200/95">
        <a href="#" class="block hover:text-orange-700 transition">Home</a>
        <a href="#products" class="block hover:text-orange-700 transition">Products</a>
        <a href="#about" class="block hover:text-orange-700 transition">About</a>
        <a href="#contact" class="block hover:text-orange-700 transition">Contact</a>
      </div>
    </nav>
  `;
};

export default navbar;
