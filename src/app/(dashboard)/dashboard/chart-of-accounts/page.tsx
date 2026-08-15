"use client";

import Link from "next/link";
import { useMode } from "@/contexts/ModeContext";

type AccountItem = { name: string; amount: string; negative?: boolean };
type SubSection = { label: string; items: AccountItem[] };
type Section = {
  id: string;
  title: string;
  type: "neutral" | "owe";
  items?: AccountItem[];
  subsections?: SubSection[];
};

const SIMPLE_SECTIONS: Section[] = [
  {
    id: "own",
    title: "WHAT I OWN",
    type: "neutral",
    items: [
      { name: "Cash in Hand", amount: "GHC 1,250.00" },
      { name: "Bank Account", amount: "GHC 8,400.50" },
      { name: "Inventory", amount: "GHC 4,320.00" },
    ],
  },
  {
    id: "owe",
    title: "WHAT I OWE",
    type: "owe",
    items: [
      { name: "Supplier Bills", amount: "GHC -850.00", negative: true },
      { name: "Small Loan", amount: "GHC -2,000.00", negative: true },
    ],
  },
  {
    id: "share",
    title: "MY SHARE",
    type: "neutral",
    items: [
      { name: "Initial Capital", amount: "GHC 10,000.00" },
      { name: "Retained Earnings", amount: "GHC 1,120.50" },
    ],
  },
  {
    id: "money",
    title: "MONEY",
    type: "neutral",
    subsections: [
      {
        label: "Money Made",
        items: [
          { name: "Product Sales", amount: "GHC 5,600.00" },
          { name: "Services Rendered", amount: "GHC 1,200.00" },
        ],
      },
      {
        label: "Money Spent",
        items: [
          { name: "Rent", amount: "GHC 800.00" },
          { name: "Utilities", amount: "GHC 150.00" },
        ],
      },
    ],
  },
];

const FULL_SECTIONS: Section[] = [
  {
    id: "assets",
    title: "ASSETS",
    type: "neutral",
    items: [
      { name: "Cash in Hand", amount: "GHC 1,250.00" },
      { name: "Bank Account", amount: "GHC 8,400.50" },
      { name: "Inventory", amount: "GHC 4,320.00" },
    ],
  },
  {
    id: "liabilities",
    title: "LIABILITIES",
    type: "owe",
    items: [
      { name: "Accounts Payable — Supplier Bills", amount: "GHC -850.00", negative: true },
      { name: "Loan Payable", amount: "GHC -2,000.00", negative: true },
    ],
  },
  {
    id: "equity",
    title: "EQUITY",
    type: "neutral",
    items: [
      { name: "Owner's Capital", amount: "GHC 10,000.00" },
      { name: "Retained Earnings", amount: "GHC 1,120.50" },
    ],
  },
  {
    id: "income",
    title: "INCOME & EXPENSES",
    type: "neutral",
    subsections: [
      {
        label: "Revenue",
        items: [
          { name: "Sales Revenue", amount: "GHC 5,600.00" },
          { name: "Service Revenue", amount: "GHC 1,200.00" },
        ],
      },
      {
        label: "Expenses",
        items: [
          { name: "Rent Expense", amount: "GHC 800.00" },
          { name: "Utilities Expense", amount: "GHC 150.00" },
        ],
      },
    ],
  },
];

function AccountRow({ name, amount, negative }: AccountItem) {
  return (
    <div className="flex items-center justify-between h-[37px] px-4 border-b border-[#e0e3e5] last:border-0">
      <span className="text-[14px] text-[#191c1e]">{name}</span>
      <span className={`text-[14px] font-medium ${negative ? "text-[#ba1a1a]" : "text-[#191c1e]"}`}>
        {amount}
      </span>
    </div>
  );
}

export default function ChartOfAccountsPage() {
  const { mode } = useMode();

  const isSimple = mode === "simple";
  const title = isSimple ? "My Categories" : "Chart of Accounts";
  const subtitle = isSimple
    ? "Manage and organize your financial buckets."
    : "Manage your chart of accounts and financial structure.";
  const addLabel = isSimple ? "+ Add Category" : "+ Add Account";
  const sections = isSimple ? SIMPLE_SECTIONS : FULL_SECTIONS;

  return (
    <div className="p-8 flex flex-col gap-6 pb-0">
      {/* Page header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-[32px] font-bold text-[#191c1e] tracking-[-0.64px] leading-10">
            {title}
          </h1>
          <p className="text-[#434655] text-base mt-1">{subtitle}</p>
        </div>
        <button
          type="button"
          className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-medium px-4 h-10 rounded-lg flex items-center gap-2 shadow-sm transition-colors"
        >
          {addLabel}
        </button>
      </div>

      {/* Sections */}
      <div className="flex flex-col gap-6">
        {sections.map((section) => (
          <div
            key={section.id}
            className="bg-white border border-[#e0e3e5] rounded-xl overflow-hidden"
          >
            {/* Section header */}
            <div className="bg-[#f7f9fb] border-b border-[#e0e3e5] px-4 h-[49px] flex items-center">
              <h3
                className={`text-[12px] font-semibold tracking-[0.6px] uppercase ${
                  section.type === "owe" ? "text-[#ba1a1a]" : "text-[#4d556b]"
                }`}
              >
                {section.title}
              </h3>
            </div>

            {/* Rows */}
            {section.subsections
              ? section.subsections.map((sub) => (
                  <div key={sub.label}>
                    <div className="bg-[#f2f4f6] border-b border-[#e0e3e5] px-4 h-[33px] flex items-center">
                      <span className="text-[14px] font-medium text-[#434655]">{sub.label}</span>
                    </div>
                    {sub.items.map((item) => (
                      <AccountRow key={item.name} {...item} />
                    ))}
                  </div>
                ))
              : section.items?.map((item) => (
                  <AccountRow key={item.name} {...item} />
                ))}
          </div>
        ))}
      </div>

      {/* Footer */}
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
