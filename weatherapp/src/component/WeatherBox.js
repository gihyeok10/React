import React from 'react'
//props안쓰고 이렇게 해도댐..!
const WeatherBox = ({ weather }) => {
  console.log("weather?:",weather);
  //3항 연산  weather ? .name 가능.
  return (
    <div className='weather-box'>
        <div>{weather?.name}</div>  
        <h2>{weather?.main.temp}C/{((weather?.main.temp)*1.8+32).toFixed(2)}F</h2>
        <h3>{weather?.weather[0].description}</h3>
    </div>
  )
}

export default WeatherBox