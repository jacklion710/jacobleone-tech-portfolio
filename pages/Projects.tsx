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
  
  const projects = [
    {
      title: "Project One",
      description: "This is a brief description of Project One.",
      imageUrl: "/path/to/project-one-image.jpg",
      githubUrl: "https://github.com/yourusername/project-one"
    },
    {
      title: "Project Two",
      description: "This is a brief description of Project Two.",
      imageUrl: "/path/to/project-two-image.jpg",
      githubUrl: "https://github.com/yourusername/project-two"
    },
    {
        title: "Project Three",
        description: "This is a brief description of Project Three.",
        imageUrl: "/path/to/project-two-image.jpg",
        githubUrl: "https://github.com/yourusername/project-two"
      },
  ];
  
  export default function Projects() {
    const bgColor = useColorModeValue("white", "gray.800");
    const color = useColorModeValue("gray.700", "gray.50");
    const borderColor = useColorModeValue("gray.200", "gray.600");
    
    return (
        <ChakraProvider>
            <Flex direction="column" minHeight="100vh" bg={bgColor} color={color}>
             <Navbar />
        
                <VStack spacing={10} alignItems="center" justifyContent="center" flexGrow={1} py={10} px={4}>
                <Heading mb={4}>My Projects</Heading>
                
                <SimpleGrid columns={[1, 2, 3]} spacing={10} w="full">
                    {projects.map((project, index) => (
                    <Box key={index} p={5} borderWidth="1px" borderRadius="md" borderColor={borderColor} shadow="lg" transition="transform .2s" _hover={{ transform: 'scale(1.05)' }}>
                        <AspectRatio ratio={4 / 3}>
                        <Image src={project.imageUrl} alt={project.title} borderRadius="md" mb={4} objectFit="cover" />
                        </AspectRatio>
                        <Heading size="md" my={2}>{project.title}</Heading>
                        <Text mb={4} noOfLines={2}>{project.description}</Text>
                        <Tooltip label="Visit GitHub Repository" aria-label="GitHub link">
                        <Button as={Link} href={project.githubUrl} leftIcon={<FaGithub />} isExternal colorScheme="blue">
                            GitHub
                        </Button>
                        </Tooltip>
                    </Box>
                    ))}
                </SimpleGrid>
                
                </VStack>
        
                <Footer />
            </Flex>
        </ChakraProvider>
    );
  }
  