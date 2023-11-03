import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  HStack,
  IconButton,
  ChakraProvider,
  useColorModeValue,
  Input,
  Button,
  Textarea,
  FormControl,
  FormLabel,
  Alert
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
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useRef } from 'react'; 

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
    const [feedbackMsg, setFeedbackMsg] = useState("");
    const [showFeedback, setShowFeedback] = useState(false);

    const nameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const subjectRef = useRef<HTMLInputElement>(null);
    const messageRef = useRef<HTMLTextAreaElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      const formData = {
        name: (e.target as any).name.value,
        lastName: (e.target as any).lastName.value,
        email: (e.target as any).email.value,
        subject: (e.target as any).subject.value,
        message: (e.target as any).message.value
    };
  
      try {
        const response = await fetch('/api/sendEmail', {
          method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
          });
  
          if (response.status === 200) {
            console.log('Email sent successfully');
            setFeedbackMsg("Email sent successfully!");
          } else {
              console.log('Error sending email');
              setFeedbackMsg("Error sending email. Please try again.");
          }
          // Show feedback and clear fields
          setShowFeedback(true);
          if(nameRef.current) nameRef.current.value = "";
          if(lastNameRef.current) lastNameRef.current.value = "";
          if(emailRef.current) emailRef.current.value = "";
          if(subjectRef.current) subjectRef.current.value = "";
          if(messageRef.current) messageRef.current.value = "";
          
          } catch (error) {
            console.log('There was an error sending the email', error);
            setFeedbackMsg("There was an error sending the email. Please try again.");
            setShowFeedback(true);
          }
        };
  
    const fadeIn = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 1 } }
    };
    const fadeIn2 = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 3.33 } }
    };
    const fadeIn3 = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 5 } }
    };

    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [refForm, formView] = useInView({ triggerOnce: true, threshold: 0.1 });
    const [refIcon, iconView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
        <Flex direction="column" minHeight="100vh" bgImage={`/images/Circuit.jpeg`} bgRepeat="no-repeat" bgSize="cover" style={{ fontFamily: '"Roboto Mono", monospace', color: 'black' }}>
        <Navbar />
        <Flex direction="column" align="center" justify="flex-start" py={8} px={4} flexGrow={1} overflowY="auto">
          <Box w="100%" maxW="600px" textAlign="center" position="relative">
            <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeIn}>
              <Heading size="2xl" mb={4} position="relative" textShadow="0 0 5px teal, 0 0 10px teal, 0 0 15px teal, 0 0 20px teal" color="white">
                Connect
              </Heading>
              <Text mb={6}>
                Want to ask a question or book me for a service? Use the form below or reach out directly on any platform.
              </Text>
            </motion.div>

            <motion.div ref={refForm} initial="hidden" animate={formView ? "visible" : "hidden"} variants={fadeIn2}>
            {showFeedback && (
              <Alert status="info" mb={4}>
                {feedbackMsg}
              </Alert>
            )}
            <form onSubmit={handleSubmit}>
              <Flex wrap="wrap" justifyContent="space-between">
                <FormControl id="name" mb={4} flex="1" mr={2}>
                  <FormLabel>Name</FormLabel>
                  <Input ref={nameRef} type="text" required bg="white" borderColor="black"/>
                </FormControl>
                <FormControl id="lastName" mb={4} flex="1" ml={2}>
                  <FormLabel>Last Name</FormLabel>
                  <Input ref={lastNameRef} type="text" required bg="white" borderColor="black"/>
                </FormControl>
              </Flex>
              <FormControl id="email" mb={4}>
                <FormLabel>Email</FormLabel>
                <Input ref={emailRef} type="email" required bg="white" borderColor="black"/>
              </FormControl>
              <FormControl id="subject" mb={4}>
                <FormLabel>Subject</FormLabel>
                <Input ref={subjectRef} type="text" required bg="white" borderColor="black" />
              </FormControl>
              <FormControl id="message" mb={4}>
                  <FormLabel>Message</FormLabel>
                  <Textarea ref={messageRef} rows={4} required bg="white" borderColor="black"/>
                </FormControl>
              <Button type="submit" colorScheme="teal" mb={4}>
                Submit
              </Button>
            </form>
            </motion.div>

            <motion.div ref={refIcon} initial="hidden" animate={iconView ? "visible" : "hidden"} variants={fadeIn3}>
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
            </motion.div>
            </Box>
          </Flex>              
        <Footer />            
      </Flex>
    </ChakraProvider>
  );
}