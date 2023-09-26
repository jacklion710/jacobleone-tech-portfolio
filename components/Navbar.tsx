import {
  Box,
  Flex,
  IconButton,
  Stack,
  Image,
  Collapse,
  Link as ChakraLink,
  useDisclosure
} from '@chakra-ui/react';
import React from 'react';
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';
import dynamic from "next/dynamic";
import NextLink from "next/link";

function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={'black'}
        color={'white'}
        h="80px"
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderStyle={'solid'}
        borderColor={'gray.900'}
        align={'center'}
        justify={'space-between'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            color={"teal.500"}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={12} h={12} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center" flexGrow={1} h="100%">
      <Stack 
        direction={'row'} 
        spacing={6}
      >
        {NAV_ITEMS.map((navItem) => (
          <NextLink key={navItem.label ?? navItem.imageSrc} href={navItem.href ?? '#'} passHref>
            <ChakraLink
              py={2}
              fontSize={{ base: "xl" }}
              fontWeight={navItem.imageSrc ? 'normal' : 'bold'}
              _hover={{ textDecoration: 'underline', color: 'gray.300' }} 
              textShadow="0 0 5px teal, 0 0 10px teal, 0 0 15px teal, 0 0 20px teal" 
            >
              {navItem.imageSrc ? (
                <Image src={navItem.imageSrc} objectFit="cover" objectPosition="center top" w="50px" h="50px" borderRadius="50%" /> 
              ) : (
                navItem.label
              )}
            </ChakraLink>
          </NextLink>
        ))}
      </Stack>
    </Flex>
  );
};

const MobileNav = () => {
  return (
    <Stack
      direction="column"  
      flexDirection="column" 
      bg={'black'}
      p={4}
      spacing={4}  
      display={{ md: 'none' }}
      width="100%"  
    >
      {NAV_ITEMS.map((navItem) => (
        <NextLink key={navItem.label ?? navItem.imageSrc} href={navItem.href ?? '#'} passHref>
          <ChakraLink
            py={3}
            fontSize={{ base: "lg" }}
            fontWeight={navItem.imageSrc ? 'normal' : 'bold'}
            color='white'
            textAlign="center"  
            display="block"
            _hover={{ textDecoration: 'underline', color: 'gray.300' }}
            textShadow="0 0 5px teal, 0 0 10px teal, 0 0 15px teal, 0 0 20px teal" // Updated glow effect for mobile
          >
            {navItem.imageSrc ? (
              <Image src={navItem.imageSrc} objectFit="cover" objectPosition="center top" w="40px" h="40px" borderRadius="50%" mx="auto" />
            ) : (
              navItem.label
            )}
          </ChakraLink>
        </NextLink>
      ))}
    </Stack>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });

interface NavItem {
  label?: string;
  imageSrc?: string; 
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    imageSrc: '/images/headshot.jpg', 
    href: '/'
  },
  {
    label: 'Projects',
    href: '/Projects'
  },
  {
    label: 'Services',
    href: '/Services'
  },
  {
    label: 'Contact',
    href: '/Contact'
  },
  {
    label: 'Résumé',
    href: '/Resume'
  }
];
