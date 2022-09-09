import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    board: [ "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "",
    "", "", "", "", "" ],
    position: 0
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
        }
    }
});

export const {setBoard, increasePosition, decreasePosition} = boardSlice.actions;
export default boardSlice.reducer;