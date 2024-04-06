import React from 'react';
import { Flex, Heading, Text, VStack, ChakraProvider, Image, Box, Code, useColorModeValue } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import { Helmet } from "react-helmet";
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CodeBlock from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default function MaxPatchVisualizer() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.33 } }
  };

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  const [navbarRef, navbarInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [headingRef, headingInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [footerRef, footerInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <ChakraProvider>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
      </Head>
      <Helmet>
        <title>Max Patches Are Actually JSON | Jacob Leone</title>
        <meta name="description" content="Explore the requirements and notes for the Max Patch Visualizer project by Jacob Leone. Learn about visualizing Max patches online." />
        <meta name="keywords" content="Max Patch Visualizer, Max MSP, Creative Coding, JSON, Web Tool" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Max Patches Are Actually JSON | Jacob Leone" />
        <meta property="og:description" content="Learn the requirements and notes for the upcoming Max Patch Visualizer project by Jacob Leone. Visualize Max patches online." />
        <meta property="og:url" content="https://jacobleone.tech/max-patch-visualizer" />
        <link rel="canonical" href="https://jacobleone.tech/max-patch-visualizer" />
      </Helmet>
      <Flex
        direction="column"
        minHeight="100vh"
        bg="gray.50"
        bgImage="url('/images/Circuit.jpeg')"
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        bgAttachment="fixed"
        style={{ fontFamily: '"Roboto Mono", monospace' }}
      >
        <motion.div ref={navbarRef} initial="hidden" animate={navbarInView ? "visible" : "hidden"} variants={fadeIn}>
          <Navbar />
        </motion.div>
        <VStack spacing={10} alignItems="center" justifyContent="flex-start" flexGrow={1} py={10} px={{ base: 4, md: 10 }}>
          <motion.div ref={headingRef} initial="hidden" animate={headingInView ? "visible" : "hidden"} variants={fadeIn}>
            <VStack>
              <Heading
                mb={4}
                size="2xl"
                position="relative"
                textShadow="0 0 5px teal, 0 0 10px teal, 0 0 15px teal, 0 0 20px teal"
                color="white"
                textAlign={'center'}
                _after={{
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '40vw',
                  borderBottom: `1px solid currentColor`,
                  borderColor: "black"
                }}
              >
                Max Patches Are Actually JSON
              </Heading>
            </VStack>
          </motion.div>
          <VStack spacing={6} alignItems="flex-start" maxW="800px" mx="auto">
            <Text fontSize="xl" textAlign={'center'}>
              <em>Describing the problem space for an upcoming web tool for visualizing Max patches online.</em>
            </Text>
            <Box
              bg="gray.500"
              borderRadius="md"
              boxShadow="md"
              p={8}
              maxW="90vw"
              mx="auto"
            >
            <Text textAlign={'center'} pb="40px">
              The purpose of this project is to provide a tool for users of Max MSP, a popular patching based environment for various multimedia programming tasks. It is a popular tool for creative coders who want a similar experience to coding with a ton of objects which many programmers will find familiar. They have lists, matrices, operators, etc... you can even write Javascript and use node in Max! If you want to learn more about Max its worth searching up but for the sake of these project this is all we need to know in order to understand what problem this project aims to solve.
            </Text>
            <Heading size="lg" textAlign={'center'}  pb="20px">Max Patches Are Really JSON</Heading>
            <Text  pb="40px">
              Even though Max is a visual node based patcher environment when a section of a patch is copied to the clipboard it is copied not as a JSON object which contains information thats used for reconstructing the copied patch when pasted back into max. However, if we copy and paste this into a text editor we can see the JSON object that represents the patch.
            </Text>
            <Heading size="md"  pb="20px">Single Max Object in JSON</Heading>
            <Image pb="20px" src="/images/max-json-article/single-cycle~.png" alt="Single cycle~ object" />
            <Text>
              In max we have access to a vast library for DSP and realtime control systems. One of the most basic things you can do with digital audio is to create a sine wave. In max we have the <Code>cycle~</Code> object for generating sine wave signals. Objects with the <Code>~</Code> are denoted as <strong>signal</strong> objects which means it is an object that deals with audio.
            </Text>
            <Text  pb="40px">
              If we create a single <Code>cycle~</Code> object and copy it, the resulting JSON looks like this:
            </Text>
            <CodeBlock
              language="json"
              style={vs2015}
              showLineNumbers
              wrapLines
              customStyle={{
                background: useColorModeValue('gray.400', 'gray.900'),
                padding: '1rem',
                borderRadius: '0.5rem',
                marginTop: '1rem',
                marginBottom: '1rem',
                color: "black"
              }}
              codeTagProps={{
                style: {
                  fontFamily: 'monospace',
                  fontSize: '0.9rem',
                },
              }}
              onDoubleClick={() =>
                handleCopy(
                  JSON.stringify(
                    {
                      boxes: [
                        {
                          box: {
                            maxclass: 'newobj',
                            text: 'cycle~',
                            id: 'obj-5',
                            numinlets: 2,
                            numoutlets: 1,
                            patching_rect: [402.666678667068481, 101.333336353302002, 43.0, 22.0],
                            outlettype: ['signal'],
                          },
                        },
                      ],
                      appversion: {
                        major: 8,
                        minor: 6,
                        revision: 2,
                        architecture: 'x64',
                        modernui: 1,
                      },
                      classnamespace: 'box',
                    },
                    null,
                    2
                  )
                )
              }
            >
              {JSON.stringify(
                {
                  boxes: [
                    {
                      box: {
                        maxclass: 'newobj',
                        text: 'cycle~',
                        id: 'obj-5',
                        numinlets: 2,
                        numoutlets: 1,
                        patching_rect: [402.666678667068481, 101.333336353302002, 43.0, 22.0],
                        outlettype: ['signal'],
                      },
                    },
                  ],
                  appversion: {
                    major: 8,
                    minor: 6,
                    revision: 2,
                    architecture: 'x64',
                    modernui: 1,
                  },
                  classnamespace: 'box',
                },
                null,
                2
              )}
            </CodeBlock>
            <Text  pt="40px"  pb="40px">
              The <Code>appversion</Code> contains metadata about the system and version used. Its not important for our application so we can simply disregard it. Likewise <Code>classnamespace</Code> is not important to us right now. Instead, turn your attention to the data under <Code>boxes</Code>. <Code>box</Code> key value associated with the <Code>boxes</Code> field are the objects we have copied from our patch. Currently there is only one but we will soon see an example with more. A <Code>box</Code> represents any single object and contains attributes which will vary depending on the object.
            </Text>
            <ul>
              <li>
                <strong>maxclass</strong>: Most regular objects will be labeled as <Code>newobj</Code> but widget objects like buttons and dials will simply contain the name of the object in this field.
              </li>
              <li>
                <strong>text</strong>: Whatever text is displayed within the objects starting with the objects name <Code>cycle~</Code> in this case. If an argument or attribute is present after the object name they will be included here. For example, if the user specifies <Code>440</Code> as an argument for <Code>cycle~</Code> then the text field would read <Code>cycle~ 440</Code>.
              </li>
              <li>
                <strong>id</strong>: Unique identifier for an object. Useful for differentiating between multiple objects with the same name.
              </li>
              <li>
                <strong>numinlets</strong>: The number of inlets present on the object.
              </li>
              <li>
                <strong>numoutlets</strong>: The number of inlets outlets on the object.
              </li>
              <li>
                <strong>patching_rect</strong>: Determines the position of the object in the window.
              </li>
              <li>
                <strong>outlettype</strong>: a list of the data type associated with each outlet. In this case there is only a single outlet of a <Code>signal</Code> type. If numoutlets is 0 then this field will not be present for that object. Regular data like integers, lists and symbols will be marked as <Code>&quot;&quot;</Code> for generic max messages, <Code>&quot;signal&quot;</Code> for audio signals or <Code>jit_matrix</Code> for matrices as well as sometimes <Code>&quot;multichannelsignal&quot;</Code> for multichannel audio.
              </li>
            </ul>
            <Heading size="md"  pt="40px" pb="20px">Simple Patch Connection in JSON</Heading>
            <Image pb="40px" src="/images/max-json-article/simple-connection.png" alt="Simple patch connection" />
            <Text pb="40px">
              If we create a second object and make a single patch connection from one object to another, we can observe some changes in our JSON. The <Code>dac~</Code> object uses your computers digital audio converter if available to play audio aloud.
            </Text>
            <CodeBlock
              language="json"
              style={vs2015}
              showLineNumbers
              wrapLines
              customStyle={{
                background: useColorModeValue('gray.400', 'gray.900'),
                padding: '1rem',
                borderRadius: '0.5rem',
                marginTop: '1rem',
                marginBottom: '1rem',
                color: 'black',
              }}
              codeTagProps={{
                style: {
                  fontFamily: 'monospace',
                  fontSize: '0.9rem',
                },
              }}
              onDoubleClick={() => {
                handleCopy(
                  JSON.stringify(
                    {
                      boxes: [
                        {
                          box: {
                            maxclass: 'newobj',
                            text: 'dac~',
                            id: 'obj-2',
                            numinlets: 2,
                            numoutlets: 0,
                            patching_rect: [308.666675865650177, 124.000003695487976, 35.0, 22.0],
                          },
                        },
                        {
                          box: {
                            maxclass: 'newobj',
                            text: 'cycle~ 440',
                            id: 'obj-1',
                            numinlets: 2,
                            numoutlets: 1,
                            patching_rect: [308.666675865650177, 89.000002652406693, 66.0, 22.0],
                            outlettype: ['signal'],
                          },
                        },
                      ],
                      lines: [
                        {
                          patchline: {
                            source: ['obj-1', 0],
                            destination: ['obj-2', 0],
                          },
                        },
                      ],
                      appversion: {
                        major: 8,
                        minor: 6,
                        revision: 2,
                        architecture: 'x64',
                        modernui: 1,
                      },
                      classnamespace: 'box',
                    },
                    null,
                    2
                  )
                );
              }}
            >
              {JSON.stringify(
                {
                  boxes: [
                    {
                      box: {
                        maxclass: 'newobj',
                        text: 'dac~',
                        id: 'obj-2',
                        numinlets: 2,
                        numoutlets: 0,
                        patching_rect: [308.666675865650177, 124.000003695487976, 35.0, 22.0],
                      },
                    },
                    {
                      box: {
                        maxclass: 'newobj',
                        text: 'cycle~ 440',
                        id: 'obj-1',
                        numinlets: 2,
                        numoutlets: 1,
                        patching_rect: [308.666675865650177, 89.000002652406693, 66.0, 22.0],
                        outlettype: ['signal'],
                      },
                    },
                  ],
                  lines: [
                    {
                      patchline: {
                        source: ['obj-1', 0],
                        destination: ['obj-2', 0],
                      },
                    },
                  ],
                  appversion: {
                    major: 8,
                    minor: 6,
                    revision: 2,
                    architecture: 'x64',
                    modernui: 1,
                  },
                  classnamespace: 'box',
                },
                null,
                2
              )}
            </CodeBlock>
            <Heading pt="40px" pb="20px" size="sm">Multiple Boxes</Heading>
            <Text pb="40px">
              In the patch above we can see there are now two fields called <Code>box</Code>. As described in the previous example, the properties within these fields tell us information about the object associated with that <Code>box</Code>. The only difference now is that we have multiple. There is theoretically no limit to the number of boxes you can spawn in a patch.
            </Text>
            <Heading pb="20px" size="sm">Patch Connections</Heading>
            <Text pb="40px">
              Parallel to the <Code>boxes</Code> field are the <Code>lines</Code>. Lines refer to the patch cables that connect one object to another. Specifically what inlets. Many <Code>patchline</Code>s may be present but in our case we only have one for demonstration. Each <Code>patchline</Code> contains a <Code>source</Code> and <Code>destination</Code> attribute to demark the inlets and outlets that the <Code>patchline</Code> connects.
            </Text>
            <ul>
              <li>
                <strong>source</strong>: A list with the first element being the <Code>id</Code> of the object where the patchline originates from and the second element being an index referring to the outlet where the connection propagates data from (left to right).
              </li>
              <li>
                <strong>destination</strong>: Similar to source except the destination is where the <Code>patchline</Code> connects to with the second element being an index representing the inlets from left to right.
              </li>
            </ul>
            <Text pb="40px">
              We will discuss another example with multiple patchlines soon. But first we have a few more things to cover.
            </Text>
            <Heading pb="20px" size="md">A Quick Note on Data Flow in Max</Heading>
            <Text pb="40px">
              Any respectable max patch will consist of extensive patch connected. Essentially we are connecting nodes in a graph. The way data flows in max is fascinating as it pertains to path finding algorithms such as Depth First Search (DFS) and Breadth First Search (BFS). If you are interested in learning more about how the order of data flows between objects with patch cables this <a href="https://www.youtube.com/watch?v=OnwmVuHxm30">video</a> can walk you through the flow. It is not necessary to follow along.
            </Text>
            <Heading pb="20px" size="md">Widget Objects</Heading>
            <Text pb="40px">
              Max has a special category of objects for UI and interactivity. We usually just call them widgets. We have many different kinds at our disposal but some common ones include <Code>slider</Code>, <Code>number</Code>, <Code>button</Code> and <Code>live.dial</Code> all pictured below.
            </Text>
            <Image pb="40px" src="/images/max-json-article/widgets.png" alt="Widget objects" />
            <Text pb="40px">
              These objects do not look that different from our usual JSON representation save for a few minor differences which we will now go over.
            </Text>
            <CodeBlock
              language="json"
              style={vs2015}
              showLineNumbers
              wrapLines
              customStyle={{
                background: useColorModeValue('gray.400', 'gray.900'),
                padding: '1rem',
                borderRadius: '0.5rem',
                marginTop: '1rem',
                marginBottom: '1rem',
                color: 'black',
              }}
              codeTagProps={{
                style: {
                  fontFamily: 'monospace',
                  fontSize: '0.9rem',
                },
              }}
              onDoubleClick={() => {
                handleCopy(
                  JSON.stringify(
                    {
                      boxes: [
                        {
                          box: {
                            maxclass: 'slider',
                            id: 'obj-19',
                            parameter_enable: 0,
                            numinlets: 1,
                            numoutlets: 1,
                            patching_rect: [236.333340376615524, 60.500001445412636, 104.66666978597641, 34.333334356546402],
                            outlettype: [''],
                          },
                        },
                        {
                          box: {
                            maxclass: 'number',
                            id: 'obj-17',
                            parameter_enable: 0,
                            numinlets: 1,
                            numoutlets: 2,
                            patching_rect: [363.000010818243027, 66.666668623685837, 50.0, 22.0],
                            outlettype: ['', 'bang'],
                          },
                        },
                        {
                          box: {
                            maxclass: 'button',
                            id: 'obj-15',
                            parameter_enable: 0,
                            numinlets: 1,
                            numoutlets: 1,
                            patching_rect: [431.666679531335831, 65.666668623685837, 24.0, 24.0],
                            outlettype: ['bang'],
                          },
                        },
                        {
                          box: {
                            maxclass: 'live.dial',
                            varname: 'live.dial',
                            id: 'obj-11',
                            parameter_enable: 1,
                            numinlets: 1,
                            numoutlets: 2,
                            patching_rect: [480.666680991649628, 48.329999999999984, 41.0, 48.0],
                            outlettype: ['', 'float'],
                            saved_attribute_attributes: {
                              valueof: {
                                parameter_longname: 'live.dial',
                                parameter_modmode: 3,
                                parameter_shortname: 'live.dial',
                                parameter_type: 0,
                                parameter_unitstyle: 0,
                              },
                            },
                          },
                        },
                      ],
                      appversion: {
                        major: 8,
                        minor: 6,
                        revision: 2,
                        architecture: 'x64',
                        modernui: 1,
                      },
                      classnamespace: 'box',
                    },
                    null,
                    2
                  )
                );
              }}
            >
              {JSON.stringify(
                {
                  boxes: [
                    {
                      box: {
                        maxclass: 'slider',
                        id: 'obj-19',
                        parameter_enable: 0,
                        numinlets: 1,
                        numoutlets: 1,
                        patching_rect: [236.333340376615524, 60.500001445412636, 104.66666978597641, 34.333334356546402],
                        outlettype: [''],
                      },
                    },
                    {
                      box: {
                        maxclass: 'number',
                        id: 'obj-17',
                        parameter_enable: 0,
                        numinlets: 1,
                        numoutlets: 2,
                        patching_rect: [363.000010818243027, 66.666668623685837, 50.0, 22.0],
                        outlettype: ['', 'bang'],
                      },
                    },
                    {
                      box: {
                        maxclass: 'button',
                        id: 'obj-15',
                        parameter_enable: 0,
                        numinlets: 1,
                        numoutlets: 1,
                        patching_rect: [431.666679531335831, 65.666668623685837, 24.0, 24.0],
                        outlettype: ['bang'],
                      },
                    },
                    {
                      box: {
                        maxclass: 'live.dial',
                        varname: 'live.dial',
                        id: 'obj-11',
                        parameter_enable: 1,
                        numinlets: 1,
                        numoutlets: 2,
                        patching_rect: [480.666680991649628, 48.329999999999984, 41.0, 48.0],
                        outlettype: ['', 'float'],
                        saved_attribute_attributes: {
                          valueof: {
                            parameter_longname: 'live.dial',
                            parameter_modmode: 3,
                            parameter_shortname: 'live.dial',
                            parameter_type: 0,
                            parameter_unitstyle: 0,
                          },
                        },
                      },
                    },
                  ],
                  appversion: {
                    major: 8,
                    minor: 6,
                    revision: 2,
                    architecture: 'x64',
                    modernui: 1,
                  },
                  classnamespace: 'box',
                },
                null,
                2
              )}
            </CodeBlock>
            <Text pt="20px" pb="40px">
              As you can see, the <Code>maxclass</Code> attribute now contains the actual name of the widget object instance. Although we can still see the name in the <Code>text</Code> field, by evaluating whether the value for <Code>maxclass</Code> is <Code>newobj</Code> or something else, we can determine whether we are dealing with a generic object or a widget object. Additionally, objects whose methods and objects fall under the <Code>live</Code> class have additional properties under <Code>saved_attribute_attributes</Code> which we can ignore for this project.
            </Text>
            <Heading pb="20px" size="md">Complex Patches</Heading>
            <Text pb="40px">
              Now we are ready to see a patch we might be more likely to encounter in the wild. Although not as extensive as most devices in production, it is a snippet that represents a realistic scenario with multiple objects and patch connections.
            </Text>
            <Image pb="40px" src="/images/max-json-article/widget+complex patch.png" alt="Complex patch with widgets" />
            <Text pb="40px">
              In the image above we connect the outlet of <Code>live.dial</Code> (which sends lets users select a number to output with a dial) to the left inlet of a <Code>+</Code> object with an argument of **50** and the left inlet of a <Code>cycle~</Code> object as well. The outlet of <Code>+</Code> connects to the left inlet of a second <Code>cycle~</Code> object. Both <Code>cycle~</Code> objects finally connect to each the left and right inlets of <Code>~dac</Code> respectively. It is just a shoddy pitchable oscillator where the right speaker always plays a sine wave 50 hz above the left as determined by the dials value. Its not a very realistic patch in a sound designer sense but is valid and realistic enough that it will help us gain insight into the JSON structure of a patch that features multiple objects and connections.
            </Text>
            <CodeBlock
              language="json"
              style={vs2015}
              showLineNumbers
              wrapLines
              customStyle={{
                background: useColorModeValue('gray.400', 'gray.900'),
                padding: '1rem',
                borderRadius: '0.5rem',
                marginTop: '1rem',
                marginBottom: '1rem',
                color: 'black',
              }}
              codeTagProps={{
                style: {
                  fontFamily: 'monospace',
                  fontSize: '0.9rem',
                },
              }}
              onDoubleClick={() => {
                handleCopy(
                  JSON.stringify(
                    {
                      "boxes": [
                        {
                          "box": {
                            "maxclass": "newobj",
                            "text": "+ 50",
                            "id": "obj-22",
                            "numinlets": 2,
                            "numoutlets": 1,
                            "patching_rect": [358.333344012498856, 128.333337157964706, 32.0, 22.0],
                            "outlettype": ["int"]
                          }
                        },
                        {
                          "box": {
                            "maxclass": "newobj",
                            "text": "cycle~",
                            "id": "obj-21",
                            "numinlets": 2,
                            "numoutlets": 1,
                            "patching_rect": [358.333344012498856, 158.666671395301819, 43.0, 22.0],
                            "outlettype": ["signal"]
                          }
                        },
                        {
                          "box": {
                            "maxclass": "live.dial",
                            "varname": "live.dial",
                            "id": "obj-11",
                            "parameter_enable": 1,
                            "numinlets": 1,
                            "numoutlets": 2,
                            "patching_rect": [277.000008255243301, 51.000001519918442, 41.0, 48.0],
                            "outlettype": ["", "float"],
                            "saved_attribute_attributes": {
                              "valueof": {
                                "parameter_longname": "live.dial",
                                "parameter_modmode": 3,
                                "parameter_shortname": "live.dial",
                                "parameter_type": 0,
                                "parameter_unitstyle": 0
                              }
                            }
                          }
                        },
                        {
                          "box": {
                            "maxclass": "newobj",
                            "text": "dac~",
                            "id": "obj-2",
                            "numinlets": 2,
                            "numoutlets": 0,
                            "patching_rect": [277.000008255243301, 209.666672915220261, 35.0, 22.0]
                          }
                        },
                        {
                          "box": {
                            "maxclass": "newobj",
                            "text": "cycle~",
                            "id": "obj-1",
                            "numinlets": 2,
                            "numoutlets": 1,
                            "patching_rect": [277.000008255243301, 158.666671395301819, 43.0, 22.0],
                            "outlettype": ["signal"]
                          }
                        }
                      ],
                      "lines": [
                        {
                          "patchline": {
                            "source": ["obj-21", 0],
                            "destination": ["obj-2", 1]
                          }
                        },
                        {
                          "patchline": {
                            "source": ["obj-22", 0],
                            "destination": ["obj-21", 0]
                          }
                        },
                        {
                          "patchline": {
                            "source": ["obj-11", 0],
                            "destination": ["obj-22", 0],
                            "order": 0
                          }
                        },
                        {
                          "patchline": {
                            "source": ["obj-1", 0],
                            "destination": ["obj-2", 0]
                          }
                        },
                        {
                          "patchline": {
                            "source": ["obj-11", 0],
                            "destination": ["obj-1", 0],
                            "order": 1
                          }
                        }
                      ],
                      "appversion": {
                        "major": 8,
                        "minor": 6,
                        "revision": 2,
                        "architecture": "x64",
                        "modernui": 1
                      },
                      "classnamespace": "box"
                    },
                    null,
                    2
                  )
                );
              }}
            >
              {JSON.stringify(
                {
                  "boxes": [
                    {
                      "box": {
                        "maxclass": "newobj",
                        "text": "+ 50",
                        "id": "obj-22",
                        "numinlets": 2,
                        "numoutlets": 1,
                        "patching_rect": [358.333344012498856, 128.333337157964706, 32.0, 22.0],
                        "outlettype": ["int"]
                      }
                    },
                    {
                      "box": {
                        "maxclass": "newobj",
                        "text": "cycle~",
                        "id": "obj-21",
                        "numinlets": 2,
                        "numoutlets": 1,
                        "patching_rect": [358.333344012498856, 158.666671395301819, 43.0, 22.0],
                        "outlettype": ["signal"]
                      }
                    },
                    {
                      "box": {
                        "maxclass": "live.dial",
                        "varname": "live.dial",
                        "id": "obj-11",
                        "parameter_enable": 1,
                        "numinlets": 1,
                        "numoutlets": 2,
                        "patching_rect": [277.000008255243301, 51.000001519918442, 41.0, 48.0],
                        "outlettype": ["", "float"],
                        "saved_attribute_attributes": {
                          "valueof": {
                            "parameter_longname": "live.dial",
                            "parameter_modmode": 3,
                            "parameter_shortname": "live.dial",
                            "parameter_type": 0,
                            "parameter_unitstyle": 0
                          }
                        }
                      }
                    },
                    {
                      "box": {
                        "maxclass": "newobj",
                        "text": "dac~",
                        "id": "obj-2",
                        "numinlets": 2,
                        "numoutlets": 0,
                        "patching_rect": [277.000008255243301, 209.666672915220261, 35.0, 22.0]
                      }
                    },
                    {
                      "box": {
                        "maxclass": "newobj",
                        "text": "cycle~",
                        "id": "obj-1",
                        "numinlets": 2,
                        "numoutlets": 1,
                        "patching_rect": [277.000008255243301, 158.666671395301819, 43.0, 22.0],
                        "outlettype": ["signal"]
                      }
                    }
                  ],
                  "lines": [
                    {
                      "patchline": {
                        "source": ["obj-21", 0],
                        "destination": ["obj-2", 1]
                      }
                    },
                    {
                      "patchline": {
                        "source": ["obj-22", 0],
                        "destination": ["obj-21", 0]
                      }
                    },
                    {
                      "patchline": {
                        "source": ["obj-11", 0],
                        "destination": ["obj-22", 0],
                        "order": 0
                      }
                    },
                    {
                      "patchline": {
                        "source": ["obj-1", 0],
                        "destination": ["obj-2", 0]
                      }
                    },
                    {
                      "patchline": {
                        "source": ["obj-11", 0],
                        "destination": ["obj-1", 0],
                        "order": 1
                      }
                    }
                  ],
                  "appversion": {
                    "major": 8,
                    "minor": 6,
                    "revision": 2,
                    "architecture": "x64",
                    "modernui": 1
                  },
                  "classnamespace": "box"
                },
                null,
                2
              )}
            </CodeBlock>
            <Text pt="20px" pb="40px">
              There is not much we have not already discussed going on in the JSON structure above. The biggest difference being the fact that now there are a handful of additional objects and patchlines. If you look closely at the patchlines and follow along with the id values and visually inspect the screenshot you can see that it tracks. Notice the <Code>order</Code> attribute though? This informs us of what order we will be sending out data from two patch cables that spawn from the same source. This is another attribute that we will not be using for our use case but can come in handy for debugging as often it is tricky to determine the order of operations in Max. A good rule of thumb is that messages flow in order from rightmost outlets to left. *See linked resource from earlier on data flow for more info*.
            </Text>
            <Heading pb="20px" size="md">Nested Subpatchers</Heading>
            <Text pb="40px">
              Sometimes we will encounter nested structures in a max patch. The most basic kind is the <Code>subpatcher</Code> aka <Code>p</Code>, an object which encapsulates portions of a patch. There are other similar ones, the closest relative being <Code>bpatcher</Code>, a subpatcher which features a see through window for encapsulating UI components as opposed to simply raw objects. There are also <Code>poly~</Code>, <Code>fft~</Code>, <Code>~rnbo</Code> and more but these complicate things so for now we do not care about them.
            </Text>
            <Image pb="40px" src="/images/max-json-article/subpatcher.png" alt="Subpatcher" />
            <Text pb="40px">
              In this example, we have a simple subpatcher <Code>p</Code> called *subpatcher* which contains a single <Code>cycle~</Code> object inside. Below we can see the <Code>patcher</Code> field which contains more information about the patch including its enclosed JSON subpatch objects and their connections. Since we are only rendering the <Code>p</Code> object and its text we do not care about the contents of <Code>patcher</Code> for now. It is worth checking the <Code>numinlet</Code> and <Code>numoutlet</Code> attributes because subpatchers can have a varied number of inlets and outlets for connecting encapsulated patches with their parent patches depending on the user&apos;s design. There are a handful of objects whose behavior, display and expected inputs are versatile.
            </Text>
            <Heading pb="20px" size="md">Subpatchers Within Subpatchers</Heading>
            <Text pb="40px">
              Subpatchers may be many layers deep Here is an example of JSON for a subpatcher with several layers of subpatcher nesting. See if you can spot the innermost object and its text!
            </Text>
            <CodeBlock
              language="json"
              style={vs2015}
              showLineNumbers
              wrapLines
              customStyle={{
                background: useColorModeValue('gray.400', 'gray.900'),
                padding: '1rem',
                borderRadius: '0.5rem',
                marginTop: '1rem',
                marginBottom: '1rem',
                color: 'black',
              }}
              codeTagProps={{
                style: {
                  fontFamily: 'monospace',
                  fontSize: '0.9rem',
                },
              }}
            >
            {JSON.stringify(
              {
                "boxes": [
                  {
                    "box": {
                      "maxclass": "newobj",
                      "text": "p subpatcher",
                      "id": "obj-26",
                      "numinlets": 0,
                      "numoutlets": 0,
                      "patching_rect": [498.000014841556549, 143.333337604999542, 78.0, 22.0],
                      "patcher": {
                        "fileversion": 1,
                        "appversion": {
                          "major": 8,
                          "minor": 6,
                          "revision": 2,
                          "architecture": "x64",
                          "modernui": 1
                        },
                        "classnamespace": "box",
                        "rect": [59.0, 81.0, 640.0, 480.0],
                        "bglocked": 0,
                        "openinpresentation": 0,
                        "default_fontsize": 12.0,
                        "default_fontface": 0,
                        "default_fontname": "Arial",
                        "gridonopen": 1,
                        "gridsize": [15.0, 15.0],
                        "gridsnaponopen": 1,
                        "objectsnaponopen": 1,
                        "statusbarvisible": 2,
                        "toolbarvisible": 1,
                        "lefttoolbarpinned": 0,
                        "toptoolbarpinned": 0,
                        "righttoolbarpinned": 0,
                        "bottomtoolbarpinned": 0,
                        "toolbars_unpinned_last_save": 0,
                        "tallnewobj": 0,
                        "boxanimatetime": 200,
                        "enablehscroll": 1,
                        "enablevscroll": 1,
                        "devicewidth": 0.0,
                        "description": "",
                        "digest": "",
                        "tags": "",
                        "style": "",
                        "subpatcher_template": "",
                        "assistshowspatchername": 0,
                        "boxes": [
                          {
                            "box": {
                              "maxclass": "newobj",
                              "text": "p inner-subpatcher",
                              "id": "obj-4",
                              "numinlets": 0,
                              "numoutlets": 0,
                              "patching_rect": [141.0, 237.0, 109.0, 22.0],
                              "patcher": {
                                "fileversion": 1,
                                "appversion": {
                                  "major": 8,
                                  "minor": 6,
                                  "revision": 2,
                                  "architecture": "x64",
                                  "modernui": 1
                                },
                                "classnamespace": "box",
                                "rect": [84.0, 106.0, 640.0, 480.0],
                                "bglocked": 0,
                                "openinpresentation": 0,
                                "default_fontsize": 12.0,
                                "default_fontface": 0,
                                "default_fontname": "Arial",
                                "gridonopen": 1,
                                "gridsize": [15.0, 15.0],
                                "gridsnaponopen": 1,
                                "objectsnaponopen": 1,
                                "statusbarvisible": 2,
                                "toolbarvisible": 1,
                                "lefttoolbarpinned": 0,
                                "toptoolbarpinned": 0,
                                "righttoolbarpinned": 0,
                                "bottomtoolbarpinned": 0,
                                "toolbars_unpinned_last_save": 0,
                                "tallnewobj": 0,
                                "boxanimatetime": 200,
                                "enablehscroll": 1,
                                "enablevscroll": 1,
                                "devicewidth": 0.0,
                                "description": "",
                                "digest": "",
                                "tags": "",
                                "style": "",
                                "subpatcher_template": "",
                                "assistshowspatchername": 0,
                                "visible": 1,
                                "boxes": [
                                  {
                                    "box": {
                                      "maxclass": "newobj",
                                      "text": "p inner-subpatcher-deep",
                                      "id": "obj-1",
                                      "numinlets": 0,
                                      "numoutlets": 0,
                                      "patching_rect": [169.0, 203.0, 139.0, 22.0],
                                      "patcher": {
                                        "fileversion": 1,
                                        "appversion": {
                                          "major": 8,
                                          "minor": 6,
                                          "revision": 2,
                                          "architecture": "x64",
                                          "modernui": 1
                                        },
                                        "classnamespace": "box",
                                        "rect": [109.0, 131.0, 640.0, 480.0],
                                        "bglocked": 0,
                                        "openinpresentation": 0,
                                        "default_fontsize": 12.0,
                                        "default_fontface": 0,
                                        "default_fontname": "Arial",
                                        "gridonopen": 1,
                                        "gridsize": [15.0, 15.0],
                                        "gridsnaponopen": 1,
                                        "objectsnaponopen": 1,
                                        "statusbarvisible": 2,
                                        "toolbarvisible": 1,
                                        "lefttoolbarpinned": 0,
                                        "toptoolbarpinned": 0,
                                        "righttoolbarpinned": 0,
                                        "bottomtoolbarpinned": 0,
                                        "toolbars_unpinned_last_save": 0,
                                        "tallnewobj": 0,
                                        "boxanimatetime": 200,
                                        "enablehscroll": 1,
                                        "enablevscroll": 1,
                                        "devicewidth": 0.0,
                                        "description": "",
                                        "digest": "",
                                        "tags": "",
                                        "style": "",
                                        "subpatcher_template": "",
                                        "assistshowspatchername": 0,
                                        "visible": 1,
                                        "boxes": [
                                          {
                                            "box": {
                                              "maxclass": "comment",
                                              "text": "I am a helpful comment",
                                              "id": "obj-2",
                                              "numinlets": 1,
                                              "numoutlets": 0,
                                              "patching_rect": [320.0, 194.0, 150.0, 20.0]
                                            }
                                          }
                                        ],
                                        "lines": []
                                      },
                                      "saved_object_attributes": {
                                        "description": "",
                                        "digest": "",
                                        "globalpatchername": "",
                                        "tags": ""
                                      }
                                    }
                                  }
                                ],
                                "lines": []
                              },
                              "saved_object_attributes": {
                                "description": "",
                                "digest": "",
                                "globalpatchername": "",
                                "tags": ""
                              }
                            }
                          }
                        ],
                        "lines": []
                      },
                      "saved_object_attributes": {
                        "description": "",
                        "digest": "",
                        "globalpatchername": "",
                        "tags": ""
                      }
                    }
                  }
                ],
                "appversion": {
                  "major": 8,
                  "minor": 6,
                  "revision": 2,
                  "architecture": "x64",
                  "modernui": 1
                },
                "classnamespace": "box"
              }, null, 2)}
            </CodeBlock>
            <Heading pt="40px" pb="20px" size="md">Other Destinations</Heading>
            <Text>
              In part 2 we will learn how to parse Max JSON in order to represent a patch accurately in the browser. This could pave the way for more user friendly ways of sharing patches. It could be helpful for the max discord community to be able to simply copy and paste patches directly into discord using commands like <Code>/patch PATCH_JSON</Code> to dynamically share patches on the fly. Although screenshots are convenitent alternatives to JSON, they do not contain the patch itself and therefore they do not allow for easy transmission of patches. A visualizer tool that both displays the graph network of objects as well as carries the JSON data offers a superior way of sharing patches if it can be bundled into a user friendly bot for discord. This may be a worthwhile pursuit for a future version if enough interest is shown. 
            </Text>
            <Heading pt="40px" pb="20px" size="md">Contributions</Heading>
            <Text pb="40px">
              Currently I am working on this independantly as a personal project for <a href="https://boot.dev">boot.dev</a>. Once I have fulfilled the requirements for the project on my own and have obtained an MVP I will open things up for open source contributions.
            </Text>
            </Box>
          </VStack>
        </VStack>
        <motion.div ref={footerRef} initial="hidden" animate={footerInView ? "visible" : "hidden"} variants={fadeIn}>
          <Footer />
        </motion.div>
      </Flex>
    </ChakraProvider>
  );
}
