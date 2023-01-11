import React from 'react'
import { Button } from 'react-bootstrap';
//자식은 어떻게 부모한테 props를 넘겨줄수있나?
//부모가 모든 state같은거를 다 가지고 있어. 그리고 뿌려줌.
//업데이트 함수도 app.js에 가지고있음.

const WeatherButton = ({cities,setCity,handleCityChange}) => {
  console.log(cities);
  return (
    <div className='weather-button'>
        <Button variant="warning" onClick={()=> handleCityChange("current")}>Current Location</Button>

        {cities.map((item,index)=> (
          <Button variant="warning" key={index} onClick={() => setCity(item)}>
          {item}
          </Button>
        ))}

    </div>
  )
}
//map 어래이 하나씩 추출
export default WeatherButton