const Results = (props) => {
    return(
        // <h1>気象データ{props.results.country}</h1>
        <div>
            {props.results.cityName && <div>{props.results.cityName}</div> }
            {props.results.country && <div>{props.results.country}</div> }
            {props.results.temprature && <div>{props.results.temprature}<span>°C</span></div> }
            {props.results.conditionText && <div><img src={props.results.icon} alt="icon"/><span>{props.results.conditionText}</span></div> }
        </div>
    );
};
export default Results;