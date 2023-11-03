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
      <Text color="white" textAlign="center">Software Engineer & Artificial Intelligence Specialist </Text>
      
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
              Lake Worth, FL {isLargerThan48em ? "|" : ""}
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
              About me
          </Heading>
          <Text color="white" textAlign="center" mb={1}>I am driven by an intrinsic passion for tackling both creative and technical challenges. As part of agile development teams, I thrive on collaborating towards our shared mission: delivering exceptional value to clients efficiently and effectively. Before diving into the tech arena, I pursued an intensive graduate program at a top-tier university, focusing on the convergence of artificial intelligence and psychology. This academic journey endowed me with a unique lens: approaching AI development from a human-centric perspective and deeply understanding the nuanced ways people interact with technology. Beyond my academic pursuits, I am a perpetual learner, drawing from experiences that span leadership, creativity, problem-solving, and shepherding projects from mere ideas to successful execution.</Text>
        </motion.div>
        <motion.div ref={refEducation} initial="hidden" animate={inViewEducation ? "visible" : "hidden"} variants={fadeIn}>
          <Heading textAlign="left" color="white" fontSize="2xl" mb={2} mt={10}>
          Education
          </Heading>
          <Text color="white" mb={1} fontSize="2xl">
          Master of Science in Artificial Intelligence</Text>
          <Text color="white" mb={1}>Florida Atlantic University, Boca Raton, FL. Graduation date: December 2023</Text>
          <Text color="white" mb={1}>Cumulative GPA: 3.9</Text>

          <Text color="white" mb={1} fontSize="2xl">
          Bachelors of Arts in Psychology</Text>
          <Text color="white" mb={1}>Florida Atlantic University, Boca Raton, FL. Graduation date: May 2022</Text> 
        </motion.div>   

        <motion.div ref={refTechnicalSkills} initial="hidden" animate={inViewTechnicalSkills ? "visible" : "hidden"} variants={fadeIn}>
          <Heading textAlign="left" color="white" fontSize="2xl" mb={2} mt={10}>
          Tehcnical Skills
          </Heading>

          <Text color="white" mb={1} fontSize="2xl">
          Programming Languages</Text>
          <Text color="white" mb={1}>C/C++, GLSL, HTML, Python, JavaScript, typescript, R</Text>

          <Text color="white" mb={1} fontSize="2xl">
          Tools & Technologies</Text>
          <Text color="white" mb={1}>Docker, Postman, Colab, Microsoft Office Suite (Word, Excel, PowerPoint), Max MSP, VSCode, Pycharm, Soldering, DSP, Raspberry Pi, DAWs</Text>

          <Text color="white" mb={1} fontSize="2xl">
          Frameworks</Text>
          <Text color="white" mb={1}>Tensorflow, Pytorch, Pandas, Numpy, Sklearn, Matplotlib, Seaborn, React, React-Native, Chakra UI, Native-Base, Firebase, Next JS, Wavesurfer, RNBO JS
          </Text>

          <Text color="white" mb={1} fontSize="2xl">
          Operating Systems</Text>
          <Text color="white" mb={1}>Linux Ubuntu, Windows10, MacOS
          </Text>
        </motion.div>

        </Box>

        <motion.div ref={refProfessionalExperience} initial="hidden" animate={inViewProfessionalExperience ? "visible" : "hidden"} variants={fadeIn}>
          <Heading textAlign="left" color="white" fontSize="2xl" mb={2} mt={10}>
          Professional Experience
          </Heading>

          <Text color="white" mb={1} fontSize="2xl">
          Team Lead & Software Architect, AuthentiKid | California • Idaho • Florida</Text>
          <Text color="white" mb={1}>Development of robust AI systems suited for AuthentiKids business needs. Collaboration and management of a small team of developers, psychologists and business leaders.
          </Text>
          <Text color="white" mb={1}>
          ▪ Spearheaded the development of robust software systems tailored for AuthentiKids operational requirements, resulting
          in new AI powered security tools.
          </Text>
          <Text color="white" mb={1}>
          ▪ Managed a cross-functional team of developers, psychologists, and business leaders, fostering a collaborative environment
          and achieving a functional product.
          </Text>
          <Text color="white" mb={10}>
          ▪ Oversaw comprehensive data collection initiatives and AI model training processes, ensuring optimal performance and accuracy.
          </Text>

          <Text color="white" mb={1} fontSize="2xl">
          Graduate Research Trainee, National Science Foundation at FAU| Boca Raton, FL</Text>
          <Text color="white" mb={1}>Engaged in research, design and development for detection of ocular disease using CNNs and retinal photography.
          </Text>
          <Text color="white" mb={1}>
          ▪ Developed, and tested software for detecting ocular diseases with deep learning and medical images using Tensorflow.
          </Text>
          <Text color="white" mb={1}>
          ▪ Collaborated with professors and other graduate students on performing research and designing experiments.
          </Text>
          <Text color="white" mb={10}>
          ▪ Implemented a framework for a web based audio-visual solution.
          </Text>

          <Text color="white" mb={1} fontSize="2xl">
          Production & Development (Internship), Vector Climate | Pompano, FL</Text>
          <Text color="white" mb={1}>Worked with Vector Climate Labs to produce and develop the companies advanced mobile cooling systems.
          </Text>
          <Text color="white" mb={1}>
          ▪ Production and fabrication of the company’s flagship products, the Vector and Spartan for industrial outdoor climate control.
          </Text>
          <Text color="white" mb={10}>
          ▪ Collaborated with cross-functional teams for timely production and assembled PCB prototypes.
          </Text>

          <Text color="white" mb={1} fontSize="2xl">
          Freelance Software Engineering, Self | Lake Worth, FL</Text>
          <Text color="white" mb={1}>Independant contract work with a focus on software development. Services include web development, AI engineering and mobile applications.
          </Text>
          <Text color="white" mb={1}>
          ▪ Designed, developed and deployed a front and backend of a mobile app for hosting video content built to the technical needs and aesthetics tastes of the clients brand for both android and iOS devices.
          </Text>
          <Text color="white" mb={10}>
          ▪ Web based AI content moderation with the overarching goal of safeguarding children online. Used synthetic data generation techniques, trained and optimized classificaiton models, deployed the model on the web and designed a front end for user interaction with the model online.
          </Text>

          <Text color="white" mb={1} fontSize="2xl">
          PCB Design & Assembly, Steven Leone; PE LLC| Lake Worth, FL</Text>
          <Text color="white" mb={1}>Responsible for PCB assembly duties involving prototyping, unit test and functional test assigned by Project Manager.
          </Text>
          <Text color="white" mb={1}>
          ▪ Practiced standardized procedures for following schematics, spec and BOM sheets, which leads to efficient production of clients designs for timely product releases.
          </Text>
          <Text color="white" mb={1}>
          ▪ Engaged in onsite coordination, progress, planning, closeout, & quality control to add support to project development.
          </Text>
          <Text color="white" mb={1}>
          ▪ Soldering SMT and Thru Hole components on: PCBs, IC’s, microcontrollers, power electronics, FETs, diodes and resistors.
          Sizes included 0402, 0603, 0805 SMT resistors, capacitors, diodes, ESD components.
          </Text>
        </motion.div>

        <motion.div ref={refRelevantProjects} initial="hidden" animate={inViewRelevantProjects ? "visible" : "hidden"} variants={fadeIn}>
          <Heading textAlign="left" color="white" fontSize="2xl" mb={2} mt={10}>
          Relevant Projects
          </Heading>

          <Text color="white" mb={1} fontSize="2xl">
          Object Detection System on Social Media | Deep Learning</Text>
          <Text color="white" mb={1}>The goal of this project was to implement Convolutional Neural Network for detection of opiate related activity on Instagram.
          </Text>
          <Text color="white" mb={1}>        
          ▪ Designed a Convolutional Neural Network (CNN) leveraging computer vision techniques. Used web scraping post-training to analyze a vast number of images across the platform.
          </Text>
          <Text color="white" mb={1}>
          ▪ Worked closely with professors and colleagues to research, design, and systematize the detection mechanism.
          </Text>
          <Text color="white" mb={10}>
          ▪ The research findings are pendin gpublication, aiming to provide insights into online drug-related activities. This can potentially
          aid law enforcement agencies.
          </Text>

          <Text color="white" mb={1} fontSize="2xl">
          Web Based Audio-visual Platform | Web Audio & Graphics</Text>
          <Text color="white" mb={1}>
          ▪ Designed, built and tested CRUD web platform for my immersive art based side project. Including frameworks like Next.js, React, Chakra UI, Firebase, P5.js, RNBO.js and web audio.
          </Text>
          <LinkBox>
          <Text color="white" mb={1}>
                  Repo: <LinkOverlay as={Link} href="https://github.com/jacklion710/jacklions-website" isExternal>https://github.com/jacklion710/jacklions-website</LinkOverlay>
              </Text>
          </LinkBox>
          <LinkBox>
          <Text color="white" mb={1}>
                  Site: <LinkOverlay as={Link} href="https://jacklion.xyz" isExternal>https://jacklion.xyz</LinkOverlay>
              </Text>
          </LinkBox>
          <Text color="white" mb={1}>        
          ▪ Integration between RNBO.js, webaudio and p5.js for an interactive web based experience involving interactive audio and visual elements on a web browser.
          </Text>
          <Text color="white" mb={10}>
          ▪ Created a responsive UI using typescript for user friendly web based audio-visual experiences.
          </Text>

          <Text color="white" mb={1} fontSize="2xl">   
          MIDI Delay Plugin Development | Audio Development</Text>
          <Text color="white" mb={1}>
          Developed a unique algorithm for delaying signals in real-time using circular buffers as a function of a tuned MIDI note input in Max MSP.
          </Text>
          <Text color="white" mb={1}>        
          ▪ Built a plugin for use in electronic music production.
          </Text>
          <Text color="white" mb={1}>
          ▪ Implementation of user feedback before a product release.
          </Text>
          <Text color="white" mb={1}>
          ▪ Published devices online via gumroad.com:
          </Text>
          <LinkBox>
          <Text color="white" mb={1}>
                  <LinkOverlay as={Link} href="https://jacklion.gumroad.com/l/tunedelay?layout=profile" isExternal>https://jacklion.gumroad.com/l/tunedelay?layout=profile</LinkOverlay>
              </Text>
          </LinkBox>
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