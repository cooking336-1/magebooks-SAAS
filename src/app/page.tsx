"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoadingScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/login");
    }, 2800);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="relative min-h-screen w-full bg-[#f9f9ff] flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/assets/loading-bg.png"
          alt=""
          fill
          className="object-cover opacity-100"
          priority
        />
      </div>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-0">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-10">
          <div className="bg-[#2563eb] rounded-lg w-10 h-10 flex items-center justify-center">
            <Image
              src="/assets/logo-icon.svg"
              alt="Mage Books"
              width={24}
              height={24}
            />
          </div>
          <div>
            <p className="text-[#1e3a8a] font-bold text-[28px] leading-tight">
              Mage Books
            </p>
            <p className="text-[#94a3b8] text-[11px] font-bold tracking-[1px] uppercase">
              SAAS ACCOUNTING
            </p>
          </div>
        </div>

        {/* Welcome text */}
        <p className="text-[#2563eb] font-bold text-2xl tracking-[1px] uppercase text-center mb-8">
          WELCOME TO MAGE ACCOUNTING SOFTWARE
        </p>

        {/* Tagline */}
        <p className="text-black text-sm tracking-[1px] uppercase text-center mb-10">
          BUILT FOR GHANAIAN BUSINESSES
        </p>

        {/* Loading bar */}
        <div className="w-64 h-1 bg-[#e9edff] rounded-full overflow-hidden">
          <div className="h-full bg-[#2563eb] rounded-full animate-loading-bar" />
        </div>
      </div>

      <style>{`
        @keyframes loading-bar {
          0%   { width: 0%; }
          60%  { width: 80%; }
          85%  { width: 90%; }
          100% { width: 100%; }
        }
        .animate-loading-bar {
          animation: loading-bar 2.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
}
