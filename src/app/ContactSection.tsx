"use client";

import { useState, useId } from "react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const nameInputId = useId();
  const messageInputId = useId();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      setStatus({
        type: "error",
        message: "이름과 하고 싶은 말을 모두 입력해주세요.",
      });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          message: message.trim(),
        }),
      });

      let responseText = "";
      let errorMsg = "";

      try {
        const data = await res.json();
        if (data && data.error) {
          errorMsg = data.error;
        } else if (typeof data === "string") {
          errorMsg = data;
        }
      } catch {
        responseText = await res.text();
        errorMsg = responseText;
      }

      if (res.ok) {
        setStatus({
          type: "success",
          message: "보냈어요!",
        });
        setName("");
        setMessage("");
      } else {
        setStatus({
          type: "error",
          message: errorMsg || `오류가 발생했습니다 (${res.status})`,
        });
      }
    } catch (err: any) {
      setStatus({
        type: "error",
        message: err?.message || "네트워크 오류가 발생했습니다.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full max-w-md sm:max-w-xl rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-8 shadow-xl backdrop-blur-sm transition-all mt-8 text-left">
      <div className="flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-2">
        <span className="inline-block w-2 h-2 rounded-full bg-blue-500"></span>
        <span>Contact</span>
      </div>

      <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
        연락하기
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor={nameInputId}
            className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-2"
          >
            이름
          </label>
          <input
            id={nameInputId}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력해주세요"
            required
            className="w-full rounded-xl border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-800/80 px-4 py-3 text-sm text-slate-900 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-500 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
          />
        </div>

        <div>
          <label
            htmlFor={messageInputId}
            className="block text-sm font-medium text-slate-700 dark:text-zinc-300 mb-2"
          >
            하고 싶은 말
          </label>
          <textarea
            id={messageInputId}
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="하고 싶은 말을 적어주세요"
            required
            className="w-full resize-none rounded-xl border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-800/80 px-4 py-3 text-sm text-slate-900 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-500 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
          />
        </div>

        {status.type && (
          <div
            id="contact-status-message"
            className={`p-4 rounded-xl text-sm font-medium transition-all ${
              status.type === "success"
                ? "bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300"
                : "bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300"
            }`}
          >
            {status.message}
          </div>
        )}

        <button
          type="submit"
          id="contact-submit-button"
          disabled={loading}
          className="w-full inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium py-3 px-6 shadow-md shadow-blue-500/20 transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
        >
          {loading ? "보내는 중..." : "보내기"}
        </button>
      </form>
    </section>
  );
}
