import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-body-text">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </div>
  );
}
