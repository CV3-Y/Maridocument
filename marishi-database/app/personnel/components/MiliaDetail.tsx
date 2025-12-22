"use client";
import Image from "next/image";
import ProgressBar from "./ProgressBar";

export default function MiliaDetail() {
  return (
    // group 클래스 추가
    <div className="group p-6 border-t border-pink-500 bg-gray-950 animate-fadeIn text-xs font-mono relative overflow-hidden">
      
      {/* 배경 장식: 깨진 하트 워터마크 */}
      <div className="absolute top-10 right-10 opacity-[0.05] pointer-events-none rotate-[15deg]">
        <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor" className="text-pink-600">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        {/* 하트 위에 X 표시 */}
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-2 bg-black rotate-45 absolute"></div>
            <div className="w-full h-2 bg-black -rotate-45 absolute"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* (좌측) 프로필: 아이돌 vs 전투광 */}
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-4">
          
          {/* 이미지 프레임 (H1.png) */}
          <div className="border-2 border-pink-500 bg-pink-900/10 p-2 relative aspect-square flex items-center justify-center overflow-hidden z-0">
             
             {/* 1. 캐릭터 이미지 (H1.png) - 상호작용 회전 */}
             <div className="absolute inset-0 z-0 transform scale-110 rotate-[-2deg] transition-transform duration-500 ease-out group-hover:rotate-0 group-hover:scale-105 origin-center shadow-[0_5px_15px_rgba(236,72,153,0.3)] border border-pink-400/50">
               <Image 
                 src="/H1.png"
                 alt="Milia Portrait"
                 fill
                 // 밀리아: 쨍한 핑크톤 + 과한 대비 (인위적인 느낌)
                 className="object-cover object-center opacity-90 contrast-125 saturate-150 brightness-105"
               />
               {/* 글리치 오버레이 */}
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-color-dodge"></div>
             </div>

             {/* 2. 상태 표시 (방송 중) */}
             <div className="absolute top-2 left-2 z-20 pointer-events-none flex gap-2">
               <span className="text-[9px] text-white font-bold bg-red-600 px-2 py-1 animate-pulse border border-red-400 shadow-md">
                 ● ON AIR
               </span>
             </div>
             
             {/* 3. 하단 경고 */}
             <div className="absolute bottom-3 right-0 left-0 text-center z-20 pointer-events-none">
               <div className="inline-block bg-black/80 px-2 py-1 border-y border-pink-500 transform -rotate-2">
                 <span className="text-[10px] text-pink-300 font-bold block">
                   WARNING: UNSTABLE PERSONA
                 </span>
               </div>
             </div>
          </div>

          <div className="border border-pink-500/50 p-3 bg-black/40">
            <h4 className="text-pink-400 font-bold mb-2 border-b border-pink-900 pb-1">BASIC INFO</h4>
            <ul className="space-y-1.5 opacity-90">
              <li className="flex justify-between"><span className="opacity-50">CODENAME:</span> <span>Lovely_Crusher</span></li>
              <li className="flex justify-between"><span className="opacity-50">AGE:</span> <span>17</span></li>
              <li className="flex justify-between"><span className="opacity-50">CLASS:</span> <span>Vanguard (돌격)</span></li>
              <li className="flex justify-between"><span className="opacity-50">STATUS:</span> <span className="text-red-400 font-bold blink">BROADCAST ERROR</span></li>
            </ul>
          </div>

          {/* 소지품 분석 (이중생활) - 확장됨 */}
          <div className="border border-green-800/30 p-3 bg-green-900/5">
             <h4 className="text-green-600 font-bold mb-2 text-[10px]">SECRET POCKET SCAN</h4>
             <ul className="space-y-2 text-[10px] opacity-80">
               <li className="flex items-start gap-2">
                 <span className="text-pink-500 shrink-0">♥</span>
                 <span><b className="text-pink-400">마법 스태프</b>: 끝부분이 찌그러지고 혈흔이 묻어있음. (둔기로 사용)</span>
               </li>
               <li className="flex items-start gap-2">
                 <span className="text-pink-500 shrink-0">♥</span>
                 <span><b className="text-gray-500">담배갑</b>: 아이돌 의상 안주머니에 은닉. 들키면 경위서.</span>
               </li>
               <li className="flex items-start gap-2">
                 <span className="text-pink-500 shrink-0">♥</span>
                 <span><b className="text-pink-400">깨진 손거울</b>: 수시로 표정 관리용(연기) 체크.</span>
               </li>
             </ul>
          </div>
        </div>
        
        {/* (우측) 상세 데이터 분석 */}
        <div className="col-span-1 lg:col-span-8 space-y-6">
          
          {/* 1. 능력치 (분노조절장애) */}
          <div className="bg-pink-950/10 border border-pink-900/30 p-4">
            <h4 className="text-pink-500 font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce"></span> 
              IDOL PERFORMANCE DATA
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                 <ProgressBar label="PHYSICAL STRENGTH (완력)" value={92} type="normal" />
                 <p className="text-[10px] text-pink-300 opacity-80 mt-1">
                   * 강화 마법 사용 시 트럭도 한 손으로 정차 가능.
                 </p>
              </div>
              <div>
                 <ProgressBar label="ACTING SKILL (연기력)" value={88} type="normal" />
                 <p className="text-[10px] text-gray-400 opacity-80 mt-1">
                   * 카메라가 켜져 있을 때만 발동. 꺼지면 0으로 수렴.
                 </p>
              </div>
              <div>
                 <ProgressBar label="AGGRESSION (공격성)" value={99} type="inverse" />
                 <p className="text-[10px] text-red-500 opacity-80 mt-1">
                   * 위험: 통제 불능의 전투광. 스트레스를 폭력으로 해소.
                 </p>
              </div>
              <div>
                 <ProgressBar label="PATIENCE (인내심)" value={5} type="normal" />
                 <p className="text-[10px] text-red-500 opacity-80 mt-1">
                   * 도발에 매우 취약함. 작전 중 욕설 빈도 높음.
                 </p>
              </div>
            </div>
          </div>

          {/* 2. 행동 분석 보고서 */}
          <div className="border border-green-800/50 p-4 relative">
             <h4 className="text-green-400 font-bold mb-3">BEHAVIORAL ANALYSIS</h4>
             <div className="space-y-3 opacity-80 leading-relaxed text-green-100 text-[11px]">
                <p>
                  <span className="text-pink-400 font-bold">[만들어진 우상]</span><br/>
                  오라토리오의 홍보용 아이돌로서 <span className="text-gray-400">&quot;사랑과 정의&quot;</span>를 외치지만, 
                  본성은 피가 튀는 육탄전을 즐기는 전투광임. 
                  아이돌 활동은 그녀의 폭력성을 합법적으로 행사하기 위한 위장에 불과함.
                </p>
                <p>
                  <span className="text-red-400 font-bold">[방송 사고 위험군]</span><br/>
                  전투 중 흥분하면 마이크가 켜진 상태로 비속어를 남발하는 버릇이 있음. 
                  현재까지 <span className="text-red-500 underline">24회의 묵음 처리(Beep)</span>와 3회의 방송 송출 중단 사태를 일으킴.
                </p>
             </div>
          </div>

          {/* 3. 라이브 스트림 & 검열 로그 (Live Stream) - 추가됨 */}
          <div className="border-l-4 border-pink-500 bg-black/60 p-4 font-mono text-[10px]">
             <h4 className="text-pink-400 font-bold mb-2">LIVE STREAM CHAT LOG</h4>
             <div className="space-y-1.5 h-24 overflow-y-auto pr-2 opacity-90 custom-scrollbar">
                <p><span className="text-blue-400">User882:</span> 밀리아 쨩 오늘도 귀여워! ㅠㅠ</p>
                <p><span className="text-blue-400">FanBoy:</span> 정의의 철퇴를 보여줘!</p>
                <p className="text-yellow-500 italic text-center my-1">--- [SYSTEM] COMBAT STARTED ---</p>
                <p><span className="text-blue-400">LoveMilia:</span> 헐... 방금 괴물 머리 터진 거 아님?</p>
                <p><span className="text-gray-500">System:</span> <span className="text-red-500">[CENSORED]</span> 화면이 조정 중입니다.</p>
                <p><span className="text-blue-400">Viewer12:</span> 방금 밀리아가 욕한 거 같은데? 잘못 들었나?</p>
                <p><span className="text-gray-500">Admin:</span> @Viewer12 유언비어 유포로 차단되었습니다.</p>
             </div>
          </div>

          {/* 4. 감청 기록 (Hot Mic) */}
          <div className="bg-black border border-pink-900 p-4 font-mono shadow-lg">
             <div className="flex justify-between items-center mb-2">
                <p className="text-[10px] text-pink-500 font-bold">AUDIO FEED: HOT MIC INCIDENT</p>
                <span className="text-[8px] bg-red-900 text-red-200 px-1 border border-red-500">FILTER ACTIVE</span>
             </div>
             
             <div className="space-y-2 opacity-90 text-[11px]">
               <p>
                 <span className="text-pink-300">[MILIA (On-Air)]:</span> 
                 &quot;꺄핫! 오라토리오의 아이돌 밀리아 등장☆ 다들 내 노래를 들어줘!&quot;
               </p>
               <p className="pl-4 text-[10px] text-gray-500 italic">
                 * [SFX]: 둔탁한 타격음(CRACK!), 뼈 부러지는 소리
               </p>
               <p>
                 <span className="text-pink-300">[MILIA (On-Air)]:</span> 
                 &quot;정의의 이름으로 용서하지 않... 윽!&quot;
               </p>
               <p className="pl-4 text-[10px] text-red-400 italic">
                 * [SYSTEM]: ** AUTOMATIC MUTE ACTIVATED **
               </p>
               <p className="relative">
                 <span className="text-red-500 font-bold">[MILIA (Muted)]:</span> 
                 &quot;아, <span className="bg-white text-black px-0.5 font-bold">삐-</span>, 저 <span className="bg-white text-black px-0.5 font-bold">삐--</span> 새끼 진짜 안 뒤지네.&quot;
               </p>
               <p>
                 <span className="text-red-500 font-bold">[MILIA (Off-Air)]:</span> 
                 &quot;야! 카메라 끄라고! 머리통 깨버리기 전에!&quot;
               </p>
             </div>
             
             <div className="border-t border-green-900/50 pt-2 mt-3 text-right">
               <span className="text-red-500 font-bold bg-red-950/20 px-2 py-1 text-[9px]">
                 WARNING: BROADCAST TERMINATED
               </span>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}