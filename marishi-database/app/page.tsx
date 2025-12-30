"use client"; 

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation"; 
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [inputVal, setInputVal] = useState("");

  // 검색어 감지 로직
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const lowerVal = inputVal.trim().toLowerCase(); // 공백 제거 후 소문자 변환
      
      // 오직 'sera if'일 때만 이동
      if (lowerVal === "sera if") {
        router.push("/archive?trigger=sera_if");
      } 
    }
  };

  // 뉴스 데이터
  const newsItems = [
    "[NEWS] 마리시 3구역 에테르 농도 경보 발령... 시민 대피령 검토 중",
    "[속보] 오라토리오, 신규 마도사 정기 모집 \"당신의 용기가 도시를 지킵니다\"",
    "[사회] 원인 불명의 '기억 소실' 증상 호소 환자 급증... 보건국 조사 착수",
    "[경고] 뒷골목 7번가 C급 타락체 출몰 빈도 상승, 야간 통행 금지 구역 확대",
    "[경제] 정제된 에테르 결정 거래가, 전일 대비 12% 폭등",
    "[문화] 베르사유 연회장 '붉은 장미 축제' 성료... 귀족들의 호평 이어져",
    "[시스템] 메르헨 상회 네트워크 접속 불안정... \"해킹 시도 방어 중\"",
    "[알림] 야간 통행 금지 시간: 22:00 ~ 06:00 (위반 시 즉결 처분 가능)"
  ];

  const tickerText = [...newsItems, ...newsItems].join(" \u00A0\u00A0///\u00A0\u00A0 ");

  return (
    <main className="min-h-screen bg-black text-green-500 font-mono relative overflow-hidden selection:bg-green-900 selection:text-white">
      
      {/* 0. 배경 CRT 효과 */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-50 bg-[length:100%_2px,3px_100%] opacity-20"></div>

      {/* 1. 상단 헤더 영역 */}
      <header className="relative z-10">
        <div className="bg-gradient-to-b from-gray-900 to-black py-4 text-center border-b border-green-900/50 flex flex-col items-center justify-center">
          <div className="relative">
            <Image
              src="/logo.png" 
              alt="Marishi City Logo"
              width={160}
              height={160} 
              className="animate-pulse object-contain" 
              priority
            />
          </div>
          <p className="text-xs md:text-sm text-green-600 tracking-[0.3em] mt-2 uppercase font-bold opacity-80">
            Central Database
          </p>
        </div>

        <nav className="bg-green-950/30 border-b border-green-800 py-1 px-4 md:px-8 flex justify-between items-center text-xs tracking-widest font-bold text-green-400/80 uppercase backdrop-blur-sm">
          <div>M.C.D.B SYSTEM v4.0.2</div>
          <div className="hidden md:block">LOC: MAIN_SERVER_AE4</div>
          <div>CONN: DSC00916</div>
        </nav>
      </header>

      {/* 2. 메인 컨텐츠 */}
      <div className="max-w-4xl mx-auto mt-8 p-4 relative z-10 pb-16">
        <p className="mb-8 text-green-300/80 text-lg">
          <span className="font-bold text-green-500">{">"}</span> 접속 승인. 환영합니다, 관리자님.<br/>
          데이터베이스 접근 로그가 기록되고 있습니다.
        </p>

        {/* 검색창 (수정됨: placeholder 제거) */}
        <div className="w-full border-2 border-green-700 bg-black/80 p-4 mb-12 flex items-center shadow-[0_0_15px_rgba(34,197,94,0.3)] backdrop-blur-md">
          <span className="mr-4 text-green-500 animate-blink text-xl font-black">{">"}</span>
          <input 
            type="text" 
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown} 
            className="bg-transparent border-none outline-none w-full text-lg text-green-100 placeholder-green-800 font-bold"
            autoFocus
          />
        </div>

        {/* 3. 폴더 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FolderCard title="PERSONNEL" desc="마도사 및 주요 인물 프로필" link="/personnel" code="DIR_01" />
          <FolderCard title="WORLD_DATA" desc="도시 설정, 마법 체계, 균열" link="/world_data" code="DIR_02" />
          <FolderCard title="ARCHIVE" desc="주요 사건 사고 및 뉴스 기록" link="/archive" code="DIR_03" />
          <FolderCard title="THREATS" desc="타락체 및 적성 개체 도감" link="/threats" code="DIR_04" isDanger={true} />
        </div>
      </div>

      {/* 4. 하단 뉴스 티커 */}
      <div className="fixed bottom-0 left-0 w-full bg-green-900/40 border-t border-green-800 p-2 overflow-hidden whitespace-nowrap z-20 backdrop-blur-md">
        <div className="animate-marquee inline-block text-sm font-bold text-green-300">
          {tickerText}
        </div>
      </div>
    </main>
  );
}

function FolderCard({ title, desc, link, code, isDanger = false }: any) {
  return (
    <Link href={link} className={`block border p-5 transition-all hover:bg-green-900/20 hover:translate-y-[-2px] hover:shadow-[0_4px_20px_rgba(34,197,94,0.4)] ${isDanger ? 'border-red-800/70 text-red-500 hover:border-red-500 hover:shadow-[0_4px_20px_rgba(220,38,38,0.4)]' : 'border-green-800/70 bg-black/60 backdrop-blur-sm'}`}>
      <div className="flex justify-between items-start mb-2 opacity-70">
        <span className="text-xs">[{code}]</span>
        {isDanger && <span className="text-xs border border-red-600 px-1 animate-pulse">RESTRICTED</span>}
      </div>
      <h2 className="text-xl font-bold mb-1 tracking-wider">📁 {title}</h2>
      <p className={`text-xs ${isDanger ? 'text-red-400/70' : 'text-green-400/70'}`}>{desc}</p>
    </Link>
  );
}