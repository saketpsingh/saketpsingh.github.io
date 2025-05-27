"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const awards = [
  {
    title: "Q1 2025 – Extra Mile Award",
    description: "Perficient – 2025",
  },
  {
    title: "Q4 2023 – Appreciation Award",
    description: "Perficient – 2023",
  },
  {
    title: "Q1 2023 – Appreciation Award",
    description: "Perficient – 2023",
  },
  {
    title: "Q3 2022 – Appreciation Award",
    description: "Perficient – 2022",
  },
  {
    title: "Employee of the month",
    description: "Mastersoft ERP Solutions Pvt Ltd – 2018",
  },
];

const FunFact = () => {
  return (
    <section className="relative w-full py-12 lg:py-16 bg-blue-100">
      <div className="relative z-10 mx-auto max-w-screen-xl rounded-3xl bg-white py-12 px-6 shadow-2xl lg:px-20">
        {/* Heading */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center mx-auto mb-12 md:w-4/5 lg:w-2/3 xl:w-1/2"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 uppercase">
            Awards & Recognition
          </h2>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Award Icon (bigger size) */}
          <div className="flex-shrink-0">
            <Image
              src="/images/award/award-image.png"
              alt="Award Icon"
              width={500}
              height={350}
              className="object-contain"
            />
          </div>

          {/* Right: Awards List */}
          <ul className="list-disc list-inside space-y-6 text-gray-900 max-w-xl ml-auto lg:ml-20">
            {awards.map(({ title, description }, idx) => (
              <motion.li
                key={idx}
                variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.2 }}
                viewport={{ once: true }}
              >
                <strong className="text-lg font-semibold">{title}</strong>
                <p className="text-gray-600">{description}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FunFact;
