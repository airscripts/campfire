import { useState } from "react";

function App() {
  const [clockBreak, setClockBreak] = useState(5);
  const [clockSession, setClockSession] = useState(25);
  const [clockSeconds, setClockSeconds] = useState(0);

  return (
    <div id="app">
      <div>
        <p id="break-label">Break Length</p>
        <p id="break-length">{clockBreak}</p>

        <button
          id="break-decrement"
          style={{ marginRight: 10 }}
          onClick={() => setClockBreak(setBreakTime(clockBreak, "-"))}
        >
          -
        </button>

        <button
          id="break-increment"
          onClick={() => setClockBreak(setBreakTime(clockBreak, "+"))}
        >
          +
        </button>
      </div>

      <div style={{ marginTop: 50 }}>
        <p id="session-label">Session Length</p>
        <p id="session-length">{clockSession}</p>

        <button
          id="session-decrement"
          style={{ marginRight: 10 }}
          onClick={() => setClockSession(setSessionTime(clockSession, "-"))}
        >
          -
        </button>

        <button
          id="session-increment"
          onClick={() => setClockSession(setSessionTime(clockSession, "+"))}
        >
          +
        </button>
      </div>

      <div style={{ marginTop: 50 }}>
        <p id="timer-label">Session</p>

        <p id="time-left">
          {renderTime(clockSession)}:{renderTime(clockSeconds)}
        </p>
      </div>

      <div></div>
    </div>
  );

  function play() {
    setInterval(() => {
      setClockSeconds(clockSeconds - 1);
    }, 1000);
  }

  function pause() {}

  function reset() {}

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
