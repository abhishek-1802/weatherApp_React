import './SearchBox.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function SearchBox({updateInfo}){

    let [city, setCity] = useState("");

    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "c9aec974e9d97dd11c8b5ed6a02ad8d5";

    let getInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);

        let result = {
            city : city,
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
    };

    let handlechange = (evt)=>{
        setCity(evt.target.value);
    };

    let handlesubmit = async (evt) =>{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getInfo();
        updateInfo(newInfo);
    };


    return(
        <div className='SearchBox'>
            <form onSubmit={handlesubmit} > <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handlechange}/>
                    <br />
                    <br />
                    <Button variant="contained" type='submit' >Search</Button>
            </form>
            
        </div>
    );
}

export default SearchBox;
// export default result;