import React from 'react'
//카드 들이 가운데 있슴. 한줄에 4개씩 (화면 사이즈가 작아지면 한줄에 한개씩)
import { useNavigate } from 'react-router-dom'
const ProductCard = ({item}) => {  
    const navigate = useNavigate()
    const showDetail = () => {
        navigate(`/product/${item.id}`)
    }
  return (
    <div onClick={showDetail}>
        <img className='img-box' src={item?.img}/>
        <div>{item?.choice == true ? "Great Choice" : ""}</div>
        <div>{item?.title}</div>
        <div>{item?.price}</div>
        <div>{item?.new == true? "신제품" : ""}</div>
    </div>
  )
}

export default ProductCard