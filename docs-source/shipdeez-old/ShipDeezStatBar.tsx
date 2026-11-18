export default function ShipDeezStatBar() {
  return (
    <div className="bg-[#F6E4C2] py-8 mb-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="flex flex-col items-center md:items-start">
            <p className="text-[#717171] text-xs font-semibold uppercase tracking-widest mb-2">Timeline</p>
            <p className="text-[32px] md:text-[36px] font-bold text-[#1A1A1A]">10 business days</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <p className="text-[#717171] text-xs font-semibold uppercase tracking-widest mb-2">Value Delivered</p>
            <p className="text-[32px] md:text-[36px] font-bold text-[#1A1A1A]">85% savings</p>
            <p className="text-[13px] text-[#717171] mt-1">vs retail shipping rates</p>
          </div>
        </div>
      </div>
    </div>
  )
}
