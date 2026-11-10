import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const rooms = [
  {
    id: 1,
    name: "Single Student Room",
    price: 180,
    type: "Private Room",
    description: "A comfortable private room designed for focused studying.",
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
    features: ["Private Bathroom", "Study Desk", "Free Wi-Fi"],
  },
  {
    id: 2,
    name: "Deluxe Student Room",
    price: 250,
    type: "Premium Room",
    description: "A spacious room with elegant furniture and modern comfort.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
    features: ["Large Bed", "Private Bathroom", "Air Conditioning"],
  },
  {
    id: 3,
    name: "Shared Student Room",
    price: 120,
    type: "Shared Room",
    description: "An affordable room with a friendly student environment.",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    features: ["Shared Space", "Study Desk", "Free Wi-Fi"],
  },
  {
    id: 4,
    name: "Executive Student Room",
    price: 300,
    type: "Luxury Room",
    description: "A premium living experience with extra space and comfort.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    features: ["King Size Bed", "Private Bathroom", "Lounge Area"],
  },
  {
    id: 5,
    name: "Modern Twin Room",
    price: 160,
    type: "Twin Sharing",
    description: "A modern twin room perfect for two students sharing.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
    features: ["Two Beds", "Study Desks", "Free Wi-Fi"],
  },
  {
    id: 6,
    name: "Garden View Room",
    price: 220,
    type: "Comfort Room",
    description: "A peaceful room with a relaxing view and natural light.",
    image: "https://images.unsplash.com/photo-1617104678098-de229db51175",
    features: ["Garden View", "Comfortable Bed", "Study Desk"],
  },
];

function Rooms() {
  return (
    <section className="bg-[#F7F5F0] px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-xs font-bold tracking-[4px] text-[#B58A50]">
            FIND YOUR SPACE
          </p>

          <h1 className="mt-3 text-3xl font-bold text-[#142C48] md:text-4xl">
            Explore Our Rooms
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-600">
            Discover comfortable and modern accommodation designed for your
            student lifestyle.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              whileHover={{ y: -5 }}
              className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative">
                <img
                  src={room.image}
                  alt={room.name}
                  className="h-44 w-full object-cover"
                />

                <span className="absolute left-3 top-3 rounded-full bg-[#142C48]/90 px-3 py-1.5 text-xs font-medium text-white">
                  {room.type}
                </span>
              </div>

              <div className="p-4">
                <h2 className="text-lg font-bold text-[#142C48]">
                  {room.name}
                </h2>

                <p className="mt-2 min-h-10 text-sm leading-5 text-gray-500">
                  {room.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-x-3 gap-y-2">
                  {room.features.map((feature) => (
                    <span key={feature} className="text-xs text-gray-600">
                      <span className="mr-1 text-[#B58A50]">✓</span>
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                  <div>
                    <p className="text-xs text-gray-500">Starting from</p>
                    <p className="text-xl font-bold text-[#142C48]">
                      ${room.price}
                      <span className="text-xs font-normal text-gray-500">
                        /month
                      </span>
                    </p>
                  </div>

                  <Link
                    to="/booking"
                    className="rounded-lg bg-[#142C48] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#D9B47E] hover:text-[#142C48]"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rooms;
