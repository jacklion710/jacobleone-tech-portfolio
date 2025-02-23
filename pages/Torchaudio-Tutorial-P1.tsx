import React from 'react';
import { Flex, Heading, Text, VStack, ChakraProvider, Image, Box, Code, useColorModeValue, IconButton, useClipboard, useToast } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import { Helmet } from "react-helmet";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CodeBlock from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { CopyIcon } from '@chakra-ui/icons';

interface CodeBlockWithCopyProps {
  code: string;
  language: string;
}

const CodeBlockWithCopy: React.FC<CodeBlockWithCopyProps> = ({ code, language }) => {
  const { hasCopied, onCopy } = useClipboard(code);
  const toast = useToast();

  const handleCopy = () => {
    onCopy();
    toast({
      title: "Code copied",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box position="relative">
      <IconButton
        aria-label="Copy code"
        icon={<CopyIcon />}
        size="sm"
        position="absolute"
        top={2}
        right={2}
        onClick={handleCopy}
        zIndex={2}
        colorScheme="gray"
        _hover={{ bg: 'gray.600' }}
      />
      <CodeBlock
        language={language}
        style={vs2015}
        customStyle={{
          background: 'black',
          padding: '1rem',
          borderRadius: '0.5rem',
          marginBottom: '1rem',
          marginTop: '1rem',
          boxShadow: '0 0 10px rgba(0,0,0,0.5)',
          color: 'white'
        }}
        codeTagProps={{
          style: {
            fontFamily: 'monospace',
            fontSize: '0.9rem',
          },
        }}
      >
        {code}
      </CodeBlock>
    </Box>
  );
};

export default function TorchaudioTutorialP1() {
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
      <Helmet>
        <title>Torchaudio Study Project Part 1 | Jacob Leone</title>
        <meta name="description" content="Learn about audio processing and classification using PyTorch and torchaudio through a series of practical lessons." />
        <meta name="keywords" content="Torchaudio, PyTorch, Audio Processing, Machine Learning, Deep Learning" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Torchaudio Study Project Part 1 | Jacob Leone" />
        <meta property="og:description" content="Explore audio processing and classification using PyTorch and torchaudio through hands-on lessons." />
        <meta property="og:url" content="https://jacobleone.tech/Torchaudio-Tutorial-P1" />
        <link rel="canonical" href="https://jacobleone.tech/Torchaudio-Tutorial-P1" />
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
                Torchaudio Study Project Part 1
              </Heading>
            </VStack>
          </motion.div>
          <VStack spacing={6} alignItems="flex-start" maxW="800px" mx="auto">
            <Text fontSize="xl" textAlign={'center'}>
              <em>A comprehensive guide to audio processing and classification using PyTorch and torchaudio.</em>
            </Text>
            <Box
              bg="gray.500"
              borderRadius="md"
              boxShadow="md"
              p={8}
              maxW="90vw"
              mx="auto"
              color="white"
            >
              <Text textAlign={'center'} pb="40px">
                This project provides a structured approach to learning audio processing and classification using PyTorch and torchaudio. Through a series of lessons, you&apos;ll progress from basic audio handling to deploying audio models for real-world applications.
              </Text>

              <Heading size="md" pb="20px">Project Overview</Heading>
              <Text pb="40px">
                In this installment of my Torchaudio Study Project, I&apos;ll be taking you through the basics of audio processing and classification using PyTorch and torchaudio. The project is split into 7 lessons, each one building on the previous one. In this blog artile we will present lesssons 1 through 4 where we will build a basic audio classification model. You can follow along with the project on this blog but I recommend cloning the repository and running the code yourself. You can find it <a href="https://github.com/jacklion710/torchaudio-basics">here</a>. First we&apos;ll kick things off by setting up a conda environment and installing the necessary dependencies.
              </Text>
              
              <Heading size="md" pb="20px">Dataset</Heading>
              <Text pb="40px">
                We&apos;ll be using the UrbanSound8K dataset, which contains 8732 labeled sound excerpts of urban sounds from 10 classes. The dataset is pre-sorted into ten folds for cross-validation and experimentation. You can find it <a href="https://urbansounddataset.weebly.com/urbansound8k.html">here</a>.
              </Text>

              <Heading size="md" pb="20px">Lessons Overview</Heading>
              
              <Heading size="sm" pt="40px" pb="20px">Lesson 1: Introduction to PyTorch</Heading>
              <Text pb="40px">
                Learn PyTorch&apos;s fundamentals, including tensors, operations, and computational graphs.
              </Text>

              <Heading size="md" pt="40px" pb="20px">PyTorch GPU Setup</Heading>
              <Text pb="20px">
                Setting up PyTorch with GPU support requires specific steps. Here&apos;s how to get started:
              </Text>

              <Text pb="20px">Initialize conda environment (requires Python 3.7+):</Text>
              <CodeBlockWithCopy
                language="bash"
                code="conda create -n torch-study python=3.8"
              />

              <Heading size="md" pt="40px" pb="20px">Additional Dependencies</Heading>
              <Text pb="20px">
                Some lessons require additional Python packages. Install them using conda:
              </Text>
              <CodeBlockWithCopy
                language="bash"
                code="conda install matplotlib seaborn pandas flask tqdm"
              />

              <Heading size="lg" pt="60px" pb="20px">Lesson 1: Introduction to PyTorch Fundamentals</Heading>
              <Text pb="40px">
                Welcome to the first lesson in our series on audio processing with PyTorch. We&apos;ll explore the basics of PyTorch, including tensors, operations, and core concepts that make it essential for machine learning and audio processing.
              </Text>

              <Heading size="md" pb="20px">What is PyTorch?</Heading>
              <Text pb="40px">
                PyTorch is an open-source machine learning library developed by Facebook&apos;s AI Research lab. It provides a flexible and intuitive framework for building and training neural networks, with a strong focus on deep learning.
              </Text>

              <Heading size="md" pb="20px">Getting Started with Tensors</Heading>
              <Text pb="20px">
                Let&apos;s start with creating and manipulating tensors, the fundamental building blocks in PyTorch:
              </Text>

              <CodeBlockWithCopy
                language="python"
                code={`import torch

# Create a tensor
x = torch.tensor([1, 2, 3])
print("Tensor:", x)

# Basic operations
y = x + x
print("Tensor addition:", y)

# Element-wise multiplication
z = x * x
print("Element-wise multiplication:", z)`}
              />

              <Heading size="md" pt="40px" pb="20px">Advanced Tensor Operations</Heading>
              <Text pb="20px">
                Let&apos;s explore more complex tensor operations that are particularly useful in audio processing:
              </Text>

              <CodeBlockWithCopy
                language="python"
                code={`# Flattening tensors
x = torch.tensor([[1, 2, 3], [4, 5, 6]])
flat_x = x.flatten()
print("Flattened Tensor:", flat_x)

# Broadcasting example
a = torch.tensor([1, 2, 3])
b = torch.tensor([[0], [1], [2]])
result = a + b
print("Broadcasted Addition:", result)`}
              />

              <Heading size="md" pt="40px" pb="20px">Working with Audio Data</Heading>
              <Text pb="20px">
                Understanding how to handle audio data in PyTorch is crucial. Here&apos;s how to work with mono and stereo audio:
              </Text>

              <CodeBlockWithCopy
                language="python"
                code={`# Example of stereo and mono audio tensors
stereo_audio = torch.rand(2, 48000)  # Stereo: [2, samples]
print("Stereo audio tensor shape:", stereo_audio.shape)

mono_audio = torch.rand(48000)    # Mono: [samples]
print("Mono audio tensor shape:", mono_audio.shape)

# Converting stereo to mono
mono_converted = torch.mean(stereo_audio, dim=0)
print("Converted mono shape:", mono_converted.shape)`}
              />

              <Text pt="40px" pb="40px">
                This concludes our first lesson on PyTorch fundamentals. In the next lesson, we&apos;ll explore more advanced audio processing techniques and how to apply these concepts to real-world audio data.
              </Text>

              <Heading size="md" pt="40px" pb="20px">Acknowledgments</Heading>
              <Text pb="40px">
                This project uses the UrbanSound8K dataset for demonstrating audio processing and classification techniques with PyTorch and torchaudio.
              </Text>

              <Heading size="lg" pt="60px" pb="20px">Lesson 2: Working with Audio Data in PyTorch</Heading>
              <Text pb="40px">
                In this lesson, we dive into how to work with audio data using torchaudio, an extension for PyTorch designed to handle audio processing with the same flexibility and efficiency as PyTorch does for computer vision and natural language processing.
              </Text>

              <Heading size="md" pb="20px">Getting Started with torchaudio</Heading>
              <Text pb="40px">
                torchaudio complements PyTorch by providing efficient, GPU-accelerated audio processing functionalities. It supports loading, transforming, and saving audio files. Before we start, make sure torchaudio is installed in your environment.
              </Text>

              <Heading size="md" pb="20px">Loading an Audio File</Heading>
              <Text pb="20px">
                The first step in audio processing is to load an audio file. torchaudio makes this easy with its load function:
              </Text>

              <CodeBlockWithCopy
                language="python"
                code={`import torchaudio

filename = '../../audio/obsc.wav'  # Replace with your audio file path
waveform, sample_rate = torchaudio.load(filename)`}
              />

              <Text pb="40px">
                This code loads an audio file, returning the waveform as a tensor and its sample rate. The waveform tensor shape is typically <Code>[channels, frames]</Code>, where channels represent the audio channels (mono or stereo), and frames represent the discrete audio samples over time.
              </Text>

              <Heading size="md" pb="20px">Visualizing Audio Data</Heading>
              <Text pb="20px">
                Visualizing audio can provide insights into its characteristics. Let&apos;s plot the waveform of our loaded audio:
              </Text>

              <CodeBlockWithCopy
                language="python"
                code={`import matplotlib.pyplot as plt
import seaborn as sns

# Set seaborn style for plots
sns.set(style="whitegrid")

plt.figure(figsize=(10, 4))
plt.plot(waveform.t().numpy())
plt.title('Audio Waveform')
plt.xlabel('Time')
plt.ylabel('Amplitude')
plt.savefig('../../plots/audio_waveform_seaborn.png')
plt.show()`}
              />

              <Text pb="20px">
                In this snippet:
              </Text>
              <Text as="ul" pb="40px" pl={6}>
                <Text as="li">We transpose the waveform tensor with <Code>.t()</Code> to convert it to <Code>[frames, channels]</Code> for plotting.</Text>
                <Text as="li">We use <Code>matplotlib</Code> to plot the waveform and <Code>seaborn</Code> to enhance the visual style.</Text>
                <Text as="li">The X-axis represents time, and the Y-axis represents amplitude.</Text>
              </Text>

              <Text pb="40px">
                In this lesson, you&apos;ve learned how to load and visualize audio data using <Code>torchaudio</Code> and <Code>matplotlib</Code>. These skills form the foundation for more advanced audio processing tasks, such as feature extraction and audio classification, which we&apos;ll explore in upcoming lessons.
              </Text>

              <Text pb="40px">
                In Lesson 3, we will dive into audio feature extraction techniques that are crucial for building machine learning models.
              </Text>

              <Heading size="lg" pt="60px" pb="20px">Lesson 3: Audio Feature Extraction with PyTorch</Heading>
              <Text pb="40px">
                In our journey through audio processing with PyTorch, we now arrive at a crucial milestone: feature extraction. This lesson covers how to extract meaningful features from audio signals, which is essential for audio analysis and machine learning tasks.
              </Text>

              <Heading size="md" pb="20px">Understanding Audio Features</Heading>
              <Text pb="40px">
                Feature extraction transforms raw audio data into a structured format that&apos;s more informative and less redundant for machine learning models. Common audio features include Spectrograms, Mel-Frequency Cepstral Coefficients (MFCCs), and Mel-Spectrograms.
              </Text>

              <Heading size="md" pb="20px">Spectrograms</Heading>
              <Text pb="40px">
                A spectrogram is a visual representation of the spectrum of frequencies in a sound or other signal as they vary with time. It&apos;s a powerful tool for analyzing the frequency content of audio signals.
              </Text>

              <Heading size="sm" pb="20px">Computing and Plotting a Spectrogram</Heading>
              <CodeBlockWithCopy
                language="python"
                code={`import torchaudio
import matplotlib.pyplot as plt

filename = 'audio/obsc.wav'  # Replace with your audio file path
waveform, sample_rate = torchaudio.load(filename)

# Compute the spectrogram
spectrogram = torchaudio.transforms.Spectrogram()(waveform)

# Plot the spectrogram
plt.figure(figsize=(10, 4))
plt.imshow(spectrogram.log2()[0,:,:].numpy(), cmap='viridis', aspect='auto')
plt.title('Spectrogram')
plt.xlabel('Time')
plt.ylabel('Frequency')
plt.colorbar(format='%+2.0f dB')
plt.show()`}
              />

              <Heading size="md" pt="40px" pb="20px">Mel-Frequency Cepstral Coefficients (MFCCs)</Heading>
              <Text pb="40px">
                MFCCs are coefficients that collectively make up an MFC. They are derived from a type of cepstral representation of the audio clip (a nonlinear &apos;spectrum-of-a-spectrum&apos;).
              </Text>

              <Heading size="sm" pb="20px">Computing and Plotting MFCCs</Heading>
              <CodeBlockWithCopy
                language="python"
                code={`# Compute the MFCCs
mfcc = torchaudio.transforms.MFCC(sample_rate=sample_rate)(waveform)

# Plot the MFCCs
plt.figure(figsize=(10,4))
plt.imshow(mfcc[0].detach().numpy(), cmap='viridis', aspect='auto')
plt.title('MFCC')
plt.xlabel('Time')
plt.ylabel('MFCC Coefficients')
plt.colorbar()
plt.show()`}
              />

              <Heading size="md" pt="40px" pb="20px">Mel-Spectrogram</Heading>
              <Text color="white" mb={1}>
                A Mel-Spectrogram is a Spectrogram where the frequencies are converted to the Mel scale, more closely approximating human auditory systems frequency response.
              </Text>

              <Heading size="sm" pb="20px">Computing and Plotting a Mel-Spectrogram</Heading>
              <CodeBlockWithCopy
                language="python"
                code={`# Compute mel-spectrogram
mel_spectrogram = torchaudio.transforms.MelSpectrogram(sample_rate=sample_rate)(waveform)

# Plot the mel-spectrogram
plt.figure(figsize=(10, 4))
plt.imshow(mel_spectrogram.log2()[0,:,:].numpy(), cmap='viridis', aspect='auto')
plt.title('Mel-Spectrogram')
plt.xlabel('Time')
plt.ylabel('Mel Frequency')
plt.colorbar(format='%+2.0f dB')
plt.show()`}
              />

              <Text pb="40px">
                Feature extraction is a pivotal process in audio analysis, providing a bridge between raw audio data and machine learning models. By understanding and utilizing Spectrograms, MFCCs, and Mel-Spectrograms, we can effectively capture the essence of audio signals for further analysis or model training.
              </Text>

              <Text pb="40px">
                In the next lesson, we will take these concepts further and start building an audio classification model using these features.
              </Text>

              <Heading size="lg" pt="60px" pb="20px">Lesson 4: Building a Simple Audio Classification Model</Heading>
              <Text pb="40px">
                In this lesson, we&apos;re focusing on constructing a basic CNN model to classify different types of urban sounds using the UrbanSound8K dataset. This dataset consists of various urban sounds from 10 classes, making it an excellent choice for our classification project.
              </Text>

              <Heading size="md" pb="20px">Preparing the Dataset</Heading>
              <Text pb="40px">
                First, we define a custom dataset class, UrbanSoundDataset, to handle loading audio files, transforming them into mel-spectrograms, and padding them to ensure consistent sizes.
              </Text>

              <Heading size="md" pb="20px">The UrbanSoundDataset Class</Heading>
              <CodeBlockWithCopy
                language="python"
                code={`import torch
from torch.utils.data import Dataset, DataLoader
import torchaudio
import pandas as pd
import os

class UrbanSoundDataset(Dataset):
    def __init__(self, csv_file, root_dir, fold, transform=None):
        self.annotations = pd.read_csv(csv_file)
        self.root_dir = root_dir
        self.fold = fold
        self.transform = transform
        self.fold_data = self.annotations[self.annotations['fold'] == fold]

    def __len__(self):
        return len(self.fold_data)

    def __getitem__(self, idx):
        audio_filename = self.fold_data.iloc[idx]['slice_file_name']
        audio_path = os.path.join(self.root_dir, f'fold{self.fold}', audio_filename)
        waveform, sample_rate = torchaudio.load(audio_path)
        if waveform.size(0) > 1:
            waveform = torch.mean(waveform, dim=0, keepdim=True)
        if self.transform:
            waveform = self.transform(waveform)
        label = self.fold_data.iloc[idx]['classID']
        return waveform, label`}
              />

              <Text as="ul" pb="40px" pl={6}>
                <Text as="li"><Code>__init__</Code>: Initializes the dataset object, loading the dataset annotations from a CSV file and setting up the path to the audio files.</Text>
                <Text as="li"><Code>__len__</Code>: Returns the total number of samples in the dataset.</Text>
                <Text as="li"><Code>__getitem__</Code>: Loads and returns a single sample from the dataset, including the audio waveform and its corresponding label.</Text>
              </Text>

              <Heading size="md" pb="20px">Data Paths</Heading>
              <CodeBlockWithCopy
                language="python"
                code={`csv_file = '../../data/UrbanSound8K.csv'
root_dir = '../../data/audio/'`}
              />

              <Heading size="md" pt="40px" pb="20px">Data Transformation</Heading>
              <Text pb="20px">
                Transforming the raw audio data into a more manageable form is crucial for processing. We use the mel-spectrogram representation, which captures the energy of sound in different frequency bands over time.
              </Text>

              <CodeBlockWithCopy
                language="python"
                code={`transform = torchaudio.transforms.MelSpectrogram(
    sample_rate=16000,
    n_mels=64,
    n_fft=1024,
    hop_length=512
)`}
              />

              <Heading size="md" pt="40px" pb="20px">Building the CNN Model</Heading>
              <Text pb="20px">
                Our model, <Code>AudioCNN</Code>, consists of two convolutional layers for feature extraction followed by max pooling layers, an adaptive average pooling layer to standardize the output size, and a fully connected layer for classification.
              </Text>

              <CodeBlockWithCopy
                language="python"
                code={`class AudioCNN(nn.Module):
    def __init__(self):
        super(AudioCNN, self).__init__()
        self.conv1 = nn.Conv2d(1, 16, kernel_size=3, stride=1, padding=1)
        self.conv2 = nn.Conv2d(16, 32, kernel_size=3, stride=1, padding=1)
        self.pool = nn.MaxPool2d(kernel_size=2, stride=2, padding=0)
        self.adaptive_pool = nn.AdaptiveAvgPool2d((5, 5))
        self.fc = nn.Linear(32 * 5 * 5, 10)

    def forward(self, x):
        x = self.pool(F.relu(self.conv1(x)))
        x = self.pool(F.relu(self.conv2(x)))
        x = self.adaptive_pool(x)
        x = torch.flatten(x, 1)
        x = self.fc(x)
        return x`}
              />

              <Text pb="40px">
                In the next lesson, we will discuss advanced audio data augmentation techniques to further improve our model&apos;s performance.
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
