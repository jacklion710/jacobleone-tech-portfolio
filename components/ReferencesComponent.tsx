import React from 'react';
import { Box, Heading, Text, Link, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ReferencesComponent: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.33 } }
  }

  const [head, headView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refAbout, inViewAbout] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Box
      border="1px"
      borderColor="gray.200"
      w="100%"
      borderRadius="xl"
      p={7}
      bg="gray.900"
      display="flex"
      flexDirection="column"
      alignItems="center"
      mx="auto"
    >
      <motion.div ref={head} initial="hidden" animate={headView ? "visible" : "hidden"} variants={fadeIn}>
        <Heading color="white" fontSize="4xl" mb={3}>Jacob Leone</Heading>
        <Flex direction="column" alignItems="center" w="full">
          <Heading color="white" fontSize="3xl" mb={3}>References</Heading>
        </Flex>
      </motion.div>
      
      <Flex
        direction="column"
        alignItems="center"
        mb={3}
        mt={5}
        w="full"
      >
        <motion.div ref={ref3} initial="hidden" animate={inView1 ? "visible" : "hidden"} variants={fadeIn}>
          <Flex direction="column" alignItems="center">
            <Heading color="white" fontSize="2xl" mb={2}>Jhoan Keider Hoyos</Heading>
            <Text color="white" mb={1} textAlign="center" >Ph.D, Machine Learning & Signal Processing Engineer</Text>
            <Text color="white" mb={1}>Aventusoft</Text>
            <Link href="mailto: devin@ystemandchess.com" color="white" mb={1}>keider.hoyos@gmail.com</Link>
            <Text color="white" textAlign="center" mb={10}>Relationship: Colleague | Mentor</Text>
          </Flex>
        </motion.div>

        <motion.div ref={ref1} initial="hidden" animate={inView1 ? "visible" : "hidden"} variants={fadeIn}>
          <Flex direction="column" alignItems="center" w="full">
            <Heading color="white" fontSize="2xl" mb={2}>Borko Fuhrt</Heading>
            <Text color="white" mb={1}>Professor and Director</Text>
            <Text color="white" mb={1} textAlign="center" >NSF Industry / University Cooperative Research Center</Text>
            <Link href="mailto: bfurht@fau.edu" color="white" mb={1}>bfurht@fau.edu</Link>
            <Link href="tel:5612973180" color="white" mb={1}>561-297-3180</Link>
            <Text color="white" textAlign="center" >Relationship: Professor | Mentor</Text>
          </Flex>
        </motion.div>
          
        <motion.div ref={ref2} initial="hidden" animate={inView1 ? "visible" : "hidden"} variants={fadeIn}>
          <Flex direction="column" alignItems="center">
            <Heading color="white" fontSize="2xl" mb={2} mt={10}>Larry Canipe</Heading>
            <Text color="white" mb={1}>CEO</Text>
            <Text color="white" mb={1}>Vector Climate / Cleva Tech</Text>
            <Link href="mailto: larrycanipe@vectorclimate.com" color="white" mb={1}>larrycanipe@vectorclimate.com</Link>
            <Link href="tel:5616545279" color="white" mb={1}>561-654-5279</Link>
            <Text color="white" textAlign="center" >Relationship: Former Employer | Mentor</Text>
          </Flex>
        </motion.div>

      </Flex>

      <motion.div ref={refAbout} initial="hidden" animate={inViewAbout ? "visible" : "hidden"} variants={fadeIn}>
        <Heading textAlign="center" color="white" fontSize="2xl" mb={10} mt={5}>
            ...
        </Heading>

        <Heading textAlign="center" color="white" fontSize="2xl" mb={2} mt={2}>
            About me
        </Heading>
        <Text color="white" textAlign="center" mb={1}>Machine Learning Engineer specializing in signal and image processing, with hands-on experience developing AI-driven solutions. My expertise spans implementing computer vision algorithms, processing complex signal data, and designing ML pipelines that bridge theoretical concepts with practical applications. Building on my graduate research in AI-medical device integration, I combine strong technical capabilities in deep learning and signal processing with a commitment to creating reliable, ethical AI systems. I excel in collaborative environments where I can apply my analytical mindset to solve challenging technical problems while maintaining a user-centric approach.</Text>
      </motion.div>

    </Box>
  );
};

export default ReferencesComponent;