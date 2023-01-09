import React from 'react'

function Box(props) {

  return (
    <div className="box">
        <h1>{props.user}</h1>
        <img className="item-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSPEAHC1qKLD8xMNYUEboms8MAbp1sbwqPXQ&usqp=CAU"/>
        <h2>{props.result}</h2>   
    </div>
  )
}

export default Box