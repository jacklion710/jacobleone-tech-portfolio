'use client'
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Image
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ReactNode } from 'react'

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.500', 'blackAlpha.500')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
    return (
        <Box 
          bg={useColorModeValue('teal.400', 'teal.400')}
          color={useColorModeValue('white', 'white')}
          width="100%"  
        >
          <Container
            as={Stack}
            maxW={'6xl'}
            py={2}  
            direction={{ base: 'column', md: 'row' }}
            spacing={2}  
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Text fontSize="sm">© 2023 Jacob Leone. All rights reserved</Text> 
            <Stack direction={'row'} spacing={4}>  
          
          <SocialButton label={'Github'} href={'https://github.com/jacklion710'}>
            <FaGithub />
          </SocialButton>
          <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/in/jacob-leone/'}>
            <FaLinkedin />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}