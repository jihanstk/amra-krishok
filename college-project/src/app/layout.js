import AuthProvider from "@/AuthProvider/AuthProvider";
import QueryProvider from "@/components/common/QueryProvider/queryProvider";
import { Anek_Malayalam } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Amar Krishok",
  description: " based on agriculture  ",
};
const anek_Malayalam = Anek_Malayalam({
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className={anek_Malayalam.className}>
        <AuthProvider>
          <QueryProvider>{children}</QueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
