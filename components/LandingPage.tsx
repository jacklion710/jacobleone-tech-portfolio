import { Box, Heading, Text, Button, VStack, Center } from "@chakra-ui/react";
import Navbar from '../components/Navbar';
import { Image as ChakraImage } from '@chakra-ui/react';
import Image from 'next/image';
import Link from "next/link";

const LandingPage = () => {
  return (
    <Center height="85vh" bg="gray.50">
      <VStack spacing={6}>
        <Heading>Jacob Leone's Portfolio</Heading>
        <Text>Welcome to my tech portfolio. Explore my projects and skills.</Text>
        <Link href="/pages/projects" passHref>
          <Button as="a" colorScheme="teal" size="lg">
            View Projects
          </Button>
        </Link>
        <div style={{ width: '400px', height: '600px', position: 'relative' }}>
            <Image 
                src="/images/headshot.jpg"
                alt="Jacob Leone's Headshot"
                layout="fill"
                objectFit="cover"
            />
        </div>
      </VStack>
    </Center>
  );
};

export default LandingPage;
