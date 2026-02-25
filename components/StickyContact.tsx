'use client';

export default function StickyContact() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#FAFAF9]/90 backdrop-blur-sm border-t border-[#E5E5E5] shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <p className="text-[#717171] text-sm hidden sm:block">
          Interested in working together?
        </p>
        <div className="flex items-center gap-3 ml-auto">
          <a
            href="mailto:cjmichalak@gmail.com"
            className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-sm px-4 py-2.5 rounded-lg transition-colors min-h-[44px]"
          >
            Get in touch →
          </a>
          <a
            href="https://www.linkedin.com/in/cjmichalak12/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chris Michalak on LinkedIn (opens in new tab)"
            className="inline-flex items-center gap-2 border border-[#E5E5E5] hover:bg-[#F3F2EF] text-[#555555] hover:text-[#1A1A1A] font-medium text-sm px-4 py-2.5 rounded-lg transition-colors min-h-[44px]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
