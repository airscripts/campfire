import { useState } from "react";

function App() {
  const [clockBreak, setClockBreak] = useState(5);
  const [clockSession, setClockSession] = useState(25);

  return (
    <div id="app">
      <div>
        <p id="break-label">Break Length</p>
        <p id="break-length">{clockBreak}</p>

        <button id="break-decrement" style={{ marginRight: 10 }}>
          -
        </button>
        
        <button id="break-increment">+</button>
      </div>

      <div style={{ marginTop: 50 }}>
        <p id="session-label">Session Length</p>
        <p id="session-length">{clockSession}</p>

        <button id="session-decrement" style={{ marginRight: 10 }}>
          -
        </button>

        <button id="session-increment">+</button>
      </div>

      <div style={{ marginTop: 50 }}>
        <p id="time-label">Session</p>
      </div>
    </div>
  );
}

export default App;
