import React from 'react';
import { Flex, Heading, Text, VStack, ChakraProvider, Image, Box, Code, IconButton, useClipboard, useToast, OrderedList, ListItem } from "@chakra-ui/react";
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
                In this installment of my Torchaudio Study Project, I&apos;ll be taking you through the basics of audio processing and classification using PyTorch and torchaudio. The project is split into 7 lessons, each one building on the previous one. In this blog artile we will present lesssons 1 through 4 where we will build a basic audio classification model. You can follow along with the project on this blog but I recommend cloning the repository and running the code yourself. You can find it <a href="https://github.com/jacklion710/torchaudio-basics">here</a>. First we&apos;ll kick things off by setting up a conda environment and installing the necessary dependencies. This tutorial will be focusing on local development and training with GPU support. But if you prefer to work with notebooks due to hardware constraints you can simply port the code to Google Colab or your preferred cloud service.
              </Text>
              
              <Heading size="md" pb="20px">Dataset</Heading>
              <Text pb="40px">
                We&apos;ll be using the UrbanSound8K dataset, which contains 8732 labeled sound excerpts of urban sounds from 10 classes. The dataset is pre-sorted into ten folds for cross-validation and experimentation. You can find it <a href="https://urbansounddataset.weebly.com/urbansound8k.html">here</a>.
              </Text>

              <Heading size="md" pt="40px" pb="20px">PyTorch GPU Setup</Heading>
              <Text pb="20px">
                Setting up PyTorch with local GPU support requires specific steps. Here&apos;s how to get started:
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
                Welcome to the first lesson in our series on audio processing with PyTorch. We&apos;ll explore the basics of PyTorch, including tensors, operators, and core concepts that are essential for machine learning and audio processing.
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

              <Text pb="20px">
                You can think of tensors as n-dimensional arrays. For example, a 1D tensor is a vector, a 2D tensor is a matrix, and a 3D tensor is a cube. Tensors can be used to represent audio data, images, and other data and are the fundamental building blocks of PyTorch. There is technically no limit to the number of dimensions a tensor can have, but for the scope of this tutorial we will only be using 1D and 2D tensors. If you are unfamiliar with tensors or n-dimensional arrays, I recommend checking out the <a href="https://www.youtube.com/watch?v=L35fFDpwIM4">Tensors for Neural Networks, Clearly Explained!!!</a> video by StatQuest with Josh Starmer. It&apos;s a great way to get a visual understanding of tensors and their operations.
              </Text>

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

              <Text pb="20px">
                Flattening a tensor is a common operation in audio processing. It converts a multi-dimensional tensor into a 1D tensor, which is easier to work with in machine learning models. We will see this in practice when we start working with audio data and feeding inputs to a machine learning model.
              </Text>
              
              <Text pb="20px">
                Broadcasting is a powerful feature in PyTorch that allows tensors of different shapes to be used in arithmetic operations. It automatically expands the smaller tensor to match the dimensions of the larger tensor, making it easier to perform operations between tensors of different sizes.
              </Text>

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

              <Text pb="20px">
                If you are unfamiliar with stereo and mono audio, I recommend checking out the <a href="https://www.youtube.com/watch?v=4ryacPfyq4k">Stereo and Mono Audio, Clearly Explained!!!</a> video by Black Ghost Audio. It contains examples of stereo and mono audio and explains the difference between the two.
              </Text>

              <Text pb="20px">
                To put it simply, stereo audio has two channels and mono audio has one. When playing audio through a stereo system you usually will have a left and right speaker with each channel being routed to the left and right ear. There also exists multi-channel audio, but for the scope of this tutorial we will only be working with mono and stereo audio. 
              </Text>
                
              <Text pb="20px">
                Channels are commonly seen in many different kinds of data and therefor are crucial to understand. Since audio is usually at most comprised of 2 channels it gives us a great opportunity to learn about the concept of channels in an intuitive way. Stereo audio is represented by a 2D tensor with shape <Code>[2, samples]</Code> and mono audio is represented by a 1D tensor with shape <Code>[samples]</Code>. We will see this in practice when we start working with audio data and feeding inputs to a machine learning model.
              </Text>

              <Text pt="40px" pb="40px">
                This concludes our first lesson on PyTorch fundamentals. In the next lesson, we&apos;ll explore more advanced audio processing techniques and how to apply these concepts to real-world audio data.
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
                This code simply loads an audio file, returning the waveform as a tensor and its sample rate. The waveform tensor shape is typically <Code>[channels, frames]</Code>, where channels represent the audio channels (mono or stereo), and frames represent the discrete audio samples over time.
              </Text>

              <Heading size="md" pb="20px">Visualizing Audio Data</Heading>
              <Text pb="20px">
                Visualizing audio can provide insights into its characteristics. Let&apos;s plot the waveform of our loaded audio:
              </Text>

              <CodeBlockWithCopy
                language="python"
                code={`import torch
import matplotlib.pyplot as plt
import torchaudio

# Load the audio file
file_path = '../../Kick.wav'  # Update path if needed
waveform, sample_rate = torchaudio.load(file_path)

print(f"Sample rate: {sample_rate} Hz")
print(f"Audio shape: {waveform.shape}")

# Convert to mono if stereo by averaging channels
if waveform.shape[0] > 1:
    waveform = torch.mean(waveform, dim=0, keepdim=True)

# Normalize audio to range [-1, 1]
max_val = torch.max(torch.abs(waveform))
if max_val > 0:
    waveform = waveform / max_val
print(f"Max amplitude after normalization: {torch.max(torch.abs(waveform)).item()}")

# Create time axis in seconds
time = torch.arange(0, waveform.shape[1]) / sample_rate

# Plot the waveform
plt.figure(figsize=(10, 4))
plt.plot(time, waveform[0].numpy())  # Convert to numpy for plotting
plt.title('Normalized Kick Drum Waveform')
plt.xlabel('Time (seconds)')
plt.ylabel('Amplitude')
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.show()`}
              />

              <Text pb="20px">
                The resulting plot will look something like this:
              </Text>

              <Image mb={4} src="/images/kick_plot.png" alt="Audio Waveform" />

              <Text mb={4}>
                If the waveform is stereo, we can convert it to mono by averaging the channels. This is useful because it reduces the dimensionality of the waveform tensor and simplifies the processing of the audio data. Typically the audio in the left and right channels are very similar, so averaging them is a simple way to reduce the dimensionality of the waveform tensor. There may be cases where you want to keep the stereo information, especially if you are working with spatial audio, but for this tutorial we will be averaging the channels to convert the waveform to mono.
              </Text>

              <Text mb={4}>
                The process of normalizing the audio is important because it ensures that the audio signals amplitude is within a consistent range, which can help improve the performance of machine learning models. Typically the range is normalized to <Code>[-1, 1]</Code>. But depending on the bit depth of the audio file, the range may be different. For example, if the audio file is 16-bit, the range is <Code>[-32768, 32767]</Code>.
              </Text>

              <Text pb="40px">
                In this lesson, you&apos;ve learned how to load and visualize audio data using <Code>torchaudio</Code> and <Code>matplotlib</Code>. These skills form the foundation for more advanced audio processing tasks, such as feature extraction and audio classification, which we&apos;ll explore in upcoming lessons.
              </Text>

              <Text pb="40px">
                In Lesson 3, we will dive into audio feature extraction techniques that are crucial for building machine learning models.
              </Text>

              <Heading size="lg" pt="60px" pb="20px">Lesson 3: Audio Feature Extraction with PyTorch</Heading>
              <Text pb="40px">
                Along our journey through audio processing with PyTorch, we now arrive at a crucial milestone: feature extraction. This lesson covers how to extract meaningful features from audio signals, which is essential for audio analysis and machine learning tasks.
              </Text>

              <Heading size="md" pb="20px">Understanding Audio Features</Heading>
              <Text pb="40px">
                Feature extraction transforms raw audio data into a structured format that&apos;s more informative and less redundant for machine learning models. Common audio features include Spectrograms, Mel-Frequency Cepstral Coefficients (MFCCs), and Mel-Spectrograms.
              </Text>

              <Heading size="md" pb="20px">Spectrograms</Heading>
              <Text pb="40px">
                A spectrogram is a visual representation of the frequency spectrum of a signal as it varies with time. The x-axis represents time, the y-axis represents frequency, and the color intensity indicates the amplitude/energy at each time-frequency point. This allows us to see how different frequencies are distributed throughout the audio sample.
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

              <Text pb="20px">
                The resulting spectrogram will look something like this:
              </Text>

              <Image mb={4} src="/images/spectrogram.png" alt="Spectrogram" />

              <Heading size="md" pt="40px" pb="20px">Mel-Frequency Cepstral Coefficients (MFCCs)</Heading>
              <Text pb="40px">
                MFCCs are a compact representation of audio that attempts to mimic how human hearing works. They are created through the following process:
                <OrderedList mt={4} pl={8}>
                  <ListItem>Take the Fourier transform of a signal</ListItem>
                  <ListItem>Map the powers of the spectrum onto the mel scale</ListItem>
                  <ListItem>Take the logs of the powers at each mel frequency</ListItem>
                  <ListItem>Take the discrete cosine transform of the list of mel log powers</ListItem>
                </OrderedList>
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

              <Text pb="20px">
                The resulting MFCCs will look something like this:
              </Text>

              <Image mb={4} src="/images/mfcc.png" alt="MFCCs" />

              <Text pb="20px">
                MFCCs are a great way to represent the frequency content of an audio signal and are often used in machine learning models. They are a more compact representation of the audio signal and are easier to work with than spectrograms.
              </Text>

              <Heading size="md" pt="40px" pb="20px">Mel-Spectrogram</Heading>
              <Text color="white" mb={4}>
                A Mel-Spectrogram is a modified version of a spectrogram that uses the Mel scale instead of a linear frequency scale. The Mel scale is a perceptual scale of pitches where equal distances in pitch are perceived as equal by listeners. Key differences include:
                <OrderedList mt={4} mb={4} pl={8}>
                  <ListItem>Linear Spectrogram: Uses equally spaced frequency bins</ListItem>
                  <ListItem>Mel-Spectrogram: Uses frequency bins that are closer together at lower frequencies and further apart at higher frequencies, matching human perception</ListItem>
                </OrderedList>
                This makes Mel-Spectrograms particularly useful for machine learning models working with audio, as they focus computational resources on the frequency ranges that humans find most perceptually significant.

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

              <Text pb="20px">
                The resulting Mel-Spectrogram will look something like this:
              </Text>

              <Image mb={4} src="/images/mel_spectrogram.png" alt="mel_Spectrogram" />

              <Text pb="20px"> 
                Comparison of the three representations:
                <OrderedList mt={4} mb={4} pl={8}>
                  <ListItem>Spectrogram: Raw frequency analysis, best for detailed technical analysis</ListItem>
                  <ListItem>MFCC: Most compact representation, good for machine learning tasks, especially speech recognition</ListItem>
                  <ListItem>Mel-Spectrogram: Balance between human perception and signal detail, popular in music analysis and audio generation tasks</ListItem>
                </OrderedList>
              </Text>

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

              <Text pb="40px">
                Dataloaders are used to load the dataset into a more manageable form. They are also used to batch the data and shuffle the data. This is important because it allows us to train our model on a large dataset and it also allows us to shuffle the data to prevent overfitting giving us finer grain control over the data and the training process.
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

              <Text pb="20px">
                Even more transformations can be applied to the data to further improve the quality of the data and the performance of the model. For example, we can apply a random noise transformation to the data to further improve the quality of the data and the performance of the model. For now we will not be applying any more transformations to the data.
              </Text>

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

              <Text mb={4}>
                The model architecture is illustrated below.
              </Text>

              <Image mb={4} src="/images/model_architecture.png" alt="Model Architecture" />

              <Text pb="40px">
                The model is a simple CNN model with two convolutional layers for feature extraction followed by max pooling layers, an adaptive average pooling layer to standardize the output size, and a fully connected layer for classification. Model architecture design is often thought of as an art form and is a topic of much research. For this tutorial we will be using a simple model architecture to keep the focus on the audio processing and machine learning techniques.
              </Text>

              <Text pb="40px">
                The <Code>AudioCNN</Code> class inherits from the <Code>nn.Module</Code> class and defines the <Code>forward</Code> method. The <Code>forward</Code> method defines the sequence of operations that are applied to the input data to produce the output data.
              </Text>

              <Text pb="40px">
                Now that we have our model defined, we can start training.
              </Text>

              <Heading size="md" pt="40px" pb="20px">Training and Evaluation</Heading>
              <Text pb="20px">
                Let&apos;s implement the training and validation functions that will be used to train our model and evaluate its performance. I will assume you have a basic understanding of the training and validation process. If you don&apos;t, please refer to this video for a quick refresher: <a href="https://www.youtube.com/watch?pp=ygUPI3Rlc3R2YWxpZGF0aW9u&v=ZblqTCFnH-M&utm_source=chatgpt.com">Train, Test, & Validation Sets | How to Train Machine Learning Models (Properly!!!)</a> by Greg hogg.
              </Text>

              <Heading size="sm" pb="20px">Training Function</Heading>
              <Text pb="20px">
                Training involves passing our data through the model, calculating the loss (difference between the predicted and actual labels), and updating the model to reduce this loss.
              </Text>

              <CodeBlockWithCopy
                language="python"
                code={`def train(model, train_loader, optimizer, loss_function, device):
    model.train()
    total_loss = 0
    for inputs, labels in train_loader:
        inputs, labels = inputs.to(device), labels.to(device)
        optimizer.zero_grad()
        outputs = model(inputs)
        loss = loss_function(outputs, labels)
        loss.backward()
        optimizer.step()
        total_loss += loss.item()
    return total_loss / len(train_loader)`}
              />

              <Text as="ul" pb="40px" pl={6}>
                <Text as="li"><Code>model.train()</Code>: Prepares the model for training.</Text>
                <Text as="li"><Code>optimizer.zero_grad()</Code>: Clears old gradients; otherwise, they&apos;ll accumulate.</Text>
                <Text as="li"><Code>loss.backward()</Code>: Computes the gradient of the loss.</Text>
                <Text as="li"><Code>optimizer.step()</Code>: Updates the model parameters based on the chosen optimizer and obtained loss.</Text>
              </Text>

              <Heading size="sm" pb="20px">Validation Function</Heading>
              <Text pb="20px">
                Validation helps us assess the model&apos;s performance on unseen data, ensuring it&apos;s learning general patterns rather than memorizing the training data.
              </Text>

              <CodeBlockWithCopy
                language="python"
                code={`def validate(model, validate_loader, device):
    model.eval()
    total = 0
    correct = 0
    with torch.no_grad():
        for inputs, labels in validate_loader:
            inputs, labels = inputs.to(device), labels.to(device)
            outputs = model(inputs)
            _, predicted = torch.max(outputs.data, 1)
            total += labels.size(0)
            correct += (predicted == labels).sum().item()
    return 100 * correct / total`}
              />

              <Text as="ul" pb="40px" pl={6}>
                <Text as="li"><Code>model.eval()</Code>: Prepares the model for evaluation, affecting certain layers like dropout.</Text>
                <Text as="li"><Code>torch.no_grad()</Code>: Indicates that we don't need to compute gradients, which reduces memory consumption and speeds up computation.</Text>
              </Text>

              <Heading size="md" pt="40px" pb="20px">Understanding the <Code>pad_collate</Code> Function</Heading>
              <Text pb="20px">
                When training neural networks with audio data, one challenge we often face is the variable length of audio files. Since most neural network architectures expect inputs of consistent size, we need to standardize the size of our audio inputs. This is where the <Code>pad_collate</Code> function comes into play.
              </Text>

              <Heading size="sm" pb="20px">Purpose of <Code>pad_collate</Code></Heading>
              <Text pb="20px">
                The <Code>pad_collate</Code> function is designed to ensure that all audio waveforms in a batch have the same length. It does this by padding shorter audio files with zeros until they match the length of the longest file in the batch. This uniformity is crucial for batching and processing through the neural network.
              </Text>

              <Heading size="sm" pb="20px">How <Code>pad_collate</Code> Works</Heading>
              <CodeBlockWithCopy
                language="python"
                code={`def pad_collate(batch):
    # Find the maximum length of a waveform in the batch
    max_len = max([x[0].size(-1) for x in batch])
  
    # Pad each waveform in the batch to the maximum length
    batch_padded = []
    for waveform, label in batch:
        # Calculate the amount of padding needed for this waveform
        pad_amount = max_len - waveform.size(-1)
        # Pad the waveform at the end along the time dimension
        padded_waveform = F.pad(waveform, (0, pad_amount), "constant", 0)
        batch_padded.append((padded_waveform, label))
  
    # Stack all the waveforms and labels together
    waveforms_padded = torch.stack([x[0] for x in batch_padded])
    labels = torch.tensor([x[1] for x in batch_padded])
    return waveforms_padded, labels`}
              />

              <Text as="ul" pb="40px" pl={6}>
                <Text as="li">Find the Maximum Length: First, we determine the length of the longest audio waveform in the current batch.</Text>
                <Text as="li">Padding the Waveforms: For each waveform in the batch, we calculate how much padding is needed to match the maximum length.</Text>
                <Text as="li">Stacking for the Batch: Once all waveforms are padded to the same length, we stack them together along with their labels.</Text>
              </Text>

              <Heading size="md" pt="40px" pb="20px">Cross-validation Setup</Heading>
              <Text pb="20px">
                To ensure our model&apos;s robustness, we perform 10-fold cross-validation and average the accuracy across all folds.
              </Text>

              <CodeBlockWithCopy
                language="python"
                code={`num_epochs = 100
learning_rate = 0.001
num_folds = 10
results = []

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

for fold in range(1, num_folds + 1):
    print(f"Processing fold {fold}")
  
    # Splitting dataset
    train_data = UrbanSoundDataset(csv_file=csv_file, root_dir=root_dir, fold=fold, transform=transform)
    validate_data = UrbanSoundDataset(csv_file=csv_file, root_dir=root_dir, fold=fold, transform=transform)
  
    # DataLoader setup
    train_loader = DataLoader(train_data, batch_size=32, shuffle=True, collate_fn=pad_collate)
    validate_loader = DataLoader(validate_data, batch_size=32, shuffle=False, collate_fn=pad_collate)
  
    # Model setup
    model = AudioCNN().to(device)
    optimizer = torch.optim.Adam(model.parameters(), lr=learning_rate)
    loss_function = nn.CrossEntropyLoss()
  
    # Training loop
    for epoch in range(num_epochs):
        train_loss = train(model, train_loader, optimizer, loss_function, device)
        print(f'Fold {fold}, Epoch [{epoch+1}/{num_epochs}], Loss: {train_loss:.4f}')
  
    # Validation
    accuracy = validate(model, validate_loader, device)
    results.append(accuracy)
    print(f'Validation Accuracy for fold {fold}: {accuracy:.2f}%')

# Calculate average accuracy across all folds
average_accuracy = np.mean(results)
print(f'Average Accuracy across all folds: {average_accuracy:.2f}%')`}
              />

              <Text pb="40px">
                The variables such as <Code>num_epochs</Code>, <Code>learning_rate</Code>, <Code>num_folds</Code>, and <Code>batch_size</Code> are all hyperparameters that can be tuned to improve the performance of the model. There is no &apos;one size fits all&apos; approach to tuning hyperparameters. It is a process of trial and error and the best approach is to use a systematic approach to tune the hyperparameters for your model.
              </Text>

              <Text pb="40px">
                Cross validation is a technique used to evaluate the performance of a model on a dataset. It works by splitting the dataset into multiple folds and training and validating the model on each fold. The performance of the model is then averaged across all folds. It is not always necessary to use cross validation, but it is a good practice to use it when you are evaluating the performance of a model. You will see many different approaches to validating your model as well as special tooling such as <a href="https://wandb.ai/home">Wandb</a> to help you visualize your model&apos;s performance and configure your training process in order to systematically find the determine hyperparameters for your model.
              </Text>

              <Text pb="40px">
                Building a simple CNN model for audio classification with PyTorch demonstrates the power of neural networks in processing and understanding complex audio signals. This foundational knowledge sets the stage for exploring more advanced models and techniques in the field of audio analysis.
              </Text>

              <Text pb="40px">
                In the next lesson, we will dive into advanced audio data augmentation techniques to further improve our model&apos;s performance.
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
