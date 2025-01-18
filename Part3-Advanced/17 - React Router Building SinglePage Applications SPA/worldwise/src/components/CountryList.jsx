import styles from './CountryList.module.css'
import Spinner from "./Spinner.jsx";
import CountryItem from "./CountryItem.jsx";
import Message from "./Message.jsx";
/* eslint-disable react/prop-types */


function CountryList({loading, countries}) {
    if (loading) return <Spinner />

    if (!countries || countries.length <1) return <Message message='Add your city by clicking  on a city on the map'/>
    return (
        <ul className={styles.countryList}>
            {countries.map((city, i)=> <CountryItem city={city} key={i} />)}
        </ul>
    );
}

export default CountryList;