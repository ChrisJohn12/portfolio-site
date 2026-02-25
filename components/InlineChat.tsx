'use client';

import { useEffect, useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const STARTER_QUESTIONS = [
  'How do you approach complex enterprise UX problems?',
  'What does your AI-enhanced design workflow look like?',
  'Walk me through your most impactful project',
  'What kind of role are you looking for?',
];

type Message = { role: 'user' | 'assistant'; content: string; id: string };
type Lightbox = { src: string; alt: string } | null;

export default function InlineChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [lightbox, setLightbox] = useState<Lightbox>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // Close lightbox on ESC
  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox]);

  async function sendMessage(text: string) {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: text, id: Date.now().toString() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput('');
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map(({ role, content }) => ({ role, content })),
        }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        setError(data.error || 'Something went wrong. Please try again.');
      } else {
        setMessages(prev => [
          ...prev,
          { role: 'assistant', content: data.content, id: (Date.now() + 1).toString() },
        ]);
        setTimeout(() => {
          const el = messagesContainerRef.current;
          if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
        }, 50);
      }
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  const isEmpty = messages.length === 0;

  return (
    <>
      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-label="Image preview"
          aria-modal="true"
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="w-full h-auto max-h-[82vh] object-contain rounded-xl shadow-2xl"
            />
            {lightbox.alt && (
              <p className="text-white/70 text-sm text-center mt-3">{lightbox.alt}</p>
            )}
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close image"
              className="absolute -top-3 -right-3 w-8 h-8 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors border border-white/20"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Chat widget */}
      <div
        className={`mx-auto bg-white border border-[#E5E5E5] rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-300 ease-in-out ${
          isExpanded ? 'w-full' : 'w-full max-w-2xl'
        }`}
      >
        {/* Expand / collapse toolbar — shown only once conversation starts */}
        {!isEmpty && (
          <div className="flex justify-end px-4 pt-3">
            <button
              onClick={() => setIsExpanded(v => !v)}
              aria-label={isExpanded ? 'Collapse chat' : 'Expand chat'}
              title={isExpanded ? 'Collapse' : 'Expand for more space'}
              className="flex items-center gap-1.5 text-[12px] text-[#717171] hover:text-[#1A1A1A] hover:bg-[#F3F2EF] px-2.5 py-1.5 rounded-lg transition-colors"
            >
              {isExpanded ? (
                <>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="4 14 10 14 10 20" />
                    <polyline points="20 10 14 10 14 4" />
                    <line x1="10" y1="14" x2="3" y2="21" />
                    <line x1="21" y1="3" x2="14" y2="10" />
                  </svg>
                  Collapse
                </>
              ) : (
                <>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="15 3 21 3 21 9" />
                    <polyline points="9 21 3 21 3 15" />
                    <line x1="21" y1="3" x2="14" y2="10" />
                    <line x1="3" y1="21" x2="10" y2="14" />
                  </svg>
                  Expand
                </>
              )}
            </button>
          </div>
        )}

        {/* Messages / empty state */}
        <div
          ref={messagesContainerRef}
          className="px-5 pt-5 pb-0 flex flex-col gap-3 transition-[max-height] duration-300 ease-in-out"
          aria-live="polite"
          aria-label="Chat messages"
          style={{
            minHeight: isEmpty ? 'auto' : '280px',
            maxHeight: isEmpty ? 'none' : (isExpanded ? '580px' : '360px'),
            overflowY: isEmpty ? 'visible' : 'auto',
          }}
        >
          {isEmpty ? (
            <div className="flex flex-col gap-3">
              <p className="text-[12px] font-semibold text-[#717171] uppercase tracking-wider">Try asking...</p>
              <div className="grid grid-cols-2 gap-2">
                {STARTER_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="text-left px-4 py-3.5 rounded-xl bg-[#F3F2EF] hover:bg-[#EFF6FF] text-[#555555] hover:text-[#2563EB] text-[13px] leading-snug transition-colors border border-transparent hover:border-[#2563EB]/20"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`rounded-2xl px-4 py-3 text-[14px] leading-relaxed ${
                    m.role === 'user'
                      ? 'max-w-[80%] bg-[#2563EB] text-white rounded-br-sm'
                      : 'w-full bg-[#F3F2EF] text-[#1A1A1A] rounded-bl-sm'
                  }`}
                >
                  {m.role === 'user' ? m.content : (
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                        strong: ({ children }) => <strong className="font-semibold text-[#1A1A1A]">{children}</strong>,
                        a: ({ href, children }) => (
                          <a
                            href={href}
                            target={href?.startsWith('/') ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            className="text-[#2563EB] underline underline-offset-2 hover:text-[#1D4ED8]"
                          >
                            {children}
                          </a>
                        ),
                        ul: ({ children }) => <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>,
                        ol: ({ children }) => <ol className="list-decimal list-inside mb-2 space-y-1">{children}</ol>,
                        li: ({ children }) => <li className="text-[14px]">{children}</li>,
                        img: ({ src, alt }) => (
                          <span className="block my-3 group">
                            <button
                              type="button"
                              onClick={() => setLightbox({ src: src || '', alt: alt || '' })}
                              className="block w-full text-left focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 rounded-xl"
                              aria-label={`View full size: ${alt || 'image'}`}
                            >
                              <img
                                src={src}
                                alt={alt || ''}
                                className="rounded-xl w-full max-w-sm object-cover border border-[#E5E5E5] shadow-sm group-hover:opacity-90 transition-opacity"
                              />
                              <span className="flex items-center gap-1 text-[11px] text-[#717171] mt-1.5">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                  <polyline points="15 3 21 3 21 9" />
                                  <polyline points="9 21 3 21 3 15" />
                                  <line x1="21" y1="3" x2="14" y2="10" />
                                  <line x1="3" y1="21" x2="10" y2="14" />
                                </svg>
                                {alt ? `${alt} · click to expand` : 'Click to expand'}
                              </span>
                            </button>
                          </span>
                        ),
                      }}
                    >
                      {m.content}
                    </ReactMarkdown>
                  )}
                </div>
              </div>
            ))
          )}

          {/* Typing indicator */}
          {isLoading && (
            <div className="flex justify-start pb-2">
              <div className="bg-[#F3F2EF] rounded-2xl rounded-bl-sm px-4 py-3.5 flex gap-1.5 items-center">
                <span className="w-2 h-2 bg-[#717171] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 bg-[#717171] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 bg-[#717171] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}

          {/* Error state */}
          {error && (
            <div className="text-[13px] text-red-500 bg-red-50 border border-red-100 rounded-xl px-4 py-3 mb-2">
              {error}
            </div>
          )}
        </div>

        {/* Input bar */}
        <form
          onSubmit={handleSubmit}
          className="px-4 py-4 flex gap-2 items-center"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything about my experience..."
            aria-label="Chat message input"
            disabled={isLoading}
            className="flex-1 text-[14px] text-[#1A1A1A] placeholder:text-[#A0A0A0] bg-[#F3F2EF] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#2563EB]/20 min-h-[44px] border border-transparent focus:border-[#2563EB]/30 disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            aria-label="Send message"
            className="w-11 h-11 shrink-0 bg-[#2563EB] hover:bg-[#1D4ED8] disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl flex items-center justify-center transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}
