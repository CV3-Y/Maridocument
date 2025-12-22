export default function ReportContent({ id }: { id: string }) {
  if (id === "REP_SERA") {
    return (
      <div className="bg-[#1a1a1a] p-6 border-2 border-red-800 max-w-2xl mx-auto font-mono text-gray-300 animate-fadeIn">
        <div className="flex justify-between border-b border-red-800/50 pb-2 mb-4">
          <span className="text-red-500 font-bold">ORATORIO INTERNAL REPORT</span>
          <span className="border border-red-500 text-red-500 text-[10px] px-1">CONFIDENTIAL</span>
        </div>
        <div className="space-y-4 text-sm">
          <p><strong>[사고 개요]</strong><br/>대상(Sera)은 환각 증세로 민간 시설물을 적성 개체로 오인하여 파손함.</p>
          <p><strong>[청구 내역]</strong><br/>합계: <span className="text-red-400 font-bold">4,500,000 C</span></p>
          <div className="border border-red-500/30 bg-red-900/10 p-2 text-xs">
            <strong>[관리자 코멘트]</strong><br/>상환 능력 전무. &apos;D급 균열 단독 진입&apos; 임무를 강제 배당하여 사망 보험금으로 충당할 것.
          </div>
        </div>
      </div>
    );
  }
  // MED_LUNA 등 다른 보고서 케이스...
  return <div className="text-red-500">보고서 데이터 없음</div>;
}