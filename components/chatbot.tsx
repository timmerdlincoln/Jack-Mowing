"use client";

import { useState, useRef, useEffect } from "react";

const BUSINESS_NAME = "The Curated Estate";

const FAQ_DATA = [
  { q: "What services do you offer?", a: "We offer lawn maintenance, landscape construction, irrigation & drainage systems, and bespoke landscape design — tailored to each estate we steward." },
  { q: "What areas do you serve?", a: "We serve a 30-mile radius from our studio in Somerset Heights, CA. Book a free site visit and we'll confirm your coverage area." },
  { q: "How much does lawn care cost?", a: "Our Seasonal plan starts at $450/month and our full Concierge plan is $875/month. Custom pricing is available for estates over 5 acres." },
  { q: "Do I need to be home?", a: "Not at all. As long as we have gate access and clear instructions, our team handles everything. We'll send a photo after every visit." },
  { q: "What if it rains?", a: "We monitor conditions closely. If it's too wet to work, we'll reschedule to the next available day and notify you by text." },
  { q: "Do you bring your own equipment?", a: "Yes — we arrive with commercial-grade equipment. You don't need to provide a thing." },
  { q: "How do I pay?", a: "We accept credit/debit cards, Venmo, Zelle, and checks. Monthly invoicing is available for all recurring estate plans." },
  { q: "Do you offer contracts?", a: "We offer per-visit and full seasonal contracts. Seasonal plans include a 10% loyalty discount." },
];

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const TIMES = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];

type Message = {
  from: "bot" | "user";
  text: string;
  options?: { label: string; value: string }[] | null;
};

type BookingData = {
  name?: string;
  phone?: string;
  address?: string;
  day?: string;
  time?: string;
};

