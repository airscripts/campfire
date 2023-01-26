import React from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = React.useState("Initial State");

  const playSound = (event, key) => {
    let sound = document.getElementById(key);
    sound.play();
    setDisplay(key);
  };

  const playSoundOnKeyPress = (event) => {
    let sound = document.getElementById(event.key);
    sound.play();
    setDisplay(event.key);
  }

  return (
    <div id="drum-machine">
      <div id="display">{display}</div>

      <button
        tabIndex={0}
        id="drum-pad-1"
        className="drum-pad"
        onKeyPress={playSoundOnKeyPress}
        onClick={(event) => playSound(event, "Q")}
      >
        Q

        <audio
          id="Q"
          className="clip"
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        />
      </button>

      <button
        id="drum-pad-2"
        className="drum-pad"
        onKeyPress={playSoundOnKeyPress}
        onClick={(event) => playSound(event, "W")}
      >
        W

        <audio
          id="W"
          className="clip"
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        />
      </button>

      <button
        id="drum-pad-3"
        className="drum-pad"
        onKeyPress={playSoundOnKeyPress}
        onClick={(event) => playSound(event, "E")}
      >
        E

        <audio
          id="E"
          className="clip"
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        />
      </button>

      <button
        id="drum-pad-4"
        className="drum-pad"
        onKeyPress={playSoundOnKeyPress}
        onClick={(event) => playSound(event, "A")}
      >
        A

        <audio
          id="A"
          className="clip"
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        />
      </button>

      <button
        id="drum-pad-5"
        className="drum-pad"
        onKeyPress={playSoundOnKeyPress}
        onClick={(event) => playSound(event, "S")}
      >
        S

        <audio
          id="S"
          className="clip"
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        />
      </button>

      <button
        id="drum-pad-6"
        className="drum-pad"
        onKeyPress={playSoundOnKeyPress}
        onClick={(event) => playSound(event, "D")}
      >
        D

        <audio
          id="D"
          className="clip"
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        />
      </button>

      <button
        id="drum-pad-7"
        className="drum-pad"
        onKeyPress={playSoundOnKeyPress}
        onClick={(event) => playSound(event, "Z")}
      >
        Z

        <audio
          id="Z"
          className="clip"
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        />
      </button>

      <button
        id="drum-pad-8"
        className="drum-pad"
        onKeyPress={playSoundOnKeyPress}
        onClick={(event) => playSound(event, "X")}
      >
        X

        <audio
          id="X"
          className="clip"
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        />
      </button>

      <button
        id="drum-pad-9"
        className="drum-pad"
        onKeyPress={playSoundOnKeyPress}
        onClick={(event) => playSound(event, "C")}
      >
        C

        <audio
          id="C"
          className="clip"
          src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        />
      </button>
    </div>
  );
}

export default App;
