import React, { useEffect, useState } from "react";
import "./App.css";
import useStore from "./store";
export default function App() {
  const arr = useStore((state) => state.arr);
  const toggle = useStore((state) => state.switchPlayer);
  const click = useStore((state) => state.setVal);
  const player = useStore((state) => state.player);
  const [winner,setWinner] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const handleChange = (index) => {
    click(index);
    toggle();
  };

  useEffect(() => {
    check();
  }, [arr]);

  const check = () => {
    let possibleCombination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    possibleCombination.forEach((row) => {
      if (
        arr[row[0]] &&
        arr[row[0]] === arr[row[1]] &&
        arr[row[0]] === arr[row[2]]
      ) {
        setWinner(arr[row[0]])
        setGameOver(true);
      }
    });
  };
 
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="box"
            onClick={() => {
              handleChange(0);
            }}
          >
            {arr[0]}
          </div>
          <div
            className="box"
            onClick={() => {
              handleChange(1);
            }}
          >
            {arr[1]}
          </div>
          <div
            className="box"
            onClick={() => {
              handleChange(2);
            }}
          >
            {arr[2]}
          </div>
        </div>

        <div className="row">
          <div
            className="box"
            onClick={() => {
              handleChange(3);
            }}
          >
            {arr[3]}
          </div>
          <div
            className="box"
            onClick={() => {
              handleChange(4);
            }}
          >
            {arr[4]}
          </div>
          <div
            className="box"
            onClick={() => {
              handleChange(5);
            }}
          >
            {arr[5]}
          </div>
        </div>

        <div className="row">
          <div
            className="box"
            onClick={() => {
              handleChange(6);
            }}
          >
            {arr[6]}
          </div>
          <div
            className="box"
            onClick={() => {
              handleChange(7);
            }}
          >
            {arr[7]}
          </div>
          <div
            className="box"
            onClick={() => {
              handleChange(8);
            }}
          >
            {arr[8]}
          </div>
        </div>

        {gameOver && <><div>Game Over</div>
          <div>{winner} is Winner!!!</div></>}
      </div>
    </>
  );
}
