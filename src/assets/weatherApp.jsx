import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

function weatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city : "Jalandhar",
        humidity : 66,
        temp : 31.07,
        tempMin : 31.07,
        tempMax : 31.07,
        weather : "scattered clouds",
    });

    let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
    }


    return(
        <div>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}

export default weatherApp;