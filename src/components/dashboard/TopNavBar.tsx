import Image from "next/image";

export default function TopNavBar() {
  return (
    <header className="h-16 bg-white border-b border-[#c3c6d7] flex items-center justify-between px-6 shrink-0 sticky top-0 z-20">
      {/* Company name */}
      <p className="font-black text-[20px] text-[#141b2b] whitespace-nowrap">
        Kurt Trading Enterprise
      </p>

      {/* Right controls */}
      <div className="flex items-center gap-3">
        {/* Search bar */}
        <div className="relative w-80 h-9">
          <div className="absolute inset-0 bg-[#f1f3ff] rounded-full flex items-center px-3 gap-2">
            <Image src="/assets/nav-search.svg" alt="" width={15} height={17} />
            <span className="text-[#6b7280] text-[14px] truncate">
              Search accounts, invoices, or help...
            </span>
          </div>
        </div>

        {/* All Clear badge */}
        <div className="bg-[#bbf7d0] rounded-[10px] px-3 py-1 text-sm text-black whitespace-nowrap">
          All Clear
        </div>

        {/* Refresh */}
        <button type="button" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f1f3ff]">
          <Image src="/assets/nav-refresh.svg" alt="Refresh" width={16} height={16} />
        </button>

        {/* Notifications */}
        <button type="button" className="relative w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f1f3ff]">
          <Image src="/assets/nav-bell.svg" alt="Notifications" width={16} height={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-[#ba1a1a] rounded-full border border-white" />
        </button>

        {/* Avatar */}
        <div className="w-8 h-8 rounded-full border border-[#c3c6d7] overflow-hidden shrink-0">
          <Image src="/assets/user-avatar.png" alt="User" width={30} height={30} />
        </div>
      </div>
    </header>
  );
}
