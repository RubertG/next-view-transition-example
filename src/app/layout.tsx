import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { ViewTransitions } from "next-view-transitions"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900"
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900"
})

export const metadata: Metadata = {
  title: "Ejemplo de view transition",
  description: "Ejemplo de view transition"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ViewTransitions>
          {children}
        </ViewTransitions>
      </body>
    </html>
  )
}
