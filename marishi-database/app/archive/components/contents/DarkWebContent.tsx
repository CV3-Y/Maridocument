export default function DarkWebContent({ id }: { id: string }) {
  return (
    <div className="bg-[#121212] p-4 font-sans text-gray-300 max-w-2xl mx-auto border border-gray-700 animate-fadeIn">
      <div className="text-center text-purple-500 text-xs mb-4 tracking-widest">- MARCHEN ANONYMOUS BOARD -</div>
      {id === "DARK_BUY" && (
        <>
          <h2 className="text-lg font-bold text-gray-100 border-b border-gray-700 pb-2">[구매] A급 결정 급구 (가격 선제시)</h2>
          <div className="text-sm min-h-[100px] mt-4">
            <p>제발... 손이 너무 떨려서 마법을 못 쓰겠어. 눈앞이 자꾸 흑백으로 보여.</p>
            <p>찌꺼기라도 좋으니까 파실 분 있나요? 엄마 유품이라도 팔아서 살게요.</p>
          </div>
          <div className="bg-[#1e1e1e] p-2 mt-4 space-y-2 text-xs">
            <p><span className="text-blue-400 font-bold">User1:</span> 님 그러다 곧 타락체 됨 ㅋㅋ</p>
            <p><span className="text-pink-500 font-bold">Nine:</span> @User2 사냥하러 감? 나도 껴줘 ^^</p>
          </div>
        </>
      )}
      {/* 다른 다크웹 게시글... */}
    </div>
  );
}