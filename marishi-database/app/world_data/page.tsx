"use client";

import Link from "next/link";
import Image from "next/image";

export default function WorldPage() {
  return (
    <main className="min-h-screen bg-black text-gray-300 font-mono relative overflow-hidden selection:bg-green-900 selection:text-white p-4 md:p-8">
      
      {/* 0. 배경 CRT 효과 */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-50 bg-[length:100%_2px,3px_100%] opacity-20"></div>

      {/* 1. 헤더 */}
      <header className="relative z-10 mb-12 border-b border-gray-800 pb-4 animate-fadeIn">
         <div className="flex justify-between items-end mb-4">
            <Link href="/" className="inline-block px-4 py-2 border border-gray-600 hover:bg-gray-800 transition-colors text-xs font-bold text-gray-400">
                ← BACK_TO_ROOT
            </Link>
            <span className="text-[10px] text-green-500 animate-pulse">● SYSTEM ONLINE</span>
         </div>
         <div className="text-4xl font-black text-white mb-2 tracking-tighter">
            📂 WORLD_ARCHIVE: <span className="text-green-500">CITY_DB</span>
         </div>
         <p className="text-[10px] text-gray-500 flex gap-4">
            <span>ACCESS LEVEL: ADMINISTRATOR</span>
            <span>LAST UPDATE: 2025.12.22</span>
            <span>ENCRYPTION: AES-256</span>
         </p>
      </header>

      {/* 2. 메인 컨텐츠 영역 */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-20 pb-20">

        {/* [SECTION 1] CITY_LOG (도시 설정) */}
        <section className="animate-fadeIn" style={{ animationDelay: "0.1s" }}>
          <div className="flex items-center gap-3 mb-6 border-b border-blue-900/50 pb-2">
            <span className="text-3xl">🏙️</span>
            <div>
                <h2 className="text-xl font-bold text-blue-400 tracking-wide">CITY_LOG: MARISHI</h2>
                <p className="text-[10px] text-blue-600">The City of False Light</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* 이미지 영역 */}
            <div className="relative aspect-video border-2 border-blue-900/50 bg-blue-950/20 overflow-hidden group">
                {/* [이미지 가이드] 마리시 전경 이미지 (public/world/city_landscape.png) */}
                <Image 
                    src="/world/city_landscape.png" 
                    alt="Marishi City Landscape" 
                    fill 
                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
                <div className="absolute bottom-2 left-2 text-[10px] bg-black/80 px-2 py-1 text-blue-300">
                    FIG 1.1: Sector 1 (Elysium) Skyline
                </div>
            </div>

            {/* 텍스트 영역 */}
            <div className="bg-blue-950/10 border-l-4 border-blue-600 p-6 space-y-6">
                <blockquote className="text-sm italic text-blue-200/70 border-l-2 border-blue-800 pl-4">
                &quot;이 도시는 거대한 무덤 위에 세워진 네온 사원입니다. 빛이 밝을수록 그림자는 더욱 짙어집니다.&quot;
                </blockquote>

                <div className="space-y-4 text-xs">
                    <div>
                        <h3 className="text-blue-300 font-bold border-b border-blue-900/50 pb-1 mb-1">🌍 Environmental Status</h3>
                        <ul className="list-disc pl-4 space-y-1 opacity-80">
                            <li><strong>에테르 농도:</strong> 1구역(98% - 청정), 9구역(12% - 호흡 곤란)</li>
                            <li><strong>기상 이변:</strong> 주기적인 <span className="text-purple-400">마력 폭풍(Ether Storm)</span> 발생. 노출 시 일반인은 환각 증세, 마도사는 마모 가속화.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-blue-300 font-bold border-b border-blue-900/50 pb-1 mb-1">🚫 Protocol: The Veil (인지 필터)</h3>
                        <p className="opacity-80 leading-relaxed">
                            도시 전체를 감싸는 거대한 인식 저해 결계. 시민들은 마법 전투를 자연재해나 테러로 인식합니다.
                            <br/><span className="text-blue-500 text-[10px]">* 경고: 필터 오작동 구역(9구역) 진입 시 정신 오염 주의.</span>
                        </p>
                    </div>
                </div>
            </div>
          </div>

          {/* 구역 상세 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
             <div className="border border-blue-800/30 bg-black/40 p-4 hover:border-blue-500 transition-colors">
                <h4 className="text-blue-400 font-bold mb-2">Sector 1: Elysium</h4>
                <p className="text-[10px] opacity-70">오라토리오 본부. 인공 에테르 펌프 가동. 부유층 거주지.</p>
             </div>
             <div className="border border-blue-800/30 bg-black/40 p-4 hover:border-blue-500 transition-colors">
                <h4 className="text-gray-400 font-bold mb-2">Sector 3~7: Grey Zone</h4>
                <p className="text-[10px] opacity-70">일반 거주구. 베르사유의 밤 사냥터. 가장 평범해 보이지만 가장 위험한 곳.</p>
             </div>
             <div className="border border-blue-800/30 bg-black/40 p-4 hover:border-blue-500 transition-colors">
                <h4 className="text-red-400 font-bold mb-2">Sector 9: The Dump</h4>
                <p className="text-[10px] opacity-70">메르헨 상회 근거지. 치외법권 슬럼가. 하수도에 시체 유기 빈번.</p>
             </div>
          </div>
        </section>


        {/* [SECTION 2] PATHOLOGY (병리학) */}
        <section className="animate-fadeIn" style={{ animationDelay: "0.3s" }}>
          <div className="flex items-center gap-3 mb-6 border-b border-red-900/50 pb-2">
            <span className="text-3xl">🧬</span>
            <div>
                <h2 className="text-lg font-bold text-red-400 tracking-wide">PATHOLOGY: EROSION</h2>
                <p className="text-[10px] text-red-600">The Cost of Miracles</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
             {/* 텍스트 설명 */}
             <div className="flex-1 bg-red-950/10 border-l-4 border-red-600 p-6">
                <blockquote className="text-sm italic text-red-200/70 border-l-2 border-red-800 pl-4 mb-6">
                &quot;마법은 영혼을 태우는 등가교환입니다. 당신의 기억, 감정, 인간성을 연료로 현실을 비틉니다.&quot;
                </blockquote>

                <div className="space-y-6 text-xs">
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-red-400 font-bold">Stage 1: Sensory Decay</h3>
                            <span className="text-[9px] border border-red-800 px-1 text-red-500">WARNING</span>
                        </div>
                        <p className="opacity-80 mb-2">감각 기관의 오작동. 색맹, 미각 상실, 이명 등.</p>
                        <p className="text-[10px] text-gray-500 bg-black/50 p-2">
                            <strong>[Ray]:</strong> 완전 색맹(Achromatopsia). 피와 불꽃만 식별 가능.<br/>
                            <strong>[Ruby]:</strong> 청각 과민. 일상 소음을 고통으로 인지.
                        </p>
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-red-400 font-bold">Stage 2: Whiteout (백지화)</h3>
                            <span className="text-[9px] border border-red-800 px-1 text-red-500">CRITICAL</span>
                        </div>
                        <p className="opacity-80 mb-2">기억 소실. 자기 이름이나 가족의 얼굴을 잊어버림.</p>
                        <p className="text-[10px] text-gray-500 bg-black/50 p-2">
                            <strong>[Airi]:</strong> 가족에 대한 기억 전면 소실. 공허함을 채우기 위해 인기에 집착.
                        </p>
                    </div>

                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-red-400 font-bold">Stage 3: The Fall (타락)</h3>
                            <span className="text-[9px] bg-red-900 text-white px-1 font-bold animate-pulse">FATAL</span>
                        </div>
                        <p className="opacity-80">
                            영혼 완전 연소. 인간성 상실 후 <span className="text-red-500 font-bold">&apos;타락체(괴물)&apos;</span>로 변이.
                            오라토리오 규정상 즉시 사살 대상.
                        </p>
                    </div>
                </div>
             </div>

             {/* 이미지/차트 영역 */}
             <div className="w-full md:w-1/3 flex flex-col gap-4">
                <div className="relative aspect-[3/4] border-2 border-red-900/50 bg-red-950/20 overflow-hidden">
                    {/* [이미지 가이드] 신체 스캔/뇌 스캔 이미지 (public/world/erosion_scan.png) */}
                    <Image 
                        src="/world/erosion_scan.png" 
                        alt="Brain Scan Erosion" 
                        fill 
                        className="object-cover opacity-70 hover:scale-105 transition-transform duration-700 contrast-125"
                    />
                    <div className="absolute top-2 right-2 text-right">
                        <span className="text-[9px] text-red-500 font-bold block animate-pulse">CORRUPTION: 78%</span>
                        <span className="text-[9px] text-red-800 block">Subject: UNKNOWN</span>
                    </div>
                </div>
                
                {/* 치료법(사실상 없음) */}
                <div className="border border-red-900 bg-black/60 p-3 text-[10px]">
                    <h4 className="text-red-500 font-bold mb-1">💊 Palliative Care</h4>
                    <ul className="list-disc pl-3 text-gray-400">
                        <li>고농도 에테르 흡입 (일시적)</li>
                        <li>기억 데이터 백업 (불완전)</li>
                        <li><span className="text-red-400 underline">타인의 영혼 섭취 (금지됨)</span></li>
                    </ul>
                </div>
             </div>
          </div>
        </section>


        {/* [SECTION 3] ECONOMY (경제) */}
        <section className="animate-fadeIn" style={{ animationDelay: "0.5s" }}>
          <div className="flex items-center gap-3 mb-6 border-b border-yellow-800/50 pb-2">
            <span className="text-3xl">💎</span>
            <div>
                <h2 className="text-lg font-bold text-yellow-500 tracking-wide">ECONOMY: SURVIVAL</h2>
                <p className="text-[10px] text-yellow-700">Blood Money & Ether</p>
            </div>
          </div>

          <div className="bg-yellow-950/10 border-l-4 border-yellow-600 p-6 hover:bg-yellow-900/10 transition-colors">
            
            {/* 상단: 에테르 결정 정보 */}
            <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="relative w-32 h-32 flex-shrink-0 border border-yellow-700 bg-black/50 overflow-hidden"> {/* overflow-hidden 추가 */}
                    {/* [이미지 가이드] 에테르 결정 이미지 (public/world/crystal.png) */}
                    {/* 수정됨: object-cover로 변경하여 꽉 채움 */}
                    <Image 
                        src="/world/crystal.png" 
                        alt="Ether Crystal" 
                        fill 
                        className="object-cover contrast-125 hover:scale-110 transition-transform duration-700" 
                    />
                </div>
                <div className="flex-1">
                    <h3 className="text-yellow-400 font-bold mb-2 text-lg">에테르 결정 (Ether Crystal)</h3>
                    <p className="text-xs opacity-80 mb-3 leading-relaxed">
                        마도사의 생명줄이자 고액 화폐. 마법 사용으로 인한 마모를 억제하는 유일한 수단입니다.
                        순도에 따라 가격이 천차만별이며, 주로 <span className="text-red-400">타락체의 심장</span>에서 채취합니다.
                    </p>
                    <div className="flex gap-4 text-[10px]">
                        <span className="bg-yellow-900/30 text-yellow-200 px-2 py-1 border border-yellow-800">환율: 1g ≈ 1,000만 C</span>
                        <span className="bg-red-900/30 text-red-200 px-2 py-1 border border-red-800">불법 거래: 사형</span>
                    </div>
                </div>
            </div>

            {/* 하단: 암시장 시세표 & 딜레마 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                {/* 시세표 */}
                <div className="border border-yellow-900/30 bg-black/20 p-4">
                    <h4 className="text-yellow-600 font-bold mb-3 border-b border-yellow-900 pb-1 flex justify-between">
                        <span>BLACK MARKET TICKER</span>
                        <span className="animate-pulse text-red-500">LIVE</span>
                    </h4>
                    <ul className="space-y-2 font-mono text-[10px] text-gray-400">
                        <li className="flex justify-between">
                            <span>Raw Crystal (D-Class)</span>
                            <span className="text-green-400">▲ 250,000 C</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Refined Ether (Ampoule)</span>
                            <span className="text-red-400">▼ 1,200,000 C</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Illegal Magic Tool</span>
                            <span className="text-green-400">▲ 5,000,000 C</span>
                        </li>
                        <li className="flex justify-between">
                            <span>Human Soul (Fragment)</span>
                            <span className="text-yellow-500">- PRICELESS -</span>
                        </li>
                    </ul>
                </div>

                {/* 피카레스크 설명 */}
                <div className="border border-yellow-900/30 bg-black/20 p-4">
                    <h4 className="text-red-400 font-bold mb-3 border-b border-red-900/30 pb-1">MORAL DILEMMA</h4>
                    <p className="opacity-80 mb-3 leading-relaxed">
                        생존을 위해 동료의 등을 처야 하는 상황이 강요됩니다. 마력이 고갈되면 <span className="text-red-500 font-bold">기아(Mana Hunger)</span> 상태에 빠지며 이성이 마비됩니다.
                    </p>
                    <ul className="space-y-1 text-[10px] text-gray-500">
                        <li>• <strong>[Cyan]:</strong> 생존을 위해 타인의 결정을 약탈.</li>
                        <li>• <strong>[Versailles]:</strong> 수명 연장을 위해 <span className="text-red-500 underline">식인(Cannibalism)</span>을 자행.</li>
                    </ul>
                </div>
            </div>
          </div>
        </section>


        {/* [SECTION 4] FACTIONS (세력) */}
        <section className="animate-fadeIn" style={{ animationDelay: "0.7s" }}>
          <div className="flex items-center gap-3 mb-6 border-b border-purple-800/50 pb-2">
            <span className="text-3xl">⚖️</span>
            <div>
                <h2 className="text-lg font-bold text-purple-400 tracking-wide">FACTIONS: POWER_MAP</h2>
                <p className="text-[10px] text-purple-600">Control, Pleasure, Information</p>
            </div>
          </div>

          <div className="relative min-h-[300px] border border-purple-900/50 bg-[#0a0510] p-6 overflow-hidden"> {/* overflow-hidden 추가 */}
             {/* [이미지 가이드] 세력 지도 이미지 (public/world/faction_map.png) */}
             {/* 수정됨: 위치와 크기 조정하여 삐져나오지 않도록 함 */}
             <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none hidden md:block">
                <Image 
                    src="/world/faction_map.png" 
                    alt="Faction Territory Map" 
                    fill 
                    className="object-cover object-center mix-blend-lighten"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0a0510]/80 to-[#0a0510]"></div>
             </div>

             <div className="space-y-6 w-full md:w-2/3 relative z-10">
                {/* 오라토리오 */}
                <div className="group border-l-4 border-purple-500 pl-4 py-1 hover:bg-purple-900/10 transition-colors cursor-default">
                    <h3 className="text-purple-300 font-bold text-sm">오라토리오 (Oratorio)</h3>
                    <p className="text-[10px] text-gray-500 mb-1">TYPE: GOVERNMENT / MILITARY</p>
                    <p className="text-xs opacity-80 mb-1">
                        도시 수호를 명분으로 한 전체주의 군대. 성능 미달 대원은 <strong className="text-red-400">&apos;졸업(폐기)&apos;</strong>시킨다.
                    </p>
                    <p className="text-[10px] text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        &gt; Leader: Airi (Administrator)
                    </p>
                </div>

                {/* 베르사유 */}
                <div className="group border-l-4 border-red-700 pl-4 py-1 hover:bg-red-900/10 transition-colors cursor-default">
                    <h3 className="text-red-400 font-bold text-sm">베르사유 (Versailles)</h3>
                    <p className="text-[10px] text-gray-500 mb-1">TYPE: MAFIA / CULT</p>
                    <p className="text-xs opacity-80 mb-1">
                        쾌락 추구 및 탐미주의 집단. 살인을 예술로 소비하며 마도사의 심장을 별미로 취급한다.
                    </p>
                    <p className="text-[10px] text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        &gt; Leader: Scarlet (The Queen)
                    </p>
                </div>

                {/* 메르헨 상회 */}
                <div className="group border-l-4 border-indigo-500 pl-4 py-1 hover:bg-indigo-900/10 transition-colors cursor-default">
                    <h3 className="text-indigo-400 font-bold text-sm">메르헨 상회 (Marchen Guild)</h3>
                    <p className="text-[10px] text-gray-500 mb-1">TYPE: DARK WEB / MERCENARY</p>
                    <p className="text-xs opacity-80 mb-1">
                        정보 독점 및 불법 의뢰 수행. 돈과 영혼만 지불하면 살인, 해킹, 납치 등 무엇이든 수행한다.
                    </p>
                    <p className="text-[10px] text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        &gt; Admin: Momo (Root User)
                    </p>
                </div>
             </div>
          </div>
        </section>

      </div>
    </main>
  );
}