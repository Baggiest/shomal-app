import type { Metadata } from "next";
import "./globals.css";
import { ClientBody } from "./ClientBody";

export const metadata: Metadata = {
  title: "ماشین سازی شمال پیروز – S.E.M.C",
  description: "شرکت ماشین سازی شمال پیروز - تولید کننده تجهیزات ضد انفجار",
  icons: {
    icon: "https://ext.same-assets.com/2455557907/2705101883.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
