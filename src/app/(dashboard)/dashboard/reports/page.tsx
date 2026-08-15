import Link from "next/link";

export default function ReportsPage() {
  return (
    <div className="p-8 flex flex-col gap-6 pb-0">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-[32px] font-bold text-[#191c1e] tracking-[-0.64px] leading-10">Reports</h1>
          <p className="text-[#434655] text-base mt-1">Financial reports and business insights.</p>
        </div>
        <button
          type="button"
          className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-medium px-4 h-10 rounded-lg shadow-sm transition-colors"
        >
          Generate Report
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {["Business Overview", "Profit & Loss", "Balance Sheet", "Cash Flow", "Tax Summary", "Aged Receivables"].map(
          (name) => (
            <button
              key={name}
              type="button"
              className="bg-white border border-[#c3c6d7] rounded-xl p-6 text-left hover:border-[#2563eb] hover:shadow-md transition-all"
            >
              <p className="font-bold text-[#141b2b] text-base">{name}</p>
              <p className="text-[#434655] text-sm mt-1">View report →</p>
            </button>
          )
        )}
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
