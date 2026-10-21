import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ContactBlock from "../components/ContactBlock";

export const metadata: Metadata = {
  title: "Contact | Brightmere",
  description:
    "Looking at a business now? A 30-minute call about the target and the timetable is enough to tell you whether operator diligence would change your view of it.",
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-paper text-ink font-dm">
      <Header current="/contact" />
      <PageHero
        eyebrow="Contact"
        title="Looking at a business"
        accent="now?"
        standfirst="30-minute call. Tell us about the target and the timetable, and we'll tell you honestly whether operator diligence would change your view of it, and what the data room would need to contain."
      />
      <ContactBlock title="Key contacts" />
      <Footer />
    </div>
  );
}
