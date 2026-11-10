import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-[#142C48] px-6 py-3"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-white text-xl font-bold">
          DORMHUB<span className="text-[#D9B47E]">.</span>
        </Link>

        {/* Navigation links */}
        <ul className="hidden md:flex items-center gap-7 text-sm text-white">
          <li>
            <Link to="/" className="hover:text-[#D9B47E] transition">
              Home
            </Link>
          </li>

          <li>
            <Link to="/rooms" className="hover:text-[#D9B47E] transition">
              Rooms
            </Link>
          </li>

          <li>
            <Link to="/facilities" className="hover:text-[#D9B47E] transition">
              Facilities
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-[#D9B47E] transition">
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-[#D9B47E] transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Booking button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/booking"
            className="bg-[#D9B47E] text-[#142C48] px-4 py-2 rounded-md text-sm font-semibold"
          >
            Book Now
          </Link>
        </motion.div>
      </nav>
    </motion.header>
  );
}

export default Navbar;
