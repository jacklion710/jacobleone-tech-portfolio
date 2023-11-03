import {
    Box,
    Flex,
    Heading,
    Text,
    Button,
    VStack,
    Link,
    Container,
    ChakraProvider,
    Divider
} from "@chakra-ui/react";
import { FaLaptopCode, FaMobileAlt, FaBrain, FaCode } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import { Helmet } from "react-helmet";
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React, { useState, useEffect } from 'react';

  const services = [
    {
      title: "AI & Machine Learning",
      icon: <FaBrain />,
      description: "Custom AI models and machine learning solutions tailored to your business needs.",
    },
    {
      title: "Software Development",
      icon: <FaCode />,
      description: "Full-stack software development services from concept to deployment.",
    },
    {
      title: "Web Development",
      icon: <FaLaptopCode />,
      description: "Responsive, user-friendly websites built with the latest technologies.",
    },
    {
      title: "Mobile App Creation",
      icon: <FaMobileAlt />,
      description: "Native and hybrid mobile applications for both Android and iOS platforms.",
    }
  ];
  
  export default function Services() {
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: .8 } }
    };
    
    const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [navbarRef, navbarInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [footerRef, footerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.000001 });
    const [headingRef, headingInView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <ChakraProvider>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
            </Head>
            <Helmet>
                <title>Jacob Leones Professional Tech Services</title>
                <meta name="description" content="Discover the range of tech services offered by Jacob Leone, including AI & Machine Learning, Web Development, Software Development, and Mobile App Creation. Get tailored solutions for your specific needs." />
                <meta name="keywords" content="Jacob Leone, AI & Machine Learning, Software Development, Web Development, Mobile App Creation, Professional Services, Tech Solutions" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Jacob Leones Tech Services" />
                <meta property="og:description" content="Explore Jacob Leones specialized tech services, designed to provide optimal solutions in various domains including AI, web development, software creation, and mobile app design." />
                <meta property="og:url" content="https://jacobleone.tech/Services" />
                <link rel="canonical" href="https://jacobleone.tech/Services" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet"/>
            </Helmet>
            <Flex 
                direction="column" 
                minHeight="100vh"
                bgImage="url('/images/Circuit.jpeg')"
                bgPos="center"
                bgSize="cover"
                bgRepeat="no-repeat"
                style={{ fontFamily: '"Roboto Mono", monospace' }}
            >
                <motion.div ref={navbarRef} initial="hidden" animate={navbarInView ? "visible" : "hidden"} variants={fadeIn}>
                    <Navbar />
                </motion.div>
                
                <Container maxW="container.xl" flexGrow={1}>
                    <motion.div ref={headingRef} initial="hidden" animate={headingInView ? "visible" : "hidden"} variants={fadeIn}>

                        <Heading 
                            as="h1" 
                            size="2xl" 
                            mb={10} 
                            mt={10} 
                            textAlign="center"
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
                                width: '280px',  
                                borderBottom: `1px solid currentColor`,
                                borderColor: "black" 
                            }}
                        >
                            Services
                        </Heading>
                    </motion.div>
                    <Flex wrap="wrap" justifyContent="center" gap={4}>
                        {services.map((service, index) => (
                        <motion.div key={index} ref={servicesRef} initial="hidden" animate={servicesInView ? "visible" : "hidden"} variants={fadeIn}>

                            <Box borderWidth="5px" borderRadius="lg" overflow="hidden" w="xs" p={5} m={1} bg="gray.100" borderColor="black" boxSizing="border-box" height={{ md: "300px" }}>
                                <Flex justifyContent="center">
                                    <Box fontSize="3xl" mb={3}>
                                        {service.icon}
                                    </Box>
                                </Flex>
                                <Heading as="h2" size="lg" mb={1} textAlign="center">
                                    {service.title}
                                </Heading>
                                <Text mb={4} textAlign="center">{service.description}</Text>
                            </Box>
                        </motion.div>
                        ))}
                    </Flex>

                    <Divider my={10} w="50%" borderColor="black" mx="auto" />

                    <motion.div ref={ctaRef} initial="hidden" animate={ctaInView ? "visible" : "hidden"} variants={fadeIn}>
                    <VStack mt={10} spacing={4} alignItems="center">
                        <Text fontSize="lg" textAlign="center" fontWeight="medium">
                            Have an idea for a project? Reach out anytime!
                        </Text>
                        <Flex>
                            <Button colorScheme="blue" size="med" as={Link} href="/Contact" mr={4} padding={2}>
                                Contact
                            </Button>
                            <Button colorScheme="green" size="med" as={Link} href="/Projects" padding={2}>
                                Projects
                            </Button>
                        </Flex>
                        <Text fontSize="med">
                            Email me at <Link href="mailto:jacob0leone@gmail.com" color="blue.500" fontWeight="bold">jacob0leone@gmail.com</Link>
                        </Text>
                    </VStack>
                    </motion.div>

                </Container>

                <motion.div ref={footerRef} initial="hidden" animate={footerInView ? "visible" : "hidden"} variants={fadeIn}>
                    <Footer />
                </motion.div>
            </Flex>
        </ChakraProvider>
    );
}