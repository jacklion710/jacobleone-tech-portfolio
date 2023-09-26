import { Heading, Text, VStack, Center, Button, Box } from "@chakra-ui/react";

const LandingPage = () => {
  return (
    <Center 
      height="88vh" 
      bg="gray.50" 
      bgImage="url('/images/circuit.jpeg')"
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Box bgColor="rgba(230, 230, 230, 0.7)" p={6} borderRadius="md">
        <VStack spacing={6}>
          <Heading 
            fontSize={['2xl', '3xl', '4xl', '5xl']} 
            color="teal.500"
          >
            Jacob Leone
          </Heading>
          <Text 
            fontSize={['lg', 'xl', '2xl']} 
            color="gray.700"
          >
            AI Specialist & Software Engineer.
          </Text>
          <Button 
              colorScheme="teal" 
              size="lg" 
              variant="outline" 
              onClick={() => window.location.href="/portfolio"}
          >
              View My Work
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default LandingPage;