import { useState } from "react";
import { motion } from "framer-motion";

function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    room: "Single Student Room",
    date: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert("Your booking request has been submitted!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      room: "Single Student Room",
      date: "",
    });
  }

  return (
    <div className="min-h-screen bg-[#F7F5F0] px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="font-semibold tracking-[4px] text-[#D9B47E]">
            DORMHUB ACCOMMODATION
          </p>

          <h1 className="mt-3 text-4xl font-bold text-[#142C48] md:text-5xl">
            Book Your Perfect Room
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Take the first step toward comfortable and modern student living.
          </p>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://images.unsplash.com/photo-1611892440504-42a792e24d32"
              alt="Comfortable student bedroom"
              className="h-[450px] w-full rounded-2xl object-cover shadow-xl"
            />

            <h2 className="mt-6 text-2xl font-bold text-[#142C48]">
              Your New Home Awaits
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Enjoy comfortable rooms, modern facilities, and a welcoming
              environment designed for students.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl bg-white p-8 shadow-lg"
          >
            <h2 className="mb-6 text-2xl font-bold text-[#142C48]">
              Booking Information
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#D9B47E]"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#D9B47E]"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#D9B47E]"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Select Room
                </label>
                <select
                  name="room"
                  value={formData.room}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#D9B47E]"
                >
                  <option>Single Student Room</option>
                  <option>Deluxe Student Room</option>
                  <option>Shared Student Room</option>
                  <option>Executive Student Room</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Preferred Move-in Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#D9B47E]"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#142C48] py-4 font-semibold text-white transition hover:bg-[#D9B47E] hover:text-[#142C48]"
              >
                Submit Booking Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
