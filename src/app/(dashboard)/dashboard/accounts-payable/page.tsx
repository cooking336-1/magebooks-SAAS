"use client";

import Link from "next/link";
import { useMode } from "@/contexts/ModeContext";

export default function AccountsPayablePage() {
  const { mode } = useMode();
  const title = mode === "simple" ? "Money I Owe" : "Accounts Payable";
  const subtitle =
    mode === "simple"
      ? "Bills and amounts you still need to pay."
      : "Outstanding supplier bills and payable balances.";

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
          + Record Bill
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {[
          { label: mode === "simple" ? "Total I Owe" : "Total Payable", value: "GH¢ 23,000.00", color: "text-[#dc2626]" },
          { label: "Overdue", value: "GH¢ 5,000.00", color: "text-[#ba1a1a]" },
          { label: "Due This Month", value: "GH¢ 9,500.00", color: "text-[#141b2b]" },
        ].map((card) => (
          <div key={card.label} className="bg-white border border-[#c3c6d7] rounded-xl p-6">
            <p className="text-sm font-semibold text-[#434655] uppercase tracking-[0.35px]">{card.label}</p>
            <p className={`font-black text-[20px] mt-3 ${card.color}`}>{card.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-[#c3c6d7] rounded-xl p-12 text-center text-[#434655]">
        <p className="font-semibold text-[#141b2b] text-lg mb-1">No outstanding bills</p>
        <p className="text-sm">Bills received from suppliers will appear here.</p>
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
