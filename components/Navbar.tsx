import {
    Box,
    Flex,
    Text,
    Icon,
    IconButton,
    Button,
    Stack,
    Collapse,
    Image,
    Link as ChakraLink,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useDisclosure
  } from '@chakra-ui/react';
  import React, { useState } from 'react';
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
    const colorMode = useColorModeValue('light', 'dark');
  
    return (
      <Box>
        <Flex
            bg={'black'}
            color={'white'}
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
            <Text
                textAlign={'center'}
                fontFamily={'heading'}
                color={'white'}>
            </Text>
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
      <Flex justifyContent="center" alignItems="center" flexGrow={1}>
        <Stack direction={'row'} spacing={4}>
          {NAV_ITEMS.map((navItem) => (
            <Box key={navItem.label}>
              <NextLink href={navItem.href ?? '#'} passHref>
                <ChakraLink>{navItem.label}</ChakraLink>
              </NextLink>
            </Box>
          ))}
        </Stack>
      </Flex>
    );
  };
  
  
  
  const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    const subLabelColor = useColorModeValue('black', 'white');
  
    return (
      <Box
        role={'group'}
        display={'flex'}
        alignItems="center"
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('red.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <NextLink href={href ?? '#'} passHref>
              <Box
                transition={'all .3s ease'}
                _groupHover={{ color: 'red.400' }}
                fontWeight={500}
                fontSize={'lg'}
                color={subLabelColor}>
                {label}
              </Box>
            </NextLink>
            <Text fontSize={'sm'} color={subLabelColor}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'red.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Box>
    );
  };
  
  
  const MobileNav = () => {
    const textColor = 'white';
  
    return (
      <Stack
        bg={'black'}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <NextLink key={navItem.label} href={navItem.href ?? '#'} passHref>
            <ChakraLink py={2} fontWeight={600} color={textColor}>
              {navItem.label}
            </ChakraLink>
          </NextLink>
        ))}
      </Stack>
    );
  };
  
  
  const MobileNavItem = ({ label, children, href }: NavItem) => {
    const textColor = useColorModeValue('gray.600', 'gray.200');
    const [isOpen, setIsOpen] = useState(false);
  
    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <Stack spacing={4} onClick={children && handleToggle}>
        <Flex
          py={2}
          as={NextLink}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          passHref
        >
          <Text
            fontWeight={600}
            color={'white'}
            >
            {label}
            </Text>

          {children && (
            <Icon
              as={isOpen ? ChevronDownIcon : ChevronRightIcon}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}
          >
            {children &&
              children.map((child) => (
                <NextLink key={child.label} href={child.href ?? '#'} passHref>
                  <Box py={2}>
                    {child.label}
                  </Box>
                </NextLink>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  

  export default dynamic(() => Promise.resolve(Navbar), { ssr: false });

  interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }

  const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Projects',
    href: 'pages/Projects'
  },
  {
    label: 'Services',
    href: '/pages/Services'
  },
//   {
//     label: 'Shop',
//     href: '/pages/Shop'
//   },
  {
    label: 'Contact',
    href: '/Contact'
  },
  {
    label: 'Résumé',
    href: '/pages/Résumé'
  }
];
