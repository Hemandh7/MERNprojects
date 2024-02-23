import React, { useState } from "react";
import { AudioRecorder } from 'react-audio-voice-recorder';

const RecorderComponent = ({ onRecordingComplete }) => {
  const [isRecording, setIsRecording] = useState(false);

  const onStop = (recordedBlob) => {
    setIsRecording(false);
    onRecordingComplete(recordedBlob);
  };

  return (
    <div>
      <h2>Recorder</h2>
      <AudioRecorder
        record={isRecording}
        onStop={onStop}
        visualSetting="sinewave"
        mimeType="audio/wav"
        backgroundColor="#FF4081"
        width="100%"
      />
      <button onClick={() => setIsRecording(!isRecording)}>
        {isRecording ? "Stop Recording" : "Start Recording"}
      </button>
    </div>
  );
};

export default RecorderComponent;
