import React,{ useState } from 'react'
import axios from "axios"
let baseUrl = ''
if(window.location.href === "http"){
  baseUrl = "http://localhost:5001/"
}
function App() {
  const [weatherData, setWeather] = useState(null)
  const [cityName, setCityName] = useState('')
  const weahther =() =>{
    axios
    .get(`${baseUrl}weather`)
    .then((res)=>{
        setWeather(res.data)
        console.log(res.data);
    })
    .catch((err)=>{
       console.log(err);
    })
  }
  return (
    <>
    <input type='text' placeholder='enter city name' onChange={(e)=>setCityName(e.target.value)}/>
    <button onClick={weahther}>to get weather</button>
    {(weatherData === null )?null:(
      <div>
        Height : {Math.round(weatherData.height)}
        <br/>
        Wight : {Math.round(weatherData.width)}
        <br/>
        TIme : {weatherData.time}
      </div>
    )}
    </>
  );
}

export default App;
