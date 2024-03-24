import { Box, Flex, Heading, Text, Link, VStack, SimpleGrid, useColorModeValue, ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import { Helmet } from "react-helmet";
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';

export default function Entry1() {
  const bgColor = useColorModeValue("white", "gray.800");
  const color = useColorModeValue("gray.700", "gray.50");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.33 } }
  };

  const [navbarRef, navbarInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [headingRef, headingInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [articlesGridRef, articlesGridInView] = useInView({ triggerOnce: true, threshold: 0.06 });
  const [footerRef, footerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  return (
    <ChakraProvider>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
      </Head>
      <Helmet>
        <title>Entry 1 | Jacob Leone</title>
        <meta name="description" content="Browse through the collection of blog articles by Your Name. Discover insights, tips, and stories on various topics." />
        <meta name="keywords" content="Jacob Leone, Blog, Articles, Insights, Tips, Stories" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Entry 1 | Jacob Leone" />
        <meta property="og:description" content="Explore the blog articles written by Jacob Leone. Find valuable content on a range of subjects." />
        <meta property="og:url" content="https://jacobleone.tech/Entry1" />
        <link rel="canonical" href="https://yourwebsite.com/Entry1" />
      </Helmet>
      <Flex 
        direction="column"
        minHeight="100vh"
        bg="gray.50"
        bgImage="url('/images/Circuit.jpeg')"
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        bgAttachment="fixed"
        style={{ fontFamily: '"Roboto Mono", monospace' }}
      >
        <motion.div ref={navbarRef} initial="hidden" animate={navbarInView ? "visible" : "hidden"} variants={fadeIn}>
          <Navbar />
        </motion.div>
        <VStack spacing={10} alignItems="center" justifyContent="flex-start" flexGrow={1} py={10} px={{ base: 4, md: 10 }}>
          <motion.div ref={headingRef} initial="hidden" animate={headingInView ? "visible" : "hidden"} variants={fadeIn}>
            <VStack>
                <Heading 
                mb={4}
                size="2xl"
                position="relative"
                textShadow="0 0 5px teal, 0 0 10px teal, 0 0 15px teal, 0 0 20px teal"
                color="white"
                _after={{
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    bottom: '-10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '200px',
                    borderBottom: `1px solid currentColor`,
                    borderColor: "black"
                }}
                >
                  Entry 1
                </Heading>
                <Text
                    fontSize="xl"
                    fontWeight="medium"
                    textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)"
                    textAlign="center"
                    maxW="600px"
                    mx="auto"
                >
                  This is a placeholder for my upcoming blog debut! Come back later this week.
                </Text>
            </VStack>
          </motion.div>
        </VStack>
        <motion.div ref={footerRef} initial="hidden" animate={footerInView ? "visible" : "hidden"} variants={fadeIn}>
          <Footer />
        </motion.div>
      </Flex>
    </ChakraProvider>
  );
}