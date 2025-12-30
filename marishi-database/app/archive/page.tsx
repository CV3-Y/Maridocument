"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ARCHIVES, ArchiveFile } from "./data";
import TerminalLoader from "./components/TerminalLoader";
import FileRenderer from "./components/FileRenderer";

// 히든 데이터
const HIDDEN_FILE_SERA: ArchiveFile = {
  id: "hidden_sera",
  type: "classified", 
  title: "🌸 IF: A Small Miracle",
  date: "Unknown",
  author: "Sera",
  contentId: "SERA_IF"
};

function ArchiveContent() {
  const [selectedFile, setSelectedFile] = useState<ArchiveFile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isContentReady, setIsContentReady] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const searchParams = useSearchParams();

  // [수정된 부분] 트리거 감지 시 '즉시' 파일 오픈
  useEffect(() => {
    const trigger = searchParams.get("trigger");
    if (trigger === "sera_if") {
      setSearchTerm("sera if"); // 검색창 텍스트 업데이트
      
      // 강제로 히든 파일 오픈 로직 실행
      setSelectedFile(HIDDEN_FILE_SERA);
      setIsLoading(true);
      setIsContentReady(false);
    }
  }, [searchParams]);

  // 검색창에서 직접 입력했을 때를 위한 리스너 (아카이브 페이지 내부 검색용)
  useEffect(() => {
    if (searchTerm.toLowerCase() === "sera if") {
      // 이미 열려있지 않다면 오픈
      if (selectedFile?.id !== HIDDEN_FILE_SERA.id) {
          setSelectedFile(HIDDEN_FILE_SERA);
          setIsLoading(true);
          setIsContentReady(false);
      }
    }
  }, [searchTerm, selectedFile]);

  const handleFileClick = (file: ArchiveFile) => {
    if (selectedFile?.id === file.id) return;
    setSelectedFile(file);
    setIsLoading(true);
    setIsContentReady(false);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setIsContentReady(true);
  };

  const handleClose = () => {
    setSelectedFile(null);
    setIsLoading(false);
    setIsContentReady(false);
    setSearchTerm("");
  };

  return (
    <>
      {/* 헤더 */}
      <header className="relative z-10 mb-8 border-b border-green-800 pb-4">
         <div className="flex justify-between items-end">
            <Link href="/" className="inline-block px-4 py-2 border border-green-700 hover:bg-green-900/30 transition-colors text-xs font-bold text-green-500">
                ← BACK_TO_ROOT
            </Link>
            <span className="text-[10px] text-green-700">ARCHIVE_SYSTEM_V.9.0</span>
         </div>
         <div className="flex flex-col md:flex-row justify-between items-end mt-4 gap-4">
            <h1 className="text-3xl font-black text-white tracking-tighter">
               📂 ARCHIVE: <span className="text-green-600">INCIDENT_LOGS</span>
            </h1>
            
            <div className="relative group">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-green-700 group-focus-within:text-green-500 transition-colors">🔍</span>
              <input 
                type="text" 
                placeholder="Search database..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-black border border-green-800 text-green-400 pl-8 pr-4 py-1 text-xs focus:outline-none focus:border-green-500 w-48 md:w-64 placeholder-green-900 transition-all focus:w-72 shadow-[0_0_10px_rgba(0,0,0,0.5)] focus:shadow-[0_0_15px_rgba(34,197,94,0.2)]"
              />
            </div>
         </div>
      </header>

      {/* 파일 리스트 */}
      {!selectedFile && (
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeIn">
          {Object.entries(ARCHIVES).map(([category, files]) => (
            <div key={category} className="border border-green-900/50 bg-green-950/10 p-4">
              <h3 className="text-green-400 font-bold mb-3 uppercase border-b border-green-900 pb-1 flex items-center gap-2">
                <span>📁</span> {category.replace("_", " ")}
              </h3>
              <ul className="space-y-1">
                {files.map((file) => (
                  <li 
                    key={file.id} 
                    onClick={() => handleFileClick(file)}
                    className="flex justify-between items-center text-xs p-2 hover:bg-green-500/20 cursor-pointer transition-colors border border-transparent hover:border-green-500/30 group"
                  >
                    <span className="flex items-center gap-2">
                      <span className="opacity-50 group-hover:opacity-100">📄</span>
                      <span className="font-bold text-gray-300 group-hover:text-green-300 transition-colors">
                        {file.title}
                      </span>
                    </span>
                    <span className="opacity-50 text-[10px]">{file.date}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* 파일 뷰어 */}
      {selectedFile && (
        <div className={`relative z-20 w-full max-w-4xl mx-auto min-h-[60vh] border-2 bg-black shadow-[0_0_50px_rgba(0,0,0,0.8)] p-1 transition-all duration-500 animate-grow ${
            selectedFile.contentId === "SERA_IF" 
              ? "border-pink-500 shadow-[0_0_50px_rgba(236,72,153,0.3)]" 
              : "border-green-600"
          }`}>
          
          <div className={`border-b p-2 flex justify-between items-center text-xs mb-4 transition-colors duration-500 ${
              selectedFile.contentId === "SERA_IF" 
                ? "bg-pink-900/20 border-pink-500 text-pink-400" 
                : "bg-green-900/20 border-green-600 text-green-500"
            }`}>
            <span>Accessing: {selectedFile.id.toUpperCase()}</span>
            <button onClick={handleClose} className="hover:text-white hover:bg-red-600 px-2 transition-colors">
              [X] CLOSE
            </button>
          </div>

          {isLoading && (
            <TerminalLoader 
              onComplete={handleLoadingComplete} 
              fileName={selectedFile.title} 
            />
          )}

          {isContentReady && (
            <div className="animate-fadeIn p-2 md:p-6">
              <FileRenderer file={selectedFile} />
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default function ArchivePage() {
  return (
    <main className="min-h-screen bg-black text-green-500 font-mono relative overflow-hidden p-4 md:p-8">
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-50 bg-[length:100%_2px,3px_100%] opacity-20"></div>
      <Suspense fallback={<div className="text-green-500 p-10">System Initializing...</div>}>
        <ArchiveContent />
      </Suspense>
    </main>
  );
}