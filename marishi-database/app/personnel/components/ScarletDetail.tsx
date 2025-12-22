"use client";
import Image from "next/image";
import ProgressBar from "./ProgressBar";

export default function ScarletDetail() {
  return (
    // 배경: 짙은 핏빛 + 우아한 테두리
    <div className="group p-6 border-t-4 border-red-900 bg-[#0a0000] animate-fadeIn text-xs font-mono relative overflow-hidden">
      
      {/* 배경 장식: 핏방울 워터마크 */}
      <div className="absolute top-[-20%] right-[-10%] opacity-20 pointer-events-none rotate-12">
         <div className="w-96 h-96 bg-red-900/30 rounded-full blur-3xl"></div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* (좌측) 프로필: 여왕의 초상화 */}
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-4">
          
          {/* 이미지 프레임 */}
          <div className="border-4 border-double border-yellow-700/60 bg-red-950/20 p-1 relative aspect-square flex items-center justify-center overflow-hidden z-0 shadow-2xl">
             
             <div className="absolute inset-0 z-0 transform scale-110 rotate-[-1deg] transition-transform duration-700 ease-out group-hover:rotate-0 group-hover:scale-105 origin-center shadow-[0_0_20px_rgba(185,28,28,0.4)]">
               <Image 
                 src="/I1.png"
                 alt="Scarlet Portrait"
                 fill
                 className="object-cover object-center opacity-90 contrast-125 saturate-125 brightness-90"
               />
               <div className="absolute inset-0 bg-red-900/10 mix-blend-color-burn"></div>
             </div>

             {/* 핏자국 장식 */}
             <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-red-900/80 to-transparent opacity-60 mix-blend-multiply pointer-events-none"></div>

             {/* 등급 표시 */}
             <div className="absolute bottom-4 left-0 right-0 text-center z-20 pointer-events-none">
               <span className="text-[12px] font-serif italic text-yellow-600 font-bold bg-black/80 px-4 py-1 border-x border-yellow-700">
                 The Queen of Versailles
               </span>
             </div>
          </div>

          {/* 프로필 정보 */}
          <div className="border border-red-900/50 p-4 bg-red-950/10 backdrop-blur-sm">
            <h4 className="text-red-500 font-bold mb-2 border-b border-red-900/50 pb-1 flex justify-between font-serif">
              <span>NOBILITY RECORD</span>
              <span className="text-[9px] text-yellow-600 border border-yellow-800 px-1">CLASSIFIED</span>
            </h4>
            <ul className="space-y-1.5 opacity-90 text-red-100/80">
              <li className="flex justify-between"><span className="opacity-50">NAME:</span> <span className="font-serif">Scarlet</span></li>
              <li className="flex justify-between"><span className="opacity-50">TITLES:</span> <span>Queen, Red Mistress</span></li>
              <li className="flex justify-between"><span className="opacity-50">AGE:</span> <span>Unknown (Est. 100+)</span></li>
              <li className="flex justify-between"><span className="opacity-50">THREAT:</span> <span className="text-red-500 font-bold animate-pulse">EXTREME (S+)</span></li>
            </ul>
          </div>

          {/* 소지품 (사치품) */}
          <div className="border border-yellow-900/30 p-3 bg-black/40">
             <h4 className="text-yellow-700 font-bold mb-2 text-[10px]">LUXURY INVENTORY</h4>
             <ul className="space-y-1 text-[10px] opacity-80 text-yellow-100/60">
               <li>• <span className="text-red-400">크리스탈 와인잔</span>: 내용물은 A급 마도사의 혈액.</li>
               <li>• <span className="text-yellow-600">가시 채찍</span>: '교육' 및 처형용. 마력 전도율 높음.</li>
               <li>• <span className="text-blue-300">얼어붙은 흑장미</span>: 영구 보존 처리된 시체 부품.</li>
               <li>• <span className="text-gray-500">인간 가죽 의자</span>: 본거지(Throne)에 배치됨.</li>
             </ul>
          </div>
        </div>
        
        {/* (우측) 심층 분석 데이터 */}
        <div className="col-span-1 lg:col-span-8 space-y-6">
          
          {/* 1. 능력치 */}
          <div className="bg-red-950/20 border border-red-900/50 p-4">
            <h4 className="text-red-600 font-bold mb-4 flex items-center gap-2 font-serif">
              <span className="text-xl">♛</span> 
              ROYAL STATUS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                 <ProgressBar label="BLOOD MAGIC (혈마법)" value={99} type="normal" />
                 <p className="text-[10px] text-red-400 opacity-80 mt-1">
                   * 광범위 혈액 동결 및 조작. 타인의 혈액을 무기로 사용.
                 </p>
              </div>
              <div>
                 <ProgressBar label="AESTHETIC OBSESSION (탐미주의)" value={100} type="normal" />
                 <p className="text-[10px] text-yellow-600 opacity-80 mt-1">
                   * "아름답지 않은 죽음은 죄악이다." 비효율적인 처형 방식 고수.
                 </p>
              </div>
              <div>
                 <ProgressBar label="LEADERSHIP (카리스마)" value={95} type="normal" />
                 <p className="text-[10px] text-red-500 opacity-80 mt-1">
                   * 절대적인 공포와 경외심으로 조직을 장악함.
                 </p>
              </div>
              <div>
                 <ProgressBar label="SANITY (이성)" value={30} type="inverse" />
                 <p className="text-[10px] text-gray-500 opacity-80 mt-1">
                   * 극도의 오만함으로 인해 현실 감각과 윤리관이 소멸됨.
                 </p>
              </div>
            </div>
          </div>

          {/* 2. 심리 분석: 권태와 사디즘 */}
          <div className="border border-red-800/40 bg-[#1a0505] p-4 relative">
             <h4 className="text-red-500 font-bold mb-3 font-serif italic">Psychological Profile: The Bored Immortal</h4>
             <div className="space-y-3 opacity-80 leading-relaxed text-red-100/70 text-[11px]">
                <p>
                  <span className="text-red-400 font-bold">[권태 (Ennui)]</span><br/>
                  오랜 세월을 살아온 것으로 추정되며, 삶에 지독한 권태를 느낌. 
                  일반적인 자극에는 반응하지 않으며, <span className="text-red-500 font-bold">고결한 영혼이 타락하거나 절망하는 순간</span>에만 희열을 느낌. 
                  단순한 살육보다는 정신적인 붕괴를 유도하는 고문을 선호함.
                </p>
                <p>
                  <span className="text-yellow-600 font-bold">[소유욕]</span><br/>
                  부하들을 &#39;동료&#39;가 아닌 &#39;수집품&#39;이나 &#39;애완동물&#39;로 인식함. 
                  친위대장 <span className="text-blue-300">프레이(Frey)</span>를 충실한 사냥개로, 
                  마스코트 <span className="text-pink-300">샬롯(Charlotte)</span>을 귀여운 인형으로 대하며 소유권을 주장함.
                </p>
             </div>
          </div>

          {/* 3. 미식 기록 (The Gourmet Log) - 추가된 부분 */}
          <div className="border border-yellow-900/20 bg-black/60 p-4">
             <h4 className="text-yellow-600 font-bold mb-3 flex justify-between">
                <span>GOURMET LOG (DIETARY RECORDS)</span>
                <span className="text-[9px] border border-yellow-800 px-1 text-yellow-800">CLASS A ONLY</span>
             </h4>
             <table className="w-full text-[10px] text-left opacity-80 text-gray-300">
               <thead>
                 <tr className="border-b border-red-900/50 text-red-500">
                   <th className="pb-2">DATE</th>
                   <th className="pb-2">INGREDIENT (VICTIM)</th>
                   <th className="pb-2">PREPARATION</th>
                   <th className="pb-2">RATING</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-red-900/20">
                 <tr>
                   <td className="py-2">2025.12.18</td>
                   <td>B-Class Knight</td>
                   <td>Flash Frozen (Heart)</td>
                   <td className="text-yellow-600">★★☆☆☆ (Bland)</td>
                 </tr>
                 <tr>
                   <td className="py-2">2025.12.20</td>
                   <td>Innocent Civilian</td>
                   <td>Blood Wine (Aged)</td>
                   <td className="text-yellow-600">★★★☆☆ (Sweet)</td>
                 </tr>
                 <tr>
                   <td className="py-2">2025.12.21</td>
                   <td>A-Class Mage</td>
                   <td>Sorbet (Soul Infused)</td>
                   <td className="text-red-500 font-bold">★★★★★ (Divine)</td>
                 </tr>
               </tbody>
             </table>
          </div>

          {/* 4. 여왕의 어록 (Audio Log) */}
          <div className="bg-black border-l-4 border-red-700 p-4 font-serif shadow-lg">
             <p className="text-[10px] text-red-600 font-bold mb-2 tracking-widest">RECORDING: THRONE ROOM</p>
             <div className="space-y-2 opacity-90 text-[11px]">
               <p><span className="text-red-400">[SCARLET]:</span> &quot;흐음... 비명 소리가 조금 탁하네. 악기는 관리가 생명이라고 했잖니?&quot;</p>
               <p className="pl-4 text-[10px] text-red-900 italic">* [SFX]: 채찍 소리(Whip Crack), 억눌린 신음</p>
               <p><span className="text-gray-500">[VICTIM]:</span> &quot;제발... 죽여줘...&quot;</p>
               <p><span className="text-red-400">[SCARLET]:</span> &quot;죽음은 안식이란다. 너 같은 천한 것에겐 과분해. 조금 더 붉게 피어보렴.&quot;</p>
               <p><span className="text-red-400">[SCARLET]:</span> &quot;프레이? 이 아이의 손가락부터 얼리렴. 아주 천천히...&quot;</p>
             </div>
             
             <div className="border-t border-red-900/50 pt-2 mt-3 text-right">
               <span className="text-yellow-600 font-bold border border-yellow-800 px-2 py-1 text-[9px]">
                 NO MERCY GRANTED
               </span>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}