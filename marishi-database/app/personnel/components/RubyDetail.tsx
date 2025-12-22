"use client";
import Image from "next/image";
import ProgressBar from "./ProgressBar";

export default function RubyDetail() {
  return (
    // group 클래스 추가
    <div className="group p-6 border-t border-green-800 bg-black/90 animate-fadeIn text-xs font-mono relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* (좌측) 프로필 및 위험도 */}
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-4">
          
          {/* [수정됨] 이미지 프레임 (B1.png) - 날것의 문서 느낌 + 경고 테이프 */}
          <div className="border-4 border-red-600 bg-red-950/20 p-2 relative aspect-square flex items-center justify-center overflow-hidden z-0">
             
             {/* 1. 캐릭터 이미지 (B1.png) - 상호작용 회전 */}
             <div className="absolute inset-0 z-0 transform scale-110 rotate-[3deg] transition-transform duration-500 ease-out group-hover:rotate-0 group-hover:scale-105 origin-center shadow-[0_10px_20px_rgba(220,38,38,0.3)] border border-red-900/50">
               <Image 
                 src="/B1.png"
                 alt="Ruby Portrait"
                 fill
                 // 루비: 붉은색 필터와 거친 입자감
                 className="object-cover object-center opacity-80 contrast-125 sepia-[0.3] hue-rotate-[-30deg]"
               />
               {/* 사진 위에 붉은색 오버레이 */}
               <div className="absolute inset-0 bg-red-900/20 mix-blend-overlay"></div>
             </div>

             {/* 2. 노이즈 및 위험 오버레이 */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay z-10 pointer-events-none"></div>

             {/* 3. 위험 경고 UI (가장 위에) */}
             <div className="absolute top-0 left-0 w-full bg-red-600 text-black text-center font-bold text-[10px] py-1 animate-pulse z-20 pointer-events-none border-b-2 border-black">
               WARNING: DO NOT APPROACH
             </div>
             
             <div className="text-center z-20 relative mt-6 pointer-events-none">
               <span className="text-6xl text-red-500/30 font-black block mb-2 drop-shadow-md rotate-[-5deg]">DANGER</span>
               <div className="inline-block border-2 border-red-500 px-3 py-1 bg-black/80 backdrop-blur-sm">
                 <span className="text-[10px] text-red-400 uppercase tracking-widest font-bold">
                   Psycho Hazard
                 </span>
               </div>
             </div>
             
             <div className="absolute bottom-2 left-2 right-2 flex justify-between text-[9px] font-bold z-20 bg-black/80 px-2 py-1 pointer-events-none border-t border-red-900">
               <span className="text-red-500">CLASS: DESTRUCTION</span>
               <span className="text-red-500">RANK: A+</span>
             </div>
          </div>

          <div className="border border-green-800/50 p-3 bg-black/40">
            <h4 className="text-green-500 font-bold mb-2 border-b border-green-900 pb-1">BASIC INFO</h4>
            <ul className="space-y-1.5 opacity-90">
              <li className="flex justify-between"><span className="opacity-50">CODENAME:</span> <span>Gravity_Witch</span></li>
              <li className="flex justify-between"><span className="opacity-50">AGE:</span> <span>15</span></li>
              <li className="flex justify-between"><span className="opacity-50">AFFILIATION:</span> <span>None (Hostile)</span></li>
              <li className="flex justify-between"><span className="opacity-50">CONFIRMED KILLS:</span> <span className="text-red-500 font-bold">14 (Civilians included)</span></li>
            </ul>
          </div>
          
          {/* 소지품 분석 - 확장됨 */}
          <div className="border border-red-900/30 p-3 bg-red-950/5">
             <h4 className="text-red-400 font-bold mb-2 text-[10px]">EVIDENCE LIST</h4>
             <ul className="space-y-2 text-[10px] opacity-80 text-gray-300">
               <li className="flex items-start gap-2">
                 <span className="text-red-500 shrink-0">▶</span>
                 <span><b className="text-green-400">노이즈 캔슬링 이어폰</b>: 외부 소음(비명) 차단용. 음악 재생 기록 없음.</span>
               </li>
               <li className="flex items-start gap-2">
                 <span className="text-red-500 shrink-0">▶</span>
                 <span><b className="text-green-400">피 묻은 동전</b>: 강박적 수집품. 정확히 100개를 채우려는 패턴.</span>
               </li>
               <li className="flex items-start gap-2">
                 <span className="text-red-500 shrink-0">▶</span>
                 <span><b className="text-green-400">무한 큐브</b>: 파괴 충동 억제용 피젯 토이. 표면이 마모됨.</span>
               </li>
             </ul>
          </div>
        </div>
        
        {/* (우측) 상세 심리/전투 분석 */}
        <div className="col-span-1 lg:col-span-8 space-y-6">
          
          {/* 1. 위험도 지표 */}
          <div className="bg-red-950/10 border border-red-900/50 p-4">
            <h4 className="text-red-500 font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-ping"></span> 
              THREAT ASSESSMENT MATRIX
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                 <ProgressBar label="DESTRUCTIVE POWER (파괴력)" value={96} type="normal" />
                 <p className="text-[10px] text-red-400 opacity-80 mt-1">
                   * 중력 제어를 통한 국소 지역 초토화 가능. 건물 붕괴 위험도 극상.
                 </p>
              </div>
              <div>
                 <ProgressBar label="EMPATHY SCORE (공감 능력)" value={2} type="inverse" />
                 <p className="text-[10px] text-red-400 opacity-80 mt-1">
                   * 진단: 소시오패스 (Anti-Social Disorder). 교화 불가능.
                 </p>
              </div>
              <div>
                 <ProgressBar label="EROSION STAGE (마모 진행도)" value={45} type="inverse" />
                 <p className="text-[10px] text-yellow-500 opacity-80 mt-1">
                   * Stage 2 초기: 기억의 파편화 진행 중. 부모의 얼굴을 기억하지 못함.
                 </p>
              </div>
              <div>
                 <ProgressBar label="CONTROLLABILITY (통제 가능성)" value={10} type="normal" />
                 <p className="text-[10px] text-gray-500 opacity-80 mt-1">
                   * 협상 불가. 오직 &apos;이득&apos;과 &apos;재미&apos;로만 움직임.
                 </p>
              </div>
            </div>
          </div>

          {/* 2. 임상 심리 보고서 - 확장됨 */}
          <div className="border border-green-800/50 p-4 relative overflow-hidden bg-black/40">
             <h4 className="text-green-400 font-bold mb-3">CLINICAL PSYCHOLOGY REPORT</h4>
             <div className="space-y-4 opacity-80 leading-relaxed text-green-100 text-[11px]">
                <p>
                  <span className="text-green-500 font-bold">[감각 처리 장애 & 공감각]</span><br/>
                  대상은 타인의 존재를 <span className="text-gray-500">&apos;소음(Noise)&apos;</span>으로, 그들의 생명력을 <span className="text-gray-500">&apos;색깔&apos;</span>로 인지함. 
                  <span className="text-red-400"> &quot;심장 색이 탁해서 맛없겠다&quot;</span>는 발언은 
                  대상이 인간을 생명체가 아닌 소비재로 인식하고 있음을 시사함.
                </p>
                <div className="pl-3 border-l-2 border-red-800">
                  <p className="text-gray-400 italic">
                    &quot;시끄러워. 세상이 너무 시끄러워. 다 으깨버리면 조용해질까?&quot;
                  </p>
                </div>
                <p>
                  <span className="text-yellow-500 font-bold">[파괴의 메커니즘]</span><br/>
                  대상에게 파괴는 폭력적 충동이 아닌, <span className="text-green-300">정서적 안정을 위한 정리 정돈 행위</span>에 가까움. 
                  거슬리는 소리(비명, 구조 요청)를 제거하기 위해 건물을 무너뜨리는 등 극단적인 효율성을 보임.
                </p>
             </div>
          </div>

          {/* 3. 최근 교전 로그 - 확장됨 */}
          <div className="bg-black border-l-4 border-red-700 p-4 font-mono">
             <div className="flex justify-between mb-2">
                <p className="text-[10px] text-red-500 font-bold">RECENT ENGAGEMENT LOG #442</p>
                <span className="text-[9px] text-red-800 border border-red-900 px-1">LETHAL FORCE AUTHORIZED</span>
             </div>
             
             <div className="space-y-2 opacity-90 text-[11px]">
               <p><span className="text-blue-400">[ORATORIO_UNIT]:</span> &quot;무기를 버리고 투항하라! 너는 포위됐다!&quot;</p>
               <p><span className="text-red-400">[RUBY]:</span> &quot;...아, 시끄러워. 귀 울리잖아.&quot;</p>
               <p className="pl-4 text-[10px] text-gray-500 italic">* [SFX]: 고주파 진동음, 중력장 전개 (Wooooong-)</p>
               <p><span className="text-blue-400">[ORATORIO_UNIT]:</span> &quot;잠깐, 중력 수치가 이상... 으아악! 내 다리! 뼈가...!&quot;</p>
               <p><span className="text-red-400">[RUBY]:</span> &quot;거기 있었어? 미안, 쓰레기통인 줄 알았네. ...치우기 귀찮게.&quot;</p>
               <p className="pl-4 text-[10px] text-gray-500 italic">* [SFX]: 젖은 무언가가 터지는 소리 (SPLAT)</p>
             </div>
             
             <div className="border-t border-red-900/50 pt-2 mt-3 text-right">
               <span className="text-red-500 font-bold bg-red-950/20 px-2 py-1 text-[9px]">
                 OUTCOME: SQUAD ANNIHILATED / NO SURVIVORS
               </span>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}