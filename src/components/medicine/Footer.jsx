import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl font-semibold mb-2">MediCare</h3>
            <p className="text-sm">
              Trusted online pharmacy delivering quality medicines right at your
              doorstep.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Medicines
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cart
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Contact Us</h4>
            <p className="text-sm">📍 Dhaka, Bangladesh</p>
            <p className="text-sm">📞 +880 1234-567890</p>
            <p className="text-sm">✉️ support@medicare.com</p>
          </div>
        </div>

        <div className="border-t border-white mt-6 pt-4 text-center text-sm text-gray-200">
          &copy; {new Date().getFullYear()} MediCare. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
