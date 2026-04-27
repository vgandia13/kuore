import type { Metadata } from "next";
import { Geist, Reddit_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { AppProvider } from "./contexts/AppContext";
import LayoutContent from "./components/LayoutContent";
import { Toaster } from "sonner";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const reddit = Reddit_Sans({
  variable: "--font-reddit_sans",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kuore CRM",
  description: "Gestión de clientes y oportunidades",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={cn(
        "h-full",
        "antialiased",
        reddit.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body className="min-h-screen">
        <AppProvider>
          <Toaster position="top-center" richColors />
          <LayoutContent>{children}</LayoutContent>
        </AppProvider>
      </body>
    </html>
  );
}
