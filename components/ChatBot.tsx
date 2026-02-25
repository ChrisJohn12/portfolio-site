'use client';

import { useChat } from 'ai/react';
import { useEffect, useRef, useState } from 'react';

const STARTER_QUESTIONS = [
  'What kind of work does Chris do?',
  'Tell me about the ShipDeez project',
  'How does Chris use AI in his work?',
  'Is Chris available for hire?',
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading, append } =
    useChat({ api: '/api/chat' }) as any;

  // Listen for nav trigger
  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener('open-chat', handler);
    return () => window.removeEventListener('open-chat', handler);
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  function handleStarterClick(question: string) {
    append({ role: 'user', content: question });
  }

  const isEmpty = messages.length === 0;

  if (!isOpen) return null;

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) setIsOpen(false); }}
      role="presentation"
    >
      {/* Modal */}
      <div
        role="dialog"
        aria-label="Chat with Chris's AI assistant"
        aria-modal="true"
        className="flex flex-col bg-white rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.18)] overflow-hidden w-full max-w-xl"
        style={{ height: 'min(680px, 85vh)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-[#FAFAF9] border-b border-[#E5E5E5] shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#2563EB] flex items-center justify-center shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div>
              <p className="text-[14px] font-semibold text-[#1A1A1A] leading-tight">Ask about Chris</p>
              <p className="text-[12px] text-[#717171] leading-tight">AI assistant · responds instantly</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#F3F2EF] text-[#717171] hover:text-[#1A1A1A] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div
          className="flex-1 overflow-y-auto px-5 py-5 flex flex-col gap-4"
          aria-live="polite"
          aria-label="Chat messages"
        >
          {isEmpty ? (
            <div className="flex flex-col gap-5">
              <div className="bg-[#F3F2EF] rounded-xl px-4 py-3.5 text-[14px] text-[#555555] leading-relaxed">
                Hi! I can answer questions about Chris's background, projects, skills, and availability. What would you like to know?
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[11px] font-semibold text-[#717171] uppercase tracking-wider">Suggested questions</p>
                <div className="grid grid-cols-2 gap-2">
                  {STARTER_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleStarterClick(q)}
                      className="text-left px-3.5 py-3 rounded-xl bg-[#F3F2EF] hover:bg-[#EFF6FF] text-[#555555] hover:text-[#2563EB] text-[13px] leading-snug transition-colors border border-transparent hover:border-[#2563EB]/20"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            messages.map((m: any) => (
              <div
                key={m.id}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-[14px] leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-[#2563EB] text-white rounded-br-sm'
                      : 'bg-[#F3F2EF] text-[#1A1A1A] rounded-bl-sm'
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))
          )}

          {/* Typing indicator */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[#F3F2EF] rounded-2xl rounded-bl-sm px-4 py-3.5 flex gap-1.5 items-center">
                <span className="w-2 h-2 bg-[#717171] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 bg-[#717171] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 bg-[#717171] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input bar */}
        <form
          onSubmit={handleSubmit}
          className="px-4 py-4 border-t border-[#E5E5E5] bg-[#FAFAF9] flex gap-2 items-center shrink-0"
        >
          <input
            ref={inputRef}
            value={input}
            onChange={handleInputChange}
            placeholder="Ask anything about Chris..."
            aria-label="Chat message input"
            className="flex-1 text-[14px] text-[#1A1A1A] placeholder:text-[#A0A0A0] bg-white border border-[#E5E5E5] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB]/40 min-h-[44px]"
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
    </div>
  );
}
