"use client";

export function FAB() {
  return (
    <button
      aria-label="Open chat"
      className="fixed bottom-8 right-8 z-40 w-16 h-16 rounded-full bg-ce-primary text-ce-on-primary flex items-center justify-center shadow-[0_10px_40px_rgba(25,28,26,0.25)] hover:scale-105 active:scale-95 transition-transform"
    >
      <span className="material-symbols-outlined">chat_bubble</span>
    </button>
  );
}
