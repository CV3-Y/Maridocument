"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// ----------------------------------------------------------------------
// [Helper] 타자기 효과
// ----------------------------------------------------------------------
function Typewriter({ text, delay = 0, speed = 30 }: { text: string, delay?: number, speed?: number }) {
  const [displayedText, setDisplayedText] = useState("");
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStartTyping(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!startTyping) return;
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);
    return () => clearInterval(typingInterval);
  }, [text, speed, startTyping]);

  return <span>{displayedText}</span>;
}

// ----------------------------------------------------------------------
// [Helper] 검열 삭제(Redacted) - 영수증 버전
// ----------------------------------------------------------------------
function Redacted({ children }: { children: React.ReactNode }) {
  return (
    <span className="group relative inline-block cursor-help align-bottom mx-1">
      <span className="absolute inset-0 bg-black group-hover:bg-transparent transition-colors duration-300 z-10 rounded-sm"></span>
      <span className="bg-gray-200 text-gray-800 px-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">
        {children}
      </span>
    </span>
  );
}

// ----------------------------------------------------------------------
// [Main] 거래 내역 컨텐츠 컴포넌트
// ----------------------------------------------------------------------
export default function ReceiptContent({ id }: { id: string }) {

  // 1. [REC_RAY] 레이의 의뢰 청구서
  if (id === "REC_RAY") {
    return (
      <div className="flex flex-col gap-8 animate-fadeIn max-w-sm mx-auto pb-10 font-mono text-xs">
        
        {/* 영수증 종이 컨테이너 */}
        <div className="bg-white text-black p-6 shadow-2xl relative transform rotate-1 overflow-hidden">
          
          <div className="absolute top-0 left-0 w-full h-2 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-multiply"></div>

          <div className="text-center border-b-2 border-dashed border-gray-400 pb-4 mb-4">
            <h2 className="text-2xl font-black tracking-tighter mb-1">THE CLEANER</h2>
            <p className="text-[10px] text-gray-600">귀하의 골칫거리를 위한 토탈 솔루션</p>
            <p className="text-[10px] text-gray-500 mt-2">
              Date: 2025.12.19 03:45 AM <br/>
              Inv #: 9901-X
            </p>
          </div>

          <div className="mb-4 text-xs">
            <div className="flex justify-between">
              <span className="font-bold">의뢰인 (Client):</span>
              <span className="font-mono"><Redacted>Anonymous_V</Redacted></span>
            </div>
            <div className="flex justify-between">
              <span className="font-bold">처리 대상 (Target):</span>
              <span className="font-mono">경쟁 조직 마도사</span>
            </div>
          </div>

          <table className="w-full mb-4 text-[11px]">
            <thead className="border-b border-black">
              <tr>
                <th className="text-left py-1">항목 (Item)</th>
                <th className="text-right py-1">금액 (C)</th>
              </tr>
            </thead>
            <tbody className="leading-5">
              <tr>
                <td className="py-1">장애물 제거 (B등급)</td>
                <td className="text-right">3,000,000</td>
              </tr>
              <tr>
                <td className="py-1 text-gray-600 pl-2">- 위험 수당 (마법 저항 개체)</td>
                <td className="text-right">1,000,000</td>
              </tr>
              <tr>
                <td className="py-1 text-gray-600 pl-2">- 야간 작전 할증</td>
                <td className="text-right">500,000</td>
              </tr>
              <tr className="font-bold text-blue-800">
                <td className="py-1">옵션: 완전 소각 (Clean Burn)</td>
                <td className="text-right">500,000</td>
              </tr>
              <tr>
                <td className="py-1 text-gray-500 italic pl-2">
                  * 사후 잔해 처리 포함
                </td>
                <td className="text-right">-</td>
              </tr>
            </tbody>
          </table>

          <div className="border-t-2 border-black pt-2 mb-6">
            <div className="flex justify-between font-bold text-lg">
              <span>청구 금액 (TOTAL)</span>
              <span><Typewriter text="5,000,000 C" delay={500} /></span>
            </div>
            <div className="text-[9px] text-center text-gray-500 mt-1">
              (세금 포함 / 환불 불가 / 시체 보관 안 함)
            </div>
          </div>

          <div className="relative h-20">
            <div className="absolute top-2 left-2 font-handwriting text-blue-900 text-lg -rotate-6 opacity-80">
              Ray.
            </div>
            <div className="absolute top-0 right-0 border-4 border-red-600 text-red-600 p-2 font-black text-xl rounded-sm transform -rotate-12 opacity-0 animate-stampScale fill-mode-forwards" style={{ animationDelay: '1.5s' }}>
              PAID IN FULL
            </div>
          </div>

          <p className="text-[9px] text-center text-gray-400 mt-4 border-t border-dashed border-gray-300 pt-2">
            "우리는 쓰레기를 처리합니다. 당신의 손을 더럽히지 마세요."
            <br/> 문의: R-Link (암호화 채널)
          </p>
        </div>
      </div>
    );
  }

  // 2. [CON_SEHR] 세르의 노예 계약서
  if (id === "CON_SEHR") {
    return (
      <div className="flex flex-col gap-6 animate-fadeIn max-w-2xl mx-auto pb-10 font-serif text-sm">
        
        {/* 계약서 컨테이너 */}
        <div className="bg-[#fdfbf7] text-gray-900 p-8 md:p-12 shadow-xl border border-gray-300 relative">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-8 border-gray-200 rounded-full opacity-50 flex items-center justify-center text-gray-200 font-black text-4xl rotate-45 pointer-events-none">
            OFFICIAL
          </div>

          <div className="absolute -top-4 -right-4 w-24 h-24 transform rotate-12 shadow-lg border-2 border-white">
             <Image 
               src="/archive/receipt_evidence.png" 
               alt="Physical Evidence" 
               fill 
               className="object-cover"
             />
          </div>

          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold border-b-2 border-black inline-block pb-1 mb-2">경호 용역 표준 계약서</h1>
            <p className="text-xs text-gray-500 font-sans">Contract No. S-2025-8821</p>
          </div>

          <div className="mb-6 space-y-2 text-sm bg-gray-100 p-4 border border-gray-300">
            <p><strong>제공자 (이하 '갑'):</strong> 세르 (Sehr) / A급 용병</p>
            {/* [수정됨] 실제 이름 적용 */}
            <p><strong>의뢰인 (이하 '을'):</strong> <span className="font-mono bg-black text-white px-1">루아</span></p>
            <p><strong>계약 일자:</strong> 2025.12.21</p>
          </div>

          <div className="space-y-6 text-justify text-xs md:text-sm leading-relaxed">
            <div>
              <h3 className="font-bold mb-1">제1조 (목적)</h3>
              <p>
                본 계약은 '갑'이 '을'의 <span className="text-red-600 font-bold">D급 균열 탐사</span> 기간 동안 신변 보호 및 전투 지원 용역을 제공함에 있어 필요한 제반 사항을 규정함을 목적으로 한다.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-1">제5조 (대금 지급)</h3>
              <p>
                '을'은 '갑'에게 총 <span className="font-bold">2,000,000 크레딧</span>을 지급한다. 
                착수금 10%는 선지급하며, 잔금은 계약 종료(균열 탈출) 후 3일 이내에 전액 지급한다.
              </p>
            </div>

            {/* [수정됨] 중요 라벨 삭제, 빨간 박스 유지 */}
            <div className="border-2 border-red-500 p-4 bg-red-50/50">
              <h3 className="font-bold text-red-700 mb-1">제14조 (채무 불이행 및 신체 포기 각서)</h3>
              <p className="font-semibold text-gray-800">
                '을'이 정해진 기한(72시간) 내 잔금을 지급하지 못할 시, 채무 불이행으로 간주하며,
                <span className="bg-yellow-200 px-1">'갑'은 '을'의 생체 및 마법 자산에 대한 일체의 법적 처분 권한을 갖는다.</span>
              </p>
              <ul className="list-disc pl-5 mt-2 text-[11px] text-gray-600">
                <li>14-1항: 처분 권한에는 에테르 회로 추출, 주요 장기 적출, 잔여 수명 회수가 포함된다.</li>
                <li>14-2항: '을'은 채무 불이행 시점부터 신체에 대한 어떠한 권리도 주장할 수 없다.</li>
              </ul>
            </div>
          </div>

          {/* 서명란 */}
          <div className="mt-12 flex justify-between items-end">
            <div className="text-center">
              {/* 세르의 서명 (SVG: 날카롭고 깔끔함) */}
              <div className="mb-2">
                <svg width="100" height="40" viewBox="0 0 100 40" className="opacity-80">
                  <path d="M10,30 L30,10 L40,35 L60,5 L90,20" fill="none" stroke="darkblue" strokeWidth="2" strokeLinecap="round" />
                  <path d="M15,25 L85,25" fill="none" stroke="darkblue" strokeWidth="1" />
                </svg>
              </div>
              <div className="border-t border-black w-32 pt-1 text-xs">서명 (갑)</div>
            </div>

            <div className="text-center relative">
              {/* [수정됨] 의뢰인의 서명 (SVG: 공포에 질려 극도로 떨림) */}
              <div className="mb-2 relative">
                <svg width="100" height="40" viewBox="0 0 100 40" className="opacity-70">
                  {/* 떨리는 선 표현 */}
                  <path 
                    d="M10,20 Q15,22 20,18 T30,22 T40,18 T50,22 T60,18 T70,22" 
                    fill="none" 
                    stroke="gray" 
                    strokeWidth="1.5" 
                    strokeLinecap="round"
                    className="animate-pulse" // 미세하게 깜빡거리는 효과로 불안감 조성
                  />
                  {/* 이름 '김'을 쓰려다 망친 듯한 형상 */}
                  <path 
                    d="M20,10 C20,15 18,25 18,30 M15,15 L35,15"
                    fill="none"
                    stroke="gray"
                    strokeWidth="1.5"
                  />
                </svg>
                {/* 지장/혈흔 */}
                <div className="absolute top-0 right-2 w-8 h-8 rounded-full bg-red-700/60 blur-[2px] pointer-events-none mix-blend-multiply"></div>
              </div>
              <div className="border-t border-black w-32 pt-1 text-xs">서명/지장 (을)</div>
            </div>
          </div>

          <div className="mt-8 text-[9px] text-center text-gray-400 font-sans">
            Verified by Marchen Notary System (Hash: 8f2a...)
          </div>

        </div>
      </div>
    );
  }

  return <div className="text-gray-500 p-4 text-center animate-pulse font-mono">Deciphering Financial Data...</div>;
}