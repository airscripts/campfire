import './App.css';

function App() {
  return (
    <div className="calculator">
      <div className="calculator__container">
        <div className="calculator__screen">
          <div id="display">
          </div>
        </div>

        <div className="calculator__digits">
          <div id="clear">
            <span>AC</span>
          </div>

          <div id="add">
            <span>+</span>
          </div>

          <div id="subtract">
            <span>-</span>
          </div>

          <div id="multiply">
            <span>x</span>
          </div>

          <div id="divide">
            <span>/</span>
          </div>

          <div id="zero">
            <span>0</span>
          </div>

          <div id="one">
            <span>1</span>
          </div>

          <div id="two">
            <span>2</span>
          </div>

          <div id="three">
            <span>3</span>
          </div>

          <div id="four">
            <span>4</span>
          </div>

          <div id="five">
            <span>5</span>
          </div>

          <div id="six">
            <span>6</span>
          </div>

          <div id="seven">
            <span>7</span>
          </div>

          <div id="eight">
            <span>8</span>
          </div>

          <div id="nine">
            <span>9</span>
          </div>

          <div id="decimal">
            <span>.</span>
          </div>

          <div id="equals">
            <span>=</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
