import React from "react";

const MedicineBanner = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white py-24 px-6"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2024/03/26/11/57/pills-8656650_640.jpg')",
      }}
    >
      <div className="bg-black bg-opacity-60 p-8 rounded-xl max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Stay Healthy with Trusted Medicines
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Get all your essentials delivered fast and safely at your doorstep.
        </p>
        <button className="bg-green-500 hover:bg-green-600 transition text-white px-6 py-3 rounded-full font-semibold">
          Shop Medicines
        </button>
      </div>
    </div>
  );
};

export default MedicineBanner;
