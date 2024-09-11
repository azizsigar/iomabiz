import React, { useRef, useState } from "react";

function PageSoundController({ onPlay, onPause, audioRef }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            onPlay();
          })
          .catch((error) => {
            console.error("Müzik oynatılamıyor:", error);
          });
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
        onPause();
      }
    }
  };

  return (
    <button className="sound-toggle-btn" onClick={handleClick}>
      {isPlaying ? "🔊" : "🔈"}
    </button>
  );
}

export default PageSoundController;
