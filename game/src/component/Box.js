import React from 'react'
//선택하기 전 null 값을 사용하려면 가드를 사용해라 {props.item && props.item.img}
function Box(props) {
  console.log(props);
  return (
    <div className="box">
        <h1>{props.user}</h1>
        <img className="item-img" src={props.item && props.item.img}/>
        <h2>{props.result}</h2> 
    </div>
  )
}

export default Box