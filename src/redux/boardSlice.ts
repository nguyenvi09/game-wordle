import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    board: [ "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "" ],
    position: 0,
    row: 0,
    key: ""
};

export const boardSlice = createSlice({
    name: "board",
    initialState,
    //reducer là những gì mình muốn hành động với initialState
    reducers:{
        setBoard: (state, action) =>{
            state.board = action.payload;
        },
        increasePosition:(state) =>{
            state.position++;
        },
        decreasePosition:(state)=>{
            state.position--;
        },
        incRow:(state) => {
            state.row++
        },
        setKey: (state, action)=>{
            state.key =action.payload
        }
    }
});

export const {setBoard, increasePosition, decreasePosition, incRow, setKey} = boardSlice.actions;
export default boardSlice.reducer;