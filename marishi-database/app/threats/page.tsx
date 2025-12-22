"use client";

import Link from "next/link";
import Image from "next/image"; 
import { useState, useEffect } from "react";

export default function ThreatsPage() {
  const [codeLines, setCodeLines] = useState<string[]>([]);

  // 랜덤한 시스템 코드 생성 (배경 애니메이션용 - 유지)
  useEffect(() => {
    const snippets = [
      "0x0041F: MOV EAX, [EBP-0x4] // SEGMENT_FAULT",
      "FATAL_EXCEPTION: 0xC0000005 at 0x77C3214A",
      "INIT_PROCESS: PID 9928 [SUSPENDED]",
      "DECRYPTING_STREAM... [FAILED] :: CHECKSUM_MISMATCH",
      "KERNEL_PANIC: VIRTUAL_MEMORY_EXHAUSTED",
      "THREAT_LEVEL: OMEGA // ISOLATION_PROTOCOL_ACTIVE",
      "WARNING: UNREGISTERED ETHER SIGNATURE DETECTED",
      "00101101 11001010 00010010 11110000",
      "ACCESS_VIOLATION reading location 0xFFFFFFFF",
      "LOADING_MODULE: 'ABYSS_GAZER' ... [PERMISSION DENIED]",
      "OVERRIDE_AUTH_ATTEMPT... BLOCKED BY ADMIN",
      "SYSTEM_INTEGRITY: COMPROMISED (98%)",
      "EXECUTE: /bin/force_shutdown -now",
      "0x8891A: JMP SHORT 0x44 // INFINITE_LOOP",
      "ANALYZING_PATTERN: 'UNKNOWN_ENTITY' // DATA_CORRUPTED"
    ];

    const initialLines = Array.from({ length: 40 }).map(() => 
      snippets[Math.floor(Math.random() * snippets.length)]
    );
    setCodeLines(initialLines);

    const interval = setInterval(() => {
      setCodeLines(prev => {
        const newLines = [...prev];
        newLines.shift();
        newLines.push(snippets[Math.floor(Math.random() * snippets.length)]);
        return newLines;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-black text-red-600 font-mono relative overflow-hidden p-4">
      
      {/* 0. 배경 CRT 스캔라인 효과 (유지) */}
      <div className="pointer-events-none fixed inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] opacity-20"></div>
      
      {/* 1. 배경 코드 흐름 (유지) */}
      <div className="absolute inset-0 opacity-30 text-[10px] md:text-xs leading-tight pointer-events-none select-none overflow-hidden p-4 filter blur-[1px]">
        {codeLines.map((line, index) => (
          <div key={index} className="whitespace-nowrap font-mono text-red-900/80">
            <span className="text-red-500 mr-4">{`L-${1000 + index}:`}</span>
            {line}
          </div>
        ))}
      </div>

      {/* 2. 메인 컨텐츠 (접근 거부 창) */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] w-full max-w-4xl mx-auto">
        
        {/* 상단 네비게이션 */}
        <div className="absolute top-0 left-0 w-full flex justify-between items-center border-b border-red-900/50 pb-4 mb-10">
           <Link href="/" className="px-4 py-2 border border-red-800 hover:bg-red-900/50 transition-colors text-xs font-bold text-red-500 hover:text-white">
              ← EMERGENCY_EXIT (ROOT)
           </Link>
           {/* 상단 경고 깜빡임 (유지) */}
           <span className="text-xs font-bold animate-pulse text-red-500">⚠ SYSTEM ALERT</span>
        </div>

        {/* 중앙 경고 박스 (테두리 깜빡임 유지: animate-pulse-slow) */}
        <div className="border-4 border-red-600 bg-black p-1 md:p-2 shadow-[0_0_50px_rgba(220,38,38,0.5)] animate-pulse-slow w-full max-w-2xl">
          <div className="border border-red-900/50 p-6 md:p-10 flex flex-col items-center text-center space-y-6 relative overflow-hidden">
            
            {/* 배경 사선 패턴 */}
            <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(220,38,38,0.05)_10px,rgba(220,38,38,0.05)_20px)] pointer-events-none"></div>

            {/* [수정됨] 아이콘 이미지 교체 (animate-bounce 제거됨: 고정) */}
            <div className="relative w-24 h-24 md:w-32 md:h-32 mb-6">
               <Image
                 src="/threat_icon.png"
                 alt="Access Denied Lock"
                 fill
                 className="object-contain drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]"
               />
            </div>

            {/* [수정됨] 메인 텍스트 (glitch-text 제거됨: 고정) */}
            <h1 className="text-4xl md:text-6xl font-black text-red-500 tracking-tighter">
              ACCESS DENIED
            </h1>

            {/* 서브 텍스트 */}
            <div className="space-y-2 text-sm md:text-base text-red-400 font-bold">
              <p className="bg-red-900/20 px-2 py-1 inline-block">ERROR_CODE: 403_FORBIDDEN</p>
              <p>You do not have the required clearance level.</p>
            </div>

            {/* 상세 로그 (커서 깜빡임 유지: animate-blink) */}
            <div className="w-full text-left bg-[#0f0000] border border-red-900 p-4 text-[10px] md:text-xs font-mono text-red-300/70 space-y-1 mt-8">
              <p>{`> User: Guest_Session_#9921`}</p>
              <p>{`> Target: /database/threats/s_class_entities`}</p>
              <p>{`> Authentication: Biometric Scan... [FAILED]`}</p>
              <p>{`> Retrying... [FAILED]`}</p>
              <p className="text-red-500 font-bold">{`> SECURITY PROTOCOL: ENGAGED`}</p>
              <p className="animate-blink">{`> Terminating connection in 3..._`}</p>
            </div>

            {/* 경고문 */}
            <p className="text-xs text-red-600 mt-4 max-w-md">
              *** WARNING *** <br/>
              Unauthorized access attempts are logged and reported to the <strong>Oratorio Oversight Committee</strong>. 
              Further attempts will result in immediate neural termination.
            </p>

          </div>
        </div>

      </div>
    </main>
  );
}