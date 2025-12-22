export type FileType = "public" | "classified" | "darkweb" | "receipt";

export interface ArchiveFile {
  id: string;
  type: FileType;
  title: string;
  date: string;
  author: string;
  contentId: string;
}

export const ARCHIVES: { [key: string]: ArchiveFile[] } = {
  "public_records": [
    { id: "news_01", type: "public", title: "[NEWS] 제12회 마리시 벚꽃 축제", date: "2025.04.01", author: "Marishi Daily", contentId: "NEWS_FESTIVAL" },
    { id: "news_02", type: "public", title: "[SOCIETY] 3구역 가스관 폭발 사고", date: "2025.12.20", author: "Marishi Daily", contentId: "NEWS_EXPLOSION" },
  ],
  "classified_docs": [
    { id: "rep_092", type: "classified", title: "INCIDENT_REP-092 (Sera)", date: "2025.12.21", author: "Oratorio HQ", contentId: "REP_SERA" },
    { id: "med_luna", type: "classified", title: "MEDICAL_ALERT (Luna)", date: "2025.12.22", author: "Med_Center", contentId: "MED_LUNA" },
  ],
  "dark_web": [
    { id: "market_buy", type: "darkweb", title: "[구매] A급 결정 급구", date: "Yesterday", author: "Anon_33", contentId: "DARK_BUY" },
    { id: "gossip_queen", type: "darkweb", title: "[정보] 베르사유 쪽 분위기", date: "Today", author: "Rat", contentId: "DARK_GOSSIP" },
  ],
  "receipts": [
    { id: "inv_ray", type: "receipt", title: "INVOICE #9901 (Ray)", date: "2025.12.19", author: "Fixer_R", contentId: "REC_RAY" },
  ]
};