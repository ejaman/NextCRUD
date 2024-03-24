import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "홈이다.",
  icons: {
    icon: "./favicon.ico", // 왜 안 먹음
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${inter.className} m-auto w-1/3 h-screen flex flex-col `}
      >
        <header className="bg-amber-500 text-white py-4 text-center font-bold">
          <Link href="/todos"> 🐈 Todo 🐈</Link>
        </header>
        {/* TODO: 이후 추가될 내용 */}
        {/* <nav className="flex justify-center space-x-4 bg-gray-200 py-2">
          <Link className="text-gray-800 hover:text-gray-600" href="/todos">
            Todos
          </Link>
          <Link className="text-gray-800 hover:text-gray-600" href="/about">
            About
          </Link>
          <Link className="text-gray-800 hover:text-gray-600" href="/contact">
            Contact
          </Link>
        </nav> */}
        {children}
      </body>
    </html>
  );
}
