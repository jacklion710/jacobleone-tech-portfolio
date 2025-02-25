import React from 'react';
import {
  Box, Heading, Text, Link, Flex, LinkBox, LinkOverlay, Divider
} from '@chakra-ui/react';
import { useMediaQuery } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ResumeComponent: React.FC = () => {
  const [isLargerThan48em] = useMediaQuery("(min-width: 48em)");

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.33 } }
  };

  const [refPersonalInfo, inViewPersonalInfo] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refAboutDivider, inViewAboutDivider] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refAbout, inViewAbout] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refEducation, inViewEducation] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refTechnicalSkills, inViewTechnicalSkills] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refProfessionalExperience, inViewProfessionalExperience] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refRelevantProjects, inViewRelevantProjects] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refRelevantCoursework, inViewRelevantCoursework] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  return (
    <Box
      border="1px"
      borderColor="gray.200"
      w="full"
      borderRadius="xl"
      p={7}
      bg="gray.800"
      display="flex"
      flexDirection="column"
    >
      <Heading textAlign="center" color="white" fontSize="4xl" mb={3}>Jacob Leone</Heading>
      <Text color="white" textAlign="center">Machine Learning Engineer</Text>
      
      <Flex
        direction="column"
        alignItems="center"
        mb={3}
        mt={5}
        w="full"
        px={5}
      >
        <Flex 
          direction={{ base: "column", sm: "row" }} 
          justifyContent="center" 
          alignItems="center" 
          mb={{ base: 2, md: 5 }} 
          px={{ base: 3, sm: 0 }}
          textAlign="center"
          wrap="nowrap"
        >
          <motion.div ref={refPersonalInfo} initial="hidden" animate={inViewPersonalInfo ? "visible" : "hidden"} variants={fadeIn}>
          <Flex 
            direction={{ base: "column", sm: "row" }} 
            justifyContent="center" 
            alignItems="center" 
            mb={{ base: 2, md: 5 }} 
            px={{ base: 3, sm: 0 }}
            textAlign="center"
            wrap="nowrap"
          >
            <Text color="white" fontSize={{ base: "md", md: "xl" }} whiteSpace="nowrap">
              Lake Worth, FL 33467 {isLargerThan48em ? "|" : ""}
            </Text>
            <Text 
              color="white" 
              fontSize={{ base: "md", md: "xl" }} 
              whiteSpace="nowrap"
              mx={1}
            >
              561-789-3725 {isLargerThan48em ? "|" : ""}
            </Text>
            <Text color="white" fontSize={{ base: "md", md: "xl" }} whiteSpace="nowrap">
              jacob0leone@gmail.com
            </Text>
          </Flex>
          <LinkBox>
            <Text color="white" fontSize="xl" mb={10}>
                <Link href="https://www.linkedin.com/in/jacob-leone/" isExternal>LinkedIn</Link>
                {" | "}
                <Link href="https://github.com/" isExternal>GitHub</Link>
            </Text>
          </LinkBox>

          <motion.div ref={refAboutDivider} initial="hidden" animate={inViewAboutDivider ? "visible" : "hidden"} variants={fadeIn}>
            <Flex direction="column" alignItems="center" w="full">
              <Divider my={0} w="50%" borderColor="white" />
            </Flex>
          </motion.div>
        </motion.div>
      </Flex>
        <Box textAlign="left" paddingLeft={0} marginLeft={0}>
        <motion.div ref={refAbout} initial="hidden" animate={inViewAbout ? "visible" : "hidden"} variants={fadeIn}>
          <Heading textAlign="center" color="white" fontSize="2xl" mb={2}>
              Summary
          </Heading>
          <Text color="white" textAlign="center" mb={1}>Machine Learning Engineer specializing in signal and image processing, with hands-on experience developing AI-driven solutions. My expertise spans implementing computer vision algorithms, processing complex signal data, and designing ML pipelines that bridge theoretical concepts with practical applications. Building on my graduate research in AI-medical device integration, I combine strong technical capabilities in deep learning and signal processing with a commitment to creating reliable, ethical AI systems. I excel in collaborative environments where I can apply my analytical mindset to solve challenging technical problems while maintaining a user-centric approach.</Text>
        </motion.div>
        <motion.div ref={refEducation} initial="hidden" animate={inViewEducation ? "visible" : "hidden"} variants={fadeIn}>
          <Heading textAlign="left" color="white" fontSize="2xl" mb={2} mt={10}>
          Education
          </Heading>
          <Text color="white" mb={1} fontWeight="bold">
          Master of Science in Artificial Intelligence</Text>
          <Text color="white" mb={1}>Florida Atlantic University, Boca Raton, FL | Graduation date: December 2023</Text>
          <Text color="white" mb={3}>Cumulative GPA: 3.9</Text>

          <Text color="white" mb={1} fontSize="2xl">
          Bachelors of Arts in Psychology</Text>
          <Text color="white" mb={1}>Florida Atlantic University, Boca Raton, FL. Graduation date: May 2022</Text> 
        </motion.div>   

        <motion.div ref={refTechnicalSkills} initial="hidden" animate={inViewTechnicalSkills ? "visible" : "hidden"} variants={fadeIn}>
          <Heading textAlign="left" color="white" fontSize="2xl" mb={2} mt={10}>
          Tehcnical Skills
          </Heading>

          <Text color="white" mb={1} fontSize="2xl">
            Machine Learning & Data Science
          </Text>
          <Text color="white" mb={1}>
            Frameworks: PyTorch, TensorFlow, Keras, Scikit-Learn
          </Text>
          <Text color="white" mb={1}>
            Visualization: Matplotlib, Seaborn, Weights & Biases (WandB)
          </Text>
          <Text color="white" mb={1}>
            Data Processing: Pandas, NumPy, SQL
          </Text>
          <Text color="white" mb={1}>
            Version Control & MLOps: Git, Docker
          </Text>

          <Text color="white" mb={1} fontSize="2xl" mt={3}>
            Signal & Image Processing
          </Text>
          <Text color="white" mb={1}>
            Digital Signal Processing (DSP), Computer Vision, Embedded Systems (ESP32, Raspberry Pi)
          </Text>

          <Text color="white" mb={1} fontSize="2xl" mt={3}>
            Programming Languages
          </Text>
          <Text color="white" mb={1}>
            Primary: Python, C/C++
          </Text>
          <Text color="white" mb={1}>
            Secondary: TypeScript, R, Go, MATLAB
          </Text>

          <Text color="white" mb={1} fontSize="2xl" mt={3}>
            Development Environment
          </Text>
          <Text color="white" mb={1}>
            Operating Systems: Linux Ubuntu, Windows, MacOS
          </Text>
          <Text color="white" mb={1}>
            Tools: Postman, Git, VS Code
          </Text>
        </motion.div>

        </Box>

        <motion.div ref={refProfessionalExperience} initial="hidden" animate={inViewProfessionalExperience ? "visible" : "hidden"} variants={fadeIn}>
          <Heading textAlign="left" color="white" fontSize="2xl" mb={2} mt={10}>
          Professional Experience
          </Heading>

          <Text color="white" mb={1} fontSize="2xl">
          Machine Learning Engineer, Aventusoft | Boca Raton, FL 2024–Present</Text>
          <Text color="white" mb={1}>Developing AI models for FDA-approved medical devices, specializing in ECG signal processing and predictive analytics.
          </Text>
          <Text color="white" mb={1}>
          ▪ Engineered and deployed machine learning models for real-time ECG signal analysis, achieving 98% accuracy in fiducial point detection.
          </Text>
          <Text color="white" mb={1}>
          ▪ Developed data preprocessing pipelines for ECG signals, standardizing diverse datasets from multiple sources into a unified format.
          </Text>
          <Text color="white" mb={1}>
          ▪ Implemented end-to-end DSP-based AI system integration, collaborating with firmware, hardware, cloud, and biomedical engineering teams.
          </Text>
          <Text color="white" mb={1}>
          ▪ Optimized model performance for embedded medical devices, achieving inference time of 2 seconds while maintaining accuracy.
          </Text>
          <Text color="white" mb={10}>
          ▪ Established data validation protocols and documentation for ensuring compliance with FDA requirements for medical systems.
          </Text>

          <Text color="white" mb={1} fontSize="2xl">
          Team Lead & Software Engineer, AuthentiKid | Remote (California • Idaho • Florida) 2023–2024</Text>
          <Text color="white" mb={1}>Led development of AI-driven security solutions, managing cross-functional teams and architecting scalable systems.
          </Text>
          <Text color="white" mb={1}>
          ▪ Architected and deployed AI-based security system, processing daily transactions with 99.9% uptime.
          </Text>
          <Text color="white" mb={1}>
          ▪ Led a team of 4 developers across multiple time zones, implementing agile methodologies that reduce delivery time.
          </Text>
          <Text color="white" mb={1}>
          ▪ Designed and implemented CI/CD pipelines, reducing deployment time to 5 minutes.
          </Text>
          <Text color="white" mb={10}>
          ▪ Ensured the integration of security measures at every stage of software development, prioritizing data integrity and user privacy.
          </Text>

          <Text color="white" mb={1} fontSize="2xl">
          Embedded Systems Developer, Vector Climate (Contract) | Pompano, FL 2020–2023</Text>
          <Text color="white" mb={1}>Developed embedded systems and testing solutions for industrial cooling systems, focusing on hardware-software integration.
          </Text>
          <Text color="white" mb={1}>
          ▪ Created automated testing framework for hardware components, reducing QA time.
          </Text>
          <Text color="white" mb={1}>
          ▪ Designed and implemented PCB testing protocols for multiple sensor types including water level sensors and LED arrays.
          </Text>
          <Text color="white" mb={1}>
          ▪ Managed prototype development lifecycle.
          </Text>
          <Text color="white" mb={10}>
          ▪ Developed flash configurator application enabling real-time parameter adjustments, improving system flexibility.
          </Text>
        </motion.div>

        <motion.div ref={refRelevantProjects} initial="hidden" animate={inViewRelevantProjects ? "visible" : "hidden"} variants={fadeIn}>
          <Heading textAlign="left" color="white" fontSize="2xl" mb={2} mt={10}>
          Relevant Projects
          </Heading>

          <Text color="white" mb={1} fontSize="2xl">
          Urban Soundscape GAN | Generative AI</Text>
          <Text color="white" mb={1}>Advanced generative system for synthesizing classifying urban audio environments.
          </Text>
          <Text color="white" mb={1}>        
          ▪ Architected and implemented a custom GAN architecture optimized for audio classification on a web application.
          </Text>
          <Text color="white" mb={1}>
          ▪ Developed novel feature extraction pipeline for urban sound signatures using torchaudio.
          </Text>
          <Text color="white" mb={10}>
          ▪ Achieved 97% accuracy in urban sound classifications.
          </Text>

          <Text color="white" mb={1} fontSize="2xl">
          Online Deep Learning Based Age Authentication | Production ML Web Application</Text>
          <Text color="white" mb={1}>Full-stack age verification system with privacy-preserving ML inference.
          </Text>
          <Text color="white" mb={1}>        
          ▪ Designed and deployed end-to-end ML pipeline for age classification using Tensorflow.js.
          </Text>
          <Text color="white" mb={1}>
          ▪ Implemented secure JWT authentication flow and privacy-preserving local inference.
          </Text>
          <Text color="white" mb={10}>
          ▪ Built scalable AWS infrastructure handling daily requests.
          </Text>

          <Text color="white" mb={1} fontSize="2xl">
          PyTorch Audio Processing Course | Educational Content Development</Text>
          <Text color="white" mb={1}>
          Comprehensive educational series on audio processing with PyTorch, reaching worldwide learners.
          </Text>
          <Text color="white" mb={1}>
          ▪ Created practical tutorials covering audio data preprocessing, feature extraction, CNN architecture design, and production deployment strategies.
          </Text>
          <Text color="white" mb={1}>
          ▪ Demonstrated techniques for loading, processing, and visualizing audio data within the PyTorch framework.
          </Text>
          <Text color="white" mb={1}>
          ▪ Introduced transfer learning concepts for audio applications.
          </Text>
        </motion.div>

        <motion.div ref={refRelevantCoursework} initial="hidden" animate={inViewRelevantCoursework ? "visible" : "hidden"} variants={fadeIn}>
          <Heading textAlign="left" color="white" fontSize="2xl" mb={2} mt={10}>
          Relevant Coursework
          </Heading>
          <Text color="white" mb={1}>
          ▪ Python
          </Text>
          <Text color="white" mb={1}>
          ▪ Natural Language Processing
          </Text>
          <Text color="white" mb={1}>
          ▪ Artificial Intelligence
          </Text>
          <Text color="white" mb={1}>
          ▪ C Programming
          </Text>
          <Text color="white" mb={1}>
          ▪ Computational Foundations of AI
          </Text>
          <Text color="white" mb={1}>
          ▪ Data Structures
          </Text>
          <Text color="white" mb={1}>
          ▪ Advanced Internet Systems
          </Text>
          <Text color="white" mb={1}>
          ▪ Software Engineering
          </Text>
          <Text color="white" mb={1}>
          ▪ Cognition
          </Text>
          <Text color="white" mb={1}>
          ▪ Analysis of Algorithms
          </Text>
          <Text color="white" mb={1}>
          ▪ Deep Learning
          </Text>
          <Text color="white" mb={1}>
          ▪ Data Science
          </Text>
          <Text color="white" mb={1}>
          ▪ AI in Medicine & Healthcare
          </Text>
        </motion.div>
      </Flex>
    </Box>
    );
};

export default ResumeComponent;