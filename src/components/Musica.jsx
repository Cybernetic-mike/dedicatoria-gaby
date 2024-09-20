import React, { useEffect, useRef } from "react";
import audio from "../audio/audio.mp3";
function Musica() {
  return (
    <div
      style={{
        //display: "block",
        position: "fixed",
        textAlign: "center",
        width: "100vw",
      }}
    >
      <audio autoPlay loop controls>
        <source src={audio} type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>
    </div>
  );
}

export default Musica;
