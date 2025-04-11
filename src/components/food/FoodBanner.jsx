import React from "react";

const FoodBanner = () => {
  return (
    <div
      className="relative bg-cover bg-center h-96"
      style={{
        backgroundImage:
          'url("https://cdn.pixabay.com/photo/2023/11/09/11/26/christmas-8377091_640.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Delicious Food Delivered to Your Door
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            Satisfy your hunger with our amazing range of food items!
          </p>
          <a
            href="#"
            className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-700 transition"
          >
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default FoodBanner;
