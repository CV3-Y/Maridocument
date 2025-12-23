"use client";

import { useState, useEffect } from "react";

interface TerminalLoaderProps {
  onComplete: () => void;
  fileName: string;
}

export default function TerminalLoader({ onComplete, fileName }: TerminalLoaderProps) {
  const [lines, setLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  // 출력할 시나리오 텍스트
  const scenarios = [
    `> Requesting access to archive: "${fileName}"...`,
    `> System: Security Level 3. Decryption required.`,
    `> Attempting bypass...`,
    `> Warning: Unpublished draft detected.`,
    `> Overwriting temporary cache...`,
    `> Rendering Data Stream... Success.`
  ];

  useEffect(() => {
    // 모든 라인 출력 완료 시
    if (currentLineIndex >= scenarios.length) {
      const timeout = setTimeout(onComplete, 400); // [수정] 800ms -> 400ms (완료 대기 시간 단축)
      return () => clearTimeout(timeout);
    }

    const currentLineText = scenarios[currentLineIndex];

    // 한 글자씩 타이핑
    if (currentCharIndex < currentLineText.length) {
      const timeout = setTimeout(() => {
        setLines((prev) => {
          const newLines = [...prev];
          if (!newLines[currentLineIndex]) newLines[currentLineIndex] = "";
          newLines[currentLineIndex] += currentLineText[currentCharIndex];
          return newLines;
        });
        setCurrentCharIndex((prev) => prev + 1);
      }, 15); // [수정] 30ms -> 15ms (타이핑 속도 2배 향상)
      return () => clearTimeout(timeout);
    } else {
      // 한 줄 완료 후 다음 줄로 넘어감
      const timeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, 200); // [수정] 400ms -> 200ms (줄바꿈 대기 시간 단축)
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex, onComplete, scenarios, fileName]);

  return (
    <div className="font-mono text-sm md:text-base space-y-2 text-green-400 p-4">
      {lines.map((line, index) => (
        <p key={index} className="break-words">
          {line}
          {/* 현재 타이핑 중인 라인에만 커서 깜빡임 */}
          {index === currentLineIndex && (
            <span className="inline-block w-2 h-4 bg-green-500 animate-blink ml-1 align-middle"></span>
          )}
        </p>
      ))}
    </div>
  );
}