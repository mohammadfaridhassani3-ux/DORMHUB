import { motion } from "framer-motion";

const facilities = [
  {
    id: 1,
    number: "01",
    name: "High-Speed Wi-Fi",
    description:
      "Stay connected with fast and reliable internet throughout the dormitory.",
    icon: "📶",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900",
  },
  {
    id: 2,
    number: "02",
    name: "Study Lounge",
    description:
      "A peaceful and comfortable environment designed for studying and productivity.",
    icon: "📚",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900",
  },
  {
    id: 3,
    number: "03",
    name: "24/7 Security",
    description:
      "Enjoy a safe living environment with controlled access and security support.",
    icon: "🛡️",
    image: "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=900",
  },
  {
    id: 4,
    number: "04",
    name: "Laundry Service",
    description:
      "Convenient laundry facilities help you keep your clothes fresh and clean.",
    icon: "🧺",
    image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=900",
  },
  {
    id: 5,
    number: "05",
    name: "Modern Kitchen",
    description:
      "Prepare your favorite meals in a clean and fully equipped shared kitchen.",
    icon: "🍽️",
    image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=900",
  },
  {
    id: 6,
    number: "06",
    name: "Relaxation Area",
    description:
      "Take a break, meet other students, and enjoy your free time comfortably.",
    icon: "🛋️",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900",
  },
];

function Facilities() {
  return (
    <main className="bg-[#F7F5F0] min-h-screen">
      {/* Hero section */}
      <section className="bg-[#142C48] text-white px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-[#D9B47E] text-sm tracking-[5px] mb-5">
            COMFORT MEETS CONVENIENCE
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Everything You Need
            <span className="text-[#D9B47E]"> Under One Roof.</span>
          </h1>

          <p className="text-gray-300 leading-7">
            At DORMHUB, we provide modern facilities that make student living
            comfortable, safe, and enjoyable.
          </p>
        </motion.div>
      </section>

      {/* Facilities section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <p className="text-[#B28A55] text-sm font-bold tracking-widest mb-3">
            OUR SERVICES
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#142C48]">
            Designed Around Your Lifestyle
          </h2>

          <p className="text-gray-500 mt-4 max-w-2xl">
            From academic support to everyday convenience, every detail is
            designed to improve your student experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-56 object-cover hover:scale-105 transition duration-500"
                />

                <span className="absolute top-4 left-4 bg-[#142C48] text-[#D9B47E] px-4 py-2 rounded-full text-sm font-bold">
                  {facility.number}
                </span>
              </div>

              <div className="p-7">
                <div className="w-12 h-12 bg-[#F7F5F0] rounded-xl flex items-center justify-center text-2xl mb-5">
                  {facility.icon}
                </div>

                <h3 className="text-xl font-bold text-[#142C48] mb-3">
                  {facility.name}
                </h3>

                <p className="text-gray-500 leading-7 text-sm">
                  {facility.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom section */}
      <section className="bg-[#E8DCC8] px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-[#142C48] mb-4">
          More Than Just Accommodation
        </h2>

        <p className="text-[#526174] max-w-2xl mx-auto leading-7">
          DORMHUB gives you a place where you can study, grow, connect, and
          enjoy your university journey.
        </p>
      </section>
    </main>
  );
}

export default Facilities;
