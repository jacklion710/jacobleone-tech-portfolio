import {
    Box,
    Flex,
    Heading,
    Image,
    Text,
    Link,
    VStack,
    SimpleGrid,
    Button,
    useColorModeValue,
    Tooltip,
    AspectRatio,
    ChakraProvider
  } from "@chakra-ui/react";
  import { FaGithub } from "react-icons/fa";
  import Navbar from "../components/Navbar";
  import Footer from '../components/Footer';
  import { Helmet } from "react-helmet";
  import Head from 'next/head';
  import { motion } from 'framer-motion';
  import { useInView } from 'react-intersection-observer';
  import React, { useRef } from 'react';

  const projects = [
    {
      title: "Full Stack Website",
      description: "Personal website for my music gallery. Users can book services, and make a profile",
      imageUrl: "/images/jacks_site.png",
      githubUrl: "https://github.com/jacklion710/jacklions-website",
      deployUrl: "https://jacklion.xyz"
    },
    {
      title: "M8 Data Cleaner",
      description: "A script that optimizes sample libraries for use on the M8 tracker hardware",
      imageUrl: "/images/m8.jpeg",
      githubUrl: "https://github.com/jacklion710/m8_data_cleaner"
    },
    {
        title: "Interactive Web Audio Visual Experience",
        description: "An experiment on the intersection between technology and art.",
        imageUrl: "/images/helix.png",
        githubUrl: "https://github.com/jacklion710/jacklions-website/blob/main/pages/av/RNBO/simple-sampler-dna.tsx",
        deployUrl: "https://jacklion.xyz/av/RNBO/simple-sampler-dna"
      },
      {
        title: "Web Portfolio for Commercial Music",
        description: "A professional landing page for music business pursuits made with Next js and Chakra UI.",
        imageUrl: "/images/music-portfolio.png",
        githubUrl: "https://github.com/jacklion710/jacobleone-music-portfolio",
        deployUrl: "https://jacobleone-music.vercel.app"
      },
      {
        title: "CDJ Compatibility Cleaner",
        description: "A script for assisting DJs in preparing samples for CDJ compatibility.",
        imageUrl: "/images/cdj.jpeg",
        githubUrl: "https://github.com/jacklion710/CDJ_Audio_Compatibility_Converter"
      },
      {
        title: "Web Portfolio for Software Engineering",
        description: "A professional landing page for engineering pursuits made with Next js and Chakra UI.",
        imageUrl: "/images/tech-portfolio.png",
        githubUrl: "https://github.com/jacklion710/jacobleone-tech-portfolio",
        deployUrl: "https://jacobleone-tech.vercel.app"
      }
  ];
  
  export default function Projects() {
    const bgColor = useColorModeValue("white", "gray.800");
    const color = useColorModeValue("gray.700", "gray.50");
    const borderColor = useColorModeValue("gray.200", "gray.600");

    const fadeIn = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: .77 } }
    };

    const [navbarRef, navbarInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [headingRef, headingInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [projectsGridRef, projectsGridInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [footerRef, footerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    
    return (
      <ChakraProvider>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
        </Head>
        <Helmet>
            <title>Jacob Leones Tech Projects | Showcase</title>
            <meta name="description" content="Dive deep into Jacob Leones innovative projects. From full-stack web applications, data cleaner scripts, audio-visual experiences to software portfolios, discover the depth and breadth of Jacobs tech expertise." />
            <meta name="keywords" content="Jacob Leone, Projects, Full Stack Website, M8 Data Cleaner, Web Audio Visual Experience, CDJ Compatibility Cleaner, Web Portfolios, Tech Innovations" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Jacob Leones Tech Portfolio | Projects Showcase" />
            <meta property="og:description" content="Explore Jacob Leones diverse projects that highlight his expertise in various domains of tech. Discover his contributions and innovations firsthand." />
            <meta property="og:url" content="https://jacobleone.tech/Projects" />
            <link rel="canonical" href="https://jacobleone.tech/Projects" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet"/>
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
                            width: '260px',
                            borderBottom: `1px solid currentColor`,
                            borderColor: "black"
                        }}
                    >
                        My Projects
                    </Heading>
                    </motion.div>
                    <Flex alignItems="center" justifyContent="center" flexGrow={1} w="full">
                    <motion.div ref={projectsGridRef} initial="hidden" animate={projectsGridInView ? "visible" : "hidden"} variants={fadeIn}>

                        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w="full">
                            {projects.map((project, index) => (
                                <Box 
                                    key={index} 
                                    p={{ base: 3, md: 5 }} 
                                    borderWidth="1px" 
                                    borderRadius="md" 
                                    borderColor={borderColor} 
                                    shadow="lg" 
                                    transition="transform .2s" 
                                    _hover={{ transform: 'scale(1.05)' }}
                                >
                                    <AspectRatio ratio={4 / 3}>
                                        <Image src={project.imageUrl} alt={project.title} borderRadius="md" mb={4} objectFit="cover" />
                                    </AspectRatio>
                                    <Heading size="md" my={2} textAlign="center">{project.title}</Heading>
                                    <Text mb={4} noOfLines={2}>{project.description}</Text>
                                    <Flex justifyContent="center" mt={3} wrap="wrap" direction={{ base: "column", md: "row" }}>
                                        <Tooltip label="Visit GitHub Repository" aria-label="GitHub link">
                                            <Button as={Link} href={project.githubUrl} leftIcon={<FaGithub />} isExternal colorScheme="blue" mb={{ base: 2, md: 0 }} mr={{ md: 2 }}>
                                                GitHub
                                            </Button>
                                        </Tooltip>
                                        {(project.title === "Full Stack Website" || project.title === "Interactive Web Audio Visual Experience" || project.title === "Web Portfolio for Commercial Music" || project.title === "Web Portfolio for Software Engineering") &&
                                            <Tooltip label="Visit Deployed Project" aria-label="Deployment link">
                                                <Button as={Link} href={project.deployUrl} isExternal colorScheme="teal" ml={{ md: 2 }}>
                                                    View Live
                                                </Button>
                                            </Tooltip>
                                        }
                                    </Flex>
                                </Box>
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