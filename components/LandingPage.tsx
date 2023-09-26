import { Flex, Heading, Text, VStack, Center, Button, Box, Collapse, useDisclosure } from "@chakra-ui/react";
import { AiFillRobot } from 'react-icons/ai';
import { FaCode, FaAngleDown, FaAngleUp } from 'react-icons/fa'; 
import { Helmet } from "react-helmet";

const LandingPage = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Center 
      height="88vh" 
      bg="gray.50" 
      bgImage="url('/images/Circuit.jpeg')"
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Helmet>
        <title>Jacob Leone | AI Specialist & Software Engineer</title>
        <meta name="description" content="Welcome to Jacob Leone's professional portfolio. Discover innovations by an AI Specialist and Software Engineer." />
        <meta name="keywords" content="Jacob Leone, AI Specialist, Software Engineer, Tech Innovations" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jacob Leone | AI Specialist & Software Engineer" />
        <meta property="og:description" content="Welcome to Jacob Leone's professional portfolio. Discover innovations by an AI Specialist and Software Engineer." />
        <meta property="og:url" content="https://jacobleone-tech.vercel.app/" />
\        <link rel="canonical" href="https://jacobleone-tech.vercel.app/" />
      </Helmet>
      <Box bgColor="rgba(230, 230, 230, 0.7)" p={6} borderRadius="md">
        <VStack spacing={6}>
          <Heading 
            fontSize={['2xl', '3xl', '4xl', '5xl']} 
            color="teal.500"
          >
            Jacob Leone
          </Heading>
          <VStack spacing={2}>
            <AiFillRobot size="1.5em" />
            <Text fontSize={['lg', 'xl', '2xl']} color="gray.700">AI Specialist</Text>
          </VStack>
          <VStack spacing={2}>
            <FaCode size="1.5em" />
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
            <Text fontSize="lg" color="teal.500" mb={1} maxW="700px" textAlign="center" mx="auto">
              I am driven by an intrinsic passion for tackling both creative and technical challenges. As part of agile development teams, I thrive on collaborating towards our shared mission: delivering exceptional value to clients efficiently and effectively...
            </Text>
            <Button variant="link" color="teal.500" onClick={onToggle} mt={2}>
              {isOpen ? "Read Less" : "Read More"} {isOpen ? <FaAngleUp /> : <FaAngleDown />}
            </Button>
            <Collapse in={isOpen}>
              <Text fontSize="lg" color="teal.500" mt={4} maxW="700px" textAlign="center" mx="auto">
                Before diving into the tech arena, I pursued an intensive graduate program at a top-tier university, focusing on the convergence of artificial intelligence and psychology. This academic journey endowed me with a unique lens: approaching AI development from a human-centric perspective and deeply understanding the nuanced ways people interact with technology. Beyond my academic pursuits, I am a perpetual learner, drawing from experiences that span leadership, creativity, problem-solving, and shepherding projects from mere ideas to successful execution.
              </Text>
            </Collapse>
          </Box>
        </VStack>
      </Box>
    </Center>
  );
};

export default LandingPage;