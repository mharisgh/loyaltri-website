import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';


export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar/> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
