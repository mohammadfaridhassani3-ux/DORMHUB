import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "Our Rooms", path: "/rooms" },
  { name: "Facilities", path: "/facilities" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function Footer() {
  return (
    <footer className="bg-[#18232D] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link
              to="/"
              className="inline-block text-2xl font-bold tracking-tight"
            >
              DORMHUB<span className="text-[#E07865]">.</span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-7 text-[#B7C0C8]">
              More than a place to stay. A comfortable space to learn, connect,
              grow, and make your student years unforgettable.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E07865]" />
              <span className="text-[10px] font-semibold tracking-[2px] text-[#D5DCE2]">
                STUDENT LIVING REDEFINED
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[2px] text-[#E07865]">
              Explore
            </h3>

            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="inline-block text-sm text-[#B7C0C8] transition-all duration-200 hover:translate-x-1 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[2px] text-[#E07865]">
              Let's Connect
            </h3>

            <div className="space-y-5">
              <div>
                <p className="mb-1 text-xs text-[#84919C]">Email Address</p>
                <a
                  href="mailto:mohammadfaridhasani3@gmail.com"
                  className="break-all text-sm text-[#E1E5E9] transition hover:text-[#E07865]"
                >
                  mohammadfaridhasani3@gmail.com
                </a>
              </div>

              <div>
                <p className="mb-1 text-xs text-[#84919C]">Phone Number</p>
                <a
                  href="tel:0729835376"
                  className="text-sm text-[#E1E5E9] transition hover:text-[#E07865]"
                >
                  0729835376
                </a>
              </div>

              <motion.div whileHover={{ x: 4 }} className="pt-1">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 rounded-sm bg-[#E07865] px-5 py-3 text-xs font-bold tracking-wide text-white transition-colors hover:bg-[#C96150]"
                >
                  CONTACT US
                  <span className="text-base">↗</span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#84919C]">
            © {new Date().getFullYear()} DORMHUB. All rights reserved.
          </p>

          <Link
            to="/"
            className="text-xs text-[#B7C0C8] transition hover:text-[#E07865]"
          >
            Made for better student living.
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
