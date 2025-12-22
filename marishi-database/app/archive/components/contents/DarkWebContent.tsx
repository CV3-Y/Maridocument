"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// ----------------------------------------------------------------------
// [Helper] 타자기 효과
// ----------------------------------------------------------------------
function Typewriter({ text, delay = 0, speed = 30 }: { text: string, delay?: number, speed?: number }) {
  const [displayedText, setDisplayedText] = useState("");
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStartTyping(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!startTyping) return;
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);
    return () => clearInterval(typingInterval);
  }, [text, speed, startTyping]);

  return <span>{displayedText}</span>;
}

// ----------------------------------------------------------------------
// [Helper] 검열 삭제(Redacted) - 다크웹 버전 (글리치 효과)
// ----------------------------------------------------------------------
function Redacted({ children }: { children: React.ReactNode }) {
  return (
    <span className="group relative inline-block cursor-help align-bottom mx-1">
      <span className="absolute inset-0 bg-purple-900 group-hover:bg-transparent transition-colors duration-200 z-10 animate-pulse"></span>
      <span className="bg-purple-900/20 text-purple-300 px-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-mono">
        {children}
      </span>
    </span>
  );
}

// ----------------------------------------------------------------------
// [Main] 다크웹 컨텐츠 컴포넌트
// ----------------------------------------------------------------------
export default function DarkWebContent({ id }: { id: string }) {

  // 1. [DARK_BUY] 결정 급구 (절박함, 먹이사슬)
  if (id === "DARK_BUY") {
    return (
      <div className="flex flex-col gap-6 animate-fadeIn max-w-3xl mx-auto pb-10 font-mono text-sm">
        
        {/* 사이트 헤더 */}
        <div className="border-b-2 border-purple-800 pb-2 mb-4 flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-black text-purple-500 tracking-widest glitch-text">MARCHEN_MARKET</h1>
            <p className="text-[10px] text-gray-500">v4.0.2 | TOR_CONNECTION_ESTABLISHED</p>
          </div>
          <div className="text-right text-[10px] text-green-500 animate-pulse">
            ● ANONYMITY: 100% SECURE <br/>
            <span className="text-gray-600">IP: 192.168.X.X (Masked)</span>
          </div>
        </div>

        {/* 게시글 본문 */}
        <div className="bg-[#0a0a0a] border border-gray-800 p-6 relative group shadow-[0_0_20px_rgba(147,51,234,0.1)]">
          
          {/* 게시글 헤더 */}
          <div className="flex justify-between border-b border-gray-800 pb-4 mb-4">
            <div>
              <h2 className="text-lg text-gray-200 font-bold mb-1">
                <span className="text-red-500 mr-2 border border-red-500 px-1 text-xs">[URGENT]</span>
                A급 에테르 결정 급구합니다 (가격 선제시)
              </h2>
              <div className="flex gap-2 text-[10px] text-gray-600">
                <span>Tags:</span>
                <span className="text-purple-400">#Emergency</span>
                <span className="text-purple-400">#Crystal</span>
                <span className="text-purple-400">#Artifact_Trade</span>
              </div>
            </div>
            <div className="text-xs text-gray-500 text-right bg-[#111] p-2 border border-gray-800">
              <p>User: <span className="text-purple-400 font-bold">Anon_33</span></p>
              <p>Rank: <span className="text-gray-400">Newbie (Lv.1)</span></p>
              <p>Trust: <span className="text-red-500">Low (0%)</span></p>
            </div>
          </div>

          {/* 본문 내용 */}
          <div className="text-gray-400 space-y-4 leading-relaxed text-sm min-h-[200px]">
            <p>
              제발... 아무나 좀 도와주세요. 시간이 없습니다.
              어제부터 시야가 자꾸 흑백으로 보였다가 말았다가 합니다. (레이 님이랑 비슷한 증상인 듯)
              이제는 소리까지 이상하게 들려요. 빗소리가 비명처럼 들립니다.
            </p>
            <p>
              <span className="text-purple-300 font-bold">
                <Typewriter text=" 이대로 가다간 타락할 것 같습니다. 숨 쉴 때마다 폐가 타는 것 같아요." delay={500} />
              </span>
            </p>
            <p>
              가진 돈은 30만 크레딧뿐이지만, <Redacted>엄마 유품인 목걸이(4티어 보호 마법 내장)</Redacted>라도 팔겠습니다. 
              감정가 최소 500만은 나가는 물건입니다. 찌꺼기라도 좋으니 제발 파실 분 연락 주세요.
            </p>
            
            {/* 시스템 경고창 추가 */}
            <div className="bg-red-950/20 border border-red-900 p-3 my-4 text-xs text-red-400">
              <p className="font-bold mb-1">⚠ SYSTEM WARNING: UNSTABLE MENTAL STATE</p>
              <p>작성자의 문장 패턴에서 극도의 불안정성(Tremor)이 감지되었습니다. 거래 시 돌발 행동(폭력, 강탈)에 주의하십시오.</p>
            </div>

            <p className="text-xs text-gray-600">
              * 거래 방식: 직거래 (택배 X, 사기 당할까 봐 무서워요)
              <br/>
              * 위치: 9구역 <Redacted>폐쇄된 지하철 역 3번 출구 물품 보관함 앞</Redacted>
            </p>
          </div>

          {/* 상태 태그 */}
          <div className="absolute top-4 right-1/2 translate-x-1/2 border-2 border-red-600 text-red-600 text-xl font-black px-4 py-2 transform -rotate-12 bg-black/90 z-20">
            TRADE CLOSED
          </div>
        </div>

        {/* 댓글창 (피카레스크 요소 강화) */}
        <div className="bg-[#111] border-t border-gray-800 p-4 space-y-4">
          <div className="flex justify-between items-center mb-4">
            <p className="text-xs text-purple-500 font-bold">&gt;&gt; COMMENTS (6)</p>
            <span className="text-[10px] text-gray-600">Sort by: Newest</span>
          </div>
          
          {/* 댓글 1: 비관론자 */}
          <div className="flex gap-3 text-xs border-b border-gray-900 pb-2">
            <span className="text-blue-400 font-bold min-w-[70px]">User_882:</span>
            <div className="text-gray-400">
              님아 그 정도면 그냥 포기하셈 ㅋㅋ 흑백 시야면 마모 1단계 말기인데 결정 먹어도 복구 안 됨.
              괜히 엄한 사람 끌어들이지 말고 혼자 조용히 가시길.
              <br/><span className="text-[10px] text-gray-600">└ 답글: ㅇㅈ 타락체 되기 전에 자결이 답임.</span>
            </div>
          </div>

          {/* 댓글 2: 포식자 (나인) */}
          <div className="flex gap-3 text-xs border-b border-gray-900 pb-2 bg-purple-900/10 p-2 border-l-2 border-purple-500">
            <span className="text-pink-500 font-bold min-w-[70px]">Nine:</span>
            <div className="text-gray-300">
              어머, 9구역 지하철역? 거기 울림이 좋아서 비명 지르기 딱 좋은데~ ^^ 
              <br/>제가 <Redacted>고통 없이 무료로 편하게</Redacted> 해드릴까요? 
              목걸이는 제가 &apos;보관&apos;해 드릴게요! 히힛.
            </div>
          </div>

          {/* 댓글 3: 사기꾼 */}
          <div className="flex gap-3 text-xs border-b border-gray-900 pb-2">
            <span className="text-yellow-500 font-bold min-w-[70px]">Scammer:</span>
            <div className="text-gray-400">
              DM 확인하세요. A급 결정 2개 보유 중. 선입금 10%만 주시면 바로 출발합니다.
              <br/><span className="text-red-500 underline cursor-pointer">[Link: Secure_Payment_Gateway.exe]</span>
            </div>
          </div>

          {/* 댓글 4: 장기 밀매업자 */}
          <div className="flex gap-3 text-xs border-b border-gray-900 pb-2">
            <span className="text-green-600 font-bold min-w-[70px]">Doctor_K:</span>
            <div className="text-gray-400">
              혹시 신체 포기 각서 쓰실 생각 없으신가요? 각막이랑 신장 상태만 좋으면 결정값 정도는 나옵니다. 연락주세요.
            </div>
          </div>

          {/* 시스템 메시지 */}
          <div className="text-center text-[10px] text-red-500 mt-6 border-t border-red-900/30 pt-2 animate-pulse">
            [SYSTEM] 작성자의 생체 신호가 소실되었습니다. (Last login: 1 hour ago)
            <br/>게시글이 자동으로 &apos;종료&apos; 상태로 전환됩니다.
          </div>
        </div>

      </div>
    );
  }

  // 2. [DARK_GOSSIP] 베르사유 소문 (공포, 권력)
  if (id === "DARK_GOSSIP") {
    return (
      <div className="flex flex-col gap-6 animate-fadeIn max-w-3xl mx-auto pb-10 font-mono text-sm">
        
        {/* 사이트 헤더 */}
        <div className="border-b-2 border-indigo-900 pb-2 mb-4 flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-black text-indigo-500 tracking-widest">WHISPER_NETWORK</h1>
            <p className="text-[10px] text-gray-500">Only rumors based on facts. No logs kept.</p>
          </div>
          <div className="text-right">
            <span className="bg-indigo-900 text-indigo-200 px-2 py-1 text-[10px] rounded border border-indigo-500 animate-pulse">HOT TOPIC 🔥</span>
          </div>
        </div>

        {/* 게시글 본문 */}
        <div className="bg-[#050510] border border-indigo-900/50 p-6 shadow-[0_0_20px_rgba(79,70,229,0.1)]">
          <div className="flex justify-between border-b border-gray-800 pb-4 mb-4">
            <h2 className="text-lg text-gray-200 font-bold">
              [정보] 오늘 베르사유 쪽 &apos;여왕&apos; 기분 안 좋음
            </h2>
            <div className="text-xs text-gray-500 text-right">
              <p>User: <span className="text-indigo-400 font-bold">Rat_in_sewer</span> (Info Broker)</p>
              <p>Views: <span className="text-white">1,402</span></p>
              <p>Bounty: <span className="text-yellow-500">50 C</span></p>
            </div>
          </div>

          <div className="text-gray-300 space-y-4 leading-relaxed text-sm min-h-[200px]">
            <p>
              오늘 새벽 2시쯤 베르사유 연회장 쪽 지나가던 놈 있냐?
              방음벽 쳤을 텐데도 창문 다 깨질 듯한 비명 소리가 새어 나오더라. 
              확인해 보니 타락체 아님. <span className="text-red-400">100% 사람 목소리였음.</span>
            </p>
            
            <div className="border-l-2 border-indigo-500 pl-4 py-2 my-2 italic text-gray-400 text-xs bg-indigo-900/10">
              &quot;...살려주세요! 혀, 혀는 자르지 마세요! 맛을 못 보잖아요! 제발!!&quot;
            </div>

            {/* [이미지 추가 부분] 유출된 CCTV 화면 컨셉 */}
            <div className="relative w-full aspect-video my-6 border-2 border-indigo-900/50 bg-black overflow-hidden group rounded-sm shadow-[0_0_15px_rgba(79,70,229,0.2)]">
                {/* 이미지 파일 (public/archive/dark_versailles_leak.png) */}
                <Image 
                    src="/archive/dark_versailles_leak.png" 
                    alt="Leaked security footage" 
                    fill 
                    className="object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500 grayscale hover:grayscale-0 contrast-150 pixelated"
                />
                {/* CCTV 오버레이 효과 */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,1)_50%)] bg-[size:100%_3px] pointer-events-none opacity-40"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
                
                {/* CCTV UI 텍스트 */}
                <div className="absolute top-2 left-2 text-[9px] text-indigo-300 bg-black/80 px-2 py-0.5 font-mono flex items-center gap-2">
                    <span className="text-red-500 animate-pulse">● REC</span>
                    <span>[CAM_04_HALL_B]</span>
                </div>
                <div className="absolute bottom-2 right-2 text-[9px] text-indigo-300 bg-black/80 px-2 py-0.5 font-mono">
                    2025-12-22 02:14:33 AM
                </div>
            </div>
            <p className="text-[10px] text-gray-500 mb-6 border-b border-indigo-900/30 pb-2 font-mono">
              ▲ 첨부 파일: <span className="text-indigo-400">leaked_footage_reconstructed_v2.mp4 (Keyframe 214)</span>
            </p>
            
            <p>
              내부 정보원(현재 잠적 중) 말로는 오늘 디저트로 나온 <Redacted>신입 마도사 심장 샤베트</Redacted>의 당도가 떨어졌다고 함.
              그래서 담당 요리사(일반인)를 그 자리에서 <span className="text-blue-300">절대영도</span>로 산 채로 얼려버렸단다.
            </p>
            <p>
              <span className="text-indigo-300 font-bold">
                <Typewriter text="더 끔찍한 건, 얼리고 나서 망치로 부숴버렸음." delay={1000} />
              </span>
              <br/>
              지금 베르사유 청소부들이 바닥에 흩어진 얼음 조각(사람이었던 것) 치우느라 개고생 중이라니까, 
              당분간 1구역 뒷문으로 배달 갈 때 눈 깔고 다녀라. 눈 마주치면 너네도 다음 코스 재료 된다.
            </p>
            
            <p className="text-xs text-gray-500 mt-4 border-t border-gray-800 pt-2">
              PS. 오라토리오는 알면서도 묵인 중임. 어차피 1구역에서 일어난 일이라 신고도 안 들어감.
            </p>
          </div>
        </div>

        {/* 댓글창 */}
        <div className="bg-[#0a0a1a] border-t border-indigo-900/30 p-4 space-y-4">
          <p className="text-xs text-indigo-500 font-bold mb-2">&gt;&gt; ENCRYPTED CHAT (Auto-Delete in 24h)</p>
          
          <div className="flex gap-3 text-xs border-b border-white/5 pb-2">
            <span className="text-gray-500 font-bold min-w-[80px]">Anon_01:</span>
            <div className="text-gray-400">
              미친... 요리사 걔 저번에 나한테 담배 빌려줬던 애인데. 착한 애였어.
              스칼렛 그 여자는 진짜 피도 눈물도 없네. 악마 같은 X.
            </div>
          </div>

          <div className="flex gap-3 text-xs border-b border-white/5 pb-2">
            <span className="text-green-500 font-bold min-w-[80px]">Scavenger:</span>
            <div className="text-gray-300">
              혹시 그 '얼음 조각'들 하수구에 버렸음?
              <br/><span className="text-[10px] text-gray-600">녹여서 장기라도 건질 수 있으면 돈 될 텐데. 좌표 좀 주면 (100 C) 쏠게.</span>
            </div>
          </div>
          
          <div className="flex gap-3 text-xs border-b border-white/5 pb-2">
            <span className="text-blue-400 font-bold min-w-[80px]">Versailles_Guard:</span>
            <div className="text-gray-400">
              <span className="text-red-500 font-bold">[경고]</span> 입 조심해라 쥐새끼들아. 
              여왕님께서 요즘 귀가 밝으시다. 다음 식재료가 되기 싫으면.
            </div>
          </div>

          <div className="flex gap-3 text-xs border-b border-white/5 pb-2 bg-red-900/10 p-2">
            <span className="text-red-500 font-bold min-w-[80px]">SYSTEM:</span>
            <div className="text-red-400 font-bold">
              ※ 해당 게시글은 '베르사유' 측의 요청으로 IP 역추적 중입니다. (Progress: 88%)
              <br/>작성자는 즉시 하드디스크 파기 후 도주하십시오.
            </div>
          </div>
        </div>

      </div>
    );
  }

  return <div className="text-gray-500 p-4 text-center animate-pulse">Loading Darknet Protocol...</div>;
}