"use client";
import Image from "next/image";
import ProgressBar from "./ProgressBar";

export default function NaruDetail() {
  return (
    // 배경: 지적인 느낌의 딥 인디고 + 엠버(호박색) 포인트
    <div className="group p-6 border-t border-indigo-500 bg-[#0c0c1f] animate-fadeIn text-xs font-mono relative overflow-hidden">
      
      {/* 배경 장식: 거짓말 탐지기 파형 */}
      <div className="absolute top-20 left-0 w-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 500 100" className="w-full h-32 stroke-amber-500 fill-none" preserveAspectRatio="none">
          <path d="M0,50 Q20,50 40,50 T80,20 T120,80 T160,50 T200,50 T240,10 T280,90 T320,50 T500,50" strokeWidth="2" />
        </svg>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* (좌측) 프로필: 웃고 있는 관찰자 */}
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-4">
          
          {/* 이미지 프레임 (P1.png) - 렌즈/분석 화면 느낌 */}
          <div className="border border-indigo-400/50 bg-indigo-950/30 p-2 relative aspect-square flex items-center justify-center overflow-hidden z-0 rounded-tl-3xl rounded-br-3xl">
             
             {/* 1. 캐릭터 이미지 (P1.png) */}
             <div className="absolute inset-0 z-0 transform scale-110 rotate-[2deg] transition-transform duration-500 ease-out group-hover:rotate-0 group-hover:scale-105 origin-center shadow-[0_0_25px_rgba(99,102,241,0.3)]">
               <Image 
                 src="/P1.png"
                 alt="Naru Portrait"
                 fill
                 // 나루: 명석하고 날카로운 느낌
                 className="object-cover object-center opacity-90 contrast-110 brightness-110"
               />
               {/* 분석 그리드 오버레이 */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
             </div>

             {/* 2. 포커스 아이콘 */}
             <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-amber-400 pointer-events-none"></div>
             <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-amber-400 pointer-events-none"></div>

             {/* 3. 분석 상태 태그 */}
             <div className="absolute bottom-2 right-2 text-right z-20 pointer-events-none">
               <span className="text-[9px] text-amber-400 font-bold bg-black/80 px-2 py-1 border border-amber-600 rounded">
                 TRUTH: 99.9%
               </span>
             </div>
          </div>

          <div className="border border-indigo-500/50 p-3 bg-black/40">
            <h4 className="text-indigo-400 font-bold mb-2 border-b border-indigo-800 pb-1">ANALYST PROFILE</h4>
            <ul className="space-y-1.5 opacity-90 text-indigo-100">
              <li className="flex justify-between"><span className="opacity-50">CODENAME:</span> <span>Mind_Reader</span></li>
              <li className="flex justify-between"><span className="opacity-50">AGE:</span> <span>18</span></li>
              <li className="flex justify-between"><span className="opacity-50">CLASS:</span> <span>Profiler (정보상)</span></li>
              <li className="flex justify-between"><span className="opacity-50">HOBBY:</span> <span className="text-amber-400 font-bold">EXPOSING SECRETS</span></li>
            </ul>
          </div>

          {/* 소지품 (탐정 도구) */}
          <div className="border border-indigo-800/30 p-3 bg-indigo-950/10">
             <h4 className="text-indigo-500 font-bold mb-2 text-[10px]">EVIDENCE COLLECTION KIT</h4>
             <ul className="space-y-2 text-[10px] opacity-80 text-gray-300">
               <li className="flex items-start gap-2">
                 <span className="text-amber-500 shrink-0">👁</span>
                 <span><b className="text-indigo-300">특수 돋보기</b>: 마력 흔적 및 미세 표정 관찰용 마도구.</span>
               </li>
               <li className="flex items-start gap-2">
                 <span className="text-amber-500 shrink-0">👁</span>
                 <span><b className="text-indigo-300">소형 녹음기</b>: 협박용 증거 수집 필수품.</span>
               </li>
               <li className="flex items-start gap-2">
                 <span className="text-amber-500 shrink-0">👁</span>
                 <span><b className="text-red-400">검은 USB</b>: 도시 주요 인사들의 치부가 담겨있음.</span>
               </li>
             </ul>
          </div>
        </div>
        
        {/* (우측) 상세 데이터 분석 */}
        <div className="col-span-1 lg:col-span-8 space-y-6">
          
          {/* 1. 능력치 (전투력 낮음, 지능 높음) */}
          <div className="bg-[#0f0f1a] border border-indigo-900/50 p-4">
            <h4 className="text-indigo-400 font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span> 
              INTELLECTUAL SPECS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                 <ProgressBar label="INSIGHT (통찰력)" value={100} type="normal" />
                 <p className="text-[10px] text-amber-400 opacity-80 mt-1">
                   * 인간 거짓말 탐지기. 심박수, 동공, 마력 파장을 읽어냄.
                 </p>
              </div>
              <div>
                 <ProgressBar label="COMBAT (육탄전)" value={15} type="inverse" />
                 <p className="text-[10px] text-red-400 opacity-80 mt-1">
                   * 육체 능력은 일반인 수준. 호위(세르) 없이는 활동 불가.
                 </p>
              </div>
              <div>
                 <ProgressBar label="CALCULATION (연산 속도)" value={95} type="normal" />
                 <p className="text-[10px] text-indigo-300 opacity-80 mt-1">
                   * 수만 가지 경우의 수를 시뮬레이션. 말싸움 승률 99%.
                 </p>
              </div>
              <div>
                 <ProgressBar label="ARROGANCE (오만함)" value={90} type="normal" />
                 <p className="text-[10px] text-gray-400 opacity-80 mt-1">
                   * 자신의 지적 능력을 과신하여 타인을 장난감 취급함.
                 </p>
              </div>
            </div>
          </div>

          {/* 2. 심리 분석: 지적 관음증 */}
          <div className="border border-indigo-700/40 p-4 bg-black/50 relative">
             <h4 className="text-indigo-400 font-bold mb-3">BEHAVIORAL ANALYSIS: THE PEEPING TOM</h4>
             <div className="space-y-3 opacity-90 leading-relaxed text-indigo-100/80 text-[11px]">
                <p>
                  <span className="text-amber-500 font-bold">[정보가 곧 권력]</span><br/>
                  타인의 약점과 치부를 수집하여 데이터베이스화하는 것을 즐김. 
                  단순히 정보를 파는 것을 넘어, 상대를 심리적으로 구석까지 몰아넣고 
                  가장 수치스러운 비밀을 폭로하며 <span className="text-red-400">무너지는 표정을 감상하는 악취미</span>를 가짐.
                </p>
                <p>
                  <span className="text-indigo-300 font-bold">[통제광적 성향]</span><br/>
                  자신이 모든 상황을 알고 통제하고 있다는 느낌에 중독되어 있음. 
                  예상 밖의 상황이나 자신의 과거가 밝혀지는 것에 대해 <span className="text-red-500 underline">극도의 공포</span>를 느낌. 
                  항상 여유로운 태도는 방어기제일 가능성 높음.
                </p>
             </div>
          </div>

          {/* 3. 비밀 장부 (Blackmail List) - 추가됨 */}
          <div className="border-l-4 border-amber-500 bg-amber-900/10 p-4 font-mono text-[10px]">
             <h4 className="text-amber-500 font-bold mb-2 flex justify-between">
               <span>ENCRYPTED FILES: BLACKMAIL LIST</span>
               <span className="text-[9px] bg-red-900 text-red-200 px-1">TOP SECRET</span>
             </h4>
             <table className="w-full text-left opacity-90 text-gray-300">
               <tbody className="divide-y divide-amber-900/30">
                 <tr>
                   <td className="py-1 w-24 text-indigo-400">FILE #001</td>
                   <td>오라토리오 고위 간부 횡령 증거 (영상)</td>
                   <td className="text-right text-green-500">Ready</td>
                 </tr>
                 <tr>
                   <td className="py-1 text-indigo-400">FILE #042</td>
                   <td>시장(Mayor)의 불륜 스캔들 및 내연녀 정보</td>
                   <td className="text-right text-green-500">Ready</td>
                 </tr>
                 <tr>
                   <td className="py-1 text-indigo-400">FILE #099</td>
                   <td><span className="text-red-400 blur-[2px] hover:blur-none transition-all cursor-help">나루 본인의 고아원 시절 기록</span></td>
                   <td className="text-right text-red-500">LOCKED</td>
                 </tr>
               </tbody>
             </table>
          </div>

          {/* 4. 심문 로그 (Interrogation Log) */}
          <div className="bg-black border border-indigo-800 p-4 font-mono shadow-lg relative">
             <div className="absolute top-2 right-2">
               <span className="text-[10px] text-amber-500 border border-amber-500 px-1">HR MONITOR: ON</span>
             </div>
             
             <p className="text-[10px] text-indigo-500 font-bold mb-2">INTERROGATION ROOM 3</p>
             <div className="space-y-2 opacity-90 text-[11px]">
               <p><span className="text-gray-500">[SUSPECT]:</span> &quot;나, 난 정말 아무것도 몰라! 그날은 집에 있었다고!&quot;</p>
               <p><span className="text-indigo-400">[NARU]:</span> &quot;어라~? 이상하네요.&quot;</p>
               <p className="pl-4 text-[10px] text-amber-500 italic">* [SYSTEM]: Suspect Heart Rate 80 &rarr; 145 BPM. Pupil Dilation Detected.</p>
               <p><span className="text-indigo-400">[NARU]:</span> &quot;방금 말씀하실 때 마력 파장이 흔들리셨어요. 그리고 집에 계셨다면서...&quot;</p>
               <p><span className="text-indigo-400">[NARU]:</span> &quot;왜 신발 밑창에 <span className="text-red-400">3번 구역의 진흙</span>이 묻어있을까요?&quot;</p>
               <p><span className="text-gray-500">[SUSPECT]:</span> &quot;그, 그건...!&quot;</p>
               <p><span className="text-indigo-400">[NARU]:</span> &quot;거짓말하면 못써요. 당신의 &#39;영혼&#39;이 저에게 있는 걸 잊으셨나요? 후후.&quot;</p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}