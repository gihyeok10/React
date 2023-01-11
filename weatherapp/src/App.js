import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";

//apikey:a0394a63659b1eeb0bd0ad3d0aa64f86

//1. 앱이 실행되자마자 현재위치기반의 날씨가 보임
//2. 도시이름.섭씨,화씨, 날씨의 상태
//3. 5선택지 버튼 [현재,+ 다른 도시]
//4.버튼 클릭하면 도시별 날씨가 보임.
//5. 현재위치 버튼을 누르면 현재위치 기반의 날씨가 나옴.
//6. 로딩화면 구현. 
function App() {
  const [weather,setWeather] = useState(null);
  const cities=['paris','new york','tokyo','seoul']
  const [city,setCity] = useState('')
  const [loading,setLoading] = useState(false);
 
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat,lon)  //매개 변수로 값 전달...

    })

  }

  const getWeatherByCurrentLocation = async(lat,lon) => {
    let url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a0394a63659b1eeb0bd0ad3d0aa64f86&units=metric`;
    setLoading(true);
    let response = await fetch(url)
    let data = await response.json();
    console.log("data:",data);
    setWeather(data);
    setLoading(false);
  }

  const getWeatherByCity = async() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a0394a63659b1eeb0bd0ad3d0aa64f86&units=metric`;
    setLoading(true);
    let response = await fetch(url)
    let data = await response.json();
    console.log("data:",data);
    setWeather(data);
    setLoading(false);
  }
  
  useEffect(()=> {
    if(city == ""){
    getCurrentLocation();
    }
    else{
    getWeatherByCity();
    }
  },[city])

  const handleCityChange = (city) =>{
    if (city === "current"){
      setCity("")
    }
    else{setCity(city)}
  }

  
  return (
    <div>
    {loading ? <div className='container'>
    <ClipLoader
        color= "#f88c6b"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> </div>: <div className='container'>
      <WeatherBox weather={weather} ></WeatherBox>
      <WeatherButton cities={cities} setCity={setCity} handleCityChange={handleCityChange}></WeatherButton>
      </div>}
    </div>
  );
}

export default App;
