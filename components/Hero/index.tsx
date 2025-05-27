"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="pt-28 md:pt-32 relative overflow-hidden pb-12"
      style={{ marginTop: `calc(var(--header-height) + 1rem)` }}
    >
      {/* Animated Light Gray Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 animate-gradientBackground before:absolute before:inset-0 before:bg-gradient-to-r before:from-gray-50 before:via-slate-100 before:to-gray-200 before:opacity-90 after:absolute after:inset-0 after:bg-gradient-to-tr after:from-slate-200 after:via-gray-100 after:to-slate-50 after:opacity-60"
      ></div>

      <div className="relative mx-auto max-w-c-1235 overflow-hidden px-6 md:px-10 2xl:px-0 z-10">
        <div className="flex flex-col-reverse items-center gap-12 md:flex-row lg:gap-36">
          {/* Left Content */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="mb-4">
              {/* Animate "Hi, folks" */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-xl md:text-2xl font-semibold tracking-wide text-gray-600 mb-1"
              >
                Hi, folks
              </motion.h1>

              {/* Animate "I'm Saket Singh" with delay */}
              <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="text-3xl md:text-4xl font-extrabold uppercase tracking-normal text-gray-900 drop-shadow-sm"
              >
                I&apos;m Saket Singh
              </motion.h2>
            </div>

            <h4 className="mb-6 text-2xl font-medium text-gray-700 tracking-wide">
              Senior Sitecore Developer
            </h4>

            <p className="mb-10 max-w-md text-lg leading-relaxed text-gray-600 tracking-wide">
              A passionate Software Developer specializing in building impactful,
              high-performance, and scalable web applications. Currently crafting
              robust digital experiences with Sitecore XM Cloud, SXA, and Headless CMS
              solutions.
            </p>

            <a
              href="https://www.linkedin.com/in/saketpsingh/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border-2 border-gray-700 bg-white px-7 py-3 text-lg font-semibold text-gray-900 shadow-md transition-all hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300"
            >
              Know More
              <svg
                className="ml-3 h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          {/* Right Image with subtle gray glow */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative mx-auto hidden w-full max-w-lg rounded-xl md:block"
            style={{ aspectRatio: "588 / 480" }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-xl bg-gray-300 blur-3xl opacity-30 -z-10"
              style={{ filter: "blur(80px)" }}
            ></div>
            <Image
              src="/images/user/developer.png"
              alt="Developer"
              fill
              style={{ objectFit: "contain", objectPosition: "center" }}
              className="relative rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
