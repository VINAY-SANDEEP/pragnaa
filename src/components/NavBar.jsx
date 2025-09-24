import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Courses", href: "#" },
    { name: "Announcements", href: "#" },
    { name: "Score", href: "#" },
    { name: "Previous Year Papers", href: "#" },
    { name: "Homework", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Notes", href: "#" },
  ];

  return (
    <nav className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
        <div className="flex items-center space-x-2">
  {/* Logo Image */}
  <img
    src="https://www.ipsc.co.in/images/member/the-punjab-public-school-nabha-logo.jpg"   // place your logo inside public/logo.png
    alt="School Logo"
    className="w-10 h-10 rounded-full shadow-md shadow-yellow-400/50 hover:scale-110 transition-transform duration-300"
  />

  {/* Brand Name */}
  <div className="text-2xl font-extrabold tracking-wide text--600 drop-shadow-md">
    Pra<span className="text-yellow-400">gnaa</span>
  </div>
</div>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="relative font-medium transition duration-300 group"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-300 transition-all group-hover:w-full"></span>
              </a>
            ))}

            {/* Buttons */}
            <button className="px-4 py-2 rounded-lg bg-yellow-300 text-black font-semibold hover:scale-105 transition-transform">
              Register
            </button>
            <button className="px-4 py-2 rounded-lg border-2 border-yellow-300 font-semibold hover:bg-yellow-300 hover:text-black transition">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-indigo-700 px-4 pb-4 space-y-3">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="block text-white font-medium hover:text-yellow-300 transition"
            >
              {link.name}
            </a>
          ))}
          <div className="flex space-x-3 pt-3">
            <button className="w-1/2 px-3 py-2 rounded-lg bg-yellow-300 text-black font-semibold hover:scale-105 transition-transform">
              Register
            </button>
            <button className="w-1/2 px-3 py-2 rounded-lg border-2 border-yellow-300 font-semibold hover:bg-yellow-300 hover:text-black transition">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
