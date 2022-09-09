import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import { increasePosition, setBoard } from '../../redux/boardSlice';
import { rootState } from '../interface'
import "./key.css"


interface IProps{
    letter: string,
};

const Key:React.FC<IProps> = ({letter}) => {
  const board = useSelector((state:rootState)=>state.board.board);
  const position = useSelector((state:rootState)=>state.board.position)

  const dispatch = useDispatch();

  const chooseLetter = () =>{
    if(position >= 30) return;
    const newBoard = [...board];
    newBoard[position] = letter;
    dispatch(setBoard(newBoard));
    dispatch(increasePosition())
  };

  return (
    <div className='letter' onClick={chooseLetter}>{letter}</div>
  )
};

export default Key;