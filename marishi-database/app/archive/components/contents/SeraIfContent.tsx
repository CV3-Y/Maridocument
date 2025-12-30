"use client";

import { useState, useEffect } from "react";

// ----------------------------------------------------------------------
// [Helper] 타자기 효과 (시스템 메시지용)
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
// [Helper] 글리치 텍스트 (하얀 배경 + 어두운 빨간 글씨)
// ----------------------------------------------------------------------
function GlitchSpan({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-gray-100 text-red-900 font-black px-1 mx-1 transform skew-x-12 hover:skew-x-0 transition-transform cursor-help border border-red-500/50 shadow-[0_0_5px_rgba(255,0,0,0.5)] select-none">
      {children}
    </span>
  );
}

export default function SeraIfContent() {
  return (
    <div className="w-full animate-fadeIn font-serif text-sm relative overflow-hidden">
      
      {/* 배경 그라데이션 (상단: 화이트/그레이 -> 하단: 딥 블랙) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f5f5f5] via-[#2a2a2a] to-black z-0 pointer-events-none"></div>

      {/* 노이즈 효과 (전체) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 pointer-events-none mix-blend-overlay"></div>

      <div className="relative z-10 max-w-2xl mx-auto pt-10 pb-20 px-6">
        
        {/* [Phase 1] 일상과 안도 (밝은 배경, 검은 글씨) */}
        <div className="text-gray-800 space-y-8 mb-20">
          <div className="border-b-2 border-gray-400 pb-2 flex justify-between items-end">
            <h1 className="text-3xl font-bold tracking-widest text-black">
              SECRET_DIARY.txt
            </h1>
            <span className="font-mono text-xs text-gray-500">2025.12.22 (맑음)</span>
          </div>

          <p className="leading-loose">
            오늘 아침, 눈을 떴을 때 창문으로 들어오는 햇살이 너무 눈부셨다. <br/>
            살아있다는 건 정말 따뜻한 거구나.
          </p>
          
          <p className="leading-loose">
            어제 그 순간은 정말 끔찍했다. 시즈 님의 검이 내 목을 향해 날아올 때, 세상이 슬로우 모션처럼 보였다.
            하지만 그때 <span className="font-bold text-pink-600 border-b border-pink-400">선배님</span>이 나를 밀치지 않으셨다면... 
            상상만 해도 끔찍하다. 
          </p>

          <div className="bg-white/50 p-4 border-l-4 border-pink-400 italic text-gray-600 shadow-sm">
            "멍청하게 서 있지 말고 뛰어, 세라!" <br/>
            ...그때 들었던 선배님의 목소리가 아직도 귓가에 맴돈다. 
            덕분에 살았어요. 정말로요.
          </div>

          <p className="leading-loose">
            물론, 대가는 혹독했다. 아이리 님께 불려 가서 3시간 동안 설교를 들었다.
            무단 이탈, 명령 불복종, 그리고... 도망치면서 부순 가로등 수리비까지.
            빚이 5,200,000 크레딧으로 늘어버렸다. 
            <br/>
            그래도 괜찮다. 갚으면 되니까. 열심히 일해서, 타락체도 잡고, 폐지도 줍고... 
            어떻게든 될 거야. 나는 <span className="text-pink-600 font-bold">마법소녀</span>니까!
          </p>
        </div>


        {/* [Phase 2] 위화감 (배경이 어두워지기 시작, 글씨가 회색으로 변함) */}
        <div className="text-gray-300 space-y-10 mb-24 transition-colors duration-1000">
          <p className="leading-loose">
            ...그런데, 조금 이상한 점이 있다.
          </p>

          <p className="leading-loose">
            아까 편의점에서 선배님이 사주신 딸기맛 사탕을 먹었는데, 맛이 나지 않았다.
            아니, 정확히 말하면 <GlitchSpan>녹슨 쇠 맛</GlitchSpan>이 났다.
            분명 유통기한도 넉넉했는데. 내 미각이 이상해진 걸까? 
            너무 놀라서 뱉어버렸는데, 바닥에 떨어진 사탕이 붉은색이 아니라 검은색처럼 보였다.
          </p>

          <p className="leading-loose">
            그리고 시즈 님. <br/>
            오늘 복도에서 마주쳤는데, 나를 보고 아무 말도 하지 않으셨다.
            그냥... 투명 인간을 보는 것처럼, 아니면 <GlitchSpan>죽은 사람</GlitchSpan>을 보는 것처럼 
            내 어깨 너머의 허공만 응시하다 지나가셨다.
            
            <br/><br/>
            "살아남았군." 이라던가, "운이 좋네." 같은 말이라도 하실 줄 알았는데.
          </p>

          <p className="leading-loose pl-4 border-l border-red-900/50 text-gray-400 text-sm">
            거울을 봤다. 목에 붉은 선이 그어져 있다. 
            아마 어제 너무 급하게 도망치다가 나뭇가지에 긁힌 거겠지?
            근데 왜 이렇게 <GlitchSpan>차갑지?</GlitchSpan>
            따갑지도 않고, 그냥 얼음을 대고 있는 것처럼 시리다.
          </p>
        </div>


        {/* [Phase 3] 붕괴 (배경 블랙, 붉은색과 흰색 글리치 난무) */}
        <div className="text-red-100 space-y-12">
          
          <div className="space-y-4">
            <p className="text-lg font-bold text-red-500 animate-pulse">
              이상해. 이상해. 이상해.
            </p>
            
            <p className="leading-loose opacity-80">
              선배님은 나를 보고 웃어주시는데, 선배님 그림자가 없다.
              아니, 내 그림자가 없는 건가?
              방금 통장을 확인했는데, 잔고가 0원이 아니라 <GlitchSpan>NULL</GlitchSpan>로 뜬다.
              이런 숫자는 본 적이 없는데.
            </p>
          </div>

          <div className="border border-red-900/50 p-6 bg-[#1a0000] shadow-[0_0_20px_rgba(255,0,0,0.1)] relative overflow-hidden">
            <p className="relative z-10 leading-loose text-justify font-mono text-xs md:text-sm">
              기억이 섞인다. 
              분명 나는 선배님 손을 잡고 뛰었는데.
              동시에, <GlitchSpan>차가운 바닥</GlitchSpan>에 쓰러져 있던 기억도 난다.
              내 하반신이 저기 멀리에 있고, 시즈 님이 내 머리 위에서 무미건조한 눈으로 
              "폐기 완료"라고 말하는 장면이 자꾸 머릿속에서 재생된다.
              
              <br/><br/>
              이건 꿈이지? 그렇지? 
              나는 지금 선배님이랑 대화하고 있잖아.
              근데 왜 선배님 목소리가 점점 <GlitchSpan>노이즈</GlitchSpan>처럼 들릴까.
            </p>
          </div>

          <div className="space-y-2 text-center pt-8">
            <p className="text-3xl font-black text-gray-800 bg-white inline-block px-2 transform -rotate-2">
              살려주세요
            </p>
            <br/>
            <p className="text-xl font-black text-red-900 bg-black border border-red-600 inline-block px-2 transform rotate-3 mt-2">
              죽기 싫어
            </p>
            <br/>
            <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mt-4 filter blur-[1px]">
              아파아파아파아파아파아파
            </p>
          </div>

          <p className="text-xs text-gray-500 font-mono text-center">
            System Warning: Entity 'Sera' synchronization rate dropping below 15%.
            <br/>
            Fatal Error: Coexistence of conflicting timelines detected.
          </p>

          <div className="pt-10 border-t border-red-900/30">
            <p className="leading-loose text-red-300">
              선배님... 저, 목이 안 붙어요.
              아무리 손으로 눌러도 피가 멈추질 않아요.
              이거 딸기 시럽 아니죠? 
              
              <br/><br/>
              저 <GlitchSpan>죽은 거</GlitchSpan> 맞죠?
              근데 왜 자꾸 살아있다고 거짓말해요?
              희망고문하지 마. 차라리 그냥 끝내줘.
              제발, 제발, 제발...
            </p>
          </div>

        </div>

        {/* [Ending] 시스템 강제 종료 */}
        <div className="mt-20 pt-10 border-t-2 border-red-600 text-center pb-20">
           <div className="text-red-600 font-mono text-sm md:text-lg font-bold glitch-text">
             <Typewriter text="> CONNECTION TERMINATED BY ADMIN." delay={500} speed={50} />
           </div>
           <div className="mt-4 text-[10px] text-gray-600 font-mono">
             [Record deleted from timeline #8821]
           </div>
        </div>

      </div>
    </div>
  );
}