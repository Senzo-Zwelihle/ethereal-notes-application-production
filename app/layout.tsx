import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Toaster } from "sonner";
import { ConvexClientProvider } from "@/components/providers/convex";
import { ModalProvider } from "@/components/providers/modal-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { NextThemeProvider } from "@/components/providers/theme-provider";
import { ReactLenis } from "@/components/providers/lenis-provider";

const PolySans = localFont({
  src: "./fonts/PolySans-Neutral.woff2",
  variable: "--font-PolySans",
  weight: "100 900",
});
const PolySansSlim = localFont({
  src: "./fonts/PolySans-Slim.woff2",
  variable: "--font-PolySans-Slim",
  weight: "100 900",
});
const PolySansBulky = localFont({
  src: "./fonts/PolySans-Bulky.woff2",
  variable: "--font-PolySansBulky",
  weight: "100 900",
});
const PolySansMedian = localFont({
  src: "./fonts/PolySans-Median.woff2",
  variable: "--font-PolySans-Median",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ethereal Notes Application",
  description: "Modern not taking application powered by Next.js",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/brand/ethereal-logo-dark.svg",
        href: "/brand/ethereal-logo-dark.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/brand/ethereal-logo-light.svg",
        href: "/brand/ethereal-logo-light.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactLenis root>
      <html lang="en" suppressHydrationWarning>
        <ConvexClientProvider>
          <EdgeStoreProvider>
            <body
              className={`${PolySans.variable} ${PolySansSlim.variable} ${PolySansBulky.variable} ${PolySansMedian.variable} font-[family-name:var(--font-PolySans)]  antialiased`}
            >
              <NextThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem={true}
                key={"Next-Theme-Provider-Production"}
              >
                <Toaster position="top-center" />
                <ModalProvider />
                {children}
              </NextThemeProvider>
            </body>
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </html>
    </ReactLenis>
  );
}
