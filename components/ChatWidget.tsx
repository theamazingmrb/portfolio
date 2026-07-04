"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, Send, Loader2, ExternalLink } from "lucide-react";

interface SourceInfo {
  source: string;
  url?: string;
  score: number;
}

interface ChatMessage {
  role: "user" | "bot";
  content: string;
  sources?: SourceInfo[];
}

function getSourceLabel(source: string): string {
  const parts = source.split("/");
  if (parts.length < 2) return source;
  const [type, slug] = parts;
  switch (type) {
    case "blog":
      return `Article: ${slug.replace(/-/g, " ")}`;
    case "project":
      return `Project: ${slug.replace(/-/g, " ")}`;
    case "experience":
      return `Work: ${slug.replace(/-/g, " ")}`;
    case "about":
      return "About page";
    default:
      return source;
  }
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "bot",
      content: "Hey, I'm Billie's portfolio assistant. Ask me about his work history, projects, or articles.",
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const buildHistory = (msgs: ChatMessage[]): Array<{ role: "user" | "assistant"; content: string }> => {
    return msgs
      .filter((m) => m.role !== "bot" || !m.content.includes("Hey, I'm Billie's portfolio assistant"))
      .map((m) => ({
        role: (m.role === "user" ? "user" : "assistant") as "user" | "assistant",
        content: m.content,
      }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput("");
    setError(null);

    const currentPage = typeof window !== 'undefined' ? window.location.pathname : '';

    const currentMessages = [...messages, { role: "user" as const, content: userMessage }];
    setMessages(currentMessages);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage,
          history: buildHistory(currentMessages),
          currentPage,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Request failed (${res.status})`);
      }

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: data.reply,
          sources: data.sources?.length > 0 ? data.sources : undefined,
        },
      ]);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Try again.");
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          content: "Something went wrong. Try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        role: "bot",
        content: "Hey, I'm Billie's portfolio assistant. Ask me about his work history, projects, or articles.",
      },
    ]);
    setError(null);
  };

  return (
    <>
      {/* Toggle button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background shadow-lg transition-transform hover:scale-105 active:scale-95"
          aria-label="Open chat"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Chat widget */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 z-50 flex w-[380px] max-w-[calc(100vw-2rem)] flex-col rounded-2xl border border-border bg-background shadow-2xl animate-in slide-in-from-bottom-5 fade-in duration-200">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background">
                <MessageCircle className="h-4 w-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm">Ask about my work</span>
                <span className="text-[10px] text-muted-foreground">Powered by local AI</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={clearChat}
                className="rounded px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                title="Clear conversation"
              >
                Clear
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setError(null);
                }}
                className="rounded p-1 transition-colors hover:bg-muted"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages area */}
          <div className="flex h-[380px] flex-col gap-3 overflow-y-auto p-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className="flex max-w-[85%] flex-col gap-1">
                  <div
                    className={`rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-foreground text-background"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    {msg.content}
                  </div>
                  {/* Source attribution for bot messages */}
                  {msg.role === "bot" && msg.sources && msg.sources.length > 0 && (
                    <div className="flex flex-wrap gap-1 px-1">
                      {msg.sources.map((s, j) => (
                        <span key={j}>
                          {s.url ? (
                            <a
                              href={s.url}
                              className="inline-flex items-center gap-0.5 text-[10px] text-muted-foreground underline decoration-muted-foreground/30 underline-offset-2 transition-colors hover:text-foreground"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {getSourceLabel(s.source)}
                              <ExternalLink className="h-2.5 w-2.5" />
                            </a>
                          ) : (
                            <span className="text-[10px] text-muted-foreground">
                              {getSourceLabel(s.source)}
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="flex max-w-[85%] items-center gap-2 rounded-2xl bg-muted px-3 py-2 text-sm">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Thinking...
                </div>
              </div>
            )}
            {error && (
              <div className="rounded-lg bg-destructive/10 px-3 py-2 text-xs text-destructive">
                {error}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-border p-3"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="What would you like to know?"
              className="flex-1 rounded-lg border border-border bg-muted px-3 py-2 text-sm outline-none ring-offset-background placeholder:text-muted-foreground focus:ring-2 focus:ring-ring focus:ring-offset-2"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground text-background transition-opacity hover:opacity-90 disabled:opacity-50"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
