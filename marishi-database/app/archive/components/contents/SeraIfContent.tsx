"use client";

import { useState, useEffect } from "react";

// ----------------------------------------------------------------------
// [Helper] 타자기 효과
// ----------------------------------------------------------------------
function Typewriter({ text, delay = 0, speed = 50 }: { text: string, delay?: number, speed?: number }) {
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

export default function SeraIfContent() {
  return (
    <div className="flex flex-col gap-6 animate-fadeIn max-w-2xl mx-auto pb-10 font-sans text-sm">
      
      {/* 히든 파일 헤더 */}
      <div className="border-b-2 border-pink-400/50 pb-4 mb-4 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-pink-300 tracking-widest drop-shadow-[0_0_10px_rgba(244,114,182,0.5)]">
            🌸 SECRET_DIARY.txt
          </h1>
          <p className="text-[10px] text-pink-200/70">
            Date: 2025.12.22 (The Day After)
          </p>
        </div>
        <div className="text-right">
          <span className="bg-pink-900/30 text-pink-200 px-2 py-1 text-[10px] rounded border border-pink-500 animate-pulse">
            ALTERNATE_TIMELINE
          </span>
        </div>
      </div>

      {/* 일기 본문 */}
      <div className="bg-[#1a050d] border border-pink-900 p-8 shadow-[0_0_30px_rgba(236,72,153,0.15)] relative overflow-hidden rounded-sm">
        
        {/* 배경 장식 (하트 노이즈) */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>
        
        <div className="space-y-6 text-pink-100/90 leading-loose text-justify font-serif">
          <p>
            오늘도 눈을 떴다. <br/>
            어제 그 차가운 하수구 바닥이 아니라, 내 좁은 방 침대 위에서.
          </p>
          
          <p>
            아직도 꿈만 같다. 그 무서운 초록색 머리 언니(시즈 님)가 칼을 휘둘렀을 때... 
            정말 죽는 줄 알았다. 아니, 죽었어야 했다. 
            하지만 그때 <span className="text-pink-400 font-bold border-b border-pink-500">선배님</span>이 내 손을 잡고 
            "뛰어!"라고 소리쳐 주지 않으셨다면, 내 몸은 지금쯤 차가운 바닥에 뒹굴고 있었겠지.
          </p>

          <div className="bg-pink-950/30 p-4 border-l-2 border-pink-500 italic text-pink-200 text-xs">
            "히익?! 죄, 죄송해요! 살려주세요! 빚 다 갚을게요!" <br/>
            ...라고 울면서 매달렸던 건 좀 부끄럽지만.
          </div>

          <p>
            아이리 님께는 엄청 혼났다. (사실 3시간 동안 무릎 꿇고 손들고 있었다.)
            무단이탈에, 작전 실패에... 수리비 청구서는 또 늘어버려서 
            이제 빚이 <span className="line-through text-gray-500">4,500,000</span> <span className="text-red-400 font-bold">5,200,000 크레딧</span>이 됐다.
            평생 갚아도 모자랄 것 같다. 으앙.
          </p>

          <p>
            그래도... <br/>
            돌아오는 길에 선배님이 편의점에서 사주신 <span className="text-pink-400 font-bold">딸기맛 막대사탕</span>.
            그게 너무 달콤해서 자꾸만 눈물이 났다.
            살아있다는 건 이렇게 달고, 따뜻한 거구나.
          </p>

          <p>
            내일도 임무가 있다. 무섭다. 다리가 후들거린다.
            하지만 선배님이 계시니까... 조금은, 아주 조금은 용기를 내볼 수 있지 않을까?
          </p>
          
          <p className="text-right mt-8 text-xs text-pink-300/50">
            - 빚쟁이 마법소녀 세라의 일기 끝.
          </p>
        </div>

        {/* 하단 시스템 메시지 */}
        <div className="mt-8 pt-4 border-t border-pink-900/50 text-center">
           <span className="text-xs text-pink-500 font-mono animate-pulse">
             <Typewriter text="> SYSTEM: Subject 'Sera' status confirmed: ALIVE." delay={1000} />
           </span>
        </div>

      </div>

    </div>
  );
}