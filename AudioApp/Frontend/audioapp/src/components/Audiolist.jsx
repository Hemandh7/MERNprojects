import React from "react";

const AudioListComponent = ({ audioList, onSelect }) => {
  return (
    <div>
      <h2>Audio List</h2>
      <ul>
        {audioList.map((audio) => (
          <li key={audio._id} onClick={() => onSelect(audio)}>
            {audio.filename}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AudioListComponent;
