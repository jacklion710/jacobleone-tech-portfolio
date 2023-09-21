"use client"
import { ChakraProvider, Box } from "@chakra-ui/react"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Box display="flex" flexDirection="column" minHeight="100vh">
            <Navbar />
            <Box flex="1"> 
                {children}
            </Box>
            <Footer />
          </Box>
        </ChakraProvider>
      </body>
    </html>
  )
}
