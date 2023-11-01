import {
    Box,
    Flex,
    Heading,
    Text,
    Link,
    HStack,
    IconButton,
    ChakraProvider,
    useColorModeValue
  } from "@chakra-ui/react";
  import {
    FaEnvelope,
    FaLinkedin, 
    FaYoutube, 
    FaGithub
  } from 'react-icons/fa';
  import Navbar from "../components/Navbar";
  import Footer from '../components/Footer';
  import { Helmet } from 'react-helmet';
  import Head from 'next/head';

  const socialLinks = [
    {
      href: "https://open.spotify.com/artist/35foCh1HOk7XwvVzuiFmzc",
      label: "Linkedin",
      icon: <FaLinkedin />,
      colorScheme: "blue"
    },
    {
      href: "https://github.com/jacklion710",
      label: "Github",
      icon: <FaGithub />,
      colorScheme: "purple"
    },
    {
      href: "https://www.youtube.com/channel/UCbTxhDz-oFPdbKl5-rpi4gQ",
      label: "Youtube",
      icon: <FaYoutube />,
      colorScheme: "red"
    },
    {
      href: "mailto:jacob0leone@gmail.com",
      label: "Email",
      icon: <FaEnvelope />,
      colorScheme: "green"
    }
  ];
  

  export default function Contact() {
    const bg = useColorModeValue("white", "gray.800");
    const color = useColorModeValue("black", "white");
  
    return (
      <ChakraProvider>
        <Head>
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
        </Head>
        <Helmet>
            <title>Connect with Jacob Leone | Contact & Collaboration</title>
            <meta name="description" content="Want to collaborate or ask a question? Get in touch with Jacob Leone through various platforms including LinkedIn, GitHub, YouTube, or directly via email." />
            <meta name="keywords" content="Jacob Leone, Contact, Collaboration, LinkedIn, GitHub, YouTube, Email, Tech Services" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Connect with Jacob Leone | Contact & Collaboration" />
            <meta property="og:description" content="Reach out to Jacob Leone for collaboration, inquiries, or any questions. Connect through multiple platforms or send a direct email." />
            <meta property="og:url" content="https://jacobleone.tech/Contact" />
            <link rel="canonical" href="https://jacobleone.tech/Contact" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet"/>
        </Helmet>
          <Flex 
            direction="column"
            minHeight="100vh"
            bgImage={`/images/Circuit.jpeg`}
            bgRepeat="no-repeat"
            bgSize="cover"
            style={{ fontFamily: '"Roboto Mono", monospace' }}
          >
            <Navbar />
            <Flex
              direction="column"
              align="center"
              justify="flex-start"
              py={8}
              px={4}
              flexGrow={1}
              overflowY="auto"
            >
            <Box 
              w="100%" 
              maxW="600px" 
              textAlign="center" 
              position="relative"
            >
              <Heading 
                size="2xl" 
                mb={4} 
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
                  width: '400px', 
                  borderBottom: `1px solid `,
                  borderColor: "black" 
                }}
              >
                Connect with Me
              </Heading>
              <Text mb={6}>
                Want to ask a question or book me for a services? Reach out to me directly on any platform or send me an <Link href="mailto:jacob0leone@gmail.com" color="teal.500">email</Link>
              </Text>
                </Box>
                <HStack spacing={4} justify="center" wrap="wrap" mb={4}>
                {socialLinks.map(({ href, label, icon, colorScheme }) => (
                    <Link href={href} isExternal key={href}>
                    <IconButton
                        aria-label={label}
                        icon={icon}
                        fontSize="64px" 
                        colorScheme={colorScheme}
                        padding="20px"
                        paddingX="24px" 
                        paddingY="40px"
                    />
                    </Link>
                ))}
                </HStack>
                <Box mt={4} maxW="1280px" w="100%" mx="auto" height="500px" display="flex" justifyContent="center" alignItems="center">
                  <iframe 
                      width="90%" 
                      height="500" 
                      frameBorder="0" 
                      src="https://www.shadertoy.com/embed/DlffWH?gui=true&t=10&paused=true&muted=false"
                      allowFullScreen
                  />
              </Box>
              </Flex>
            <Footer />
        </Flex>
      </ChakraProvider>
    );
  }