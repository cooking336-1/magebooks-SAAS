"use client";

import Link from "next/link";
import { useMode } from "@/contexts/ModeContext";

export default function FixedAssetsPage() {
  const { mode } = useMode();
  const title = mode === "simple" ? "Equipment & Property" : "Fixed Asset Register";
  const subtitle =
    mode === "simple"
      ? "Track the equipment and property your business owns."
      : "Manage fixed assets, depreciation, and disposals.";

  return (
    <div className="p-8 flex flex-col gap-6 pb-0">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-[32px] font-bold text-[#191c1e] tracking-[-0.64px] leading-10">{title}</h1>
          <p className="text-[#434655] text-base mt-1">{subtitle}</p>
        </div>
        <button
          type="button"
          className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-medium px-4 h-10 rounded-lg shadow-sm transition-colors"
        >
          {mode === "simple" ? "+ Add Equipment" : "+ Register Asset"}
        </button>
      </div>

      <div className="bg-white border border-[#c3c6d7] rounded-xl p-12 text-center text-[#434655]">
        <p className="font-semibold text-[#141b2b] text-lg mb-1">No assets registered</p>
        <p className="text-sm">
          {mode === "simple"
            ? "Add equipment and property your business owns."
            : "Register fixed assets to track their value and depreciation."}
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
