import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1: About blurb */}
        <div>
          <p className="text-gray-900 font-semibold text-lg">Chris Michalak</p>
          <p className="text-gray-500 text-sm mt-1 mb-4">Senior Product Designer</p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Specializing in enterprise UX, AI-enhanced research, and complex system design.
          </p>
          <p className="text-gray-300 text-xs mt-6">
            © {new Date().getFullYear()} Chris Michalak
          </p>
        </div>

        {/* Column 2: Quick links */}
        <div>
          <p className="text-gray-900 font-semibold text-sm uppercase tracking-wide mb-4">Quick Links</p>
          <nav className="flex flex-col gap-3">
            <Link href="/work" className="text-gray-500 hover:text-[#C8641A] text-sm transition-colors">Work</Link>
            <Link href="/ai-fluency" className="text-gray-500 hover:text-[#C8641A] text-sm transition-colors">AI Fluency</Link>
            <Link href="/about" className="text-gray-500 hover:text-[#C8641A] text-sm transition-colors">About</Link>
          </nav>
        </div>

        {/* Column 3: Social / contact */}
        <div>
          <p className="text-gray-900 font-semibold text-sm uppercase tracking-wide mb-4">Connect</p>
          <div className="flex flex-col gap-3">
            <a
              href="https://www.linkedin.com/in/cjmichalak12/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#C8641A] text-sm transition-colors"
            >
              LinkedIn →
            </a>
            <a
              href="mailto:cjmichalak@gmail.com"
              className="text-gray-500 hover:text-[#C8641A] text-sm transition-colors"
            >
              cjmichalak@gmail.com →
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
