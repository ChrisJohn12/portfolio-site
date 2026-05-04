const boxes = [
  {
    label: 'React frontend',
    sub: 'Tailwind, Vite',
    bg: 'bg-[#F5F7FA]',
    border: 'border-[#E5E5E5]',
    labelColor: 'text-[#1A1A1A]',
    subColor: 'text-[#555555]',
  },
  {
    label: 'Vercel serverless fn',
    sub: 'api/recommend.js',
    bg: 'bg-[#EFF6FF]',
    border: 'border-[#2563EB]/30',
    labelColor: 'text-[#2563EB]',
    subColor: 'text-[#2563EB]/70',
  },
  {
    label: 'Claude API',
    sub: 'claude-sonnet-4-6',
    bg: 'bg-[#EFF6FF]',
    border: 'border-[#2563EB]/30',
    labelColor: 'text-[#2563EB]',
    subColor: 'text-[#2563EB]/70',
  },
  {
    label: 'AI Action Plan',
    sub: 'Returned to UI',
    bg: 'bg-[#F0FDF4]',
    border: 'border-[#16A34A]/30',
    labelColor: 'text-[#16A34A]',
    subColor: 'text-[#16A34A]/70',
  },
]

export default function ArchitectureFlow() {
  return (
    <div className="flex flex-col items-stretch gap-0">
      {boxes.map((b, i) => (
        <div key={b.label} className="flex flex-col items-center">
          <div
            className={`w-full border rounded-xl px-5 py-4 ${b.bg} ${b.border}`}
          >
            <div className={`text-[15px] font-semibold ${b.labelColor}`}>{b.label}</div>
            <div className={`text-[13px] ${b.subColor}`}>{b.sub}</div>
          </div>
          {i < boxes.length - 1 && (
            <div className="flex flex-col items-center py-0.5">
              <div className="w-px h-3 bg-[#E5E5E5]" />
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M6 8L0 0h12L6 8z" fill="#D1D5DB" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
