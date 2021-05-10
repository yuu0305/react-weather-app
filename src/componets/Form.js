import { useState } from  "react";
import axios from "axios";

// http://api.weatherapi.com/v1/current.json?key=23a9ae97d56d4409aa022703210505&q=Osaka&aqi=no

const Form = () =>{
    const [city,setCity] = useState("");
    const getWeather = (e) => {
        e.preventDefault();
        axios.get("http://api.weatherapi.com/v1/current.json?key=23a9ae97d56d4409aa022703210505&q=Osaka&aqi=no").then( res=> console.log(res))
    }
    return (
        <form>
            <input type="text" name="city" placeholder="都市名を入力" onChange={e => setCity(e.target.value)}/>
            <button type="submit"　onClick={getWeather} >Get  Weather</button>
        </form>
    );
};
export default Form;