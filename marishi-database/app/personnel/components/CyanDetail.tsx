"use client";
import Image from "next/image";
import ProgressBar from "./ProgressBar";

export default function CyanDetail() {
  return (
    // group 클래스 추가
    <div className="group p-6 border-t border-green-800 bg-black/90 animate-fadeIn text-xs font-mono relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* (좌측) 프로필 및 현상수배 */}
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-4">
          
          {/* 이미지 프레임 (C1.png) */}
          <div className="border border-yellow-600/50 bg-yellow-950/10 p-2 relative aspect-square flex items-center justify-center overflow-hidden z-0">
             
             {/* 1. 캐릭터 이미지 (C1.png) - 수배 전단지 느낌 */}
             <div className="absolute inset-0 z-0 transform scale-110 rotate-[-3deg] transition-transform duration-500 ease-out group-hover:rotate-0 group-hover:scale-105 origin-center shadow-[0_5px_15px_rgba(234,179,8,0.2)] border-2 border-yellow-800/50">
               <Image 
                 src="/C1.png"
                 alt="Cyan Portrait"
                 fill
                 // 시안: 세피아 톤 + 대비 강조
                 className="object-cover object-center opacity-90 sepia-[0.6] contrast-110 brightness-90"
               />
               {/* 낡은 종이 질감 오버레이 */}
               <div className="absolute inset-0 bg-yellow-900/10 mix-blend-multiply"></div>
             </div>

             {/* 2. 노이즈 오버레이 */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-10 pointer-events-none"></div>

             {/* 3. 우측 상태 표시 */}
             <div className="absolute top-3 right-3 z-20 flex flex-col items-end gap-1 pointer-events-none">
                <div className="flex items-center gap-1.5 bg-black/70 backdrop-blur-sm px-2 py-1 border-r-2 border-yellow-500 shadow-md">
                   <span className="text-[9px] font-bold text-yellow-400 tracking-wider">CONN: UNSTABLE</span>
                   <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-ping"></span>
                </div>
                <div className="bg-red-900/80 px-1.5 py-0.5 border border-red-500/50">
                   <span className="text-[8px] font-bold text-red-200 blink">⚠ MANA HUNGER</span>
                </div>
             </div>

             {/* 4. 하단 정보 (Dead or Alive + Bounty) */}
             <div className="absolute bottom-0 left-0 right-0 p-3 z-20 flex flex-col items-center justify-end gap-0.5 pointer-events-none bg-gradient-to-t from-black via-black/80 to-transparent pt-8">
               <span className="text-[9px] text-yellow-200/70 uppercase tracking-[0.2em] font-bold drop-shadow-md">
                 Capture: Dead or Alive
               </span>
               <div className="w-full flex items-center justify-center border-t border-yellow-600/50 mt-1 pt-1">
                 <span className="text-yellow-600 text-[10px] mr-2 font-bold">BOUNTY:</span>
                 <span className="text-xl text-yellow-500 font-black tracking-tighter drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                   15,000,000 C
                 </span>
               </div>
             </div>
          </div>

          <div className="border border-green-800/50 p-3 bg-black/40">
            <h4 className="text-green-500 font-bold mb-2 border-b border-green-900 pb-1">BASIC INFO</h4>
            <ul className="space-y-1.5 opacity-90">
              <li className="flex justify-between"><span className="opacity-50">CODENAME:</span> <span>Red_Fang</span></li>
              <li className="flex justify-between"><span className="opacity-50">AGE:</span> <span>17</span></li>
              <li className="flex justify-between"><span className="opacity-50">CLASS:</span> <span>Marauder (약탈자)</span></li>
              <li className="flex justify-between"><span className="opacity-50">ORIGIN:</span> <span>Slum District 4</span></li>
            </ul>
          </div>

          {/* 소지품 분석 - 확장됨 */}
          <div className="border border-yellow-900/30 p-3 bg-yellow-950/5">
             <h4 className="text-yellow-600 font-bold mb-2 text-[10px]">INVENTORY CHECK</h4>
             <ul className="space-y-2 text-[10px] opacity-80 text-gray-300">
               <li className="flex items-start gap-2">
                 <span className="text-yellow-600 shrink-0">▶</span>
                 <span><b className="text-green-400">낡은 로켓(Locket)</b>: 가족 사진 내장. 분실 시 이성 상실 및 폭주 위험. <span className="text-red-400 font-bold">[약점]</span></span>
               </li>
               <li className="flex items-start gap-2">
                 <span className="text-yellow-600 shrink-0">▶</span>
                 <span><b className="text-green-400">막대사탕 봉지</b>: 저혈당/마력 고갈 방지용 고열량 간식.</span>
               </li>
               <li className="flex items-start gap-2">
                 <span className="text-yellow-600 shrink-0">▶</span>
                 <span><b className="text-gray-500">훔친 지갑들</b>: 생계형 범죄의 흔적. 현금만 빼고 버림.</span>
               </li>
             </ul>
          </div>
        </div>
        
        {/* (우측) 상세 데이터 분석 */}
        <div className="col-span-1 lg:col-span-8 space-y-6">
          
          {/* 1. 신체/전투 능력 */}
          <div className="bg-yellow-950/5 border border-yellow-900/30 p-4">
            <h4 className="text-yellow-500 font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span> 
              PHYSICAL & COMBAT DATA
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                 <ProgressBar label="PHYSICAL REINFORCEMENT (신체 강화)" value={88} type="normal" />
                 <p className="text-[10px] text-green-400 opacity-80 mt-1">
                   * 대검을 한 손으로 휘두르는 괴력. 근접전 위험도 최상.
                 </p>
              </div>
              <div>
                 <ProgressBar label="CALORIC CONSUMPTION (대사량/허기)" value={95} type="inverse" />
                 <p className="text-[10px] text-red-500 opacity-80 mt-1">
                   * 경고: 만성적인 마력 고갈 상태. 항상 섭취(폭식)를 갈망함.
                 </p>
              </div>
              <div>
                 <ProgressBar label="SURVIVAL INSTINCT (생존 본능)" value={99} type="normal" />
                 <p className="text-[10px] text-green-400 opacity-80 mt-1">
                   * 불리하면 즉시 도주하거나 동료를 미끼로 삼음.
                 </p>
              </div>
              <div>
                 <ProgressBar label="LOYALTY (충성도)" value={0} type="inverse" />
                 <p className="text-[10px] text-red-500 opacity-80 mt-1">
                   * 배신 확률 100%. 신뢰 불가.
                 </p>
              </div>
            </div>
          </div>

          {/* 2. 성향 분석 (사회 진화론) - 확장됨 */}
          <div className="border border-green-800/50 p-4">
             <h4 className="text-green-400 font-bold mb-3">BEHAVIORAL ANALYSIS: THE SURVIVOR</h4>
             <div className="space-y-3 opacity-80 leading-relaxed text-green-100 text-[11px]">
                <p>
                  <span className="text-green-500 font-bold">[뒤틀린 신념: 약육강식]</span><br/>
                  빈민가 출신으로 &quot;살아남는 것이 곧 정의&quot;라는 극단적인 생존주의 사상을 가짐. 
                  타인의 호의를 <span className="text-yellow-500">&apos;함정&apos;</span>이나 <span className="text-yellow-500">&apos;나약함&apos;</span>으로 간주하여 경멸함. 
                  하지만 이는 과거 오라토리오에 의해 가족을 잃은 트라우마를 감추기 위한 방어기제로 분석됨.
                </p>
                <p>
                  <span className="text-red-400 font-bold">[자기 모순과 복수심]</span><br/>
                  겉으로는 돈과 힘을 추구하지만, 실제 동기는 <span className="text-red-500 underline">오라토리오에 대한 맹목적 증오</span>임. 
                  아이러니하게도, 힘을 얻기 위해 자신이 그토록 증오하는 &#39;약탈자&#39;가 되어 스스로 괴물로 변해가고 있음.
                </p>
             </div>
          </div>

          {/* 3. 범죄 이력 (Criminal Record) - 추가됨 */}
          <div className="border border-yellow-900/30 bg-[#1a1500] p-4 text-[11px]">
             <h4 className="text-yellow-600 font-bold mb-2">CRIMINAL RECORD HIGHLIGHTS</h4>
             <ul className="list-disc pl-4 space-y-1 text-yellow-100/70">
               <li><span className="text-red-400">특수 절도 및 강도상해</span>: 42건 (주로 마도구 및 에테르 결정 탈취)</li>
               <li><span className="text-red-400">공무 집행 방해</span>: 오라토리오 순찰대 습격 및 무기 탈취 3회.</li>
               <li><span className="text-red-400">불법 시설물 파괴</span>: 빈민가 재개발 구역 사무소 방화(추정).</li>
             </ul>
          </div>

          {/* 4. 감청된 대화 */}
          <div className="bg-black border-l-4 border-yellow-600 p-4 font-mono">
             <p className="text-[10px] text-yellow-600 font-bold mb-1">INTERCEPTED COMMS: ALLEYWAY</p>
             <div className="space-y-2 opacity-90 text-[11px]">
               <p><span className="text-gray-500">[ROOKIE]:</span> &quot;사, 살려주세요! 가진 건 다 드릴게요!&quot;</p>
               <p><span className="text-yellow-500">[CYAN]:</span> &quot;착한 척, 불쌍한 척 하지 마. 역겨우니까.&quot;</p>
               <p><span className="text-yellow-500">[CYAN]:</span> &quot;이 바닥에선 남을 밟고서라도 살아남는 게 정의야. 멍청하게 굴다간 뼈도 못 추려.&quot;</p>
               <p className="pl-4 text-[10px] text-gray-500 italic">* [ACTION]: 상대의 지갑과 에테르 결정을 강탈함.</p>
               <p><span className="text-yellow-500">[CYAN]:</span> &quot;...쳇, 이걸로 사탕값이나 하겠네. 꺼져, 내 마음 바뀌기 전에.&quot;</p>
             </div>
             <div className="border-t border-green-900/50 pt-2 mt-3 text-right">
               <span className="text-yellow-500 font-bold bg-yellow-950/20 px-2 py-1 text-[9px]">
                 NOTE: DID NOT KILL TARGET (UNUSUAL MERCY)
               </span>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}