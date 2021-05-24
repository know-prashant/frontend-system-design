import React, { useState, useRef } from "react";
import {
  countAnimate,
  CountSetInterval,
  CountSetTimeout,
} from "./CountMethods";

const App = () => {
  const [inputValue, setInputValue] = useState(0);
  const [duration, setDuration] = useState(0);
  const [start, setStart] = useState(false);
  const countRef = useRef();

  const basicReset = () => {
    setStart(false);
    countRef.current.innerHTML = "0";
  };

  const inputChangeHandler = (e) => {
    const { value } = e.target;
    setInputValue(value);
    basicReset();
  };

  const durationChangeHandler = (e) => {
    const { value } = e.target;
    setDuration(value);
    basicReset();
  };

  const startHandler = () => {
    setStart(true);
    countAnimate(
      countRef.current,
      0,
      parseInt(inputValue),
      parseInt(duration) * 1000
    );
  };

  const resetHandler = () => {
    window.location.reload();
  };

  return (
    <main style={{ width: "500px", margin: "50px auto" }}>
      <section className="input-area">
        <div>
          <div>
            <label>Number:</label>{" "}
            <input
              type="number"
              value={inputValue}
              onChange={inputChangeHandler}
            />
          </div>
          <div>
            <label>Duration:</label>{" "}
            <input
              type="number"
              value={duration}
              onChange={durationChangeHandler}
            />
          </div>
        </div>
        <br />
        <div>
          <button onClick={startHandler}>start</button>{" "}
          <button onClick={resetHandler}>reset</button>
        </div>
      </section>
      <br />
      <section className="result-area">
        <div>
          SetTimeout:{" "}
          {(start && (
            <CountSetTimeout
              label={"count"}
              number={inputValue}
              duration={parseInt(duration)}
            />
          )) ||
            0}
        </div>
        <div>
          SetInterval:{" "}
          {(start && (
            <CountSetInterval
              label={"count"}
              number={inputValue}
              duration={parseInt(duration)}
            />
          )) ||
            0}
        </div>
        <div>
          Animate: <span ref={countRef}>0</span>
        </div>
      </section>
    </main>
  );
};

export default App;
