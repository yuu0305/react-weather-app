const Results = ({results}) => {
    const { cityName, country, temprature, conditionText, icon } = results;
    // return内の cityNameのような
    return(
        // <h1>気象データ{country}</h1>
        <div>
            {cityName && <div className="results-city">{cityName}</div> }
            {country && <div className="results-country">{country}</div> }
            {temprature && <div className="results-temp">{temprature}<span>°C</span></div> }
            {conditionText && <div className="results-condition"><img src={icon} alt="icon"/><span>{conditionText}</span></div> }
        </div>
    );
};
export default Results;

// ここでは、Form.jsの情報をApp.js経由で受け取る