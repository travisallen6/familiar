import { auth } from "@/lib/auth/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import SignOutButton from "./sign-out-button";

export default async function DashboardPage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) redirect("/sign-in");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#0d0d1a] text-slate-300">
      <p className="text-sm">Signed in as {session.user.email}</p>
      <SignOutButton />
    </main>
  );
}
