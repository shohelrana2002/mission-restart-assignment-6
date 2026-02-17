const featuresData = [
  {
    title: "Fast Delivery",
    paragraph:
      "Get your products delivered quickly and safely at your doorstep.",
    icon: "🚚",
  },
  {
    title: "24/7 Support",
    paragraph: "Our support team is always ready to help you anytime.",
    icon: "📞",
  },
  {
    title: "Secure Payment",
    paragraph: "100% secure payment system with trusted gateways.",
    icon: "🔒",
  },
  {
    title: "Top Quality",
    paragraph: "We provide only premium and top-rated products.",
    icon: "⭐",
  },
];

export const features = () => {
  return `
    <section class="py-16 bg-gray-100">
      <div class="max-w-7xl mx-auto px-6">
        
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800">
            Why Choose Us
          </h2>
          <p class="text-gray-500 mt-3">
            We provide the best shopping experience with quality service.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          ${featuresData
            .map(
              (data) => `
                <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer duration-300 text-start">
                  <div class="text-4xl  mb-4">${data.icon}</div>
                  <h3 class="text-xl text-sky-400 font-semibold mb-2">${data.title}</h3>
                  <p class="text-gray-400 text-sm">${data.paragraph}</p>
                </div>
              `,
            )
            .join("")}

        </div>
      </div>
    </section>
  `;
};
