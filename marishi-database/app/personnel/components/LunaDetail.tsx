"use client";
import Image from "next/image";
import ProgressBar from "./ProgressBar";

export default function LunaDetail() {
  return (
    // group 클래스 추가
    <div className="group p-6 border-t border-green-800 bg-black/90 animate-fadeIn text-xs font-mono relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* (좌측) 프로필: 병약하고 불안한 느낌 */}
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-4">
          
          {/* 이미지 프레임 (F1.png) */}
          <div className="border border-gray-600/50 bg-gray-900/20 p-2 relative aspect-square flex items-center justify-center overflow-hidden z-0">
             
             {/* 1. 캐릭터 이미지 (F1.png) - 상호작용 회전 */}
             <div className="absolute inset-0 z-0 transform scale-110 rotate-[2deg] transition-transform duration-500 ease-out group-hover:rotate-0 group-hover:scale-105 origin-center shadow-[0_5px_15px_rgba(168,85,247,0.2)] border border-gray-700/50">
               <Image 
                 src="/F1.png"
                 alt="Luna Portrait"
                 fill
                 // 루나: 채도를 낮추고 약간의 블러 처리로 심약함 표현
                 className="object-cover object-center opacity-80 grayscale-[0.6] contrast-75 brightness-110"
               />
               {/* 병약한 보라색 틴트 */}
               <div className="absolute inset-0 bg-purple-900/10 mix-blend-screen"></div>
             </div>

             {/* 2. 노이즈 오버레이 */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-10 pointer-events-none"></div>

             {/* 3. 상태 오버레이 */}
             <div className="absolute top-2 left-2 z-20 pointer-events-none">
               <span className="text-[9px] text-purple-300 font-bold border border-purple-500/50 px-2 py-1 bg-black/60 backdrop-blur-sm">
                 MEDICAL ALERT: ACTIVE
               </span>
             </div>
             
             <div className="absolute bottom-2 right-2 text-right z-20 pointer-events-none bg-black/50 p-1">
               <span className="text-[9px] text-gray-400 block">HR: 145 BPM (High)</span>
               <span className="text-[9px] text-red-400 block animate-pulse">STRESS: CRITICAL</span>
             </div>
          </div>

          <div className="border border-green-800/50 p-3 bg-black/40">
            <h4 className="text-green-500 font-bold mb-2 border-b border-green-900 pb-1">BASIC INFO</h4>
            <ul className="space-y-1.5 opacity-90">
              <li className="flex justify-between"><span className="opacity-50">CODENAME:</span> <span>Pale_Eye</span></li>
              <li className="flex justify-between"><span className="opacity-50">AGE:</span> <span>16</span></li>
              <li className="flex justify-between"><span className="opacity-50">CLASS:</span> <span>Analyst (정보분석)</span></li>
              <li className="flex justify-between"><span className="opacity-50">CONDITION:</span> <span className="text-purple-400 font-bold">DRUG DEPENDENT</span></li>
            </ul>
          </div>

          {/* 소지품 분석 (약물) - 확장됨 */}
          <div className="border border-green-800/30 p-3 bg-green-900/5">
             <h4 className="text-green-600 font-bold mb-2 text-[10px]">INVENTORY SCAN</h4>
             <ul className="space-y-2 text-[10px] opacity-80 text-gray-300">
               <li>• <span className="text-gray-400">깨진 태블릿 PC</span>: 액정 파손. 과도한 업무 스트레스로 투척한 흔적.</li>
               <li>• <span className="text-purple-400">약통 (라벨: 비타민)</span>: 실성분은 고농도 카페인, 진통제, 각성제 혼합물.</li>
               <li>• <span className="text-gray-400">피 젖은 손수건</span>: 잦은 코피(과부하)를 닦은 흔적.</li>
             </ul>
          </div>
        </div>
        
        {/* (우측) 상세 데이터 분석 */}
        <div className="col-span-1 lg:col-span-8 space-y-6">
          
          {/* 1. 능력치 */}
          <div className="bg-purple-950/10 border border-purple-900/30 p-4">
            <h4 className="text-purple-400 font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span> 
              ABILITY METRICS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                 <ProgressBar label="COMBAT POWER (전투력)" value={5} type="normal" />
                 <p className="text-[10px] text-red-400 opacity-80 mt-1">
                   * 전투 부적격. 단독 작전 수행 불가. 즉각 보호 필요.
                 </p>
              </div>
              <div>
                 <ProgressBar label="DETECTION RANGE (탐지 범위)" value={98} type="normal" />
                 <p className="text-[10px] text-blue-300 opacity-80 mt-1">
                   * 도시 전역 스캔 가능. 오라토리오 작전의 핵심 중추.
                 </p>
              </div>
              <div>
                 <ProgressBar label="MENTAL STABILITY (정신 안정도)" value={12} type="normal" />
                 <p className="text-[10px] text-red-500 opacity-80 mt-1">
                   * 붕괴 직전. 리더(Airi)에 대한 극도의 공포 반응.
                 </p>
              </div>
              <div>
                 <ProgressBar label="TOXICITY LEVEL (약물 중독)" value={85} type="inverse" />
                 <p className="text-[10px] text-purple-400 opacity-80 mt-1">
                   * 경고: 혈중 약물 농도 위험 수치. 투약 중단 시 금단 증상(발작).
                 </p>
              </div>
            </div>
          </div>

          {/* 2. 심리 상담 기록 */}
          <div className="border border-green-800/50 p-4">
             <h4 className="text-green-400 font-bold mb-3">COUNSELING LOG (RESTRICTED)</h4>
             <div className="space-y-3 opacity-80 leading-relaxed text-green-100 text-[11px]">
                <p>
                  <span className="text-purple-400 font-bold">[학습된 무력감]</span><br/>
                  대상은 자신의 생사여탈권이 리더 <span className="text-gray-400">&apos;아이리&apos;</span>에게 있다고 굳게 믿음. 
                  사소한 실수에도 &quot;폐기될 것&quot;이라는 강박 관념에 시달리며, 이를 잊기 위해 협회에서 지급하는 향정신성 약물에 의존함.
                </p>
                <p>
                  <span className="text-green-500 font-bold">[과부하 상태]</span><br/>
                  수천 개의 균열 데이터를 실시간으로 처리하며 뇌에 과부하가 걸린 상태. 
                  잦은 코피와 두통을 호소하나, 시스템은 이를 <span className="text-red-500 underline">무시하고 투약량을 늘려</span> 가동률을 유지 중임.
                </p>
             </div>
          </div>

          {/* 3. 약물 투여 및 과부하 로그 (Medication Log) - 추가됨 */}
          <div className="bg-black border border-purple-900/50 p-4 font-mono text-[10px]">
             <h4 className="text-purple-400 font-bold mb-2 flex justify-between">
                <span>SYSTEM LOG: OVERLOAD WARNING</span>
                <span className="text-red-500 blink">⚠ CRITICAL</span>
             </h4>
             <div className="space-y-1 text-gray-400">
               <div className="flex justify-between border-b border-gray-800 pb-1">
                 <span>[02:14:00]</span>
                 <span>Data Stream Input: 4,021 signals</span>
                 <span className="text-green-500">Stable</span>
               </div>
               <div className="flex justify-between border-b border-gray-800 pb-1">
                 <span>[02:45:30]</span>
                 <span>Input Spike: 12,500 signals</span>
                 <span className="text-yellow-500">Overheating</span>
               </div>
               <div className="flex justify-between border-b border-gray-800 pb-1">
                 <span>[02:46:00]</span>
                 <span className="text-purple-400">&gt;&gt; Administering Stimulant (Dosage: High)</span>
                 <span className="text-red-500">FORCED</span>
               </div>
               <div className="flex justify-between pt-1">
                 <span>[03:00:00]</span>
                 <span>Subject stabilized. Nosebleed confirmed.</span>
                 <span className="text-green-500">Resumed</span>
               </div>
             </div>
          </div>

          {/* 4. 업무 보고 (Audio Log) */}
          <div className="bg-black border-l-4 border-gray-600 p-4 font-mono">
             <p className="text-[10px] text-gray-500 font-bold mb-1">REAL-TIME REPORT LOG</p>
             <div className="space-y-2 opacity-90 text-[11px]">
               <p><span className="text-purple-400">[LUNA]:</span> &quot;저, 저기... 3시 방향에 균열 반응이... 죄, 죄송해요! 1초 늦었어요...&quot;</p>
               <p><span className="text-gray-500">[AIRI]:</span> &quot;루나? 겨우 1초? 그 1초 때문에 우리 애들이 다치면 책임질 거야?&quot;</p>
               <p className="pl-4 text-[10px] text-gray-600 italic">* [SFX]: 약통을 급하게 여는 소리, 물 없이 삼키는 소리</p>
               <p><span className="text-purple-400">[LUNA]:</span> &quot;히익...! 죄, 죄송해요, 빨리 처리할게요... 약 먹었으니까... 제발 화내지 마세요...&quot;</p>
               <p><span className="text-purple-400">[LUNA]:</span> &quot;버리지 말아 주세요... 졸업하기 싫어...&quot;</p>
             </div>
             <div className="border-t border-green-900/50 pt-2 mt-3 text-right">
               <span className="text-red-500 font-bold bg-red-950/20 px-2 py-1 text-[9px]">
                 NOTE: DOSE INCREASED BY 20%
               </span>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}