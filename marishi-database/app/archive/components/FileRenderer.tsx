import NewsContent from "./contents/NewsContent";
import ReportContent from "./contents/ReportContent";
import DarkWebContent from "./contents/DarkWebContent";
import ReceiptContent from "./contents/ReceiptContent";
import SeraIfContent from "./contents/SeraIfContent"; // [추가] 임포트

export default function FileRenderer({ file }: { file: any }) {
  const { contentId } = file;

  if (contentId.startsWith("NEWS_")) return <NewsContent id={contentId} />;
  if (contentId.startsWith("REP_") || contentId.startsWith("MED_") || contentId.startsWith("WANTED_")) return <ReportContent id={contentId} />;
  if (contentId.startsWith("DARK_")) return <DarkWebContent id={contentId} />;
  if (contentId.startsWith("REC_") || contentId.startsWith("CON_")) return <ReceiptContent id={contentId} />;
  
  // [추가] 히든 콘텐츠 연결
  if (contentId === "SERA_IF") return <SeraIfContent />;

  return <div className="text-red-500">Error: Unknown Content ID ({contentId})</div>;
}