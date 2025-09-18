import React from 'react';
import { useBreakpointValue, chakra, Box, Flex, Stack, Collapse, Link as ChakraLink, useDisclosure, Image } from '@chakra-ui/react';
import dynamic from "next/dynamic";
import NextLink from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import './navbarStyles.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaYoutube } from 'react-icons/fa'; 

const MotionBox = motion(Box);

const navItemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 }
};

const navItemTransition = {
  visible: { duration: .1 },
  exit: { duration: 0.1 }  
};

const contactButtonVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: 100, opacity: 0 }
};

const contactButtonTransition = {
  visible: { duration: .1 },
  exit: { duration: 0.1 }  
};

function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';  // Disable scrolling
    } else {
      document.body.style.overflow = 'visible';  // Enable scrolling
    }

    return () => {
      document.body.style.overflow = 'visible';  // Cleanup
    };
  }, [isOpen]);

  return (
    <Box>
      <Flex
        bg={'black'}
        color={'white'}
        h="100px"
        minH={'120px'}
        py={{ base: 4 }}
        px={{ base: 4 }}
        borderStyle={'solid'}
        borderColor={'gray.900'}
        align={'center'}
        justifyContent="space-between"
        zIndex={10}
      >
        {/* Left Flex: Hamburger/Close Icons + Desktop Navigation */}
        <Flex 
          flex={1}
          display="flex"
          justifyContent={{ base: "flex-start", md: "flex-start" }}
          alignItems="center"
        >
          {/* Hamburger Icon */}
          <Flex
              ml={{ base: -2 }}
              display={{ base: 'flex', lg: 'none' }}
          >
              <div
                id="nav-icon1"
                onClick={onToggle}
                className={isOpen ? "open" : ""}
                style={{ marginTop: '25px' }}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
          </Flex>
  
          {/* Desktop Navigation */}
          <Flex display={{ base: 'none', lg: 'flex' }}>
            <DesktopNav isOpen={isOpen} />
          </Flex>
        </Flex>
    
        {/* Headshot Image */}
        <Flex justifyContent="center" flexShrink={0} zIndex={15} position="relative">
          <NextLink href="/" passHref>
              <ChakraLink>
                  <Image 
                      src='/images/headshot.jpg' 
                      alt="Jacob Leone's headshot"
                      borderRadius="50%"
                      w="100px" 
                      h="100px" 
                      objectFit="cover"
                      objectPosition="center top"
                      style={{
                          filter: "drop-shadow(0 0 3px teal) drop-shadow(0 0 6px teal)"
                      }}
                  />
              </ChakraLink>
          </NextLink>
      </Flex>
  
        {/* Right Flex: Contact button (only on desktop) */}
        <Flex 
          flex={1}
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          flexDirection={{ base: 'column-reverse', md: 'row' }}
        >
          {/* Icons for Desktop and Wide Views */}
          <Stack direction="row" spacing={3} mr={4} display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }} className="desktop-icons">
              <a href="https://github.com/jacklion710" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="nav-icon1" color="teal" size="1.5em" />
              </a>
              <a href="https://www.linkedin.com/in/jacob-leone-78a602278/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="nav-icon1" color="teal" size="1.5em" />
              </a>
              <a href="https://www.youtube.com/channel/UCbTxhDz-oFPdbKl5-rpi4gQ" target="_blank" rel="noopener noreferrer">
                  <FaYoutube className="nav-icon1" color="teal" size="1.5em" />
              </a>
              <a href="mailto:jacob0leone@gmail.com">
                  <FaEnvelope className="nav-icon1" color="teal" size="1.5em" />
              </a>
          </Stack>

          <motion.div 
            variants={contactButtonVariants}
            transition={{ duration: 0.2 }}
          >
            <NextLink href="/Contact" passHref>
              <ChakraLink
                mx={3}
                px={6}
                py={5}
                bg="teal.500"
                color="white"
                fontSize="md"
                fontWeight="bold"
                borderRadius="md"
                _hover={{ bg: 'teal.600' }}
                display={{ base: 'none', md: 'block' }}
              >
                Contact
              </ChakraLink>
            </NextLink>
          </motion.div>
        </Flex>
      </Flex>

      <MotionBox
        initial={false}
        animate={{ opacity: isOpen ? 0.9 : 0 }}
        position="fixed" 
        top={0} 
        right={0} 
        bottom={0} 
        left={0} 
        bg="black" 
        zIndex={8} 
        pointerEvents={isOpen ? 'auto' : 'none'}
        onClick={onToggle} 
      />
    
    <AnimatePresence>
      {isOpen && (
        <MotionBox 
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <MobileNav onToggle={onToggle} isOpen={isOpen} />
        </MotionBox>
      )}
    </AnimatePresence>
    </Box>
  );
}


interface DesktopNavProps {
  isOpen: boolean;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ isOpen }) => {
  return (
  <Flex justifyContent="space-between" alignItems="flex-start" flexGrow={1} h="100%">
    <Stack direction={'row'} spacing={6} mt="-5px">
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
                <Image 
                  src={navItem.imageSrc}
                  alt={`Navigation item ${navItem.label || 'image'}`}
                  objectFit="cover"
                  objectPosition="center top"
                  w={isOpen ? "100px" : "50px"}
                  h={isOpen ? "100px" : "50px"}
                  borderRadius="50%"
                />
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

interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
}

const iconVariants = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
};

