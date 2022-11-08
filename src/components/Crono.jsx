import React, { useState, useEffect } from "react";
import "./Crono.css";

const Crono = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else{
        clearInterval(interval);
    }
    return() => clearInterval(interval)    

  }, [timerOn]);
  return (
    <div className="crono">
      <h2>{time}</h2>

      {!timerOn && time === 0 && (
      <button className="ButtonTimmer" onClick={() => setTimerOn(true)}>Start</button>
      )}
      {!timerOn && time === 0 && (
      <button className="ButtonTimmer" onClick={() => setTimerOn(false)}>Stop</button>
      )}
      {!timerOn && time === 0 && (
      <button className="ButtonTimmer" onClick={() => setTimerOn(0)}>Reset</button>
      )}
      {!timerOn && time === 0 && (
      <button className="ButtonTimmer" onClick={() => setTimerOn(true)}>Resume</button>
      )}

        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>

    </div>
  );
};

export default Crono;
