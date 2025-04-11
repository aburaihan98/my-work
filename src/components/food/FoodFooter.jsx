import React from "react";

const FoodFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-4">Foodie Store</h3>
        <p className="text-center mb-4">
          Enjoy the best food delivered to your doorstep. Quality, taste, and
          service guaranteed!
        </p>

        <div className="flex space-x-6 mb-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>

        <p className="text-gray-400 text-sm">
          &copy; 2025 Foodie Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FoodFooter;
