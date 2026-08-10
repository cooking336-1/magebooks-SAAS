import Image from "next/image";

type ExperienceMode = "simple" | "professional";

interface Props {
  mode: ExperienceMode | null;
  onChange: (mode: ExperienceMode) => void;
}

export default function Step3ChooseExperience({ mode, onChange }: Props) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-[28px] font-bold text-[#141b2b]">Choose your experience</h2>
        <p className="text-[#434655] mt-2 text-base">
          How much of the technical accounting heavy-lifting do you want to handle yourself?
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 gap-6">
        {/* Simple mode */}
        <button
          type="button"
          onClick={() => onChange("simple")}
          className={`relative text-left p-6 rounded-xl border-2 transition-all backdrop-blur-sm ${
            mode === "simple"
              ? "border-[#2563eb] bg-[#eff6ff]"
              : "border-[#e5e7eb] bg-white/80 hover:border-[#2563eb]"
          }`}
        >
          {mode === "simple" && (
            <div className="absolute inset-0 rounded-xl shadow-[0_0_0_2px_#2563eb]" />
          )}
          <div className="w-12 h-12 rounded-lg bg-[#2563eb] flex items-center justify-center mb-4">
            <Image src="/assets/lightning.svg" alt="" width={21} height={23} />
          </div>
          <h3 className="text-xl font-semibold text-[#141b2b] mb-2">Keep it simple</h3>
          <p className="text-sm text-[#434655] mb-6">
            Perfect for small businesses and sole traders in Ghana. We&apos;ll automate the debits and
            credits in the background while you focus on sales and expenses. Simplified dashboard, guided
            workflows, and automated tax estimates.
          </p>
          <div className="flex items-center gap-2 text-sm font-semibold text-[#004ac6]">
            <Image src="/assets/recommended-check.svg" alt="" width={22} height={21} />
            Recommended for non-accountants
          </div>
        </button>

        {/* Professional mode */}
        <button
          type="button"
          onClick={() => onChange("professional")}
          className={`relative text-left p-6 rounded-xl border-2 transition-all backdrop-blur-sm ${
            mode === "professional"
              ? "border-[#2563eb] bg-[#eff6ff]"
              : "border-[#e5e7eb] bg-white/80 hover:border-[#2563eb]"
          }`}
        >
          <div className="w-12 h-12 rounded-lg bg-[#d6e0f1] flex items-center justify-center mb-4">
            <Image src="/assets/bank.svg" alt="" width={24} height={24} />
          </div>
          <h3 className="text-xl font-semibold text-[#141b2b] mb-2">I know accounting</h3>
          <p className="text-sm text-[#434655] mb-6">
            Full access to manual journal entries, sophisticated Chart of Accounts mapping, and granular
            fiscal controls. Ideal for CFOs, accountants, or businesses with complex inventory and
            multi-currency requirements.
          </p>
          <div className="flex items-center gap-2 text-sm font-semibold text-[#434655]">
            <Image src="/assets/settings.svg" alt="" width={21} height={20} />
            Advanced controls enabled
          </div>
        </button>
      </div>

      {/* Reassurance note */}
      <div className="bg-[#f1f3ff] border border-[#c3c6d7] rounded-lg p-4 flex gap-3">
        <Image src="/assets/info.svg" alt="" width={20} height={20} className="shrink-0 mt-0.5" />
        <p className="text-sm text-[#434655]">
          You can change this setting at any time in your organization settings. All your data will remain
          compatible between modes.
        </p>
      </div>
    </div>
  );
}

export type { ExperienceMode };
