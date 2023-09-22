import {
    Box,
    Flex,
    Heading,
    Text,
    VStack,
    Button,
    HStack,
    ChakraProvider,
    useColorModeValue,
    Icon
  } from "@chakra-ui/react";
  import { FaExternalLinkAlt } from 'react-icons/fa';
  import Navbar from "../components/Navbar";
  import Footer from '../components/Footer';
  import { Helmet } from 'react-helmet';

  export default function Resume() {
    const bg = useColorModeValue("white", "gray.800");
    const color = useColorModeValue("black", "white");
    
    return (
      <ChakraProvider>
        <Helmet>
          <title>My Resume and References</title>
          <meta name="description" content="Download my resume and view my professional references." />
        </Helmet>
        
        <Flex direction="column" minHeight="100vh" bg={bg} color={color}>
          <Navbar />
  
          <VStack spacing={8} alignItems="center" justifyContent="center" flexGrow={1} py={10} px={4}>
            <Box textAlign="center">
              <HStack>
                <Button 
                  as="a" 
                  href="/docs/Jacob_Leone_Tech_2023.pdf" 
                  download 
                  colorScheme="blue"
                  rightIcon={<FaExternalLinkAlt />}
                  _hover={{
                    transform: "scale(1.1)",
                    bg: "cyan.700",
                    color: "gray.100"
                  }}
                  transition="0.5s"
                >
                  Download Resume
                </Button>
              </HStack>
            </Box>
            <Box textAlign="center">
              <HStack>
                <Button 
                  as="a" 
                  href="/docs/Jacob_Leone-References.pdf" 
                  download 
                  colorScheme="blue"
                  rightIcon={<FaExternalLinkAlt />}
                  _hover={{
                    transform: "scale(1.1)",
                    bg: "cyan.700",
                    color: "gray.100"
                  }}
                  transition="0.5s"
                >
                  Download References
                </Button>
              </HStack>
            </Box>
          </VStack>
  
          <Footer />
        </Flex>
      </ChakraProvider>
    );
  }