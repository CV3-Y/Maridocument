"use client";
import Image from "next/image";
import ProgressBar from "./ProgressBar";

export default function SehrDetail() {
  return (
    // 배경: 고급스러운 다크 그레이 + 금색 테두리 (VIP 멤버십 느낌)
    <div className="group p-6 border-t border-yellow-600/50 bg-[#111111] animate-fadeIn text-xs font-mono relative overflow-hidden">
      
      {/* 배경 장식: 달러/화폐 기호 워터마크 */}
      <div className="absolute top-[-10%] right-[-5%] opacity-[0.03] pointer-events-none rotate-[-20deg] text-9xl text-yellow-500 font-serif">
        $
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* (좌측) 프로필: 걸어 다니는 기업 */}
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-4">
          
          {/* 이미지 프레임 (O1.png) - 신용카드/멤버십 카드 느낌 */}
          <div className="border border-yellow-600/40 bg-gradient-to-br from-neutral-800 to-black p-2 relative aspect-square flex items-center justify-center overflow-hidden z-0 shadow-lg">
             
             {/* 1. 캐릭터 이미지 (O1.png) */}
             <div className="absolute inset-0 z-0 transform scale-110 rotate-[-1deg] transition-transform duration-500 ease-out group-hover:rotate-0 group-hover:scale-105 origin-center shadow-[0_0_20px_rgba(234,179,8,0.2)]">
               <Image 
                 src="/O1.png"
                 alt="Sehr Portrait"
                 fill
                 // 세르: 차분하고 고급스러운 톤 + 샤픈 효과
                 className="object-cover object-center opacity-90 contrast-110 brightness-105"
               />
               {/* 금색 펄 오버레이 */}
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
             </div>

             {/* 2. IC 칩 장식 */}
             <div className="absolute top-4 left-4 w-10 h-8 bg-yellow-600/80 rounded-md border border-yellow-400 opacity-80 pointer-events-none shadow-sm flex items-center justify-center">
                <div className="w-6 h-5 border border-black/30 grid grid-cols-2"></div>
             </div>

             {/* 3. 상태 표시 (입금 대기) */}
             <div className="absolute bottom-3 right-3 text-right z-20 pointer-events-none">
               <span className="text-[9px] text-yellow-500 font-bold block bg-black/80 px-2 py-1 border border-yellow-600">
                 PAYMENT: VERIFIED
               </span>
             </div>
          </div>

          <div className="border border-yellow-600/30 p-3 bg-neutral-900/80">
            <h4 className="text-yellow-600 font-bold mb-2 border-b border-yellow-800/50 pb-1">CONTRACTOR INFO</h4>
            <ul className="space-y-1.5 opacity-90 text-gray-300">
              <li className="flex justify-between"><span className="opacity-50">CODENAME:</span> <span>Golden_Guard</span></li>
              <li className="flex justify-between"><span className="opacity-50">AGE:</span> <span>18</span></li>
              <li className="flex justify-between"><span className="opacity-50">CLASS:</span> <span>Mercenary / Dealer</span></li>
              <li className="flex justify-between"><span className="opacity-50">RATE:</span> <span className="text-yellow-500 font-bold">PREMIUM (VIP)</span></li>
            </ul>
          </div>

          {/* 소지품 (비즈니스 도구) */}
          <div className="border border-gray-700 p-3 bg-neutral-900/50">
             <h4 className="text-gray-400 font-bold mb-2 text-[10px]">BUSINESS TOOLS</h4>
             <ul className="space-y-2 text-[10px] opacity-80 text-gray-400">
               <li className="flex items-start gap-2">
                 <span className="text-yellow-600 shrink-0">■</span>
                 <span><b className="text-gray-200">카드 단말기</b>: 마력 결제 가능. 할부 지원 안 함.</span>
               </li>
               <li className="flex items-start gap-2">
                 <span className="text-yellow-600 shrink-0">■</span>
                 <span><b className="text-gray-200">전자 계약서</b>: 약관이 깨알같이 적혀있음. (면책 조항 포함)</span>
               </li>
               <li className="flex items-start gap-2">
                 <span className="text-yellow-600 shrink-0">■</span>
                 <span><b className="text-gray-200">명함</b>: 금박 입힘. &quot;당신의 안전, 자본으로 지키세요.&quot;</span>
               </li>
             </ul>
          </div>
        </div>
        
        {/* (우측) 상세 데이터 분석 */}
        <div className="col-span-1 lg:col-span-8 space-y-6">
          
          {/* 1. 업무 능력치 */}
          <div className="bg-neutral-900 border border-yellow-900/30 p-4">
            <h4 className="text-yellow-600 font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span> 
              SERVICE QUALITY METRICS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                 <ProgressBar label="DEFENSE (경호 능력)" value={98} type="normal" />
                 <p className="text-[10px] text-yellow-600 opacity-80 mt-1">
                   * 입금액에 비례하여 방어막 강도 증가.
                 </p>
              </div>
              <div>
                 <ProgressBar label="EMOTION (감정 개입)" value={5} type="inverse" />
                 <p className="text-[10px] text-gray-500 opacity-80 mt-1">
                   * 공사 구분 철저. 의뢰인에게 사적인 감정 없음.
                 </p>
              </div>
              <div>
                 <ProgressBar label="EQUIPMENT (장비 수준)" value={100} type="normal" />
                 <p className="text-[10px] text-blue-300 opacity-80 mt-1">
                   * 최신형 마도구 및 커스텀 무기 사용.
                 </p>
              </div>
              <div>
                 <ProgressBar label="CALCULATION (이해타산)" value={100} type="normal" />
                 <p className="text-[10px] text-yellow-600 opacity-80 mt-1">
                   * 모든 상황을 비용/편익 분석(Cost-Benefit Analysis)으로 판단.
                 </p>
              </div>
            </div>
          </div>

          {/* 2. 서비스 가격표 (Service Menu) - 추가됨 */}
          <div className="border border-yellow-600/40 bg-[#1a1500] p-4 text-[11px]">
             <h4 className="text-yellow-500 font-bold mb-3 flex justify-between items-center">
                <span>OFFICIAL PRICE LIST (2025 Ver.)</span>
                <span className="text-[9px] text-black bg-yellow-600 px-1 font-bold">NO REFUND</span>
             </h4>
             <table className="w-full text-left opacity-90 text-gray-300">
               <thead className="border-b border-yellow-900/50 text-yellow-700">
                 <tr>
                   <th className="pb-2 pl-2">SERVICE TYPE</th>
                   <th className="pb-2">DESCRIPTION</th>
                   <th className="pb-2 text-right pr-2">PRICE</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-yellow-900/20">
                 <tr>
                   <td className="py-2 pl-2 font-bold">Basic Escort</td>
                   <td>단순 동행. 무기 미사용. (말동무 X)</td>
                   <td className="text-right pr-2">1,000,000 C / Day</td>
                 </tr>
                 <tr>
                   <td className="py-2 pl-2 font-bold">Combat Mode</td>
                   <td>전투 개입. 적 섬멸 포함.</td>
                   <td className="text-right pr-2">500,000 C / Kill</td>
                 </tr>
                 <tr>
                   <td className="py-2 pl-2 font-bold text-red-400">Emergency</td>
                   <td>절체절명의 위기 구출.</td>
                   <td className="text-right pr-2 text-red-400">Asset 50%</td>
                 </tr>
                 <tr>
                   <td className="py-2 pl-2 font-bold text-blue-400">Overtime</td>
                   <td>계약 시간 초과 근무 (1분 단위).</td>
                   <td className="text-right pr-2">1.5x Rate</td>
                 </tr>
               </tbody>
             </table>
          </div>

          {/* 3. 계약 위반 사례 (Breach of Contract) */}
          <div className="border-l-4 border-red-500 bg-neutral-900 p-4 font-mono text-[10px]">
             <h4 className="text-red-500 font-bold mb-2">INCIDENT REPORT: UNPAID DEBT</h4>
             <div className="space-y-2 text-gray-400">
               <p>
                 <span className="text-gray-500">[TARGET]:</span> 갱단 &#39;검은 뱀&#39; 보스
               </p>
               <p>
                 <span className="text-gray-500">[DETAILS]:</span> 
                 의뢰인은 임무 완료 후 <span className="text-white">&quot;나중에 주겠다&quot;</span>며 잔금 지급을 2회 지연함. 
                 이에 세르는 계약 조항 제 14조 3항 <span className="text-red-400 underline">&apos;채무 불이행 시 신체 포기 각서 자동 발효&apos;</span>에 의거, 
                 대상에게 제공했던 보호 서비스를 즉시 중단하고 <span className="text-yellow-600 font-bold">적대 세력에게 위치 좌표를 판매함.</span>
               </p>
               <p className="mt-2 border-t border-gray-800 pt-2 text-right italic text-yellow-600">
                 &quot;신용은 생명입니다. 문자 그대로.&quot;
               </p>
             </div>
          </div>

          {/* 4. 협상 로그 (Audio Log) */}
          <div className="bg-black border border-gray-800 p-4 font-mono shadow-lg relative">
             <div className="absolute top-2 right-2">
               <span className="text-[9px] text-green-500 animate-pulse">● REC</span>
             </div>
             
             <p className="text-[10px] text-gray-500 font-bold mb-2">NEGOTIATION LOG</p>
             <div className="space-y-2 opacity-90 text-[11px]">
               <p><span className="text-gray-500">[CLIENT]:</span> &quot;저, 저기! 뒤에 괴물이 오는데?! 빨리 좀 막아줘!&quot;</p>
               <p><span className="text-yellow-500">[SEHR]:</span> &quot;계약 시간인 오후 6시가 지났습니다. 추가 근무 수당 승인이 필요합니다.&quot;</p>
               <p className="pl-4 text-[10px] text-gray-600 italic">* [SFX]: 괴물의 포효 소리, 시계 알람 소리 (BEEP)</p>
               <p><span className="text-gray-500">[CLIENT]:</span> &quot;알았어! 준다고! 두 배로 줄게! 빨리!!&quot;</p>
               <p><span className="text-yellow-500">[SEHR]:</span> &quot;구두 계약 성립. 녹음 완료. ...처리하겠습니다.&quot;</p>
               <p className="pl-4 text-[10px] text-gray-600 italic">* [SFX]: 단말기 결제음 (Cha-Ching!), 검격 소리</p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}