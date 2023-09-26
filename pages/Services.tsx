import {
    Box,
    Flex,
    Heading,
    Text,
    Button,
    VStack,
    Link,
    Container,
    ChakraProvider,
    Divider
  } from "@chakra-ui/react";
  import { FaLaptopCode, FaMobileAlt, FaBrain, FaCode } from "react-icons/fa";
  import Navbar from "../components/Navbar";
  import Footer from '../components/Footer';
  import { Helmet } from "react-helmet";

  const services = [
    {
      title: "AI & Machine Learning",
      icon: <FaBrain />,
      description: "Custom AI models and machine learning solutions tailored to your business needs.",
    },
    {
      title: "Software Development",
      icon: <FaCode />,
      description: "Full-stack software development services from concept to deployment.",
    },
    {
      title: "Web Development",
      icon: <FaLaptopCode />,
      description: "Responsive, user-friendly websites built with the latest technologies.",
    },
    {
      title: "Mobile App Creation",
      icon: <FaMobileAlt />,
      description: "Native and hybrid mobile applications for both Android and iOS platforms.",
    }
  ];
  
  export default function Services() {
    return (
        <ChakraProvider>
            <Helmet>
                <title>Jacob Leone's Services | Professional Tech Solutions</title>
                <meta name="description" content="Explore Jacob Leone's professional services, ranging from AI & Machine Learning, Software Development, Web Development, to Mobile App Creation. Get the best tech solutions tailored for your needs." />
                <meta name="keywords" content="Jacob Leone, AI, Machine Learning, Software Development, Web Development, Mobile App Creation, Tech Services" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Jacob Leone's Services | Professional Tech Solutions" />
                <meta property="og:description" content="Explore Jacob Leone's professional services, ranging from AI & Machine Learning, Software Development, Web Development, to Mobile App Creation. Get the best tech solutions tailored for your needs." />
                <meta property="og:url" content="https://jacobleone-tech.vercel.app/Services" />
                <link rel="canonical" href="https://jacobleone-tech.vercel.app/Services" />
            </Helmet>
            <Flex 
                direction="column" 
                minHeight="100vh"
                bgImage="url('/images/Circuit.jpeg')"
                bgPos="center"
                bgSize="cover"
                bgRepeat="no-repeat"
            >
                <Navbar />
                
                <Container maxW="container.xl" flexGrow={1}>
                    <Heading 
                        as="h1" 
                        size="2xl" 
                        mb={10} 
                        mt={10} 
                        textAlign="center"
                        position="relative"
                        _after={{
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            bottom: '-10px', 
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '280px',  
                            borderBottom: `1px solid currentColor`,  
                        }}
                    >
                        My Services
                    </Heading>
            
                    <Flex wrap="wrap" justifyContent="center" gap={4}>
                        {services.map((service, index) => (
                            <Box key={index} borderWidth="5px" borderRadius="lg" overflow="hidden" w="xs" p={5} m={1} bg="gray.100" borderColor="black">
                                <Flex justifyContent="center">
                                    <Box fontSize="3xl" mb={3}>
                                        {service.icon}
                                    </Box>
                                </Flex>
                                <Heading as="h2" size="lg" mb={1} textAlign="center">
                                    {service.title}
                                </Heading>
                                <Text mb={4} textAlign="center">{service.description}</Text>
                            </Box>
                        ))}
                    </Flex>

                    <Divider my={10} w="50%" borderColor="black" mx="auto" />

                    <VStack mt={10} spacing={4} alignItems="center">
                        <Text fontSize="lg" textAlign="center" fontWeight="medium">
                            Have an idea for a project? Reach out anytime!
                        </Text>
                        <Flex>
                            <Button colorScheme="blue" size="med" as={Link} href="/Contact" mr={4} padding={2}>
                                Contact
                            </Button>
                            <Button colorScheme="green" size="med" as={Link} href="/Projects" padding={2}>
                                Projects
                            </Button>
                        </Flex>
                        <Text fontSize="med">
                            Email me at <Link href="mailto:jacob0leone@gmail.com" color="blue.500" fontWeight="bold">jacob0leone@gmail.com</Link>
                        </Text>
                    </VStack>
                </Container>

                <Footer />
            </Flex>
        </ChakraProvider>
    );
}