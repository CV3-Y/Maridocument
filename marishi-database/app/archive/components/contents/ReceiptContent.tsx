export default function ReceiptContent({ id }: { id: string }) {
  return (
    <div className="bg-white p-6 max-w-sm mx-auto font-mono text-xs text-black shadow-lg rotate-1 animate-fadeIn">
      <div className="text-center border-b-2 border-dashed border-black pb-4 mb-4">
        <h2 className="text-xl font-bold">INVOICE</h2>
        <p>The Cleaner Service</p>
      </div>
      <table className="w-full mb-4">
        <tbody>
          <tr><td className="py-1">Obstacle Removal</td><td className="text-right">5,000,000</td></tr>
          <tr><td className="py-1">Clean Burn</td><td className="text-right">500,000</td></tr>
        </tbody>
      </table>
      <div className="flex justify-between font-bold text-lg border-t-2 border-black pt-2">
        <span>TOTAL</span><span>5,500,000 C</span>
      </div>
      <div className="mt-6 text-center">
        <span className="border-2 border-red-600 text-red-600 px-2 py-1 font-black transform -rotate-12 inline-block">PAID IN FULL</span>
      </div>
    </div>
  );
}