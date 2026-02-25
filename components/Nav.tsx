'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF9]/80 backdrop-blur-sm border-b border-[#F0F0F0]"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-[#1A1A1A] font-semibold text-lg tracking-tight">
          Chris Michalak
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="/work" active={pathname?.startsWith('/work')}>Work</NavLink>
          <NavLink href="/ai-fluency" active={pathname === '/ai-fluency'}>AI Fluency</NavLink>
          <NavLink href="/about" active={pathname === '/about'}>About</NavLink>
          <a
            href="mailto:cjmichalak@gmail.com"
            className="text-sm font-medium bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-4 py-2.5 rounded-lg transition-colors min-h-[44px] inline-flex items-center"
          >
            Contact
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-[#555555] hover:text-[#1A1A1A] min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
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
        <div className="md:hidden border-t border-[#E5E5E5] bg-[#FAFAF9] px-6 py-4 flex flex-col gap-1">
          <NavLink href="/work" active={pathname?.startsWith('/work')} onClick={() => setMenuOpen(false)}>Work</NavLink>
          <NavLink href="/ai-fluency" active={pathname === '/ai-fluency'} onClick={() => setMenuOpen(false)}>AI Fluency</NavLink>
          <NavLink href="/about" active={pathname === '/about'} onClick={() => setMenuOpen(false)}>About</NavLink>
          <a
            href="mailto:cjmichalak@gmail.com"
            className="text-sm font-medium text-[#2563EB] min-h-[44px] flex items-center"
            onClick={() => setMenuOpen(false)}
          >
            Contact
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
      className={`text-sm font-medium transition-colors min-h-[44px] inline-flex items-center ${
        active ? 'text-[#2563EB]' : 'text-[#555555] hover:text-[#1A1A1A]'
      }`}
    >
      {children}
    </Link>
  );
}
