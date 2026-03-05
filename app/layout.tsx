import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Տաթև և Գոռ",
  description: "Տաթև և Գոռ",
  openGraph: {
    title: "Տաթևի և Գոռի հարսանեկան հրավիրատոմս",
    description: "Best invitation website",
    url: "https://wedding-invitation-1-ecru.vercel.app/",
    siteName: "Տաթև և Գոռ",
    images: [
      {
        url: "/last.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
