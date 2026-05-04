const fields = ['Business name', 'Platform', 'Orders per month', 'Time drain', 'AI tools used', 'Email address']

export default function BeforeAfter() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {/* Before */}
      <div className="bg-[#F9FAFB] border border-[#E5E5E5] rounded-xl p-5">
        <span className="inline-block bg-red-100 text-red-600 text-[11px] font-semibold px-2.5 py-0.5 rounded-full mb-3">
          Before
        </span>
        <p className="text-[13px] text-[#555555] mb-4">6 fields, all visible at once</p>
        <div className="space-y-2">
          {fields.map((f) => (
            <div key={f} className="h-8 bg-[#E5E5E5] rounded-md w-full" />
          ))}
        </div>
        <p className="text-red-500 text-[13px] mt-3">Cognitive overload before engagement</p>
      </div>

      {/* After */}
      <div className="bg-[#1A1D27] border border-[#2A2D3E] rounded-xl p-5">
        <span className="inline-block bg-green-900/50 text-green-400 text-[11px] font-semibold px-2.5 py-0.5 rounded-full mb-3">
          After
        </span>
        <p className="text-[13px] text-[#9CA3AF] mb-4">4 questions, one at a time</p>

        {/* Progress bar */}
        <div className="flex items-center gap-2 mb-4">
          <div className="h-1 w-1/4 rounded-full bg-[#6C63FF]" />
          <div className="h-1 flex-1 rounded-full bg-[#2A2D3E]" />
          <span className="text-[10px] text-[#9CA3AF] whitespace-nowrap">Step 1 of 4</span>
        </div>

        <p className="text-white text-[13px] font-medium mb-3">
          What platform are you selling on?
        </p>
        <div className="h-8 rounded-md bg-[#2A2D3E] border border-[#3A3D4E] w-full mb-3" />
        <div className="h-8 rounded-lg bg-[#6C63FF] w-20 flex items-center justify-center">
          <span className="text-white text-[12px] font-medium">Next</span>
        </div>

        <p className="text-green-400 text-[13px] mt-3">Progress visible, end in sight</p>
      </div>
    </div>
  )
}
