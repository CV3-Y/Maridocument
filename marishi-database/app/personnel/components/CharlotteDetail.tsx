"use client";
import Image from "next/image";
import ProgressBar from "./ProgressBar";

export default function CharlotteDetail() {
  return (
    // 배경: 어두운 적갈색 + 베이비 핑크 테두리 (기괴한 대조)
    <div className="group p-6 border-t border-pink-300 bg-[#1a0505] animate-fadeIn text-xs font-mono relative overflow-hidden">
      
      {/* 배경 장식: 피 묻은 포크와 나이프 */}
      <div className="absolute top-5 right-5 opacity-10 pointer-events-none rotate-[20deg] text-8xl text-red-800 font-serif">
        ψ
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* (좌측) 프로필: 사랑스러운 포식자 */}
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-4">
          
          {/* 이미지 프레임 (K1.png) - 사각형 */}
          <div className="border-[6px] border-pink-200/20 bg-black p-2 relative aspect-square flex items-center justify-center overflow-hidden z-0">
             
             {/* 1. 캐릭터 이미지 (K1.png) */}
             <div className="absolute inset-0 z-0 transform scale-110 rotate-[4deg] transition-transform duration-700 ease-out group-hover:rotate-0 group-hover:scale-105 origin-center shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] overflow-hidden">
               <Image 
                 src="/K1.png"
                 alt="Charlotte Portrait"
                 fill
                 // 샬롯: 부드러운 톤 + 약간의 창백함
                 className="object-cover object-center opacity-90 contrast-90 brightness-110 saturate-50"
               />
               {/* 비네팅 효과 (가장자리 어둡게) */}
               <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_50%,rgba(50,0,0,0.8)_100%)]"></div>
             </div>

             {/* 2. 핏자국 얼룩 */}
             <div className="absolute bottom-4 right-8 w-16 h-16 bg-red-600/40 rounded-full blur-xl mix-blend-multiply pointer-events-none"></div>

             {/* 3. 경고 태그 (DO NOT FEED) */}
             <div className="absolute bottom-6 left-0 right-0 text-center z-20 pointer-events-none">
               <span className="text-[10px] text-red-200 font-bold bg-red-900/80 px-3 py-1 border border-red-400 animate-pulse">
                 🚫 DO NOT FEED
               </span>
             </div>
          </div>

          <div className="border border-pink-900/50 p-3 bg-black/40">
            <h4 className="text-pink-300 font-bold mb-2 border-b border-pink-900/50 pb-1">ENTITY PROFILE</h4>
            <ul className="space-y-1.5 opacity-90">
              <li className="flex justify-between"><span className="opacity-50">CODENAME:</span> <span>Gluttonous_Doll</span></li>
              <li className="flex justify-between"><span className="opacity-50">AGE:</span> <span>17</span></li>
              <li className="flex justify-between"><span className="opacity-50">CLASS:</span> <span>Mascot / Predator</span></li>
              <li className="flex justify-between"><span className="opacity-50">STATUS:</span> <span className="text-red-500 font-bold blink">STARVING (기아)</span></li>
            </ul>
          </div>

          {/* 소지품 (장난감?) */}
          <div className="border border-red-900/30 p-3 bg-red-950/10">
             <h4 className="text-red-400 font-bold mb-2 text-[10px]">TOY BOX INVENTORY</h4>
             <ul className="space-y-1 text-[10px] opacity-80 text-pink-100/70">
               <li>• <span className="text-pink-300">토끼 인형</span>: 내부에 대형 식칼이 수납됨.</li>
               <li>• <span className="text-red-400">막대사탕</span>: 피 맛. 철분 보충용.</li>
               <li>• <span className="text-gray-400">은제 포크</span>: 식사 도구. 무기로도 사용.</li>
               <li>• <span className="text-gray-400">턱받이</span>: 항상 침을 흘려서 착용 중.</li>
             </ul>
          </div>
        </div>
        
        {/* (우측) 심층 분석 데이터 */}
        <div className="col-span-1 lg:col-span-8 space-y-6">
          
          {/* 1. 욕망 지표 */}
          <div className="bg-red-950/20 border border-pink-900/30 p-4">
            <h4 className="text-pink-400 font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce"></span> 
              INSTINCT PARAMETERS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                 <ProgressBar label="APPETITE (식욕)" value={100} type="inverse" />
                 <p className="text-[10px] text-red-400 opacity-80 mt-1">
                   * &quot;배고파&quot; 한 마디로 모든 행동 원리가 설명됨. 통제 불가.
                 </p>
              </div>
              <div>
                 <ProgressBar label="INNOCENCE (순수함)" value={95} type="normal" />
                 <p className="text-[10px] text-pink-300 opacity-80 mt-1">
                   * 악의 없는 순수한 살의. 죄책감을 느끼지 못함.
                 </p>
              </div>
              <div>
                 <ProgressBar label="SOUL ABSORPTION (흡수율)" value={92} type="normal" />
                 <p className="text-[10px] text-green-400 opacity-80 mt-1">
                   * 섭취한 영혼을 자신의 마력으로 100% 변환.
                 </p>
              </div>
              <div>
                 <ProgressBar label="COGNITION (인지 능력)" value={10} type="inverse" />
                 <p className="text-[10px] text-gray-500 opacity-80 mt-1">
                   * 피아식별 능력 저조. 아군도 맛있어 보이면 공격 시도.
                 </p>
              </div>
            </div>
          </div>

          {/* 2. 행동 심리: 동심과 잔혹함 */}
          <div className="border border-pink-800/40 p-4 bg-black/50 relative">
             <h4 className="text-pink-400 font-bold mb-3">BEHAVIORAL ANALYSIS: THE EATER</h4>
             <div className="space-y-3 opacity-90 leading-relaxed text-gray-300 text-[11px]">
                <p>
                  <span className="text-pink-500 font-bold">[걸어 다니는 식충식물]</span><br/>
                  윤리관이 전무하여 타인을 <span className="text-red-400">&apos;말하는 간식&apos;</span>으로만 인식함. 
                  고통스러워하는 비명 소리를 <span className="text-gray-400">&quot;맛있는 냄새가 나는 소리&quot;</span>라고 표현하며, 
                  상대가 강할수록 영혼의 &#39;식감&#39;이 쫄깃하다며 선호하는 경향을 보임.
                </p>
                <p>
                  <span className="text-red-500 font-bold">[스칼렛의 애완동물]</span><br/>
                  리더 스칼렛을 &quot;밥 주는 언니&quot;로 인식하여 따름. 
                  베르사유 내에서도 그녀의 식욕을 감당할 수 있는 것은 스칼렛뿐이며, 
                  가끔 샬롯이 폭주하면 스칼렛이 <span className="text-blue-300">얼려서</span> 진정시키는 것으로 추정됨.
                </p>
             </div>
          </div>

          {/* 3. 식사 예절 (Table Manners) */}
          <div className="bg-[#2a0a0a] border-l-4 border-red-500 p-4 font-mono text-[11px]">
             <h4 className="text-red-400 font-bold mb-2">OBSERVATION LOG: DINNER TIME</h4>
             <ul className="list-disc pl-4 space-y-2 opacity-80 text-gray-200">
               <li>
                 식사 전, 반드시 은제 포크와 나이프를 양손에 쥐고 <span className="text-pink-300">&quot;잘 먹겠습니다&quot;</span>라고 인사함. (대상은 시체)
               </li>
               <li>
                 가장 좋아하는 부위는 <span className="text-red-500 font-bold">심장</span>. 따뜻할 때 먹어야 한다며 산 채로 적출하는 것을 고집.
               </li>
               <li>
                 맛이 없으면(공포심이 부족하면) 뱉어버리고 투정을 부림. <span className="text-gray-500">&quot;이거 맛없어! 퉤!&quot;</span>
               </li>
             </ul>
          </div>

          {/* [수정됨] 4. 감청 기록 (Audio Log) - 이모지 삭제 */}
          <div className="bg-black border border-pink-900 p-4 font-mono shadow-lg relative">
             
             <p className="text-[10px] text-pink-500 font-bold mb-2">AUDIO FEED: PLAYGROUND</p>
             <div className="space-y-2 opacity-90 text-[11px]">
               <p><span className="text-pink-300">[CHARLOTTE]:</span> &quot;저기... 언니, 그거 나 주면 안 돼?&quot;</p>
               <p><span className="text-gray-500">[ENEMY]:</span> &quot;뭐, 뭐라고...?&quot;</p>
               <p><span className="text-pink-300">[CHARLOTTE]:</span> &quot;그거 말이야... 가슴 속에서 콩닥콩닥 뛰는 거. 냄새가 너무 달콤해...&quot;</p>
               <p className="pl-4 text-[10px] text-red-400 italic">* [SFX]: 침 삼키는 소리 (Gulp), 식기가 부딪히는 소리</p>
               <p><span className="text-pink-300">[CHARLOTTE]:</span> &quot;응? 한 입만 먹을게. 으적으적 씹어서... 꿀꺽 하고 싶어. 헤헤...&quot;</p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}