import { createSlice } from "@reduxjs/toolkit";
import wordList from "../words.json";

let randomNum = Math.floor(Math.random() * wordList.words.length);
const initialState = {
  board: [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  position: 0,
  row: 0,
  correctWord: wordList.words[randomNum].toUpperCase(),
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  //reducer là những gì mình muốn hành động với initialState
  reducers: {
    setBoard: (state, action) => {
      state.board = action.payload;
    },
    increasePosition: (state) => {
      state.position++;
    },
    decreasePosition: (state) => {
      state.position--;
    },
    incRow: (state) => {
      state.row++;
    },
  },
});

export const { setBoard, increasePosition, decreasePosition, incRow } =
  boardSlice.actions;
export default boardSlice.reducer;
