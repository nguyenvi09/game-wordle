import React from 'react'
import "./heading.css"

//khai báo type dữ liệu cho prop
// ? optional
interface IProps{
    type?: string,
    text?: string
}

// :React.FC  function component
// thêm type <IProps> vào để sử dụng
const Heading:React.FC<IProps> = ({type, text}) => {
  return (
    <p className={`heading-${type}`}>{text}</p>
  )
}

export default Heading