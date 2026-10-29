'use client';

import { useEffect, useState } from 'react';
import NextImage from 'next/image';

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  className?: string;
};

/**
 * Image that opens in a full-screen viewer on click.
 * Click the enlarged image to switch between "fit to screen" and "actual size" (scrolls),
 * click the backdrop, press Escape, or use the close button to leave.
 */
export default function ZoomableImage({ src, alt, width = 1200, height = 800, sizes, className }: Props) {
  const [open, setOpen] = useState(false);
  const [actual, setActual] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setActual(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="block w-full cursor-zoom-in"
        aria-label={`Enlarge image: ${alt}`}
      >
        <NextImage src={src} alt={alt} width={width} height={height} sizes={sizes} className={className} />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          className="fixed inset-0 z-[100] bg-black/85 overflow-auto"
          onClick={close}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            className="fixed top-4 right-4 z-[101] rounded-full bg-white text-[#1A1A1A] text-sm font-medium px-4 py-2 min-h-[44px] shadow"
          >
            Close
          </button>
          <div className={actual ? 'min-w-max p-6' : 'min-h-full flex items-center justify-center p-4 md:p-8'}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={alt}
              onClick={(e) => {
                e.stopPropagation();
                setActual((v) => !v);
              }}
              className={
                actual
                  ? 'max-w-none w-[2200px] h-auto cursor-zoom-out rounded-md'
                  : 'max-w-full max-h-[88vh] w-auto h-auto cursor-zoom-in rounded-md'
              }
            />
          </div>
        </div>
      )}
    </>
  );
}
