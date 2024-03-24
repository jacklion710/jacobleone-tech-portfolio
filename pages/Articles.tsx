import { 
    Box, 
    Flex, 
    Heading, 
    Text, 
    Link, 
    VStack, 
    SimpleGrid, 
    useColorModeValue, 
    ChakraProvider 
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import { Helmet } from "react-helmet";
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';

const blogArticles = [
  {
    title: "Article 1",
    description: "Description of article 1",
    url: "/Entry1",
  },
  // Add more blog articles here
];

export default function BlogMenu() {
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
        <title>Blog Articles | Jacob Leone</title>
        <meta name="description" content="Browse through the collection of blog articles by Your Name. Discover insights, tips, and stories on various topics." />
        <meta name="keywords" content="Jacob Leone, Blog, Articles, Insights, Tips, Stories" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog Articles | Jacob Leone" />
        <meta property="og:description" content="Explore the blog articles written by Jacob Leone. Find valuable content on a range of subjects." />
        <meta property="og:url" content="https://jacobleone.tech/Articles" />
        <link rel="canonical" href="https://yourwebsite.com/Articles" />
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
                Blog Articles
                </Heading>
                <Text
                    fontSize="xl"
                    fontWeight="medium"
                    textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)"
                    textAlign="center"
                    maxW="600px"
                    mx="auto"
                >
                    Explore the latest articles and insights on various topics
                </Text>
            </VStack>
          </motion.div>
          <Flex alignItems="center" justifyContent="center" flexGrow={1} w="full">
            <motion.div ref={articlesGridRef} initial="hidden" animate={articlesGridInView ? "visible" : "hidden"} variants={fadeIn}>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w="full">
                {blogArticles.map((article, index) => (
                  <Link href={article.url} key={index} _hover={{ textDecoration: 'none' }}>
                    <Box
                      p={{ base: 3, md: 5 }}
                      borderWidth="1px"
                      borderRadius="md"
                      borderColor={borderColor}
                      shadow="lg"
                      transition="transform .2s"
                      _hover={{ transform: 'scale(1.05)' }}
                    >
                      <Heading size="md" my={2} textAlign="center">{article.title}</Heading>
                      <Text mb={4}>{article.description}</Text>
                    </Box>
                  </Link>
                ))}
              </SimpleGrid>
            </motion.div>
          </Flex>
        </VStack>
        <motion.div ref={footerRef} initial="hidden" animate={footerInView ? "visible" : "hidden"} variants={fadeIn}>
          <Footer />
        </motion.div>
      </Flex>
    </ChakraProvider>
  );
}