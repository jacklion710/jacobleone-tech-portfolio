import { useBreakpointValue, Text, VStack, Center, Button, Box, Collapse, useDisclosure } from "@chakra-ui/react";
import { AiFillRobot } from 'react-icons/ai';
import { FaCode, FaAngleDown, FaAngleUp } from 'react-icons/fa'; 
import { Helmet } from "react-helmet";
import Head from 'next/head';
import Image from 'next/image';

const LandingPage = () => {
  const { isOpen, onToggle } = useDisclosure();
  const imageSize = useBreakpointValue({ base: 230, sm: 120, md: 180, lg: 310, xl: 180 });

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
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
      </Head>
      <Helmet>
          <title>Jacob Leone | AI Specialist & Software Engineer</title>
          <meta name="description" content="Dive into the world of Jacob Leone, an AI Specialist & Software Engineer, driven by passion and creativity. Discover the convergence of artificial intelligence and psychology from a unique human-first perspective." />
          <meta name="keywords" content="Jacob Leone, AI Specialist, Software Engineer, Artificial Intelligence, Psychology, Innovations, Technical Challenges, Collaboration, Tech Arena" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Jacob Leone | AI Specialist & Software Engineer" />
          <meta property="og:description" content="Welcome to Jacob Leones tech arena. Immerse yourself in the innovative world of an AI Specialist and Software Engineer who approaches challenges from a unique, human-first perspective." />
          <meta property="og:url" content="https://jacobleone.tech/" />
          <link rel="canonical" href="https://jacobleone.tech/" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet"/>
      </Helmet>
      <Box bgColor="rgba(230, 230, 230, 0.7)" p={6} borderRadius="md">
        <VStack spacing={6}>
        <Image 
            src="/vectors/Tech_Typography_Vectorized(white).svg" 
            alt="Jacob Leone" 
            height={imageSize} 
            width={imageSize} 
            style={{
                filter: "drop-shadow(0 0 3px teal) drop-shadow(0 0 6px teal)"
            }}
          />
          <VStack spacing={2}>
            <AiFillRobot size="1.5em" color="gray.700" />
            <Text fontSize={['lg', 'xl', '2xl']} color="gray.700">AI Specialist</Text>
          </VStack>
          <VStack spacing={2}>
            <FaCode size="1.5em" color="gray.700" />
            <Text fontSize={['lg', 'xl', '2xl']} color="gray.700">Software Engineer</Text>
          </VStack>
          <Button 
              colorScheme="teal" 
              size="lg" 
              variant="outline" 
              onClick={() => window.location.href="/Projects"}
          >
              Discover My Innovations
          </Button>
          <Box textAlign="center" w="100%" my={4}>
            <Text fontSize="lg" color="black" mb={1} maxW="700px" textAlign="center" mx="auto">
              Driven by an intrinsic passion for tackling creative and technical challenges and as member of agile development teams, I thrive on collaboration towards a shared mission: delivering exceptional value to clients efficiently...
            </Text>
            <Button variant="link" color="teal.500" onClick={onToggle} mt={2}>
              {isOpen ? "Read Less" : "Read More"} {isOpen ? <FaAngleUp /> : <FaAngleDown />}
            </Button>
            <Collapse in={isOpen}>
              <Text fontSize="lg" color="black" mt={4} maxW="700px" textAlign="center" mx="auto">
                Before diving into the tech arena, I pursued an intensive graduate program at a top-tier university, focusing on the convergence of artificial intelligence and psychology. This academic journey endowed me with a unique lens: approaching AI development from a human first perspective and a deep understanding of the nuanced ways people interface with machines. Beyond my academic pursuits, I am a perpetual learner, drawing from experiences that span leadership, creativity, problem-solving, and architecting projects from mere ideas to successful execution.
              </Text>
            </Collapse>
          </Box>
        </VStack>
      </Box>
    </Center>
  );
};

export default LandingPage;