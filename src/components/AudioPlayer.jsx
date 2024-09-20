import React, { useEffect, useRef } from "react";
import audio from "../audio/audio.mp3";
function AudioPlayer({ isPlaying, setIsPlaying }) {
  const audioRef = useRef(null);
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div>
      <audio ref={audioRef} autoPlay>
        <source src={audio} type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pausar" : "Reproducir"}
      </button>
    </div>
  );
}

export default AudioPlayer;
