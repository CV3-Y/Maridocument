"use client";
import Image from "next/image";
import ProgressBar from "./ProgressBar";

export default function SeraDetail() {
  return (
    // 전체 컨테이너: group 클래스 추가 (hover 효과를 위해)
    <div className="group p-6 border-t border-gray-800 bg-gray-950 animate-fadeIn text-xs font-mono relative grayscale-[0.3]">
      
      {/* 배경 워터마크: TERMINATED */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none rotate-[-30deg]">
        <span className="text-9xl font-black text-white whitespace-nowrap">TERMINATED</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* (좌측) 영정 사진 & 기본 정보 */}
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-4">
          
          {/* 이미지 프레임 (사망 처리 + 이미지 적용) */}
          <div className="border border-red-900/30 bg-black/50 p-2 relative aspect-square flex items-center justify-center overflow-hidden z-0">
             
             {/* 1. 캐릭터 이미지 (A1.png) - 날것의 문서 느낌 */}
             <div className="absolute inset-0 z-0 transform scale-110 rotate-[-4deg] transition-transform duration-500 ease-out group-hover:rotate-0 group-hover:scale-105 origin-center shadow-xl border-2 border-gray-800/50">
               <Image 
                 src="/A1.png"
                 alt="Sera Portrait"
                 fill
                 // contrast, brightness 조절로 더 거칠고 오래된 사진 느낌 추가
                 className="object-cover object-center opacity-50 grayscale contrast-125 brightness-90 mix-blend-luminosity"
               />
             </div>

             {/* 2. 노이즈 및 사망 오버레이 */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-multiply z-10 pointer-events-none"></div>
             
             {/* 3. 사망 텍스트 */}
             <div className="text-center z-20 relative pointer-events-none">
               <span className="text-5xl text-gray-300/50 font-bold block mb-2 tracking-tighter drop-shadow-md">DECEASED</span>
               <span className="text-[10px] text-red-900 font-bold uppercase tracking-widest border border-red-900/50 px-2 py-1 bg-black/80 backdrop-blur-sm">
                 Subject Eliminated
               </span>
             </div>
             
             {/* 은은한 붉은 펄스 */}
             <div className="absolute inset-0 bg-red-900/10 animate-pulse z-10 pointer-events-none"></div>
             
             <div className="absolute bottom-2 left-2 right-2 text-center text-[9px] font-bold text-gray-400 z-20 bg-black/50 py-1 pointer-events-none">
               TIME OF DEATH: 2025-12-21 23:42
             </div>
          </div>

          {/* 기본 신상 명세 (말소됨) */}
          <div className="border border-gray-800 p-3 bg-black/60 text-gray-400">
            <h4 className="text-gray-600 font-bold mb-2 border-b border-gray-800 pb-1">SUBJECT_PROFILE (VOID)</h4>
            <ul className="space-y-1.5 opacity-90 text-[10px]">
              <li className="flex justify-between decoration-line-through"><span className="opacity-60">CODENAME:</span> <span>Morning_Star</span></li>
              <li className="flex justify-between"><span className="opacity-60">STATUS:</span> <span className="text-red-800 font-bold">DISPOSED (폐기됨)</span></li>
              <li className="flex justify-between"><span className="opacity-60">EXECUTOR:</span> <span>Agent Shiz (Oratorio)</span></li>
              <li className="flex justify-between mt-2 pt-2 border-t border-gray-800"><span className="opacity-60">FINAL DEBT:</span> <span className="text-red-900 font-bold">4,500,000 Credits</span></li>
            </ul>
            <div className="mt-2 text-center bg-red-950/10 py-1 text-red-800/70 font-bold text-[9px]">
              &gt;&gt; ASSET RECOVERY FAILED &lt;&lt;
            </div>
          </div>

          {/* 유류품 분석 (비극적 요소) - 추가됨 */}
          <div className="border border-gray-800/50 p-3 bg-gray-900/20">
             <h4 className="text-gray-500 font-bold mb-2 text-[10px]">RECOVERED ITEMS</h4>
             <ul className="space-y-1 text-[10px] opacity-70 text-gray-400">
               <li>• <span className="text-gray-500">양산형 스태프</span>: 파손됨. 수리 불가. (할부 24개월 남음)</li>
               <li>• <span className="text-red-900/70">피 묻은 영수증</span>: 편의점 캔디 구매 내역.</li>
               <li>• <span className="text-gray-500">곰 인형 열쇠고리</span>: 가방에서 발견. 유일하게 온전함.</li>
             </ul>
          </div>
        </div>
        
        {/* (우측) 사후 보고서 및 처리 내역 */}
        <div className="col-span-1 lg:col-span-8 space-y-6">
          
          {/* 1. 바이탈 사인 (Flatline) */}
          <div className="bg-gray-900/20 border border-gray-800 p-4 opacity-90 hover:opacity-100 transition-opacity">
            <h4 className="text-gray-500 font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-gray-600 rounded-full"></span> 
              BIOMETRIC STATUS: NULL
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProgressBar label="MAGIC CIRCUIT (회로 활성도)" value={0} isDead={true} />
              <ProgressBar label="BRAIN ACTIVITY (뇌파)" value={0} isDead={true} />
            </div>
            <p className="text-[10px] text-gray-600 mt-2 text-right font-mono">
              * SYSTEM: Subject carrier signal has been permanently disconnected.
            </p>
          </div>

          {/* 2. 채무 불이행 보고서 (Financial Autopsy) - 대폭 추가 */}
          <div className="border border-red-900/30 bg-[#0f0000] p-4">
             <h4 className="text-red-700 font-bold mb-3 flex justify-between">
                <span>FINANCIAL AUTOPSY</span>
                <span className="text-[9px] bg-red-950 text-red-500 px-1 border border-red-900">BAD DEBT</span>
             </h4>
             <table className="w-full text-[10px] text-left opacity-80 text-gray-400 mb-3">
               <thead>
                 <tr className="border-b border-red-900/30 text-red-600">
                   <th className="pb-1">CATEGORY</th>
                   <th className="pb-1">DETAILS</th>
                   <th className="pb-1 text-right">AMOUNT (C)</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-red-900/10">
                 <tr>
                   <td className="py-1">Equipment</td>
                   <td>Magic Staff (Entry Model) Loan</td>
                   <td className="text-right text-red-400">-1,200,000</td>
                 </tr>
                 <tr>
                   <td className="py-1">Penalty</td>
                   <td>Property Damage (Streetlights x3)</td>
                   <td className="text-right text-red-400">-2,800,000</td>
                 </tr>
                 <tr>
                   <td className="py-1">Medical</td>
                   <td>Post-Mortem Cleanup Fee</td>
                   <td className="text-right text-red-400">-500,000</td>
                 </tr>
               </tbody>
               <tfoot>
                 <tr className="border-t border-red-900/50 font-bold text-red-500">
                   <td className="pt-2">TOTAL</td>
                   <td className="pt-2"></td>
                   <td className="pt-2 text-right">-4,500,000</td>
                 </tr>
               </tfoot>
             </table>
             <p className="text-[9px] text-gray-500 italic text-right">
               * Note: Debt will be transferred to next of kin (Legal Guardian).
             </p>
          </div>

          {/* 3. 심리 부검 (Psychological Retro) - 추가됨 */}
          <div className="border border-gray-800 p-4 bg-gray-900/10">
             <h4 className="text-gray-400 font-bold mb-3">PSYCHOLOGICAL RETROSPECTIVE</h4>
             <div className="space-y-3 opacity-80 leading-relaxed text-gray-300 text-[11px]">
                <p>
                  <span className="text-red-400 font-bold">[주인공 증후군 (Protagonist Syndrome)]</span><br/>
                  대상은 자신을 &#39;선택받은 특별한 존재&#39;로 인식하는 심각한 인지 부조화를 겪음. 
                  전투를 현실이 아닌 <span className="text-gray-500">&quot;에피소드&quot;</span>나 <span className="text-gray-500">&quot;이벤트&quot;</span>로 받아들였으며, 
                  <span className="text-gray-500 line-through">우정과 노력으로 승리할 수 있다</span>는 망상에 빠져 있었음.
                </p>
                <p>
                  <span className="text-gray-500 font-bold">[현실 인식 실패]</span><br/>
                  적성 개체(Shiz)를 &#39;동료&#39; 혹은 &#39;구조대&#39;로 오인하여 접근함. 
                  경계심 부재가 직접적인 사망 원인으로 작용. 사망 직전까지도 상황을 파악하지 못함.
                </p>
             </div>
          </div>

          {/* 4. 사후 경위서 및 블랙박스 */}
          <div className="border border-red-900/20 p-4 bg-red-950/5 relative">
             <h4 className="text-red-800/80 font-bold mb-3 flex justify-between items-center">
               <span>INCIDENT REPORT: SUB-089</span>
               <span className="text-[9px] border border-red-900/50 px-1 text-red-900">CLASS 1 SANITATION</span>
             </h4>
             
             {/* 블랙박스 로그 */}
             <div className="bg-black border-l-4 border-gray-800 p-3 font-mono text-[11px] opacity-90 mb-3">
               <p className="text-gray-600 font-bold mb-2 uppercase border-b border-gray-900 pb-1">&gt;&gt; BLACKBOX RECOVERY: FINAL 30 SECONDS</p>
               <div className="space-y-2">
                 <p><span className="text-gray-500">[SERA]:</span> &quot;어? 선배님...? 저, 저기요... 구조대 맞죠? 다행이다...&quot;</p>
                 <p className="pl-4 text-[10px] text-gray-600 italic">* [SFX]: 날카로운 파열음 (Slice), 둔탁한 낙하음</p>
                 <p><span className="text-gray-500">[SERA]:</span> &quot;어...? 내 다리가... 왜 저기에...?&quot;</p>
                 <p><span className="text-gray-500">[SERA]:</span> &quot;아, 안 되는데... 저거... 할부 아직 남았는데... 엄마한테 혼나는데...&quot;</p>
                 <p className="pl-4 text-[10px] text-gray-600 italic">* [SFX]: 생체 신호 소실 경고음 (BEEP------------)</p>
                 <p><span className="text-blue-900">[SHIZ]:</span> &quot;타겟 침묵 확인. 폐기 완료. 다음 타겟(목격자) 확보하러 이동합니다.&quot;</p>
               </div>
             </div>

             <p className="text-[10px] text-gray-500 leading-relaxed">
               <span className="text-red-800 font-bold">[현장 수습]</span><br/>
               대상의 시신은 균열 붕괴와 함께 지하 수로로 유기됨. 회수 비용 대비 마력 결정의 가치가 
               현저히 낮아(순도 12% 미만) <span className="text-red-900 underline">별도의 회수 절차 없이 현장 폐기</span>함. 
             </p>
          </div>

        </div>
      </div>
    </div>
  );
}