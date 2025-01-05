import './App.css';
import React, {useEffect} from "react";

function App() {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);


    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const resp = await fetch("http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=ee247d2704f870fa08b7f21fa030702e");
                const data = await resp.json();
                console.log(data);
                setData(data);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }

        }

        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!data) {
        return (
            <div className="App">
                <h1>muweather</h1>
                <p>No weather data available</p>
            </div>
        );
    }

    return (
        <div className="App">
            <h1>muweather</h1>
            <div className="main">
                <div className='col-1'>
                   main

                </div>
                <div className='col-2'>
                <p>city name : {data.city.name}</p>
                    <p>coordinates (lat): {data.city.coord.lat}</p>
                    <p>coordinates (lon): {data.city.coord.lon}</p>
                    <p>sunrise: {(new Date(data.city.sunrise * 1000)).toLocaleString()}</p>
                    <p>sunset: {(new Date(data.city.sunset*1000).toLocaleString())}</p>
                    <p> Today : {date}</p>
                    <p>{
                        data.list.map(item =>
                        <li>{ item.dt_txt } -- {Math.floor((Number(item.main.temp)-273.15)*9/5)+32} -- {item.weather[0].description}</li>)
                    }</p>
                </div>
            </div>

        </div>
    );
}

export default App;
