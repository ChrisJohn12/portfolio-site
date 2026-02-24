'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-gray-900 font-semibold text-lg tracking-tight">
          Chris Michalak
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="/work" active={pathname?.startsWith('/work')}>Work</NavLink>
          <NavLink href="/ai-fluency" active={pathname === '/ai-fluency'}>AI Fluency</NavLink>
          <NavLink href="/about" active={pathname === '/about'}>About</NavLink>
          <a
            href="mailto:cjmichalak@gmail.com"
            className="text-sm font-medium bg-[#C8641A] hover:bg-[#e07820] text-white px-4 py-2 rounded-lg transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-600 hover:text-gray-900"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-6 py-4 flex flex-col gap-4">
          <NavLink href="/work" active={pathname?.startsWith('/work')} onClick={() => setMenuOpen(false)}>Work</NavLink>
          <NavLink href="/ai-fluency" active={pathname === '/ai-fluency'} onClick={() => setMenuOpen(false)}>AI Fluency</NavLink>
          <NavLink href="/about" active={pathname === '/about'} onClick={() => setMenuOpen(false)}>About</NavLink>
          <a
            href="mailto:cjmichalak@gmail.com"
            className="text-sm font-medium text-[#C8641A]"
            onClick={() => setMenuOpen(false)}
          >
            Contact →
          </a>
        </div>
      )}
    </nav>
  );
}

function NavLink({
  href,
  children,
  active,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-sm font-medium transition-colors ${
        active ? 'text-[#C8641A]' : 'text-gray-600 hover:text-gray-900'
      }`}
    >
      {children}
    </Link>
  );
}