function TypingIndicator() {
  return (
    <div style={{ display: "flex", gap: 4, padding: "8px 0", alignItems: "center" }}>
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          style={{
            width: 7, height: 7, borderRadius: "50%", background: "#47664b",
            animation: `ce-bounce 1.2s ease-in-out ${i * 0.15}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

function BotAvatar() {
  return (
    <div style={{
      width: 32, height: 32, borderRadius: "50%", flexShrink: 0,
      background: "linear-gradient(135deg, #17341d, #47664b)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 15, marginTop: 2,
    }}>
      🌿
    </div>
  );
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [bookingStep, setBookingStep] = useState<string | null>(null);
  const [bookingData, setBookingData] = useState<BookingData>({});
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const addBot = (text: string, options: Message["options"] = null, delay = 600) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { from: "bot", text, options }]);
    }, delay);
  };

  const addUser = (text: string) => {
    setMessages((prev) => [...prev, { from: "user", text }]);
  };

  const openChat = () => {
    setIsOpen(true);
    if (!hasGreeted) {
      setHasGreeted(true);
      setTimeout(() => {
        addBot(
          `Welcome to ${BUSINESS_NAME}. How can I assist you today?`,
          [
            { label: "📅 Book a Free Site Visit", value: "book" },
            { label: "❓ I Have a Question", value: "faq" },
          ],
          400
        );
      }, 200);
    }
  };

  const showMainMenu = () => {
    addBot("What else can I help you with?", [
      { label: "📅 Book a Free Site Visit", value: "book" },
      { label: "❓ I Have a Question", value: "faq" },
    ]);
  };

  const handleOption = (value: string) => {
    if (value === "book") {
      addUser("I'd like to book a free site visit");
      setBookingStep("name");
      addBot("Let's get you scheduled. First, what's your full name?");
    } else if (value === "faq") {
      addUser("I have a question");
      addBot(
        "Of course — pick a topic or type your own question:",
        FAQ_DATA.map((f, i) => ({ label: f.q, value: `faq_${i}` }))
      );
    } else if (value.startsWith("faq_")) {
      const idx = parseInt(value.split("_")[1]);
      const faq = FAQ_DATA[idx];
      addUser(faq.q);
      setTimeout(() => {
        addBot(faq.a, null, 500);
        setTimeout(() => {
          addBot("Anything else?", [
            { label: "📅 Book a Free Site Visit", value: "book" },
            { label: "❓ Another Question", value: "faq" },
          ], 1200);
        }, 600);
      }, 100);
    } else if (value.startsWith("day_")) {
      const day = value.replace("day_", "");
      addUser(day);
      setBookingData((prev) => ({ ...prev, day }));
      setBookingStep("time");
      addBot("What time works best?", TIMES.map((t) => ({ label: t, value: `time_${t}` })));
    } else if (value.startsWith("time_")) {
      const time = value.replace("time_", "");
      addUser(time);
      const finalData = { ...bookingData, time };
      setBookingData(finalData);
      setBookingStep("confirm");
      addBot(
        `Here are your site visit details:\n\n👤 ${finalData.name}\n📞 ${finalData.phone}\n📍 ${finalData.address}\n📅 ${finalData.day} at ${finalData.time}\n\nDoes everything look correct?`,
        [
          { label: "✅ Confirm Booking", value: "confirm_yes" },
          { label: "🔄 Start Over", value: "confirm_no" },
        ]
      );
    } else if (value === "confirm_yes") {
      addUser("Confirmed!");
      setBookingStep(null);
      setBookingData({});
      addBot("You're all set. Our estate team will be in touch to confirm your visit. We look forward to meeting you.", null, 500);
      setTimeout(() => showMainMenu(), 1800);
    } else if (value === "confirm_no") {
      addUser("Let me start over");
      setBookingStep("name");
      setBookingData({});
      addBot("Of course. Let's start fresh — what's your full name?");
    }
  };

  const handleSend = () => {
    const text = inputVal.trim();
    if (!text) return;
    setInputVal("");
    addUser(text);

    if (bookingStep === "name") {
      setBookingData((prev) => ({ ...prev, name: text }));
      setBookingStep("phone");
      addBot(`Lovely to meet you, ${text.split(" ")[0]}. What's the best phone number to reach you?`);
    } else if (bookingStep === "phone") {
      const cleaned = text.replace(/\D/g, "");
      if (cleaned.length < 7) {
        addBot("That doesn't appear to be a valid number. Could you try again?");
        return;
      }
      setBookingData((prev) => ({ ...prev, phone: text }));
      setBookingStep("address");
      addBot("And what's the property address we'd be visiting?");
    } else if (bookingStep === "address") {
      setBookingData((prev) => ({ ...prev, address: text }));
      setBookingStep("day");
      addBot("Pick a day for your site visit:", DAYS.map((d) => ({ label: d, value: `day_${d}` })));
    } else {
      const lower = text.toLowerCase();
      const match = FAQ_DATA.find((f) => {
        const keywords = f.q.toLowerCase().split(/\s+/);
        return keywords.filter((w) => w.length > 3).some((w) => lower.includes(w));
      });
      if (match) {
        addBot(match.a, null, 500);
        setTimeout(() => showMainMenu(), 1200);
      } else {
        addBot(
          "That's a great question — our team would be happy to answer it personally. Would you like to schedule a call?",
          [
            { label: "📅 Book a Free Site Visit", value: "book" },
            { label: "❓ Browse FAQs", value: "faq" },
          ]
        );
      }
    }
  };

  const keyframes = `
    @keyframes ce-bounce {
      0%, 60%, 100% { transform: translateY(0); }
      30% { transform: translateY(-5px); }
    }
    @keyframes ce-pulse-ring {
      0% { transform: scale(1); opacity: 0.5; }
      100% { transform: scale(1.55); opacity: 0; }
    }
    @keyframes ce-slide-up {
      from { opacity: 0; transform: translateY(12px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>

      {/* FAB toggle */}
      {!isOpen && (
        <button
          onClick={openChat}
          aria-label="Open chat"
          style={{
            position: "fixed", bottom: 32, right: 32, zIndex: 50,
            width: 64, height: 64, borderRadius: "50%",
            background: "linear-gradient(135deg, #17341d, #2d4b32)",
            border: "none", cursor: "pointer",
            boxShadow: "0 8px 28px rgba(23,52,29,0.45), 0 2px 8px rgba(0,0,0,0.12)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 26, color: "white",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.07)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          💬
          <div style={{
            position: "absolute", inset: -4, borderRadius: "50%",
            border: "2px solid #47664b",
            animation: "ce-pulse-ring 2.2s ease-out infinite",
            pointerEvents: "none",
          }} />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div style={{
          position: "fixed", bottom: 24, right: 24, zIndex: 50,
          width: 380, maxWidth: "calc(100vw - 32px)",
          height: 560, maxHeight: "calc(100vh - 48px)",
          borderRadius: 20, overflow: "hidden",
          background: "#FAFCF8",
          boxShadow: "0 24px 64px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.08)",
          display: "flex", flexDirection: "column",
          animation: "ce-slide-up 0.3s ease",
          fontFamily: "var(--font-manrope, system-ui, sans-serif)",
        }}>
          {/* Header */}
          <div style={{
            background: "linear-gradient(135deg, #17341d, #2d4b32)",
            padding: "18px 20px", color: "white",
            display: "flex", alignItems: "center", gap: 12,
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: 12,
              background: "rgba(255,255,255,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 20,
            }}>🌿</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 15, letterSpacing: 0.2 }}>{BUSINESS_NAME}</div>
              <div style={{ fontSize: 12, opacity: 0.75, marginTop: 2, display: "flex", alignItems: "center", gap: 5 }}>
                <span style={{ width: 7, height: 7, background: "#7CEB8B", borderRadius: "50%", display: "inline-block" }} />
                Online — typically replies instantly
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "rgba(255,255,255,0.12)", border: "none",
                color: "white", width: 32, height: 32, borderRadius: 8,
                cursor: "pointer", fontSize: 16, display: "flex",
                alignItems: "center", justifyContent: "center",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.22)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
            >✕</button>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1, overflowY: "auto", padding: "16px 16px 8px",
            display: "flex", flexDirection: "column", gap: 8,
          }}>
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex", gap: 8,
                  justifyContent: msg.from === "user" ? "flex-end" : "flex-start",
                  animation: "ce-slide-up 0.3s ease",
                }}
              >
                {msg.from === "bot" && <BotAvatar />}
                <div style={{ maxWidth: "80%" }}>
                  <div style={{
                    background: msg.from === "user"
                      ? "linear-gradient(135deg, #17341d, #2d4b32)"
                      : "white",
                    color: msg.from === "user" ? "white" : "#191c1a",
                    padding: "10px 14px",
                    borderRadius: msg.from === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                    fontSize: 14, lineHeight: 1.55,
                    boxShadow: msg.from === "user"
                      ? "0 2px 8px rgba(23,52,29,0.25)"
                      : "0 1px 4px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)",
                    whiteSpace: "pre-line",
                  }}>
                    {msg.text}
                  </div>
                  {msg.options && (
                    <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }}>
                      {msg.options.map((opt, j) => (
                        <button
                          key={j}
                          onClick={() => handleOption(opt.value)}
                          style={{
                            background: "white",
                            border: "1.5px solid #c2c8bf",
                            borderRadius: 12, padding: "9px 14px",
                            fontSize: 13, color: "#17341d",
                            cursor: "pointer", textAlign: "left",
                            fontWeight: 500,
                            transition: "all 0.2s",
                            fontFamily: "inherit",
                            lineHeight: 1.3,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = "#f2f4f0";
                            e.currentTarget.style.borderColor = "#47664b";
                            e.currentTarget.style.transform = "translateX(3px)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = "white";
                            e.currentTarget.style.borderColor = "#c2c8bf";
                            e.currentTarget.style.transform = "translateX(0)";
                          }}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div style={{ display: "flex", gap: 8 }}>
                <BotAvatar />
                <div style={{
                  background: "white", padding: "8px 14px",
                  borderRadius: "16px 16px 16px 4px",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)",
                }}>
                  <TypingIndicator />
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div style={{ padding: "12px 16px 16px", borderTop: "1px solid #e7e9e5", background: "#FAFCF8" }}>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <input
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder={
                  bookingStep === "name" ? "Your full name..." :
                  bookingStep === "phone" ? "Phone number..." :
                  bookingStep === "address" ? "Property address..." :
                  "Type a message..."
                }
                style={{
                  flex: 1, padding: "11px 16px",
                  border: "1.5px solid #c2c8bf",
                  borderRadius: 14, fontSize: 14,
                  outline: "none", background: "white",
                  fontFamily: "inherit",
                  transition: "border-color 0.2s, box-shadow 0.2s",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#47664b";
                  e.target.style.boxShadow = "0 0 0 3px rgba(71,102,75,0.12)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#c2c8bf";
                  e.target.style.boxShadow = "none";
                }}
              />
              <button
                onClick={handleSend}
                style={{
                  width: 42, height: 42, borderRadius: 12,
                  background: "linear-gradient(135deg, #17341d, #2d4b32)",
                  border: "none", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 18, color: "white", flexShrink: 0,
                  transition: "transform 0.15s, opacity 0.15s",
                  opacity: inputVal.trim() ? 1 : 0.45,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                ➤
              </button>
            </div>
            <div style={{ textAlign: "center", fontSize: 11, color: "#737971", marginTop: 8, letterSpacing: 0.2 }}>
              {BUSINESS_NAME}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
