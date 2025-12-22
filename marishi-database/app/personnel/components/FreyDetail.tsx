"use client";
import Image from "next/image";
import ProgressBar from "./ProgressBar";

export default function FreyDetail() {
  return (
    // 배경: 깊은 심해의 색 + 얼음 결정 테두리
    <div className="group p-6 border-t border-cyan-400 bg-[#000510] animate-fadeIn text-xs font-mono relative overflow-hidden">
      
      {/* 배경 장식: 눈 결정 워터마크 */}
      <div className="absolute top-[-10%] left-[-10%] opacity-10 pointer-events-none rotate-45 text-9xl text-cyan-200 font-serif">
        ❄
      </div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* (좌측) 프로필: 스칼렛의 검 */}
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-4">
          
          {/* 이미지 프레임 (L1.png) - 얼어붙은 액자 */}
          <div className="border-2 border-cyan-300/50 bg-cyan-950/20 p-2 relative aspect-square flex items-center justify-center overflow-hidden z-0">
             
             {/* 1. 캐릭터 이미지 (L1.png) */}
             <div className="absolute inset-0 z-0 transform scale-110 rotate-[-1deg] transition-transform duration-700 ease-out group-hover:rotate-0 group-hover:scale-105 origin-center shadow-[0_0_20px_rgba(34,211,238,0.3)]">
               <Image 
                 src="/L1.png"
                 alt="Frey Portrait"
                 fill
                 // 프레이: 차갑고 창백한 톤 + 명료함
                 className="object-cover object-center opacity-90 contrast-110 brightness-110 hue-rotate-180 saturate-50"
               />
               {/* 서리 낀 효과 오버레이 */}
               <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 via-transparent to-white/10 mix-blend-overlay"></div>
             </div>

             {/* 2. 얼음 결정 장식 */}
             <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-cyan-200/20 to-transparent pointer-events-none backdrop-blur-[1px]"></div>

             {/* 3. 상태 태그 */}
             <div className="absolute top-2 left-2 z-20 pointer-events-none">
               <span className="text-[9px] text-cyan-900 font-bold bg-cyan-200 px-2 py-1 shadow-lg border border-white">
                 ❄ ABSOLUTE ZERO
               </span>
             </div>
          </div>

          <div className="border border-cyan-500/50 p-3 bg-black/40">
            <h4 className="text-cyan-400 font-bold mb-2 border-b border-cyan-900 pb-1">GUARD PROFILE</h4>
            <ul className="space-y-1.5 opacity-90 text-cyan-100">
              <li className="flex justify-between"><span className="opacity-50">CODENAME:</span> <span>Winter_Knight</span></li>
              <li className="flex justify-between"><span className="opacity-50">AGE:</span> <span>18</span></li>
              <li className="flex justify-between"><span className="opacity-50">CLASS:</span> <span>Royal Guard (친위대)</span></li>
              <li className="flex justify-between"><span className="opacity-50">LOYALTY:</span> <span className="text-cyan-400 font-bold">UNBREAKABLE</span></li>
            </ul>
          </div>

          {/* 소지품 (충성심의 증거) */}
          <div className="border border-cyan-800/30 p-3 bg-cyan-950/10">
             <h4 className="text-cyan-500 font-bold mb-2 text-[10px]">EQUIPMENT CHECK</h4>
             <ul className="space-y-2 text-[10px] opacity-80 text-gray-300">
               <li className="flex items-start gap-2">
                 <span className="text-cyan-500 shrink-0">◆</span>
                 <span><b className="text-white">빙결의 검</b>: 닿는 순간 세포를 괴사시키는 마검.</span>
               </li>
               <li className="flex items-start gap-2">
                 <span className="text-cyan-500 shrink-0">◆</span>
                 <span><b className="text-white">하얀 장갑</b>: 스칼렛 외의 타인과 접촉을 피하기 위함.</span>
               </li>
               <li className="flex items-start gap-2">
                 <span className="text-cyan-500 shrink-0">◆</span>
                 <span><b className="text-red-400">피 묻은 손수건</b>: 스칼렛이 하사한 물건. 유일하게 소중히 다룸.</span>
               </li>
             </ul>
          </div>
        </div>
        
        {/* (우측) 상세 데이터 분석 */}
        <div className="col-span-1 lg:col-span-8 space-y-6">
          
          {/* 1. 능력치 (감정 없음) */}
          <div className="bg-cyan-950/20 border border-cyan-900/50 p-4">
            <h4 className="text-cyan-400 font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></span> 
              THERMODYNAMIC STATUS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                 <ProgressBar label="FREEZING POINT (빙결력)" value={98} type="normal" />
                 <p className="text-[10px] text-cyan-300 opacity-80 mt-1">
                   * 반경 50m를 순식간에 영하 100도로 냉각 가능.
                 </p>
              </div>
              <div>
                 <ProgressBar label="EMOTION (감정 수치)" value={1} type="normal" />
                 <p className="text-[10px] text-gray-400 opacity-80 mt-1">
                   * 감정 중추가 동결된 상태. 명령 수행 기계에 가까움.
                 </p>
              </div>
              <div>
                 <ProgressBar label="OBEDIENCE (스칼렛 충성도)" value={100} type="normal" />
                 <p className="text-[10px] text-red-400 opacity-80 mt-1">
                   * 스칼렛의 명령이라면 자신의 심장도 얼릴 수 있음.
                 </p>
              </div>
              <div>
                 <ProgressBar label="FLEXIBILITY (융통성)" value={0} type="inverse" />
                 <p className="text-[10px] text-gray-500 opacity-80 mt-1">
                   * 명령의 행간을 읽지 못함. 입력된 대로만 행동.
                 </p>
              </div>
            </div>
          </div>

          {/* 2. 심리 분석: 얼음 조각상 */}
          <div className="border border-cyan-700/40 p-4 bg-black/50 relative">
             <h4 className="text-cyan-400 font-bold mb-3">PSYCHOLOGICAL PROFILE: THE STATUE</h4>
             <div className="space-y-3 opacity-90 leading-relaxed text-cyan-100/80 text-[11px]">
                <p>
                  <span className="text-white font-bold">[자아의 부재]</span><br/>
                  자신을 독립된 인격체가 아닌, 리더 <span className="text-red-400">스칼렛(Scarlet)</span>의 소유물(검)로 인식함. 
                  개인적인 욕구나 선호가 전무하며, 명령이 없을 때는 조각상처럼 미동도 없이 대기함.
                </p>
                <p>
                  <span className="text-cyan-400 font-bold">[직설적 사고]</span><br/>
                  베르사유 특유의 '탐미주의적 은유'를 전혀 이해하지 못함. 
                  스칼렛이 <span className="text-gray-400">&quot;저 아이를 붉게 피워보렴&quot;</span>이라고 말하면, 
                  고민 없이 <span className="text-gray-400">&quot;전신 박피 및 출혈 유도&quot;</span>로 해석하여 수행함.
                </p>
             </div>
          </div>

          {/* 3. 호위 로그 (Escort Log) - 추가됨 */}
          <div className="border-l-4 border-white bg-cyan-900/10 p-4 font-mono text-[10px]">
             <h4 className="text-white font-bold mb-2">DUTY LOG: SCARLET'S SHADOW</h4>
             <table className="w-full text-left opacity-90 text-gray-400">
               <tbody className="divide-y divide-cyan-900/30">
                 <tr>
                   <td className="py-1 w-20 text-cyan-500">08:00</td>
                   <td>기상 및 장비 점검. 검 날 온도 -80°C 유지 확인.</td>
                 </tr>
                 <tr>
                   <td className="py-1 text-cyan-500">12:30</td>
                   <td>스칼렛 님의 식사 시간. 접근하는 파리(Insect) 3마리 공중 동결 처분.</td>
                 </tr>
                 <tr>
                   <td className="py-1 text-cyan-500">15:00</td>
                   <td>침입자 발생. <span className="text-cyan-200">"길을 막지 마라."</span> 경고 후 전신 동결.</td>
                 </tr>
                 <tr>
                   <td className="py-1 text-cyan-500">22:00</td>
                   <td>스칼렛 님의 침실 문 앞 보초 근무 개시 (종료 예정: 06:00).</td>
                 </tr>
               </tbody>
             </table>
          </div>

          {/* 4. 전투 기록 (Audio Log) */}
          <div className="bg-black border border-cyan-800 p-4 font-mono shadow-lg relative">
             <p className="text-[10px] text-cyan-500 font-bold mb-2">ENGAGEMENT RECORD</p>
             <div className="space-y-2 opacity-90 text-[11px]">
               <p><span className="text-gray-500">[INTRUDER]:</span> &quot;비켜! 난 네 주인한테 볼일이 있어!&quot;</p>
               <p><span className="text-cyan-300">[FREY]:</span> &quot;허가되지 않은 접근.&quot;</p>
               <p className="pl-4 text-[10px] text-cyan-600 italic">* [SFX]: 공기가 얼어붙는 소리 (Crackle), 칼을 뽑는 소리</p>
               <p><span className="text-cyan-300">[FREY]:</span> &quot;식사 시간을 방해하는 자는, 동의 없이 얼려서 부숴버리겠다.&quot;</p>
               <p><span className="text-gray-500">[INTRUDER]:</span> &quot;잠깐, 내 발이... 움직이지 않... 으아악!&quot;</p>
               <p className="pl-4 text-[10px] text-cyan-600 italic">* [SFX]: 얼음이 깨지는 소리 (Shatter)</p>
               <p><span className="text-cyan-300">[FREY]:</span> &quot;청소 완료. 복귀합니다.&quot;</p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}