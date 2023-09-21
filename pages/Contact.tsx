import {
    Box,
    Flex,
    Heading,
    Text,
    Link,
    HStack,
    VStack,
    IconButton,
    Button,
    ChakraProvider,
    useColorModeValue
  } from "@chakra-ui/react";
  import {
    FaEnvelope,
    FaLinkedin, 
    FaYoutube, 
    FaPatreon, 
    FaGithub
  } from 'react-icons/fa';
  import Navbar from "../components/Navbar";
  import Footer from '../components/Footer';
  import { Helmet } from 'react-helmet';
  
  const socialLinks = [
    {
      href: "https://open.spotify.com/artist/35foCh1HOk7XwvVzuiFmzc",
      label: "Linkedin",
      icon: <FaLinkedin />,
      colorScheme: "blue"
    },
    {
      href: "https://www.youtube.com/channel/UCbTxhDz-oFPdbKl5-rpi4gQ",
      label: "Youtube",
      icon: <FaYoutube />,
      colorScheme: "red"
    },
    {
      href: "https://github.com/jacklion710",
      label: "Github",
      icon: <FaGithub />,
      colorScheme: "gray"
    }
  ];
  

  export default function Contact() {
    const bg = useColorModeValue("white", "gray.800");
    const color = useColorModeValue("black", "white");
  
    return (
      <ChakraProvider>
        <Helmet>
          <title>Connect with Jacob Leone | Official Page</title>
          <meta name="description" content="Reach out to Jacob Leone on various platforms or send an email." />
          <meta name="keywords" content="Jacob Leone, Connect, Code, Services, Linkedin, Github, Contact" />
          {/* <meta property="og:url" content="https://jacklion.xyz/Direct" /> 
          <link rel="canonical" href="https://jacklion.xyz/Direct" /> */}
        </Helmet>
          <Flex direction="column" minHeight="100vh">
            <Navbar />
            <Flex
              direction="column"
              align="center"
              justify="flex-start"
              py={8}
              px={4}
              flexGrow={1}
            >
            <Box 
              w="100%" 
              maxW="600px" 
              textAlign="center" 
              position="relative"
            >
              <Heading 
                size="xl" 
                mb={4} 
                position="relative"
                _after={{
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  bottom: '-10px',  // Adjust this value to move the border closer/farther from the text
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '290px',  // Adjust this width as per your requirements
                  borderBottom: `1px solid `,
                }}
              >
                Connect with Me
              </Heading>
              <Text mb={6}>
                Want to ask a question or book me for a services? Reach out to me directly on any platform or send me an <Link href="mailto:jacob0leone@gmail.com" color="teal.500">email</Link>
              </Text>
                <HStack spacing={4} justify="center" wrap="wrap" mb={40}>
                  <Link href="mailto:jacob0leone@gmail.com">
                    <IconButton aria-label="Email" icon={<FaEnvelope />} size="lg" colorScheme="teal" />
                  </Link>
                </HStack>
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
              </Flex>
            <Footer />
        </Flex>
      </ChakraProvider>
    );
  }
  