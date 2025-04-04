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
  import { motion } from 'framer-motion';
  import { useInView } from 'react-intersection-observer';
  import React from 'react';

  const projects = [
    {
        title: "Kronos",
        description: "Audio plugin for musicians to track time spent on projects",
        imageUrl: "/images/kronos-screenshot-dark.png",
        githubUrl: "https://github.com/jacklion710/Kronos",
    },
    {
        title: "Crash Dummy Plugin",
        description: "A plugin for Ableton Live designed for stress testing other plugins by crashing the host application",
        imageUrl: "/images/crash-dummy-ui.png",
        githubUrl: "https://github.com/jacklion710/crash-dummy",
    },
    {
        title: "Generative Adversarial Network",
        description: "System design for a GAN model used for generating novel audio.",
        imageUrl: "/images/simple-gan.png",
        githubUrl: "https://github.com/jacklion710/simple-gan",
    },
    {
        title: "PyTorch Audio Lesson Series",
        description: "A series of lessons to help others (and me) learn torchaudio fundamentals",
        imageUrl: "/images/torchaudio-basics.png",
        githubUrl: "https://github.com/jacklion710/torchaudio-basics",
    },
    {
        title: "Maze Solver",
        description: "Algorithmic race for comparing pathfinding algorithms and maze solving",
        imageUrl: "/images/maze-solver.png",
        githubUrl: "https://github.com/jacklion710/jacobleone-tech-portfolio",
    },
    {
        title: "Convolutional Layer for Neural Networks In C",
        description: "Rudimentary implementation of a convolutional layer in C",
        imageUrl: "/images/CNN.png",
        githubUrl: "https://github.com/jacklion710/Convolutional-Image-Layer-in-C",
    },
    {
        title: "Flash Configurator",
        description: "Flash configurator GUI for debugging and uploading firmware in bytecode via parsing and processing intel hex format",
        imageUrl: "/images/flash-config.jpg",
    },
    {
        title: "Full Stack Website",
        description: "Personal website for my music gallery. User authentication, professional landing page, and interactive experiences",
        imageUrl: "/images/jacks_site.png",
        githubUrl: "https://github.com/jacklion710/jacklions-website",
        deployUrl: "https://jacklion.xyz"
    },
    {
        title: "Go Web Scraper",
        description: "A simple go app for scraping web pages",
        imageUrl: "/images/go-scraper.png",
        githubUrl: "https://github.com/jacklion710/go-web-scraper.git",
    },
    {
        title: "Static iOS app",
        description: "A static mobile application commission for iOS published to the app store",
        imageUrl: "/images/mental-math.jpeg",
        deployUrl: "https://apps.apple.com/us/app/global-math-mind/id6478569296",
    },
    {
        title: "Rust Audio Encryptor",
        description: "Psuedo random modulations applied to waveforms to obscure audio data for decryption later",
        imageUrl: "/images/audio-encrypt.png",
        githubUrl: "https://github.com/jacklion710/audio-encryption",
    },
    {
        title: "Motion Playground",
        description: "Collection of reusable animation modules, designed to simplify the process of implementing",
        imageUrl: "/images/motion-playground.png",
        githubUrl: "https://github.com/jacklion710/framer-motion-playground",
        deployUrl: "https://framer-motion-playground-swart.vercel.app "
    },
    {
        title: "JSON Web Token Demo",
        description: "An exploration of JWT technology with an interactive UI",
        imageUrl: "/images/jwt.png",
        githubUrl: "https://github.com/jacklion710/jwt-user-auth",
        deployUrl: "https://jwt-user-auth.vercel.app"
    },
    {
        title: "Audio Plugin Compatibility Checker",
        description: "Utility for electronic music collaborators to check what tools they both have and which they do not share to assist in maximizing compatibility",
        imageUrl: "/images/plugin-profile.png",
        githubUrl: "https://github.com/jacklion710/plugin-union-checker",
    },
    {
        title: "Redux Study",
        description: "An exploration of the redux package for sharing states across entire runtime environments",
        imageUrl: "/images/redux.png",
        githubUrl: "https://github.com/jacklion710/redux-study",
        deployUrl: "https://redux-study-zeta.vercel.app"
    },
    {
        title: "Twilio Mass SMS Message Builder",
        description: "Mass SMS marketing utility using Twilio API with node and Firebase to retrieve stored user data from their firestore document for personalized text messages",
        imageUrl: "/images/twilio-mass-sms.png",
        githubUrl: "https://github.com/jacklion710/twilio-firebase-mass-sms.git",
    },
    {
        title: "SendGrid User Interactive Email with Firebase",
        description: "User interactive UI for funneling email marketing subscriptions using sendgrid by dynamically opting in and out based on a users firestore field",
        imageUrl: "/images/interactive_email.png",
        githubUrl: "https://github.com/jacklion710/user-interactive-email-list.git",
    },
    {
        title: "ChakraUI SVG Filter",
        description: "Reusable component for filling vector graphics with a solid color of choice by wrapping Chakra-UIs Image component.",
        imageUrl: "/images/svg-filter.png",
        githubUrl: "https://github.com/jacklion710/simple-chakra-svg-filter",
        deployUrl: "https://simple-chakra-svg-filter.vercel.app"
    },
    {
        title: "Firebase SMS Authentication",
        description: "Study on SMS auth & OTP using firebase. Implementation follows the firebase docs in TypeScriptfor phone authentication",
        imageUrl: "/images/sms-auth.png",
        githubUrl: "https://github.com/jacklion710/firebase-sms-auth",
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
    //   {
    //     title: "Web Portfolio for Commercial Music",
    //     description: "A professional landing page for music business pursuits made with Next js and Chakra UI.",
    //     imageUrl: "/images/music-portfolio.png",
    //     githubUrl: "https://github.com/jacklion710/jacobleone-music-portfolio",
    //     deployUrl: "https://jacobleone-music.vercel.app"
    //   },
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
      },
  ];
  
  export default function Projects() {
    const bgColor = useColorModeValue("white", "gray.800");
    const color = useColorModeValue("gray.700", "gray.50");
    const borderColor = useColorModeValue("gray.200", "gray.600");
    const cardBgColor = useColorModeValue("rgba(255, 255, 255, 0.9)", "rgba(45, 55, 72, 0.9)");
    const titleColor = useColorModeValue("teal.600", "teal.200");
    const descriptionColor = useColorModeValue("gray.700", "gray.300");

    const fadeIn = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 1.33 } }
    };

    const [navbarRef, navbarInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [headingRef, headingInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [projectsGridRef, projectsGridInView] = useInView({ triggerOnce: true, threshold: 0.06 });
    const [footerRef, footerInView] = useInView({ triggerOnce: true, threshold: 0.1 });
    
    return (
      <ChakraProvider>
        <Helmet>
            <title>Jacob Leones Tech Projects | Showcase</title>
            <meta name="description" content="Dive deep into Jacob Leones innovative projects. From full-stack web applications, data cleaner scripts, audio-visual experiences to software portfolios, discover the depth and breadth of Jacobs tech expertise." />
            <meta name="keywords" content="Jacob Leone, Projects, Full Stack Website, M8 Data Cleaner, Web Audio Visual Experience, CDJ Compatibility Cleaner, Web Portfolios, Tech Innovations" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Jacob Leones Tech Portfolio | Projects Showcase" />
            <meta property="og:description" content="Explore Jacob Leones diverse projects that highlight his expertise in various domains of tech. Discover his contributions and innovations firsthand." />
            <meta property="og:url" content="https://jacobleone.tech/Projects" />
            <link rel="canonical" href="https://jacobleone.tech/Projects" />
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
                        Projects
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
                                    shadow="2xl"
                                    bg={cardBgColor}
                                    backdropFilter="blur(10px)"
                                    transition="all 0.3s" 
                                    _hover={{ 
                                        transform: 'scale(1.05)',
                                        shadow: 'dark-lg',
                                        borderColor: 'teal.300',
                                    }}
                                >
                                    <AspectRatio ratio={4 / 3}>
                                    <Image src={project.imageUrl} alt={project.title} borderRadius="md" mb={4} objectFit="cover" />
                                    </AspectRatio>
                                    <Heading 
                                        size="md" 
                                        my={2} 
                                        textAlign="center"
                                        color={titleColor}
                                    >
                                        {project.title}
                                    </Heading>
                                    <Text 
                                        mb={4} 
                                        noOfLines={2}
                                        color={descriptionColor}
                                    >
                                        {project.description}
                                    </Text>
                                    {project.title !== "Flash Configurator" && (
                                    <Flex justifyContent="center" mt={3} wrap="wrap" direction={{ base: "column", md: "row" }}>
                                        {project.githubUrl && (
                                        <Tooltip label="Visit GitHub Repository" aria-label="GitHub link">
                                            <Button as={Link} href={project.githubUrl} leftIcon={<FaGithub />} isExternal colorScheme="blue" mb={{ base: 2, md: 0 }} mr={{ md: 2 }}>
                                                GitHub
                                            </Button>
                                        </Tooltip>
                                        )}
                                        {(project.title === "Full Stack Website" || project.title === "JSON Web Token Demo" || project.title === "ChakraUI SVG Filter" || project.title === "Interactive Web Audio Visual Experience" || project.title === "Web Portfolio for Commercial Music" || project.title === "Web Portfolio for Software Engineering" || project.title === "Motion Playground" || project.title === "Redux Study" || project.title === "Static iOS app") && project.deployUrl && (
                                        <Tooltip label="Visit Deployed Project" aria-label="Deployment link">
                                            <Button as={Link} href={project.deployUrl} isExternal colorScheme="teal" ml={{ md: 2 }}>
                                            View Live
                                            </Button>
                                        </Tooltip>
                                        )}
                                    </Flex>
                                    )}
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