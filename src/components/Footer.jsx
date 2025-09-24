import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Pra<span className="text-yellow-300">gnaa</span></h2>
          <p className="text-gray-400">
            Empowering students with knowledge through modern e-learning solutions. Learn, grow, and achieve your dreams.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li><a href="/" className="hover:text-yellow-300 transition">Home</a></li>
            <li><a href="/about" className="hover:text-yellow-300 transition">About</a></li>
            <li><a href="/courses" className="hover:text-yellow-300 transition">Courses</a></li>
            <li><a href="/announcements" className="hover:text-yellow-300 transition">Announcements</a></li>
            <li><a href="/contact" className="hover:text-yellow-300 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-yellow-300 hover:text-gray-900 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-yellow-300 hover:text-gray-900 transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-yellow-300 hover:text-gray-900 transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-yellow-300 hover:text-gray-900 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Pragnaa E-Learning. All rights reserved.
      </div>
    </footer>
  );
}
