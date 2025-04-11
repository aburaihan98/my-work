import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [fooCount, fooCartCount] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("medicineCart")) || [];
    setCartCount(storedCart.length);

    const foodCart = JSON.parse(localStorage.getItem("foodCart")) || [];
    fooCartCount(foodCart.length);
  }, []);

  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">MyApp</h1>

        <nav>
          <ul className="flex items-center space-x-4">
            <li>
              <Link
                href="/"
                className="text-gray-600 hover:text-blue-600 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/medicine"
                className="text-gray-600 hover:text-green-600 transition relative"
              >
                Medicine
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
            <li>
              <Link
                to="/food"
                className="text-gray-600 hover:text-green-600 transition relative"
              >
                Food
                {fooCount > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                    {fooCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>

        <Link to="/login">
          <button className=" cursor-pointer bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Login
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
