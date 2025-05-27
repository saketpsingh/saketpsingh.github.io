"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ExperienceTabItem from "./ExperienceTabItem";
import ExperienceTabData from "./ExperienceTabData";

const ExperienceTab = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");

  return (
    <section className="relative bg-gradient-to-br from-purple-100 via-blue-100 to-white">
      <div className="relative mx-auto max-w-screen-xl px-4 md:px-8 2xl:px-0">
        {/* Heading */}
        <div className="mb-8 pt-10 text-center">
          <h2 className="text-3xl font-bold uppercase text-gray-800">
            Work Experience
          </h2>
        </div>

        {/* Tabs */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap justify-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-lg md:flex-nowrap"
        >
          {ExperienceTabData.map((tab, index) => {
            const isActive = currentTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setCurrentTab(tab.id)}
                className={`relative group flex items-center gap-3 rounded-full px-5 py-3 transition duration-300 focus:outline-none
                ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                    : "bg-white hover:bg-gray-100 text-gray-800"
                }`}
              >
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition duration-300 shadow-sm
                  ${
                    isActive
                      ? "border-white bg-white text-blue-600 scale-110"
                      : "border-blue-500 text-blue-500 bg-white group-hover:scale-105"
                  }`}
                >
                  {index + 1}
                </div>
                <span className="text-sm font-medium md:text-base">{tab.company}</span>

                {/* Active tab glow */}
                {isActive && (
                  <motion.span
                    layoutId="highlight"
                    className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-30"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mx-auto max-w-3xl"
          >
            {ExperienceTabData.map(
              (feature) =>
                feature.id === currentTab && (
                  <ExperienceTabItem key={feature.id} experience={feature} />
                )
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ExperienceTab;
