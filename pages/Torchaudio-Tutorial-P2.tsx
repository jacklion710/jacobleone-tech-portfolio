import React from 'react';
import { Flex, Heading, Text, VStack, ChakraProvider, Image, Box, Code, useColorModeValue, IconButton, useClipboard, useToast, UnorderedList, ListItem, Link } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';
import { Helmet } from "react-helmet";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CodeBlock from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { CopyIcon, ExternalLinkIcon } from '@chakra-ui/icons';

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
        <VStack 
          spacing={10} 
          alignItems="center" 
          justifyContent="center" 
          flexGrow={1} 
          py={10} 
          px={{ base: 4, md: 10 }}
          width="100%"
        >
          <motion.div ref={headingRef} initial="hidden" animate={headingInView ? "visible" : "hidden"} variants={fadeIn}>
            <VStack width="100%">
              <Heading
                mb={4}
                size="2xl"
                position="relative"
                textShadow="0 0 5px teal, 0 0 10px teal, 0 0 15px teal, 0 0 20px teal"
                color="white"
                textAlign="center"
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
          <Box
            bg="gray.500"
            borderRadius="md"
            boxShadow="md"
            p={8}
            width="100%"
            maxW="800px"
            mx="auto"
            color="white"
          >
            <Text textAlign={'center'} pb="40px">
              This project provides a structured approach to learning audio processing and classification using PyTorch and torchaudio. Through a series of lessons, you&apos;ll progress from basic audio handling to deploying audio models for real-world applications.
            </Text>

            <Heading size="lg" pt="60px" pb="20px">Overview</Heading>
            <Text pb="10px">
              We&apos;ll be continuing our work on the UrbanSound8K dataset, but this time we will be using transfer learning to improve our model. If you missed part 1, you can get caught up <Link href="/Torchaudio-Tutorial-P1">here</Link>.
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
              Let&apos;s apply these techniques to an example audio file and visualize the results.
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
              In this lesson, we focus on leveraging transfer learning to improve the performance of audio classification tasks. Transfer learning allows us to use a pre-trained model and fine-tune it on a specific task, reducing the need for a large dataset and computational resources.
            </Text>

            <Heading size="md" pb="20px">The Concept of Transfer Learning</Heading>
            <Text pb="40px">
              Transfer learning involves taking a model trained on a large dataset and adapting it to a similar task. This is particularly useful in audio processing, where training models from scratch can be resource-intensive.
            </Text>

            <Heading size="md" pb="20px">Using Wav2Vec 2.0 for Audio Classification</Heading>
            <Text pb="40px">
              Wav2Vec 2.0 is a model pre-trained on vast amounts of unlabeled audio data. It can be fine-tuned for various audio tasks, including audio classification.
            </Text>

            <Heading size="sm" pb="20px">Preparing the Dataset</Heading>
            <Text pb="20px">
              We start by using our UrbanSound8K dataset class, <Code>AudioClassificationDataset</Code>, which loads audio files, applies transformations, and prepares them for the model.
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

        # Ensure waveform is squeezed if it&apos;s mono to remove channel dimension
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
              Here&apos;s how to load a pre-trained Wav2Vec 2.0 model from torchaudio&apos;s pipeline. Wav2Vec 2.0 has been trained on a large corpus of unlabeled audio data and can extract rich, meaningful features from raw audio waveforms.
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
              This class integrates the pre-trained Wav2Vec 2.0 model with a custom linear layer (<Code>self.classifier</Code>) for classification. The linear layer&apos;s input features match the size determined previously, ensuring compatibility with the extracted features.
            </Text>

            <Heading size="md" pb="20px">Data Augmentation and Preprocessing</Heading>
            <Text pb="20px">
              We apply resampling as a preprocessing step to ensure the audio input matches the sample rate expected by Wav2Vec 2.0.
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
              The <Code>model_info</Code> variable is a dictionary that stores not only the trained model&apos;s state but also the feature size used by the classifier. This is particularly important for transfer learning because it encapsulates both the learned parameters and the configuration necessary to reproduce the model&apos;s architecture. When we save this dictionary:
            </Text>

            <CodeBlockWithCopy
              language="python"
              code={`torch.save(model_info, model_save_path)`}
            />

            <Text pb="40px">
              We&apos;re ensuring that anyone who loads the model later has all the information needed to correctly initialize the model architecture and load the learned weights. This approach facilitates model sharing and deployment, as the model&apos;s architecture and its state are bundled together.
            </Text>

            <Heading size="md" pb="20px">Training the Model</Heading>
            <Text pb="40px">
              Training involves fine-tuning the pre-trained Wav2Vec 2.0 model on our specific audio classification task.
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
              During training, we iterate over our dataset, compute the loss, and update the model&apos;s weights accordingly.
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
              We use tqdm to display a progress bar, making it easier to track the training process.
            </Text>

            <Heading size="md" pb="20px">Saving the Model</Heading>
            <Text pb="20px">
              After training, we save the model&apos;s state along with the feature size to a file. This allows us to easily load the model for future inference.
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
              In this lesson, we&apos;ll cover how to deploy our trained audio classification model using Flask, a lightweight WSGI web application framework in Python. This allows us to create a simple web interface for uploading audio files and getting predictions.
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
              Our frontend consists of a simple <Code>HTML</Code> form for file upload, styled with <Code>CSS</Code>, and a bit of <Code>JavaScript</Code> to handle the file upload asynchronously.
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
              If you&apos;re not too familiar with <Code>HTML</Code>, <Code>CSS</Code> or <Code>JavaScript</Code> then have no fear! For the sake of this series, all you need to do is copy the code and follow along.
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
              We&apos;re not too concerned with whats going on here, just know its going to make things on the UI look a little more neat and pleasing to look at.
            </Text>

            <Heading size="sm" pt="40px" pb="20px">Loading the Trained Model</Heading>
            <Text pb="20px">
              We load our pre-trained model using the model path and set it to evaluation mode. This step is essential for performing inference with the model.
            </Text>

            <CodeBlockWithCopy
              language="python"
              code={`model_path = "../../models/pretrained_audio_classification_model.pth"
model_info = torch.load(model_path, map_location=torch.device('cpu'))
model_state_dict = model_info["model_state"]
feature_size = model_info["feature_size"]

model = Wav2Vec2ForAudioClassification(torchaudio.pipelines.WAV2VEC2_ASR_BASE_960H.get_model(), NUM_CLASSES, feature_size)
model.load_state_dict(model_state_dict)
model.eval()`}
            />

            <Heading size="md" pt="40px" pb="20px">Defining App Routes</Heading>
            <Text pb="20px">
              The home route (<Code>&apos;/&apos;</Code>) uses the <Code>GET</Code> method and serves the HTML form where users can upload audio files.
            </Text>

            <CodeBlockWithCopy
              language="python"
              code={`@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')`}
            />

            <Heading size="sm" pt="40px" pb="20px">Prediction Route</Heading>
            <Text pb="20px">
              The prediction route (<Code>&apos;/predict&apos;</Code>) handles audio file uploads and predictions. It uses the <Code>POST</Code> method to receive the audio file, preprocesses it, runs it through the model, and returns the predicted class name as JSON.
            </Text>

            <CodeBlockWithCopy
              language="python"
              code={`@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
  
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    waveform, sample_rate = torchaudio.load(file)
    if sample_rate != TARGET_SAMPLE_RATE:
        resampler = torchaudio.transforms.Resample(orig_freq=sample_rate, new_freq=TARGET_SAMPLE_RATE)
        waveform = resampler(waveform)
    if waveform.size(0) > 1:
        waveform = torch.mean(waveform, dim=0, keepdim=True)
    waveform = waveform.squeeze(0)

    # Use logging statements to debug
    logging.info(f"Sample rate: {sample_rate}, Waveform shape: {waveform.shape}")

    with torch.no_grad():
        waveform = waveform.unsqueeze(0)  # Add a batch dimension
        prediction = model(waveform)
        _, predicted_label = torch.max(prediction, dim=1)
        predicted_class = CLASS_NAMES[predicted_label.item()]
  
    return jsonify({'prediction': predicted_class})`}
            />

            <Heading size="md" pt="40px" pb="20px">Running the App</Heading>
            <Text pb="20px">
              Finally, we specify that if this script is executed as the main program, the Flask app will run on the default port 5000 in debug mode.
            </Text>

            <CodeBlockWithCopy
              language="python"
              code={`if __name__ == '__main__':
    app.run(debug=True, port=5000)`}
            />

            <Text pb="20px">
              Once everything is set up, you can build the app and interact with it on a <Code>localhost</Code> server.
            </Text>

            <CodeBlockWithCopy
              language="bash"
              code={`python lesson7.py`}
            />

            <Text pb="40px">
              Once it&apos;s running go to <Code>http://127.0.0.1:5000</Code> on a browser
            </Text>

            <Text pb="40px">
              This setup allows users to upload audio files through a web interface, and the backend processes these files to return the predicted audio class. Deploying the model in this way makes it accessible for real-world applications and testing.
            </Text>

            <Heading size="lg" pt="60px" pb="20px">Conclusion and Moving Forward</Heading>
            <Text pb="40px">
              Throughout these lessons, we&apos;ve explored the foundational concepts and practical applications of building and deploying audio classification models using PyTorch and Flask. We started with the basics of PyTorch, learning about tensors and operations, and progressively moved towards more complex topics like audio processing, feature extraction, and model training. Finally, we applied transfer learning with Wav2Vec 2.0 and deployed our model with a Flask web application.
            </Text>

            <Heading size="md" pb="20px">Recap of Lessons</Heading>
            <UnorderedList pb="40px" spacing={2}>
              <ListItem><strong>Lesson 1:</strong> Introduced PyTorch, focusing on tensors and their operations.</ListItem>
              <ListItem><strong>Lesson 2:</strong> Covered loading and visualizing audio data using torchaudio.</ListItem>
              <ListItem><strong>Lesson 3:</strong> Explored audio feature extraction techniques such as spectrograms, MFCCs, and mel-spectrograms.</ListItem>
              <ListItem><strong>Lesson 4:</strong> Built a simple CNN model for audio classification and learned about data preparation and augmentation.</ListItem>
              <ListItem><strong>Lesson 5:</strong> Delved into advanced audio processing techniques and data augmentation to improve model performance.</ListItem>
              <ListItem><strong>Lesson 6:</strong> Applied transfer learning using the pre-trained Wav2Vec 2.0 model for enhanced audio classification.</ListItem>
              <ListItem><strong>Lesson 7:</strong> Deployed our trained audio classification model with a Flask web application, enabling real-world usage.</ListItem>
            </UnorderedList>

            <Heading size="md" pb="20px">Moving Forward</Heading>
            <Text pb="20px">
              The journey doesn&apos;t end here. There&apos;s much more to explore and many ways to refine and expand your knowledge and skills in audio processing and machine learning. Here are some suggestions:
            </Text>

            <UnorderedList pb="40px" spacing={2}>
              <ListItem><strong>Experiment with Different Datasets:</strong> Practice with various audio datasets to understand how different types of data affect model performance.</ListItem>
              <ListItem><strong>Try Advanced Models:</strong> Explore more complex models such as recurrent neural networks (RNNs), long short-term memory networks (LSTMs), and Transformer models.</ListItem>
              <ListItem><strong>Participate in Competitions:</strong> Engage in online competitions on platforms like Kaggle to challenge yourself and learn from the community.</ListItem>
              <ListItem><strong>Contribute to Open Source:</strong> Consider contributing to open-source projects related to audio processing and machine learning.</ListItem>
              <ListItem><strong>Continuous Learning:</strong> Stay updated with the latest research, attend workshops, and take online courses.</ListItem>
            </UnorderedList>

            <Heading size="md" pb="20px">Recommended Resources</Heading>
            <UnorderedList pb="40px" spacing={2}>
              <ListItem>
                <Link 
                  href="https://pytorch.org/docs/" 
                  isExternal 
                  color="white"
                  fontWeight="bold"
                  textDecoration="underline"
                  _hover={{ 
                    color: "teal.200",
                    textDecoration: "none" 
                  }}
                >
                  PyTorch Official Documentation <ExternalLinkIcon mx="2px" />
                </Link>
              </ListItem>
              <ListItem>
                <Link 
                  href="https://pytorch.org/audio/stable/index.html" 
                  isExternal 
                  color="white"
                  fontWeight="bold"
                  textDecoration="underline"
                  _hover={{ 
                    color: "teal.200",
                    textDecoration: "none" 
                  }}
                >
                  Torchaudio Documentation <ExternalLinkIcon mx="2px" />
                </Link>
              </ListItem>
              <ListItem>
                <Link 
                  href="https://www.kaggle.com/" 
                  isExternal 
                  color="white"
                  fontWeight="bold"
                  textDecoration="underline"
                  _hover={{ 
                    color: "teal.200",
                    textDecoration: "none" 
                  }}
                >
                  Kaggle <ExternalLinkIcon mx="2px" />
                </Link>
                {" "}for datasets and competitions
              </ListItem>
              <ListItem>
                <Link 
                  href="https://arxiv.org/" 
                  isExternal 
                  color="white"
                  fontWeight="bold"
                  textDecoration="underline"
                  _hover={{ 
                    color: "teal.200",
                    textDecoration: "none" 
                  }}
                >
                  arXiv <ExternalLinkIcon mx="2px" />
                </Link>
                {" "}for the latest research papers
              </ListItem>
              <ListItem>Explore GitHub for open-source projects and code examples in the field of audio processing and machine learning.</ListItem>
            </UnorderedList>

            <Text pb="20px">
              We hope these lessons have provided you with a solid foundation and inspired you to continue exploring the fascinating world of audio processing with PyTorch. Remember, practice is key to mastering these concepts, so keep experimenting, learning, and building.
            </Text>

            <Text pb="40px">
              Thank you for following along, and best of luck on your machine learning journey!
            </Text>

          </Box>
        </VStack>
        <motion.div ref={footerRef} initial="hidden" animate={footerInView ? "visible" : "hidden"} variants={fadeIn}>
          <Footer />
        </motion.div>
      </Flex>
    </ChakraProvider>
  );
}

