export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "radial-gradient(circle at 50% 50%, #1a1a28 0%, #0d0d1a 100%)" }}
    >
      {/* Ambient glow blobs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-violet-600/5 blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] h-[40%] w-[40%] rounded-full bg-teal-400/5 blur-[120px]" />
      </div>

      {/* Decorative corner brackets */}
      <div className="pointer-events-none fixed left-0 top-0 h-32 w-32 opacity-20">
        <svg className="h-full w-full text-violet-600" viewBox="0 0 100 100">
          <path d="M0 0 L100 0 L100 2 L2 2 L2 100 L0 100 Z" fill="currentColor" />
        </svg>
      </div>
      <div className="pointer-events-none fixed bottom-0 right-0 h-32 w-32 rotate-180 opacity-20">
        <svg className="h-full w-full text-violet-600" viewBox="0 0 100 100">
          <path d="M0 0 L100 0 L100 2 L2 2 L2 100 L0 100 Z" fill="currentColor" />
        </svg>
      </div>

      {/* Main content */}
      <main className="relative z-10 flex w-full max-w-sm flex-col items-center space-y-12 px-6 py-16">
        {/* Logotype */}
        <h1
          className="select-none font-[family-name:var(--font-spectral)] text-7xl italic tracking-tight text-teal-400 md:text-8xl"
          style={{ textShadow: "0 0 25px rgba(45,212,191,0.5)" }}
        >
          Familiar
        </h1>

        {children}
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-12 text-center">
        <div className="flex items-center justify-center space-x-3">
          <div className="h-2 w-2 animate-pulse rounded-full bg-teal-400 shadow-[0_0_10px_#2dd4bf]" />
          <p className="font-[family-name:var(--font-spectral)] text-xs italic text-teal-400 opacity-40">
            The Familiar awaits your presence...
          </p>
        </div>
      </footer>
    </div>
  );
}
