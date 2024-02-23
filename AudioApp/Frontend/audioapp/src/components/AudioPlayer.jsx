import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const AudioPlayerComponent = ({ src }) => {
  return (
    <div>
      <h2>Audio Player</h2>
      <AudioPlayer src={src} autoPlay={false} />
    </div>
  );
};

export default AudioPlayerComponent;
