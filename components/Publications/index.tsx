// components/Publications.tsx
import Image from "next/image";
import Link from "next/link";
import publicationData from "@/components/Publications/PublicationData";

export default function Publications() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-extrabold uppercase text-gray-900 mb-10 tracking-wide">
          Publications & Contributions
        </h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
          {publicationData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="mb-6 rounded-full border-4 p-1">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h3>
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block rounded-full border border-blue-600 px-6 py-2 text-sm font-medium text-blue-600 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 transition-colors duration-300"
              >
                {item.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
