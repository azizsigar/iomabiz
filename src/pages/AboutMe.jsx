import React, { useRef, useState, useEffect } from "react";
import PageSoundController from "../controller/PageSoundController";
import PageSound from "../comps/PageSound";
import "../App.css";

export default function AboutMe() {
  const audioRef = useRef(null);
  const [audioAllowed, setAudioAllowed] = useState(false);

  const handlePlay = () => setAudioAllowed(true);
  const handlePause = () => setAudioAllowed(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY + window.innerHeight;
      const imageElements = document.querySelectorAll(".scroll-image");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} src="../media/sound.mp3" preload="auto" />
      <PageSoundController
        onPlay={handlePlay}
        onPause={handlePause}
        audioRef={audioRef}
      />
      <PageSound audioRef={audioRef} isAudioAllowed={audioAllowed} />

      <div className="scroll-div">
        <div className="content">
          <img src="../media/1.jpg" alt="1" />
          <img src="../media/2.jpg" alt="2" />
          <img src="../media/3.jpg" alt="3" />
          <img src="../media/4.jpg" alt="4" />
        </div>
      </div>
    </div>
  );
}
