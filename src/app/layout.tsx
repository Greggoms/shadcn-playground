import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import QueryProvider from "@/components/providers/QueryProvider";
import ParticlesProvider from "@/components/providers/ParticlesProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "shadcn-playground",
  description: "Getting to know this component library.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <ParticlesProvider>
              <Header />
              <div id="root_body">{children}</div>
              <Toaster richColors />
            </ParticlesProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
