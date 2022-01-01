import { useState } from "react";

function App() {
  const [clockBreak, setClockBreak] = useState(5);

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
        <button id="session-decrement" style={{ marginRight: 10 }}>
          -
        </button>

        <button id="session-increment">+</button>
      </div>
    </div>
  );
}

export default App;
