import { useState } from  "react";

// http://api.weatherapi.com/v1/current.json?key=23a9ae97d56d4409aa022703210505&q=Osaka&aqi=no

const Form = () =>{
    const [city,setCity] = useState("");
    return (
        <form>
            <input type="text" name="city" placeholder="都市名を入力" onChange={e => setCity(e.target.value)}/>
            {/* {city} */}
            <button type="submit">Get  Weather</button>
        </form>
    );
};
export default Form;