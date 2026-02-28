"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import QuoteBar from "@/components/QuoteBar";
import ProblemSection from "@/components/ProblemSection";
import ComparisonSection from "@/components/ComparisonSection";
import HowItWorks from "@/components/HowItWorks";
import PrescriptionPreview from "@/components/PrescriptionPreview";
import TrustSection from "@/components/TrustSection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import DiagnosisModal from "@/components/DiagnosisModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPlan, setModalPlan] = useState<"single" | "monthly">("single");

  const openModal = (plan: "single" | "monthly") => {
    setModalPlan(plan);
    setModalOpen(true);
  };

  return (
    <>
      <Hero />
      <QuoteBar />
      <ProblemSection />
      <ComparisonSection />
      <HowItWorks />
      <PrescriptionPreview />
      <TrustSection />
      <PricingSection onOpenModal={openModal} />
      <FaqSection />
      <FinalCta />
      <Footer />
      <DiagnosisModal
        isOpen={modalOpen}
        plan={modalPlan}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
