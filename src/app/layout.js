import { Kanit } from "next/font/google";
//project imports
import "./globals.css";
import Header from "@/components/Header";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Plants App</title>
      </head>
      <body className={kanit.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
