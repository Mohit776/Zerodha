import { useState } from "react";
import { Menu } from "lucide-react";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full border-gray-300 py-1 border-[1px] bg-white shadow-sm fixed">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://zerodha.com/static/images/logo.svg"
            alt="Zerodha Logo"
            className="h-4.5"
          />
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/signup" className="text-gray-600 no-underline hover:text-black">Signup</a>
          <a href="/about" className="text-gray-600 no-underline hover:text-black">About</a>
          <a href="/product" className="text-gray-600 no-underline hover:text-black">Products</a>
          <a href="/pricing" className="text-gray-600 no-underline hover:text-black">Pricing</a>
          <a href="/support" className="text-gray-600 no-underline hover:text-black">Support</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden px-6 pb-3 space-y-2">
          <a href="#" className="block text-gray-600 no-underline hover:text-black">Signup</a>
          <a href="#" className="block text-gray-600 no-underline hover:text-black">About</a>
          <a href="#" className="block text-gray-600 no-underline hover:text-black">Products</a>
          <a href="#" className="block text-gray-600 no-underline hover:text-black">Pricing</a>
          <a href="#" className="block text-gray-600 no-underline hover:text-black">Support</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
