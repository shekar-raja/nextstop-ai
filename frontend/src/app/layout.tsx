import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "NextStop.AI",
  description: "Smart UK Transport Assistant",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
