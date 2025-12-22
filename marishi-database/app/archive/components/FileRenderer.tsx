import { ArchiveFile } from "../data";
import NewsContent from "./contents/NewsContent";
import ReportContent from "./contents/ReportContent";
import DarkWebContent from "./contents/DarkWebContent";
import ReceiptContent from "./contents/ReceiptContent";

export default function FileRenderer({ file }: { file: ArchiveFile }) {
  switch (file.type) {
    case "public":
      return <NewsContent id={file.contentId} />;
    case "classified":
      return <ReportContent id={file.contentId} />;
    case "darkweb":
      return <DarkWebContent id={file.contentId} />;
    case "receipt":
      return <ReceiptContent id={file.contentId} />;
    default:
      return <div className="text-red-500">Error: Unknown File Type</div>;
  }
}