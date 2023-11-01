import Header from "@/features/home/layouts/Header";
import "styles.css"
import Providers from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className="h-screen text-sm text-white">
          <Header />
          {children}
        </body>
      </Providers>
    </html>
  );
}
