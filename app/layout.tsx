import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { createUser } from "./actions/user.action";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "vehicle rentals",
  description: "vehicle rentals management",
};

const RootLayout = async ({
  children,
} : {
  children: React.ReactNode;
}) => {

  const { userId } = await auth();
  if (userId) await createUser();

  return (
    <ClerkProvider>
      <html lang="en" >
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

export default RootLayout;