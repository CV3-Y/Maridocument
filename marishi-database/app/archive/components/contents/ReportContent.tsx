"use client";

import { useState, useEffect } from "react";

// ----------------------------------------------------------------------
// [Helper] 타자기 효과 컴포넌트
// ----------------------------------------------------------------------
function Typewriter({ text, delay = 0, speed = 20 }: { text: string, delay?: number, speed?: number }) {
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
// [Helper] 검열 삭제(Redacted) 컴포넌트
// ----------------------------------------------------------------------
function Redacted({ children, color = "red" }: { children: React.ReactNode, color?: "red" | "blue" }) {
  const bgClass = color === "blue" ? "bg-blue-900/30 text-blue-300" : "bg-red-900/30 text-red-300";
  
  return (
    <span className="group relative inline-block cursor-help align-bottom mx-1">
      <span className="absolute inset-0 bg-gray-900 group-hover:bg-transparent transition-colors duration-300 z-10 border-b border-gray-700"></span>
      <span className={`${bgClass} px-1 select-none opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
        {children}
      </span>
    </span>
  );
}

// ----------------------------------------------------------------------
// [Main] 보고서 컨텐츠 컴포넌트
// ----------------------------------------------------------------------
export default function ReportContent({ id }: { id: string }) {

  // 1. [REP_SERA] 세라 부채 보고서
  if (id === "REP_SERA") {
    return (
      <div className="flex flex-col gap-8 animate-fadeIn max-w-3xl mx-auto pb-10 font-mono text-sm">
        
        {/* 문서 컨테이너 */}
        <div className="bg-[#1a1a1a] border-2 border-red-800 p-6 md:p-10 shadow-[0_0_30px_rgba(153,27,27,0.2)] relative overflow-hidden">
          
          {/* 배경 워터마크 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl font-black text-red-900/10 pointer-events-none rotate-[-30deg] whitespace-nowrap">
            CONFIDENTIAL
          </div>

          {/* 헤더 */}
          <div className="flex justify-between items-start border-b-2 border-red-800 pb-4 mb-8">
            <div>
              <h1 className="text-2xl font-bold text-red-500 mb-1">INCIDENT REPORT</h1>
              <p className="text-[10px] text-gray-500">ORATORIO ASSET MANAGEMENT DEPT.</p>
            </div>
            <div className="text-right text-[10px] text-gray-500">
              <p>DOC_ID: <span className="text-white">REP-092-D</span></p>
              <p>DATE: <span className="text-white">2025.12.21</span></p>
              <p>CLEARANCE: <span className="text-red-500 border border-red-500 px-1">LV.3</span></p>
            </div>
          </div>

          {/* 대상 정보 */}
          <div className="grid grid-cols-2 gap-4 mb-8 bg-black/30 p-4 border border-gray-800">
            <div>
              <span className="text-gray-500 text-xs block">SUBJECT CODE</span>
              <span className="text-lg text-white font-bold">Morning_Star</span>
            </div>
            <div>
              <span className="text-gray-500 text-xs block">REAL NAME</span>
              <span className="text-lg text-white font-bold">Sera (16)</span>
            </div>
            <div>
              <span className="text-gray-500 text-xs block">AFFILIATION</span>
              <span className="text-white">Patrol Team 4 (Rookie)</span>
            </div>
            <div>
              <span className="text-gray-500 text-xs block">CURRENT STATUS</span>
              <span className="text-red-400 font-bold animate-pulse">DEBT CRITICAL</span>
            </div>
          </div>

          {/* 1. 사고 경위 */}
          <div className="mb-8">
            <h3 className="text-red-400 font-bold mb-2 border-l-4 border-red-600 pl-2">1. INCIDENT DETAILS</h3>
            <div className="text-gray-300 leading-relaxed bg-black/20 p-4 border-l border-gray-800">
              <p className="mb-3">
                대상은 12월 21일 23:40경, 3구역 야간 순찰 임무 수행 중 
                <span className="text-red-400 font-bold mx-1">심각한 인지 부조화(환각)</span> 증세를 보임.
              </p>
              <p className="mb-3">
                민간 시설물인 <Redacted>가로등 3기 및 상점 쇼윈도</Redacted>를 &apos;적성 개체(타락체)&apos;로 오인하여 
                별빛 폭격 마법(Starlight Bomb)을 무단 시전함. 이로 인해 반경 50m 내 보도블록이 파손되고 소음 민원이 다수 접수됨.
              </p>
              <p className="text-xs text-gray-500 italic">
                * 대상 진술: &quot;저기 괴물이 있어서... 시민들을 지켜야 한다고 생각해서... 죄송해요...&quot; (진술 신빙성 낮음)
              </p>
            </div>
          </div>

          {/* 2. 청구 내역 (영수증 스타일) */}
          <div className="mb-8">
            <h3 className="text-red-400 font-bold mb-2 border-l-4 border-red-600 pl-2">2. DAMAGE ASSESSMENT</h3>
            <table className="w-full text-xs md:text-sm border border-gray-700">
              <thead className="bg-gray-800 text-gray-400">
                <tr>
                  <th className="py-2 px-4 text-left">ITEM</th>
                  <th className="py-2 px-4 text-right">COST (Credit)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800 text-gray-300">
                <tr>
                  <td className="py-2 px-4">Magical Lamp Restoration (x3)</td>
                  <td className="py-2 px-4 text-right">3,200,000</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Pavement Reconstruction</td>
                  <td className="py-2 px-4 text-right">800,000</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Memory Wipe Service (Witnesses)</td>
                  <td className="py-2 px-4 text-right">500,000</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 text-red-400">Penalty Fee (Unauthorized Magic)</td>
                  <td className="py-2 px-4 text-right text-red-400">1,500,000</td>
                </tr>
                <tr className="bg-red-900/20 text-red-300 font-bold text-base">
                  <td className="py-3 px-4">TOTAL DEBT</td>
                  <td className="py-3 px-4 text-right"><Typewriter text=" 6,000,000 C" delay={500} /></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 3. 자산 분석 및 처분 */}
          <div className="mb-8">
            <h3 className="text-red-400 font-bold mb-2 border-l-4 border-red-600 pl-2">3. ASSET ANALYSIS</h3>
            <ul className="list-disc pl-5 text-gray-400 space-y-1 text-xs">
              <li>현재 보유 현금: 3,200 C (상환 불가능)</li>
              <li>보유 아이템 가치: 낡은 스태프 (폐기 등급), 곰 인형 열쇠고리 (가치 없음)</li>
              <li>신체 담보 가치: <Redacted>장기 이식 적합성 판정 중 (B+ Grade)</Redacted></li>
            </ul>
          </div>

          {/* 4. 관리자 코멘트 (강제 명령) */}
          <div className="border border-red-500/50 bg-red-950/20 p-4 relative">
            <div className="absolute top-0 right-0 bg-red-600 text-white text-[10px] px-2 py-0.5">ADMIN ORDER</div>
            <h3 className="text-red-400 font-bold mb-2">4. DISCIPLINARY ACTION</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              대상의 경제적 상황을 고려할 때, 정상적인 상환은 불가능하다고 판단됨.
              <br/><br/>
              이에 따라, 대상에게 <span className="text-red-400 font-bold underline"><Typewriter text=" D-Class 균열 단독 진입" delay={1500} /></span> 임무를 강제로 배당할 것을 승인함.
              <br/>
              <span className="text-xs text-gray-500 mt-2 block">
                * 성공 시: 에테르 결정 회수로 부채 일부 탕감 및 복귀 허용.<br/>
                * 실패/사망 시: <Redacted>생명 보험금(Oratorio Life Insurance) 수령으로 부채 전액 충당 및 이익 발생.</Redacted>
              </span>
            </p>
          </div>

        </div>
      </div>
    );
  }

  // 2. [MED_LUNA] 루나 의료 경고
  if (id === "MED_LUNA") {
    return (
      <div className="flex flex-col gap-8 animate-fadeIn max-w-3xl mx-auto pb-10 font-mono text-sm">
        
        {/* 문서 컨테이너 */}
        <div className="bg-[#0f172a] border-2 border-blue-800 p-6 md:p-10 shadow-[0_0_30px_rgba(30,58,138,0.3)] relative overflow-hidden">
          
          {/* 스캔라인 효과 */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_2px,3px_100%] pointer-events-none opacity-20"></div>

          {/* 헤더 */}
          <div className="flex items-center gap-4 mb-8 border-b-2 border-blue-600/50 pb-4">
            <div className="w-12 h-12 border-2 border-blue-500 rounded-full flex items-center justify-center text-2xl animate-pulse">
              ⚕️
            </div>
            <div>
              <h1 className="text-2xl font-bold text-blue-400">MEDICAL ALERT</h1>
              <p className="text-[10px] text-blue-200">ORATORIO HEALTH & PSYCHE DEPT.</p>
            </div>
            <div className="ml-auto text-right">
              <span className="block text-xl font-black text-red-500 border border-red-500 px-2">CRITICAL</span>
            </div>
          </div>

          {/* 환자 정보 및 상태 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-900/10 p-4 border border-blue-800">
              <h3 className="text-blue-300 font-bold mb-2 border-b border-blue-800 pb-1">PATIENT INFO</h3>
              <ul className="space-y-2 text-xs text-blue-100">
                <li className="flex justify-between"><span>NAME:</span> <span>Luna</span></li>
                <li className="flex justify-between"><span>ID:</span> <span>OP-7724</span></li>
                <li className="flex justify-between"><span>ROLE:</span> <span>Operator / Analyst</span></li>
                <li className="flex justify-between"><span>CONDITION:</span> <span className="text-yellow-400 animate-pulse">UNSTABLE</span></li>
              </ul>
            </div>
            
            {/* 약물 농도 그래프 (텍스트 시각화) */}
            <div className="bg-blue-900/10 p-4 border border-blue-800">
              <h3 className="text-red-400 font-bold mb-2 border-b border-red-800 pb-1">TOXICITY LEVEL</h3>
              <div className="space-y-3 text-[10px]">
                <div className="flex items-center gap-2">
                  <span className="w-20">Stimulant A</span>
                  <div className="flex-1 bg-gray-700 h-2 overflow-hidden relative">
                    <div className="h-full bg-red-500 w-[92%] animate-[pulse_2s_infinite]"></div>
                    <div className="absolute top-0 right-[8%] h-full w-[1px] bg-white"></div> {/* 임계점 표시 */}
                  </div>
                  <span className="text-red-400 font-bold">92%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-20">Sedative B</span>
                  <div className="flex-1 bg-gray-700 h-2 overflow-hidden">
                    <div className="h-full bg-yellow-500 w-[65%]"></div>
                  </div>
                  <span className="text-yellow-400">65%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-20">Mana</span>
                  <div className="flex-1 bg-gray-700 h-2 overflow-hidden">
                    <div className="h-full bg-blue-500 w-[20%]"></div>
                  </div>
                  <span className="text-blue-400">20%</span>
                </div>
              </div>
            </div>
          </div>

          {/* 진단 소견 */}
          <div className="mb-8">
            <h3 className="text-blue-300 font-bold mb-3 border-l-4 border-blue-500 pl-2">DIAGNOSIS REPORT</h3>
            <div className="bg-black/40 border border-blue-900 p-4 text-gray-300 text-sm leading-relaxed space-y-4">
              <p>
                대상의 혈중 &apos;비타민(각성제)&apos; 농도가 <span className="text-red-400 font-bold">치사량의 0.8배</span>에 도달함. 
                중추신경계의 과부하로 인해 지속적인 <span className="text-red-400">미세한 손 떨림</span>과 간헐적인 <span className="text-red-400">공황 발작(Panic Attack)</span> 증세가 관찰됨.
              </p>
              <p>
                최근 작전 오퍼레이팅 중 평균 <span className="text-yellow-400">0.5초의 반응 지연(Lag)</span>이 발생하였으며, 
                이는 전선에 있는 마법소녀들의 생존율을 약 15% 가량 저하시키는 치명적인 요인이 되고 있음.
              </p>
              <div className="text-xs text-gray-500 mt-2 p-3 border-l-2 border-gray-600 bg-gray-900/50 italic">
                &quot;살려주세요... 죄송해요... 제발...&quot; <br/>
                (수면 중 반복되는 잠꼬대 청취됨. PTSD 증세 악화 확인.)
              </div>
            </div>
          </div>

          {/* 처방 및 권고 (비인도적) */}
          <div className="border-t-2 border-blue-800 pt-4 mt-8">
            <h3 className="text-red-400 font-bold mb-2 flex items-center gap-2">
              <span className="animate-pulse">⚠</span> 
              ADMINISTRATOR OVERRIDE
            </h3>
            <div className="bg-red-950/20 border border-red-900 p-4 relative">
              <div className="absolute -top-3 right-4 bg-black border border-red-900 text-red-500 text-[10px] px-2">CONFIRMED BY: AIRI</div>
              
              <p className="text-sm text-gray-300 mb-3">
                <span className="text-blue-400 font-bold">[Recommendation]:</span><br/>
                현재 대체 가능한 S급 광역 탐지 능력자가 부재함. 즉각적인 폐기는 전력 손실을 초래함.
              </p>
              
              <div className="bg-black/30 p-3 border border-red-900/30 mb-3">
                <p className="text-sm text-white font-bold mb-1">
                  &gt; Action: 투약량 20% 증량 승인.
                </p>
                <p className="text-xs text-gray-400">
                  단기간 내에 한계치까지 성능을 강제로 추출한 뒤, <Redacted color="blue">뇌사 또는 영구적 정신 붕괴 시점에 폐기 처분할 것.</Redacted>
                </p>
              </div>

              <p className="text-[10px] text-gray-600 text-right">
                * 본 결정에 대한 이의 제기는 불가능합니다.
              </p>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // 데이터 로딩 중
  return <div className="text-gray-500 p-4 text-center animate-pulse">데이터 접근 중...</div>;
}