'use client';

export default function StickyContact() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-sm border-t border-gray-200 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <p className="text-gray-500 text-sm hidden sm:block">
          Interested in working together?
        </p>
        <div className="flex items-center gap-3 ml-auto">
          <a
            href="mailto:cjmichalak@gmail.com"
            className="inline-flex items-center gap-2 bg-[#C8641A] hover:bg-[#e07820] text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
          >
            Get in touch →
          </a>
          <a
            href="https://www.linkedin.com/in/cjmichalak12/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-600 hover:text-gray-900 font-medium text-sm px-4 py-2 rounded-lg transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
