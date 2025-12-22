"use client";
import Image from "next/image";
import ProgressBar from "./ProgressBar";

export default function MedeaDetail() {
  return (
    // 배경: 독성 물질 느낌의 짙은 보라색
    <div className="group p-6 border-t border-purple-500 bg-[#0f0518] animate-fadeIn text-xs font-mono relative overflow-hidden">
      
      {/* 배경 장식: 화학 기호 */}
      <div className="absolute bottom-10 right-10 opacity-10 pointer-events-none rotate-45 text-9xl text-green-500 font-black">
        ☣
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* (좌측) 프로필: 매드 사이언티스트 */}
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-4">
          
          {/* 이미지 프레임 */}
          <div className="border-2 border-dashed border-green-500/50 bg-purple-900/20 p-2 relative aspect-square flex items-center justify-center overflow-hidden z-0">
             
             <div className="absolute inset-0 z-0 transform scale-110 rotate-[2deg] transition-transform duration-500 ease-out group-hover:rotate-0 group-hover:scale-105 origin-center shadow-[0_0_15px_rgba(34,197,94,0.3)]">
               <Image 
                 src="/J1.png"
                 alt="Medea Portrait"
                 fill
                 className="object-cover object-center opacity-90 contrast-125 hue-rotate-[-20deg]"
               />
               <div className="absolute inset-0 bg-green-500/10 mix-blend-color-dodge"></div>
             </div>

             {/* 기포 효과 */}
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay pointer-events-none"></div>

             {/* 경고 태그 */}
             <div className="absolute top-2 right-2 z-20 pointer-events-none">
               <span className="text-[9px] text-black font-bold bg-green-400 px-2 py-1 shadow-lg animate-pulse">
                 ⚠ BIOHAZARD
               </span>
             </div>
          </div>

          <div className="border border-purple-500/50 p-3 bg-black/40">
            <h4 className="text-purple-400 font-bold mb-2 border-b border-purple-900 pb-1">SUBJECT DATA</h4>
            <ul className="space-y-1.5 opacity-90">
              <li className="flex justify-between"><span className="opacity-50">CODENAME:</span> <span>Crazy_Alchemist</span></li>
              <li className="flex justify-between"><span className="opacity-50">AGE:</span> <span>21</span></li>
              <li className="flex justify-between"><span className="opacity-50">CLASS:</span> <span>Researcher (연구원)</span></li>
              <li className="flex justify-between"><span className="opacity-50">STATUS:</span> <span className="text-green-400 font-bold">MANIC (광증)</span></li>
            </ul>
          </div>

          {/* 소지품 (실험 도구) */}
          <div className="border border-green-800/30 p-3 bg-green-900/5">
             <h4 className="text-green-500 font-bold mb-2 text-[10px]">LAB EQUIPMENT</h4>
             <ul className="space-y-1 text-[10px] opacity-80">
               <li>• <span className="text-red-400">오염된 메스</span>: 온갖 혈액이 섞여 있음. 감염 위험 100%.</li>
               <li>• <span className="text-purple-400">시약 앰플</span>: &quot;마시면 폭발함&quot;, &quot;맛있음(?)&quot; 등 라벨 부착.</li>
               <li>• <span className="text-gray-400">실험 가운</span>: 여기저기 그을리고 구멍이 뚫려 있음.</li>
               <li>• <span className="text-green-400">특수 고글</span>: 뇌격의 섬광으로부터 시력 보호.</li>
             </ul>
          </div>
        </div>
        
        {/* (우측) 실험 데이터 */}
        <div className="col-span-1 lg:col-span-8 space-y-6">
          
          {/* 1. 연구 스탯 */}
          <div className="bg-purple-950/20 border border-purple-900/50 p-4">
            <h4 className="text-purple-400 font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span> 
              RESEARCH PARAMETERS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                 <ProgressBar label="ALCHEMY (연금술)" value={95} type="normal" />
                 <p className="text-[10px] text-green-400 opacity-80 mt-1">
                   * 물질 변환 및 폭발물 제조 능력 탁월.
                 </p>
              </div>
              <div>
                 <ProgressBar label="ETHICS (연구 윤리)" value={0} type="inverse" />
                 <p className="text-[10px] text-red-500 opacity-80 mt-1">
                   * 윤리 의식 전무. 아군도 실험체로 간주함.
                 </p>
              </div>
              <div>
                 <ProgressBar label="CURIOSITY (호기심)" value={100} type="normal" />
                 <p className="text-[10px] text-purple-300 opacity-80 mt-1">
                   * 통제 불능. &quot;이걸 섞으면 어떻게 터질까?&quot;
                 </p>
              </div>
              <div>
                 <ProgressBar label="SAFETY (안전 불감증)" value={90} type="inverse" />
                 <p className="text-[10px] text-red-400 opacity-80 mt-1">
                   * 실험실 폭발 사고 월 평균 4회 발생.
                 </p>
              </div>
            </div>
          </div>

          {/* 2. 징계 기록 (학계 추방) - 추가된 부분 */}
          <div className="border border-green-500/30 p-4 bg-black/50">
             <h4 className="text-green-400 font-bold mb-3 flex justify-between">
                <span>DISCIPLINARY RECORD</span>
                <span className="text-red-500 border border-red-500 px-1 text-[9px]">EXPELLED</span>
             </h4>
             <div className="space-y-2 text-[11px] opacity-90 text-gray-300">
                <p>
                  <span className="text-purple-400">&gt;&gt; 사유 1:</span> 마리시 국립 연금술 학회 정기 발표회 중, 
                  <span className="text-green-400"> &quot;에테르 반응형 슬라임&quot;</span>을 풀어 회장 전체를 용해시킴.
                </p>
                <p>
                  <span className="text-purple-400">&gt;&gt; 사유 2:</span> 동료 연구원의 커피에 <span className="text-red-400">자백제</span>를 타서 
                  연구비를 횡령한 사실을 자백하게 만듦. (본인은 &quot;효능 테스트&quot;라고 주장)
                </p>
                <p>
                  <span className="text-yellow-500 italic">
                    &quot;천재를 이해 못 하는 범인들 같으니. 폭발은 예술이라고요!&quot;
                  </span>
                </p>
             </div>
          </div>

          {/* 3. 실험 일지 (Lab Note) */}
          <div className="border-l-4 border-green-500 bg-green-900/10 p-4 font-mono text-[11px]">
             <h4 className="text-green-400 font-bold mb-3">LAB NOTE: EXPERIMENT #902</h4>
             <div className="space-y-3 opacity-90 leading-relaxed text-gray-300">
                <p>
                  <span className="text-purple-400 font-bold">[가설]</span><br/>
                  인간의 혈액에 에테르 농축액을 주입하고 뇌격을 가하면, 
                  <span className="text-green-400">새로운 에너지원</span>이 되거나 <span className="text-red-400">멋지게 터질 것이다.</span>
                </p>
                <p>
                  <span className="text-purple-400 font-bold">[결과]</span><br/>
                  피험자(납치된 갱단원)의 혈관이 형광 녹색으로 발광하며 비명을 지름. 
                  3초 후 급격히 팽창하다가 폭발. 실험실 벽면 및 연구원(본인) 오염됨.
                </p>
                <p className="bg-red-900/30 p-2 border border-red-900 text-red-200 mt-2">
                  <span className="font-bold">CONCLUSION:</span> 실패. 하지만 색깔은 예뻤다. 
                  청소하기 귀찮으니 다음엔 야외에서 진행할 것.
                </p>
             </div>
          </div>

          {/* 4. 음성 기록 */}
          <div className="bg-black border border-purple-600 p-4 font-mono shadow-lg relative">
             <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
             <p className="text-[10px] text-purple-500 font-bold mb-2">VOICE MEMO: RECing...</p>
             <div className="space-y-2 opacity-90 text-[11px]">
               <p><span className="text-purple-400">[MEDEA]:</span> &quot;흐음, 이번에 들어온 찻잎(재료)은 품질이 조악하군요.&quot;</p>
               <p className="pl-4 text-[10px] text-green-500 italic">* [SFX]: 치지직거리는 전기 소리, 액체가 끓는 소리</p>
               <p><span className="text-purple-400">[MEDEA]:</span> &quot;불순물이 너무 많아... 뇌격으로 좀 태워야겠어요. 자, 아~ 하세요!&quot;</p>
               <p><span className="text-gray-500">[UNKNOWN]:</span> &quot;으읍! 읍!! 살려...!&quot;</p>
               <p><span className="text-purple-400">[MEDEA]:</span> &quot;아하하하! 거봐요, 훨씬 색이 예뻐졌죠? 터지기 직전의 그 보랏빛! 아름다워요!&quot;</p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}