import { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#F7F5F0] px-5 py-20 md:px-10 lg:px-16">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#F7F5F0] via-[#F7F5F0] to-[#E8DCC8]" />

      <div className="absolute -left-32 top-20 -z-10 h-96 w-96 rounded-full bg-[#D9B47E]/20 blur-[100px]" />
      <div className="absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#142C48]/10 blur-[100px]" />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-bold tracking-[0.35em] text-[#B28A55]">
            WE ARE HERE FOR YOU
          </p>

          <h1 className="text-4xl font-bold text-[#142C48] md:text-6xl">
            Let's Talk<span className="text-[#B28A55]">.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-[#142C48]/65">
            Have a question or want to book your room? Our team is ready to help
            you find your perfect student living experience.
          </p>
        </motion.div>

        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="mb-4 text-3xl font-bold text-[#142C48]">
              Get in touch with us
            </h2>

            <p className="mb-9 max-w-lg leading-7 text-[#142C48]/65">
              Whether you need information about rooms, facilities, or
              reservations, we are always happy to hear from you.
            </p>

            {/* Contact cards */}
            <div className="space-y-4">
              <a
                href="mailto:mohammadfaridhasani3@gmail.com"
                className="group flex items-center gap-5 rounded-2xl border border-[#142C48]/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#142C48] text-2xl text-[#D9B47E] transition group-hover:bg-[#D9B47E] group-hover:text-[#142C48]">
                  ✉
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email Address</p>
                  <p className="mt-1 break-all font-semibold text-[#142C48]">
                    mohammadfaridhasani3@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:0729835376"
                className="group flex items-center gap-5 rounded-2xl border border-[#142C48]/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#142C48] text-2xl text-[#D9B47E] transition group-hover:bg-[#D9B47E] group-hover:text-[#142C48]">
                  ☎
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone Number</p>
                  <p className="mt-1 font-semibold text-[#142C48]">
                    0729835376
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/93729835376"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-5 rounded-2xl border border-[#142C48]/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#142C48] text-2xl text-[#D9B47E] transition group-hover:bg-[#D9B47E] group-hover:text-[#142C48]">
                  ☏
                </div>
                <div>
                  <p className="text-sm text-gray-500">WhatsApp</p>
                  <p className="mt-1 font-semibold text-[#142C48]">
                    Chat with our team
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right side - Images and form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Room images */}
            <div className="relative mb-12 h-[300px] sm:h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=85"
                alt="Comfortable student bedroom"
                className="absolute right-0 top-0 h-[230px] w-[75%] rounded-3xl object-cover shadow-2xl sm:h-[310px]"
              />

              <img
                src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85"
                alt="Modern dormitory interior"
                className="absolute bottom-0 left-0 h-[170px] w-[55%] rounded-3xl border-[7px] border-[#F7F5F0] object-cover shadow-xl sm:h-[220px]"
              />

              <div className="absolute bottom-8 right-0 rounded-2xl bg-[#142C48] px-5 py-4 shadow-xl">
                <p className="text-xs tracking-widest text-[#D9B47E]">
                  DORMHUB
                </p>
                <p className="mt-1 font-bold text-[#F7F5F0]">
                  Your Home Away From Home
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-3xl border border-[#142C48]/10 bg-white p-6 shadow-xl sm:p-8">
              <h2 className="text-2xl font-bold text-[#142C48]">
                Send Us a Message
              </h2>

              <p className="mb-7 mt-2 text-sm text-gray-500">
                Write to us and we will get back to you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-[#F7F5F0] px-4 py-4 text-[#142C48] outline-none transition focus:border-[#B28A55] focus:ring-2 focus:ring-[#D9B47E]/30"
                />

                <input
                  type="email"
                  placeholder="Your Email Address"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-[#F7F5F0] px-4 py-4 text-[#142C48] outline-none transition focus:border-[#B28A55] focus:ring-2 focus:ring-[#D9B47E]/30"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-[#F7F5F0] px-4 py-4 text-[#142C48] outline-none transition focus:border-[#B28A55] focus:ring-2 focus:ring-[#D9B47E]/30"
                />

                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  required
                  className="w-full resize-none rounded-xl border border-gray-200 bg-[#F7F5F0] px-4 py-4 text-[#142C48] outline-none transition focus:border-[#B28A55] focus:ring-2 focus:ring-[#D9B47E]/30"
                />

                <button
                  type="submit"
                  className="w-full rounded-xl bg-[#142C48] px-6 py-4 font-bold text-[#F7F5F0] shadow-lg transition duration-300 hover:bg-[#D9B47E] hover:text-[#142C48]"
                >
                  Send Message →
                </button>

                {submitted && (
                  <p className="rounded-xl bg-[#E8DCC8] p-3 text-center text-sm font-semibold text-[#142C48]">
                    Thank you! Your message form was submitted.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom strip */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 rounded-2xl bg-[#142C48] px-7 py-6 text-center sm:flex-row">
          <p className="font-semibold text-[#F7F5F0]">
            STUDENT LIVING REDEFINED
          </p>
          <p className="text-sm text-[#D9B47E]">
            Comfortable Living. Better Studying.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
