import React, { useRef } from "react";

const DrumPad = ({ id, sound, updateDisplay }) => {
    const audioRef = useRef(null);

    const handleClick = () => {
        updateDisplay(id);
        audioRef.current.play();
    }

    return (
        <div className="drum-pad" onClick={handleClick} data-key={id} id={`drum-pad-${id}`}>
            <audio src={sound} ref={audioRef} id={id} className="clip"></audio>
            {id}
        </div>
    );
};

export default DrumPad;