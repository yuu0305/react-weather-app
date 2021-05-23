import { useState } from  "react";
import axios from "axios";
import Title from'./componets/Title';
import Form from'./componets/Form';
import Results from'./componets/Results';
import './App.css';


function App() {
  // const [count, setCount] = useState(0);
  // debugger;
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
      // 今回は fetch() ではなく、axiosでapiコール
      axios.get(`https://api.weatherapi.com/v1/current.json?key=23a9ae97d56d4409aa022703210505&q=${city}&aqi=no`).then( res=> {
        // console.log(res)
        setResults({
          country: res.data.location.country,
          cityName: res.data.location.name,
          temperature: res.data.temp_c,
          conditionText: res.data.current.condition.text,
          icon:res.data.current.condition.icon
      })
    })
    // 該当の都市が存在しない場合、
    .catch(err =>alert("エラーが発生しました。リロードして再度お試しください"))
  }

  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form getWeather={getWeather} city={city} setCity={setCity} />
        <Results results={results} />
      </div>

      {/* <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div> */}
    </div>
  );
}

export default App;
