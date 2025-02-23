import React from 'react';
import { Flex, Heading, Text, VStack, ChakraProvider, Image, Box, Code, useColorModeValue, IconButton, useClipboard, useToast } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import { Helmet } from "react-helmet";
import Head from 'next/head';
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

export default function TorchaudioTutorialP2() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.33 } }
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
        <title>Torchaudio Study Project Part 2 | Jacob Leone</title>
        <meta name="description" content="Learn about audio processing and classification using PyTorch and torchaudio through a series of practical lessons." />
        <meta name="keywords" content="Torchaudio, PyTorch, Audio Processing, Machine Learning, Deep Learning" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Torchaudio Study Project Part 2 | Jacob Leone" />
        <meta property="og:description" content="Explore audio processing and classification using PyTorch and torchaudio through hands-on lessons." />
        <meta property="og:url" content="https://jacobleone.tech/Torchaudio-Tutorial-P2" />
        <link rel="canonical" href="https://jacobleone.tech/Torchaudio-Tutorial-P2" />
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
                Torchaudio Study Project Part 2
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
                This project provides a structured approach to learning audio processing and classification using PyTorch and torchaudio. Through a series of lessons, you'll progress from basic audio handling to deploying audio models for real-world applications.
              </Text>

              <Heading size="lg" pt="60px" pb="20px">Lesson 5: Advanced Audio Processing Techniques</Heading>
              <Text pb="40px">
                In this lesson, we delve into advanced techniques for enhancing audio model performance, including data augmentation and feature engineering. These strategies are vital for improving the robustness and accuracy of audio classification models.
              </Text>

              <Heading size="md" pb="20px">Audio Data Augmentation</Heading>
              <Text pb="40px">
                Data augmentation is a technique used to increase the diversity of your training set by applying random transformations. It helps prevent overfitting and makes your model more robust to variations in audio data.
              </Text>

              <Heading size="sm" pb="20px">Adding Noise</Heading>
              <Text pb="20px">
                One simple yet effective augmentation technique is adding random noise to your audio waveform.
              </Text>

              <CodeBlockWithCopy
                language="python"
                code={`def add_noise(waveform, noise_level=0.005):
    noise = torch.randn(waveform.size()) * noise_level
    augmented_waveform = waveform + noise
    return augmented_waveform`}
              />

              <Text pb="40px">
                This function adds Gaussian noise to the waveform, controlled by the noise_level parameter.
              </Text>

              <Heading size="sm" pb="20px">Pitch Shifting</Heading>
              <Text pb="20px">
                Pitch shifting alters the pitch of the audio signal without changing its duration.
              </Text>

              <CodeBlockWithCopy
                language="python"
                code={`def change_pitch(waveform, sample_rate, pitch_shift=5):
    augmented_waveform = torchaudio.functional.pitch_shift(waveform, sample_rate, pitch_shift)
    return augmented_waveform`}
              />

              <Text pb="40px">
                Here, <Code>pitch_shift</Code> specifies the number of semitones by which the pitch is shifted.
              </Text>

              <Heading size="sm" pb="20px">Time Shifting</Heading>
              <Text pb="20px">
                Time shifting moves the audio signal forward or backward in time.
              </Text>

              <CodeBlockWithCopy
                language="python"
                code={`def time_shift(waveform, shift_max=0.1):
    shift_amount = int(random.random() * shift_max * waveform.size(1))
    return torch.roll(waveform, shifts=shift_amount, dims=1)`}
              />

              <Text pb="40px">
                <Code>shift_max</Code> controls the maximum fraction of the waveform that can be shifted.
              </Text>

              <Heading size="md" pb="20px">Feature Extraction</Heading>
              <Text pb="40px">
                Beyond raw waveforms, models often benefit from using spectral features like mel-spectrograms, MFCCs, and their derivatives (delta features).
              </Text>

              <Heading size="sm" pb="20px">Extracting Mel-Spectrogram Features</Heading>
              <CodeBlockWithCopy
                language="python"
                code={`def extract_features(waveform, sample_rate):
    mel_spectrogram = T.MelSpectrogram(
        sample_rate=sample_rate,
        n_fft=1024,
        n_mels=64,
        hop_length=512 
    )(waveform)
  
    delta = torchaudio.functional.compute_deltas(mel_spectrogram)
    delta_delta = torchaudio.functional.compute_deltas(delta)
  
    features = torch.cat([mel_spectrogram, delta, delta_delta], dim=0)
    return features`}
              />

              <Text pb="40px">
                This function computes a mel-spectrogram and its first and second derivatives, providing a rich representation of the audio signal.
              </Text>

              <Heading size="md" pb="20px">Demonstration</Heading>
              <Text pb="20px">
                Let's apply these techniques to an example audio file and visualize the results.
              </Text>

              <CodeBlockWithCopy
                language="python"
                code={`filename = '../../audio/obsc.wav'
waveform, sample_rate = torchaudio.load(filename)

waveform_noise = add_noise(waveform)
waveform_pitch = change_pitch(waveform, sample_rate)
waveform_shifted = time_shift(waveform)

features = extract_features(waveform, sample_rate)

plt.figure(figsize=(12, 8))
plt.subplot(3, 1, 1)
plt.title("Original Waveform")
plt.plot(waveform.t().numpy())

plt.subplot(3, 1, 2)
plt.title("Waveform with Noise")
plt.plot(waveform_noise.t().numpy())

plt.subplot(3, 1, 3)
plt.title("Features")
plt.imshow(features.log2()[0,:,:].numpy(), cmap='viridis', aspect='auto')
plt.show()`}
              />

              <Text pb="40px">
                In this lesson, we explored advanced techniques for processing audio data, including data augmentation and feature extraction. These strategies are crucial for developing high-performing audio classification models, especially in scenarios with limited training data.
              </Text>

              <Text pb="40px">
                In the next lesson, we will learn how to leverage transfer learning for audio tasks, using pre-trained models to achieve even better performance with less data.
              </Text>

              <Heading size="lg" pt="60px" pb="20px">Lesson 6: Transfer Learning in Audio with PyTorch</Heading>
              <Text pb="40px">
                In this lesson, we focus on leveraging <Code>transfer learning</Code> to improve the performance of audio classification tasks. Transfer learning allows us to use a pre-trained model and fine-tune it on a specific task, reducing the need for a large dataset and computational resources.
              </Text>

              <Heading size="md" pb="20px">The Concept of Transfer Learning</Heading>
              <Text pb="40px">
                <Code>Transfer learning</Code> involves taking a model trained on a large dataset and adapting it to a similar task. This is particularly useful in audio processing, where training models from scratch can be resource-intensive.
              </Text>

              <Heading size="md" pb="20px">Using Wav2Vec 2.0 for Audio Classification</Heading>
              <Text pb="40px">
                <Code>Wav2Vec 2.0</Code> is a model pre-trained on vast amounts of unlabeled audio data. It can be fine-tuned for various audio tasks, including audio classification.
              </Text>

              <Heading size="sm" pb="20px">Preparing the Dataset</Heading>
              <Text pb="20px">
                We start by using our <Code>UrbanSound8K</Code> dataset class, <Code>AudioClassificationDataset</Code>, which loads audio files, applies transformations, and prepares them for the model.
              </Text>

              <CodeBlockWithCopy
                language="python"
                code={`class AudioClassificationDataset(Dataset):
    def __init__(self, annotations_file, audio_dir, transformation=None):
        self.annotations = pd.read_csv(annotations_file)
        self.audio_dir = audio_dir
        self.transformation = transformation

    def __len__(self):
        return len(self.annotations)

    def __getitem__(self, index):
        audio_filename = self.annotations.iloc[index]['slice_file_name']
        fold = self.annotations.iloc[index]['fold']
        label = self.annotations.iloc[index]['classID']
        audio_path = os.path.join(self.audio_dir, f'fold{fold}', audio_filename)
        waveform, sample_rate = torchaudio.load(audio_path)
      
        # Convert to mono by averaging channels if not already mono
        if waveform.size(0) > 1:
            waveform = torch.mean(waveform, dim=0, keepdim=True)
      
        if self.transformation:
            waveform = self.transformation(waveform)

        # Ensure waveform is squeezed if it's mono to remove channel dimension
        waveform = torch.squeeze(waveform)
      
        return waveform, label`}
              />

              <Text pb="40px">
                This class handles loading audio data, converting it to mono if necessary, and applying any specified transformations.
              </Text>

              <Heading size="md" pb="20px">Padding Audio</Heading>
              <Text pb="20px">
                Our friend the <Code>pad_collate</Code> function from lesson4 becomes useful to us again:
              </Text>

              <CodeBlockWithCopy
                language="python"
                code={`def pad_collate(batch):
    max_length = max([waveform.shape[0] for waveform, _ in batch])
    
    batch_padded = []
    for i, (waveform, label) in enumerate(batch):
        pad_amount = max_length - waveform.shape[0]
        padded_waveform = torch.nn.functional.pad(waveform.unsqueeze(0), (0, pad_amount), 'constant', 0)
        batch_padded.append((padded_waveform, label))
    
    waveforms_padded = torch.stack([x[0] for x in batch_padded]).squeeze(1)
    labels = torch.tensor([x[1] for x in batch_padded])
    return waveforms_padded, labels`}
              />

              <Heading size="md" pt="40px" pb="20px">Loading a Pre-trained Wav2Vec2 Model</Heading>
              <CodeBlockWithCopy
                language="python"
                code={`# Load a pre-trained Wav2Vec2 model
wav2vec2_bundle = torchaudio.pipelines.WAV2VEC2_ASR_BASE_960H
temp_model = wav2vec2_bundle.get_model()`}
              />

              <Text pb="40px">
                Here, we load a pre-trained <Code>Wav2Vec 2.0</Code> model from torchaudio's pipeline. <Code>Wav2Vec 2.0</Code> has been trained on a large corpus of unlabeled audio data and can extract rich, meaningful features from raw audio waveforms.
              </Text>

              <Heading size="sm" pb="20px">Determining the Correct Feature Size</Heading>
              <CodeBlockWithCopy
                language="python"
                code={`# Determine the correct feature size using a temporary DataLoader
train_dataset_temp = AudioClassificationDataset('data/UrbanSound8K.csv', 'data/audio', transformation=None)
temp_loader = DataLoader(dataset=train_dataset_temp, batch_size=1, shuffle=False)
temp_inputs, _ = next(iter(temp_loader))
temp_features, _ = temp_model(temp_inputs)
feature_size = temp_features.shape[-1]`}
              />

              <Heading size="md" pt="40px" pb="20px">Define the model</Heading>
              <CodeBlockWithCopy
                language="python"
                code={`# Define the model class with the determined feature size
class Wav2Vec2ForAudioClassification(torch.nn.Module):
    def __init__(self, pretrained_wav2vec2, num_classes, feature_size):
        super(Wav2Vec2ForAudioClassification, self).__init__()
        self.wav2vec2 = pretrained_wav2vec2
        self.classifier = torch.nn.Linear(feature_size, num_classes)

    def forward(self, audio_input):
        features, _ = self.wav2vec2(audio_input)
        features = torch.mean(features, dim=1)
        output = self.classifier(features)
        return output

num_classes = 10
model = Wav2Vec2ForAudioClassification(wav2vec2_bundle.get_model(), num_classes, feature_size)`}
              />

              <Text pb="40px">
                This class integrates the pre-trained <Code>Wav2Vec 2.0</Code> model with a custom linear layer (<Code>self.classifier</Code>) for classification. The linear layer's input features match the size determined previously, ensuring compatibility with the extracted features.
              </Text>

              <Heading size="md" pb="20px">Data Augmentation and Preprocessing</Heading>
              <Text pb="20px">
                We apply resampling as a preprocessing step to ensure the audio input matches the sample rate expected by <Code>Wav2Vec 2.0</Code>.
              </Text>

              <CodeBlockWithCopy
                language="python"
                code={`transform = torchaudio.transforms.Resample(orig_freq=44100, new_freq=16000)`}
              />

              <Heading size="md" pt="40px" pb="20px">The model_info Variable</Heading>
              <CodeBlockWithCopy
                language="python"
                code={`model_info = {
    "model_state": model.state_dict(),
    "feature_size": feature_size
}`}
              />

              <Text pb="20px">
                The <Code>model_info</Code> variable is a dictionary that stores not only the trained model's state but also the feature size used by the classifier. This is particularly important for transfer learning because it encapsulates both the learned parameters and the configuration necessary to reproduce the model's architecture. When we save this dictionary:
              </Text>

              <CodeBlockWithCopy
                language="python"
                code={`torch.save(model_info, model_save_path)`}
              />

              <Text pb="40px">
                We're ensuring that anyone who loads the model later has all the information needed to correctly initialize the model architecture and load the learned weights. This approach facilitates model sharing and deployment, as the model's architecture and its state are bundled together.
              </Text>

              <Heading size="md" pb="20px">Training the Model</Heading>
              <Text pb="40px">
                Training involves fine-tuning the pre-trained <Code>Wav2Vec 2.0</Code> model on our specific audio classification task.
              </Text>

              <Heading size="sm" pb="20px">Setup</Heading>
              <Text pb="20px">
                Before training, we initialize our model, set the loss function, and choose an optimizer.
              </Text>

              <CodeBlockWithCopy
                language="python"
                code={`model = Wav2Vec2ForAudioClassification(wav2vec2_bundle.get_model(), num_classes, feature_size)
criterion = torch.nn.CrossEntropyLoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)`}
              />

              <Heading size="sm" pt="40px" pb="20px">The Training Loop</Heading>
              <Text pb="20px">
                During training, we iterate over our dataset, compute the loss, and update the model's weights accordingly.
              </Text>

              <CodeBlockWithCopy
                language="python"
                code={`num_epochs = 50
for epoch in range(num_epochs):
    total_loss = 0
    # Wrap train_loader with tqdm for a progress bar
    for inputs, labels in tqdm(train_loader, desc=f"Epoch {epoch+1}/{num_epochs}"):
        inputs, labels = inputs.to(device), labels.to(device)

        optimizer.zero_grad()
        outputs = model(inputs)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()

        total_loss += loss.item()
  
    print(f"Epoch {epoch+1}/{num_epochs}, Loss: {total_loss/len(train_loader)}")`}
              />

              <Text pb="40px">
                We use <Code>tqdm</Code> to display a progress bar, making it easier to track the training process.
              </Text>

              <Heading size="md" pb="20px">Saving the Model</Heading>
              <Text pb="20px">
                After training, we save the model's state along with the feature size to a file. This allows us to easily load the model for future inference.
              </Text>

              <CodeBlockWithCopy
                language="python"
                code={`torch.save(model_info, model_save_path)`}
              />

              <Text pb="40px">
                Transfer learning with <Code>Wav2Vec 2.0</Code> offers a powerful approach for audio classification tasks. By leveraging pre-trained models, we can achieve high performance with relatively small datasets and less computational effort.
              </Text>

              <Text pb="40px">
                In the next lesson, we will explore deploying our trained audio models, making them accessible for real-world applications.
              </Text>

              <Heading size="lg" pt="60px" pb="20px">Lesson 7: Deploying Audio Models</Heading>
              <Text pb="40px">
                In this lesson, we'll cover how to deploy our trained audio classification model using <Code>Flask</Code>, a lightweight WSGI web application framework in Python. This allows us to create a simple web interface for uploading audio files and getting predictions.
              </Text>

              <Heading size="md" pb="20px">Model Definitions</Heading>
              <Text pb="20px">
                First, we have our model definition in <Code>model_defs.py</Code>. This is where we define our <Code>Wav2Vec2ForAudioClassification</Code> class, integrating the pre-trained Wav2Vec 2.0 model with a linear classifier.
              </Text>

              <CodeBlockWithCopy
                language="python"
                code={`import torch

class Wav2Vec2ForAudioClassification(torch.nn.Module):
    def __init__(self, pretrained_wav2vec2, num_classes, feature_size):
        super(Wav2Vec2ForAudioClassification, self).__init__()
        self.wav2vec2 = pretrained_wav2vec2
        self.classifier = torch.nn.Linear(feature_size, num_classes)

    def forward(self, audio_input):
        features, _ = self.wav2vec2(audio_input)
        features = torch.mean(features, dim=1)
        output = self.classifier(features)
        return output`}
              />

              <Heading size="md" pt="40px" pb="20px">Frontend Setup</Heading>
              <Text pb="40px">
                Our frontend consists of a simple HTML form for file upload, styled with CSS, and a bit of JavaScript to handle the file upload asynchronously.
              </Text>

              <Heading size="sm" pb="20px">HTML (/templates/index.html)</Heading>
              <CodeBlockWithCopy
                language="html"
                code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Audio Classification</title>
    <link rel="stylesheet" href="/static/css/styles.css">
