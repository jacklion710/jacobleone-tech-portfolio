import {
    Box,
    Flex,
    Heading,
    Image,
    Text,
    Link,
    VStack,
    SimpleGrid,
    Button,
    useColorModeValue,
    Tooltip,
    AspectRatio,
    ChakraProvider
  } from "@chakra-ui/react";
  import { FaGithub } from "react-icons/fa";
  import Navbar from "../components/Navbar";
  import Footer from '../components/Footer';
  import { Helmet } from "react-helmet";

  const projects = [
    {
      title: "Full Stack Website",
      description: "Personal website for my music gallery. Users can book services, and make a profile",
      imageUrl: "/images/jacks_site.png",
      githubUrl: "https://github.com/jacklion710/jacklions-website",
      deployUrl: "https://jacklion.xyz"
    },
    {
      title: "M8 Data Cleaner",
      description: "A script that optimizes sample libraries for use on the M8 tracker hardware",
      imageUrl: "/images/m8.jpeg",
      githubUrl: "https://github.com/jacklion710/m8_data_cleaner"
    },
    {
        title: "Interactive Web Audio Visual Experience",
        description: "An experiment on the intersection between technology and art.",
        imageUrl: "/images/helix.png",
        githubUrl: "https://github.com/jacklion710/jacklions-website/blob/main/pages/av/RNBO/simple-sampler-dna.tsx",
        deployUrl: "https://jacklion.xyz/av/RNBO/simple-sampler-dna"
      },
      {
        title: "CDJ Compatibility Cleaner",
        description: "A script for assisting DJs in preparing samples for CDJ compatibility.",
        imageUrl: "/images/cdj.jpeg",
        githubUrl: "https://github.com/jacklion710/CDJ_Audio_Compatibility_Converter"
      }
  ];
  
  export default function Projects() {
    const bgColor = useColorModeValue("white", "gray.800");
    const color = useColorModeValue("gray.700", "gray.50");
    const borderColor = useColorModeValue("gray.200", "gray.600");
    
    return (
      <ChakraProvider>
        <Helmet>
          <title>Projects by Jacob Leone | Projects</title>
          <meta name="description" content="Explore various projects undertaken by Jacob Leone. From full-stack websites to data cleaning scripts, delve into Jacob's portfolio here." />
          <meta name="keywords" content="Jacob Leone, Projects, Full Stack, M8 Data Cleaner, Web Audio, CDJ Compatibility, Portfolio" />
          <meta property="og:url" content="https://jacobleone-tech.vercel.app/Projects" /> 
          <link rel="canonical" href="https://jacobleone-tech.vercel.app/Projects" />
        </Helmet>
        <Flex 
            direction="column" 
            minHeight="100vh" 
            bg={bgColor} 
            color={color}
            bgImage="url('/images/Circuit.jpeg')" 
            bgPos="center"
            bgSize="cover"
            bgRepeat="no-repeat"
            bgAttachment="fixed"
        >
            <Navbar />

            <VStack 
                spacing={10} 
                alignItems="center" 
                justifyContent="flex-start"  // Keep content aligned to the top
                flexGrow={1} 
                py={10} 
                px={4}
            >
                <Heading 
                    mb={4} 
                    size="2xl"
                    position="relative"
                    _after={{
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        bottom: '-10px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '260px',
                        borderBottom: `1px solid currentColor`,
                    }}
                >
                    My Projects
                </Heading>
              
                <Flex alignItems="center" justifyContent="center" flexGrow={1} w="full">
                <SimpleGrid columns={[1, 2, 3]} spacing={10} w="full">
                    {projects.map((project, index) => (
                    <Box key={index} p={5} borderWidth="1px" borderRadius="md" borderColor={borderColor} shadow="lg" transition="transform .2s" _hover={{ transform: 'scale(1.05)' }}>
                        <AspectRatio ratio={4 / 3}>
                        <Image src={project.imageUrl} alt={project.title} borderRadius="md" mb={4} objectFit="cover" />
                        </AspectRatio>
                        <Heading size="md" my={2} textAlign="center">{project.title}</Heading>
                        <Text mb={4} noOfLines={2}>{project.description}</Text>
                        <Flex justifyContent="center" mt={3} wrap="wrap">
                          <Tooltip label="Visit GitHub Repository" aria-label="GitHub link">
                              <Button as={Link} href={project.githubUrl} leftIcon={<FaGithub />} isExternal colorScheme="blue" mr={2}>
                                  GitHub
                              </Button>
                          </Tooltip>
                          {(project.title === "Full Stack Website" || project.title === "Interactive Web Audio Visual Experience") &&
                            <Tooltip label="Visit Deployed Project" aria-label="Deployment link">
                                <Button as={Link} href={project.deployUrl} isExternal colorScheme="teal" ml={2}>
                                    View Live
                                </Button>
                            </Tooltip>
                        }
                      </Flex>
                    </Box>
                  ))}
                  </SimpleGrid>
              </Flex>
  
          </VStack>
  
          <Footer />
      </Flex>
  </ChakraProvider>
    );
  }
  