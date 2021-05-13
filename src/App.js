import { useState } from  "react";
import axios from "axios";
import Title from'./componets/Title';
import Form from'./componets/Form';
import Results from'./componets/Results';
import './App.css';


function App() {
  const [city,setCity] = useState("");
  const [results,setResults] = useState({
    country:"",
    cityName:"",
    temprature:"",
    conditionText:"",
    icon:""
  });

  const getWeather = (e) => {
      e.preventDefault();
      axios.get("http://api.weatherapi.com/v1/current.json?key=23a9ae97d56d4409aa022703210505&q=Osaka&aqi=no").then( res=> {
        setResults({
          country: res.data.location.country,
          cityName: res.data.location.name,
          temperature: res.data.temp_c,
          conditionText: res.data.current.condition.text,
          icon:res.data.current.condition.icon
      })
    })
  }

  return (
    <div className="test">
      <Title />
      <Form　setCity={setCity} getWeather={getWeather} />
      <Results　results={results} />
    </div>
  );
}

export default App;
