import './InfoBox.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function InfoBox({info}) {

    // let info = {
    //     city : "Jalandhar",
    //     feelslike : 36.61,
    //     humidity : 66,
    //     temp : 31.07,
    //     tempMin : 31.07,
    //     tempMax : 31.07,
    //     weather : "scattered clouds"
    // }
    const INIT_URL = "https://images.unsplash.com/photo-1579003593419-98f949b9398f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    return(
        <div className="InfoBox">
            
            <div className='cardcontainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={INIT_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}   >
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Temp Min = {info.tempMin}&deg;C</p>
                            <p>Temp Max = {info.tempMax}&deg;C</p>
                            <p>The weather has {info.weather} </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>

        </div>
    );

}

export default InfoBox