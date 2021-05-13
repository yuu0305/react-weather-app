// http://api.weatherapi.com/v1/current.json?key=23a9ae97d56d4409aa022703210505&q=Osaka&aqi=no

const Form = (props) =>{

    return (
        <form>
            <input type="text" name="city" placeholder="都市名を入力" onChange={e => props.setCity(e.target.value)}/>
            <button type="submit"　onClick={props.getWeather} >Get  Weather</button>
        </form>
    );
};
export default Form;