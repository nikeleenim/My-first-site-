import ContactSection from "./ContactSection";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-12 bg-gray-100 dark:bg-gray-900 text-black">
      <div className="w-full max-w-md sm:max-w-xl rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-8 shadow-xl backdrop-blur-sm transition-all text-center space-y-6">
        <div className="flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-400 mb-3">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-teal-400">Next.js Project Ready</span>
        </div>

        <h1 className="text-5xl font-light tracking-tight sm:text-6xl mb-6 text-black">
          <span className="block">안녕하세요,</span><span className="block">니케리입니다</span>
        </h1>
          <img src="/favicon2.png" alt="Favicon" className="mx-auto w-12 h-12 sm:w-16 sm:h-16 rounded-full mt-4 mb-6" />

        <p className="text-sm text-gray-500 mb-6 leading-relaxed">
          가장 단순하고 깔끔한 <span className="font-semibold text-slate-800 dark:text-zinc-200">Next.js (App Router)</span> +{" "}
          <span className="font-semibold text-slate-800 dark:text-zinc-200">TypeScript</span> +{" "}
          <span className="font-semibold text-slate-800 dark:text-zinc-200">Tailwind CSS</span> 스타터 프로젝트입니다.
        </p>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="p-3 rounded-lg bg-slate-100 dark:bg-zinc-800/60 border border-slate-200/50 dark:border-zinc-700/50 text-center">
            <span className="block text-xs font-medium text-teal-400">Framework</span>
            <span className="text-sm font-semibold text-slate-800 dark:text-zinc-200">Next.js 16</span>
          </div>
          <div className="p-3 rounded-lg bg-slate-100 dark:bg-zinc-800/60 border border-slate-200/50 dark:border-zinc-700/50 text-center">
            <span className="block text-xs font-medium text-teal-400">Language</span>
            <span className="text-sm font-semibold text-slate-800 dark:text-zinc-200">TypeScript</span>
          </div>
          <div className="p-3 rounded-lg bg-slate-100 dark:bg-zinc-800/60 border border-slate-200/50 dark:border-zinc-700/50 text-center">
            <span className="block text-xs font-medium text-teal-400">Styling</span>
            <span className="text-sm font-semibold text-slate-800 dark:text-zinc-200">Tailwind CSS</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900 text-slate-100 dark:bg-black/60 font-mono text-xs mb-6 overflow-x-auto">
          <div className="text-slate-400 mb-1">// 수정할 메인 파일</div>
          <div>src/app/page.tsx</div>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-zinc-400 border-t border-slate-200 dark:border-zinc-800 pt-4">
          <span>폴더: My first site</span>
          <span>PowerShell: <code className="bg-slate-200 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-slate-800 dark:text-zinc-200">npm run dev</code></span>
        </div>

        <p style={{ color: "#C84726" }} className="text-sm font-medium">
          [오늘 처음 인터넷에 사이트를 올렸어요!]
        </p>
      </div>

      <ContactSection />
    </main>
  );
}
