// app/about/page.tsx
import { Metadata } from "next";
import ContactItems from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact | Saket Singh",
  description: "Learn more about Solid SaaS Boilerplate and its purpose.",
};

export default function ContactPage() {
  return (
    <section className="py-8 md:py-12 lg:py-16">
      <ContactItems />
    </section>
  );
}