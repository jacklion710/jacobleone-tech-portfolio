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
  Icon,
  useBoolean
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from 'react-icons/fa';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import ResumeComponent from "../components/ResumeComponent";
import ReferencesComponent from "../components/ReferencesComponent";

export default function Resume() {
  const bg = "white";
  const color = "black";
  const sectionBg = "gray.100";
  const [viewingResume, setViewingResume] = useBoolean(true);

  return (
    <ChakraProvider>
      <Helmet>
        <title>My Resume and References</title>
        <meta name="description" content="Download my resume and view my professional references." />
      </Helmet>
      
      <Flex 
          direction="column" 
          minHeight="100vh" 
          bg={bg} 
          color={color}
          bgImage="url('/images/circuit.jpeg')" 
          bgPos="center"
          bgSize="cover"
          bgRepeat="no-repeat"
          bgAttachment="fixed"
      >
        <Navbar />

        <VStack spacing={8} alignItems="center" justifyContent="center" flexGrow={1} py={10} px={4}>
          <Heading 
              as="h1" 
              size="2xl"
              position="relative"
              mb={5}
              _after={{
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  bottom: '-5px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '110%',  
                  borderBottom: `1px solid currentColor`,  
              }}
          >
              Résumé
          </Heading>
          <Box textAlign="center" display="flex" flexDirection="column" alignItems="center">
            <HStack spacing={6}>
            <Button 
                as="a" 
                href="/docs/Jacob_Leone_Tech_2023.pdf" 
                download
                colorScheme="gray"
                fontSize="lg"
                p={8}  
                rightIcon={<Icon as={FaExternalLinkAlt} boxSize={6} />} 
                border="1px solid black"
                _hover={{
                    transform: "scale(1.1)",
                    bg: "cyan.700",
                    color: "gray.100"
                }}
                transition="0.5s"
            >
                Download Resume
            </Button>
                <Button 
                  as="a" 
                  href="/docs/Jacob_Leone-References.pdf" 
                  download 
                  colorScheme="gray"
                  fontSize="lg"  
                  p={8}
                  rightIcon={<Icon as={FaExternalLinkAlt} boxSize={6} />}  
                  border="1px solid black"
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

            {/* View Selection Buttons */}
            <HStack spacing={4} mt={12}>
              <Button onClick={() => setViewingResume.on()} colorScheme={viewingResume ? "gray" : "white"}
              color="black"
              border=".5px solid black">
                View Resume
              </Button>
              <Button onClick={() => setViewingResume.off()} colorScheme={!viewingResume ? "gray" : "white"}
              color="black"
              border=".5px solid black">
                View References
              </Button>
            </HStack>
          </Box>

          {/* Conditional Rendering */}
          {viewingResume ? (
            <ResumeComponent />
          ) : (
            <ReferencesComponent />
          )}

        </VStack>

        <Footer />
      </Flex>
    </ChakraProvider>
  );
}