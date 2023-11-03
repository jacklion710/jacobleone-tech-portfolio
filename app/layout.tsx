"use client"
import { ChakraProvider, Box } from "@chakra-ui/react"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [navbarRef, navbarInView] = useInView({
    triggerOnce: true, 
    threshold: 0.1, 
  });
  
  const [footerRef, footerInView] = useInView({
    triggerOnce: true, 
    threshold: 0.9, 
  });
  
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.33 } }
  };

  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Box display="flex" flexDirection="column" minHeight="100vh">
            <motion.div ref={navbarRef} initial="hidden" animate={navbarInView ? "visible" : "hidden"} variants={fadeIn}>
              <Navbar />
            </motion.div>            
          <Box flex="1"> 
                {children}
          </Box>
            <motion.div ref={footerRef} initial="hidden" animate={footerInView ? "visible" : "hidden"} variants={fadeIn}>
              <Footer />
            </motion.div>
          </Box>
        </ChakraProvider>
      </body>
    </html>
  )
}