</head>
<body>
    <h1>Upload an Audio File</h1>
    <div id="drop-area">Drag and drop audio file here</div>
    <form id="file-form" action="/predict" method="post" enctype="multipart/form-data">
        <input type="file" id="fileElem" name="file" accept="audio/*" onchange="submitForm()">
        <label for="fileElem">Upload and Predict</label>
    </form>
    <div id="prediction-result" style="display:none;">
        <h2 id="prediction-text">Prediction: </h2>
    </div>
    <script src="/static/js/script.js"></script>
</body>
</html>`}
              />

              <Text pb="40px">
                If you're not too familiar with HTML, CSS or JavaScript then have no fear! For the sake of this series, all you need to do is copy the code and follow along.
              </Text>

              <Heading size="sm" pb="20px">CSS (/static/css/styles.css)</Heading>
              <CodeBlockWithCopy
                language="css"
                code={`body {
    font-family: Arial, sans-serif;
    text-align: center;
    margin: 20px;
}

#drop-area {
    width: 300px;
    height: 100px;
    border: 2px dashed #ccc;
    border-radius: 20px;
    text-align: center;
    line-height: 100px;
    margin: 20px auto;
    color: #ccc;
    cursor: pointer;
}

#drop-area.highlight {
    border-color: blue;
    color: blue;
}

input[type="submit"] {
    margin-top: 20px;
    padding: 10px 20px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
}

input[type="submit"]:hover {
    background-color: #0056b3;
}

h1 {
    color: #333;
}

label {
    cursor: pointer;
    color: #007bff;
    text-decoration: underline;
}

label:hover {
    color: #0056b3;
}

#prediction-result {
    margin-top: 20px;
    color: #007bff;
}`}
              />

              <Text pb="40px">
                We're not too concerned with whats going on here, just know its going to make things on the UI look a little more neat and pleasing to look at.
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

