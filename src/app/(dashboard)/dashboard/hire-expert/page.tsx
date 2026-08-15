import Link from "next/link";

export default function HireExpertPage() {
  return (
    <div className="p-8 flex flex-col gap-6 pb-0">
      <div>
        <h1 className="text-[32px] font-bold text-[#191c1e] tracking-[-0.64px] leading-10">Hire An Expert</h1>
        <p className="text-[#434655] text-base mt-1">Connect with certified Mage accountants for professional help.</p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {[
          { name: "Tax Filing", desc: "Get help with GRA tax filing and compliance." },
          { name: "Bookkeeping", desc: "Outsource your day-to-day bookkeeping tasks." },
          { name: "Financial Audit", desc: "Certified audit services for your business." },
          { name: "Payroll Setup", desc: "Professional payroll configuration and management." },
          { name: "Business Advisory", desc: "Strategic financial advice for growth." },
          { name: "VAT Returns", desc: "Accurate VAT return preparation and filing." },
        ].map((service) => (
          <div
            key={service.name}
            className="bg-white border border-[#c3c6d7] rounded-xl p-6 hover:border-[#2563eb] hover:shadow-md transition-all cursor-pointer"
          >
            <p className="font-bold text-[#141b2b] text-base">{service.name}</p>
            <p className="text-[#434655] text-sm mt-2 leading-5">{service.desc}</p>
            <button
              type="button"
              className="mt-4 text-[#2563eb] text-sm font-semibold hover:underline"
            >
              Find an expert →
            </button>
          </div>
        ))}
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
