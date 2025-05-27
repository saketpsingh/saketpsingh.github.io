"use client";

import { useEffect, useRef, useState } from "react";
import { ProjectsData } from "./ProjectsData";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

const Projects = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    const heights = cardRefs.current.map((ref) => ref?.offsetHeight || 0);
    const max = Math.max(...heights);
    setMaxHeight(max);
  }, [cardRefs.current]); // Updated dependency to avoid unnecessary re-renders

  return (
    <section className="py-16 md:py-10 bg-gradient-to-b from-gray-100 to-gray-50 dark:from-zinc-900 dark:to-zinc-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold uppercase text-gray-900 mb-10 tracking-wide">
          Recent Projects
        </h2>

        <Swiper
          spaceBetween={40}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {ProjectsData.map((project, index) => (
            <SwiperSlide key={project.id}>
              <Link href={`/projects/${project.id}`}>
                <SingleProject
                  review={project}
                  setCardRef={(el) => (cardRefs.current[index] = el)}
                  maxHeight={maxHeight}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
