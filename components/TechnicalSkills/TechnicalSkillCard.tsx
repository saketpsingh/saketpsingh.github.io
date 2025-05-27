import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";

const TechnicalSkillCard = ({ feature }: { feature: Feature }) => {
  const { icon, title, description } = feature;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="rounded-lg border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded bg-indigo-600">
        <Image src={icon} width={36} height={36} alt={title} />
      </div>

      <h3 className="mt-6 mb-4 text-xl font-semibold text-black">{title}</h3>

      <ul className="list-disc list-inside space-y-1 text-gray-700">
        {Array.isArray(description) ? (
          description.map((item, idx) => <li key={idx}>{item}</li>)
        ) : (
          <li>{description}</li>
        )}
      </ul>
    </motion.div>
  );
};

export default TechnicalSkillCard;
