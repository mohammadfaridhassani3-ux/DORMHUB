import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/rooms" },
    { name: "Facilities", path: "/facilities" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-50 bg-[#142C48] px-6 py-3"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-white text-xl font-bold"
        >
          DORMHUB<span className="text-[#D9B47E]">.</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-7 text-sm text-white">
          {links.map((link) => (
            <li key={link.path}>
              <Link to={link.path} className="hover:text-[#D9B47E] transition">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Booking Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block"
        >
          <Link
            to="/booking"
            className="bg-[#D9B47E] text-[#142C48] px-4 py-2 rounded-md text-sm font-semibold"
          >
            Book Now
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-3xl w-10 h-10 flex items-center justify-center"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <ul className="flex flex-col gap-1 pt-4 pb-3 text-white text-sm">
              {links.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={closeMenu}
                    className="block py-3 border-b border-white/10 hover:text-[#D9B47E] transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/booking"
              onClick={closeMenu}
              className="block text-center bg-[#D9B47E] text-[#142C48] px-4 py-3 rounded-md text-sm font-semibold mt-3 mb-2"
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
