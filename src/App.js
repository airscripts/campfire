import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

import "./App.css";

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
      <div id="app-settings">
        <div id="app-break">
          <div id="app-break-contents">
            <p id="break-label" style={{ fontSize: 18 }}>
              Break Length
            </p>

            <p id="break-length" style={{ fontSize: 18 }}>
              {rest}
            </p>
          </div>

          <div id="app-break-buttons">
            <button
              id="break-decrement"
              className="btn btn-light settings-button"
              onClick={() => setTime(rest, "break", "-")}
            >
              -
            </button>

            <button
              id="break-increment"
              className="btn btn-light settings-button"
              style={{ marginRight: 0 }}
              onClick={() => setTime(rest, "break", "+")}
            >
              +
            </button>
          </div>
        </div>

        <div id="app-session">
          <div id="app-session-contents">
            <p id="session-label" style={{ fontSize: 18 }}>
              Session Length
            </p>

            <p id="session-length" style={{ fontSize: 18 }}>
              {session}
            </p>
          </div>

          <div id="app-session-buttons">
            <button
              id="session-decrement"
              className="btn btn-light settings-button"
              onClick={() => setTime(minutes, "session", "-")}
            >
              -
            </button>

            <button
              id="session-increment"
              className="btn btn-light settings-button"
              style={{ marginRight: 0 }}
              onClick={() => setTime(session, "session", "+")}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div
        id="app-clock"
        style={{
          marginTop: 50,
          fontSize: 36,
        }}
      >
        <p id="timer-label">
          {typology.charAt(0).toUpperCase() + typology.slice(1)}
        </p>

        <p id="time-left">
          {renderTime(minutes)}:{renderTime(seconds)}
        </p>
      </div>

      <div id="app-actions">
        <button
          id="start_stop"
          className="btn"
          style={{ marginRight: 10, fontSize: 36 }}
          onClick={() => play()}
        >
          {status === "stop" ? (
            <i className="fas fa-play" style={{ color: "white" }}></i>
          ) : (
            <i className="fas fa-stop" style={{ color: "white" }}></i>
          )}
        </button>

        <button
          id="reset"
          className="btn"
          style={{ fontSize: 36 }}
          onClick={() => reset()}
        >
          <i className="fas fa-redo" style={{ color: "white" }}></i>
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
