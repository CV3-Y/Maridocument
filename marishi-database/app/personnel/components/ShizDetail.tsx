"use client";
import Image from "next/image";
import ProgressBar from "./ProgressBar";

export default function ShizDetail() {
  return (
    // group 클래스 추가
    <div className="group p-6 border-t border-green-800 bg-black/90 animate-fadeIn text-xs font-mono relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* (좌측) 프로필: 기계적이고 차가운 느낌 */}
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-4">
          
          {/* 이미지 프레임 (G1.png) */}
          <div className="border-2 border-emerald-800 bg-emerald-950/10 p-2 relative aspect-square flex items-center justify-center overflow-hidden z-0">
             
             {/* 1. 캐릭터 이미지 (G1.png) - 상호작용 회전 */}
             <div className="absolute inset-0 z-0 transform scale-110 rotate-[-2deg] transition-transform duration-500 ease-out group-hover:rotate-0 group-hover:scale-105 origin-center shadow-[0_5px_15px_rgba(16,185,129,0.2)] border border-emerald-900/50">
               <Image 
                 src="/G1.png"
                 alt="Shiz Portrait"
                 fill
                 // 시즈: 감정이 없는 차가운 톤 + 선명함
                 className="object-cover object-center opacity-90 contrast-125 saturate-50 brightness-90"
               />
               {/* 전술 HUD 오버레이 */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30 mix-blend-overlay"></div>
             </div>

             {/* 2. 노이즈 오버레이 */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-10 pointer-events-none"></div>

             {/* 3. 상태 표시 */}
             <div className="absolute top-2 left-2 z-20 pointer-events-none">
               <span className="text-[9px] text-emerald-100 font-bold bg-emerald-900/80 px-2 py-1 border-l-2 border-emerald-500">
                 SYSTEM: OPERATIONAL
               </span>
             </div>
             
             <div className="absolute bottom-2 left-0 right-0 text-center z-20 pointer-events-none">
               <span className="text-[10px] text-emerald-400 font-mono bg-black/70 px-2 py-0.5 border border-emerald-800 inline-block">
                 NO: 089 // EMOTION: NULL
               </span>
             </div>
          </div>

          <div className="border border-green-800/50 p-3 bg-black/40">
            <h4 className="text-green-500 font-bold mb-2 border-b border-green-900 pb-1">BASIC INFO</h4>
            <ul className="space-y-1.5 opacity-90">
              <li className="flex justify-between"><span className="opacity-50">CODENAME:</span> <span>Silent_Edge</span></li>
              <li className="flex justify-between"><span className="opacity-50">AGE:</span> <span>19 (Biological)</span></li>
              <li className="flex justify-between"><span className="opacity-50">CLASS:</span> <span>Special Ops (특수임무)</span></li>
              <li className="flex justify-between"><span className="opacity-50">STATUS:</span> <span className="text-emerald-500 font-bold">RE-EDUCATED (세뇌)</span></li>
            </ul>
          </div>

          {/* 소지품 분석 (무기 및 제어장치) - 확장됨 */}
          <div className="border border-green-800/30 p-3 bg-green-900/5">
             <h4 className="text-green-600 font-bold mb-2 text-[10px]">ARMAMENT SPECS</h4>
             <ul className="space-y-2 text-[10px] opacity-80 text-gray-300">
               <li className="flex items-start gap-2">
                 <span className="text-emerald-500 shrink-0">■</span>
                 <span><b className="text-emerald-400">마력 제어 목걸이</b>: 위치 추적 및 <span className="text-red-500 font-bold">원격 기폭 장치</span> 내장. 탈착 불가.</span>
               </li>
               <li className="flex items-start gap-2">
                 <span className="text-emerald-500 shrink-0">■</span>
                 <span><b className="text-emerald-400">마법 단검 세트</b>: 암살 특화. 칼날에 마비독/신경독 도포.</span>
               </li>
               <li className="flex items-start gap-2">
                 <span className="text-emerald-500 shrink-0">■</span>
                 <span><b className="text-gray-500">지령서</b>: 암호화됨. 임무 완료 후 자동 소각 프로토콜 가동.</span>
               </li>
             </ul>
          </div>
        </div>
        
        {/* (우측) 상세 데이터 분석 */}
        <div className="col-span-1 lg:col-span-8 space-y-6">
          
          {/* 1. 효율성 지표 */}
          <div className="bg-emerald-950/10 border border-emerald-900/30 p-4">
            <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span> 
              COMBAT EFFICIENCY LOG
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                 <ProgressBar label="MISSION SUCCESS RATE (성공률)" value={100} type="normal" />
                 <p className="text-[10px] text-emerald-300 opacity-80 mt-1">
                   * 실패 기록 없음. 오라토리오 최고의 처리반.
                 </p>
              </div>
              <div>
                 <ProgressBar label="EMOTIONAL RESPONSE (감정 반응)" value={0} type="normal" />
                 <p className="text-[10px] text-gray-400 opacity-80 mt-1">
                   * 감정 중추 제거됨. 망설임, 공포, 죄책감 수치 0.
                 </p>
              </div>
              <div>
                 <ProgressBar label="LETHALITY (살상력)" value={92} type="normal" />
                 <p className="text-[10px] text-emerald-300 opacity-80 mt-1">
                   * 급소 타격 위주의 효율적인 전투 스타일.
                 </p>
              </div>
              <div>
                 <ProgressBar label="OBEDIENCE (복종도)" value={100} type="normal" />
                 <p className="text-[10px] text-emerald-300 opacity-80 mt-1">
                   * 절대복종. 자살 명령까지 수행 가능.
                 </p>
              </div>
            </div>
          </div>

          {/* 2. 유지보수 및 세뇌 로그 (Maintenance) - 추가됨 */}
          <div className="border border-emerald-900/50 bg-[#001000] p-4 text-[10px] font-mono">
             <h4 className="text-emerald-500 font-bold mb-3 flex justify-between">
                <span>MAINTENANCE LOG: SUBJECT 089</span>
                <span className="text-emerald-800 border border-emerald-900 px-1">AUTO-GENERATED</span>
             </h4>
             <table className="w-full text-left opacity-90 text-gray-400">
               <thead>
                 <tr className="border-b border-emerald-900/50 text-emerald-600">
                   <th className="pb-1">PROCEDURE</th>
                   <th className="pb-1">RESULT</th>
                   <th className="pb-1 text-right">TIMESTAMP</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-emerald-900/20">
                 <tr>
                   <td className="py-1">Memory Wipe (Periodic)</td>
                   <td className="text-emerald-400">Complete (Residual memories deleted)</td>
                   <td className="text-right">D-2</td>
                 </tr>
                 <tr>
                   <td className="py-1">Pain Suppressor Injection</td>
                   <td className="text-emerald-400">Optimal Level Maintained</td>
                   <td className="text-right">D-1</td>
                 </tr>
                 <tr>
                   <td className="py-1">Loyalty Test Simulation</td>
                   <td className="text-emerald-400">Passed (Killed target 'Friend' model)</td>
                   <td className="text-right">Today</td>
                 </tr>
               </tbody>
             </table>
          </div>

          {/* 3. '재교육' 보고서 (Re-education) */}
          <div className="border border-green-800/50 p-4">
             <h4 className="text-green-400 font-bold mb-3">RE-EDUCATION PROGRAM REPORT</h4>
             <div className="space-y-3 opacity-80 leading-relaxed text-green-100 text-[11px]">
                <p>
                  <span className="text-emerald-500 font-bold">[자아 삭제 완료]</span><br/>
                  오라토리오의 &#39;인격 재설정&#39; 프로그램을 통해 과거의 기억과 자아가 완전히 포맷됨. 
                  대상에게 마법은 기적이 아니라 효율적인 <span className="text-emerald-400">&apos;배제 프로세스&apos;</span>일 뿐임. 
                  임무가 없을 때는 대기 모드에 들어간 기계처럼 반응하지 않음.
                </p>
                <p>
                  <span className="text-red-400 font-bold">[제어 장치: 목걸이]</span><br/>
                  이탈 방지를 위해 목에 폭발성 제어 장치를 착용 중. 
                  시스템이 &#39;배신&#39; 징후를 감지하거나 심박수가 특정 패턴을 보이면 즉시 기폭됨. 
                  대상은 이를 자신의 신체 일부로 인식하여 제거를 시도하지 않음.
                </p>
             </div>
          </div>

          {/* 4. 작전 로그 (Audio Log) */}
          <div className="bg-black border-l-4 border-emerald-800 p-4 font-mono">
             <p className="text-[10px] text-emerald-600 font-bold mb-1">MISSION LOG: PURGE</p>
             <div className="space-y-2 opacity-90 text-[11px]">
               <p><span className="text-gray-500">[TARGET]:</span> &quot;사, 살려줘! 나도 같은 마법소녀잖아! 우리 친구였잖아!&quot;</p>
               <p><span className="text-emerald-500">[SHIZ]:</span> &quot;타겟 확인. 코드네임 &#39;Morning_Star&#39;. 등급 D. 폐기 대상.&quot;</p>
               <p><span className="text-gray-500">[TARGET]:</span> &quot;시즈! 나야! 기억 안 나?!&quot;</p>
               <p className="pl-4 text-[10px] text-gray-500 italic">* [SFX]: 망설임 없는 검격 소리 (Slash), 둔탁한 낙하음</p>
               <p><span className="text-emerald-500">[SHIZ]:</span> &quot;배제 완료. ...감정은 불필요합니다. 임무에 방해될 뿐.&quot;</p>
               <p><span className="text-emerald-500">[SHIZ]:</span> &quot;다음 타겟 좌표 전송 바랍니다. 대기 중.&quot;</p>
             </div>
             <div className="border-t border-green-900/50 pt-2 mt-3 text-right">
               <span className="text-emerald-500 font-bold bg-emerald-950/20 px-2 py-1 text-[9px]">
                 MISSION STATUS: SUCCESS
               </span>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}