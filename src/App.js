import React, { useState, useEffect } from "react";
import DrumPad from "./components/drumpad";
import './App.css';

const DrumMachine = () => {
  const [display, setDisplay] = useState("");
  const sounds = [
    { id: "Q", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
    { id: "W", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
    { id: "E", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
    { id: "A", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
    { id: "S", sound: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
    { id: "D", sound: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
    { id: "Z", sound: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
    { id: "X", sound: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
    { id: "C", sound: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" },
    // more sounds...
  ];

  const updateDisplay = (id) => {
    setDisplay(id);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const id = event.key.toUpperCase();
      const audio = document.getElementById(id);
      if (audio) {
        updateDisplay(id);
        audio.currentTime = 0;
        audio.play();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="drum-machine" id="drum-machine">
      <div className="drum-pad-container">
        {sounds.map((sound) => (
          <DrumPad
            key={sound.id}
            id={sound.id}
            sound={sound.sound}
            updateDisplay={updateDisplay}
          />
        ))}
      </div>
      <div className="display" id="display">{display}</div>
    </div>
  );
};

export default DrumMachine;