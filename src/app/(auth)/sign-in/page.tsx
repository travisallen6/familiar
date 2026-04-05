"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient } from "@/lib/auth/client";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setPending(true);

    const { error } = await authClient.signIn.email({ email, password });

    if (error) {
      setError(error.message ?? "Sign in failed");
      setPending(false);
      return;
    }

    router.push("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6">
      <div className="space-y-4">
        <div className="group">
          <label className="mb-2 ml-4 block text-[10px] uppercase tracking-widest text-slate-400 opacity-70 transition-all group-focus-within:text-teal-400 group-focus-within:opacity-100">
            Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="h-14 w-full rounded-full border border-violet-600/20 bg-white/5 px-6 text-sm text-slate-100 placeholder:text-slate-500 transition-all duration-300 focus:border-teal-400/60 focus:bg-white/[0.08] focus:outline-none focus:shadow-[0_0_15px_rgba(45,212,191,0.2)]"
          />
        </div>

        <div className="group">
          <label className="mb-2 ml-4 block text-[10px] uppercase tracking-widest text-slate-400 opacity-70 transition-all group-focus-within:text-teal-400 group-focus-within:opacity-100">
            Password
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="h-14 w-full rounded-full border border-violet-600/20 bg-white/5 px-6 text-sm text-slate-100 placeholder:text-slate-500 transition-all duration-300 focus:border-teal-400/60 focus:bg-white/[0.08] focus:outline-none focus:shadow-[0_0_15px_rgba(45,212,191,0.2)]"
          />
        </div>
      </div>

      {error && (
        <p className="px-2 text-sm text-red-400">{error}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="h-14 w-full rounded-full bg-gradient-to-r from-violet-600 to-violet-700 font-semibold tracking-wide text-violet-100 shadow-lg shadow-violet-600/20 transition-all duration-300 hover:opacity-90 active:scale-95 disabled:opacity-60"
        style={{ boxShadow: "0 0 10px rgba(124,58,237,0.5)" }}
      >
        {pending ? "Signing in..." : "Sign In"}
      </button>

      <div className="flex items-center justify-center px-2">
        <Link
          href="/sign-up"
          className="text-xs font-medium text-violet-400 transition-colors duration-200 hover:text-violet-300"
        >
          Create Account
        </Link>
      </div>
    </form>
  );
}
