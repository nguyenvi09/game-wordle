import React from 'react'
import Keyboard from '../Keyboard/Keyboard'
import Square from '../Square/Square'
import './board.css'

interface IProps{
    board: string[]
}

const Board:React.FC<IProps> = ({board}) => {
  return (
    <>
        <div className='board'>
            {board.map((square, index)=>{
                //val: để lấy giá trị trong square, vd nhập a thì in ra chữ a
                return(<Square val={square} squareIndex={index} key={index}/>)
            })}
        </div>
        <div className="keyboard">
            <Keyboard/>
        </div>
    </>
  )
}

export default Board