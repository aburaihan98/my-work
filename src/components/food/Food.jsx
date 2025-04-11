import React, { useState } from "react";
import Swal from "sweetalert2";
import FoodBanner from "./FoodBanner";
import FoodFooter from "./FoodFooter";
import FoodModal from "./FoodModal";

const foodItems = [
  {
    id: 1,
    name: "Burger",
    price: 120,
    image:
      "https://cdn.pixabay.com/photo/2024/06/21/12/21/ai-generated-8844274_640.png",
  },
  {
    id: 2,
    name: "Pizza",
    price: 250,
    image:
      "https://cdn.pixabay.com/photo/2024/06/21/12/21/ai-generated-8844274_640.png",
  },
  {
    id: 3,
    name: "Fried Rice",
    price: 180,
    image:
      "https://cdn.pixabay.com/photo/2024/06/21/12/21/ai-generated-8844274_640.png",
  },
  {
    id: 4,
    name: "Chicken Wings",
    price: 150,
    image:
      "https://cdn.pixabay.com/photo/2024/06/21/12/21/ai-generated-8844274_640.png",
  },
  {
    id: 5,
    name: "Pasta",
    price: 200,
    image:
      "https://cdn.pixabay.com/photo/2024/06/21/12/21/ai-generated-8844274_640.png",
  },
  {
    id: 6,
    name: "Hot Dog",
    price: 100,
    image:
      "https://cdn.pixabay.com/photo/2024/06/21/12/21/ai-generated-8844274_640.png",
  },
  {
    id: 7,
    name: "Sushi",
    price: 300,
    image:
      "https://cdn.pixabay.com/photo/2024/06/21/12/21/ai-generated-8844274_640.png",
  },
  {
    id: 8,
    name: "Salad",
    price: 90,
    image:
      "https://cdn.pixabay.com/photo/2024/06/21/12/21/ai-generated-8844274_640.png",
  },
  {
    id: 9,
    name: "Sandwich",
    price: 130,
    image:
      "https://cdn.pixabay.com/photo/2024/06/21/12/21/ai-generated-8844274_640.png",
  },
  {
    id: 10,
    name: "Fries",
    price: 80,
    image:
      "https://cdn.pixabay.com/photo/2024/06/21/12/21/ai-generated-8844274_640.png",
  },
  {
    id: 11,
    name: "Steak",
    price: 350,
    image:
      "https://cdn.pixabay.com/photo/2024/06/21/12/21/ai-generated-8844274_640.png",
  },
  {
    id: 12,
    name: "Fish & Chips",
    price: 220,
    image:
      "https://cdn.pixabay.com/photo/2024/06/21/12/21/ai-generated-8844274_640.png",
  },
  {
    id: 13,
    name: "Tacos",
    price: 120,
    image:
      "https://cdn.pixabay.com/photo/2024/06/21/12/21/ai-generated-8844274_640.png",
  },
  {
    id: 14,
    name: "Noodles",
    price: 160,
    image:
      "https://cdn.pixabay.com/photo/2024/06/21/12/21/ai-generated-8844274_640.png",
  },
  {
    id: 15,
    name: "Ice Cream",
    price: 100,
    image:
      "https://cdn.pixabay.com/photo/2024/06/21/12/21/ai-generated-8844274_640.png",
  },
  {
    id: 16,
    name: "Cake",
    price: 150,
    image:
      "https://cdn.pixabay.com/photo/2024/06/21/12/21/ai-generated-8844274_640.png",
  },
  {
    id: 17,
    name: "Biryani",
    price: 200,
    image:
      "https://cdn.pixabay.com/photo/2024/06/21/12/21/ai-generated-8844274_640.png",
  },
  {
    id: 18,
    name: "Kebab",
    price: 250,
    image:
      "https://cdn.pixabay.com/photo/2024/06/21/12/21/ai-generated-8844274_640.png",
  },
  {
    id: 19,
    name: "Ice Tea",
    price: 80,
    image:
      "https://cdn.pixabay.com/photo/2024/06/21/12/21/ai-generated-8844274_640.png",
  },
  {
    id: 20,
    name: "Smoothie",
    price: 120,
    image:
      "https://cdn.pixabay.com/photo/2024/06/21/12/21/ai-generated-8844274_640.png",
  },
];

function Food() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleAddToCart = (item) => {
    setSelectedItem(item); // open modal
  };

  const handleConfirmAddToCart = (item) => {
    // Correct key used here
    const cart = JSON.parse(localStorage.getItem("foodCart")) || [];
    const exists = cart.find((cartItem) => cartItem.id === item.id);

    if (!exists) {
      const updatedCart = [...cart, item];
      // Save to localStorage with same key
      localStorage.setItem("foodCart", JSON.stringify(updatedCart));
      Swal.fire({
        title: "Your item added",
        icon: "success",
        draggable: true,
      });
    } else {
      Swal.fire({
        title: "Your item is already added",
        icon: "warning",
        draggable: true,
      });
    }

    setSelectedItem(null); // Close modal
  };

  const closeModal = () => {
    setSelectedItem(null); // close modal
  };

  return (
    <>
      <FoodBanner />
      <div className="min-h-screen bg-gray-100 py-10 px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Food Menu
        </h2>
        <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-5 max-w-6xl mx-auto">
          {foodItems.map((item) => (
            <div
              key={item.id}
              className="bg-white hover:shadow-2xl rounded-2xl shadow-md overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover transform hover:scale-105 transition duration-300 ease-in-out"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-4">৳ {item.price}</p>
                <button
                  onClick={() => handleAddToCart(item)}
                  className=" cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Modal Render */}
        {selectedItem && (
          <FoodModal
            item={selectedItem}
            onClose={closeModal}
            onConfirm={() => handleConfirmAddToCart(selectedItem)}
          />
        )}
      </div>
      <FoodFooter />
    </>
  );
}

export default Food;
