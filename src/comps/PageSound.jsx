// PageSound.jsx
import React, { useEffect } from "react";
import "../App.css";

function PageSound({ audioRef, isAudioAllowed }) {
  useEffect(() => {
    if (isAudioAllowed) {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const maxScroll =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrollFraction = scrollTop / maxScroll;

        if (audioRef.current) {
          // Oynatma hızını kaydırma oranına göre ayarla
          audioRef.current.playbackRate = 1 + scrollFraction * 2;

          // Müzik oynuyorsa, sadece hızını güncelle
          if (audioRef.current.paused) {
            audioRef.current.play().catch((error) => {
              console.error("Müzik oynatılamıyor:", error);
            });
          }
        }
      };

      const handleEnded = () => {
        if (audioRef.current) {
          // Müzik bittiğinde hız ve zaman ayarlarını sıfırla
          audioRef.current.currentTime = 0;
          audioRef.current.playbackRate = 1;
          audioRef.current.play().catch((error) => {
            console.error("Müzik oynatılamıyor:", error);
          });
        }
      };

      window.addEventListener("scroll", handleScroll);
      audioRef.current?.addEventListener("ended", handleEnded);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        audioRef.current?.removeEventListener("ended", handleEnded);
      };
    }
  }, [isAudioAllowed, audioRef]);

  return null;
}

export default PageSound;
