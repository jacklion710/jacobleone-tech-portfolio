import { Flex, Heading, Text, VStack, Center, Button, Box } from "@chakra-ui/react";
import { AiFillRobot } from 'react-icons/ai';
import { FaCode } from 'react-icons/fa'; 
import { Helmet } from "react-helmet";

const LandingPage = () => {
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
        </VStack>
      </Box>
    </Center>
  );
};

export default LandingPage;