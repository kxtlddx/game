import React, { useState } from "react";
import Cards from "./Cards";

const Main = () => {
  const [turns, setTurns] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isLost, setIsLost] = useState(false);

  const handleFinish = () => {
    setIsFinished(true);
  };

  const handleLose = () => {
    setIsLost(true);
  };

  return (
    <div className="main">
      {isFinished ? (
        <>
          <div className="h1">Congratulations! You won in {turns} tutns!</div>
          <button className="new" onClick={() => window.location.reload()}>Play again</button>
        </>
      ) : isLost ? (
        <>
          <div className="h1">Sorry, you lost.</div>
          <button className="new" onClick={() => window.location.reload()}>Try again</button>
        </>
      ) : (
        <>
          <div className="h1">React memory game</div>
          <Cards
            setTurns={setTurns}
            onFinish={handleFinish}
            onLose={handleLose}
          />
          <div className="h1">Turns: {turns}</div>
        </>
      )}
    </div>
  );
};

export default Main;
