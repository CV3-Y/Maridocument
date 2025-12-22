"use client";

import { useState } from "react";
import Link from "next/link";
import { ARCHIVES, ArchiveFile } from "./data";
import TerminalLoader from "./components/TerminalLoader";
import FileRenderer from "./components/FileRenderer";

export default function ArchivePage() {
  const [selectedFile, setSelectedFile] = useState<ArchiveFile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isContentReady, setIsContentReady] = useState<boolean>(false);

  const handleFileClick = (file: ArchiveFile) => {
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
  };

  return (
    <main className="min-h-screen bg-black text-green-500 font-mono relative overflow-hidden p-4 md:p-8">
      {/* 배경 CRT 효과 */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-50 bg-[length:100%_2px,3px_100%] opacity-20"></div>

      {/* 헤더 */}
      <header className="relative z-10 mb-8 border-b border-green-800 pb-4">
         <div className="flex justify-between items-end">
            <Link href="/" className="inline-block px-4 py-2 border border-green-700 hover:bg-green-900/30 transition-colors text-xs font-bold text-green-500">
                ← BACK_TO_ROOT
            </Link>
            <span className="text-[10px] text-green-700">ARCHIVE_SYSTEM_V.9.0</span>
         </div>
         <h1 className="text-3xl font-black text-white mt-4 tracking-tighter">
            📂 ARCHIVE: <span className="text-green-600">INCIDENT_LOGS</span>
         </h1>
      </header>

      {/* 파일 리스트 (탐색기) */}
      {!selectedFile && (
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
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

      {/* 파일 뷰어 컨테이너 */}
      {selectedFile && (
        <div className="relative z-20 w-full max-w-4xl mx-auto min-h-[60vh] border-2 border-green-600 bg-black shadow-[0_0_50px_rgba(0,0,0,0.8)] p-1">
          {/* 뷰어 상단 바 */}
          <div className="bg-green-900/20 border-b border-green-600 p-2 flex justify-between items-center text-xs mb-4">
            <span>Accessing: {selectedFile.id.toUpperCase()}</span>
            <button onClick={handleClose} className="hover:text-white hover:bg-red-600 px-2 transition-colors">
              [X] CLOSE
            </button>
          </div>

          {/* 로딩 화면 (타이핑 애니메이션) */}
          {isLoading && (
            <TerminalLoader 
              onComplete={handleLoadingComplete} 
              fileName={selectedFile.title} 
            />
          )}

          {/* 실제 문서 내용 */}
          {isContentReady && (
            <div className="animate-fadeIn p-2 md:p-6">
              <FileRenderer file={selectedFile} />
            </div>
          )}
        </div>
      )}
    </main>
  );
}