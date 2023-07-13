import './globals.css'
import Navbar from './components/navbar'



export const metadata = {
  title: 'Find My Bestfriend',
  description: 'Lost Pet App',
  keywords: 'Dog app, lost pet app'
} //for SEO 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body>
        <Navbar />
        {children}</body>
    </html>
  )
}
