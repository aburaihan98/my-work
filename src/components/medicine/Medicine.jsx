import React, { useState } from "react";
import Swal from "sweetalert2";
import MedicineBanner from "./Banner";
import Footer from "./Footer";
import MedicineModal from "./MedicineModal";

const medicineItems = [
  {
    id: 1,
    name: "Paracetamol",
    mg: "500mg",
    price: 30,
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/11/44/capsule-158568_640.png",
  },
  {
    id: 2,
    name: "Napa Extra",
    mg: "500mg + 65mg",
    price: 35,
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/11/44/capsule-158568_640.png",
  },
  {
    id: 3,
    name: "Antacid",
    mg: "200mg",
    price: 25,
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/11/44/capsule-158568_640.png",
  },
  {
    id: 4,
    name: "Aspirin",
    mg: "325mg",
    price: 40,
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/11/44/capsule-158568_640.png",
  },
  {
    id: 5,
    name: "Cough Syrup",
    mg: "10ml",
    price: 50,
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/11/44/capsule-158568_640.png",
  },
  {
    id: 6,
    name: "Ibuprofen",
    mg: "200mg",
    price: 20,
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/11/44/capsule-158568_640.png",
  },
  {
    id: 7,
    name: "Vitamin C",
    mg: "1000mg",
    price: 60,
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/11/44/capsule-158568_640.png",
  },
  {
    id: 8,
    name: "Cetirizine",
    mg: "10mg",
    price: 18,
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/11/44/capsule-158568_640.png",
  },
  {
    id: 9,
    name: "Metformin",
    mg: "500mg",
    price: 45,
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/11/44/capsule-158568_640.png",
  },
  {
    id: 10,
    name: "Amoxicillin",
    mg: "500mg",
    price: 55,
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/11/44/capsule-158568_640.png",
  },
  {
    id: 11,
    name: "Loratadine",
    mg: "10mg",
    price: 22,
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/11/44/capsule-158568_640.png",
  },
  {
    id: 12,
    name: "Omeprazole",
    mg: "20mg",
    price: 40,
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/11/44/capsule-158568_640.png",
  },
  {
    id: 13,
    name: "Prednisone",
    mg: "5mg",
    price: 70,
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/11/44/capsule-158568_640.png",
  },
  {
    id: 14,
    name: "Zyrtec",
    mg: "10mg",
    price: 28,
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/11/44/capsule-158568_640.png",
  },
  {
    id: 15,
    name: "Telfast",
    mg: "120mg",
    price: 65,
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/11/44/capsule-158568_640.png",
  },
  {
    id: 16,
    name: "Codeine",
    mg: "30mg",
    price: 80,
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/11/44/capsule-158568_640.png",
  },
  {
    id: 17,
    name: "Clonazepam",
    mg: "1mg",
    price: 90,
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/11/44/capsule-158568_640.png",
  },
  {
    id: 18,
    name: "Lorazepam",
    mg: "2mg",
    price: 85,
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/11/44/capsule-158568_640.png",
  },
  {
    id: 19,
    name: "Diazepam",
    mg: "10mg",
    price: 100,
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/11/44/capsule-158568_640.png",
  },
  {
    id: 20,
    name: "Ciprofloxacin",
    mg: "500mg",
    price: 75,
    image:
      "https://cdn.pixabay.com/photo/2013/07/13/11/44/capsule-158568_640.png",
  },
];

const Medicine = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleAddToCartClick = (item) => {
    setSelectedItem(item); // open modal
  };

  const handleConfirmAddToCart = (item) => {
    // Check if already exists
    const foodCart = JSON.parse(localStorage.getItem("medicineCart")) || [];
    const exists = foodCart.find((cartItem) => cartItem.id === item.id);

    if (!exists) {
      const updatedCart = [...foodCart, item];
      localStorage.setItem("medicineCart", JSON.stringify(updatedCart));
      Swal.fire({
        title: "Your item added",
        icon: "success",
        draggable: true,
      });
    } else {
      Swal.fire({
        title: "YYour item is already added",
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
      <MedicineBanner />
      <div className="min-h-screen bg-gray-100 py-10 px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Medicine Store
        </h2>
        <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-5 max-w-6xl mx-auto">
          {medicineItems.map((item) => (
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
                <p className="text-gray-500">{item.mg}</p>
                <p className="text-gray-700 mb-4 font-medium">৳ {item.price}</p>
                <button
                  onClick={() => handleAddToCartClick(item)}
                  className=" cursor-pointer bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Modal Render */}
        {selectedItem && (
          <MedicineModal
            item={selectedItem}
            onClose={closeModal}
            onConfirm={() => handleConfirmAddToCart(selectedItem)}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Medicine;
