import React from 'react'
import "./square.css"


interface IProps{
    val: string,
    squareIndex: number
}
const Square:React.FC<IProps> = ({val, squareIndex}) => {
  return (
    <div className='square'>{val}</div>
  )
}

export default Square