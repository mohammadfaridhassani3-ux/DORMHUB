import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const dormImages = [
  {
    title: "Comfortable Bedrooms",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85",
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    title: "Modern Study Spaces",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
    className: "",
  },
  {
    title: "Relaxing Living Areas",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
    className: "",
  },
  {
    title: "Beautiful Interiors",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85",
    className: "lg:col-span-2",
  },
];

function Hero() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 md:pb-24 md:pt-20 lg:px-8">
        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-5 text-xs font-semibold tracking-[3px] text-[#B58A50] sm:text-sm">
            STUDENT LIVING REDEFINED
          </p>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#142C48] sm:text-5xl md:text-6xl lg:text-7xl">
            Find Your Place.
            <br />
            Live Your Best Life.
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:mt-6 sm:text-base md:text-lg">
            Discover comfortable rooms, modern facilities, and a welcoming
            community. Everything you need for a better student experience.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:mt-9 sm:flex-row sm:gap-4">
            <Link
              to="/rooms"
              className="rounded-md bg-[#142C48] px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[#263F5B] sm:px-8 sm:py-4"
            >
              Explore Rooms →
            </Link>

            <Link
              to="/about"
              className="rounded-md border border-gray-300 px-7 py-3.5 text-center text-sm font-semibold text-[#142C48] transition hover:border-[#142C48] sm:px-8 sm:py-4"
            >
              About DORMHUB
            </Link>
          </div>
        </motion.div>

        {/* Dormitory Photo Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-14 sm:mt-16"
        >
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg font-semibold text-[#142C48] sm:text-xl">
              Discover Our Living Spaces
            </h2>

            <span className="text-[10px] font-medium tracking-[2px] text-[#B58A50] sm:text-xs">
              DORMHUB EXPERIENCE
            </span>
          </div>

          <div className="grid auto-rows-[220px] grid-cols-1 gap-3 sm:grid-cols-2 sm:auto-rows-[230px] lg:auto-rows-[240px] lg:grid-cols-4 lg:gap-4">
            {dormImages.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className={`group relative min-w-0 overflow-hidden rounded-xl ${item.className}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <h3 className="absolute bottom-4 left-4 right-4 text-base font-semibold text-white sm:bottom-5 sm:left-5 sm:text-lg">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>

          <p className="mt-5 text-center text-xs text-gray-400 sm:text-sm">
            Comfortable rooms. Modern facilities. Better student living.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
