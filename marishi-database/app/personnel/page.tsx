"use client";

import { useState } from "react";
import Link from "next/link";

// 컴포넌트 import
import SeraDetail from "./components/SeraDetail";
import RubyDetail from "./components/RubyDetail";
import CyanDetail from "./components/CyanDetail";
import RayDetail from "./components/RayDetail";
import LunaDetail from "./components/LunaDetail";
import ShizDetail from "./components/ShizDetail";
import AiriDetail from "./components/AiriDetail";
import MiliaDetail from "./components/MiliaDetail";
import ScarletDetail from "./components/ScarletDetail";
import MedeaDetail from "./components/MedeaDetail";
import CharlotteDetail from "./components/CharlotteDetail";
import FreyDetail from "./components/FreyDetail";
import MomoDetail from "./components/MomoDetail";
import NineDetail from "./components/NineDetail";
import SehrDetail from "./components/SehrDetail";
import NaruDetail from "./components/NaruDetail";
import DefaultDetail from "./components/DefaultDetail";

export default function PersonnelPage() {
  
  // 현재 열려있는 파일 ID
  const [openFileId, setOpenFileId] = useState<string | null>(null);
  
  // [수정됨] 현재 열려있는 세력 폴더 ID들 (기본값: 빈 배열 = 모두 접힘)
  const [expandedFactions, setExpandedFactions] = useState<string[]>([]);

  const toggleFile = (id: string) => {
    setOpenFileId(openFileId === id ? null : id);
  };

  const toggleFaction = (id: string) => {
    setExpandedFactions(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  // 데이터 구조를 세력별로 그룹화
  const database = [
    {
      id: "void",
      name: "📁 UN_AFFILIATED (무소속)",
      description: "No faction data found.",
      files: [
        { id: "sera", name: "target_sera.dat", faction: "Disposed", status: "DECEASED", type: "file" },
        { id: "ruby", name: "target_ruby.dat", faction: "Unaffiliated", status: "Dangerous", type: "file" },
        { id: "cyan", name: "target_cyan.dat", faction: "Unaffiliated", status: "Active", type: "file" },
        { id: "ray", name: "target_ray.dat", faction: "Unaffiliated", status: "Active", type: "file" },
      ]
    },
    {
      id: "oratorio",
      name: "📁 ORATORIO_SYSTEM (오라토리오)",
      description: "City defense protocol.",
      files: [
        { id: "airi", name: "admin_airi.enc", faction: "Oratorio", status: "OVERLORD", type: "admin" },
        { id: "luna", name: "staff_luna.dat", faction: "Oratorio", status: "Unstable", type: "file" },
        { id: "shiz", name: "spec_shiz.dat", faction: "Oratorio", status: "Operational", type: "file" },
        { id: "milia", name: "idol_milia.dat", faction: "Oratorio", status: "Warning", type: "file" },
      ]
    },
    {
      id: "versailles",
      name: "📁 VERSAILLES_MANOR (베르사유)",
      description: "High-class danger zone.",
      files: [
        { id: "scarlet", name: "queen_scarlet.doc", faction: "Versailles", status: "ROYALTY", type: "restricted" },
        { id: "medea", name: "exp_medea.log", faction: "Versailles", status: "Hazard", type: "file" },
        { id: "charlotte", name: "pet_charlotte.dat", faction: "Versailles", status: "Hungry", type: "file" },
        { id: "frey", name: "guard_frey.enc", faction: "Versailles", status: "Frozen", type: "file" },
      ]
    },
    {
      id: "marchen",
      name: "📁 MARCHEN_GUILD (메르헨 상회)",
      description: "Underground network.",
      files: [
        { id: "momo", name: "sys_admin_momo.exe", faction: "Marchen", status: "ONLINE", type: "hacked" },
        { id: "nine", name: "target_nine.dat", faction: "Marchen", status: "Dangerous", type: "file" },
        { id: "sehr", name: "guard_sehr.dat", faction: "Marchen", status: "Hired", type: "file" },
        { id: "naru", name: "analyst_naru.doc", faction: "Marchen", status: "Observing", type: "file" },
      ]
    }
  ];

  // 전체 파일 개수 계산
  const totalFiles = database.reduce((acc, curr) => acc + curr.files.length, 0);

  return (
    <main className="min-h-screen bg-black text-green-500 font-mono relative overflow-hidden selection:bg-green-900 selection:text-white p-4 md:p-8">
      
      {/* 배경 CRT 효과 */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-50 bg-[length:100%_2px,3px_100%] opacity-20"></div>

      {/* 헤더 */}
      <header className="relative z-10 mb-8 border-b border-green-800/50 pb-4">
         <Link href="/" className="inline-block px-4 py-2 border border-green-700 hover:bg-green-900/30 transition-colors text-xs font-bold mb-4">
            ← BACK_TO_ROOT
          </Link>
         <div className="text-sm font-bold opacity-70 flex items-center gap-2">
            <span>📂 DATABASE</span>
            <span>/</span>
            <span className="text-green-400 animate-pulse">PERSONNEL</span>
            <span className="mx-2 opacity-30">/</span>
            <span className="w-2 h-4 bg-green-500 animate-blink block"></span>
         </div>
      </header>

      {/* 리스트 영역 */}
      <section className="relative z-10 border border-green-800/30 bg-green-900/5 backdrop-blur-sm shadow-[0_0_30px_rgba(34,197,94,0.05)]">
        
        {/* 리스트 제목줄 */}
        <div className="grid grid-cols-12 gap-2 p-3 border-b border-green-800 text-xs uppercase tracking-widest font-bold opacity-70 bg-green-900/20 text-green-300">
          <div className="col-span-6 pl-2">Directory / Filename</div>
          <div className="hidden md:block col-span-3">Info</div>
          <div className="col-span-3 text-right pr-2">Status</div>
        </div>

        {/* 세력(폴더) 맵핑 */}
        <div className="flex flex-col">
          {database.map((group) => {
            const isExpanded = expandedFactions.includes(group.id);

            return (
              <div key={group.id} className="border-b border-green-900/30">
                
                {/* 1. 폴더 행 (클릭 시 펼침/접힘) */}
                <div 
                  onClick={() => toggleFaction(group.id)}
                  className="grid grid-cols-12 gap-2 p-3 bg-green-950/30 hover:bg-green-900/40 cursor-pointer select-none border-l-4 border-l-green-700 items-center transition-colors"
                >
                  <div className="col-span-6 font-bold text-green-300 pl-2 flex items-center gap-2">
                    <span className="text-xs opacity-70">{isExpanded ? '▼' : '▶'}</span>
                    {group.name}
                  </div>
                  <div className="hidden md:block col-span-3 text-xs opacity-50 italic">
                    {group.description}
                  </div>
                  <div className="col-span-3 text-right pr-2 text-xs opacity-50">
                    [{group.files.length} Files]
                  </div>
                </div>

                {/* 2. 내부 파일 리스트 (펼쳐졌을 때만 보임) */}
                {isExpanded && (
                  <div className="bg-black/20">
                    {group.files.map((file) => {
                      const isOpen = openFileId === file.id;
                      const isDead = file.status === "DECEASED";
                      const isAdmin = file.type === "admin";
                      const isRestricted = file.type === "restricted";
                      const isHacked = file.type === "hacked";
                      // const isGame = file.type === "game"; // 나인은 일반 파일 타입

                      return (
                        <div key={file.id} className="border-b border-green-900/10 transition-colors duration-200">
                          {/* 파일 클릭 행 */}
                          <div 
                            onClick={() => toggleFile(file.id)}
                            className={`
                              grid grid-cols-12 gap-2 p-3 pl-8 items-center text-sm transition-all cursor-pointer select-none
                              ${isOpen 
                                ? (isAdmin ? 'bg-purple-900/10 border-l-purple-500' 
                                  : isRestricted ? 'bg-red-900/10 border-l-red-500' 
                                  : isHacked ? 'bg-indigo-900/10 border-l-indigo-500'
                                  : 'bg-green-900/10 border-l-green-500') + ' border-l-4' 
                                : 'hover:bg-white/5 border-l-4 border-l-transparent'}
                              
                              ${isDead ? 'text-gray-500 decoration-line-through decoration-red-900/50' : ''} 
                              ${isAdmin ? 'text-purple-300 hover:text-purple-200' : ''}
                              ${isRestricted ? 'text-red-400 hover:text-red-300' : ''}
                              ${isHacked ? 'text-indigo-400 hover:text-indigo-300' : ''}
                            `}
                          >
                            <div className="col-span-6 flex items-center gap-3 overflow-hidden">
                              <span className="text-lg opacity-70">
                                {isDead ? '📄' 
                                  : isAdmin ? (isOpen ? '🔓' : '🔒') 
                                  : isRestricted ? '⚜️'
                                  : isHacked ? '💻'
                                  : (isOpen ? '📂' : '📄')
                                }
                              </span>
                              
                              <span className={`truncate font-bold 
                                ${isOpen ? 'underline underline-offset-4' : ''}
                                ${isAdmin ? 'decoration-purple-500' 
                                  : isRestricted ? 'decoration-red-500' 
                                  : isHacked ? 'decoration-indigo-500' 
                                  : 'decoration-green-500'}
                              `}>
                                {file.name}
                              </span>
                            </div>
                            <div className="hidden md:block col-span-3 opacity-60 text-xs uppercase tracking-wider pl-2 border-l border-green-900/30">
                              {file.faction}
                            </div>
                            <div className="col-span-3 text-right pr-2">
                              <span className={`text-[10px] px-1.5 py-0.5 border font-mono 
                                ${!isAdmin && !isDead && !isRestricted && !isHacked && !['Dangerous','Unstable','Warning','Hazard','Hungry'].includes(file.status) ? 'border-green-600 text-green-400 bg-green-900/20' : ''}
                                ${['Dangerous','Unstable','Warning','Hazard','Hungry'].includes(file.status) ? 'border-red-600 text-red-500 bg-red-900/20 animate-pulse' : ''}
                                ${isDead ? 'border-gray-800 bg-gray-950 text-gray-500 decoration-none' : ''}
                                ${isAdmin ? 'border-purple-500 text-purple-300 bg-purple-900/30' : ''}
                                ${isRestricted ? 'border-yellow-600 text-yellow-500 bg-red-950/30' : ''}
                                ${isHacked ? 'border-indigo-500 text-indigo-300 bg-indigo-900/30 animate-pulse' : ''}
                              `}>
                                {file.status}
                              </span>
                            </div>
                          </div>

                          {/* 상세 내용 (아코디언) */}
                          {isOpen && (
                            <div className="pl-4 border-l border-green-900/30 ml-4 my-2">
                              {file.id === 'sera' && <SeraDetail />}
                              {file.id === 'ruby' && <RubyDetail />}
                              {file.id === 'cyan' && <CyanDetail />}
                              {file.id === 'ray' && <RayDetail />}
                              {file.id === 'luna' && <LunaDetail />}
                              {file.id === 'shiz' && <ShizDetail />}
                              {file.id === 'airi' && <AiriDetail />}
                              {file.id === 'milia' && <MiliaDetail />}
                              {file.id === 'scarlet' && <ScarletDetail />}
                              {file.id === 'medea' && <MedeaDetail />}
                              {file.id === 'charlotte' && <CharlotteDetail />}
                              {file.id === 'frey' && <FreyDetail />}
                              {file.id === 'momo' && <MomoDetail />}
                              {file.id === 'nine' && <NineDetail />}
                              {file.id === 'sehr' && <SehrDetail />}
                              {file.id === 'naru' && <NaruDetail />}
                              
                              {/* 예외 처리용 Default */}
                              {['sera','ruby','cyan','ray','luna','shiz','airi','milia','scarlet','medea','charlotte','frey','momo','nine','sehr','naru'].includes(file.id) === false && <DefaultDetail name={file.name} />}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* 하단 바 */}
        <div className="bg-black/80 p-2 text-[10px] text-green-800 flex justify-between uppercase tracking-widest border-t border-green-800">
          <span>Total Objects: {totalFiles}</span>
          <span>Security: Level 3 Restricted</span>
        </div>
      </section>
    </main>
  );
}