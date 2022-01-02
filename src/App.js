import { useEffect, useState } from "react";

function App() {
  const [rest, setRest] = useState(5);
  const [session, setSession] = useState(25);
  const [minutes, setMinutes] = useState(session);
  const [seconds, setSeconds] = useState(0);
  const [status, setStatus] = useState("stop");

  useEffect(() => {
    let interval;

    if (!minutes && !seconds) {
      return;
    }

    if (status === "play") {
      interval = setInterval(() => {
        console.log(seconds);

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
  }, [status, seconds]);

  return (
    <div id="app">
      <div>
        <p id="break-label">Break Length</p>
        <p id="break-length">{rest}</p>

        <button
          id="break-decrement"
          style={{ marginRight: 10 }}
          onClick={() => setRest(setBreakTime(rest, "-"))}
        >
          -
        </button>

        <button
          id="break-increment"
          onClick={() => setRest(setBreakTime(rest, "+"))}
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
          onClick={() => setMinutes(setSessionTime(minutes, "-"))}
        >
          -
        </button>

        <button
          id="session-increment"
          onClick={() => setMinutes(setSessionTime(minutes, "+"))}
        >
          +
        </button>
      </div>

      <div style={{ marginTop: 50 }}>
        <p id="timer-label">Session</p>

        <p id="time-left">
          {renderTime(minutes)}:{renderTime(seconds)}
        </p>
      </div>

      <div>
        <button id="start_stop" onClick={() => play()}>
          {status === "stop" ? "P" : "S"}
        </button>

        <button id="reset" onClick={() => reset()}>
          R
        </button>
      </div>
    </div>
  );

  function play() {
    status === "stop" ? setStatus("play") : setInitialState();
  }

  function reset() {
    setInitialState();
  }

  function setInitialState() {
    setRest(5);
    setSession(25);
    setMinutes(session);
    setSeconds(0);
    setStatus("stop");
  }

  function setBreakTime(time, operator) {
    switch (time) {
      case 1:
        return operator === "+" ? time + 1 : time;

      case 60:
        return operator === "+" ? time : time - 1;

      default:
        return operator === "+" ? time + 1 : time - 1;
    }
  }

  function setSessionTime(time, operator) {
    switch (time) {
      case 0:
        return operator === "+" ? time + 1 : time;

      case 60:
        return operator === "+" ? time : time - 1;

      default:
        return operator === "+" ? time + 1 : time - 1;
    }
  }

  function renderTime(time) {
    if (time < 10) {
      return "0" + time;
    }

    return time;
  }
}

export default App;
