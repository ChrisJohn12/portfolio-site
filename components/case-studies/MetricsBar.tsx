const stats = [
  { number: '6', label: 'weeks to ship' },
  { number: '4', label: 'Anthropic certs' },
  { number: '4', label: 'intake questions' },
  { number: 'Live', label: 'on Vercel' },
]

export default function MetricsBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="bg-[#F5F7FA] border border-[#E5E5E5] rounded-xl p-6 text-center"
        >
          <div className="text-[32px] font-bold text-[#2563EB] leading-none mb-1">
            {s.number}
          </div>
          <div className="text-[13px] text-[#555555]">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
