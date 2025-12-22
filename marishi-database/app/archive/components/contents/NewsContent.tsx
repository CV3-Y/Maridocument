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
// [Helper] 검열 삭제(Redacted) 컴포넌트
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
        {/* [LAYER 1] 공식 보도 */}
        <div className="bg-[#f4f4f4] text-black p-6 md:p-8 shadow-[0_5px_15px_rgba(0,0,0,0.5)] relative transform transition-transform duration-700 hover:scale-[1.01]">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-multiply"></div>
          <div className="border-b-4 border-black pb-4 mb-6 flex justify-between items-end relative z-10">
            <h1 className="text-4xl md:text-5xl font-black font-serif italic tracking-tighter">MARISHI DAILY</h1>
            <div className="text-right font-sans text-xs font-bold text-gray-600">
              <p>2025.04.01 | Vol. 4022</p>
              <p className="text-red-600">Special Edition</p>
            </div>
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight font-serif">
              제12회 벚꽃 축제 개막... <br/>
              오라토리오 아이돌 &apos;밀리아&apos;, 시민과 함께한다
            </h2>
            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-6 font-bold border-b border-gray-400 pb-4">
              <span className="whitespace-nowrap">문화부 | 이서연 기자</span>
              <span className="text-gray-400 font-normal text-xs md:text-sm break-all">(sylee@marishi.com)</span>
            </div>
          </div>
          <div className="relative w-full aspect-video mb-6 border border-gray-400 bg-gray-300 overflow-hidden group z-10">
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

        {/* [LAYER 2] 진실 */}
        <div className="relative mt-4 group">
          <div className="absolute -top-10 left-1/2 w-0.5 h-10 bg-red-600/50 animate-pulse"></div>
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black border border-red-600 text-[9px] text-red-500 px-2 py-0.5 animate-bounce">
            ▼ DECRYPTED DATA ATTACHED
          </div>
          <div className="bg-[#0a0000] border-l-4 border-red-600 p-6 font-mono text-gray-400 shadow-[0_0_30px_rgba(220,38,38,0.15)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] pointer-events-none opacity-20"></div>
            <div className="flex justify-between items-center mb-6 border-b border-red-900/50 pb-2 relative z-10">
              <div className="flex items-center gap-2">
                <span className="text-2xl animate-pulse">⚠</span>
                <span className="text-red-500 font-bold text-lg tracking-widest">CLASSIFIED: OPERATION ORDER</span>
              </div>
              <span className="text-[10px] bg-red-950 text-red-400 px-2 py-1 border border-red-800">Lv.4 Clearance Required</span>
            </div>
            <div className="bg-red-950/10 p-3 mb-6 border border-red-900/30 relative z-10">
              <table className="w-full text-xs opacity-90">
                <tbody>
                  <tr><td className="w-24 text-red-700 py-1 font-bold">OPERATION:</td><td className="text-red-300 font-bold"><Typewriter text="Blossom Trap (꽃의 덫)" delay={500} /></td></tr>
                  <tr><td className="text-red-700 py-1 font-bold">TARGET:</td><td><Typewriter text="Class-B Rift Entities (Swarm Type)" delay={1500} /></td></tr>
                  <tr><td className="text-red-700 py-1 font-bold">EXECUTOR:</td><td>Vanguard <strong>Milia</strong></td></tr>
                </tbody>
              </table>
            </div>
            <div className="space-y-4 text-xs leading-relaxed relative z-10">
              <div className="border-l-2 border-red-800 pl-3">
                <p className="text-red-500 font-bold mb-1">[1. 작전 개요]</p>
                <p>축제 장소 지하 200m 지점에서 대규모 균열 징후가 포착됨. 균열 억제보다 <span className="underline decoration-red-600 decoration-wavy">지상 개방 후 섬멸</span>이 효율적이라 판단함.</p>
              </div>
              <div className="border-l-2 border-red-800 pl-3">
                <p className="text-red-500 font-bold mb-1">[2. 미끼 (Bait)]</p>
                <p>예상 관객 <strong>30,000명의 생체 에너지</strong>를 미끼로 사용하여 타락체들을 지상으로 유인함. <br/>* &apos;안전 결계&apos;의 실제 용도는 시민 보호가 아닌 <Redacted>타락체의 도주를 막기 위한 가두리 양식장</Redacted>임.</p>
              </div>
              <div className="border-l-2 border-red-800 pl-3">
                <p className="text-red-500 font-bold mb-1">[3. 은폐 공작]</p>
                <p>전투 소음은 &apos;불꽃놀이&apos; 폭죽 소리로 위장함. <br/>밀리아 대원의 전투 행위(신체 절단 등)가 목격될 경우, 해당 구역에 살포된 나노 머신을 통해 <Redacted>민간인 집단 기억 소거 및 조작</Redacted> 프로토콜 즉시 가동.</p>
              </div>
            </div>
            <div className="mt-8 pt-2 border-t border-red-900/30 text-right relative z-10">
              <span className="text-[10px] text-red-400/60 italic block mb-1">&quot;가장 화려한 축제는 피로 물들 때 완성된다.&quot;</span>
              <span className="text-[10px] text-red-500 font-bold">- Administrator Airi</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. [NEWS_EXPLOSION] 3구역 가스 폭발
  if (id === "NEWS_EXPLOSION") {
    return (
      <div className="flex flex-col gap-12 animate-fadeIn max-w-3xl mx-auto pb-10">
        
        {/* [LAYER 1] 공식 보도 (The Lie) - 인터넷 뉴스 스타일 */}
        <div className="bg-white border border-gray-300 shadow-md relative p-6">
          <div className="flex items-center gap-4 border-b border-black pb-2 mb-4 text-xs font-bold font-sans">
            <span className="text-blue-700">MARISHI NEWS</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600">사회</span>
            <span className="text-gray-600">사건/사고</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-snug font-sans tracking-tight text-[#1a1a1a]">
            3구역 뒷골목 노후 가스관 폭발... <br/>
            인명 피해 &apos;0명&apos;, 천운(天運) 따랐다
          </h2>
          <div className="text-xs text-gray-500 mb-6 flex justify-between items-center border-b border-gray-100 pb-4">
            <div>
                <span className="font-bold text-black mr-2">박시민 기자</span>
                <span>(psm@marishi.com)</span>
            </div>
            <span>입력 2025.12.20 23:45 | 수정 2025.12.21 00:10</span>
          </div>

          <div className="relative w-full aspect-video mb-2 bg-gray-200 border border-gray-300">
             <Image 
               src="/archive/news_explosion.png" 
               alt="Explosion Site" 
               fill 
               className="object-cover hover:contrast-125 transition-all duration-500"
             />
          </div>
          <p className="text-[11px] text-gray-500 border-b border-gray-200 pb-6 mb-6">
            ▲ 어젯밤 폭발 사고로 처참하게 무너진 3구역 폐건물 현장. 폴리스 라인이 설치되어 있다. (사진=소방방재청 제공)
          </p>

          <div className="text-[15px] leading-8 text-[#333] space-y-4 font-sans text-justify">
            <p>
              <span className="text-blue-700 font-bold text-lg mr-1">어젯밤 11시경,</span>
              마리시 3구역 빈민가 인근의 한 폐건물에서 굉음과 함께 건물이 붕괴되는 사고가 발생했다.
              반경 500m 이내의 창문이 깨질 정도로 강력한 폭발이었으나, 다행히 거주자가 없는 구역이라 공식적인 인명 피해는 없는 것으로 확인됐다.
            </p>
            <p>
              소방 당국 관계자는 &quot;노후화된 지하 가스 배관에 미세한 균열이 생겨 누출된 가스가 미상의 점화원과 만나 폭발한 것으로 추정된다&quot;며 
              &quot;추가 붕괴 위험은 없으나 안전 점검을 위해 인근 도로를 통제 중&quot;이라고 밝혔다.
            </p>
            <p>
              현장을 목격한 주민 김 모씨(54)는 &quot;갑자기 꽝 하는 소리와 함께 파란 불기둥이 솟았다&quot;며 &quot;평소에도 가스 냄새가 났었는데 결국 터질 게 터진 것 같다&quot;고 불안감을 호소했다.
              시는 이번 사고를 계기로 3구역 일대의 노후 시설물에 대한 긴급 전수 조사에 착수할 방침이다.
            </p>
          </div>
        </div>

        {/* [LAYER 2] 진실 (The Truth) - 현장 처리반 로그 */}
        <div className="relative group mx-1 md:mx-4 mt-4">
          {/* 장식 요소 */}
          <div className="flex justify-between items-end mb-2 opacity-80">
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                <span className="text-[10px] text-green-500 font-mono tracking-widest">ENCRYPTED SIGNAL DETECTED...</span>
             </div>
             <span className="text-[10px] text-green-800 font-mono">FREQ: 104.5 MHz</span>
          </div>

          <div className="bg-black border border-green-800 p-6 font-mono text-green-500/80 text-xs md:text-sm shadow-[0_0_20px_rgba(34,197,94,0.15)] relative overflow-hidden">
            
            {/* 배경 노이즈 & 스캔라인 */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,255,0,0.02)_50%)] bg-[size:100%_4px] pointer-events-none"></div>

            {/* 로그 헤더 */}
            <div className="flex justify-between border-b border-green-900 pb-2 mb-6">
               <span className="font-bold text-green-400">&gt;&gt; INTERCEPTED LOG: CLEANER_UNIT_04</span>
               <span>TIME: 23:58</span>
            </div>

            {/* 로그 본문 */}
            <div className="space-y-6">
               <div>
                 <p className="mb-1"><span className="text-green-300 font-bold mr-2">[REPORT]:</span> 현장 수습 완료. 가스 폭발 위장막 설치 끝났습니다.</p>
                 <p>
                   <span className="text-green-300 font-bold mr-2">[CAUSE]:</span>
                   <span className="text-red-500 font-bold animate-pulse"><Typewriter text=" 베르사유(Medea) 신형 폭탄 실험 실패" delay={500} /></span>
                   <br/><span className="text-[10px] text-gray-500 ml-8">└ (분석) 마력 제어 실패로 인한 연쇄 뇌격(Thunder) 반응 확인됨.</span>
                 </p>
               </div>

               {/* 피해 분석 */}
               <div className="border border-green-900/50 p-4 bg-green-950/20 relative">
                 <p className="mb-3 text-green-300 font-bold border-b border-green-900/30 pb-1 w-fit">DAMAGE ASSESSMENT (REAL):</p>
                 <ul className="list-none space-y-2 text-gray-400 text-[11px]">
                   <li className="flex gap-2">
                     <span className="text-red-500 font-bold">[FATAL]:</span> 
                     <span>민간인 4명 <Redacted>흔적 없이 증발 (Ash)</Redacted></span>
                   </li>
                   <li className="flex gap-2">
                     <span className="text-yellow-500 font-bold">[INJURED]:</span> 
                     <span>2명 <Redacted>에테르 오염 3단계 (회복 불가)</Redacted></span>
                   </li>
                   <li className="flex gap-2">
                     <span className="text-blue-500 font-bold">[WITNESS]:</span> 
                     <span>12명 <span className="text-green-600">→ Memory Wipe (Class-C) Completed.</span></span>
                   </li>
                 </ul>
                 
                 {/* 오디오 파형 효과 */}
                 <div className="absolute top-4 right-4 flex items-end gap-0.5 h-4 opacity-50">
                    <div className="w-0.5 bg-green-500 h-full animate-[bounce_1s_infinite]"></div>
                    <div className="w-0.5 bg-green-500 h-2/3 animate-[bounce_1.2s_infinite]"></div>
                    <div className="w-0.5 bg-green-500 h-full animate-[bounce_0.8s_infinite]"></div>
                    <div className="w-0.5 bg-green-500 h-1/2 animate-[bounce_1.5s_infinite]"></div>
                 </div>
               </div>

               {/* 녹취록 추가 (피카레스크 요소) */}
               <div className="mt-4 pt-4 border-t border-green-900/50">
                 <p className="text-[10px] text-green-700 mb-2">&gt&gt AUDIO TRANSCRIPT (RECOVERED)</p>
                 <div className="space-y-2 text-[11px] italic opacity-80">
                    <p><span className="text-green-600 not-italic">Cleaner:</span> &quot;생존자 발견. 오염도 80%. 살려달라고 애원하는데요?&quot;</p>
                    <p><span className="text-green-400 not-italic">HQ:</span> &quot;병원으로 이송하면 오염 원인이 발각된다. 프로토콜대로 처리해.&quot;</p>
                    <p><span className="text-green-600 not-italic">Cleaner:</span> &quot;...라져. 편하게 보내주겠습니다.&quot;</p>
                    <p className="text-red-500 not-italic font-bold">[SOUND OF SILENCED GUNSHOT]</p>
                 </div>
               </div>

               <p className="border-t border-green-900 pt-4 text-xs">
                 <span className="text-green-300 font-bold mr-2">[NOTE]:</span>
                 현장에 <strong className="text-purple-400">보라색 머리카락</strong>과 깨진 앰플 조각 발견됨. 
                 실험 주체(Medea)가 도주했을 가능성 높음. <span className="animate-blink text-red-500">추적조 파견 요망.</span>
               </p>
            </div>

            <div className="absolute top-2 right-2 border border-green-600 px-1 text-[9px] animate-pulse text-green-500">
               ● REC
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 데이터 로딩 중 (기본값)
  return <div className="text-gray-500 p-4 text-center animate-pulse">데이터를 불러오는 중...</div>;
}