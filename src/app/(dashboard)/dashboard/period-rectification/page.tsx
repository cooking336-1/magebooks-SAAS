"use client";

import Link from "next/link";
import { useMode } from "@/contexts/ModeContext";

export default function PeriodRectificationPage() {
  const { mode } = useMode();
  const title = mode === "simple" ? "Fix a Past Mistake" : "Prior Period Rectification";
  const subtitle =
    mode === "simple"
      ? "Correct errors in previously recorded transactions."
      : "Adjust and correct prior period financial entries.";

  return (
    <div className="p-8 flex flex-col gap-6 pb-0">
      <div>
        <h1 className="text-[32px] font-bold text-[#191c1e] tracking-[-0.64px] leading-10">{title}</h1>
        <p className="text-[#434655] text-base mt-1">{subtitle}</p>
      </div>

      <div className="bg-[#fef2f2] border border-[#fecaca] rounded-xl p-5 flex gap-3">
        <span className="text-[#dc2626] text-lg">⚠</span>
        <p className="text-sm text-[#7f1d1d]">
          Changes made here affect previously closed periods. All rectifications are logged in the audit trail.
        </p>
      </div>

      <div className="bg-white border border-[#c3c6d7] rounded-xl p-12 text-center text-[#434655]">
        <p className="font-semibold text-[#141b2b] text-lg mb-1">No past corrections</p>
        <p className="text-sm">
          {mode === "simple"
            ? "Use this section to fix mistakes in past records."
            : "Prior period adjustment entries will appear here."}
        </p>
      </div>

      <footer className="border-t border-[#c3c6d7] mt-4 py-6 flex items-center justify-between text-[12px] font-medium text-[#434655] tracking-[0.24px]">
        <p>© 2026 Mage Books. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="#" className="hover:underline">Privacy Policy</Link>
          <Link href="#" className="hover:underline">Terms of Service</Link>
          <Link href="#" className="hover:underline">Help Center</Link>
        </div>
      </footer>
    </div>
  );
}
