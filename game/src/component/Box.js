import React from 'react'

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