import Mainheader from "@/components/main-header/MainHeader";
import "./globals.css";




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <Mainheader />
          {children}
      </body>
    </html>
  );
}
