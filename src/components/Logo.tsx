import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="bg-[#2563eb] rounded-lg p-2 flex items-center justify-center w-12 h-12">
        <Image
          src="/assets/logo-icon.svg"
          alt="Mage Books"
          width={24}
          height={24}
        />
      </div>
      <div>
        <p className="text-[#1e3a8a] font-bold text-2xl leading-tight">
          Mage Books
        </p>
        <p className="text-[#94a3b8] text-xs font-bold tracking-widest uppercase">
          SAAS Accounting
        </p>
      </div>
    </Link>
  );
}
