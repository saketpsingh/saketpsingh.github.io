// app/about/page.tsx
import { Metadata } from "next";
import PrivacyPolicy from "@/components/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy | Saket Singh",
  description: "Learn more about Solid SaaS Boilerplate and its purpose.",
};

export default function PrivacyPage() {
  return (
    <section className="py-8 md:py-12 lg:py-16">
      <PrivacyPolicy />
    </section>
  );
}
