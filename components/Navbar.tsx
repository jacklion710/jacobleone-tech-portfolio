import {
  Box,
  Flex,
  Text,
  Icon,
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
  ChevronDownIcon,
  ChevronRightIcon
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
      bg={'black'}
      p={4}
      spacing={6}  // <-- Introducing spacing between nav items
      display={{ md: 'none' }}>
      
      {NAV_ITEMS.map((navItem) => (
        <NextLink key={navItem.label ?? navItem.imageSrc} href={navItem.href ?? '#'} passHref>
          <ChakraLink
            py={2}
            fontSize={{ base: "xl" }}  // <-- Making text larger for prominence
            fontWeight={navItem.imageSrc ? 'normal' : 'bold'}  // <-- Make text items bold
            color='white'
            _hover={{ textDecoration: 'underline', color: 'gray.300' }}  // <-- Hover effect
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
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });

interface NavItem {
  label?: string;
  imageSrc?: string; // <-- Add this
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    imageSrc: '/images/headshot.jpg',  // <-- Add this
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
