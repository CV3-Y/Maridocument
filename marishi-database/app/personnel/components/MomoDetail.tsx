"use client";
import Image from "next/image";
import ProgressBar from "./ProgressBar";

export default function MomoDetail() {
  return (
    // 배경: 디지털 그리드 패턴 + 글리치 효과 느낌
    <div className="group p-6 border-t-2 border-purple-500 bg-[#050510] animate-fadeIn text-xs font-mono relative overflow-hidden">
      
      {/* 배경 장식: 이진수 코드 비 (Matrix Rain 느낌) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none break-all text-[8px] leading-3 text-green-500 z-0 overflow-hidden font-mono">
        01010101001010101010101010101010101010101010101010101010101010101010101010101
        10101010101010101010101010101010101010101010101010101010101010101010101010101
        001100101010101 SYSTEM_OVERRIDE 1010101010101010101010101010101010101010101
        10101010101010101010101010101010101010101010101010101010101010101010101010101
        01010101010101010101010101010101010101010101010101010101010101010101010101010
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        
        {/* (좌측) 프로필: 히키코모리 해커 */}
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-4">
          
          {/* 이미지 프레임 (M1.png) - 모니터 화면 느낌 */}
          <div className="border-2 border-purple-500 bg-black p-1 relative aspect-square flex items-center justify-center overflow-hidden z-0 shadow-[0_0_20px_rgba(168,85,247,0.5)]">
             
             {/* 1. 캐릭터 이미지 (M1.png) */}
             <div className="absolute inset-0 z-0 group-hover:scale-105 transition-transform duration-300">
               <Image 
                 src="/M1.png"
                 alt="Momo Portrait"
                 fill
                 // 모모: 디지털 노이즈가 낀 듯한 느낌
                 className="object-cover object-center opacity-90 contrast-125 brightness-110"
               />
               {/* 스캔라인 효과 */}
               <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%] pointer-events-none"></div>
             </div>

             {/* 2. 글리치 텍스트 효과 */}
             <div className="absolute top-2 left-2 z-20 pointer-events-none">
               <span className="text-[10px] text-green-400 font-bold bg-black/80 px-2 py-1 border border-green-500 animate-pulse">
                 &gt; USER: ROOT
               </span>
             </div>
             
             {/* 3. 연결 상태 */}
             <div className="absolute bottom-2 right-2 text-right z-20 pointer-events-none">
               <span className="text-[9px] text-purple-300 bg-black/70 px-1">VPN: ENCRYPTED</span>
               <span className="text-[9px] text-green-400 bg-black/70 px-1 block">PING: 2ms</span>
             </div>
          </div>

          {/* 프로필 정보 (코드 형식) */}
          <div className="border border-purple-500/50 p-3 bg-black/80 backdrop-blur-sm font-mono text-[11px]">
            <h4 className="text-purple-400 font-bold mb-2 border-b border-purple-800 pb-1">
              &lt;UserProfile /&gt;
            </h4>
            <div className="space-y-1 opacity-90 text-green-300">
              <p><span className="text-purple-400">const</span> <span className="text-blue-300">name</span> = <span className="text-yellow-300">&quot;Momo&quot;</span>;</p>
              <p><span className="text-purple-400">let</span> <span className="text-blue-300">role</span> = <span className="text-yellow-300">&quot;Admin / Hacker&quot;</span>;</p>
              <p><span className="text-purple-400">let</span> <span className="text-blue-300">age</span> = <span className="text-yellow-300">15</span>;</p>
              <p><span className="text-purple-400">let</span> <span className="text-blue-300">location</span> = <span className="text-red-400">&quot;Unknown (Proxy)&quot;</span>;</p>
            </div>
          </div>

          {/* 소지품 (게이머 기어) */}
          <div className="border border-purple-900/50 p-3 bg-purple-950/10">
             <h4 className="text-purple-300 font-bold mb-2 text-[10px]">&gt; INVENTORY.list()</h4>
             <ul className="space-y-1 text-[10px] opacity-80 text-gray-300">
               <li>• <span className="text-purple-400">커스텀 키보드</span>: 타건음이 매우 큼. (청축 추정)</li>
               <li>• <span className="text-green-400">에너지 드링크</span>: 카페인 과다 섭취 상태.</li>
               <li>• <span className="text-purple-400">VR 고글</span>: 현실 도피용. 항상 착용 중.</li>
               <li>• <span className="text-blue-400">드론 컨트롤러</span>: 마법 매개체. 원격 조작.</li>
             </ul>
          </div>
        </div>
        
        {/* (우측) 상세 데이터 분석 */}
        <div className="col-span-1 lg:col-span-8 space-y-6">
          
          {/* 1. 능력치 (해킹 능력 몰빵, 체력 바닥) */}
          <div className="bg-[#0a0a1a] border border-purple-500/30 p-4">
            <h4 className="text-green-400 font-bold mb-4 flex items-center gap-2">
              <span className="text-lg">_</span> 
              SYSTEM STATS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                 <ProgressBar label="HACKING (회로 장악)" value={100} type="normal" />
                 <p className="text-[10px] text-green-400 opacity-80 mt-1">
                   * Root 권한 탈취 가능. 상대방의 마법 회로를 해킹함.
                 </p>
              </div>
              <div>
                 <ProgressBar label="PHYSICAL (신체 능력)" value={2} type="normal" />
                 <p className="text-[10px] text-red-500 opacity-80 mt-1">
                   * 심각한 운동 부족. 10분만 걸어도 탈진. 햇빛 알레르기.
                 </p>
              </div>
              <div>
                 <ProgressBar label="LAZINESS (귀차니즘)" value={99} type="inverse" />
                 <p className="text-[10px] text-purple-400 opacity-80 mt-1">
                   * "움직이기 귀찮아." 모든 것을 드론과 해킹으로 해결함.
                 </p>
              </div>
              <div>
                 <ProgressBar label="PROCESSING (연산 속도)" value={95} type="normal" />
                 <p className="text-[10px] text-blue-300 opacity-80 mt-1">
                   * 멀티태스킹 최적화. 동시에 12개의 모니터 제어 가능.
                 </p>
              </div>
            </div>
          </div>

          {/* 2. 해킹 로그 (터미널 창) - 추가된 부분 */}
          <div className="bg-black border border-green-500/50 p-4 font-mono text-[11px] shadow-lg rounded-sm relative">
             {/* 윈도우 컨트롤 */}
             <div className="absolute top-2 right-2 flex gap-1">
               <div className="w-2 h-2 rounded-full bg-red-500"></div>
               <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
               <div className="w-2 h-2 rounded-full bg-green-500"></div>
             </div>
             
             <h4 className="text-green-500 font-bold mb-3">user@marchen:~$ sudo hack_target --force</h4>
             <div className="space-y-1 opacity-90 leading-relaxed text-gray-300">
                <p>
                  <span className="text-blue-400">[SYSTEM]</span> Scanning target magic circuits... <span className="text-green-500">Done.</span>
                </p>
                <p>
                  <span className="text-blue-400">[SYSTEM]</span> Firewall detected (Type: Oratorio_V4). Bypassing...
                </p>
                <p>
                  <span className="text-purple-400">momo:</span> &quot;아, 귀찮게. 쟤 방화벽 왜 이렇게 허술해? 보안 업데이트 안 하나?&quot;
                </p>
                <p>
                  <span className="text-blue-400">[SYSTEM]</span> <span className="text-green-500">ACCESS GRANTED.</span> Control hijacked.
                </p>
                <p>
                  <span className="text-purple-400">momo:</span> &quot;자, 이제 서로 죽여봐. 팝콘이나 가져와야지.&quot;
                </p>
                <p className="text-yellow-500 mt-2">&gt;&gt; Target body control: 100% Synchronized.</p>
             </div>
          </div>

          {/* 3. 방 상태 (Room Condition) */}
          <div className="border-l-4 border-purple-600 bg-purple-900/10 p-4">
             <h4 className="text-purple-300 font-bold mb-2">LOCATION: SERVER ROOM (BEDROOM)</h4>
             <div className="text-[11px] text-gray-300 opacity-90 space-y-2">
               <p>
                 <span className="text-purple-400 font-bold">[히키코모리]</span><br/>
                 어두운 방, 수십 개의 모니터 불빛만이 광원임. 
                 바닥에는 전선(Cable)과 빈 에너지 드링크 캔, 과자 봉지가 발 디딜 틈 없이 널려 있음. 
                 서버의 팬 돌아가는 소음(White Noise)이 없으면 불안해서 잠들지 못함.
               </p>
               <p>
                 <span className="text-purple-400 font-bold">[대인 기피]</span><br/>
                 모니터 너머의 세상에서는 신(God)처럼 군림하지만, 현실에서 사람과 마주치면 말을 더듬거나 도망침. 
                 드론을 아바타로 사용하여 의사소통하는 것을 선호함.
               </p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}