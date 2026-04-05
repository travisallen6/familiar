"use client";

import { authClient } from "@/lib/auth/client";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();

  async function handleSignOut() {
    await authClient.signOut();
    router.push("/sign-in");
  }

  return (
    <button
      onClick={handleSignOut}
      className="rounded-md border border-slate-700 px-4 py-2 text-sm text-slate-400 transition-colors hover:border-slate-500 hover:text-slate-300"
    >
      Sign out
    </button>
  );
}
