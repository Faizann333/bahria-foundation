"use client";

import { motion } from "framer-motion";
import { AdmissionsTimeline } from "@/components/sections/AdmissionsTimeline";

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="pt-32 pb-12 container mx-auto px-6 max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-bold mb-4 text-foreground">Admissions <span className="text-primary">Process</span></h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
            Join a community of innovators and achievers. Our admissions are open for the upcoming academic session.
          </p>
        </motion.div>
      </div>
      
      {/* Re-use the beautiful horizontal scroll timeline component here */}
      <AdmissionsTimeline />
    </div>
  );
}
