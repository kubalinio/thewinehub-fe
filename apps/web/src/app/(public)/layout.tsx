import Header from "@/features/public/shared/layouts/containers/Header";
import "styles.css"
import Providers from "./providers";
import { Lato } from 'next/font/google'

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  display: 'swap',
  variable: '--font-lato'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lato.variable}`}>
      <Providers>
        <body className="h-screen overflow-hidden text-sm text-white">
          <Header />
          {children}
        </body>
      </Providers>
    </html>
  );
}
