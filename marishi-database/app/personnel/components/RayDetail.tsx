"use client";
import Image from "next/image";
import ProgressBar from "./ProgressBar";

export default function RayDetail() {
  return (
    // group 클래스 추가
    <div className="group p-6 border-t border-green-800 bg-black/90 animate-fadeIn text-xs font-mono relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* (좌측) 프로필 및 비즈니스 정보 */}
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-4">
          
          {/* 이미지 프레임 (D1.png) - 쿨톤 */}
          <div className="border border-blue-800/50 bg-blue-950/10 p-2 relative aspect-square flex items-center justify-center overflow-hidden z-0">
             
             {/* 1. 캐릭터 이미지 (D1.png) - 상호작용 회전 */}
             <div className="absolute inset-0 z-0 transform scale-110 rotate-[-2deg] transition-transform duration-500 ease-out group-hover:rotate-0 group-hover:scale-105 origin-center shadow-[0_5px_15px_rgba(59,130,246,0.2)] border border-blue-500/30">
               <Image 
                 src="/D1.png"
                 alt="Ray Portrait"
                 fill
                 // 레이: 차갑고 창백한 느낌 + 블루 틴트 + 채도 감소(색맹 표현)
                 className="object-cover object-center opacity-90 contrast-125 brightness-110 hue-rotate-180 saturate-0"
               />
               {/* 쿨톤 오버레이 */}
               <div className="absolute inset-0 bg-blue-900/20 mix-blend-hard-light"></div>
             </div>

             {/* 2. 노이즈 오버레이 */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-10 pointer-events-none"></div>

             {/* 3. 해결사 UI */}
             <div className="absolute top-2 right-2 z-20 pointer-events-none">
               <span className="text-[9px] text-blue-300 font-bold border border-blue-500 px-2 py-1 bg-black/80 backdrop-blur-sm">
                 CONTRACT: ACTIVE
               </span>
             </div>
             
             <div className="absolute bottom-2 left-2 right-2 text-center z-20 pointer-events-none">
               <span className="text-3xl text-blue-100/80 font-black block drop-shadow-lg tracking-tighter">SPECIALIST</span>
             </div>
          </div>

          <div className="border border-green-800/50 p-3 bg-black/40">
            <h4 className="text-green-500 font-bold mb-2 border-b border-green-900 pb-1">BASIC INFO</h4>
            <ul className="space-y-1.5 opacity-90">
              <li className="flex justify-between"><span className="opacity-50">CODENAME:</span> <span>Blue_Cutter</span></li>
              <li className="flex justify-between"><span className="opacity-50">AGE:</span> <span>19</span></li>
              <li className="flex justify-between"><span className="opacity-50">CLASS:</span> <span>Fixer (해결사)</span></li>
              <li className="flex justify-between"><span className="opacity-50">RATE:</span> <span className="text-blue-400 font-bold">S-Class (High Cost)</span></li>
            </ul>
          </div>

          {/* 소지품 분석 (업무용 장비) - 확장됨 */}
          <div className="border border-blue-900/30 p-3 bg-blue-950/5">
             <h4 className="text-blue-400 font-bold mb-2 text-[10px]">EQUIPMENT LOG</h4>
             <ul className="space-y-2 text-[10px] opacity-80 text-gray-300">
               <li className="flex items-start gap-2">
                 <span className="text-blue-500 shrink-0">■</span>
                 <span><b className="text-green-400">창염 라이터</b>: 마법 촉매제이자 유일한 기호식품(담배) 사용 도구.</span>
               </li>
               <li className="flex items-start gap-2">
                 <span className="text-blue-500 shrink-0">■</span>
                 <span><b className="text-green-400">와이어(Nano-Wire)</b>: 육안 식별 불가. 절단면이 깨끗함.</span>
               </li>
               <li className="flex items-start gap-2">
                 <span className="text-blue-500 shrink-0">■</span>
                 <span><b className="text-gray-500">고액 수표</b>: 최근 의뢰비. 피가 묻어있음.</span>
               </li>
             </ul>
          </div>
        </div>
        
        {/* (우측) 상세 데이터 분석 */}
        <div className="col-span-1 lg:col-span-8 space-y-6">
          
          {/* 1. 능력치 및 마모도 */}
          <div className="bg-blue-950/10 border border-blue-900/30 p-4">
            <h4 className="text-blue-400 font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span> 
              PERFORMANCE METRICS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                 <ProgressBar label="PRECISION (정밀도)" value={99} type="normal" />
                 <p className="text-[10px] text-blue-300 opacity-80 mt-1">
                   * 오차 범위 0.01mm. 외과 수술 수준의 절단 능력.
                 </p>
              </div>
              <div>
                 <ProgressBar label="EROSION: ACHROMATOPSIA (색맹)" value={25} type="inverse" />
                 <p className="text-[10px] text-gray-400 opacity-80 mt-1">
                   * Stage 1 진행 중. 시각 정보의 채도가 소실됨 (흑백).
                 </p>
              </div>
              <div>
                 <ProgressBar label="COMPOSURE (냉철함)" value={95} type="normal" />
                 <p className="text-[10px] text-blue-300 opacity-80 mt-1">
                   * 심박수 변화 거의 없음. 감정 동요를 업무 방해 요소로 간주.
                 </p>
              </div>
              <div>
                 <ProgressBar label="EMPATHY (공감 능력)" value={15} type="normal" />
                 <p className="text-[10px] text-red-400 opacity-80 mt-1">
                   * 비즈니스 범주 외의 인간관계 거부. 극단적 실리주의.
                 </p>
              </div>
            </div>
          </div>

          {/* 2. 심리/전술 보고서 - 확장됨 */}
          <div className="border border-green-800/50 p-4 relative">
             <h4 className="text-green-400 font-bold mb-3">PSYCHOLOGICAL PROFILE: THE OBSERVER</h4>
             <div className="space-y-3 opacity-80 leading-relaxed text-green-100 text-[11px]">
                <p>
                  <span className="text-blue-400 font-bold">[회색 도시의 관찰자]</span><br/>
                  마모(Erosion) 부작용으로 인해 세상을 <span className="text-gray-500">무채색(Grayscale)</span>으로 인지함. 
                  그녀에게 유일하게 색채를 띠는 것은 자신의 마법인 <span className="text-blue-500 font-bold">&apos;창염(Blue Flame)&apos;</span>과 
                  타겟이 흘리는 <span className="text-red-500 font-bold">&apos;혈액&apos;</span>뿐임. 
                  이는 타인을 생명체가 아닌 &apos;처리해야 할 유색 오브젝트&apos;로 보는 냉소적 태도를 강화시킴.
                </p>
                <p>
                  <span className="text-green-500 font-bold">[오라토리오 탈주자 의혹]</span><br/>
                  과거 기록이 말소되어 있으나, 사용하는 전술(CQC, 와이어)이 오라토리오 특수임무조의 그것과 98% 일치함. 
                  현재는 프리랜서로 전향하여 돈을 목적으로 활동하지만, 오라토리오와 관련된 의뢰는 기피하거나 추가 요금을 요구함.
                </p>
             </div>
          </div>

          {/* 3. 거래 내역서 (Transaction Log) - 추가됨 */}
          <div className="border border-gray-700 bg-gray-900/50 p-4 font-mono text-[11px]">
             <h4 className="text-gray-400 font-bold mb-3 border-b border-gray-700 pb-1 flex justify-between">
                <span>RECENT TRANSACTION</span>
                <span>ID: #9902-AX</span>
             </h4>
             <div className="grid grid-cols-12 gap-2 text-gray-300 opacity-90 mb-2">
                <div className="col-span-3 text-gray-500">SERVICE:</div>
                <div className="col-span-9">Obstacle Removal (Class B Mage)</div>
                
                <div className="col-span-3 text-gray-500">STATUS:</div>
                <div className="col-span-9 text-green-400">COMPLETED</div>
                
                <div className="col-span-3 text-gray-500">FEE:</div>
                <div className="col-span-9">5,000,000 C (Paid in advance)</div>
                
                <div className="col-span-3 text-gray-500">NOTE:</div>
                <div className="col-span-9 text-blue-300">
                  &quot;No body found. Clean burn requested.&quot;
                </div>
             </div>
          </div>

          {/* 4. 거래 대화 (Audio Log) */}
          <div className="bg-black border-l-4 border-blue-700 p-4 font-mono">
             <div className="flex justify-between items-end mb-2">
               <p className="text-[10px] text-blue-500 font-bold">AUDIO RECORDING</p>
               <span className="text-[9px] bg-blue-900/30 text-blue-300 px-1 border border-blue-800">ENCRYPTED</span>
             </div>
             
             <div className="space-y-2 opacity-90 text-[11px]">
               <p><span className="text-gray-500">[CLIENT]:</span> &quot;...이 녀석만 처리하면 정말 뒤탈 없는 거 맞지?&quot;</p>
               <p><span className="text-blue-400">[RAY]:</span> &quot;입금 확인했습니다. 질문은 유료 서비스에 포함되지 않습니다.&quot;</p>
               <p className="pl-4 text-[10px] text-blue-300 italic">* [SFX]: 라이터 켜지는 소리 (Click), 푸른 불꽃의 일렁임</p>
               <p><span className="text-blue-400">[RAY]:</span> &quot;의뢰 내용은 &apos;장애물 제거&apos;. 깔끔하게 태워드릴 테니, 재가 날리는 건 감수하시죠.&quot;</p>
               <p><span className="text-gray-500">[TARGET]:</span> &quot;자, 잠깐! 돈은 내가 더 줄게! 두 배... 아니 세 배!!&quot;</p>
               <p><span className="text-blue-400">[RAY]:</span> &quot;거절합니다. 신용 등급 하락은 사양이라서요. ...잘 가세요.&quot;</p>
             </div>
             
             <div className="border-t border-green-900/50 pt-2 mt-3 text-right">
               <span className="text-green-500 font-bold bg-green-950/20 px-2 py-1 text-[9px]">
                 STATUS: MISSION ACCOMPLISHED
               </span>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}