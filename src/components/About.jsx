import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="bg-[#F7F5F0] min-h-screen">
      {/* About Hero */}
      <section className="bg-[#142C48] text-white px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-[#D9B47E] tracking-[5px] text-sm mb-5">
            GET TO KNOW US
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            More Than a Dormitory.
            <span className="block text-[#D9B47E]">A Place to Belong.</span>
          </h1>

          <p className="text-gray-300 leading-8 max-w-2xl mx-auto">
            DORMHUB is designed to make student life better through comfortable
            accommodation, modern facilities, and a welcoming community.
          </p>
        </motion.div>
      </section>

      {/* About content */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#B28A55] font-bold tracking-widest text-sm mb-4">
            OUR STORY
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#142C48] mb-6">
            Creating Better Experiences for Students
          </h2>

          <p className="text-gray-600 leading-8 mb-5">
            We believe that where students live plays an important role in their
            academic and personal development.
          </p>

          <p className="text-gray-600 leading-8 mb-8">
            That's why DORMHUB focuses on providing comfortable rooms,
            supportive facilities, and spaces where students can focus on their
            education while enjoying their lives.
          </p>

          <Link
            to="/rooms"
            className="inline-block bg-[#142C48] text-white px-7 py-3 rounded-md font-semibold hover:bg-[#D9B47E] hover:text-[#142C48] transition"
          >
            Explore Our Rooms →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -bottom-5 -right-5 w-full h-full border-2 border-[#D9B47E] rounded-2xl" />

          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1000"
            alt="Modern student common area"
            className="relative w-full h-[420px] object-cover rounded-2xl"
          />
        </motion.div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#B28A55] font-bold tracking-widest text-sm mb-3">
              WHAT DRIVES US
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#142C48]">
              Our Mission & Vision
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-[#F7F5F0] p-10 rounded-2xl"
            >
              <div className="text-4xl mb-5">🎯</div>

              <h3 className="text-2xl font-bold text-[#142C48] mb-4">
                Our Mission
              </h3>

              <p className="text-gray-600 leading-8">
                To provide students with safe, comfortable, and affordable
                accommodation that supports learning, independence, and personal
                growth.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="bg-[#142C48] text-white p-10 rounded-2xl"
            >
              <div className="text-4xl mb-5">🌟</div>

              <h3 className="text-2xl font-bold text-[#D9B47E] mb-4">
                Our Vision
              </h3>

              <p className="text-gray-300 leading-8">
                To create a welcoming student living environment where everyone
                has the opportunity to feel at home, build friendships, and
                achieve their goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-[#B28A55] font-bold tracking-widest text-sm mb-3">
            THE DORMHUB DIFFERENCE
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-[#142C48]">
            Why Choose DORMHUB?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "🏡",
              title: "Comfortable Living",
              description:
                "Modern rooms designed for relaxation and everyday comfort.",
            },
            {
              icon: "🔒",
              title: "Safe Environment",
              description:
                "A living environment that puts student safety first.",
            },
            {
              icon: "📚",
              title: "Study Friendly",
              description:
                "Spaces that help students concentrate and achieve more.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition"
            >
              <div className="text-4xl mb-5">{item.icon}</div>

              <h3 className="text-xl font-bold text-[#142C48] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-500 leading-7">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
