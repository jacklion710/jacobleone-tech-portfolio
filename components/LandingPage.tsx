import { Heading, Text, VStack, Center } from "@chakra-ui/react";

const LandingPage = () => {
  return (
    <Center height="85vh" bg="gray.50">
      <VStack spacing={6}>
        <Heading>Jacob Leone</Heading>
        <Text>AI Specialist & Software Engineer.</Text>
      </VStack>
    </Center>
  );
};

export default LandingPage;
