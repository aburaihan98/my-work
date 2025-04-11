import React from "react";

const MedicineModal = ({ item, onClose, onConfirm }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl max-w-md w-full relative">
        <button
          onClick={onClose}
          className=" cursor-pointer absolute top-3 right-3 text-gray-500 hover:text-red-600 text-xl"
        >
          &times;
        </button>
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h2 className="text-2xl font-bold text-gray-800">{item.name}</h2>
        <p className="text-gray-600 mt-2">{item.mg}</p>
        <p className="text-lg text-green-600 font-semibold mt-2">
          ৳ {item.price}
        </p>
        <button
          className=" cursor-pointer mt-6 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          onClick={() => {
            onConfirm(item);
            onClose();
          }}
        >
          Confirm Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MedicineModal;
