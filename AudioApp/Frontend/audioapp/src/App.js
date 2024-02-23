import React, { useState, useEffect } from "react";
import axios from "axios";
import { AudioRecorder } from 'react-audio-voice-recorder';
import AudioPlayer from "react-h5-audio-player";
import { ChakraProvider, Flex, Box, Heading, Button, List, ListItem, Text } from "@chakra-ui/react";

const App = () => {
  const [recordedBlob, setRecordedBlob] = useState(null);
  const [audioList, setAudioList] = useState([]);
  const [selectedAudio, setSelectedAudio] = useState(null);
  const [transcript, setTranscript] = useState("");

  useEffect(() => {
    // Fetch the list of audio files from the server
    axios.get("/api/audios").then((res) => {
      setAudioList(res.data);
    });
  }, []);

  const handleRecord = (blob) => {
    // Set the recorded blob as the state
    setRecordedBlob(blob);
  };

  const handleUpload = () => {
    // Upload the recorded blob to the server
    if (recordedBlob) {
      const formData = new FormData();
      formData.append("audio", recordedBlob.blob, recordedBlob.blob.name);
      axios.post("/api/audios", formData).then((res) => {
        // Update the audio list with the new file
        setAudioList([...audioList, res.data]);
        // Clear the recorded blob
        setRecordedBlob(null);
      });
    }
  };

  const handleSelect = (audio) => {
    // Set the selected audio as the state
    setSelectedAudio(audio);
    // Fetch the transcript of the audio from the server
    axios.get(`/api/transcript/${audio._id}`).then((res) => {
      setTranscript(res.data);
    });
  };

  return (
    <ChakraProvider>
      <Flex direction="column" align="center">
        <Heading mt={8}>Audio Recorder App</Heading>
        <Box mt={8} p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
          <AudioRecorder onRecordingComplete={handleRecord} />
          {recordedBlob && (
            <Box mt={4}>
              <AudioPlayer src={recordedBlob.blobURL} />
              <Button onClick={handleUpload} mt={4} colorScheme="teal">Upload</Button>
            </Box>
          )}
        </Box>
        <Box mt={8}>
          <Heading size="md">Audio List</Heading>
          <List mt={4}>
            {audioList.map((audio) => (
              <ListItem key={audio._id} onClick={() => handleSelect(audio)} cursor="pointer" _hover={{ backgroundColor: "gray.100", borderRadius: "md" }} p={2}>
                {audio.filename}
              </ListItem>
            ))}
          </List>
        </Box>
        {selectedAudio && (
          <Box mt={8} p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
            <Heading size="md">Selected Audio</Heading>
            <AudioPlayer src={selectedAudio.url} mt={2} />
            <Text mt={2}>Transcript:</Text>
            <Text mt={2}>{transcript}</Text>
          </Box>
        )}
      </Flex>
    </ChakraProvider>
  );
};

export default App;
