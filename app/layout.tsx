import React, { ReactNode } from 'react'
import  type {Metadata } from "next"
import  { ThemeProvider } from "./provider"
import {Inter} from "next/font/google"



import "./globals.css";

export  const metdata : Metadata = {
  title: "Nicola's Portifolio",
  description: "Modern next.js made portfolio"

}



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/jsm-logo.png" sizes="any" />
      </head>
      <body >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

