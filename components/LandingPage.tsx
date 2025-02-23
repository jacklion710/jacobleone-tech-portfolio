import { useBreakpointValue, Text, VStack, Center, Button, Box, Collapse, useDisclosure } from "@chakra-ui/react";
import { AiFillRobot } from 'react-icons/ai';
import { FaCode, FaAngleDown, FaAngleUp } from 'react-icons/fa'; 
import { Helmet } from "react-helmet";
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Head from 'next/head';

const LandingPage = () => {
  const { isOpen, onToggle } = useDisclosure();
  const imageSize = useBreakpointValue({ base: 350, sm: 400, md: 450, lg: 450, xl: 450 });

  const [imageRef, imageInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [iconsRef, iconsInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [buttonRef, buttonInView] = useInView({ triggerOnce: true, threshold: 0.8 });
  const [textRef, textView] = useInView({ triggerOnce: true, threshold: 0.5 });

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } }
  };

  return (
    <Center 
      minHeight="88vh" 
      bg="gray.50" 
      bgImage="url('/images/Circuit.jpeg')"
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      style={{ fontFamily: '"Roboto Mono", monospace' }}
    >
      <Head>
        <title>Jacob Leone | AI Specialist & Software Engineer</title>
        <meta name="description" content="Dive into the world of Jacob Leone, an AI Specialist & Software Engineer, driven by passion and creativity." />
      </Head>
      {/* Figure out why google search returns Untitled */}
      <Helmet>
        <title>Jacob Leone | AI Specialist & Software Engineer</title>
        <meta name="description" content="Dive into the world of Jacob Leone, an AI Specialist & Software Engineer, driven by passion and creativity. " />
        <meta name="keywords" content="Jacob Leone, AI Specialist, Software Engineer, Artificial Intelligence, Psychology, Innovations, Technical Challenges, Collaboration, Tech Arena" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jacob Leone | AI & Software Engineer" />
        <meta property="og:description" content="Welcome to Jacob Leones tech portfolio. Immerse yourself in the innovative world of an AI Specialist and Software Engineer who approaches challenges from a unique, human-first perspective." />
        <meta property="og:url" content="https://jacobleone.tech/" />
        <link rel="canonical" href="https://jacobleone.tech/" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet"/>
      </Helmet>
      <Box bgColor="rgba(230, 230, 230, 0.7)" p={6} borderRadius="md">
        <VStack spacing={6}>
          <motion.div ref={imageRef} initial="hidden" animate={imageInView ? "visible" : "hidden"} variants={fadeIn}>
            <Image 
              src="/vectors/Tech_Typography_Vectorized(white).svg" 
              alt="Jacob Leone" 
              height={imageSize} 
              width={imageSize} 
              style={{ filter: "drop-shadow(0 0 3px teal) drop-shadow(0 0 6px teal)" }}
            />
          </motion.div>
            <VStack spacing={2} mt={10}>
              <motion.div ref={iconsRef} initial="hidden" animate={iconsInView ? "visible" : "hidden"} variants={fadeIn}>
                <VStack spacing={2}>
                  <AiFillRobot size="1.5em" color="gray.700" />
                  <Text fontSize={['lg', 'xl', '2xl']} color="gray.700">AI Specialist</Text>
                  <FaCode size="1.5em" color="gray.700" />
                  <Text fontSize={['lg', 'xl', '2xl']} color="gray.700">Software Engineer</Text>
                </VStack>
              </motion.div>
            </VStack>
            <motion.div ref={buttonRef} initial="hidden" animate={buttonInView ? "visible" : "hidden"} variants={fadeIn}>
              <Button colorScheme="teal" size="lg" variant="outline" onClick={() => window.location.href="/Projects"}>
                Discover My Innovations
              </Button>
            </motion.div>
            <motion.div ref={textRef} initial="hidden" animate={textView ? "visible" : "hidden"} variants={fadeIn}>
            <Box textAlign="center" w="100%" my={4}>
              <Text fontSize="lg" color="black" mb={1} maxW="700px" textAlign="center" mx="auto">
              Machine Learning Engineer specializing in signal and image processing, with hands-on experience developing AI-driven solutions...
              </Text>
              <Button variant="link" color="teal.500" onClick={onToggle} mt={2}>
                {isOpen ? "Read Less" : "Read More"} {isOpen ? <FaAngleUp /> : <FaAngleDown />}
              </Button>
              <Collapse in={isOpen}>
                <Text fontSize="lg" color="black" mt={4} maxW="700px" textAlign="center" mx="auto">
                  My expertise spans implementing computer vision algorithms, processing complex signal data, and designing ML pipelines that bridge theoretical concepts with practical applications. Building on my graduate research in AI-medical device integration, I combine strong technical capabilities in deep learning and signal processing with a commitment to creating reliable, ethical AI systems. I excel in collaborative environments where I can apply my analytical mindset to solve challenging technical problems while maintaining a user-centric approach.
                </Text>
              </Collapse>
            </Box>
          </motion.div>
        </VStack>
      </Box>
    </Center>
  );
};

export default LandingPage;