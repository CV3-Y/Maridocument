"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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
// [Helper] 텍스트 하이라이트 (요청하신 스타일: 하얀 배경/어두운 글씨)
// ----------------------------------------------------------------------
function HighlightText({ children, strike = false }: { children: React.ReactNode, strike?: boolean }) {
  return (
    <span className={`inline-block bg-[#e5e5e5] text-[#2b0a0a] font-mono px-1 mx-0.5 text-sm md:text-base align-middle selection:bg-red-900 selection:text-white ${strike ? 'line-through decoration-red-800 decoration-2' : ''}`}>
      {children}
    </span>
  );
}

export default function SeraIfContent() {
  return (
    <div className="w-full animate-fadeIn font-serif text-sm md:text-base relative overflow-hidden text-gray-800">
      
      {/* 배경 그라데이션 (상단: 화이트 -> 하단: 딥 블랙) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8f8f8] via-[#525252] to-black z-0 pointer-events-none h-[200%]"></div>

      {/* 노이즈 효과 */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 z-0 pointer-events-none mix-blend-multiply"></div>

      <div className="relative z-10 max-w-2xl mx-auto pt-12 pb-32 px-6">
        
        {/* [Header] */}
        <div className="border-b-2 border-gray-800 pb-4 mb-12 flex justify-between items-end">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-widest text-black mb-1">
              DIARY_ENTRY_#LAST
            </h1>
            <p className="font-mono text-xs text-gray-500">작성자: 세라(Sera) / 상태: <span className="text-green-600 font-bold">생존(Alive)</span></p>
          </div>
          <span className="font-mono text-xs text-gray-400">2025.12.22</span>
        </div>

        {/* [Section 1] 일상 (하얀 배경 구간) */}
        <div className="space-y-8 mb-24">
          <p className="leading-loose">
            오늘 아침, 알람 소리에 눈을 떴다. 창문 틈으로 들어오는 햇살이 유난히 눈부셔서 눈물이 핑 돌았다.
            어제 그 끔찍했던 균열 속에서의 기억이 꿈처럼 느껴진다. 
            정말... 살아돌아왔구나.
          </p>
          
          <p className="leading-loose">
            시즈 님의 검이 나를 베기 직전, <HighlightText>선배님</HighlightText>이 내 손을 잡아당기지 않았다면 
            나는 지금쯤 차가운 하수구 바닥에 쓰러져 있었을 것이다. 
            그 순간의 서늘한 감각이 아직도 목덜미에 남아있는 것 같아 자꾸만 손으로 목을 만지게 된다.
            물론, 만져지는 건 따뜻한 피부와 맥박뿐이다. 다행이다. 정말로.
          </p>

          <div className="bg-white/60 p-6 border-l-4 border-pink-400 italic shadow-sm my-8">
            "세라, 멍하니 있지 말고 짐 챙겨. 다음 임무 가야지." <br/>
            <br/>
            아까 아이리 님이 지나가며 하신 말씀이다. 평소처럼 차가운 말투였지만, 
            오늘따라 그 잔소리조차 반갑게 들렸다. 
            수리비 청구서는 5,200,000 크레딧이 찍혀있었다. 
            평생 갚아야 할 빚이지만, 갚을 '미래'가 있다는 게 얼마나 감사한 일인지.
          </div>

          <p className="leading-loose">
            집에 오는 길에 선배님이 사주신 딸기맛 사탕을 입에 넣었다.
            달콤해야 할 사탕에서 묘하게 <HighlightText strike={true}>비린내</HighlightText> 
            아니, 쇠 맛이 났다. 아마 너무 긴장해서 미각이 잠시 둔해진 거겠지?
            피곤해서 그런 걸 거야. 오늘은 일찍 자야겠다.
          </p>
        </div>


        {/* [Section 2] 위화감 (회색 배경 구간) */}
        <div className="space-y-10 mb-32 transition-colors duration-500 text-gray-200">
          <div className="w-full h-px bg-gray-500/50 my-10"></div>
          
          <p className="leading-loose">
            ...잠이 오지 않는다. 
            거울을 봤는데, 목에 붉은 줄이 그어져 있다.
            어제 도망치다가 나뭇가지에 긁힌 상처라고 생각했다. 
            그런데 이상하다. <HighlightText>상처가 아물지 않는다.</HighlightText>
            아니, 정확히 말하면 피가 흐르지도, 딱지가 지지도 않는다.
            마치 빨간색 매직으로 그어놓은 것처럼, 선명한 붉은 선이 목을 한 바퀴 감고 있다.
          </p>

          <p className="leading-loose">
            조금 전, 편의점에 다시 다녀왔다.
            알바생에게 인사를 했는데 나를 쳐다보지 않았다.
            계산대에 돈을 올려놓았는데, 그 사람은 내 손을 통과해 허공을 휘저으며 
            "어라, 문이 열렸나?" 하고 중얼거렸다.
            
            <br/><br/>
            나는 투명 인간이 된 걸까? 
            아니면, 세상이 나를 <HighlightText strike={true}>인식하지 못하는</HighlightText> 걸까?
          </p>

          <p className="leading-loose pl-4 border-l-2 border-red-900/50 text-gray-300">
            선배님. 저기요, 선배님.
            아까부터 제 옆에 계신 거 맞죠?
            저한테 "다행이다"라고 말해주셨잖아요.
            근데 왜 선배님 목소리가 자꾸 지직거리는 라디오 소리처럼 들리죠?
            <br/>
            제 이름이 세라가 맞나요? 
            통장을 확인해봤는데 예금주 명에 <HighlightText>UNKNOWN_ENTITY</HighlightText>라고 적혀있어요.
            이거 은행 전산 오류겠죠? 그렇죠?
          </p>
        </div>


        {/* [Section 3] 붕괴 및 진실 (검은 배경 구간) */}
        <div className="text-red-100 space-y-12">
          
          <div className="space-y-6">
            <p className="text-xl font-bold text-red-500 animate-pulse">
              오류. 오류. 데이터 불일치.
            </p>
            
            <p className="leading-loose opacity-90 font-mono text-sm">
              기억 데이터 복구 시도... [실패]<br/>
              타임라인 동기화... [치명적 오류]<br/>
              <br/>
              기억났어.
              선배님은 내 손을 잡은 적이 없어.
              선배님은... <HighlightText>내 죽음을 목격한 방관자</HighlightText>였잖아.
            </p>

            <p className="leading-loose">
              시즈 님의 검은 빗나가지 않았어.
              정확하게, 아주 깔끔하게 내 허리를 베고 지나갔어.
              나는 도망친 게 아니야.
              내 몸은 하수구 바닥에 쓰러졌고, 내 몸통만 바닥을 굴렀어.
              
              <br/><br/>
              지금 이 일기를 쓰고 있는 손은 누구 손이지?
              거울 속에 비친 내 얼굴은 왜 웃고 있지?
              어떻게 웃을 수 있는 거야?
            </p>
          </div>

          <div className="border border-red-800 bg-[#1a0505] p-6 shadow-[0_0_30px_rgba(220,38,38,0.2)] relative">
             <p className="leading-loose text-justify text-red-200/80">
               아아, 그래. 이제 알겠어.
               이건 내 일기가 아니야.
               이건 죽어가는 뇌가 마지막으로 보여주는 <HighlightText strike={true}>달콤한 환각</HighlightText>이야.
               사탕 맛이 쇠 맛이었던 건, 내 입안 가득 고여있던 피 때문이었어.
               
               <br/><br/>
               선배님, 제 목소리 들리세요?
               아니, 들릴 리가 없지. 
               선배님은 지금 제 시체를 내려다보고 계시니까요.
             </p>
          </div>

          {/* [이미지 출력 부분] 살려주세요 대신 이미지가 출력됨 */}
          <div className="py-10 flex flex-col items-center justify-center gap-4">
            <p className="text-xs text-red-500 font-mono mb-2">
              &gt; SYSTEM: VISUAL_FEED_RECONSTRUCTED (Source: User_Retina)
            </p>
            
            <div className="relative w-full max-w-md aspect-video border-2 border-red-900/50 bg-black shadow-[0_0_50px_rgba(255,0,0,0.3)] overflow-hidden group">
              {/* 이미지에 글리치 효과 및 붉은 오버레이 추가 */}
              <div className="absolute inset-0 bg-red-900/20 z-10 mix-blend-overlay pointer-events-none"></div>
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 z-20 pointer-events-none"></div>
              
              {/* [IMAGE] 여기에 실제 이미지가 들어감 */}
              <Image 
                src="/archive/sera_truth.png" 
                alt="The Truth of Sera" 
                fill
                className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000 ease-out grayscale hover:grayscale-0"
              />
              
              {/* 이미지 위 텍스트 (선택사항) */}
              <div className="absolute bottom-2 right-2 z-30 bg-black text-red-600 text-xs px-2 py-1 font-mono">
                STATUS: DECEASED
              </div>
            </div>

            <p className="text-xs text-gray-600 font-mono mt-4 text-center">
              [The simulation has ended.]
            </p>
          </div>

        </div>

        {/* [Ending] 시스템 강제 종료 */}
        <div className="mt-20 pt-10 border-t border-red-900/30 text-center pb-10">
           <div className="text-red-700 font-mono text-sm font-bold">
             <Typewriter text="> DELETING CORRUPTED FILE..." delay={1000} speed={50} />
           </div>
           <div className="mt-2 text-red-900/50 font-mono text-[10px]">
             Error Code: 0xDEAD_END
           </div>
        </div>

      </div>
    </div>
  );
}