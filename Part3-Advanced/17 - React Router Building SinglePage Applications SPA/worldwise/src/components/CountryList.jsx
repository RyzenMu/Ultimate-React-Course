import styles from './CountryList.module.css'
import Spinner from "./Spinner.jsx";
import CountryItem from "./CountryItem.jsx";
import Message from "./Message.jsx";
import {useCities} from "../contexts/CitiesContext.jsx";

function CountryList() {
    const {cities, loading} = useCities()
    console.log(cities);
    if (loading) return <Spinner />

    if (!cities.length) return <Message message='Add your city by clicking  on a city on the map'/>

    const countries = cities.reduce((arr, city) =>{
        if(!arr.map(el=>el.country).includes(city.country)){
            return [...arr, {country: city.country, emoji: city.emoji}];
        }else return arr;

        }, [])
    return (
        <ul className={styles.countryList}>
            {countries.map((country, i)=> <CountryItem country={country} key={i} />)}
        </ul>
    );
}

export default CountryList;