const iconTransition = {
  visible: { duration: .1 },
  exit: { duration: 0.1 }  
};

const transitionOptions = {
  duration: 1., 
  ease: "easeInOut"
};

const MobileNav: React.FC<MobileNavProps> = ({ onToggle, isOpen }) => {
  const isLandscape = useBreakpointValue({ base: 'portrait', sm: 'landscape' }) === 'landscape';
  const marginTopValue = useBreakpointValue({ base: "100px", sm: "50px" });
  const iconMarginTop = useBreakpointValue({ base: "200px", sm: "80px" });

  return (
    <Flex
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      bg={'black'}
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="center"
      pt={isLandscape ? 12 : 12} 
      zIndex={11}
    >
      {/* Fixed Content */}
      <Flex 
        flexDirection="column" 
        w="100%" 
        position={isLandscape ? 'fixed' : 'relative'}
        zIndex={12}
        bg="black"
      >
        {/* Close Button */}
        <Box
            as="div"
            id="nav-icon1"
            onClick={onToggle}
            className={isOpen ? "open" : ""}
            mt={isLandscape ? '-15px' : '-15px'}
        >
            <span></span>
            <span></span>
            <span></span>
        </Box>
      </Flex>

      {/* Scrollable Content */}
      <Box 
        mt={isLandscape ? '80px' : 0}
        overflowY={isLandscape ? "auto" : "visible"}
        h={isLandscape ? 'calc(100vh - 80px)' : 'auto'}
        w="100%"
      >
        <Flex flexDirection="column" alignItems="center" justifyContent="center" mb={10}> 
          <Stack spacing={50} textAlign="center" mt={marginTopValue}>
            {NAV_ITEMS.map((navItem, index) => (
              <NextLink key={navItem.label ?? navItem.imageSrc} href={navItem.href ?? '#'} passHref>
                  <motion.div 
                      initial="hidden"
                      animate={isOpen ? "visible" : "hidden"}
                      exit="exit"
                      variants={navItemVariants}
                      transition={navItemTransition}
                  >
                      <ChakraLink
                          fontSize={{ base: "3xl" }}
                          fontWeight={navItem.imageSrc ? 'normal' : 'bold'}
                          color='white'
                          textShadow="0 0 3px teal, 0 0 6px teal, 0 0 9px teal"
                          _hover={{ textDecoration: 'underline', color: 'gray.300', textShadow: 'none' }}
                      >
                          {navItem.label}
                      </ChakraLink>
                  </motion.div>
              </NextLink>
            ))}
          </Stack>
        </Flex>

        {/* Icons */}
        {isOpen && (
            <Stack direction="row" justifyContent="center" spacing={3} mt={iconMarginTop} display={{ base: isOpen ? 'flex' : 'none', md: 'flex' }} className="desktop-icons">
              <motion.div variants={iconVariants} initial="hidden" animate={isOpen ? 'visible' : 'hidden'} exit="exit" transition={iconTransition}>
                <a href="https://github.com/jacklion710" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="nav-icon1" color="teal" size="1.5em" />
                </a>
              </motion.div>
              <motion.div variants={iconVariants} initial="hidden" animate={isOpen ? 'visible' : 'hidden'} exit="exit" transition={iconTransition}>
                <a href="https://www.linkedin.com/in/jacob-leone-78a602278/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="nav-icon1" color="teal" size="1.5em" />
                </a>
              </motion.div>
              <motion.div variants={iconVariants} initial="hidden" animate={isOpen ? 'visible' : 'hidden'} exit="exit" transition={iconTransition}>
                <a href="YOUR_YOUTUBE_URL" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="nav-icon1" color="teal" size="1.5em" />
                </a>
              </motion.div>
              <motion.div variants={iconVariants} initial="hidden" animate={isOpen ? 'visible' : 'hidden'} exit="exit" transition={iconTransition}>
                <a href="mailto:jacob0leone@gmail.com">
                    <FaEnvelope className="nav-icon1" color="teal" size="1.5em" />
                </a>
              </motion.div>
          </Stack>
        )}

        {/* Contact Button */}
        <Flex justifyContent="center" width="100%" mt={50}>
          <motion.div 
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            exit="exit"
            variants={contactButtonVariants}
            transition={contactButtonTransition}
          >
          <NextLink href="/Contact" passHref>
            <ChakraLink
                px={6}
                py={5}
                bg="teal.500"
                color="white"
                fontSize="2xl"
                fontWeight="bold"
                borderRadius="md"
                _hover={{ bg: 'teal.600' }}
            >
                Contact
            </ChakraLink>
          </NextLink>
        </motion.div>
        </Flex>
      </Box>
    </Flex>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });

interface NavItem {
  label?: string;
  imageSrc?: string;
  children?: Array<NavItem>;
  href?: string;
  altText?: string;  
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Projects',
    href: '/Projects'
  },
  {
    label: 'Services',
    href: '/Services'
  },
  {
    label: 'Résumé',
    href: '/Resume'
  },
  {
    label: 'Blog',
    href: '/Articles'
  },
];
