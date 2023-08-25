import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'




export const metadata: Metadata = {
  title: 'Car world',
  description: 'Streamline your car renting experience with our effortless car booking process.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar/>
         {children}
        <Footer/>
        </body>
    </html>
  )
}
