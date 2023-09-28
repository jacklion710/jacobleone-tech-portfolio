import {
  Box,
  Flex,
  Heading,
  VStack,
  Button,
  HStack,
  ChakraProvider,
  Icon,
  useBoolean
} from "@chakra-ui/react";
import { FaExternalLinkAlt } from 'react-icons/fa';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import ResumeComponent from "../components/ResumeComponent";
import ReferencesComponent from "../components/ReferencesComponent";
import Head from 'next/head';

export default function Resume() {
  const bg = "white";
  const color = "black";
  const sectionBg = "gray.100";
  const [viewingResume, setViewingResume] = useBoolean(true);

  return (
    <ChakraProvider>
      <Head>
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
      </Head>
      <Helmet>
        <title>Jacob Leones Résumé and References | Résumé & References</title>
        <meta name="description" content="Download Jacob Leone's up-to-date resume or view professional references that endorse Jacob's skills and expertise." />
        <meta name="keywords" content="Jacob Leone, Resume, References, Professional, Download, Skills, Endorsements" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Jacob Leone's Resume and References | Official Page" />
        <meta property="og:description" content="Download Jacob Leone's up-to-date resume or view professional references that endorse Jacob's skills and expertise." />
        <meta property="og:url" content="https://jacobleone-tech.vercel.app/Resume" />
        <link rel="canonical" href="https://jacobleone-tech.vercel.app/Resume" />
      </Helmet>
      
      <Flex 
          direction="column" 
          minHeight="100vh" 
          bg={bg} 
          color={color}
          bgImage="url('/images/Circuit.jpeg')" 
          bgPos="center"
          bgSize="cover"
          bgRepeat="no-repeat"
          bgAttachment="fixed"
          style={{ fontFamily: '"Roboto Mono", monospace' }}
      >
        <Navbar />

        <VStack spacing={8} alignItems="center" justifyContent="center" flexGrow={1} py={10} px={4}>
          <Heading 
              as="h1" 
              size="2xl"
              position="relative"
              mb={5}
              textShadow="0 0 5px teal, 0 0 10px teal, 0 0 15px teal, 0 0 20px teal"
              color="white"          
              _after={{
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  bottom: '-5px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '110%',  
                  borderBottom: `1px solid currentColor`,
                  borderColor: "black"   
              }}
          >
              Résumé
          </Heading>
          <Box textAlign="center" display="flex" flexDirection="column" alignItems="center">
          <VStack spacing={6}>
            <HStack spacing={6} display={["none", "flex"]}>
            <Button 
                as="a" 
                href="/docs/Jacob_Leone_Tech_2023.pdf" 
                download
                colorScheme="gray"
                fontSize="lg"
                bg="gray.200"
                color="black"
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
                  bg="gray.200"
                  color="black" 
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
            <VStack spacing={6} display={["flex", "none"]}>
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
            </VStack>
          </VStack>

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