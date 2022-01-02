import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [rest, setRest] = useState(5);
  const [session, setSession] = useState(25);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [typology, setTypology] = useState("session");
  const [status, setStatus] = useState("stop");
  const audioRef = useRef();

  useEffect(() => {
    let interval;

    if (!minutes && !seconds) {
      audioRef.current.play();

      switch (typology) {
        case "session":
          setMinutes(rest);
          setSeconds(0);
          setTypology("break");
          return;

        case "break":
          setMinutes(session);
          setSeconds(0);
          setTypology("session");
          return;

        default:
          return;
      }
    }

    if (status === "play") {
      interval = setInterval(() => {
        if (!minutes && !seconds) {
          return;
        }

        if (!seconds) {
          setSeconds(59);
          setMinutes(minutes - 1);
          return;
        }

        setSeconds(seconds - 1);
        return;
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [status, typology, seconds]);

  return (
    <div id="app">
      <div>
        <p id="break-label">Break Length</p>
        <p id="break-length">{rest}</p>

        <button
          id="break-decrement"
          style={{ marginRight: 10 }}
          onClick={() => setTime(rest, "break", "-")}
        >
          -
        </button>

        <button
          id="break-increment"
          onClick={() => setTime(rest, "break", "+")}
        >
          +
        </button>
      </div>

      <div style={{ marginTop: 50 }}>
        <p id="session-label">Session Length</p>
        <p id="session-length">{session}</p>

        <button
          id="session-decrement"
          style={{ marginRight: 10 }}
          onClick={() => setTime(minutes, "session", "-")}
        >
          -
        </button>

        <button
          id="session-increment"
          onClick={() => setTime(session, "session", "+")}
        >
          +
        </button>
      </div>

      <div style={{ marginTop: 50 }}>
        <p id="timer-label">
          {typology.charAt(0).toUpperCase() + typology.slice(1)}
        </p>

        <p id="time-left">
          {renderTime(minutes)}:{renderTime(seconds)}
        </p>
      </div>

      <div>
        <button
          id="start_stop"
          style={{ marginRight: 10 }}
          onClick={() => play()}
        >
          {status === "stop" ? "P" : "S"}
        </button>

        <button id="reset" onClick={() => reset()}>
          R
        </button>
      </div>

      <audio
        id="beep"
        ref={audioRef}
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      ></audio>
    </div>
  );

  function play() {
    status === "stop" ? setStatus("play") : setStatus("stop");
  }

  function reset() {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;

    setInitialState();
  }

  function setInitialState() {
    setRest(5);
    setSession(25);
    setMinutes(25);
    setSeconds(0);
    setStatus("stop");
    setTypology("session");
  }

  function setTime(time, type, operator) {
    if (status === "play") {
      return;
    }

    switch (time) {
      case 1:
        time = operator === "+" ? time + 1 : time;
        break;

      case 60:
        time = operator === "+" ? time : time - 1;
        break;

      default:
        time = operator === "+" ? time + 1 : time - 1;
        break;
    }

    if (type === "session") {
      setSession(time);
      setMinutes(time);
      return;
    }

    if (type === "break") {
      setRest(time);
      return;
    }

    return;
  }

  function renderTime(time) {
    if (time < 10) {
      return "0" + time;
    }

    return time;
  }
}

export default App;
