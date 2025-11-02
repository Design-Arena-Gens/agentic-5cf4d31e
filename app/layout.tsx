import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "Anand Ambhore | AI & ML Career Roadmap",
  description:
    "Comprehensive career planning portal for Anand Ambhore, covering M.Tech through GATE, PSUs, government roles, private and startup options with detailed guidance and action plans."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <body>{children}</body>
    </html>
  );
}
