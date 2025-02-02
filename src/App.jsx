import { useState } from "react";

function App() {
  const [turn, setTurn] = useState([]);
  const [prev, setPrev] = useState("");
  const [winPat, setWinPat] = useState([]);
  const [win, setWin] = useState(false);
  const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const showWinner = () => {
    console.log(`Winner is ${prev === "O" ? "X" : "O"}`);
    setWin(!win);
  };

  const winCheck = (e) => {
    winPat[e] = true;

    // console.log(winPat,e,turn);
    for (let i = 0; i < winPattern.length; i++) {
      let first = "";
      let count = 0;
      if (turn[winPattern[i][0]] === undefined) {
        continue;
      } else {
        first = turn[winPattern[i][0]];
      }
      for (let j = 0; j < 3; j++) {
        if (first === turn[winPattern[i][j]]) {
          count++;
        }
      }
      if (count === 3) {
        showWinner();
      }
    }
  };

  const winSetCheck = (e) => {
    winPat[e] = true;
    setWinPat(winPat);
    winCheck(e);
  };

  const handleClick = (e) => {
    // console.log(e);
    // const newTuen=[...turn];
    // console.log(newTuen);
    if (prev === "" || prev === "O") {
      turn[e] = "X";
      // console.log(newTuen);
      setPrev("X");
      setTurn(turn);
    } else {
      turn[e] = "O";
      setPrev("O");
      setTurn(turn);
    }
    // setTurn(newTuen);
    console.log(turn, winPat);
    disableBtn(e);
    winSetCheck(e);
  };
  // let btn=document.getElementById(`btn${e}`);

  const disableBtn = (e) => {
    let btn = document.getElementById(`btn${e}`);
    btn.style.borderWidth = "0px";
    btn.disabled = true;
  };

  const restartGame = () => {
    setTurn([]);
    setWin(false);
    setPrev("");
    for (let i = 0; i < 9; i++) {
      const btn = document.getElementById(`btn${i}`);
      if (btn) {
        btn.disabled = false;
        btn.style.backgroundColor = "#50f4b3";
        btn.style.borderWidth = "2px";
        winPat[i] = false;
      }
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center relative h-[100vh] w-[100vw] bg-[#7be0ff]">
        <h1 className="heading text-5xl w-[25vw] text-center h-[8vh] flex justify-center items-center absolute top-12 mb-20 px-9 font-serif text-clip rounded-lg text-[#9552a4] border-4 border-[#af6fc1] hover:text-white hover:border-white hover:bg-[#9552a4]">
          Tic Tac Toe
        </h1>
        {!win && (
          <div className="h-[60vh] w-[25vw] absolute flex flex-wrap justify-center rounded-2xl items-center bg-red-800 bg-opacity-10">
            <button
              id="btn0"
              className="h-[12vh] w-[6vw] bg-[#50f4b3] mx-4 my-0 opacity-100 border-white rounded-xl text-5xl font-bold shadow-2xl border-2 hover:bg-[#6dfba8] text-[#5a6a9c]"
              type="button"
              onClick={() => handleClick(0)}
            >
              {turn[0]}
            </button>
            <button
              id="btn1"
              className="h-[12vh] w-[6vw] bg-[#50f4b3] mx-4 my-0 opacity-100 border-white rounded-xl text-5xl font-bold shadow-2xl border-2 hover:bg-[#6dfba8] text-[#5a6a9c]"
              type="button"
              onClick={() => handleClick(1)}
            >
              {turn[1]}
            </button>
            <button
              id="btn2"
              className="h-[12vh] w-[6vw] bg-[#50f4b3] mx-4 my-0 opacity-100 border-white rounded-xl text-5xl font-bold shadow-2xl border-2 hover:bg-[#6dfba8] text-[#5a6a9c]"
              type="button"
              onClick={() => handleClick(2)}
            >
              {turn[2]}
            </button>
            <button
              id="btn3"
              className="h-[12vh] w-[6vw] bg-[#50f4b3] mx-4 my-0 opacity-100 border-white rounded-xl text-5xl font-bold shadow-2xl border-2 hover:bg-[#6dfba8] text-[#5a6a9c]"
              type="button"
              onClick={() => handleClick(3)}
            >
              {turn[3]}
            </button>
            <button
              id="btn4"
              className="h-[12vh] w-[6vw] bg-[#50f4b3] mx-4 my-0 opacity-100 border-white rounded-xl text-5xl font-bold shadow-2xl border-2 hover:bg-[#6dfba8] text-[#5a6a9c]"
              type="button"
              onClick={() => handleClick(4)}
            >
              {turn[4]}
            </button>
            <button
              id="btn5"
              className="h-[12vh] w-[6vw] bg-[#50f4b3] mx-4 my-0 opacity-100 border-white rounded-xl text-5xl font-bold shadow-2xl border-2 hover:bg-[#6dfba8] text-[#5a6a9c]"
              type="button"
              onClick={() => handleClick(5)}
            >
              {turn[5]}
            </button>
            <button
              id="btn6"
              className="h-[12vh] w-[6vw] bg-[#50f4b3] mx-4 my-0 opacity-100 border-white rounded-xl text-5xl font-bold shadow-2xl border-2 hover:bg-[#6dfba8] text-[#5a6a9c]"
              type="button"
              onClick={() => handleClick(6)}
            >
              {turn[6]}
            </button>
            <button
              id="btn7"
              className="h-[12vh] w-[6vw] bg-[#50f4b3] mx-4 my-0 opacity-100 border-white rounded-xl text-5xl font-bold shadow-2xl border-2 hover:bg-[#6dfba8] text-[#5a6a9c]"
              type="button"
              onClick={() => handleClick(7)}
            >
              {turn[7]}
            </button>
            <button
              id="btn8"
              className="h-[12vh] w-[6vw] bg-[#50f4b3] mx-4 my-0 opacity-100 border-white rounded-xl text-5xl font-bold shadow-2xl border-2 hover:bg-[#6dfba8] text-[#5a6a9c]"
              type="button"
              onClick={() => handleClick(8)}
            >
              {turn[8]}
            </button>
          </div>
        )}
        {win && (
          <div className="text-5xl font-bold text-[#3d42d6] justify-center rounded-2xl items-center bg-black bg-opacity-5">
            Winner is : {prev}
          
          <button
          id="newGame"
          className="border-2 border-white h-[7vh] absolute right-[44vw] text-black bottom-12 w-[10vw] text-2xl font-semibold bg-[#59d6fc] rounded-lg hover:bg-[#05bff8] hover:text-white hover:border-black"
          onClick={restartGame}
        >New Game</button>
        </div>
        )}
        {!win && <button
          id="reStart"
          className="border-2 border-white h-[7vh] absolute  bottom-12 w-[10vw] text-2xl font-semibold bg-[#59d6fc] rounded-lg hover:bg-[#05bff8] hover:text-white hover:border-black "
          onClick={restartGame}
        >
          {"Restart"}
        </button>}
      </div>
    </div>
  );
}

export default App;
