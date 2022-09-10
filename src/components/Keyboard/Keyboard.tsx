import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./keyboard.css";
import Key from "../Key/Key";
import { rootState } from "../interface";
import { decreasePosition, incRow, setBoard } from "../../redux/boardSlice";

const Keyboard: React.FC = () => {
  const position = useSelector((state: rootState) => state.board.position);
  const board = useSelector((state: rootState) => state.board.board);
  const row = useSelector((state: rootState) => state.board.row);
  const dispatch = useDispatch();
  // ta cách từng chữ cái ra để dùng split chuyển thành mảng -> loop
  const rows: string[] = [
    "q w e r t y u i o p",
    "a s d f g h j k l",
    "z x c v b n m",
  ];

  const clickBack = () => {
    if (Math.floor((position - 1) / 5) < row) return;
    const newBoard = [...board];
    newBoard[position - 1] = "";
    dispatch(decreasePosition());
    dispatch(setBoard(newBoard));
  };

  const clickEnter = () => {
    if (position % 5 === 0 && position !== 0) {
      dispatch(incRow());
    }
  };

  return (
    <div className="keyboard-container">
      {rows.map((row, index) => {
        return (
          <div className="row" key={index}>
            {index === 2 && (
              <span className="letter-row" onClick={clickEnter}>
                Enter
              </span>
            )}
            {row.split(" ").map((letter, index) => {
              return (
                <div className="letter-row" key={index}>
                  <Key letter={letter.toUpperCase()} />
                  {letter === "m" && <span onClick={clickBack}>Back</span>}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Keyboard;
