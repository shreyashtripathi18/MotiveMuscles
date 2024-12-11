import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-8">
      <div className="container mx-auto grid grid-cols-4 gap-8">
        {/* Left Section */}
        <div className="flex flex-col items-start space-y-4">
          <img
            className="w-48"
            src="https://tebewebe.online/motivemuscle/wp-content/uploads/sites/69/2023/12/Logo_MotiveMuscle_2.png"
            alt="Motive Muscle Logo"
          />
          <p className="text-sm text-gray-400 leading-relaxed">
            Per sagittis habitant netus nibh condimentum <br />
            velit sociosqu ornare gravida natoque iaculis. <br />
            Lorem lacus felis sodales.
          </p>
          <div className="flex items-center space-x-4">
            <div className="bg-orange-500 p-2 rounded">
              <i className="icofont-headphone-alt text-2xl text-white"></i>
            </div>
            <div>
              <p className="text-sm text-gray-300">Support center 24/7</p>
              <p className="text-lg font-bold">+1 555 707-1234</p>
            </div>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h6 className="text-lg font-bold mb-4">Company</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-orange-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                History
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                News Update
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Legal Notice
              </a>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h6 className="text-lg font-bold mb-4">Useful Links</h6>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-orange-500">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Disclaimer
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Elements
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-500">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h6 className="text-lg font-bold mb-4">Subscribe Newsletter</h6>
          <p className="text-sm text-gray-400 mb-4">
            Get the latest gym news, fitness tips, & exclusive offers delivered
            straight to your inbox.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 text-black  w-full focus:outline-none"
            />
            <button className="bg-orange-500 text-white text-xl font-bold px-12 py-2 hover:bg-orange-600 flex items-center justify-center leading-none h-12">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4">
        <div className="flex justify-center items-center space-x-4">
          {/* Social Media Links */}
          <a
            href="#"
            className="bg-gray-800 hover:bg-orange-500 text-white p-3 border-gray-700 flex justify-center items-center">
            <i className="icofont-facebook text-lg"></i>
          </a>
          <a
            href="#"
            className="bg-gray-800 hover:bg-orange-500 text-white p-3 border-gray-700 flex justify-center items-center">
            <i className="icofont-twitter text-lg"></i>
          </a>
          <a
            href="#"
            className="bg-gray-800 hover:bg-orange-500 text-white p-3 border-gray-700 flex justify-center items-center">
            <i className="icofont-youtube text-lg"></i>
          </a>
          <a
            href="#"
            className="bg-gray-800 hover:bg-orange-500 text-white p-3 border-gray-700 flex justify-center items-center">
            <i className="icofont-instagram text-lg"></i>
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-center text-gray-400 text-sm mt-4">
          Copyright © 2023 MotiveMuscle by Shreyash & Aryan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
