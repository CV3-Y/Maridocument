"use client";
import Image from "next/image";
import ProgressBar from "./ProgressBar";

export default function NineDetail() {
  return (
    // 배경: 어두운 보라색 + 픽셀 패턴
    <div className="group p-6 border-t-4 border-pink-500 bg-[#120a1f] animate-fadeIn text-xs font-mono relative overflow-hidden">
      
      {/* 배경 장식: 게임 오버 텍스트 & 픽셀 하트 */}
      <div className="absolute top-10 right-10 opacity-10 pointer-events-none rotate-[10deg]">
        <span className="text-8xl font-black text-pink-500 block">GAME OVER</span>
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,4px_100%] pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* (좌측) 프로필: 플레이어 정보 */}
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-4">
          
          {/* 이미지 프레임 (N1.png) - 캐릭터 선택창 느낌 */}
          <div className="border-4 border-double border-pink-400 bg-pink-900/20 p-2 relative aspect-square flex items-center justify-center overflow-hidden z-0">
             
             {/* 1. 캐릭터 이미지 (N1.png) */}
             <div className="absolute inset-0 z-0 transform scale-110 rotate-[2deg] transition-transform duration-500 ease-out group-hover:rotate-0 group-hover:scale-105 origin-center shadow-[0_0_20px_rgba(236,72,153,0.5)]">
               <Image 
                 src="/N1.png"
                 alt="Nine Portrait"
                 fill
                 // 나인: 쨍한 색감 + 팝한 느낌
                 className="object-cover object-center opacity-90 contrast-125 saturate-150"
               />
               {/* 픽셀 모자이크 효과 오버레이 */}
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-hard-light"></div>
             </div>

             {/* 2. 플레이어 태그 */}
             <div className="absolute top-2 left-2 z-20 pointer-events-none animate-bounce">
               <span className="text-[10px] text-yellow-300 font-black bg-black/80 px-2 py-1 border-2 border-yellow-400 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                 ▼ P1: READY
               </span>
             </div>
             
             {/* 3. 하단 스코어 */}
             <div className="absolute bottom-2 left-0 right-0 text-center z-20 pointer-events-none">
               <span className="text-[12px] text-green-400 font-mono bg-black/90 px-3 py-1 border border-green-500">
                 SCORE: 99,999,999
               </span>
             </div>
          </div>

          <div className="border border-pink-500/50 p-3 bg-black/40">
            <h4 className="text-pink-400 font-bold mb-2 border-b border-pink-800 pb-1">CHARACTER SELECT</h4>
            <ul className="space-y-1.5 opacity-90 text-pink-100">
              <li className="flex justify-between"><span className="opacity-50">ID:</span> <span>Nine (No.9)</span></li>
              <li className="flex justify-between"><span className="opacity-50">AGE:</span> <span>19</span></li>
              <li className="flex justify-between"><span className="opacity-50">CLASS:</span> <span>Assassin / Gamer</span></li>
              <li className="flex justify-between"><span className="opacity-50">HOBBY:</span> <span className="text-yellow-400 font-bold">TORTURE (놀이)</span></li>
            </ul>
          </div>

          {/* 소지품 (아이템 창) */}
          <div className="border border-green-500/30 p-3 bg-green-900/10">
             <h4 className="text-green-400 font-bold mb-2 text-[10px]">ITEM INVENTORY</h4>
             <ul className="space-y-2 text-[10px] opacity-80 text-gray-300">
               <li className="flex items-start gap-2">
                 <span className="text-yellow-500">★</span>
                 <span><b className="text-pink-400">식칼 스태프 (+9강)</b>: 마법 매개체. 예리함. 피 묻음.</span>
               </li>
               <li className="flex items-start gap-2">
                 <span className="text-yellow-500">★</span>
                 <span><b className="text-green-400">휴대용 게임기</b>: 고문 중 쉬는 시간에 사용.</span>
               </li>
               <li className="flex items-start gap-2">
                 <span className="text-yellow-500">★</span>
                 <span><b className="text-purple-400">점수 기록 수첩</b>: 비명의 높낮이 등을 기록함.</span>
               </li>
             </ul>
          </div>
        </div>
        
        {/* (우측) 상세 데이터 분석 */}
        <div className="col-span-1 lg:col-span-8 space-y-6">
          
          {/* 1. 능력치 (게임 스탯) */}
          <div className="bg-[#1a051a] border border-pink-500/30 p-4">
            <h4 className="text-pink-400 font-bold mb-4 flex items-center gap-2">
              <span className="text-xl">🎮</span> 
              PLAYER STATISTICS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                 <ProgressBar label="ATK (공격력)" value={90} type="normal" />
                 <p className="text-[10px] text-pink-300 opacity-80 mt-1">
                   * 크리티컬 확률 높음. 급소보다는 고통스러운 부위 타격 선호.
                 </p>
              </div>
              <div>
                 <ProgressBar label="SANITY (정신력)" value={5} type="inverse" />
                 <p className="text-[10px] text-red-500 opacity-80 mt-1">
                   * 미치광이. 현실과 게임을 구분하지 않음.
                 </p>
              </div>
              <div>
                 <ProgressBar label="FUN (재미 추구)" value={100} type="normal" />
                 <p className="text-[10px] text-yellow-400 opacity-80 mt-1">
                   * 자극이 없으면 지루해함. 타인의 고통이 유일한 오락거리.
                 </p>
              </div>
              <div>
                 <ProgressBar label="STEALTH (은신)" value={85} type="normal" />
                 <p className="text-[10px] text-green-400 opacity-80 mt-1">
                   * "숨바꼭질 시작!" 기척을 지우고 등 뒤에서 나타남.
                 </p>
              </div>
            </div>
          </div>

          {/* 2. 플레이 스타일 (Gamification of Torture) */}
          <div className="border border-yellow-500/40 p-4 bg-black/50 relative">
             <h4 className="text-yellow-400 font-bold mb-3">PLAYSTYLE: TORTURE GAME</h4>
             <div className="space-y-3 opacity-90 leading-relaxed text-gray-200 text-[11px]">
                <p>
                  <span className="text-pink-400 font-bold">[현실의 게임화]</span><br/>
                  모든 상황을 게임 스테이지로 인식함. 살인을 <span className="text-green-400">&apos;퀘스트 완료&apos;</span>로, 
                  피해자의 저항을 <span className="text-yellow-400">&apos;이벤트 컷신&apos;</span>으로 받아들임. 
                  죄책감이나 생명 존중 사상이 결여되어 있으며, 오직 <span className="text-red-500 font-bold">&apos;타격감&apos;</span>과 <span className="text-red-500 font-bold">&apos;사운드(비명)&apos;</span>에 집착함.
                </p>
                <p>
                  <span className="text-blue-400 font-bold">[채점 시스템]</span><br/>
                  피해자의 고통 반응을 수치화하여 점수를 매기는 기괴한 취미가 있음. 
                  <span className="text-gray-400">&quot;방금 비명은 3옥타브 솔! 80점!&quot;</span>이라며 평가하고, 
                  고득점을 위해 더욱 창의적인 고문 방식을 고안해냄.
                </p>
             </div>
          </div>

          {/* 3. 퀘스트 로그 (Quest Log) */}
          <div className="border-l-4 border-green-500 bg-green-900/10 p-4 font-mono text-[10px]">
             <h4 className="text-green-400 font-bold mb-2">ACTIVE QUESTS</h4>
             <div className="space-y-2 text-gray-300">
               <div className="flex justify-between items-center border-b border-green-900/50 pb-1">
                 <span className="text-yellow-300">[MAIN]</span>
                 <span>오라토리오 순찰대 처리하기 (0/3)</span>
                 <span className="text-gray-500">In Progress...</span>
               </div>
               <div className="flex justify-between items-center border-b border-green-900/50 pb-1">
                 <span className="text-blue-300">[DAILY]</span>
                 <span>새로운 비명 소리 수집하기 (High Pitch)</span>
                 <span className="text-green-500">COMPLETED!</span>
               </div>
               <div className="flex justify-between items-center pt-1">
                 <span className="text-red-400">[EVENT]</span>
                 <span>도망치는 '쥐새끼' 다리 맞추기</span>
                 <span className="text-gray-500">Optional</span>
               </div>
             </div>
          </div>

          {/* 4. 하이 스코어 기록 (Audio Log) */}
          <div className="bg-black border border-pink-600 p-4 font-mono shadow-lg relative">
             <div className="absolute top-2 right-2 flex gap-1">
               <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
               <span className="text-[9px] text-red-500 font-bold">REC</span>
             </div>
             
             <p className="text-[10px] text-pink-500 font-bold mb-2">AUDIO LOG: NEW HIGH SCORE</p>
             <div className="space-y-2 opacity-90 text-[11px]">
               <p><span className="text-gray-500">[VICTIM]:</span> &quot;으아아악! 제발! 다 불게! 다 말할게!&quot;</p>
               <p><span className="text-pink-400">[NINE]:</span> &quot;에이~ 벌써 항복? 재미없게시리. 스킵 버튼 없나요?&quot;</p>
               <p className="pl-4 text-[10px] text-green-500 italic">* [SFX]: 푹, 찌르는 소리 (Critical Hit!)</p>
               <p><span className="text-gray-500">[VICTIM]:</span> &quot;끄아아아아아악!!!&quot;</p>
               <p><span className="text-pink-400">[NINE]:</span> &quot;와우! 방금 통각 수치 대박! 100점 만점에 120점!&quot;</p>
               <p><span className="text-pink-400">[NINE]:</span> &quot;축하해요! 당신의 비명이 '이번 주의 BGM'으로 선정되었습니다! 짝짝짝!&quot;</p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}