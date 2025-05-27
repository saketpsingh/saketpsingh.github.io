// app/about/page.tsx
import { Metadata } from "next";
import AboutItems from "@/components/About";

export const metadata: Metadata = {
  title: "About | Saket Singh",
  description: "Learn more about Solid SaaS Boilerplate and its purpose.",
};

export default function AboutPage() {
  return (
    <section className="py-8 md:py-12 lg:py-16">
      <AboutItems />
    </section>
  );
}
