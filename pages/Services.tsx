import {
    Box,
    Flex,
    Heading,
    Text,
    Button,
    VStack,
    List,
    ListItem,
    Link,
    Container,
    ChakraProvider
  } from "@chakra-ui/react";
  import { FaLaptopCode, FaMobileAlt, FaBrain, FaCode } from "react-icons/fa";
  import Navbar from "../components/Navbar";
  import Footer from '../components/Footer';

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
            <Flex direction="column" minHeight="100vh">
                <Navbar />
                
                <Container maxW="container.xl" flexGrow={1}>
                    <Heading as="h1" size="2xl" mb={10} mt={10} textAlign="center">
                        My Services
                    </Heading>
            
                    <Flex wrap="wrap" justifyContent="center" gap={8}>
                        {services.map((service, index) => (
                            <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" w="xs" p={5} m={3}>
                                <Flex justifyContent="center">
                                    <Box fontSize="3xl" mb={3}>
                                        {service.icon}
                                    </Box>
                                </Flex>
                                <Heading as="h2" size="lg" mb={4} textAlign="center">
                                    {service.title}
                                </Heading>
                                <Text mb={4} textAlign="center">{service.description}</Text>
                            </Box>
                        ))}
                    </Flex>

                    <VStack mt={10} spacing={4} alignItems="center">
                        <Text fontSize="xl" textAlign="center" fontWeight="medium">
                            Interested in working with me? Get in touch!
                        </Text>
                        <Flex>
                            <Button colorScheme="blue" size="lg" as={Link} href="/contact" mr={4}>
                                Contact
                            </Button>
                            <Button colorScheme="green" size="lg" as={Link} href="/pages/projects">
                                Projects
                            </Button>
                        </Flex>
                        <Text fontSize="lg">
                            Email me at <Link href="mailto:jacob0leone@gmail.com" color="blue.500" fontWeight="bold">jacob0leone@gmail.com</Link>
                        </Text>
                    </VStack>
                </Container>

                <Footer />
            </Flex>
        </ChakraProvider>
    );
}