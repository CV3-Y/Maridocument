"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// ----------------------------------------------------------------------
// [Helper] 타자기 효과 컴포넌트
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
// [Helper] 검열 삭제(Redacted) 컴포넌트 (호버 시 내용 공개)
// ----------------------------------------------------------------------
function Redacted({ children }: { children: React.ReactNode }) {
  return (
    <span className="group relative inline-block cursor-help align-bottom mx-1">
      <span className="absolute inset-0 bg-black group-hover:bg-transparent transition-colors duration-300 z-10"></span>
      <span className="bg-red-900/30 text-red-300 px-1 select-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {children}
      </span>
    </span>
  );
}

// ----------------------------------------------------------------------
// [Main] 뉴스 컨텐츠 컴포넌트
// ----------------------------------------------------------------------
export default function NewsContent({ id }: { id: string }) {
  
  // 1. [NEWS_FESTIVAL] 벚꽃 축제
  if (id === "NEWS_FESTIVAL") {
    return (
      <div className="flex flex-col gap-12 animate-fadeIn max-w-3xl mx-auto pb-10">
        
        {/* ------------------------------------------------------- */}
        {/* [LAYER 1] 공식 보도 (The Lie) - 신문 기사 스타일 */}
        {/* ------------------------------------------------------- */}
        <div className="bg-[#f4f4f4] text-black p-6 md:p-8 shadow-[0_5px_15px_rgba(0,0,0,0.5)] relative transform transition-transform duration-700 hover:scale-[1.01]">
          
          {/* 종이 질감 노이즈 */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-multiply"></div>

          {/* 신문 헤더 */}
          <div className="border-b-4 border-black pb-4 mb-6 flex justify-between items-end relative z-10">
            <h1 className="text-4xl md:text-5xl font-black font-serif italic tracking-tighter">MARISHI DAILY</h1>
            <div className="text-right font-sans text-xs font-bold text-gray-600">
              <p>2025.04.01 | Vol. 4022</p>
              <p className="text-red-600">Special Edition</p>
            </div>
          </div>

          {/* 기사 헤드라인 */}
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight font-serif">
              제12회 벚꽃 축제 개막... <br/>
              오라토리오 아이돌 &apos;밀리아&apos;, 시민과 함께한다
            </h2>
            <p className="text-sm text-gray-500 mb-6 font-bold border-b border-gray-400 pb-4">
              문화부 | 김에테르 기자 (ether_kim@marishi.com)
            </p>
          </div>

          {/* 이미지 영역 */}
          <div className="relative w-full aspect-video mb-6 border border-gray-400 bg-gray-300 overflow-hidden group z-10">
             {/* [이미지 가이드] public/archive/news_festival.png */}
             <Image 
               src="/archive/news_festival.png" 
               alt="Festival Poster" 
               fill 
               className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
             />
             <div className="absolute bottom-0 left-0 bg-black/70 text-white text-[10px] px-3 py-1 backdrop-blur-sm">
               ▲ 지난 축제 당시 시민들에게 인사하는 마법소녀들 (자료사진)
             </div>
          </div>

          {/* 기사 본문 */}
          <div className="columns-1 md:columns-2 gap-8 text-sm leading-relaxed text-justify font-serif space-y-4 relative z-10">
            <p>
              <span className="float-left text-5xl font-black mr-3 leading-none mt-[-5px]">긴</span>
              겨울이 지나고 마리시에도 봄이 찾아왔다. 시청은 오는 주말, 제12회 마리시 벚꽃 축제를 3구역 중앙 공원에서 개최한다고 밝혔다.
            </p>
            <p>
              특히 이번 축제에는 시민들의 사랑을 한 몸에 받고 있는 오라토리오 소속 마법소녀 <strong>&apos;밀리아(Lovely Crusher)&apos;</strong>의 단독 축하 공연이 예정되어 있어 기대를 모으고 있다.
            </p>
            <p>
              시 관계자는 &quot;대규모 인파가 몰릴 것으로 예상됨에 따라, 안전을 위해 오라토리오 1팀이 행사장 외곽 경계를 설 예정&quot;이라며, &quot;시민 여러분은 안심하고 축제를 즐겨달라&quot;고 당부했다.
            </p>
            <p>
              또한, 축제의 피날레를 장식할 불꽃놀이 시간에는 <strong>소음 저감 마법</strong>과 함께 구역 전체에 <strong>안전 결계</strong>가 펼쳐질 예정이다. 이는 단순한 볼거리를 넘어, 시민들의 안전을 최우선으로 생각하는 오라토리오의 기술력을 보여주는 자리가 될 것이다.
            </p>
          </div>
        </div>


        {/* ------------------------------------------------------- */}
        {/* [LAYER 2] 진실 (The Truth) - 작전 지령서 스타일 */}
        {/* ------------------------------------------------------- */}
        <div className="relative mt-4 group">
          {/* 해킹/연결 효과 */}
          <div className="absolute -top-10 left-1/2 w-0.5 h-10 bg-red-600/50 animate-pulse"></div>
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black border border-red-600 text-[9px] text-red-500 px-2 py-0.5 animate-bounce">
            ▼ DECRYPTED DATA ATTACHED
          </div>
          
          <div className="bg-[#0a0000] border-l-4 border-red-600 p-6 font-mono text-gray-400 shadow-[0_0_30px_rgba(220,38,38,0.15)] relative overflow-hidden">
            
            {/* 배경 스캔라인 효과 */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] pointer-events-none opacity-20"></div>

            {/* 헤더 */}
            <div className="flex justify-between items-center mb-6 border-b border-red-900/50 pb-2 relative z-10">
              <div className="flex items-center gap-2">
                <span className="text-2xl animate-pulse">⚠</span>
                <span className="text-red-500 font-bold text-lg tracking-widest">CLASSIFIED: OPERATION ORDER</span>
              </div>
              <span className="text-[10px] bg-red-950 text-red-400 px-2 py-1 border border-red-800">Lv.4 Clearance Required</span>
            </div>

            {/* 테이블 정보 */}
            <div className="bg-red-950/10 p-3 mb-6 border border-red-900/30 relative z-10">
              <table className="w-full text-xs opacity-90">
                <tbody>
                  <tr>
                    <td className="w-24 text-red-700 py-1 font-bold">OPERATION:</td>
                    <td className="text-red-300 font-bold"><Typewriter text="Blossom Trap (꽃의 덫)" delay={500} /></td>
                  </tr>
                  <tr>
                    <td className="text-red-700 py-1 font-bold">TARGET:</td>
                    <td><Typewriter text="Class-B Rift Entities (Swarm Type)" delay={1500} /></td>
                  </tr>
                  <tr>
                    <td className="text-red-700 py-1 font-bold">EXECUTOR:</td>
                    <td>Vanguard <strong>Milia</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 작전 상세 (인터랙션 포함) */}
            <div className="space-y-4 text-xs leading-relaxed relative z-10">
              <div className="border-l-2 border-red-800 pl-3">
                <p className="text-red-500 font-bold mb-1">[1. 작전 개요]</p>
                <p>
                  축제 장소 지하 200m 지점에서 대규모 균열 징후가 포착됨. 
                  균열 억제보다 <span className="underline decoration-red-600 decoration-wavy">지상 개방 후 섬멸</span>이 효율적이라 판단함.
                </p>
              </div>

              <div className="border-l-2 border-red-800 pl-3">
                <p className="text-red-500 font-bold mb-1">[2. 미끼 (Bait)]</p>
                <p>
                  예상 관객 <strong>30,000명의 생체 에너지</strong>를 미끼로 사용하여 타락체들을 지상으로 유인함. <br/>
                  * &apos;안전 결계&apos;의 실제 용도는 시민 보호가 아닌 <Redacted>타락체의 도주를 막기 위한 가두리 양식장</Redacted>임.
                </p>
              </div>

              <div className="border-l-2 border-red-800 pl-3">
                <p className="text-red-500 font-bold mb-1">[3. 은폐 공작]</p>
                <p>
                  전투 소음은 &apos;불꽃놀이&apos; 폭죽 소리로 위장함. <br/>
                  밀리아 대원의 전투 행위(신체 절단 등)가 목격될 경우, 해당 구역에 살포된 나노 머신을 통해 <Redacted>민간인 집단 기억 소거 및 조작</Redacted> 프로토콜 즉시 가동.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-2 border-t border-red-900/30 text-right relative z-10">
              <span className="text-[10px] text-red-400/60 italic block mb-1">
                &quot;가장 화려한 축제는 피로 물들 때 완성된다.&quot;
              </span>
              <span className="text-[10px] text-red-500 font-bold">
                - Administrator Airi
              </span>
            </div>
          </div>
        </div>

      </div>
    );
  }

  // 데이터 로딩 중 (다른 케이스가 아직 구현되지 않았을 때)
  return <div className="text-gray-500 p-4 text-center animate-pulse">데이터를 불러오는 중...</div>;
}