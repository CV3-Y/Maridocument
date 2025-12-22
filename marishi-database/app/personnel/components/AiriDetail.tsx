"use client";
import Image from "next/image";
import ProgressBar from "./ProgressBar";

export default function AiriDetail() {
  return (
    // group 클래스 추가
    <div className="group p-6 border-t-2 border-purple-500 bg-gray-950 animate-fadeIn text-xs font-mono relative overflow-hidden">
      
      {/* 배경 장식: 마법진 형태의 관리자 로고 워터마크 */}
      <div className="absolute top-[-5%] right-[-5%] p-10 opacity-[0.12] pointer-events-none z-0 scale-125">
        <div className="relative w-80 h-80 flex items-center justify-center">
           {/* 사각형 1 */}
           <div className="absolute inset-0 border-[6px] border-purple-600/60 shadow-[0_0_20px_rgba(147,51,234,0.3)]"></div>
           {/* 사각형 2 (45도 회전) */}
           <div className="absolute inset-0 border-[6px] border-purple-600/60 rotate-45 shadow-[0_0_20px_rgba(147,51,234,0.3)]"></div>
           
           {/* 중앙 텍스트 */}
           <span className="absolute z-10 text-5xl font-black text-purple-500/80 rotate-[-15deg] drop-shadow-2xl whitespace-nowrap tracking-tighter">
             TOP SECRET
           </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* (좌측) 프로필: 이중성 (아이돌 vs 독재자) */}
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-4">
          
          {/* 이미지 프레임 (E1.png) */}
          <div className="border-2 border-purple-400 bg-purple-900/20 p-2 relative aspect-square flex items-center justify-center overflow-hidden z-0">
             
             {/* 1. 캐릭터 이미지 (E1.png) */}
             <div className="absolute inset-0 z-0 transform scale-110 rotate-[3deg] transition-transform duration-500 ease-out group-hover:rotate-0 group-hover:scale-105 origin-center shadow-[0_0_30px_rgba(168,85,247,0.4)] border border-purple-500/50">
               <Image 
                 src="/E1.png"
                 alt="Airi Portrait"
                 fill
                 // 아이리: 고결한 느낌의 보라색 필터 + 약간의 글리치 효과
                 className="object-cover object-center opacity-90 contrast-110 hover:contrast-125 transition-all duration-500"
               />
               {/* 몽환적인 오버레이 */}
               <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent mix-blend-overlay"></div>
             </div>

             {/* 2. 노이즈 오버레이 */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay z-10 pointer-events-none"></div>

             {/* 3. 관리자 태그 */}
             <div className="absolute top-2 left-2 z-20 pointer-events-none">
               <span className="text-[9px] text-white font-black bg-purple-600 px-2 py-1 shadow-lg tracking-widest">
                 ADMINISTRATOR
               </span>
             </div>
             
             <div className="absolute bottom-3 right-3 text-right z-20 pointer-events-none bg-black/40 p-1 backdrop-blur-sm">
               <span className="text-[10px] text-purple-200 font-bold block drop-shadow-md">Clearance: Level 5</span>
               <span className="text-[8px] text-red-400 block animate-pulse">⚠ MEMORY ERROR DETECTED</span>
             </div>
          </div>

          {/* 프로필 정보 (진실) */}
          <div className="border border-purple-500/50 p-4 bg-purple-950/10 backdrop-blur-sm">
            <h4 className="text-purple-300 font-bold mb-2 border-b border-purple-500/30 pb-1 flex justify-between">
              <span>BASIC INFO</span>
              <span className="text-[9px] text-red-400 border border-red-500/50 px-1">DECRYPTED</span>
            </h4>
            <ul className="space-y-1.5 opacity-90 text-purple-100">
              <li className="flex justify-between"><span className="opacity-50">CODENAME:</span> <span>Prima_Donna</span></li>
              <li className="flex justify-between"><span className="opacity-50">AGE:</span> <span>18</span></li>
              <li className="flex justify-between"><span className="opacity-50">POSITION:</span> <span>Oratorio Leader</span></li>
              <li className="flex justify-between"><span className="opacity-50">EROSION:</span> <span className="text-red-400 font-bold">Stage 2 (Amnesia)</span></li>
            </ul>
          </div>

          {/* 소지품 (강박증) */}
          <div className="border border-purple-500/30 p-3 bg-black/40">
             <h4 className="text-purple-400 font-bold mb-2 text-[10px]">PERSONAL BELONGINGS</h4>
             <ul className="space-y-1 text-[10px] opacity-80 text-gray-300">
               <li>• <span className="text-purple-300">마이크형 지팡이</span>: 대중 선동 및 광역 마법 제어용.</li>
               <li>• <span className="text-purple-300">신경 안정제</span>: 감정 기복 제어용. 필수 지참.</li>
               <li>• <span className="text-purple-300">성과 보고서</span>: 완벽주의의 산물. 빼곡한 메모.</li>
               <li>• <span className="text-red-400">붉은 립스틱</span>: &quot;무대&quot;에 오르기 전 바르는 전투 화장.</li>
             </ul>
          </div>
        </div>
        
        {/* (우측) 심층 분석 데이터 */}
        <div className="col-span-1 lg:col-span-8 space-y-6">
          
          {/* 1. 능력치 (압도적 화력 + 정신 불안) */}
          <div className="bg-purple-900/10 border border-purple-500/30 p-4">
            <h4 className="text-purple-300 font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_purple]"></span> 
              LEADER SPECIFICATION
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                 <ProgressBar label="MAGIC OUTPUT (마력 출력)" value={98} type="normal" />
                 <p className="text-[10px] text-purple-300 opacity-80 mt-1">
                   * 도시 구획 하나를 지울 수 있는 광범위 폭격 능력.
                 </p>
              </div>
              <div>
                 <ProgressBar label="PUBLIC APPROVAL (시민 지지율)" value={99} type="normal" />
                 <p className="text-[10px] text-purple-300 opacity-80 mt-1">
                   * &quot;마리시의 아이돌&quot;. 시민들에게 절대적인 지지를 받음.
                 </p>
              </div>
              <div>
                 <ProgressBar label="MENTAL STABILITY (정신 안정)" value={15} type="normal" />
                 <p className="text-[10px] text-red-400 opacity-80 mt-1">
                   * 위험: 이중인격적 괴리감 심화. 신경쇠약 직전.
                 </p>
              </div>
              <div>
                 <ProgressBar label="MEMORY RETENTION (기억 보존율)" value={40} type="inverse" />
                 <p className="text-[10px] text-red-400 opacity-80 mt-1">
                   * Stage 2: 가족에 대한 기억 소실 완료. 자기 이름 망각 진행 중.
                 </p>
              </div>
            </div>
          </div>

          {/* 2. 관리자 비밀 노트 (The Truth) */}
          <div className="border-l-4 border-purple-600 bg-gradient-to-r from-purple-900/20 to-transparent p-4">
             <h4 className="text-purple-300 font-bold mb-3 flex items-center">
               INTERNAL MEMO: THE &quot;GRADUATION&quot; SYSTEM
               <span className="ml-2 text-[8px] border border-red-500 text-red-500 px-1">TOP SECRET</span>
             </h4>
             <div className="space-y-3 opacity-90 leading-relaxed text-gray-200 text-[11px]">
                <p>
                  <span className="text-purple-400 font-bold">[완벽주의의 이면]</span><br/>
                  그녀는 오라토리오를 &#39;완벽한 무대&#39;로 유지하기 위해 강박적으로 행동함. 
                  실수하거나 성능이 떨어진 대원은 가차 없이 <span className="text-red-400 font-bold">&quot;졸업(폐기)&quot;</span>시키며, 
                  이를 시스템 안정화를 위한 &#39;부품 교체&#39;로 합리화하고 있음.
                </p>
                <p>
                  <span className="text-purple-400 font-bold">[침식되는 기억]</span><br/>
                  마법 사용의 대가(영혼의 마모)로 인해 소중했던 가족의 얼굴과 이름을 잃어버림. 
                  그 공허함을 시민들의 환호와 시스템의 인정으로 채우려 하나, 
                  밤마다 <span className="text-gray-400">&quot;내가 누구를 위해 싸우지?&quot;</span>라며 혼란스러워하는 모습이 감청됨.
                </p>
             </div>
          </div>

          {/* 3. 일간 스케줄 (Daily Routine) - 추가됨 */}
          <div className="border border-purple-500/30 bg-black/60 p-4">
             <h4 className="text-purple-400 font-bold mb-3 flex justify-between">
                <span>DAILY SCHEDULE</span>
                <span className="text-[9px] bg-purple-900 text-purple-200 px-1">CONFIDENTIAL</span>
             </h4>
             <table className="w-full text-[10px] text-left opacity-90 text-gray-300">
               <tbody className="divide-y divide-purple-900/30">
                 <tr>
                   <td className="py-2 w-20 font-bold text-purple-500">09:00 AM</td>
                   <td>시민 광장 연설 및 악수회 <span className="text-gray-500">(대외용 미소 유지)</span></td>
                 </tr>
                 <tr>
                   <td className="py-2 font-bold text-purple-500">02:00 PM</td>
                   <td>균열 발생 구역 시찰 및 광역 폭격 <span className="text-gray-500">(민간 피해 무시)</span></td>
                 </tr>
                 <tr>
                   <td className="py-2 font-bold text-purple-500">08:00 PM</td>
                   <td>대원 성과 평가 회의. <span className="text-red-400 font-bold">C급 대원 2명 폐기 결정.</span></td>
                 </tr>
                 <tr>
                   <td className="py-2 font-bold text-purple-500">02:00 AM</td>
                   <td>수면 장애. 신경 안정제 투여 및 기억 데이터 복구 시도(실패).</td>
                 </tr>
               </tbody>
             </table>
          </div>

          {/* 4. 리더의 독백 (Audio Log) */}
          <div className="bg-black border border-purple-900 p-4 font-mono shadow-2xl relative overflow-hidden">
             {/* 배경 노이즈 */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
             
             <p className="text-[10px] text-purple-500 font-bold mb-2">PRIVATE RECORDING: [DAWN]</p>
             <div className="space-y-2 opacity-90 text-[11px] relative z-10">
               <p><span className="text-purple-300">[AIRI (Public)]:</span> &quot;시민 여러분! 오늘도 마리시의 평화는 저희 오라토리오가 지키겠습니다! 사랑해요!&quot;</p>
               <p className="pl-4 text-[10px] text-gray-500 italic">* [SFX]: 환호성, 그리고 대기실 문이 닫히는 소리</p>
               <p className="border-t border-purple-900/50 my-2"></p>
               <p><span className="text-red-400">[AIRI (Private)]:</span> &quot;...하아. 역겨워. 저 돼지들의 환호성.&quot;</p>
               <p><span className="text-red-400">[AIRI (Private)]:</span> &quot;루나, 시즈. 너희들 오늘 동선 0.5초 틀렸어. 한 번만 더 실수하면... 알지?&quot;</p>
               <p className="text-[10px] text-gray-500 mt-2 italic">
                 * [NOTE]: 거울을 보며 &quot;나는 완벽해, 나는 완벽해&quot;라고 반복함. 손떨림 관측됨.
               </p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}