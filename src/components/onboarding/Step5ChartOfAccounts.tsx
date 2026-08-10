import Image from "next/image";

type COAPath = "standard" | "custom";

interface Props {
  path: COAPath | null;
  onChange: (p: COAPath) => void;
}

const CATEGORIES = [
  { label: "Assets", range: "1000 - 1999", icon: "/assets/assets-icon.svg", w: 17, h: 17 },
  { label: "Liabilities", range: "2000 - 2999", icon: "/assets/liabilities-icon.svg", w: 17, h: 13 },
  { label: "Equity", range: "3000 - 3999", icon: "/assets/equity-icon.svg", w: 20, h: 10 },
  { label: "Income", range: "4000 - 4999", icon: "/assets/income-icon.svg", w: 17, h: 10 },
  { label: "Expenses", range: "5000 - 5999", icon: "/assets/expenses-icon.svg", w: 17, h: 10 },
];

export default function Step5ChartOfAccounts({ path, onChange }: Props) {
  return (
    <div className="bg-white rounded-xl border border-[#c3c6d7] shadow-sm overflow-hidden">
      {/* Header */}
      <div className="text-center pt-8 pb-4 px-8">
        <h2 className="text-[28px] font-bold text-[#141b2b]">Chart of Accounts</h2>
        <p className="text-sm text-[#434655] mt-2">
          Organize your financial transactions with a structure that fits your business. Choose a path to get started.
        </p>
      </div>

      {/* Cards */}
      <div className="px-8 pb-8 pt-6 grid grid-cols-2 gap-6">
        {/* Standard template (recommended) */}
        <div className="relative">
          {/* Recommended badge */}
          <div className="absolute -top-3 left-6 bg-[#004ac6] text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1 z-10">
            <Image src="/assets/star-icon.svg" alt="" width={12} height={11} />
            Recommended
          </div>

          <button
            type="button"
            onClick={() => onChange("standard")}
            className={`w-full text-left p-6 rounded-xl border-2 transition-all h-full flex flex-col ${
              path === "standard"
                ? "border-[#004ac6] bg-[#f1f3ff] shadow-[0_0_0_2px_white,0_0_0_4px_#004ac6]"
                : "border-[#c3c6d7] bg-[#f9f9ff] hover:border-[#004ac6]"
            }`}
          >
            {/* Radio indicator */}
            <div className="flex items-start justify-between mb-4">
              <Image src="/assets/template-icon.svg" alt="" width={40} height={46} />
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                path === "standard" ? "border-[#004ac6] bg-[#004ac6]" : "border-[#737686] bg-white"
              }`}>
                {path === "standard" && (
                  <Image src="/assets/radio-checked.svg" alt="" width={10} height={10} />
                )}
              </div>
            </div>

            <h3 className="text-lg font-semibold text-[#141b2b] mb-2">Use a standard template</h3>
            <p className="text-sm text-[#434655] mb-4">
              A pre-configured Ghanaian standard ledger designed for small businesses, retail, and services.
              Perfect for most users.
            </p>

            {/* Preview categories */}
            <div className="border-t border-[#c3c6d7] pt-4 flex-1">
              <p className="text-xs font-medium text-[#434655] uppercase tracking-widest mb-3">
                PREVIEW CATEGORIES
              </p>
              <div className="space-y-2">
                {CATEGORIES.map(({ label, range, icon, w, h }) => (
                  <div key={label} className="flex items-center gap-3 bg-[#f9f9ff] border border-[#c3c6d7] rounded-lg px-3 py-2">
                    <Image src={icon} alt="" width={w} height={h} className="shrink-0" />
                    <span className="text-sm text-[#141b2b] flex-1">{label}</span>
                    <span className="text-sm text-[#434655] font-mono">{range}</span>
                  </div>
                ))}
              </div>
            </div>
          </button>
        </div>

        {/* Custom / Set up my own */}
        <button
          type="button"
          onClick={() => onChange("custom")}
          className={`w-full text-left p-6 rounded-xl border-2 transition-all flex flex-col ${
            path === "custom"
              ? "border-[#004ac6] bg-[#f1f3ff] shadow-[0_0_0_2px_white,0_0_0_4px_#004ac6]"
              : "border-[#c3c6d7] bg-[#f9f9ff] hover:border-[#004ac6]"
          }`}
        >
          <div className="flex items-start justify-between mb-4">
            <Image src="/assets/coa-icon.svg" alt="" width={40} height={43} />
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              path === "custom" ? "border-[#004ac6] bg-[#004ac6]" : "border-[#737686] bg-white"
            }`}>
              {path === "custom" && (
                <Image src="/assets/radio-checked.svg" alt="" width={10} height={10} />
              )}
            </div>
          </div>

          <h3 className="text-lg font-semibold text-[#141b2b] mb-2">Set up my own</h3>
          <p className="text-sm text-[#434655] mb-6">
            Import your existing chart of accounts via CSV or manually create each ledger from scratch for
            full control.
          </p>

          {/* Upload area */}
          <div className="mt-auto border-2 border-dashed border-[#c3c6d7] rounded-xl p-8 bg-[#f1f3ff] flex flex-col items-center gap-2">
            <Image src="/assets/upload-icon.svg" alt="" width={27} height={33} />
            <p className="text-sm text-[#434655] text-center">Drag and drop your COA file here</p>
            <p className="text-xs text-[#737686]">Supported formats: CSV, XLSX</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export type { COAPath };
